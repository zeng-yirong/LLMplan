import { useState, useMemo } from 'react';

interface TalentProgram {
  id: number;
  company: string;
  programName: string;
  description: string;
  link: string;
  category: '互联网大厂' | 'AI独角兽' | '硬件/终端厂商' | '量化公司' | '游戏/娱乐' | '其他';
  tags: string[];
  salary?: string;
  targetGroup?: string;
  yearRound?: boolean;
}

const talentPrograms: TalentProgram[] = [
  // ========== 互联网大厂 ==========
  {
    id: 1,
    company: '字节跳动',
    programName: 'Seed 大模型人才校招',
    description: '字节跳动Seed面向高校人才推出的招聘项目，岗位包括基础大模型、机器学习系统、视觉智能、语音智能、大模型AI搜索、模型个性化、具身智能等。2027届不再设Top Seed，统一为Seed。含豆包期权。',
    link: 'https://seed.bytedance.com/zh/seedearlycareer',
    category: '互联网大厂',
    tags: ['大模型', '多模态', 'Agent', 'RL', '校招'],
    salary: '极具竞争力+期权',
    targetGroup: '2027届应届博士/硕士'
  },
  {
    id: 2,
    company: '字节跳动',
    programName: '前沿技术领域人才校招',
    description: '字节跳动面向前沿技术领域的校园招聘专项，涵盖大模型应用、搜索/推荐/广告、计算机体系结构、AI Safety等八大领域。',
    link: 'https://jobs.bytedance.com/campus/jindouyun',
    category: '互联网大厂',
    tags: ['前沿技术', '校招', '多方向'],
    targetGroup: '应届毕业生'
  },
  {
    id: 3,
    company: '腾讯',
    programName: '青云计划',
    description: '腾讯面向全球顶尖技术学子的人才专项，提供定制化培养方案、核心业务工作机会、前瞻性技术课题和极具竞争力的薪酬。混元Harness/自进化方向，由张正友、单瀛、胡瀚等杰出科学家担任导师。',
    link: 'https://join.qq.com/qingyun.html',
    category: '互联网大厂',
    tags: ['顶尖技术', '科学家导师', '校招', '混元大模型'],
    salary: '极具竞争力的薪酬',
    targetGroup: '2024.1-2026.12毕业博士及2025.1-2026.12毕业本硕'
  },
  {
    id: 4,
    company: '阿里巴巴',
    programName: '阿里星（Ali Star）顶尖人才计划',
    description: '阿里巴巴面向全球顶尖青年科研人才推出的招募培养计划，聚焦大语言模型、多模态理解与生成、模型应用、AI Infra等方向。千问事业部有Agent方向。',
    link: 'https://talent.alibaba.com/activity/ali-star?lang=zh',
    category: '互联网大厂',
    tags: ['顶尖人才', '校招', '科研', '通义千问'],
    salary: '极具竞争力的薪酬',
    targetGroup: '全球顶尖高校应届硕博'
  },
  {
    id: 5,
    company: '阿里云',
    programName: 'A Star Program 全球人才招募',
    description: '阿里云面向全球招募AI技术人才，聚焦大模型、AI Infra等方向，为近年来规模最大的AI人才校园招聘。',
    link: 'https://careers.aliyun.com/a-star',
    category: '互联网大厂',
    tags: ['AI', '大模型', '云计算', '全球招募'],
    targetGroup: '2026.11-2027.10毕业生'
  },
  {
    id: 6,
    company: '阿里国际',
    programName: 'Bravo Star 顶尖人才计划',
    description: '阿里国际集团面向全球顶尖技术人才的招聘计划，涵盖AI、大模型等前沿技术方向。',
    link: 'https://aidc-jobs.alibaba.com/',
    category: '互联网大厂',
    tags: ['国际化', 'AI', '顶尖人才'],
    targetGroup: '全球顶尖高校应届生'
  },
  {
    id: 7,
    company: '百度',
    programName: 'AIDU 计划',
    description: '百度于2018年启动的顶尖AI人才招聘计划，面向全球招募具备顶尖技术潜力的校园人才。2026年岗位招聘扩增超60%，覆盖23个核心业务和11类研究方向。薪酬上不封顶。全年开放至次年6月。',
    link: 'https://talent.baidu.com/external/baidu/campus.html',
    category: '互联网大厂',
    tags: ['AI领军', '文心大模型', '薪酬无上限', '全年开放'],
    salary: '百万级年薪起步，上不封顶',
    targetGroup: '2026/2027届博士和硕士',
    yearRound: true
  },
  {
    id: 8,
    company: '百度',
    programName: '文心·新星顶尖技术人才计划',
    description: '百度面向顶尖技术人才的校招专项，聚焦文心大模型相关前沿技术研发。',
    link: 'https://talent.baidu.com/',
    category: '互联网大厂',
    tags: ['文心大模型', '顶尖技术', '校招'],
    targetGroup: '应届硕博毕业生'
  },
  {
    id: 9,
    company: '美团',
    programName: 'LongCat 大模型人才校招',
    description: '美团大模型方向专项校招计划，聚焦大模型基座+智能交互。全年招聘，与北斗计划分开。北京/上海。',
    link: 'https://zhaopin.meituan.com/web/campus',
    category: '互联网大厂',
    tags: ['大模型', '校招', '全年开放'],
    targetGroup: '应届毕业生',
    yearRound: true
  },
  {
    id: 10,
    company: '美团',
    programName: '北斗计划',
    description: '美团面向大模型、自动驾驶、具身智能、智能决策等前沿技术方向的人才专项计划。153个职位，全年持续开放。北京/上海。',
    link: 'https://campus.meituan.com/beidou',
    category: '互联网大厂',
    tags: ['大模型', '自动驾驶', '全年开放', '具身智能'],
    targetGroup: '2025.1-2026.12境内外院校毕业生',
    yearRound: true
  },
  {
    id: 11,
    company: '拼多多',
    programName: '云弧计划',
    description: '拼多多面向全球校园顶尖技术学子的AI人才计划，聚焦大模型预训练、后训练与RLHF/RLAIF对齐技术、AI Infra研发等方向。30-60K·16薪。上海。',
    link: 'https://careers.pddglobalhr.com/campus',
    category: '互联网大厂',
    tags: ['大模型', 'AI Infra', 'RLHF', '高薪'],
    salary: '30-60K·16薪',
    targetGroup: '2026.9-2027.8毕业硕博'
  },
  {
    id: 12,
    company: '京东',
    programName: 'TGT 顶尖青年技术天才计划',
    description: '京东面向顶尖技术人才的专项招聘计划，八大前沿方向含多模态大模型/AI Infra。全年开放网申，面试全年开放，Offer随时发放。本硕博均可。',
    link: 'https://campus.jd.com/',
    category: '互联网大厂',
    tags: ['顶尖人才', 'AI', '全年开放', '多模态'],
    targetGroup: '毕业2024.10-2027.9本硕博',
    yearRound: true
  },
  {
    id: 13,
    company: '快手',
    programName: '快Star 顶尖技术人才计划',
    description: '快手面向全球顶尖校园技术人才的招聘项目，覆盖大模型、推荐、广告、搜索等方向。无笔试直接进面。全年开放。北京/上海/深圳/杭州。',
    link: 'https://zhaopin.kuaishou.cn/',
    category: '互联网大厂',
    tags: ['大模型', '全年开放', '免笔试', '顶尖人才'],
    targetGroup: '2025.1-2027.10毕业本硕博',
    yearRound: true
  },
  {
    id: 14,
    company: '小红书',
    programName: 'REDstar 顶尖人才计划',
    description: '小红书面向全球高校顶尖技术人才发起的专属人才计划，提供行业超高水平薪酬、亿级月活用户真实场景、1V1定制化培养方案。聚焦基座大模型/AI Agent/AI Infra。一次最多投5岗。',
    link: 'https://job.xiaohongshu.com/campus',
    category: '互联网大厂',
    tags: ['大模型', 'AI Agent', '顶尖人才', '高薪'],
    salary: '行业超高水平薪酬',
    targetGroup: '全球本硕博毕业生'
  },
  {
    id: 15,
    company: '蚂蚁集团',
    programName: '蚂蚁星 PlanA 顶尖人才专项',
    description: '蚂蚁集团顶尖人才专项，聚焦大语言模型、多模态、强化学习、Agent方向。技术岗占80%，超80%AI相关岗位。笔试允许用AI。北京/杭州。',
    link: 'https://talent.antgroup.com/campus/home',
    category: '互联网大厂',
    tags: ['大模型', 'Agent', '强化学习', '金融科技'],
    targetGroup: '2027届应届毕业生（2026.11-2027.10毕业）'
  },
  {
    id: 16,
    company: '小米',
    programName: '校园招聘（AI大模型方向）',
    description: '小米面向应届毕业生开放AI大模型、软硬件、汽车、供应链等全方向岗位。北京/上海/深圳。',
    link: 'https://hr.xiaomi.com/website/campus.html',
    category: '互联网大厂',
    tags: ['AI大模型', '智能硬件', '校招', '汽车'],
    targetGroup: '2027届毕业生'
  },
  {
    id: 17,
    company: '网易',
    programName: '校园招聘',
    description: '网易面向全球高校应届生的招聘计划，涵盖AI大模型、游戏AI、技术、产品、设计等方向。杭州/广州。',
    link: 'https://hr.163.com/',
    category: '互联网大厂',
    tags: ['校招', 'AI大模型', '游戏AI', '产品'],
    targetGroup: '应届毕业生及实习生'
  },
  {
    id: 18,
    company: '哔哩哔哩',
    programName: 'B-UP 顶尖技术人才项目',
    description: 'B站面向全球顶尖技术青年发起的生成式大模型领域专项人才计划。聚焦AI核心算法与智能系统架构方向。本硕博全学段。上海/北京。',
    link: 'https://jobs.bilibili.com/campus/bup',
    category: '互联网大厂',
    tags: ['大模型', '顶尖人才', '校招', 'AI算法'],
    targetGroup: '2026.9-2027.8硕博毕业生'
  },
  // ========== AI 独角兽 ==========
  {
    id: 19,
    company: 'DeepSeek（深度求索）',
    programName: '大规模招聘',
    description: 'DeepSeek史上最大规模招聘，开放33个岗位，涵盖算法、系统研发、运维、产品、数据策略、深度学习研究员等7大类方向。Harness团队扩招中。',
    link: 'https://talent.deepseek.com/',
    category: 'AI独角兽',
    tags: ['大模型', 'Agent', '算法', '史上最大规模'],
    salary: '高薪',
    targetGroup: '社招/校招'
  },
  {
    id: 20,
    company: '月之暗面（Kimi/Moonshot）',
    programName: '穿越计划 / 全球人才招募',
    description: '月之暗面（Kimi）全面开启全球人才招募，包含社招、校招和实习岗位。不限岗位专业，全球7名Wild Card可搏。长上下文+Agent方向。',
    link: 'https://careers.kimi.com/',
    category: 'AI独角兽',
    tags: ['AGI', '大模型', '全球招募', 'Wild Card'],
    targetGroup: '2027/2028届应届生及实习生'
  },
  {
    id: 21,
    company: 'MiniMax',
    programName: 'Top Talent 顶尖人才计划',
    description: '大模型原生公司，聚焦多模态+Agent方向。MIFS数据集对口。持续开放招聘。',
    link: 'https://www.minimaxi.com/careers',
    category: 'AI独角兽',
    tags: ['大模型', '多模态', 'Agent', '顶尖人才'],
    targetGroup: '社招/校招'
  },
  {
    id: 22,
    company: '智谱AI（Zhipu AI）',
    programName: '校园招聘 / 社会招聘',
    description: '智谱AI开放算法/研发、销售、产品经理等多类岗位。AutoGLM Agent方向对口。多模态基座GLM-V。北京。',
    link: 'https://www.zhipuai.cn/zh/joinus',
    category: 'AI独角兽',
    tags: ['大模型', 'GLM', 'Agent', '校招'],
    targetGroup: '社招/校招/实习'
  },
  {
    id: 23,
    company: '阶跃星辰（StepFun）',
    programName: 'StepStar 顶尖人才招聘计划',
    description: '阶跃星辰面向全球顶尖技术人才发起的招聘计划，涵盖应届校招及实习。多模态大模型（Step-Video）方向。',
    link: 'https://www.stepfun.com/',
    category: 'AI独角兽',
    tags: ['大模型', '多模态', '顶尖人才', '校招'],
    salary: '3-6万/月',
    targetGroup: '全球顶尖技术人才'
  },
  {
    id: 24,
    company: '百川智能（Baichuan）',
    programName: '源点顶尖人才计划',
    description: '百川智能面向全球顶尖校园人才的招募项目，聚焦大模型核心技术与AI应用方向。包括大模型算法工程师、AI Infra工程师等。北京。硕博。',
    link: 'https://careers.baichuan-inc.com/origin-program',
    category: 'AI独角兽',
    tags: ['大模型', 'AI Infra', 'Agent', '顶尖人才'],
    targetGroup: '应届硕博毕业生',
  },
  {
    id: 25,
    company: '面壁智能（ModelBest）',
    programName: '招聘',
    description: '面壁智能致力于创造安全、普惠的通用人工智能，招聘大模型研发、工程等相关岗位。',
    link: 'https://modelbest.cn/',
    category: 'AI独角兽',
    tags: ['大模型', 'AGI', '研发'],
    targetGroup: '社招'
  },
  {
    id: 26,
    company: '零一万物（01.AI）',
    programName: '招聘',
    description: '由李开复博士领衔创立，AI 2.0与智能体变革的最前沿推动者，招聘算法、工程、产品等方向人才。',
    link: 'https://www.lingyiwanwu.com/',
    category: 'AI独角兽',
    tags: ['AI 2.0', '智能体', '大模型'],
    targetGroup: '社招'
  },
  // ========== 硬件/终端厂商 ==========
  {
    id: 27,
    company: '华为',
    programName: '天才少年计划 / 顶尖AI人才专项',
    description: '华为面向全球招募顶尖技术天才，聚焦AI大模型在昇腾算力底座的训练推理性能等前沿方向。天才少年为邀请制，顶尖AI人才专项公开招募。',
    link: 'https://career.huawei.com/reccampportal/portal5/topminds.html',
    category: '硬件/终端厂商',
    tags: ['天才少年', 'AI', '昇腾', '高薪'],
    salary: '百万年薪',
    targetGroup: '全球顶尖博士'
  },
  {
    id: 28,
    company: 'OPPO',
    programName: 'O-Star 顶尖人才计划（AI人才专项）',
    description: 'OPPO O-Star顶尖人才计划AI人才专项，聚焦大模型研究、多模态理解与生成、AI Agent、个性化服务算法等领域。含高级AI研究员（智能体）博士岗。深圳/东莞/上海/北京。',
    link: 'https://careers.oppo.com/university/oppo/ostar',
    category: '硬件/终端厂商',
    tags: ['AI Agent', '多模态', '大模型', '校招'],
    targetGroup: '顶尖高校应届生'
  },
  {
    id: 29,
    company: 'vivo',
    programName: '蓝极星计划',
    description: 'vivo面向全球高校顶尖人才（博士）发起的招聘专项，扩招AI、大模型、影像、具身智能等方向人才。东莞/深圳/南京/上海/杭州。',
    link: 'https://hr.vivo.com/',
    category: '硬件/终端厂商',
    tags: ['AI大模型', '具身智能', '顶尖人才', '博士'],
    targetGroup: '全球高校博士生'
  },
  {
    id: 30,
    company: '商汤科技（SenseTime）',
    programName: '无限原力顶尖人才计划',
    description: '商汤「无限原力」面向顶尖应届生和高潜实习生，聚焦商汤战略级原创技术方向。招募方向含多模态基模型/后训练/Long Horizon Agentic。北京/上海/深圳/香港。',
    link: 'https://hr.sensetime.com/top-talent',
    category: '硬件/终端厂商',
    tags: ['深度学习', '多模态', 'Agentic', '顶尖人才'],
    targetGroup: '2026.9-2027.12毕业本硕博'
  },
  // ========== 量化公司 ==========
  {
    id: 31,
    company: '幻方量化',
    programName: 'AI Lab 招聘',
    description: '国内头部AI量化公司，用大模型预测金融市场。深耕"AI量化+大规模计算+深度研究"赛道。顶尖量化研究员总包可达200-500万。杭州/北京。全年招聘。',
    link: 'https://www.high-flyer.cn/join/',
    category: '量化公司',
    tags: ['AI量化', '大模型', '高薪', '全年招聘'],
    salary: '总包200-500万',
    targetGroup: '社招/校招',
    yearRound: true
  },
  {
    id: 32,
    company: '九坤投资',
    programName: '梧桐计划 / AI算法研究员',
    description: '九坤投资AI算法研究员/大模型算法研究员方向。依托充足计算资源与AI研究框架，深度分析海量数据。北京/上海。800-1500元/天实习。全年招聘。',
    link: 'https://ubiquant.com/website/career',
    category: '量化公司',
    tags: ['AI量化', '大模型', '高薪', '全年招聘'],
    salary: '实习800-1500元/天',
    targetGroup: '社招/校招/实习',
    yearRound: true
  },
  {
    id: 33,
    company: '明汯投资',
    programName: '量化开发工程师',
    description: '明汯投资招聘量化开发工程师方向，上海。',
    link: 'https://www.zhipin.com/',
    category: '量化公司',
    tags: ['量化', '开发', '高薪'],
    targetGroup: '社招/校招'
  },
  {
    id: 34,
    company: '启林投资',
    programName: 'AI算法方向招聘',
    description: '启林投资AI算法方向含大模型/端到端深度学习。上海/北京。',
    link: 'https://www.wondercv.com/xiaozhao/qilin-investment-shanghai-beijing-2027-campus-11615-edaac6/',
    category: '量化公司',
    tags: ['AI算法', '大模型', '端到端'],
    targetGroup: '2027届校招'
  },
  // ========== 游戏/娱乐 ==========
  {
    id: 35,
    company: '米哈游',
    programName: '校园招聘（AI方向）',
    description: '米哈游基础大模型AI方向全面开放，AI深度融入游戏研发全过程，自研大模型全链路开发进行中。上海/北京。应届生仅可投1岗。',
    link: 'https://jobs.mihoyo.com/#/campus',
    category: '游戏/娱乐',
    tags: ['大模型', '游戏AI', '校招', 'AI算法'],
    targetGroup: '2027届应届毕业生'
  },
  {
    id: 36,
    company: '搜狐',
    programName: 'AI 人才专项',
    description: '搜狐AI人才专项，招聘AI算法研发/大模型算法/AI助理研究/AI全栈方向。北京海淀。',
    link: 'https://campus.sohu.com/',
    category: '游戏/娱乐',
    tags: ['AI算法', '大模型', '校招'],
    targetGroup: '应届毕业生'
  },
  // ========== 其他 ==========
  {
    id: 37,
    company: '科大讯飞',
    programName: '星火X计划',
    description: '科大讯飞以前沿课题为牵引，面向全球AI领域顶尖硕博人才发起的招募培养计划。覆盖基础大模型、多模态大模型、大模型智能体、AI Infra、下一代多模态交互等六大课题方向。合肥/北京/西安/广州/上海。',
    link: 'https://iflytek.zhiye.com/',
    category: '其他',
    tags: ['星火大模型', '顶尖人才', '六大课题', '全年开放'],
    targetGroup: '全球AI领域顶尖硕博人才',
    yearRound: true
  },
  {
    id: 38,
    company: '科大讯飞',
    programName: '飞星计划',
    description: '科大讯飞研究院针对国内外顶尖高校应届硕博毕业生的招聘专项，全链路参与星火大模型研发。100%入职研究院，顶尖专家一对一带教。涵盖语音大模型、多模态大模型、认知大模型等方向。',
    link: 'https://iflytek.zhiye.com/jobs',
    category: '其他',
    tags: ['星火大模型', '语音AI', '校招', '硕博'],
    targetGroup: '顶尖高校应届硕博毕业生',
    yearRound: true
  },
  {
    id: 39,
    company: '火山引擎',
    programName: '招聘',
    description: '字节跳动旗下企业级技术服务平台，招聘AI、大模型、云计算等方向人才，人才密度高，成长空间大。',
    link: 'https://www.volcengine.com/jobs',
    category: '其他',
    tags: ['云计算', 'AI', '大模型', '企业服务'],
    targetGroup: '社招/校招'
  },
  {
    id: 40,
    company: '360',
    programName: '校园招聘（AI方向）',
    description: '360招聘AI大模型、安全AI方向人才。北京。',
    link: 'https://campus.360.cn/',
    category: '其他',
    tags: ['AI大模型', '安全AI', '校招'],
    targetGroup: '应届毕业生'
  },
  {
    id: 41,
    company: '浪潮',
    programName: '校园招聘（AI方向）',
    description: '浪潮招聘AI服务器、大模型算力方向人才。济南/北京。',
    link: 'https://career.inspur.com/',
    category: '其他',
    tags: ['AI服务器', '大模型算力', '校招'],
    targetGroup: '应届毕业生'
  },
];

