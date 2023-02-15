<template>
    <v-item-group>
        <v-container>
            <v-row>
                <v-col v-for="n in 3" :key="n" cols="12" md="4">
                    <v-item>
                        <v-card class="mx-auto" max-width="344">
                            <v-img lazy-src="/images/img4.jpg" src='/images/img4.jpg'></v-img>

                            <v-card-title>
                                Top western road trips
                            </v-card-title>

                            <v-card-subtitle>
                                1,000 miles of wonder
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn class="text-primary" text>
                                    Saiba mais
                                </v-btn>
                            </v-card-actions>

                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
export default {
    name: 'CardCourses',
}
</script>