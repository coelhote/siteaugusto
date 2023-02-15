<template>
    <v-container>
        <v-select name="select" v-model="select" return-object :items="items" item-title="name" item-value="id"
            label="Item" required></v-select>
    </v-container>

    <v-carousel v-if="this.$isMobile()" cycle show-arrows="hover" hide-delimiters>
        <v-carousel-item v-for="n in 3" :key="n">
            <v-container>
                <v-col>
                    <v-card color="grey-lighten-1" height="auto">
                        <v-img src="/images/folder01.jpeg"></v-img>
                    </v-card>
                </v-col>
            </v-container>
        </v-carousel-item>
    </v-carousel>

    <v-slide-group v-else v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-for="n in 20" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="grey-lighten-1" :class="['ma-4', selectedClass]" height="auto" width="300" @click="toggle">
                <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                        <v-icon v-if="isSelected" color="white" size="48"
                            icon="mdi-close-circle-outline"></v-icon><v-img src="/images/folder01.jpeg"></v-img>
                    </v-scale-transition>
                </div>
            </v-card>
        </v-slide-group-item>
    </v-slide-group>
</template>

<script>
import { defineComponent } from 'vue';

// Components
export default defineComponent({
    name: 'ScheduleView',
    data: () => ({
        select: 'Fevereiro',
        items: [
            {
                id: 1,
                name: 'Janeiro',
            },
            {
                id: 2,
                name: 'Fevereiro',
            },
            {
                id: 3,
                name: 'Março',
            },
            {
                id: 4,
                name: 'Abril',
            },
            {
                id: 5,
                name: 'Maio',
            },
            {
                id: 6,
                name: 'Junho',
            },
            {
                id: 7,
                name: 'Julho',
            },
            {
                id: 8,
                name: 'Agosto',
            },
            {
                id: 9,
                name: 'Setembro',
            },
            {
                id: 10,
                name: 'Outubro',
            },
            {
                id: 11,
                name: 'Novembro',
            },
            {
                id: 12,
                name: 'Dezembro',
            }
        ],
    }),
    methods: {
    },
    computed: {
        console: () => console,
    }
});
</script>
<style>

</style>