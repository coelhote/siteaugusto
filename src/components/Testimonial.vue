<template>
    <v-item-group>
        <v-container>
            <v-carousel style="height: auto !important;max-height: 500px !important;" cycle show-arrows="hover" hide-delimiters>
                <v-carousel-item v-for="n in 3" :key="n">
                    <v-col cols="12" md="12">
                        <v-item>
                            <v-card>
                                <v-row>
                                    <v-col cols="1">
                                        <v-avatar>
                                            <v-img src='/images/img3.jpg' />
                                        </v-avatar>
                                    </v-col>
                                    <v-col cols="10">
                                        <v-card-title>
                                            Dudu Luis
                                        </v-card-title>
                                    </v-col>
                                </v-row>
                                <v-card-text>
                                    Lorem ipsum aliquam augue nam condimentum et magna, tempor ipsum facilisis rhoncus
                                    magna primis
                                    eu, gravida etiam habitant aliquet nulla inceptos. orci pretium dictum ligula
                                    placerat ornare
                                    vivamus suspendisse ultrices felis rhoncus, sociosqu urna nec lacus diam id velit
                                    luctus fusce
                                    curae, consectetur viverra porttitor scelerisque ut aenean mollis taciti eget.
                                    suscipit dictumst
                                    rutrum non orci nulla arcu justo arcu vitae vulputate, habitasse non condimentum
                                    consectetur ut
                                    proin enim dictumst
                                </v-card-text>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-carousel-item>
            </v-carousel>
        </v-container>
    </v-item-group>
</template>

<script>
export default {
    name: 'TestimonialMain',
}
</script>