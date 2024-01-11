package controller

import (
	"errors"
	"go-gon-crud/app/model"
	"go-gon-crud/app/service"
	"go-gon-crud/app/utils"
	"go-gon-crud/app/utils/errs"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"gorm.io/gorm"
)

type customerController struct {
	services service.CustomerService
}

func NewCustomerController(customerService service.CustomerService) customerController {
	return customerController{
		services: customerService,
	}
}

func (h customerController) GetCustomers(c *gin.Context) {
	page, err := strconv.Atoi(c.Query("page"))
	if err != nil {
		page = 0
	}
	if page > 0 {
		page = page - 1
	}

	pageSize, err := strconv.Atoi(c.Query("pageSize"))
	if err != nil {
		pageSize = 10
	}

	pagination := model.Pagination{
		Page:     page,
		PageSize: pageSize,
	}
	data, err := h.services.GetCustomers(pagination)
	if err != nil {
		utils.HandleError(c, errs.NewStatusInternalServerError("Something went wrong. Please try again later"))
		return
	}

	utils.ResponseDataList(c, data.Customer, data.Pagination)
}

func (h customerController) GetCustomer(c *gin.Context) {

	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		utils.HandleError(c, errs.NewValidationError("Invalid Id"))
		return
	}
	data, err := h.services.GetCustomer(id)
	if err != nil {
		utils.HandleError(c, errs.NewNotFoundError(err.Error()))
		return
	}
	utils.ResponseData(c, data)
}

func (h customerController) CreateCustomer(c *gin.Context) {
	var customerRequest model.CustomerRequest

	if err := c.ShouldBindJSON(&customerRequest); err != nil {
		utils.HandleError(c, errs.NewValidationError(err.Error()))
		return
	}
	validate := validator.New()

	err := validate.Struct(model.CustomerRequest{
		Name:     customerRequest.Name,
		Address:  customerRequest.Address,
		Phone:    customerRequest.Phone,
		Email:    customerRequest.Email,
		GenderId: customerRequest.GenderId,
	})
	if err != nil {
		utils.HandleError(c, errs.New(err.Error()))
		return
	}
	data, err := h.services.CreateCustomer(&customerRequest)
	if err != nil {
		if errors.Is(err, gorm.ErrDuplicatedKey) {
			utils.HandleError(c, errs.NewValidationError(err.Error()))
			return
		}

		utils.HandleError(c, errs.NewValidationError(err.Error()))
		return
	}
	utils.ResponseData(c, data)
}

func (h customerController) UpdateCustomer(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		utils.HandleError(c, errs.NewValidationError("Invalid Id"))
		return
	}
	var customerRequest model.CustomerRequest
	if err := c.ShouldBindJSON(&customerRequest); err != nil {
		utils.HandleError(c, errs.NewValidationError(err.Error()))
		return
	}
	data, err := h.services.UpdateCustomer(id, &customerRequest)
	if err != nil {
		utils.HandleError(c, errs.NewValidationError(err.Error()))
		return
	}
	utils.ResponseData(c, data)
}
func (h customerController) DeleteCustomer(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		utils.HandleError(c, errs.NewValidationError("Invalid Id"))
		return
	}
	err = h.services.DeleteCustomer(id)
	if err != nil {
		utils.HandleError(c, errs.NewValidationError(err.Error()))
		return
	}
	utils.ResponseData(c, nil)
}
