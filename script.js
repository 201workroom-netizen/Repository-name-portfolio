const projects = [
  {
    id: "ai-search",
    title: "火山引擎 智能搜索",
    category: "人工智能产品体验",
    year: "2024-2025",
    cover: "智能搜索",
    summary: "帮助企业轻松创建对话式搜索助手，通过多轮交互、实现内容搜索、内容推荐、内容问答等能力，方便用户更深入地了解商品或内容，助力企业高效完成平台智能化转型。",
    tags: ["意图识别", "对话式搜索", "智能推荐", "可信反馈"],
    role: "体验策略 / 信息架构 / 交互设计 / 控制台流程",
    background: "传统搜索只能匹配关键词，难以识别真实意图；智能回复又容易因为过程不可见、证据不清晰而降低用户信任。",
    insight: "用户不是只想得到答案，而是想快速判断答案是否可信、是否适合自己的场景。专家型用户需要参数外显，清单型用户需要结构化对比，推荐型用户需要低摩擦引导。",
    strategy: "围绕意图分类建立不同反馈模型：先给结论、展示检索过程、补充引用证据，再用卡片、对比表和多轮追问承接下一步决策。",
    solutions: [
      ["意图自适应输入", "根据单商品深度解析、双商品对比决策、影视推荐等场景动态调整入口和按钮文案。"],
      ["感知反馈", "展示正在检索、分析数据源、引用权威信息等过程，降低智能系统的黑箱感。"],
      ["结构化结果", "将参数、卖点、评价聚类和内容片源拆成可扫视模块，帮助用户跳过营销噪音。"],
      ["B 端控制台承接", "为客户提供数据集创建、字段配置、数据样例、拖拽上传和错误反馈。"],
    ],
    value: "把智能能力展示转化为真实用户任务效率：更快理解、更敢相信、更容易继续行动。",
    accent: "#8d5cff",
    metricA: "多轮搜索链路",
    metricB: "智能化转型",
  },
  {
    id: "meituan-live",
    title: "美团直播",
    category: "增长体验设计",
    year: "2024",
    cover: "直播增长",
    summary: "美团是个强交易平台，想较于内容类直播平台，美团吸纳的用户停留时长相对有限，所以扩大直播日活规模、增加粉丝观看/互动时长，是24年年底直播产品重要的目标之一。",
    tags: ["直播电商", "增长转化", "互动营销", "C端体验"],
    role: "C 端互动体验 / 直播增长链路 / 活动玩法设计",
    background: "直播场景信息密度高，用户注意力短，商品、主播、活动和优惠同时争夺认知资源。",
    insight: "增长设计的关键不是增加入口，而是在用户情绪峰值处给出明确行动，让看见优惠、理解规则、完成互动形成短链路。",
    strategy: "以直播间行为节奏为主线，拆分停留、互动、领券、抽奖、下单等节点，建立可复用的互动组件。",
    solutions: [
      ["商品榜单", "用实时热度、优惠状态和商品排序帮助用户快速判断购买优先级。"],
      ["互动营销", "将抽奖、任务、弹幕互动做成轻量反馈，不打断观看主路径。"],
      ["转化组件", "强化限时、库存、券包和商品利益点的可见性。"],
    ],
    value: "在复杂直播信息流中重建清晰秩序，让用户愿意停留、参与并完成转化。",
    accent: "#ff8a3d",
    metricA: "停留与互动",
    metricB: "转化效率",
  },
  {
    id: "gofun",
    title: "GoFun 出行",
    category: "出行产品体验",
    year: "2023",
    cover: "GoFun 出行",
    summary: "首汽集团旗下共享汽车租赁平台，调整产品流程，改进和重构系统，并优化页面信息的陈列和改进失焦状态，以提升 GoFun 平台品牌力和业务影响力。",
    tags: ["出行体验", "应用改版", "服务流程", "状态反馈"],
    role: "应用体验升级 / 场景路径设计 / 服务触点梳理",
    background: "共享出行链路长、状态多，用户在找车、验车、开锁、计费、还车等节点容易产生焦虑。",
    insight: "出行产品的体验价值来自确定性：用户需要知道现在能不能用、下一步做什么、异常如何处理。",
    strategy: "围绕多元用车场景重构主路径，将状态反馈、地图信息、订单状态与异常提示做成连续体验。",
    solutions: [
      ["路径压缩", "减少关键任务中的跳转层级，让找车和下单更直接。"],
      ["状态反馈", "强化车辆、订单、费用和还车结果的即时可见性。"],
      ["服务补位", "为异常状态提供明确解释和下一步操作。"],
    ],
    value: "把线下不确定性转化为线上可理解、可操作、可追踪的服务体验。",
    accent: "#22c55e",
    metricA: "流程重构",
    metricB: "品牌体验升级",
  },
  {
    id: "integrated",
    title: "综合设计项目",
    category: "综合设计能力",
    year: "2017-2023",
    cover: "设计系统",
    summary: "覆盖新兴业务运营设计、智能硬件、立体图标、品牌视觉与设计规范沉淀。",
    tags: ["品牌视觉", "设计系统", "智能硬件", "运营设计"],
    role: "视觉系统 / 品牌风格 / 多行业体验设计",
    background: "不同项目行业跨度大，既要匹配业务调性，也要保证产出效率和规范化交付。",
    insight: "成熟设计师的价值不只是做出界面，而是快速识别行业语境，建立能被团队持续使用的设计规则。",
    strategy: "通过品牌风格、组件规范、运营模板和视觉资产沉淀，让设计成果具备复用能力。",
    solutions: [
      ["品牌视觉", "结合业务属性建立清晰、统一、可持续使用的视觉语言。"],
      ["智能硬件", "结合产品形态、应用控制和品牌表达构建统一体验。"],
      ["设计规范", "用可复用模板提升跨渠道视觉一致性。"],
    ],
    value: "证明从体验策略到视觉落地的综合能力，适配智能产品、医疗、硬件、新兴业务等多类场景。",
    accent: "#c47cff",
    metricA: "规范沉淀",
    metricB: "多场景落地",
  },
  {
    id: "console",
    title: "B 端控制台 / 搜推配置系统",
    category: "B端复杂系统",
    year: "2024-2025",
    cover: "配置系统",
    summary: "面向复杂业务系统，构建清晰的信息架构、配置流程、数据管理和权限状态体验。",
    tags: ["控制台", "复杂系统", "信息架构", "配置流程"],
    role: "复杂系统信息架构 / 配置流程 / 表单与状态设计",
    background: "智能搜推配置涉及数据集、字段、行为数据、应用创建和生效规则，概念密集且错误成本高。",
    insight: "B 端用户不怕复杂，怕复杂没有边界。系统需要把要准备什么、当前在哪、出错在哪里讲清楚。",
    strategy: "通过分步流程、样例模板、字段解释、预览数据和错误定位，把高门槛配置变成可跟随的任务。",
    solutions: [
      ["分步建模", "创建数据集、配置字段、生效配置、体验配置按任务拆分。"],
      ["样例驱动", "在关键节点提供数据示例和素材结构差异说明。"],
      ["错误可定位", "把缺少字段、异常数据和删除策略清晰反馈给操作者。"],
    ],
    value: "让复杂能力被更多团队正确使用，减少实施沟通成本和试错成本。",
    accent: "#5fb6ff",
    metricA: "配置效率",
    metricB: "复杂系统",
  },
];

const expertise = [
  ["用户研究与问题定义", "从业务目标、用户行为、竞品结构和数据反馈中定位核心体验问题。"],
  ["人工智能产品体验设计", "设计意图识别、智能对话、感知反馈、引用证据和多模态输入等体验。"],
  ["C 端体验与增长", "围绕用户路径、互动机制、直播电商和转化节点做体验优化。"],
  ["B 端复杂系统设计", "处理配置、权限、数据、流程和状态，降低复杂系统的理解与操作成本。"],
  ["设计系统与视觉规范", "沉淀组件、视觉语言、运营模板和跨平台规范，提高团队协作效率。"],
  ["跨团队项目推进", "与产品、研发、算法、运营协作，从需求拆解到上线复盘。"],
];

