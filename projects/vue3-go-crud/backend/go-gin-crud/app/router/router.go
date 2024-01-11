package router

import (
	"go-gon-crud/app/router/middleware"
	v1 "go-gon-crud/app/router/v1"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func InitRouter(db *gorm.DB) *gin.Engine {
	router := gin.Default()
	// router.Use(cors.Default())
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		AllowHeaders:     []string{"Origin,Content-Type,Authorization,Accept"},
		AllowCredentials: true,
	}))

	apiVersion1 := router.Group("/api/v1")
	{
		v1.AuthRouter(apiVersion1, db)
		apiVersion1.Use(middleware.Authorize())
		{

			v1.CustomerRouter(apiVersion1, db)

			apiVersion1.GET("/abouts", func(c *gin.Context) {
				c.JSON(http.StatusOK, gin.H{
					"message": "hello world",
				})
			})
		}

	}
	return router
}
