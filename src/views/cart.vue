<template>
    <div class="container" style="padding-top:4em">
        <div class="row">
            <div class="col-12">
                <h3>Cart</h3>
            </div>
        </div>   
        <div class="row">
            <div v-for="(product,index) of userProducts" :key="product.id" class="col-xl-12 col-md-12 d-flex col-12 p-3">
                    <productCard v-model:productQuantity="product.quantity" @remove="removeItem(index)" @updateTotal="updateTotal()" :product="product">
                    </productCard>
            </div>
        </div> 
        <div v-show="userProducts.length" class="row" style="text-align:right">
            <hr>
            <div class="col-4">
                <button class="btn btn-success" style="width:100%"><i class="far fa-credit-card"></i> Checkout</button>
            </div>
            <div class="col-4 offset-4">
                <h3>Subtotal: ${{subTotal}}</h3>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
// import {watchEffect} from 'vue'
// import sweetalert from 'sweetalert'
import productCard from '../components/product/cartProduct.vue'
export default {
    components:{
        productCard
    },
    data() {
        return {
            userProducts: {},
            subTotal:0
        }
    },
    props:["baseUrl","products"],
    async mounted() {
        await axios.get(`${this.baseUrl}/cart`).then((res)=>{
        this.userProducts = res.data.details;
        console.log(res.data.details);
        }).catch(err => console.log(err))
        for(let x = 0 ; x<this.userProducts.length ; x++){
            this.subTotal += Number(this.userProducts[x].price) * Number(this.userProducts[x].quantity)
        }
    },
    methods: {
        removeItem(index){
            this.userProducts.splice(index,1);
            this.subTotal = 0;
            for(let x = 0 ; x<this.userProducts.length ; x++){
                this.subTotal += Number(this.userProducts[x].price) * Number(this.userProducts[x].quantity)
            }
        },
        updateTotal(){
            this.subTotal = 0;
            for(let x = 0 ; x<this.userProducts.length ; x++){
                this.subTotal += Number(this.userProducts[x].price) * Number(this.userProducts[x].quantity)
            }
        }
    },
    setup() {
         
    }
    
    
}

</script>