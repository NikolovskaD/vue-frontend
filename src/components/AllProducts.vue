<template>
    <div id="show-ads">
        <h1>Сите продукти</h1>
        <input type="text" v-model="search" placeholder="пребарувај"/>
        <v-row>
            <v-col
                    v-for="n in 3"
                    :key="n"
                    cols="12"
                    md="4"
            >
                <v-card id="card"
                        class="mx-auto"
                        max-width="400" >
                    <div v-for="(advertisement,idx) in filteredAds" class="single-ad" :key="idx">


                        <v-img
                                class="white--text align-end"
                                height="200px"
                                :src=advertisement.imgUrl
                        >
                            <v-card-title>{{ advertisement.title }}</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0">{{idx}}</v-card-subtitle>

                        <v-card-text class="text--primary" > <!--style="position: relative;"-->
                            <!--<v-btn absolute color="orange" class="white&#45;&#45;text" fab medium right top>
                                <v-icon>shopping_cart</v-icon>
                            </v-btn>-->
                            <div>{{ advertisement.description }}</div>
                        </v-card-text>

                        <v-card-actions>

                            <router-link v-bind:to="'/ad/' + advertisement.id.id">
                                <v-btn color="orange" text>
                                    Детали
                                </v-btn>
                                <!-- ne ja cita kategorijata ispod -->
                                <p>{{advertisement.categories.name}} - {{ advertisement.money.amount }} {{advertisement.money.currency}}</p>
                            </router-link>
                        </v-card-actions>
                        <div class="cart">
                            <button
                                    @click="updateCart(advertisement, 'subtract')"
                                    class="cart__button"
                            >
                                -
                            </button>
                            <span class="cart__quantity">{{ advertisement.quantity }}</span>
                            <button
                                    @click="updateCart(advertisement, 'add')"
                                    class="cart__button"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    export default {
        name: "AllProducts",
        data() {
            return {
                advertisements: [],
                search: ''
            }
        },
        methods: {
            /*za shopping cart*/
            updateCart(product, updateType) {
                for (let i = 0; i < this.advertisements.length; i++) {
                    if (this.advertisements[i].id === product.id) {
                        if (updateType === 'subtract') {
                            if (this.advertisements[i].quantity !== 0) {
                                this.advertisements[i].quantity--;
                            }
                        } else {
                            this.advertisements[i].quantity++;
                        }

                        break;
                    }
                }
            }
        },
        computed: {
            filteredAds: function () {
                return this.advertisements.filter((advertisement) => {
                    return advertisement.title.toLowerCase().match(this.search.toLowerCase());
                });
            },
            /*za shopping cart*/
            cart() {
                return this.products.filter(product => product.quantity > 0);
            },
            totalQuantity() {
                return this.products.reduce(
                    (total, product) => total + product.quantity,
                    0
                );
            }

        },
        created() {
            this.$http.get('http://localhost:8082/ads/products').then(function (data) {
                this.advertisements = data.body;
            });
        }
    }
</script>

<style scoped>
    #show-ads {
         max-width: 80%;
        margin: 30px auto;
    }

    .single-ad {
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        /*background: #eee;*/
        border: 1px dotted #ccc;
        text-align: left;
    }

    #show-ads a {
        color: #444;
        text-decoration: none;
    }
    .cart {

        text-align: center;
    }

    .cart__button {

        text-align: center;
        background: lightblue;
        border: 0;
        color: white;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        height: 2.5rem;
        width: 2.5rem;
    }

    .cart__quantity {
        text-align: center;
        font-size: 1.5rem;
        margin: 0 1rem;
    }

</style>