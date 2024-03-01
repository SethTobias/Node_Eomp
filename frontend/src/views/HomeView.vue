<template>
  <body>
    <div id="homeImage">
    <h1 id="subTitle">BUY NOW</h1>
    <h5 id="caption">FAST, AFFORDABLE AND CONVENIENT. GET YOUR DREAM CAR TODAY!</h5>
    <button id="homeButt"><a href="/cars" style="text-decoration: none; color: gold;">VIEW CARS ▹
      </a></button>
    </div>
  </body>
  
</template>
<script>
export default {
  
}
</script>
<style>
#homeImage {
  background-image: url("/src/Images/Homepage.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  margin-top: 30px;
}
#subTitle{
  padding-top: 220px;
  margin-right: 1200px;
  color: #8403f4;
  font-size: 50px;
  text-shadow: black 1px 1px;
  font-family: audiowide;
}
#caption{
  margin-right: 1200px;
  color: black;
  text-shadow: black 1px 1px;
}
#homeButt{
  background-color: black;
  border-radius: 10px;
  color: gold;
  margin-top: 40px;
  margin-right: 1200px;
}
#homeButt:hover{
  background-image: url("/src/Images/purplegif.gif");
  transform:scale(1.1);
  opacity:1;
  filter:blur(0);
  text-decoration:none;
  color:gold;
}

body{
  background-color: black !important;
}
</style>
