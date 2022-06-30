import transaction from "@/modules/transaction";
import user from "@/modules/user";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    user,
    transaction,
  },
});

export default store;
