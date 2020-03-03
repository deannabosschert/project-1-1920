import {
  Data
} from "./data.js"


const Routes = {
  handle: function() {
    routie({
      '': () => {
        Data.get('overview')
        updatePageUI('/')
      },
      books: () => {
        Data.get('books')
        updatePageUI('books')
      },
      '/:id': () => {
        Data.get('detail')
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
  Routes
}