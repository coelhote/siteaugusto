<template>
<v-img class="img-products-banner" src="/images/img-products.png"></v-img>
<About />
<v-container>
  <Timeline />
</v-container>

</template>

<script>
import { defineComponent } from 'vue';

// Components
import About from '@/components/About.vue';
import Timeline from '@/components/Timeline.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    About,
    Timeline
  },

});
</script>