<template>
    <div class="bg-body d-flex flex-column justify-center align-center min-vh-100">
      <div class="sign-up-card">
        <div class="sign-up-card-container">
          <div class="text-center mb-10">
            <h3 class="mb-3">Log In to Your Account</h3>
            <h5 class="text-sm font-600 grey--text text--darken-4">Please enter your credentials</h5>
          </div>

          <v-row>
            <v-col>
              <div class="mb-4">
                <p class="text-14 mb-1">Email</p>
                <v-text-field
                  type="email"
                  outlined
                  dense
                  hide-details=""
                  class="mb-4"
                  v-model="form.email"
                ></v-text-field>
              </div>
              <span class="red--text" v-if="error.email">{{ error.email[0] }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="mb-4">
                <p class="text-14 mb-1">Password</p>
                <v-text-field
                  type="password"
                  placeholder="*********"
                  outlined
                  dense
                  hide-details=""
                  class="mb-4"
                  v-model="form.password"
                ></v-text-field>
              </div>
              <span class="red--text" v-if="error.password">{{ error.password[0] }}</span>
            </v-col>
          </v-row>

          <div class="mb-4">
            <v-btn
              block
              color="primary"
              class="text-capitalize font-600"
              @click="login"
            >
              Log In
            </v-btn>
          </div>
          <div class="d-flex align-center justify-center w-200 mx-auto mb-4">
            <v-divider></v-divider>
            <p class="mx-3 mb-1">or</p>
            <v-divider></v-divider>
          </div>
        </div>
        <div class="py-4 bg-grey-light mb-5">
          <div class="text-center">
            <span class="grey--text text--darken-1">Don't have an account? <a href="/register" class="ms-2 grey--text text--darken-4 font-600">Sign up</a></span>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        form: {
          email: null,
          password: null,
        },
        error: {},
      }
    },
    methods: {
      login() {

      },
    }
  }
  </script>

  <style scoped lang="scss">
  </style>
