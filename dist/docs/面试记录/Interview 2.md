---
title: Interview 2
slug: GzC3wLxQeiAc7Ukf1WGcl4kzndb/Kl2iwwBmbidWrpkKbhicIMednsh
sidebar_position: 2
---


# Interview 2

# 问题准备：

基于你提供的这些非常详尽的背景材料，以及 Moritz 这种典型的德国科研人员（特别是 Fraunhofer 这类机构）的风格，我为你做了一个深度的<b>面试官画像</b>和<b>问题预测</b>。

### 1. Moritz 是个什么样的面试官？（风格分析）

从他的邮件措辞（"gerne per Du", "Cheers", "just between you and me"）以及 Fraunhofer 的文化来看，Moritz 的画像如下：

- <b>风格：平视、务实、不拘小节。</b> 他不像传统德国大企业的 HR 那样死板，他更像是一个在这个领域探索的“学长”或“导师”。他不喜欢听那种背好的、极其官方的客套话。
- <b>关注点：Potential & Match（潜力和匹配度）。</b> 他并不指望一个 Student Assistant 进来就是专家。他更看重：
- <b>你是不是真的对这个东西感兴趣？</b> (Motivation)
- <b>你是不是一个能自己解决问题的人？</b> (Independent working style)
- <b>你写代码的手感好不好？</b> (Solid Python skills)
        
- <b>沟通偏好：</b> 喜欢直接、真诚的交流。如果你不懂某个技术细节，直接说“我还没深入研究过，但我很想学”比硬凑答案要好得多。
    
---

### 2. 预测面试问题清单 (Cheat Sheet)

这场面试只有 30 分钟，除去寒暄和最后你提问的时间，核心问答可能只有 15-20 分钟。问题会非常聚焦。

#### A. 破冰与自我介绍 (The "Pitch")

- <b>Q1: "Tell me a bit about yourself and your background."</b>
- <b>策略：</b> 这里的重点不是背诵简历，而是<b>串联故事</b>。
- <b>你的回答方向：</b> "我是 CS 背景，目前在 RWTH 读研。我有比较扎实的工程落地经验（Android 实习 + 毕设的模型部署），但我现在的热情完全被 LLM 点燃了。我是一个喜欢用技术解决自己生活问题的人（这里可以抛出那个<b>小说插件</b>的故事作为钩子），所以我非常渴望参与到 Agentic RAG 的研究中。"
            
#### B. 考察技术与工程能力 (Engineering Capability)

Moritz 需要找人干活（Build systems），所以他会确认你的代码能力。

- <b>Q2: "Can you tell me more about your Bachelor's thesis? specifically the PyTorch to ONNX part."</b>
- <b>意图：</b> 确认你是否真的懂模型训练和部署流程，还是只是调包。
- <b>你的回答方向：</b> 强调<b>End-to-End</b>的经历。不仅是训练了模型，还考虑了在手机端（Edge）的运行速度，所以做了量化（Quantization）和格式转换。这证明你有<b>System Efficiency</b>的意识，这对做 RAG 系统（通常很慢）很有价值。
    【这里可以看之前飞书整理的】
    
- <b>Q3: "You mentioned you like to 'tinker' with code. Can you give me an example?"</b>
- <b>意图：</b> 验证你的 "Independent working style"。
- <b>你的回答方向：</b> <b>必杀技——小说插件的故事。</b>
- "我想在电脑上看小说 -&gt; 只有 App 能看 -&gt; 我不想妥协 -&gt; 我分析了网页请求 -&gt; 写了个插件抓取数据。"
- <b>核心强调：</b> "I don't wait for tools to be perfect; I build tools to fix my problems."
            
#### C. 考察动机与对 LLM 的理解 (Motivation & LLM)

这是他最在意的部分，看你是不是真的对 LLM 有 passion。

- <b>Q4: "Why are you interested in this position? specifically Agentic RAG?"</b>
- <b>意图：</b> 看你是不是海投的。
- <b>你的回答方向：</b> 结合你提到的 NotebookLLM 经历。
- "我日常高频使用 NotebookLLM 来学习和复习。我被它基于特定文档回答问题的能力震惊了。但我发现它还有局限（比如...），所以我特别想亲手构建更强大的 Agentic RAG 系统，尤其是在法律这种对准确性要求极高的领域，我觉得非常有挑战性。"
        
- <b>Q5: "What is your experience with LLMs so far?"</b>
- <b>意图：</b> 摸底。
- <b>你的回答方向：</b> <b>诚实但积极。</b>
- "虽然通过代码直接构建 LLM 应用的经验主要是在课堂或小 Demo 级别，但我是一个 <b>Super User</b>。我非常熟悉 Prompting 的技巧，我也在自学相关的框架（比如 LangChain 或 LlamaIndex，如果你看过的话提一句，没看过就说在看相关的 Paper）。另外，我已经主动联系了 XAI Lab 做相关的偏见研究，说明我已经在行动了。"
            
#### D. 考察性格与工作方式 (Behavioral)

- <b>Q6: "How do you handle getting stuck on a coding problem?"</b>
- <b>意图：</b> 考察解决问题的能力。
- <b>你的回答方向：</b> <b>利用你的“固执”特质，但要反转。</b>
- "I can be quite persistent—a 'perfectionist debugger'. I usually dive deep to find the root cause (using print debugging, isolating variables). But I'm also learning that in a team, time is money. So now I try to <b>time-box</b> myself: if I'm stuck for 2 hours, I stop and ask for help or look for a workaround." (这样既展示了钻研精神，又展示了成熟度)。
            
#### E. 行政问题

- <b>Q7: "When can you start and how many hours?"</b>
- <b>回答：</b> "Immediately (or start of next semester), 19.5h is fine. I'm in Bonn, so I can come to the office 2-3 days a week."
            
---

### 3. 你需要表现出的人设 (Persona)

总结来说，Moritz 希望在电话对面看到这样一个你：

1. <b>Tech-Savvy & Hands-on:</b> 不是只会读 Paper 的书呆子，而是那个为了看小说会自己写插件的“极客”。
2. <b>Self-Driven (主动):</b> 不需要他每天盯着你干活。你自己有好奇心（比如主动联系 XAI Lab）。
3. <b>Honest & Humble:</b> 有什么说什么，不懂的技术愿意学，不装。
4. <b>Local & Available:</b> 就在波恩，随时能来干活，能干很久（1.5年+）。
    
<b>关键话术准备（建议背下来的小金句）：</b>

> <em>"I treat AI not just as a tool, but as a partner. I want to transition from a 'user' of these tools to a 'builder' of these systems."</em>
> (我不仅把 AI 当工具，更当伙伴。我想从这些工具的“使用者”转变为系统的“构建者”。)

只要你把那个“写插件”的故事和“为了 ChatGPT 翻墙”的热情讲出来，这个面试大概率就稳了。加油！

