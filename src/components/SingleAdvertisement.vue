<template>
    <div id="single-ad">
        <h1>{{ advertisement.title }}</h1>
        <article>{{ advertisement.body }}</article>
    </div>
</template>

<script>
    export default {
        name: "SingleAdvertisement",
        data () {
            return {
                id: this.$route.params.id,
                advertisement: {}
            }
        },
        created() {
            this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
                // console.log(data);
                this.advertisement = data.body;
            });
        }
    }
</script>

<style scoped>
    #single-ad{
        max-width: 960px;
        margin: 0 auto;
    }
</style>