const user = {
  state() {
    return {
      transactionList:
        JSON.parse(window.sessionStorage.getItem("transaction")) !== null
          ? JSON.parse(window.sessionStorage.getItem("transaction"))
          : [],
    };
  },
  getters: {
    filterDataPayment(state) {
      return state.transactionList.filter(
        (item) => item.category === "payment"
      );
    },

    filterDataWithdrawal(state) {
      return state.transactionList.filter(
        (item) => item.category === "withdrawal"
      );
    },

    filterDataEducation(state) {
      return state.transactionList.filter(
        (item) => item.category === "education"
      );
    },
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
