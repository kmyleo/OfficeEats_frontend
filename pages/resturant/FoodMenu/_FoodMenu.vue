<template>
  <div>
    <v-container>
      <v-breadcrumbs class="ps-0" :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <!-- gallery  -->
      <v-row dense>
        <v-col cols="12" xl="6" lg="6">
          <v-img width="100%" height="100%" :src="mediaUrl+mainImage.image"></v-img>
        </v-col>
        <v-col cols="12" xl="6" lg="6">
          <v-row dense>
            <v-col cols="6" xl="6" v-for="(image, index) in resturant.restaurantimage.slice(0,4)" :key="index">
              <v-img contain :src="mediaUrl+image.image"></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="mt-4">
          <div class="d-flex justify-space-between flex-wrap align-center mb-3">
            <h1 class="me-2">{{ resturant.business_name }}</h1>
            <div class="mb-3">
                        <span
                          v-for="(star, index) in 5"
                          :key="index"
                        >
                            <v-icon small color="warning">mdi-star</v-icon>
                        </span>
              <span class="text-14 me-1"> 4.5
                            <span class="grey--text">(1004)</span>
                        </span>
            </div>
          </div>
          <p class="mb-5 text-14">{{ formattedCategories }}</p>
          <div class="grey--text text--darken-1 align-middle text-14 mb-4 d-flex align-center flex-wrap">
            <v-icon left small color="grey">mdi-map-marker</v-icon>
            {{ resturant.address }} -
            <nuxt-link to="" class="grey--text text--darken-3">Show Map</nuxt-link>
          </div>
          <div v-for="(schedules, index) in schedules" :key="index"
               class="grey--text text--darken-1 align-middle text-14 mb-4 d-flex align-center flex-wrap">
            <v-icon left small color="grey">mdi-clock-outline</v-icon>
            <span class="primary--text me-2">{{ schedules.status }}</span> - {{ schedules.from_date }} -
            {{ schedules.to_date }}: {{ schedules.formatted_open_time }} - {{ schedules.formatted_close_time }}
          </div>
          <div class="grey--text text--darken-1 align-middle text-14 mb-4 d-flex align-center flex-wrap">
            <v-icon left small color="grey">mdi-earth</v-icon>
            <nuxt-link to="" class="text-decoration-none grey--text text--darken-1">{{ resturant.website_url }}
            </nuxt-link>
          </div>

        </v-col>
      </v-row>
      <!-- end::gallery  -->

      <div>
        <v-tabs
          v-model="tab"
          class="mb-8"
        >


          <v-tab class="text-capitalize" href="#tab-1">
            Order Online

          </v-tab>

          <!-- <v-tab class="text-capitalize" href="#tab-2">
            Book a Table

          </v-tab> -->

          <v-tab class="text-capitalize" href="#tab-3">
            Reviews

          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            value="tab-1"
          >
            <v-row>
              <v-col cols="12" xl="12">
                <Box>
                  <div slot="boxSidebar">
                    <div class=" d-flex flex-column ">
                      <v-checkbox
                        v-for="(category, index) in foodItemCategories"
                        :key="index"
                        class="mt-2"
                        :label="category.name"
                        color="secondary"
                        hide-details=""
                        :value="category.id"
                        v-model="selectedFoodItemCategories"
                        @change="getFoodItem"
                      ></v-checkbox>
                    </div>


                  </div>
                  <div slot="boxContent">
                    <div class="px-8">
                      <v-row>
                        <v-col cols="12">
                          <h3 class="fw-bold">Recommended</h3>
                        </v-col>
                        <v-col
                          cols="12"
                          v-for="(item, index) in foodItem"
                          :key="index"
                        >
                          <div class="d-flex justify-space-between align-center flex-wrap">
                            <div class="d-flex flex-wrap">
                              <v-avatar class="me-3" size="150" tile>
                                <v-img v-if="item.fooditemimage.length !== 0" contain
                                       :src="mediaUrl+item.fooditemimage[0].image"></v-img>
                              </v-avatar>
                              <div>
                                <h5 class="f-600 mb-3">{{ item.name }}</h5>
                                <v-chip class="text-uppercase mb-2" text-color="secondary" small color="grey lighten-4">
                                  Must Try
                                </v-chip>
                                <!-- <div class="d-flex mb-3">
                                  <v-icon color="amber" small>mdi-star</v-icon>
                                  <v-icon color="amber" small>mdi-star</v-icon>
                                  <v-icon color="amber" small>mdi-star</v-icon>
                                  <v-icon color="amber" small>mdi-star</v-icon>
                                  <v-icon color="amber" small>mdi-star</v-icon>
                                  <h6 class="ms-3 grey--text text--darken-1 font-weight-light">(57)</h6>
                                </div> -->
                                <div class="d-flex mb-1">
                                  <p class="text-14 grey--text text--darken-1 text-decoration-line-through me-2 mb-0"
                                     v-if="item.discount > 0">
                                    ${{ item.price }}
                                  </p>
                                  <p class="text-14 grey--text text--darken-4 me-2 mb-0" v-else>
                                    ${{ item.price }}
                                  </p>
                                  <p class="text-14 grey--text text--darken-4 me-2 mb-0" v-if="item.discount > 0">
                                    ${{ (item.price - item.price * (item.discount / 100)) }}
                                  </p>
                                  <p class="text-14 primary--text mb-0" v-if="item.discount > 0">{{ item.discount }}%
                                    off</p>
                                </div>
                                <p class="text-14 grey--text text--darken-1">{{ (item.description) }}</p>
                              </div>
                            </div>
                            <div>
                              <v-btn
                                outlined
                                color="primary"
                                small
                                @click="addFoodItem(item)"
                              >
                                Add
                                <v-icon right small>mdi-plus</v-icon>
                              </v-btn>
                            </div>
                          </div>
                        </v-col>


                      </v-row>
                    </div>
                  </div>
                </Box>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item
            value="tab-2"
          >
            <v-row>
              <v-col cols="12" lg="6">
                <v-row>
                  <v-col cols="12" xl="6" lg="6" md="6" sm="6" class="mt-2">
                    <v-select
                      :items="formSelectItems"
                      label="Select Date"
                      outlined
                      hide-details
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="12" xl="6" lg="6" md="6" sm="6" class="mt-2">
                    <v-select
                      :items="formSelectItems"
                      label="Number Of Guests"
                      outlined
                      hide-details
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="12" xl="6" lg="6" md="6" sm="6" class="mt-2">
                    <v-text-field
                      label="First Name"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" xl="6" lg="6" md="6" sm="6" class="mt-2">
                    <v-text-field
                      label="Last Name"
                      outlined
                      hide-details
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" xl="6" lg="6" md="6" sm="6" class="mt-2">
                    <v-text-field
                      label="Email"
                      type="email"
                      outlined
                      hide-details
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" xl="6" lg="6" md="6" sm="6" class="mt-2">
                    <v-text-field
                      label="Phone"
                      outlined
                      hide-details
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-btn color="primary">Book</v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" lg="6">
                <v-img class="mx-auto" max-width="500px" :src="require('assets/images/download-app.png')"></v-img>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item
            value="tab-3"
          >
            <Reviews :resturantId="resturant.id"></Reviews>
          </v-tab-item>
        </v-tabs-items>
      </div>


    </v-container>
    <!-- <Location/> -->
    <Footer/>
    <FoodItemCard v-if="showFoodItemDialog" :showDialog="showFoodItemDialog" :selectedFoodItem="selectedFoodItem"
                  @close-food-item-dialog="closeFoodItemDialog"/>

  </div>
