export type Bullet = {
  text: string
  tags?: string[]
  date?: string
}

export type CarouselSlide = {
  image?: string
  caption: string
}

export type EntryLink = {
  label: string
  url: string
}

export type ExperienceEntry = {
  id: string
  category: 'internship' | 'project' | 'club'
  title: string
  employer: string
  dateRange: string
  description: string
  bullets: Bullet[]
  accentColor: string
  highlight: boolean
  inProgress?: boolean
  credentials?: string[]
  slides?: CarouselSlide[]
  links?: EntryLink[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'up-cancer',
    category: 'internship',
    title: 'Software Engineering Intern',
    employer: 'Up Cancer',
    dateRange: 'June 2026–Present',
    description: 'Architecting backend data infrastructure for a full-stack cancer-support CRM platform.',
    slides: [
      { caption: 'I chose single-table DynamoDB design over one table per entity for two reasons: it is the pattern DynamoDB recommends for scaling horizontally to hundreds of users without added operational overhead, and it lets every future feature plug into the same PK/SK convention without new tables or joins.' },
      { caption: 'With no backend documentation, I reverse-engineered the schema by reading through the backend folder structure, existing dynamo.js setup, and API routes to see what data was read and written — then cross-referenced that against the frontends auth flow and hardcoded dashboard fields to confirm what belonged in the schema.' },
      { caption: 'The core pattern I chose is each entity gets a partition key (USER#email, CONTACT#uuid) with a metadata row, plus flexible child items - family members, interactions, opportunities — under the same partition via sort-key prefixes, and one GSI per entity type for "list all X" queries. New features (ex: a Kanban board, calendar, chat) reuse this same shape.' },
    ],
    bullets: [
      { text: 'Architected a single-table AWS DynamoDB schema for Hatching Sparrow, a full-stack CRM built with Next.js and Express.js, deriving access patterns from an existing frontend codebase without backend documentation', tags: ['AWS'], date: '2026' },
      { text: 'Designed PK/SK structure, access patterns, and GSI strategy across Users and Contacts entities, creating a scalable foundation extensible to 20+ planned features without re-architecting', tags: ['AWS'], date: '2026' },
      { text: 'Chose single-table design over per-entity tables for cost efficiency and near-infinite horizontal scalability, positioning the schema to support Hatching Sparrow’s scale-up to hundreds of users post-launch without added operational overhead', tags: ['AWS'], date: '2026' }
    ],
    accentColor: '#1DB954',
    highlight: true,
    inProgress: true,
  },
  {
    id: 'eigenvector',
    category: 'internship',
    title: 'Software Engineering Intern',
    employer: 'Eigenvector LLC',
    dateRange: '2024–2025',
    description: 'Building and maintaining RudderVirt, a web platform providing on-demand virtual machines for classroom assignments and technical competitions.',
    bullets: [
      { text: 'Built a full-stack auth system for RudderVirt supporting dual teacher/student account roles, using SvelteKit, Drizzle ORM, and PostgreSQL (chosen over NoSQL for relational data needs like joining teacher-to-student assignments) with sign-ins verified through a backend API call to Cloudflare Turnstile.', tags: ['SvelteKit', 'PostgreSQL'], date: '2024' },
      { text: 'Built a real-time, AWS-backed VM deployment system letting teachers assign virtual machines to students, who could launch them within a 60-minute session limit. Used as the live timed testing environment for competitors at SkillsUSA 2024 Nationals.', tags: ['AWS'], date: '2024' },
      { text: 'Integrated Stripe to handle billing for classroom VM access, building the backend API logic and a frontend payment page for users.', tags: ['Stripe'], date: '2024' },
      { text: 'Designed and implemented UI features in SvelteKit, including a theme-toggling system that persisted user preference via local storage, and multiple page redesigns.', tags: ['SvelteKit'], date: '2024' },
      { text: 'Wrote automated Playwright tests from scratch for each feature I built, verifying that user flows executed correctly end to end.', tags: ['Playwright'], date: '2024' },
    ],
    accentColor: '#E91429',
    highlight: false,
  },
  {
    id: 'argonne',
    category: 'internship',
    title: 'Exemplary Student Research Program',
    employer: 'Argonne National Laboratory',
    dateRange: '2023–2025',
    description: 'Researched cadmium selenide (CdSe) quantum dots\' environmental impact on crops through Argonne National Laboratory\'s Exemplary Student Research Program, working alongside Dr. Olga Antipova and a 12-person research team.',
    bullets: [
      { text: 'Analyzed experimental data on plant morphology and chloroplast quantity to quantify the effects of CdSe quantum dot exposure.', tags: ['Research'], date: '2023' },
      { text: 'Co-authored a research poster presenting the team\'s findings.', tags: ['Research'], date: '2024' },
    ],
    accentColor: '#2D46B9',
    highlight: false,
    links: [
      { label: 'Poster', url:'https://www.anl.gov/education/naperville-central-high-school-esrp-2024'}
    ]
  },
  {
    id: 'cs336-language-modeling',
    category: 'project',
    title: 'Language Modeling from Scratch',
    employer: 'Personal Project',
    dateRange: '2026-Present',
    description: 'Working through Stanford\'s CS336 (Language Modeling from Scratch) using their publicly available course materials. Every component (tokenizer through Transformer) is implemented from raw PyTorch tensors, without using torch.nn\'s built-in layers or torch.optim (only base classes like nn.Module are permitted). Currently finishing Assignment 1: the tokenizer and core Transformer building blocks are complete, with the full language model (Chapter 4) next.',
    slides: [
      { caption: 'The assignment bars using any of PyTorch\'s built-in neural network layers or optimizers, only base container classes like nn.Module are allowed. Every linear layer, normalization, attention mechanism, and feedforward block here is implemented from raw tensor operations, not assembled from existing building blocks.'},
    ],
    bullets: [
      { text: 'Implemented a byte pair encoding (BPE) tokenizer from scratch, including a multiprocessing-parallelized pretokenization step across CPU cores to handle large training corpora.', tags: ['Python', 'multiprocessing'], date: '2026' },
      { text: 'Implemented the Tokenizer class handling encoding and decoding, including special-token handling for multi-byte characters.', tags: ['Python'], date: '2026' },
      { text: 'Implemented a bias-free Linear layer and an Embedding layer from scratch, without PyTorch\'s built-in nn.Linear or nn.Embedding.', tags: ['PyTorch'], date: '2026' },
      { text: 'Implemented RMSNorm and a SwiGLU-style feedforward network from scratch.', tags: ['PyTorch'], date: '2026' },
      { text: 'Implemented Rotary Position Embeddings (RoPE) and causal scaled dot-product attention from scratch.', tags: ['PyTorch'], date: '2026' },
      { text: 'Assembled these into a full pre-norm TransformerBlock (RMSNorm to attention to residual, RMSNorm to FFN to residual).', tags: ['PyTorch'], date: '2026' },
    ],
    accentColor: '#E8115B',
    highlight: true,
    inProgress: true,
    links: [
      { label: 'GitHub', url: 'https://github.com/AnayApte/Stanford336AssignmentOne' },
    ],
  },
  {
    id: 'options-pricing-engine',
    category: 'project',
    title: 'Options Pricing Engine',
    employer: 'Personal Project',
    dateRange: '2026–Present',
    description: 'Built the Black-Scholes pricing model in C++ (the standard normal CDF and the call/put pricing functions) and currently learning geometric Brownian motion to extend into Monte Carlo simulation next. Built in C++, the industry standard for performance-critical pricing systems and a language I wanted real quant/fintech experience in, with Python handling visualization for payoff diagrams, vol surfaces, and Greeks.',
    slides: [
      { caption: 'Every input to Black-Scholes except volatility is directly observable: stock price, strike, rate, and time can all just be looked up. Volatility is the one variable you have to estimate, which is where the real quantitative judgment in options pricing lives.'},
      { caption: 'Learned the C++ build chain end to end: CMakeLists.txt defines the build, CMake generates a Makefile from it, and make compiles that into the final binary, the full path from source code to a runnable executable.'}
    ],
    bullets: [
      { text: 'Implemented the standard normal CDF in C++. This is the building block behind Black-Scholes\' N(d1) and N(d2) terms, which represent the probability-weighted expected values the formula is built from.', tags: ['C++'], date: '2026'},
      { text: 'Implemented the Black-Scholes call and put pricing functions in C++, where a call profits when the stock price exceeds the strike at expiration and a put profits when it falls below.', tags: ['C++'], date: '2026'}
    ],
    accentColor: '#0D9488',
    highlight: false,
    inProgress: true,
    links: [
      { label: 'GitHub', url: 'https://github.com/AnayApte/options-pricing-engine' },
    ],
  },
  {
    id: 'nba-analytics-model',
    category: 'project',
    title: 'NBA Analytics Model',
    employer: 'Personal Project',
    dateRange: '2026–Present',
    description: 'Building a model to quantify how forced substitutions (foul trouble, ejection, injury) affect team performance by player archetype, with a planned extension to recommend optimal replacement lineups against any given opponent.',
    slides: [
      { caption: 'The core idea is that forced substitutions aren\'t coaching decisions, so they act as natural experiments, isolating a clean causal effect rather than one by strategy. I worked with Claude to design a methodology around this, comparing performance (points per possession, shot selection, pace, defensive metrics) in the 20 possessions before and after each forced sub, classified by the departing player\'s skill archetype (floor spacer, rim runner, playmaker, switchable defender). So far I\'ve explored a single game\'s play-by-play data via swar/nba_api and hit two early finds: the PlayByPlayV2 endpoint is deprecated in favor of V3, and the API rate-limits aggressively, requiring throttled requests between calls. The ingestion pipeline, archetype classifier, and causal inference model are still to be built.'},
    ],
    bullets: [],
    accentColor: '#EA580C',
    highlight: false,
    inProgress: true,
    links: [
      { label: 'GitHub', url: 'https://github.com/AnayApte/nba-impact-model' },
    ],
  },
  {
    id: 'scout',
    category: 'project',
    title: 'Scout',
    employer: 'Personal Project',
    dateRange: '2026',
    description: 'Scout is a full-stack system that sources, screens, and issues real $100K investment decisions on startup founders within 24 hours, whether they applied directly or were surfaced from public activity on GitHub, Hacker News, or arXiv. Every founder gets a persistent Founder Score, reported as a value with a confidence interval that survives across applications and sharpens with new milestones rather than resetting on rejection. Built end-to-end in a single hackathon by a team of four, with live OpenAI reasoning, live web-evidence checks, and live outbound scanning.',
    slides: [
      { caption: 'Maschmeyer Group\'s spec required keeping Founder, Market, and Idea-vs-Market as three separate axes rather than one blended score. The goal was maximizing how detailed the resulting investment memo could be, since collapsing them into a single number would lose the reasoning behind it.'},
      { caption: 'I chose to implement a shared contract because of a bad experience at a previous hackathon. On SmartSketch, we were still fixing integration bugs at 4am for an 8am deadline, and the demo suffered for it. This time, investing early in a detailed shared contract file meant less time spent integrating everyone\'s modules together, and we finished with real time to spare before the deadline.'},
      { caption: 'We weighed time, data, and cost on every build decision. EMA-style score recomputation avoided the overhead of full model retraining. That same instinct showed up elsewhere too: in outbound search, OpenAI is only called to judge whether ambiguous context actually relates to a founder, rather than running every signal through the LLM by default.'},
      { caption: 'We deliberately avoided bolting on differentiating features late in the build. Instead of adding more surface area, we spent that time calibrating the scoring formula itself since simplicity over breadth was the guiding principle.'}

    ],
    bullets: [
      { text: 'Designed the initial system architecture, including a locked shared contract file defining data shapes across the team\'s four independently-built modules, enabling parallel development without integration drift under hackathon time constraints.', tags: ['System Design'], date: '2026' },
      { text: 'Built the Signal Intake module. This is a deck parser converting founder submissions (PDF/PPTX/DOCX/TXT/MD) into structured claims, and an outbound scanner surfacing founders from GitHub, Hacker News, and arXiv before they applied.', tags: ['Python', 'FastAPI'], date: '2026' },
      { text: 'Built the funnel convergence logic connecting outbound-sourced founders (via automated emails) into the same scoring pipeline as inbound applicants.', tags: ['FastAPI'], date: '2026' },
      { text: 'Integrated Product Hunt as an additional outbound sourcing signal.', tags: ['Python'], date: '2026' },
    ],
    accentColor: '#06C7B5',
    highlight: true,
    links: [
      { label: 'Website', url: 'https://frontend-ruddy-rho-29.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/aryanpradhan1/VCBrain' },
    ],
  },
  {
    id: 'penn-academic-copilot',
    category: 'project',
    title: 'Penn Academic Co-Pilot',
    employer: 'Personal Project',
    dateRange: '2026',
    description: 'GPT-4o powered academic advising agent helping Penn students plan schedules, check course eligibility, and track degree progress across 18 tools.',
    slides: [
      { caption: 'The 18 tools split into 8 functional areas: live course search and reviews via the Penn Course Review API, official catalog/prerequisite scraping, degree progress tracking against SEAS requirements, transcript parsing (including PDF uploads and Penn\'s 2022 course renumbering), and preference extraction from free text.'},
      { caption: 'Here\'s a concrete walkthrough of scheduling: A concrete example: if a student already has CIS-1200 and asks to add CIS-3200, the system checks every valid section combination for a conflict-free fit. If none exists, it doesn\'t guess, it asks the student to replace the conflicting course, keep both, or cancel, before taking any action.'}

    ],
    bullets: [
      { text: 'Built an agent with 18 GPT-4o tools across 8 modules (live course search, catalog eligibility checks, degree progress tracking, and transcript parsing).', tags: ['GPT-4o', 'FastAPI'], date: '2026' },
      { text: 'Built a schedule-conflict resolution system using a backtracking solver checking every lecture/recitation/lab combination simultaneously.', tags: ['Python'], date: '2026' },
      { text: 'Built an input/output guardrail layer blocking prompt-injection and persona-hijack attempts via pattern matching.', tags: ['Python'], date: '2026' },
      { text: 'Validated the system with 3 end-to-end evaluation cases against a live GPT-4o pipeline, backed by 186 unit tests across the tool suite.', tags: ['pytest'], date: '2026' },
    ],
    accentColor: '#6366F1',
    highlight: false,
    links: [
      { label: 'GitHub', url: 'https://github.com/AnayApte/CIS1990Final' },
    ],
  },
  {
    id: 'smart-sketch',
    category: 'project',
    title: 'SmartSketch',
    employer: 'Personal Project',
    dateRange: '2026',
    description: 'Originally built at a hackathon with two teammates to help students with ADHD take notes easier (directly influenced by watching a close friend struggle with traditional note-taking in our DSA class). Later selected for further development through Penn Spark, where I led a team of four developers and three designers through its revision, presenting the final product at Penn Spark Demo Day to 100+ attendees. SmartSketch converts live speech into a real-time, incrementally-updating mindmap.',
    slides: [
      { caption: 'When a user grants audio/video permissions on landing, a LiveKit room is created tied to that session, with Supabase Auth handling sign-up/login. Pressing record dispatches a Python agent into the room as a second participant configured audio-only, since video was captured client-side but deliberately never transmitted or stored, to conserve bandwidth and because the core product never needed a visual feed. A secondary dispatch path handles reconnects, so a session doesn\'t fail outright if a room already exists.'},
      { caption: 'A new mindmap branch publishes on whichever condition triggers first: every 5 seconds, or once the accumulated transcript buffer exceeds 200 characters, balancing responsiveness against API overhead. The frontend renders these updates incrementally using React Flow.'}
    ],
    bullets: [
      { text: 'Built a real-time audio pipeline where a Python agent joins a LiveKit room to process live speech via two concurrent Deepgram streams: incremental partial transcription and a final authoritative transcript.', tags: ['LiveKit', 'Deepgram'], date: '2026' },
      { text: 'Designed the mindmap update logic to regenerate the full structure from scratch on each transcript chunk rather than incrementally patching it (a deliberate tradeoff prioritizing structural correctness over compute efficiency under hackathon time constraints, with similarity-based deduplication preventing redundant nodes).', tags: ['React Flow'], date: '2026' },
      { text: 'Built dual-layer fallback handling, with automatic fallback to a lower-tier Gemini model on rate limits, and a fallback to the browser\'s native Web Speech API if LiveKit or the agent pipeline fails entirely.', tags: ['LiveKit', 'Gemini'], date: '2026' },
      { text: 'Added transcript-grounded AI chat and persistent session history (transcripts, mindmap data, and audio recordings) via Supabase, letting users revisit and query past sessions.', tags: ['Gemini', 'Supabase'], date: '2026' },
    ],
    accentColor: '#1E3264',
    highlight: false,
    links: [
      { label: 'GitHub', url: 'https://github.com/AnayApte/smart-sketch' },
    ],
  },
  {
    id: 'one-percent-better',
    category: 'project',
    title: 'One Percent Better',
    employer: 'Personal Project',
    dateRange: '2024',
    description: 'Led a team of four to build a React Native health and wellness app for the Congressional App Challenge, combining workout tracking, nutrition planning, meditation, and journaling for high schoolers and young adults.',
    bullets: [
      { text: 'Built authentication with Supabase Auth, linking auth records to app-specific user tables via foreign keys so profile, workout, and nutrition data stayed in sync across every feature.', tags: ['Supabase'], date: '2024' },
      { text: 'Built a workout tracker integrating the ExerciseDB API for a searchable exercise library, logging sets/reps/weight per session, and using foreign-key-linked workout history to calculate one-rep max via the Epley formula.', tags: ['ExerciseDB'], date: '2024' },
      { text: 'Built a calorie tracking system calculating daily caloric goals from BMR and TDEE, monitoring food, water, and calories burned, with a GPT-based agent searching the Edamam API for recipes matching a user\'s caloric range.', tags: ['OpenAI', 'Edamam'], date: '2024' },
      { text: 'Built Bite Insight, a feature using Gemini\'s image recognition to estimate meal calories directly from a photo.', tags: ['Gemini'], date: '2024' },
      { text: 'Added supporting features including guided meditation sessions, a daily rotating quote, a task log, a personal journal, and a calendar integrating all of the app\'s features into one view.', tags: ['React Native'], date: '2024' },
    ],
    accentColor: '#148A08',
    highlight: false,
    links: [
      { label: 'Demo', url: 'https://www.youtube.com/watch?v=lVU-Msay_a8' },
      { label: 'GitHub', url: 'https://github.com/AnayApte/OPB' },
    ],
  },
  {
    id: 'penn-spark',
    category: 'club',
    title: 'Project Lead',
    employer: 'Penn Spark',
    dateRange: '2026-Present',
    description: 'Led a cross-functional team building SmartSketch, a real-time AI mindmapping tool for students with ADHD, from concept to a 100+ person Demo Day.',
    bullets: [
      { text: 'Led a cross-functional team of 4 developers and 3 designers building SmartSketch, presenting the final product at Penn Spark Demo Day to an audience of 100+ attendees.', date: '2026' },
      { text: 'Coordinated weekly sprints and team meetings, maintaining alignment across engineering and design while reporting progress in weekly cross-team PL syncs.', date: '2026' },
    ],
    accentColor: '#F59E0B',
    highlight: false,
  },
  {
    id: 'penn-masala',
    category: 'club',
    title: 'Director of Marketing & Singer',
    employer: "Penn Masala (World's First South Asian A Cappella Group)",
    dateRange: '2025–Present',
    description: "Marketing lead and performer for the world's first South Asian a cappella group.",
    bullets: [
      { text: "Member of the world's first South Asian a cappella group with 400K+ followers and content exceeding 10M+ views, with group credits including performances at the White House and the 2024 Paris Olympics.", date: '2025' },
    ],
    accentColor: '#0EA5E9',
    highlight: true,
  },
  {
    id: 'codebytes',
    category: 'club',
    title: 'Co-Founder & Director',
    employer: 'CodeBytes Youth CS Camp',
    dateRange: '2024',
    description: 'Founded a Python programming camp at my former middle school in senior year of high school, after students had requested a CS class for 6 years with no response from administration. Designed the curriculum from scratch and built something that outlasted my own involvement by 2+ years.',
    bullets: [
      { text: 'Recruited and managed 20+ volunteer high school instructors, the binding constraint being volunteers willing to take early dismissals, while running 5 sessions drawing 50-100 students each.', date: '2024' },
      { text: 'Students demoed original Python projects at a culminating showcase for parents; the program has continued running for 2+ years after my involvement ended.', date: '2024' },
    ],
    accentColor: '#8D67AB',
    highlight: false,
  },
]

export function getExperienceById(id: string): ExperienceEntry | undefined {
  return experience.find((e) => e.id === id)
}

export const internships = experience.filter((e) => e.category === 'internship')
export const projects = experience.filter((e) => e.category === 'project')
export const clubs = experience.filter((e) => e.category === 'club')
export const highlights = experience.filter((e) => e.highlight)
