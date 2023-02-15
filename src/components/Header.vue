<template>
    <div v-if="this.$isMobile()">
        <v-toolbar class="bg-light overlap">
            <v-row>
                <v-col cols="7" text-center>
                    <v-toolbar-title>
                        <router-link class="text-header" to="/" style="cursor: pointer">
                            <!-- <v-img class="img-logo" :src="'/images/logo01.png'"></v-img> -->
                            <span class="text-header text-center" style="margin-left: 0px">AUGUSTO OLIVEIRA</span>
                        </router-link>
                    </v-toolbar-title>
                </v-col>
                <v-col cols="5" class="menu">
                    <v-menu transition="scale-transition">
                        <template v-slot:activator="{ props }">
                            <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
                        </template>
                        <v-list>
                            <span class="text-center text-header">AUGUSTO OLIVEIRA</span>
                            <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.path">
                                <v-list-item-title><v-btn flat><v-icon left dark>mdi-{{ item.icon }}</v-icon>
                                        {{ item.title }}</v-btn></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
            </v-row>
        </v-toolbar>
    </div>

    <v-toolbar class="bg-light overlap" app v-else>
        <v-toolbar-title>
            <router-link class="logo2" to="/" style="cursor: pointer">
                <v-img class="img-logo" :src="'/images/logo01.png'"></v-img>
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
                <v-icon left dark>mdi-{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>

export default {
    name: "HeaderVue",
    created() {
        // Use in js
    },
    data() {
        return {
            appTitle: 'Augusto Oliveira',
            menuItems: [
                { title: 'Home', path: '/', icon: 'home' },
                { title: 'Biografia', path: '/about', icon: 'face' },
                { title: 'Produtos', path: '/products', icon: 'checkbook' },
                { title: 'Agenda', path: '/schedule', icon: 'calendar-blank' },
                { title: 'Contato', path: '/contact', icon: 'phone' }
            ]
        }
    }
};
</script>

<style>
.logo2 {
    position: absolute;
    z-index: 55555555 !important;
    width: 98px;
    height: 63px;
    border-radius: 7px;
    background-color: white !important;
    left: 47px !important;
    top: 0px !important;
    opacity: 1 !important;
    border: 2px solid #e9e9e9;
}

.text-header {
    text-decoration: none !important;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    font-family: 'Fragile', sans-serif;
    font-weight: bolder;
    color: #0a0400;
}

@media (max-width: 480px) {
    .logo2 {
        position: absolute;
        z-index: 55555555 !important;
        width: 98px;
        height: 63px;
        border-radius: 7px;
        background-color: transparent !important;
        left: auto !important;
        top: 0px !important;
        opacity: 1 !important;
        border: none;
    }

    .menu {
        display: flex;
        flex-direction: row-reverse;
    }
}
</style>