const timeline = [
  ["2024.03 - 2025.08", "字节 / 美团专项设计服务", "字节智能应用：从 0-1 构建智能搜推视觉体系，定义智能交互语义。美团直播业务：负责用户增长体验设计。"],
  ["2023.01 - 2023.12", "独立产品设计项目", "首汽集团 GoFun 应用出行体验升级；新兴业务运营类项目品牌视觉与运营落地。"],
  ["2019.08 - 2022.09", "心医国际数字医疗有限公司", "负责多款创新项目视觉体系搭建、C 端与 B 端体验升级、情感化设计和规范制定。"],
  ["2017.12 - 2019.05", "博信智通科技有限公司", "儿童产品视觉体系搭建、IP 形象、智能产品体验升级和版本迭代。"],
];

const projectVisuals = {
  "ai-search": { logo: "./assets/ai-search-logo.png", image: "./assets/project-ai-cover.png" },
  "meituan-live": { logo: "./assets/meituan-logo-v2.png", image: "./assets/project-meituan-cover.png" },
  gofun: { logo: "./assets/gofun-logo-v2.png", image: "./assets/project-gofun-cover.png" },
  integrated: { logo: "./assets/integrated-logo.png", image: "./assets/project-integrated-cover.png" },
};

const projectGroups = [
  { label: "字节", entry: "ai-search", members: ["ai-search", "ai-video", "console"] },
  { label: "美团", entry: "meituan-live", members: ["meituan-live", "meituan-lottery", "meituan-follow", "meituan-spec"] },
  { label: "GoFun", entry: "gofun", members: ["gofun"] },
  { label: "综合", entry: "integrated", members: ["integrated"] },
];

const app = document.querySelector("#app");
const nav = document.querySelector(".nav-links");
const navToggle = document.querySelector(".nav-toggle");

