// store/modules/user.js
export const state = () => ({
  foodItems: [],
  totalPrice: 0,
});

export const mutations = {
  setFoodItem(state, payload) {
    const foundIndex = state.foodItems.findIndex(obj => obj.id === payload.id);

    if (foundIndex !== -1) {
      state.foodItems[foundIndex]["quantity"] = state.foodItems[foundIndex]["quantity"] + 1
    } else {
      payload["quantity"] = 1
      payload["food_item_id"] = payload['id']
      payload["categories"] = []
      state.foodItems.push(payload)
    }

    let totalPrice = 0
    state.foodItems.map(item => {
      if (item.allow_discount) {
        totalPrice += (item.price - (item.discount / 100) * item.price) * item.quantity
      } else {
        totalPrice += item.price * item.quantity
      }

    })

    state.totalPrice = totalPrice


  },

  setResetCart(state, payload) {
    state.foodItems = []
    state.totalPrice = 0
  },

  decreaseFoodItem(state, payload) {
    const foundIndex = state.foodItems.findIndex(obj => obj.id === payload.id);

    if (foundIndex !== -1) {
      state.foodItems[foundIndex]["quantity"] = state.foodItems[foundIndex]["quantity"] - 1
    }

    let totalPrice = 0
    state.foodItems.map(item => {
      if (item.allow_discount) {
        totalPrice += (item.price - (item.discount / 100) * item.price) * item.quantity
      } else {
        totalPrice += item.price * item.quantity
      }

    })

    console.log(totalPrice)

    state.totalPrice = totalPrice

  }

};


export const getters = {
  getFoodItem(state) {
    return state.foodItems
  }
};
