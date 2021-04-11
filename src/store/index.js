import { createStore } from "vuex";

const store = createStore({
  state: {
    currentUserID: null,
    allUser: [],
  },
  mutations: {
    getUserInfo(state, payload) {
      state.currentUserID = payload;
      //console.log(payload);
    },
    getAllUser(state, payload) {
      state.allUser = payload;
      //console.log(payload);
    },
  },
  actions: {},
});

export default store;
