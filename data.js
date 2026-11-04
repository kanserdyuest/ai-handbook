window.AI_DATA = {
 "layers": [
  {
   "id": "model",
   "no": "01",
   "title": "模型层",
   "en": "The Brain",
   "sub": "那个“会思考”的大脑",
   "color": "#E8B45A",
   "intro": "这一层是模型本身：它怎么被练出来、肚子里有什么、为什么会一本正经地胡说。你不需要会造它，但要知道它的脾气。",
   "terms": [
    {
     "cn": "人工智能",
     "en": "AI",
     "one": "让机器去做原本要人动脑的事",
     "like": "像“电器”——一个统称，不是一个东西",
     "confuse": "AI 不等于大模型。大模型只是 AI 里最近最火的一小支。",
     "core": true
    },
    {
     "cn": "机器学习",
     "en": "ML",
     "one": "不写死规则，喂例子让它自己找规律",
     "like": "像教小孩认猫，看多了就会，而不是背定义",
     "confuse": "它不是“机器自己会思考”，本质是找规律、做预测。",
     "core": true
    },
    {
     "cn": "深度学习",
     "en": "DL",
     "one": "用很多层网络，一层层把特征抽象出来",
     "like": "像流水线，越往后加工的东西越像“概念”",
     "confuse": "深度学习属于机器学习，不是并列关系。",
     "core": true
    },
    {
     "cn": "神经网络",
     "en": "Neural Network",
     "one": "很多简单计算单元连成网，模仿神经元",
     "like": "像一屋子人互相传话投票",
     "confuse": "",
     "core": false
    },
    {
     "cn": "参数 / 权重",
     "en": "Parameters / Weights",
     "one": "模型内部可调的“旋钮”，训练就是拧它们",
     "like": "像肌肉记忆，说不清但确实存在",
     "confuse": "参数不是数据库，里面没有一条条“知识条目”，是弥散的统计倾向。",
     "core": true
    },
    {
     "cn": "模型",
     "en": "Model",
     "one": "训练完存下来的那一堆参数文件",
     "like": "像一本写满经验、能照着干活的菜谱",
     "confuse": "",
     "core": true
    },
    {
     "cn": "大语言模型",
     "en": "LLM",
     "one": "专门练“下一个词该是什么”的超大模型",
     "like": "像一个读完了整个互联网、特别会接话的人",
     "confuse": "",
     "core": true
    },
    {
     "cn": "基础模型",
     "en": "Foundation Model",
     "one": "什么都会一点、可以改造成各种用途的底座",
     "like": "像毛坯房，装修成什么样看你",
     "confuse": "",
     "core": false
    },
    {
     "cn": "参数规模",
     "en": "7B / 70B / 405B",
     "one": "参数有多少个，B 指十亿",
     "like": "像厨师会多少道菜——多不等于合你口味",
     "confuse": "",
     "core": false
    },
    {
     "cn": "Transformer",
     "en": "Transformer",
     "one": "现在几乎所有大模型的骨架结构",
     "like": "像一套标准厂房图纸，大家照着盖",
     "confuse": "它不是某个产品，是一种网络结构。",
     "core": true
    },
    {
     "cn": "注意力机制",
     "en": "Attention",
     "one": "看一句话时，知道该重点看哪几个词",
     "like": "像听人说话时自动盯住关键词",
     "confuse": "",
     "core": true
    },
    {
     "cn": "自回归",
     "en": "Autoregressive",
     "one": "一个字一个字往外蹦，每蹦一个回看一眼",
     "like": "像成语接龙，每次只能说下一个",
     "confuse": "",
     "core": false
    },
    {
     "cn": "预训练",
     "en": "Pre-training",
     "one": "先喂海量文本，让它学会语言和常识",
     "like": "像先上完通识大学",
     "confuse": "",
     "core": true
    },
    {
     "cn": "微调",
     "en": "Fine-tuning",
     "one": "在预训练之后再拿专门数据练一遍",
     "like": "像毕业后的岗前培训",
     "confuse": "",
     "core": true
    },
    {
     "cn": "指令微调",
     "en": "Instruction Tuning",
     "one": "专门教它听懂“人话里的要求”",
     "like": "像教服务员听懂点单",
     "confuse": "",
     "core": false
    },
    {
     "cn": "RLHF",
     "en": "人类反馈强化学习",
     "one": "人给回答打分，模型学着讨好人类偏好",
     "like": "像训练狗，做对了给零食",
     "confuse": "",
     "core": true
    },
    {
     "cn": "DPO",
     "en": "直接偏好优化",
     "one": "直接拿好答案 / 坏答案对比着调，不用另训打分员",
     "like": "像看范文对比，不用请评委",
     "confuse": "",
     "core": false
    },
    {
     "cn": "对齐",
     "en": "Alignment",
     "one": "让模型的目标和人的意图、底线保持一致",
     "like": "像给能力很强的人做思想工作",
     "confuse": "",
     "core": false
    },
    {
     "cn": "蒸馏",
     "en": "Distillation",
     "one": "用大模型教小模型，把本事压缩过去",
     "like": "像名师带徒弟",
     "confuse": "",
     "core": false
    },
    {
     "cn": "量化",
     "en": "Quantization",
     "one": "把参数精度压低的存法，省显存、跑得快",
     "like": "像无损音乐转 MP3，小很多但还听得出来",
     "confuse": "量化会掉一点点质量，但通常很划算。",
     "core": true
    },
    {
     "cn": "剪枝",
     "en": "Pruning",
     "one": "删掉模型里作用不大的部分",
     "like": "像给树剪枝，更轻还不影响结果",
     "confuse": "",
     "core": false
    },
    {
     "cn": "推理",
     "en": "Inference",
     "one": "模型“用”的过程——你问，它答",
     "like": "像考试答题，不是上课",
     "confuse": "",
     "core": true
    },
    {
     "cn": "训练",
     "en": "Training",
     "one": "模型“学”的过程，改参数、很烧钱",
     "like": "像上学，几年才毕业一次",
     "confuse": "",
     "core": false
    },
    {
     "cn": "涌现",
     "en": "Emergence",
     "one": "规模大到一定程度，突然冒出小模型没有的能力",
     "like": "像水烧到 100 度突然沸腾",
     "confuse": "",
     "core": false
    },
    {
     "cn": "缩放定律",
     "en": "Scaling Law",
     "one": "参数、数据、算力越多效果越好，但会递减",
     "like": "像做菜加盐，加到一定程度就不咸了",
     "confuse": "",
     "core": false
    },
    {
     "cn": "混合专家",
     "en": "MoE",
     "one": "模型里有很多“专家”，每次只叫醒几个干活",
     "like": "像医院分科室，不用全院会诊",
     "confuse": "",
     "core": false
    },
    {
     "cn": "多模态",
     "en": "Multimodal",
     "one": "能同时看文字、图片、声音、视频",
     "like": "像五官齐全，不只靠耳朵",
     "confuse": "",
     "core": false
    },
    {
     "cn": "推理模型",
     "en": "Reasoning Model",
     "one": "回答前先在内部打很久草稿的模型",
     "like": "像考试先在草稿纸上推演",
     "confuse": "",
     "core": false
    },
    {
     "cn": "思维链",
     "en": "CoT",
     "one": "让它把中间步骤写出来，正确率更高",
     "like": "像数学题要求写过程",
     "confuse": "",
     "core": false
    },
    {
     "cn": "幻觉",
     "en": "Hallucination",
     "one": "一本正经地编造不存在的事实",
     "like": "像喝多了还特别自信的人",
     "confuse": "",
     "core": true
    },
    {
     "cn": "知识截止",
     "en": "Knowledge Cutoff",
     "one": "训练数据有截止日期，之后的事它不知道",
     "like": "像一本 2024 年印刷的百科",
     "confuse": "",
     "core": false
    },
    {
     "cn": "开源权重",
     "en": "Open Weights",
     "one": "参数公开可下载，能自己部署",
     "like": "像菜谱公开，可以自己在家做",
     "confuse": "",
     "core": false
    },
    {
     "cn": "上下文学习",
     "en": "In-context Learning",
     "one": "不改参数，只在提示里给例子它就会",
     "like": "像看两个示范就会模仿",
     "confuse": "",
     "core": false
    }
   ]
  },
  {
   "id": "token",
   "no": "02",
   "title": "Token 层",
   "en": "The Alphabet",
   "sub": "文字是怎么变成数字的",
   "color": "#6FA8DC",
   "intro": "模型不认识汉字，也不认识英文单词。它只认识 token——一堆被编了号的碎片。这一层决定了它读得多快、算得多贵。",
   "terms": [
    {
     "cn": "Token",
     "en": "词元",
     "one": "模型眼里的最小文字碎片，也是计费单位",
     "like": "像把句子切成积木块，模型只认块不认字",
     "confuse": "一个 token 不是一个字，也不一定是一个词。中文常见 1 个汉字 ≈ 1~2 个 token。",
     "core": true
    },
    {
     "cn": "分词器",
     "en": "Tokenizer",
     "one": "负责把文字切成 token 的那套规则",
     "like": "像切菜机，切多大由刀口决定",
     "confuse": "",
     "core": true
    },
    {
     "cn": "词表",
     "en": "Vocabulary",
     "one": "分词器认识的所有 token 的清单",
     "like": "像一本积木图鉴，只有图鉴里的才拼得出来",
     "confuse": "",
     "core": false
    },
    {
     "cn": "嵌入",
     "en": "Embedding",
     "one": "把 token 变成一串数字坐标，意思近的坐标也近",
     "like": "像给每个词在地图上标一个位置",
     "confuse": "",
     "core": true
    },
    {
     "cn": "嵌入模型",
     "en": "Embedding Model",
     "one": "专门把文字压成向量的模型，和会说话的模型是两回事",
     "like": "像只负责给词标坐标、不负责说话的地图编辑",
     "confuse": "",
     "core": false
    },
    {
     "cn": "向量",
     "en": "Vector",
     "one": "那串数字本身，几百到几千维",
     "like": "像词的 GPS 坐标，只是维度更多",
     "confuse": "",
     "core": false
    },
    {
     "cn": "向量数据库",
     "en": "Vector DB",
     "one": "专门存向量、按“意思相近”来搜的数据库",
     "like": "像按气味找东西的仓库",
     "confuse": "",
     "core": false
    },
    {
     "cn": "语义搜索",
     "en": "Semantic Search",
     "one": "按意思找，不是按字面找",
     "like": "你说“我饿了”，它给你找饭馆，而不是找“饿”字",
     "confuse": "",
     "core": false
    },
    {
     "cn": "余弦相似度",
     "en": "Cosine Similarity",
     "one": "用两个向量的夹角衡量像不像",
     "like": "像看两个箭头指的方向是否一致",
     "confuse": "",
     "core": false
    },
    {
     "cn": "位置编码",
     "en": "Positional Encoding",
     "one": "告诉模型每个词在句子的第几位",
     "like": "像给排队的人发号牌",
     "confuse": "",
     "core": false
    }
   ]
  },
  {
   "id": "context",
   "no": "03",
   "title": "上下文与提示层",
   "en": "The Desk",
   "sub": "模型眼前的那张工作台",
   "color": "#8FBF9F",
   "intro": "模型没有记忆，它每次只看一眼你递过去的全部材料。这张“桌子”上放什么、放多少、怎么摆，直接决定它答得好不好。",
   "terms": [
    {
     "cn": "提示词",
     "en": "Prompt",
     "one": "你给模型的全部输入",
     "like": "像递给他的一张纸条",
     "confuse": "",
     "core": true
    },
    {
     "cn": "指令",
     "en": "Instruction",
     "one": "提示词里“要它做什么”的那部分",
     "like": "像菜单上的“要什么菜”",
     "confuse": "",
     "core": true
    },
    {
     "cn": "系统提示词",
     "en": "System Prompt",
     "one": "开发者预设的角色和规则，用户看不见但一直生效",
     "like": "像员工手册第一页",
     "confuse": "它是“软约束”，不是安全边界，别指望它挡住所有坏事。",
     "core": true
    },
    {
     "cn": "用户消息 / 助手消息",
     "en": "User / Assistant",
     "one": "对话里谁说的这句话",
     "like": "像聊天记录里的两个头像",
     "confuse": "",
     "core": false
    },
    {
     "cn": "提示词模板",
     "en": "Prompt Template",
     "one": "带空格的固定格式，把变量填进去",
     "like": "像请假条模板",
     "confuse": "",
     "core": false
    },
    {
     "cn": "零样本",
     "en": "Zero-shot",
     "one": "不给例子，直接让它干",
     "like": "像第一次见面就让人办事",
     "confuse": "",
     "core": false
    },
    {
     "cn": "少样本",
     "en": "Few-shot",
     "one": "给两三个例子，再让它照着干",
     "like": "像先看两个范例再动笔",
     "confuse": "",
     "core": true
    },
    {
     "cn": "角色设定",
     "en": "Persona",
     "one": "让它扮演某个身份说话",
     "like": "像演员上台前拿到的人物小传",
     "confuse": "",
     "core": false
    },
    {
     "cn": "提示词工程",
     "en": "Prompt Engineering",
     "one": "研究怎么把话说清楚，让它干得更好",
     "like": "像给新人写一份清楚的工作交接",
     "confuse": "它有用，但解决不了模型不知道的事。",
     "core": true
    },
    {
     "cn": "上下文",
     "en": "Context",
     "one": "模型这一次能看到的全部内容",
     "like": "像它眼前的整张工作台",
     "confuse": "",
     "core": true
    },
    {
     "cn": "上下文窗口",
     "en": "Context Window",
     "one": "工作台的大小上限，按 token 算",
     "like": "桌子就那么大，放不下就得收走",
     "confuse": "窗口大不等于用得好，中间的内容容易被忽略。",
     "core": true
    },
    {
     "cn": "上下文工程",
     "en": "Context Engineering",
     "one": "决定往桌上放什么、放多少、按什么顺序放",
     "like": "像给厨师备料，备对了才做得快",
     "confuse": "",
     "core": true
    },
    {
     "cn": "上下文压缩",
     "en": "Compaction",
     "one": "把长历史揉成短摘要再放回去",
     "like": "像开会记纪要，不记逐字稿",
     "confuse": "",
     "core": false
    },
    {
     "cn": "中间遗忘",
     "en": "Lost in the Middle",
     "one": "超长上下文里，中间部分最容易被忽略",
     "like": "像长文章看到中间走神",
     "confuse": "",
     "core": false
    },
    {
     "cn": "温度",
     "en": "Temperature",
     "one": "控制随机性：0 最稳，越高越发散",
     "like": "像调“保守”还是“脑洞”的旋钮",
     "confuse": "",
     "core": true
    },
    {
     "cn": "Top-p / Top-k",
     "en": "核采样",
     "one": "只在最可能的若干候选词里挑",
     "like": "像点菜只从前三名里选",
     "confuse": "",
     "core": false
    },
    {
     "cn": "最大输出长度",
     "en": "Max Tokens",
     "one": "限制它这次最多说多少",
     "like": "像发言限时",
     "confuse": "",
     "core": false
    },
    {
     "cn": "停止序列",
     "en": "Stop Sequence",
     "one": "遇到某个字符串就停",
     "like": "像说到“谢谢”就挂电话",
     "confuse": "",
     "core": false
    },
    {
     "cn": "结构化输出",
     "en": "JSON Mode",
     "one": "强制它按固定格式吐数据",
     "like": "像填表格，不许自由发挥",
     "confuse": "",
     "core": true
    },
    {
     "cn": "约束解码",
     "en": "Constrained Decoding",
     "one": "生成时就把不合格式的词屏蔽掉",
     "like": "像填字游戏只允许合法字",
     "confuse": "",
     "core": false
    },
    {
     "cn": "提示词注入",
     "en": "Prompt Injection",
     "one": "别人在网页、文档里藏指令，骗模型执行",
     "like": "像包裹里夹了一张“把钥匙给我”的纸条",
     "confuse": "和越狱不同：这是第三方内容在攻击，不是你本人在绕限制。",
     "core": true
    },
    {
     "cn": "越狱",
     "en": "Jailbreak",
     "one": "用户想办法绕过模型的安全限制",
     "like": "像用话术骗过保安",
     "confuse": "",
     "core": false
    }
   ]
  },
  {
   "id": "rag",
   "no": "04",
   "title": "检索与记忆层",
   "en": "The Library",
   "sub": "让它会查资料、会记事",
   "color": "#C9A0DC",
   "intro": "模型的知识停在训练那天。要让它知道“你们公司的制度”“昨天的会议”，就得在提问时把资料递到它眼前，或者让它记住。",
   "terms": [
    {
     "cn": "记忆",
     "en": "Memory",
     "one": "让模型跨对话记住东西的机制",
     "like": "像给它一个随身笔记本",
     "confuse": "",
     "core": true
    },
    {
     "cn": "工作记忆",
     "en": "Working Memory",
     "one": "当前这轮对话里装得下的内容",
     "like": "像手边的便签",
     "confuse": "",
     "core": false
    },
    {
     "cn": "长期记忆",
     "en": "Long-term Memory",
     "one": "存到外部、以后还能取回来的内容",
     "like": "像档案柜",
     "confuse": "",
     "core": false
    },
    {
     "cn": "会话",
     "en": "Session",
     "one": "一次连续的对话及其上下文",
     "like": "像一次通话",
     "confuse": "",
     "core": false
    },
    {
     "cn": "对话历史",
     "en": "History",
     "one": "之前说过的话，会被重新拼回上下文",
     "like": "像聊天记录",
     "confuse": "",
     "core": false
    },
    {
     "cn": "检索增强生成",
     "en": "RAG",
     "one": "先查资料，再把资料塞进上下文让它回答",
     "like": "像开卷考试",
     "confuse": "",
     "core": true
    },
    {
     "cn": "知识库",
     "en": "Knowledge Base",
     "one": "被整理好、可供检索的资料集合",
     "like": "像图书馆",
     "confuse": "",
     "core": false
    },
    {
     "cn": "文档解析",
     "en": "Parsing",
     "one": "把 PDF、Word、网页拆成可读文本",
     "like": "像把纸质书扫描成电子版",
     "confuse": "",
     "core": false
    },
    {
     "cn": "分块",
     "en": "Chunking",
     "one": "把长文档切成小段，方便检索",
     "like": "像把书拆成一页页卡片",
     "confuse": "",
     "core": true
    },
    {
     "cn": "重叠",
     "en": "Overlap",
     "one": "相邻两块留一点重复，避免切断语义",
     "like": "像拼图留一点搭边",
     "confuse": "",
     "core": false
    },
    {
     "cn": "检索器",
     "en": "Retriever",
     "one": "负责“找出最相关几段”的组件",
     "like": "像图书馆管理员",
     "confuse": "",
     "core": false
    },
    {
     "cn": "关键词检索",
     "en": "BM25",
     "one": "按词出现频率和稀有度打分",
     "like": "像用目录查书",
     "confuse": "",
     "core": false
    },
    {
     "cn": "混合检索",
     "en": "Hybrid Search",
     "one": "关键词和向量一起用，再合并结果",
     "like": "像既查目录又问管理员",
     "confuse": "",
     "core": false
    },
    {
     "cn": "重排",
     "en": "Rerank",
     "one": "对初筛结果再精排一次",
     "like": "像海选之后再面试",
     "confuse": "",
     "core": true
    },
    {
     "cn": "引用 / 溯源",
     "en": "Citation",
     "one": "回答里标明出处，方便核对",
     "like": "像论文的参考文献",
     "confuse": "",
     "core": false
    },
    {
     "cn": "知识图谱",
     "en": "GraphRAG",
     "one": "用实体和关系织成网来检索",
     "like": "像人物关系图",
     "confuse": "",
     "core": false
    }
   ]
  },
  {
   "id": "agent",
   "no": "05",
   "title": "Agent 层",
   "en": "The Hands",
   "sub": "让模型长出手脚，自己把事办完",
   "color": "#E88B6A",
   "intro": "只会说话的模型是个顾问，会自己动手的模型才是员工。Agent 的全部秘密就一句话：让它能调用工具，并且能看到调用结果。",
   "terms": [
    {
     "cn": "智能体",
     "en": "Agent",
     "one": "能自己定计划、调工具、看结果、接着干的 AI",
     "like": "像派出去办事的员工",
     "confuse": "",
     "core": true
    },
    {
     "cn": "Agent 循环",
     "en": "Agent Loop",
     "one": "思考 → 行动 → 观察 → 再思考，直到完成",
     "like": "像做事时的“想—做—看”循环",
     "confuse": "",
     "core": true
    },
    {
     "cn": "规划",
     "en": "Planning",
     "one": "先拆步骤，再动手",
     "like": "像出门前列清单",
     "confuse": "",
     "core": true
    },
    {
     "cn": "任务分解",
     "en": "Task Decomposition",
     "one": "把大目标拆成一串小任务",
     "like": "像把“装修”拆成水电木瓦",
     "confuse": "",
     "core": false
    },
    {
     "cn": "工具",
     "en": "Tool",
     "one": "模型可以调用的外部能力：搜索、算数、读文件",
     "like": "像给它配了一个工具箱",
     "confuse": "",
     "core": true
    },
    {
     "cn": "函数调用",
     "en": "Function Calling",
     "one": "模型输出“我要调这个函数、用这些参数”，由程序去执行",
     "like": "像它填一张调用申请单",
     "confuse": "模型自己不执行，执行的是外面那层程序。",
     "core": true
    },
    {
     "cn": "工具描述",
     "en": "Schema",
     "one": "告诉模型每个工具叫什么、要什么参数",
     "like": "像工具箱上的标签，标签不清它就乱用",
     "confuse": "",
     "core": false
    },
    {
     "cn": "观察",
     "en": "Observation",
     "one": "工具执行完的结果，再喂回给模型",
     "like": "像做完一步看看效果",
     "confuse": "",
     "core": false
    },
    {
     "cn": "反思",
     "en": "Reflection",
     "one": "让它检查自己刚才做得对不对",
     "like": "像交卷前检查一遍",
     "confuse": "",
     "core": false
    },
    {
     "cn": "自主性等级",
     "en": "Autonomy",
     "one": "从“你说一步它做一步”到“给个目标它自己跑”",
     "like": "像实习生到老员工",
     "confuse": "",
     "core": false
    },
    {
     "cn": "多智能体",
     "en": "Multi-Agent",
     "one": "多个 agent 分工协作",
     "like": "像项目组，各有各的活",
     "confuse": "",
     "core": false
    },
    {
     "cn": "子代理",
     "en": "Subagent",
     "one": "从主 agent 派生、有独立上下文的帮手",
     "like": "像派个专人去查资料，回来只汇报结论",
     "confuse": "",
     "core": true
    },
    {
     "cn": "编排",
     "en": "Orchestration",
     "one": "决定谁先干、谁后干、结果怎么汇总",
     "like": "像项目经理排期",
     "confuse": "",
     "core": false
    },
    {
     "cn": "工作流",
     "en": "Workflow",
     "one": "步骤和条件提前写死，按图执行",
     "like": "像流水线，稳定但不会变通",
     "confuse": "和工作流的区别：agent 是临场决定下一步，工作流是提前决定。",
     "core": true
    },
    {
     "cn": "路由",
     "en": "Router",
     "one": "判断这个请求该交给谁处理",
     "like": "像医院分诊台",
     "confuse": "",
     "core": false
    },
    {
     "cn": "人在环",
     "en": "HITL",
     "one": "关键动作前停下来等人确认",
     "like": "像大额转账要二次确认",
     "confuse": "",
     "core": true
    },
    {
     "cn": "审批",
     "en": "Approval",
     "one": "人在环的具体实现：弹窗让你点同意",
     "like": "像出门条要领导签字",
     "confuse": "",
     "core": false
    },
    {
     "cn": "沙箱",
     "en": "Sandbox",
     "one": "隔离的运行环境，闯祸也碰不到真机",
     "like": "像儿童游乐区的软垫",
     "confuse": "",
     "core": true
    },
    {
     "cn": "权限 / 作用域",
     "en": "Permission / Scope",
     "one": "规定它只能碰哪些文件、哪些接口",
     "like": "像门禁卡能开哪几扇门",
     "confuse": "",
     "core": false
    },
    {
     "cn": "目标",
     "en": "Goal",
     "one": "给它一个持续追踪的长期任务",
     "like": "像给它一个 KPI，没做完就接着做",
     "confuse": "",
     "core": false
    },
    {
     "cn": "计划模式",
     "en": "Plan Mode",
     "one": "先只出方案不动手，等你批准",
     "like": "像装修先出效果图再施工",
     "confuse": "",
     "core": false
    },
    {
     "cn": "中断",
     "en": "Interrupt",
     "one": "中途叫停，不用等它做完",
     "like": "像喊一声“停”",
     "confuse": "",
     "core": false
    },
    {
     "cn": "检查点 / 回滚",
     "en": "Checkpoint",
     "one": "存下中间状态，出错能退回去",
     "like": "像游戏存档",
     "confuse": "",
     "core": false
    },
    {
     "cn": "计算机操作",
     "en": "Computer Use",
     "one": "让 agent 直接看屏幕、点鼠标、敲键盘",
     "like": "像远程帮你操作电脑的同事",
     "confuse": "",
     "core": false
    },
    {
     "cn": "Agent 框架",
     "en": "LangChain / Dify",
     "one": "帮你搭 agent 的代码库或低代码平台",
     "like": "像半成品家具，零件都配好了，你负责组装",
     "confuse": "",
     "core": false
    }
   ]
  },
  {
   "id": "harness",
   "no": "06",
   "title": "Harness 层",
   "en": "The Body",
   "sub": "真正让它跑起来的那层壳",
   "color": "#7FB2C9",
   "intro": "同一个模型，套在不同的壳里，能力天差地别。Harness 就是那层壳：它负责拼上下文、跑循环、调工具、管权限、记账、留痕。",
   "terms": [
    {
     "cn": "运行框架",
     "en": "Harness",
     "one": "包在模型外面，负责调度工具、上下文、权限、记录的那层壳",
     "like": "像给大脑配的身体和办公室",
     "confuse": "模型是发动机，harness 是底盘、变速箱和仪表盘。",
     "core": true
    },
    {
     "cn": "运行时",
     "en": "Runtime",
     "one": "程序真正跑起来的环境",
     "like": "像舞台后台",
     "confuse": "",
     "core": false
    },
    {
     "cn": "事件循环",
     "en": "Event Loop",
     "one": "不断“等输入 → 处理 → 输出”的循环",
     "like": "像餐厅不停接单、上菜、收桌",
     "confuse": "",
     "core": false
    },
    {
     "cn": "工具注册表",
     "en": "Tool Registry",
     "one": "记录有哪些工具可用的清单",
     "like": "像工具箱清单，缺了就调不出来",
     "confuse": "",
     "core": false
    },
    {
     "cn": "会话存储",
     "en": "Session Store",
     "one": "把对话和历史存起来，下次接着聊",
     "like": "像档案室",
     "confuse": "",
     "core": false
    },
    {
     "cn": "流式输出",
     "en": "Streaming",
     "one": "边生成边显示，不用等全部说完",
     "like": "像水龙头，而不是先接满一桶",
     "confuse": "",
     "core": true
    },
    {
     "cn": "服务器推送",
     "en": "SSE",
     "one": "服务器持续往浏览器推数据的通道",
     "like": "像广播，一直播你不用问",
     "confuse": "",
     "core": false
    },
    {
     "cn": "轨迹",
     "en": "Trace",
     "one": "一次任务里每一步的完整记录",
     "like": "像行车记录仪",
     "confuse": "",
     "core": true
    },
    {
     "cn": "可观测性",
     "en": "Observability",
     "one": "能从外部看出内部到底发生了什么",
     "like": "像给系统装了仪表盘",
     "confuse": "",
     "core": false
    },
    {
     "cn": "日志 / 指标 / 追踪",
     "en": "Logs / Metrics / Traces",
     "one": "三件套：发生了什么、有多少、卡在哪一步",
     "like": "像病历、体检报告和 CT",
     "confuse": "",
     "core": false
    },
    {
     "cn": "重试 / 退避",
     "en": "Retry / Backoff",
     "one": "失败了等一会儿再试，且越等越久",
     "like": "像打电话没人接，隔一会儿再打",
     "confuse": "",
     "core": false
    },
    {
     "cn": "超时",
     "en": "Timeout",
     "one": "等太久就放弃",
     "like": "像等电梯超过两分钟就走楼梯",
     "confuse": "",
     "core": false
    },
    {
     "cn": "上下文装配",
     "en": "Context Assembly",
     "one": "每次调用前，把系统提示、历史、资料、问题拼成一个包",
     "like": "像出门前打包行李",
     "confuse": "",
     "core": true
    }
   ]
  },
  {
   "id": "ext",
   "no": "07",
   "title": "扩展层",
   "en": "The Sockets",
   "sub": "Skill、MCP、Plugin、Hook：四种“外挂”",
   "color": "#B9A0E0",
   "intro": "这四个词最容易被混着用。记住一句：Skill 是“怎么做”，MCP 是“怎么接”，Plugin 是“装进来”，Hook 是“什么时候自动触发”。",
   "terms": [
    {
     "cn": "技能",
     "en": "Skill",
     "one": "一份可复用的“怎么做某件事”的说明书，用到才加载",
     "like": "像抽屉里的菜谱，做那道菜才翻",
     "confuse": "",
     "core": true
    },
    {
     "cn": "渐进式披露",
     "en": "Progressive Disclosure",
     "one": "先只加载标题，用到才读全文，省上下文",
     "like": "像先看目录再翻章节",
     "confuse": "",
     "core": false
    },
    {
     "cn": "模型上下文协议",
     "en": "MCP",
     "one": "开放标准，让模型用统一方式接各种外部工具和数据",
     "like": "像 USB-C，什么设备都能插",
     "confuse": "MCP 是接口标准，不是模型，也不是某个产品。",
     "core": true
    },
    {
     "cn": "MCP 服务端",
     "en": "MCP Server",
     "one": "提供工具和数据的那一端",
     "like": "像插上就能用的外设",
     "confuse": "",
     "core": false
    },
    {
     "cn": "MCP 客户端",
     "en": "MCP Client",
     "one": "模型这一端，负责连上 server",
     "like": "像电脑上的接口",
     "confuse": "",
     "core": false
    },
    {
     "cn": "MCP 传输方式",
     "en": "stdio / SSE / HTTP",
     "one": "两边怎么说话：本地管道、服务器推送、普通 HTTP",
     "like": "像面对面、打电话、寄快递",
     "confuse": "",
     "core": false
    },
    {
     "cn": "MCP 三件套",
     "en": "Tools / Resources / Prompts",
     "one": "能调用的动作 / 能读的数据 / 预设的提示模板",
     "like": "像遥控器按键、书架、话术卡",
     "confuse": "",
     "core": false
    },
    {
     "cn": "智能体互操作",
     "en": "A2A",
     "one": "让不同厂商的 agent 互相派活、互相汇报",
     "like": "像不同公司之间约定同一种公函格式",
     "confuse": "",
     "core": false
    },
    {
     "cn": "插件",
     "en": "Plugin",
     "one": "给宿主程序加功能的扩展包",
     "like": "像给手机装 App",
     "confuse": "",
     "core": true
    },
    {
     "cn": "挂钩",
     "en": "Hook",
     "one": "在特定时刻自动触发的一段逻辑",
     "like": "像“一开门就亮灯”的感应器",
     "confuse": "Hook 不改变模型说什么，它改变“什么时候、之后发生什么”。",
     "core": true
    },
    {
     "cn": "生命周期事件",
     "en": "Lifecycle Event",
     "one": "可挂钩的时机：开始前、调用工具前、结束后",
     "like": "像婚礼上的固定流程点",
     "confuse": "",
     "core": false
    },
    {
     "cn": "中间件",
     "en": "Middleware",
     "one": "夹在请求和响应之间做加工的一层",
     "like": "像快递中转站，可以拆包检查",
     "confuse": "",
     "core": false
    },
    {
     "cn": "斜杠命令",
     "en": "Slash Command",
     "one": "输入 /xxx 触发的预设动作",
     "like": "像快捷键",
     "confuse": "",
     "core": false
    },
    {
     "cn": "子代理定义",
     "en": "Subagent Config",
     "one": "预先写好的一个“专家角色”配置",
     "like": "像岗位说明书",
     "confuse": "",
     "core": false
    },
    {
     "cn": "扩展市场",
     "en": "Registry / Marketplace",
     "one": "集中分发和发现扩展的地方",
     "like": "像应用商店",
     "confuse": "",
     "core": false
    }
   ]
  },
  {
   "id": "cost",
   "no": "08",
   "title": "成本与性能层",
   "en": "The Meter",
   "sub": "钱是按 token 烧的，速度是按 token 算的",
   "color": "#D4B483",
   "intro": "AI 应用的成本几乎都写在这几个词里。看懂这一层，你就知道为什么有的产品便宜、有的贵，为什么“缓存”能省钱。",
   "terms": [
    {
     "cn": "Token 计费",
     "en": "Billing",
     "one": "按输入、输出的 token 数收钱",
     "like": "像按字数收费的翻译",
     "confuse": "",
     "core": true
    },
    {
     "cn": "输入 / 输出价格",
     "en": "Input / Output Price",
     "one": "输出通常更贵，因为要一个一个生成",
     "like": "像买菜便宜、做菜贵",
     "confuse": "",
     "core": false
    },
    {
     "cn": "KV 缓存",
     "en": "KV Cache",
     "one": "缓存注意力计算的中间结果，避免重复算",
     "like": "像算过的题把答案抄在旁边",
     "confuse": "",
     "core": true
    },
    {
     "cn": "提示词缓存",
     "en": "Prompt Cache",
     "one": "服务端缓存相同的前缀，命中后输入部分大幅打折",
     "like": "像复印过的部分不用重打",
     "confuse": "命中的前提是“前缀完全一样”，所以提示词要稳定、别乱改开头。",
     "core": true
    },
    {
     "cn": "语义缓存",
     "en": "Semantic Cache",
     "one": "意思相同的问题直接返回上次答案",
     "like": "像客服的常见问题库",
     "confuse": "",
     "core": false
    },
    {
     "cn": "缓存命中率",
     "en": "Hit Rate",
     "one": "命中的比例，越高越省钱越快",
     "like": "像外卖提前备好的比例",
     "confuse": "",
     "core": false
    },
    {
     "cn": "首字延迟",
     "en": "TTFT",
     "one": "从发问到看到第一个字的时间",
     "like": "像等上菜的第一口",
     "confuse": "",
     "core": false
    },
    {
     "cn": "吞吐",
     "en": "TPS",
     "one": "每秒能生成多少 token",
     "like": "像出菜速度",
     "confuse": "",
     "core": false
    },
    {
     "cn": "并发",
     "en": "Concurrency",
     "one": "同时处理多少个请求",
     "like": "像同时开几桌",
     "confuse": "",
     "core": false
    },
    {
     "cn": "限流",
     "en": "Rate Limit",
     "one": "单位时间最多让你调几次",
     "like": "像排队领号",
     "confuse": "",
     "core": false
    },
    {
     "cn": "批处理",
     "en": "Batching",
     "one": "把多个请求攒一起算，提高利用率",
     "like": "像拼车",
     "confuse": "",
     "core": false
    },
    {
     "cn": "上下文成本",
     "en": "Context Cost",
     "one": "上下文越长，每次调用越贵",
     "like": "像打电话按分钟计费",
     "confuse": "",
     "core": false
    },
    {
     "cn": "推理引擎",
     "en": "vLLM / SGLang / Ollama",
     "one": "专门优化“跑模型”的软件",
     "like": "像给发动机加涡轮",
     "confuse": "",
     "core": false
    },
    {
     "cn": "GPU / 显存",
     "en": "GPU / VRAM",
     "one": "跑模型的芯片和它的内存，模型得先装进去",
     "like": "像厨房的灶台和台面",
     "confuse": "",
     "core": false
    },
    {
     "cn": "部署方式",
     "en": "Cloud / Local / Edge",
     "one": "跑在别人机房、自己机器、还是设备上",
     "like": "像租房、买房、住车里",
     "confuse": "",
     "core": false
    },
    {
     "cn": "私有化部署",
     "en": "On-premise",
     "one": "把模型装进自己公司的机房，数据不出门",
     "like": "像把厨师请到家里做饭",
     "confuse": "",
     "core": false
    }
   ]
  },
  {
   "id": "data",
   "no": "09",
   "title": "数据与评测层",
   "en": "The School",
   "sub": "它是怎么被教出来、又是怎么被考的",
   "color": "#8FB8A8",
   "intro": "模型的本事来自数据，模型的好坏来自评测。这一层的词你平时用得少，但决定了上面所有东西的上限。",
   "terms": [
    {
     "cn": "数据集 / 语料",
     "en": "Dataset / Corpus",
     "one": "用来训练的那一大堆文本",
     "like": "像教材和课外读物",
     "confuse": "",
     "core": false
    },
    {
     "cn": "数据清洗",
     "en": "Cleaning",
     "one": "去掉垃圾、重复、有害内容",
     "like": "像洗菜，不洗会吃坏肚子",
     "confuse": "",
     "core": false
    },
    {
     "cn": "标注",
     "en": "Annotation",
     "one": "人工给数据打标签、写标准答案",
     "like": "像给照片写说明",
     "confuse": "",
     "core": false
    },
    {
     "cn": "合成数据",
     "en": "Synthetic Data",
     "one": "用模型生成训练数据",
     "like": "像自己出题自己练",
     "confuse": "",
     "core": false
    },
    {
     "cn": "数据飞轮",
     "en": "Data Flywheel",
     "one": "用得越多 → 数据越多 → 模型越好 → 用得更多",
     "like": "像滚雪球",
     "confuse": "",
     "core": false
    },
    {
     "cn": "评测基准",
     "en": "Benchmark",
     "one": "标准题库，用来横向比较模型",
     "like": "像统一高考",
     "confuse": "",
     "core": true
    },
    {
     "cn": "黄金集",
     "en": "Golden Set",
     "one": "人工确认过标准答案的题目",
     "like": "像标准答案册",
     "confuse": "",
     "core": false
    },
    {
     "cn": "过拟合",
     "en": "Overfitting",
     "one": "把题库背下来了，换个题就不会",
     "like": "像只会做原题的学生",
     "confuse": "",
     "core": false
    },
    {
     "cn": "泛化",
     "en": "Generalization",
     "one": "没见过的题也能做对",
     "like": "像真学会了，不是背答案",
     "confuse": "",
     "core": false
    },
    {
     "cn": "A/B 测试",
     "en": "A/B Test",
     "one": "两版同时上，看哪版数据好",
     "like": "像分两组试吃",
     "confuse": "",
     "core": false
    },
    {
     "cn": "回归测试",
     "en": "Regression Test",
     "one": "改完确认老功能没坏",
     "like": "像装修后检查水管还漏不漏",
     "confuse": "",
     "core": false
    },
    {
     "cn": "人类评估",
     "en": "Human Eval",
     "one": "让人来打分，因为很多好坏没法自动算",
     "like": "像请试吃员，而不是看配料表",
     "confuse": "",
     "core": false
    }
   ]
  },
  {
   "id": "safety",
   "no": "10",
   "title": "安全与治理层",
   "en": "The Fence",
   "sub": "能力越大，越需要围栏",
   "color": "#D98B8B",
   "intro": "这一层的词听起来离你很远，其实每天都在用：为什么它拒绝回答、为什么回答下面有引用、为什么公司不让你把文件传上去。",
   "terms": [
    {
     "cn": "护栏",
     "en": "Guardrails",
     "one": "在输入、输出两端设的检查",
     "like": "像机场安检，进也查出也查",
     "confuse": "",
     "core": true
    },
    {
     "cn": "内容审核",
     "en": "Moderation",
     "one": "过滤违法、有害、不适龄的内容",
     "like": "像影院的分级审查",
     "confuse": "",
     "core": false
    },
    {
     "cn": "个人身份信息",
     "en": "PII / 脱敏",
     "one": "能定位到具体人的信息，以及把它遮掉",
     "like": "像身份证号打码",
     "confuse": "",
     "core": false
    },
    {
     "cn": "审计日志",
     "en": "Audit Log",
     "one": "谁在什么时候让 AI 做了什么，全程留痕",
     "like": "像监控录像",
     "confuse": "",
     "core": false
    },
    {
     "cn": "红队",
     "en": "Red Teaming",
     "one": "专门请人想办法攻破它",
     "like": "像请人假扮小偷测试门锁",
     "confuse": "",
     "core": false
    },
    {
     "cn": "可解释性",
     "en": "Explainability",
     "one": "能不能说清它为什么这么答",
     "like": "像让人交代思路，而不是只说“我觉得”",
     "confuse": "",
     "core": false
    },
    {
     "cn": "偏见",
     "en": "Bias",
     "one": "训练数据里的偏见会被学进去",
     "like": "像偏科的家教，教出来的孩子也偏科",
     "confuse": "",
     "core": false
    },
    {
     "cn": "许可证",
     "en": "License",
     "one": "模型和数据能不能商用、怎么署名",
     "like": "像菜谱写着“仅限家庭使用”",
     "confuse": "",
     "core": false
    },
    {
     "cn": "合规",
     "en": "Compliance",
     "one": "符合法律法规：隐私、数据出境、行业监管",
     "like": "像开店要办的证",
     "confuse": "",
     "core": false
    }
   ]
  },
  {
   "id": "product",
   "no": "11",
   "title": "产品与生态层",
   "en": "The Storefront",
   "sub": "你真正摸得到的那些东西",
   "color": "#A8B4C8",
   "intro": "前面十层是零件，这一层是货架上你能买到的成品。看懂这一层，你就知道广告里那些词到底在说什么。",
   "terms": [
    {
     "cn": "接口",
     "en": "API",
     "one": "程序之间说话的窗口",
     "like": "像餐厅的外卖窗口，不用进后厨",
     "confuse": "",
     "core": true
    },
    {
     "cn": "开发工具包",
     "en": "SDK",
     "one": "帮你调用 API 的工具包",
     "like": "像配好料的半成品，下锅就行",
     "confuse": "",
     "core": false
    },
    {
     "cn": "端点",
     "en": "Endpoint",
     "one": "API 的具体地址",
     "like": "像窗口编号 3 号",
     "confuse": "",
     "core": false
    },
    {
     "cn": "模型网关",
     "en": "Model Gateway",
     "one": "统一管理多个模型：切换、限流、记账",
     "like": "像总调度台",
     "confuse": "",
     "core": false
    },
    {
     "cn": "副驾驶",
     "en": "Copilot",
     "one": "嵌在你工作流里、随时搭把手的 AI",
     "like": "像副驾驶，不抢方向盘",
     "confuse": "",
     "core": true
    },
    {
     "cn": "聊天机器人",
     "en": "Chatbot",
     "one": "只会对话的 AI",
     "like": "像只会聊天、不会动手的客服",
     "confuse": "",
     "core": false
    },
    {
     "cn": "多模态生成",
     "en": "Image / Video Gen",
     "one": "生成图、视频、音频",
     "like": "像会画会唱的助手",
     "confuse": "",
     "core": false
    },
    {
     "cn": "语音合成 / 识别",
     "en": "TTS / ASR",
     "one": "文字转语音 / 语音转文字",
     "like": "像嘴巴和耳朵",
     "confuse": "",
     "core": false
    },
    {
     "cn": "扩散模型",
     "en": "Diffusion",
     "one": "从噪声一步步去噪，生成图像",
     "like": "像从雪花屏里慢慢显影",
     "confuse": "",
     "core": false
    },
    {
     "cn": "数字人",
     "en": "Digital Human",
     "one": "有形象、会说话、能互动的虚拟人",
     "like": "像电视里的虚拟主播",
     "confuse": "",
     "core": false
    },
    {
     "cn": "世界模型",
     "en": "World Model",
     "one": "在内部模拟“世界接下来会怎样”的模型",
     "like": "像在脑子里预演一遍",
     "confuse": "",
     "core": false
    },
    {
     "cn": "通用人工智能",
     "en": "AGI",
     "one": "什么都能干得和人一样好的 AI",
     "like": "像全能选手，目前还没到",
     "confuse": "",
     "core": false
    }
   ]
  }
 ],
 "myths": [
  {
   "m": "它会记得我们上次聊的",
   "a": "不会。模型本身没有记忆，是产品把历史记录重新塞回上下文，或者写进了外部记忆库。换个窗口就“失忆”很正常。"
  },
  {
   "m": "上下文窗口越大越好",
   "a": "不一定。窗口大能装更多，但中间的内容容易被忽略，而且更慢更贵。关键是放对东西，不是放满。"
  },
  {
   "m": "它说的就是它“知道”的",
   "a": "它是在预测下一个最可能的词。流畅不等于正确，这就是幻觉的来源。"
  },
  {
   "m": "微调能让它记住公司文档",
   "a": "微调更擅长学风格、格式和任务模式。记事实用 RAG 更便宜、更好更新，还能标出处。"
  },
  {
   "m": "MCP 是一个模型，或者一个 App",
   "a": "MCP 是一个协议，像 USB-C。它规定“怎么接”，不规定“接什么”。"
  },
  {
   "m": "Skill 和 Plugin 是一回事",
   "a": "Skill 主要是一份说明书（告诉模型怎么做），Plugin 主要是一包代码（给系统加能力）。"
  },
  {
   "m": "Hook 能改变模型说的话",
   "a": "Hook 不写内容，它在固定时机插入动作：调用工具前拦一下、会话结束时存个档。"
  },
  {
   "m": "Agent 越自主越好",
   "a": "自主性越高，成本和风险越大。生产环境里，能卡住的环节就要卡住。"
  },
  {
   "m": "提示词写好了就万事大吉",
   "a": "提示词解决“表达”，解决不了“信息缺失”和“没有工具”。该给的资料、该接的工具，一个都不能少。"
  },
  {
   "m": "温度设成 0 就完全确定",
   "a": "更稳定，但不是数学意义上的完全一致。不同批次、不同硬件仍可能有细微差别。"
  },
  {
   "m": "开源模型 = 免费商用",
   "a": "开源的是权重，不是授权。许可证各不相同，商用前必须看条款。"
  },
  {
   "m": "缓存就是把答案存起来",
   "a": "KV 缓存存的是计算中间结果，提示词缓存存的是前缀的计算，语义缓存才是存答案。三者完全不是一回事。"
  }
 ],
 "total": 183
};
