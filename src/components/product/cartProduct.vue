<template>
    
        <div class="row">
            <div class="card shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <div class="row">
                        <div class="col-4">
                            <img :src="product.image" alt="" height="250" width="200" srcset="">
                        </div>
                        <div class="col-8" style="text-align:left">
                            <h5 class="card-title">{{product.name}}</h5>
                            <p class="card-text">{{product.description}}</p>
                            <strong>Quantity:</strong>
                            <div class="row">
                                <div class="col-2">
                                    <div class="input-group">
                                        <button class="btn btn-outline-secondary btn-sm" type="button" @click="decreaseQuantity()"><i class="fas fa-minus"></i></button>
                                        <input type="text" class="form-control form-control-sm" id="itemQuantity" :value="product.quantity" @input="$emit('update:productQuantity', $event.target.value)"  disabled>
                                        <button class="btn btn-outline-secondary btn-sm" type="button" @click="increaseQuantity()"><i class="fas fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6 p-3">
                                    <strong>Price: </strong>
                                    <b>${{product.price}} /Unit</b>
                                </div>
                                <div class="col-6 p-3" style="text-align:right">
                                    <strong>Total Price: </strong>
                                    <b>${{product.quantity * product.price}}</b>
                                </div>
                            </div>
                            <button class="btn btn-danger" @click="$emit('remove')">Delete</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    
</template>
<script>

export default {
    name: "productCard",
    props : ["product","productQuantity"],
    methods: {
         decreaseQuantity(){
             
            if(this.product.quantity == 1){
                this.$emit('update:productQuantity', 1)
                this.$emit('upadteTotal')

            }else{
                let itemQuantity = this.product.quantity - 1
               this.$emit('update:productQuantity', itemQuantity)
               this.$emit('updateTotal')
            }
                
        },
        increaseQuantity(){
            let itemQuantity = this.product.quantity + 1
            this.$emit('update:productQuantity', itemQuantity)
            this.$emit('updateTotal')
        },
    },

}
</script>