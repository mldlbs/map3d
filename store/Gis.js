const BASE_URL = '/api';
const state = ({
  TAG: 1,
  SYMBOLS: null,
});

const mutations = {
  CHANGE_TAG(state, val) {
    state.TAG = val;
  },
  SET_SYMBOLS(state, val) {
    state.SYMBOLS = val;
  },
};

const actions = {
  async addFeedback(data) {
    return this.$axios.post(`${BASE_URL}`, data);
  },
};

export default {
  state,
  mutations,
  actions
};
