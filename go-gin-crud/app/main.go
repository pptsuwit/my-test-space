package main

import (
	"fmt"
	"go-gon-crud/app/config"
	"go-gon-crud/app/config/database"
	"go-gon-crud/app/config/logs"
	"go-gon-crud/app/router"

	"github.com/spf13/viper"
	"gorm.io/gorm"
)

var db *gorm.DB

func main() {
	config.InitConfig()
	config.InitTimeZone()
	logs.InitLogs()
	db = database.New(db)

	router := router.InitRouter(db)
	router.Run(fmt.Sprintf(":%v", viper.GetString("app.port")))
}
