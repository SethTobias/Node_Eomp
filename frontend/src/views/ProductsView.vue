<template>
  <div id="product">
    <div class="nav">
      <div class="search-container">
        <div class="sort-container">
          <div class="category">
            <div class="illustration"></div>
            <div class="txt">Vintage</div>
          </div>
          <div class="category">
            <div class="illustration"></div>
            <div class="txt">Exotic SUV</div>
          </div>
          <div class="category">
            <div class="illustration"></div>
            <div class="txt">Exotic</div>
          </div>
        </div>
        <div class="search-container">
          <input type="text" />
          <button>Search</button>
        </div>
      </div>
      <div class="container">
        <button>Filter</button>
        <div class="tabs">
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                more..
            </div>
        </div>
        <button>Sort</button>
      </div>
    </div>
    <div class="product-container">
      <div class="row-1">
        <div class="card" v-for="item in $store.state.product" :key="item.ID">
          <div class="img"><img :src=item.prodUrl></div>
          <div class="txt">
            <div class="header-txt">
              <p class="productName"></p>
              <div class="details">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div class="footer">
              <div class="price">
                <p class="amount"></p>
                <p class="amountPM"></p>
              </div>
              <div class="chip">
                <div class="img"></div>
                <div class="txt"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
        "prodName": null,
        "quantity": null,
        "amount": null,
        "category": null,
        "prodUrl": null
        }
    },
    methods:{

    },
    computed:{
        getProduct(){
            this.$store.dispatch('getProduct')
        }
    },
    mounted(){
        this.getProduct
    }
}
</script>
<style scoped>
:root {
    --primary: #8403f4;
    --bg: black;
    --secondary:gold;
    --accent: red;
}


</style>
