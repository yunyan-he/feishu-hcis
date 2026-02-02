---
title: Interview 2
slug: Kl2iwwBmbidWrpkKbhicIMednsh
sidebar_position: 9
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
    【这里可以看之前飞书整理的那些知识点。】
    <div class="flex gap-3 columns-2" column-size="2">
    <div class="w-[50%]" width-ratio="50">
        <ul>
        <li><p><b>Q3: &quot;You mentioned you like to &#39;tinker&#39; with code. Can you give me an example?&quot;</b></p>
        </li>
        <li><p><b>意图：</b> 验证你的 &quot;Independent working style&quot;。</p>
        </li>
        <li><p><b>你的回答方向：</b> <b>必杀技——小说插件的故事。</b></p>
        </li>
        <li><p>&quot;我想在电脑上看小说 -&gt; 只有 App 能看 -&gt; 我不想妥协 -&gt; 我分析了网页请求 -&gt; 写了个插件抓取数据。&quot;</p>
        </li>
        <li><p><b>核心强调：</b> &quot;I don&#39;t wait for tools to be perfect; I build tools to fix my problems.&quot;<br/>  【我很享受这种解决问题的过程，我非常不介意在这个上面花时间。】</p>
        </li>
        </ul>
        <h4>C. 考察动机与对 LLM 的理解 (Motivation &amp; LLM)</h4>
        <p>这是他最在意的部分，看你是不是真的对 LLM 有 passion。</p>
        <ul>
        <li><p><b>Q4: &quot;Why are you interested in this position? specifically Agentic RAG?&quot;</b></p>
        </li>
        <li><p><b>意图：</b> 看你是不是海投的。</p>
        </li>
        <li><p><b>你的回答方向：</b> 结合你提到的 NotebookLLM 经历。</p>
        </li>
        <li><p>&quot;我日常高频使用 NotebookLLM 来学习和复习。我被它基于特定文档回答问题的能力震惊了。但我发现它还有局限（比如...），所以我特别想亲手构建更强大的 Agentic RAG 系统，尤其是在法律这种对准确性要求极高的领域，我觉得非常有挑战性。&quot;<br/>  【首先是llm 在我看来 这是近年来，在app生态里面给我带来最大变化的一类软件，我开始放弃百科软件 转向gpt，放弃搜题软件甚至看视频课程也变少，使用大预言模型帮助学习，并且近期，我感觉它的能力真的超乎我的想象，比如chatgpt gemini的deep search功能，直接互联网检索相关信息，然后根据需求输出一份结构完整内容详细的报告，还有notebookllm 可以基于我的内容，输出思维导图，音频，甚至这个音频还能加入进去互动，以及题目检验。我用antigravity进行vibe coding过程中，真的给我一种 ai在思考，在规划路径，在尝试，在自我调整，纠错反馈的感觉，它会生成implement 文件 还有todo list，甚至写完代码 检查完之后，自己打开网址进行点击，操作来查看有没有bug，我觉得它越来越强大了，我觉得现实生活中，它的应用潜力绝对不只是停留在文本框对话之间，随着机器人，具身智能的发展，我感觉未来一定会比我想象中狂野有趣的多。然后今天还看到了一个视频 好像是马斯克手下xai的一个工程师说了很多内部的事情，里面就提到agentic rag在未来一定会大有可为。】</p>
        </li>
        <li><p><b>Q5: &quot;What is your experience with LLMs so far?&quot;</b></p>
        </li>
        <li><p><b>意图：</b> 摸底。</p>
        </li>
        <li><p><b>你的回答方向：</b> <b>诚实但积极。</b></p>
        </li>
        <li><p>&quot;虽然通过代码直接构建 LLM 应用的经验主要是在课堂或小 Demo 级别，但我是一个 <b>Super User</b>。我非常熟悉 Prompting 的技巧，我也在自学相关的框架（比如 LangChain 或 LlamaIndex，如果你看过的话提一句，没看过就说在看相关的 Paper）。另外，我已经主动联系了 XAI Lab 做相关的偏见研究，说明我已经在行动了。&quot;<br/>  【事实上，目前来看我并没有实际的llm经验，之前训练的模型也主要是计算机视觉方向，但是llm这个方向是我之后决定去做的一个内容，首先是我和gemini商量过我的未来规划，我给它一个模糊的描述，我说我很希望能够让代码真正被人们使用，对现实社会产生影响，我不想做单纯的开发，我想做一个独立的 能够规划架构 能够系统的进行设计的工程师，gemini给我的建议是做一个ai engineer，并且在它给我设计的计划里 rag 作为知识图库引擎 是一个非常重要的内容和方向。所以我也选择了弗劳恩霍夫开的xai lab 并且从我日常使用llm的体验中 提出了3个想法 决定在开学后选择一个方向继续下去。】</p>
        </li>
        </ul>
        </div>
    <div class="w-[50%]" width-ratio="50">
        <p>太棒了！你补充的这些细节非常有<b>深度 (Depth)</b> 和 <b>个人色彩 (Personality)</b>。这正是 Moritz 这种科研型 Mentor 想要听到的——不仅仅是“我想找份工作”，而是“我对这个领域有独特的观察和思考”。</p>
        <p>特别是你关于 <b>Antigravity/Cursor (Vibe Coding)</b> 的体验，以及你如何通过 AI 规划职业路径，这些都非常真实且具有说服力。</p>
        <p>我帮你把这些素材进行了“提炼”和“润色”，转化成适合面试的英文回答。</p>
        <hr/>
        <h3><b>Q3: The &quot;Tinker&quot; Example (关于解决问题的执着)</b></h3>
        <p><b>你的核心素材：</b> 写小说插件，不妥协，享受解决问题的过程，不介意花时间。</p>
        <p><b>润色后的英文回答 (English Response):</b></p>
        <blockquote>
        <p>&quot;A great example is a browser plugin I built recently. I enjoy reading novels on my PC, but the platform restricted content to their mobile app to force downloads.<br/>Instead of just accepting that or switching devices, I saw it as a challenge. I analyzed the network requests, reverse-engineered the API, and wrote a custom plugin to fetch and parse the content for the web.<br/><b>The takeaway is:</b> I don&#39;t wait for tools to be perfect; I build tools to fix my problems. <b>I genuinely enjoy this debugging and problem-solving process.</b> I don&#39;t mind spending hours digging into a problem because the satisfaction of making it work—and optimizing my own efficiency—is what drives me as an engineer.&quot;</p>
        </blockquote>
        <ul>
        <li><b>点评：</b> 这段话把你的“固执”完美转化成了“工程师的热情 (Engineering Passion)”。</li>
        </ul>
        <hr/>
        <h3><b>Q4: Motivation &amp; Vision (关于为何选择 Agentic RAG)</b></h3>
        <p><b>你的核心素材：</b> 以前用百科/搜题，现在全靠 AI；Deep Search 的结构化报告；NotebookLLM 的思维导图/互动音频；Vibe Coding 让你看到了 AI 在“思考”和“自我纠错”；马斯克 xAI 工程师的观点。</p>
        <p><b>润色后的英文回答 (English Response):</b></p>
        <blockquote>
        <p>&quot;My motivation comes from a massive shift in my own life. I’ve completely transitioned from using traditional search engines or wikis to using AI for everything.<br/>What truly excites me is the <b>evolution from &#39;Chatbot&#39; to &#39;Agent&#39;.</b><br/>For example, I use <b>Google’s Deep Search</b> to generate structured research reports, and <b>NotebookLLM</b> to turn my raw notes into mind maps and interactive audio quizzes.<br/>But the turning point for me was using agentic coding tools (like Cursor/Antigravity). I watched the AI plan a task, generate implementation files, create a TODO list, and then <b>self-correct</b> by clicking and debugging its own code. It felt like it was truly &#39;thinking&#39; and navigating the world.<br/>That experience convinced me that <b>Agentic RAG</b> is the future. It’s not just about text anymore; it’s about autonomous agents that can plan, execute, and verify tasks in professional contexts—like the legal field you mentioned. I saw a recent talk from an xAI engineer emphasizing this exact potential, and I want to be one of the people building it, not just using it.&quot;</p>
        </blockquote>
        <ul>
        <li><b>点评：</b> 这里的关键词是 <b>&quot;Evolution from Chatbot to Agent&quot;</b>。你通过描述 AI &quot;Self-correcting&quot; (自我纠错) 和 &quot;Planning&quot; (规划) 的细节，证明了你对 Agentic RAG 的理解不仅仅停留在概念上，而是有直观体验的。</li>
        </ul>
        <hr/>
        <h3><b>Q5: Experience &amp; The Pivot (关于从 CV 转 LLM 的职业规划)</b></h3>
        <p><b>你的核心素材：</b> 之前是 CV 背景；现在决定转 LLM；咨询 Gemini 做的职业规划（AI Engineer, RAG）；选择了 XAI Lab；提出了 3 个想法。</p>
        <p><b>润色后的英文回答 (English Response):</b></p>
        <blockquote>
        <p>&quot;To be honest, my academic background originated in Computer Vision (training models with PyTorch), so I don&#39;t have commercial experience building LLM applications <em>yet</em>. However, making this shift to LLMs is a very strategic and deliberate decision for me.<br/>I recently spent a lot of time analyzing my career path—actually using AI as a sounding board—and I realized I don&#39;t just want to write code; I want to be an <b>AI Engineer</b> who designs systems that impact reality. RAG stood out as the critical engine for connecting AI to real-world knowledge.<br/>I am already executing this plan:</p>
        <ol>
        <li><b>I am a Power User:</b> I understand the capabilities and limitations of current models deeply through daily heavy usage.</li>
        <li><b>I am Research-Oriented:</b> I proactively joined the <b>Fraunhofer XAI Lab</b> for the upcoming semester. I didn&#39;t just sign up; I pitched <b>three specific research ideas</b> based on my observations of LLM bias and perspective-taking.</li>
        <li>So while I am new to the <em>development</em> side of LLMs, I bring strong general engineering skills from my CV days and a very clear roadmap for mastering this new domain.&quot;</li>
        </ol>
        </blockquote>
        <ul>
        <li><b>点评：</b> 我把你“问 Gemini”这一点稍微包装了一下，变成了 <b>&quot;using AI as a sounding board&quot; (把 AI 当作顾问)</b>，这听起来非常聪明且现代。同时，强调了 <b>&quot;Strategic and deliberate decision&quot; (战略性且深思熟虑的决定)</b>，表明你不是盲目跟风，而是想清楚了才来的。</li>
        </ul>
        <hr/>
        <h3><b>面试小贴士 (Final Tips)</b></h3>
        <ol>
        <li><p><b>自信地谈论 &quot;No Experience&quot;:</b> 在回答 Q5 时，不要因为没有 LLM 开发经验而心虚。你的 CV (计算机视觉) 经验证明了你的数学和编程底子，而你的 &quot;Power User&quot; 经验证明了你的 Product Sense (产品感)。这在这个阶段的 Student Assistant 面试中已经足够了。</p>
        </li>
        <li><p><b>关键词 &quot;Agentic Workflow&quot;:</b> 当你提到 Vibe Coding 那段经历时，可以特意提到这个词。Moritz 既然在做 Agentic RAG，听到你描述 AI 如何 &quot;plan, execute, check&quot;，他会非常有共鸣。</p>
        </li>
        <li><p><b>眼神交流:</b> 即使是视频面试，说到你兴奋的地方（比如那个 AI 自己修 Bug 的时刻），眼神要发亮，语调要上扬。这种热情是装不出来的，也是最有感染力的。</p>
        </li>
        </ol>
        </div>
    </div>

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

想要问的问题

私人一点的 你是怎么在工业界和学业界做出选择的？

我们要做的这个agentic rag 和普通rag相比 和别人做的agentic rag 有没有什么不同 或者是更加侧重哪个方面

等我开始工作之后，可能的第一个任务会是什么 团队之间用什么样的方式进行工作？

