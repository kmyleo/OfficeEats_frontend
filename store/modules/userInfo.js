// store/modules/user.js
import createPersistedState from 'vuex-persistedstate';

export const state = () => ({
  userInfo: {},
});

export const mutations = {
  setMe(state, response) {
    state.userInfo = response.data
  },
  logout(state) {
    state.userInfo = {};
  },
};


export const getters = {
  getMe(state) {
    return state.userInfo
  }
};

export const actions = {
  async getMe({commit}) {
    await this.$api.get('/users/me/').then(response => {
      commit("setMe", response)
    })
  },
  logout({ commit }) {
    commit('logout');
    localStorage.removeItem('authToken');
  },
};
