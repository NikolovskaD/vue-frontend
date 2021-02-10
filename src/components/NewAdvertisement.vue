<template>
    <div id="add-advertisement">
        <h2>Додади нов оглас</h2>
        <form v-if="!submitted">
            <label>Наслов на огласот:</label>
            <input type="text" v-model.lazy="advertisement.title" required />
            <label>Опис на огласот:</label>
            <textarea v-model.lazy.trim="advertisement.description"/>
            <div id="checkboxes">
                <p>Категории:</p>
                <input type="checkbox" value="Ново" v-model="advertisement.categories" />
                <label>Ново</label>
                <input type="checkbox" value="Половно" v-model="advertisement.categories" />
                <label>Половно</label>
                <input type="checkbox" value="Купувам" v-model="advertisement.categories" />
                <label>Купувам</label>
                <input type="checkbox" value="Продавам" v-model="advertisement.categories" />
                <label>Продавам</label>
                <input type="checkbox" value="Замена" v-model="advertisement.categories" />
                <label>Замена</label>
            </div>
            <label>Цена:</label>
            <input type="text" v-model.lazy="advertisement.money.amount" required />
            <label>Валута:</label>
            <select v-model="advertisement.money.currency ">
                <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
            </select>
            <label>Линк до сликата:</label>
            <textarea v-model.lazy.trim="advertisement.imgUrl"/>
            <hr />
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
            <p>Категории:</p>
            <ul>
                <li v-for="category in advertisement.categories" :key="category">{{ category }}</li>
            </ul>
            <p>Цена: {{advertisement.money.amount}} {{ advertisement.money.currency }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewAdvertisement",
        data () {
            return {
                advertisement: {
                    title: '',
                    description: '',
                    categories: [],
                    money: {
                        currency: '',
                        amount: 0
                    },
                    imgUrl: ''
                },
                currencies: ['MKD', 'EUR', 'RSD', 'USD'],
                submitted: false
            }
        },
        methods: {
            post: function(){
                this.$http.post('http://localhost:8081/ads', {
                    title: this.advertisement.title,
                    imgUrl: this.advertisement.imgUrl,
                    description: this.advertisement.description,
                    money : this.advertisement.money
                    //userId: 1
                }).then(function(data){
                    console.log(data);
                    this.submitted = true;
                });
            }
        }
    }
</script>

<style scoped>
    #add-advertisement *{
        box-sizing: border-box;
        text-align: left;
        padding: 10px;
    }
    #add-advertisement{
        margin: 20px auto;
        max-width: 600px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea{
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
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }
    #checkboxes input{
        display: inline-block;
        margin-left: 10px;
    }
    #checkboxes label{
        display: inline-block;
        margin-top: 0;
    }
</style>