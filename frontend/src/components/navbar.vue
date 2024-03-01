<template>
    <nav class="navbar fixed-top">
        <div id="navB" class="container-fluid" style="margin-bottom: 100px;">

          <a class="navbar-brand" href="#"><img id="Logo" src="https://i.postimg.cc/zGcFXSbL/Logo.png"></a>
          <h1 id="Navhead" class="navHead active"><ul class="nav justify-content-center">

        <li class="nav-item">
          <router-link id="navText" class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/cars">Cars</router-link>
        </li>

        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/about">About</router-link>
        </li>

        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/contact">Contact us</router-link>
        </li>

        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/admin">Admin</router-link>
        </li>

        <li class="nav-item">
          <router-link  id="navText1" class="nav-link active" to="/">Sign Up</router-link>
        </li>|

        <li class="nav-item">
          <router-link id="navText" class="nav-link active" to="/">Login</router-link>
        </li>
      </ul></h1>
        </div>
      </nav>
</template>
<script>
export default {
    
}
</script>
<style>

#Logo{
    width: 80px;
    height: 80px;
}
#navB{
    /* background-image: url("/src/Images/purplegif.gif");
    background-repeat: no-repeat;
    background-size: cover; */
    background-color: black;
}
#Navhead{
    color: gold !important;
}
.nav-item{
  display: block;
  position:relative;
  text-decoration:none;
  padding:5px;
  font-size:18px;
  font-family: sans-serif;
  color:#ffffff;
  text-transform:uppercase;
  transition:0.5s;  
}
.nav-item:hover{
  transform:scale(1.5);
  opacity:0.2;
  filter:blur(5px);
  color: black;
    text-shadow:0 0 2px #8403f4,
                0 0 2px #8403f4,
                0 0 2px #8403f4,
                0 0 2px #8403f4;
}
.nav-item:hover{
  transform:scale(1.1);
  opacity:1;
  filter:blur(0);
  text-decoration:none;
  color:#fff;
}
.nav-item:before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  /* background:grey; */
  transition:0.5s;
  transform-origin:right;
  transform:scaleX(0);
  z-index:-1;
}
.nav-item:hover:before{
  transition:transform 0.3s;
  transform-origin:left;
  transform:scaleX(1);
}
 #navText{
    color: #e8f403;

}
 #navText1{
    color:#8403f4 !important;
}
    
</style>