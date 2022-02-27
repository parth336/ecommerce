<template>
    <div class="col">
        <div class="card shadow p-3 mb-5 bg-body rounded w-100 h-100">
            <div>
                <img :src="product.image" class="card-img-top" style="height:550px" alt="...">
            </div>
            <div class="card-body" style="text-align:left">
                <h5 class="card-title">{{product.name}}</h5>
                <b> Price: ${{product.price}} </b>
                <p class="card-text" >
                    {{product.description}}
                </p>
                <router-link :to="{name:'viewItem', params:{id:product.id}}">
                    <a class="btn btn-primary">View</a>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "productCard",
    props : ["product"],
    methods: {
        
    },
}
</script>