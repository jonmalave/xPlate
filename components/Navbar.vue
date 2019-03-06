<template>
  <!-- Navbar -->
  <nav class="navbar">
    <!-- Menu Button & Logo -->
    <div class="navbar__section navbar__section--left">
      <div class="navbar__menu-button" @click="toggleMenu">
        <i class="fa fa-bars"/>
      </div>

      <div class="navbar__logo-container" @click="action({ type: 'route', value: '/'})">
        <p v-if="title && !logo" class="navbar__title">{{ title }}</p>
        <img v-if="logo && !title" class="navbar__logo" :src="logo" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: false
    },
    logo: {
      type: String,
      default: '',
      required: false
    },
    toggleMenuOn: {
      type: Boolean,
      default: false,
      required: true
    }
  },  
  data() {
    return {
      $store: this.$store,
      keyword: ''
    };
  }, 
  methods: {
    toggleMenu() {
      this.$store.menu.show = !this.$store.menu.show;
    },
    action(payload) {
      this.$emit('action', payload);
    }    
  },
  mounted() {
    if (this.toggleMenuOn && window.innerWidth > 1280) {
      this.toggleMenu();
    }
  }
};
</script>

<style>
/* Block Elements */
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 8px #e0e0e0; 
  position: fixed;
  top: 0;
  left: 0;  
  z-index: 7;
}
.navbar__section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar__menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #989998;
  height: 56px;
  width: 56px;
  cursor: pointer;
}
.navbar__title {
  font-size: 22px;
  font-weight: bold;
  color: #494b4b;
  height: auto;
  width: auto;  
}
.navbar__logo {
  height: 32px;
  width: auto;
}
.navbar__logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  cursor: pointer;
}
.navbar__search {
  display: flex;
  align-items: center;
  height: 56px;
  width: auto;
  margin: 0 8px;
}
.navbar__search-input {
  font-size: 16px;
  color: #494b4b;
  height: 32px;
  width: 96px;
  border-radius: 4px 0 0 4px;
  border-width: 1px 0 1px 1px;
  border-style: solid;
  border-color: #979897;
  box-sizing: border-box;
  outline: none;
  padding: 8px;
}
.navbar__search-input-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #979897;
  background-color: #f5f5f5;
  height: 32px;
  width: 33px;
  border-radius: 0 4px 4px 0;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
}
.navbar__ellipsis {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #989998;
  height: 56px;
  width: 56px;
}
.navbar__user {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #989998;
  height: 56px;
  width: 56px;
  cursor: pointer;
}
.navbar__user-photo {
  height: 32px;
  width: 32px;
  border-radius: 50%;
}

/* Modifiers */
.navbar__section--left {
  position: absolute;
  top: 0;
  left: 0;  
}
.navbar__section--center {
  position: absolute;
  top: 0;
  right: 8px;
}
.navbar__section--right {
  display: none !important;
  position: absolute;
  top: 0;
  right: 24px;  
}
.navbar__search-input::placeholder {
  color: #484a4a;
}
.navbar__search-input:focus {
  box-shadow: 0 0 8px #e0e0e0;    
}
.navbar__search-input-button:hover {
  color: #494b4b;
  background-color: #e8e8e8;
  box-shadow: 0 0 8px #e0e0e0;   
}

/* Media Queries */
@media only screen and (min-width: 512px) {   
  .navbar__search-input {
    width: 256px;
  }
}
@media only screen and (min-width: 800px) {
  .navbar__section--center {
    position: relative;
    top: none;
    right: none;
  } 
  .navbar__section--right {
    display: flex !important;
  } 
}
@media only screen and (min-width: 1024px) {
  .navbar__search-input {
    width: 512px;
  }
  .navbar__search-input-button {  
    width: 44px;
  }  
}
</style>
