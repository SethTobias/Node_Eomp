<template>

    <div>
        <footer id="foot">copyright @ 2024</footer>
    </div>

</template>
<script>
export default {
    name: 'footer',
    data(){
           return{
            currentYear:""
           };
    },
    mounted(){
            // thisgetData();
    },
    methods:{
            getData(){
                    let currentYear = new Date().getFullYear();
                    this.currentYear = currentYear.toString();
            }
    }

}
</script>
<style>
#foot{
    color: rgb(255, 255, 255);
    padding: 20px;
}
</style>