<!-- <template>
    <div>
        <video id="video" autoplay muted>
            <source :src="videoSource" type="video/mp4">
        </video>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            videoSource: src="/src/Images/y2mate.com - The Run  Cinematic Blender Car Animation_1080p.mp4"
        };
    },
    mounted(){
        const video = document.getElementById("video");
        video.play().then(()=>{
            setTimeout(()=>{
                console.log("webpage content loaded");
            },2000)
        }).catch((error)=>{
            console.error('Error playing video:',error)
        })
    }
    
}
</script>
<style scoped>
    
</style> -->