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
     "one": "把输入变成预测或输出的计算系统；神经网络模型包括结构和训练得到的参数",
     "like": "像菜谱既有做法，也有调好的配比",
     "confuse": "参数文件保存了学到的权重，运行时还需要模型结构和相应程序。",
     "core": true
    },
    {
     "cn": "大语言模型",
     "en": "LLM",
     "one": "在大量语言数据上训练、能处理和生成文本的大规模模型",
     "like": "像读过大量材料、善于接话和整理信息的助手",
     "confuse": "常见生成式 LLM 逐个预测 token；它没有读过所有资料，也不保证回答正确。",
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
     "one": "以注意力机制为重要组件、广泛用于大模型的网络结构",
     "like": "像一套常用厂房图纸，可以改造出不同厂房",
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
     "one": "根据已有内容逐步预测后续内容，语言生成中通常以 token 为单位",
     "like": "像接龙，每一步接在前面的结果后面",
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
     "one": "用较低精度表示权重或中间数值，减少存储与计算开销",
     "like": "像压缩音乐文件，用较少空间保留主要信息",
     "confuse": "质量损失和加速效果取决于精度、方法、任务与硬件，不能保证只掉一点质量或一定更快。",
     "core": true
    },
    {
     "cn": "剪枝",
     "en": "Pruning",
     "one": "删减模型中的部分连接或计算单元，降低开销",
     "like": "像给树修枝，剪多少、怎么剪都影响结果",
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
     "one": "根据数据和目标调整模型参数的学习过程",
     "like": "像练习后调整做法，投入随训练规模而变",
     "confuse": "",
     "core": false
    },
    {
     "cn": "涌现",
     "en": "Emergence",
     "one": "模型规模增大时，某些评测能力表现出明显跃升的现象",
     "like": "像考试分数越过及格线后突然被算作“会了”，跃升也可能与评分方式有关",
     "confuse": "",
     "core": false
    },
    {
     "cn": "缩放定律",
     "en": "Scaling Law",
     "one": "描述模型表现与参数、数据、算力规模之间关系的经验规律",
     "like": "像扩大生产时研究投入和产出的关系，要配好资源，也有适用范围",
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
     "one": "能处理或生成文字、图像、音频等多种类型的信息",
     "like": "像能通过多种感官交流，但具体能看、能听还是能画要看模型",
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
     "one": "把问题展开为一系列中间推理步骤的方法",
     "like": "像解数学题时列过程，可能有帮助，但过程和结论仍要检查",
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
     "one": "训练知识覆盖的时间边界；之后的信息通常要靠提供资料或检索补充",
     "like": "像印刷百科有出版日期，旧内容也未必全收录或全记对",
     "confuse": "",
     "core": false
    },
    {
     "cn": "开放权重",
     "en": "Open Weights",
     "one": "公开模型参数供下载，具体使用条件由许可证规定",
     "like": "像拿到菜谱副本，能否修改、转发或经营餐馆还要看授权",
     "confuse": "",
     "core": false
    },
    {
     "cn": "上下文学习",
     "en": "In-context Learning",
     "one": "不改参数，利用当前输入中的示例或信息完成任务",
     "like": "像临时看示范做题，不等于永久学会",
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
     "confuse": "一个 token 不是一个字，也不一定是一个词。字数与 token 数没有固定换算比例，要用对应模型的分词器计算。",
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
     "one": "把 token、文本或其他数据表示为数字向量",
     "like": "像给内容在地图上标坐标",
     "confuse": "语义嵌入常让意思相近的内容靠近；相似度受模型和任务影响，不代表事实相同。",
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
   "intro": "常见聊天模型不会自动保留跨请求的对话状态，系统需要把相关历史或记忆提供给它。这张“桌子”上放什么、放多少、怎么摆，会影响它答得好不好。",
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
     "one": "由平台或应用设置、用于规定角色和行为的高优先级指令",
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
     "confuse": "表达清楚和提供相关资料都有帮助；只有措辞技巧，无法凭空补齐缺失的可靠信息。",
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
     "one": "某些长上下文任务中，模型利用中间信息的表现较差",
     "like": "像看长文章时漏掉中间线索，程度取决于模型和任务",
     "confuse": "",
     "core": false
    },
    {
     "cn": "温度",
     "en": "Temperature",
     "one": "调整采样概率分布，较低通常更集中，较高通常更分散",
     "like": "像调节选词时的冒险程度",
     "confuse": "低温度不保证事实正确或每次完全一致；参数范围和是否支持由接口决定。",
     "core": true
    },
    {
     "cn": "核采样",
     "en": "Top-p",
     "one": "按概率从高到低保留候选 token，直到累计概率达到阈值，再从中采样",
     "like": "像把热销菜加进候选菜单，直到覆盖九成点单需求，菜数不固定",
     "confuse": "",
     "core": false
    },
    {
     "cn": "Top-k 采样",
     "en": "Top-k",
     "one": "只保留概率最高的 k 个候选 token，再从中采样",
     "like": "像只从销量前三的菜里挑，限制的是候选数量",
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
     "en": "Structured Outputs",
     "one": "让输出遵循预先定义的数据结构；部分接口可按 JSON Schema 约束字段和类型",
     "like": "像按指定栏目和填写规则交表",
     "confuse": "格式符合要求不代表内容真实；还要处理拒绝、截断及接口支持范围。",
     "core": true
    },
    {
     "cn": "JSON 模式",
     "en": "JSON Mode",
     "one": "让正常完成的输出采用合法 JSON，但通常不保证符合指定字段和类型",
     "like": "像保证交来的是一张表，不保证栏目都填对",
     "confuse": "",
     "core": false
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
     "one": "用不可信输入中的指令诱导系统偏离原任务或规则",
     "like": "像包裹里夹了一张“把钥匙给我”的纸条",
     "confuse": "可以来自直接输入，也可以藏在网页、文档或工具结果里；越狱侧重绕过安全限制，两者可能重叠。",
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
   "intro": "训练知识不保证覆盖公司制度或最新会议。系统可以检索资料、保存记忆，再把相关内容提供给模型；保存过不等于每次都能正确取回。",
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
     "en": "Knowledge Graph",
     "one": "用实体、关系及属性组织知识的图结构",
     "like": "像标出人物、身份和相互关系的关系图",
     "confuse": "",
     "core": false
    },
    {
     "cn": "图增强检索生成",
     "en": "GraphRAG",
     "one": "利用图结构中的关系和相关材料辅助检索与生成的一类方法",
     "like": "像先沿人物关系图找线索，再结合原始资料作答",
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
   "intro": "在这里，Agent 指围绕目标选择下一步行动、根据结果继续推进的 AI 系统。工具让它能动手，外部程序负责执行与控制；能调用一次工具，还不等于能自主完成整个任务。",
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
     "one": "决定下一步 → 行动 → 观察 → 再决定，直到完成或触发停止条件",
     "like": "像做事时的“想—做—看”循环",
     "confuse": "需要完成标准、预算和中断机制；循环本身不保证任务一定完成。",
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
     "one": "按预先定义的步骤、分支和条件组织任务",
     "like": "像有分岔路线的办事流程",
     "confuse": "工作流主要由预设规则控制，Agent 更多由模型决定下一步；两者可以组合使用。",
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
     "one": "让人参与关键决策、审核或纠错的机制",
     "like": "像重要文件需要人审阅，发现问题还能退回修改",
     "confuse": "动作前审批只是其中一种形式，也可以在执行中指导或事后复核。",
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
     "one": "限制程序可访问资源的隔离运行环境",
     "like": "像有围栏的作业区",
     "confuse": "隔离效果取决于配置；共享目录、网络和开放权限仍可能让操作影响外部。",
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
     "en": "Checkpoint / Rollback",
     "one": "保存中间状态，并在支持的范围内恢复",
     "like": "像游戏存档，但已发出的邮件或已执行的外部动作未必能撤销",
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
     "one": "供 Agent 复用的任务说明，可附带脚本、模板和资料",
     "like": "像抽屉里的菜谱与配套工具，用到时再取",
     "confuse": "加载方式和可包含的内容取决于宿主；它不一定只有一份文字说明。",
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
     "one": "让 AI 应用以统一方式连接外部工具和数据的开放协议",
     "like": "像约定接口的插座，连接前还要检查兼容性和权限",
     "confuse": "MCP 是协议；连接和执行由宿主应用及客户端负责，不是模型自己建立连接。",
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
     "one": "宿主应用中负责连接 MCP 服务端的组件",
     "like": "像电脑上负责与外设通信的接口",
     "confuse": "",
     "core": false
    },
    {
     "cn": "MCP 传输方式",
     "en": "stdio / Streamable HTTP",
     "one": "协议消息的传送方式，常见有标准输入输出和 Streamable HTTP",
     "like": "像同一种话可以当面说或通过电话说；旧版 HTTP+SSE 与新版传输要区分",
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
     "confuse": "Hook 能否拦截动作、补充上下文或处理输出取决于宿主；这些操作可以影响最终回答。",
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
     "one": "复用输入前缀的计算结果，减少重复计算，部分服务也提供计费优惠",
     "like": "像重复做题时复用前面已算过的步骤",
     "confuse": "通常要求匹配的前缀，还受长度、有效期和服务规则影响；常利用 KV 缓存实现，不是缓存整段答案。",
     "core": true
    },
    {
     "cn": "语义缓存",
     "en": "Semantic Cache",
     "one": "为语义相近的请求复用已有答案或结果",
     "like": "像查常见问题库，复用前还要确认权限、条件和资料时效",
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
     "one": "限制单位时间的请求量、token 量等资源用量",
     "like": "像入口按人数或负重限制通行",
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
     "one": "在组织自己管理的基础设施上部署模型和服务",
     "like": "像把厨师请到自己的厨房，数据是否外传还要看联网、外部服务和日志配置",
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
     "one": "用于训练、验证或评测的数据集合；语料通常指语言材料",
     "like": "像教材、练习册和考卷，也可以包含图像或音频",
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
     "one": "在输入、工具执行或输出等环节施加的检查与限制",
     "like": "像入口安检、作业规则和出门复核",
     "confuse": "护栏能降低风险，不能保证发现所有问题；要与权限和隔离措施配合。",
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
     "one": "理解和说明系统输出依据或内部机制的能力",
     "like": "像查验判断依据；模型自述的思路不一定忠实反映内部计算",
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
     "one": "以对话为主要交互方式的软件，可由规则或模型驱动",
     "like": "像聊天窗口里的客服，是否能查订单、办业务取决于接了哪些能力",
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
     "one": "在广泛任务中具备通用学习和解决问题能力的 AI 目标",
     "like": "像能适应多种新工作的通才，具体定义和判定标准尚无统一共识",
     "confuse": "",
     "core": false
    }
   ]
  }
 ],
 "myths": [
  {
   "m": "它一定会记得我们上次聊的",
   "a": "不一定。常见聊天模型不会自动保留跨请求的对话状态；产品可以提供历史或检索外部记忆。能否跨会话记住、记住哪些内容，取决于功能、设置和检索结果。"
  },
  {
   "m": "上下文窗口越大越好",
   "a": "窗口大提供更高的容量上限，但不保证模型能同样有效地利用所有位置的信息。实际放入更多内容通常会增加计算与成本，程度还受模型和缓存影响。应先选相关材料。"
  },
  {
   "m": "它说的就是它“知道”的",
   "a": "常见生成式语言模型根据上下文预测后续 token，再按解码策略选择输出。这个过程没有自动核实事实的保证；流畅、自信或附带引用的回答都可能出错，仍需核对来源。"
  },
  {
   "m": "微调后就能准确记住并回答所有公司文档",
   "a": "微调可以学到知识，也常用于调整风格、格式和任务表现，但不能保证逐条记准、及时更新或给出出处。经常变动且需要溯源的资料通常适合检索或直接提供；RAG 仍需检查检索和回答质量。"
  },
  {
   "m": "MCP 是一个模型，或者一个 App",
   "a": "MCP 是一个协议，像 USB-C。它规定“怎么接”，不规定“接什么”。"
  },
  {
   "m": "Skill 和 Plugin 是一回事",
   "a": "Skill 主要组织可复用的任务知识和步骤，也可附带脚本与资源；Plugin 是宿主的扩展包，可能打包 Skill、工具和 Hook。两者可以包含或配合，具体形式由宿主决定。"
  },
  {
   "m": "Hook 只管触发动作，不会影响回答",
   "a": "Hook 的含义是在某个时机执行逻辑。宿主若支持补充上下文、修改输入或处理输出，它就能影响最终回答；如果只记录日志，则通常不会。应查看具体事件允许做什么。"
  },
  {
   "m": "Agent 越自主越好",
   "a": "自主性需要与任务风险和可验证程度匹配。应设置清楚的目标、预算和停止条件，在重要或不可逆的操作上安排适当审批，并验证结果。更多自主步骤不保证更高成功率。"
  },
  {
   "m": "提示词写好了就万事大吉",
   "a": "提示词可以说明任务，也可以携带资料和示例；但只调整措辞，不能替代缺失的可靠信息、必要的外部能力和结果验证。应根据任务提供真正需要的材料与工具。"
  },
  {
   "m": "温度设成 0 就完全确定",
   "a": "更稳定，但不是数学意义上的完全一致。不同批次、不同硬件仍可能有细微差别。"
  },
  {
   "m": "能下载模型权重，就能不看许可证随意使用",
   "a": "开放权重与开源不是同一个概念。下载、修改、再分发和商用的条件要看具体许可证，不能从“可下载”或宣传名称推断；运行模型本身也可能产生算力等成本。"
  },
  {
   "m": "缓存就是把答案存起来",
   "a": "KV 缓存保存注意力计算中的键和值；提示词缓存复用输入前缀的计算，常利用 KV 缓存实现；语义缓存则按请求相似度复用答案或结果。它们的用途不同，但并非互不相关。"
  }
 ],
 "journey": {
  "intro": "下面用一次需要查天气的请求，把零件串起来：系统调用一次工具，再生成回答。这是示意流程，不是所有 AI 请求的固定顺序；时间也不是性能承诺。",
  "steps": [
   [
    "0.00s",
    "你按下回车",
    "你问“上海现在的天气怎么样？”应用接收请求，检查输入，并准备相关会话信息。",
    "产品层 · 输入检查"
   ],
   [
    "0.10s",
    "装配上下文",
    "系统把规则、相关历史、用户问题和可用工具说明组织成输入。若先做 RAG，此时还会加入检索到的资料。",
    "03 · 上下文 · 04 · 检索"
   ],
   [
    "0.15s",
    "编码输入与复用计算",
    "模型服务将完整输入按对应规则编码为 token，并在适用时复用匹配前缀的计算。字数不能直接当成 token 数。",
    "02 · Token · 08 · 缓存"
   ],
   [
    "0.50s",
    "模型提出工具调用",
    "模型生成调用天气工具的请求及参数，例如城市“上海”。这还不是天气结果，外部程序也尚未执行工具。",
    "05 · 函数调用"
   ],
   [
    "0.60s",
    "校验后执行工具",
    "外部程序校验参数和权限；需要时先请人批准。通过检查后才调用天气服务，本例假设无需人工等待。",
    "05 · 权限 · 10 · 护栏"
   ],
   [
    "1.20s",
    "接收并回填结果",
    "工具返回天气数据。系统检查结果，将它作为资料加入上下文；错误信息也应回传，不能假装调用成功。",
    "05 · 观察 · 06 · 上下文装配"
   ],
   [
    "1.30s",
    "再次调用模型",
    "更新后的输入再次编码并交给模型，它结合工具结果组织回答。若还需工具，可重复调用循环，但要受预算和停止条件约束。",
    "05 · Agent 循环 · 01 · 推理"
   ],
   [
    "2.40s",
    "回答开始显示",
    "本例采用流式输出，用户在此时看到回答的首个 token。工具调用阶段的输出与最终回答的首个 token，要分别计时。",
    "06 · 流式输出 · 08 · TTFT"
   ],
   [
    "3.60s",
    "回答结束并记录",
    "应用完成展示并保存必要记录。输出检查可按分段或缓冲策略进行；已经显示的内容不能靠最后一次检查保证从未暴露。",
    "06 · 轨迹 · 10 · 输出检查"
   ]
  ],
  "notes": [
   "普通问答：装配上下文、编码后，模型可以直接回答，不必经过工具调用。",
   "RAG 问答：先检索并将资料加入上下文，再生成回答；也可以由模型把检索作为工具调用。",
   "工具循环：模型提出调用，程序检查并执行，结果回填后再调用模型；完成、失败、超时或预算耗尽都可能结束流程。",
   "TTFT 要说明测量口径：模型服务的首个输出 token，不一定是用户看到的首个回答 token。本例后者为 2.40 秒。",
   "费用要汇总每次模型调用的输入、输出和缓存计费，以及工具等额外开销；不能只按最终显示的字数估算。"
  ],
  "bars": [
   [
    "两次模型调用的等待",
    1.45,
    true
   ],
   [
    "回答首个 token 后的输出",
    1.2,
    true
   ],
   [
    "工具执行",
    0.6,
    false
   ],
   [
    "装配、编码与检查",
    0.35,
    false
   ]
  ],
  "bar_note": "示意耗时合计 3.60 秒，各项不重复相加。本例从提交到回答首个 token 为 2.40 秒，已包含工具等等待。真实耗时取决于模型、输入、网络和工具。"
 },
 "total": 186
};
