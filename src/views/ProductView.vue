<template>
    <div class="col-md-12">
        <v-img height="300px" class="img-products-banner" :src="'/images/' + this.items.imagem"></v-img>
        <v-container>
            <h1>{{ this.items.titulo }}</h1>
            <v-text>{{ this.items.texto }}</v-text>
        </v-container>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
// Components

export default defineComponent({
    name: 'ProductView',
    data() {
        return {
            proId: this.$route.params.id,
            items: {}
        }
    },
    methods: {
        read() {
            axios.get('http://127.0.0.1:3333/blogs/' + this.$route.params.id).then(({ data }) => {
                console.log(data)
                this.items = data;
            })
                .catch((err) => console.error(err));
        },
    },
    mounted() {
        this.read();
    }
});
</script>
<style>

</style>