import React from "react";

const imageCards = [
  {
    title: "Nature setting",
    text: "Close enough to Melbourne to stay connected, but set in nature for more calm, space, and rejuvenation.",
    img: "/images/nature.jpg"
  },
  {
    title: "Private living space",
    text: "Your own private area for sleeping and day-to-day living, separate from shared areas but part of the overall setup.",
    img: "/images/private.jpg"
  },
  {
    title: "Shared hub",
    text: "A central indoor + outdoor hub for kitchen, meals, work, and shared facilities.",
    img: "/images/shared.jpg"
  },
  {
    title: "Lower ongoing costs",
    text: "A setup designed to reduce ongoing expenses through shared infrastructure and off-grid or semi off-grid systems, lowering ongoing costs like utilities.",
    img: "/images/yard.jpg"
  }
];

const lifestylePerks = [
  {
    title: "Outdoor gathering space",
    text: "Firepit, seating, and a shared area to unwind and spend time together.",
    type: "firepit"
  },
  {
    title: "Multi-use court",
    text: "Space for basketball, pickleball, or general activity — something social and active.",
    type: "court"
  },
  {
    title: "Work / study area",
    text: "A quiet shared space for remote work, study, or focused time.",
    type: "office"
  },
  {
    title: "Optional extras",
    text: "Things like a small plunge pool, spa, or garden areas depending on budget and priorities.",
    type: "spa"
  },
  {
    title: "Space to grow",
    text: "Ample room for growing your own veggies, herbs, and food gardens — plus planting trees or expanding over time.",
    type: "land"
  }
];

const tiers = [
  {
    title: "Builder",
    price: "$50k–$70k",
    desc: "Lower cost option for those willing to contribute to the build.",
    bullets: [
      "Contribute to land and infrastructure",
      "Fund your own build or private space",
      "Join shared build schedule",
      "Best for practical, hands-on people"
    ]
  },
  {
    title: "Non-builder",
    price: "$75k–$95k",
    desc: "Higher cost option with minimal or no build involvement.",
    bullets: [
      "Higher financial contribution",
      "Private space + shared hub access",
      "No significant build requirement",
      "Good for time-poor buyers"
    ]
  }
];

const builderQuestions = [
  { label: "Name", type: "text" },
  { label: "Email", type: "text" },
  { label: "How much can you realistically contribute in total?", type: "radio", options: ["$40-50k", "$50-70k", "$70k-100k", "$100k+"] },
  { label: "Which path are you considering?", type: "radio", options: ["Builder", "Non-builder", "Open to both"] },
  { label: "What is your age?", type: "radio", options: ["18-24", "25-34", "35-44", "45+"] },
  { label: "What is your gender?", type: "radio", options: ["Male", "Female"] },
  { label: "Will you live with a partner?", type: "radio", options: ["Yes", "No"] },
  { label: "Do you have children?", type: "radio", options: ["Yes", "No"] },
  { label: "Are you an Australian citizen?", type: "radio", options: ["Yes", "No"] },
  { label: "What is your cultural background? (e.g. religion, ethnicity etc)", type: "text" },
  {
    label: "How many people are you comfortable sharing living facilities with? (select all that apply)",
    type: "checkbox",
    options: ["2", "3", "4", "5+"]
  },
  { label: "When would you realistically be ready to start?", type: "radio", options: ["Now", "1–3 months", "3–6 months", "6+ months"] },
  { label: "Do you have any practical skills (tools, building, logistics, etc.)?", type: "text" },
  { label: "How much time could you commit in the first 2–3 months?", type: "radio", options: ["Weekends", "Flexible", "Limited", "None"] },
  { label: "Are you comfortable with a shared hub + private space setup?", type: "radio", options: ["Yes", "No", "Unsure"] },
  { label: "What level of privacy do you want day-to-day?", type: "radio", options: ["High", "Medium", "Low"] },
  { label: "Why does this type of setup appeal to you?", type: "text" },
  { label: "What would make this a clear yes or no for you?", type: "text" }
];

