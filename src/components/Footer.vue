<template>
    <v-footer dark padless height="auto">
        <v-card flat tile class="cyan darken-3 white--text text-xs-center flex">
            <v-card-text>
                <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
                    <v-icon size="24px">{{icon}}</v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text>
                shopping card footer text here.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text text-center">
                &copy; {{ new Date().getFullYear() }}  - <em>DjesBa FINKI</em>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-google-plus',
                'fab fa-linkedin',
                'fab fa-instagram'
            ]
        })
    }
</script>

<style scoped>

</style>