export const frontSvgs = require.context('./skills/front', true, /\.svg$/);
export const b = 0;
const cache = {};

function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach((key) => console.log(key));
}

importAll(require.context('../components/', true, /\.js$/));