<template>
  <!-- Content -->
  <div class="content" :class="scaleContent">
    <!-- Article -->
    <article class="content__article">
      <p class="content__article-title">
        Photos
      </p>
      <p class="content__article-details">
        [ Insert Content Here ]
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