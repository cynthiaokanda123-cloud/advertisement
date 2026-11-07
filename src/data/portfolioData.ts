import {
  Project,
  SkillCategory,
  Technology,
  Service,
  ExperienceItem,
  Testimonial,
  PromotionSlide,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Cynthia Okanda',
  title: 'Software Engineer & Web Designer',
  subtitle: 'Scalable Systems & Emerging Technologies',
  tagline: 'Designing and building scalable digital experiences.',
  shortBio:
    'I build high-throughput distributed backends, clean modern web interfaces, and revenue-generating advertising platforms. With 6+ years of engineering across fintech, cloud infrastructure, and interactive ad-tech, I bridge thoughtful user experience with resilient system architecture.',
  experienceYears: 6,
  projectsCount: 48,
  technologiesCount: 24,
  happyClientsCount: 35,
  availability: 'Available for Q2/Q3 Projects & Select Consulting',
  email: 'cynthia.okanda@engineer.dev',
  phone: '+1 (415) 890-4219',
  location: 'San Francisco, CA & Nairobi (Open to Remote Worldwide)',
  avatar: '/src/assets/images/cynthia_portrait_1794059420787.jpg',
  social: {
    github: 'https://github.com/cynthiaokanda-dev',
    linkedin: 'https://linkedin.com/in/cynthiaokanda',
    twitter: 'https://x.com/cynthiaokanda',
    whatsapp: 'https://wa.me/14158904219?text=Hi%20Cynthia,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project.',
  },
};

