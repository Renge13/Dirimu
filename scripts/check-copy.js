#!/usr/bin/env node
// ============================================================
// scripts/check-copy.js — em-dash guard for Indonesian copy
// ============================================================
// The em-dash (—, U+2014) is the user-flagged #1 AI tell in
// Indonesian copy. This script imports every copy bank and walks
// all string values, failing the build if any em-dash is found.
//
// Only checks STRING VALUES inside the exported objects — not
// file source — so English code comments using em-dashes don't
// trigger false positives.
//
// Usage: npm run check:copy
// ============================================================

import { DAY_MASTERS }                            from '../src/lib/bazi/interpretation/dayMasters.js'
import { DAY_BRANCHES }                           from '../src/lib/bazi/interpretation/dayBranches.js'
import { DOMINANT_ELEMENT, MISSING_ELEMENT }      from '../src/lib/bazi/interpretation/elementImpact.js'
import { PAID_HOOK_TEMPLATE }                     from '../src/lib/bazi/interpretation/paidHooks.js'
import { CARD_DATA }                              from '../src/lib/bazi/sharecard/cardData.js'

const EM_DASH = '—'
const issues = []

function walk(node, path) {
  if (typeof node === 'string') {
    if (node.includes(EM_DASH)) {
      issues.push({ path, value: node })
    }
    return
  }
  if (Array.isArray(node)) {
    node.forEach((item, i) => walk(item, `${path}[${i}]`))
    return
  }
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      walk(v, `${path}.${k}`)
    }
  }
}

walk(DAY_MASTERS,         'DAY_MASTERS')
walk(DAY_BRANCHES,        'DAY_BRANCHES')
walk(DOMINANT_ELEMENT,    'DOMINANT_ELEMENT')
walk(MISSING_ELEMENT,     'MISSING_ELEMENT')
walk(PAID_HOOK_TEMPLATE,  'PAID_HOOK_TEMPLATE')
walk(CARD_DATA,           'CARD_DATA')

if (issues.length > 0) {
  console.error(`✗ Found em-dash in ${issues.length} copy string(s):\n`)
  for (const issue of issues) {
    console.error(`  ${issue.path}`)
    console.error(`    "${issue.value}"\n`)
  }
  console.error(`Replace with a regular dash (-), comma, or period. Em-dash is the #1 AI-text tell.`)
  process.exit(1)
}

console.log(`✓ No em-dashes in copy banks. Checked: DAY_MASTERS, DAY_BRANCHES, DOMINANT_ELEMENT, MISSING_ELEMENT, PAID_HOOK_TEMPLATE, CARD_DATA.`)
