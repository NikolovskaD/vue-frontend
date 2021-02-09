<template>
    <div id="add-advertisement">
        <h2>Add a New Advertisement</h2>
        <form v-if="!submitted">
            <label>Ad Title:</label>
            <input type="text" v-model.lazy="advertisement.title" required />
            <label>Ad Description:</label>
            <textarea v-model.lazy.trim="advertisement.content"></textarea>
            <div id="checkboxes">
                <p>Ad Categories:</p>
                <input type="checkbox" value="new" v-model="advertisement.categories" />
                <label>New   </label>
                <input type="checkbox" value="used" v-model="advertisement.categories" />
                <label>Used</label>
                <input type="checkbox" value="buy" v-model="advertisement.categories" />
                <label>Buy</label>
                <input type="checkbox" value="sell" v-model="advertisement.categories" />
                <label>Sell</label>
                <input type="checkbox" value="substitution" v-model="advertisement.categories" />
                <label>Substitution</label>
            </div>
            <label>Author:</label>
            <select v-model="advertisement.author">
                <option v-for="author in authors" :key="author">{{ author }}</option>
            </select>
            <hr />
            <button v-on:click.prevent="post">Add Advertisement</button>
        </form>
        <div v-if="submitted">
            <h3>Thanks for adding your ad</h3>
        </div>
        <div id="preview">
            <h3>Preview Ad</h3>
            <p>Ad title: {{ advertisement.title }}</p>
            <p>Ad description:</p>
            <p style="white-space: pre">{{ advertisement.content }}</p>
            <p>Ad Categories:</p>
            <ul>
                <li v-for="category in advertisement.categories" :key="category">{{ category }}</li>
            </ul>
            <p>Author: {{ advertisement.author }}</p>
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
                    content: '',
                    categories: [],
                    author: ''
                },
                authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
                submitted: false
            }
        },
        methods: {
            post: function(){
                this.$http.post('http://jsonplaceholder.typicode.com/posts', {
                    title: this.advertisement.title,
                    body: this.advertisement.content,
                    userId: 1
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
    }
    #add-advertisement{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea{
        display: block;
        width: 100%;
        padding: 8px;
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
        margin-right: 10px;
    }
    #checkboxes label{
        display: inline-block;
        margin-top: 0;
    }
</style>