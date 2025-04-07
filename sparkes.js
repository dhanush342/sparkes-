import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

const pc = particlesCursor({
  el: document.getElementById('app'),
  gpgpuSize: 512,
  color: 0xffffff,
  colors: [0x00fffc, 0xfffc00],
  coordScale: 8.5,
  pointSize: 2,
  noiseIntensity: 0.005,
  noiseTimeCoef: 8.0001,
  pointDecay: 0.0025,
  sleepRadiusX: 250,
  sleepRadiusY: 250,
  sleepTimeCoefX: 0.001,
  sleepTimeCoefY: 0.002
});
