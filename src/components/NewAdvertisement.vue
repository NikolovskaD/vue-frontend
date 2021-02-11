<template>
    <div id="add-advertisement">
        <h2>Додади нов оглас</h2>
        <form v-if="!submitted">
            <label>Наслов на огласот:</label>
            <input type="text" v-model.lazy="advertisement.title" required/>
            <label>Опис на огласот:</label>
            <textarea v-model.lazy.trim="advertisement.description"/>
            <label>Град:</label>
            <select v-model="advertisement.cityName ">
                <option v-for="cityName in cities" :key="cityName" v-bind:value="cityName">{{ cityName }}</option>
            </select>
            <div id="checkboxes">
                <p>Тип на оглас:</p>
                <input type="checkbox" value="NEW" v-model="advertisement.types"/>
                <label>Ново</label>
                <input type="checkbox" value="USED" v-model="advertisement.types"/>
                <label>Половно</label>
                <input type="checkbox" value="BUYING" v-model="advertisement.types"/>
                <label>Купувам</label>
                <input type="checkbox" value="SELLING" v-model="advertisement.types"/>
                <label>Продавам</label>
                <input type="checkbox" value="EXCHANGE" v-model="advertisement.types"/>
                <label>Замена</label>
            </div>
            <label>Категорија:</label>
            <select v-model="advertisement.category ">
                <option v-for="category in categories" :key="category.id.id" v-bind:value="category.id.id">{{ category.name }}</option>
            </select>
            <label>Цена:</label>
            <input type="text" v-model.lazy="advertisement.money.amount" required/>
            <label>Количина:</label>
            <input type="text" v-model.lazy="advertisement.quantity" required/>
            <label>Валута:</label>
            <select v-model="advertisement.money.currency ">
                <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
            </select>

            <label>Продукт</label><input type="checkbox" value="Продукт" v-model="advertisement.isProduct"/>
            <label>Линк до сликата:</label>
            <input type="text" v-model.lazy.trim="advertisement.imgUrl"/>
            <hr/>
            <button v-on:click.prevent="post">Креирај нов оглас</button>
        </form>
        <div v-if="submitted">
            <h3>Ви благодариме!</h3>
        </div>
        <div id="preview">
            <h3>Preview Ad</h3>
            <p>Наслов на огласот: {{ advertisement.title }}</p>
            <p>Опис на огласот:</p>
            <p style="white-space: pre">{{ advertisement.description }}</p>
            <p>Град: {{advertisement.cityName}}</p>
            <p>Тип на оглас:</p>
            <ul>
                <li v-for="category in advertisement.types" :key="category">{{ category }}</li>
            </ul>
            <p>Цена: {{advertisement.money.amount}} {{ advertisement.money.currency }}</p>
            <p>Категорија: {{advertisement.category}} </p>
            <p>количина: {{advertisement.quantity}} </p>
            <p>Дали е продукт? {{advertisement.isProduct}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewAdvertisement",
        data() {
            return {
                advertisement: {
                    title: '',
                    description: '',
                    types: [],
                    money: {
                        currency: '',
                        amount: 0
                    },
                    imgUrl: '',
                    category: [],
                    isProduct: false,
                    quantity: 1,
                    cityName: ''
                },
                currencies: ['MKD', 'EUR', 'RSD', 'USD'],
                submitted: false,
                categories: [],
                cities: ['Битола','Прилеп','Кавадарци','Гевгелија','Валандово','Струмица','Берово','Велес',
                'Неготино','Радовиш','Штип','Виница','Делчево','Крива Паланка','Кочани','Пробиштип','Кратово',
                'Свети Николе','Куманово','Скопје','Тетово','Гостивар','Дебар','Македонски Брод','Кичево',
                'Струга','Охрид','Ресен','Демир Хисар','Крушево']
            }
        },
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            }
        },
        mounted() {
            if (!this.currentUser) {
                this.$router.push('/login');
            }
        },
        methods: {
            post: function () {
                this.$http.post('http://localhost:8082/ads', {
                    title: this.advertisement.title,
                    description: this.advertisement.description,
                    creatorId: this.currentUser.id.id,
                    currency: this.advertisement.money.currency,
                    price: this.advertisement.money.amount,
                    quantity: this.advertisement.quantity,
                    isProduct: this.advertisement.isProduct,
                    imgUrl: this.advertisement.imgUrl,
                    categories: [this.advertisement.category],
                    cityName: this.advertisement.cityName
                }).then(function (data) {
                    console.log(data);
                    this.submitted = true;
                });
            }
        },
        created() {
            this.$http.get('http://localhost:8082/categories').then(function (data) {
                this.categories = data.body;
            });
        }
    }
</script>

<style scoped>
    #add-advertisement * {
        box-sizing: border-box;
        text-align: left;
        padding: 10px;
    }

    #add-advertisement {
        margin: 20px auto;
        max-width: 600px;
    }

    label {
        display: block;
        margin: 20px 0 10px;
    }

    input[type="text"], textarea {
        display: block;
        width: 100%;
        padding: 8px;
        border: 1px solid #777;
    }

    select {
        padding: 8px;
        border: 1px solid #777;
        display: inline-block;
    }

    #preview {
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }

    h3 {
        margin-top: 10px;
    }

    #checkboxes input {
        display: inline-block;
        margin-left: 10px;
    }

    #checkboxes label {
        display: inline-block;
        margin-top: 0;
    }
</style>
