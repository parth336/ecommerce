<template>
    <div class="container" style="padding-top:4em">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Add Category</h3>
            </div>
        </div>
        <div class="row">
            <div class="offset-3 col-6">
                <form>
                    <div class="mb-3">
                        <label for="categoryName" class="form-label">Name</label>
                        <input type="text" name="category" id="categoryName" class="form-control" v-model="name">
                    </div>
                    <div class="mb-3">
                        <label for="categoryDesc" class="form-label">Description</label>
                        <textarea type="text" name="categoryDesc" id="categoryDesc" class="form-control" v-model="description"> </textarea>
                    </div>
                    <div class="mb-3">
                        <label for="categoryImage" class="form-label">Image</label>
                        <input type="text" name="categoryImage" id="categoryImage" class="form-control" v-model="image">
                    </div>
                    <button class="btn btn-outline-info" type="button" @click="addCategory">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require("axios");
const sweetalert = require("sweetalert");
export default {
    data() {
        return {
            name:"",
            description:"",
            image:""
        }
    },
    methods: {
        addCategory(){
            const newCategory = {
                name:this.name,
                description:this.description,
                image:this.image
            }
            const baseUrl = "http://localhost:8081";
            axios({
                method:"post",
                url:`${baseUrl}/category/create`,
                data:JSON.stringify(newCategory),
                headers:{
                    "content-type":"application/json"
                }
            }).then(()=>{
                sweetalert({
                    text: "Category Added Successfully!",
                    icon: "success"
                })
            }).catch((err)=>{
                console.log(err);
            })
        }
        

    },
}
</script>
<style scoped>
    
</style>
