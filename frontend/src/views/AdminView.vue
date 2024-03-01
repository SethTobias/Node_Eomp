<template>
    <body id="body">
        
    </body>
    <div>
        <h1 id="title">Admin</h1>

        <button id="addButt" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add
        </button>
        <table class="table table-dark table-responsive">
            <tr>
                <th style="color: white; background-color: gold;">id</th>
                <th style="color: white; background-color: indigo;">prodName</th>
                <th style="color: white; background-color: gold;">category</th>
                <th style="color: white; background-color: indigo;">amount</th>
                <th style="color: white; background-color: gold;">ProdURL</th>
                <th style="color: white; background-color: indigo;">quantity</th>
              
            </tr>
            
            <tr v-for="item in $store.state.product" :key="item.id">
                <td style = "color: white; background-color: indigo; padding-top: 40px">{{item.prodID}}</td>
                <td style = "color: white; background-color: black; font-size: 20px; padding-top: 40px">{{item.prodName}}</td>
                <td style = "color: white; background-color: indigo; font-size: 20px; padding-top: 40px">{{ item.category }}</td>
                <td style = "color: white; background-color: black; font-size: 20px; padding-top: 40px">R{{item.amount}}</td>
                <td style = "color: white; background-color:indigo"><img id='adminImg' :src=item.prodUrl></td>
                <td style = "color: white; background-color: black; font-size: 20px; padding-top: 40px">{{item.quantity}}</td>
                <td><button @click="deleteProd(item.prodID)" id="deleteButt">Delete</button></td>

                <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal2-' + item.prodID" id="editButt">
                  Edit
                </button></td>
<div class="modal fade" :id="'exampleModal2-' + item.prodID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div id="modalBody" class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">EDIT PRODUCT</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

                <p id= "modalP">Product Name</p>
                <input id="input1" placeholder="prodName" type="text" class="form-control" v-model="prodName" required>

                <p id= "modalP">Quantity</p>
                <input id="input2" placeholder="quantity" type="number" class="form-control" v-model="quantity" required>

                <p id= "modalP">Amount</p>
                <input id="input3" placeholder="amount" type="number" class="form-control" v-model="amount" required>

                <p id= "modalP">Category</p>
                <input id="input4" placeholder="category" type="text" class="form-control" v-model="category" required>

                <p id= "modalP">Product Url</p>
                <input id="input4" placeholder="prodUrl" type="text" class="form-control" v-model="prodUrl" required>
      </div>
      <div class="modal-footer">
        <button id="closeButt" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="updateProd(item.prodID)" id="saveButt" type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </tr>   
        </table>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div id="modalBody" class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">ADD PRODUCT</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

                <p id= "modalP">Product Name</p>
                <input id="input1" placeholder="prodName" type="text" class="form-control" v-model="prodName" required>

                <p id= "modalP">Quantity</p>
                <input id="input2" placeholder="quantity" type="number" class="form-control" v-model="quantity" required>

                <p id= "modalP">Amount</p>
                <input id="input3" placeholder="amount" type="number" class="form-control" v-model="amount" required>

                <p id= "modalP">Category</p>
                <input id="input4" placeholder="category" type="text" class="form-control" v-model="category" required>

                <p id= "modalP">Product Url</p>
                <input id="input4" placeholder="prodUrl" type="text" class="form-control" v-model="prodUrl" required>
      </div>
      <div id="modalFoot" class="modal-footer">
        <button id="closeButt" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click= "addProd()" id="saveButt" type="button" class="btn btn-primary">Save Product</button>
      </div>
    </div>
  </div>
</div>

