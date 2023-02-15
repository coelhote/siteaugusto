<template>
    <v-img class="img-products-banner" src="/images/img-products.png"></v-img>

    <v-content class="">
        <v-container>
            <v-row>
                <v-col class="text-center" cols="12">
                    <v-text class="subheading"> PRODUTOS </v-text>
                    <h2 class="heading">ALGUNS PRODUTOS QUE VOCÊ PODE CONTRATAR</h2>
                </v-col>
            </v-row>

            <v-main>
                <Products showButton />
            </v-main>
        </v-container>
    </v-content>
</template>

<script>
import { defineComponent } from 'vue';
// Components
import Products from '@/components/Products.vue';

export default defineComponent({
    name: 'ProductsView',

    components: {
        Products,
    },
});
</script>
<style>

</style>