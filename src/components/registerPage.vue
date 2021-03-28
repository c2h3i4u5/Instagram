<template>
  <form @submit.prevent="submitRegisterForm">
    <div class="registerPage">
      <div class="registerContainer">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        />
        <p class="registerContent"><b>註冊即可查看朋友的相片和影片。</b></p>
        <input
          class="registerAccount"
          placeholder="手機號碼或電子郵件"
          type="text"
          v-model.trim="phoneEmail"
        />
        <input type="text" placeholder="全名" v-model.trim="fullName" />
        <input type="text" placeholder="用戶名稱" v-model.trim="userName" />
        <input
          class="registerPassword"
          placeholder="密碼"
          type="password"
          v-model.trim="password"
        />
        <button class="registerButton">Register</button>

        <p class="registerMessage">
          註冊即表示你同意我們的 服務條款、資料政策和 Cookie 政策。
        </p>
      </div>

      <div class="switchToLogin">
        <p>
          已經有帳號嗎？
          <router-link to="/login">登入</router-link>
        </p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      phoneEmail: "",
      fullName: "",
      userName: "",
      password: "",
    };
  },
  methods: {
    async submitRegisterForm() {
      const registerData = {
        phoneEmail: this.phoneEmail,
        fullName: this.fullName,
        userName: this.userName,
        password: this.password,
      };
      await fetch(
        `https://instagram-632c9-default-rtdb.firebaseio.com/${registerData.userName}.json`,
        {
          // 待加入帳號是否重複
          method: "PUT",
          body: JSON.stringify(registerData),
        }
      );
      this.$router.replace("/login");

      //   console.log(registerData);
    },
  },
};
</script>

<style>
.registerPage {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position: fixed;
  top: 25%;
}
.registerContainer {
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 0.5px solid gray;
}
.registerContainer img {
  width: 50%;
  margin-bottom: 20px;
}

.registerContent {
  color: gray;
  margin-bottom: 20px;
}
.registerContainer input {
  width: 70%;
  height: 30px;
  margin-bottom: 8px;
  background-color: #e9f0fd;
  border: 0.5px solid gray;
  font-size: 5px;
}
/* .registerAccount {
  width: 70%;
  height: 30px;
  margin-bottom: 8px;
  background-color: rgba(0, 102, 255, 0.44);
  border: 0.5px solid gray;
}
.registerPassword {
  width: 70%;
  height: 30px;
  margin-bottom: 8px;
  background-color: rgba(0, 102, 255, 0.44);
  border: 0.5px solid gray;
} */
.registerButton {
  width: 250px;
  height: 30px;
  margin-top: 16px;
}
.registerMessage {
  width: 70%;
  margin-top: 10px;
  font-size: 5px;
  color: gray;
  text-align: center;
}
.switchToLogin {
  width: 350px;
  height: 70px;
  border: 0.5px solid gray;
  background-color: white;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
