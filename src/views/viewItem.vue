<template>
    <div class="container " style="padding-top: 4em;">
        <div class="row">
            <div class="col-12">
                <h3>View Product</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-5 p-3">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img :src="product.image" class="d-block w-100" height="650" alt="...">
                    </div>
                    <div v-for="image in product.altImages" :key="image" class="carousel-item" data-bs-interval="2000">
                        <img :src="image" class="d-block w-100" height="650" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div> 
            </div>
            <div class="col-7 p-3" style="text-align:left">
                <div class="row">
                    <h3><strong>{{product.name}}</strong></h3>
                </div>
                <div class="row">
                    <p>{{product.description}}</p>
                </div>
                <div class="row">
                    <strong>Price: </strong>
                    <b> ${{product.price}}</b>
                </div>
                <br>
                <div class="row">
                    <div class="col-2">
                        <strong>Quantity:</strong>
                        <div class="input-group">
                            <button class="btn btn-outline-secondary btn-sm" type="button" @click="decreaseQuantity()"><i class="fas fa-minus"></i></button>
                            <input type="text" v-model="quantity" class="form-control form-control-sm" aria-label="Text input with 2 dropdown buttons" disabled>
                            <button class="btn btn-outline-secondary btn-sm" type="button" @click="increaseQuantity()"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <div class="col-3" style="padding-top:1.5rem">
                        <button class="btn btn-sm btn-success" @click="addToCart()"><i class="fas fa-cart-plus"></i> Add</button>
                    </div>
                </div>
                <br>
                <div class="row">
                    <b>Features:</b>
                    <ul style="list-style-type:square;">
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
                <div class="row">
                    <b>Comments:</b>
                    <div class="shadow p-3 bg-body rounded" style="margin-bottom:1rem" v-for="comment in product.reviews" :key="comment">
                        {{comment}}
                    </div>
                    <textarea v-model="userComment" class="form-control" ></textarea>
                    <button class="btn btn-sm btn-success mt-3" @click="addComment()">Comment</button>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
import axios from 'axios'
import sweetalert from 'sweetalert'
export default {
    
    data() {
        return {
            product: {},
            quantity: 0
        }
    },
    props:["baseUrl","products","user"],
    mounted() {
        console.log(this.products);
        this.id = this.$route.params.id;
        this.product = this.products.find((product) => product.id = this.id);
        
    },
    methods: {
        decreaseQuantity(){
            if(this.quantity == 0 || this.quantity<0){
                this.quantity = 0
            }else{
                this.quantity--
            }
                
        },
        increaseQuantity(){
            this.quantity++
        },
        addToCart(){
            let data = {id:this.id,quantity:this.quantity}
            axios({
                method:"post",
                url:`${this.baseUrl}/addToCart`,
                data:JSON.stringify(data),
                headers:{
                    "content-type":"application/json"
                }
            }).then(()=>{
                sweetalert({
                    text: "Product added to your cart!",
                    icon: "success"
                })
            }).catch((err)=>{
                console.log(err);
            })
        },
        addComment(){
            console.log(this.user)
            if(this.user.username != 'Visitor'){
                this.product.reviews.push(this.userComment);
                this.userComment = "";
            }else{
                sweetalert({
                    text: "Please login to add comment!",
                    icon: "warning"
                })
            }
            
        }
    },
    
}
</script>