function tags(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

function staggeredLetters(text) {
  const offsets = [
    [-0.18, 0.34, -8], [0.22, -0.28, 6], [-0.13, 0.2, -5], [0.3, 0.12, 7],
    [-0.25, -0.18, -6], [0.16, 0.3, 5], [-0.3, -0.12, -7], [0.11, -0.26, 4],
  ];
  return [...text].map((character, index) => (
    `<span class="home-cover-letter" style="--letter-index:${index};--scatter-x:${offsets[index % offsets.length][0]}em;--scatter-y:${offsets[index % offsets.length][1]}em;--scatter-rotate:${offsets[index % offsets.length][2]}deg" aria-hidden="true">${character === " " ? "&nbsp;" : character}</span>`
  )).join("");
}

function projectInfoMarkup(project) {
  return `
    <div class="project-info">
      <p class="project-meta-line">${project.category} · ${project.tags.slice(0, 2).join(" · ")}</p>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
    </div>
  `;
}

function projectLogoMarkup(project) {
  return `
    <div class="project-logo-wrap">
      <span class="project-logo">${project.title.slice(0, 2)}</span>
    </div>
  `;
}

function landingPage() {
  const homeProjects = projects.filter((project) => project.id !== "console");
  return `
    <div class="home-intro-sequence">
      <section class="home-static-redesign" id="home">
        <canvas class="home-dot-field" aria-hidden="true"></canvas>
        <div class="home-figma-cover">
          <h1 aria-label="Densign PortfoLio">${staggeredLetters("Densign PortfoLio")}</h1>
          <p>洞察用户 创造价值</p>
        </div>
      </section>

      <section class="home-profile-screen" id="about" aria-label="个人介绍">
      <div class="home-profile-copy">
        <p class="home-profile-greeting">你好 <span>👋</span>，我是王雅楠</p>
        <h2 class="home-profile-title">
          <span><em><span>UI</span><span class="home-profile-slash">/</span><span>UX</span></em> 体验设计</span>
          <span>人工智能爱好者</span>
        </h2>
        <p class="home-profile-description">10年界面与体验设计经验，拥有跨平台设计能力，熟知C端、B端业务属性与设计重点。拥有0-1的项目设计经验，（竞品分析、用户研究）沟通协作能力较强，善于组织团队活动，是自然型人格。</p>
        <div class="home-profile-actions">
          <a class="home-profile-button home-profile-button-primary" href="#contact"><span class="home-profile-mail-icon" aria-hidden="true"></span> 联系我</a>
          <a class="home-profile-button home-profile-button-secondary" href="#work">查看项目 <span class="home-profile-arrow" aria-hidden="true">➜</span></a>
        </div>
      </div>
      <figure class="home-profile-photo">
        <img src="./assets/yanan-profile-20260723b.jpg" alt="王雅楠个人照片" />
        <figcaption>体验设计</figcaption>
      </figure>
      </section>
    </div>

    <section class="section project-showcase" id="work">
      <div class="project-section-head">
        <h2>最新项目</h2>
        <p>从产品体验探索到复杂系统设计，这些是我重点参与并沉淀方法的代表项目。</p>
      </div>
      <div class="project-grid">${homeProjects.map(projectCard).join("")}</div>
    </section>

    <section class="section expertise-section" id="expertise">
      <div class="section-head">
        <div>
          <h2>我擅长解决的问题</h2>
        </div>
      </div>
      <div class="expertise-grid">${expertise.map(expertiseCard).join("")}</div>
    </section>

    <section class="section timeline-section" id="resume">
      <div class="timeline-content">
        <div class="section-head">
          <div>
            <h2>工作经历</h2>
          </div>
        </div>
        <div class="timeline">${timeline.map(timelineItem).join("")}</div>
      </div>
    </section>

    <section class="contact-section" id="contact">
      <div class="contact-card reveal">
        <h2>期待与你沟通</h2>
        <p>如果你正在寻找一位能处理复杂产品问题、推动人工智能产品 / C 端 / B 端体验落地的资深体验设计师，欢迎联系我。</p>
        <div class="contact-details" aria-label="联系方式">
          <span>电话：13693084214</span>
          <span>邮箱：13693084214@163.com</span>
        </div>
      </div>
    </section>
  `;
}

function projectCard(project, index) {
  const visual = projectVisuals[project.id];
  if (visual) {
    const visualMarkup = project.id === "ai-search"
      ? `<div class="project-visual ai-project-visual" aria-hidden="true">
          <img class="ai-visual-bg" src="./assets/ai-cover-background.png" alt="" />
          <img class="ai-phone ai-phone-left" src="./assets/ai-phone-commerce-v2.png" alt="" />
          <img class="ai-phone ai-phone-right" src="./assets/ai-phone-content-v2.png" alt="" />
        </div>`
      : project.id === "meituan-live"
      ? `<div class="project-visual meituan-project-visual" aria-hidden="true">
          <img class="meituan-phone meituan-phone-left" src="./assets/meituan-phone-ranking-v2.png" alt="" />
          <img class="meituan-phone meituan-phone-right" src="./assets/meituan-phone-lottery-v2.png" alt="" />
        </div>`
      : `<div class="project-visual" aria-hidden="true"><img src="${visual.image}" alt="" /></div>`;
    return `
      <a class="project-card figma-project-card reveal" data-project="${project.id}" href="#project/${project.id}" aria-label="查看${project.title}完整案例" style="--stack-index: ${index + 1}; --delay: ${(index % 3) * 90}ms">
        <div class="project-logo-wrap figma-project-logo" aria-hidden="true">
          <img src="${visual.logo}" alt="" />
        </div>
        ${projectInfoMarkup(project)}
        ${visualMarkup}
        <span class="open-pill" data-cursor-pill>打开 <i>→</i></span>
      </a>
    `;
  }

  return `
    <a class="project-card reveal" href="#project/${project.id}" style="--accent: ${project.accent}; --stack-index: ${index + 1}; --delay: ${(index % 3) * 90}ms">
      ${projectLogoMarkup(project)}
      ${projectInfoMarkup(project)}
      <span class="open-pill" data-cursor-pill>打开 <i>→</i></span>
      <div class="project-cover" aria-hidden="true">
        <div class="cover-word">${project.cover}</div>
        <div class="cover-device one"></div>
        <div class="cover-device two"></div>
        <div class="cover-device three"></div>
        <div class="project-stats">
          <span>${project.metricA}</span>
          <span>${project.metricB}</span>
        </div>
      </div>
    </a>
  `;
}

function expertiseCard([title, desc], index) {
  return `
    <article class="expertise-card reveal" style="--delay: ${(index % 3) * 70}ms">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${title}</h3>
      <p>${desc}</p>
    </article>
  `;
}

function timelineItem([date, title, desc], index) {
  return `
    <article class="timeline-item reveal" style="--timeline-index: ${index}">
      <div class="timeline-marker" aria-hidden="true"><i></i></div>
      <span class="timeline-date">${date}</span>
      <div class="timeline-entry">
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
    </article>
  `;
}

function detailPage(id) {
  if (id === "ai-video") return aiVideoDetailPage();
  if (id === "console") return aiConsoleDetailPage();
  if (id === "meituan-live") return meituanDetailPage();
  if (id === "meituan-lottery") return meituanLotteryDetailPage();
  if (id === "meituan-follow") return meituanFollowDetailPage();
  if (id === "meituan-spec") return meituanSpecDetailPage();
  if (id === "gofun") return gofunDetailPage();
  if (id === "integrated") return integratedDetailPage();
  const project = projects.find((item) => item.id === id) || projects[0];
  if (project.id === "ai-search") return aiSearchDetailPage();
  return `
    <main class="case-page">
      <a class="back-link" href="#work">← 返回项目</a>
      ${aiCaseSwitcher(project.id)}
      <section class="case-hero reveal" style="--accent: ${project.accent}">
        <div>
          <p class="kicker">${project.category} / ${project.year}</p>
          <h1>${project.title}</h1>
          <p>${project.summary}</p>
          <div class="tag-row">${tags(project.tags)}</div>
        </div>
        <div class="case-cover" aria-hidden="true">
          <div class="cover-word">${project.cover}</div>
          <div class="cover-device one"></div>
          <div class="cover-device two"></div>
          <div class="cover-device three"></div>
        </div>
      </section>

      <section class="case-layout">
        <aside class="case-aside reveal">
          <div class="case-note">
            <span>我的角色</span>
            <p>${project.role}</p>
          </div>
          <div class="case-note">
            <span>项目价值</span>
            <p>${project.value}</p>
          </div>
        </aside>
        <div class="case-content reveal" style="--delay: 100ms">
          ${caseBlock("项目概览", project.summary)}
          ${caseBlock("项目背景与问题", project.background)}
          ${caseBlock("用户与场景", project.insight)}
          ${caseBlock("设计策略", project.strategy)}
          <section class="case-block">
            <h2>核心方案</h2>
            <div class="solution-grid">
              ${project.solutions.map(([title, desc]) => `<article><h3>${title}</h3><p>${desc}</p></article>`).join("")}
            </div>
          </section>
          ${caseBlock("复盘与沉淀", "项目结束后，我会沉淀可复用的判断标准、组件规则和协作方式，让一次项目经验继续影响后续产品迭代。")}
        </div>
      </section>
    </main>
  `;
}

function projectHubNav() {
  const currentId = location.hash.replace("#project/", "");
  return `
    <div class="ai-case-left-nav">
      <a class="ai-case-back" href="#work" aria-label="返回项目列表">
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16.5 10H3.5M8.5 5l-5 5 5 5" /></svg>
      </a>
      <div class="ai-case-project-menu">
        <button class="ai-case-project-trigger" type="button" aria-haspopup="true">项目</button>
        <nav class="ai-case-project-panel" aria-label="项目分类">
          ${projectGroups.map(({ label, entry, members }) => `
            <a href="#project/${entry}"${members.includes(currentId) ? ' class="active" aria-current="page"' : ""}>
              <span>${label}</span><span aria-hidden="true">↗</span>
            </a>
          `).join("")}
        </nav>
      </div>
    </div>
  `;
}

function meituanHeroSection() {
  return `
    <section class="ai-case-screen meituan-hero-section">
      <div class="meituan-hero-inner">
        <div class="meituan-hero-copy">
          <h1>美团直播</h1>
          <p>美团是个强交易平台，想较于内容类直播平台，美团吸纳的用户停留时长相对有限，所以扩大直播DAU规模，增加粉丝观看/互动时长是24年年底直播产品重要的目标之一</p>
          <p class="meituan-hero-en">Meituan is a strong trading platform. Compared with content-based live broadcast platforms, Meituan attracts users whose stay time is relatively limited. Therefore, expanding the scale of live broadcast DAU and increasing the viewing/interaction time of fans is one of the important goals of live broadcast products at the end of 2024.</p>
        </div>
        <div class="meituan-hero-visual" aria-hidden="true">
          <img class="meituan-hero-3d" src="./assets/meituan-hero-3d-bg.jpg" alt="美团直播 3D 视觉元素" />
        </div>
      </div>
    </section>
  `;
}

function meituanDetailPage() {
  return `
    <main class="ai-case-page meituan-case-page">
      ${projectHubNav()}
      ${meituanCaseSwitcher()}
      ${meituanHeroSection()}
      ${meituanListProjectContent(true)}
      ${meituanLotteryProjectContent(true)}
      ${meituanFollowProjectContent(true)}
      ${meituanSpecProjectContent(true)}
    </main>
  `;
}

function meituanLotteryDetailPage() {
  return `
    <main class="ai-case-page meituan-case-page">
      ${projectHubNav()}
      ${meituanCaseSwitcher()}
      ${meituanLotteryProjectContent()}
    </main>
  `;
}

function meituanFollowDetailPage() {
  return `
    <main class="ai-case-page meituan-case-page">
      ${projectHubNav()}
      ${meituanCaseSwitcher()}
      ${meituanFollowProjectContent()}
    </main>
  `;
}

function meituanSpecDetailPage() {
  return `
    <main class="ai-case-page meituan-case-page">
      ${projectHubNav()}
      ${meituanCaseSwitcher()}
      ${meituanSpecProjectContent()}
    </main>
  `;
}

function meituanListProjectContent(grouped = false) {
  return [1, 2, 3, 4, 5, 6, 7].map((screen) => `
    <section class="ai-case-screen meituan-image-screen"${grouped && screen === 1 ? ' id="meituan-list" data-ai-section-screen="list"' : ""}>
      <img src="./assets/meituan/screen-0${screen}@2x.png" alt="美团直播商品榜单方案第 ${screen} 屏" ${screen > 1 ? 'loading="lazy"' : ""} />
    </section>
  `).join("");
}

function meituanLotteryProjectContent(grouped = false) {
  return `
    <section class="ai-case-screen meituan-image-screen lottery-video-screen"${grouped ? ' id="meituan-lottery" data-ai-section-screen="lottery"' : ""}>
      <img src="./assets/meituan-lottery/screen-01@2x.png?v=2" alt="美团抽奖挂件迭代背景" />
      <video class="lottery-phone-video" autoplay muted loop playsinline preload="auto" aria-label="直播间中奖动效">
        <source src="./assets/meituan-lottery/winning-loop.mp4" type="video/mp4" />
      </video>
    </section>
    ${[2, 3, 4].map((screen) => `
      <section class="ai-case-screen meituan-image-screen">
        <img src="./assets/meituan-lottery/screen-0${screen}@2x.png" alt="美团抽奖项目第 ${screen} 屏" loading="lazy" />
      </section>
    `).join("")}
  `;
}

function meituanFollowProjectContent(grouped = false) {
  return `
    <section class="ai-case-screen meituan-image-screen"${grouped ? ' id="meituan-follow" data-ai-section-screen="follow"' : ""}>
      <img src="./assets/meituan-follow/screen-01@2x.png" alt="美团直播关注卡片项目背景" />
    </section>
    <section class="ai-case-screen follow-demo-screen" aria-label="关注后领取红包动效展示">
      <div class="follow-demo-phone">
        <img src="./assets/meituan-follow/phone-shell.png" alt="" aria-hidden="true" />
        <video autoplay muted loop playsinline preload="auto">
          <source src="./assets/meituan-follow/red-packet-loop.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
    ${[3, 4, 5, 6].map((screen) => `
      <section class="ai-case-screen meituan-image-screen">
        <img src="./assets/meituan-follow/screen-0${screen}@2x.png" alt="美团关注卡片项目第 ${screen} 屏" loading="lazy" />
      </section>
    `).join("")}
  `;
}

function meituanSpecProjectContent(grouped = false) {
  return [1, 2].map((screen) => `
    <section class="ai-case-screen meituan-image-screen"${grouped && screen === 1 ? ' id="meituan-spec" data-ai-section-screen="spec"' : ""}>
      <img src="./assets/meituan-spec/screen-0${screen}@2x.png" alt="美团直播设计规范第 ${screen} 屏" ${screen > 1 ? 'loading="lazy"' : ""} />
    </section>
  `).join("");
}

function gofunDetailPage() {
  const screens = Array.from({ length: 13 }, (_, index) => String(index + 1).padStart(2, "0"));
  const mobileLast = 11; // screen-01 ~ screen-11 是移动端
  return `
    <main class="ai-case-page gofun-case-page">
      ${projectHubNav()}
      ${gofunCaseSwitcher()}
      ${screens.map((screen) => {
        const num = Number(screen);
        const isMobileFirst = num === 1;
        const isOfficialFirst = num === mobileLast + 1; // screen-12
        const sectionAttrs = isMobileFirst
          ? ' id="gofun-mobile" data-ai-section-screen="mobile"'
          : isOfficialFirst
            ? ' id="gofun-official" data-ai-section-screen="official"'
            : '';
        return `
        <section class="ai-case-screen meituan-image-screen"${sectionAttrs}>
          <img src="./assets/gofun/screen-${screen}@2x.png" alt="GoFun 出行体验升级第 ${num} 屏" ${screen !== "01" ? 'loading="lazy"' : ""} />
        </section>
      `;
      }).join("")}
    </main>
  `;
}

function integratedDetailPage() {
  return `
    <main class="ai-case-page integrated-case-page">
      ${projectHubNav()}

      <section class="ai-case-screen meituan-image-screen integrated-image-screen">
        <img src="./assets/integrated/screen-01@2x.png" alt="Web3 综合项目概览" />
      </section>

      <section class="ai-case-screen meituan-image-screen integrated-demo-screen" aria-label="TaskOn Boost Feature 动效展示">
        <img src="./assets/integrated/screen-02@2x.png" alt="TaskOn Boost Feature" loading="lazy" />
        <div class="integrated-demo-frame">
          <video class="integrated-demo-video" autoplay muted loop playsinline preload="metadata">
            <source src="./assets/integrated/web3banner-loop.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section class="ai-case-screen meituan-image-screen integrated-image-screen integrated-valentine-screen">
        <h2 class="integrated-screen-title">TaskOn <strong>Valentine's Day</strong> Activities</h2>
        <img src="./assets/integrated/screen-03@2x.png" alt="TaskOn 情人节活动运营设计" loading="lazy" />
      </section>

      <section class="ai-case-screen meituan-image-screen integrated-image-screen">
        <img src="./assets/integrated/screen-04@2x.png" alt="TaskOn Web3 运营类设计" loading="lazy" />
      </section>

      <section class="ai-case-screen meituan-image-screen integrated-image-screen">
        <img src="./assets/integrated/screen-05@2x.png" alt="TaskOn 品牌视觉与三维元素设计" loading="lazy" />
      </section>

      <section class="ai-case-screen meituan-image-screen integrated-image-screen">
        <img src="./assets/integrated/screen-06@2x.png" alt="TaskOn 三维元素制作过程" loading="lazy" />
      </section>

      <section class="ai-case-screen meituan-image-screen integrated-image-screen">
        <img src="./assets/integrated/screen-07@2x.png" alt="B 端工具类运营海报设计" loading="lazy" />
      </section>

      <section class="ai-case-screen meituan-image-screen integrated-image-screen">
        <img src="./assets/integrated/screen-08@2x.png" alt="现代物料海报设计" loading="lazy" />
      </section>

      <section class="ai-case-screen meituan-image-screen integrated-image-screen">
        <img src="./assets/integrated/screen-09@2x.png" alt="喜马拉雅有声读物 Banner 设计" loading="lazy" />
      </section>

      <section class="ai-case-screen meituan-image-screen integrated-image-screen">
        <img src="./assets/integrated/screen-10@2x.png" alt="GoFun 运营海报设计" loading="lazy" />
      </section>

      <section class="ai-case-screen meituan-image-screen integrated-image-screen">
        <img src="./assets/integrated/screen-11@2x.png" alt="手绘插画展示" loading="lazy" />
      </section>
    </main>
  `;
}

function gofunCaseSwitcher() {
  return `<nav class="ai-case-switcher" aria-label="GoFun 项目切换">
    <a class="active" href="#gofun-mobile" data-ai-section="mobile">移动端</a>
    <a href="#gofun-official" data-ai-section="official">官网</a>
  </nav>`;
}

function meituanCaseSwitcher() {
  const links = [["list", "榜单"], ["lottery", "抽奖"], ["follow", "关注卡片"], ["spec", "规范文档"]];
  return `<nav class="ai-case-switcher meituan-case-switcher" aria-label="美团项目切换">
    ${links.map(([section, label]) => `<a class="${section === "list" ? "active" : ""}" href="#meituan-${section}" data-ai-section="${section}">${label}</a>`).join("")}
  </nav>`;
}

function aiConsoleDetailPage() {
  return `
    <main class="ai-case-page">
      ${projectHubNav()}
      ${aiCaseSwitcher()}
      ${aiConsoleProjectContent()}
    </main>
  `;
}

function aiCaseSwitcher() {
  const links = [
    ["overview", "AI搜推"],
    ["commerce", "电商助手"],
    ["video", "影视助手"],
    ["console", "控制台"],
  ];
  return `<nav class="ai-case-switcher" aria-label="AI 项目切换">
    ${links.map(([section, label]) => `<a class="${section === "overview" ? "active" : ""}" href="#ai-search-${section}" data-ai-section="${section}">${label}</a>`).join("")}
  </nav>`;
}

function aiConsoleProjectContent(grouped = false) {
  return `
    <section class="ai-case-screen ai-console-screen"${grouped ? ' id="ai-search-console" data-ai-section-screen="console"' : ""}>
      <img src="./assets/ai-console-screen-01@2x.png" alt="AI 搜推控制台项目概览" />
    </section>

    <section class="ai-case-screen ai-console-screen">
      <img src="./assets/ai-console-screen-02@2x.png" alt="AI 搜推控制台详细方案" loading="lazy" />
    </section>
  `;
}

function aiVideoDetailPage() {
  return `
    <main class="ai-case-page">
      ${projectHubNav()}
      ${aiCaseSwitcher()}
      ${aiVideoProjectContent()}
    </main>
  `;
}

function aiVideoProjectContent(grouped = false) {
  return `
      <section class="ai-case-screen ai-video-intro"${grouped ? ' id="ai-search-video" data-ai-section-screen="video"' : ""}>
        <div class="ai-video-intro-copy reveal">
          <p class="ai-case-en">Live broadcast list</p>
          <h1>AI 影视陪看助手</h1>
          <div class="ai-case-text-block">
            <h2><b>背景</b></h2>
            <p>1. 传统搜索效果不好：仅关键词匹配，无法揣测用户真实意图，在搜索时不能以大致题意进行搜索。</p>
            <p>2. 没有个性化推荐：搜索过程中仅提供匹配度较高的内容，不会根据用户偏好提供内容排序。</p>
          </div>
          <div class="ai-case-text-block ai-case-goal">
            <h2><b>目标</b></h2>
            <p>体验创新：升级传统搜索流程，利用 AI 搜推模式提供创新搜索交互，提高用户搜索效率。</p>
            <p>指标创新：提升视频播放转化、观看时长与互动。</p>
          </div>
        </div>
        <img class="ai-video-hero-image reveal" src="./assets/ai-video-hero@2x.png" alt="AI 影视陪看助手界面" />
      </section>

      <section class="ai-case-screen ai-video-image-screen">
        <img src="./assets/ai-video-screen-02@2x.png" alt="AI 影视陪看助手用户洞察" loading="lazy" />
      </section>

      <section class="ai-case-screen ai-video-image-screen">
        <img src="./assets/ai-video-screen-03@2x.png" alt="AI 影视陪看助手体验方案" loading="lazy" />
      </section>

      <section class="ai-case-screen ai-video-long-screen">
        <img src="./assets/ai-video-screen-04@2x.png" alt="AI 影视陪看助手详细方案" loading="lazy" />
      </section>

      <section class="ai-case-screen ai-video-long-screen">
        <img src="./assets/ai-video-screen-05@2x.png" alt="AI 影视陪看助手项目总结" loading="lazy" />
      </section>
  `;
}

function aiSearchDetailPage() {
  return `
    <main class="ai-case-page">
      ${projectHubNav()}
      ${aiCaseSwitcher()}

      <section class="ai-case-screen ai-search-figma-hero" id="ai-search-overview" data-ai-section-screen="overview">
        <img class="ai-search-hero-slice reveal" src="./assets/ai-search-hero-figma.png" alt="火山引擎 AI 搜索项目首屏" />
      </section>

      <section class="ai-case-screen ai-search-commerce-screen" id="ai-search-commerce" data-ai-section-screen="commerce">
        <img src="./assets/ai-search-commerce-assistant.png" alt="AI 电商导购助手项目背景与目标" loading="eager" />
      </section>

      <section class="ai-case-screen ai-case-demo">
        <header class="ai-case-demo-heading reveal">
          <p class="ai-case-en">E-commerce DEMO</p>
          <h2>电商DEMO展示</h2>
        </header>
        <div class="demo-phone-stage reveal" style="--delay:100ms">
          <div class="demo-phone-frame">
            <iframe src="./ecommerce-demo/index.html?v=20260728f" title="AI 电商搜索交互 Demo" loading="eager"></iframe>
          </div>
        </div>
      </section>

      <section class="ai-case-screen ai-case-intent">
        <header class="ai-case-intent-heading reveal">
          <p class="ai-case-en">Conversational Intent Classification</p>
          <h2>对话式 Agent 意图分类</h2>
        </header>
        <div class="ai-case-intent-art">
          <img src="./assets/ai-intent-classification@2x.png" alt="对话式 Agent 意图分类方案" loading="lazy" />
        </div>
      </section>

      ${aiVideoProjectContent(true)}
      ${aiConsoleProjectContent(true)}
    </main>
  `;
}

function caseBlock(title, body) {
  return `<section class="case-block"><h2>${title}</h2><p>${body}</p></section>`;
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "60px" });

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

