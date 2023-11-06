package model

import (
	"github.com/dgrijalva/jwt-go"
	"gorm.io/gorm/logger"
)

type SqlLogger struct {
	logger.Interface
}
type tokenClaims struct {
	Id string `json:"id"`
	jwt.StandardClaims
}
type Pagination struct {
	Page     int `json:"page"`
	PageSize int `json:"pageSize"`
	// Total    int `json:"total"`
}
type PaginationResponse struct {
	RecordPerPage int `json:"recordPerPage"`
	CurrentPage   int `json:"currentPage"`
	TotalPage     int `json:"totalPage"`
	TotalRecord   int `json:"totalRecord"`
}
type ValidatorErr struct {
	Field   string      `json:"field"`
	Value   interface{} `json:"value"`
	Tag     string      `json:"tag"`
	Param   string      `json:"param"`
	Type    string      `json:"type"`
	Message string      `json:"message"`
}
