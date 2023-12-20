package controller

import (
	"go-gon-crud/app/model"
	"go-gon-crud/app/service"
	"go-gon-crud/app/utils"
	"go-gon-crud/app/utils/errs"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

type authController struct {
	services service.AuthService
}

func NewAuthController(customerService service.AuthService) authController {
	return authController{
		services: customerService,
	}
}

func (h authController) Login(c *gin.Context) {
	var request model.Login

	if err := c.ShouldBindJSON(&request); err != nil {
		utils.HandleError(c, errs.NewValidationError(err.Error()))
		return
	}
	validate := validator.New()
	err := validate.Struct(model.Login{
		Email:    request.Email,
		Password: request.Password,
	})
	if err != nil {
		utils.HandleValidationError(c, err)
		return
	}
	data, err := h.services.Login(&request)
	if err != nil {
		utils.HandleError(c, errs.NewValidationError(err.Error()))
		return
	}
	utils.ResponseData(c, data)
}

func (h authController) Register(c *gin.Context) {
	var request model.Register

	if err := c.ShouldBindJSON(&request); err != nil {
		utils.HandleError(c, errs.NewValidationError(err.Error()))
		return
	}
	validate := validator.New()
	err := validate.Struct(model.Register{
		Email:    request.Email,
		Password: request.Password,
		Name:     request.Name,
		Phone:    request.Phone,
	})
	if err != nil {
		utils.HandleValidationError(c, err)
		return
	}
	data, err := h.services.Register(&request)
	if err != nil {
		utils.HandleError(c, errs.NewValidationError(err.Error()))
		return
	}
	utils.ResponseData(c, data)
}
