<template>
  <div id="mainProd" class="row">
    <div id="bodd" v-for="item in $store.state.product" :key="item.id" class="col-lg-4">
      <div class="card h-100" style="width: 18rem; margin:10px;">
        <img :src="item.prodUrl" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title" style="color: yellow; background-color: black;">{{item.prodName}}</h5>
          <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>{{item.amount}}</i></p>
          <p class="card-text" style="font-size: 17px;">{{item.category}}</p>
          <button id="butt" class="btn btn-primary">BUY NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#butt{
  background-color: black;
  color: gold;
}

#bodd{
  padding: 30px;
}
#productBody {
  background-color: black;
}

.card-body {
  background-color: indigo;
  color: gold !important;
  box-shadow: indigo 0px 0px 30px;
  gap: 50px !important;
}

#mainProd {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  margin-top: 140px;
  margin-left: 90px;
}

.card {
  margin-bottom: 10px;
}

.card:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

#imgCard {
  box-shadow: indigo 0px 0px 30px;
}

footer {
  background-color: yellow;
  color: black !important;
  font-weight: bolder;
}

#sortButt {
  color: red;
  background-color: white;
  border: solid 2px black;
  border-radius: 12px;
  font-weight: bolder;
}

#sortButt:hover {
  scale: 1.2;
  transition: 0.3s;
  background-color: red;
  color: black;
}

#spinny {
  justify-content: center;
  align-items: center;
}

#adminButt {
  background-color: black;
  color: gold;
}
</style>
