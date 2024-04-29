<template>
  <div>
    <v-container>

      <v-row>
        <v-col cols="12" class="mb-10">
          <v-img
            class="br-10 d-flex cover-img align-end"
            cover
            :src="require('~/assets/images/cover-img.png')"
            gradient="to top, rgba(0,0,0,.7), rgba(0,0,0,0)"
          >

            <div class="d-flex justify-center justify-md-space-between align-center mx-10 cover-image-content ">
              <div class="d-md-flex d-block align-center text-md-left text-center flex-wrap">
                <label for="avatarUpload" class="me-4">
                  <!-- <div class="avatar-upload"> -->
                    <!-- <v-avatar size="160">
                      <img src="~/assets/images/faces/big-avatar.png" alt=""> -->
                    <!-- </v-avatar>
                    <v-btn
                      class="avatar-upload-btn"
                      fab

                      dark
                      small
                      color="grey lighten-4"
                    >
                      <v-icon color="secondary" dark size="20">
                        mdi-camera
                      </v-icon>
                    </v-btn>
                    <input class="d-none" type="file" id="avatarUpload"/>
                  </div> -->

                </label>
                <!-- <div>
                  <h2 class="white--text text-md-left text-center mb-1">Abriella Bond</h2>
                  <div class="d-flex mb-1 justify-center justify-md-start">
                    <v-icon size="15" class="me-2" color="white">mdi-map-marker</v-icon>
                    <h6 class="font-weight-light white--text">New York, US</h6>
                  </div>
                  <h6 class="font-weight-light white--text">Bigtime foodie..out and out dessert person</h6>
                </div>
              </div> -->

              <!-- <div class="d-none d-md-flex">
                <div class="text-center">
                  <h2 class="font-weight-bold white--text">24</h2>
                  <h6 class="font-weight-regular white--text">Reviews</h6>
                </div>
                <div class="mx-3">
                  <v-divider
                    vertical
                    dark
                  ></v-divider>
                </div> -->
                <!-- <div class="text-center">
                  <h2 class="font-weight-bold white--text">45</h2>
                  <h6 class="font-weight-regular white--text">Photos</h6>
                </div>
                <div class="mx-3">
                  <v-divider
                    vertical
                    dark
                  ></v-divider>
                </div>
                <div class="text-center">
                  <h2 class="font-weight-bold white--text">1.6k</h2>
                  <h6 class="font-weight-regular white--text">Followers</h6>
                </div> -->
              </div>

            </div>

          </v-img>
        </v-col>
        <v-col cols="12">
          <Box class="dashboard-box">
            <div slot="boxContent">
              <div class="px-10">
                <v-row>
                  <v-col cols="12">
                    <h1>Order List</h1>
                  </v-col>
                  <v-col cols="12">
                    <v-tabs
                      v-model="tab"
                      slider-color="yellow"
                      color="primary"
                    >
                      <v-tab
                        v-for="i in tabs"
                        :key="i"
                        :href="`#${i}`"
                      >
                        {{ i }}
                      </v-tab>
                    </v-tabs>
                  </v-col>
                  <v-tabs-items v-model="tab">
                    <v-tab-item
                      key="single-order"
                      value="single-order"
                    >
                      <v-col cols="12">
                        <div class="d-none px-4 d-md-flex mb-5">
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Order #</h4>
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Status </h4>
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Date Purchased </h4>
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Total </h4>
                          <div class="px-5">

                          </div>
                        </div>
                        <v-card
                          elevation="0"
                          class="border br-10 mb-4"
                          v-for="(order, index) in singleOrders"
                          :key="index"
                        >
                          <div class="pa-4 d-flex align-center flex-wrap">
                            <div class="flex-1 mr-3">
                              <h4 class="font-600 mb-0 ">{{ order.id }}</h4>
                            </div>
                            <div class="flex-1 mr-3">
                              <v-chip
                                class="ma-2 f-600"
                                color="green accent-1"
                                small
                                text-color="green accent-4"
                              >
                                {{ order.status }}
                              </v-chip>
                            </div>
                            <div class="flex-1 mr-3">
                              <p class="mb-0">{{ order.order_date }}</p>
                            </div>

                            <div class="flex-1 mr-3">
                              <p class="mb-0">${{ order.total_amount }}</p>
                            </div>
                            <v-btn
                              icon
                              color="grey"
                              class=""
                              :to="`/order/OrderHistory/${order.id}`"
                            >
                              <v-icon>mdi-arrow-right</v-icon>
                            </v-btn>
                          </div>
                        </v-card>
                      </v-col>
                    </v-tab-item>
                    <v-tab-item
                      key="group-order"
                      value="group-order"
                    >
                      <v-col cols="12">
                        <v-btn @click="generateReport" color="primary">Download Invoice</v-btn>
                      </v-col>
                      <v-col cols="12">
                        <div class="d-none px-4 d-md-flex mb-5">
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Order #</h4>
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Status </h4>
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Date Purchased </h4>
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Meal Type </h4>
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Total </h4>
                          <div class="px-5">

                          </div>
                        </div>
                        <v-card
                          elevation="0"
                          class="border br-10 mb-4"
                          v-for="(order, index) in groupOrders"
                          :key="index"
                        >
                          <div class="pa-4 d-flex align-center flex-wrap">
                            <div class="flex-1 mr-3">
                              <h4 class="font-600 mb-0 ">{{ order.id }}</h4>
                            </div>
                            <div class="flex-1 mr-3">
                              <v-chip
                                class="ma-2 f-600"
                                color="green accent-1"
                                small
                                text-color="green accent-4"
                              >
                                {{ order.status }}
                              </v-chip>
                            </div>
                            <div class="flex-1 mr-3">
                              <p class="mb-0">{{ order.order_date }}</p>
                            </div>
                            <div class="flex-1 mr-3">
                              <p class="mb-0">{{ order.meal_type }}</p>
                            </div>

                            <div class="flex-1 mr-3">
                              <p class="mb-0">${{ order.total_amount }}</p>
                            </div>
                            <v-btn
                              icon
                              color="grey"
                              class=""
                              :to="`/order/GroupOrderHistory/${order.id}`"
                            >
                              <v-icon>mdi-arrow-right</v-icon>
                            </v-btn>
                          </div>
                        </v-card>
                      </v-col>
                    </v-tab-item>
                    <v-tab-item
                      key="catering-order"
                      value="catering-order"
                    >
                      <v-col cols="12">
                        <div class="d-none px-4 d-md-flex mb-5">
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Order #</h4>
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Status </h4>
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Date Purchased </h4>
                          <h4 class="font-600 grey--text text--darken-2 flex-1 mr-3">Total </h4>
                          <div class="px-5">

                          </div>
                        </div>
                        <v-card
                          elevation="0"
                          class="border br-10 mb-4"
                          v-for="(order, index) in cateringOrders"
                          :key="index"
                        >
                          <div class="pa-4 d-flex align-center flex-wrap">
                            <div class="flex-1 mr-3">
                              <h4 class="font-600 mb-0 ">{{ order.id }}</h4>
                            </div>
                            <div class="flex-1 mr-3">
                              <v-chip
                                class="ma-2 f-600"
                                color="green accent-1"
                                small
                                text-color="green accent-4"
                              >
                                {{ order.status }}
                              </v-chip>
                            </div>
                            <div class="flex-1 mr-3">
                              <p class="mb-0">{{ order.order_date }}</p>
                            </div>

                            <div class="flex-1 mr-3">
                              <p class="mb-0">${{ order.total_amount }}</p>
                            </div>
                            <v-btn
                              icon
                              color="grey"
                              class=""
                              :to="`/order/CateringOrderHistory/${order.id}`"
                            >
                              <v-icon>mdi-arrow-right</v-icon>
                            </v-btn>
                          </div>
                        </v-card>
                      </v-col>
                    </v-tab-item>
                  </v-tabs-items>


                </v-row>
              </div>
            </div>
          </Box>
        </v-col>
      </v-row>
    </v-container>
    <Footer/>
    <vue-html2pdf
      :show-layout="false"
      :manual-pagination="false"
      ref="html2Pdf">
      <section slot="pdf-content">
        <v-card>
          <v-card-title>
            <h2 class="text-h5">Invoice</h2>
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="6">
                <p>Name: {{ getMe.username }}</p>
                <p>Email: {{ getMe.email }}</p>
              </v-col>
              <v-col cols="6">
                <p>Date: {{ invoiceDate }}</p>
              </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-data-table :headers="headers" :items="invoiceData" hide-default-footer>
            </v-data-table>

            <v-divider></v-divider>

            <v-row class="mt-5">
              <v-col cols="6">
                <p>Total Claimed Amount: {{ getAllowedBudget | currency }}</p>
              </v-col>
              <v-col cols="6" :class="{ 'text-right': true }">
                <p>Total Amount Of Orders: {{ getTotalBudget | currency }}</p>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </section>
    </vue-html2pdf>

  </div>
