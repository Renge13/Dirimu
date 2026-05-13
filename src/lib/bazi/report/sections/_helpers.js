// ============================================================
// Section composer helpers
// ============================================================
// Each section's composer reads its passage bank, applies a list
// of feature rules to pick conditional inserts, and emits a
// uniform { sectionKey, title, paragraphs, reflectionPrompt }
// object that Report.jsx can render.
//
// Empty `core` → section returns null and is skipped by the main
// composer. This lets us ship Phase 4a with no content and still
// have a healthy build.
// ============================================================

/**
 * Build a section object from a passage entry, applying conditional
 * inserts via rules.
 *
 * @param {object}   args
 * @param {string}   args.title         Display title (e.g. "Cara Kamu Hadir").
 * @param {string}   args.sectionKey    Stable key used in URLs / analytics.
 * @param {object}   args.passage       { core, inserts } from the bank.
 * @param {object}   args.chart         Full chart object.
 * @param {Function[]} args.rules       Each rule: (chart) → insertKey|null.
 * @param {string}   args.prompt        Reflection prompt string (may be '').
 * @returns {object|null}
 */
/** Splits a multi-paragraph string on blank-line boundaries. */
function splitParagraphs(text) {
  if (!text || !text.trim()) return []
  return text
    .split(/\n\s*\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
}

export function sectionFromPassage({ title, sectionKey, passage, chart, rules, prompt }) {
  if (!passage || !passage.core || !passage.core.trim()) return null

  // core may contain blank-line paragraph breaks. Split so each
  // paragraph renders as its own <p> in Report.jsx.
  const parts = splitParagraphs(passage.core)

  for (const rule of rules || []) {
    const insertKey = rule(chart)
    if (insertKey && passage.inserts?.[insertKey]) {
      // Inserts may also be multi-paragraph.
      parts.push(...splitParagraphs(passage.inserts[insertKey]))
    }
  }

  return {
    sectionKey,
    title,
    paragraphs: parts,
    reflectionPrompt: prompt && prompt.trim() ? prompt : null,
  }
}
