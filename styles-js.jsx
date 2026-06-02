// styles-js.jsx — style objects for app.jsx (shared via window)

const hs = {
  hero: { position: "relative", paddingTop: 64, paddingBottom: 40, overflow: "hidden",
    background: "radial-gradient(120% 90% at 85% -10%, var(--amber-tint) 0%, transparent 45%), radial-gradient(90% 80% at 5% 10%, var(--green-tint) 0%, transparent 40%)" },
  heroDots: { position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none",
    backgroundImage: "radial-gradient(var(--line) 1.4px, transparent 1.4px)", backgroundSize: "26px 26px", maskImage: "linear-gradient(to bottom, #000 0%, transparent 70%)" },
  heroWrap: { position: "relative", display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 56, alignItems: "center", paddingTop: 28, paddingBottom: 56 },
  heroLeft: {},
  h1: { fontSize: "clamp(46px, 7.2vw, 88px)", fontWeight: 600, margin: "18px 0 22px", letterSpacing: "-0.02em" },
  h1accent: { color: "var(--accent)", position: "relative" },
  lede: { fontSize: 20, color: "var(--ink-soft)", maxWidth: 540, lineHeight: 1.6 },
  toggleRow: { display: "flex", alignItems: "center", gap: 16, margin: "30px 0 28px", flexWrap: "wrap" },
  toggleLabel: { fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--ink-soft)", fontSize: 16 },
  ctaRow: { display: "flex", gap: 14, flexWrap: "wrap" },

  heroRight: { display: "flex", justifyContent: "center" },

  statsWrap: { position: "relative", display: "flex", gap: 14, flexWrap: "wrap", borderTop: "1.5px solid var(--line)", paddingTop: 30 },
  stat: { flex: "1 1 160px" },
  statN: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 38, color: "var(--accent)", lineHeight: 1 },
  statL: { color: "var(--ink-soft)", fontSize: 15.5, marginTop: 4 },

  toggle: { position: "relative", display: "inline-flex", background: "var(--paper)", border: "1.5px solid var(--line)", borderRadius: 999, padding: 5, boxShadow: "var(--shadow-sm)" },
  toggleThumb: { position: "absolute", top: 5, left: 5, width: "calc(50% - 5px)", height: "calc(100% - 10px)", background: "var(--accent)", borderRadius: 999, transition: "transform .32s cubic-bezier(.3,.8,.3,1)", boxShadow: "0 6px 14px -6px color-mix(in oklab, var(--accent) 80%, black)" },
  toggleBtn: { position: "relative", zIndex: 1, border: "none", background: "none", cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15.5, padding: "9px 20px", borderRadius: 999, transition: "color .25s" },

  paper: { position: "relative", width: "min(360px, 78vw)", aspectRatio: "0.84", background: "var(--paper)", borderRadius: "var(--r-lg)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--line)", transform: "rotate(2.4deg)", padding: 26 },
  paperTab: { position: "absolute", top: -18, left: 24, background: "var(--amber-tint)", border: "1.5px solid var(--line)", borderRadius: 999, padding: "6px 18px", transform: "rotate(-3deg)", boxShadow: "var(--shadow-sm)" },
  paperBody: { marginTop: 18, paddingTop: 6 },
  scribble: { height: 11, borderRadius: 6, background: "var(--line)", margin: "26px 0", opacity: 0.9 },
  grade: { position: "absolute", right: 18, bottom: 14, transform: "rotate(-9deg)" },
  bandBadge: { position: "absolute", left: 26, bottom: 22, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "var(--ink-faint)", letterSpacing: "0.04em" },
};

const cs = {
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 22 },
  card: { background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "26px 26px 24px", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", transition: "transform .2s ease, box-shadow .2s ease, opacity .7s, translate .7s" },
  cardTop: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
  glyphWrap: { width: 50, height: 50, borderRadius: 15, display: "grid", placeItems: "center" },
  num: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, opacity: 0.5 },
  cardTitle: { fontSize: 24, marginBottom: 4 },
  blurb: { fontFamily: "var(--font-hand)", fontSize: 21, color: "var(--terra)", marginBottom: 14, lineHeight: 1 },
  divider: { height: 1, background: "var(--line)", margin: "2px 0 14px" },
  cardText: { color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.55, flex: 1, marginBottom: 16, animation: "fadeSwap .4s ease" },
  levelTag: { alignSelf: "flex-start", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 13, padding: "6px 13px", borderRadius: 999 },

  prereqRibbon: { display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginTop: 26, padding: "16px 22px", background: "var(--amber-tint)", border: "1.5px dashed var(--amber-deep)", borderRadius: "var(--r-md)" },
  prereqRibbonIcon: { flex: "0 0 auto", width: 34, height: 34, borderRadius: 999, background: "var(--amber)", display: "grid", placeItems: "center", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 },
  prereqRibbonText: { flex: 1, minWidth: 240, fontSize: 16, color: "var(--ink)", lineHeight: 1.45 },
  prereqLink: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--green-deep)", textDecoration: "none", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: 6, borderBottom: "2px solid var(--green)" },
  priceTag: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, padding: "6px 13px", borderRadius: 999, background: "var(--green-tint)", color: "var(--green-deep)", border: "1.5px solid var(--green)" },
};

