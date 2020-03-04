import {
  Data
} from "./data.js"


const Routes = {
  handle: () => {
    routie({
      '': () => {
        Data.get('overview')
        updatePageUI('/')
      },
      books: () => {
        Data.get('books')
        updatePageUI('books')
      },
      '/:id': id => {
        // const currentId = JSON.stringify(id)
        console.log(id)
        const currentId = id
        console.log(currentId)
        // const currentId = this.route
        // console.log(currentId)
        // const someId = this.id
        // console.log(someId)
        Data.get(currentId)
        console.log('yeet')
        updatePageUI('detail')
      },

      // '/:id': id => {
      //   const loadData = loadNerds.overview()
      //   Data.get('detail').then(data => {
      //     let detail = data.filter(function(data) {
      //       return data.id == id
      //     })
      //     renderNerds.detail(oneNerd)
      //   })
      //   updatePageUI('profile')
      // }

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