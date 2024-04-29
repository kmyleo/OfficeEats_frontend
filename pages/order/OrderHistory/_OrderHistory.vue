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
                  <div class="avatar-upload">
                    <!-- <v-avatar size="160">
                      <img src="~/assets/images/faces/big-avatar.png" alt="">
                    </v-avatar> -->
                    <!-- <v-btn
                      class="avatar-upload-btn"
                      fab

                      dark
                      small
                      color="grey lighten-4"
                    > -->
                      <!-- <v-icon color="secondary" dark size="20">
                        mdi-camera
                      </v-icon>
                    </v-btn> -->
                    <input class="d-none" type="file" id="avatarUpload"/>
                  </div>

                </label>
                <div>
                  <!-- <h2 class="white--text text-md-left text-center mb-1">{{ getMe.username}}</h2> -->
<!--                  <div class="d-flex mb-1 justify-center justify-md-start">-->
<!--                    <v-icon size="15" class="me-2" color="white">mdi-map-marker</v-icon>-->
<!--                    <h6 class="font-weight-light white&#45;&#45;text">New York, US</h6>-->
<!--                  </div>-->
<!--                  <h6 class="font-weight-light white&#45;&#45;text">Bigtime foodie..out and out dessert person</h6>-->
                </div>
              </div>

