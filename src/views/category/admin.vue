<template>
    <div class="d-grid gap-2 col-6 mx-auto" style="padding-top:4em">
      <router-link to="/admin/products">
        <button class="btn btn-success btn-lg" style="width:100%" type="button"><i class="fas fa-th-list"></i> Products</button>
      </router-link>
      <router-link to="/admin/categories">
        <button class="btn btn-success btn-lg" style="width:100%" type="button"><i class="fas fa-table"></i> Categories</button>
      </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>