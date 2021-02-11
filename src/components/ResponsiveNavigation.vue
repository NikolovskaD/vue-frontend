<template>
    <nav :style="{ background: background || '#333' }">
        <ul :style="{ background: background || '#333' }" ref="nav">
            <figure class="image-logo" @click="toggleNav">
                <img :src="imagePath" height="40px" width="40px" />
            </figure>
            <li
                    v-for="(link, index) in navLinks"
                    :key="index"
                    @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
                    @mouseleave="$event.currentTarget.style.background = background || '#333'"
            >
                <router-link
                        :to="link.path"
                        :style="{ color: linkColor || '#DDD' }"
                        v-on:removeItemFromCart="removeItemFromCart" :cart="cart"
                        v-on:addItemToCart="addItemToCart"
                >
                    {{ link.text }}
                    <i :class="link.icon" />
                </router-link>

            </li>

            <li
                    @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
                    @mouseleave="$event.currentTarget.style.background = background || '#333'">
                <v-badge left color="green">
                    <!--<span slot="badge">{{this.cart.length}}</span>-->
                    <span slot="badge">3</span>
                    <router-link
                            to="/shopping-cart"
                            :style="{ color: linkColor || '#DDD' }"
                    >
                        Кошничка
                        <i class="ion-ios-basket" />
                    </router-link>
                </v-badge>

            </li>
            <li>
                <router-link
                        to="/login"
                        :style="{ color: linkColor || '#DDD' }"
                >
                    Најави се
                    <i class="ion-ios-log-in" />
                </router-link>
            </li>
        </ul>

    </nav>
</template>

<script>
    export default {
        props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath', 'cart'],
        methods: {
            toggleNav () {
                const nav = this.$refs.nav.classList;
                nav.contains('active') ? nav.remove('active') : nav.add('active')
            },
            addItemToCart(product) {
                this.cart.push(product);
                console.log('primeno u nav.vue')
            },
            removeItemFromCart(product) {
                this.cart.splice(this.cart.indexOf(product), 1);
            }
        },
        computed: {

        }

    }
</script>

<style scoped lang="scss">
    nav {
        height: 60px;
        width: 100%;
        box-shadow: 2px 2px 2px #CCC;
        ul {
            display: flex;
            height: 100%;
            align-items: center;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0;
            box-shadow: 2px 2px 2px #CCC;
            figure {
                cursor: pointer;
                margin-right: 10px;
            }
            a {
                text-decoration: none;
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
            }
            i {
                margin-right: 10px;
                font-size: 22px;
            }
            li {
                list-style-type: none;
                padding: 10px 20px;
            }
        }
    }
    @media screen and (max-width: 759px) {
        nav {
            ul {
                position: absolute;
                width: 300px;
                flex-direction: column;
                left: -240px;
                transition: 300ms ease all;
                top: 60px;
                &.active {
                    left: 0px;
                }
                figure {
                    position: fixed;
                    z-index: 1;
                    top: 10px;
                    left: 2px;
                }
                li {
                    width: 100%;
                    padding-left: 0;
                    padding-right: 0;
                }
                a {
                    flex-direction: row;
                    margin-left: 20px;
                    justify-content: space-between;
                    margin-right: 13px;
                }
            }
        }
    }
</style>