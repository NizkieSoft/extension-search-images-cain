const tosource = require('tosource');

const stdNames = ['Error', 'Object'];
export default function stringify(o) {
  if (!o || o === !!o || o === +o) return String(o);
  if (o.constructor === String) return o;
  if (o.hasOwnProperty('toString') || typeof o === 'symbol') return o.toString();
  if (o.hasOwnProperty('toJSON')) return JSON.stringify(o, null, '  ');
  delete o.stack;
  const info = o.message ? stringify(o.message) : tosource(o);
  const name = o.name || o.constructor.name;
  return name && stdNames.indexOf(name) === -1 ? `${name }: ${ info}` : info;
}
