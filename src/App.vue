<template>
  <v-app>
    <v-main>
      <ResponsiveNavigation
              :nav-links="navLinks"
              :image-path="require('./assets/logo.png')"
              background="#fff"
              link-color="#777"
              hoverBackground="#ddd"
      />

      <!-- tutorijal-->
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">
              <font-awesome-icon icon="home" />Home
            </router-link>
          </li>
          <li v-if="showAdminBoard" class="nav-item">
            <router-link to="/admin" class="nav-link">Admin Board</router-link>
          </li>
          <li v-if="showModeratorBoard" class="nav-item">
            <router-link to="/mod" class="nav-link">Moderator Board</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
          </li>
        </div>

        <div v-if="!currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/register" class="nav-link">
              <font-awesome-icon icon="user-plus" />Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login2" class="nav-link">
              <font-awesome-icon icon="sign-in-alt" />Login
            </router-link>
          </li>
        </div>

        <div v-if="currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">
              <font-awesome-icon icon="user" />
              {{ currentUser.username }}
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href @click.prevent="logOut">
              <font-awesome-icon icon="sign-out-alt" />LogOut
            </a>
          </li>
        </div>
      </nav>
 <!--     do tuka-->
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
  import ResponsiveNavigation from '@/components/ResponsiveNavigation'
  import Footer from "@/components/Footer";
  //import Home from "@/views/Home";


export default {
  name: 'App',

  components: {
     // Home,
      Footer,
      ResponsiveNavigation
  },
  data: () => ({
    navLinks: [
      {
        text: 'Contact',
        path: '/contact',
        icon: 'ion-ios-megaphone'
      },
      {
        text: 'About',
        path: '/about',
        icon: 'ion-ios-business'
      },
      {
        text: 'Blog',
        path: '/blog',
        icon: 'ion-ios-bonfire'
      },
      {
        text: 'Portfolio',
        path: '/portfolio',
        icon: 'ion-ios-briefcase'
      },
      {
        text: 'New Ad',
        path: '/new-ad',
        icon: 'ion-ios-add-circle'
      },
      {
        text: 'All Ads',
        path: '/all-ads',
        icon: 'ion-ios-paper'
      },
      {
        text: 'Login',
        path: '/login',
        icon: 'ion-ios-log-in'
      }
    ]
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>


<style lang="scss">
  @import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

  figure {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 10px;
    margin-inline-end: 0;
  }
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  h3 {
    padding: 50px 50px 0px;
    text-align: left ;
  }

</style>