<template>
  <div class="container" style="padding-top:3em">
    <div id="carouselExampleDark" class="carousel  slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="d-block w-100" alt="..." width="100%" height="500">
          <div class="carousel-caption d-none d-md-block">
            <h3><strong> First slide label </strong></h3>
            <p><b> Some representative placeholder content for the first slide.</b></p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="d-block w-100" alt="..." width="100%" height="500">
          <div class="carousel-caption d-none d-md-block">
            <h3><strong> Second slide label </strong></h3>
            <p><b> Some representative placeholder content for the second slide.</b></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://images.pexels.com/photos/5623674/pexels-photo-5623674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="d-block w-100" alt="..."  width="100%" height="500">
          <div class="carousel-caption d-none d-md-block">
            <h3><strong> Third slide label </strong></h3>
            <p><b> Some representative placeholder content for the third slide.</b></p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="row p-3">
      <h3>Top Products</h3>
      <div class="row">
            <div v-for="product of products" :key="product.id" class="col-xl-4 col-md-6 d-flex col-12 pt-3">
                    <productCard :product="product"> </productCard>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import productCard from '../components/product/productCard.vue'

export default {
  name: 'Home',
  components:{
    productCard
  },
  props:[
    "products"
  ]
  
}
</script>