let dotFieldController = null;

function setupDotField() {
  dotFieldController?.abort();
  const controller = new AbortController();
  dotFieldController = controller;
  const canvases = [...document.querySelectorAll(".dot-field, .home-dot-field")];
  const cursor = document.querySelector(".cursor-dot");
  if (!canvases.length || !cursor || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  document.body.classList.add("has-custom-cursor");
  const fields = canvases.map((canvas) => ({ canvas, context: canvas.getContext("2d") })).filter(({ context }) => context);
  const pointer = { x: window.innerWidth * 0.36, y: window.innerHeight * 0.55 };
  const current = { ...pointer };
  let width = window.innerWidth;
  let height = window.innerHeight;
  let raf = 0;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    fields.forEach(({ canvas, context }) => {
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    });
  };

  const draw = () => {
    current.x += (pointer.x - current.x) * 0.14;
    current.y += (pointer.y - current.y) * 0.14;
    cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;

    const gap = width < 760 ? 22 : 20;
    const radius = width < 760 ? 100 : 145;
    const offset = (window.scrollY * 0.045) % gap;

    fields.forEach(({ context }) => {
      context.clearRect(0, 0, width, height);
      for (let y = -gap + offset; y < height + gap; y += gap) {
        for (let x = 0; x < width + gap; x += gap) {
          const dx = x - current.x;
          const dy = y - current.y;
          const distance = Math.hypot(dx, dy);
          const influence = Math.max(0, 1 - distance / radius);
          const lens = influence * influence;
          const spread = 1 + lens * 0.16;
          const drawX = current.x + dx * spread;
          const drawY = current.y + dy * spread;
          const size = 0.68 + lens * 1.05;

          context.beginPath();
          context.fillStyle = `rgba(79, 87, 92, ${0.17 + lens * 0.19})`;
          context.arc(drawX, drawY, size, 0, Math.PI * 2);
          context.fill();
        }
      }
    });
    raf = requestAnimationFrame(draw);
  };

  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    cursor.classList.add("is-visible");
    const target = event.target instanceof Element ? event.target : null;
    cursor.classList.toggle("is-active", Boolean(target?.closest("a, button")));
    cursor.classList.toggle("over-project", Boolean(target?.closest(".project-card")));
  }, { passive: true, signal: controller.signal });
  document.addEventListener("mouseleave", () => cursor.classList.remove("is-visible"), { signal: controller.signal });
  window.addEventListener("resize", resize, { passive: true, signal: controller.signal });
  controller.signal.addEventListener("abort", () => cancelAnimationFrame(raf), { once: true });
  resize();
  cancelAnimationFrame(raf);
  draw();
}

