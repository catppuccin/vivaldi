import { variants } from 'npm:@catppuccin/palette'
import base from './base_settings.json' assert { type: 'json' }
import uuidMap from './uuid_map.json' assert { type: 'json' }

const FILENAME_BASE = 'Catppuccin'

const OUT_DIR = './dist'
const WORK_DIR = `${OUT_DIR}/work`

function capitalizeFirstLetter(s: string) {
  return s[0].toUpperCase() + s.slice(1)
}

Deno.mkdir(OUT_DIR, { recursive: true })
Deno.mkdir(WORK_DIR, { recursive: true })

for (const [variant, labels] of Object.entries(uuidMap)) {
  const variantName = capitalizeFirstLetter(variant)

  // @ts-ignore-next-line: Deno import-from-npm feature with types doesn't work
  const colors = variants[variant]

  for (const color of Object.keys(labels)) {
    const colorName = capitalizeFirstLetter(color)

    const colorAccentBg = colors.mantle.hex.toUpperCase()
    const colorBg = colors.base.hex.toUpperCase()
    const colorFg = colors.text.hex.toUpperCase()
    const colorHighlightBg = colors[color].hex.toUpperCase()
    const colorWindowBg = colors.crust.hex.toUpperCase()

    const id = Object(uuidMap)[variant][color]
    const name = `${FILENAME_BASE} ${variantName} ${colorName}`

    const out = {
      ...base,
      colorAccentBg,
      colorBg,
      colorFg,
      colorHighlightBg,
      colorWindowBg,
      id,
      name,
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(`${JSON.stringify(out, null, 3)}\n`)

    const workdir = `${WORK_DIR}/${name}`
    await Deno.mkdir(workdir, { recursive: true })

    const workfile = `${workdir}/settings.json`
    await Deno.writeFile(workfile, data)

    const outfile = `../../${name}.zip`
    await Deno.run({ cmd: ['zip', outfile, 'settings.json'], cwd: workdir })

    console.log(`Saved to ${outfile}`)
  }
}