function Illustration({ type, className = "" }) {
  if (type === "firepit") {
    return (
      <svg viewBox="0 0 900 620" className={className} preserveAspectRatio="xMidYMid slice">
        <rect width="900" height="620" fill="#f6efe4" />
        <rect y="350" width="900" height="270" fill="#ccb184" />
        <path d="M0 405 C170 372 350 390 525 420 C650 441 765 440 900 408 L900 620 L0 620 Z" fill="#b89569" />
        <circle cx="450" cy="390" r="78" fill="#8b7455" />
        <circle cx="450" cy="390" r="52" fill="#61503c" />
        <path d="M450 330 C430 360 428 388 450 418 C472 388 470 360 450 330 Z" fill="#ff9f43" />
        <path d="M478 346 C464 370 462 392 478 412 C494 392 493 370 478 346 Z" fill="#ffd166" />
        <path d="M422 346 C406 370 405 392 422 412 C438 392 437 370 422 346 Z" fill="#ffbf69" />
        {[220, 300, 600, 680].map((x) => <rect key={x} x={x} y="430" width="90" height="26" rx="13" fill="#8f6b49" />)}
      </svg>
    );
  }

  if (type === "court") {
    return (
      <svg viewBox="0 0 900 620" className={className} preserveAspectRatio="xMidYMid slice">
        <rect width="900" height="620" fill="#f4efe5" />
        <rect y="350" width="900" height="270" fill="#ccb585" />
        <rect x="155" y="165" width="590" height="310" rx="24" fill="#7a8b6b" />
        <rect x="185" y="195" width="530" height="250" rx="12" fill="#6b7c5d" stroke="#f3ede1" strokeWidth="6" />
        <line x1="450" y1="195" x2="450" y2="445" stroke="#f3ede1" strokeWidth="5" />
        <circle cx="450" cy="320" r="42" fill="none" stroke="#f3ede1" strokeWidth="5" />
      </svg>
    );
  }

  if (type === "office") {
    return (
      <svg viewBox="0 0 900 620" className={className} preserveAspectRatio="xMidYMid slice">
        <rect width="900" height="620" fill="#f3eee4" />
        <rect x="0" y="0" width="900" height="190" fill="#e7dcc9" />
        <rect x="0" y="190" width="900" height="430" fill="#d9c6a8" />
        <rect x="110" y="80" width="300" height="190" rx="14" fill="#dfe8dd" />
        <rect x="135" y="105" width="250" height="140" rx="10" fill="#c7d5c4" />
        <rect x="180" y="340" width="380" height="22" rx="11" fill="#8e6f4e" />
        <rect x="300" y="275" width="120" height="70" rx="10" fill="#d8d0c3" />
      </svg>
    );
  }

  if (type === "spa") {
    return (
      <svg viewBox="0 0 900 620" className={className} preserveAspectRatio="xMidYMid slice">
        <rect width="900" height="620" fill="#f5efe6" />
        <rect y="360" width="900" height="260" fill="#ccb486" />
        <ellipse cx="460" cy="370" rx="190" ry="88" fill="#8d7052" />
        <ellipse cx="460" cy="370" rx="155" ry="58" fill="#9fd2d7" />
        <ellipse cx="460" cy="360" rx="135" ry="36" fill="#ccecf0" opacity="0.9" />
      </svg>
    );
  }

  if (type === "land") {
    return (
      <svg viewBox="0 0 1200 700" className={className} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f8f5ee" />
            <stop offset="100%" stopColor="#efe6d7" />
          </linearGradient>
          <linearGradient id="hill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#90a17f" />
            <stop offset="100%" stopColor="#6f7f61" />
          </linearGradient>
        </defs>
        <rect width="1200" height="700" fill="url(#sky)" />
        <rect y="390" width="1200" height="310" fill="#d9c7a0" />
        <path d="M0 360 C180 290 320 315 470 350 C620 385 790 310 920 275 C1040 242 1120 260 1200 290 L1200 470 L0 470 Z" fill="url(#hill)" />
        <path d="M0 430 C220 395 390 430 560 455 C720 478 925 425 1200 390 L1200 700 L0 700 Z" fill="#ccb786" opacity="0.85" />
        <path d="M120 520 C250 485 360 475 470 505 C565 530 650 530 735 505 C840 474 965 482 1080 522" fill="none" stroke="#b69f70" strokeWidth="26" strokeLinecap="round" />
        {[120, 200, 290, 360, 470, 585, 690, 760, 860, 980, 1080].map((x, i) => (
          <g key={x} transform={`translate(${x} ${i % 2 === 0 ? 305 : 330})`}>
            <rect x="-6" y="28" width="12" height="90" rx="6" fill="#d7d0c4" />
            <ellipse cx="0" cy="18" rx="32" ry="58" fill="#98a680" />
            <ellipse cx="-18" cy="24" rx="22" ry="40" fill="#a5b28d" />
            <ellipse cx="20" cy="24" rx="22" ry="42" fill="#8b9c74" />
          </g>
        ))}
      </svg>
    );
  }

  if (type === "cabin") {
    return (
      <svg viewBox="0 0 900 620" className={className} preserveAspectRatio="xMidYMid slice">
        <rect width="900" height="620" fill="#f4efe6" />
        <rect y="390" width="900" height="230" fill="#dbc394" />
        <rect x="180" y="250" width="420" height="190" rx="3" fill="#6d7567" />
        <polygon points="160,270 390,175 630,255 600,278 390,205 190,288" fill="#4f554b" />
        <rect x="250" y="300" width="90" height="90" fill="#d9cab2" />
        <rect x="365" y="300" width="90" height="90" fill="#d9cab2" />
        <rect x="485" y="295" width="70" height="145" fill="#c08a4a" />
        <rect x="515" y="325" width="18" height="55" fill="#5b3920" />
        <path d="M0 500 C160 465 320 472 480 494 C620 512 760 502 900 474 L900 620 L0 620 Z" fill="#ccb27c" />
      </svg>
    );
  }

  if (type === "hub") {
    return (
      <svg viewBox="0 0 900 620" className={className} preserveAspectRatio="xMidYMid slice">
        <rect width="900" height="620" fill="#f6f1e7" />
        <rect y="400" width="900" height="220" fill="#d8c091" />
        <rect x="170" y="255" width="500" height="150" fill="#836a4d" />
        <polygon points="145,275 415,165 720,255 675,280 418,195 180,290" fill="#6a543b" />
        <rect x="225" y="300" width="80" height="105" fill="#f2eadb" />
        <rect x="340" y="300" width="80" height="105" fill="#f2eadb" />
        <rect x="455" y="300" width="80" height="105" fill="#f2eadb" />
        <rect x="570" y="300" width="50" height="105" fill="#d9a362" />
        <rect x="140" y="320" width="620" height="16" fill="#7a6346" />
        {[190, 280, 370, 460, 550, 640, 730].map((x) => (
          <rect key={x} x={x} y={333} width="14" height="120" fill="#8f7454" />
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 900 620" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="900" height="620" fill="#f3efe6" />
      <rect x="0" y="0" width="900" height="120" fill="#e9dfcf" />
      <rect x="0" y="120" width="900" height="500" fill="#d8c5a6" />
      <rect x="110" y="95" width="140" height="360" rx="8" fill="#d0b184" />
      <rect x="250" y="95" width="16" height="360" fill="#c4a06f" />
      <rect x="300" y="200" width="190" height="120" rx="16" fill="#b18d63" />
      <rect x="315" y="215" width="160" height="90" rx="12" fill="#dfd3c2" />
      <rect x="545" y="175" width="110" height="145" rx="10" fill="#b89569" />
      <rect x="680" y="150" width="110" height="170" rx="10" fill="#a17d54" />
      <rect x="520" y="340" width="320" height="140" rx="18" fill="#cab498" />
      <circle cx="620" cy="395" r="26" fill="#2f2b28" />
      <rect x="612" y="280" width="16" height="115" fill="#2f2b28" />
    </svg>
  );
}

function LifestyleCarousel({ perks }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % perks.length), 3500);
    return () => clearInterval(timer);
  }, [perks.length]);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">What life could look like</h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Beyond reducing costs, the goal is to create a setup that actually improves day-to-day life. These are examples of what can be included depending on the land and group.
        </p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
        <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {perks.map((item) => (
            <div key={item.title} className="min-w-full">
              <Illustration type={item.type} className="h-72 w-full md:h-96" />
              <div className="border-t border-neutral-200 p-5">
                <div className="text-lg font-medium text-neutral-900">{item.title}</div>
                <div className="mt-1 text-sm text-neutral-600">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {perks.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-neutral-900" : "w-2.5 bg-neutral-300"}`}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => setIndex((index - 1 + perks.length) % perks.length)} className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50">Prev</button>
          <button onClick={() => setIndex((index + 1) % perks.length)} className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50">Next</button>
        </div>
      </div>
    </section>
  );
}

export default function Nomore() {
  const [showLocations, setShowLocations] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [submitStatus, setSubmitStatus] = React.useState("");

  function handleChange(label, value, type) {
    setFormData((prev) => {
      if (type === "checkbox") {
        const current = prev[label] || [];
        return {
          ...prev,
          [label]: current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value]
        };
      }

      return {
        ...prev,
        [label]: value
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitStatus("Submitting...");

    try {
      const response = await fetch("https://formspree.io/f/xgopodkn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus("Thanks — your response has been submitted.");
        setFormData({});
      } else {
        setSubmitStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <section className="relative overflow-hidden border-b border-neutral-200 bg-[#f7f3eb]">
        <div className="absolute inset-0 opacity-60">
          <Illustration type="land" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-white/55" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-neutral-300 bg-white/80 px-4 py-1.5 text-sm text-neutral-700 shadow-sm">
              Near Melbourne · shared living · private rooms
            </div>
            <div className="mb-4 text-lg font-semibold tracking-tight">
              <span className="text-neutral-900">No</span>
              <span className="text-lime-600">m</span>
              <span className="text-neutral-900">o</span>
              <span className="text-lime-600">r</span>
              <span className="text-neutral-900">e</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Live with no <span className="text-lime-600">mortgage</span> and no <span className="text-lime-600">rent</span>.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-neutral-700">
              A small-group setup within ≈1–2 hours of Melbourne: shared land, one central hub, and separate private spaces. Clear numbers. Practical structure.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "No mortgage",
                "No rent",
                "≈1–2 hrs from Melbourne",
                "Small-group setup",
                "Build or buy your home"
              ].map((tag) => (
                <span key={tag} className="rounded-full border border-neutral-300 bg-white/85 px-3 py-1.5 text-sm text-neutral-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <button className="rounded-lg bg-neutral-900 px-6 py-3 text-white shadow-sm transition hover:bg-neutral-800">
                Check if you’re a fit
              </button>
              <button
                onClick={() => setShowLocations((prev) => !prev)}
                className="rounded-lg border border-neutral-300 bg-white/85 px-6 py-3 text-neutral-900 shadow-sm transition hover:bg-white"
              >
                See locations
              </button>
            </div>
          </div>

          {showLocations && (
            <div className="mt-8">
              <div className="mb-4">
                <div className="text-base font-medium text-neutral-900">Preferred locations</div>
                <div className="mt-1 text-sm text-neutral-500">Within roughly 1–2 hours of Melbourne.</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Macedon Ranges",
                    distance: "~1 hr from Melbourne",
                    img: "/images/macedon.jpg"
                  },
                  {
                    title: "Yarra Ranges",
                    distance: "~1.5 hrs from Melbourne",
                    img: "/images/yarra.jpg"
                  },
                  {
                    title: "Daylesford",
                    distance: "~1.5 hrs from Melbourne",
                    img: "/images/daylesford.png"
                  },
                  {
                    title: "Bass Coast hinterland",
                    distance: "~1.5–2 hrs from Melbourne",
                    img: "/images/bass.jpg"
                  }
                ].map((loc) => (
                  <div key={loc.title} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                    <img src={loc.img} alt={loc.title} className="h-44 w-full object-cover" />
                    <div className="p-4">
                      <div className="text-base font-medium text-neutral-900">{loc.title}</div>
                      <div className="mt-1 text-sm text-neutral-500">{loc.distance}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">The lifestyle</h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            Lower costs, more space, your own private area, and one shared hub that keeps the whole setup grounded and workable.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {imageCards.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <img src={item.img} className="h-64 w-full object-cover" />
              <div className="p-4">
                <div className="font-medium text-neutral-900">{item.title}</div>
                <div className="mt-1 text-sm text-neutral-600">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LifestyleCarousel perks={lifestylePerks} />

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold">Two options</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {tiers.map((tier) => (
              <div key={tier.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{tier.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{tier.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-wide text-neutral-500">Total</div>
                    <div className="text-lg font-semibold text-neutral-900 whitespace-nowrap">{tier.price}</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Apply</h2>
          <p className="mt-2 text-neutral-600">This is to filter for fit, budget, seriousness, and timing.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          {builderQuestions.map((q) => (
            <div key={q.label}>
              <label className="text-sm font-medium text-neutral-800">{q.label}</label>
              {q.type === "text" && (
                <input
                  value={formData[q.label] || ""}
                  onChange={(e) => handleChange(q.label, e.target.value, q.type)}
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 outline-none transition focus:border-neutral-500"
                />
              )}
              {q.type === "radio" && (
                <div className="mt-2 flex flex-wrap gap-3">
                  {q.options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1.5 text-sm cursor-pointer hover:bg-neutral-50">
                      <input
                        type="radio"
                        name={q.label}
                        value={opt}
                        checked={formData[q.label] === opt}
                        onChange={() => handleChange(q.label, opt, q.type)}
                        className="accent-lime-600"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              )}
              {q.type === "checkbox" && (
                <div className="mt-2 flex flex-wrap gap-3">
                  {q.options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1.5 text-sm cursor-pointer hover:bg-neutral-50">
                      <input
                        type="checkbox"
                        value={opt}
                        checked={(formData[q.label] || []).includes(opt)}
                        onChange={() => handleChange(q.label, opt, q.type)}
                        className="accent-lime-600"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button type="submit" className="mt-2 rounded-lg bg-neutral-900 px-6 py-3 text-white shadow-sm transition hover:bg-neutral-800">
            Submit
          </button>
          {submitStatus && <div className="text-sm text-neutral-600">{submitStatus}</div>}
        </form>
      </section>
      <section className="mx-auto max-w-3xl px-6 py-12">
  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center">
    <h2 className="text-xl font-semibold">Questions?</h2>
    <p className="mt-2 text-neutral-600">
      Feel free to contact at:
    </p>
    <a
      href="mailto:nomore.estate@gmail.com"
      className="mt-4 inline-block text-lg font-medium text-lime-600 underline"
    >
      nomore.estate@gmail.com
    </a>
  </div>
</section>
    </div>
  );
}
