<template>
    <v-container  class="products">
        <h2 class="display-2 mb-4">Кошничка</h2>

        <v-list two-line>
            <template>
                <div v-for="(product, index) in cart" :key="index">
                <v-list-item  avatar> <!--:key="product.id"-->
                    <v-list-item-avatar>
                        <img :src="product.imgUrl">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="product.title"/>
                        <v-list-item-subtitle v-html="product.description"/>
                    </v-list-item-content>

                    <v-list-item>
                        {{product.price}}$
                    </v-list-item>

                    <v-list-item-action>
                        <v-text-field label="Количина" reverse :value="product.quantity"/>
                    </v-list-item-action>

                    <v-list-item>
                        {{product.price * product.quantity}}$
                    </v-list-item>

                    <v-list-item-action>
                        <v-btn icon ripple v-on:click="removeItemFromCart(product)">
                            <v-icon color="red lighten-1">delete</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>

                <v-divider v-if="index + 1 < cart.length" :key="index"/>
                </div>
            </template>
        </v-list>

        <v-container>
            <v-btn color="success" larger style="float: right;">Плаќање</v-btn>
        </v-container>

        <!--dodatok za stripe-->
        <!--<div>
            <button @click="checkout">Sell black matter gun</button>
        </div>-->
    </v-container>
</template>

<script>
    //import {bus} from '../main';
    export default {
        name: "ShoppingCart",
        props: ["cart"],
        data: () => ({
            products: [{
                product_id: 'kitchen-1',
                photo: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
                title: 'QW cooking utensils',
                sub_title: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand',
                price: 14.99,
                qty: 1
            },{
                product_id: 'kitchen-1',
                photo: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
                title: 'QW cooking utensils',
                sub_title: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand',
                price: 44.99,
                qty: 2
            },{
                product_id: 'kitchen-1',
                photo: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
                title: 'QW cooking utensils',
                sub_title: 'Our vintage kitchen utenils delight any chef. Made of bamboo by hand',
                price: 64.99,
                qty: 2
            }]
        }),
        methods: {
            removeItemFromCart(product) {
                this.$emit("removeItemFromCart", product);
            }
        }
       /* checkout () {
            // this.$checkout.close()
            // is also available.
            this.$checkout.open({
                image: 'https://i.imgur.com/1PHlmFF.jpg',
                locale: 'en',
                currency: 'BZD',
                name: 'Blips and Chitz!',
                description: 'An entire afternoon at Blips and Chitz!',
                amount: 9999999,
                panelLabel: 'Play Roy for {{amount}}',
               /!* token: (token) => {
                    // handle the token
                }*!/
            })
        }*/
    }
</script>

<style scoped>

</style>