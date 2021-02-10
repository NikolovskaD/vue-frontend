<template>
    <div>
        <v-card id="card"
                class="mx-auto"
                max-width="400"
        >
            <v-img
                    class="white--text align-end"
                    height="200px"
                    :src=advertisement.imgUrl
            >
                <v-card-title>{{ advertisement.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--primary">
                <div>{{ advertisement.description }}</div>
            </v-card-text>

            <v-card-actions>
                <v-btn color="orange" text>
                    Share
                </v-btn>

                <v-btn color="orange" text>
                    Explore
                </v-btn>
            </v-card-actions>
        </v-card>

        <!--<div id="single-ad">
            <h1>{{ advertisement.title }}</h1>
            <article>{{ advertisement.body }}</article>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "SingleAdvertisement",
        data() {
            return {
                id: this.$route.params.id,
                advertisement: {},
                description: '',
                imgUrl: '',


            }
        },
        created() {
            //this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
            this.$http.get('http://localhost:8082/ads/' + this.id).then(function (data) {
                // console.log(data);
                this.advertisement = data.body;
                this.description = data.description;
                this.imgUrl = data.imgUrl;
            });
        }
    }
</script>

<style scoped>
    #card {
        margin: 30px;
    }

    #single-ad {
        max-width: 960px;
        margin: 0 auto;
    }
</style>