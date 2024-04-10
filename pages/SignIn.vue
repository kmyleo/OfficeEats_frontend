<template>
  <v-card>
    <div class="px-3 px-md-10 py-8 ">
      <h3 class="mb-2 text-center">Welcome To Ecommerce</h3>
      <h5 class="font-600 grey--text text--darken-3 text-sm mb-9 text-center">Log in with email & password</h5>
      <p class="text-14 mb-1">Email or Phone Number</p>
      <v-text-field
        outlined
        dense
        hide-details
        placeholder="example@mail"
        class="mb-4"
      ></v-text-field>
      <span class="red--text" v-if="error.first_name">{{ error.password[0] }}</span>
      <p class="text-14 mb-1">Password</p>
      <v-text-field
        outlined
        dense
        type="password"
        hide-details
        placeholder="example@mail"
        class="mb-4"
      ></v-text-field>
      <v-btn
        block
        @click="login"
        color="primary"
        class="text-capitalize font-600"
      >Login
      </v-btn>

      <div class="text-14 text-center my-3">Don't have account?
        <nuxt-link to="/SignUp" class=" grey--text text--darken-4 font-600">Sign Up</nuxt-link>
      </div>
    </div>
    <div class="py-4 bg-grey-light">
      <div class="text-center">
        <span class="grey--text text--darken-1">Forgot Your Password <nuxt-link to="/"
                                                                                class="ms-2 grey--text text--darken-4 font-600">Reset It</nuxt-link> </span>
      </div>
    </div>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      error: {}
    }
  },
  methods: {
    login() {
      this.$api.post('auth-token/', this.form).then(response => {

      }).catch(error => {
        this.error = error.response.data
      })
    },
  }

}
</script>

