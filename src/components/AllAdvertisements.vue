<template>
    <div id="show-ads">
        <h1>All Advertisements</h1>
        <input type="text" v-model="search" placeholder="search ads"/>
        <v-row>
            <v-col
                    v-for="n in 3"
                    :key="n"
                    cols="12"
                    md="4"
            >
                <v-card id="card"
                        class="mx-auto"
                        max-width="400"
                >
                    <div v-for="(advertisement,idx) in filteredAds" class="single-ad" :key="idx">
                        <!-- <router-link v-bind:to="'/ad/' + advertisement.id">
                             <h2>{{ advertisement.title }}</h2>
                         </router-link>
                         <article>{{ advertisement.body }}</article>-->


                        <v-img
                                class="white--text align-end"
                                height="200px"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                            <v-card-title>{{ advertisement.title }}</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0">{{idx}}</v-card-subtitle>

                        <v-card-text class="text--primary">
                            <div>{{ advertisement.body }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <!-- <v-btn color="orange" text>
                                 Share
                             </v-btn>-->

                            <router-link v-bind:to="'/ad/' + advertisement.id">
                                <v-btn color="orange" text>
                                    Explore
                                </v-btn>
                            </router-link>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    export default {
        name: "AllAdvertisements",
        data() {
            return {
                advertisements: [],
                search: ''
            }
        },
        methods: {},
        computed: {
            filteredAds: function () {
                return this.advertisements.filter((advertisement) => {
                    return advertisement.title.match(this.search);
                });
            }
        },
        created() {
            this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function (data) {
                this.advertisements = data.body.slice(0, 10);
            });
        }
    }
</script>

<style scoped>
    #show-ads {
       /* max-width: 800px;*/
        margin: 30px auto;
    }

    .single-ad {
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        /*background: #eee;*/
        border: dashed;
    }

    #show-ads a {
        color: #444;
        text-decoration: none;
    }
</style>