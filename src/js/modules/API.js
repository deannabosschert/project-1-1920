import {
  data
} from "./data.js"
// public="76f45dfa187d66be5fd6af05573eab04" secret="2cb15758acac08d6ebe6f5ac7a293d69" description="OBA_api_5"

const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'tolkien';
const key = '1e19898c87464e239192c8bfe422f280';
const secretKey = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer ${secretKey}`
};

const apiData = {
  overview: () => {
    fetch(url, config)
      .then(res => {
        return res.json()
      })
      .then(overviewData => {
        data.store('overview', overviewData)
      })
      .catch(err => {
        console.log(err)
      })
  },
  detail: () => {
    fetch(url, config)
      .then(res => {
        return res.json()
      })
      .then(overviewData => {
        data.store('overview', overviewData)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export {
  apiData
}