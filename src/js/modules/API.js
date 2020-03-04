import {
  Data
} from "./data.js"
// public="76f45dfa187d66be5fd6af05573eab04" secret="2cb15758acac08d6ebe6f5ac7a293d69" description="OBA_api_5"

const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?';
const key = '76f45dfa187d66be5fd6af05573eab04';
const secretKey = '2cb15758acac08d6ebe6f5ac7a293d69';
const detail = 'Default';

const config = {
  Authorization: `Bearer ${secretKey}`
};

const API = {
  get: (route) => {
    console.log(route)

    function query(route) {
      if (route === 'overview') {
        const query = 'q=tolkien'
        return query
      } else if (route === 'books') {
        const query = 'q=tolkien'
        return query
      } else {
        const query = `id=${route}`
        return query
      }
    }

    const queryThing = query(route)
    console.log(queryThing)
    const url = `${cors}${endpoint}${queryThing}&authorization=${key}&detaillevel=${detail}&output=json`;
    fetch(url, config)
      .then(res => {
        return res.json()
      })
      .then(json => {
        const data = json.results
        console.log(data)
        console.log(`${route} from API loaded, now storing`)
        Data.store(`${route}`, data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export {
  API
}