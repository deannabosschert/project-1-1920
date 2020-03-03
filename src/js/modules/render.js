const Render = {
  overview: function(books) {
    console.log("rendering overview data")
    console.log(books)
    const view = document.getElementById("overview")
    const bookList = books.map(book => ({
      title: book.titles[0],
      summary: book.summaries,
      coverImage: book.coverimages[0],
      detailLink: book.detailLink,
      authors: book.authors,
      id: book.id,
      publisher: book.publisher,
      genres: book.genres,
      languages: book.languages,
      note: book.note
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
    Transparency.render(view, bookList, directives)
  },
  books: function(books) {
    const view = document.getElementById("overview")
    // const view = document.getElementById(`"${route}"`)
    const bookList = books.map(book => ({
      title: book.titles[0],
      summary: book.summaries,
      coverImage: book.coverimages[0],
      detailLink: book.detailLink,
      authors: book.authors,
      id: book.id,
      publisher: book.publisher,
      genres: book.genres,
      languages: book.languages,
      note: book.note
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
    Transparency.render(view, bookList, directives)
  }
}


export {
  Render
}