export const PROMOTIONAL_SLIDES: PromotionSlide[] = [
  {
    id: 'promo-1',
    eyebrow: 'Featured Service Offering',
    title: 'Custom Captive Portal & WiFi Advertising Platform Development',
    description:
      'Turn guest Wi-Fi and digital signage into high-converting ad revenue with real-time analytics, micro-targeting, and sub-100ms portal load times.',
    ctaText: 'Explore WiFi Reach Case Study',
    ctaAction: 'projects',
    badge: 'High Demand',
    gradient: 'from-blue-600 via-indigo-600 to-pink-500',
  },
  {
    id: 'promo-2',
    eyebrow: 'Architecture Advisory',
    title: 'Scalable Cloud System Audits & Microservices Modernization',
    description:
      'Optimize latency, reduce cloud egress bills by up to 40%, and achieve 99.99% uptime with event-driven architectures and Kubernetes orchestration.',
    ctaText: 'Book Architecture Review',
    ctaAction: 'contact',
    badge: 'Direct Value',
    gradient: 'from-emerald-600 via-teal-600 to-blue-600',
  },
  {
    id: 'promo-3',
    eyebrow: 'Product Engineering',
    title: 'Full-Stack Web Apps with World-Class UI/UX & Tailwind Design Systems',
    description:
      'From zero to production-grade SaaS in weeks. Crisp typography, accessible components, and flawless mobile responsiveness built on React.',
    ctaText: 'View All Services & Pricing',
    ctaAction: 'services',
    badge: 'Turnkey Delivery',
    gradient: 'from-pink-600 via-rose-600 to-blue-600',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    iconName: 'Layout',
    description: 'Performant, accessible, and kinetic client-side applications.',
    skills: [
      { name: 'React 19 & Next.js', level: 96, proficiency: 'Senior / Expert' },
      { name: 'TypeScript & ESNext', level: 94, proficiency: 'Senior / Expert' },
      { name: 'Tailwind CSS & Token Systems', level: 98, proficiency: 'Specialist' },
      { name: 'Motion / Framer Motion & WebGL', level: 88, proficiency: 'Advanced' },
      { name: 'State Management & WebSockets', level: 92, proficiency: 'Senior' },
      { name: 'Web Performance & Core Web Vitals', level: 95, proficiency: 'Specialist' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    iconName: 'Server',
    description: 'Resilient microservices, high-volume APIs, and real-time streams.',
    skills: [
      { name: 'Node.js, Express & Fastify', level: 94, proficiency: 'Senior / Expert' },
      { name: 'Python (FastAPI, AsyncIO)', level: 88, proficiency: 'Advanced' },
      { name: 'RESTful & GraphQL Architectures', level: 92, proficiency: 'Senior' },
      { name: 'PostgreSQL, Drizzle & Prisma', level: 90, proficiency: 'Senior' },
      { name: 'Redis Caching & Pub/Sub', level: 87, proficiency: 'Advanced' },
      { name: 'Authentication (OAuth 2.0, JWT)', level: 93, proficiency: 'Senior' },
    ],
  },
  {
    id: 'systems',
    name: 'Systems & Architecture',
    iconName: 'Cpu',
    description: 'High-availability topologies designed for elasticity and scale.',
    skills: [
      { name: 'Distributed Systems & Microservices', level: 92, proficiency: 'Senior' },
      { name: 'Event-Driven Systems (Kafka / RabbitMQ)', level: 85, proficiency: 'Advanced' },
      { name: 'Ad-Tech & Captive Portal Pipelines', level: 96, proficiency: 'Domain Specialist' },
      { name: 'Database Sharding & Data Modeling', level: 88, proficiency: 'Advanced' },
      { name: 'High-Throughput Concurrency', level: 90, proficiency: 'Senior' },
      { name: 'Fault Tolerance & Disaster Recovery', level: 86, proficiency: 'Advanced' },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    iconName: 'Cloud',
    description: 'CI/CD automation, cloud orchestration, and containerized deployments.',
    skills: [
      { name: 'Google Cloud Platform (GCP)', level: 92, proficiency: 'Professional' },
      { name: 'Docker & Containerization', level: 94, proficiency: 'Senior' },
      { name: 'Kubernetes (GKE/EKS Basics)', level: 82, proficiency: 'Proficient' },
      { name: 'CI/CD Pipelines (GitHub Actions)', level: 90, proficiency: 'Senior' },
      { name: 'Firebase & Supabase Ecosystems', level: 95, proficiency: 'Specialist' },
      { name: 'Observability (Prometheus, Grafana)', level: 84, proficiency: 'Proficient' },
    ],
  },
  {
    id: 'design',
    name: 'UI/UX & Design Systems',
    iconName: 'Palette',
    description: 'Human-centered user journeys, design systems, and rapid prototyping.',
    skills: [
      { name: 'Figma & Interactive Prototyping', level: 95, proficiency: 'Specialist' },
      { name: 'Multi-Brand Design Tokens', level: 92, proficiency: 'Senior' },
      { name: 'WCAG AA/AAA Accessibility', level: 94, proficiency: 'Specialist' },
      { name: 'Information Architecture & Wireframing', level: 90, proficiency: 'Senior' },
      { name: 'Responsive Layouts & Spatial Math', level: 98, proficiency: 'Master' },
      { name: 'User Testing & Conversion Flow', level: 88, proficiency: 'Advanced' },
    ],
  },
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'React 19', category: 'Frontend', icon: 'Atom', level: 'Expert', highlight: 'Hooks, Suspense, Concurrent Mode', color: '#2563EB' },
  { name: 'TypeScript', category: 'Frontend', icon: 'Code2', level: 'Expert', highlight: 'Strict typing & generic meta-programming', color: '#3178C6' },
  { name: 'Next.js', category: 'Frontend', icon: 'Globe', level: 'Senior', highlight: 'App Router, SSR, Edge Middleware', color: '#000000' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'Paintbrush', level: 'Master', highlight: 'v4 architecture, design tokens', color: '#38BDF8' },
  { name: 'Node.js', category: 'Backend', icon: 'Server', level: 'Expert', highlight: 'Async I/O, Streams, Microservices', color: '#10B981' },
  { name: 'Python', category: 'Backend', icon: 'Binary', level: 'Advanced', highlight: 'FastAPI, Data Pipelines, AsyncIO', color: '#3776AB' },
  { name: 'PostgreSQL', category: 'Cloud & Systems', icon: 'Database', level: 'Senior', highlight: 'Query optimization, indexing, Drizzle', color: '#336791' },
  { name: 'Redis', category: 'Cloud & Systems', icon: 'Zap', level: 'Senior', highlight: 'Sub-millisecond caching & rate limiters', color: '#DC2626' },
  { name: 'Docker', category: 'Cloud & Systems', icon: 'Box', level: 'Senior', highlight: 'Multi-stage builds, compose clusters', color: '#2496ED' },
  { name: 'Google Cloud', category: 'Cloud & Systems', icon: 'Cloud', level: 'Senior', highlight: 'Cloud Run, GKE, Cloud Functions', color: '#4285F4' },
  { name: 'Firebase', category: 'Cloud & Systems', icon: 'Flame', level: 'Expert', highlight: 'Firestore, Auth, Cloud Storage', color: '#FFCA28' },
  { name: 'GraphQL', category: 'Backend', icon: 'Network', level: 'Advanced', highlight: 'Schema stitching, Apollo federation', color: '#E535AB' },
  { name: 'WebSockets', category: 'Backend', icon: 'Radio', level: 'Senior', highlight: 'Real-time telemetry and push ads', color: '#10B981' },
  { name: 'Figma', category: 'Design & Tooling', icon: 'Figma', level: 'Master', highlight: 'Component variants, auto layout 5.0', color: '#F24E1E' },
  { name: 'Git & GitHub', category: 'Design & Tooling', icon: 'GitBranch', level: 'Expert', highlight: 'CI/CD workflows, trunk-based delivery', color: '#F05032' },
  { name: 'REST APIs', category: 'Backend', icon: 'Workflow', level: 'Master', highlight: 'OpenAPI 3.1, idempotency keys', color: '#2563EB' },
  { name: 'Kafka', category: 'Cloud & Systems', icon: 'Layers', level: 'Proficient', highlight: 'Event streaming & topic partitioning', color: '#231F20' },
  { name: 'MongoDB', category: 'Cloud & Systems', icon: 'DatabaseZap', level: 'Senior', highlight: 'Document aggregation & replica sets', color: '#47A248' },
];

export const PROJECTS: Project[] = [
  {
    id: 'wifi-reach-ad-platform',
    title: 'WiFi Reach Advertising Platform',
    tagline: 'Hyperlocal captive portal ad-tech platform with real-time analytics',
    category: 'Systems',
    description:
      'A high-throughput captive portal advertising engine deployed across transit hubs, shopping malls, and hospitality chains. Serves interactive video & banner ads before granting internet access.',
    fullDescription:
      'WiFi Reach transforms venue guest Wi-Fi networks into high-margin ad monetization channels. It features a microsecond routing proxy that serves targeted interactive ads, measures dwell time and click-through rates, and syncs impressions into a multi-tenant venue analytics dashboard.',
    techStack: ['Node.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redis', 'PostgreSQL', 'Docker'],
    image: '/src/assets/images/project_wifireach_1794059421126.jpg',
    liveUrl: 'https://wifireach-demo.dev',
    githubUrl: 'https://github.com/cynthiaokanda-dev/wifi-reach-platform',
    metrics: [
      { label: 'Active Monthly Venues', value: '140+' },
      { label: 'Peak Daily Ad Impressions', value: '2.4M' },
      { label: 'Sub-portal Latency', value: '<65ms' },
      { label: 'Average CTR Uplift', value: '+34%' },
    ],
    features: [
      'Zero-lag captive portal gateway compatible with Mikrotik, Cisco Meraki, and UniFi hardware',
      'Dynamic ad auctioneer with demographic and time-of-day geo-targeting',
      'Real-time venue foot-traffic analytics and impression verification engine',
      'Self-service advertiser portal with budget caps, coupon distribution, and Stripe billing',
    ],
    deliverables: ['Captive Portal Core', 'Venue Analytics Dashboard', 'Advertiser Campaign Portal'],
    clientOrContext: 'Commercial Ad-Tech Product',
    year: '2025 – Present',
  },
  {
    id: 'nexus-cloud-observability',
    title: 'Nexus Cloud Engine & Observability',
    tagline: 'Distributed microservices mesh console with real-time throughput telemetry',
    category: 'Systems',
    description:
      'An enterprise cloud control plane giving engineering teams topological observability, live node traffic streams, and automated autoscaling triggers across hybrid clusters.',
    fullDescription:
      'Nexus solves the blind-spot problem in microservice architectures. Built with lightweight eBPF probes and a custom time-series aggregation pipeline, it streams sub-second node health, latency anomalies, and distributed traces to a sleek dark-mode operator console.',
    techStack: ['Go', 'TypeScript', 'React', 'Tailwind CSS', 'gRPC', 'Prometheus', 'GCP'],
    image: '/src/assets/images/project_nexuscloud_1794059422044.jpg',
    liveUrl: 'https://nexus-systems.dev',
    githubUrl: 'https://github.com/cynthiaokanda-dev/nexus-observability',
    metrics: [
      { label: 'Nodes Monitored', value: '10,000+' },
      { label: 'Data Ingestion Rate', value: '450k eps' },
      { label: 'MTTD Reduction', value: '-58%' },
      { label: 'Cluster Efficiency', value: '+22%' },
    ],
    features: [
      'Interactive 3D cluster topology map rendered with hardware acceleration',
      'Real-time anomaly detection with automated rollback webhooks',
      'Distributed transaction tracing across polyglot microservices',
      'Customizable incident runbooks and automated PagerDuty escalation',
    ],
    deliverables: ['Telemetry Agent', 'High-speed Ingestion Engine', 'Console UI'],
    clientOrContext: 'Enterprise Cloud Infrastructure',
    year: '2024',
  },
  {
    id: 'prism-design-system',
    title: 'Prism Multi-Brand Design System',
    tagline: 'Enterprise UI library, token engine, and cross-platform component architecture',
    category: 'Design',
    description:
      'A comprehensive, tokenized design system crafted in Figma and implemented in React/Tailwind. Powers 12 cross-functional consumer and enterprise products.',
    fullDescription:
      'Prism standardizes visual identity, motion physics, and accessibility across all company touchpoints. Featuring dual-mode light/dark semantics, mathematical typography scales, and rigorous WCAG AAA compliance, Prism reduced engineering front-end delivery times by over 50%.',
    techStack: ['Figma', 'React', 'Tailwind CSS', 'Storybook', 'TypeScript', 'Tokens Studio'],
    image: '/src/assets/images/project_prismdesign_1794059422395.jpg',
    liveUrl: 'https://prism-design.dev',
    githubUrl: 'https://github.com/cynthiaokanda-dev/prism-design-tokens',
    metrics: [
      { label: 'Shipped Components', value: '70+' },
      { label: 'Products Standardized', value: '12' },
      { label: 'Accessibility Score', value: '100%' },
      { label: 'Dev Time Saved', value: '52%' },
    ],
    features: [
      'Dynamic color token generator supporting arbitrary brand theme overrides',
      'Strict 8px spatial grid with pre-calculated container-to-child mathematics',
      'Compound keyboard-navigable components compliant with WAI-ARIA standards',
      'Automated Figma-to-Code token pipeline syncing JSON via GitHub Actions',
    ],
    deliverables: ['Figma Master UI Kit', 'React Component Library', 'Interactive Docs'],
    clientOrContext: 'Multi-Product Tech Consortium',
    year: '2024',
  },
  {
    id: 'finpulse-trading-platform',
    title: 'FinPulse AI Wealth & Algorithmic Banking',
    tagline: 'High-frequency algorithmic financial console with real-time portfolio streams',
    category: 'Web',
    description:
      'An institutional-grade wealth management web application featuring interactive candlestick charts, WebSocket-driven order books, and risk simulation tools.',
    fullDescription:
      'FinPulse was developed for modern retail investors and quantitative portfolio managers. It marries extreme data density with effortless readability, streaming real-time market data across thousands of assets without rendering bottlenecks or layout shifts.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Chart.js', 'FastAPI'],
    image: '/src/assets/images/project_wifireach_1794059421126.jpg', // Using high quality dashboard preview
    liveUrl: 'https://finpulse-platform.dev',
    githubUrl: 'https://github.com/cynthiaokanda-dev/finpulse-banking',
    metrics: [
      { label: 'Active Portfolios', value: '$28M+' },
      { label: 'Tick Latency', value: '<12ms' },
      { label: 'Daily Trading Volume', value: '$4.2M' },
      { label: 'Lighthouse Score', value: '99/100' },
    ],
    features: [
      'Sub-millisecond WebSocket data feed streaming order book depth',
      'Interactive risk modeling calculator with Monte Carlo simulation algorithms',
      'Multi-currency automated settlement and Stripe Treasury integration',
      'Exportable tax-compliant ledger statements in PDF and CSV format',
    ],
    deliverables: ['Web Trading Interface', 'Real-time WebSocket Gateway', 'Client Reporting Suite'],
    clientOrContext: 'Fintech Startup Incubator',
    year: '2023 – 2024',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'service-web',
    title: 'Full-Stack Web Development',
    tagline: 'Production-ready web applications built for speed, scale, and longevity.',
    icon: 'Code',
    description:
      'End-to-end development of modern web applications using React, TypeScript, Node.js, and Tailwind CSS. Clean component architectures, responsive layouts, and zero-compromise performance.',
    deliverables: [
      'Complete frontend & backend implementation',
      'Responsive design across mobile, tablet, and desktop',
      'SEO optimization & Core Web Vitals 95+ score',
      'Automated CI/CD deployment on GCP or Vercel',
    ],
    turnaround: '2 – 5 Weeks',
    startingPrice: '$4,500',
    badge: 'Popular',
  },
  {
    id: 'service-adtech',
    title: 'Advertising Platform Development',
    tagline: 'Monetize digital real estate with custom ad engines and captive portals.',
    icon: 'Radio',
    description:
      'Architecture and delivery of captive portal systems, digital signage ad managers, and impression-tracking ad-tech solutions with real-time analytics and geo-targeted campaign distribution.',
    deliverables: [
      'Captive portal gateway compatible with networking hardware',
      'Advertiser bidding & campaign management portal',
      'Sub-millisecond impression tracking & anti-fraud verification',
      'Multi-tenant venue analytics dashboard',
    ],
    turnaround: '3 – 6 Weeks',
    startingPrice: '$6,000',
    badge: 'Specialty',
  },
  {
    id: 'service-systems',
    title: 'Scalable System Architecture',
    tagline: 'Fault-tolerant distributed backends designed for millions of requests.',
    icon: 'Cpu',
    description:
      'Architectural planning, microservice decomposition, and cloud infrastructure optimization. Turn brittle monolithic apps into resilient, elastic, and highly observable systems.',
    deliverables: [
      'System topology diagrams & data flow architecture',
      'Database schema optimization & indexing strategies',
      'Caching layers (Redis) & asynchronous task queues',
      'High-availability cloud setup with automated failover',
    ],
    turnaround: '2 – 4 Weeks',
    startingPrice: '$5,000',
  },
  {
    id: 'service-design',
    title: 'UI/UX & Design Systems',
    tagline: 'Intuitive user journeys and multi-brand tokenized component libraries.',
    icon: 'Palette',
    description:
      'Human-first UI design from user flow wireframing to pixel-perfect Figma design systems and production-ready React component libraries with dark mode semantics.',
    deliverables: [
      'Figma master design system with tokens & components',
      'Interactive wireframes and clickable prototypes',
      'WCAG AA accessibility validation & contrast audits',
      'Design handoff specifications & developer tokens',
    ],
    turnaround: '2 – 3 Weeks',
    startingPrice: '$3,800',
  },
  {
    id: 'service-consulting',
    title: 'Technical Consulting & Code Audits',
    tagline: 'Strategic advisory for technical leaders, founders, and growing teams.',
    icon: 'Sparkles',
    description:
      'Deep-dive codebase reviews, architecture teardowns, cloud cost reduction audits, and technology roadmap consulting to help your engineering team move with certainty.',
    deliverables: [
      'Comprehensive codebase health & security audit',
      'Performance profiling report with prioritized action items',
      'Cloud spend analysis with guaranteed cost-saving paths',
      '1-on-1 architecture advisory sessions with leadership',
    ],
    turnaround: '3 – 7 Days',
    startingPrice: '$2,200',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2023 – Present',
    role: 'Lead Systems & Product Engineer',
    organization: 'Apex Digital Infrastructure',
    location: 'San Francisco, CA (Remote)',
    type: 'work',
    description:
      'Leading the architecture and front-end modernization of distributed ad-tech and captive portal engines serving millions of network users across commercial venues.',
    achievements: [
      'Architected the WiFi Reach core routing gateway, scaling from 20 to 140+ active commercial transit and retail venues',
      'Reduced average portal load latency by 45% (from 120ms to 65ms) through Redis edge caching and bundle minification',
      'Mentored 6 engineers across full-stack TypeScript, microservice patterns, and Tailwind design token systems',
    ],
    skillsUsed: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'GCP'],
  },
  {
    id: 'exp-2',
    period: '2021 – 2023',
    role: 'Senior Full-Stack Engineer & Designer',
    organization: 'Vanguard Systems Lab',
    location: 'Nairobi & London',
    type: 'work',
    description:
      'Spearheaded web application engineering for high-growth fintech and enterprise observability clients, bridging UI design in Figma with robust cloud deployments.',
    achievements: [
      'Created and maintained the Prism Design System adopted across 12 cross-functional product squads',
      'Engineered an algorithmic trading dashboard handling 5,000+ simultaneous WebSocket streams without UI lag',
      'Received the 2022 Excellence in Engineering Innovation award for cloud infrastructure cost reductions',
    ],
    skillsUsed: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'Python', 'WebSockets', 'Prometheus'],
  },
  {
    id: 'exp-3',
    period: '2019 – 2021',
    role: 'Software Engineer',
    organization: 'Horizon Tech Solutions',
    location: 'Nairobi, Kenya',
    type: 'work',
    description:
      'Developed responsive web portals, internal management tooling, and RESTful APIs for regional telecom and retail enterprises.',
    achievements: [
      'Rebuilt legacy jQuery customer care portals into modern single-page React applications, increasing CSAT by 38%',
      'Implemented automated CI/CD deployment pipelines using GitHub Actions, reducing release cycle from 3 days to 25 minutes',
    ],
    skillsUsed: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'CSS3', 'Git'],
  },
  {
    id: 'exp-edu-1',
    period: '2015 – 2019',
    role: 'B.Sc. in Computer Science (First Class Honours)',
    organization: 'University of Nairobi',
    location: 'Nairobi, Kenya',
    type: 'education',
    description:
      'Specialized in Distributed Computing, Data Structures & Algorithms, Network Systems, and Human-Computer Interaction.',
    achievements: [
      'Graduated with First Class Honours in Computer Science',
      'Winner of the National Inter-University Software Innovation Hackathon (2018)',
      'President of the Women in Tech & Developer Student Club chapter',
    ],
    skillsUsed: ['Algorithms', 'Distributed Systems', 'Computer Networks', 'HCI', 'C++', 'Java'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'VP of Technology',
    company: 'Metropolis Transit Networks',
    avatar: 'MV',
    quote:
      'Cynthia delivered our WiFi captive portal advertising engine ahead of schedule. Her understanding of both low-latency backend routing and intuitive sponsor dashboards is unparalleled. Ad revenue rose 42% in our first quarter.',
    projectContext: 'WiFi Reach Captive Portal Deployment',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'Head of Product Design',
    company: 'Strata Cloud Solutions',
    avatar: 'ER',
    quote:
      'Working with Cynthia is a dream because she doesn’t just design beautiful interfaces in Figma—she writes the pristine, high-performance React code that powers them. She elevated our entire design system to enterprise grade.',
    projectContext: 'Prism Multi-Brand Design System',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'David Kamau',
    role: 'Founder & CEO',
    company: 'FinPulse Wealth Global',
    avatar: 'DK',
    quote:
      'Our trading dashboard required streaming thousands of WebSocket updates per second with zero UI freezing. Cynthia engineered a solution that looks stunning and performs like a native C++ client. Outstanding talent.',
    projectContext: 'FinPulse Trading Interface',
    rating: 5,
  },
];

export const MARQUEE_LOGOS = [
  { name: 'React', label: 'React 19' },
  { name: 'TypeScript', label: 'TypeScript' },
  { name: 'Next.js', label: 'Next.js' },
  { name: 'Tailwind CSS', label: 'Tailwind CSS v4' },
  { name: 'Node.js', label: 'Node.js' },
  { name: 'Python', label: 'Python 3' },
  { name: 'Docker', label: 'Docker' },
  { name: 'Google Cloud', label: 'Google Cloud' },
  { name: 'Firebase', label: 'Firebase' },
  { name: 'PostgreSQL', label: 'PostgreSQL' },
  { name: 'Redis', label: 'Redis' },
  { name: 'Figma', label: 'Figma' },
  { name: 'WebSockets', label: 'WebSockets' },
  { name: 'GraphQL', label: 'GraphQL' },
];
