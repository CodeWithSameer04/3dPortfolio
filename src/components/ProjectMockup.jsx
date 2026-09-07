import React from 'react';
import {
  CheckCircle2,
  Circle,
  Clock,
  ExternalLink,
  Terminal,
  FileText,
  Database,
  Sparkles,
  Smartphone,
  Bell,
  Play,
  Flame,
  ShieldCheck,
  Search,
  Share2,
  FolderGit2,
  Cpu,
  Layers,
  Code2,
  ListTodo,
  FileSignature,
  Activity,
  Send,
  Sliders,
  Check,
  Zap,
} from 'lucide-react';

/**
 * ProjectMockup
 * Pure React/Tailwind visual UI mockups for each project.
 * Supports 3 view modes: 'ui' (Main App Interface), 'code' (Source Code), 'telemetry' (System Telemetry / Mobile)
 */
export default function ProjectMockup({ project, viewMode = 'ui' }) {
  const slug = project.slug;

  if (viewMode === 'code') {
    return <CodeSnippetView project={project} />;
  }

  if (viewMode === 'telemetry') {
    return <TelemetryView project={project} />;
  }

  // Default 'ui' view
  switch (slug) {
    case 'striver-dsa-java':
      return <StriverDSAMockup project={project} />;
    case 'task-manager':
      return <TaskManagerMockup project={project} />;
    case 'research-paper-finder':
      return <ResearchPaperMockup project={project} />;
    case 'scholars-iq':
      return <ScholarIQMockup project={project} />;
    case 'code-arena':
      return <CodeArenaMockup project={project} />;
    case 'anime-tracker':
      return <AnimeTrackerMockup project={project} />;
    case 'no-cancel-policy':
      return <NoCancelPolicyMockup project={project} />;
    case 'auto-file-organizer':
      return <AutoFileOrganizerMockup project={project} />;
    default:
      return <TaskManagerMockup project={project} />;
  }
}

