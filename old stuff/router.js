import {
  getData
} from "./API.js"

import {
  checkStorage
} from "./checkStorage.js"

import {
  data
} from "./data.js"


const router = {
  overview: function() {
    checkStorage.overview().then(function(data) {
        if (data = false) {
          getData.overview()
        } else {
          data.parse
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  books: function() {
    checkStorage.books().then(function(data) {
        if (data = true) {
          data.parse(data).then
        } else {
          getData.books()
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  detail: function(id) {

  }
}

export {
  router
}