function setupMagneticControls() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  document.querySelectorAll(".primary-btn, .ghost-btn, .nav-links a, .back-link").forEach((control) => {
    if (control.dataset.magneticReady === "true") return;
    control.dataset.magneticReady = "true";
    control.addEventListener("pointermove", (event) => {
      const rect = control.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.14;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
      control.style.setProperty("--magnet-x", `${x}px`);
      control.style.setProperty("--magnet-y", `${y}px`);
    });
    control.addEventListener("pointerleave", () => {
      control.style.setProperty("--magnet-x", "0px");
      control.style.setProperty("--magnet-y", "0px");
    });
  });
}

function setupProjectMotion() {
  const cards = [...document.querySelectorAll(".project-card")];
  if (!cards.length) return;

  cards.forEach((card) => card.addEventListener("click", (event) => {
    const targetHash = card.getAttribute("href");
    if (!targetHash?.startsWith("#project/")) return;

    event.preventDefault();
    document.documentElement.classList.add("is-project-transitioning");
    document.scrollingElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    history.pushState(null, "", targetHash);
    render();
  }, { once: true }));

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  cards.forEach((card) => {
    const resetMotion = () => {
      card.style.setProperty("--parallax-x", "0px");
      card.style.setProperty("--parallax-y", "0px");
      card.style.setProperty("--ai-left-x", "0px");
      card.style.setProperty("--ai-left-y", "0px");
      card.style.setProperty("--ai-right-x", "0px");
      card.style.setProperty("--ai-right-y", "0px");
    };

    resetMotion();
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
      card.style.setProperty("--parallax-x", `${nx * 8}px`);
      card.style.setProperty("--parallax-y", `${ny * 6}px`);
      card.style.setProperty("--ai-left-x", `${nx * 4}px`);
      card.style.setProperty("--ai-left-y", `${ny * 3}px`);
      card.style.setProperty("--ai-right-x", `${nx * -3.2}px`);
      card.style.setProperty("--ai-right-y", `${ny * -2.4}px`);
    });
    card.addEventListener("pointerleave", resetMotion);
  });

  const updateStack = () => {
    const viewport = window.innerHeight;
    cards.forEach((card, index) => {
      const next = cards[index + 1];
      if (!next || window.innerWidth <= 900) {
        card.style.setProperty("--stack-scale", "1");
        card.style.setProperty("--stack-brightness", "1");
        return;
      }
      const nextTop = next.getBoundingClientRect().top;
      const progress = Math.max(0, Math.min(1, (viewport * 0.86 - nextTop) / (viewport * 0.86 - 128)));
      card.style.setProperty("--stack-scale", String(1 - progress * 0.035));
      card.style.setProperty("--stack-brightness", String(1 - progress * 0.22));
    });
  };

  window.removeEventListener("scroll", window.__projectStackMotion);
  window.__projectStackMotion = updateStack;
  window.addEventListener("scroll", updateStack, { passive: true });
  updateStack();
}