<!--              <div class="d-none d-md-flex">-->
<!--                <div class="text-center">-->
<!--                  <h2 class="font-weight-bold white&#45;&#45;text">24</h2>-->
<!--                  <h6 class="font-weight-regular white&#45;&#45;text">Reviews</h6>-->
<!--                </div>-->
<!--                <div class="mx-3">-->
<!--                  <v-divider-->
<!--                    vertical-->
<!--                    dark-->
<!--                  ></v-divider>-->
<!--                </div>-->
<!--                <div class="text-center">-->
<!--                  <h2 class="font-weight-bold white&#45;&#45;text">45</h2>-->
<!--                  <h6 class="font-weight-regular white&#45;&#45;text">Photos</h6>-->
<!--                </div>-->
<!--                <div class="mx-3">-->
<!--                  <v-divider-->
<!--                    vertical-->
<!--                    dark-->
<!--                  ></v-divider>-->
<!--                </div>-->
<!--                <div class="text-center">-->
<!--                  <h2 class="font-weight-bold white&#45;&#45;text">1.6k</h2>-->
<!--                  <h6 class="font-weight-regular white&#45;&#45;text">Followers</h6>-->
<!--                </div>-->
<!--              </div>-->

            </div>

          </v-img>
        </v-col>
        <v-col cols="12">
          <Box class="dashboard-box">
            <div slot="boxSidebar">
              <!--              <DashboardSidebar />-->

            </div>
            <div slot="boxContent">
              <div class="px-10">
                <v-row>
                  <v-col cols="12">
                    <h1>Order Details</h1>
                  </v-col>
                  <v-col cols="12">
                    <v-card elevation="0" class="border br-10">
                      <div
                        class="d-flex flex-wrap py-2 px-0 px-sm-10"
                        v-if="orderItems.length!==0"
                      >
                        <div class="d-flex my-3 mx-3">
                          <p class="text-14 grey--text text--darken-1 mb-0 mr-2">
                            Order ID:
                          </p>
                          <p class="mb-0 text-14 grey--text text--darken-4">
                            {{ orderItems[0].order.id }}
                          </p>
                        </div>
                        <div class="d-flex my-3 mx-3">
                          <p class="text-14 grey--text text--darken-1 mb-0 mr-2">
                            Placed on:
                          </p>
                          <p class="mb-0 grey--text text--darken-4 text-14">
                            {{ orderItems[0].order.order_date }}
                          </p>
                        </div>
                        <div class="d-flex my-3 mx-3" v-if="orderItems[0].order.delivered_date!==null">
                          <p class="text-14 grey--text text--darken-1 mb-0 mr-2">
                            Delivered on:
                          </p>
                          <p class="mb-0 grey--text text--darken-4 text-14">
                            {{ orderItems[0].order.delivered_date }}
                          </p>
                        </div>
                      </div>
                      <v-divider></v-divider>
                      <div v-for="(item, index) in orderItems" :key="index">
                        <div
                          class=" d-flex align-center flex-column flex-sm-row justify-space-between flex-wrap px-4 px-sm-10  pa-4"
                        >
                          <div class="d-flex flex-column flex-sm-row align-center flex-wrap me-4">
                            <!-- <v-avatar tile size="64" class="me-sm-4 mx-auto mb-3 mb-sm-0">
                              <img
                                v-if="item.food_item.fooditemimage.length!==0"
                                :src="item.food_item.fooditemimage[0].image"
                                alt=""
                              />
                            </v-avatar> -->
                            <div class="text-center text-sm-left">
                              <div class="text-14 f-600 mb-2 mb-sm-0">
                                {{ item.food_item.name }}
                              </div>
                              <div class="text-14 grey--text text--darken-1 mb-1 mb-sm-0">
                                ${{ item.subtotal / item.quantity }}x {{ item.quantity }}
                              </div>
                            </div>
                          </div>
                          <!--                          <p class="mb-0 grey&#45;&#45;text text&#45;&#45;darken-1 text-14 mb-3 mb-sm-0">-->
                          <!--                            Product properties: Black, L-->
                          <!--                          </p>-->
                          <v-btn
                            text
                            color=""
                            class="text-capitalize font-weight-regular"
                          >Write a Review
                          </v-btn
                          >
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <v-card elevation="0" class="border br-10">
                      <!-- <div class="pa-5">
                        <h4 class="mb-3 grey--text text--darken-4">
                          Delivery Address
                        </h4>
                        <p class="text-14 mb-0">
                          Kelly Williams 777 Brockton Avenue, Abington MA 2351
                        </p>
                      </div> -->
                    </v-card>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <v-card elevation="0" class="border br-10">
                      <div class="pa-5">
                        <h4 class="mb-3 grey--text text--darken-4">
                          Total Summary
                        </h4>
                        <div class="d-flex justify-space-between mb-2">
                          <p class="tex-14 mb-0 grey--text text--darken-2">
                            Subtotal:
                          </p>
                          <p class="tex-14 mb-0 font-weight-bold">
                            ${{ orderItems[0].order.total_amount }}
                          </p>
                        </div>
                        <div class="d-flex justify-space-between mb-2">
                          <p class="tex-14 mb-0 grey--text text--darken-2">
                            Shipping fee:
                          </p>
                          <p class="tex-14 mb-0 font-weight-bold">
                            $0
                          </p>
                        </div>
                        <!--                        <div class="d-flex justify-space-between mb-2">-->
                        <!--                          <p class="tex-14 mb-0 grey&#45;&#45;text text&#45;&#45;darken-2">-->
                        <!--                            Discount:-->
                        <!--                          </p>-->
                        <!--                          <p class="tex-14 mb-0 font-weight-bold">-->
                        <!--                            -$30-->
                        <!--                          </p>-->
                        <!--                        </div>-->
                        <v-divider class="my-3"></v-divider>
                        <div class="d-flex justify-space-between mb-2">
                          <p class="tex-14 mb-0 font-weight-bold">
                            Total:
                          </p>
                          <p class="tex-14 mb-0 font-weight-bold">
                            ${{ orderItems[0].order.total_amount }}
                          </p>
                        </div>
                        <!--                        <p>Paid by Credit/Debit Card</p>-->
                      </div>
                    </v-card>
                  </v-col>

                </v-row>
              </div>
            </div>
          </Box>
        </v-col>
      </v-row>
    </v-container>
    <Footer/>

  </div>
</template>
<script>
export default {
  head: {
    title: 'Order History'
  },
  data() {
    return {
      page: 1,
      orderItems: [{
        order: {},
        food_item: {
          fooditemimage: []
        },
      }],
      mediaUrl: process.env.VUE_APP_MEDIA_URL

    }
  },
  computed: {
    getMe() {
      return this.$store.state.modules.userInfo ? this.$store.state.modules.userInfo.userInfo : {}
    },
  },
  methods: {
    fetchOrderItems() {
      this.$api.get("singleorderitem/?order_id=" + this.$route.params.OrderHistory).then(response => {
        this.orderItems = response.data
      })
    },
  },
  mounted() {
    this.fetchOrderItems()
  }
}
</script>
<style lang="scss">

.test {
}

</style>

