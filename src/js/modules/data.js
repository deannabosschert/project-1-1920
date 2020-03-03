import {
  Render
} from "./render.js"

import {
  apiGet
} from "./API.js"

const Data = {
  get: function(route) {
    const storage = window.localStorage
    if (storage.getItem(`"${route}"`) === null) {
      console.log("nog geen data in je localStorage, incoming!")
      apiGet[`${route}`]()
      return
    } else {
      console.log("nu zit er (wel) data in je localStorage 🤓")
      Data.parse(route)
    }
  },
  store: function(route, routeData) {
    localStorage.setItem(`"${route}"`, JSON.stringify(routeData))
    console.log('data stored')
    Data.parse(route)
  },
  parse: function(route) {
    const data = JSON.parse(localStorage.getItem(`"${route}"`))
    console.log('data parsed')
    Data.render(route, data)
  },
  render: function(route, data) {
    console.log('data going to render')
    Render[`${route}`](data)
  }
}

export {
  Data
}