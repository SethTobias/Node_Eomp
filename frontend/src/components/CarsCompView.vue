<template>
<input id="input" type="search" placeholder="search" aria-label="search" @click="explore()" v-model="search">
<button @click="sort()" id="butt2">SORT</button>
  <div v-if="explore().length>0" id="mainProd" class="row">
    <div id="bodd" v-for="item in $store.state.product" :key="item.prodID" class="col-lg-4">
      <div class="card h-100" style="width: 18rem; margin:10px;">
        <img :src="item.prodUrl" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title" style="color: yellow; background-color: black;">{{item.prodName}}</h5>
          <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>{{item.amount}}</i></p>
          <p class="card-text" style="font-size: 17px;">{{item.category}}</p>
          <button id="butt" class="btn btn-primary" >BUY NOW</button>
          <router-link class="btn" :to="{ name: 'single', params: {prodID: item.prodID} }">
            View More
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <spinner/>
  </div>
</template>

<script>
import sweet from 'sweetalert'
import spinner from '../components/spinner.vue'
export default {
  components: {
    spinner,
  },
  data() {
    return {
      search: ""
    };
  },
  methods: {
    explore() {
      let item = this.$store.state.product;
      let typed = this.search;
      let result = item.filter(s => {
        return s.prodName.toLowerCase().includes(typed.toLowerCase());
      });
      if (result.length === 0) {
        sweet({
          title: "Error",
          text: "Item not found"
        });
      }
      return result;
    },
    sort() {
      let c = this.$store.state.product;
      if (c) {
        c.sort((a, b) => a.amount - b.amount);
      }
    },
    getSingle(prodID) {
      this.$store.dispatch('getSingle',prodID)
    }
  }
};

</script>

<style>

#input{
  margin-top: 200px;
}

#butt{
  background-color: black;
  color: gold;
}

#butt2{
  background-color: indigo;
  color: gold;
}

#bodd{
  padding: 30px;
}
#productBody {
  background-color: black;
}

.card-body {
  background-color: indigo;
  color: gold !important;
  box-shadow: indigo 0px 0px 30px;
  /* gap: 50px !important; */
}

#mainProd {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  margin-top: 50px;
  margin-left: 90px;
}

.card {
  margin-bottom: 10px;
}

.card:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

#imgCard {
  box-shadow: indigo 0px 0px 30px;
}

footer {
  background-color: yellow;
  color: black !important;
  font-weight: bolder;
}

#sortButt {
  color: red;
  background-color: white;
  border: solid 2px black;
  border-radius: 12px;
  font-weight: bolder;
}

#sortButt:hover {
  scale: 1.2;
  transition: 0.3s;
  background-color: red;
  color: black;
}

#spinny {
  justify-content: center;
  align-items: center;
}

#adminButt {
  background-color: black;
  color: gold;
}
</style>
