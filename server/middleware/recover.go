package middleware

import (
	"github.com/gin-gonic/gin"
	"time"
)

type ErrorInfo struct {
	Code      int    `json:"code"`
	Message   string `json:"message"`
	Request   string `json:"request"`
	Timestamp int64  `json:"timestamp"`
}

func Recover() gin.HandlerFunc {
	return func(c *gin.Context) {
		defer func() {
			if err := recover(); err != nil {
				c.AbortWithStatusJSON(500, ErrorInfo{
					Code:      500,
					Message:   "系统位置错误",
					Request:   c.Request.Method + " " + c.Request.URL.Path,
					Timestamp: time.Now().Unix(),
				})
			}
		}()
		c.Next()
	}
}
