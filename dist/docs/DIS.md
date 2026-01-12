---
title: DIS
slug: KtpqwJBThilgLukXLE6cKJKSn2c
sidebar_position: 3
---


# DIS

# Lecture 1

## 什么是人机交互？ (What is HCI?)

人机交互不仅是关于界面的设计，还涉及更广泛的范畴 ：

- <b>人类 (Human)</b>: 信息处理能力 (H1)、语言与交互 (H2)、人体工程学 (H3) 。
- <b>计算机 (Computer)</b>: 输入输出设备 (C1)、对话技术 (C2)、图形学 (C4)。
- <b>开发过程 (Development Process)</b>: 设计方法 (D1)、原型制作、评估技术 (D3)。
- <b>社会环境 (Use and Context)</b>: 社会组织与工作 (U1)、应用领域 (U2)、人机适配 (U3) 。

---

## 人类处理器模型：CMN 模型 (Model Human Processor: CMN Model)

> <b>考试重点 (Exam Focus)</b>: 理解并记住三个处理器的时间常数及其存储特性。

### 感知系统 (Perceptual System)

- <b>感知处理器 (Perceptual Processor)</b>: 将感官信号存储在视觉（Visual）或听觉（Auditory）存储器中 。iconic / echoic memory
- <b>感知时间 (</b>$\tau_P$<b>)</b>: 均值约 <b>100 ms</b> (范围 50–200 ms) 。
- <b>眼跳 (Eye saccades)</b>: 约 <b>230 ms</b> 。
- <b>布洛赫定律 (Bloch’s Law)</b>: $R = I \times t$ 。
    - 解释：反应强度 $R$ 是刺激强度 $I$ 与曝光时间 $t$ 的乘积 。
    - <b>局限</b>: 仅在 $t < \tau_P$ 时成立，因为眼睛会在一个感知窗口内整合刺激 。

- <b>应用</b>: 解释了动画刷新率（如 10 fps）和因果感失效的界限 。

### 认知系统 (Cognitive System)

- <b>认知处理器 (Cognitive Processor)</b>: 进行决策和信息处理 。
- <b>处理时间 (</b>$\tau_C$<b>)</b>: 均值约 <b>70 ms</b> (范围 25–170 ms) 。
- <b>工作记忆 (Working Memory, WM)</b>:
    - <b>容量</b>: Miller (1956) 提出 $7 \pm 2$ 个块 (Chunks) ；Cowen (2001) 修正为 $4 \pm 1$<b> 个块</b> (26)。
    - <b>半衰期 (</b>$\delta_{WM}$<b>)</b>: 存储 1 个块时约 <b>73 s</b>，3 个块时仅约 <b>7 s</b> 。（半衰期 = 信息在工作记忆中保持一半概率仍然存在的时间，半衰期越短，信息越容易“掉”。）

- <b>长期记忆 (Long-term Memory, LTM)</b>:
    - 容量与半衰期被视为<b>无限</b>。
    - 采用 <b>语义编码 (Semantic encoding)</b>，通过联想记忆Associative Memory。

### 运动系统 (Motor System)

- <b>动作时间 (</b>$\tau_M$<b>)</b>: 约 <b>70 ms</b> (范围 30–100 ms)。
- <b>反馈循环</b>:
    - <b>开环 (Open loop)</b>: 不依赖反馈，时间即 $\tau_M$ 。
    - <b>闭环 (Closed loop)</b>: 涉及感知 + 认知 + 运动的反馈，总时间 $\tau_P + \tau_C + \tau_M \approx \mathbf{240 \text{ ms}}$ 。

---

## 菲茨定律 (Fitts’ Law)

> <b>计算重点</b>: 预测移动到目标位置（如按钮）的时间。

### 核心公式

$$T_{pos} = I_M \cdot \log_2\left(\frac{2D}{W}\right)$$

- $T_{pos}$: 移动时间 。
- $D$<b> (Distance)</b>: 距离目标的距离（目标中心） 。
- $W$<b> (Width)</b>: 目标的宽度 。
- $I_M$<b> (Index of Movement)</b>: 动作指数常数，约 <b>100 ms/bit</b> 。
- $I_D = \log_2(2D/W)$: 困难指数 (Index of Difficulty)，单位为 <b>bits</b> 。

### 数学推导与公式变体

- <b>CMN 推导常数</b>: 运动精度比例 $\epsilon \approx 0.07$。
- <b>Shannon 公式 (ISO 标准)</b>: $T_{pos} = a + b \cdot \log_2\left(\frac{D}{W} + 1\right)$ 。
- 其中 $a, b$取决于设备，估算时常取 $a = 0, b = 100$

### 实例：手机按钮优化 (Mobile Exercise) 

- <b>任务</b>: 将“拨号”按钮距离从 $30 \text{ mm}$ 移至 $14 \text{ mm}$，按钮宽度为 $2 \text{ mm}$。
- <b>计算</b>:
    - $T_{pos1} = 100 \cdot \log_2(30/2 + 1) = 100 \cdot \log_2(16) = 400 \text{ ms}$ 。
    - $T_{pos2} = 100 \cdot \log_2(14/2 + 1) = 100 \cdot \log_2(8) = 300 \text{ ms}$。

- <b>结果</b>: 每次拨号可缩短平均 <b>100 ms</b> 的运动时间 。

# Lecture 2

https://gemini.google.com/app/59a2aee14b52683e?hl=zh-cn

## 🧠 <b>Quick Recall Summary</b>

1. <b>Gestalt Laws:</b> Principles of perceptual organization. The brain automatically groups elements. Key laws include:
    - <b>Proximity:</b> Things close together seem grouped.
    - <b>Similarity:</b> Things that look alike seem grouped.
    - <b>Closure:</b> We see complete shapes even if parts are missing.
    - <b>Common Region:</b> Things in the same boundary are grouped.
    - <b>Continuity:</b> We follow smooth, continuous lines or curves.
    - <b>Common Fate:</b> Things moving in the same direction are grouped.

1. <b>Visibility:</b> A core design principle. It means making the system's state and possible actions obvious. The goal is to put knowledge "in the world," not "in the head".

1. <b>Affordance:</b> What an object <em>allows</em> an agent to do. It's a relationship between the object and the user's capabilities.

1. <b>Signifier: </b>The <em>clue</em> or <em>signal</em> that communicates <em>where</em> the affordance (the action) can take place. Signifiers are often more important for designers than affordances.

1. <b>Conceptual Models:</b> A user's mental understanding of how a system works. The designer's goal is to ensure their <b>Design Model</b> (intention) matches the user's <b>Mental Model</b> by creating a clear <b>System Image</b> (the UI/product).

---

## 📚 <b>Detailed Comprehensive Review</b>

### Core Principle: User Errors are Design Errors

- The main message of the course is that we tend to blame users for mistakes, but usually, the product or UI design is to blame.

<b>User errors are design errors.</b>   用户错误往往是设计问题，而不是用户的问题。

### Gestalt Laws (Perceptual Organization)

- <b>Definition:</b> Rules developed by the "Berliner Schule" (Köhler, Koffka, Wertheimer) that describe how humans spatially or temporally perceive items as a group 解释人类如何将视觉元素组织成整体. They are simple rules for good UI design.

1. <b>Law 1: Good Shape:</b> Perception tends toward remembering things as simple, clear shapes.像一种 cognitive compression algorithm（认知压缩算法）
2. <b>Law 2: Proximity:</b> Objects near each other are perceived as a group. 
    - This allows for order by position only.
    - UI 应用：仅靠位置即可分组，无需额外线条

3. <b>Law 3: Closure:</b> Closed lines appear as shapes and thus as belonging together. 大脑会自动把不完整的图形补成完整的形状。
    - This is a foundation of the "window metaphor".
    - UI 应用：窗口（window）隐喻的基础

