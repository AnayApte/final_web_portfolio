export type Bullet = {
  text: string
  tags?: string[]
  date?: string
}

export type CarouselSlide = {
  image?: string
  caption: string
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
    highlight: false,
    inProgress: true,
  },
  {
    id: 'eigenvector',
    category: 'internship',
    title: 'Software Engineering Intern',
    employer: 'Eigenvector LLC',
    dateRange: '2024–2025',
    description: 'Building and maintaining RudderVirt, a web platform providing on-demand virtual machines for classroom assignments and technical competitions.',
    slides: [
      { caption: 'PLACEHOLDER'},
    ],
    bullets: [
      { text: 'Built a full-stack auth system for RudderVirt supporting dual teacher/student account roles, using SvelteKit, Drizzle ORM, and PostgreSQL (chosen over NoSQL for relational data needs like joining teacher-to-student assignments) with sign-ins verified through a backend API call to Cloudflare Turnstile.', tags: ['SvelteKit', 'PostgreSQL'], date: '2024' },
      { text: 'Built a real-time, AWS-backed VM deployment system letting teachers assign virtual machines to students, who could launch them within a 60-minute session limit. Used as the live timed testing environment for competitors at SkillsUSA 2024 Nationals.', tags: ['AWS'], date: '2024' },
      { text: 'Integrated Stripe to handle billing for classroom VM access, building the backend API logic and a frontend payment page for users.', tags: ['Stripe'], date: '2024' },
      { text: 'Designed and implemented UI features in SvelteKit, including a theme-toggling system that persisted user preference via local storage, and multiple page redesigns.', tags: ['SvelteKit'], date: '2024' },
      { text: 'Wrote automated Playwright tests from scratch for each feature I built, verifying that user flows executed correctly end to end.', tags: ['Playwright'], date: '2024' },
    ],
    accentColor: '#E91429',
    highlight: true,
  },
  {
    id: 'argonne',
    category: 'internship',
    title: 'Data Analysis Researcher',
    employer: 'Argonne National Laboratory — ESRP',
    dateRange: '2023–2025',
    description: 'Analyzed large-scale experimental datasets for a U.S. Department of Energy research program.',
    bullets: [
      { text: 'Processed 10 GB+ of X-ray spectroscopy data to surface material composition patterns invisible to manual review', tags: ['Python'], date: '2023' },
      { text: 'Built a visualization pipeline that compressed multi-day analysis cycles down to hours', tags: ['Matplotlib'], date: '2024' },
      { text: 'Co-authored internal findings report presented to Argonne senior scientists', tags: ['Research'], date: '2025' },
    ],
    accentColor: '#2D46B9',
    highlight: true,
    credentials: ['Excellence in Research Award — Argonne National Laboratory, 2024'],
  },
  {
    id: 'options-pricing-engine',
    category: 'project',
    title: 'Options Pricing Engine',
    employer: 'Personal Project',
    dateRange: '2026–Present',
    description: 'Currently studying the Black-Scholes model and its derivation before writing any code. Building the engine in C++ since it\'s the industry standard for performance-critical pricing systems, and a language I wanted real quant/fintech experience in. Implementing visualization in Python since it\'s a natural fit for plotting payfoff diagrams, vol surfaces, and Greeks.',
    slides: [
      { caption: 'PLACEHOLDER'},
    ],
    bullets: [],
    accentColor: '#0D9488',
    highlight: false,
    inProgress: true,
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
  },
  {
    id: 'penn-academic-copilot',
    category: 'project',
    title: 'Penn Academic Co-Pilot',
    employer: 'Personal Project',
    dateRange: '2026',
    description: 'GPT-4 powered academic advising agent that safely routes live student scheduling queries against real Penn course data.',
    bullets: [
      { text: 'Engineered an OpenAI GPT-4 agent with 6 custom tools, routing live student queries against real Penn course data, correctly blocking ineligible enrollments and resolving multi-constraint scheduling', tags: ['OpenAI API'], date: '2025' },
      { text: 'Designed a 7-stage guardrail system mitigating 10+ threat vectors including prompt injection, hallucinated course recommendations, and state corruption, validated across 3 end-to-end test cases with unit-tested components', tags: ['FastAPI'], date: '2025' },
    ],
    accentColor: '#6366F1',
    highlight: false,
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
  },
  {
    id: 'one-percent-better',
    category: 'project',
    title: 'One Percent Better',
    employer: 'Personal Project',
    dateRange: '2024',
    description: 'Led a team of four to build a React Native health and wellness app for the Congressional App Challenge, combining workout tracking, nutrition planning, meditation, and journaling for high schoolers and young adults. Watch our demo video to learn more: https://www.youtube.com/watch?v=lVU-Msay_a8',
    slides: [
      { caption: 'PLACEHOLDER'},
    ],
    bullets: [
      { text: 'Built authentication with Supabase Auth, linking auth records to app-specific user tables via foreign keys so profile, workout, and nutrition data stayed in sync across every feature.', tags: ['Supabase'], date: '2024' },
      { text: 'Built a workout tracker integrating the ExerciseDB API for a searchable exercise library, logging sets/reps/weight per session, and using foreign-key-linked workout history to calculate one-rep max via the Epley formula.', tags: ['ExerciseDB'], date: '2024' },
      { text: 'Built a calorie tracking system calculating daily caloric goals from BMR and TDEE, monitoring food, water, and calories burned, with a GPT-based agent searching the Edamam API for recipes matching a user\'s caloric range.', tags: ['OpenAI', 'Edamam'], date: '2024' },
      { text: 'Built Bite Insight, a feature using Gemini\'s image recognition to estimate meal calories directly from a photo.', tags: ['Gemini'], date: '2024' },
      { text: 'Added supporting features including guided meditation sessions, a daily rotating quote, a task log, a personal journal, and a calendar integrating all of the app\'s features into one view.', tags: ['React Native'], date: '2024' },
    ],
    accentColor: '#148A08',
    highlight: true,
  },
  {
    id: 'nchs-nav',
    category: 'project',
    title: 'NCHS Nav',
    employer: 'Personal Project',
    dateRange: '2022–2023',
    description: 'Indoor navigation app for a 400-student high school campus.',
    bullets: [
      { text: 'Modeled the entire school floor plan as a graph; ran Dijkstra\'s to compute shortest paths between any two rooms', tags: ['Algorithms'], date: '2022' },
      { text: 'Built a mobile UI that routed students to any room in under 30 seconds', tags: ['Flutter'], date: '2023' },
      { text: 'Deployed to 50+ students in beta; administration requested an expanded rollout', tags: ['Deployment'], date: '2023' },
    ],
    accentColor: '#E8115B',
    highlight: false,
  },
  {
    id: 'penn-spark',
    category: 'club',
    title: 'Project Lead',
    employer: 'Penn Spark',
    dateRange: 'Jan 2026–Present',
    description: 'Led a cross-functional team building SmartSketch, a real-time AI mindmapping tool, from concept to a 100+ person Demo Day.',
    bullets: [
      { text: 'Led a cross-functional team of 4 developers and 3 designers building SmartSketch, presenting the final product at Penn Spark Demo Day to an audience of 100+ attendees', tags: ['Leadership'], date: '2026' },
      { text: 'Coordinated weekly sprints and team meetings, maintaining alignment across engineering and design while reporting progress in weekly cross-team PL syncs', tags: ['Project Management'], date: '2026' },
    ],
    accentColor: '#F59E0B',
    highlight: false,
  },
  {
    id: 'penn-masala',
    category: 'club',
    title: 'Director of Marketing & Singer',
    employer: "Penn Masala (World's First South Asian A Cappella Group)",
    dateRange: 'Sep 2025–Present',
    description: "Marketing lead and performer for the world's first South Asian a cappella group.",
    bullets: [
      { text: "Member of the world's first South Asian a cappella group with 400K+ followers and content exceeding 10M+ views, with group credits including performances at the White House and the 2024 Paris Olympics", tags: ['Marketing'], date: '2025' },
    ],
    accentColor: '#0EA5E9',
    highlight: false,
  },
  {
    id: 'codebytes',
    category: 'club',
    title: 'Co-Founder & Director',
    employer: 'CodeBytes Youth CS Camp',
    dateRange: '2021–2023',
    description: 'Founded and ran a free summer coding camp for middle schoolers.',
    bullets: [
      { text: 'Launched from zero — recruited 6 instructors and enrolled 40+ students in the first summer', tags: ['Leadership'], date: '2021' },
      { text: 'Designed the full curriculum covering Python, web fundamentals, and computational thinking', tags: ['Curriculum'], date: '2022' },
    ],
    accentColor: '#8D67AB',
    highlight: false,
  },
  {
    id: 'merry-tutor',
    category: 'club',
    title: 'Data Manager',
    employer: 'The Merry Tutor',
    dateRange: '2022–2023',
    description: 'Managed student and tutor records for a nonprofit tutoring organization.',
    bullets: [
      { text: 'Automated monthly reporting with Python scripts, saving ~4 hours of manual work per month', tags: ['Python'], date: '2022' },
      { text: 'Maintained accurate records for 300+ students across two semesters', tags: ['Data'], date: '2023' },
    ],
    accentColor: '#2D46B9',
    highlight: false,
  },
  {
    id: 'power-up',
    category: 'club',
    title: 'Volunteer',
    employer: 'Power Up Project',
    dateRange: '2021–2022',
    description: 'Provided tech support and digital literacy training to underserved communities.',
    bullets: [
      { text: 'Taught basic computer skills to 20+ seniors across 8 weekly sessions', tags: ['Teaching'], date: '2021' },
      { text: 'Helped refurbish and redistribute 15 laptops to low-income families', tags: ['Community'], date: '2022' },
    ],
    accentColor: '#E91429',
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
