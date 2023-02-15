<template>
    <v-footer class="footer" dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center bg-light">
            <v-img height="100px" class="img-products-banner" :src="'/images/logo01.png'"></v-img>
            <v-row v-if="this.$isMobile()">
                <v-col cols="12">
                    <v-card-text class="white--text pt-0">
                        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo
                        interdum.
                        Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
                        dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia
                        malesuada.
                    </v-card-text>
                </v-col>

                <v-col cols="12">
                    <v-card-text>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                            <v-icon size="24px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                    </v-card-text>
                </v-col>
                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
            </v-row>

            <v-row v-else>
                <v-col cols="6">
                    <v-card-text class="white--text pt-0">
                        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo
                        interdum.
                        Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
                        dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia
                        malesuada.
                    </v-card-text>
                </v-col>

                <v-col cols="6">
                    <v-card-text>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                            <v-icon size="24px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                    </v-card-text>
                </v-col>
                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
            </v-row>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'MainFooter',

    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>