<template>
<div style="margin-top: 120px; display: flex; flex-wrap:column;">


<div v-for="item in $store.state.product" :key="item.id" class="container text-center">
    <div class="row">
        <div>
          <div>
        <div class="card">
            <div class="card-info">
                <p class="title">{{ item.prodName }}</p>
                <p class="title">{{ item.category }}</p>
                <p class="title">{{ item.amount }}</p>
            </div>
        </div>

    </div>
        </div>
    </div>
</div>
</div>
    
</template>
<script>
export default {
    data(){
        return{
        prodName: null,
        quantity: null,
        amount: null,
        category: null,
        prodUrl: null
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
.card {
 --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
 width: 190px;
 height: 254px;
 padding: 5px;
 border-radius: 1rem;
 overflow: visible;
 background: #f7ba2b;
 background: var(--background);
 position: relative;
 z-index: 1;
}
/* .card{
    display: flex;
    display: inline-block;
    flex-wrap: wrap;
} */

.card::after {
 position: absolute;
 content: "";
 top: 30px;
 left: 0;
 right: 0;
 z-index: -1;
 height: 100%;
 width: 100%;
 transform: scale(0.8);
 filter: blur(25px);
 background: #f7ba2b;
 background: var(--background);
 transition: opacity .5s;
}

.card-info {
 --color: #181818;
 background: var(--color);
 color: var(--color);
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
 overflow: visible;
 border-radius: .7rem;
}

.card .title {
 font-weight: bold;
 /* letter-spacing: .1em; */
 text-align: justify;
}

/*Hover*/
.card:hover::after {
 opacity: 0;
}

.card:hover .card-info {
 color: #f7ba2b;
 transition: color 1s;
}

</style>