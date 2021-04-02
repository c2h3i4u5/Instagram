<template>
  <div>
    <div class="container">
      <div class="userHeader">
        <div class="userImg">
          <img src="https://picsum.photos/50/50?random=10" />
        </div>

        <div class="userSetting">
          <p>{{ userID }}</p>
          <img src="../../source/more.png" />
        </div>
      </div>

      <div class="mainPost">
        <img :src="userImg" />
      </div>

      <div class="postAction">
        <div class="postLike">
          <img src="../../source/like.png" />
        </div>
        <div class="postMessage">
          <img src="../../source/messenger.png" />
        </div>
        <div class="postShare">
          <img src="../../source/share.png" />
        </div>
        <div class="postSave">
          <img src="../../source/save-button.png" />
        </div>
      </div>

      <div class="messageArea">
        <div class="userMessage">
          <p>
            <b>{{ userID }}</b> {{ userMessage }}
          </p>
        </div>
        <div class="friendMessage">
          <p>
            <b>{{ this.$store.state.currentUserID }}</b>
            test123123123test123123123
          </p>
          <p>
            <b>{{ this.$store.state.currentUserID }}</b>
            test123123123test123123123
          </p>
        </div>
      </div>
      <div class="postComment">
        <form>
          <input type="text" />
          <button>發佈</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userID", "userImg", "userMessage"],
};
</script>

<style>
.container {
  height: 1000px;
  background-color: rgba(255, 255, 255);
  border-radius: 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  margin-top: 90px;
  max-width: 40rem;
  /* background-color: blueviolet; */
}

.userHeader {
  display: flex;
  align-items: center;
  padding: 8px;

  border: 1px solid rgba(128, 128, 128, 0.625);
}
.userImg img {
  width: 40px;
  margin-top: 5px;
  border-radius: 100%;
  /* background-color: ; */
}
.userHeader p {
  padding-left: 20px;
  margin-top: 10px;
}
.userSetting {
  display: flex;
}

.userSetting img {
  width: 25px;
  margin: 10px;
  margin-left: 450px;
}
.mainPost img {
  width: 100%;
}
.postAction {
  display: flex;
}
.postAction img {
  width: 25px;
  margin: 10px;
}

.postSave img {
  margin-left: 460px;
}

.postComment input {
  width: 99.8%;
  height: 35px;
  margin-top: 70px;
  border: 1px solid rgba(0, 0, 0, 0.091);

  /* border-top: 1px solid gray; */
}
.postComment {
  position: relative;
}
.postComment button {
  /* width: 40px; */
  height: auto;
  position: absolute;
  top: 78px;
  right: 10px;
  font-size: 15px;
  color: #2c95f6;
  background-color: rgba(255, 255, 255);
  border: none;
  opacity: 1;
}
.userMessage p {
  margin-left: 10px;
  margin-bottom: 30px;
}
.friendMessage p {
  margin-top: 10px;
  margin-left: 10px;
}
</style>
