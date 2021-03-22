<template>
  <div class="loginPage">
    <div class="loginContainer">
      <img
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
      />
      <input
        class="account"
        placeholder="手機號碼、用戶名稱或電子郵件"
        type="text"
      />
      <input class="password" placeholder="密碼" type="password" />
      <button class="login">Login</button>

      <div class="register">
        <p>沒有帳號嗎?</p>
        <a href="register">註冊</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  background-color: rgba(0, 102, 255, 0.44);
  border: 0.5px solid gray;
}
.password {
  width: 70%;
  height: 30px;
  margin-bottom: 8px;
  background-color: rgba(0, 102, 255, 0.44);

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
