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
    <div className="w-full h-full bg-[#111218] rounded-xl border border-white/15 p-2.5 sm:p-4 flex flex-col justify-between shadow-2xl font-sans text-white text-xs select-none">
      {/* Top App Header */}
      <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-[10px] font-bold shrink-0">
            ✓
          </div>
          <span className="font-semibold tracking-wide text-slate-100 text-[11px] sm:text-xs">TaskManager</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-[9px] font-bold">
            SR
          </div>
        </div>
      </div>

      {/* Main App Grid: Sidebar (sm+) + Task Board */}
      <div className="grid grid-cols-12 gap-2.5 sm:gap-3 flex-1 pt-2 sm:pt-3 min-h-0">
        {/* Sidebar - hidden on mobile to give task board ample breathing room */}
        <div className="hidden sm:flex sm:col-span-3 border-r border-white/5 pr-2 flex-col justify-between py-1 text-[11px] text-slate-400">
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

        {/* Content Area - full width on mobile, 9-col on sm+ */}
        <div className="col-span-12 sm:col-span-9 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-100">My Tasks</h4>
                <p className="text-[9px] sm:text-[10px] text-slate-400">Stay organized, get things done.</p>
              </div>
            </div>

            {/* Input Bar */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#181922] p-1.5 rounded-lg border border-white/10 mb-1.5 sm:mb-2.5">
              <input
                type="text"
                readOnly
                value="Build the 3D portfolio experience..."
                className="bg-transparent border-none text-[10px] sm:text-[11px] text-slate-300 flex-1 px-1 outline-none truncate"
              />
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-2 sm:px-2.5 py-1 rounded text-[9px] sm:text-[10px] shadow shrink-0">
                Add
              </button>
            </div>

            {/* Status Tabs */}
            <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2 overflow-x-auto no-scrollbar pb-0.5">
              <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] bg-indigo-600/30 text-indigo-200 border border-indigo-500/30 font-medium shrink-0">
                All (4)
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] text-slate-400 hover:text-white shrink-0">
                Pending
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] text-slate-400 hover:text-white shrink-0">
                In Progress
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] text-slate-400 hover:text-white shrink-0">
                Completed
              </span>
            </div>

            {/* Task Item Rows */}
            <div className="space-y-1 sm:space-y-1.5">
              <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-[#181924] border border-white/5 text-[10px] sm:text-[11px] gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-3.5 h-3.5 rounded border border-indigo-400 bg-indigo-500/20 flex items-center justify-center text-[9px] text-indigo-300 shrink-0">
                    ✓
                  </div>
                  <span className="text-slate-200 truncate">Build the landing page</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <span className="px-1.5 sm:px-2 py-0.5 rounded text-[8.5px] sm:text-[9px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    In Progress
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 font-mono hidden sm:inline">Today</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-[#181924] border border-white/5 text-[10px] sm:text-[11px] gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-3.5 h-3.5 rounded border border-white/20 shrink-0" />
                  <span className="text-slate-200 truncate">Design the UI components</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <span className="px-1.5 sm:px-2 py-0.5 rounded text-[8.5px] sm:text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Pending
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 font-mono hidden sm:inline">Tomorrow</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-[#181924] border border-white/5 text-[10px] sm:text-[11px] gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-3.5 h-3.5 rounded border border-emerald-400 bg-emerald-500/20 flex items-center justify-center text-[9px] text-emerald-300 shrink-0">
                    ✓
                  </div>
                  <span className="text-slate-300 line-through opacity-70 truncate">Set up backend API</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <span className="px-1.5 sm:px-2 py-0.5 rounded text-[8.5px] sm:text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Completed
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 font-mono hidden sm:inline">Jul 25</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-400">
            <span>Tasks: 3 Active • Filter: All</span>
            <span className="text-indigo-400">LocalStorage: Synced</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// 2. RESEARCH PAPER FINDER MOCKUP (Neon Sky Blue Theme)
// --------------------------------------------------------------------------
function ResearchPaperMockup() {
  return (
    <div className="w-full h-full bg-[#0E131F] rounded-xl border border-blue-500/20 p-2.5 sm:p-4 flex flex-col justify-between shadow-2xl font-sans text-white text-xs select-none">
      {/* Search Header */}
      <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shrink-0">
            <Search className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-slate-100 truncate text-[11px] sm:text-xs">OpenAlex Academic Explorer</span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30 shrink-0">
          ● 250M+ Works
        </span>
      </div>

      {/* Query Bar */}
      <div className="pt-1.5 sm:pt-3">
        <div className="flex items-center gap-1.5 sm:gap-2 bg-[#141B2D] p-1.5 sm:p-2 rounded-lg border border-cyan-500/30 mb-1.5 sm:mb-3 shadow-inner">
          <Search className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="text-[10px] sm:text-[11px] text-slate-200 font-mono truncate">query: &quot;neural architecture search in edge computing&quot;</span>
          <span className="ml-auto text-[8.5px] sm:text-[9px] font-mono bg-cyan-400/20 text-cyan-300 px-1.5 py-0.5 rounded shrink-0">
            240ms
          </span>
        </div>

        {/* Papers List */}
        <div className="space-y-1.5 sm:space-y-2">
          <div className="p-2 sm:p-2.5 rounded-lg bg-[#141B2D]/80 border border-white/10 hover:border-cyan-400/40 transition-colors">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[11px] sm:text-xs font-bold text-slate-100 truncate">
                Efficient Residual Topology for Edge-Deployable Vision Transformers
              </span>
              <span className="text-[8.5px] sm:text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30 shrink-0">
                Open Access
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-slate-400 truncate mb-1 sm:mb-2">
              S. Raj, K. Vasudevan • IEEE Transactions on Neural Networks (2026)
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[8.5px] sm:text-[9px] font-mono text-cyan-300">
              <span>Citations: 1,420</span>
              <span>•</span>
              <span>DOI: 10.1109/TNNLS.2026</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Year: 2026</span>
            </div>
          </div>

          <div className="hidden sm:block p-2 sm:p-2.5 rounded-lg bg-[#141B2D]/80 border border-white/10">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[11px] sm:text-xs font-bold text-slate-100 truncate">
                Latent Inverted Indexing for Real-Time Scientific Retrieval
              </span>
              <span className="text-[8.5px] sm:text-[9px] font-mono bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-500/30 shrink-0">
                Peer-Reviewed
              </span>
            </div>
            <p className="text-[9.5px] sm:text-[10px] text-slate-400 truncate mb-1.5 sm:mb-2">
              M. Vance, J. Chen • ACM Computing Surveys (2025)
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[8.5px] sm:text-[9px] font-mono text-slate-400">
              <span>Citations: 890</span>
              <span>•</span>
              <span>Express Gateway Normalizer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-1 text-[9px] sm:text-[10px] font-mono text-slate-400">
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
    <div className="w-full h-full bg-[#131122] rounded-xl border border-indigo-500/20 p-2.5 sm:p-4 flex flex-col justify-between shadow-2xl font-sans text-white text-xs select-none">
      {/* App Header */}
      <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-slate-100 truncate text-[11px] sm:text-xs">ScholarIQ AI Intelligence</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[9px] sm:text-[10px] font-mono text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full border border-purple-500/30">
            Llama 3.3 via Groq
          </span>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1.5 sm:pt-3">
        <div className="p-1.5 sm:p-2 rounded-lg bg-[#1B1733] border border-white/10">
          <div className="text-[8.5px] sm:text-[10px] text-slate-400 truncate">Rows Ingested</div>
          <div className="text-xs sm:text-sm font-bold text-white font-mono">14,820</div>
          <div className="text-[8px] sm:text-[9px] text-emerald-400 truncate">Schema Inferred</div>
        </div>
        <div className="p-1.5 sm:p-2 rounded-lg bg-[#1B1733] border border-amber-500/30">
          <div className="text-[8.5px] sm:text-[10px] text-slate-400 truncate">Watchlist Alerts</div>
          <div className="text-xs sm:text-sm font-bold text-amber-300 font-mono">12 At-Risk</div>
          <div className="text-[8px] sm:text-[9px] text-amber-400 truncate">Variance Limit</div>
        </div>
        <div className="p-1.5 sm:p-2 rounded-lg bg-[#1B1733] border border-white/10">
          <div className="text-[8.5px] sm:text-[10px] text-slate-400 truncate">Inference</div>
          <div className="text-xs sm:text-sm font-bold text-purple-300 font-mono">180ms</div>
          <div className="text-[8px] sm:text-[9px] text-purple-400 truncate">FastAPI Engine</div>
        </div>
      </div>

      {/* AI Conversation & Chart Preview */}
      <div className="space-y-1.5 sm:space-y-2 py-1 sm:py-2">
        <div className="p-1.5 sm:p-2 rounded-lg bg-[#1B1733]/90 border border-indigo-500/30 text-[10px] sm:text-[11px]">
          <div className="flex items-center gap-1.5 text-purple-400 font-mono text-[9px] sm:text-[10px] mb-0.5">
            <Sparkles className="w-3 h-3 shrink-0" />
            <span>Ask ScholarAI Assistant</span>
          </div>
          <p className="text-slate-200 line-clamp-1 sm:line-clamp-2 text-[9.5px] sm:text-[11px]">
            &quot;Highlight students with declining test trajectories in Q3 semester metrics.&quot;
          </p>
        </div>

        <div className="p-1.5 sm:p-2 rounded-lg bg-[#17132B] border border-white/10">
          <div className="flex items-center justify-between text-[8.5px] sm:text-[10px] font-mono text-slate-400 mb-0.5 sm:mb-1">
            <span>Dynamic AI Recharts (Bar & Line)</span>
            <span className="text-emerald-400">Live JSON Gen</span>
          </div>
          <div className="h-6 sm:h-9 flex items-end gap-1 px-2 pt-1 border-b border-white/10">
            <div className="w-full bg-indigo-500/60 rounded-t h-[40%]" />
            <div className="w-full bg-indigo-500/70 rounded-t h-[75%]" />
            <div className="w-full bg-indigo-500/90 rounded-t h-[95%]" />
            <div className="w-full bg-purple-500/80 rounded-t h-[60%]" />
            <div className="w-full bg-purple-500 rounded-t h-[85%]" />
          </div>
        </div>
      </div>

      {/* Footer status */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-1 text-[9px] sm:text-[10px] font-mono text-slate-400">
        <span className="truncate max-w-[150px] sm:max-w-none">CSV: student_performance.csv</span>
        <span className="text-purple-300 shrink-0">Auto-Watchlist: Active</span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 4. STRIVER A2Z DSA SHEET MOCKUP (Java / Data Structures & Algorithms Theme)
// --------------------------------------------------------------------------
function StriverDSAMockup() {
  return (
    <div className="w-full h-full bg-[#16120E] rounded-xl border border-orange-500/20 p-2.5 sm:p-4 flex flex-col justify-between shadow-2xl font-mono text-white text-xs select-none">
      {/* IDE Header */}
      <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-slate-950 font-bold text-[10px] shrink-0">
            ☕
          </div>
          <span className="font-semibold text-slate-100 font-sans truncate text-[11px] sm:text-xs">Striver A2Z DSA • Java 21</span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono bg-orange-500/15 text-orange-400 px-2 py-0.5 rounded border border-orange-500/30 shrink-0">
          O((V+E)logV) • PQ
        </span>
      </div>

      {/* Mobile Single Box (< sm) */}
      <div className="sm:hidden space-y-1.5 my-auto">
        <div className="p-2 rounded-lg bg-[#110E0B] border border-orange-500/30 text-[9.5px] font-mono leading-relaxed overflow-x-auto whitespace-nowrap space-y-0.5">
          <div className="text-orange-400">// DijkstraShortestPath.java</div>
          <div className="text-cyan-400">public int[] <span className="text-yellow-300">dijkstra</span>(int V, List&lt;List&lt;Node&gt;&gt; adj, int src) &#123;</div>
          <div className="pl-2 text-slate-300">PriorityQueue&lt;Node&gt; pq = new PriorityQueue&lt;&gt;((a,b) -&gt; a.w - b.w);</div>
          <div className="pl-2 text-emerald-400">dist[src] = 0; pq.offer(new Node(src, 0));</div>
          <div className="pl-2 text-purple-400">while (!pq.isEmpty()) &#123; Node curr = pq.poll(); /* relax */ &#125;</div>
          <div className="pl-2 text-cyan-400">return dist;</div>
          <div className="text-cyan-400">&#125;</div>
        </div>
        <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-[#1C1611] border border-orange-500/30 text-[9px] font-mono">
          <span className="text-slate-400">Time: <strong className="text-amber-300">O((V+E)logV)</strong></span>
          <span className="text-slate-400">Space: <strong className="text-emerald-300">O(V)</strong></span>
          <span className="text-cyan-300 font-bold">Min-Heap PQ</span>
        </div>
      </div>

      {/* Desktop Split View (sm+) */}
      <div className="hidden sm:grid sm:grid-cols-12 gap-2 pt-2 sm:pt-3">
        {/* Java Algorithm Code */}
        <div className="col-span-7 p-2 sm:p-2.5 rounded-lg bg-[#110E0B] border border-white/10 text-[10px] font-mono leading-relaxed overflow-x-auto whitespace-nowrap">
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
          <div className="pt-1 border-t border-white/10 flex flex-wrap gap-1">
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-slate-300">Arrays</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-slate-300">Graphs</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-slate-300">Trees</span>
            <span className="px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 text-[9px]">DP</span>
          </div>
        </div>
      </div>

      {/* Execution Benchmark Banner */}
      <div className="space-y-1 py-1 sm:py-1.5">
        <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-[9.5px] sm:text-[10px] gap-2">
          <div className="flex items-center gap-1.5 text-emerald-300 min-w-0">
            <Check className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">LeetCode & GFG: 100% Test Cases Passed</span>
          </div>
          <span className="text-slate-400 font-mono shrink-0">JDK 21</span>
        </div>
      </div>

      {/* Footer Status */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-1 text-[9px] sm:text-[10px]">
        <span className="text-slate-400 truncate max-w-[200px] sm:max-w-none">github.com/CodeWithSameer04/Striver-A2Z-DSA-Sheet</span>
        <span className="text-orange-400 font-bold shrink-0">Java Solutions ✓</span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 5. CODEARENA MOCKUP (Spring Boot + MySQL + React Theme)
// --------------------------------------------------------------------------
function CodeArenaMockup() {
  return (
    <div className="w-full h-full bg-[#0D1513] rounded-xl border border-emerald-500/20 p-2.5 sm:p-4 flex flex-col justify-between shadow-2xl font-mono text-white text-xs select-none">
      {/* IDE Header */}
      <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-black font-bold text-[10px] shrink-0">
            {`{ }`}
          </div>
          <span className="font-semibold text-slate-100 font-sans truncate text-[11px] sm:text-xs">CodeArena • Spring Boot REST Engine</span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0">
          MySQL • JWT Active
        </span>
      </div>

      {/* Mobile Single Box (< sm) */}
      <div className="sm:hidden p-2 rounded-lg bg-[#111A18] border border-emerald-500/30 text-[9.5px] font-mono leading-relaxed my-auto">
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10">
          <span className="text-emerald-400 font-bold">POST /api/v1/evaluate</span>
          <span className="text-[8.5px] text-emerald-300/80 bg-emerald-500/15 px-1.5 py-0.5 rounded">MySQL Active</span>
        </div>
        <div className="overflow-x-auto whitespace-nowrap space-y-0.5">
          <div className="text-cyan-400">@PostMapping(&quot;/evaluate&quot;)</div>
          <div className="text-purple-400">public ResponseEntity&lt;Result&gt; evaluate(@RequestBody SubDTO sub) &#123;</div>
          <div className="pl-3 text-emerald-300">ExecutionResult res = runner.execute(sub);</div>
          <div className="pl-3 text-yellow-300">submissionRepo.save(res.toEntity());</div>
          <div className="pl-3 text-cyan-400">return ResponseEntity.ok(res);</div>
          <div className="text-purple-400">&#125;</div>
        </div>
      </div>

      {/* Desktop Split View (sm+) */}
      <div className="hidden sm:grid sm:grid-cols-12 gap-2 pt-2 sm:pt-3">
        {/* Backend REST Endpoint Spec */}
        <div className="col-span-5 p-2 rounded-lg bg-[#13201D] border border-white/10 text-[10px] space-y-1">
          <div className="text-emerald-400 font-bold">POST /api/v1/evaluate</div>
          <p className="text-slate-400 leading-tight">
            Spring Boot sandbox evaluation service with automated test case validation.
          </p>
          <div className="text-[9px] text-emerald-400/90 pt-0.5 truncate">MySQL: `submissions` table updated</div>
        </div>

        {/* Code Editor */}
        <div className="col-span-7 p-2 rounded-lg bg-[#111A18] border border-white/10 text-[10px] font-mono leading-relaxed overflow-x-auto whitespace-nowrap">
          <div className="text-cyan-400">@PostMapping(&quot;/evaluate&quot;)</div>
          <div className="text-purple-400">public ResponseEntity&lt;Result&gt; evaluate(@Valid SubDTO sub) &#123;</div>
          <div className="pl-2 text-slate-300">SubmissionDTO sub = validate(request);</div>
          <div className="pl-2 text-emerald-300">ExecutionResult res = runner.execute(sub);</div>
          <div className="pl-2 text-yellow-300">submissionRepo.save(res.toEntity());</div>
          <div className="text-cyan-400">return ResponseEntity.ok(res); &#125;</div>
        </div>
      </div>

      {/* Test Execution Output */}
      <div className="space-y-1 py-1 sm:py-1.5">
        <div className="flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[9.5px] sm:text-[10px] gap-2">
          <div className="flex items-center gap-1.5 text-emerald-300 min-w-0">
            <Check className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Test Suite (Vectors 1-12): All Passed</span>
          </div>
          <span className="text-slate-400 shrink-0 font-mono">14ms • 0 Errors</span>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-1.5 text-[9px] sm:text-[10px]">
        <span className="text-slate-400 truncate">Rating: 1,840 • Synced</span>
        <button className="px-2.5 sm:px-3 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-[#121212] font-bold text-[9.5px] sm:text-[10px] transition-colors shrink-0">
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
    <div className="w-full h-full bg-[#18150D] rounded-xl border border-amber-500/20 p-2.5 sm:p-4 flex flex-col justify-between shadow-2xl font-sans text-white text-xs select-none">
      {/* Android Device Status Bar */}
      <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-white/10 text-[9px] sm:text-[10px] font-mono text-slate-400">
        <span>09:41</span>
        <span className="truncate px-2">AniNews Native • Jetpack Compose</span>
        <div className="flex items-center gap-1.5 shrink-0">
          <span>5G</span>
          <span className="text-amber-400">100%</span>
        </div>
      </div>

      {/* Airing Anime Carousel Cards */}
      <div className="space-y-1.5 sm:space-y-2 py-1 sm:py-2">
        <div className="p-2 sm:p-2.5 rounded-xl bg-[#241F14] border border-amber-500/30 flex items-center justify-between gap-2 shadow-lg">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[8.5px] sm:text-[9px] font-mono bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded uppercase font-bold shrink-0">
                Airing Today
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono truncate">Ep 14 Broadcast</span>
            </div>
            <h5 className="font-bold text-[11px] sm:text-xs text-white truncate">Jujutsu Kaisen: Culling Game</h5>
            <p className="text-[9px] sm:text-[10px] text-amber-300 font-mono mt-0.5">
              Countdown: 02h 45m 18s
            </p>
          </div>
          <button className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] sm:text-[10px] font-mono hover:bg-amber-500 hover:text-black transition-colors shrink-0">
            <Bell className="w-3 h-3" />
            <span>Alarm</span>
          </button>
        </div>

        <div className="p-2 sm:p-2.5 rounded-xl bg-[#241F14] border border-white/10 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[8.5px] sm:text-[9px] font-mono bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded uppercase font-bold shrink-0">
                Tomorrow
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono truncate">Ep 22</span>
            </div>
            <h5 className="font-bold text-[11px] sm:text-xs text-white truncate">Frieren: Beyond Journey&apos;s End</h5>
            <p className="text-[9px] sm:text-[10px] text-slate-400 font-mono mt-0.5">
              GraphQL Synchronized
            </p>
          </div>
          <button className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/10 text-[9px] sm:text-[10px] font-mono shrink-0">
            <CheckCircle2 className="w-3 h-3" />
            <span>Saved</span>
          </button>
        </div>
      </div>

      {/* Room DB & Architecture Footer */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-1 text-[9px] sm:text-[10px] font-mono text-slate-400">
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
    <div className="w-full h-full bg-[#1A0E13] rounded-xl border border-rose-500/20 p-2.5 sm:p-4 flex flex-col justify-between shadow-2xl font-sans text-white text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-rose-500 to-pink-600 flex items-center justify-center shrink-0">
            <FileSignature className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-slate-100 truncate text-[11px] sm:text-xs">NoCancelPolicy Agreement</span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full border border-rose-500/30 shrink-0">
          Anti-Flake Treaty
        </span>
      </div>

      {/* Agreement Step Card */}
      <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#26141D] border border-rose-500/30 my-auto">
        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
          <span className="text-[8.5px] sm:text-[10px] font-mono text-rose-300 uppercase">
            Step 3 of 4: Commitment
          </span>
          <span className="text-[8.5px] sm:text-[10px] font-mono text-slate-400">Ratification: 80%</span>
        </div>
        <h5 className="font-bold text-xs sm:text-sm text-white mb-2 sm:mb-3 leading-snug">
          Will you cancel plans 30 minutes before departure?
        </h5>

        <div className="space-y-1.5 sm:space-y-2">
          <div className="p-1.5 sm:p-2 rounded-lg bg-rose-500/20 border border-rose-400 text-rose-200 text-[10.5px] sm:text-xs flex items-center justify-between gap-1 font-medium">
            <span className="truncate">Option A: Never. I swear on our friendship.</span>
            <span className="text-[8.5px] sm:text-[10px] font-mono bg-rose-500 text-white px-1.5 py-0.5 rounded shrink-0">
              Selected
            </span>
          </div>
          <div className="p-1.5 sm:p-2 rounded-lg bg-black/40 border border-white/10 text-slate-400 text-[10.5px] sm:text-xs flex items-center justify-between gap-1 opacity-80">
            <span className="truncate">Option B: If I do, I will pay ₹500 fine.</span>
            <span className="text-[8.5px] sm:text-[10px] font-mono text-slate-500 shrink-0">Fine Clause</span>
          </div>
        </div>
      </div>

      {/* Ratification Celebration */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-1 text-[9px] sm:text-[10px] font-mono text-slate-400">
        <span className="text-rose-300">🎉 Confetti Generator: Ready</span>
        <span className="truncate">cancelkarnamanahai.vercel.app</span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// 7. AUTO FILE ORGANIZER MOCKUP (Teal / Terminal Daemon Theme)
// --------------------------------------------------------------------------
function AutoFileOrganizerMockup() {
  return (
    <div className="w-full h-full bg-[#0C1417] rounded-xl border border-teal-500/20 p-2.5 sm:p-4 flex flex-col justify-between shadow-2xl font-mono text-white text-xs select-none">
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="text-slate-400 text-[10.5px] sm:text-[11px] font-mono ml-1 truncate">organizer_daemon.py</span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-teal-400 bg-teal-500/15 px-2 py-0.5 rounded border border-teal-500/30 shrink-0">
          Watchdog Active
        </span>
      </div>

      {/* Terminal Stream Logs */}
      <div className="space-y-1 sm:space-y-1.5 py-1.5 sm:py-2 text-[9px] sm:text-[10px] leading-relaxed text-slate-300 overflow-x-auto whitespace-nowrap">
        <div className="text-slate-400">
          $ python3 auto_organizer.py --watch ~/Downloads --background
        </div>
        <div className="text-teal-400">
          [WATCHDOG 21:04:10] Inotify observer initialized on 12 subdirectories.
        </div>
        <div className="text-slate-200">
          [EVENT] New file: <span className="text-cyan-300">Q3_financial_model.xlsx</span>
        </div>
        <div className="text-emerald-400 pl-3 sm:pl-4">
          ✓ Match (.xlsx) → Moved to ~/Documents/Finance/2026/
        </div>
        <div className="hidden sm:block text-slate-200">
          [EVENT] New file: <span className="text-yellow-300">setup_sdk_v4.tar.gz</span>
        </div>
        <div className="hidden sm:block text-emerald-400 pl-3 sm:pl-4">
          ✓ Match (.tar.gz) → Moved to ~/Archives/Installers/
        </div>
      </div>

      {/* Telemetry Summary */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-1 text-[9px] sm:text-[10px] text-slate-400">
        <span>Files Processed: 142</span>
        <span className="text-teal-300">CPU: 0.04%</span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// VIEW 2: CODE SNIPPET VIEW
// --------------------------------------------------------------------------
function CodeSnippetView({ project }) {
  return (
    <div className="w-full h-full bg-[#101116] rounded-xl border border-white/10 p-2.5 sm:p-4 flex flex-col justify-between font-mono text-xs text-slate-300 select-none shadow-2xl">
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9.5px] sm:text-[10px] text-slate-400">
        <span className="truncate pr-2">// {project.title} • Core Implementation</span>
        <span className="text-accent-cyan shrink-0">Source Code</span>
      </div>
      <div className="space-y-0.5 sm:space-y-1 text-[9.5px] sm:text-[11px] leading-relaxed py-1.5 sm:py-2 overflow-x-auto whitespace-nowrap">
        <div className="text-slate-400">// Project: {project.title} ({project.year})</div>
        <div className="text-cyan-400">import <span className="text-white">{'{'} useState, useEffect {'}'}</span> from <span className="text-amber-300">&apos;react&apos;</span>;</div>
        <div className="text-purple-400">export default function <span className="text-emerald-400">{project.slug.replace(/-/g, '')}Module</span>() {'{'}</div>
        <div className="pl-3 sm:pl-4 text-slate-300">const [data, setData] = useState(initialState);</div>
        <div className="pl-3 sm:pl-4 text-purple-400">useEffect(() =&gt; {'{'}</div>
        <div className="pl-6 sm:pl-8 text-cyan-300">const subscription = orchestrateLifecycle(data);</div>
        <div className="pl-6 sm:pl-8 text-slate-400">return () =&gt; subscription.teardown();</div>
        <div className="pl-3 sm:pl-4 text-purple-400">{'}'}, [data]);</div>
        <div className="pl-3 sm:pl-4 text-emerald-400">return &lt;InteractiveExperience telemetry={'{'}data{'}'} /&gt;;</div>
        <div className="text-purple-400">{'}'}</div>
      </div>
      <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-1 text-[9px] sm:text-[10px] text-slate-400">
        <span className="truncate max-w-[200px] sm:max-w-none">Stack: {project.technologies.slice(0, 3).join(', ')}</span>
        <span className="text-accent-mint shrink-0">Verified Production</span>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// VIEW 3: TELEMETRY / ARCHITECTURE VIEW
// --------------------------------------------------------------------------
function TelemetryView({ project }) {
  return (
    <div className="w-full h-full bg-[#101116] rounded-xl border border-white/10 p-2.5 sm:p-4 flex flex-col justify-between font-mono text-xs text-slate-300 select-none shadow-2xl">
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9.5px] sm:text-[10px] text-slate-400">
        <span>Architecture & Telemetry</span>
        <span className="text-emerald-400 shrink-0">Operational</span>
      </div>
      <div className="space-y-1 sm:space-y-1.5 py-1.5 sm:py-2 text-[9.5px] sm:text-[10.5px]">
        <div className="p-1.5 sm:p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between gap-2">
          <span className="text-slate-400 shrink-0">Runtime Client:</span>
          <span className="text-white font-bold truncate text-right">{project.stack[0] || 'React 19'}</span>
        </div>
        <div className="p-1.5 sm:p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between gap-2">
          <span className="text-slate-400 shrink-0">Backend / Engine:</span>
          <span className="text-cyan-300 truncate text-right">{project.stack[1] || 'Node.js / Express'}</span>
        </div>
        <div className="p-1.5 sm:p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between gap-2">
          <span className="text-slate-400 shrink-0">Data Pipeline:</span>
          <span className="text-purple-300 truncate text-right">{project.stack[2] || 'REST / LocalStore'}</span>
        </div>
        <div className="p-1.5 sm:p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between gap-2">
          <span className="text-slate-400 shrink-0">Deployment:</span>
          <span className="text-emerald-300 truncate text-right">Vercel Edge / GitHub</span>
        </div>
      </div>
      <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-1 text-[9px] sm:text-[10px] text-slate-400">
        <span className="truncate max-w-[150px] sm:max-w-none">Slug: {project.slug}</span>
        <span className="text-slate-300 shrink-0">Zero Critical Latency</span>
      </div>
    </div>
  );
}
