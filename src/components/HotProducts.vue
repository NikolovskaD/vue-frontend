<template>
    <v-container style="width: 90%">
        <h2 class="display-2 mb-4">Hot products showing</h2>

        <v-layout row wrap >
            <template v-for="(advertisement, index) in advertisements">
                <v-flex xs2 pa-1 :key="index">
                    <v-hover>
                        <v-card slot-scope="{hover}" class="mx-auto" color="gray lighten-4" max-width="600"  height="300">
                            <v-img :src="advertisement.imgUrl" :aspect-ratio="16/9">
                                <v-expand-transition>
                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 display-3 v-card--reveal display3 black--text" style="height: 100%;" >
                                        {{advertisement.money.amount}} {{advertisement.money.currency}}
                                    </div>
                                </v-expand-transition>
                            </v-img>

                            <v-card-text class="pt-4" style="position: relative;">
                                <v-btn absolute color="orange" class="white--text" fab small right top>
                                    <v-icon>shopping_cart</v-icon>
                                </v-btn>

                                <!--<div class="font-weight-light grey&#45;&#45;text title mb-2">{{advertisement.categories.name}}</div>-->
                                <!--<h4 class="display-1 font-weight-light orange&#45;&#45;text mb-2">{{advertisement.title.slice(0,20)}}..</h4>-->
                                <h5 class=" font-weight-light orange--text mb-2">{{advertisement.title}}</h5>

                                <div class="font-weight-light mb-2">{{advertisement.description.slice(0,80)}}</div>
                            </v-card-text>

                        </v-card>
                    </v-hover>
                </v-flex>
            </template>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "HotProducts",
        data: () => ({
            advertisements: []
        }),
        created() {
            this.$http.get('http://localhost:8082/ads/products').then(function (data) {
                this.advertisements = data.body;
            });
        }

    }
</script>

<style scoped>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: 0.5;
        position: absolute;
        width: 100%;
    }
    .v-card h3.display-1 {
        font-size: 24px !important;
    }
    * {
        text-align: left;
    }
</style>