function setupScrollProgress() {
  const progress = document.querySelector(".scroll-progress");
  if (!progress) return;
  const update = () => {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${distance > 0 ? window.scrollY / distance : 0})`;
  };
  window.removeEventListener("scroll", window.__scrollProgress);
  window.__scrollProgress = update;
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function setupProjectNavState() {
  const projectSection = document.querySelector(".project-showcase");
  if (!projectSection) return;

  const update = () => {
    const rect = projectSection.getBoundingClientRect();
    const viewport = window.innerHeight;
    const enterStart = viewport * 1.05;
    const enterEnd = viewport * 0.42;
    const enterProgress = Math.max(0, Math.min(1, (enterStart - rect.top) / (enterStart - enterEnd)));
    const enterEase = enterProgress * enterProgress * (3 - 2 * enterProgress);
    const exitProgress = Math.max(0, Math.min(1, rect.bottom / (viewport * 0.62)));
    const darkProgress = Math.min(enterProgress, exitProgress);
    const inProjects = rect.top <= window.innerHeight * 0.52 && rect.bottom >= 120;
    document.body.classList.toggle("in-projects", inProjects);
    document.body.classList.toggle("dark-mode", darkProgress >= 0.84);
    document.body.style.setProperty("--dark-radius", "0vmax");
    projectSection.style.setProperty("--project-enter", enterEase.toFixed(4));

    if (inProjects) {
      setActiveNav("work");
    } else {
      setActiveNav("home");
    }
  };

  window.removeEventListener("scroll", window.__projectNavState);
  window.__projectNavState = update;
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function setActiveNav(route) {
  nav.querySelectorAll("[data-route]").forEach((link) => {
    const active = link.dataset.route === route;
    link.classList.toggle("is-active", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setupCursorPills() {
  document.querySelectorAll(".project-card").forEach((card) => {
    const pill = card.querySelector("[data-cursor-pill]");
    if (!pill) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.13;
      currentY += (targetY - currentY) * 0.13;
      pill.style.left = `${currentX}px`;
      pill.style.top = `${currentY}px`;
      frame = requestAnimationFrame(animate);
    };

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const halfWidth = pill.offsetWidth / 2 + 12;
      const halfHeight = pill.offsetHeight / 2 + 10;
      targetX = Math.max(halfWidth, Math.min(rect.width - halfWidth, x));
      targetY = Math.max(halfHeight, Math.min(rect.height - halfHeight, y));
      if (!pill.classList.contains("is-following")) {
        currentX = targetX;
        currentY = targetY;
        cancelAnimationFrame(frame);
        animate();
      }
      pill.classList.add("is-following");
    });

    card.addEventListener("pointerleave", () => {
      cancelAnimationFrame(frame);
      pill.classList.remove("is-following");
      pill.style.left = "";
      pill.style.top = "";
    });
  });
}

let homeIntroController = null;
let demoStoryController = null;
let projectSectionNavController = null;
let openingRevealRun = 0;

function clearProjectSectionNav() {
  projectSectionNavController?.abort();
  projectSectionNavController = null;
}

function setupProjectSectionNav(initialSection) {
  clearProjectSectionNav();
  const nav = document.querySelector(".ai-case-switcher");
  const links = [...nav?.querySelectorAll("[data-ai-section]") || []];
  const sections = Object.fromEntries(
    [...document.querySelectorAll("[data-ai-section-screen]")].map((section) => [section.dataset.aiSectionScreen, section]),
  );
  if (!nav || !links.length || !sections[initialSection]) return;

  projectSectionNavController = new AbortController();
  const signal = projectSectionNavController.signal;
  const order = links.map((link) => link.dataset.aiSection).filter((section) => sections[section]);
  const setActive = (section) => links.forEach((link) => link.classList.toggle("active", link.dataset.aiSection === section));
  const update = () => {
    const threshold = window.innerHeight * 0.42;
    const active = order.reduce((current, section) => (
      sections[section].getBoundingClientRect().top <= threshold ? section : current
    ), order[0]);
    setActive(active);
  };

  links.forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    const section = link.dataset.aiSection;
    sections[section]?.scrollIntoView({ block: "start" });
    setActive(section);
  }, { signal }));
  window.addEventListener("scroll", update, { passive: true, signal });
  window.addEventListener("resize", update, { passive: true, signal });

  if (initialSection !== order[0]) {
    requestAnimationFrame(() => sections[initialSection].scrollIntoView({ block: "start" }));
  }
  setActive(initialSection);
}

function setupOpeningReveal() {
  const route = location.hash.replace("#", "");
  const projectId = route.split("/")[1];
  const isGroupHome = projectGroups.some(({ entry }) => entry === projectId);
  if (!route.startsWith("project/") || !isGroupHome || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.remove("is-project-transitioning");
    return;
  }

  const run = ++openingRevealRun;
  document.querySelectorAll(".opening-reveal-mask").forEach((node) => node.remove());
  document.body.classList.remove("is-opening-reveal", "is-opening-content");

  const overlay = document.createElement("div");
  overlay.className = "opening-reveal-mask";
  overlay.setAttribute("aria-hidden", "true");

  const width = window.innerWidth;
  const height = window.innerHeight;
  const startWidth = 2;
  const startHeight = Math.round(height * 0.78);
  const namespace = "http://www.w3.org/2000/svg";
  const darkProjects = new Set([
    "ai-video",
    "meituan-live",
    "meituan-lottery",
    "meituan-follow",
    "meituan-spec",
    "gofun",
    "integrated",
  ]);
  overlay.style.setProperty("--opening-cover", darkProjects.has(projectId) ? "#fff" : "#050505");

  const svg = document.createElementNS(namespace, "svg");
  svg.classList.add("opening-reveal-svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("preserveAspectRatio", "none");

  const defs = document.createElementNS(namespace, "defs");
  const mask = document.createElementNS(namespace, "mask");
  const maskId = `opening-reveal-cutout-${run}`;
  mask.setAttribute("id", maskId);
  mask.setAttribute("maskUnits", "userSpaceOnUse");
  mask.setAttribute("x", "0");
  mask.setAttribute("y", "0");
  mask.setAttribute("width", String(width));
  mask.setAttribute("height", String(height));

  const maskBase = document.createElementNS(namespace, "rect");
  maskBase.setAttribute("width", String(width));
  maskBase.setAttribute("height", String(height));
  maskBase.setAttribute("fill", "#fff");

  const aperture = document.createElementNS(namespace, "rect");
  aperture.setAttribute("fill", "#000");
  mask.append(maskBase, aperture);
  defs.append(mask);

  const cover = document.createElementNS(namespace, "path");
  cover.classList.add("opening-reveal-cover");
  cover.setAttribute("d", `M0 0H${width}V${height}H0Z`);
  cover.setAttribute("mask", `url(#${maskId})`);
  svg.append(defs, cover);
  overlay.append(svg);
  document.body.append(overlay);
  overlay.getBoundingClientRect();

  let frame = 0;
  const draw = (progress) => {
    const eased = progress < 0.5
      ? 8 * progress ** 4
      : 1 - ((-2 * progress + 2) ** 4) / 2;
    const apertureWidth = startWidth + (width - startWidth) * eased;
    const apertureHeight = startHeight + (height - startHeight) * eased;
    const apertureX = (width - apertureWidth) / 2;
    const apertureY = (height - apertureHeight) / 2;
    const radius = Math.min(apertureWidth / 2, apertureHeight / 2, 24 * (1 - eased));
    aperture.setAttribute("x", String(apertureX));
    aperture.setAttribute("y", String(apertureY));
    aperture.setAttribute("width", String(apertureWidth));
    aperture.setAttribute("height", String(apertureHeight));
    aperture.setAttribute("rx", String(radius));
    aperture.setAttribute("ry", String(radius));
  };
  draw(0);

  const cleanup = () => {
    if (frame) cancelAnimationFrame(frame);
    overlay.remove();
    document.documentElement.classList.remove("is-project-transitioning");
  };

  const firstVisual = document.querySelector(".ai-case-screen img");
  const visualReady = firstVisual?.decode
    ? Promise.race([
        firstVisual.decode().catch(() => {}),
        new Promise((resolve) => window.setTimeout(resolve, 700)),
      ])
    : Promise.resolve();

  const scrollReady = new Promise((resolve) => {
    let stableFrames = 0;
    let checks = 0;
    const settle = () => {
      document.scrollingElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
      const scrollTop = document.scrollingElement.scrollTop || window.scrollY;
      stableFrames = Math.abs(scrollTop) < 0.5 ? stableFrames + 1 : 0;
      checks += 1;
      if (stableFrames >= 4 || checks >= 45) resolve();
      else requestAnimationFrame(settle);
    };
    requestAnimationFrame(settle);
  });

  Promise.all([visualReady, scrollReady]).then(() => window.setTimeout(() => {
      if (run !== openingRevealRun) return cleanup();
      const startedAt = performance.now();
      const animate = (now) => {
        if (run !== openingRevealRun || !location.hash.startsWith("#project/")) return cleanup();
        const progress = Math.min((now - startedAt) / 950, 1);
        draw(progress);
        if (progress < 1) frame = requestAnimationFrame(animate);
        else cleanup();
      };
      frame = requestAnimationFrame(animate);
    }, 70));
}

function clearDemoStory() {
  demoStoryController?.abort();
  demoStoryController = null;
  document.querySelector(".ai-case-demo")?.classList.remove("is-demo-lock");
}

function setupDemoStory() {
  clearDemoStory();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const demo = document.querySelector(".ai-case-demo");
  const frame = demo?.querySelector("iframe");
  if (!demo || !frame) return;

  demoStoryController = new AbortController();
  const signal = demoStoryController.signal;
  let index = 0;
  let locked = false;
  const totalSteps = 4;
  const updateLock = () => demo.classList.toggle("is-demo-lock", index < totalSteps - 1);
  const isPinned = () => {
    const rect = demo.getBoundingClientRect();
    const viewport = window.innerHeight || 1;
    return Boolean(rect && rect.top < viewport * 0.2 && rect.bottom > viewport * 0.7);
  };
  const advance = (direction) => {
    if (locked) return;
    const next = index + direction;
    if (next < 0 || next >= totalSteps) return;
    locked = true;
    index = next;
    updateLock();
    frame.contentWindow?.postMessage({ type: "demo-step", step: index, direction }, "*");
    window.setTimeout(() => { locked = false; }, 520);
  };
  window.addEventListener("wheel", (event) => {
    if (!isPinned() || Math.abs(event.deltaY) < 2) return;
    const direction = event.deltaY > 0 ? 1 : -1;
    const next = index + direction;
    if (next < 0 || next >= totalSteps) return;
    event.preventDefault();
    advance(direction);
  }, { passive: false, signal });
  window.addEventListener("keydown", (event) => {
    if (!isPinned() || !["ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(event.key)) return;
    const direction = event.key === "ArrowUp" || event.key === "PageUp" ? -1 : 1;
    const next = index + direction;
    if (next < 0 || next >= totalSteps) return;
    event.preventDefault();
    advance(direction);
  }, { signal });
  frame.addEventListener("load", () => {
    // Always enter the embedded demo at its complete top-of-flow state.
    // The demo has an internal results scroller; preserving a previous scroll
    // position can make the first visible screen look like content is missing.
    try {
      frame.contentDocument?.querySelectorAll("[data-scroll], .content-scroll, main, body")
        .forEach((node) => { node.scrollTop = 0; });
    } catch (error) {
      // Keep the iframe usable if a future hosted version becomes cross-origin.
    }
    frame.contentWindow?.postMessage({ type: "demo-step", step: 0 }, "*");
  }, { signal });
  updateLock();
}

function setupDemoFramePosition() {
  const frame = document.querySelector(".ai-case-demo iframe");
  if (!frame) return;
  frame.addEventListener("load", () => {
    try {
      frame.contentDocument?.querySelectorAll("[data-scroll], .content-scroll, main, body")
        .forEach((node) => { node.scrollTop = 0; });
    } catch (error) {}
  }, { once: true });
}
let homeNavMotionController = null;

function clearHomepageNavMotion() {
  if (homeNavMotionController) {
    homeNavMotionController.abort();
    homeNavMotionController = null;
  }
  const topbar = document.querySelector(".topbar");
  topbar?.classList.remove("nav-motion", "is-nav-ready", "is-nav-hidden", "is-nav-scrolled");
  topbar?.style.removeProperty("transition");
  [
    "--nav-width",
    "--nav-top",
    "--nav-progress",
    "--nav-radius",
    "--nav-pad-x",
    "--nav-pad-y",
    "--nav-height",
    "--nav-gap",
    "--nav-item-width",
    "--nav-link-height",
    "--nav-font-size",
  ].forEach((name) => {
    topbar?.style.removeProperty(name);
  });
}

function setupHomepageNavMotion() {
  clearHomepageNavMotion();
  const topbar = document.querySelector(".topbar");
  const links = [...document.querySelectorAll(".nav-links a")];
  if (!topbar || !document.querySelector(".home-figma-cover")) return;

  links.forEach((link, index) => {
    link.style.setProperty("--nav-index", index);
    link.dataset.label = link.textContent.trim();
  });
  topbar.style.setProperty("transition", "none");
  topbar.classList.add("nav-motion");
  topbar.getBoundingClientRect();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    topbar.classList.add("is-nav-ready");
    return;
  }

  homeNavMotionController = new AbortController();
  const signal = homeNavMotionController.signal;
  let frame = 0;
  let entranceTimer = 0;
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const smoothstep = (value) => value * value * (3 - 2 * value);

  entranceTimer = window.setTimeout(() => {
    if (!signal.aborted) {
      topbar.style.removeProperty("transition");
      topbar.classList.add("is-nav-ready");
    }
  }, 160);

  const update = () => {
    frame = 0;
    const currentY = Math.max(0, window.scrollY);
    const compact = window.innerWidth < 760;
    const viewportWidth = document.documentElement.clientWidth || window.innerWidth || 1;
    const navScale = compact ? 1 : (viewportWidth / 1920) * 0.81;
    const startInset = compact ? 20 : 0;
    const endInset = compact ? 20 : 24;
    const startWidth = Math.max(0, viewportWidth - startInset);
    const endWidth = Math.min(compact ? 344 : 376 * navScale, viewportWidth - endInset);
    const progress = smoothstep(clamp(currentY / (compact ? 190 : 260)));
    const width = startWidth + (endWidth - startWidth) * progress;
    const radius = 999 * progress;
    const startTop = compact ? 8 : 24 * navScale;
    const endTop = compact ? 8 : 69 * navScale - 10;
    const top = startTop + (endTop - startTop) * progress;
    const padX = compact ? 4 : (55 + (10 - 55) * progress) * navScale;
    const padY = compact ? 4 : 10 * navScale;
    const navHeight = compact ? 50 : 84 * navScale;
    const navGap = compact ? 0 : 22 * navScale;
    const itemWidth = compact ? Math.max(0, (width - padX * 2) / 3) : 104 * navScale;
    const linkHeight = compact ? 40 : 64 * navScale;
    const fontSize = compact ? 16 : 30 * navScale;

    topbar.style.setProperty("--nav-width", `${width.toFixed(2)}px`);
    topbar.style.setProperty("--nav-top", `${top.toFixed(2)}px`);
    topbar.style.setProperty("--nav-progress", progress.toFixed(4));
    topbar.style.setProperty("--nav-radius", `${radius.toFixed(2)}px`);
    topbar.style.setProperty("--nav-pad-x", `${padX.toFixed(2)}px`);
    topbar.style.setProperty("--nav-pad-y", `${padY.toFixed(2)}px`);
    topbar.style.setProperty("--nav-height", `${navHeight.toFixed(2)}px`);
    topbar.style.setProperty("--nav-gap", `${navGap.toFixed(2)}px`);
    topbar.style.setProperty("--nav-item-width", `${itemWidth.toFixed(2)}px`);
    topbar.style.setProperty("--nav-link-height", `${linkHeight.toFixed(2)}px`);
    topbar.style.setProperty("--nav-font-size", `${fontSize.toFixed(2)}px`);
    topbar.classList.remove("is-nav-hidden");
    topbar.classList.toggle("is-nav-scrolled", progress > 0.56);
    const projectRect = document.querySelector(".project-showcase")?.getBoundingClientRect();
    const darkRect = document.querySelector(".timeline-section")?.getBoundingClientRect();
    const isOverDark = Boolean(projectRect && projectRect.top < top + navHeight) ||
                       Boolean(darkRect && darkRect.top < top + navHeight);
    topbar.classList.toggle("is-over-dark", isOverDark);
  };

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  signal.addEventListener("abort", () => {
    if (frame) cancelAnimationFrame(frame);
    if (entranceTimer) clearTimeout(entranceTimer);
  }, { once: true });
  window.addEventListener("scroll", schedule, { passive: true, signal });
  window.addEventListener("resize", schedule, { signal });
  update();
}

function clearHomeIntroTransition() {
  if (homeIntroController) {
    homeIntroController.abort();
    homeIntroController = null;
  }

  [
    "--profile-scale",
    "--profile-radius",
    "--profile-border-alpha",
    "--profile-shadow-alpha",
    "--profile-lift",
    "--profile-opacity",
    "--cover-fade",
    "--cover-lift",
  ].forEach((name) => document.documentElement.style.removeProperty(name));
}

function setupHomeIntroTransition() {
  clearHomeIntroTransition();

  const sequence = document.querySelector(".home-intro-sequence");
  const profile = document.querySelector(".home-profile-screen");
  if (!sequence || !profile) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    document.documentElement.style.setProperty("--profile-scale", "1");
    document.documentElement.style.setProperty("--profile-radius", "0px");
    document.documentElement.style.setProperty("--profile-border-alpha", "0");
    document.documentElement.style.setProperty("--profile-shadow-alpha", "0");
    document.documentElement.style.setProperty("--profile-lift", "0px");
    document.documentElement.style.setProperty("--profile-opacity", "1");
    document.documentElement.style.setProperty("--cover-fade", "0");
    document.documentElement.style.setProperty("--cover-lift", "-8svh");
    return;
  }

  homeIntroController = new AbortController();
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const smoothstep = (value) => value * value * (3 - 2 * value);
  let frame = 0;

  const apply = () => {
    frame = 0;
    const viewport = window.innerHeight || 1;
    const rect = sequence.getBoundingClientRect();
    const compact = window.innerWidth < 760;
    const progress = clamp(-rect.top / (viewport * (compact ? 0.7 : 0.8111)));
    const eased = smoothstep(progress);
    const baseScale = compact ? 0.62 : 0.28;
    const startRadius = compact ? 52 : 86;
    const startLift = compact ? 0 : 6;

    document.documentElement.style.setProperty("--profile-scale", (baseScale + eased * (1 - baseScale)).toFixed(4));
    document.documentElement.style.setProperty("--profile-lift", `${(startLift * (1 - eased)).toFixed(3)}svh`);
    document.documentElement.style.setProperty("--profile-opacity", (0.78 + eased * 0.22).toFixed(3));
    document.documentElement.style.setProperty("--profile-radius", `${Math.round(startRadius * (1 - eased))}px`);
    document.documentElement.style.setProperty("--profile-border-alpha", (1 - eased).toFixed(3));
    document.documentElement.style.setProperty("--profile-shadow-alpha", (0.055 * (1 - eased)).toFixed(3));
    document.documentElement.style.setProperty("--cover-fade", (1 - smoothstep(clamp((progress - 0.08) / 0.68)) * 0.92).toFixed(3));
    document.documentElement.style.setProperty("--cover-lift", `${(-8 * eased).toFixed(3)}svh`);
  };

  const schedule = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(apply);
  };

  homeIntroController.signal.addEventListener("abort", () => {
    if (frame) window.cancelAnimationFrame(frame);
  }, { once: true });

  schedule();
  window.addEventListener("scroll", schedule, { passive: true, signal: homeIntroController.signal });
  window.addEventListener("resize", schedule, { signal: homeIntroController.signal });
}

