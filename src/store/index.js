import { createStore } from "vuex";

const store = createStore({
  state: {
    userID: "",
  },
  mutations: {
    getUserInfo(state, payload) {
      state.userID = payload;
      console.log(payload);
    },
  },
  actions: {},
});

export default store;
