import {
  Render
} from "./render.js"

import {
  API
} from "./API.js"

const Data = {
  get: (route) => {
    if (window.localStorage.getItem(`"${route}"`) === null) {
      console.log(`no ${route}data found in localStorage`)
      API.get(route)
      return
    } else {
      console.log("data found in localStorage 🤓")
      Data.parse(route)
    }
  },
  store: (route, data) => {
    localStorage.setItem(`"${route}"`, JSON.stringify(data))
    Data.parse(route)
  },
  parse: (route) => {
    const data = JSON.parse(localStorage.getItem(`"${route}"`))
    Data.render(route, data)
  },
  render: (route, data) => {
    if (route === "overview" || route === "books") {
      Render[`${route}`](data)
    } else {
      Render.detail(data)
    }
  }
}

export {
  Data
}