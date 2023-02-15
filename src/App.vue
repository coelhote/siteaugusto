<template>
  <v-app>
    <Header />

    <v-content>
      <router-view />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
// import { onMounted } from 'vue'
// import { useDisplay } from 'vuetify'

export default {
  name: "App",
  components: {
    // HelloWorld
    Header,
    Footer,
  },
  data() {
    return {
      appTitle: 'Augusto Oliveira',
      menuItems: [
        { title: 'Home', path: '/', icon: 'home' },
        { title: 'Biografia', path: '/about', icon: 'face' },
        // { title: 'Aulas', path: '/ss', icon: 'lock' },
        { title: 'Produtos', path: '/products', icon: 'checkbook' },
        { title: 'Agenda', path: '/schedule', icon: 'calendar-blank' },
        // { title: 'E-books', path: '/ww', icon: 'lock' },
        { title: 'Contato', path: '/contact', icon: 'phone' }
      ]
    }
  },
};
</script>

<style>
@font-face {
  font-family: "Fragile";
  src: local("Fragile"),
   url('./fonts/Fragille-Reguler.ttf') format("truetype");
}

body {
  /* font-family: "Fragile", sans-serif; */
  font-weight: 400;
  font-size: 14px;
  color: #0a0400;
}

.test {
  background-color: red;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.text-white {
  color: white;
}

.text-primary {
  color: #9932CC;
}

.white-text {
  color: white !important
}

.transparent {
  background-color: transparent;
  border: none
}

.heading {
  font-size: 40px;
  text-transform: uppercase !important;
  font-weight: 700;
}

.subheading {
  color: #9932CC;
  text-transform: uppercase;
  letter-spacing: .2rem;
  font-weight: bold;
}

.btn-about {
  margin: 20px;
  background-color: #9932CC;
  color: white !important;
}

.btn-product {
  background-color: #9932CC;
  color: white !important;
}

.footer {
  margin-top: 20px
}

.banner-text {
  top: 50%;
  position: relative !important;
}
</style>