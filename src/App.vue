<template>
  
  <sidebar :user="user" />
  
  <div :style="{'margin-left':sidebarWidth}">
    <headerComponent  :user="user" />
  <router-view :baseUrl="baseUrl" :categories="categories" :products="products" :user="user">

  </router-view>
  </div>
  
</template>

<script>
import sidebar from '@/components/sidebar/sidebar.vue'
import {sidebarWidth} from '@/components/sidebar/state'
import headerComponent from '@/components/header/header'
import axios from 'axios'
export default {
  components:{sidebar , headerComponent },
  setup() {
    return {sidebarWidth}
  },
  data() {
    return {
      baseUrl:"http://localhost:8081",
      products:[],
      categories:[],
      user:{}
    }
  },
  methods: {
    async fetchData(){
      await axios.get(`${this.baseUrl}/categories`).then((res)=>{
          this.categories = res.data.data;
      }).catch((err)=>{
          console.log(err);
      })
      await axios.get(`${this.baseUrl}/products`).then((res)=>{
        this.products = res.data.data;
      }).catch((err)=>{
        console.log(err);
      })
      await axios.get(`${this.baseUrl}/user`).then((res)=>{
        this.user = res.data.data
      }).catch(err => console.log(err))
    }
  },
  mounted() {
    this.fetchData();
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
