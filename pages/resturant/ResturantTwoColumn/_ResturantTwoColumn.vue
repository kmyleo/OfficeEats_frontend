<template>
  <div>
    <v-container>
      <v-breadcrumbs class="ps-0" :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <div class="d-flex justify-space-between flex-wrap flex-sm-nowrap mb-3">
        <v-tabs class="mb-3">
          <v-tab class="text-capitalize">Delivery</v-tab>
          <!--          <v-tab class="text-capitalize">Dining Out</v-tab>-->
          <!--          <v-tab class="text-capitalize">Nightlife</v-tab>-->
        </v-tabs>
        <v-btn color="primary" class="mb-3">Filter</v-btn>
        <!-- <div>
          <h2>Search Results</h2>
          <ul>
            <li v-for="result in results" :key="result.id">{{ result.name }}</li>
          </ul>
        </div> -->
      </div>


      <v-row>
      <!-- Accordion/Sidebar Section -->
      <v-col cols="12" md="3">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header><strong>TYPE OF CUISINE</strong></v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="mb-6">
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
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <!-- Box Content Section -->
      <v-col cols="12" md="9">
        <div class="px-8">
          <v-row v-if="CardList.length !== 0">
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
              <v-alert :text="alertValue" type="warning" variant="outlined"></v-alert>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    </v-container>
    <!-- <Location/> -->
    <Footer/>

  </div>
</template>
<script>
import {CardSection} from 'assets/database/data.js';

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
    value: [20, 40],
    alertValue: "No Restaurant Found",
    business_name_filter:"",

  }),
  methods: {

    getResturant() {
      const queryParams = {
        category_ids: this.selectedCategories.toString(),
        business_name__icontains: this.business_name_filter
      };
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

  },
  mounted() {
    this.business_name_filter = this.$route.params.ResturantTwoColumn
    this.getResturant()
    this.getCategory()

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

