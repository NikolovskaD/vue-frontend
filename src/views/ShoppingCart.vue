<template>
    <v-container>
        <h2 class="display-2 mb-4">Кошничка</h2>

        <v-list two-line>
            <template v-for="(product, index) in products">
                <v-list-item :key="product.product_id" avatar>
                    <v-list-item-avatar>
                        <img :src="product.photo">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="product.title"/>
                        <v-list-item-subtitle v-html="product.sub_title"/>
                    </v-list-item-content>

                    <v-list-item>
                        {{product.price}}$
                    </v-list-item>

                    <v-list-item-action>
                        <v-text-field label="Количина" reverse :value="product.qty"/>
                    </v-list-item-action>

                    <v-list-item>
                        {{product.price * product.qty}}$
                    </v-list-item>

                    <v-list-item-action>
                        <v-btn icon ripple>
                            <v-icon color="red lighten-1">delete</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>

                <v-divider v-if="index + 1 < products.length" :key="index"/>
            </template>
        </v-list>

        <v-container>
            <v-btn color="success" larger style="float: right;">Плаќање</v-btn>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        name: "ShoppingCart",
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
        })
    }
</script>

<style scoped>

</style>