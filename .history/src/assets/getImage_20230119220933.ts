export const cache: { [key: string]: any } = {};

function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach((key) => (cache[key] = r(key).default));
}

importAll(require.context('!@svgr/webpack!./skills/front', true, /\.svg$/));

export const frontSvgs = require.context('./skills/front', true, /\.svg$/);
export const b = 0;
console.log(cache);
