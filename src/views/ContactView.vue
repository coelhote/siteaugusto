<template>
    <v-img class="img-products-banner" src="/images/img-products.png"></v-img>
    <v-container>
        <v-card>
            <v-card-title class="text-center">Entre em contato</v-card-title>
        <v-form ref="form" class="mx-2" lazy-validation>
            <v-row v-if="this.$isMobile()">
                <v-col cols="12">
                    <v-text-field v-model="name" :rules="nameRules" label="Nome">
                    </v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="email" :rules="nameRules" label="Email">
                    </v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="phone" :rules="nameRules" label="Telefone">
                    </v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="subject" :rules="nameRules" label="Assunto">
                    </v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-textarea v-model="message" :rules="nameRules" label="Mensagem">
                    </v-textarea>
                </v-col>
            </v-row>

            <v-row v-else>
                <v-col cols="6">
                    <v-text-field v-model="name" :rules="nameRules" label="Nome">
                    </v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="email" :rules="nameRules" label="Email">
                    </v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="phone" :rules="nameRules" label="Telefone">
                    </v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="subject" :rules="nameRules" label="Assunto">
                    </v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-textarea v-model="message" :rules="nameRules" label="Mensagem">
                    </v-textarea>
                </v-col>
            </v-row>

            <v-btn type="submit" block class="btn-product mt-2 mb-2">Enviar</v-btn>
        </v-form>
    </v-card>
    </v-container>
</template>

<script>

export default {
    name: 'ContactView',
}
</script>
<style>

</style>