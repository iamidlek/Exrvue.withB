
export default {
  namespaced: true,
  state: function () {
    return{
      selected: [],
      bible:[]
    }
  },
  getters: {

  },
  mutations:{
    loadBible (state) {
      state.bible = []
      const endpoint = 'https://gist.githubusercontent.com/iamidlek/08a5d8759ff657352c3cc6418c635590/raw/ea99fa8105dbe8e6759c9aff54b34d5abdff801a/en_en.json';
      fetch(endpoint)
      .then(blob => blob.json())
      .then(data => state.bible.push(...data));
    },
    select(state, payload) {
      console.log(payload.selected)
      state.selected = payload.selected
    },
  },
  actions:{
    
  }
}
