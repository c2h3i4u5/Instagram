<template>
  <div>
    <the-header></the-header>
    <baseCard
      v-for="(user, index) in allUser"
      :key="index"
      :userID="user.name"
      :userPostImg="user.post.image"
      :userImg="user.userImg"
      :userMessage="user.post.message"
      :numOfPost="user.numOfPost"
      :numOfComment="user.numOfComment"
      :friendComment="user.friendComment"
      :currentPost="index"
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
          userImg: getAllUserResult[num].userImg,
          friendComment: getAllUserResult[num].post.friendMessage,
        };
        userTemp.push(temp);
      }
    }
    this.allUser = userTemp;

    let userArray = [];
    let tempD = null;
    for (let tempA = 0; tempA < userTemp.length; tempA++) {
      for (let tempB = 0; tempB < userTemp[tempA].post.length; tempB++) {
        for (
          let tempC = 0;
          tempC < userTemp[tempA].post[tempB].friendMessage.length;
          tempC++
        ) {
          tempD = {
            name: userTemp[tempA].name,
            userImg: userTemp[tempA].userImg,
            post: userTemp[tempA].post[tempB],
            numOfPost: tempB.toString,
            numOfComment: userTemp[tempA].post[tempB].friendMessage.length,
            friendComment: userTemp[tempA].post[tempB].friendMessage,
          };
          // console.log(tempD.friendComment);
        }
        userArray.push(tempD);
      }
    }
    this.allUser = userArray;
    // console.log(this.allUser);
  },
};
</script>
