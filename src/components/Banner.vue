<template>
  <v-carousel v-if="this.$isMobile()" height="250px" class="" cycle :show-arrows="false">
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-img :src="item.src">
        <v-container class="grey lighten-5">
          <v-row class="">
            <v-col cols="6">
              <!-- <v-card height="100%" class="pa-2 transparent" outlined tile> -->
              <v-text class="banner-text white-text">
                <!-- <span class="subheading">Bem-vindo(a)</span> -->
                <h1 class="subheading">{{ item.title }}</h1>
                {{ item.txtlite }}
              </v-text>
              <!-- </v-card> -->
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>
  </v-carousel>

  <v-carousel v-else height="800px" class="" cycle :show-arrows="false">
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-img :src="item.src">
        <v-container class="grey lighten-5">
          <v-row class="fill-height" justify-start>
            <v-col cols="6">
              <!-- <v-card height="100%" class="pa-2 transparent" outlined tile> -->
              <v-text class="banner-text white-text">
                <span class="subheading">Bem-vindo(a)</span>
                <h1 class="heading">{{ item.title }}</h1>
                {{ item.txt }}
              </v-text>
              <!-- </v-card> -->
            </v-col>
          </v-row>
        </v-container>
      </v-img>

    </v-carousel-item>
  </v-carousel>
</template>

<script>


export default {
  name: 'MainBanner',

  data() {
    return {
      items: [
        {
          src: '/images/img1.jpg',
          txt: "Lorem ipsum euismod aliquet mauris tellus pretium scelerisque iaculis nulla a, id ac mi euismod consequat tellus tempus himenaeos eleifend commodo, sagittis hac elit maecenas arcu nam conubia pulvinar turpis. est massa vivamus porta lectus sociosqu amet conubia nunc hac rhoncus, diam nostra potenti egestas orci leo dui sit nisl condimentum, id consequat viverra tempor augue porta donec maecenas malesuada. inceptos aptent lectus dui etiam porta ut rhoncus porttitor magna augue fringilla ultricies, aenean donec cubilia felis magna dapibus tristique at velit a molestie. torquent donec praesent aliquam fusce amet ad elit torquent. ",
          txtlite: "Seja o mestre da guitarra",
          title: 'Compromisso'
        },
        {
          src: '/images/img2.jpg',
          txt: "Lorem ipsum euismod aliquet mauris tellus pretium scelerisque iaculis nulla a, id ac mi euismod consequat tellus tempus himenaeos eleifend commodo, sagittis hac elit maecenas arcu nam conubia pulvinar turpis. est massa vivamus porta lectus sociosqu amet conubia nunc hac rhoncus, diam nostra potenti egestas orci leo dui sit nisl condimentum, id consequat viverra tempor augue porta donec maecenas malesuada. inceptos aptent lectus dui etiam porta ut rhoncus porttitor magna augue fringilla ultricies, aenean donec cubilia felis magna dapibus tristique at velit a molestie. torquent donec praesent aliquam fusce amet ad elit torquent.",
          txtlite: "Seja o mestre da guitarra",
          title: 'Seriedade'
        },
        {
          src: '/images/img1-1.jpg',
          txt: "Lorem ipsum euismod aliquet mauris tellus pretium scelerisque iaculis nulla a, id ac mi euismod consequat tellus tempus himenaeos eleifend commodo, sagittis hac elit maecenas arcu nam conubia pulvinar turpis. est massa vivamus porta lectus sociosqu amet conubia nunc hac rhoncus, diam nostra potenti egestas orci leo dui sit nisl condimentum, id consequat viverra tempor augue porta donec maecenas malesuada. inceptos aptent lectus dui etiam porta ut rhoncus porttitor magna augue fringilla ultricies, aenean donec cubilia felis magna dapibus tristique at velit a molestie. torquent donec praesent aliquam fusce amet ad elit torquent. ",
          txtlite: "Seja o mestre da guitarra",
          title: 'Compromisso'
        },
        {
          src: '/images/img1-2.jpg',
          txt: "Lorem ipsum euismod aliquet mauris tellus pretium scelerisque iaculis nulla a, id ac mi euismod consequat tellus tempus himenaeos eleifend commodo, sagittis hac elit maecenas arcu nam conubia pulvinar turpis. est massa vivamus porta lectus sociosqu amet conubia nunc hac rhoncus, diam nostra potenti egestas orci leo dui sit nisl condimentum, id consequat viverra tempor augue porta donec maecenas malesuada. inceptos aptent lectus dui etiam porta ut rhoncus porttitor magna augue fringilla ultricies, aenean donec cubilia felis magna dapibus tristique at velit a molestie. torquent donec praesent aliquam fusce amet ad elit torquent. ",
          txtlite: "Seja o mestre da guitarra",
          title: 'Compromisso'
        },
      ],
    }
  },
}
</script>

<style>
@media (max-width: 480px) {

  .banner-text {
    top: 5%;
    position: relative !important;
  }

  .heading {
    font-size: 20px;
    text-transform: uppercase !important;
    font-weight: 100;
  }

  .subheading {
    color: #9932CC;
    text-transform: uppercase;
    letter-spacing: 0rem;
    font-weight: bold;
  }
}
</style>