package v1

import (
	"go-gon-crud/app/controller"
	"go-gon-crud/app/repository"
	"go-gon-crud/app/service"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func CustomerRouter(router *gin.RouterGroup, db *gorm.DB) {

	customerRepository := repository.NewCustomerRepositoryDB(db)
	customerService := service.NewCustomerService(customerRepository)
	customerController := controller.NewCustomerController(customerService)
	router.GET("/customer", customerController.GetCustomers)
	router.GET("/customer/:id", customerController.GetCustomer)
	router.POST("/customer", customerController.CreateCustomer)
	router.PUT("/customer/:id", customerController.UpdateCustomer)
	router.DELETE("/customer/:id", customerController.DeleteCustomer)

}
