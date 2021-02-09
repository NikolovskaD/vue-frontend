<template>
  <v-app>
    <!--<link href="https://fonts.googleapis.com/css?family=Material Icons" rel="stylesheet">-->
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
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
                                  label="Email"
                                  name="Email"
                                  prepend-icon="email"
                                  type="text"
                                  color="teal accent-3"
                          />
                          <v-text-field
                                  id="password"
                                  label="Password"
                                  name="Password"
                                  prepend-icon="lock"
                                  type="password"
                                  color="teal accent-3"
                          />
                        </v-form>
                        <h3 class="text-center mt-3">Forgot your password?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn style="margin: 5px" rounded color="teal accent-3" dark>Sign in</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
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
                    <v-col cols="12" md="8">
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
                        <v-form>
                          <v-text-field
                                  label="Name"
                                  name="Name"
                                  prepend-icon="person"
                                  type="text"
                                  color="teal accent-3"
                          />
                          <v-text-field
                                  label="Email"
                                  name="Email"
                                  prepend-icon="email"
                                  type="text"
                                  color="teal accent-3"
                          />
                          <v-text-field
                                  label="Password"
                                  name="Password"
                                  prepend-icon="lock"
                                  type="password"
                                  color="teal accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="teal accent-3" dark>Sign up</v-btn>
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
  export default {
    data:() => ({
      step: 1
    }),
    props: {
      source: String
    }
  }
</script>

<style scoped>

</style>