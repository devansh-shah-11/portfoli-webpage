#!/usr/bin/env node
// Quick sanity check for data.json. Run with: npm run validate-data
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const data = JSON.parse(fs.readFileSync(path.join(root, "data.json"), "utf8"))
let problems = 0
const warn = (msg) => { problems++; console.log(`  ! ${msg}`) }

for (const k of ["settings", "personal", "socialLinks", "stats", "projects", "experiences", "skills", "about", "education"]) {
  if (!data[k]) warn(`missing section: ${k}`)
}

const slugs = new Set()
for (const p of data.projects ?? []) {
  for (const f of ["slug", "title", "kind", "summary", "stat", "role", "tech"]) if (!p[f]) warn(`${p.slug ?? p.title}: missing ${f}`)
  if (slugs.has(p.slug)) warn(`duplicate slug: ${p.slug}`)
  slugs.add(p.slug)
  for (const l of p.links ?? []) if (!l.label || !/^https?:\/\//.test(l.url ?? "")) warn(`${p.slug}: bad link ${JSON.stringify(l)}`)
}
for (const e of data.experiences ?? []) {
  if (!e.bullets?.length) warn(`${e.company}: no bullets`)
}
const { image, aboutImage, resume } = data.personal ?? {}
for (const f of [image, aboutImage, resume]) {
  if (f && !fs.existsSync(path.join(root, "public", f))) warn(`file not found in public/: ${f}`)
}

console.log(problems ? `\n${problems} issue(s) found.` : "data.json looks good.")
console.log(`${data.projects?.length ?? 0} projects, ${data.experiences?.length ?? 0} roles`)
process.exit(problems ? 1 : 0)
