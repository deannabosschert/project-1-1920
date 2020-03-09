import {
  Data
} from "./data.js"

import {
  Dialogue
} from "./dialogue.js"

const Routes = {
  handle: () => {
    routie({
      "": () => {
        Dialogue.start()
        updatePageUI("/")
      },
      // question1: () => {
      //   Dialogue.question2()
      //   updatePageUI("/")
      // },
      // question2: () => {
      //   Dialogue.question3()
      //   updatePageUI("/")
      // },
      // question3: () => {
      //   Dialogue.question4()
      //   updatePageUI("/")
      // },
      // question4: () => {
      //   Dialogue.question5()
      //   updatePageUI("/")
      // },
      overview: () => {
        Data.get("overview")
        updatePageUI("overview")
      },
      books: () => {
        Data.get("books")
        updatePageUI("books")
      },
      "/:id": id => {
        Data.get(id)
        updatePageUI("detail")
      }
    })
  }
}

function updatePageUI(route) {
  const sections = document.querySelectorAll("section")
  sections.forEach(section => {
    section.classList.remove("active")
  })
  const activeSection = document.querySelector(`[data-route="${route}"]`)
  activeSection.classList.add("active")
}


export {
  Routes
}