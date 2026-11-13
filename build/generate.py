# -*- coding: utf-8 -*-
"""由 content_*.py 生成 AI零件大全.md 与 data.js。"""
import json
import io
import os
import sys

sys.dont_write_bytecode = True

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import content_a
import content_b
import content_c
from content_journey import JOURNEY

LAYERS = content_a.LAYERS + content_b.LAYERS + content_c.LAYERS
MYTHS = content_c.MYTHS

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOTAL = sum(len(l["terms"]) for l in LAYERS)
CORE = sum(1 for l in LAYERS for t in l["terms"] if t["core"])

HEAD = """# AI 零件大全

> 给完全不懂 AI 的人：把每一个 AI 名词，讲成你生活里见过的东西。
> 全文 {total} 个词，没有一句废话，每个词只回答三个问题：**这是什么、像什么、别搞混什么**。
> 配套的可视化版本：[index.html](index.html)（暗色单页，带交互动画）。

---

## 先说结论：一张嘴就能讲明白

**模型是脑子，上下文是工作台，工具是手脚，Agent 是会干活的人，Harness 是办公室。**

- 脑子（模型）能处理输入，但**不会自动记住上次对话，也不会自行执行外部操作**。
- 所以你每次都得把材料摊在它眼前的**工作台**（上下文）上。
- 想让它办事，得给它**手脚**（工具）；会自己安排先做哪步、后做哪步的，才叫 **Agent**。
- 而让它安全地跑起来的那一整套东西——拼材料、管权限、留记录、按暂停——叫 **Harness**。
- 至于 Skill / MCP / Plugin / Hook，是给这套系统**补充做法、连接能力、打包扩展和设置触发逻辑**的不同机制。

把这句话记住，下面所有词都只是它的零件名。

## 全景图

```text
产品层    聊天框 / App / IDE 插件              ← 你摸得到的
  ↑
扩展层    Skill · MCP · Plugin · Hook          ← 插座（怎么接）
  ↑
Harness   循环 · 工具 · 权限 · 记录             ← 身体（怎么跑）
  ↑
Agent     规划 · 调用 · 观察 · 再规划           ← 手脚（怎么办事）
  ↑
上下文    提示词 · 资料 · 记忆 · 历史           ← 工作台（眼前有什么）
  ↑
模型      LLM · 参数 · Token                   ← 大脑（会不会想）
```

横向还有四层支撑：**钱**（成本与性能）、**数据与评测**（怎么教、怎么考）、**安全与治理**（围栏）、**产品与生态**（货架）。

## 怎么读（按这个顺序，不会乱）

1. **先记住那一句**：模型是脑子，上下文是工作台，工具是手脚。
2. **从 01 读到 07**：这是主干。顺着往下，就是"模型 → 上下文 → Agent → Harness → 扩展"。
3. **08–11 当参考**：钱、数据、安全、产品。遇到再说，不用背。
4. **合上之前看一眼「一次请求的完整旅程」**：把零件装回去，才算真懂。
5. **最后翻索引**：{total} 个词全在里面，想查哪个查哪个。

"""


def esc(s):
    return s


def title_of(t):
    return t["cn"] if t["cn"] == t["en"] else "{cn} · {en}".format(**t)


def render_md():
    out = io.StringIO()
    w = out.write
    w(HEAD.format(total=TOTAL).rstrip() + "\n")
    for layer in LAYERS:
        w("\n---\n\n")
        w("## {no} · {title}　{en}\n\n".format(**layer))
        w("*{sub}*\n\n".format(**layer))
        w("{intro}\n\n".format(**layer))
        chunks = []
        run = []
        for t in layer["terms"]:
            if t["core"]:
                if run:
                    chunks.append("\n".join(run))
                    run = []
                block = "#### {cn} · {en}\n\n**{one}。** {like}。".format(**t)
                if t["confuse"]:
                    block += "\n\n> **别搞混**：{confuse}".format(**t)
                chunks.append(block)
            else:
                run.append("- **{cn} · {en}** — {one}。{like}。".format(**t))
        if run:
            chunks.append("\n".join(run))
        w("\n\n".join(chunks))
        w("\n")
    # journey
    w("\n---\n\n## 把零件装回去：一次请求的完整旅程\n\n")
    w(JOURNEY["intro"] + "\n\n")
    for i, (tt, h, p, tag) in enumerate(JOURNEY["steps"], 1):
        w("%d. **%s｜%s** —— %s（%s）\n" % (i, tt, h, p, tag))
    w("\n**示例耗时**：\n\n")
    for label, seconds, _ in JOURNEY["bars"]:
        w("- %s：%.2f 秒\n" % (label, seconds))
    w("\n" + JOURNEY["bar_note"] + "\n\n")
    w("**不同请求怎么走**：\n\n")
    for note in JOURNEY["notes"]:
        w("- " + note + "\n")
    w("\n")
    # myths
    w("\n---\n\n## 十二个最常见的误解\n\n")
    for i, (m, a) in enumerate(MYTHS, 1):
        w("**{i}. “{m}”**\n\n{a}\n\n".format(i=i, m=m, a=a))
    # index
    w("\n---\n\n## 全量索引（{n} 词）\n\n".format(n=TOTAL))
    for layer in LAYERS:
        w("**{no} {title}**　".format(**layer))
        w(" · ".join("{cn}（{en}）".format(**t) for t in layer["terms"]))
        w("\n\n")
    w("""---

## 一页纸记忆卡

| 你想问的 | 对应的词 |
| --- | --- |
| 它为什么答得这么顺？ | 自回归、下一个 token 预测 |
| 它为什么胡说？ | 幻觉、知识截止、温度 |
| 它为什么不记得我？ | 上下文窗口、会话、记忆 |
| 它为什么不知道我们公司的制度？ | RAG、知识库、分块 |
| 它为什么能帮我改代码？ | Agent、工具、函数调用 |
| 它为什么老是要我点同意？ | 人在环、审批、权限 |
| 它为什么有时候特别慢？ | TTFT、上下文长度、并发、限流 |
| 它为什么按次收费？ | Token 计费、输入/输出价格、缓存 |
| 这些扩展到底啥区别？ | Skill 任务说明与资源 / MCP 连接协议 / Plugin 扩展包 / Hook 触发逻辑 |
| 是谁让它能跑起来的？ | Harness、运行时、事件循环 |
""")
    return out.getvalue()


def render_js():
    payload = {
        "layers": [
            {
                "id": l["id"], "no": l["no"], "title": l["title"], "en": l["en"],
                "sub": l["sub"], "color": l["color"], "intro": l["intro"],
                "terms": [
                    {"cn": t["cn"], "en": t["en"], "one": t["one"], "like": t["like"],
                     "confuse": t["confuse"], "core": t["core"]}
                    for t in l["terms"]
                ],
            } for l in LAYERS
        ],
        "myths": [{"m": m, "a": a} for m, a in MYTHS],
        "journey": JOURNEY,
        "total": TOTAL,
    }
    return "window.AI_DATA = " + json.dumps(payload, ensure_ascii=False, indent=1) + ";\n"


if __name__ == "__main__":
    md = render_md()
    with open(os.path.join(ROOT, "AI零件大全.md"), "w", encoding="utf-8") as f:
        f.write(md)
    with open(os.path.join(ROOT, "data.js"), "w", encoding="utf-8") as f:
        f.write(render_js())
    print("terms:", TOTAL, "core:", CORE, "layers:", len(LAYERS), "md chars:", len(md))
