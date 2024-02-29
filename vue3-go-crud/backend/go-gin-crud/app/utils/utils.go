package utils

import (
	"fmt"
	"go-gon-crud/app/model"
	"go-gon-crud/app/utils/errs"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"golang.org/x/crypto/bcrypt"
)

func ResponseDataList(c *gin.Context, data interface{}, pagination model.PaginationResponse) {
	c.JSON(http.StatusOK, gin.H{
		"data":       data,
		"pagination": pagination,
	})
}
func ResponseData(c *gin.Context, data interface{}) {
	c.JSON(http.StatusOK, gin.H{
		"data": data,
	})
}

func HashPassword(password string) (string, error) {
	hashPassword, err := bcrypt.GenerateFromPassword([]byte(password), 10)
	if err != nil {
		return "", err
	}
	return string(hashPassword), nil
}
func HandleError(c *gin.Context, err error) {
	switch e := err.(type) {
	case errs.AppError:
		c.JSON(e.Code, gin.H{
			"error": e,
		})
		break
	case error:
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err.Error(),
		})
		break
	}
}

func HandleValidationError(c *gin.Context, err error) {
	validErr := []model.ValidatorErr{}
	for _, err := range err.(validator.ValidationErrors) {
		validErr = append(validErr, model.ValidatorErr{
			Field:   err.Field(),
			Value:   err.Value(),
			Tag:     err.Tag(),
			Type:    fmt.Sprintf("%v", err.Type()),
			Param:   err.Param(),
			Message: err.Error(),
		})

	}
	response := model.ErrorWithValidator{
		Code:         http.StatusBadRequest,
		Message:      err.Error(),
		ValidatorErr: validErr,
	}
	c.JSON(http.StatusBadRequest, gin.H{
		"error": response,
	})

}

func IsEmptyString(s string) bool {
	return strings.TrimSpace(s) == ""
}

func GetTotalPage(count, pageSize int) int {
	totalPage := (count / pageSize)
	if (count % pageSize) > 0 {
		totalPage += 1
	}
	if pageSize == 1 {
		totalPage = count
	}
	return totalPage
}