const ps = {
  track: { display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 18, alignItems: "stretch" },
  arrow: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", padding: "0 6px" },
  arrowLine: { width: 2, flex: 1, background: "repeating-linear-gradient(to bottom, var(--accent) 0 8px, transparent 8px 16px)", minHeight: 60 },
  arrowNote: { position: "absolute", fontSize: 26, color: "var(--terra)", whiteSpace: "nowrap", transform: "rotate(-6deg)", background: "var(--paper-2)", padding: "0 6px" },
  card: { background: "var(--paper)", border: "1.5px solid var(--line)", borderRadius: "var(--r-lg)", padding: "32px 30px", boxShadow: "var(--shadow-sm)", transition: "border-color .3s, box-shadow .3s, transform .3s, opacity .7s, translate .7s" },
  cardActive: { borderColor: "var(--accent)", boxShadow: "var(--shadow-md)", transform: "translateY(-4px)" },
  cardHead: { display: "flex", alignItems: "center", gap: 12, marginBottom: 14, flexWrap: "wrap" },
  bandPill: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, padding: "7px 16px", borderRadius: 999, background: "var(--paper-2)", border: "1.5px solid var(--line)", color: "var(--ink-soft)" },
  bandPillActive: { background: "var(--accent)", color: "#fff", borderColor: "var(--accent)" },
  youHere: { fontFamily: "var(--font-hand)", fontSize: 19, color: "var(--terra)" },
  cardTitle: { fontSize: 27, marginBottom: 18 },
  list: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 13 },
  li: { display: "flex", alignItems: "flex-start", gap: 12, fontSize: 17, color: "var(--ink)" },
  check: { flex: "0 0 auto", width: 24, height: 24, borderRadius: 999, background: "var(--accent)", display: "grid", placeItems: "center", marginTop: 1 },
};

const ls = {
  banner: { position: "relative", background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--r-xl)", padding: "44px 44px 40px", boxShadow: "var(--shadow-md)", overflow: "hidden" },
  bannerGlow: { position: "absolute", top: -120, right: -120, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, var(--amber-tint) 0%, transparent 70%)", pointerEvents: "none" },
  bannerInner: { position: "relative" },
  bannerLeft: { maxWidth: 760 },
  startChip: { background: "var(--amber-tint)", borderColor: "transparent", color: "var(--amber-deep)", fontWeight: 600, marginBottom: 18, marginRight: 10 },
  freeChip: { background: "var(--green-tint)", border: "2px solid var(--green)", color: "var(--green-deep)", fontWeight: 700, fontSize: 15, letterSpacing: "0.06em", marginBottom: 18, padding: "6px 16px", borderRadius: 999 },
  h2: { fontSize: "clamp(32px, 4.4vw, 46px)", marginBottom: 16 },
  intro: { fontSize: 18.5, color: "var(--ink-soft)", lineHeight: 1.6 },

  prereqLine: { fontFamily: "var(--font-hand)", fontSize: "clamp(26px, 3.4vw, 36px)", color: "var(--terra)", lineHeight: 1.15, margin: "22px 0 18px", maxWidth: 620 },
  prereqBox: { position: "relative", background: "var(--green-tint)", borderLeft: "5px solid var(--green)", borderRadius: "0 var(--r-md) var(--r-md) 0", padding: "20px 24px", fontSize: 17, color: "var(--ink)", lineHeight: 1.6, maxWidth: 760 },

  /* foundation → unlocks bridge */
  bridge: { marginTop: 44, padding: "32px 30px", background: "var(--cream)", border: "1.5px solid var(--line)", borderRadius: "var(--r-lg)", display: "grid", gridTemplateColumns: "auto auto 1fr", gap: 28, alignItems: "center" },
  bridgeBlock: { flex: "0 0 auto", width: 150, background: "var(--paper)", border: "2px solid var(--green)", borderRadius: "var(--r-md)", padding: "16px 14px", textAlign: "center", boxShadow: "var(--shadow-sm)" },
  bridgeBlockLabel: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--green-deep)", marginTop: 8 },
  bridgeBlockBars: { display: "flex", flexDirection: "column", gap: 5 },
  bridgeArrow: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: "var(--ink-faint)" },
  bridgeArrowText: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber-deep)" },
  unlocks: { display: "flex", flexWrap: "wrap", gap: 9 },
  unlockChip: { fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14, padding: "8px 14px", borderRadius: 999, background: "var(--paper)", border: "1.5px solid var(--line)", color: "var(--ink-soft)" },
  metaRow: { display: "flex", gap: 36, flexWrap: "wrap", marginTop: 26 },
  meta: {},
  metaK: { fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-faint)" },
  metaV: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, color: "var(--accent)", marginTop: 2 },

  weeks: { position: "relative", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 40 },
  week: { position: "relative", background: "var(--cream)", border: "1px solid var(--line)", borderRadius: "var(--r-md)", padding: "22px 20px 24px", transition: "opacity .7s, translate .7s" },
  weekRail: { position: "absolute", top: 0, left: 0, width: "100%", height: 6, borderRadius: "var(--r-md) var(--r-md) 0 0" },
  weekHead: { display: "flex", alignItems: "center", gap: 10, marginTop: 8, marginBottom: 12, flexWrap: "wrap" },
  weekNum: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, padding: "5px 11px", borderRadius: 999 },
  phase: { fontFamily: "var(--font-hand)", fontSize: 24, lineHeight: 1 },
  weekTitle: { fontSize: 20, marginBottom: 8 },
  weekDesc: { fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.5 },
  connector: { position: "absolute", right: -13, top: "50%", transform: "translateY(-50%)", fontSize: 22, color: "var(--ink-faint)", fontWeight: 700, zIndex: 2 },

  outcomeBlock: { marginTop: 56 },
  outcomeHead: { textAlign: "center", marginBottom: 30 },
  outcomeTitle: { fontSize: "clamp(28px, 4vw, 40px)", marginTop: 12 },
  outcomeGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 },
  outcome: { display: "flex", alignItems: "center", gap: 16, background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--r-sm)", padding: "18px 22px", boxShadow: "var(--shadow-sm)", transition: "opacity .7s, translate .7s, transform .2s" },
  oNum: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "var(--accent)", opacity: 0.6, flex: "0 0 auto" },
  oText: { fontSize: 16.5, fontWeight: 600, lineHeight: 1.35 },
};

