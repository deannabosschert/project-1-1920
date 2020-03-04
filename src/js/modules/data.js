import {
  Render
} from "./render.js"

import {
  API
} from "./API.js"

const Data = {
  get: (route) => {
    console.log(route)
    if (window.localStorage.getItem(`"${route}"`) === null) {
      console.log("nog geen data in je localStorage, incoming!")
      API.get(route)
      return
    } else {
      console.log("nu zit er (wel) data in je localStorage 🤓")
      Data.parse(route)
    }
  },
  store: (route, data) => {
    console.log(route)
    console.log(data)

    localStorage.setItem(`"${route}"`, JSON.stringify(data))
    console.log('data stored')
    Data.parse(route)
  },
  parse: (route) => {
    console.log(route)
    const data = JSON.parse(localStorage.getItem(`"${route}"`))
    console.log(data)
    console.log('data parsed')
    Data.render(route, data)
  },
  render: (route, data) => {
    console.log(route)
    console.log(data)

    console.log('data going to render')

    checkRoute(route)

    function checkRoute(route) {
      if (route === 'overview' || route === 'books') {
        Render[`${route}`](data)
      } else {
        Render.detail(data)
      }
    }
  }
}

export {
  Data
}