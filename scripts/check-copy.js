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

// Report passage banks (Phase 4)
import REPORT_PEMBUKAAN              from '../src/lib/bazi/report/passages/pembukaan.js'
import REPORT_CARA_KAMU_HADIR        from '../src/lib/bazi/report/passages/caraKamuHadir.js'
import REPORT_POLA_DI_PEKERJAAN      from '../src/lib/bazi/report/passages/polaDiPekerjaan.js'
import REPORT_POLA_DI_HUBUNGAN       from '../src/lib/bazi/report/passages/polaDiHubungan.js'
import REPORT_POLA_DI_TUBUH          from '../src/lib/bazi/report/passages/polaDiTubuh.js'
import REPORT_HUBUNGAN_DENGAN_REZEKI from '../src/lib/bazi/report/passages/hubunganDenganRezeki.js'
import REPORT_PENUTUP                from '../src/lib/bazi/report/passages/penutup.js'
import { PROMPTS as REPORT_PROMPTS } from '../src/lib/bazi/report/prompts.js'

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

// Report passages + prompts (Phase 4 onward)
walk(REPORT_PEMBUKAAN,              'REPORT.pembukaan')
walk(REPORT_CARA_KAMU_HADIR,        'REPORT.caraKamuHadir')
walk(REPORT_POLA_DI_PEKERJAAN,      'REPORT.polaDiPekerjaan')
walk(REPORT_POLA_DI_HUBUNGAN,       'REPORT.polaDiHubungan')
walk(REPORT_POLA_DI_TUBUH,          'REPORT.polaDiTubuh')
walk(REPORT_HUBUNGAN_DENGAN_REZEKI, 'REPORT.hubunganDenganRezeki')
walk(REPORT_PENUTUP,                'REPORT.penutup')
walk(REPORT_PROMPTS,                'REPORT.PROMPTS')

if (issues.length > 0) {
  console.error(`✗ Found em-dash in ${issues.length} copy string(s):\n`)
  for (const issue of issues) {
    console.error(`  ${issue.path}`)
    console.error(`    "${issue.value}"\n`)
  }
  console.error(`Replace with a regular dash (-), comma, or period. Em-dash is the #1 AI-text tell.`)
  process.exit(1)
}

console.log(`✓ No em-dashes in copy banks. Checked: DAY_MASTERS, DAY_BRANCHES, DOMINANT_ELEMENT, MISSING_ELEMENT, PAID_HOOK_TEMPLATE, 7 REPORT passage banks, REPORT.PROMPTS.`)
