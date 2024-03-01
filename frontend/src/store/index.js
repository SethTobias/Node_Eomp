import { createStore } from "vuex";
import axios from "axios";

let baseUrl = "https://node-eomp-api.onrender.com";
export default createStore({
  state: {
    product: [],
    user: [],
    singleProd: [],
  },
  getters: {},
  mutations: {
    setProducts(state, data) {
      state.product = data;
    },
    setUsers(state, data) {
      state.user = data;
    },
    setSingle(state,data) {
      state.singleProd = data
    }
  },
  actions: {
    async getProduct({ commit }) {
      try {
        const { data } = await axios.get(baseUrl + "/product");
        console.log(data);
        commit("setProducts", data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    },
    async addProd({ commit }, newProduct) {
      const { data } = await axios.post(baseUrl + "/product/add", newProduct);
      window.location.reload();
      console.log(data);
    },
    async getSingle({ commit }, prodID) {
      const { data } = await axios.get(baseUrl + "/product/" + prodID);
      commit("setSingle", data);
    },
    async deleteProd({ commit }, id) {
      await axios.delete(baseUrl + "/product/delete/" + id);
    },
    async updateProd({ commit }, update) {
      console.log(update);
      await axios.patch(baseUrl + "/product/update/" + update.id, update);
      window.location.reload();
    },

    async getUser({ commit }) {
      try {
        const { data } = await axios.get(baseUrl + "/user");
        console.log(data);
        commit("setUsers", data);
      } catch (error) {
        console.error("error getting user");
      }
    },

    async deleteUser({ commit }, id) {
      await axios.delete(baseUrl + "/user/delete/" + id);
      window.location.reload();
    },

    async addUser({ commit }, newUser) {
      await axios.post(baseUrl + "/user/add", newUser);
      window.location.reload();
      console.log(data);
    },
    async updateUser({ commit }, update) {
      await axios.patch(baseUrl + "/user/update/" + update.id, update);
      window.location.reload();
    },
  },
  modules: {},
});
