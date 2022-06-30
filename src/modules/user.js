const user = {
  state() {
    return {
      user: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  },
  mutations: {
    createNewUser(state, payload) {
      state.user.fullName = payload.fullName;
      state.user.email = payload.email;
      state.user.password = payload.password;
      const newUser = {
        fullName: payload.fullName,
        email: payload.email,
        password: payload.password,
      };

      window.sessionStorage.setItem("user", JSON.stringify(newUser));
    },
  },
  actions: {
    createNewAccount(context, payload) {
      context.commit("createNewUser", payload);
    },
  },
};

export default user;
