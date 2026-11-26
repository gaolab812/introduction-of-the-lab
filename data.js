/*
 * ============================================================
 *  高泽乾课题组 (Gao Lab) 网站内容配置
 *  信息来源：山东大学齐鲁医院官网、山东大学导师主页、
 *            Nature / PubMed 等公开学术记录（2026-11 核对）
 *  修改说明：直接改下面各字段即可，无需改动其它文件。
 * ============================================================
 */
const SITE_DATA = {
  // ---------- 基本信息 ----------
  name: "高泽乾课题组 · Gao Lab",
  eyebrow: "山东大学齐鲁医院 · 血液科",
  heroTitle: "高泽乾课题组",
  heroTitleEn: "Gao Lab",
  heroSubtitle:
    "聚焦血液系统肿瘤分子机制、免疫受体基因表观遗传调控与染色体外环状 DNA，探索疾病复发机制并推动临床转化。",

  // ---------- 首屏数字 ----------
  stats: [
    { value: "2", label: "篇 Nature 论文" },
    { value: "1", label: "国家优青（海外）" },
    { value: "4+", label: "篇代表性成果" },
    { value: "2026", label: "加入齐鲁医院" }
  ],

  // ---------- 实验室简介 ----------
  about: [
    "课题组聚焦血液系统肿瘤的分子机制，围绕免疫受体基因的表观遗传调控、V(D)J 重组、染色体外环状 DNA（ecDNA）及白血病复发机制开展系统性研究。",
    "课题组致力于从基础科学问题出发，结合新型诊疗技术开发与临床转化，探索血液肿瘤发生与复发的底层规律，为精准干预提供理论依据。"
  ],

  quickInfo: [
    { label: "依托单位", value: "山东大学齐鲁医院血液科" },
    { label: "PI", value: "高泽乾 研究员 / 博导" },
    { label: "所在地点", value: "齐鲁楼北塔" },
    { label: "联系方式", value: "z.gao@email.sdu.edu.cn" }
  ],

  // ---------- PI 详细介绍 ----------
  pi: {
    name: "高泽乾",
    nameEn: "Zeqian Gao",
    role: "研究员 · 教授 · 国家优青（海外）",
    avatar: "images/gaozeqian.png",
    bio: [
      "高泽乾，山东大学齐鲁医院血液科研究员、山东大学第一临床学院教授，国家优秀青年科学基金（海外）获得者，山东大学杰出中青年学者（第一层次）。",
      "主要研究方向为免疫受体基因表观遗传调控、V(D)J 重组、染色体外环状 DNA（ecDNA）及血液肿瘤复发分子机制。研究成果以第一或通讯作者发表于 Nature（2026、2025）、Nucleic Acids Research（2023）等国际著名学术期刊。",
      "主持国家自然科学基金委员会优秀青年基金项目、英国血液病研究基金 Tata Trust Fellowship 等科研项目。"
    ],
    // 学习工作经历
    timeline: [
      { period: "2026.03 — 至今", text: "山东大学齐鲁医院，研究员" },
      { period: "2020.11 — 2026.01", text: "英国利兹大学，博士后、副研究员" },
      { period: "2016.09 — 2020.10", text: "英国利兹大学，博士" }
    ],
    // 荣誉与人才项目
    honors: [
      "国家自然科学基金优秀青年科学基金（海外）",
      "山东大学杰出中青年学者（第一层次）",
      "英国血液病研究 Tata Trust Fellowship"
    ],
    // 学术兼职
    affiliations: [
      "英国儿童癌症研究协会（CCLG）会员",
      "英国免疫学会（BSI）会员"
    ]
  },

  // ---------- 研究骨干（展示在 PI 下方） ----------
  faculty: [
    {
      name: "王淼",
      role: "助理研究员",
      unit: "山东大学齐鲁医院基础医学研究中心",
      avatar: "images/wangmiao.jpg",
      bio: [],
      timeline: [
        { period: "2026.10 — 至今", text: "山东大学齐鲁医院，助理研究员" },
        { period: "2024.02 — 2026.08", text: "英国利兹大学，博士后" },
        { period: "2019.10 — 2024.01", text: "英国利兹大学，博士" }
      ]
    }
  ],

  // ---------- 研究方向 ----------
  research: [
    {
      icon: "◈",
      title: "免疫受体基因表观遗传调控",
      desc: "研究增强子、eRNA 与染色质构象如何协同调控免疫受体基因的表达与重排。"
    },
    {
      icon: "◉",
      title: "V(D)J 重组机制",
      desc: "解析 RAG 介导的基因重排过程及其与免疫多样性、自身耐受之间的关系。"
    },
    {
      icon: "◇",
      title: "染色体外环状 DNA（ecDNA）",
      desc: "探索 ecDNA 的形成、复制与持续存在机制，及其在肿瘤演化中的作用。"
    },
    {
      icon: "✦",
      title: "血液肿瘤复发机制",
      desc: "结合临床样本与组学手段，揭示白血病复发的分子基础，推动诊疗转化。"
    }
  ],

  // ---------- 团队成员 ----------
  // 格式：{ name: "姓名", role: "职位", note: "研究方向", email: "邮箱", avatar: "" }
  members: [
    {
      name: "刘美琪",
      role: "科研助理",
      note: "",
      email: "liumeiqi727@163.com",
      avatar: "images/liumeiqi.jpg"
    },
    {
      name: "邓玲",
      role: "博士研究生",
      note: "",
      email: "dengling668@163.com",
      avatar: "images/dengling.jpg"
    },
    {
      name: "侯曦冉",
      role: "博士研究生",
      note: "",
      email: "houxiran0110@163.com",
      avatar: "images/houxiran.jpg"
    }
  ],

  // ---------- 论文成果 ----------
  publications: [
    {
      year: 2026,
      title:
        "DNA-folding changes block production of self-directed antibodies",
      authors: "Zegian Gao, Joan Boyes",
      venue: "Nature · News and Views（述评）· 齐鲁医院为第一作者及通讯作者单位",
      tag: "封面观点",
      link: "https://www.nature.com/articles/d41586-026-01329-7"
    },
    {
      year: 2025,
      title:
        "Excised DNA circles from V(D)J recombination promote relapsed leukaemia",
      authors: "Zeqian Gao, James N. F. Scott, Matthew P. Edwards, et al., Joan Boyes",
      venue: "Nature 645: 774–783 · DOI: 10.1038/s41586-025-09372-6",
      tag: "第一作者",
      link: "https://www.nature.com/articles/s41586-025-09372-6"
    },
    {
      year: 2023,
      title:
        "Temporal analyses reveal a pivotal role for sense and antisense enhancer RNAs in coordinate immunoglobulin lambda locus activation",
      authors:
        "Zeqian Gao, Alastair L. Smith, James N. F. Scott, Sarah L. Bevington, Joan Boyes",
      venue: "Nucleic Acids Research 51(19): 10344–10363 · DOI: 10.1093/nar/gkad741",
      tag: "第一作者",
      link: "https://pubmed.ncbi.nlm.nih.gov/37702072/"
    },
    {
      year: 2023,
      title:
        "YY1 Binding to Regulatory Elements that Lack Enhancer Activity Promotes Locus Folding and Gene Activation",
      authors: "Zeqian Gao, Miao Wang, Alastair Smith, Joan Boyes",
      venue: "Journal of Molecular Biology",
      tag: "第一作者",
      link: ""
    }
  ],
  pubNote:
    "以上为代表性成果，完整论文列表与引用信息请以 Google Scholar / ORCID 为准。",

  // ---------- 实验室动态 ----------
  news: [
    {
      date: "2026-05-19",
      text: "高泽乾研究员受邀在 Nature「News and Views」栏目发表述评文章，解读染色质构象与 V(D)J 重组调控的最新进展。"
    },
    {
      date: "2026-03",
      text: "高泽乾研究员全职加入山东大学齐鲁医院血液科，组建课题组。"
    }
  ],

  // ---------- 联系方式 ----------
  contact: [
    { label: "邮箱", value: "z.gao@email.sdu.edu.cn" },
    { label: "单位", value: "山东大学齐鲁医院血液科" },
    { label: "地址", value: "山东省济南市，齐鲁医院齐鲁楼北塔" },
    { label: "课题组网站", value: "www.zgaolab.com" }
  ],
  email: "z.gao@email.sdu.edu.cn",
  joinText:
    "课题组欢迎对血液肿瘤、免疫学、表观遗传学感兴趣的研究生与青年学者加入，也期待与国内外同行开展交流合作。",

  footer: "© 2026 高泽乾课题组 · 山东大学齐鲁医院血液科"
};

window.SITE_DATA = SITE_DATA;
