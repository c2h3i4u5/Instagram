<template>
  <form @submit.prevent="login">
    <div class="loginPage">
      <div class="loginContainer">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        />

        <input
          class="account"
          placeholder="手機號碼、用戶名稱或電子郵件"
          type="text"
          v-model.trim="userInfo.account"
        />
        <input
          class="password"
          placeholder="密碼"
          type="password"
          v-model.trim="userInfo.password"
        />
        <button class="login">Login</button>

        <div class="register">
          <p>沒有帳號嗎?</p>

          <router-link to="/register">註冊</router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
// import firebase from "../firebase.js";

export default {
  data() {
    return {
      userInfo: {
        account: null,
        password: null,
      },
    };
  },
  methods: {
    async login() {
      const getAccount = await fetch(
        "https://instagram-632c9-default-rtdb.firebaseio.com/.json"
      );
      const responseData = await getAccount.json();

      // const userAccount = [];
      for (const num in responseData) {
        const user = {
          userName: responseData[num].userName,
          phoneEmail: responseData[num].phoneEmail,
          passowrd: responseData[num].password,
        };
        if (
          (this.userInfo.account === user.userName &&
            this.userInfo.password === user.passowrd) ||
          this.userInfo.account === user.phoneEmail
        ) {
          this.$router.replace("/homepage");

          //123
        }
        // userAccount.push(user);
      }

      // console.log(userAccount);

      this.userInfo.account = "";
      this.userInfo.password = "";
    },
    // confirmUserLogin(userLogin) {
    //   console.log(userLogin);
    // },
  },
};
</script>

<style>
.loginPage {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 35%;
}
.loginContainer {
  width: 350px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 0.5px solid gray;
}
.loginContainer img {
  width: 50%;
  margin-bottom: 50px;
}

.account {
  width: 70%;
  height: 30px;
  margin-bottom: 8px;
  background-color: #e9f0fd;
  border: 0.5px solid gray;
  font-size: 5px;
}
.password {
  width: 70%;
  height: 30px;
  margin-bottom: 8px;
  background-color: #e9f0fd;
  font-size: 5px;
  border: 0.5px solid gray;
}
.login {
  width: 250px;
  height: 30px;
  margin-top: 16px;
}
.register {
  display: flex;
  margin-top: 40px;
}
.register p {
  margin-right: 10px;
}
</style>
