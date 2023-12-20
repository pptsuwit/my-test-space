package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Email    string `gorm:"type:varchar(50);unique;not null"`
	Password string `gorm:"type:varchar(200);unique;not null"`
	Name     string `gorm:"type:varchar(50);not null"`
	Phone    string `gorm:"type:varchar(50);unique;not null"`
}
type UserResponse struct {
	Email string `json:"email" binding:"required"`
	Name  string `json:"name" binding:"required"`
	Phone string `json:"phone" binding:"required"`
}
