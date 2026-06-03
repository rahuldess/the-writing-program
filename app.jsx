// app.jsx — The Complete Writer Program microsite
const { useState, useEffect, useRef } = React;
const { hs, cs, ps, ls, fs, ms, prs } = window;

/* ---------- family color helpers ---------- */
const FAM = {
  green: { c: "var(--green)", d: "var(--green-deep)", tint: "var(--green-tint)" },
  amber: { c: "var(--amber)", d: "var(--amber-deep)", tint: "var(--amber-tint)" },
  terra: { c: "var(--terra)", d: "var(--terra-deep)", tint: "var(--terra-tint)" },
};

/* ---------- simple monoline glyphs (basic shapes only) ---------- */
function Glyph({ name, color }) {
  const s = { width: 26, height: 26, fill: "none", stroke: color, strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    lines: <g><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="14" y2="17"/></g>,
    heart: <path d="M12 20s-7-4.6-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7 2.7C19 15.4 12 20 12 20Z"/>,
    star: <path d="M12 4l2.3 4.9 5.2.6-3.9 3.6 1.1 5.2L12 16.2 7.2 18.9l1.1-5.2L4.4 10l5.2-.6L12 4Z"/>,
    envelope: <g><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M4.5 7.5 12 13l7.5-5.5"/></g>,
    book: <g><path d="M12 6.5C10.5 5.3 8.3 5 5.5 5.2V18c2.8-.2 5 .1 6.5 1.3 1.5-1.2 3.7-1.5 6.5-1.3V5.2C15.7 5 13.5 5.3 12 6.5Z"/><line x1="12" y1="6.5" x2="12" y2="19.3"/></g>,
    spark: <g><path d="M12 4v4M12 16v4M4 12h4M16 12h4"/><path d="M7 7l2.2 2.2M14.8 14.8 17 17M17 7l-2.2 2.2M9.2 14.8 7 17"/></g>,
    quote: <g><path d="M9 7c-2.2.7-3.5 2.4-3.5 4.8V17h4.5v-5H7.2c0-1.5.7-2.6 1.8-3.2L9 7Z"/><path d="M18 7c-2.2.7-3.5 2.4-3.5 4.8V17H19v-5h-2.8c0-1.5.7-2.6 1.8-3.2L18 7Z"/></g>,
  };
  return <svg viewBox="0 0 24 24" style={s}>{paths[name]}</svg>;
}

