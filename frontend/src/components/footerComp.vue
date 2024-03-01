<template>

    <div>
        <footer id="foot">@Copy Rights RReserved {{ currentYear }}</footer>
    </div>

</template>
<script>
export default {
    name: 'footer',
    data(){
           return{
            currentYear:  null,
           };
    },
    mounted(){
            getData();
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