import { createStore } from 'vuex'
import axios from 'axios'

 let baseUrl = 'https://node-eomp-api.onrender.com'
export default createStore({
  state: {
    product:[]
  },
  getters: {
  },
  mutations: {
    setProducts(state, data){
      state.product = data;
    },
  },
  actions: {
    async getProduct({commit}){
      try{
        const {data}= await axios.get(baseUrl+'/product');
        console.log(data);
        commit("setProducts",data);
      } catch(error){
        console.error('Error fetching products',error)
      }
    },
    async addProd({commit},newProduct){
      const {data} = await axios.post(baseUrl+'/product/add',newProduct);
      window.location.reload();
      console.log(data);
    },
    async deleteProd({commit},id){
      await axios.delete(baseUrl+ '/product/delete/' +id);
      window.location.reload();
    },
    async updateProd({commit},update){
      await axios.patch(baseUrl+ '/product/update/'+update.id, update)
      window.location.reload();
    }
  },
  modules: {
  }
})
