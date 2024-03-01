<template>


    <div>  
       <CarsCompView/> 
    </div>



    
</template>
<script>
import CarsCompView from "../components/CarsCompView.vue"
export default {
    components: {
        CarsCompView
    },
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


</style>