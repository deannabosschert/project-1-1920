const Render = {
  overview: (data) => {
    console.log("rendering overview data")
    const view = document.getElementById("overview")
    const dataList = data.map(data => ({
      title: data.titles[0],
      summary: data.summaries,
      coverImage: data.coverimages[0],
      detailLink: data.detailLink,
      authors: data.authors,
      id: data.id,
      publisher: data.publisher,
      genres: data.genres,
      languages: data.languages,
      note: data.note
    }))

    const directives = {
      coverImage: {
        src: function() {
          return this.coverImage
        },
        href: function() {
          return this.coverImage
        }
      },
      detailLink: {
        href: function() {
          return this.detailLink
        }
      },
    }
    Transparency.render(view, dataList, directives)
  },
  books: (data) => {
    const view = document.getElementById("book")
    // const view = document.getElementById(`"${route}"`)
    const dataList = data.map(data => ({
      title: data.titles[0],
      coverImage: data.coverimages[0],
      detailLink: data.detailLink,
    }))

    const directives = {
      coverImage: {
        src: function() {
          return this.coverImage
        },
        href: function() {
          return this.coverImage
        }
      },
      detailLink: {
        href: function() {
          return this.detailLink
        }
      },
    }
    Transparency.render(view, dataList, directives)
  },
  detail: (data) => {
    const view = document.getElementById("detail")
    // const view = document.getElementById(`"${route}"`)
    const dataList = data.map(data => ({
      title: data.titles[0],
      coverImage: data.coverimages[0],
      detailLink: data.detailLink,
    }))

    const directives = {
      coverImage: {
        src: function() {
          return this.coverImage
        },
        href: function() {
          return this.coverImage
        }
      },
      detailLink: {
        href: function() {
          return this.detailLink
        }
      },
    }
    Transparency.render(view, dataList, directives)
  }
}

export {
  Render
}