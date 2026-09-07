import React, { useState } from 'react';
import {
  Server,
  Database,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  Workflow,
  Sparkles,
  GitBranch,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function JavaArchitectureSection() {
  const [activeTab, setActiveTab] = useState('spring');

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-b border-white/5 relative select-none">
      {/* Background ambient radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/5 via-indigo-500/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-4 bg-orange-500/10 border border-orange-500/20 text-orange-400">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span>SOFTWARE ENGINEERING ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Built Around <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">Java</span>.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          I enjoy understanding how things work beneath the interface — from algorithms and backend architecture to the final interaction a user touches.
        </p>
      </div>

      {/* Main Grid: Architecture Tree (Left) + Engineering Workspace (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* ================================================================= */}
        {/* 1. ARCHITECTURE TREE: JAVA + WEB = FULL STACK (Section 61)        */}
        {/* ================================================================= */}
        <div className="lg:col-span-5 rounded-3xl bg-[#15161C] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Workflow className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                Full-Stack Architecture Map
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
              System Topology
            </span>
          </div>

          {/* Connected Graph Hierarchy */}
          <div className="py-6 space-y-6 flex-1 flex flex-col justify-center">
            {/* Root: Sameer Raj */}
            <div className="flex justify-center">
              <div className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-[#1F222E] border border-white/20 text-white font-mono font-bold text-xs sm:text-sm shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                <span>SAMEER RAJ</span>
              </div>
            </div>

            {/* Split Lines: Vertical connector on mobile, dual fork on sm+ */}
            <div className="relative flex justify-center items-center">
              <div className="hidden sm:block w-1/2 h-4 border-t-2 border-l-2 border-r-2 border-white/20 rounded-t-lg" />
              <div className="sm:hidden w-0.5 h-3 bg-white/20" />
            </div>

            {/* Two Pillars: Stack on mobile (<sm), 2 cols on tablet/desktop (sm+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Pillar 1: Software Engineering */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#1A1C24] border border-orange-500/30 flex flex-col items-center text-center">
                <span className="text-[11px] font-mono font-bold text-orange-400 uppercase tracking-wider mb-2">
                  Software Engineering
                </span>
                <div className="w-full space-y-1.5 pt-1 text-[11px] font-mono">
                  <div className="py-1 px-2 rounded bg-orange-500/10 text-orange-300 border border-orange-500/20 font-semibold">
                    Java 21
                  </div>
                  <div className="py-1 px-2 rounded bg-white/[0.04] text-slate-300 border border-white/5">
                    Spring Boot 3
                  </div>
                  <div className="py-1 px-2 rounded bg-white/[0.04] text-slate-300 border border-white/5">
                    DSA & Algorithms
                  </div>
                  <div className="py-1 px-2 rounded bg-white/[0.04] text-slate-300 border border-white/5">
                    SQL & MySQL
                  </div>
                  <div className="py-1 px-2 rounded bg-white/[0.04] text-slate-300 border border-white/5">
                    REST APIs
                  </div>
                </div>
              </div>

              {/* Pillar 2: Web Development */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#1A1C24] border border-cyan-500/30 flex flex-col items-center text-center">
                <span className="text-[11px] font-mono font-bold text-accent-cyan uppercase tracking-wider mb-2">
                  Web Development
                </span>
                <div className="w-full space-y-1.5 pt-1 text-[11px] font-mono">
                  <div className="py-1 px-2 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                    React & Next.js
                  </div>
                  <div className="py-1 px-2 rounded bg-white/[0.04] text-slate-300 border border-white/5">
                    JavaScript / ES6+
                  </div>
                  <div className="py-1 px-2 rounded bg-white/[0.04] text-slate-300 border border-white/5">
                    Tailwind CSS
                  </div>
                  <div className="py-1 px-2 rounded bg-white/[0.04] text-slate-300 border border-white/5">
                    Three.js & 3D
                  </div>
                  <div className="py-1 px-2 rounded bg-white/[0.04] text-slate-300 border border-white/5">
                    State & Async UI
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Synthesis Line */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-orange-500/10 via-white/[0.03] to-cyan-500/10 border border-white/10 text-center">
              <span className="text-[11px] font-mono text-slate-300 font-medium">
                Robust Backend Logic + Intuitive User Experience
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
            <span>Core Focus: Java & Full Stack</span>
            <span className="text-accent-mint">Verified Architecture</span>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. ENGINEERING WORKSPACE: TABS (SPRING BOOT, DSA, JVM TELEMETRY) */}
        {/* ================================================================= */}
        <div className="lg:col-span-7 rounded-3xl bg-[#13141A] border border-white/10 p-4 sm:p-7 lg:p-8 flex flex-col justify-between shadow-2xl">
          <div>
            {/* Top Workspace Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-white/10">
              {/* Tab Switcher - smooth horizontal scroll on mobile */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar max-w-full pb-1 sm:pb-0">
                <button
                  onClick={() => setActiveTab('spring')}
                  className={`px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-medium transition-all shrink-0 whitespace-nowrap ${
                    activeTab === 'spring'
                      ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40'
                      : 'text-slate-400 hover:text-white bg-white/[0.02]'
                  }`}
                >
                  Spring Boot REST API
                </button>
                <button
                  onClick={() => setActiveTab('dsa')}
                  className={`px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-medium transition-all shrink-0 whitespace-nowrap ${
                    activeTab === 'dsa'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'text-slate-400 hover:text-white bg-white/[0.02]'
                  }`}
                >
                  Java DSA & Collections
                </button>
                <button
                  onClick={() => setActiveTab('jvm')}
                  className={`px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-medium transition-all shrink-0 whitespace-nowrap ${
                    activeTab === 'jvm'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-white bg-white/[0.02]'
                  }`}
                >
                  JVM & Systems
                </button>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-slate-400 shrink-0">
                <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
                <span>JDK 21 • Active</span>
              </div>
            </div>

            {/* Tab Content Display */}
            <div className="py-4 sm:py-5 font-mono text-xs leading-relaxed select-text">
              {activeTab === 'spring' && (
                <div className="space-y-1.5 sm:space-y-2 bg-[#0E0F14] p-3.5 sm:p-5 rounded-2xl border border-white/10 text-slate-300 overflow-x-auto text-[10.5px] sm:text-xs">
                  <div className="text-slate-500">// CodeArena SolutionController.java — Spring Boot 3</div>
                  <div>
                    <span className="text-orange-400">@RestController</span>
                  </div>
                  <div>
                    <span className="text-orange-400">@RequestMapping</span>
                    <span className="text-slate-200">(&quot;/api/v1/solutions&quot;)</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">public class</span>{' '}
                    <span className="text-white font-bold">SolutionController</span> &#123;
                  </div>
                  <div className="pl-3 sm:pl-4 text-slate-400">
                    <span className="text-orange-400">@Autowired</span>
                    <br />
                    <span className="text-cyan-400">private</span> SolutionService solutionService;
                  </div>
                  <div className="pl-3 sm:pl-4 pt-1">
                    <span className="text-orange-400">@PostMapping</span>
                    <span className="text-slate-200">(&quot;/evaluate&quot;)</span>
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-cyan-400">public</span> ResponseEntity&lt;EvaluationResult&gt;{' '}
                    <span className="text-yellow-300">evaluateSolution</span>(
                  </div>
                  <div className="pl-6 sm:pl-8">
                    <span className="text-orange-400">@Valid @RequestBody</span> SubmissionDTO submission
                  </div>
                  <div className="pl-3 sm:pl-4">&#123;</div>
                  <div className="pl-6 sm:pl-8 text-slate-300">
                    EvaluationResult result = solutionService.runSandboxed(submission);
                  </div>
                  <div className="pl-6 sm:pl-8 text-emerald-400">
                    return ResponseEntity.ok(result);
                  </div>
                  <div className="pl-3 sm:pl-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              )}

              {activeTab === 'dsa' && (
                <div className="space-y-1.5 sm:space-y-2 bg-[#0E0F14] p-3.5 sm:p-5 rounded-2xl border border-white/10 text-slate-300 overflow-x-auto text-[10.5px] sm:text-xs">
                  <div className="text-slate-500">// Striver A2Z DSA — DijkstraShortestPath.java</div>
                  <div>
                    <span className="text-cyan-400">public class</span>{' '}
                    <span className="text-white font-bold">DijkstraShortestPath</span> &#123;
                  </div>
                  <div className="pl-3 sm:pl-4 text-slate-400">
                    // Time: O((V + E) log V) | Space: O(V) via Min-Heap PriorityQueue
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-cyan-400">public int</span>[]{' '}
                    <span className="text-yellow-300">dijkstra</span>(
                    <span className="text-cyan-400">int</span> V, List&lt;List&lt;Node&gt;&gt; adj,{' '}
                    <span className="text-cyan-400">int</span> S) &#123;
                  </div>
                  <div className="pl-6 sm:pl-8 text-slate-300">
                    PriorityQueue&lt;Node&gt; pq = <span className="text-cyan-400">new</span>{' '}
                    PriorityQueue&lt;&gt;(Comparator.comparingInt(n -&gt; n.weight));
                  </div>
                  <div className="pl-6 sm:pl-8 text-slate-300">
                    <span className="text-cyan-400">int</span>[] dist = <span className="text-cyan-400">new int</span>[V];
                  </div>
                  <div className="pl-6 sm:pl-8 text-slate-300">
                    Arrays.fill(dist, Integer.MAX_VALUE);
                  </div>
                  <div className="pl-6 sm:pl-8 text-slate-300">dist[S] = 0; pq.add(<span className="text-cyan-400">new</span> Node(S, 0));</div>
                  <div className="pl-6 sm:pl-8 text-purple-400">while (!pq.isEmpty()) &#123;</div>
                  <div className="pl-8 sm:pl-12 text-slate-300">Node curr = pq.poll();</div>
                  <div className="pl-8 sm:pl-12 text-slate-400">// Relax outgoing graph edges with optimal relaxation check</div>
                  <div className="pl-6 sm:pl-8">&#125;</div>
                  <div className="pl-6 sm:pl-8 text-emerald-400">return dist;</div>
                  <div className="pl-3 sm:pl-4">&#125;</div>
                  <div>&#125;</div>
                </div>
              )}

              {activeTab === 'jvm' && (
                <div className="space-y-3 bg-[#0E0F14] p-3.5 sm:p-5 rounded-2xl border border-white/10 text-slate-300 overflow-x-auto text-[10.5px] sm:text-xs">
                  <div className="text-slate-500">// JVM Runtime Environment & Backend Metrics</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                      <span className="text-[10px] text-slate-400 block mb-0.5">JVM Engine</span>
                      <span className="text-white font-bold text-xs sm:text-sm">OpenJDK 21 (LTS) HotSpot 64-Bit</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                      <span className="text-[10px] text-slate-400 block mb-0.5">Garbage Collector</span>
                      <span className="text-emerald-400 font-bold text-xs sm:text-sm">G1GC Low-Latency Tuning</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                      <span className="text-[10px] text-slate-400 block mb-0.5">Concurrency Paradigm</span>
                      <span className="text-cyan-300 font-bold text-xs sm:text-sm">Virtual Threads & ExecutorService</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                      <span className="text-[10px] text-slate-400 block mb-0.5">Connection Pool</span>
                      <span className="text-purple-300 font-bold text-xs sm:text-sm">HikariCP High-Throughput Pool</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-[10px] sm:text-[11px] text-emerald-300 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span>✓ Zero Heap Memory Leak Detected</span>
                    <span>P99 Latency: 18ms</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Live API Request / Response Simulation Banner */}
          <div className="mt-2 p-3 sm:p-4 rounded-2xl bg-[#1A1C24] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 sm:py-1 rounded bg-emerald-500/20 text-emerald-400 text-[11px] sm:text-xs font-mono font-bold border border-emerald-500/30 shrink-0">
                POST
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-slate-200 truncate">
                /api/v1/solutions/evaluate
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono">
              <span className="text-slate-400">Response:</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">
                200 OK (14ms)
              </span>
              <span className="text-slate-400 hidden sm:inline">• 18.4 MB Heap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
