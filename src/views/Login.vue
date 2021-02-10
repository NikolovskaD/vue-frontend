<template>
  <v-app>
    <!--<link href="https://fonts.googleapis.com/css?family=Material Icons" rel="stylesheet">-->
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" >
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8" @submit.prevent="handleLogin">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">
                          Sign in
                        </h1>
                        <div class="text-center" mt-4>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mlt-4">Enter your email for registration</h4>
                        <v-form>
                          <v-text-field
                                  label="Username"
                                  name="username"
                                  prepend-icon="person"
                                  type="text"
                                  color="teal accent-3"
                                  v-model = "user.username"
                                  v-validate="'required'"
                                  />
                                <!-- class="form-control"
                                for="username"-->
                          <div
                                  v-if="errors.has('username')"
                                  class="alert alert-danger"
                                  role="alert"
                          >Username is required!</div>
                          <v-text-field
                                  id="password"
                                  label="Password"
                                  name="password"
                                  prepend-icon="lock"
                                  type="password"
                                  color="teal accent-3"
                                  v-model="user.password"
                                  v-validate="'required'"
                          />
                          <div
                                  v-if="errors.has('password')"
                                  class="alert alert-danger"
                                  role="alert"
                          >Password is required!</div>
                        </v-form>
                        <h5 class="text-center mt-3">Forgot your password?</h5>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn style="margin: 5px" rounded color="teal accent-3" dark @click="handleLogin"> Sign in </v-btn>
                        <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3" >
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello friend!</h1>
                        <h5 class="text-center">Enter your personal details and star your journey with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined="" dark @click="step++">Sign up</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome back!</h1>
                        <h5 class="text-center">To stay connected with us, please sign in to your account</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8" @submit.prevent="handleRegister">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Create an account</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mlt-4">Enter your email for registration</h4>
                        <v-form  v-if="!successful">
                          <v-text-field
                                  label="Username"
                                  name="username"
                                  prepend-icon="person"
                                  type="text"
                                  color="teal accent-3"
                                  v-model="user.username"
                                  v-validate="'required|min:3|max:20'"
                          />
                          <div
                                  v-if="submitted && errors.has('username')"
                                  class="alert-danger"
                          >{{errors.first('username')}}</div>
                          <v-text-field
                                  label="Email"
                                  name="email"
                                  prepend-icon="email"
                                  type="text"
                                  color="teal accent-3"
                                  v-model="user.email"
                                  v-validate="'required|email|max:50'"
                          />
                          <div
                                  v-if="submitted && errors.has('email')"
                                  class="alert-danger"
                          >{{errors.first('email')}}</div>
                          <v-text-field
                                  id="password"
                                  label="Password"
                                  name="password"
                                  prepend-icon="lock"
                                  type="password"
                                  color="teal accent-3"
                                  v-model="user.password"
                                  v-validate="'required|min:6|max:40'"
                          />
                          <div
                                  v-if="submitted && errors.has('password')"
                                  class="alert-danger"
                          >{{errors.first('password')}}</div>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="teal accent-3" dark @click="handleRegister">Sign up</v-btn>
                        <div
                                v-if="message"
                                class="alert"
                                :class="successful ? 'alert-success' : 'alert-danger'"
                        >{{message}}</div>
                      </div>

                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import User from '../models/user';

  export default {
    name: 'Login',
    data:() => ({
      step: 1,
      user: new User('', '',''),
      loading: false,
      message: '',
      submitted: false,
      successful: false,
    }),
    props: {
      source: String
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    created() {
      if (this.loggedIn) {
        this.$router.push('/profile');
      }
    },
    mounted() {
      if (this.loggedIn) {
        this.$router.push('/profile');
      }
    },
    methods: {
      handleLogin() {
        this.loading = true;
        this.$validator.validateAll().then(isValid => {
          if (!isValid) {
            this.loading = false;
            return;
          }
          if (this.user.username && this.user.password) {
            this.$store.dispatch('auth/login', this.user).then(
                    () => {
                      this.$router.push('/profile');
                    },
                    error => {
                      this.loading = false;
                      this.message =
                              (error.response && error.response.data) ||
                              error.message ||
                              error.toString();
                    }
            );
          }
        });
      },
      handleRegister() {
        this.message = '';
        this.submitted = true;
        this.$validator.validate().then(isValid => {
          if (isValid) {
            this.$store.dispatch('auth/register', this.user).then(
                    data => {
                      this.message = data.message;
                      this.successful = true;
                    },
                    error => {
                      this.message =
                              (error.response && error.response.data) ||
                              error.message ||
                              error.toString();
                      this.successful = false;
                    }
            );
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>