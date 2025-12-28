
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Github,
    Linkedin,
    Play,
    Code2,
    Box,
    Database,
    Sparkles,
    Layers,
    Zap,
    Shield,
    Radio,
    Server,
    CheckCircle2,
    Truck,
    CreditCard,
    Activity,
    Package,
    Fingerprint,
    MapPin,
    Camera,
    Languages
} from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';
import { cn } from './lib/utils';

function App() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
            {/* Hero Section */}
            <HeroSection opacity={opacity} />

            {/* Demo Section */}
            <DemoSection />

            {/* Metrics Section */}
            <MetricsSection />

            {/* Architecture Section */}
            <ArchitectureSection />

            {/* Key Features Section */}
            <KeyFeaturesSection />

            {/* Under the Hood Section */}
            <UnderTheHoodSection />

            {/* Tech Stack Section */}
            <TechStackSection />

            {/* Footer */}
            <Footer />
        </div>
    );
}

// Hero Section Component
function HeroSection({ opacity }: { opacity: any }) {
    return (
        <motion.section
            style={{ opacity }}
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
        >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-cyan-900/20 animate-gradient" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Radial Gradient Orbs */}
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-slate-300">Engineering Showcase</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-100 via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                        Puente Platform
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 mb-4 max-w-3xl mx-auto leading-relaxed">
                        Bridging the Digital Gap in LatAm's Informal Economy
                    </p>

                    <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
                        A High-Performance Microservices Architecture. Offline-First. Polyglot Persistence. Built with NestJS & Docker.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            onClick={() => {
                                document.getElementById('demo')?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative flex items-center gap-2">
                                <Play className="w-5 h-5" />
                                Watch System Demo
                            </div>
                        </motion.button>

                        <motion.a
                            href="https://github.com/mikaelpizzi/puente-platform"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-lg border border-slate-700 hover:border-slate-600 bg-slate-900/50 backdrop-blur-sm text-slate-200 font-semibold transition-colors flex items-center gap-2"
                        >
                            <Code2 className="w-5 h-5" />
                            View Source Code
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-slate-400 rounded-full" />
                </div>
            </motion.div>
        </motion.section>
    );
}

// Demo Section Component
function DemoSection() {
    return (
        <section id="demo" className="py-32 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        System Demonstration
                    </h2>
                    <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                        End-to-end flow running in a local Dockerized environment
                    </p>

                    {/* Mac-style Window */}
                    <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-blue-900/20">
                        {/* Window Header */}
                        <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex-1 text-center text-sm text-slate-400">
                                Puente Platform Demo
                            </div>
                        </div>

                        {/* YouTube Video Embed */}
                        <div className="aspect-video bg-slate-950">
                            <iframe
                                src="https://www.youtube.com/embed/EqynMRPtsZo"
                                className="w-full h-full"
                                title="Puente Platform Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <p className="text-slate-500 text-center mt-6 italic">
                        Due to cloud infrastructure costs, this system is showcased in a local Dockerized environment.
                        Watch the full end-to-end flow including OSRM offline routing and async notifications.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// Metrics Section Component
function MetricsSection() {
    const metrics = [
        { value: '70+', label: 'Engineering Tasks Completed', icon: <CheckCircle2 className="w-6 h-6" /> },
        { value: '4', label: 'Independent Microservices', icon: <Server className="w-6 h-6" /> },
        { value: '3', label: 'Database Technologies', icon: <Database className="w-6 h-6" /> },
        { value: '6+', label: 'Docker Containers', icon: <Box className="w-6 h-6" /> },
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-6 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 text-center group hover:border-blue-800/50 transition-colors"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative">
                                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center text-blue-400">
                                    {metric.icon}
                                </div>
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-sm text-slate-400 leading-tight">
                                    {metric.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// Architecture Section Component
function ArchitectureSection() {
    return (
        <section className="py-32 px-6 bg-slate-950/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        System Architecture
                    </h2>
                    <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                        A modular microservices architecture with polyglot persistence
                    </p>

                    {/* Architecture Diagram - Full Width */}
                    <motion.div 
                        className="mb-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:p-8 overflow-hidden"
                        whileHover={{ borderColor: 'rgba(139, 92, 246, 0.3)' }}
                        transition={{ duration: 0.3 }}
                    >
                        <img 
                            src="/architecture.svg" 
                            alt="Puente Platform System Architecture - Microservices with API Gateway, Auth, Products, Finance, and Logistics services connected to PostgreSQL, MongoDB, and Redis databases"
                            className="w-full h-auto max-w-5xl mx-auto"
                        />
                    </motion.div>

                    {/* Feature Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard
                            icon={<Layers className="w-6 h-6" />}
                            title="Microservices"
                            description="6 independent NestJS services with strict dependency injection and clean architecture."
                        />

                        <FeatureCard
                            icon={<Shield className="w-6 h-6" />}
                            title="OSRM Fallback"
                            description="100% routing uptime with Haversine fallback when OSRM server is unavailable."
                        />

                        <FeatureCard
                            icon={<Radio className="w-6 h-6" />}
                            title="Real-time Updates"
                            description="WebSockets + Redis Pub/Sub for live order tracking and instant notifications."
                        />

                        <FeatureCard
                            icon={<Database className="w-6 h-6" />}
                            title="Polyglot Persistence"
                            description="PostgreSQL, MongoDB, and Redis - the right database for each use case."
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-blue-800/50 transition-all"
        >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center text-blue-400 mb-3">
                {icon}
            </div>
            <h3 className="text-lg font-semibold mb-1 text-slate-200">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
        </motion.div>
    );
}

// Key Features Section - Showcase of Implemented Features
function KeyFeaturesSection() {
    const features = [
        {
            icon: <Fingerprint className="w-5 h-5" />,
            title: 'JWT Authentication',
            description: 'Secure authentication with access & refresh tokens, automatic token refresh, and role-based access control.',
            color: 'from-blue-600 to-indigo-600'
        },
        {
            icon: <Truck className="w-5 h-5" />,
            title: 'Real-time Courier Tracking',
            description: 'Live GPS tracking via WebSockets with Redis GEO commands for efficient geo-spatial queries.',
            color: 'from-cyan-600 to-blue-600'
        },
        {
            icon: <Camera className="w-5 h-5" />,
            title: 'Proof of Delivery',
            description: 'Signature capture and photo upload to Cloudinary for delivery verification.',
            color: 'from-emerald-600 to-green-600'
        },
        {
            icon: <CreditCard className="w-5 h-5" />,
            title: 'P2P Crypto Rates',
            description: 'Real-time USDT rates from Binance P2P and CoinGecko for LatAm markets.',
            color: 'from-orange-600 to-amber-600'
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: 'Self-Hosted OSRM',
            description: 'Offline routing with Venezuela OSM data, Haversine fallback for 100% uptime.',
            color: 'from-red-600 to-pink-600'
        },
        {
            icon: <Activity className="w-5 h-5" />,
            title: 'OpenTelemetry',
            description: 'Distributed tracing and observability across all microservices.',
            color: 'from-indigo-600 to-blue-600'
        },
        {
            icon: <Package className="w-5 h-5" />,
            title: 'Split Orders',
            description: 'Multi-seller cart with automatic order splitting per vendor.',
            color: 'from-pink-600 to-rose-600'
        },
        {
            icon: <Languages className="w-5 h-5" />,
            title: 'Internationalization',
            description: 'Full i18n support for Spanish and English with react-i18next.',
            color: 'from-teal-600 to-cyan-600'
        }
    ];

    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        Key Features
                    </h2>
                    <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                        Production-ready features built with best practices
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="group relative p-5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm hover:border-slate-700 transition-all overflow-hidden"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity",
                                    feature.color
                                )} />
                                
                                <div className="relative">
                                    <div className={cn(
                                        "w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center text-white mb-3",
                                        feature.color
                                    )}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-200 mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Code example for syntax highlighting
const codeExample = `async getRoute(origin: Coordinates, destination: Coordinates): Promise<Route> {
  try {
    // Primary: OSRM routing server
    const route = await this.osrmClient.route({
      coordinates: [origin, destination],
      overview: 'full'
    });
    
    this.logger.log('OSRM route calculated successfully');
    return this.parseOSRMResponse(route);
    
  } catch (error) {
    // Fallback: Haversine distance calculation
    this.logger.warn('OSRM unavailable. Falling back to Haversine.');
    
    const distance = this.calculateHaversine(origin, destination);
    const estimatedTime = distance / AVERAGE_SPEED_KMH;
    
    return {
      distance,
      duration: estimatedTime,
      geometry: this.createStraightLine(origin, destination),
      fallback: true
    };
  }
}`;

// Under the Hood Section
function UnderTheHoodSection() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        Under the Hood
                    </h2>
                    <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                        Defensive programming at its finest
                    </p>

                    {/* Code Window */}
                    <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
                        {/* VS Code Header */}
                        <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Code2 className="w-4 h-4 text-slate-500" />
                                    <span className="text-slate-400">osrm-fallback.service.ts</span>
                                </div>
                            </div>
                        </div>

                        {/* Code Block with Syntax Highlighting */}
                        <Highlight
                            theme={themes.nightOwl}
                            code={codeExample}
                            language="typescript"
                        >
                            {({ style, tokens, getLineProps, getTokenProps }) => (
                                <pre 
                                    className="p-4 md:p-6 overflow-x-auto text-xs md:text-sm leading-relaxed"
                                    style={{ ...style, background: 'transparent' }}
                                >
                                    {tokens.map((line, i) => (
                                        <div key={i} {...getLineProps({ line })}>
                                            <span className="inline-block w-8 md:w-10 text-slate-600 select-none text-right pr-4">
                                                {i + 1}
                                            </span>
                                            {line.map((token, key) => (
                                                <span key={key} {...getTokenProps({ token })} />
                                            ))}
                                        </div>
                                    ))}
                                </pre>
                            )}
                        </Highlight>
                    </div>

                    <div className="mt-8 p-6 rounded-lg border border-blue-900/50 bg-blue-950/20">
                        <div className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                                    Ensuring 100% Uptime for Routing
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    This fallback strategy guarantees that users always receive routing information, even when the OSRM server is offline.
                                    The system gracefully degrades to geometric distance calculation, maintaining service continuity.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Tech Stack Section
function TechStackSection() {
    const techStack = [
        {
            name: 'NestJS',
            icon: <Server className="w-8 h-8" />,
            description: 'For strict modular architecture',
            color: 'from-red-600 to-pink-600'
        },
        {
            name: 'Docker',
            icon: <Box className="w-8 h-8" />,
            description: 'Orchestrating 6+ microservices',
            color: 'from-blue-600 to-cyan-600'
        },
        {
            name: 'Redis',
            icon: <Database className="w-8 h-8" />,
            description: 'Geo-spatial tracking & Pub/Sub',
            color: 'from-red-600 to-orange-600'
        },
        {
            name: 'PostgreSQL',
            icon: <Database className="w-8 h-8" />,
            description: 'ACID compliance in Finance',
            color: 'from-blue-600 to-indigo-600'
        },
        {
            name: 'MongoDB',
            icon: <Database className="w-8 h-8" />,
            description: 'Flexible product catalogs',
            color: 'from-green-600 to-emerald-600'
        },
        {
            name: 'React + Vite',
            icon: <Sparkles className="w-8 h-8" />,
            description: 'High-performance PWA',
            color: 'from-cyan-600 to-blue-600'
        }
    ];

    return (
        <section className="py-32 px-6 bg-slate-950/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        Tech Stack
                    </h2>
                    <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                        Modern technologies chosen for performance, scalability, and developer experience
                    </p>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-6 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-blue-700/50 hover:bg-slate-900/80 transition-all duration-300"
                            >
                                <div className={cn(
                                    "w-14 h-14 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110",
                                    tech.color
                                )}>
                                    {tech.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-slate-200">{tech.name}</h3>
                                <p className="text-slate-400">{tech.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <p className="text-slate-400">
                            Built by{' '}
                            <span className="text-slate-200 font-semibold">Mikael Pizzi</span>
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                            Full Stack Software Engineer
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <motion.a
                            href="https://github.com/mikaelpizzi"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="w-12 h-12 rounded-lg border border-slate-800 bg-slate-900 flex items-center justify-center hover:border-slate-700 transition-colors"
                        >
                            <Github className="w-5 h-5 text-slate-400" />
                        </motion.a>

                        <motion.a
                            href="https://linkedin.com/in/mikaelpizzi"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="w-12 h-12 rounded-lg border border-slate-800 bg-slate-900 flex items-center justify-center hover:border-slate-700 transition-colors"
                        >
                            <Linkedin className="w-5 h-5 text-slate-400" />
                        </motion.a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Puente Platform. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default App;
