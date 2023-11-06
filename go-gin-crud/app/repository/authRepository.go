package repository

import (
	"go-gon-crud/app/model"
	"strconv"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/spf13/viper"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type authRepository struct {
	db *gorm.DB
}
type AuthRepository interface {
	Login(*model.Login) (*model.LoginResponse, error)
	Register(*model.Register) (*model.UserResponse, error)
}

func NewAuthRepositoryDB(db *gorm.DB) authRepository {
	return authRepository{db: db}
}
func (r authRepository) Login(login *model.Login) (*model.LoginResponse, error) {
	entity := model.User{}
	tx := r.db.Where("email = ?", login.Email).First(&entity)
	if tx.Error != nil {
		return nil, tx.Error
	}

	err := bcrypt.CompareHashAndPassword([]byte(login.Password), []byte(entity.Password))

	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		return nil, err
	}

	token, err := generateToken(entity.ID)
	response := model.LoginResponse{
		Email: entity.Email,
		Token: token,
	}
	return &response, nil
}
func (r authRepository) Register(data *model.Register) (*model.UserResponse, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(data.Password), bcrypt.DefaultCost)
	if err != nil {
		return nil, err
	}
	entity := model.User{
		Name:     data.Name,
		Phone:    data.Phone,
		Email:    data.Email,
		Password: string(hashedPassword),
	}
	tx := r.db.Create(&entity)
	if tx.Error != nil {
		return nil, tx.Error
	}

	response := model.UserResponse{
		Email: entity.Email,
		Name:  entity.Name,
		Phone: entity.Phone,
	}
	return &response, nil
}

func generateToken(id uint) (string, error) {
	tokenLifeTimeHour, err := strconv.Atoi(viper.GetString("app.tokenLiftHour"))
	if err != nil {
		return "", err
	}

	claims := jwt.MapClaims{
		"exp":    time.Now().Add(time.Hour * time.Duration(tokenLifeTimeHour)).Unix(),
		"iat":    time.Now().Unix(),
		"userId": id,
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	return token.SignedString([]byte(viper.GetString("app.jwtSecret")))

}
