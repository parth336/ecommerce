<template>
    <div class="container" style="padding-top:4em">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Login</h3>
            </div>
        </div>
        <div class="row">
            <div class="card shadow p-3 bg-body rounded " style="margin-left:8em; width:80%">
            <div class="card-body" style="text-align:left">
                <form>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" v-model="email" class="form-control"  placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                        <input type="password" v-model="password" class="form-control"  placeholder="password">
                    </div>
                    <button class="btn btn-outline-success" type="button" @click="submit()">Submit</button>
                </form>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import sweetalert from 'sweetalert'
export default {
    props:["baseUrl"],
    data() {
        return {
            email:"",
            password:""
        }
    },
    methods: {
        submit(){
            let data = {
                email: this.email,
                password: this.password
            }
            axios.post(this.baseUrl+"/login",data).then((res)=>{
                if(res.data.status){
                    window.location.replace("/");
                }else{
                   sweetalert({
                    text: "Incorrect email or password!",
                    icon: "warning"
                })
                }
                
            })
        }
    },

}
</script>