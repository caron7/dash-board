const app = {
  state: {
    websocketData: null
  },
  mutations: {
    SAVE_WEBSOCKET_DATA: (state, websocketData) => {
      state.websocketData = websocketData
    }
  },
  actions: {
    saveWebsocketData({
      commit
    }, websocketData) {
      commit('SAVE_WEBSOCKET_DATA', websocketData)
    }
  }
}

export default app
