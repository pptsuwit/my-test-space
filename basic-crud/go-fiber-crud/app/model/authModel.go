package model

import "time"

type Login struct {
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=6,max=10"`
}

type LoginResponse struct {
	Email string `json:"email"`
	Token string `json:"token"`
}

type Register struct {
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=6"`
	Name     string `json:"name" validate:"required"`
	Phone    string `json:"phone" validate:"required,len=10,numeric"`
}

type ClaimsToken struct {
	Id  string    `json:"userId"`
	Exp time.Time `json:"exp"`
	Iat time.Time `json:"iat"`
}
