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
      note: data.note,
      linkToProfile: "Link to profile:" + data.id
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
      linkToProfile: {
        href: function() {
          return "#/" + this.id
        }
      }
    }
    Transparency.render(view, dataList, directives)
  },
  books: (data) => {
    const view = document.getElementById("book")
    // const view = document.getElementById(`"${route}"`)
    const dataList = data.map(data => ({
      title: data.titles[0],
      coverImage: data.coverimages[0],
      id: data.id,
      detailLink: data.detailLink,
      linkToProfile: "Link to profile:" + data.id
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
      linkToProfile: {
        href: function() {
          return "#/" + this.id
        }
      }
    }
    Transparency.render(view, dataList, directives)
  },
  detail: (data) => {
    console.log('detailrendering gaande')
    const view = document.getElementById("detailPage")
    // const view = document.getElementById(`"${route}"`)
    const dataList = data.map(data => ({
      title: data.titles[0],
      detailLink: data.detailLink,
      authors: data.authors,
      id: data.id,
      publisher: data.publisher,
      genres: data.genres,
      languages: data.languages,
      note: data.note
    }))

    const directives = {
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