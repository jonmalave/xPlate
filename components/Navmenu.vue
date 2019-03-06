<template>
  <!-- Navmenu-->
  <nav class="navmenu">
    <!-- Menu Button & Logo -->
    <div class="navmenu__menu-button-container">
      <div class="navmenu__menu-button" @click="$store.menu.show = false">
        <i class="fa fa-bars"/>
      </div>

      <div class="navmenu__logo-container" @click="action({ type: 'route', value: '/'})">
        <p v-if="title && !logo" class="navmenu__title">{{ title }}</p>
        <img v-if="logo && !title" class="navmenu__logo" :src="logo" />
      </div>
    </div>

    <!-- Links -->
    <div
      v-for="(link, index) in $store.menu.links" 
      :key="index"
      class="navmenu__link"
      :class="isActive(link.action)"
      @click="action(link.action)">
        <div class="navmenu__link-icon">
          <i :class="link.icon"></i>
        </div>
        {{ link.name }}
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
    }    
  },
  data() {
    return {
      $store: this.$store
    };
  }, 
  methods: {
    isActive(action) {
      return action.value === this.$route.path ? 'navmenu__link--active' : '';
    },    
    action(payload) {
      this.$emit('action', payload);
    }  
  }  
};
</script>

<style>
/* Block Elements */
.navmenu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 240px;
  background-color: #f5f5f5;
  border-style: solid;
  border-color: #979897;
  border-width: 0;
  padding: 72px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
.navmenu__menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #989998;
  height: 56px;
  width: 56px;
  cursor: pointer;
}
.navmenu__menu-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}
.navmenu__title {
  font-size: 22px;
  font-weight: bold;
  color: #494b4b;
  height: auto;
  width: auto;  
}
.navmenu__logo {
  height: 32px;
  width: auto;
}
.navmenu__logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  cursor: pointer;
}
.navmenu__link {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  height: 40px;
  width: 240px;
  cursor: pointer;
}
.navmenu__link-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 56px;
}

/* Modifiers */
.navmenu__link:hover {
  background-color: #dcdcdc;
}
.navmenu__link--hide {
  display: none;
}
.navmenu__link--active {
  background-color: #c8c8c8;
}

/* Media Queries */
@media only screen and (min-width: 800px) {
  .navmenu {
    z-index: 6;
  }
}
</style>
