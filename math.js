
export function coords(width, i) {
  return [i%width, Math.floor(i/width)];
}

export function index(width, x, y) {
  return y * width + x;
}

export function random(min, max) {
  return min + Math.random() * (max-min);
}

export function randomInt(min, max) {
  return Math.round(random(min, max));
}

export function sample(arr) {
  return arr[randomInt(0, arr.length-1)];
}

export function clamp(min, x, max) {
  return Math.max(min, Math.min(x, max));
}

export function wrap(min, x, max) {
  return ((x-min + max-min) % (max-min)) + min;
}

export function parable(t, x, y, a, v, g) {
  const fx = x + t * v * Math.cos(a);
  const fy = y + t * v * Math.sin(a) - 0.5 * -g * t*t;
  return [fx, fy];
}


export function vec(x, y, a, l) {
  a = a * Math.PI / 180;
  return [x+Math.cos(a)*l, y+Math.sin(a)*l];
}

export function deg2rad(a) { return a * Math.PI/180 }
export function rad2deg(a) { return a * 180/Math.PI }