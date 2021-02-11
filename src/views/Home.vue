<template style="width: 100%">
    <div style="width: 100%">
       <!-- <header class="jumbotron">
            <h3>{{content}}</h3>
        </header>-->
        <HotProducts style="width: 100%"/>
        <h3>Изберете град:</h3>
        <MapMK/>
    </div>
</template>

<script>
    import MapMK from "../components/MapMK";
    import UserService from '../services/user.service';
    import HotProducts from "../components/HotProducts";

    export default {
        name: "Home",
        components:  {
            HotProducts,
            MapMK
        },
        data() {
            return {
                content: ''
            };
        },
        mounted() {
            UserService.getPublicContent().then(
                response => {
                    this.content = response.data;
                },
                error => {
                    this.content =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                }
            );
        }
    }
</script>

<style scoped>

</style>