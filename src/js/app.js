import {
  routes
} from "./modules/routes.js"

async function init() {
  routes.handle()
}

init()