<template>
  <div>
    <div class="container">
      <div class="user_header">
        <div class="user_img">
          <img src="https://picsum.photos/50/50?random=10" />
        </div>

        <div class="user_setting">
          <p>c2h3i4u5</p>
          <img src="../../source/more.png" />
        </div>
      </div>

      <div class="main_post">
        <img src="https://picsum.photos/300/300?random=11" />
      </div>

      <div class="post_action">
        <div class="post_like">
          <img src="../../source/like.png" />
        </div>
        <div class="post_message">
          <img src="../../source/messenger.png" />
        </div>
        <div class="post_share">
          <img src="../../source/share.png" />
        </div>
        <div class="post_save">
          <img src="../../source/save-button.png" />
        </div>
      </div>

      <div class="post_comment">
        <form>
          <input type="text" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  height: 800px;
  background-color: rgba(255, 255, 255);
  border-radius: 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  margin-top: 90px;
  max-width: 40rem;
  /* background-color: blueviolet; */
}

.user_header {
  display: flex;
  align-items: center;
  padding: 8px;

  border: 1px solid rgba(128, 128, 128, 0.625);
}
.user_img img {
  width: 40px;
  margin-top: 5px;
  border-radius: 100%;
  /* background-color: ; */
}
.user_header p {
  padding-left: 20px;
  margin-top: 10px;
}
.user_setting {
  display: flex;
}

.user_setting img {
  width: 25px;
  margin: 10px;
  margin-left: 450px;
}
.main_post img {
  width: 100%;
}
.post_action {
  display: flex;
}
.post_action img {
  width: 25px;
  margin: 10px;
}

.post_save img {
  margin-left: 460px;
}

.post_comment input {
  width: 100%;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.091);

  /* border-top: 1px solid gray; */
}
</style>
