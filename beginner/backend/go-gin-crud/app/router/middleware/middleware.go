package middleware

import (
	"fmt"
	"go-gon-crud/app/model"
	"go-gon-crud/app/utils"
	"go-gon-crud/app/utils/errs"
	"net/http"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go/v4"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func Authorize() gin.HandlerFunc {

	return func(c *gin.Context) {

		const BEARER_SCHEMA = "Bearer "
		authHeader := c.GetHeader("Authorization")
		if len(strings.Split(authHeader, " ")) != 2 || utils.IsEmptyString(authHeader) {
			unauthorized(c)
			return
		}
		tokenString := authHeader[len(BEARER_SCHEMA):]
		if utils.IsEmptyString(tokenString) {
			unauthorized(c)
			return
		}
		err := verifyToken(tokenString)
		if err != nil {
			unauthorized(c)
			return
		}

		// claims, err := getEncryptToken(tokenString)
		// fmt.Println(claims.Id)
		// if err != nil {
		// 	c.JSON(http.StatusUnauthorized, gin.H{
		// 		"message": "Unauthorized",
		// 	})
		// 	c.Abort()
		// 	return
		// }
		c.Next()
	}
}
func verifyToken(tokenString string) error {
	_, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errs.New(fmt.Sprintf("Unexpected signing method: %v", token.Header["alg"]))
		}
		return []byte(viper.GetString("app.jwtSecret")), nil
	})
	if err != nil {
		return err
	}
	return nil
}
func getEncryptToken(tokenString string) (model.ClaimsToken, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errs.New(fmt.Sprintf("Unexpected signing method: %v", token.Header["alg"]))
		}

		return []byte(viper.GetString("app.jwtSecret")), nil
	})
	if err != nil {
		return model.ClaimsToken{}, errs.New("Unauthorized")
	}
	if claims, ok := token.Claims.(jwt.MapClaims); ok {
		return model.ClaimsToken{
			Id:  fmt.Sprintf("%v", claims["userId"]),
			Exp: getClaimsDate(claims["exp"].(float64)),
			Iat: getClaimsDate(claims["iat"].(float64)),
		}, nil
	}
	return model.ClaimsToken{}, errs.New("Unauthorized")
}
func getClaimsDate(item float64) time.Time {
	return time.Unix(int64(item), 0)
}

func unauthorized(c *gin.Context) {
	c.JSON(http.StatusUnauthorized, gin.H{
		"message": "Unauthorized",
	})
	c.Abort()
	return
}
