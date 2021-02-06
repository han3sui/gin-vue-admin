package lib

import (
	"fmt"
	"github.com/spf13/viper"
	"os"
)

var Config *viper.Viper

func init() {
	var err error
	_, err = os.Stat("config.toml")
	if err != nil {
		panic(fmt.Sprintf("未找到配置文件：%v", err.Error()))
	}
	viper.SetConfigName("config")
	viper.SetConfigType("toml")
	viper.AddConfigPath("./")
	err = viper.ReadInConfig()
	if err != nil {
		panic(fmt.Sprintf("配置文件加载失败：%v", err.Error()))
	}
	Config = viper.GetViper()
}
