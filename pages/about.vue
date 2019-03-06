<template>
  <!-- Content -->
  <div class="content" :class="scaleContent">
    <!-- Article -->
    <article class="content__article">
      <p class="content__article-title">
        About
      </p>
      <p class="content__article-details">
        [ A Nuxt.js Boilerplate Project ]
      </p>
      <hr>
    </article>
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
    scaleContent() {
      return this.$store.menu.show ? 'content--offset' : '';
    }
  },
  methods: {

  },
  mounted() {
  }  
};
</script>