<!-- <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div id="modalBody" class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">EDIT PRODUCT</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

                <p id= "modalP">Product Name</p>
                <input id="input1" placeholder="prodName" type="text" class="form-control" v-model="prodName" required>

                <p id= "modalP">Quantity</p>
                <input id="input2" placeholder="quantity" type="number" class="form-control" v-model="quantity" required>

                <p id= "modalP">Amount</p>
                <input id="input3" placeholder="amount" type="number" class="form-control" v-model="amount" required>

                <p id= "modalP">Category</p>
                <input id="input4" placeholder="category" type="text" class="form-control" v-model="category" required>

                <p id= "modalP">Product Url</p>
                <input id="input4" placeholder="prodUrl" type="text" class="form-control" v-model="prodUrl" required>
      </div>
      <div class="modal-footer">
        <button id="closeButt" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="updateProd(item)" id="saveButt" type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->

<br><br><br>

<userCompView/>
        
    </div>
</template>
<script>
import userCompView from '../components/userCompView.vue'
export default {
    components:{
        userCompView
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
        addProd(){
            this.$store.dispatch('addProd',this.$data)
        },
        deleteProd(id){
            this.$store.dispatch('deleteProd',id)
        },
        updateProd(id){
            let edit = {
                id:id,
                prodName:this.prodName,
                quantity:this.quantity,
                amount:this.amount,
                category:this.categpry,
                prodUrl:this.prodUrl
            }
            this.$store.dispatch('updateProd',edit)
        },

    },
    computed:{
        getProduct(){
            this.$store.dispatch('getProduct')
        },
        getUser(){
            this.$store.dispatch('getUser')
        }
    },
    mounted(){
        this.getProduct,
        this.getUser
    }
}
</script>
<style scoped>
#body{
    background-color: black;
}
#title{
    margin-top: 100px;
    font-family: audiowide;
    color: indigo;
}

#adminBody{
    background-color: black;
}

#adminImg{
    width: 90px;
    height: 90px;
}
#adminImg:hover{
    transform: scale(2);
    transition: 0.2s;
}

#adminButt{
    color: red;
    background-color: black;
    border: solid 2px black;
    border-radius: 12px;
    font-weight: bolder;
}
#adminButt1{
    color: red;
    background-color: white;
    border: solid 2px black;
    border-radius: 12px;
    font-weight: bolder;
}
#adminButt2{
    color: red;
    background-color: white;
    border: solid 2px black;
    border-radius: 12px;
    font-weight: bolder;
}

#adminButt:hover{
    scale: 1.2;
    /* transition: 0.3s; */
    background-color: gold;
    color: black;
}
#adminButt1:hover{
    /* transition: 0.3s; */
    background-color: red;
    color: black;
}
#adminButt2:hover{
    /* transition: 0.3s; */
    background-color: red;
    color: black;
}
#modalBody{
    background-color: indigo;
    color: gold;
    font-family: audiowide;
}
#closeButt{
    background-color: red;
    color: black;
}
#closeButt:hover{
    background-color: red;
    color: black;
    transform: scale(1.1);
    transition: 0.2s;
}
#saveButt{
    background-color: gold;
    color: black;
}
#saveButt:hover{
    background-color: gold;
    color: black;
    transform: scale(1.1);
    transition: 0.2s;
}

#addButt{
    background-color: indigo;
    margin-bottom: 20px;
    color: gold;
}

#deleteButt{
    background-color: red;
    color: black;
    border-radius: 12px;
}
#deleteButt:hover{
    background-color: red;
    color: black;
    border-radius: 12px;
    transform: scale(1.1);
    transition: 0.2s;
}
#editButt{
    background-color: red;
    color: black;
    border-radius: 12px;
}
#editButt:hover{
    background-color: red;
    color: black;
    border-radius: 12px;
    transform: scale(1.1);
    transition: 0.2s;
}

#modalP{
    color: gold;
    font-family: Audiowide;
    margin-top: 10px;
    text-shadow: 0px 0px 10px white !important;
    font-size: large;
}
#input1{
    border: solid 2px gold ;
    box-shadow: 0px 0px 7px gold;
}
#input2{
    border: solid 2px gold;
    box-shadow: 0px 0px 7px gold;
}
#input3{
    border: solid 2px gold;
    box-shadow: 0px 0px 7px gold;
}
#input4{
    border: solid 2px gold;
    box-shadow: 0px 0px 7px gold;
} 
</style>