import React from "react";
import {
  Project,
  AIGeneratedWork,
  Philosophy,
  ContactInfo,
  SectionLabels,
  AboutSection,
  AICategory,
} from "./types";

export const contactInfo: ContactInfo = {
  email: "yywnbzqdwd@163.com",
  location: "Beijing, China",
  university: "Tsinghua University",
  degree: "B.A. & M.A. in Design",
  profileImage: "personal_photo.png",
};

const aboutEn: AboutSection = {
  bio: React.createElement(
    React.Fragment,
    null,
    "From ",
    React.createElement(
      "span",
      { className: "font-semibold text-neutral-900" },
      "Design Creativity"
    _,
    " to ",
    React.createElement(
      "span",
      { className: "font-semibold text-neutral-900" },
      "AI Product"
    _,
    ",",
    React.createElement("br"_,
    "always focusing on ",
    React.createElement(
      "span",
      {
        className:
          "font-semibold text-neutral-900 border-b-4 border-purple-200/80",
      },
      "How Technology Serves People"
    _
  _,
  details:
    "With a background in Art & Design from Tsinghua University_Bachelor's & Master's_ and entrepreneurship in cultural consumption, I transitioned into the AI Product field. I am committed to building meaningful products, translating complex AI capabilities into simple, effective, human-centric solutions.",
  stats: [
    {
      id: "s1",
      icon: "School",
      label: "Education",
      title: "Tsinghua Univ.",
      summary: "Master's & Bachelor's in Design",
      details: [
        "2023.09-2026.06 Master's GPA: 3.83/4.0",
        "2019.09-2023.06 Bachelor's GPA: 3.79/4.0",
        "Core: Project Mgmt, AI Product Design, Marketing, Brand Communication, Product Design, Psychology, etc.",
      ],
    },
    {
      id: "s2",
      icon: "Trophy",
      label: "Honors",
      title: "20+ Awards",
      summary: "National Scholarship_Top 1%_ x2",
      details: [
        "3x Tsinghua Academic Excellence Award",
        "2x Social Practice Excellence Scholarship",
        "Volunteer Service Excellence Scholarship, etc.",
      ],
    },
    {
      id: "s3",
      icon: "Rocket",
      label: "Innovation",
      title: "2 Startups",
      summary: "Tsinghua Innovation Talent Program",
      details: [
        "Led 2 startups: achieved 6-figure revenue & 30M valuation.",
        "1st Prize in Beijing & Bronze in National Innovation Competition",
        "Led multiple National/City-level Innovation Projects",
      ],
    },
  ],
  education: {
    school: "Tsinghua University",
    degree: "Master of Design",
  },
};

const aboutZh: AboutSection = {
  bio: React.createElement(
    React.Fragment,
    null,
    "从",
    React.createElement(
      "span",
      { className: "font-semibold text-neutral-900" },
      "设计创意"
    _,
    " 到 ",
    React.createElement(
      "span",
      { className: "font-semibold text-neutral-900" },
      "AI 产品"
    _,
    "，",
    React.createElement("br"_,
    "始终关注",
    React.createElement(
      "span",
      {
        className:
          "font-semibold text-neutral-900 border-b-4 border-purple-200/80",
      },
      "技术如何服务于人"
    _
  _,
  details:
    "拥有清华大学艺术设计学本硕+文创消费创业背景，我转型进入 AI 产品领域，致力于构建有意义的产品，将复杂的 AI 能力转化为简单有效、以人为本的解决方案。",
  stats: [
    {
      id: "s1",
      icon: "School",
      label: "教育背景",
      title: "清华大学",
      summary: "艺术设计专业 本科 & 硕士",
      details: [
        "2023.09-2026.06 硕士 GPA: 3.83/4.0",
        "2019.09-2023.06 本科 GPA: 3.79/4.0",
        "核心课程: 项目管理, 人工智能创新产品设计, 市场营销, 品牌传播, 工艺产品设计, 展示设计, 心理学等",
      ],
    },
    {
      id: "s2",
      icon: "Trophy",
      label: "奖项荣誉",
      title: "20+ 个奖项",
      summary: "2次 获得国家奖学金",
      details: [
        "3次 清华大学学业优秀奖学金",
        "2次 社会实践优秀奖学金",
        "志愿公益优秀奖学金等 20 余项荣誉",
      ],
    },
    {
      id: "s3",
      icon: "Rocket",
      label: "创新创业",
      title: "2个创业项目",
      summary: "入选清华大学创新创业人才培养计划",
      details: [
        "先后负责2个创业项目，分别营收六位数、投资估值三千万。",
        "国创赛北京市赛一等奖、国赛铜奖",
        "多次主持国家级/市级大创项目",
      ],
    },
  ],
  education: {
    school: "清华大学",
    degree: "设计学硕士",
  },
};

const projectsEn: Project[] = [
  {
    id: "p1",
    title: "AI Emotional Companion Ecosystem",
    category: "LLM & Psychology",
    date: "Feb 2025 - Present",
    summary:
      "Addressing the pain point of emotional companionship deficit among youth under 'social atomization', I led the planning of an emotional large model product based on the PEAR psychological cognitive architecture. Aiming to provide deep AI companionship and social support through personality mapping and dynamic emotional resonance, combined with an IP-based commercial operation model, cutting into the high-growth 'Loneliness Economy' market.",
    background:
      "Market Insight & Optimization: Based on 300+ user surveys, I led 3 key iterations from hardware to lightweight AI software, establishing 'PEAR Psychological Mapping + Multi-modal Interaction' as the core.",
    role: "Founder / Product Lead",
    system:
      "Business & Team: Built a 7-person interdisciplinary team from Tsinghua/PKU. Designed the 'AI + Psychology + IP' full-process business loop.",
    outcome:
      "Stage Achievements: Valued at 30 million RMB. Selected for Beijing AI Origin Community Startup Camp. Won Top 10 Teams_Top Prize_ at 2025 Tsinghua 'Design+' Innovation Competition.",
    tags: ["LLM", "Empathy Design", "RAG"],
    coverImage: "p1_cover.png",
    details: [
      {
        title: "Industry Research",
        content: `With the spread of social atomization and digital socializing, a huge gap has emerged between the demand and supply of emotional companionship for young people, giving rise to a trillion-dollar "Loneliness Economy" market. We systematically analyzed tracks such as companion robots, AI chat apps, and psychological counseling platforms, finding that existing solutions generally suffer from "sensory disconnection" or "lack of professionalism". Meanwhile, we observed the successful trend of merging "Gamification" and "CBT_Cognitive Behavioral Therapy_" in digital health. Based on this, we judged that an AI product integrating <b>deep emotional interaction, scientific psychological frameworks, and gamified experiences</b> has the opportunity to define the next generation of personal growth tools.`,
        images: ["p1_01_01.png", "p1_01_02.png"],
      },
      {
        title: "User Research",
        content: `To precisely locate needs, I led the design of questionnaires covering psychological states, daily scenarios, and tech acceptance, collecting 300+ valid samples, and conducting in-depth interviews with 20 typical users. Analysis found that the pain point of target users_20-35 year old solitary youth in tier-1 cities_ is not simply "no one to talk to", but the <b>lack of an immediate, safe, non-judgmental emotional outlet in specific high-pressure scenarios_e.g., late-night overtime, festive solitude_</b>, and a latent desire to improve their own emotional patterns. We thus output detailed user personas and behavioral reports.`,
        images: ["p1_02_01.png", "p1_02_02.png"],
      },
      {
        title: "Need Insight",
        content: `Through cluster analysis of survey data, I abstracted the deep need chain from "emotional catharsis" to "cognitive improvement". Users not only need to be listened to but also crave <b>awareness and understanding</b> of their emotional patterns. We identified three core need modules: "Immediate Emotional Support", "Low-Risk Social Practice", and "Cognitive Habit Formation", summarizing them into the core product concept of "assisting users in achieving personal cognitive evolution through gamified interaction", upgrading the project from "Emotional Companionship" to a "Growth System".`,
        images: ["p1_03.png"],
      },
      {
        title: "Product Definition",
        content: `Based on these insights, I led the core product definition: a <b>Gamified AI Personal Cognitive Evolution System based on the PEAR Psychological Cognitive Architecture</b>. The product maps user personality and resonates with emotions through multi-modal dialogue and interaction with a character holding an IP worldview, dynamically providing cognitive adjustment strategies. We defined the <b>mobile lightweight App</b> as the core carrier and planned the core user experience path of "Psychological Test Traffic Generation -> Scenario-based AI Companionship -> Advanced Growth Tools".`,
        images: ["p1_04.png"],
      },
      {
        title: "Product Architecture",
        content: `I planned a three-layer architecture of "Frontend Interaction - Middle Platform Logic - Backend AI". The frontend focuses on high-stickiness IP character dialogue interfaces and lightweight gamified task systems; the middle platform integrates user growth systems, content management, and data analysis; the backend relies on the PEAR framework-driven Large Model. The entire architecture ensures <b>smoothness of user experience, scalability of AI services, and analyzability of user behavior data</b>.`,
        images: ["p1_05.png"],
      },
      {
        title: "Technical Solution",
        content: `In the early stage with highly limited resources, to ensure core product logic could be verified at lowest cost and fastest speed, I led a <b>"Phased, Progressive" technical path</b>:

<b>Current Stage_Implemented_: Prompt Engineering driving core interactions</b>
We first used mature third-party LLM APIs_e.g., DeepSeek_ and through careful Prompt Engineering, systematically translated psychological knowledge_PEAR framework_ into structured prompts, allowing us to build an MVP with zero algorithm team investment that simulates "Empathy" and "Cognitive Guidance".

<b>Mid-term Plan: Introducing RAG for professionalism and personalization</b>
We plan to introduce RAG_Retrieval-Augmented Generation_, using professional psychological knowledge bases and user personal growth records as external knowledge sources.

<b>Long-term Vision: Data Flywheel fine-tuning specific vertical models</b>
After accumulating data assets, we plan to train a lightweight domain model via SFT or LoRA.

The entire technical solution reflects the principle of <b>"Validating product value first, driving technical upgrades with data accumulation"</b>.`,
        images: ["p1_06.png"],
      },
      {
        title: "Data Strategy",
        content: `I planned the <b>Data Flywheel Core Loop</b>: Initially build a high-quality seed training set conforming to the PEAR framework using structured user research and open psychological corpora. Post-launch, continuously feed back user anonymous dialogue and behavioral data to optimize the model, while designing strict data privacy and security protocols. This aims to transform user interaction into fuel for improving AI "Empathy" capabilities, building a long-term data barrier.`,
        images: ["p1_07.png"],
      },
      {
        title: "MVP Development",
        content: `<b>1.0 Hardware Prototype_Completed_:</b>
To verify "Physical Interaction", we built a desktop robot prototype. It helped us realize the high cost of hardware and pivoted us towards software.

<b>2.0 Software Prototype_In Progress_:</b>
I am leading the definition of a lightweight software form_Mini Program_. Core functions realized: Empathic Dialogue with IP characters, Gamified Tasks for self-awareness, and Mood Diaries. This prototype validated the "Gamified Dialogue-Driven Cognitive Awareness" interaction mode.`,
        images: ["p1_08_01.png", "p1_08_02.png"],
      },
      {
        title: "Product Iteration",
        content: `Driven three key strategic iterations: <b>1.0 stage</b>, planned physical robot but found high costs; <b>2.0 stage</b>, pivoted to pure software but focused on model fine-tuning services; <b>3.0 stage</b>, established "AI Psychology + Gamified APP + IP Operations" lightweight form. Each iteration was a decisive adjustment based on market feedback and resource feasibility.`,
        images: ["p1_09.png"],
      },
      {
        title: "Project Management",
        content: `Built a 7-person interdisciplinary team_Psychology, CS, Design_. I was responsible for the Product Roadmap and Monthly Plans, managing risks through regular meetings. Managed external affairs_Business Plans, Competitions, Investors_ ensuring efficient progress towards goals with limited resources.`,
      },
      {
        title: "Stage Achievements",
        content: `<b>Research level</b>: Output detailed User and Market Analysis Reports;
<b>Product level</b>: Completed Product Definition, Architecture Design, High-fidelity Prototypes, and demoable MVP;
<b>Business level</b>: Built complete "IP + AI + Service" Business Model and Financial Model;
<b>Honors and Validation</b>: Valued at 30 million RMB, won Top Prize at 2025 Tsinghua "Design+" Innovation Competition, selected for Beijing AI Incubation Camp.`,
      },
    ],
  },
  {
    id: "p2",
    title: "AI Personality Assessment System",
    category: "Assessment Product",
    date: "Apr 2025 - Oct 2025",
    summary:
      "To solve the 'cold start' user profiling problem in the 'AI Emotional Companion' project, and to engage users immediately, while addressing the 'forced choice' issue of traditional psychological scales and improving accuracy, I led the design and implementation of an AI personality analysis workflow based on non-inductive open-ended questions and dynamic semantic mapping. It can simultaneously assess Big Five, MBTI, and Attachment Types.",
    background:
      "Pain Point: Solving the 'Cold Start' profiling issue and replacing 'Forced Choice' in traditional scales to improve user engagement.",
    role: "Product Lead",
    system:
      "Solution: Designed open-ended questions based on Projective Theory; built a 'User Answer -> 16-Dim Score -> Natural Language Report' workflow.",
    outcome:
      "Impact: Delivered an automated analysis prototype verified by 600+ users with 80%+ accuracy.",
    tags: ["User Experience", "Prompt Engineering", "Data Analysis"],
    coverImage: "p2_cover.png",
    details: [
      {
        title: "Pain Point Analysis",
        content: `Traditional personality assessments rely on "Forced-Choice" scales, limiting the capture of the complex real self and causing user fatigue. My core task was to design an efficient, natural, accurate personality recognition entry that is both <b>Scientifically Rigorous</b> and offers <b>User Experience Fluency</b>. It acts as the <b>"Golden Period of First Encounter"</b> to quickly build trust and interest. Essentially, it was designing a "Thinking" Questioning & Parsing System.`,
      },
      {
        title: "Product Design",
        content: `I abandoned direct questions, designing 5 Progressive Open-ended Questions based on <b>Psychological Projection Theory</b> and <b>Compensatory Fantasy</b> principles_e.g., "If you had a parallel avatar..."_. This projects inner needs without pressure. I dismantled each question into directions and sub-motives, building a granular "Semantic-Trait" Mapping Matrix. The core is transforming a casual chat into a structured psychological observation.`,
        image: "https://picsum.photos/seed/p2_design/800/600",
      },
      {
        title: "Algorithm Logic",
        content: `The "Brain" of the project. I led the construction of the Dynamic Mapping Logic from <b>Natural Language Answer to 16-Dimensional Personality Score</b>. Key steps: 1_ <b>Motive Recognition</b>: Determine answer direction; 2_ <b>Dynamic Scoring</b>: Call scoring vectors covering Big Five, MBTI, Attachment Types; 3_ <b>Weighted Integration</b>: Handle mixed motives. I established detailed scoring verification rules to ensure scientific validity.`,
        image: "https://picsum.photos/seed/p2_logic/800/600",
      },
      {
        title: "System Implementation",
        content: `As Product Lead, I coordinated dev teams. 1_ <b>Define Data Structures</b>: Question banks, mapping tables, API fields; 2_ <b>Connect Workflow</b>: "Input -> Intent -> Motive -> Score -> Report"; 3_ <b>Establish Evaluation System</b>: Designed accuracy metrics based on user feedback to drive algorithm optimization.`,
      },
      {
        title: "Project Outcomes",
        content: `Delivered a running AI Personality Analysis System Prototype. Verified by <b>600+</b> real users, achieving a <b>Comprehensive Accuracy Stable above 80%</b>, significantly outperforming traditional scales in initial interactions. This module acts as the "Ice-breaking" feature, greatly improving user engagement and trust.`,
        images: ["https://picsum.photos/seed/p2_outcome/800/600"],
      },
    ],
  },
  {
    id: "p3",
    title: "AI Cultural Heritage Brand",
    category: "AIGC & Commercialization",
    date: "Mar 2023 - Feb 2025",
    summary:
      "To address the pain point of 'no design, no product system' in intangible cultural heritage_ICH_ lacquer craft, I founded this brand. Combining AI technology, I developed a product matrix of 100+ SKUs covering jewelry, tea sets, and furniture, targeting B-side gifting and C-side consumer markets, promoting the productization and commercialization of traditional crafts.",
    background:
      "Problem: Cultural redesign is manual, slow, and expensive. ICH faces a lack of modern design systems.",
    role: "Founder / Product Lead",
    system:
      "Solution: Used Midjourney for rapid pattern generation and product design, creating a distributed production network.",
    outcome:
      "Impact: Won National Bronze Award. Achieved six-figure revenue. Incubated by Tsinghua x-lab.",
    tags: ["GenAI Workflow", "Product Launch", "Cultural IP"],
    coverImage: "p3_cover.png",
    details: [
      {
        title: "Market Analysis & Positioning",
        content: `Intangible cultural heritage_ICH_ lacquer craft faces the dilemma of "having craft but no design". With the rise of "Guochao", demand for cultural products is surging. The brand is positioned as an <b>"Intangible Cultural Heritage Craft + Contemporary Design + AI Empowerment" cultural consumer brand</b>, targeting B-side corporate gifting and C-side cultural consumers, aiming to bring lacquer craft back to daily life.`,
        images: ["p3_01_01.png", "p3_01_02.png"],
      },
      {
        title: "User Research & Needs",
        content: `Team research found that B-side clients value cultural connotation and customization, while C-side users seek a balance of design and utility. Users expect products to <b>combine traditional craft heritage with contemporary aesthetic expression, while reinforcing cultural storytelling and differentiated design</b>.`,
      },
      {
        title: "Product Definition & Planning",
        content: `We planned four categories: Jewelry, Tea Sets, Stationery, and Home Decor. By translating classic patterns like Dunhuang and Chu Culture, we formed IP series. In execution, we are <b>Using AI image generation technology_like Midjourney_ to assist pattern design and style testing, rapidly iterating solutions that fit modern aesthetics</b>, successfully developing 100+ SKUs.`,
        images: ["p3_03_01.png", "p3_03_02.png"],
      },
      {
        title: "AI Tech Empowerment",
        content: `<b>Design Innovation & Style Generation</b>: Rapidly generate lacquer patterns and product looks using AI, digitally translating traditional elements.
<b>Product Photography & Smart Retouching</b>: Using AI tools to process shooting materials, unifying visual style.
<b>Smart Copywriting</b>: AI-generated product stories and marketing copy based on cultural attributes.`,
        images: [
          "p3_04_01.png",
          "p3_04_02.png",
          "p3_04_03.png",
        ],
      },
      {
        title: "Supply Chain & Production",
        content: `Visited 100+ production areas and established stable cooperation with <b>5+ factories</b> in Hubei, Fujian, etc., ensuring quality and enabling flexible small-batch production.`,
        images: ["p3_05_01.png", "p3_05_02.png"],
      },
      {
        title: "Team & Execution",
        content: `Built a 14-person interdisciplinary student team. As the lead, I coordinated product dev, supply chain, and resources. <b>Through efficient project management and interdisciplinary collaboration, achieved product matrix construction, factory cooperation, and revenue breakthrough with limited resources</b>.`,
      },
      {
        title: "Achievements",
        content: `Achieved six-figure revenue_B-side + C-side_. Won 1st Prize in Beijing & National Bronze in Innovation Competition. Incubated by Tsinghua x-lab. These results <b>marking the initial success of the "AI + Intangible Heritage" commercialization path, providing a replicable model for the digital transformation of traditional crafts</b>.`,
      },
    ],
  },
];

const projectsZh: Project[] = [
  {
    id: "p1",
    title: "AI 情感陪伴软硬件产品",
    category: "LLM & 心理学",
    date: "2025.02 - 至今",
    summary:
      "针对“社会原子化”下青年群体情感陪伴缺失的痛点，主导规划了一款基于PEAR心理认知架构的情绪大模型产品，旨在通过人格映射与动态情绪共鸣，结合IP化商业运营模式，提供深度AI陪伴与社交支持，切入高速增长的孤独经济市场。",
    background:
      "市场洞察与优化：基于 300+ 用户调研，主导了从硬件到轻量化 AI 软件的 3 次关键迭代，确立了“PEAR 心理映射 + 多模态交互”为核心。",
    role: "创始人 / 产品负责人",
    system:
      "商业与团队：组建了来自清华/北大的 7 人跨学科团队。设计了“AI + 心理学 + IP”的全流程商业闭环。",
    outcome:
      "阶段成果：获投资估值 3000 万人民币。入选北京市 AI 原点社区创业加速营。获得 2025 清华“设计+”创新大赛十佳团队（最高奖）。",
    tags: ["大语言模型", "共情设计", "RAG"],
    coverImage: "p1_cover.png",
    details: [
      {
        title: "行业研究",
        content: `随着社会原子化与数字社交的普及，青年群体的情感陪伴需求与供给间出现巨大缺口，催生了万亿规模的“孤独经济”市场。我们系统分析了国内外陪伴机器人、AI聊天应用及心理咨询平台等赛道，发现现有解决方案普遍存在“感官断层”或“专业度不足”的问题。同时，我们观察到“游戏化”与“认知行为疗法”在数字健康领域的成功融合趋势。基于此，我们判断：一个融合<b>深度情感交互、科学心理框架与游戏化体验</b>的AI产品，将有机会定义下一代个人成长工具，切入高速增长的蓝海市场。`,
        images: ["p1_01_01.png", "p1_01_02.png"],
      },
      {
        title: "用户研究",
        content: `为精准定位需求，我主导设计了涵盖心理状态、日常场景与科技接受度的调研问卷，回收有效样本300余份，并对20名典型用户进行了深度访谈。分析发现，目标用户（20-35岁一线城市独居青年）的痛点并非简单的“无人说话”，而是<b>在特定高压场景（如深夜加班、节日独处）下缺乏即时、安全、非评判性的情绪出口</b>，且普遍对改善自身情绪模式有潜在诉求。我们据此输出了详细的用户画像与行为特征报告，为产品定义奠定了坚实基础。`,
        images: ["p1_02_01.png", "p1_02_02.png"],
      },
      {
        title: "需求洞察",
        content: `通过对调研数据的聚类分析，我抽象出用户从“情绪宣泄”到“认知改善”的深层需求链条。用户不仅需要被倾听，更渴望在互动中获得对自身情绪模式的<b>觉察与理解</b>，进而掌握调节方法。我们识别出“即时情绪支持”、“低风险社交练习”、“认知习惯养成”三大核心需求模块，并最终将其归纳为“通过游戏化互动，辅助用户实现个人认知进化”的核心产品理念，使项目从“情感陪伴”升级为“成长系统”。`,
        images: ["p1_03.png"],
      },
      {
        title: "产品定义",
        content: `基于这些洞察，我主导了核心产品定义：一个<b>基于PEAR 心理认知架构的游戏化AI个人认知进化系统</b>。产品通过与一个承载IP世界观的角色进行多模态对话与互动，在模拟情境中映射用户人格、共鸣情绪，并动态提供认知调整策略。我们明确了以<b>移动端轻量级APP</b>为核心载体的形态，并规划了“心理测试引流-场景化AI陪伴-进阶成长工具”的核心用户体验路径，确保了产品愿景与现阶段资源、技术可行性的高度统一。`,
        images: ["p1_04.png"],
      },
      {
        title: "产品架构",
        content: `我规划了“前端交互 - 中台逻辑 - 后端 AI”的三层架构。前端以高粘性的IP角色对话界面与轻量游戏化任务系统为核心；中台集成用户成长体系、内容管理及数据分析模块；后端则依托PEAR框架驱动的大模型提供核心交互能力。整个架构设计确保了<b>用户体验的流畅性、AI服务的可扩展性以及用户行为数据的可分析性</b>，为产品的迭代与商业化打下了清晰的结构基础。`,
        images: ["p1_05.png"],
      },
      {
        title: "技术方案",
        content: `在资源高度受限的创业初期，为确保核心产品逻辑能以最低成本、最快速度被验证，我主导规划并实施了一条<b> “分阶段、渐进式”的技术路径</b>。

<b>当前阶段（已实现）：Prompt Engineering 驱动核心交互</b>
我们首先基于成熟的第三方大模型API（如DeepSeek、豆包语音），通过精心的Prompt Engineering（提示词工程），构建了产品的核心对话逻辑与交互流程。我们将心理学知识（PEAR框架）与产品规则，系统地转化为结构化的提示词与上下文指令，使通用大模型能在预设边界内，模拟出具有“共情”与“认知引导”能力的对话体验。此方案让我们在零算法团队投入的情况下，快速构建出可演示、可测试的MVP，核心功能开发周期缩短了70%以上。

<b>中期规划：引入RAG增强专业性与个性化</b>
下一阶段，我们计划引入RAG（检索增强生成）技术，将专业的心理学知识库、用户个人成长记录作为外部知识源。这将使AI的回应不仅基于模型参数，更能基于权威知识和历史互动，大幅提升建议的准确性与个性化程度，是性价比极高的能力升级。

<b>远期愿景：数据飞轮微调专属垂直模型</b>
在产品验证成功、数据资产积累到一定规模后，我们规划通过 SFT（有监督微调）或LoRA等技术，训练专属于“认知进化”场景的轻量化领域模型。这将最终形成我们的核心技术壁垒，实现更稳定、更拟人、更私密的交互体验。

整个技术方案体现了<b> “以产品价值验证为先导，以数据积累驱动技术升级” </b>的务实原则，确保每一分技术投入都直接服务于用户可感知的价值提升。`,
        images: ["p1_06.png"],
      },
      {
        title: "数据策略",
        content: `我规划了<b>数据飞轮核心闭环</b>：初期通过结构化的用户调研、公开心理学语料及IP剧情对话构建高质量、符合PEAR框架的种子训练集。产品上线后，规划通过用户匿名化的对话交互、行为选择数据持续反哺模型优化，并设计了严格的数据隐私与安全协议。该方案旨在将用户互动自然转化为提升AI“共情”与“认知引导”能力的燃料，构建长期的数据壁垒。`,
        images: ["p1_07.png"],
      },
      {
        title: "MVP 开发",
        content: `<b>1.0 硬件原型（已完成）：</b>
为验证“物理实体交互”的可行性，我们独立设计并手工打造了一款桌面级陪伴机器人原型。我负责定义其交互逻辑：机器人具备可动的关节（如手臂、头部），并接入了大模型API，使其能进行基础对话与简单的动作响应。该原型帮助我们亲身体验了硬件开发的复杂性与高昂成本（如开模、供应链），并清醒认识到，在当前的芯片算力与电池技术下，硬件产品难以在合理成本内提供流畅的情感交互体验。此轮验证直接支撑了后续向软件转型的关键决策。
<b>2.0 软件原型（进行中）：</b>
基于硬件验证的结论，我主导将产品重心转向轻量化的软件形态。目前，我正全面负责一款小程序的产品定义与体验设计：主导其UI视觉、艺术风格及核心功能模块规划，并协调技术团队进行开发。该原型的核心功能已实现：用户可与承载IP世界观的角色进行共情对话；通过完成我设计的、旨在引导自我觉察的游戏化任务；并使用集成的情绪日记与成长记录功能，可视化追踪自身认知与情绪模式的变化。此原型已用于早期演示与内部测试，有效验证了“游戏化对话驱动认知觉察”这一核心交互模式的可行性与用户接受度。`,
        images: ["p1_08_01.png", "p1_08_02.png"],
      },
      {
        title: "产品迭代",
        content: `在产品策划过程中，我主导推动了三次关键的战略迭代：<b>1.0阶段</b>，受硬件创业浪潮影响，曾规划实体机器人，但经评估后发现成本与供应链挑战巨大；<b>2.0阶段</b>，转向纯软件，聚焦于大模型微调服务，但系统工程难度巨大；最终进入<b>3.0阶段</b>，确立以“AI心理认知+游戏化APP+IP运营”的轻量产品形态，确保用户价值与商业路径的清晰。每一次迭代都是基于市场反馈、资源与技术可行性进行的深度复盘与果断调整。`,
        images: ["p1_09.png"],
      },
      {
        title: "项目管理",
        content: `作为项目发起人与产品负责人，我从0到1组建了涵盖清华、北大的心理学、计算机、设计专业的7人跨学科团队。我负责制定项目整体路线图与月度计划，通过定期例会同步进度、管理风险。我统筹了所有对外事务，包括商业计划书撰写、参加创新创业大赛、对接孵化器与潜在投资机构，并负责团队内部分工与激励。通过系统的项目管理，确保了在有限资源下，团队能高效地向各阶段目标推进。`,
      },
      {
        title: "阶段成果",
        content: `在我的主导推动下，项目取得了坚实的阶段性成果：
<b>研究层面</b>，输出了详实的用户与市场分析报告；
<b>产品层面</b>，完成了清晰的产品定义、架构设计、高保真原型及可演示的MVP；
<b>商业层面</b>，构建了完整的“IP+AI+服务”商业模式与财务模型，并完成首轮融资规划；
<b>荣誉与验证</b>，项目现估值3000万，获得2025清华大学“设计+”国际创新创业大赛最高奖，入选北京市AI孵化加速营。
这系列成果完整验证了从市场洞察到产品定义的逻辑闭环。`,
      },
    ],
  },
  {
    id: "p2",
    title: "AI 人格测评分析系统",
    category: "人格分析 & 测评",
    date: "2025.04 - 2025.10",
    summary:
      "为解决“AI情感陪伴软硬件”项目中“如何快速识别用户的人格画像、第一时间引起用户的使用兴趣”的问题，同时为了解决传统心理学量表存在的“迫选”问题及提升人格识别准确率，主导设计并落地了一套基于非诱导性开放问题与动态语义映射的AI人格分析Workflow，能够同步评估大五人格、MBTI及依恋类型等多维度人格特征。",
    background:
      "痛点：解决AI情感陪伴产品“冷启动”画像问题，取代传统量表中的“强制选择”以提高用户参与度。",
    role: "产品负责人",
    system:
      "解决方案：设计了基于投射理论的5个非诱导式开放式问题；构建了“用户回答 -> 16 维评分 -> 自然语言报告”的工作流。",
    outcome:
      "成果：完成一套可自动输出人格分析报告的系统原型，经过600+位用户反馈验证人格分析准确率达80%。",
    tags: ["用户体验", "提示词工程", "数据分析"],
    coverImage: "p2_cover.png",
    details: [
      {
        title: "痛点分析",
        content: `传统人格评估依赖“迫选式”量表，面临两大瓶颈：一是“迫选”情境迫使用户在非此即彼的标签中做选择，无法捕捉复杂、矛盾的真实自我；二是冗长题项导致用户疲惫，难以在AI情感产品的<b>初遇黄金期</b>快速建立信任与兴趣。我的核心任务是：设计一套高效、自然、准确的人格识别入口，它必须兼具<b>科学严谨性</b>与<b>用户体验流畅性</b>。这要求将深度的心理学理论，转化为用户无感知的、乐于参与的互动对话，并在极短时间内完成从非结构化语言到结构化人格画像的映射，其本质是设计一套“会思考”的提问与解析系统。`,
        image: "p2_01.png",
      },
      {
        title: "产品设计",
        content: `我摒弃了直接询问“你是否外向”的诱导式提问，转而基于<b>心理投射理论</b>和<b>补偿性幻想</b>原理，设计了5个层层递进的开放性问题。例如，“如果你有一个平行分身，最想让他替你完成什么？”——此类问题不直接触及用户自身，却能有效投射其内在需求、未竟愿望与认知模式。我将每个问题拆解为数十种可能的回答方向与细分动机，构建了一个细粒度的“语义-特质”映射矩阵（举例如下图）。产品设计的核心在于，将一次看似随意的聊天，转化为一次结构化的心理观察，且整个过程对用户完全透明、无压力。`,
        image: "p2_02.png",
      },
      {
        title: "算法逻辑",
        content: `这是项目的“大脑”。我主导构建了从<b>自然语言回答到16维人格分数</b>的动态映射逻辑。关键在于：1_ <b>动机识别</b>：系统需先判定用户回答归属于哪个预设方向及子动机；2_ <b>动态赋分</b>：根据动机调用对应的赋分向量，该向量涵盖大五人格、MBTI、依恋类型等16个维度；3_ <b>加权集成</b>：支持用户混合动机回答，算法能按提及比例自动加权计算。为确保科学性，我制定了详细的赋分核验规则，并进行了多轮迭代。例如，规则明确“用户描述的未来进步，反映的是当前不足”，从而确保映射的是真实状态而非理想自我。`,
        image: "p2_03.png",
      },
      {
        title: "系统实现",
        content: `我作为产品负责人，协调技术人员，将设计逻辑落地为可运行的系统。工作包括：1_ <b>定义数据结构</b>：设计并交付清晰的问题库、映射表、分析报告语料库等（举例如下图）；2_ <b>串联工作流</b>：明确“用户输入→意图识别→动机匹配→分数计算→报告生成”的全流程技术方案与API调用逻辑；3_ <b>建立评估体系</b>：为验证效果，我设计了基于用户反馈的准确率评价指标（如“报告是否说中了你？”），推动建立数据回收与分析通道，用实证数据驱动算法优化。`,
        image: "p2_04.png",
      },
      {
        title: "项目成果",
        content: `项目成功交付了一套可自动运行的AI人格分析系统原型。经过约<b>600位</b>真实用户测试与反馈循环，最终人格分析报告的<b>综合准确率稳定在80%以上</b>，显著超越传统量表在初始互动中的表现（举例如下图）。更为重要的是，该模块作为产品的"破冰"功能，极大提升了用户的初始参与度和对AI的信任感，用户停留时长与后续功能使用率均有明显增长。这验证了以产品化思维解决复杂心理学评估问题的可行性，为AI情感交互提供了关键的个性化认知入口。`,
        images: ["p2_05.png"],
      },
    ],
  },
  {
    id: "p3",
    title: "AI 赋能非遗文创设计品牌",
    category: "AIGC & 商业化",
    date: "2023.03 - 2025.02",
    summary:
      "为解决非遗大漆工艺“无设计、无产品体系”的痛点，我创立该品牌，结合AI技术开发涵盖首饰、茶具、家具等100+SKU的产品矩阵，面向B端礼品与C端消费市场，推动传统工艺产品化与商业化。",
    background:
      "问题：非遗工艺的再设计是手工的、缓慢且昂贵的。非遗面临现代设计系统的缺失。",
    role: "创始人 / 产品负责人",
    system:
      "解决方案：利用 Midjourney 进行快速纹样生成和产品设计，创建了分布式生产网络。",
    outcome: "影响：获得国家级铜奖。实现六位数营收。入选清华 x-lab 孵化。",
    tags: ["GenAI 工作流", "产品发布", "文化 IP"],
    coverImage: "p3_cover.png",
    details: [
      {
        title: "市场分析与品牌定位",
        content: `非遗大漆工艺传承千年，却长期面临"有工艺、无设计、有传承、无产品"的困境，难以适应现代消费市场。随着国潮兴起与文化消费升级，中高端礼品与文创产品需求激增，为传统工艺的当代转化提供了窗口。一漆一绘品牌由此定位为<b>"非遗工艺+当代设计+AI赋能"的文化消费品牌</b>，聚焦B端企业礼品与C端文化消费人群，旨在通过系统性产品开发，让大漆工艺重新回归日常生活，实现商业价值与文化传承的双重突破。`,
        images: ["p3_01_01.png", "p3_01_02.png"],
      },
      {
        title: "用户研究与需求定义",
        content: `项目初期，团队深入B端企业采购与C端用户进行调研，发现企业客户对礼品需求集中在文化内涵、定制能力和品牌溢价上；而个人消费者则追求设计感、实用性与收藏价值的平衡。用户普遍认为现有非遗产品过于传统老气，缺乏与现代审美融合的产品。基于此，我们明确产品需<b>兼具传统工艺底蕴与当代美学表达，同时强化文化故事性与差异化设计</b>，为后续产品开发奠定精准的用户需求基础。`,
      },
      {
        title: "产品定义与工作规划",
        content: `围绕用户需求，我们规划了饰品、茶器、文房、家居四大品类，构建"漆艺+"产品矩阵。通过提取敦煌、楚文化等经典纹样进行现代化转译，形成"文物新生""华夏色"等系列IP，赋予产品文化厚度。在具体落地中，<b>运用AI生图技术（如Midjourney）辅助纹样设计与风格测试，快速迭代出符合现代审美的方案</b>，成功开发100+SKU，实现从单点工艺到产品体系的跨越，解决了非遗"无产品体系"的核心痛点。`,
        images: ["p3_03_01.png", "p3_03_02.png"],
      },
      {
        title: "AI技术赋能设计生产全流程",
        content: `<b>设计创新与样式生成</b>：通过AI生图快速生成漆艺纹样与产品外观方案，将传统元素数字化转译，提升设计效率与多样性，支撑"一漆一绘"系列产品落地。
<b>产品摄影与智能修图</b>：结合AI修图工具，处理产品拍摄素材，统一视觉风格，增强产品质感，满足电商与宣传物料的高效产出。
<b>营销文案智能生成</b>：基于产品文化属性，使用AI辅助生成故事化文案与社交媒体内容，强化品牌调性，提升传播一致性。`,
        images: [
          "p3_04_01.png",
          "p3_04_02.png",
          "p3_04_03.png",
        ],
      },
      {
        title: "供应链搭建与生产管理",
        content: `为实现设计落地，团队实地走访全国100+漆艺产区与工坊，最终在湖北、福建等地与5+个工厂建立稳定生产合作关系，确保稳定优质的工艺品质，实现小批量柔性生产与成本可控，为100+SKU的商业化提供供应链保障。`,
        images: ["p3_05_01.png", "p3_05_02.png"],
      },
      {
        title: "团队管理与项目执行",
        content: `项目从0到1组建了一支14人的跨专业学生团队，涵盖设计、技术、运营、等职能。作为负责人，我统筹产品开发、供应链对接、资源协调与进度控制，推动项目从概念走向落地。<b>通过高效的项目管理与跨学科协作，在有限资源下实现了产品矩阵搭建、工厂合作与营收突破</b>，积累了从创意到商业化的全流程实战经验。`,
      },
      {
        title: "阶段成果与商业验证",
        content: `品牌已实现六位数营收，覆盖B端礼品采购与C端零售，验证了商业模式的可行性。项目获得2024“国创赛”北京市一等奖、国家级铜奖，并入驻清华大学“创+”、xlab孵化平台及启迪之星孵化体系，得到创业生态的认可与支持。这些成果<b>标志着“AI+非遗”商业化路径的初步成功，为传统工艺的数字化转型提供了可复制的范本</b>。`,
        image: "p3_07.png",
      },
    ],
  },
];

const aiCategoriesEn: AICategory[] = [
  {
    id: "art",
    title: "Art Design",
    description:
      "Exploring form and aesthetics through Midjourney. Studies in classical shapes, surreal landscapes, and modern product concepts.",
    coverImage: "aigc1_art_design_1_.png",
  },
  {
    id: "graphic",
    title: "Graphic Design",
    description:
      "Visual communication experiments. Abstract fluid compositions, texture simulations, and layout exploration.",
    coverImage: "aigc2_graphic_design_1_.png",
  },
  {
    id: "fiction",
    title: "Interactive Fiction",
    description:
      "Character and scene generation for narrative games. Maintaining consistent styles across diverse story branches.",
    coverImage: "aigc3_interactive_novel_1_.png",
  },
  {
    id: "app",
    title: "AI Applications",
    description:
      "Functional prototypes powered by GenAI. Interior design rendering, architectural visualization, and UI assets.",
    coverImage: "aigc4_application.png",
  },
];

const aiCategoriesZh: AICategory[] = [
  {
    id: "art",
    title: "艺术设计",
    description:
      "通过 Midjourney 探索形式与美学。包括传统器型再造、超现实景观生成及未来产品形态推演。",
    coverImage: "aigc1_art_design_1_.png",
  },
  {
    id: "graphic",
    title: "平面设计",
    description:
      "视觉传达的 AI 实验。涵盖抽象流体构成、极致材质模拟及版式设计探索。",
    coverImage: "aigc2_graphic_design_1_.png",
  },
  {
    id: "fiction",
    title: "互动小说",
    description:
      "叙事类游戏的视觉资产生成。专注于角色一致性保持与沉浸式场景构建。",
    coverImage: "aigc3_interactive_novel_1_.png",
  },
  {
    id: "app",
    title: "AI 应用",
    description:
      "生成式 AI 驱动的功能性原型。包括室内设计渲染、建筑可视化及用户界面素材生成。",
    coverImage: "aigc4_application.png",
  },
];

const aiWorksEn: AIGeneratedWork[] = [
  {
    id: "w1",
    title: "Art Design 01",
    imageUrl: "aigc1_art_design_1_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w2",
    title: "Art Design 02",
    imageUrl: "aigc1_art_design_2_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w3",
    title: "Art Design 03",
    imageUrl: "aigc1_art_design_3_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w4",
    title: "Art Design 04",
    imageUrl: "aigc1_art_design_4_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w5",
    title: "Art Design 05",
    imageUrl: "aigc1_art_design_5_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w6",
    title: "Art Design 06",
    imageUrl: "aigc1_art_design_6_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w7",
    title: "Art Design 07",
    imageUrl: "aigc1_art_design_7_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w8",
    title: "Art Design 08",
    imageUrl: "aigc1_art_design_8_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w9",
    title: "Art Design 09",
    imageUrl: "aigc1_art_design_9_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w10",
    title: "Art Design 10",
    imageUrl: "aigc1_art_design_10_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w11",
    title: "Art Design 11",
    imageUrl: "aigc1_art_design_11_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w12",
    title: "Art Design 12",
    imageUrl: "aigc1_art_design_12_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w13",
    title: "Art Design 13",
    imageUrl: "aigc1_art_design_13_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w14",
    title: "Art Design 14",
    imageUrl: "aigc1_art_design_14_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w15",
    title: "Art Design 15",
    imageUrl: "aigc1_art_design_15_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w16",
    title: "Art Design 16",
    imageUrl: "aigc1_art_design_16_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w17",
    title: "Art Design 17",
    imageUrl: "aigc1_art_design_17_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w18",
    title: "Art Design 18",
    imageUrl: "aigc1_art_design_18_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w19",
    title: "Art Design 19",
    imageUrl: "aigc1_art_design_19_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w20",
    title: "Art Design 20",
    imageUrl: "aigc1_art_design_20_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w21",
    title: "Art Design 21",
    imageUrl: "aigc1_art_design_21_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w22",
    title: "Art Design 22",
    imageUrl: "aigc1_art_design_22_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w23",
    title: "Art Design 23",
    imageUrl: "aigc1_art_design_23_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w24",
    title: "Art Design 24",
    imageUrl: "aigc1_art_design_24_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "w25",
    title: "Art Design 25",
    imageUrl: "aigc1_art_design_25_.png",
    tool: "Midjourney",
    description: "AI-generated art design.",
    category: "art",
  },
  {
    id: "g1",
    title: "Graphic Design 01",
    imageUrl: "aigc2_graphic_design_1_.png",
    tool: "Midjourney",
    description: "AI-generated graphic design.",
    category: "graphic",
  },
  {
    id: "g2",
    title: "Graphic Design 02",
    imageUrl: "aigc2_graphic_design_2_.png",
    tool: "Midjourney",
    description: "AI-generated graphic design.",
    category: "graphic",
  },
  {
    id: "g3",
    title: "Graphic Design 03",
    imageUrl: "aigc2_graphic_design_3_.png",
    tool: "Midjourney",
    description: "AI-generated graphic design.",
    category: "graphic",
  },
  {
    id: "g4",
    title: "Graphic Design 04",
    imageUrl: "aigc2_graphic_design_4_.png",
    tool: "Midjourney",
    description: "AI-generated graphic design.",
    category: "graphic",
  },
  {
    id: "g5",
    title: "Graphic Design 05",
    imageUrl: "aigc2_graphic_design_5_.png",
    tool: "Midjourney",
    description: "AI-generated graphic design.",
    category: "graphic",
  },
  {
    id: "g6",
    title: "Graphic Design 06",
    imageUrl: "aigc2_graphic_design_6_.png",
    tool: "Midjourney",
    description: "AI-generated graphic design.",
    category: "graphic",
  },
  {
    id: "g7",
    title: "Graphic Design 07",
    imageUrl: "aigc2_graphic_design_7_.png",
    tool: "Midjourney",
    description: "AI-generated graphic design.",
    category: "graphic",
  },
  {
    id: "g8",
    title: "Graphic Design 08",
    imageUrl: "aigc2_graphic_design_8_.png",
    tool: "Midjourney",
    description: "AI-generated graphic design.",
    category: "graphic",
  },
  {
    id: "g9",
    title: "Graphic Design 09",
    imageUrl: "aigc2_graphic_design_9_.png",
    tool: "Midjourney",
    description: "AI-generated graphic design.",
    category: "graphic",
  },
  {
    id: "g10",
    title: "Graphic Design 10",
    imageUrl: "aigc2_graphic_design_10_.png",
    tool: "Midjourney",
    description: "AI-generated graphic design.",
    category: "graphic",
  },
  {
    id: "f1",
    title: "Interactive Fiction 01",
    imageUrl: "aigc3_interactive_novel_1_.png",
    tool: "Midjourney",
    description: "AI-generated interactive fiction.",
    category: "fiction",
  },
  {
    id: "f2",
    title: "Interactive Fiction 02",
    imageUrl: "aigc3_interactive_novel_2_.png",
    tool: "Midjourney",
    description: "AI-generated interactive fiction.",
    category: "fiction",
  },
  {
    id: "app1",
    title: "摸鱼鱼 —— 职场人的摸鱼搭子",
    imageUrl: "aigc4_application_01.jpg",
    tool: "Midjourney / Electron",
    description:
      "在极端追求效率的现代办公环境下，职场人往往缺乏一个私密且不被打扰的情绪出口。设计动机：旨在利用 AIGC 技术，在用户桌面上构建一个微型、轻量化的陪伴式IP角色。心理学映射：以鱼作为意象，隐喻职场中摸鱼的自嘲文化，通过角色互动缓解用户的办公焦虑。",
    category: "app",
    tags: ["#AIGC全链路开发", "#情绪设计", "#桌面交互", "#赛博陪伴"],
    sections: [
      {
        title: "01. 设计洞察：在高压职场中寻找带薪呼吸",
        content:
          "在极端追求效率的现代办公环境下，职场人往往缺乏一个私密且不被打扰的情绪出口。设计动机：旨在利用 AIGC 技术，在用户桌面上构建一个微型、轻量化的陪伴式IP角色。心理学映射：以鱼作为意象，隐喻职场中摸鱼的自嘲文化，通过角色互动缓解用户的办公焦虑。",
      },
      {
        title: "02. 核心体验：陪伴而不打扰",
        content:
          "为了实现极致丝滑的桌面体验，项目攻克了多项交互技术难点：无边界透明渲染：基于 Electron 框架实现完全透明的窗口显示，打破传统软件的框格感。幽灵穿透术：开发了动态鼠标穿透算法，确保小鱼在桌面上不影响用户正常的办公操作，仅在鼠标触碰鱼身时激活交互。仪式感下班系统：设计了由鱼跳跃、表情包烟花扩散及全局平滑淡出组成的下班仪式，为一天的工作提供心理闭环。",
      },
      {
        title: "03. AIGC 全链路工作流",
        content:
          "本项目是 Vibe Coding（感性编程）与 AI 审美结合的典型实践：AI 不仅仅是工具，更是我的结对编程伙伴与首席插画师。视觉资产生成：利用 Midjourney 与 DALL-E 进行提示词工程，生成了具有高度风格一致性的像素风 IP 形象及 UI 元素。AI 辅助工程实现：通过与大模型深度对话，快速跨越了跨进程通信、系统级 API 调用及 CSS 物理动画的技术壁垒，实现了从概念到独立运行程序（.exe）的高效转化。",
      },
      {
        title: "04. 核心功能展示",
        content:
          "实时状态监测：基于时间逻辑自动判定上班/下班/加班状态，建立与真实时间的共鸣，模拟生命感。交互式文案引擎：随机触发反卷语录气泡，支持鼠标划过抖动，提供即时的心理安慰与嘴替式的幽默。状态存档系统：记录每日摸鱼次数，通过本地数据存储实现个性化记忆，见证用户每一天的微小放松时刻。",
      },
      {
        title: "05. 未来演进：从数字宠到心理 Agent",
        content:
          "形态动态演变：未来计划引入形态进化系统，鱼的形象会随着用户摸鱼频率从“锦鲤”进化为“咸鱼”。深度情绪感知：结合 AI 对办公状态的深度理解，在用户长时间未操作或高频操作时，提供差异化的情绪疗愈方案。",
      },
    ],
    gifs: [
      "aigc4_application_gif_01.gif",
      "aigc4_application_gif_02.gif",
      "aigc4_application_gif_03.gif",
      "aigc4_application_gif_04.gif",
    ],
  },
];

const aiWorksZh: AIGeneratedWork[] = [
  {
    id: "w1",
    title: "艺术设计 01",
    imageUrl: "aigc1_art_design_1_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w2",
    title: "艺术设计 02",
    imageUrl: "aigc1_art_design_2_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w3",
    title: "艺术设计 03",
    imageUrl: "aigc1_art_design_3_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w4",
    title: "艺术设计 04",
    imageUrl: "aigc1_art_design_4_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w5",
    title: "艺术设计 05",
    imageUrl: "aigc1_art_design_5_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w6",
    title: "艺术设计 06",
    imageUrl: "aigc1_art_design_6_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w7",
    title: "艺术设计 07",
    imageUrl: "aigc1_art_design_7_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w8",
    title: "艺术设计 08",
    imageUrl: "aigc1_art_design_8_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w9",
    title: "艺术设计 09",
    imageUrl: "aigc1_art_design_9_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w10",
    title: "艺术设计 10",
    imageUrl: "aigc1_art_design_10_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w11",
    title: "艺术设计 11",
    imageUrl: "aigc1_art_design_11_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w12",
    title: "艺术设计 12",
    imageUrl: "aigc1_art_design_12_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w13",
    title: "艺术设计 13",
    imageUrl: "aigc1_art_design_13_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w14",
    title: "艺术设计 14",
    imageUrl: "aigc1_art_design_14_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w15",
    title: "艺术设计 15",
    imageUrl: "aigc1_art_design_15_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w16",
    title: "艺术设计 16",
    imageUrl: "aigc1_art_design_16_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w17",
    title: "艺术设计 17",
    imageUrl: "aigc1_art_design_17_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w18",
    title: "艺术设计 18",
    imageUrl: "aigc1_art_design_18_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w19",
    title: "艺术设计 19",
    imageUrl: "aigc1_art_design_19_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w20",
    title: "艺术设计 20",
    imageUrl: "aigc1_art_design_20_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w21",
    title: "艺术设计 21",
    imageUrl: "aigc1_art_design_21_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w22",
    title: "艺术设计 22",
    imageUrl: "aigc1_art_design_22_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w23",
    title: "艺术设计 23",
    imageUrl: "aigc1_art_design_23_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w24",
    title: "艺术设计 24",
    imageUrl: "aigc1_art_design_24_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "w25",
    title: "艺术设计 25",
    imageUrl: "aigc1_art_design_25_.png",
    tool: "Midjourney",
    description: "AI生成的艺术设计作品。",
    category: "art",
  },
  {
    id: "g1",
    title: "平面设计 01",
    imageUrl: "aigc2_graphic_design_1_.png",
    tool: "Midjourney",
    description: "AI生成的平面设计作品。",
    category: "graphic",
  },
  {
    id: "g2",
    title: "平面设计 02",
    imageUrl: "aigc2_graphic_design_2_.png",
    tool: "Midjourney",
    description: "AI生成的平面设计作品。",
    category: "graphic",
  },
  {
    id: "g3",
    title: "平面设计 03",
    imageUrl: "aigc2_graphic_design_3_.png",
    tool: "Midjourney",
    description: "AI生成的平面设计作品。",
    category: "graphic",
  },
  {
    id: "g4",
    title: "平面设计 04",
    imageUrl: "aigc2_graphic_design_4_.png",
    tool: "Midjourney",
    description: "AI生成的平面设计作品。",
    category: "graphic",
  },
  {
    id: "g5",
    title: "平面设计 05",
    imageUrl: "aigc2_graphic_design_5_.png",
    tool: "Midjourney",
    description: "AI生成的平面设计作品。",
    category: "graphic",
  },
  {
    id: "g6",
    title: "平面设计 06",
    imageUrl: "aigc2_graphic_design_6_.png",
    tool: "Midjourney",
    description: "AI生成的平面设计作品。",
    category: "graphic",
  },
  {
    id: "g7",
    title: "平面设计 07",
    imageUrl: "aigc2_graphic_design_7_.png",
    tool: "Midjourney",
    description: "AI生成的平面设计作品。",
    category: "graphic",
  },
  {
    id: "g8",
    title: "平面设计 08",
    imageUrl: "aigc2_graphic_design_8_.png",
    tool: "Midjourney",
    description: "AI生成的平面设计作品。",
    category: "graphic",
  },
  {
    id: "g9",
    title: "平面设计 09",
    imageUrl: "aigc2_graphic_design_9_.png",
    tool: "Midjourney",
    description: "AI生成的平面设计作品。",
    category: "graphic",
  },
  {
    id: "g10",
    title: "平面设计 10",
    imageUrl: "aigc2_graphic_design_10_.png",
    tool: "Midjourney",
    description: "AI生成的平面设计作品。",
    category: "graphic",
  },
  {
    id: "f1",
    title: "互动小说 01",
    imageUrl: "aigc3_interactive_novel_1_.png",
    tool: "Midjourney",
    description: "AI生成的互动小说作品。",
    category: "fiction",
  },
  {
    id: "f2",
    title: "互动小说 02",
    imageUrl: "aigc3_interactive_novel_2_.png",
    tool: "Midjourney",
    description: "AI生成的互动小说作品。",
    category: "fiction",
  },
  {
    id: "app1",
    title: "摸鱼鱼 —— 职场人的摸鱼搭子",
    imageUrl: "aigc4_application_01.jpg",
    tool: "Midjourney / Electron",
    description:
      "职场减压AI宠物：通过AI驱动的虚拟宠物陪伴，帮助职场人在工作间隙放松心情，缓解压力。",
    category: "app",
    tags: ["AIGC全链路开发", "情绪设计", "桌面交互", "赛博陪伴"],
    sections: [
      {
        title: "01. 核心体验：陪伴而不打扰",
        content:
          "为了实现极致丝滑的桌面体验，项目攻克了多项交互技术难点：无边界透明渲染：基于 Electron 框架实现完全透明的窗口显示，打破传统软件的框格感。幽灵穿透术（Pixel-level Click-through）：开发了动态鼠标穿透算法，确保小鱼在桌面上不影响用户正常的办公操作，仅在鼠标触碰鱼身时激活交互。仪式感下班系统：摒弃生硬的退出逻辑，设计了由鱼跳跃、表情包烟花扩散及全局平滑淡出组成的下班仪式，为一天的工作提供心理闭环。",
      },
      {
        title: "02. AIGC 全链路工作流",
        content:
          "本项目是 Vibe Coding（感性编程）与 AI 审美结合的典型实践：AI 不仅仅是工具，更是我的结对编程伙伴与首席插画师。视觉资产生成：利用 Midjourney 与 DALL-E 进行提示词工程，生成了具有高度风格一致性的像素风 IP 形象及 UI 元素。AI 辅助工程实现：通过与大模型深度对话，快速跨越了跨进程通信（IPC）、系统级 API 调用及 CSS 物理动画的技术壁垒，实现了从概念到独立运行程序（.exe）的高效转化。",
      },
      {
        title: "03. 核心功能展示",
        content:
          "功能模块 - 实时状态监测：基于时间逻辑自动判定上班/下班/加班状态。建立与真实时间的共鸣，模拟生命感。交互式文案引擎：随机触发反卷语录气泡，支持鼠标划过抖动。提供即时的心理安慰与嘴替式的幽默。状态存档系统：记录每日摸鱼次数，通过本地数据存储实现个性化记忆。见证用户每一天的微小放松时刻。",
      },
      {
        title: "04. 未来演进：从数字宠到心理 Agent",
        content:
          "形态动态演变：未来计划引入形态进化系统，鱼的形象会随着用户摸鱼频率“锦鲤”进化为“咸鱼”。深度情绪感知：结合 AI 对办公状态的深度理解，在用户长时间未操作或高频操作时，提供差异化的情绪疗愈方案。",
      },
    ],
    gifs: [
      "aigc4_application_gif_01.gif",
      "aigc4_application_gif_02.gif",
      "aigc4_application_gif_03.gif",
      "aigc4_application_gif_04.gif",
    ],
  },
];

const philosophyEn: Philosophy = {
  stats: [
    { value: "2", label: "Startups Led" },
    { value: "1,000+", label: "Face-to-face with AI Users" },
    { value: "10,000+", label: "Images Generated & Designed" },
    { value: "2.5M+", label: "Deep Conversations with LLMs" },
  ],
  intro:
    "In my view, the ultimate meaning of a product is not to implement cool technology, but to complete a profound connection. My product philosophy revolves around how to build this 'connection'. I believe the most powerful product strength comes from the most delicate observation of human nature and a clear cognitive understanding of technology.",
  points: [
    {
      title: "Start: Empathy with Users",
      content:
        "Cut through from the micro-view of psychological behavior to gain insight into those unspoken emotions and needs, then dismantle them into specific scenarios and responsive moods.",
    },
    {
      title: "Path: Collaboration with Tech",
      content:
        "Always stand from the user's perspective, becoming a 'translator' and 'collaborator' of technology. Communicating with large models and aligning with algorithm teams to find the optimal balance between user experience and technical feasibility.",
    },
    {
      title: "Future: Co-creation with AI",
      content:
        "AI is a partner that extends thinking and creativity—letting AI participate deeply in the entire process from creative stimulation and prototype building to solution implementation.",
    },
  ],
  conclusion:
    "Anchored in humanistic insight, powered by technical collaboration, to build digital experiences that truly understand, care for, and empower people.",
};

const philosophyZh: Philosophy = {
  stats: [
    { value: "2个", label: "完全主导的创业项目" },
    { value: "1000+次", label: "直接与AI产品用户面对面" },
    { value: "10000+张", label: "图片生成与设计落地" },
    { value: "250万+字", label: "与LLM的连续深度对话" },
  ],
  intro:
    "在我看来，产品的终极意义，并非实现炫酷的技术，而是完成一场深刻的连接。我的产品理念，正是围绕着如何构建这种“连接”而展开，我相信最强大的产品力源于对人性最细腻的体察和对技术的清醒认知。",
  points: [
    {
      title: "起点：与用户共情",
      content:
        "从心理行为的微观视角切入，去洞察未被言说的情感与需求，然后拆解为具体的场景和可被回应的心绪。",
    },
    {
      title: "路径：与技术协同",
      content:
        "始终站在用户角度，成为技术的“翻译者”与“协作者”。与大模型沟通、与算法团队对齐，在用户体验与技术可行性之间找到最优平衡点。",
    },
    {
      title: "未来：与 AI 共创",
      content:
        "AI是延伸思考与创造力的伙伴——让AI深度参与从创意激发、原型构建到方案落地的全流程。",
    },
  ],
  conclusion:
    "以人文洞察为锚点，以技术协同为引擎，构建能真正理解人、关怀人、赋能人的数字体验。",
};

export const content = {
  en: {
    hero: {
      subtitle: "AI Product Manager Portfolio",
      title: React.createElement(
        React.Fragment,
        null,
        "Connecting User Needs ",
        React.createElement("br"_,
        React.createElement(
          "span",
          { className: "text-neutral-400 italic font-serif" },
          "with"
        _,
        " Intelligent Tech"
      _,
      tags: [
        "AI Product",
        "User Experience",
        "Psychology",
        "System Design",
        "Artistic Aesthetics",
      ],
    },
    about: aboutEn,
    projects: projectsEn,
    aiWorks: aiWorksEn,
    aiCategories: aiCategoriesEn,
    philosophy: philosophyEn,
    labels: {
      about: "About",
      projects: "Projects",
      methods: "Philosophy",
      contact: "Contact",
      downloadResume: "Download Resume_PDF_",
      getInTouch: "Contact",
      copyright: "Designed & Engineered with React.",
      selectedProjects: "Selected Projects",
      projectsDesc:
        "Real-world applications where I translated user needs into deployed AI systems.",
      sideProjects: "SIDE PROJECTS",
      sideProjectsDesc:
        "Currently exploring: AI agents for personal knowledge management.",
      comingSoon: "Coming Soon",
      aiWorks: "AIGC Creative",
      aiWorksDesc:
        "Crossing the boundaries of technology to explore the infinite possibilities of generation. This collection brings together my practices in visual art creation, narrative interaction design, and functional application prototyping using generative AI, aiming to demonstrate how artificial intelligence reshapes the connection between creativity and user experience.",
      aiWorksTags: ["Midjourney", "LLM", "Google AI Studio"],
      aiTabs: {
        art: "Art Design",
        graphic: "Graphic Design",
        fiction: "Interactive Fiction",
        app: "AI Applications",
      },
      tools: "TOOLS: MIDJOURNEY / STABLE DIFFUSION / COMFYUI",
      background: "Background",
      contextRole: "Context & Role",
      systemOutcome: "System & Outcome",
      projectBackground: "Context:",
      projectRole: "My Role:",
      projectSystem: "The Solution:",
      projectOutcome: "The Impact:",
      methodsTitle: "Product Philosophy",
      methodsSubtitle:
        "How I think and act at the intersection of people and AI.",
      expertiseTitle: "AI Native Capabilities",
      backToHome: "Back to Home",
      viewCase: "View Case",
    } as SectionLabels,
  },
  zh: {
    hero: {
      subtitle: "AI 产品经理作品集",
      title: React.createElement(
        React.Fragment,
        null,
        "连接人本体验 ",
        React.createElement("br"_,
        React.createElement(
          "span",
          { className: "text-neutral-400 italic font-serif" },
          "with"
        _,
        " 智能技术"
      _,
      tags: [
        "人工智能",
        "产品设计",
        "心理认知",
        "用户体验",
        "艺术审美",
        "文学写作",
      ],
    },
    about: aboutZh,
    projects: projectsZh,
    aiWorks: aiWorksZh,
    aiCategories: aiCategoriesZh,
    philosophy: philosophyZh,
    labels: {
      about: "关于我",
      projects: "项目经历",
      methods: "产品理念",
      contact: "联系方式",
      downloadResume: "下载简历_PDF_",
      getInTouch: "联系方式",
      copyright: "基于 React 设计与开发",
      selectedProjects: "主要项目",
      projectsDesc: "精选实战项目：将用户需求转化为落地的 AI 产品。",
      sideProjects: "个人探索",
      sideProjectsDesc: "目前正在研究：用于个人知识管理的智能体(Agent_。",
      comingSoon: "敬请期待",
      aiWorks: "AIGC 创意",
      aiWorksDesc:
        "跨越技术的边界，探索生成的无限可能。这里汇集了我利用生成式 AI 在视觉艺术创作、叙事交互设计及功能性应用原型开发中的实践，旨在展现人工智能如何重塑创造力与用户体验的连接。",
      aiWorksTags: ["Midjourney", "LLM", "Google AI Studio"],
      aiTabs: {
        art: "艺术设计",
        graphic: "平面设计",
        fiction: "互动小说",
        app: "AI 应用",
      },
      tools: "工具: MIDJOURNEY / STABLE DIFFUSION / COMFYUI",
      background: "背景",
      contextRole: "背景与角色",
      systemOutcome: "方案与成果",
      projectBackground: "项目背景：",
      projectRole: "我的角色：",
      projectSystem: "解决方案：",
      projectOutcome: "项目成果：",
      methodsTitle: "产品理念",
      methodsSubtitle: "在人与 AI 的交汇点，我如何思考与行动。",
      expertiseTitle: "AI 原生能力",
      backToHome: "返回首页",
      viewCase: "查看详情",
    } as SectionLabels,
  },
};
