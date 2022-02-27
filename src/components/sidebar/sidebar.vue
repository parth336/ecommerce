<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: ["user"],
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
  methods: {
    fetchData(){
      console.log(this.user);
    }
  },
  mounted() {
    this.fetchData();
  },
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <img src="@/assets/audio-waves.png" width="40" height="40">
      </span>
      <span v-else>
          <img src="@/assets/audio-waves.png" width="100" height="80">
      </span>
    </h1>
    
    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/admin" icon="fas fa-columns">Admin</SidebarLink>
    <SidebarLink to="/cart" icon="fas fa-shopping-cart">Cart</SidebarLink>
    <SidebarLink v-if="!user.isLoggedIn" to="/login" icon="fas fa-sign-in-alt">Login</SidebarLink>
    <SidebarLink v-else to="/logout" icon="fas fa-sign-in-alt">Logout</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>