<template>
  <div class="bg-body d-flex flex-column justify-center align-center min-vh-100">
    <div class="sign-up-card">
      <div class="sign-up-card-container">
        <div class="text-center mb-10">
          <h3 class="mb-3">Create Your Account</h3>
          <h5 class="text-sm font-600 grey--text text--darken-4">Please fill all forms to continued</h5>
        </div>
        <h3>Personal Information</h3>
        <v-row>
          <v-col>
            <div class="mb-4">
              <p class="text-14 mb-1">First Name</p>
              <v-text-field
                outlined
                dense
                hide-details=""
                class="mb-4"
                v-model="form.first_name"
              ></v-text-field>
            </div>
            <span class="red--text" v-if="error.first_name">{{ error.first_name[0] }}</span>
          </v-col>
          <v-col>
            <div class="mb-4">
              <p class="text-14 mb-1">Last Name</p>
              <v-text-field
                outlined
                dense
                hide-details=""
                class="mb-4"
                v-model="form.last_name"
              ></v-text-field>
            </div>
            <span class="red--text" v-if="error.last_name">{{ error.last_name[0] }}</span>
          </v-col>

        </v-row>
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
          <v-col>
            <div class="mb-4">
              <p class="text-14 mb-1">Username</p>
              <v-text-field
                outlined
                dense
                hide-details=""
                class="mb-4"
                v-model="form.username"
              ></v-text-field>
            </div>
            <span class="red--text" v-if="error.username">{{ error.username[0] }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="mb-4">
              <p class="text-14 mb-1">Phone Number</p>
              <v-text-field
                outlined
                dense
                hide-details=""
                class="mb-4"
                v-model="form.phone_number"
              ></v-text-field>
            </div>
            <span class="red--text" v-if="error.first_name">{{ error.phone_number[0] }}</span>
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
            <span class="red--text" v-if="error.first_name">{{ error.password[0] }}</span>
          </v-col>
        </v-row>

        <h3>Business Information</h3>
        <v-row>
          <v-col>
            <div class="mb-4">
              <p class="text-14 mb-1">Business Name</p>
              <v-text-field
                outlined
                dense
                hide-details=""
                class="mb-4"
                v-model="form.business_name"
              ></v-text-field>
            </div>
            <span class="red--text" v-if="error.business_name">{{ error.business_name[0] }}</span>
          </v-col>
          <v-col>
            <div class="mb-4">
              <p class="text-14 mb-1">Website Url</p>
              <v-text-field
                outlined
                dense
                hide-details=""
                class="mb-4"
                v-model="form.website_url"
              ></v-text-field>
            </div>
            <span class="red--text" v-if="error.website_url">{{ error.website_url[0] }}</span>
          </v-col>

        </v-row>
        <v-row>
          <v-col>
            <div class="mb-4">
              <p class="text-14 mb-1">Business Phone Number</p>
              <v-text-field
                outlined
                dense
                hide-details=""
                class="mb-4"
                v-model="form.business_phone_number"
              ></v-text-field>
            </div>
            <span class="red--text" v-if="error.business_phone_number">{{ error.business_phone_number[0] }}</span>
          </v-col>
          <v-col>
            <div class="mb-4">
              <p class="text-14 mb-1">Business Address</p>
              <v-text-field
                outlined
                dense
                hide-details=""
                class="mb-4"
                v-model="form.business_address"
              ></v-text-field>
            </div>
            <span class="red--text" v-if="error.business_address">{{ error.business_address[0] }}</span>
          </v-col>

        </v-row>
        <v-row>
          <v-col>
            <div class="mb-4">
              <p class="text-14 mb-1">City</p>
              <v-text-field
                outlined
                dense
                hide-details=""
                class="mb-4"
                v-model="form.city"
              ></v-text-field>
            </div>
            <span class="red--text" v-if="error.city">{{ error.city[0] }}</span>
          </v-col>
          <v-col>
            <div class="mb-4">
              <p class="text-14 mb-1">Category</p>
              <v-autocomplete
                clearable
                label="Select Category"
                v-model="form.categories"
                :items=categories
                variant="outlined"
                item-text="name"
                item-value="id"
                multiple
              ></v-autocomplete>
            </div>
            <span class="red--text" v-if="error.business_address">{{ error.business_address[0] }}</span>
          </v-col>

        </v-row>

        <!--        <div class="mb-4">-->
        <!--          <v-checkbox>-->
        <!--            <template v-slot:label>-->
        <!--              <div>-->
        <!--                By signing up, you agree to-->

        <!--                <v-tooltip bottom>-->
        <!--                  <template v-slot:activator="{ on }">-->
        <!--                    <a-->
        <!--                      target="_blank"-->
        <!--                      href="#"-->
        <!--                      @click.stop-->
        <!--                      v-on="on"-->
        <!--                    >-->
        <!--                      Terms & Condtion-->
        <!--                    </a>-->
        <!--                  </template>-->
        <!--                  Opens in new window-->
        <!--                </v-tooltip>-->

        <!--              </div>-->
        <!--            </template>-->
        <!--          </v-checkbox>-->
        <!--        </div>-->

        <div class="mb-4">
          <v-btn
            block
            color="primary"
            class="text-capitalize font-600"
            @click="createUser"
          >
            Create Account
          </v-btn>
        </div>
        <div class="d-flex align-center justify-center w-200 mx-auto mb-4">
          <v-divider></v-divider>
          <p class="mx-3 mb-1">on</p>
          <v-divider></v-divider>

        </div>


      </div>
      <div class="py-4 bg-grey-light mb-5">
        <div class="text-center">
          <span class="grey--text text--darken-1">Already Have Account ? <nuxt-link to="/SignIn"
                                                                                    class=" grey--text text--darken-4 font-600">Sign In</nuxt-link> </span>
        </div>
      </div>
    </div>
    <div class="text-center" v-if="dialogPartner">
      <v-dialog
        v-model="dialogPartner"
        width="500"
        persistent
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Click Me
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Business Registered Successfully
          </v-card-title>

          <v-card-text>
            You have successfully Registered your Business.Add the remaining information of your business from the Admin
            Panel.
            The link of the Admin Panel is available in your Profile.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="$router.push('/SignIn')"
            >
              ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        username: null,
        email: null,
        password: null,
        phone_number: null,
        first_name: null,
        last_name: null,
        is_partner: true,
        business_name: null,
        city: null,
        business_address: null,
        business_phone_number: null,
        categories: [],
        website_url: null,
      },
      error: {},
      categories: [],
      dialogPartner: false
    }
  },
  methods: {
    createUser() {
      this.error = {}
      this.form['categories'] = this.form.categories.toString()
      this.$api.post('/users/create/', this.form).then(response => {
        this.dialogPartner = true

      }).catch(error => {
        this.error = error.response.data
      })
    },
    getCategories() {
      this.$api.get('/restaurant_category/').then(response => {
        this.categories = response.data

      }).catch(error => {
        this.error = error.response.data
      })
    },

  },
  mounted() {
    this.getCategories()
  }
}

</script>

<style scoped lang="scss">

</style>
