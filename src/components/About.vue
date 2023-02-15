<template>
    <v-item-group class="bg-light">
        <v-container>
            <v-row v-if="this.$isMobile()">
                <v-col cols="12">
                    <v-text class="text-center">
                        <h4 class="subheading">CONHEÇA UM POUCO MAIS</h4>
                        <h1 class="heading">SOBRE AUGUSTO OLIVEIRA</h1>
                    </v-text>
                        <v-img style="margin: 20px 0" :src="'/images/img1-2.jpg'" />
                    <v-text>
                        Lorem ipsum aliquam augue nam condimentum et magna, tempor ipsum facilisis rhoncus magna primis
                        eu, gravida etiam habitant aliquet nulla inceptos. orci pretium dictum ligula placerat ornare
                        vivamus suspendisse ultrices felis rhoncus, sociosqu urna nec lacus diam id velit luctus fusce
                        curae, consectetur viverra porttitor scelerisque ut aenean mollis taciti eget. suscipit dictumst
                        rutrum non orci nulla arcu justo arcu vitae vulputate, habitasse non condimentum consectetur ut
                        proin enim dictumst
                    </v-text>
                    <v-col cols="12">
                        <v-btn block v-if="showButton" :to="'/about'" class="btn-product" elevation="8" large>Ver Mais</v-btn>
                    </v-col>
                </v-col>
            </v-row>

            <v-row v-else>
                <v-col cols=6>
                    <v-text>
                        <span class="subheading">CONHEÇA UM POUCO MAIS</span>
                        <h1 class="heading">SOBRE AUGUSTO OLIVEIRA</h1>
                        Lorem ipsum aliquam augue nam condimentum et magna, tempor ipsum facilisis rhoncus magna primis
                        eu, gravida etiam habitant aliquet nulla inceptos. orci pretium dictum ligula placerat ornare
                        vivamus suspendisse ultrices felis rhoncus, sociosqu urna nec lacus diam id velit luctus fusce
                        curae, consectetur viverra porttitor scelerisque ut aenean mollis taciti eget. suscipit dictumst
                        rutrum non orci nulla arcu justo arcu vitae vulputate, habitasse non condimentum consectetur ut
                        proin enim dictumst
                    </v-text>

                    <v-btn v-if="showButton" :to="'/about'" class="btn-about" elevation="8" large>Ver Mais</v-btn>
                </v-col>

                <v-col cols="6">
                    <v-img :src="'/images/img1-2.jpg'" />
                </v-col>


            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
export default {
    name: 'AboutMain',
    props: {
        showButton: Boolean
    }
}
</script>