function render() {
  clearHomepageNavMotion();
  clearHomeIntroTransition();
  clearDemoStory();
  clearProjectSectionNav();
  const hash = location.hash.replace("#", "");
  if (hash.startsWith("project/")) {
    const requestedProjectId = hash.split("/")[1];
    const groupedSectionByProject = {
      "ai-search": ["ai-search", "overview"],
      "ai-video": ["ai-search", "video"],
      console: ["ai-search", "console"],
      "meituan-live": ["meituan-live", "list"],
      "meituan-lottery": ["meituan-live", "lottery"],
      "meituan-follow": ["meituan-live", "follow"],
      "meituan-spec": ["meituan-live", "spec"],
      "gofun": ["gofun", "mobile"],
    };
    const groupedSection = groupedSectionByProject[requestedProjectId];
    const [projectId, section] = groupedSection || [requestedProjectId, null];
    const isAiDetail = projectId === "ai-search" || projectId === "meituan-live" || projectId === "meituan-lottery" || projectId === "meituan-follow" || projectId === "meituan-spec" || projectId === "gofun" || projectId === "integrated";
    document.body.classList.remove("in-projects");
    document.body.classList.toggle("dark-mode", isAiDetail);
    document.body.classList.toggle("ai-detail-mode", isAiDetail);
    document.body.style.setProperty("--dark-radius", "0vmax");
    document.documentElement.classList.add("is-project-transitioning");
    window.scrollTo(0, 0);
    app.innerHTML = detailPage(projectId);
    window.scrollTo(0, 0);
    setupOpeningReveal();
    setupDemoFramePosition();
    if (section) setupProjectSectionNav(section);
    setActiveNav("work");
  } else {
    document.body.classList.remove("ai-detail-mode");
    document.body.classList.remove("dark-mode");
    app.innerHTML = landingPage();
    setupReveal();
    setupProjectNavState();
    setupCursorPills();
    setupProjectMotion();
    setupHomeIntroTransition();
    setupHomepageNavMotion();
    if (hash && hash !== "home") {
      requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }));
    }
  }
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  setupDotField();
  setupMagneticControls();
  setupScrollProgress();
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("hashchange", render);
render();
