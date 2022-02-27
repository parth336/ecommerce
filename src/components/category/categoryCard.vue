<template>
    <div class="col">
        <div class="card w-100 h-100">
            <div>
                <img :src="category.image" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{category.name}}</h5>
                <p class="card-text">
                    {{category.description}}
                </p>
                <a href="#" class="btn btn-primary">Edit</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "categoryCard",
    props : ["category"],
    methods: {
        
    },
}
</script>