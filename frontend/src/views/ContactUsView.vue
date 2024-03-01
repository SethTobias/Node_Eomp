<template>

    <div>
      <h1>Our Locations</h1>
      <h4>Get in touch with one of our <span>many branches!</span></h4>
    </div>

  <div>
    <h5>Provinces</h5>

    <button>Western Cape</button>
    <button>Gauteng</button>
    <button>Kwazulu-Natal</button>
    <button>Free State</button>
    <button>Limpopo</button>
    <button>Northern Cape</button>
  </div>
  <div class="container">
    <div class="row">
      
      <div class="col" id="map">
        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d211769.96378974649!2d18.540483640764908!3d-33.96926359834257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sauto%20dealers!5e0!3m2!1sen!2sza!4v1708954464328!5m2!1sen!2sza" width="350" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div class="col">
      <div class="info">
        <div class="address">
            <h4 id="name"><i class="fa-solid fa-location-dot fa-beat fa-sm" style="color: #ff0000;"></i> HQ Location:</h4>
           <a href=""><p>Western Cape, GUGU GAGA, 6673</p></a> 
        </div>
      
        <div class="email">
            <h4 id="name"><i class="fa-regular fa-envelope fa-beat fa-sm" style="color: #000000;"></i>  Email:</h4>
            <a href=""><p>momentummotors@gmail.com</p></a>
        </div>
      
          <div class="phone">
            <h4 id="name"><i class="fa-solid fa-mobile-screen-button fa-beat fa-sm" style="color: #ffffff;"></i>  Call:</h4>
            <a href=""><p>+27 21 567 8798</p></a>
          </div>
        </div>
      </div>

      <div id="form" class="col">
            <form
            action="https://formspree.io/f/mbjvblqe"
                method="POST">
                <br>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="Surname">Surname:</label>
                  <input type="text" id="name" name="surname" required >
                
                  <label for="email">Email:</label>
                  <input type="email" id="name" name="email" required>
                  
                  <label for="message">Message:</label>
                  <textarea id="name" name="message" required></textarea>
                  
                  <input type="submit" value="Submit">  
                  
                </form>
              </div>
              
            </div>
          </div>
        </template>
<script>
export default {
  
}
</script>
<style scoped>
.info{
  padding-top: 25px;
}

#map{
  padding-top: 15px;
}
h1{
  color: indigo;
  margin-top: 150px;
  font-family: audiowide;
}
h4{
  color: indigo;
}
h5{
  color: gold;
}
span{
  color: gold;
  text-decoration: underline yellow;
}
button{
  padding-left: 15px !important;
  padding-right: 15px !important;
  padding: 5px;
  margin: 4px;
  border: 3px solid black;
  background-color: indigo;
  color: gold;
  border-radius: 19px;
}
form {
  width: 300px;
  margin: 0 auto;
}

label{
  color: black !important;
  text-shadow:0 0 1px gold,
              0 0 1px gold,
              0 0 1px gold,
              0 0 1px gold;
}

input[type="text"],
input[type="email"],
textarea {
  color: black;
  width: 100%;
  padding: 8px;
  border: 5px solid indigo;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

input[type="submit"] {
  background-color: indigo;
  color: gold;
  padding: 8px 105px;
  border: solid #ffffff;
  border-radius: 4px;
  cursor: pointer;
  font-size: large;
}

input[type="submit"]:hover {
  background-color: indigo;
  border-color: #000;
  color: gold;
  font-size: larger;
  transform: scale(1.1);
  border: solid gold;
  border-radius: 4px;
  cursor: pointer;
  font-size: large;
}
.container{
  margin-top: 30px;
}
#name{
    color: black !important;
    text-shadow:0 0 2px gold,
                0 0 2px gold,
                0 0 2px gold,
                0 0 2px gold;
}

p{
    margin-top: 50px !important;
    color: whitesmoke !important;
    text-align: center;
    font-weight: bold;
    transition: 0.5s;
}
</style>
