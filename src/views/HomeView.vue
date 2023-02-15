<template>
  <Banner />

  <v-content class="">
    <v-container>
      <v-row>
        <v-col class="text-center" cols="12">
          <v-text class="subheading"> PRODUTOS </v-text>
          <h2 class="heading">SHOWS E AULAS</h2>
        </v-col>
      </v-row>

      <v-main>
        <Products />
      </v-main>
    </v-container>
  </v-content>

  <v-content class="bg-light">
    <v-container>
      <v-main>
        <About showButton />
      </v-main>
    </v-container>
  </v-content>

  <v-content class="">
    <v-container>
      <v-row>
        <v-col class="text-center" cols="12">
          <v-text class="subheading"> AGENDA </v-text>
          <h2 class="heading">ACOMPANHE MINHA AGENDA DE SHOWS</h2>
        </v-col>
      </v-row>

      <v-main>
        <Schedule />
      </v-main>
    </v-container>
  </v-content>

  <v-content class="bg-light">
    <v-container class="bg-light">
      <v-row>
        <v-col class="text-center" cols="12">
          <v-text class="subheading"> DEPOIMENTOS </v-text>
          <h2 class="heading">ANTIGOS ALUNOS E COMPANHEIROS DE BANDA</h2>
        </v-col>
      </v-row>

      <v-main>
        <Testimonial />
      </v-main>
    </v-container>
  </v-content>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Banner from '@/components/Banner.vue';
import Products from '@/components/Products.vue';
import About from '@/components/About.vue';
import Schedule from '@/components/Schedule.vue';
import Testimonial from '@/components/Testimonial.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Banner,
    Products,
    About,
    Schedule,
    Testimonial
  },
});
</script>
