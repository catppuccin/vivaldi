// @ts-ignore-next-line: import-a-as-b check doesn't work
import { variants as flavors } from 'npm:@catppuccin/palette'
import base from './base_settings.json' assert { type: 'json' }
import uuidMap from './uuid_map.json' assert { type: 'json' }

const FILENAME_BASE = 'Catppuccin'

const OUT_DIR = './dist'
const WORK_DIR = `${OUT_DIR}/work`

const AMOLED_FLAVOR = {
  base: { hex: '#000000' },
}

function capitalizeFirstLetter(s: string) {
  return s[0].toUpperCase() + s.slice(1)
}

Deno.mkdir(OUT_DIR, { recursive: true })
Deno.mkdir(WORK_DIR, { recursive: true })

// Default variant build
for (const [flavor, labels] of Object.entries(uuidMap.default)) {
  const flavorName = capitalizeFirstLetter(flavor)

  // @ts-ignore-next-line: Deno import-from-npm feature with types doesn't work
  const colors = flavors[flavor]

  for (const [label, uuid] of Object.entries(labels)) {
    const color = label
    const colorName = capitalizeFirstLetter(color)

    const colorAccentBg = colors[label].hex.toUpperCase()
    const colorBg = colors.base.hex.toUpperCase()
    const colorFg = colors.text.hex.toUpperCase()
    const colorHighlightBg = colors[label].hex.toUpperCase()
    const colorWindowBg = colors.mantle.hex.toUpperCase()

    const id = uuid
    const name = `${FILENAME_BASE} ${flavorName} ${colorName}`

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

    const encoder = new TextEncoder()
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

// Flat variant build
for (const [flavor, labels] of Object.entries(uuidMap.flat)) {
  const flavorName = capitalizeFirstLetter(flavor)

  // @ts-ignore-next-line: Deno import-from-npm feature with types doesn't work
  const colors = flavors[flavor]

  for (const [label, uuid] of Object.entries(labels)) {
    const color = label
    const colorName = capitalizeFirstLetter(color)

    const colorAccentBg = colors[label].hex.toUpperCase()
    const colorBg = colors.base.hex.toUpperCase()
    const colorFg = colors.text.hex.toUpperCase()
    const colorHighlightBg = colors[label].hex.toUpperCase()
    const colorWindowBg = colors.base.hex.toUpperCase()

    const id = uuid
    const name = `${FILENAME_BASE} ${flavorName} ${colorName} Flat`

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

    const encoder = new TextEncoder()
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

// OLEDppuccin variant build
for (const [flavor, labels] of Object.entries(uuidMap.amoled)) {
  const flavorName = capitalizeFirstLetter(flavor)

  // @ts-ignore-next-line: Deno import-from-npm feature with types doesn't work
  const colors = { ...flavors[flavor], ...AMOLED_FLAVOR }

  for (const [label, uuid] of Object.entries(labels)) {
    const color = label
    const colorName = capitalizeFirstLetter(color)

    const colorAccentBg = colors[label].hex.toUpperCase()
    const colorBg = colors.base.hex.toUpperCase()
    const colorFg = colors.text.hex.toUpperCase()
    const colorHighlightBg = colors[label].hex.toUpperCase()
    const colorWindowBg = colors.mantle.hex.toUpperCase()

    const id = uuid
    const name = `${FILENAME_BASE} ${flavorName} ${colorName} Amoled`

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

    const encoder = new TextEncoder()
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

// OLEDppuccin flat variant build
for (const [flavor, labels] of Object.entries(uuidMap.amoledFlat)) {
  const flavorName = capitalizeFirstLetter(flavor)

  // @ts-ignore-next-line: Deno import-from-npm feature with types doesn't work
  const colors = { ...flavors[flavor], ...AMOLED_FLAVOR }

  for (const [label, uuid] of Object.entries(labels)) {
    const color = label
    const colorName = capitalizeFirstLetter(color)

    const colorAccentBg = colors[label].hex.toUpperCase()
    const colorBg = colors.base.hex.toUpperCase()
    const colorFg = colors.text.hex.toUpperCase()
    const colorHighlightBg = colors[label].hex.toUpperCase()
    const colorWindowBg = colors.base.hex.toUpperCase()

    const id = uuid
    const name = `${FILENAME_BASE} ${flavorName} ${colorName} Amoled Flat`

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

    const encoder = new TextEncoder()
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
