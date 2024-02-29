package model

import (
	"time"

	"gorm.io/gorm"
)

type CustomerResponseWithPagination struct {
	Customer   []CustomerResponse `json:"data"`
	Pagination PaginationResponse `json:"pagination"`
}
type CustomerResponse struct {
	ID      uint   `json:"customerId"`
	Name    string `json:"name"`
	Address string `json:"address"`
	Phone   string `json:"phone"`
	Email   string `json:"email"`

	GenderId uint   `json:"genderId"`
	Gender   Gender `json:"genders"`

	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}
type CustomerRequest struct {
	Name    string `json:"name" validate:"required"`
	Address string `json:"address" `
	Phone   string `json:"phone" validate:"required"`
	Email   string `json:"email" validate:"required" valid:"email"`

	GenderId uint `json:"genderId" validate:"required"`
}
type Gender struct {
	ID   uint   `json:"id"`
	Name string `json:"name" gorm:"unique;size(10)"`
}
type Customer struct {
	gorm.Model
	Name    string `gorm:"type:varchar(50);not null"`
	Address string `gorm:"type:varchar(50);"`
	Phone   string `gorm:"type:varchar(50);unique;not null"`
	Email   string `gorm:"type:varchar(50);unique;not null"`

	GenderId uint
	Gender   Gender
}
