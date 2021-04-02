<template>
  <div>
    <the-header></the-header>
    <baseCard
      v-for="user in allUser"
      :key="user"
      :userID="user.name"
      :userImg="user.post.image"
      :userMessage="user.post.message"
    ></baseCard>
  </div>
</template>

<script>
import theHeader from "./header.vue";
import baseCard from "./baseCard.vue";
export default {
  data() {
    return {
      allUser: null, //filter out login account
    };
  },
  components: { theHeader, baseCard },
  async created() {
    // console.log(this.$store.state.allUser);
    const getAllUser = await fetch(
      "https://instagramlogin-278b1-default-rtdb.firebaseio.com/.json"
    );
    const getAllUserResult = await getAllUser.json();
    this.allUser = getAllUserResult;
    let userTemp = [];
    for (let num in getAllUserResult) {
      if (getAllUserResult[num].userName != this.$store.state.currentUserID) {
        let temp = {
          name: getAllUserResult[num].userName,
          post: getAllUserResult[num].post,
        };
        userTemp.push(temp);
      }
    }
    this.allUser = userTemp;

    //把所有貼文一次排開,做成一維陣列,裡面有 image and message
    let userArray = [];
    for (let tempA = 0; tempA < userTemp.length; tempA++) {
      for (let tempB = 0; tempB < userTemp[tempA].post.length; tempB++) {
        let tempC = {
          name: userTemp[tempA].name,
          post: userTemp[tempA].post[tempB],
        };
        userArray.push(tempC);
        //加入userName
      }
    }
    this.allUser = userArray;
    // console.log(this.allUser);
  },
};
</script>
