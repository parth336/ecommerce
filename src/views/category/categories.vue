<template>
    <div class="container " style="padding-top:4em">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Categories</h3>
                <router-link :to="{name:'AddCategory'}"><button style="float:right" class="btn btn-success"> Add category </button></router-link>
            </div>
        </div>
        <div class="row">
            <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 d-flex col-12 pt-3">
                    <categoryCard :category="category"> </categoryCard>
            </div>
        </div>
    </div>
</template>

<script>

import categoryCard from '../../components/category/categoryCard.vue'

export default {
    name: "Categories",
    props:["categories"],
    components: {
        categoryCard
    },
    data() {
        return {
            baseUrl:"http://localhost:8081",
            
        }
    },
    methods: {
        

    },
    mounted() {
        
    },
    
}
</script>
<style scoped>
    
</style>
