<template>
  <v-card>
    <div class="px-3 px-md-10 py-8 ">
      <h3 class="mb-2 text-center">Welcome To Ecommerce</h3>
      <h5 class="font-600 grey--text text--darken-3 text-sm mb-9 text-center">Log in with email & password</h5>
      <p class="text-14 mb-1">Email or Phone Number</p>
      <v-text-field
        v-model="form.username"
        outlined
        dense
        hide-details
        placeholder="example@mail"
        class="mb-4"
      ></v-text-field>
      <span class="red--text dense" v-if="error.username">{{ error.username[0] }}</span>
      <p class="text-14 mb-1">Password</p>
      <v-text-field
        v-model="form.password"
        outlined
        dense
        type="password"
        hide-details
        placeholder="example@mail"
        class="mb-4"
      ></v-text-field>
      <span class="red--text row--dense" v-if="error.password">{{ error.password[0] }}</span>
      <span class="red--text row--dense" v-if="error.non_field_errors">{{ error.non_field_errors[0] }}</span>
      <v-btn
        block
        @click="login"
        color="primary"
        class="text-capitalize font-600"
      >Login
      </v-btn>
      <v-col cols="10" lg="8" class="mx-auto">
        <div class="d-flex align-center my-1">
          <v-divider></v-divider>
          <span class="mx-4">on</span>
          <v-divider></v-divider>
        </div>
      </v-col>
      <v-btn
        block
        dark
        color="indigo"
        class="text-capitalize font-600 mb-4"
      >

        <v-icon left class="me-3">mdi-facebook</v-icon>
        Continue with facebook

      </v-btn>
      <v-btn
        block
        dark
        color="blue darken-2"
        class="text-capitalize font-600 mb-4"
      >

        <v-icon left class="me-3">mdi-google</v-icon>
        Continue with Google

      </v-btn>
      <div class="text-14 text-center my-3">Don't have account?
        <nuxt-link to="/SignUp" class=" grey--text text--darken-4 font-600">Sign Up</nuxt-link>
      </div>
    </div>
    <!-- <div class="py-4 bg-grey-light">
      <div class="text-center">
        <span class="grey--text text--darken-1">Forgot Your Password <nuxt-link to="/"
                                                                                class="ms-2 grey--text text--darken-4 font-600">Reset It</nuxt-link> </span>
      </div>
    </div> -->
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
      error: {},
    }
  },
  methods: {
    login() {
      this.error = {}
      this.$api.post('auth-token/', this.form).then(response => {
        localStorage.setItem('auth-token', response.data.token)
        this.$store.dispatch("modules/userInfo/getMe")
        this.$router.push({path: '/'})

      }).catch(error => {
        this.error = error.response.data
      })
    },
  }

}
</script>
