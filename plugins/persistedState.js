import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'me',
    paths: ["modules.userInfo", "modules.cartItem"],
  })(store)
}
