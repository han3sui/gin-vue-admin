<template>
  <div class="container">
    <div class="header">
      <h1>后台登录</h1>
    </div>
    <div class="body">
      <el-form>
        <el-form-item>
          <el-input size="medium" placeholder="请输入用户名" suffix-icon="el-icon-user"/>
        </el-form-item>
        <el-form-item>
          <el-input size="medium" placeholder="请输入密码" suffix-icon="el-icon-lock"/>
        </el-form-item>
        <el-form-item class="captcha-wrapper">
          <el-input size="medium" placeholder="请输入验证码"/>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABQCAMAAAAQlwhOAAAA81BMVEUAAABJLW50WJlfQ4RSNndkSImSdrdQNHVoTI1wVJWskNGjh8hoTI08IGFtUZJ7X6BcQIGTd7hMMHE7H2CQdLU4HF1OMnMzF1h1WZplSYqOcrNaPn+dgcIcAEF7X6BQNHVdQYIxFVZsUJF/Y6Q/I2RyVpeghMU4HF1xVZZpTY5hRYZdQYJPM3R+YqNqTo+Ha6yqjs+cgMGafr+skNGihsccAEGni8xKLm8qDk9uUpNgRIVsUJGdgcKkiMkyFldMMHFjR4hjR4g+ImNHK2wrD1BfQ4R7X6Cni8xoTI2QdLVxVZaNcbKKbq+rj9A1GVppTY6misv7uCi2AAAAAXRSTlMAQObYZgAABvlJREFUeJzsW1tLI0sQ7hJZBJGj5EEQotEQxERY0AfFyxL1QdD4///OIdO3qurqy8z0JK7sdzhuZvpS9U1116UnUf/QEw9tOgM0f2A4dQbHw0MpY2iIguX8rUh/tehbyLfhZymbi27KDYCvrzTj+/ZTguVpycLIPIRt4JnfyPC9v2+1d8XlOxqNtrabn58x4z9in3t+0WLvyst3tMU1Tfj+kRhroxIwvuPI3GCXcvNf0PgNdnKBhQWMxzJjsP+AZn4it/8NeKKXIl9AQWi5Zn1yEjKubOPHqrN5PD09Zft48ypYLpdr3pxv06km48fHwRgnW8EZD8xiXmrigDs025ps5FFvvYbimwIYKnY1g0s7bBzSt8EmX87GTbD629AwccbE5nN3gYAw3praeezJtwEtUaCpBTMw5b0JlSV1iz3I3l7I2BgXkCHJfPhR+AFrLCvo3gWBigkIfPHOVGHMkQypBzQ+vLvanWEXWrGZJ9JoP5yREFeusXC5zPZIPEvrRArFTyaIMdjRaGwBYZt8bifL9H6ziDJMgIw04SfeXyJlPduQFo7OjUNFAeUx4usDb0qw1AhzNfAxSHRiGz+Rtw36rPxHXzEACrtRqXIjwHw+B0UG02ykCqKMwecLoIQAuVoZxs+oYnCrMsUXzQW0YU7vA/KdlUhH61AkgSZMHivdiZwauKeUUpA4b5dFU11s3uUDXDXKCd1WXkNmYVAu8ijCl3+QJKLwrD+P3SoK+/nHXWtfC8/OlG5u0SruSLxH4ylywXEz5wvj8diGbSBqIb8Zs/BhS7ZWT3LtivOVqKZdiOBjF+mCc+YIX79VNWNbKwkdAXUMJzw87MI4WC1BcY73MOCQ5TSZOn9AykBJGPNUUfvxFS6unU4WVvlgD0F9Y72N1nU6ndrTdWcOOZtKZRwRkRE1rwupyXyyHdgyVOxq6mwHOGdJzMPkB/dzteL1dR/GGUeDTEDW3ytZokAKWyVQlqKbE1+SbmP04qvSmS+v5c3919dXUszbRY4zND5PJOwDwIyrkzGxgIsWfZORnYVOdx9bGCcKtqcSgndMwGw24yJVcre9BHcuLtowTpVl2DSo265uewOFCko/JvCzCZOBghlumuOjTnHEy4vAWJo4jkx2xD+p3d3dhu/bG6kn0RhFD7KSFQXpvC4j0NGuOC7ki3GZ5aSSJQ5z0/rTrr56sz0C3xOc3MmRyjTjoXPli5acv5ZweXlJp4/xirQTkVg1ej84uqIGj51zyM07QHPpNEOOS65dBPLMTCT40hHFJNkt489yWSh5wzXfnR2eS+eUP8i0i7CTTrjmzMI+l25uHUvBFFuY7EQxseKPegelOJDNQ9Z8Dw6iOiegu5FTOf74aTK9xvHxsZQu8ZxMueSDrwTXdUFGKzHfiTIuoBcF5cvcD6mHG3WOud1OeDTDxQZbo77uUovFwvMNt0S5/q26B89ScBuIgMILzxz26BIT144K82RX6OktqFS+rsoZtzohCZNgkEzMQgboYt4wDvewYGDklOT6gStRSKN1HOP1ODCvZS7RqYQedQhjPAk9NIhZGEQPL6hdGpDbhjA7BqjqIV+vgz7qAHoAwR2d4i8jUMABdStqETq3MtU7UMbHe3QPg8RYXxwGySWeThRiMovb2wjj5N5yGOEBnejSLYjlYFNpy1q9gJzFFe84PUDmG1TJ8tm8+cKADXyd4RYHUMaeoP3fu2mF6+Huor2o4Ib0wm2Eqqt+AhX6Woa/aU5z3GbhjTE3lAf7iowYLwwty917x/5P2FuPey2iDM8hpWyqDMGXoMJ0lZAzLyi6RKIo3HENMaKVc27VYAO6Sg++BBXEJlqvEAu3wCzTHjpm/fn83DBm3Su+8WOMgxyokyh2oCSIRHBbSFkLJwy6XyI++X1cmmCVlIklKLQwjlIkq4j5i/39Asa5byCHIaLe+slIJXa2Dck91N/CivnHkO9ddFybnzAEMr0on/8mXg1VhZMmWfjuLsY49xMGGRMjkr8ZJfl/OOxXB1Fx8NqDoK6F7dlHsG2JhT1M+fDrl8j4d1rYWbQF+KnScLBnH9yUwCoHDVcwyXx/JxmfnaUYxww8JIIS3d+xB0rpN7ZrvtN4c8D3gMqqaeDMYsuBHRkm0LxL7jprPQNnFlse5UeG5Xx7HkSm0ZPv8FhsW4ENAx3grvHfdrS42qAsyve/rTC+utokY4IqfI9aj9ga3yo4OiphPN+AJptCEd/5T2Jcgip8T2tMovodyVZA8Y4+Pa3EeDNHATG08Nnbs3Ds582d0N9nf67/fNTQJYLYz5slxCu3avj8/FTq42NQxsU9U7VqHuHPhUUMbuE2aMX3nV7iH4TfVNPoG+H9nTN2n25ufibjeNOP5PsP3wD/BwAA//8q+0MgnZLKswAAAABJRU5ErkJggg==" alt="请输入验证码"/>
        </el-form-item>
      </el-form>
      <el-button size="medium" type="primary" class="login-button" @click="handleLogin">登录</el-button>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    handleLogin () {
      this.$router.replace({
        path: '/'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #2d3a4b;
  //background: url("../../assets/img/login-background.svg") no-repeat;
  filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
  -moz-background-size:100% 100%;
  background-size:100% 100%;
  width: 100%;
  height: 100%;
  .header{
    & h1{
      font-size: 33px;
      cursor: pointer;
      color: #FFFFFF;
    }
  }
  .body{
    width: 80vw;
    max-width: 350px;
    margin-bottom: 20vh;
    .captcha-wrapper{
      ::v-deep .el-form-item__content{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        & img{
          width: 33%;
          height: 36px;
          cursor: pointer;
        }
        ::v-deep .el-input{
          width: 60%;
        }
      }
    }
    .login-button{
      width: 100%;
    }
  }
}
</style>
