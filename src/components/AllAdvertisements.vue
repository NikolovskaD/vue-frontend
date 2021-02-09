<template>
    <div id="show-ads">
        <h1>All Advertisements</h1>
        <input type="text" v-model="search" placeholder="search ads" />
        <div v-for="(advertisement,idx) in filteredAds" class="single-ad" :key="idx">
            <router-link v-bind:to="'/ad/' + advertisement.id">
                <h2>{{ advertisement.title }}</h2>
            </router-link>
            <article>{{ advertisement.body }}</article>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllAdvertisements",
        data () {
            return {
                advertisements: [],
                search: ''
            }
        },
        methods: {
        },
        computed: {
            filteredAds: function () {
                return this.advertisements.filter((advertisement) => {
                    return advertisement.title.match(this.search);
                });
            }
        },
        created() {
            this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
                this.advertisements = data.body.slice(0,10);
            });
        }
    }
</script>

<style scoped>
    #show-ads{
        max-width: 800px;
        margin: 0px auto;
    }
    .single-ad{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
    #show-ads a{
        color: #444;
        text-decoration: none;
    }
</style>