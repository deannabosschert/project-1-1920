const checkStorage = {
  overview: function() {
    if (window.localStorage.length === null) {
      console.log("nog geen data in je localStorage, incoming!")
      return data = false
    },
    else {
      console.log("nu zit er (wel) data in je localStorage 🤓")
      return data = true
    }
  },
  books: function() {
    if (window.localStorage.length === null) {
      console.log("nog geen books in je localStorage, incoming!")
      return data = false
    },
    else {
      console.log("nu zitten er (wel) books in je localStorage 🤓")
      return data = true
    }
  }
}

export {
  checkStorage
}