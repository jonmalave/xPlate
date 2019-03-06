<template>
  <!-- Main -->
  <main>
    <!-- Navbar -->
    <navbar
      :title="$store.site.title"
      :logo="$store.site.logo"
      :toggleMenuOn="true"
      @action="action"/>

    <!-- Menu -->
    <navmenu 
      v-if="$store.menu.show"
      :title="$store.site.title"
      :logo="$store.site.logo"
      :toggleMenuOn="true"      
      @action="action"/>

    <!-- Overlay -->
    <overlay/>

    <!-- Content -->
    <nuxt/>

    <!-- Footer -->
    <footer :class="['footer', offset]">
      Handcrafted with <i class="footer__icon fa fa-heart"></i> in Miami. By <a class="footer__link" href="http://jonmalave.com" target="_blank">Jon Malave</a>
    </footer>
  </main>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Navmenu from '~/components/Navmenu.vue';
import Overlay from '~/components/Overlay.vue';

export default {
  components: {
    Navbar,
    Navmenu,
    Overlay
  },
  data() {
    return {
      $store: this.$store      
    };
  },
  computed: {
    offset() {
      return this.$store.menu.show ? 'footer--offset' : '';
    }     
  },
  methods: {
    action(payload) {
      switch(payload.type) {
        case 'route':
          $nuxt._router.push(payload.value);
          break;         
        default:
      }
    }
  },
  mounted() { 
  },
  watch: {
    $route(newVal, oldVal) {
      if (newVal && window.innerWidth < 800) {
        this.$store.menu.show = false;
      }
    }
  }
};
</script>

<style>
/* Block Elements */
* {
  text-decoration: none;
  box-sizing: border-box;
  margin: 0;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #494b4b;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;  
  user-select: none;
}
hr {
  width: 100%;
  border-width: 0.5px;
  border-color: #e0e0e0;
  margin: 16px 0 8px 0;      
}
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 72px 8px 8px 8px;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  height: 56px;
  width: 100%;
  z-index: 3;
}
.footer__icon {
  margin: 0 4px;
}
.footer__link {
  margin: 0 4px;
  color: #494b4b;
  text-decoration: underline;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  z-index: 4;
}
.content__article {
  font-size: 14px;
  width: 100%;
}
.content__article-title {
  font-size: 22px;
  font-weight: bold;
  padding: 8px 0;  
}
.content__article-details {
  font-weight: normal;
}

/* Modifiers */
@media only screen and (min-width: 800px) {
  .content {
    padding: 0 48px;    
  } 
  .content--offset {
    width: calc(100% - 240px);
    margin-left: 240px;
  }  
  .footer--offset {
    margin-left: 240px;
  }       
}
</style>
