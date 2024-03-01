<template>

    <div>
        <footer id="foot">Kwagga{{ currentYear }}</footer>
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
#footer{
    color: rgb(255, 255, 255);
}
</style>