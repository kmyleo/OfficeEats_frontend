<template>
  <div>
    <v-container>
      <v-breadcrumbs class="ps-0" :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <v-alert
        dense
        border="left"
        type="warning"
        v-for="food in foodAvailable"
        v-if="!food.is_menu_selected && orderType==='group'"
      >
        Please Select the Menu for Today <strong>{{ food.type }}</strong>
      </v-alert>

      <v-alert
        dense
        border="left"
        type="warning"
        v-if="foodAvailable.length===0"
      >
        No Meal option is left for the Selected Team
      </v-alert>

      <div class="d-flex justify-space-between flex-wrap flex-sm-nowrap mb-3">
        <v-tabs class="mb-3">
          <v-tab class="text-capitalize">Delivery</v-tab>
          <!--          <v-tab class="text-capitalize">Dining Out</v-tab>-->
          <!--          <v-tab class="text-capitalize">Nightlife</v-tab>-->
        </v-tabs>
        <!-- <v-btn color="primary" class="mb-3">Filter</v-btn> -->
        <!-- <div>
          <h2>Search Results</h2>
          <ul>
            <li v-for="result in results" :key="result.id">{{ result.name }}</li>
          </ul>
        </div> -->
      </div>
      <v-row>
        <v-col cols="12" xl="12">
          <Box>
            <div slot="boxSidebar">
              <div slot="boxSidebar">
                <div class="">
                  <div class="mb-6" v-if="orderType==='group'">
                    <v-row>
                      <v-col>
                        <h6 class="">Select Team</h6>
                        <v-autocomplete
                          @change="teamChanged"
                          v-model="selectedTeam"
                          dense
                          clearable
                          chips
                          :items="teams"
                          item-text="team_detail.name"
                          return-object
                          variant="underlined"
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                    <v-row v-if="foodAvailable.length!==0">
                      <v-col>
                        <h6 class="">Available Meal</h6>
                        <v-radio-group v-model="mealType" @change="mealTypeChanged">
                          <v-radio
                            v-for="food in foodAvailable"
                            v-if="!food.is_menu_selected"
                            :key="food"
                            :label="food.type"
                            color="secondary"
                            hide-details=""
                            :value="food"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                    <div v-if="foodAvailable.length!==0">
                      <v-row v-if="selectedTeam!==null && mealType!=null && mealType.type==='Breakfast' ">
                        <v-col>Total Budget: {{ mealType.team_rule_detail.breakfast_budget }}</v-col>
                      </v-row>
                      <v-row v-if="selectedTeam!==null && mealType!=null && mealType.type==='Lunch' ">
                        <v-col>Total Budget: {{ mealType.team_rule_detail.lunch_budget }}</v-col>
                      </v-row>
                      <v-row v-if="selectedTeam!==null && mealType!=null && mealType.type==='Dinner' ">
                        <v-col>Total Budget: {{ mealType.team_rule_detail.dinner_budget }}</v-col>
                      </v-row>
                    </div>
                    <!--                    <v-row v-if="selectedTeam!==null">-->
                    <!--                      <v-col>Remaining Order Per Day: {{ selectedTeam.order_per_day }}</v-col>-->
                    <!--                    </v-row>-->
                  </div>
                  <div class="mb-6" v-if="orderType==='catering'">
                    <v-row>
                      <v-col>
                        <h6 class="">Total No of Peoples</h6>
                        <v-text-field
                          v-model="noOfPeoples"
                          title="No of People For Events"
                          class="mr-4"
                          type="number"
                          @change="noOfPeoplesChanged"
                        >

                        </v-text-field>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="mb-6">
                    <h6 class="">Order Type</h6>
                    <v-radio-group v-model="orderType" @change="getResturant">
                      <v-radio
                        label="Single Order"
                        color="secondary"
                        hide-details=""
                        value="single"
                      ></v-radio>
                      <v-radio
                        label="Group Order"
                        color="secondary"
                        hide-details=""
                        value="group"
                      ></v-radio>
                      <v-radio
                        label="Catering Event"
                        color="secondary"
                        hide-details=""
                        value="catering"
                      ></v-radio>
                    </v-radio-group>
                  </div>
                </div>

              </div>
              <div class="">
                <div class="mb-6">
                  <h6 class="">Categories</h6>
                  <v-checkbox
                    v-for="(category, index) in categories"
                    :key="index"
                    class="mt-2"
                    :label="category.name"
                    color="secondary"
                    hide-details=""
                    :value="category.id"
                    v-model="selectedCategories"
                    @change="getResturant"
                  ></v-checkbox>
                </div>
                <!-- <div class="mb-6">
                  <h6 class="">Categories</h6>
                  <v-checkbox
                    v-for="(check, index) in 4"
                    :key="index"
                    class="mt-2"
                    label="4+"
                    color="secondary"
                    hide-details=""
                  ></v-checkbox>
                </div> -->
                <!-- <div class="mb-6">
                  <h6 class="mt-6">Sort By</h6>
                  <v-radio-group v-model="radioGroup">
                    <v-radio
                      v-for="n in 4"
                      :key="n"
                      label="Popularity"
                      color="secondary"
                    ></v-radio>
                  </v-radio-group>
                </div> -->
                <div class="mb-6" v-if="orderType!=='single'">
                  <h6 class="mt-6 mb-12">Number of Person</h6>
                  <v-range-slider
                    v-model="peopleRangeValue"
                    step="5"
                    thumb-label="always"
                    @change="getResturant"
                  ></v-range-slider>
                </div>
              </div>

            </div>
            <div slot="boxContent">
              <div class="px-8">
                <div v-if="foodAvailable.length===0 && orderType==='group'">
                  <div slot="boxContent">
                    <div class="px-8">
                      <v-alert type="warning" variant="outlined">No Meal options Left for today for this Team</v-alert>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <v-row v-if="CardList.length!==0">
                    <v-col cols="12">
                      <!-- <h5 class="text-18 test-color">184 Delivery Restaurants in London</h5> -->
                    </v-col>
                    <v-col
                      cols="12" xl="4" lg="4" md="4" sm="6"
                      v-for="(item, index) in CardList.slice(0, 6)"
                      :key="index"
                    >
                      <Card :cardSection="item"/>
                    </v-col>


                  </v-row>
                  <v-row v-else>
                    <v-col cols="12">
                      <v-alert  type="warning" variant="outlined">{{ alertValue}}</v-alert>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>

          </Box>
        </v-col>
      </v-row>
    </v-container>
    <!-- <Location/> -->
    <Footer/>

  </div>
