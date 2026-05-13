
import DOMParser from jsdom
const response = await fetch(' https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub')
const html = await response.text()

const parser = new DOMParser();
const doc = parser.parseFromString(html, "text/html");

console.log(doc)