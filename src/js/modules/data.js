import {
  render
} from "./render.js"

import {
  apiGet
} from "./API.js"

const data = {
  get: function(route) {
    if (window.localStorage.length === null) {
      console.log("nog geen data in je localStorage, incoming!")
      apiGet[`"${route}"`]()
    } else {
      console.log("nu zit er (wel) data in je localStorage 🤓")
      data.parse(route)
    }
  },
  store: function(route, routeData) {
    localStorage.setItem(`"${routeData}"`, JSON.stringify(routeData))
    data.parse(route, routeData)
  },
  parse: function(route, routeData) {
    const currentRoute = route
    const currentData = JSON.parse(localStorage.getItem(`"${routeData}"`))
    data.render(currentRoute, currentData)
  },
  render: function(currentRoute, currentData) {
    render[`"${currentRoute}"`](currentData)
  }
}

export {
  data
}