<template>
    <div></div>
</template>
<script>
import axios from "axios";
export default {
    props:["baseUrl"],
    mounted() {
        this.logout()
    },
    methods: {
        logout(){
            axios.get(this.baseUrl+"/logout").then((data)=>{
                console.log(data);
                window.location.replace("/");
            })
        }
    },
}
</script>