const fs = {
  cta: { position: "relative", overflow: "hidden", background: "linear-gradient(135deg, var(--green-deep), var(--green))", borderRadius: "var(--r-xl)", padding: "72px 40px 78px", textAlign: "center", color: "#fff", boxShadow: "var(--shadow-lg)" },
  ctaDots: { position: "absolute", inset: 0, opacity: 0.18, pointerEvents: "none", backgroundImage: "radial-gradient(rgba(255,255,255,.7) 1.4px, transparent 1.4px)", backgroundSize: "28px 28px" },
  ctaHand: { position: "relative", fontSize: 30, color: "var(--amber)" },
  ctaTitle: { position: "relative", fontSize: "clamp(34px, 5vw, 58px)", color: "#fff", margin: "10px 0 18px" },
  ctaSub: { position: "relative", fontSize: 19, color: "rgba(255,255,255,.82)", maxWidth: 560, margin: "0 auto 32px" },
  ctaBtns: { position: "relative", display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" },

  footer: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginTop: 40, paddingTop: 26, borderTop: "1.5px solid var(--line)" },
  footMark: { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, color: "var(--ink)" },
  footNote: { color: "var(--ink-faint)", fontSize: 15 },
};

const ms = {
  backdrop: { position: "fixed", inset: 0, background: "rgba(18,30,20,.55)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(3px)" },
  modal: { position: "relative", background: "var(--paper)", borderRadius: "var(--r-xl)", boxShadow: "var(--shadow-lg)", width: "100%", maxWidth: 520, padding: "44px 40px 40px", maxHeight: "90vh", overflowY: "auto", boxSizing: "border-box" },
  close: { position: "absolute", top: 16, right: 18, background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "var(--ink-faint)", lineHeight: 1, padding: 4, display: "flex", alignItems: "center", justifyContent: "center" },
  head: { marginBottom: 28 },
  headHand: { fontSize: 24, color: "var(--terra)" },
  title: { fontSize: "clamp(26px, 4vw, 34px)", margin: "6px 0 10px" },
  sub: { fontSize: 16.5, color: "var(--ink-soft)", lineHeight: 1.5, margin: 0 },
  form: { display: "flex", flexDirection: "column", gap: 18 },
  label: { display: "flex", flexDirection: "column", gap: 7, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--ink)" },
  input: { fontFamily: "var(--font-body, inherit)", fontSize: 16, color: "var(--ink)", background: "var(--paper-2)", border: "1.5px solid var(--line)", borderRadius: "var(--r-sm)", padding: "11px 14px", outline: "none", width: "100%", boxSizing: "border-box", transition: "border-color .2s" },
  select: { appearance: "none", cursor: "pointer", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.8' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" },
  row: { display: "flex", gap: 14 },
  submit: { marginTop: 6, width: "100%", justifyContent: "center", fontSize: 17 },
  thanks: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "24px 0 8px" },
  thanksIcon: { fontSize: 52, marginBottom: 16 },
  thanksTitle: { fontSize: 32, margin: "0 0 10px" },
  thanksSub: { fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.55, margin: "0 0 32px" },
  thanksBtn: { minWidth: 160 },
};

Object.assign(window, { hs, cs, ps, ls, fs, ms });
