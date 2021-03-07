<template>
  <div class="main-header">
    <div class="title">
      <a href="#">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        />
      </a>
    </div>
    <div class="search">
      <form><input type="text" /></form>
    </div>

    <div class="home">
      <a href="#">
        <img src="../../source/home.png" />
      </a>
    </div>
    <div class="message">
      <a href="#">
        <img src="../../source/comment.png" />
      </a>
    </div>
    <div class="direction">
      <a href="#">
        <img src="../../source/direction.png" />
      </a>
    </div>
    <div class="like">
      <a href="#">
        <img src="../../source/like.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main-header {
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid;
}
.title {
  width: 150px;
}
.title img {
  width: 120px;
  margin-top: 10px;
}
.search {
  margin: 20px;
  border: none;
}
.search input {
  width: 150px;
}

.home img,
.message img,
.direction img,
.like img {
  width: 25px;
  margin: 10px;
}
</style>