</template>
<script>
import Reviews from "@/components/Review.vue"

export default {
  components: {Reviews},
  head: {
    title: 'Food Menu'
  },
  data: () => ({
    items: [
      {
        text: 'Home',
        disabled: false,
        href: '/',
      },
      {
        text: 'New York',
        disabled: false,
        href: '/',
      },
      {
        text: 'Resturants',
        disabled: true,
        href: '/',
      },
    ],
    formSelectItems: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    mobileItems: [
      'Order Online', 'Book a Table', 'Reviews',
    ],
    text: 'hello',
    tab: null,
    checkbox: true,
    radioGroup: 1,
    value: [20, 40],
    resturant: {
      restaurantimage: []
    },
    mainImage: {},
    mediaUrl: process.env.VUE_APP_MEDIA_URL,
    foodItem: [],
    foodItemCategories: [],
    selectedFoodItemCategories: [],
    categories: [],
    filtered_categories: [],
    schedules: [],
    showFoodItemDialog: false,
    selectedFoodItem: {},
  }),
  methods: {
    getResturant() {
      this.$api("restaurant/" + this.$route.params.FoodMenu).then(response => {
        this.resturant = response.data
        this.getCategory();
        if (this.resturant.restaurantimage.length >= 1) {
          this.mainImage = this.resturant.restaurantimage[0]
          this.resturant.restaurantimage.splice(0, 1)
        }

      })

    },
    getFoodItem() {
      this.$api("fooditem/?restaurant_id=" + this.$route.params.FoodMenu + "&category_ids=" + this.selectedFoodItemCategories.toString()).then(response => {
        this.foodItem = response.data

      })

    },
    getFoodItemCategory() {
      this.$api("fooditem_category").then(response => {
        this.foodItemCategories = response.data

      })

    },
    addFoodItem(itemFood) {
      this.showFoodItemDialog = true
      this.selectedFoodItem = itemFood
      // this.$store.commit('modules/cartItem/setFoodItem', itemFood)
    },
    closeFoodItemDialog() {
      this.showFoodItemDialog = false
    },
    getCategory() {
      if (!this.resturant.categories || this.resturant.categories.length === 0) {
        console.log('Restaurant has no categories to process.');
        return;
      }
      this.$api("restaurant_category").then(response => {
        this.categories = response.data;
        this.filtered_categories = [];
        for (let i = 0; i < this.resturant.categories.length; i++) {
          const category = this.categories.find(c => c.id === this.resturant.categories[i]);
          if (category) {
            this.filtered_categories.push(category.name);
          }
        }
      })
    },
    getResturantSchedules() {
      this.$api("restaurant_schedule/?restaurant_id=" + this.$route.params.FoodMenu).then(response => {
        this.schedules = response.data;
        console.log(response.data);

      })
    }

  },

  mounted() {
    this.getResturant()
    this.getFoodItem()
    this.getFoodItemCategory()
    this.getResturantSchedules()
  },
  computed: {
    formattedCategories() {
      return this.filtered_categories.join(', ');
    }
  },
}
</script>
<style lang="scss">
.food-menu-link {
  font-size: 14px;
  text-decoration: none;
  color: #4B566B !important;
  font-weight: 400;

  &:hover {
    color: #000 !important;
    border-right: 3px solid #D23F57;
  }

  &.active {
    color: #000 !important;
    border-right: 3px solid #D23F57;

  }
}
</style>

