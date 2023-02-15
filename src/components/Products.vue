<template>
    <v-item-group>
        <v-container>
            <div v-if="this.$isMobile()">
                <v-row v-if="showButton">
                    <v-col v-for="item in items" :key="item.id" md="4" sm="12" xs="12">
                        <v-item>
                            <v-card class="mx-auto" @click="goToDetail(item.id)">
                                <v-img lazy-src="/images/img4.jpg" src='/images/img4.jpg'></v-img>

                                <v-card-title>
                                    {{ item.title }}
                                </v-card-title>

                                <v-card-subtitle>
                                    {{ item.description }}
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn class="text-primary" text>
                                        ENTRE EM CONTATO
                                    </v-btn>
                                </v-card-actions>

                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>

                <v-row v-else>
                    <v-col v-for="item in someItems" :key="item.id" md="4" sm="12" xs="12">
                        <v-item>
                            <v-card class="mx-auto" @click="goToDetail(item.id)">
                                <v-img lazy-src="/images/img4.jpg" src='/images/img4.jpg'></v-img>

                                <v-card-title>
                                    {{ item.title }}
                                </v-card-title>

                                <v-card-subtitle>
                                    {{ item.description }}
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn class="text-primary" text>
                                        ENTRE EM CONTATO
                                    </v-btn>
                                </v-card-actions>

                            </v-card>
                        </v-item>
                    </v-col>
                    <v-col cols="12">
                        <v-btn block :to="'/products'" class="btn-product" elevation="8" large>Ver Mais</v-btn>
                    </v-col>
                </v-row>

            </div>


            <v-row v-else>
                <v-col v-for="item in items" :key="item.id" md="4">
                    <v-item>
                        <!-- <router-link to="/product/${{item.id}}" style="cursor: pointer"> -->
                        <v-card class="mx-auto" @click="goToDetail(item.id)">
                            <v-img lazy-src="/images/img4.jpg" src='/images/img4.jpg'></v-img>

                            <v-card-title>
                                {{ item.title }}
                            </v-card-title>

                            <v-card-subtitle>
                                {{ item.description }}
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn class="text-primary" text>
                                    ENTRE EM CONTATO
                                </v-btn>
                            </v-card-actions>

                        </v-card>
                        <!-- </router-link> -->
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
export default {
    name: 'ProductsCards',
    props: {
        showButton: Boolean
    },
    data() {
        return {
            items: [
                { id: 1, title: 'Show solo', description: 'Meu show solo sozinho', image: '/images/img4.jpg' },
                { id: 2, title: 'Show dupla', description: 'Com repertório que abrange o MPB, Bossa Nova e Pop Rock internacional, o duo de voz e violão Karine Fogiel e Augusto Oliveira', image: '' },
                { id: 3, title: 'Aulas', description: 'Aulas instrumentais tops', image: '' },
                { id: 4, title: 'Show solo', description: 'Meu show solo sozinho', image: '' },
                { id: 5, title: 'Show dupla', description: 'Com repertório que abrange o MPB, Bossa Nova e Pop Rock internacional, o duo de voz e violão Karine Fogiel e Augusto Oliveira', image: '' },
                { id: 6, title: 'Aulas', description: 'Aulas instrumentais tops', image: '' },
            ]
        }
    },
    methods: {
        goToDetail(prodId) {
            console.log(prodId)
            // this.$router.push({ name: 'product', params: { id: prodId } })
        }
    },
    computed: {
        someItems: function () {
            return this.items.filter(function (items) {
                return items.id < 4
            })
        }
    }
}
</script>