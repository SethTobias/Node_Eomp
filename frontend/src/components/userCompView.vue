<template>
    <body id="body">
        
    </body>

    <button id="addButt" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
            Add
        </button>

<table class="table table-dark table-responsive">
            <tr>
                <th style="color: white; background-color: gold;">id</th>
                <th style="color: white; background-color: indigo;">First Name</th>
                <th style="color: white; background-color: gold;">Last Name</th>
                <th style="color: white; background-color: indigo;">Age</th>
                <th style="color: white; background-color: gold;">Gender</th>
                <th style="color: white; background-color: indigo;">Role</th>
                <th style="color: white; background-color: gold;">Email Address</th>
                <th style="color: white; background-color: indigo;">Password</th>
                <th style="color: white; background-color: gold;">Profile</th>
              
            </tr>
            
            <tr v-for="item in $store.state.user" :key="item.id">
                <td style = "color: white; background-color: indigo; padding-top: 40px">{{item.userID}}</td>
                <td style = "color: white; background-color: black; font-size: 20px; padding-top: 40px">{{item.firstName}}</td>
                <td style = "color: white; background-color: indigo; font-size: 20px; padding-top: 40px">{{item.lastName}}</td>
                <td style = "color: white; background-color: black; font-size: 20px; padding-top: 40px">{{item.userAge}}</td>
                <td style = "color: white; background-color: indigo; font-size: 20px; padding-top: 40px">{{item.gender}}</td>
                <td style = "color: white; background-color: black; font-size: 20px; padding-top: 40px">{{item.userRole}}</td>
                <td style = "color: white; background-color: indigo; font-size: 20px; padding-top: 40px">{{item.emailAdd}}</td>
                <td style = "color: white; background-color: black; font-size: 20px; padding-top: 40px">{{item.userPass}}</td>
                <td style = "color: white; background-color: indigo; font-size: 20px; padding-top: 40px">{{item.userProfile}}</td>
                <td><button @click="deleteUser(item.userID)" id="deleteButt">Delete</button></td> 

                <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal4-' + item.userID" id="editButt">
                  Edit
                </button></td>  

                <div class="modal fade" :id="'exampleModal4-' + item.userID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div id="modalBody" class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">EDIT USER</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

                <p id= "modalP">First Name</p>
                <input id="input1" placeholder="First Name" type="text" class="form-control" v-model="firstName" required>

                <p id= "modalP">Last Name</p>
                <input id="input2" placeholder="Last Name" type="text" class="form-control" v-model="lastName" required>

                <p id= "modalP">User Age</p>
                <input id="input3" placeholder="User Age" type="number" class="form-control" v-model="userAge" required>

                <p id= "modalP">Gender</p>
                <input id="input3" placeholder="gender" type="text" class="form-control" v-model="gender" required>

                <p id= "modalP">User Role</p>
                <input id="input4" placeholder="User Role" type="text" class="form-control" v-model="userRole" required>

                <p id= "modalP">User Email</p>
                <input id="input4" placeholder="User Email" type="email" class="form-control" v-model="emailAdd" required>

                <p id= "modalP">User Password</p>
                <input id="input4" placeholder="User Password" type="text" class="form-control" v-model="userPass" required>

                <p id= "modalP">User Profile</p>
                <input id="input4" placeholder="User Profile" type="text" class="form-control" v-model="userProfile" required>
      </div>
      <div id="modalFoot" class="modal-footer">
        <button id="closeButt" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="updateUser(item.userID)" id="saveButt" type="button" class="btn btn-primary">Save Product</button>
      </div>
    </div>
  </div>
</div>

            </tr>   
        </table>

        <!-- ADD User MODAL -->
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div id="modalBody" class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">ADD USER</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

                <p id= "modalP">First Name</p>
                <input id="input1" placeholder="First Name" type="text" class="form-control" v-model="firstName" required>

                <p id= "modalP">Last Name</p>
                <input id="input2" placeholder="Last Name" type="text" class="form-control" v-model="lastName" required>

                <p id= "modalP">User Age</p>
                <input id="input3" placeholder="User Age" type="number" class="form-control" v-model="userAge" required>

                <p id= "modalP">Gender</p>
                <input id="input3" placeholder="gender" type="text" class="form-control" v-model="gender" required>

                <p id= "modalP">User Role</p>
                <input id="input4" placeholder="User Role" type="text" class="form-control" v-model="userRole" required>

                <p id= "modalP">User Email</p>
                <input id="input4" placeholder="User Email" type="email" class="form-control" v-model="emailAdd" required>

                <p id= "modalP">User Password</p>
                <input id="input4" placeholder="User Password" type="text" class="form-control" v-model="userPass" required>

                <p id= "modalP">User Profile</p>
                <input id="input4" placeholder="User Profile" type="text" class="form-control" v-model="userProfile" required>
      </div>
      <div id="modalFoot" class="modal-footer">
        <button id="closeButt" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click= "addUser()" id="saveButt" type="button" class="btn btn-primary">Save Product</button>
      </div>
    </div>
  </div>
</div>

<!-- USER MODAL -->

<!-- <div class="modal fade" :id="'exampleModal4-' + item.userID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div id="modalBody" class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">EDIT USER</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

                <p id= "modalP">First Name</p>
                <input id="input1" placeholder="First Name" type="text" class="form-control" v-model="firstName" required>

                <p id= "modalP">Last Name</p>
                <input id="input2" placeholder="Last Name" type="text" class="form-control" v-model="lastName" required>

                <p id= "modalP">User Age</p>
                <input id="input3" placeholder="User Age" type="number" class="form-control" v-model="userAge" required>

                <p id= "modalP">Gender</p>
                <input id="input3" placeholder="gender" type="text" class="form-control" v-model="gender" required>

                <p id= "modalP">User Role</p>
                <input id="input4" placeholder="User Role" type="text" class="form-control" v-model="userRole" required>

                <p id= "modalP">User Email</p>
                <input id="input4" placeholder="User Email" type="email" class="form-control" v-model="emailAdd" required>

                <p id= "modalP">User Password</p>
                <input id="input4" placeholder="User Password" type="text" class="form-control" v-model="userPass" required>

                <p id= "modalP">User Profile</p>
                <input id="input4" placeholder="User Profile" type="text" class="form-control" v-model="userProfile" required>
      </div>
      <div id="modalFoot" class="modal-footer">
        <button id="closeButt" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="updateUser(item.userID)" id="saveButt" type="button" class="btn btn-primary">Save Product</button>
      </div>
    </div>
  </div>
</div> -->

</template>
<script>
export default {
    data(){
        return{
        firstName: null,
        lastName: null,
        userAge: null,
        gender: null,
        userRole: null,
        emailAdd: null,
        userPass: null,
        userProfile: null
        }
    },
    methods:{
        deleteUser(id){
            this.$store.dispatch('deleteUser',id)
        },
        addUser(){
            this.$store.dispatch('addUser',this.$data)
        },
        updateUser(id){
            let edit = {
                id:id,
                firstName:this.firstName,
                lastName:this.lastName,
                userAge:this.userAge,
                gender:this.gender,
                userRole:this.userRole,
                emailAdd:this.emailAdd,
                userPass:this.userPass,
                userProfile:this.userProfile
            }
            this.$store.dispatch('updateUser',edit)
        }

    },

    computed:{
        getUser(){
            this.$store.dispatch('getUser')
        }
    },
    mounted(){
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