/* ---------- scroll reveal hook ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ===================================================================== */
/* ANNOUNCEMENT BANNER                                                   */
/* ===================================================================== */
function AnnouncementBanner() {
  return (
    <div style={{
      background: "linear-gradient(90deg, var(--green-deep) 0%, var(--green) 100%)",
      color: "#fff",
      textAlign: "center",
      padding: "16px 24px",
      fontFamily: "var(--font-display)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      flexWrap: "wrap",
      boxShadow: "0 3px 16px -4px rgba(31,111,84,.45)",
    }}>
      <span style={{
        background: "rgba(255,255,255,.18)",
        border: "1.5px solid rgba(255,255,255,.35)",
        borderRadius: 999,
        padding: "4px 14px",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}>New Batch</span>
      <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>
        Starting <span style={{
          background: "var(--amber)",
          color: "var(--ink)",
          borderRadius: 6,
          padding: "2px 10px",
          marginLeft: 4,
          fontSize: 19,
        }}>June 4th</span>
      </span>
      <span style={{ opacity: 0.75, fontSize: 15, fontWeight: 500 }}>·  Spots are limited</span>
      <a href="#enroll" style={{
        background: "#fff",
        color: "var(--green-deep)",
        fontWeight: 700,
        fontSize: 14,
        padding: "8px 20px",
        borderRadius: 999,
        textDecoration: "none",
        letterSpacing: "0.02em",
        boxShadow: "0 2px 8px -2px rgba(0,0,0,.18)",
        whiteSpace: "nowrap",
      }}>
        Reserve your spot →
      </a>
    </div>
  );
}

/* ===================================================================== */
/* HERO                                                                  */
/* ===================================================================== */
function Hero({ band, setBand }) {
  return (
    <header style={hs.hero}>
      <div style={hs.heroDots} aria-hidden="true" />
      <div className="wrap hero-grid" style={hs.heroWrap}>
        <div style={hs.heroLeft}>
          <span className="kicker">A Writing Program · Grades 3–6</span>
          <h1 style={hs.h1}>
            The Complete<br/>
            <span style={hs.h1accent}>Writer</span> Program
          </h1>
          <p style={hs.lede}>
            Every child has stories to tell. We give them the tools, the structure, and the
            confidence to tell them well — from a first tidy paragraph to vivid, crafted writing.
          </p>

          <div style={hs.toggleRow}>
            <span style={hs.toggleLabel}>My child is in</span>
            <BandToggle band={band} setBand={setBand} />
          </div>

          <div style={hs.ctaRow}>
            <a href="#level1" className="btn btn-primary">Start with Level 1</a>
            <a href="#curriculum" className="btn btn-ghost">Explore the curriculum</a>
          </div>
        </div>

        <div style={hs.heroRight}>
          <PaperCard band={band} />
        </div>
      </div>

      <div className="wrap" style={hs.statsWrap}>
        {[
          ["7", "writing types mastered"],
          ["3–6", "grade levels covered"],
          ["4 wks", "1 session/week · to first piece"],
          ["1:6", "teacher to student ratio"],
        ].map(([n, l]) => (
          <div key={l} style={hs.stat}>
            <div style={hs.statN}>{n}</div>
            <div style={hs.statL}>{l}</div>
          </div>
        ))}
      </div>
    </header>
  );
}

function BandToggle({ band, setBand }) {
  return (
    <div style={hs.toggle} role="tablist" aria-label="Choose grade band">
      <div style={{ ...hs.toggleThumb, transform: band === "g56" ? "translateX(100%)" : "translateX(0)" }} />
      {[["g34", "Grades 3–4"], ["g56", "Grades 5–6"]].map(([k, lbl]) => (
        <button key={k} role="tab" aria-selected={band === k} onClick={() => setBand(k)}
          style={{ ...hs.toggleBtn, color: band === k ? "#fff" : "var(--ink-soft)" }}>
          {lbl}
        </button>
      ))}
    </div>
  );
}

/* decorative "handwritten paragraph" card */
function PaperCard({ band }) {
  return (
    <div style={hs.paper}>
      <div style={hs.paperTab}><span className="hand" style={{ fontSize: 26 }}>my best work</span></div>
      <div className="ruled" style={hs.paperBody}>
        <div style={{ ...hs.scribble, width: "68%", background: "var(--green)" }} />
        <div style={{ ...hs.scribble, width: "92%" }} />
        <div style={{ ...hs.scribble, width: "86%" }} />
        <div style={{ ...hs.scribble, width: "94%" }} />
        <div style={{ ...hs.scribble, width: "60%" }} />
        <div style={{ ...hs.scribble, width: "88%" }} />
        <div style={{ ...hs.scribble, width: "40%", background: "var(--terra)" }} />
      </div>
      <div style={hs.grade}>
        <span className="hand" style={{ fontSize: 40, color: "var(--green)" }}>A+</span>
      </div>
      <div style={hs.bandBadge}>{band === "g56" ? "Grades 5–6" : "Grades 3–4"}</div>
    </div>
  );
}

/* ===================================================================== */
/* PRICING STRIP                                                         */
/* ===================================================================== */
function PricingStrip() {
  return (
    <section style={prs.strip}>
      <div className="wrap" style={prs.inner}>
        <div style={prs.label}>
          <span style={prs.eyebrow}>Program pricing</span>
          <span style={prs.tagline}>Start free. Bundle and save.</span>
        </div>

        <div style={prs.cards}>
          {/* Level 1 — free */}
          <div style={{ ...prs.card, ...prs.cardFree }}>
            <div style={prs.cardTop}>
              <span style={prs.step}>Level 1</span>
              <span style={prs.freeBadge}>FREE</span>
            </div>
            <div style={prs.cardName}>The Paragraph Foundation</div>
            <div style={prs.cardDesc}>The required first step — 4 weeks, face-to-face. No cost to begin.</div>
          </div>

          <div style={prs.arrow} aria-hidden="true">
            <svg viewBox="0 0 32 16" width="36" height="18" fill="none" stroke="var(--ink-faint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8h26M22 2l7 6-7 6"/></svg>
          </div>

          {/* Single module — $89 */}
          <div style={{ ...prs.card, ...prs.cardPaid }}>
            <div style={prs.cardTop}>
              <span style={prs.step}>Per module</span>
              <span style={prs.priceBadge}>$89</span>
            </div>
            <div style={prs.cardName}>Any single module</div>
            <div style={prs.cardDesc}>Pick one writing type and go at your own pace.</div>
          </div>

          {/* 3-pack — $240 (save 10%) */}
          <div style={{ ...prs.card, ...prs.cardBundle }}>
            <div style={prs.cardTop}>
              <span style={prs.step}>3-Module Pack</span>
              <span style={prs.priceBadge}>$240</span>
            </div>
            <div style={prs.cardName}>Any 3 modules</div>
            <div style={prs.cardDesc}>Choose any three writing types at a locked-in price.</div>
            <span style={prs.saveBadge}>Save 10%</span>
          </div>

          {/* Full program — $454 (save 15%) */}
          <div style={{ ...prs.card, ...prs.cardBest }}>
            <div style={prs.cardTop}>
              <span style={prs.step}>Full Program</span>
              <span style={prs.priceBadge}>$454</span>
            </div>
            <div style={prs.bestLabel}>Best value</div>
            <div style={prs.cardName}>All 6 modules</div>
            <div style={prs.cardDesc}>The complete writing journey — all in, one price.</div>
            <span style={prs.saveBadgeBest}>Save 15%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================================================================== */
/* CURRICULUM                                                            */
/* ===================================================================== */
function Curriculum({ band }) {
  return (
    <section id="curriculum" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="kicker">The Curriculum</span>
          <h2>Seven kinds of writing,<br/>one growing writer.</h2>
          <p>
            You're viewing what students do in{" "}
            <strong style={{ color: "var(--accent)" }}>{band === "g56" ? "Grades 5–6" : "Grades 3–4"}</strong>.
            Flip the switch to compare.
          </p>
          <div style={cs.prereqRibbon}>
            <span style={cs.prereqRibbonIcon} aria-hidden="true">1</span>
            <span style={cs.prereqRibbonText}>
              <strong>Every form below begins with the paragraph.</strong> Level 1 builds that
              foundation first — it's the prerequisite that makes all seven genres possible.{" "}
              <strong style={{ color: "var(--green-deep)" }}>Level 1 is free. Each module after is $89 — or bundle 3 for $240, all 6 for $454.</strong>
            </span>
            <a href="#level1" style={cs.prereqLink}>Start with Level 1 →</a>
          </div>
        </div>

        <div style={cs.grid}>
          {WRITING_TYPES.map((w, i) => (
            <TypeCard key={w.id} w={w} band={band} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TypeCard({ w, band, index }) {
  const f = FAM[w.family];
  const text = band === "g56" ? w.g56 : w.g34;
  return (
    <article className="reveal" style={{ ...cs.card, transitionDelay: `${(index % 3) * 80}ms` }}>
      <div style={cs.cardTop}>
        <div style={{ ...cs.glyphWrap, background: f.tint }}>
          <Glyph name={w.glyph} color={f.d} />
        </div>
        <span style={{ ...cs.num, color: f.c }}>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 style={cs.cardTitle}>{w.title}</h3>
      <p style={cs.blurb}>{w.blurb}</p>
      <div style={cs.divider} />
      <p style={cs.cardText} key={band}>{text}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span style={{ ...cs.levelTag, background: f.tint, color: f.d }}>
          {band === "g56" ? "Grades 5–6" : "Grades 3–4"}
        </span>
        <span style={cs.priceTag}>$89</span>
      </div>
    </article>
  );
}

/* ===================================================================== */
/* PROGRESSION                                                           */
/* ===================================================================== */
function Progression({ band }) {
  return (
    <section id="progression" className="section" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="section-head reveal" style={{ margin: "0 auto 52px", textAlign: "center" }}>
          <span className="kicker" style={{ justifyContent: "center" }}>The Journey</span>
          <h2>Watch the writing grow up.</h2>
          <p style={{ margin: "0 auto" }}>Skills don't appear overnight — they layer. Here's how a young writer levels up.</p>
        </div>

        <div className="prog-track" style={ps.track}>
          <ProgCard data={PROGRESSION.g34} active={band === "g34"} side="left" />
          <div className="prog-arrow" style={ps.arrow} aria-hidden="true">
            <div style={ps.arrowLine} />
            <span className="hand" style={ps.arrowNote}>they grow!</span>
          </div>
          <ProgCard data={PROGRESSION.g56} active={band === "g56"} side="right" />
        </div>
      </div>
    </section>
  );
}

function ProgCard({ data, active, side }) {
  return (
    <div className="reveal" style={{ ...ps.card, ...(active ? ps.cardActive : null) }}>
      <div style={ps.cardHead}>
        <span style={{ ...ps.bandPill, ...(active ? ps.bandPillActive : null) }}>{data.label}</span>
        {active && <span style={ps.youHere}>you're viewing this</span>}
      </div>
      <h3 style={ps.cardTitle}>{data.tagline}</h3>
      <ul style={ps.list}>
        {data.items.map((it) => (
          <li key={it} style={ps.li}>
            <span style={ps.check}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 10 17.5 19 6.5"/></svg>
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ===================================================================== */
/* LEVEL 1 SPOTLIGHT                                                     */
/* ===================================================================== */
function FoundationBridge() {
  return (
    <div className="l1-bridge reveal" style={ls.bridge}>
      <div style={ls.bridgeBlock}>
        <div style={ls.bridgeBlockBars}>
          {["86%", "100%", "92%", "60%"].map((w, i) => (
            <div key={i} style={{ height: 7, borderRadius: 4, width: w, background: i === 0 ? "var(--green)" : "var(--line)" }} />
          ))}
        </div>
        <div style={ls.bridgeBlockLabel}>One strong<br/>paragraph</div>
      </div>
      <div style={ls.bridgeArrow}>
        <span style={ls.bridgeArrowText}>unlocks</span>
        <svg viewBox="0 0 40 16" width="44" height="18" fill="none" stroke="var(--amber-deep)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8h33M29 2l7 6-7 6"/></svg>
      </div>
      <div style={ls.unlocks}>
        {WRITING_TYPES.map((w) => (
          <span key={w.id} style={ls.unlockChip}>{w.title}</span>
        ))}
      </div>
    </div>
  );
}

function Level1() {
  return (
    <section id="level1" className="section">
      <div className="wrap">
        <div style={ls.banner}>
          <div style={ls.bannerGlow} aria-hidden="true" />
          <div style={ls.bannerInner}>
            <div style={ls.bannerLeft}>
              <span className="chip" style={ls.startChip}>★ Required first step · the foundation</span>
              <span className="chip" style={ls.freeChip}>FREE</span>
              <h2 style={ls.h2}>Level 1: The Paragraph Foundation</h2>
              <p className="hand" style={ls.prereqLine}>{LEVEL1.prereqLine}</p>
              <div style={ls.prereqBox}>{LEVEL1.prereq}</div>
              <div style={ls.metaRow}>
                {[["Duration", LEVEL1.duration], ["Format", LEVEL1.format], ["Focus", LEVEL1.focus], ["Class Size", "1 : 6"]].map(([k, v]) => (
                  <div key={k} style={ls.meta}>
                    <div style={ls.metaK}>{k}</div>
                    <div style={ls.metaV}>{v}</div>
                  </div>
                ))}
                <div style={ls.meta}>
                  <div style={ls.metaK}>Price</div>
                  <div style={{ ...ls.metaV, color: "var(--green-deep)" }}>FREE</div>
                </div>
              </div>
            </div>
          </div>

          <FoundationBridge />

          <div className="l1-weeks" style={ls.weeks}>
            {LEVEL1.weeks.map((wk, i) => {
              const f = FAM[wk.family];
              return (
                <div key={wk.n} className="reveal" style={{ ...ls.week, transitionDelay: `${i * 90}ms` }}>
                  <div style={{ ...ls.weekRail, background: f.c }} />
                  <div style={ls.weekHead}>
                    <span style={{ ...ls.weekNum, color: f.d, background: f.tint }}>Week {wk.n}</span>
                    <span style={{ ...ls.phase, color: f.d }}>{wk.phase}</span>
                  </div>
                  <h4 style={ls.weekTitle}>{wk.title}</h4>
                  <p style={ls.weekDesc}>{wk.desc}</p>
                  {i < LEVEL1.weeks.length - 1 && <div style={ls.connector} aria-hidden="true">→</div>}
                </div>
              );
            })}
          </div>
        </div>

        {/* outcomes */}
        <div style={ls.outcomeBlock}>
          <div className="reveal" style={ls.outcomeHead}>
            <span className="kicker">By the end of Level 1</span>
            <h3 style={ls.outcomeTitle}>Your child will be able to…</h3>
          </div>
          <div style={ls.outcomeGrid}>
            {LEVEL1.outcomes.map((o, i) => (
              <div key={o} className="reveal" style={{ ...ls.outcome, transitionDelay: `${(i % 3) * 70}ms` }}>
                <span style={ls.oNum}>{String(i + 1).padStart(2, "0")}</span>
                <span style={ls.oText}>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================================================================== */
/* INTEREST MODAL                                                        */
/* ===================================================================== */
function InterestModal({ onClose }) {
  const [form, setForm] = useState({
    parentName: "", email: "", phone: "",
    kidsName: "", age: "", grade: "", location: "",
  });
  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function set(k, v) {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: "" }));
  }

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  function handleBackdrop(e) { if (e.target === e.currentTarget) onClose(); }

  function validate() {
    const errs = {};
    if (!form.parentName.trim())  errs.parentName = "Please enter your name";
    if (!form.email.trim())       errs.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Please enter a valid email";
    if (!form.kidsName.trim())    errs.kidsName = "Please enter your child's name";
    if (!form.age)                errs.age = "Required";
    if (!form.grade.trim())       errs.grade = "Required";
    if (!form.location)           errs.location = "Please choose a location";
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setApiError("");

    const params = new URLSearchParams(window.location.search);
    const payload = {
      name:          form.parentName.trim(),
      email:         form.email.trim(),
      phone:         form.phone.trim() || null,
      location:      form.location,
      program:       "The Complete Writer Program",
      children:      [{ name: form.kidsName.trim(), age: Number(form.age), grade: form.grade.trim() }],
      page_url:      window.location.href,
      referrer:      document.referrer || null,
      utm_medium:    params.get("utm_medium")   || null,
      utm_campaign:  params.get("utm_campaign") || null,
      traffic_source: sessionStorage.getItem("traffic_source") || null,
    };

    const { error } = await window._sb.from("program_leads").insert(payload);

    setLoading(false);
    if (error) {
      setApiError("Something went wrong — please try again or email us directly.");
    } else {
      setSubmitted(true);
    }
  }

  const ERR       = { fontSize: 13, color: "var(--terra)", marginTop: -2 };
  const INPUT_ERR = { borderColor: "var(--terra)" };

  return (
    <div style={ms.backdrop} onClick={handleBackdrop}>
      <div style={ms.modal} role="dialog" aria-modal="true" aria-label="Stay in the loop">
        <button style={ms.close} onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>

        {submitted ? (
          <div style={ms.thanks}>
            <span style={ms.thanksIcon}>✎</span>
            <h3 style={ms.thanksTitle}>You're on the list!</h3>
            <p style={ms.thanksSub}>We'll be in touch as soon as enrolment opens at your location.</p>
            <button className="btn btn-primary" onClick={onClose} style={ms.thanksBtn}>Done</button>
          </div>
        ) : (
          <>
            <div style={ms.head}>
              <span className="hand" style={ms.headHand}>let's connect…</span>
              <h2 style={ms.title}>Keep me posted</h2>
              <p style={ms.sub}>Tell us a little about your family and we'll reach out when enrolment opens near you.</p>
            </div>

            {apiError && (
              <div style={{ padding: "12px 16px", background: "#fff5f5", border: "1.5px solid var(--terra)", borderRadius: "var(--r-sm)", fontSize: 15, color: "var(--terra)", marginBottom: 4 }}>
                {apiError}
              </div>
            )}

            <form onSubmit={handleSubmit} style={ms.form} noValidate>
              <label style={ms.label}>
                Parent name
                <input style={{ ...ms.input, ...(errors.parentName ? INPUT_ERR : {}) }}
                  value={form.parentName} onChange={e => set("parentName", e.target.value)}
                  placeholder="e.g. Sarah" />
                {errors.parentName && <span style={ERR}>{errors.parentName}</span>}
              </label>

              <label style={ms.label}>
                Email
                <input type="email" style={{ ...ms.input, ...(errors.email ? INPUT_ERR : {}) }}
                  value={form.email} onChange={e => set("email", e.target.value)}
                  placeholder="e.g. sarah@email.com" />
                {errors.email && <span style={ERR}>{errors.email}</span>}
              </label>

              <label style={ms.label}>
                Phone <span style={{ fontWeight: 400, color: "var(--ink-faint)" }}>(optional)</span>
                <input type="tel" style={ms.input}
                  value={form.phone} onChange={e => set("phone", e.target.value)}
                  placeholder="e.g. 604-555-0100" />
              </label>

              <label style={ms.label}>
                Kid(s) name
                <input style={{ ...ms.input, ...(errors.kidsName ? INPUT_ERR : {}) }}
                  value={form.kidsName} onChange={e => set("kidsName", e.target.value)}
                  placeholder="e.g. Emma, Liam" />
                {errors.kidsName && <span style={ERR}>{errors.kidsName}</span>}
              </label>

              <div style={ms.row}>
                <label style={{ ...ms.label, flex: 1 }}>
                  Child's age
                  <input type="number" min="7" max="13"
                    style={{ ...ms.input, ...(errors.age ? INPUT_ERR : {}) }}
                    value={form.age} onChange={e => set("age", e.target.value)}
                    placeholder="e.g. 9" />
                  {errors.age && <span style={ERR}>{errors.age}</span>}
                </label>
                <label style={{ ...ms.label, flex: 1 }}>
                  Child's grade
                  <input style={{ ...ms.input, ...(errors.grade ? INPUT_ERR : {}) }}
                    value={form.grade} onChange={e => set("grade", e.target.value)}
                    placeholder="e.g. Grade 4" />
                  {errors.grade && <span style={ERR}>{errors.grade}</span>}
                </label>
              </div>

              <label style={ms.label}>
                Location
                <select style={{ ...ms.input, ...ms.select, ...(errors.location ? INPUT_ERR : {}) }}
                  value={form.location} onChange={e => set("location", e.target.value)}>
                  <option value="" disabled>Choose a location…</option>
                  <option value="surrey-clayton">Surrey – Clayton</option>
                  <option value="surrey-city-centre">Surrey – City Centre</option>
                  <option value="surrey-fleetwood">Surrey – Fleetwood</option>
                </select>
                {errors.location && <span style={ERR}>{errors.location}</span>}
              </label>

              <button type="submit" className="btn btn-primary"
                style={{ ...ms.submit, opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                disabled={loading}>
                {loading ? "Sending…" : "Count me in →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ===================================================================== */
/* CTA + FOOTER                                                          */
/* ===================================================================== */
function CTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="enroll" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div style={fs.cta}>
          <div style={fs.ctaDots} aria-hidden="true" />
          <span className="hand" style={fs.ctaHand}>let's begin the story…</span>
          <h2 style={fs.ctaTitle}>Give your child the gift<br/>of finding their words.</h2>
          <p style={fs.ctaSub}>Confident writing is a skill for life — for every essay, application, and idea still to come.</p>
          <div style={fs.ctaBtns}>
            <button className="btn btn-primary" style={{ background: "#fff", color: "var(--green-deep)", border: "none", cursor: "pointer" }}
              onClick={() => setModalOpen(true)}>
              I'm interested — keep me posted
            </button>
          </div>
        </div>
        <footer style={fs.footer}>
          <span style={fs.footMark}>✎ The Complete Writer Program</span>
          <span style={fs.footNote}>Grades 3–6 · Foundations to fluency</span>
        </footer>
      </div>

      {modalOpen && <InterestModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}

/* ===================================================================== */
/* ROOT                                                                  */
/* ===================================================================== */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "green",
  "heroBand": "g34"
}/*EDITMODE-END*/;

const ACCENTS = {
  green: ["var(--green)", "var(--green-deep)"],
  terra: ["var(--terra)", "var(--terra-deep)"],
  amber: ["var(--amber)", "var(--amber-deep)"],
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [band, setBand] = useState(TWEAK_DEFAULTS.heroBand);
  useReveal();

  useEffect(() => {
    const [c, d] = ACCENTS[t.accent] || ACCENTS.green;
    document.documentElement.style.setProperty("--accent", c);
    document.documentElement.style.setProperty("--accent-deep", d);
  }, [t.accent]);

  return (
    <div>
      <AnnouncementBanner />
      <Hero band={band} setBand={setBand} />
      <PricingStrip />
      <Curriculum band={band} />
      <Progression band={band} />
      <Level1 />
      <CTA />

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakRadio label="Accent color" value={t.accent}
          options={["green", "amber", "terra"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Curriculum" />
        <TweakRadio label="Show grade band" value={band}
          options={["g34", "g56"]}
          onChange={(v) => setBand(v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
