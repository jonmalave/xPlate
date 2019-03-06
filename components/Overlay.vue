<template>
  <div class="overlay" :class="display" @click="hide">

  </div>
</template>

<script>
export default {
  data() {
    return {
      $store: this.$store
    };
  }, 
  computed: {
    display() {
      return this.$store.menu.show ? 'overlay--display' : '';
    } 
  },
  methods: {
    hide() {
      this.$store.menu.show = false;
    }
  }
};
</script>

<style>
/* Block Elements */
.overlay {
  display: none;
  background-color: rgba(0,0,0,0.4);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;   
}

/* Modifiers */
.overlay--display {
  display: block;   
}

/* Media Queries */
@media only screen and (min-width: 800px) {   
  .overlay--display {
    display: none;   
  }
}
</style>