4. <b>Law 4: Common Region:</b> Objects within a bounded area (region) appear to belong together. (Note: The slides warn "Don't overdo it" .过度使用边框会导致界面杂乱
5. <b>Law 5: Similarity:</b> Similar shapes (or colors, sizes) appear as belonging together.
6. <b>Law 6: Continuity:</b> Also known as the "Law of the Good Curve". Continuous shapes appear as belonging together.
    - UI 中用于引导视线

7. <b>Law 7 (Experience):</b> We tend to file new things into categories we already know. 
    - This saves learning effort and is the foundation for metaphors (like the desktop metaphor).
    - UI 应用：桌面隐喻（desktop metaphor）

8. <b>Law 8 (Common Fate):</b> Also "Law of Common Movement". Animated objects moving together (synchronously) within a static environment appear as a group.
    - 动画（animation）是强大的 UI 引导工具

> Closure（闭合原则）：
👉 <em>大脑会自动把“未闭合的形状”补成完整的形状。</em>  
重点：形状本身是否“闭合”或“看起来像闭合”。
> Common Region（共同区域原则）：
👉 <em>只要元素被同一个边界框包住，就会被视为一组。</em>  
重点：是否被“同一个区域/框”包含。

### Information Content in UIs 信息量

- <b>Unit:</b> The basic unit of information is the <b>bit</b>.
- <b>Calculation:</b> The information content is $ log_2(N)$, where N is the number of states.
    - Toggle button (2 states) = $log_2(2) = 1$ bit.
    - Single digit (10 states) = $log_2(10)≈ 3.3$ bits.

- <b>Analog vs. Digital Displays:</b>
    - <b>Analog:</b> 
        - Good for quick estimates, seeing trends, and viewing range limits.
        - 精度越高 → 阅读时间线性增加
    - <b>Digital:</b> 
        - Good for precise reading (reading time is constant up to 3-4 digits). 读 3–4 位数字时间几乎恒定
        - Bad for estimates and trends.
    
### Visibility, Affordances, & Signifiers (Don Norman)

#### <b>Visibility:</b>

- One of the most important aspects of design.
- <b>Core Idea:</b> Much everyday knowledge is "in the world, not in the head".
- <b>Natural Design:</b> Aims to make natural clues visible, requiring no conscious thought.
- <b>Balance:</b> "Just the right things have to be visible." Too many clues are as bad as too few.
- <b>Lack of Visibility:</b> Can cause "false causalities" (thinking your action had no effect) and superstition (e.g., multiple clicks).

<b>典型错误：</b>

1. <b>Mystery Meat Navigation </b>就像一盘“神秘肉”，你不知道里面是什么。
    - 需要鼠标悬停hover才能知道功能
    - 缺乏visibility → 用户迷惑

2. <b>False Causalities（虚假因果）</b>
    - 系统响应慢/反馈不清晰 → 用户重复点击
    - 用户形成“迷信行为”（superstitions）(用户以为某个动作有效，但其实是错的，比如用户狂点，刷新页面，按住页面等)
    
#### <b>Affordances and Signifiers</b>

1. <b>Affordances</b>
    1. Definition
    - The actions that an object <em>allows</em> a user to do with it. 物体允许用户执行的动作
    - It's a relationship between an object's properties and an agent's capabilities (e.g., a chair affords sitting).是 <b>物体属性 + 用户能力</b> 的关系
    - Affordances can be visible or hidden.
    - 例：玻璃可被打破；木板可被涂写
        
2. <b>Signifiers:</b>
    - <b>Definition:</b> The <em>signaling component</em> of an affordance.
    - <b>Function:</b> Signifiers tell you <em>where</em> the action can take place. They are crucial if the affordance is not perceivable. 告诉用户 <b>在哪里 / 如何操作</b>
    - <b>Types:</b> Can be intentional (a "PUSH" sign) or unintentional (footprints in snow) .

3. <b>核心区别</b>

- <b>Affordance = what you can do（能做什么）</b>
- <b>Signifier = where/how to do it（在哪里/怎么做）</b>

1. <b>Bad Design:</b>
    - <b>False Affordance:</b> Suggests an action that is not possible.👉 <b>视觉暗示了一个动作，但动作不存在。</b>
    - <b>Accidental Affordance:</b> An unintended affordance (e.g., a railing that affords sitting).👉 <b>不是设计目的，但用户发现了额外用途。</b>
    - <b>Misleading Signifier:</b> A signifier that suggests the wrong action (e.g., a flat plate that implies "push" has a "PULL" label).

2. Good design：

- 好的设计不需要额外文字
- 可感知的affordance本身就是最好的signifier

### Conceptual Models

理解系统难用的根本原因

- <b>Definition:</b> Humans form a conceptual (mental) model of how something works when they encounter it. A good model allows users to predict the effects of their actions.
- <b>The Three Models:</b>
    1. <b>Design Model:</b> The designer's conceptual model (their intention).设计师心中的系统运作方式
    2. <b>System Image:</b> The system itself (the UI, the device, its labels). This is the only thing the user interacts with.用户能看到的界面、说明书、反馈
    3. <b>User's Mental Model:</b> The model the user develops <em>from</em> the System Image.用户形成的心理模型

- <b>The Goal of Design:</b> The designer must craft the <b>System Image</b> so that the <b>User's Mental Model</b> accurately reflects the intended <b>Design Model</b>.
- 痛点：
    - 设计师无法直接与用户沟通
    - 如果system image不清晰 → user's mental model偏离design model → bad system

# Lecture 3

<b>考试重点自测</b>：

1. <b>Mappings</b>：区分自然映射Spatial / Perceptual / Biological / Cultural. Natural mappings reduce cognitive load
2. <b>Constraints</b>：给出每种约束（Physical, Semantic, Logical, Cultural）的实例。Forcing functions
3. <b>Action Stages</b>：按顺序写出七个阶段，并能区分哪些属于 Execution，哪些属于 Evaluation。
4. <b>Gulfs</b>：Gulfs of Execution & Evaluation知道哪些设计原则（如反馈）对应哪个鸿沟。
5. <b>Processing Levels</b>：理解 Visceral, Behavioral, Reflective 的区别及其对设计的要求。

## 映射 (Mappings)

<b>Definition：</b>Mappings = Relationship between <b>controls</b>, <b>actions</b>, and <b>intended results</b>  
mapping = 控制装置、操作行为与预期结果之间的关系。

<b>Why important?</b>

- Connect UI to real world 将用户界面（UI）元素与现实世界连接起来 
- Reduce cognitive load
- Make systems intuitive

### 自然映射 (Natural Mappings)

Good mappings rely on <b>natural analogies</b>

1. Types of natural mappings

- <b>空间类比 (Spatial Analogies)</b>：最突出的例子 
    - <b>规则</b>：Controls arranged like real-world layout 按照控制对象在现实世界中的排列方式来排列控制装置。
    - <b>例子</b>：房间灯光开关的排列应与灯的位置对应 。

- <b>感知类比 (Perceptual Analogies)</b>：又称“巫术原则”(Voodoo Principle)。
    - <b>规则</b>：UI 元素（输入或输出）是对设备本身的模仿 。
    - <b>例子</b>：奔驰汽车座椅调节按钮的形状就是座椅本身的缩影 。

- <b>物理测量类比 (Analogies for physical measurements)</b>：有些“量”的变化，人类天生就能直觉理解；但有些“量”的变化，人类无法自然理解。
    - <b>累加维度 (Additive dimensions)</b>：液位上升代表“更多”，下降代表“更少” 。适用于热量、音量、线宽、亮度等 。
    - <b>替代维度 (Substitutive dimensions)</b>：<b>不适用</b>于自然映射，例如颜色、音频音调、味道或位置 。<b>这些维度没有“自然方向”</b>，所以不能用自然映射。

- <b>生物与文化类比 (Biological and Cultural Analogies)</b>：
    - <b>例子</b>：Top → bottom = more → less；Left → right depends on reading direction
    - Cultural differences matter (Hebrew, Arabic, Chinese）

1. Stove problem

田字格 四个炉灶 2*2

1. <b>Inline controls → 4! = 24 possible mappings</b>

四个旋钮排成一条线
四个炉头排成一个方阵
→ 旋钮与炉头之间有 <b>24 种可能的对应方式</b>  
→ 用户完全不知道哪个旋钮控制哪个炉头

<b>这是糟糕的 mapping。</b>

1. <b>即使左右分组，也还有 4 种可能</b>

比如左两个旋钮控制左两个炉头
右两个控制右两个炉头
但上下还是不确定
→ 仍然有 4 种可能

1. <b>需要贴标签（labels）说明</b>

如果一个界面必须贴标签才能理解
→ 说明 mapping 本身是失败的

Better solutions：<b>好的 mapping 应该让用户一眼就知道怎么用。</b>

Arrange controls in same shape as burners

Use spatial grouping

---

## 约束 (Constraints)

> 定义 (Definition)： Limit possible actions to prevent errors 限制对象的使用方式，并为新情境下的正确行动提供线索。
> 目标 (Goals)：避免操作错误，并将需要记忆的信息最小化。

### 四种约束类型 (Types of Constraints)

1. <b>物理约束 (Physical Constraints)</b>：依靠物理属性（形状、大小等）来限制行动  Based on shape, size, physical properties。Visible constraints are best. 如果约束提前可见则更有效。
    - <b>例子</b>：传统钥匙只能插入匹配的锁芯 。

2. <b>语义约束 (Semantic Constraints)</b>：Based on meaning & real-world knowledge 依靠我们对当前情境和现实世界的知识来限制行动。
    - <b>例子</b>：拼装模型飞机时，飞行员小人只能面向前方坐在挡风玻璃后面 。
    - Must match user’s cultural background

3. <b>逻辑约束 (Logical Constraints)</b>：Based on reasoning. 依靠逻辑推断来限制行动 。
    - <b>例子</b>：All parts must be used (completeness) 拼装结束时不应剩下任何零件（完整性）；
    - Steps must follow sequence (1 → 2 → 3) 按照 1, 2, 3 的顺序执行任务 。

4. <b>文化约束 (Cultural Constraints)</b>：Based on cultural conventions 依靠普遍接受的文化标准（如红灯停） 
    - Examples: Red = stop
    Text orientation indicates “up
    - <b>注意</b>：Not universal → challenge for universal design 仅适用于特定的文化群体，这是通用设计的核心问题 。

### 强迫功能 (Forcing Functions)

一种极端的物理约束，用于确保操作顺序或防止错误。

- <b>互锁 (Interlock)</b>：强制顺序（microwave door）。例如：微波炉门打开时自动断电。
- <b>锁定 (Lock-in)</b>：防止过早停止某项行动。例如：计算机的软件关机提示，防止数据丢失。
- <b>隔绝 (Lock-out)</b>：防止某项行动发生。例如：通往地下室的楼梯门，防止火灾时误入。

---

## 行动的七个阶段 (The Seven Stages of Action)

> 这是理解用户如何与系统交互的工程模型。

Two phases:

- <b>Execution（执行）</b>
- <b>Evaluation（评估）</b>

### Execution（执行阶段）

1. <b>形成目标 (Form the goal)</b>：通常是模糊的、基于问题的（例如“我需要更多光”）。
2. <b>规划 (Plan)</b>：将模糊目标转化为导向性计划（例如“操作灯开关”）。
3. <b>细化 (Specify)</b>：制定具体的行动序列（例如“转身，伸出手臂，手指按开关”）。
4. <b>执行 (Perform)</b>：物理上执行行动序列 。

### Evaluation（评估阶段）

1. <b>感知 (Perceive)</b>：感知外部世界的状态 。
2. <b>解释 (Interpret)</b>：解释所感知的现象。
3. <b>比较 (Compare)</b>：将结果与原始目标进行对比 。

### 行动鸿沟 (The Gulfs)

设计师的任务是架起桥梁连接这两道鸿沟 ：

- <b>执行隔阂 (Gulf of Execution)</b>：User → how to operate system? 用户想知道“如何操作设备？” 。
    - Bridged by: <b>signifiers, mappings, constraints, conceptual models </b>通过<b>意符、约束、映射和概念模型</b>来解决。

- <b>评估隔阂 (Gulf of Evaluation)</b>：User → how to understand system state? 用户想知道“发生了什么？是否成功？” 
    - Bridged by: <b>feedback, conceptual models </b>通过<b>反馈和概念模型</b>来解决 。

---

## 处理的三个层面 (Three Levels of Processing)

> 设计应考虑到人类大脑处理信息的三个层级。Norman’s emotional design model:

1. <b>本能层 (Visceral Level)</b>：
    - Fast, subconscious, Hard-wired reactions 快速、完全潜意识，属于“硬件编码”的反应（如恐高、温暖感）。
    - <b>设计目标</b>：让产品外观和触感出色 (Make products "feel" great)。

2. <b>行为层 (Behavioral Level)</b>：
    - Classic usability, Learned patterns, Mostly subconscious “经典可用性”层面。涉及熟练的、由模式触发的行为（如走路、运动） 。行为层的情绪是“任务相关”的：
        - <b>Hope（希望）</b>：我按这个按钮应该能成功吧？
        - <b>Fear（害怕）</b>：我是不是按错了？
        - <b>Relief（松一口气）</b>：啊，成功了！
        - <b>Despair（绝望）</b>：怎么又失败了？
    这些情绪与“操作是否顺利”有关。
    - <b>设计目标</b>：遵循标准的认知可用性规则。

3. <b>反思层 (Reflective Level)</b>：
    - Slow, conscious 意识清醒、深度思考。High-level emotions: guilt, pride Long-term memory 最高级别的情绪（如自豪、愧疚）并保留在记忆中 。
    - <b>设计目标</b>：建立用户与产品的联系（如文化含义、自我形象）。

> Visceral: make it look/feel good
> Behavioral: usability, feedback
> Reflective: meaning, branding, long-term value
> 关键见解：卓越的本能和反思设计会让用户宽容微小的可用性错误。
> 
---

## 设计原则与检查清单 (Design Principles Checklist)

为了避免鸿沟，设计师应自问以下问题 (52)：

- <b>目标</b>：我想达成什么？ (Goal)
- <b>规划</b>：有哪些可选的行动序列？ (Plan)
- <b>细化</b>：我可以做哪个动作？ (Specify)
- <b>执行</b>：我该如何做？ (Perform)
- <b>感知</b>：发生了什么？ (Perceive)
- <b>解释</b>：它是什么意思？ (Interpret)
- <b>比较</b>：这样可以吗？我达成目标了吗？ (Compare)

# Lecture 4

## Knowledge in the World and in the Head)

> 核心观点：
> 1. 很多知识 不在脑中，而在世界中（externalized knowledge）。
> 2. 即使知识不完美，人类仍能精准行动，因为人类的行为由内部知识（头脑中）和外部暗示（世界中）共同引导 。头脑中的知识不需要非常精确，只需足够区分正确行为即可。

### 记忆的特性 (Nature of Memory)

- <b>不精确性 (Imprecision)</b>：人们不需要精确记忆，只要外部信息足以区分选项即可。
- <b>外部约束 (Constraints)</b>：现实世界中的物理physical、逻辑logic和文化culture约束减少了需要记忆的信息量。【this explaines <b>Why This Works  为什么“知识不完美也能行动精准”</b>】
    - Physical Constraints（物理约束）
        - 限制可执行的动作范围，使错误动作不可能发生。
        - 例：修烤面包机时，哪些零件能被移动/组合是由物理结构决定的。
    - Cultural Constraints（文化约束）
        - 社会规则一次学习，多次适用
        - 例：进入餐厅要等位（但文化差异存在）
    - 诗人靠 语义约束（semantic constraint） 和 语言约束（linguistic constraint） 记忆长诗
    - 人类通过环境布置、模仿行为减少记忆负担

### 对比表 (Comparison)

### 知识的类型 (Types of Knowledge)

- <b>陈述性知识 (Declarative Knowledge)</b>：关于“是什么”的知识（Facts事实、Rules规则），易于传授但未必准确。易写难学，UI 设计容易传达 declarative knowledge
- <b>程序性知识 (Procedural Knowledge)</b>：关于“怎么做”的知识（技能），通过练习习得，难以用语言描述（潜意识行为）。靠练习，难教授，最好示范

### Memory & Limitations（记忆与限制）

- Random facts（随机事实）难记

例：Ctrl-Alt-Delete、圆周率前 1000 位

- Connected facts（关联事实）易记

例：摩托车方向灯的左右联想

- Password Problem（密码困境）

密码越复杂 → 系统越不安全

因为用户把知识从头脑转移到世界（写纸条、密码管理器）

### Decision Structures（决策结构）

- Shallow decision tree（浅层）：无需计划（冰淇淋菜单）
- Narrow decision tree（窄）：无需深思（汽车启动步骤）
- Wide & deep（宽且深）：如国际象棋，设计来“占用大脑”

潜意识思维：快、自动、模式匹配

意识思维：慢、线性、费力

- <b>Reminders (提醒)</b>:
    - <b>Signal (信号)</b>：知道某事发生了（如手机震动）。
    - <b>Message (信息)</b>：知道具体是什么事（如震动后看到的短信内容）。

---

## Feedforward 前馈 and Feedback 反馈

### Feedforward

Feedforward (前馈)：Feedforward is to <b>execution</b> what feedback is to <b>evaluation </b>

发生在执行 (Execution) 阶段。告诉用户“我能做什么”以及“如何操作”。

- <b>依赖项</b>：意符 (Signifiers)、约束 (Constraints)、映射 (Mappings)。

### Feedback

> 定义：系统告知用户其操作结果的方式 。发生在评估 (Evaluation) 阶段。操作后即时、明确的信息回传 。

1. Good Feedback:
    - <b>即时性 (Immediate)</b>：反馈必须在操作后立即发生，即使延迟 0.1 秒也可能导致用户焦虑 。
    - <b>信息化 (Informative and clear)</b>：必须清晰告知发生了什么，简单的报警音通常是不够的。
    - <b>适度性 (Just right amount)</b>：过多的反馈会导致用户忽略重要的警告，或因为烦人而关闭反馈功能 。
    - <b>优先级 (Prioritized)</b>：重要的反馈必须能从背景噪音中脱颖而出 。

2. Sound as Feedback
    - 声音是独特信息通道
    - 全向（omnidirectional）
    - 可用于传达意义（如车门声、键盘声）

---

## ！人类错误与根本原因分析 (Human Error & Root Cause Analysis)

### 根本原因分析 (Root Cause Analysis)

- <b>5 Whys (五问法)</b>：不断追问“为什么”，直到找到导致错误的原始系统设计缺陷，而不是责怪最后的操作者 。
- <b>设计责任</b>：所有的“人为错误”实际上都是设计错误，设计应允许用户犯错并能轻松撤回。

### 错误分类 (Classification of Errors)

人们常把错误归咎自己（不典型）

Taught helplessness → Learned helplessness

错误模型可能比正确模型更适合日常（如恒温器误解）

错误分为两类：差错 (Slips) 和 失误 (Mistakes)。

#### A. 差错 (Slips) —— “执行”阶段的错误

用户有正确的目标，但在执行过程中出错（潜意识层面）。

Slip = goal correct, execution wrong（目标正确，执行出错）
- 多见于熟练行为
- 因注意力不足、疲劳、压力等
- 易发现（因为反馈明显）

1. Action-based slips
    1. <b>捕捉性差错 (Capture Slips)</b>：频繁执行的熟练动作“捕捉”了当前想要执行的动作（如：想去商店却开到了公司）。
    - <b>描述相似性差错 (Description-similarity Slips)</b>：对目标描述不精确，导致对相似物体执行操作（如：把盐当成糖撒进咖啡）(27)。
    - <b>Mode Error (模式错误)</b>：在错误的模式下执行了动作（例：在 CapsLock 开启时输入密码）。

2. <b>Memory-lapse Slips</b>：在执行过程中忘记了步骤（如：关了灯却没锁门）。

#### B. 失误 (Mistakes) —— “规划”阶段的错误 

用户的目标或计划本身就是错误的（意识层面）。

Mistake = wrong goal / wrong plan（目标或计划错误）
- 由意识思考导致
- 难检测
- 原因：wrong goal, wrong plan, false causalities

1. <b>基于规则的失误 (Rule-based)</b>：错误地判断了情境并应用了不恰当的规则 。
2. <b>基于知识的失误 (Knowledge-based)</b>：面对全新的情境，由于缺乏知识而制定了错误的计划 。
3. <b>记忆失效失误 (Memory-lapse)</b>：在评估或目标设定阶段遗忘了某些因素 。

#### C. Detecting errors

Slips 易检测（有反馈）

Mistakes 难检测（目标本身错误）

Confirmation dialogs 无效（人们会忽略）

Reversible actions（可撤销）更好（如垃圾桶）

---

## 自动化的悖论 (The Paradox of Automation)

- <b>优点</b>：自动化可以接管枯燥、简单的重复性工作 。
- <b>悖论 (Paradox)</b>：自动化无法处理复杂的异常情况；当自动化失败时，结果往往是不可预测且危险的（如自动驾驶事故），因为此时人类操作者已处于“脱离状态” 。

---

## 为错误而设计 (Designing for Error)

- <b>Assume all errors will happen（假设所有错误都会发生）</b>
- Minimize chance（<b>最小化错误发生的机会</b>）
- Minimize effect（减少影响）
- Make errors easy to detect（易检测）
- Make errors easy to reverse（易撤销）

> <b>使错误易于检测(Detect)并易于撤销  (Undo/Reverse)</b>

- Observe real users（观察真实用户）
- Don’t punish users <b>不要惩罚用户</b>，使用有帮助的错误信息（非技术术语）
- Warning signals often ignored（警告常被忽略）

---

## 设计七原则 (7 Principles of Design)

> 目标：桥接执行隔阂和评估隔阂 (40)。

1. <b>可见性 (Discoverability)</b>：用户能发现可以进行哪些操作 。
2. <b>反馈 (Feedback)</b>：操作后有完整且连续的信息回传 。
3. <b>概念模型 (Conceptual Model)</b>：系统通过影像传达一致的操作逻辑 。
4. <b>示能 (Affordances)</b>：提供正确的示能，使用户想要的动作成为可能 
5. <b>意符 (Signifiers)</b>：确保意符清晰可见，能感知到操作位置 。
6. <b>映射 (Mappings)</b>：控制与对象之间保持自然的逻辑关系。
7. <b>约束 (Constraints)</b>：使用物理、逻辑、语义、文化约束引导用户。

---

# Lecture 5 

<b>考试复习自测 (Exam Self-Check)</b>

1. <b>Waterfall vs. DIA</b>：为什么瀑布模型不适合交互系统开发？（提示：缺乏迭代和早期反馈）
2. <b>Double Diamond</b>：双钻石模型的两部分分别解决了什么？（提示：正确的问题 vs. 正确的方案）
3. <b>Contextual Inquiry</b>：四个原则是什么？（Context, Partnership, Interpretation, Focus）
4. <b>Sketching</b>：草图的五个核心属性有哪些？

## 开发流程：从瀑布模型到迭代设计 (Development Process)

<b>Exam Focus：理解 iterative design 的意义、各阶段的目标、与 waterfall 的对比</b>

### Wrong Way: Waterfall Model（瀑布模型）

- <b>定义</b>：一种线性的、按阶段进行的软件开发方法，包括分析、设计、实现、测试和维护 。
- 特点（problem）：
    - 线性流程（analysis → design → implementation → test → maintenance）
    - 假设需求稳定，但现实中需求不断变化
    - 过于理想化，现实需要backtracking，而Backtracking 很困难
    - Usage scenarios 太抽象 使用场景往往脱离实际
    - Wrong assumptions 难以早期发现

### Right Way: DIA Cycle 

- <b>三个阶段</b>：
    DIA = Design → Implement → Analyze（循环迭代）
    1. <b>Design (设计)</b>：构思解决方案 。
    2. <b>Implement (实现/原型)</b>：制作原型。
    3. <b>Analyze (分析)</b>：理解用户需求 。

<b>循环往复</b>：通过不断重复这三个阶段来逐步逼近最终产品 。

- <b>核心思想</b>：人机交互（HCI）采用<b>迭代设计 (Iterative Design)</b> 。
    - Many iterations（多次迭代）
    - 每次迭代中：
        - Design 更具体
        - Analysis 聚焦更小的问题
        - Implementation 从 low → medium → high fidelity
    - Fix big bugs first（先解决大问题）

### Unrolling the DIA Iterations（展开的迭代流程）

<b>Design（设计）</b>

- Brainstorm different representations
- Choose representation
- Rough interface style
- Task-centered walkthrough
- Fine-tune interface
- Heuristic evaluation
- Usability testing

<b>Implement（实现）</b>

- Low-fidelity prototypes（纸质原型）
- Medium-fidelity prototypes
- High-fidelity prototypes
- Working systems

<b>Analyze（分析）</b>

- Field testing
- Alpha/Beta tests

### Norman’s Human-Centered Design Process

对应 DIA：

- Observation
- Idea generation
- Prototyping
- Testing

<b>Norman 名言：</b>

> “Never solve the problem I am asked to solve.”
→ Root-cause analysis（根本原因分析）

## Root-Cause Analysis（根本原因分析）

<b>Exam Focus：5 Whys、找真正的问题</b>

- 不要急着解决表面问题
- Keep asking WHY
- 找到 root problem 才能找到正确 solution

---

## 双钻石模型 (The Double Diamond Model) ⭐ <b>高频考点</b>

该模型由英国设计协会提出，将设计过程分为两个阶段，每个阶段都包含发散 (Diverge) 和收敛 (Converge) 的思维过程 。

1. <b>Finding the right problem( Discover → Define）</b>
    - <b>Discover (发现)</b>：通过观察和调研获取洞察 。
    - <b>Define (定义)</b>：确定核心挑战和具体问题 。

2. <b>Finding the right solution ( Develop → Deliver）</b>
    - <b>Develop (发展)</b>：构思各种潜在的解决方案 。
    - <b>Deliver (交付)</b>：测试并缩小范围，得出最终方案。

## Design Thinking（设计思维）

五步骤（考试常考顺序）：

1. Empathize
2. Define
3. Ideate
4. Prototype
5. Test

---

## 分析阶段：观察用户 (Analyze: Observing Users)

### 核心准则

- <b>不要只问，要去看 (Don't just ask, watch!)</b>：用户通常无法准确描述他们的行为或需求，他们会告诉你他们“应该”怎么做，而不是实际上怎么做 。
- <b>目标</b>：理解用户是谁 (Who)、他们想做什么 (What) 以及互动的背景 (Context) 。

### 情境访谈 (Contextual Inquiry) ⭐ <b>核心技术</b>

这是一种深入了解用户工作方式的方法，遵循以下四个原则 ：

- <b>Context (情境)</b>：在用户实际工作的环境中进行观察，重点关注具体的、当下的操作，而不是抽象的概括 。
- <b>Partnership (伙伴关系)</b>：研究者与用户像“师徒”一样合作。用户是专家，研究者通过观察来学习其工作流程。
- <b>Interpretation (解释)</b>：观察到的事实必须转化为其对设计的意义。研究者应与用户共同验证这些假设。
- <b>Focus (聚焦)</b>：保持明确的研究目标，专注于与设计相关的数据点。

---

## 设计阶段：构思与表达 (Design: Ideation)

### 头脑风暴 (Brainstorming)

- <b>目标</b>：在短时间内产生大量的想法（追求数量而非质量）。
- <b>规则</b>：
    - <b>不要批评</b>：此时没有坏主意，延迟评价 。
    - <b>大胆构思</b>：鼓励野心勃勃的想法 。
    - <b>建立在他人之上</b>：结合并改进他人的想法。
    - <b>保持聚焦</b>：围绕一个主题展开 。

### 分镜脚本 (Storyboards)

- <b>定义</b>：通过一系列草图展示用户如何通过系统完成特定任务。
- <b>要素</b>：通常包含 3-5 个画面，重点在于<b>任务流程</b>而非界面细节 。
- <b>优势</b>：直观展示交互的背景和逻辑，便于团队沟通 。
- 
### 草图绘制 (Sketching) ⭐ <b>理解重点</b>

- <b>特征 (Properties)</b>：
    - <b>快速 (Quick)</b>：几秒钟或几分钟内完成 。
    - <b>廉价 (Cheap)</b>：可以随时丢弃 (31)。
    - <b>大量 (Plentiful)</b>：形成一个想法集 (32)。
    - <b>模糊 (Ambiguous)</b>：允许存在多种解释，激发新灵感 (33)。

- <b>本质</b>：草图不是艺术创作，而是<b>思考的工具</b>和<b>沟通的手段</b> (34)。

---

[重构版本](/KtpqwJBThilgLukXLE6cKJKSn2c/YYYIwNzSaixmbrkg6E1cPeYhnIh)

# Prototypes

## Paper Prototypes

在“Designing Interactive Systems I (DIS I)”关于<b>原型设计（Prototyping）</b>的课程大纲中，来源材料将<b>纸质原型（Paper Prototypes）</b> 定位为设计流程中最基础、最关键的初步阶段。

### Characteristics

- <b>Quick and cheap：</b> 纸质原型通常是<b>第一代原型</b>，其特点是“快速且廉价”。
- <b>Rough sketches & Hand-drawn：</b> 它们是由铅笔或钢笔绘制的界面草图，强调<b>手绘</b>，不使用尺子，更不使用电脑。
- <b>高层级关注：</b> 由于其细节程度低，设计师和用户能够将注意力集中在<b>重要的高层级 UI 设计</b>上，而不会被视觉细节干扰。

### Types

来源根据交互深度和呈现方式将纸质原型分为几种类型：

- <b>类故事板型 (Storyboard-like, Type A)：</b>
    - 在一张纸上放置多个手绘的 UI 快照帧，并标注连接关系(侧重用户流程完整呈现，标注用户操作路径)。
    - <b>局限性：</b> 这种形式只能展示<b>一种固定的交互序列</b>（即特定场景），主要侧重于 UI 本身而非环境。

- <b>翻页书型 (Flipbook, Type B)：</b>
    - 将每个 UI 快照画在独立的页面上，收集成册。
    - <b>用法：</b> 向用户展示起始页，当用户选择某个动作时，设计者翻到对应的结果页。
    - <b>优势：</b> 能够模拟 UI 的动态交互过程。

- <b>便利贴原型 (Post-It Prototypes)：</b>
    - 这是一种<b>交互性更强</b>的纸质原型。利用便利贴的多层特性，在基础页面上叠加菜单、窗口或对话框。
    - <b>灵活性：</b> 通过手动操作便利贴，可以轻松模拟对话框的弹出和关闭，且修改极其迅速。

### Pros and Cons

- <b>优点：</b> Focus on high-level design 制作极其迅速，且有助于在设计初期过滤掉不合理的高层逻辑。
- <b>缺点：</b> 
    - <b>Dialog sequence</b> hard to convey 如果不亲自演示，很难传达复杂的<b>对话序列</b>。
    - High effort for many screens 如果需要展示非常多的屏幕状态，绘图工作量会变得很大。
        
### 在设计流程中的作用

- <b>作为数字原型的先导：</b> 来源明确指出，只有在完成了初步、简单的纸质原型之后，才应该开始创建中等保真度的<b>数字原型</b>。
- <b>参与式设计的工具：</b> 在<b>参与式设计（Participatory Design）</b> 中，纸质原型被列为一种核心技术，用于加强设计团队与用户之间的沟通。
- <b>模拟复杂交互：</b> 来源展示了如何通过纸质原型模拟单选按钮、复选框、可展开列表以及禁用（置灰）控件等具体的 UI 元素。
    
### 实用建议与技巧

- <b>模板化：</b> 建议为对话框对象创建空白模板，以便快速填充内容。
- <b>记录：</b> 建议对用户测试过程进行录像，以便后续分析。
- <b>故事板起步：</b> 一个简单的故事板往往就可以作为你的第一个纸质原型。
    
---

<b>类比理解</b>

如果将开发一个交互系统比作<b>盖房子</b>：

- <b>纸质原型</b>就像是建筑师在餐巾纸或草图本上画的<b>草图</b>。它不需要精准的尺寸，其目的是确定“客厅是否应该连着厨房”这种大方向的问题。如果你发现布局不对，只需揉掉纸团重新画一张，代价极低。只有当这张“纸”上的布局让所有人满意后，才会去制作更精细的木质模型（数字原型）或开始施工。

## Digital Prototypes

在“Designing Interactive Systems I (DIS I)”的课程体系中，<b>数字原型（Digital Prototypes）</b> 被视为设计流程中介于初步草图与最终产品之间的关键环节。来源材料从定义、实施策略、工具选择以及潜在风险等多个维度对其进行了详细讨论。

以下是来源对数字原型的具体看法：

### Characteristics

- <b>中等保真度（Medium Fidelity）：</b> 与低保真度的纸质原型相比，数字原型被归类为中等保真度模型
- <b>Interactive and precise</b>  具有更详尽的细节、更高的精确度和交互性。

> <b>先纸后电原则：</b> 来源明确强调，只有在完成了初步且更简单的纸质原型之后，才应该开始创建数字原型。

- <b>UI focused over functionality：</b> 数字原型本质上是最终用户界面某些方面的模拟、模型或幻觉（Mock-up/Illusion），其核心在于展现<b>交互界面（UI）</b> 而非实际的功能逻辑,也叫做<b>界面错觉（User Illusion）</b>。

### Types

为了平衡开发成本与测试需求，来源提出了三种限制数字原型范围的策略：

- <b>水平原型（Horizontal Prototype）：</b> <b>Entire UI, no functionality </b>展示整个用户界面的外观，但几乎没有具体的功能支持，仅模拟每一步交互。
- <b>垂直原型（Vertical Prototype）：</b> <b>Detailed implementation of few functions </b>仅实现极少数功能，但在这些功能上挖掘得很深，允许在具体案例中测试通用的设计理念。
- <b>场景原型（Scenario）：</b> <b>水平与垂直策略的结合</b>，脚本仅模拟预设好的固定交互路径。

### Pros and Cons

- <b>优势：</b> 比纸质原型更具吸引力，且由于其交互性，用户可以在没有设计师在场的情况下独立进行尝试。
- <b>潜在风险与误区：</b>
    - <b>细节干扰focus on design details：</b> 用户可能过度关注设计细节（如颜色、字体）而忽略了更高层级的逻辑问题。
    - <b>批评阻碍user fear of criticizing polished UI：</b> 过于精致的界面会让用户害怕提出批评或修改建议，因为这看起来已经付出了巨大的劳动。
    - <b>管理层误解 Management thinks it is real：</b> 管理层可能会因为原型看起来很真实，而误以为软件开发已经接近完成。
    - 系统等同论： 用户容易将“界面”直接等同于“系统本身”，这是由用户的心理模型（Conceptual Model）决定的。

### 不同形式的数字原型

- <b>截图原型（Screenshot Prototypes）：</b> 利用 Photoshop、PowerPoint 等工具绘制 UI 故事板，属于薄弱的水平原型。这种形式便于电子化分发，且设计稿有时能直接用于最终产品。
- <b>脚本模拟（Scripted Simulations）：</b> 相比简单的截图，它利用幻灯片切换或图层隐藏来模拟场景转换，具有一定的垂直深度，适合用于方案展示（Pitching）。但其缺点是<b>线性化</b>，一旦用户偏离脚本，模拟就会失效。
- <b>非线性数字原型（Non-Linear Digital Prototypes）：</b> 将 UI 元素连接到特定的截图，具有更强的水平和垂直深度，让用户能够<b>自主决定交互路径</b>，不再局限于预设序列。

---

<b>类比理解</b>

数字原型就像是装修房屋时的<b>精装样板间</b>：

- 它比纸上的平面图（纸质原型）真实得多，你甚至可以推开门（水平原型）或试用那个高级洗手台（垂直原型）。
- 它的目的是让你感受未来的生活体验（UI 交互），而不是真的接通了整栋楼的上下水管道（底层代码功能）。
- 但样板间也有风险：如果装修得太漂亮，你可能会忙着称赞壁纸的颜色，而忘了检查承重墙的位置是否合理；或者因为样板间太精致，让你产生下周就能拎包入住的错觉。

## Prototyping Tools

在“Designing Interactive Systems I (DIS I)”课程关于<b>原型设计（Prototyping）的背景下，来源材料将原型工具（Prototyping Tools）</b> 视为一个光谱，涵盖了从简单的纸笔到复杂的集成开发环境。设计师应根据原型的保真度需求、交互深度（水平或垂直）以及测试目标来选择合适的工具。

以下是来源对各类原型工具的具体看法和分类探讨：

### 低保真与物理工具 (Physical & Low-Tech Tools)

在设计的最初阶段，来源强烈建议使用非数字化工具，以保持灵活性并关注高层设计。

- <b>纸笔工具：</b> 简单的铅笔和手绘草图是制作第一代原型的首选工具。其优势在于“快速且廉价”，能让设计师和用户专注于 UI 逻辑而非视觉细节。
- <b>便利贴 (Post-it notes)：</b> 用于创建更具交互性的纸质原型，通过多层叠加模拟窗口和对话框的弹出。
- <b>物理材料：</b> 对于涉及物理交互的硬件原型（如新型鼠标或穿戴设备），来源提倡使用<b>木材、泡沫芯材、塑料、纸板或 3D 打印</b>。这些工具能帮助用户感知软件无法模拟的“触感”。
    
### 数字演示与图形工具 (Presentation & Graphics Tools)

当原型进入中等保真度阶段时，可以使用通用软件来构建“用户幻觉”。

- <b>演示软件 (PowerPoint, Keynote)：</b> 被视为创建“点击流”或脚本模拟原型的有效工具。它们支持场景切换和基础动画，适合用于方案展示（Pitching），但缺点是交互通常是线性的。
- <b>图形编辑软件 (Photoshop)：</b> 来源认为 Photoshop 图层可以产生某种“魔力”，通过显示/隐藏图层来模拟复杂的 UI 状态。虽然可以达到很高的视觉质量，但缺乏真实的交互感。
    
### 专业原型与线框图工具 (Specialized Prototyping Software)

来源列举了现代 UI/UX 设计中常用的专业工具，这些工具通常支持非线性交互，允许用户自行决定操作路径。

- <b>主流工具：</b> 包括 <b>Balsamiq</b>（侧重线框图）、<b>Figma</b>、<b>Miro</b>、<b>Origami Studio</b>。
- <b>动画应用：</b> 如 <b>Adobe Animate</b>。它采用“时间轴”隐喻，适合制作复杂的动画效果。虽然可以通过脚本扩展功能，但其脚本语言在计算机科学标准下可能显得较为笨拙，且大型设计难以管理。
    
### 开发导向型工具 (Development-Oriented Tools)

这些工具创建的原型往往能直接转化为最终产品，体现真实的“外观与感觉”。

- <b>Web 技术 (HTML + JavaScript)：</b> 设计 Web 界面的自然选择。其代码格式清晰，可在任何浏览器中查看，但难以保证跨平台的精确一致性。
- <b>Rapid Development环境 (Visual Basic .NET, Tcl/Tk)：</b> 适用于创建标准 GUI 界面。开发周期快，但可能存在性能问题或依赖特定运行环境。
- <b>界面构建器 (User Interface Builders)：</b> 如 <b>Xcode (SwiftUI)</b>。来源认为这是定义真实软件 UI 的强大工具，它允许轻松添加“垂直功能”（即后台逻辑代码），且随着声明式编程的发展，代码与 UI 预览已实现高度统一。
- <b>Special-Purpose (MAX/MSP)：</b>这是一个多媒体开发环境，允许通过连接“补丁”（Patches）来处理音频、视频和 MIDI 数据。它非常适合制作<b>交互式音乐系统</b>或复杂的媒体处理原型。

---

<b>类比理解</b>

选择原型工具就像是<b>厨师准备试吃菜品</b>：

- <b>纸质原型工具</b>就像是厨师随手记下的<b>配料清单</b>，快速决定是做川菜还是粤菜。
- <b>演示工具（PowerPoint）就像是食物模型</b>，看起来很诱人，可以展示摆盘，但不能真的吃。
- <b>专业设计工具（Figma/Animate）就像是半成品</b>，用户可以尝到酱汁的味道，并决定是否要多加点糖。
- <b>开发环境（Xcode/Web）就像是在真实的厨房里做出的第一道菜</b>。如果味道对了，你只需要照着这个方子继续批量生产（转化为最终产品）即可。

## Advanced Techniques

在“Designing Interactive Systems I (DIS I)”关于原型设计（Prototyping）的课程背景下，来源材料中提到的“高级技术”（Advanced Techniques）主要侧重于如何<b>模拟复杂的系统逻辑</b>、<b>处理物理交互</b>以及<b>深化用户参与</b>。这些技术通常用于解决普通纸质或简易数字原型难以覆盖的特定设计挑战。

以下是来源对这些高级技术的看法和分类讨论：

### 绿野仙踪技术 (Wizard of Oz)

来源将“绿野仙踪”视为一种极其有效的高级模拟技术，其核心在于<b>“human simulates system response 用人类模拟算法”</b> 。

- <b>运作机制：</b> 由一名隐藏的<b>人类“巫师”</b>（Wizard）来模拟系统的响应。这位“巫师”根据算法逻辑解释用户的输入，并控制电脑模拟出相应的输出。用户感知到的是一个“智能”系统，但实际上后台没有任何代码实现。
- <b>适用场景：test complex functionality</b> 特别适合用于添加<b>复杂的垂直功能</b>（Vertical functionality）或测试<b>未来主义的设计构思</b>。
- <b>经典案例：</b> 1984 年 IBM 的语音识别编辑器测试，当时计算机尚无法实时处理语音，于是通过隐藏的打字员模拟了识别效果。

### todo：prototype lifecycle 

1. Throw away prototyping
2. Incremental develop

### 硬件原型设计 (Hardware Prototypes)

当软件原型无法提供足够的感知信息时，来源提倡使用硬件原型。

- <b>物理交互的重要性：</b> 对于新型 3D 鼠标或穿戴设备（如 Pebble 手表），物理触感是设计的核心。
- <b>材料与技术：</b> 来源展示了使用<b>泡沫芯材（Foam）、木材、塑料、纸板</b>甚至 <b>3D 打印</b>来制作原型的方法。
- <b>代价权衡：</b> 来源指出，硬件原型的缺点是<b>构建和修改的成本极高</b>。
    
### 参与式设计 (Participatory Design)

这是一种将用户从“被测者”提升为“设计伙伴”的高级方法学。

- <b>深度参与：</b> 用户在整个软件开发过程中都被纳入设计团队。
- <b>多元化技术：</b> 除了原型制作，还结合了<b>角色扮演（Role plays）、头脑风暴、研讨会</b>和访谈等多种沟通技术。
- <b>局限性：</b> 尽管这种方法能确保系统符合用户需求，但其<b>投入成本巨大</b>，且可能与现有的管理层级产生冲突。
    
---

<b>类比理解</b>

<b>绿野仙踪技术</b>就像是一场精心设计的<b>木偶戏</b>：

用户是台下的观众，看着木偶（原型界面）在舞台上灵活地说话和行动，以为木偶拥有灵魂（智能算法）。但实际上，所有复杂的动作和智慧都来自于幕后那个看不见的操纵者（“巫师”）。这种技术让设计师在还没造出真正的“人工智能”之前，就能测试观众对木偶表演的真实反应。

# Evaluation

## Evaluating Without Users

在“Designing Interactive Systems I (DIS I)”关于<b>评估（Evaluation）的课程体系中，来源材料将评估分为两大阵营：“有用户评估”和“无用户评估（Evaluating Without Users）”</b>。

<b>无用户评估</b>通常被视为设计过程中的早期环节，主要用于在实际原型或实现方案（Implementations）产生之前对<b>设计方案（Designs）</b> 进行预审。

以下是来源对“无用户评估”的具体技术和看法的详细讨论：

### E1–E4

来源列举了四种不需要用户参与的评估方法，统称为 E1 到 E4：

- <b>E1: 文献回顾 (Literature Review)：</b> 通过参考已有的研究成果和标准来指导评估。
- <b>E2: 认知走查 (Cognitive Walkthrough)：</b> 设计师模拟用户在完成特定任务时的心理过程，检查界面的逻辑是否符合直觉。
- <b>E3: 启发式评估 (Heuristic Evaluation)：</b> 专家根据一套预定义的可用性原则（启发式准则）来审查界面设计。
- <b>E4: 基于模型的评估 (Model-based Evaluation)：</b>
    - 这种方法提供了一个用于设计和评估的理论框架。
    - <b>典型例子：</b> 包括 <b>GOMS</b> 和 <b>KLM</b>（用于估算操作时间）、<b>信息效率（Information efficiency）评估、设计基本原理（Design Rationale）</b>以及<b>HCI 设计模式 (HCI Design Patterns)（</b>该设计模式也是一种评估依据，例如参考唐纳德·诺曼的著作、Apple 的人机交互指南，或者针对特定领域（如互动展览）的模式语言<b>）</b>

### 评估的阶段与目的

- <b>设计阶段的守门员：</b> 来源指出，E1 到 E4 主要用于<b>评估设计（evaluate designs）</b>。
- <b>与用户测试的分工：</b> 只有当<b>实现方案或原型（implementations/prototypes）</b> 产生后，才应引入“有用户评估”方法（如出声思维、受控实验等）。
- <b>目标：</b> 无用户评估有助于在投入大量开发成本之前，识别出设计中明显的逻辑错误或违背人机交互基本原则的地方。

### 评估的科学性要求

尽管这些方法不涉及真实用户，但来源强调它们依然需要遵循评估的基本科学准则：

- <b>有效性 (Validity)：</b> 评估结果的准确程度，包括内部有效性（因果推论是否逻辑严密）和外部有效性（结果是否具有普适性）。
- <b>可靠性 (Reliability)：</b> 结果的一致性和稳定性，即其他团队在相同条件下进行评估是否能得到相同的结论。
- 这些准则适用于<b>所有形式的评估</b>，而不仅仅是受控实验。

---

<b>类比理解</b>

<b>无用户评估</b>就像是建筑师在盖房子之前的<b>图纸审查阶段</b>：

1. <b>文献回顾 (E1)</b> 就像是查阅建筑法典和过往成功案例。
2. <b>认知走查 (E2)</b> 就像是建筑师闭上眼，在脑海里模拟一个住户从大门走到卧室的路径，看看是否顺畅。
3. <b>启发式评估 (E3)</b> 就像请几位资深专家来看图纸，凭借他们的经验指出哪里光照不足或结构不稳。
4. <b>基于模型的评估 (E4)</b> 就像是用数学公式计算承重墙的压力或疏散通道的宽度。

这个阶段不需要真实的住户搬进来（用户测试），就能在动工之前（原型实现）发现并修正大部分严重的布局问题。

## Evaluating With Users

在“Designing Interactive Systems I (DIS I)”关于<b>评估</b>的课程背景下，来源材料将<b>有用户评估（Evaluating With Users）定位为设计流程中至关重要的一环。与“无用户评估”不同，这类评估通常在实现方案或原型（Implementations/Prototypes）产生后</b>立即开展。

以下是来源对“有用户评估”的具体看法、方法分类及实施准则：

### types

有用户评估被分为<b>定性（Qualitative）和定量（Quantitative）</b> 两大类，分别对应不同的研究目标：

- Qualitative methods
- Quantitative methods 定量方法强调：
    - 数据
    - 测量
    - 统计显著性
    - 因果关系

### Qualitative Method (E5–E9)

这些技术旨在深入理解用户的心理模型和使用感受：

- <b>E5: 模型提取 (Model Extraction)：</b> 设计师向用户展示原型或截图，由<b>用户解释元素及其功能</b>。这有助于理解<b>初学者的系统概念模型</b>，但不适合观察系统的长期学习过程。
- <b>E6: 静默观察 (Silent Observation)：</b> 设计师在实验室或自然环境中观察用户完成任务，期间不进行沟通。这有助于发现重大问题，但无法理解用户的决策过程或情感。
- <b>E7: 出声思维 (Think Aloud)：</b> 用户在操作时说出其想法（状态、目标、行动）。这是<b>工业界最常用的方法</b>，虽能提供深入见解，但会让用户感到别扭，且可能改变其行为。
- <b>E8: 建设性交互 (Constructive Interaction)：</b> 两人合作完成任务并被观察。这种方式比出声思维更自然，若采用“专家带新人”模式，可同时获取不同水平用户的心理模型。
- <b>E9: 回顾性测试 (Retrospective Testing)：</b> 在观察结束后，评估者与用户一起观看录像并听取其点评。这能有效避免记忆偏差，并产生具体的改进建议。
    
### Quantitative method E10

### E10<b> Controlled Experiments</b>

<b>E10 受控实验 (Controlled Experiments)：</b> 这是一种实证研究empirical research方法，用于确定因果关系（即“变量 X 导致了结果 Y”）。

- 它通过控制变量来确定：<b>变量 X 是否导致了结果 Y</b>  
例如：
    - X = 按钮颜色
    - Y = 点击率
    - X = 导航结构
    - Y = 完成任务时间

### Experiment design

<b>实验设计：</b> 涉及建立<b>研究假设 (H1)</b> 与 <b>虚无假设 (H0)</b>，选择<b>自变量 (IV)</b> 和 <b>因变量 (DV)</b>。

- 研究假设（H1）：你认为会发生的事情
    - 例如：H1：新导航结构会减少任务完成时间。

- 虚无假设（H0）与 H1 相反，通常是“没有差异”
    - 例如：H0：新旧导航结构之间没有显著差异

- 自变量（IV）你操控的因素
    - 例如：
        - 导航方式
        - 按钮位置
        - 字体大小

- 因变量（DV）你测量的结果
    - 例如：
        - 完成任务时间
        - 错误率
        - 用户满意度

### Experiment mode

- <b>组间设计 (Between-groups)：</b> 每个受试者只体验一种设计版本, 不会产生学习效应（因为他们只看到一次）但需要更多受试者才能保证统计效力
- <b>组内设计 (Within-groups)：</b> 每个受试者体验所有设计版本。节省样本量，但存在<b>顺序效应</b>（如疲劳或学习效应）。
    - 解决方案：
    1. 拉丁方阵（Latin Square）：一种平衡顺序的实验设计方法，让每个版本在每个位置出现次数相同
    2. 随机化（Randomization）：随机打乱呈现顺序，减少偏差。

---

<b>类比理解</b>

如果说无用户评估是“图纸审查”，那么<b>有用户评估</b>就是<b>“新车试驾”</b> ：

- <b>定性评估 (E5-E9)</b> 就像是坐在副驾驶，听试驾员抱怨方向盘太沉或赞美视野开阔，这帮你理解司机的真实感受。
- <b>定量评估 (E10)</b> 则是拉到赛道上，用秒表精确测量 0 到 100 公里的加速时间（因变量），对比不同轮胎（自变量）对速度的影响。

## Recording Techniques

在“Designing Interactive Systems I (DIS I)”的评估背景下，来源材料将**记录技术（Recording Techniques）**视为在进行“有用户评估”时捕捉用户行为、语言和情感的关键手段。这些记录不仅为定性分析提供基础，也是进行回顾性测试的重要依据。

以下是来源对几种主要记录技术的具体看法：

### 纸笔记录 (Paper + Pencil)

- <b>操作方式：</b> 评估者手动记录事件、解释以及其他观察到的细节。
- <b>优缺点：</b> 这是一种<b>成本极低</b>的方法，但当需要记录大量细节时会非常困难，因为手写速度通常跟不上用户的操作速度。
- <b>改进建议：</b> 使用预先设计好的<b>表格（Forms）</b> 可以帮助提高记录效率。
    
### 音频记录 (Audio Recording)

- <b>适用场景：</b> 音频记录非常适合捕捉语言信息，因此在<b>出声思维（Think Aloud, E7）和建设性交互（Constructive Interaction, E8）</b> 等侧重口头表达的评估方法中表现良好。
- <b>局限性：</b> 它的主要缺点是<b>难以将音频内容与界面的具体状态联系起来</b>，导致分析时可能缺乏上下文支持。
    
### 视频记录 (Video)

- <b>地位：</b> 被视为<b>最理想的捕捉手段</b>。
- <b>技术实施：</b> 
    - 理想的设置是使用<b>两台摄像机</b>（一台对准用户，一台对准屏幕）并将画面合二为一。
    - 另一种方案是结合<b>屏幕录制</b>和<b>用户摄像头</b>，但这种方式需要解决同步（Synchronization）问题。

- <b>优缺点：</b> 视频提供了最全面的记录，但在测试初期可能会让用户感到被冒犯或<b>具有侵入感（Intrusive）</b>。
- <b>后续应用：</b> 视频记录是执行<b>回顾性测试（Retrospective Testing, E9）</b> 的前提，评估者可以与受试者一起观看录像，由用户解释其操作意图并避免错误的记忆。

---

<b>类比理解</b>

记录技术就像是<b>“时空胶囊”</b> ：

在用户测试的紧张现场，评估者很难捕捉到每一个眼神和犹豫。<b>纸笔记录</b>像是速写，虽快但简陋；<b>音频</b>像是广播剧，有声音但缺画面；而<b>双路视频记录</b>则像是一次完美的“全息回放”。它将用户当时的反应和系统的状态冻结在胶囊里，让设计师在测试结束后，能像审查监控录像一样，反复推敲用户在哪个环节产生了困惑。

## Ethical Conduct

在“Designing Interactive Systems I (DIS I)”关于<b>评估（Evaluation）的课程体系中，来源材料将伦理行为（Ethical Conduct）</b> 主要放在“如何对待用户（Dealing with Users）”的章节中进行讨论。

其核心观点认为，用户测试对参与者而言通常是<b>不舒适且具有压力</b>的，他们会面临表现压力、害怕犯错以及竞争心理。因此，来源明确规定了一个基本准则：<b>在任何时候都必须尊重参与者</b>。

以下是来源从测试的三个阶段对伦理行为的具体看法：

### Before Test

在评估开始之前，设计师有义务确保用户的权益得到保障：

- <b>尊重时间：</b> 必须进行试点测试（Pilot tests）并准备好所有器材，以确保<b>不浪费用户的时间</b>。
- <b>心理减压：</b> 必须向用户强调<b>被测试的是系统而不是他们本人</b>，并明确告知系统可能仍然存在错误（Bugs），从而减轻用户的心理负担。
- <b>知情同意与自愿：</b> 只能邀请<b>志愿者</b>参加，并签署<b>同意书（Consent form）</b>。用户必须被告知正在录制的内容，并被明确告知他们<b>可以随时停止测试</b>。
- <b>隐私承诺privacy guarantee：</b> 必须保证个人测试结果将被视为隐私处理。
    
### During test

在测试过程中，伦理行为体现在对用户情绪和状态的实时关注：

- <b>隐私保护：</b> 绝不能让用户的上司或其他不相关人员在场观看。
- <b>舒适度管理：</b> 营造轻松的氛围（如提供咖啡、休息时间），并确保任务设计能让用户在早期获得成功感。
- <b>中立且支持的态度：</b> 评估者<b>绝不能表现出对用户操作的不满</b>，且应避免电话等外界干扰<b>avoid interruptions</b>。
- <b>必要时中止：</b> 如果测试过程让用户感到过度不适，评估者必须<b>果断中止测试</b>。
- <b>Hand out tasks one by one</b>
    
### After test

测试结束后，伦理行为主要体现在数据的处理和对用户贡献的认可上：

- <b>积极反馈debriefing：</b> 再次向用户强调，他们的参与对于发现系统缺陷和改进设计具有重要价值。
- <b>严格匿名data anonymization：</b> <b>严禁发布任何能与特定个人关联的测试结果</b>。
- <b>录像权限：</b> 如果需要在研究小组之外展示测试录像，必须获得用户的<b>书面许可</b>。
    
### 总结

在评估背景下，伦理行为不仅是法律和规程的要求，更是为了获得有效评估结果的必要条件。来源认为，只有当用户感到安全、受尊重且没有压力时，他们才能提供最真实的反馈。

---

<b>类比理解</b>

这种伦理行为准则就像是<b>医疗临床试验中的患者关怀</b>：

在试验开始前，医生必须告诉患者“我们要测试的是这种药，而不是你的身体素质”，并确保患者知道自己随时可以退出；在试验中，医生要时刻关注患者是否有不良反应，如果痛苦太大就必须停止；试验结束后，医生会感谢患者对医学进步的贡献，并对患者的身份严格保密。在 HCI 评估中，用户就是这位贡献者，而系统就是那张受审视的“处方”。

# 