</template>
<script>
import {CardSection} from 'assets/database/data.js';
import {checkRouteAuthorization} from "@/utils/authorization";

export default {
  head: {
    title: 'Resturant Column'
  },
  data: () => ({
    CardList: [],
    categories: [],
    selectedCategories: [],
    items: [
      {
        text: 'Home',
        disabled: false,
        href: '/',
      },
      {
        text: 'London',
        disabled: false,
        href: '/',
      },
      {
        text: 'Resturants',
        disabled: true,
        href: '/',
      },
    ],
    checkbox: true,
    radioGroup: 1,
    peopleRangeValue: [0, 40],
    alertValue: "No Restaurant Found",
    business_name_filter: "",
    orderType: "single",
    mealType: null,
    teams: [],
    selectedTeam: {},
    orderDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    minDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    time: null,
    timeMenu2: false,
    modal2: false,
    foodAvailable: [],
    noOfPeoples: 0,

  }),
  methods: {

    getResturant() {
      this.$store.commit('modules/cartItem/setOrderType', this.orderType)
      if (this.orderType !== 'group') {
        this.selectedTeam = {}
        this.$store.commit('modules/cartItem/setTeam', this.selectedTeam)
        this.getUserTeams()
      }
      const queryParams = {
        category_ids: this.selectedCategories.toString(),
        business_name__icontains: this.business_name_filter,
        restauranttype__type__iexact: this.orderType
      };


      if (this.orderType !== 'catering') {
        queryParams['restauranttype__people_from_range__gte'] = this.peopleRangeValue[0]
        queryParams['restauranttype__people_to_range__lte'] = this.peopleRangeValue[1]
      }
      this.$api.get('restaurant/', {params: queryParams})
        .then(response => {
          this.CardList = response.data;
        })
        .catch(error => {
          console.error('Error fetching restaurants:', error);
        });

    },
    //   getRestaurant() {
    //   const businessNameQuery = this.$route.query.query || '';
    //   const categoryIds = this.$route.query.categories || '';

    //   this.$api(`restaurant/?business_name__icontains=${businessNameQuery}&category_ids=${categoryIds}` + this.selectedCategories.toString()).then(response => {
    //     this.CardList = response.data;
    //   }).catch(error => {
    //     console.error('Error fetching restaurants:', error);
    //   });
    // },
    getCategory() {
      this.$api("restaurant_category").then(response => {
        this.categories = response.data

      })

    },
    getUserTeams() {
      this.$api("teamRule/?team__teammember__user__id=" + this.$store.state.modules.userInfo.userInfo.id).then(response => {
        this.teams = response.data
        if (response.data.length !== 0) {
          this.selectedTeam = this.teams[0]
          this.$store.commit('modules/cartItem/setTeam', this.selectedTeam)
        }

      })

    },
    teamChanged() {
      this.$store.commit('modules/cartItem/setTeam', this.selectedTeam)
      this.getTodayFood()
    },
    getTodayFood() {
      const date = new Date();
      const queryParams = {
        teammember__user__id: this.$store.state.modules.userInfo.userInfo.id,
        teammember__team__id: this.$store.state.modules.cartItem.team.team,
        date: date.getUTCFullYear() + '-' + (parseInt(date.getMonth()) + 1).toString() + "-" + date.getUTCDate(),
        is_menu_selected: false,
      }
      this.$api("food_history", {params: queryParams}).then(response => {
        this.foodAvailable = response.data
        if (this.foodAvailable.length !== 0) {
          this.mealType = this.foodAvailable[0]
          this.$store.commit('modules/cartItem/setMealType', this.foodAvailable[0])
        }

      })

    },
    mealTypeChanged() {
      this.$store.commit('modules/cartItem/setMealType', this.mealType)
    },
    noOfPeoplesChanged() {
      this.$store.commit('modules/cartItem/setNoOfPeoples', this.noOfPeoples)
    }

  },
  mounted() {
    this.orderType = this.$store.state.modules.cartItem.orderType
    checkRouteAuthorization(this.$router.currentRoute, this, this.$router)
    this.business_name_filter = this.$route.params.ResturantTwoColumn
    this.getResturant()
    this.getCategory()
    if (this.orderType === 'group') {
      this.getUserTeams()
    }
    this.getTodayFood()

  },
  created() {
    this.$nuxt.$on('resturant-filter-changed', (value) => {
      this.business_name_filter = value
      this.getResturant()
    })
    // global event bus
  }
//   watch: {
//   '$route.query': {
//     immediate: true,
//     handler() {
//       this.getRestaurant();
//     }
//   }
// },
}
</script>

