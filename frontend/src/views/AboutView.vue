<template>
    <div class=" bg-black" id="about">
            <div class="container">

                <div id="aboutDiv1" class="row vertical_content_manage mt-5">
                    <div class="col-lg-6">
                        <div class="about_header_main mt-3">
                            <h4 id="firstHead" class="about_heading text-capitalize font-weight-bold mt-4">WHY CHOOSE US</h4>
                                <p class="text-muted mt-3">
                                    "Why choose us? Because at our exotic car company, we don't just offer the best quality vehicles at the best prices; we provide an unparalleled experience that leaves every client feeling like they've become part of our family. Our commitment to client satisfaction ensures that each interaction is memorable and leaves a lasting impression. Join us and discover the difference of being welcomed into a community where luxury meets genuine care."
                                </p>

                            <p class="text-muted mt-3"> "We guarantee every moment behind the wheel will be unforgettable. Choose us and elevate your journey to extraordinary heights."</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="img_about mt-3">
                            <img id="img" src="https://thenextup.com/wp-content/uploads/2024/01/HandShake.jpg" class="img-fluid mx-auto d-block">
                        </div>
                    </div>
                </div>

                <div class="row mt-3">
                    <div id="col" class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fa-regular fa-star fa-xl" style="color: #FFD43B;"></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Quality Assurance</h5>
                                <p class="edu_desc mt-3 mb-0 text-muted"> "Where precision meets passion, ensuring every ride embodies the pinnacle of excellence."</p>
                            </div>
                        </div>
                    </div>

                    <div id="col" class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fa-regular fa-handshake fa-xl" style="color: #FFD43B;"></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Customer Satisfaction</h5>
                                <p class="edu_desc mb-0 mt-3 text-muted"> "Dedicated to delighting every client, crafting experiences as unforgettable as our cars." </p>
                            </div>
                        </div>
                    </div>

                    <div id="col" class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fa-solid fa-car fa-xl" style="color: #FFD43B;"></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Rare Collections:</h5>
                                <p class="edu_desc mb-0 mt-3 text-muted">"Curating the epitome of automotive excellence, our collection boasts the rarest and most coveted vehicles, ensuring each ride is a journey through automotive history and luxury." </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    
}
</script >
<style scoped>

#img{
    opacity: 0.5;
    width: 400px;
    height: 350px;
    width: 450px;
}

h1, h2, h3, h4, h5, h6 {
    color: indigo !important;
    font-family: audiowide;
}
a, a:hover, a:focus, a:active {
    text-decoration: none;
    outline: none;
}
p{
    color: gold !important;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.section_all {
    position: relative;
    padding-top: 80px;
    padding-bottom: 80px;
    min-height: 100vh;
}
.section-title {
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 1px;
}

.section-subtitle {
    letter-spacing: 0.4px;
    line-height: 28px;
    max-width: 550px;
}

.section-title-border {
    background-color: #000;
    height: 1 3px;
    width: 44px;
}

.section-title-border-white {
    background-color: #fff;
    height: 2px;
    width: 100px;
}
.text_custom {
    color: #00bd2a;
}

.about_icon i {
    font-size: 22px;
    height: 65px;
    width: 65px;
    line-height: 65px;
    display: inline-block;
    background: #fff;
    border-radius: 35px;
    color: #00bd2a;
    box-shadow: 0 8px 20px -2px rgba(158, 152, 153, 0.5);
}

.about_header_main .about_heading {
    max-width: 450px;
    font-size: 24px;
}

.about_icon span {
    position: relative;
    top: -10px;
}

.about_content_box_all {
    padding: 28px;
}

#aboutDiv1{
    margin-top: 116px !important;
}
#firstHead{
    margin-left: 80px;
}

#col{
    border-radius: 16px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.993);
    backdrop-filter: blur(5.3px);
    /* width: 550px; */
    box-shadow: 7px 7px 25px indigo;
    color: #fff;
    background-color: grey transparent;
}
#col:hover{
  transform: scale(1.1);
  transition: 0.3s;
  z-index:1;
}
</style>