const categories = ['全部', '互联网大厂', 'AI独角兽', '硬件/终端厂商', '量化公司', '游戏/娱乐', '其他'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrograms = useMemo(() => {
    return talentPrograms.filter((program) => {
      const matchesCategory = selectedCategory === '全部' || program.category === selectedCategory;
      const matchesSearch = searchTerm === '' ||
        program.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.programName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const getCategoryCount = (category: string) => {
    if (category === '全部') return talentPrograms.length;
    return talentPrograms.filter(p => p.category === category).length;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '互联网大厂': return 'bg-blue-500/10 text-blue-300 border border-blue-500/20';
      case 'AI独角兽': return 'bg-pink-500/10 text-pink-300 border border-pink-500/20';
      case '硬件/终端厂商': return 'bg-orange-500/10 text-orange-300 border border-orange-500/20';
      case '量化公司': return 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20';
      case '游戏/娱乐': return 'bg-violet-500/10 text-violet-300 border border-violet-500/20';
      default: return 'bg-green-500/10 text-green-300 border border-green-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              2026-2027 届秋招 · 持续更新
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              中国大模型
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                AI人才计划
              </span>
              招聘汇总
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              汇集国内所有主要大模型AI人才计划与招聘信息，涵盖互联网大厂、AI独角兽、硬件厂商、量化公司等
              <span className="text-purple-300 font-semibold"> {talentPrograms.length}+ </span>
              个人才计划
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <i className="fas fa-building text-blue-400"></i> 互联网大厂
              </span>
              <span className="flex items-center gap-1">
                <i className="fas fa-robot text-pink-400"></i> AI独角兽
              </span>
              <span className="flex items-center gap-1">
                <i className="fas fa-microchip text-orange-400"></i> 硬件/终端厂商
              </span>
              <span className="flex items-center gap-1">
                <i className="fas fa-chart-line text-emerald-400"></i> 量化公司
              </span>
              <span className="flex items-center gap-1">
                <i className="fas fa-gamepad text-violet-400"></i> 游戏/娱乐
              </span>
              <span className="flex items-center gap-1">
                <i className="fas fa-brain text-green-400"></i> 其他AI企业
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Search & Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          {/* Search */}
          <div className="relative mb-6">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="搜索公司名称、人才计划名称、方向..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-70">({getCategoryCount(category)})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-4">
        <p className="text-gray-400 text-sm">
          共找到 <span className="text-purple-300 font-semibold">{filteredPrograms.length}</span> 个人才计划
        </p>
      </div>

      {/* Cards Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(program.category)}`}>
                  {program.category}
                </span>
                <div className="flex gap-1.5">
                  {program.yearRound && (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      📅 全年开放
                    </span>
                  )}
                  {program.salary && (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                      💰 {program.salary}
                    </span>
                  )}
                </div>
              </div>

              {/* Company & Program */}
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                {program.company}
              </h3>
              <h4 className="text-sm font-semibold text-purple-300 mb-3">
                {program.programName}
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                {program.description}
              </p>

              {/* Target Group */}
              {program.targetGroup && (
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <i className="fas fa-user-graduate text-purple-400"></i>
                  <span>{program.targetGroup}</span>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {program.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={program.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors group/link"
              >
                <span>查看招聘详情</span>
                <i className="fas fa-external-link-alt text-xs group-hover/link:translate-x-1 transition-transform"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16">
            <i className="fas fa-search text-4xl text-gray-600 mb-4"></i>
            <p className="text-gray-400 text-lg">未找到匹配的人才计划</p>
            <p className="text-gray-500 text-sm mt-2">请尝试其他搜索关键词或筛选条件</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              📌 本页面汇总了中国主要大模型AI人才计划招聘信息，仅供参考
            </p>
            <p className="text-gray-500 text-xs">
              信息来源于各公司官方招聘网站及公开报道，具体招聘信息请以各公司官网为准 | 最后更新：2026年9月
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>⚠️ 招聘时效性有限，请及时关注官网最新动态</span>
              <span>📧 部分公司也可通过 hr@ 邮箱直接投递</span>
              <span>📅 标注"全年开放"的计划可灵活安排投递时间</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