// --------------------------------------------------------------------------
// 1. TASK MANAGER MOCKUP (Matching Reference Image)
// --------------------------------------------------------------------------
function TaskManagerMockup() {
  return (
    <div className="w-full h-full bg-[#111218] rounded-xl border border-white/15 p-4 flex flex-col justify-between shadow-2xl font-sans text-white text-xs select-none">
      {/* Top App Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-[10px] font-bold">
            ✓
          </div>
          <span className="font-semibold tracking-wide text-slate-100">TaskManager</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-[9px] font-bold">
            SR
          </div>
        </div>
      </div>

      {/* Main App Grid: Sidebar + Task Board */}
      <div className="grid grid-cols-12 gap-3 flex-1 pt-3">
        {/* Sidebar */}
        <div className="col-span-3 border-r border-white/5 pr-2 flex flex-col justify-between py-1 text-[11px] text-slate-400">
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 font-medium border border-indigo-500/30">
              <ListTodo className="w-3.5 h-3.5" />
              <span>Home</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Today</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 text-slate-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Upcoming</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Done</span>
            </div>
          </div>
          <div className="pt-2 border-t border-white/5 text-[10px] text-slate-500 px-1">
            v2.4 Active
          </div>
        </div>

        {/* Content Area */}
        <div className="col-span-9 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-bold text-sm text-slate-100">My Tasks</h4>
                <p className="text-[10px] text-slate-400">Stay organized, get things done.</p>
              </div>
            </div>

            {/* Input Bar */}
            <div className="flex items-center gap-2 bg-[#181922] p-1.5 rounded-lg border border-white/10 mb-3">
              <input
                type="text"
                readOnly
                value="Build the 3D portfolio experience..."
                className="bg-transparent border-none text-[11px] text-slate-300 flex-1 px-1 outline-none"
              />
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-2.5 py-1 rounded text-[10px] shadow">
                Add
              </button>
            </div>

            {/* Status Tabs */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-indigo-600/30 text-indigo-200 border border-indigo-500/30 font-medium">
                All (4)
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] text-slate-400 hover:text-white">
                Pending
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] text-slate-400 hover:text-white">
                In Progress
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] text-slate-400 hover:text-white">
                Completed
              </span>
            </div>

            {/* Task Item Rows */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#181924] border border-white/5 text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded border border-indigo-400 bg-indigo-500/20 flex items-center justify-center text-[9px] text-indigo-300">
                    ✓
                  </div>
                  <span className="text-slate-200">Build the landing page</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    In Progress
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Today</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-[#181924] border border-white/5 text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded border border-white/20" />
                  <span className="text-slate-200">Design the UI components</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Pending
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Tomorrow</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-[#181924] border border-white/5 text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded border border-emerald-400 bg-emerald-500/20 flex items-center justify-center text-[9px] text-emerald-300">
                    ✓
                  </div>
                  <span className="text-slate-300 line-through opacity-70">Set up backend API</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Completed
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Jul 25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 2. RESEARCH PAPER FINDER MOCKUP (Neon Sky Blue Theme)
// --------------------------------------------------------------------------
function ResearchPaperMockup() {
  return (
    <div className="w-full h-full bg-[#0E131F] rounded-xl border border-blue-500/20 p-4 flex flex-col justify-between shadow-2xl font-sans text-white text-xs select-none">
      {/* Search Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
            <Search className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-slate-100">OpenAlex Academic Explorer</span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
          ● 250M+ Works
        </span>
      </div>

      {/* Query Bar */}
      <div className="pt-3">
        <div className="flex items-center gap-2 bg-[#141B2D] p-2 rounded-lg border border-cyan-500/30 mb-3 shadow-inner">
          <Search className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="text-[11px] text-slate-200 font-mono">query: &quot;neural architecture search in edge computing&quot;</span>
          <span className="ml-auto text-[9px] font-mono bg-cyan-400/20 text-cyan-300 px-1.5 py-0.5 rounded">
            240ms
          </span>
        </div>

        {/* Papers List */}
        <div className="space-y-2">
          <div className="p-2.5 rounded-lg bg-[#141B2D]/80 border border-white/10 hover:border-cyan-400/40 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-100 line-clamp-1">
                Efficient Residual Topology for Edge-Deployable Vision Transformers
              </span>
              <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30 shrink-0">
                Open Access
              </span>
            </div>
            <p className="text-[10px] text-slate-400 line-clamp-1 mb-2">
              S. Raj, K. Vasudevan • IEEE Transactions on Neural Networks (2026)
            </p>
            <div className="flex items-center gap-3 text-[9px] font-mono text-cyan-300">
              <span>Citations: 1,420</span>
              <span>•</span>
              <span>DOI: 10.1109/TNNLS.2026</span>
              <span>•</span>
              <span>Year: 2026</span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#141B2D]/80 border border-white/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-100 line-clamp-1">
                Latent Inverted Indexing for Real-Time Scientific Retrieval
              </span>
              <span className="text-[9px] font-mono bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/30 shrink-0">
                Peer-Reviewed
              </span>
            </div>
            <p className="text-[10px] text-slate-400 line-clamp-1 mb-2">
              M. Vance, J. Chen • ACM Computing Surveys (2025)
            </p>
            <div className="flex items-center gap-3 text-[9px] font-mono text-slate-400">
              <span>Citations: 890</span>
              <span>•</span>
              <span>Express Gateway Normalizer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>Displaying 24 of 1,840 results</span>
        <span className="text-cyan-400">Recharts Visualizer: Active</span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 3. SCHOLARIQ MOCKUP (Electric Indigo / AI Analytics Theme)
// --------------------------------------------------------------------------
function ScholarIQMockup() {
  return (
    <div className="w-full h-full bg-[#131122] rounded-xl border border-indigo-500/20 p-4 flex flex-col justify-between shadow-2xl font-sans text-white text-xs select-none">
      {/* App Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-slate-100">ScholarIQ AI Intelligence</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full border border-purple-500/30">
            Llama 3.3 via Groq
          </span>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-3 gap-2 pt-3">
        <div className="p-2 rounded-lg bg-[#1B1733] border border-white/10">
          <div className="text-[10px] text-slate-400">Rows Ingested</div>
          <div className="text-sm font-bold text-white font-mono">14,820</div>
          <div className="text-[9px] text-emerald-400">Schema Inferred</div>
        </div>
        <div className="p-2 rounded-lg bg-[#1B1733] border border-amber-500/30">
          <div className="text-[10px] text-slate-400">Watchlist Alerts</div>
          <div className="text-sm font-bold text-amber-300 font-mono">12 At-Risk</div>
          <div className="text-[9px] text-amber-400">Variance Threshold</div>
        </div>
        <div className="p-2 rounded-lg bg-[#1B1733] border border-white/10">
          <div className="text-[10px] text-slate-400">Inference Latency</div>
          <div className="text-sm font-bold text-purple-300 font-mono">180ms</div>
          <div className="text-[9px] text-purple-400">FastAPI Engine</div>
        </div>
      </div>

      {/* AI Conversation & Chart Preview */}
      <div className="space-y-2 py-2">
        <div className="p-2 rounded-lg bg-[#1B1733]/90 border border-indigo-500/30 text-[11px]">
          <div className="flex items-center gap-1.5 text-purple-400 font-mono text-[10px] mb-1">
            <Sparkles className="w-3 h-3" />
            <span>Ask ScholarAI Assistant</span>
          </div>
          <p className="text-slate-200">
            &quot;Highlight students with declining test trajectories in Q3 semester metrics.&quot;
          </p>
        </div>

        <div className="p-2 rounded-lg bg-[#17132B] border border-white/10">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
            <span>Dynamic AI Recharts (Bar & Line)</span>
            <span className="text-emerald-400">Live JSON Gen</span>
          </div>
          <div className="h-10 flex items-end gap-1 px-2 pt-1 border-b border-white/10">
            <div className="w-full bg-indigo-500/60 rounded-t h-[40%]" />
            <div className="w-full bg-indigo-500/70 rounded-t h-[75%]" />
            <div className="w-full bg-indigo-500/90 rounded-t h-[95%]" />
            <div className="w-full bg-purple-500/80 rounded-t h-[60%]" />
            <div className="w-full bg-purple-500 rounded-t h-[85%]" />
          </div>
        </div>
      </div>

      {/* Footer status */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>CSV: student_performance.csv</span>
        <span className="text-purple-300">Auto-Watchlist: Active</span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 4. STRIVER A2Z DSA SHEET MOCKUP (Java / Data Structures & Algorithms Theme)
// --------------------------------------------------------------------------
function StriverDSAMockup() {
  return (
    <div className="w-full h-full bg-[#16120E] rounded-xl border border-orange-500/20 p-4 flex flex-col justify-between shadow-2xl font-mono text-white text-xs select-none">
      {/* IDE Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-slate-950 font-bold text-[10px]">
            ☕
          </div>
          <span className="font-semibold text-slate-100 font-sans">Striver A2Z DSA • Java 21</span>
        </div>
        <span className="text-[10px] font-mono bg-orange-500/15 text-orange-400 px-2 py-0.5 rounded border border-orange-500/30">
          O((V + E) log V) • PriorityQueue
        </span>
      </div>

      {/* Code Editor & Complexity Map Split */}
      <div className="grid grid-cols-12 gap-2 pt-3">
        {/* Java Algorithm Code */}
        <div className="col-span-7 p-2.5 rounded-lg bg-[#110E0B] border border-white/10 text-[10px] font-mono leading-relaxed">
          <div className="text-orange-400">// DijkstraShortestPath.java</div>
          <div className="text-cyan-400">public int[] <span className="text-yellow-300">dijkstra</span>(int V, List&lt;List&lt;Node&gt;&gt; adj, int src) &#123;</div>
          <div className="pl-2 text-slate-300">PriorityQueue&lt;Node&gt; pq = new PriorityQueue&lt;&gt;(Comparator.comparingInt(n -&gt; n.weight));</div>
          <div className="pl-2 text-slate-300">int[] dist = new int[V]; Arrays.fill(dist, 1e9);</div>
          <div className="pl-2 text-emerald-400">dist[src] = 0; pq.offer(new Node(src, 0));</div>
          <div className="pl-2 text-purple-400">while (!pq.isEmpty()) &#123;</div>
          <div className="pl-4 text-slate-300">Node curr = pq.poll();</div>
          <div className="pl-2 text-purple-400">&#125;</div>
          <div className="text-cyan-400">&#125;</div>
        </div>

        {/* Algorithm Topic & Complexity Map */}
        <div className="col-span-5 p-2 rounded-lg bg-[#1C1611] border border-orange-500/30 text-[10px] space-y-1.5 flex flex-col justify-between">
          <div>
            <div className="text-orange-400 font-bold text-[11px] mb-1">Graph Traversal</div>
            <div className="space-y-1 text-slate-300 text-[9px]">
              <div className="flex justify-between"><span>Time Complexity:</span> <span className="text-amber-300 font-bold">O((V+E)logV)</span></div>
              <div className="flex justify-between"><span>Auxiliary Space:</span> <span className="text-emerald-300 font-bold">O(V)</span></div>
              <div className="flex justify-between"><span>Data Structure:</span> <span className="text-cyan-300">Min-Heap (PQ)</span></div>
            </div>
          </div>
          <div className="pt-1.5 border-t border-white/10 flex flex-wrap gap-1">
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-slate-300">Arrays</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-slate-300">Graphs</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-slate-300">Trees</span>
            <span className="px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 text-[9px]">DP</span>
          </div>
        </div>
      </div>

      {/* Execution Benchmark Banner */}
      <div className="space-y-1.5 py-2">
        <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-[10px]">
          <div className="flex items-center gap-1.5 text-emerald-300">
            <Check className="w-3.5 h-3.5" />
            <span>LeetCode & GFG Benchmark: 100% Test Cases Passed</span>
          </div>
          <span className="text-slate-400 font-mono">JDK 21 LTS</span>
        </div>
      </div>

      {/* Footer Status */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
        <span className="text-slate-400">github.com/CodeWithSameer04/Striver-A2Z-DSA-Sheet</span>
        <span className="text-orange-400 font-bold">Java Solutions Verified ✓</span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 5. CODEARENA MOCKUP (Spring Boot + MySQL + React Theme)
// --------------------------------------------------------------------------
function CodeArenaMockup() {
  return (
    <div className="w-full h-full bg-[#0D1513] rounded-xl border border-emerald-500/20 p-4 flex flex-col justify-between shadow-2xl font-mono text-white text-xs select-none">
      {/* IDE Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-black font-bold text-[10px]">
            {`{ }`}
          </div>
          <span className="font-semibold text-slate-100 font-sans">CodeArena • Spring Boot REST Engine</span>
        </div>
        <span className="text-[10px] font-mono bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
          MySQL • JWT Auth Active
        </span>
      </div>

      {/* Problem & Backend Execution Split */}
      <div className="grid grid-cols-12 gap-2 pt-3">
        {/* Backend REST Endpoint Spec */}
        <div className="col-span-5 p-2 rounded-lg bg-[#13201D] border border-white/10 text-[10px] space-y-1">
          <div className="text-emerald-400 font-bold">POST /api/v1/evaluate</div>
          <p className="text-slate-400 leading-tight">
            Spring Boot sandbox evaluation service with automated test case validation.
          </p>
          <div className="text-[9px] text-emerald-400/90 pt-1">MySQL: `submissions` table updated</div>
        </div>

        {/* Code Editor */}
        <div className="col-span-7 p-2 rounded-lg bg-[#111A18] border border-white/10 text-[10px] font-mono leading-relaxed">
          <div className="text-cyan-400">@PostMapping(&quot;/evaluate&quot;)</div>
          <div className="text-purple-400">public ResponseEntity&lt;Result&gt; evaluate(&#123;</div>
          <div className="pl-2 text-slate-300">SubmissionDTO sub = validate(request);</div>
          <div className="pl-2 text-emerald-300">ExecutionResult res = runner.execute(sub);</div>
          <div className="pl-2 text-yellow-300">submissionRepo.save(res.toEntity());</div>
          <div className="text-cyan-400">return ResponseEntity.ok(res); &#125;</div>
        </div>
      </div>

      {/* Test Execution Output */}
      <div className="space-y-1.5 py-2">
        <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[10px]">
          <div className="flex items-center gap-1.5 text-emerald-300">
            <Check className="w-3.5 h-3.5" />
            <span>Test Suite (Hidden Vectors 1-12): All Passed</span>
          </div>
          <span className="text-slate-400">14ms • 0 Errors</span>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
        <span className="text-slate-400">Contest Rating: 1,840 • Leaderboard Synced</span>
        <button className="px-3 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-[#121212] font-bold text-[10px] transition-colors">
          Submit Solution ▶
        </button>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 5. ANIME TRACKER MOCKUP (Cyber Yellow / Android Native Theme)
// --------------------------------------------------------------------------
function AnimeTrackerMockup() {
  return (
    <div className="w-full h-full bg-[#18150D] rounded-xl border border-amber-500/20 p-4 flex flex-col justify-between shadow-2xl font-sans text-white text-xs select-none">
      {/* Android Device Status Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-slate-400">
        <span>09:41</span>
        <span>AniNews Native • Jetpack Compose</span>
        <div className="flex items-center gap-1.5">
          <span>5G</span>
          <span className="text-amber-400">100%</span>
        </div>
      </div>

      {/* Airing Anime Carousel Cards */}
      <div className="space-y-2 pt-2">
        <div className="p-3 rounded-xl bg-[#241F14] border border-amber-500/30 flex items-center justify-between shadow-lg">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[9px] font-mono bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded uppercase font-bold">
                Airing Today
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Ep 14 Broadcast</span>
            </div>
            <h5 className="font-bold text-xs text-white">Jujutsu Kaisen: Culling Game</h5>
            <p className="text-[10px] text-amber-300 font-mono mt-1">
              Countdown: 02h 45m 18s
            </p>
          </div>
          <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono hover:bg-amber-500 hover:text-black transition-colors">
            <Bell className="w-3 h-3" />
            <span>Alarm</span>
          </button>
        </div>

        <div className="p-3 rounded-xl bg-[#241F14] border border-white/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[9px] font-mono bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded uppercase font-bold">
                Tomorrow
              </span>
              <span className="text-[10px] text-slate-400 font-mono">Ep 22</span>
            </div>
            <h5 className="font-bold text-xs text-white">Frieren: Beyond Journey&apos;s End</h5>
            <p className="text-[10px] text-slate-400 font-mono mt-1">
              GraphQL API Synchronized
            </p>
          </div>
          <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/10 text-[10px] font-mono">
            <CheckCircle2 className="w-3 h-3" />
            <span>Saved</span>
          </button>
        </div>
      </div>

      {/* Room DB & Architecture Footer */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>Room DB: Cached Offline</span>
        <span className="text-amber-400">AlarmManager: Scheduled</span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 6. NOCANCELPOLICY MOCKUP (Rose & Coral / Interactive Viral Theme)
// --------------------------------------------------------------------------
function NoCancelPolicyMockup() {
  return (
    <div className="w-full h-full bg-[#1A0E13] rounded-xl border border-rose-500/20 p-4 flex flex-col justify-between shadow-2xl font-sans text-white text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-rose-500 to-pink-600 flex items-center justify-center">
            <FileSignature className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-slate-100">NoCancelPolicy Agreement</span>
        </div>
        <span className="text-[10px] font-mono bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full border border-rose-500/30">
          Strict Anti-Flake Treaty
        </span>
      </div>

      {/* Agreement Step Card */}
      <div className="p-3.5 rounded-xl bg-[#26141D] border border-rose-500/30 my-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono text-rose-300 uppercase">
            Step 3 of 4: Commitment Guarantee
          </span>
          <span className="text-[10px] font-mono text-slate-400">Ratification: 80%</span>
        </div>
        <h5 className="font-bold text-sm text-white mb-3">
          Will you cancel plans 30 minutes before departure?
        </h5>

        <div className="space-y-2">
          <div className="p-2 rounded-lg bg-rose-500/20 border border-rose-400 text-rose-200 text-xs flex items-center justify-between font-medium">
            <span>Option A: Never. I swear on our friendship.</span>
            <span className="text-[10px] font-mono bg-rose-500 text-white px-1.5 py-0.5 rounded">
              Selected
            </span>
          </div>
          <div className="p-2 rounded-lg bg-black/40 border border-white/10 text-slate-400 text-xs flex items-center justify-between opacity-80">
            <span>Option B: If I do, I will pay everyone ₹500.</span>
            <span className="text-[10px] font-mono text-slate-500">Fine Clause</span>
          </div>
        </div>
      </div>

      {/* Ratification Celebration */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="text-rose-300">🎉 Confetti Generator: Ready</span>
        <span>cancelkarnamanahai.vercel.app</span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 7. AUTO FILE ORGANIZER MOCKUP (Teal / Terminal Daemon Theme)
// --------------------------------------------------------------------------
function AutoFileOrganizerMockup() {
  return (
    <div className="w-full h-full bg-[#0C1417] rounded-xl border border-teal-500/20 p-4 flex flex-col justify-between shadow-2xl font-mono text-white text-xs select-none">
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="text-slate-400 text-[11px] font-mono ml-2">organizer_daemon.py</span>
        </div>
        <span className="text-[10px] text-teal-400 bg-teal-500/15 px-2 py-0.5 rounded border border-teal-500/30">
          Watchdog Active
        </span>
      </div>

      {/* Terminal Stream Logs */}
      <div className="space-y-1.5 py-2 text-[10px] leading-relaxed text-slate-300">
        <div className="text-slate-400">
          $ python3 auto_organizer.py --watch ~/Downloads --background
        </div>
        <div className="text-teal-400">
          [WATCHDOG 21:04:10] Inotify observer initialized on 12 subdirectories.
        </div>
        <div className="text-slate-200">
          [EVENT] New file: <span className="text-cyan-300">Q3_financial_model.xlsx</span>
        </div>
        <div className="text-emerald-400 pl-4">
          ✓ Match (.xlsx) → Moved to ~/Documents/Finance/2026/
        </div>
        <div className="text-slate-200">
          [EVENT] New file: <span className="text-yellow-300">setup_sdk_v4.tar.gz</span>
        </div>
        <div className="text-emerald-400 pl-4">
          ✓ Match (.tar.gz) → Moved to ~/Archives/Installers/
        </div>
      </div>

      {/* Telemetry Summary */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
        <span>Files Processed: 142</span>
        <span className="text-teal-300">CPU Usage: 0.04%</span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// VIEW 2: CODE SNIPPET VIEW
// --------------------------------------------------------------------------
function CodeSnippetView({ project }) {
  return (
    <div className="w-full h-full bg-[#101116] rounded-xl border border-white/10 p-4 flex flex-col justify-between font-mono text-xs text-slate-300 select-none shadow-2xl">
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-slate-400">
        <span>// {project.title} • Core Implementation</span>
        <span className="text-accent-cyan">Source Code</span>
      </div>
      <div className="space-y-1 text-[11px] leading-relaxed py-2">
        <div className="text-slate-400">// Project: {project.title} ({project.year})</div>
        <div className="text-cyan-400">import <span className="text-white">{'{'} useState, useEffect {'}'}</span> from <span className="text-amber-300">&apos;react&apos;</span>;</div>
        <div className="text-purple-400">export default function <span className="text-emerald-400">{project.slug.replace(/-/g, '')}Module</span>() {'{'}</div>
        <div className="pl-4 text-slate-300">const [data, setData] = useState(initialState);</div>
        <div className="pl-4 text-purple-400">useEffect(() =&gt; {'{'}</div>
        <div className="pl-8 text-cyan-300">const subscription = orchestrateLifecycle(data);</div>
        <div className="pl-8 text-slate-400">return () =&gt; subscription.teardown();</div>
        <div className="pl-4 text-purple-400">{'}'}, [data]);</div>
        <div className="pl-4 text-emerald-400">return &lt;InteractiveExperience telemetry={'{'}data{'}'} /&gt;;</div>
        <div className="text-purple-400">{'}'}</div>
      </div>
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
        <span>Stack: {project.technologies.slice(0, 3).join(', ')}</span>
        <span className="text-accent-mint">Verified Production</span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// VIEW 3: TELEMETRY / ARCHITECTURE VIEW
// --------------------------------------------------------------------------
function TelemetryView({ project }) {
  return (
    <div className="w-full h-full bg-[#101116] rounded-xl border border-white/10 p-4 flex flex-col justify-between font-mono text-xs text-slate-300 select-none shadow-2xl">
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-slate-400">
        <span>Architecture & Runtime Telemetry</span>
        <span className="text-emerald-400">Status: Operational</span>
      </div>
      <div className="space-y-2 py-2 text-[11px]">
        <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
          <span className="text-slate-400">Runtime Client:</span>
          <span className="text-white font-bold">{project.stack[0] || 'React 19'}</span>
        </div>
        <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
          <span className="text-slate-400">Backend / Engine:</span>
          <span className="text-cyan-300">{project.stack[1] || 'Node.js / Express'}</span>
        </div>
        <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
          <span className="text-slate-400">Data Pipeline:</span>
          <span className="text-purple-300">{project.stack[2] || 'REST / LocalStore'}</span>
        </div>
        <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between">
          <span className="text-slate-400">Deployment Target:</span>
          <span className="text-emerald-300">Vercel Edge / GitHub</span>
        </div>
      </div>
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
        <span>Slug: {project.slug}</span>
        <span className="text-slate-300">Zero Critical Latency</span>
      </div>
    </div>
  );
}
