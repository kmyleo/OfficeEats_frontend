<template>
  <v-row justify="center">
    <v-dialog
      v-model="showDialog"
      scrollable
      max-width="450px"
      persistent
    >
      <v-card>
        <v-spacer></v-spacer>
        <v-btn class="m-2" icon @click="$emit('close-food-item-dialog')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div v-if="selectedFoodItem.fooditemimage !== undefined">
          <v-img v-if="selectedFoodItem.fooditemimage.length !== 0" contain
                 :src="mediaUrl+selectedFoodItem.fooditemimage[0].image"></v-img>
        </div>
        <v-card-title>
          {{ selectedFoodItem.name }}
        </v-card-title>
        <!--        <v-divider></v-divider>-->
        <v-card-text>
          <v-row>
            <v-col>
              <span>{{ selectedFoodItem.description }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h6>Ingredients</h6>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <ul>
                <li v-for="ingredient in selectedFoodItem.ingredients">{{ ingredient.name }}</li>
              </ul>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                outlined
                label="Special Instruction"
                placeholder="e.g. No mayo"
              ></v-textarea>
            </v-col>
          </v-row>

        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-row>
            <v-col cols="4">
              <div class="text-center d-inline-flex">
                <v-btn icon color="primary" outlined small class="mr-2" @click="quantity=quantity+1">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
                <p class="my-1">{{ quantity }}</p>
                <v-btn icon color="primary" outlined small class="ml-2" @click="quantity=quantity-1"
                       :disabled="quantity<=0">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col>
              <v-btn
                color="blue darken-1"
                text
                block
                @click="addFoodItem"
                :disabled="quantity<=0"
              >
                Add to cart
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    selectedFoodItem: {
      type: Object,
      default: {
        fooditemimage: [],
      }
    }
  },
  data: () => ({
    mediaUrl: process.env.VUE_APP_MEDIA_URL,
    quantity: 0
  }),
  methods: {
    addFoodItem() {
      this.$emit("close-food-item-dialog")
      let payload = this.selectedFoodItem
      payload['quantity'] = this.quantity
      this.$store.commit('modules/cartItem/setFoodItem', payload)
    },
  },
}

</script>

<style>

</style>
