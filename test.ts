import * as hue from './index.ts'

for (const s of ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']) {
    console.log('%cHue', `color: ${hue.getLightColor(s)}; font-size: 20px;`)
}
