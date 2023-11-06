package v1

import (
	"go-gon-crud/app/controller"
	"go-gon-crud/app/repository"
	"go-gon-crud/app/service"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func AuthRouter(router *gin.RouterGroup, db *gorm.DB) {

	authRepository := repository.NewAuthRepositoryDB(db)
	authService := service.NewAuthService(authRepository)
	authController := controller.NewAuthController(authService)
	router.POST("/login", authController.Login)
	router.POST("/register", authController.Register)

}
