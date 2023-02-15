<template>
    <v-item-group>
        <v-container>
            <v-row>
                <v-col v-for="n in 3" :key="n" cols="12" md="4">
                    <v-item>
                        <v-card class="mx-auto" max-width="344">
                            <v-img lazy-src="/images/img5.jpg" src='/images/img5.jpg' height="200px"></v-img>

                            <v-card-title>
                                Loki n' Low
                            </v-card-title>

                            <v-card-subtitle>
                                Em breve
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
    name: 'ScheduleMain',
}
</script>