</template>
<script>

export default {
  head: {
    title: 'Order List'
  },
  data() {
    return {
      page: 1,
      singleOrders: [],
      groupOrders: [],
      cateringOrders: [],
      tab: 'single-order',
      tabs: [
        'single-order',
        'group-order',
        'catering-order',
      ],
      invoiceData: [],
      invoiceDate: new Date().toLocaleDateString(),
      headers: [
        {text: 'Order ID', value: 'id'},
        {text: 'Date', value: 'order_date'},
        {text: 'Status', value: 'status'},
        {text: 'Meal Type', value: 'meal_type'},
        {text: 'Total Amount', value: 'total_amount'},
        {text: 'Allowed Budget', value: 'allowed_budget'},
      ],
    }
  },
  computed: {
    getMe() {
      return this.$store.state.modules.userInfo ? this.$store.state.modules.userInfo.userInfo : {}
    },
    getTotalBudget() {
      let total = 0
      this.invoiceData.forEach(item => {
        total = total + parseInt(item.total_amount)
      })
      return total
    },
    getAllowedBudget() {
      let total = 0
      this.invoiceData.forEach(item => {
        total = total + parseInt(item.allowed_budget === null ? 0 : item.allowed_budget)
      })
      return total
    },
  },
  methods: {
    fetchSingleOrders() {
      if (this.getMe.is_partner) {
        this.$api.get("singleorder/?singleorderitem__restaurant__user_id=" + this.$store.state.modules.userInfo.userInfo.id).then(response => {
          this.singleOrders = response.data
        })
      } else {
        this.$api.get("singleorder/?customer_id=" + this.$store.state.modules.userInfo.userInfo.id).then(response => {
          this.singleOrders = response.data
          // response.data.forEach(item => {
          //   this.invoiceData.push(item)
          // })
        })
      }

    },
    fetchGroupOrders() {
      if (this.getMe.is_partner) {
        this.$api.get("grouporder/?grouporderitem__restaurant__user_id=" + this.$store.state.modules.userInfo.userInfo.id).then(response => {
          this.groupOrders = response.data
        })
      } else {
        this.$api.get("grouporder/?teammember_id=" + this.$store.state.modules.userInfo.userInfo.id).then(response => {
          this.groupOrders = response.data
          response.data.forEach(item => {
            this.invoiceData.push(item)
          })
        })
      }

    },
    fetchCateringOrders() {
      if (this.getMe.is_partner) {
        this.$api.get("cateringorder/?cateringorderitem__restaurant__user_id=" + this.$store.state.modules.userInfo.userInfo.id).then(response => {
          this.cateringOrders = response.data
        })
      } else {
        this.$api.get("cateringorder/?customer_id=" + this.$store.state.modules.userInfo.userInfo.id).then(response => {
          this.cateringOrders = response.data
          // response.data.forEach(item => {
          //   this.invoiceData.push(item)
          // })
        })
      }
    },
    generateReport() {
      this.$refs.html2Pdf.generatePdf()
    }
  },
  mounted() {
    this.fetchSingleOrders()
    this.fetchGroupOrders()
    this.fetchCateringOrders()
  }
}
</script>
<style lang="scss">

.test {
}

</style>

