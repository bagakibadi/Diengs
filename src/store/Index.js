import vue from 'vue';
import vuex from 'vuex';
import Axios from 'axios';
// import { resolve, reject } from 'core-js/fn/promise';

vue.use(vuex);

export default new vuex.Store({
  state: {
    user: null,
    allUser: [],
    profileUser: {},
    url: null,
    ongkir: [],
    kota: [],
    isLoading: false
  },
  mutations: {
    GET_USER(state, data) {
      state.allUser = data
    },
    GET_PROFILE(state, data) {
      state.profileUser = data
    },
    GET_URL(state, data) {
      state.url = data
    },
    GET_ONGKIR(state, data) {
      state.ongkir = data
    },
    GET_KOTA(state, data) {
      state.kota = data.rajaongkir.results
    },
    START_FETCH(state) {
      state.isLoading = true
    },
    END_FETCH(state) {
      state.isLoading = false
    }
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    startFetch(context) {
      context.commit('START_FETCH')
    },
    endFetch(context) {
      context.commit('END_FETCH')
    },
    // eslint-disable-next-line no-unused-vars
    getOngkir(context) {
      return new Promise((resolve, reject) => {
        Axios.get(`${process.env.VUE_APP_API}rajaongkir/provinsi`)
          .then((res) => {
            context.commit("GET_ONGKIR", res.data.rajaongkir.results)
            resolve(res.data)
          })
          .catch((err) => {
            reject(new Error (err))
          })
      })
    },
    // eslint-disable-next-line no-unused-vars
    getKota(context) {
      return new Promise((resolve, reject) => {
        Axios.get(`${process.env.VUE_APP_API}rajaongkir/kota/`)
          .then((res) => {
            context.commit("GET_KOTA", res.data.rajaongkir.results)
            resolve(res.data)
          })
          .catch((err) => {
            reject(new Error (err))
          })
      })
    },
    getAcc(context) {
      return new Promise((resolve, reject) => {
        Axios.get(`${process.env.VUE_APP_API}users/current`, {
          headers: {
            'Authorization' : `${localStorage.token}`
          }
        })
          .then((res) => {
            context.commit("GET_PROFILE", res.data)
            resolve(res.data)
          })
          .catch((err) => {
            reject(new Error (err))
          })
      })
    },
    getUser(context) {
      const config = {
        headers: { 
          'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQ1LCJlbWFpbCI6Im5ld2JhZ3VzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibmV3YmFndXNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkbzNxM3QzVkJ1Vi9kUFhYZUx3SXpqLm5MOVBPVTd1amVCeUNmYUxVQTh2RDlTYWdRVlUuT2EiLCJmaXJzdF9uYW1lIjoiRGlkaWtIU1kiLCJpYXQiOjE1OTk2NzMyNzF9.LF4_vZxFRiA_VgEX7JRO39Kxebzek80roJbrGl_0zKI'
        }
      };
      return new Promise((resolve, reject) => {
        Axios.get(`${process.env.VUE_APP_API}admin/user`, config)
          .then((res) => {
            context.commit("GET_USER", res.data)
            resolve(res.data);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    getApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.get(`${process.env.VUE_APP_API + proto.url}`)
          .then((res) => {
            commit(proto.mutation, res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    // eslint-disable-next-line no-unused-vars
    postApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.post(`${process.env.VUE_APP_API + proto.url}`, proto.data)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    // eslint-disable-next-line no-unused-vars
    postsApi({ commit }, proto, bagus) {
      return new Promise((resolve, reject) => {
        Axios.post(`${process.env.VUE_APP_API + proto.url}`, proto.data, bagus.config)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    // eslint-disable-next-line no-unused-vars
    patchApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.patch(`${process.env.VUE_APP_API + proto.url}`, proto.data)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    // eslint-disable-next-line no-unused-vars
    deleteApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.delete(`${process.env.VUE_APP_API + proto.url}`, proto.data)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
  },
  modules: {

  },
});
