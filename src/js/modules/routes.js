import {
  data
} from "./data.js"


const routes = {
  handle: function() {
    routie({
      '': () => {
        data.get('overview')
        updatePageUI('/')
      },
      books: () => {
        data.get('books')
        updatePageUI('books')
      },
      '/:id': () => {
        data.get('detail')
        updatePageUI('detail')
      }

    })
  }
}

function updatePageUI(route) {
  const sections = document.querySelectorAll('section')
  sections.forEach(section => {
    section.classList.remove('active')
  })
  const activeSection = document.querySelector(`[data-route="${route}"]`)
  activeSection.classList.add('active')
}


export {
  routes
}