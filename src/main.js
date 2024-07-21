import App from './App.svelte'
import './index.css'
import * as mockApi from "./mock/mockApi";


if (process.env.NODE_ENV === "development") {
  globalThis.google ={script:{run: {mockApi}}};
}

const app = new App({
  target: document.body,
})

export default app
