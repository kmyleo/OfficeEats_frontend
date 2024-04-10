<template>
  <div>
    <Header></Header>
    <v-container>
      <v-breadcrumbs class="ps-0 mt-12" :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>

      <div class="bg-body d-flex flex-column justify-center align-center min-vh-100 mt-12">
        <v-stepper
          v-model="e6"
          vertical
          width="50%"
        >
          <v-stepper-step
            :complete="e6 > 1"
            step="1"
          >
            Select an Account Type
            <small>Customer or Partner Account Type</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card class="mb-12">
              <v-card-title>
                <h3>Account Type</h3>
              </v-card-title>
              <v-card-text class="">
                <v-radio-group v-model="accountType">
                  <v-radio label="Is Customer" color="primary" value="is_customer"></v-radio>
                  <v-radio label="Is Partner" color="primary" value="is_partner"></v-radio>
                </v-radio-group>
              </v-card-text>
            </v-card>

            <v-btn
              color="primary"
              @click="e6 = 2"
            >
              Continue
            </v-btn>
            <!--        <v-btn text>-->
            <!--          Cancel-->
            <!--        </v-btn>-->
          </v-stepper-content>

          <v-stepper-step
            :complete="e6 > 2"
            step="2"
          >
            {{ stepHeading }}
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
            >
              <CustomerForm v-if="accountType==='is_customer'"></CustomerForm>
              <PartnerForm v-else></PartnerForm>
            </v-card>

            <v-btn color="primary" @click="e6 = 1">
              Previous
            </v-btn>
          </v-stepper-content>

        </v-stepper>

      </div>
    </v-container>
  </div>
</template>

<script>
import CustomerForm from "@/components/Signup/CustomerForm.vue"
import PartnerForm from "@/components/Signup/PartnerForm.vue"
import Header from "@/components/Header.vue"

export default {
  layout: 'session',
  components: {CustomerForm, Header, PartnerForm},
  data() {
    return {
      checkbox: false,
      e6: 1,
      accountType: "is_customer",
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'SignUp',
          disabled: true,
          href: '/SignUp',
        }
      ],
      // stepHeading: "Customer SignUP Form",
    }
  },
  computed: {

    stepHeading() {
      if (this.accountType === "is_customer") {
        return "Customer SignUP Form"
      }
      return "Partner SignUP Form"
    }

  }
}
</script>

<style lang="scss" scoped>
.sign-up-card {
  width: 500px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  margin: 2rem auto;
  box-shadow: rgb(3 0 71 / 9%) 0px 8px 45px;
  @media(max-width: 500px) {
    width: 100%;
  }

  .sign-up-card-container {
    padding: 3rem 3.75rem 0px;
    @media(max-width: 500px) {
      padding: 3rem 1rem 0px;
    }
  }
}

</style>
