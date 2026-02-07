---
title: DIS
slug: KtpqwJBThilgLukXLE6cKJKSn2c
sidebar_position: 3
---


# DIS

# Introduction, The CMN Model, Fitts' Law

## 什么是人机交互？ (What is HCI?)

人机交互不仅是关于界面的设计，还涉及更广泛的范畴 ：

### <b>人类 (Human)</b>: 

信息处理能力 (H1)、语言与交互 (H2)、人体工程学 (H3) 。

### <b>计算机 (Computer)</b>: 

输入输出设备 (C1)、对话技术 (C2)、图形学 (C4)。

### <b>开发过程 (The Design Process)</b>: 

设计方法 (D1)、原型制作、评估技术 (D3)。

### <b>社会环境 (Social Context)</b>: 

社会组织与工作 (U1)、应用领域 (U2)、人机适配 (U3) 。

---

## 人类处理器模型：CMN 模型 (Model Human Processor: CMN Model)

Estimate execution time, error rates and training effects for simple  input/output events

> <b>考试重点 (Exam Focus)</b>: 理解并记住CMN模型的主要component和关键时间常数及其存储特性。

### 感知系统 (Perceptual System)

- <b>感知处理器 (Perceptual Processor)</b>: 将感官信号(sensor signals)存储在视觉（Visual）或听觉（Auditory）存储器中 。iconic / echoic memory
- <b>感知时间(Perception time) (</b>$\tau_P$<b>)</b>: 均值约 <b>100 ms</b> (范围 50–200 ms) 。
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
    - Fast read, slow writ

### 运动系统 (Motor System)

- <b>动作时间 (</b>$\tau_M$<b>)</b>: 约 <b>70 ms</b> (范围 30–100 ms)。
- <b>反馈循环</b>:
    - <b>开环 (Open loop)</b>: 不依赖反馈，时间即 $\tau_M$ 。
    - <b>闭环 (Closed loop)</b>: 涉及感知 + 认知 + 运动的反馈，总时间 $\tau_P + \tau_C + \tau_M \approx \mathbf{240 \text{ ms}}$ 。

---

## 菲茨定律 (Fitts’ Law)

> <b>计算重点</b>: 预测移动到目标位置（如按钮）的时间。<b> Predict time to press buttons (physical or on-screen) </b>as function of  distance and size

### 核心公式

$$T_{pos} = I_M \cdot \log_2\left(\frac{2D}{W}\right)$$

- $T_{pos}$: 移动时间 。
- $D$<b> (Distance)</b>: 距离目标的距离（目标中心） 。
- $W$<b> (Width)</b>: 目标的宽度 。
- $I_M$<b> (Index of Movement)</b>: 动作指数常数，约 <b>100 ms/bit</b> 。
- $I_D = \log_2(2D/W)$: 困难指数 (Index of Difficulty)，单位为 <b>bits</b> 。

> 1️⃣ 距离递减模型（Slide 1）
> - 假设每次手的移动都能把剩余距离缩小到原来的 7%（即 e=0.07）。
> - 所以第 i 次移动后的剩余距离是 Di=ei⋅D，直到这个距离小于目标宽度的一半 W/2，表示手已经到达目标。
> - 推导出所需移动次数 n≥log⁡e(W/2D)，再换成以 2 为底的对数。
> 2️⃣ 时间公式（Slide 2）
> - 每次移动包含三个阶段：视觉定位（WP）、键盘准备（KP）、肌肉动作（MP），总共约 240 毫秒。
> - 所以总时间是：
> Tpos=n⋅(tWP+tKP+tMP)≈100 ms⋅log⁡2(2DW)
> - 这就是 Fitts 定律的形式：<b>动作时间与目标距离和宽度的对数成正比</b>。

### 数学推导与公式变体

- <b>CMN 推导常数</b>: 运动精度比例 $\epsilon \approx 0.07$。
- Welford’s formulation (1968)  $T_{pos} = I_M \times log_2(D/W + ½)$
- <b>Shannon 公式 (ISO 标准)</b>: $T_{pos} = a + b \cdot \log_2\left(\frac{D}{W} + 1\right)$ 。Improved curve fit, no negative times for infinite size targets
- 其中 $a, b$取决于设备，估算时常取 $a = 0, b = 100$

### 实例：手机按钮优化 (Mobile Exercise) 

<img src="/assets/B5ddbgmamoTY6mxWFHdcL1v3nef.png" src-width="690" src-height="444" align="center"/>

- <b>任务</b>: 将“拨号”按钮距离从 $30 \text{ mm}$ 移至 $14 \text{ mm}$，按钮宽度为 $2 \text{ mm}$。
- <b>计算</b>:
    - $T_{pos1} = 100 \cdot \log_2(30/2 + 1) = 100 \cdot \log_2(16) = 400 \text{ ms}$ 。
    - $T_{pos2} = 100 \cdot \log_2(14/2 + 1) = 100 \cdot \log_2(8) = 300 \text{ ms}$。

- <b>结果</b>: 每次拨号可缩短平均 <b>100 ms</b> 的运动时间 。

# Gestalt Laws, Information Content, Visibility, Affordances and Signifiers

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

## Core Principle: User Errors are Design Errors

- The main message of the course is that we tend to blame users for mistakes, but usually, the product or UI design is to blame.

<b>User errors are design errors.</b>   用户错误往往是设计问题，而不是用户的问题。

## Gestalt Laws (Perceptual Organization)

- <b>Definition:</b> Rules developed by the "Berliner Schule" (Köhler, Koffka, Wertheimer) that <b>describe how humans spatially or temporally perceive items as a group</b> 解释人类如何将视觉元素组织成整体. They are simple rules for good UI design.

1. <b>Law 1: Good Shape:</b> Perception tends toward remembering things as simple, clear shapes.像一种 cognitive compression algorithm（认知压缩算法）
2. <b>Law 2: Proximity:</b> Objects near each other are perceived as a group. 
    - This allows for order by position only.
    - UI 应用：仅靠位置即可分组，无需额外线条

3. <b>Law 3: Closure:</b> Closed shapes appear as belonging together.. 大脑会自动把不完整的图形补成完整的形状。<b>无框无界，靠线条 / 轮廓的「不完整趋势」脑补闭合</b>
    - This is a foundation of the "window metaphor".
    - UI 应用：窗口（window）隐喻的基础

4. <b>Law 4: Common Region:</b> Objects within a bounded area (region) appear to belong together. (Note: The slides warn "Don't overdo it" .过度使用边框会导致界面杂乱 <b>有框有界，靠「同一封闭区域 / 容器框定」归类。被实际的框、色块、背景区隔框定，是「物理上的同区」，而非大脑脑补的「知觉上的闭合」。</b>
    - basic element of window metaphor

5. <b>Law 5: Similarity:</b> Similar shapes (or colors, sizes) appear as belonging together.
    - 不同的对象 更高的信息量 higher information content (i.e., cognitive effort)
    - 好处：降低认知负荷
    - 坏处：降低可区分性
    - Similar is not necessarily constant 相似性不是绝对的，而是相对的。

6. <b>Law 6: Continuity:</b> Also known as the "Law of the Good Curve". Continuous shapes appear as belonging together.
    - UI 中用于引导视线

7. <b>Law 7 (Experience):</b> We tend to file new things into categories we already know. 
    - 利用已有知识 This saves learning effort and is the foundation for metaphors (like the desktop metaphor).
    - UI 应用：桌面隐喻（desktop metaphor）

8. <b>Law 8 (Common Fate):</b> Also "Law of Common Movement". Animated objects moving together (synchronously) within a static environment appear as a group.在静止背景中一起移动的对象，会被自动看成一组。
    - 动画（animation）是强大的 UI 引导工具Synchronous animation groups the item 同步动画会把元素自动分组。
    - Blinking text 

> Closure（闭合原则）：
👉 <em>大脑会自动把“未闭合的形状”补成完整的形状。</em>  
重点：形状本身是否“闭合”或“看起来像闭合”。
> Common Region（共同区域原则）：
👉 <em>只要元素被同一个边界框包住，就会被视为一组。</em>  
重点：是否被“同一个区域/框”包含。

## Information Content in UIs 信息量

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
    
## Visibility, Affordances, & Signifiers (Don Norman)

#### <b>Visibility:</b>

- One of the <b>most important </b>aspects of design.
- <b>Core Idea: Much everyday knowledge is "in the world, not in the head".</b>
- <b>Natural Design:</b> Aims to make natural clues visible, requiring no conscious thought.
- <b>Balance:</b> "Just the right things have to be visible." Too many clues are as bad as too few.
- <b>Lack of Visibility:</b> Can cause "<b>false causalities</b>" (thinking your action had no effect) and <b>superstition</b> (e.g., multiple clicks).

<b>典型错误：</b>

1. <b>Mystery Meat Navigation </b>就像一盘“神秘肉”，你不知道里面是什么。
    - 需要鼠标悬停hover才能知道功能
    - 缺乏visibility → 用户迷惑

2. <b>False Causalities（虚假因果）</b>
    - 系统响应慢/反馈不清晰 → 用户重复点击
    - 用户形成“迷信行为”（superstitions）(用户以为某个动作有效，但其实是错的，比如用户狂点，刷新页面，按住页面等)
    
#### <b>Affordances and Signifiers</b>

1. <b>Affordances</b>
    1. <b>Definition</b>
    - <b>The actions that an object </b><b>allows</b><b> a user to do with it. </b>物体允许用户执行的动作
    - It's a relationship between an object's properties and an agent's capabilities (e.g., a chair affords sitting).是 <b>物体属性 + 用户能力</b> 的关系 depand on both the object and the user
    - Affordances can be visible or hidden. Perceived affordances often act as signifiers
    - 例：玻璃可被打破；木板可被涂写
    - Intentional设计师有意安排的 vs accident 不是设计师放置的 但是用户<b>依旧会把它当做强烈的线索</b>
    - <b>False affordances suggest actions that are not actually possible or the right ones</b>
        
2. <b>Signifiers:</b>
    - <b>Definition:</b> The <b>signaling component</b><b> of an affordance</b>.
    - <b>Function:</b> Signifiers tell you <em>where</em> the action can take place. They are crucial if the affordance is not perceivable. 告诉用户 <b>在哪里 / 如何操作</b>
    - 比affordance重要 可感知的affordance本身就是最强的signifier，好的设计不用额外的文字
    - <b>Types:</b> 
        - Can be intentional 人为设计、意图明确、服务于信息传递 / 行为引导。(a "PUSH" sign)  
        - unintentional/accidental 由自然现象、客观行为或环境变化自然形成，却能被人感知并解读出潜在信息(footprints in snow,wind direction from flag) .
        - Misleading Signifiers:其传递的信息与实际情况、预期行为或客观事实不符，会引导人做出错误判断  People sitting on staircase (helpful), Empty bottles on railings (not helpful) 

3. <b>核心区别</b>

- <b>Affordance = what you can do（能做什么）</b>
- <b>Signifier = where/how to do it（在哪里/怎么做）</b>

1. <b>Bad Design:</b>
    - <b>False Affordance:</b> Suggests an action that is not possible.👉 <b>视觉暗示了一个动作，但动作不存在。</b>
    - <b>Accidental Affordance:</b> An unintended affordance (e.g., a railing that affords sitting).👉 <b>不是设计目的，但用户发现了额外用途。</b>
    - <b>Misleading Signifier:</b> <b>A signifier that suggests the wrong action </b>(e.g., a flat plate that implies "push" has a "PULL" label).

2. Good design：

- 好的设计不需要额外文字
- 可感知的affordance本身就是最好的signifier

## Conceptual Models

理解系统难用的根本原因

<b>Good Conceptual Models are a principle of good design</b>

- <b>Definition:</b> <b>Humans form a conceptual (mental) model of how something works when they encounter it. A good model allows users to predict the effects of their actions.</b>
- <b>The Three Models:</b>
    1. <b>Design Model:</b> The designer's conceptual model (their intention).设计师心中的系统运作方式
    2. <b>System Image:</b> The system itself (the UI, the device, its labels). This is the only thing the user interacts with.用户能看到的界面、说明书、反馈
    3. <b>User's Mental Model:</b> The model the user develops <em>from</em> the System Image.用户形成的心理模型

- <b>The Goal of Design:</b> The designer must craft the <b>System Image</b> so that the <b>User's Mental Model</b> accurately reflects the intended <b>Design Model</b>.
- 痛点：
    - 设计师无法直接与用户沟通
    - 如果system image不清晰 → user's mental model偏离design model → bad system

<img src="/assets/BmkgbZaOtoyEfcxC5QjcZjS2nng.png" src-width="728" src-height="412" align="center"/>

<img src="/assets/ITTHbT1b2o6TjhxW6hsc5Ufkn3c.png" src-width="1054" src-height="228" align="center"/>

# Mappings, Constraints, Seven Stages of Action

## <b>考试重点自测</b>：

1. <b>Mappings</b>：区分自然映射Spatial / Perceptual / Biological / Cultural. Natural mappings reduce cognitive load
2. <b>Constraints</b>：给出每种约束（Physical, Semantic, Logical, Cultural）的实例。Forcing functions
3. <b>Action Stages</b>：按顺序写出七个阶段，并能区分哪些属于 Execution，哪些属于 Evaluation。
4. <b>Gulfs</b>：Gulfs of Execution & Evaluation知道哪些设计原则（如反馈）对应哪个鸿沟。
5. <b>Processing Levels</b>：理解 Visceral, Behavioral, Reflective 的区别及其对设计的要求。

## 映射 (Mappings)

<b>Definition：</b>Mappings = Relationship between <b>controls</b>, <b>actions</b>, and <b>intended results</b>  
mapping = 控制装置、操作行为与预期结果之间的关系。

<b>Why important?</b>

- <b>Connect UI to real world</b> 将用户界面（UI）元素与现实世界连接起来 
- Reduce cognitive load
- Make systems intuitive

### 自然映射 (Natural Mappings)

Good mappings rely on <b>natural analogies</b>

1. Types of natural mappings

- <b>空间类比 (Spatial Analogies)</b>：最突出的例子 
    - <b>规则</b>：按照控制对象在现实世界中的排列方式来排列控制装置。<b>Arrange controls in the same way that their real-world counterparts are arranged</b>
    - <b>例子</b>：房间灯光开关的排列应与灯的位置对应 。

- <b>感知类比 (</b><b>Perceptual Analogies</b><b>)</b>：又称“巫术原则”(Voodoo Principle)。
    - <b>规则</b>：<b>The UI element is an imitation of the device  itself</b><b> </b>UI 元素（输入或输出）是对设备本身的模仿 。
    - <b>例子</b>：奔驰汽车座椅调节按钮的形状就是座椅本身的缩影 。

- <b>物理测量类比 (Analogies for physical measurements)</b>：有些“量”的变化，人类天生就能直觉理解；但有些“量”的变化，人类无法自然理解。
    - <b>累加维度 (Additive dimensions)</b>：液位上升代表“更多”，下降代表“更少” 。适用于热量、音量、线宽、亮度等 。Natural for all additive dimensions 
    - <b>替代维度 (Substitutive dimensions)</b>：<b>不适用</b>于自然映射，例如颜色、音频音调、味道或位置 。<b>这些维度没有“自然方向”</b>，所以不能用自然映射。

- <b>生物与文化类比 (Biological and Cultural Analogies)</b>：
    - <b>例子</b>：Rising level = more, falling level = less ；Left → right depends on reading direction
    - Cultural differences matter (Hebrew, Arabic, Chinese）

1. Advantage: 快速理解，容易记忆，更方便使用Natural Mappings are easy of use <b>understood immediately, easier to remember and enable better  ease-of-use </b>
2. Result — Some Design Principles

- Discoverability: state and actions are easy to determine
- Good conceptual model 
    - System image presents operations and results consistently（系统形象必须一致地呈现操作与结果）
    - User gets a coherent conceptual model（用户获得连贯的心理模型）allows users to predict the effects of their actions

- Good (i.e., natural) mappings: actions ↔ results/controls ↔ effects/system state ↔ visualization
- Good feedback about results

---

## 约束 (Constraints)

> <b>定义 (Definition)：</b><b> Limit the ways in which an object can be used</b> to prevent errors 限制对象的使用方式，并为新情境下的正确行动提供线索。
> 目标 (Goals)：避免操作错误，并将需要记忆的信息最小化。<b>Avoid usage errors , Minimize the information to be remembered</b>

### 四种约束类型 (Types of Constraints)

1. <b>物理约束 </b><b>(Physical Constraints)</b>：<b>Rely upon the physical properties (shape,  size, etc.) to constraint possible actions</b><b> </b>依靠物理属性（形状、大小等）来限制行动 Visible constraints are best. 如果约束提前可见则更有效。
    - <b>例子</b>：传统钥匙只能插入匹配的锁芯 。
    - 物理约束必须 可见、可感知、可预测 才是好设计。

2. <b>语义约束 </b><b>(Semantic Constraints)</b>：依靠我们对当前情境和现实世界的知识来限制行动。<b>Rely upon our knowledge of the current  situation and of the world to constrain possible  actions </b>
    - <b>例子</b>：拼装模型飞机时，飞行员小人只能面向前方坐在挡风玻璃后面 。
    - Must match user’s cultural background

3. <b>逻辑约束 (</b><b>Logical Constraints</b><b>)</b>： 依靠逻辑推断来限制行动 。不依赖文化或物理结构<b>Rely upon logical conclusions to constraint possible  actions </b>
    - <b>例子</b>：All parts must be used (completeness) 拼装结束时不应剩下任何零件（完整性）；
    - Steps must follow sequence (1 → 2 → 3) 按照 1, 2, 3 的顺序执行任务 。
    - <b>自然映射（natural mapping）通常依赖逻辑约束</b>。

4. <b>文化约束 (Cultural Constraints)</b>：<b>Rely upon generally accepted cultural standards to constrain possible actions </b>依靠普遍接受的文化标准（如红灯停） 
    - Examples: Red = stop
    Text orientation indicates “up
    - <b>注意</b>：Not universal → challenge for universal design 仅适用于特定的文化群体，这是通用设计的核心问题 。

### 强迫功能 (Forcing Functions)

<b>extreme physical constraints Can help to avoid errors</b>一种极端的物理约束，用于确保操作顺序或防止错误。

- <b>互锁 (Interlock)</b>：<b>enforces correct sequence</b>强制顺序（microwave door）。例如：微波炉门打开时自动断电。
- <b>锁定 (Lock-in)</b>：<b>prevents prematurely stopping an action</b>防止过早停止某项行动。例如：计算机的软件关机提示，防止数据丢失。
- <b>隔绝 (Lock-out)</b>： <b>prevents an action</b>防止某项行动发生。例如：通往地下室的楼梯门，防止火灾时误入。

---

## 行动的七个阶段 (The Seven Stages of Action)

> <b>这是理解用户如何与系统交互的工程模型。</b><b>How do people do things?</b>

一个action的Two phases:

- <b>Execution（执行）</b>
- <b>Evaluation（评估）</b>

<img src="/assets/MhPGbdOlUoG2UdxNkkncjLHRneh.png" src-width="734" src-height="622" align="center"/>

### Execution（执行阶段）

1. <b>形成目标 (Form the goal)</b>：vague and problem-oriented通常是模糊的、基于问题的（例如“我需要更多光”）。
2. <b>规划 (Plan)</b>：将模糊目标转化为导向性计划goal-oriented plan（例如“操作灯开关”）。
3. <b>细化 (Specify)</b>：制定具体的行动序列<b>action sequence</b>（例如“转身，伸出手臂，手指按开关”）。
4. <b>执行 (Perform)</b>：物理上执行行动序列 。

### Evaluation（评估阶段）

1. <b>感知 (Perceive)</b>：感知外部世界的状态 。
2. <b>解释 (Interpret)</b>：解释所感知的现象。the perception
3. <b>比较 (Compare)</b>：将结果与原始目标进行对比 。

<b>In reality, steps are hard to distinguish </b>

- <b>Complex tasks include sequences or hierarchies of goals (feedback loop) </b>
- <b>Goals are forgotten, discarded and changed </b>
- <b>Many actions are opportunistic, not planned (Meeting leads to talk) </b>
- <b>Cycle can be event-driven (world) or goal-driven</b>

### 行动鸿沟 (The Gulfs)

<b>Helps designers to detect where things  could breakdown </b>

设计师的任务是架起桥梁连接这两道鸿沟 ：

- <b>执行隔阂 (Gulf of Execution)</b>：User → <b>how to operate a device</b>? 想知道“如何操作设备？” 。
    - Bridged by: <b>signifiers, mappings, constraints, conceptual models </b>通过<b>意符、约束、映射和概念模型</b>来解决。

- <b>评估隔阂 (Gulf of Evaluation)</b>：User → <b>how to understand system state?</b> 想知道“发生了什么？是否成功？” 
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

> 定义：系统告知用户其操作结果的方式 。发生在评估 (Evaluation) 阶段。操作后即时、明确的信息回传 。Feedback communicates to the user the current system state, success or failure of  actions and results of actions

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

- <b>5 Whys (五问法)</b>：不断追问“为什么”，直到找到导致错误的原始系统设计缺陷，而不是责怪最后的操作者 。Perform root cause analysis: Human error is just the end of causal chain
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
    - 过于理想化，现实需要backtracking，而Backtracking 很困难<b>Phases idealistic, Reality requires backtracking</b>
    - Usage scenarios 太抽象 使用场景往往脱离实际
    - Wrong assumptions 难以早期发现
    <img src="/assets/An6Nbl5BVo3M73xQK5WcpEEenMc.png" src-width="794" src-height="478" align="center"/>

### Right Way: DIA Cycle 

- <b>三个阶段</b>：
    DIA = Design → Implement → Analyze（循环迭代）
    <img src="/assets/QEPSbPdVXoINzWxGidZc4iqinef.png" src-width="906" src-height="602" align="center"/>
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

<img src="/assets/QaRRbEfD7oW9tRxNtUlcj5oznnb.png" src-width="880" src-height="560" align="center"/>

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
    <img src="/assets/DcOsbtvFio7f2bxOUY0cfawln4g.png" src-width="1062" src-height="580" align="center"/>

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

> <b>First Three Questions: Who are the Users? What do they want to do with the system? What is the context?</b>

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

# History

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<h2>Version 1</h2>
<p>这两份关于 <b>History (L08 &amp; L09)</b> 的 PPT 虽然看起来像是“背诵题”，但根据你的“硬核”考试标准，重点<b>绝不是</b>背年份和人名。</p>
<p><b>真正的考点在于：</b></p>
<ol>
<li><p><b>Analysis (分析):</b> 理解交互范式（Paradigm）是如何演变的（例如：为什么我们从命令行变成了图形界面？）。</p>
</li>
<li><p><b>Calculation (计算):</b> Lecture 09 中的 <b>三大定律 (Moore, Metcalfe, Nielsen)</b> 是必考的计算或定量评估点。</p>
</li>
<li><p><b>Application (应用):</b> 能够区分不同的 HCI 愿景（如 VR vs. AR vs. UbiComp）。</p>
</li>
</ol>
<h3><b>Lecture 08: History I — From Abacus to Macintosh</b></h3>
<p><b>关键词：Paradigms (范式), Metaphors (隐喻), WIMP</b></p>
<p>这节课的重点是 <b>&quot;Firsts&quot; (里程碑)</b> 以及它们带来的<b>交互理念变革</b>。</p>
<h4><b>1. Pre-Computer Era &amp; Early Computing (早期概念)</b></h4>
<p><b>Slide 1-17</b> (略读，主要是 Memory)</p>
<ul>
<li><p><b>Jacquard Loom (雅卡尔提花机):</b> </p>
</li>
<li><p><i>Concept:</i> 使用 <b>Punch Cards (穿孔卡)</b> 进行编程的鼻祖。</p>
</li>
<li><p><i>Exam Focus:</i> 它是 Hardware 和 Software 分离的早期雏形。</p>
</li>
<li><p><b>Ada Lovelace:</b> </p>
</li>
<li><p><i>Concept:</i> 第一位程序员。她意识到计算机不仅仅能处理数字，还能处理符号 (Symbols)。</p>
</li>
</ul>
<h4><b>2. The Visionaries (三大奠基人 - 重点分析)</b></h4>
<p>这是 <b>Analysis (40%)</b> 的高频区。不要只记人名，要记<b>他们解决了什么问题</b>。</p>
<ul>
<li><p><b>Vannevar Bush &amp; MEMEX (1945):</b> </p>
</li>
<li><p><b>核心概念:</b> <b>As We May Think</b>。他提出了 <code>Memex</code> (Memory Extender)。</p>
</li>
<li><p><b>交互创新:</b> <b>Associative Indexing (联想索引)</b>。</p>
</li>
<li><p><i>Analysis:</i> 这是 <b>Hypertext (超文本/链接)</b> 的概念鼻祖。虽然它是基于缩微胶片（Microfilm）的模拟设备，但它的逻辑就是现在的 Web 浏览器。</p>
</li>
<li><p><b>Ivan Sutherland &amp; Sketchpad (1963):</b> </p>
</li>
<li><p><b>核心概念:</b> 人类历史上第一个完整的 GUI (图形用户界面)。</p>
</li>
<li><p><b>交互创新:</b></p>
</li>
<li><p><b>Direct Manipulation (直接操纵):</b> 用光笔直接在屏幕上画图。</p>
</li>
<li><p><b>Object-Oriented (面向对象):</b> 定义一个“Master”，复制出的“Instance”会随 Master 变化。</p>
</li>
<li><p><i>Exam Focus:</i> 如果题目问“面向对象编程 UI 的起源”或“直接操纵的起源”，选 Sutherland。</p>
</li>
<li><p><b>Douglas Engelbart &amp; NLS (1968):</b> </p>
</li>
<li><p><b>核心概念:</b> <b>Augmenting Human Intellect (增强人类智慧)</b>。</p>
</li>
<li><p><b>&quot;The Mother of All Demos&quot;:</b> 他在一个演示里展示了：Mouse (鼠标), Hypertext, Video Conferencing (视频会议), Windowing。</p>
</li>
<li><p><i>Analysis:</i> 他的重点是<b>Efficiency (效率)</b>。注意那个 <b>Chord Keyboard (和弦键盘)</b>，它是为了让用户一只手操作鼠标，另一只手盲打命令，追求极致效率（虽然学习曲线太高没普及）。</p>
</li>
</ul>
<h4><b>3. The Birth of Personal Computing (个人计算的诞生)</b></h4>
<p><b>Slide 39-65 (考试重灾区：Xerox Star vs. Mac)</b></p>
<ul>
<li><p><b>Alan Kay &amp; Dynabook:</b> </p>
</li>
<li><p><i>Concept:</i> 提出了类似 iPad 的平板电脑概念，面向儿童，强调多媒体。</p>
</li>
<li><p><b>Xerox Alto &amp; Star (1981):</b> </p>
</li>
<li><p><b>核心概念:</b> <b>First Commercial GUI</b> (第一个商业图形界面)。</p>
</li>
<li><p><b>考点 (Must Memorize):</b> 它定义了我们今天都在用的 <b>WIMP</b> 界面：</p>
</li>
<li><p><b>W</b>indows (窗口)</p>
</li>
<li><p><b>I</b>cons (图标)</p>
</li>
<li><p><b>M</b>enus (菜单)</p>
</li>
<li><p><b>P</b>ointers (指针/鼠标)</p>
</li>
<li><p><b>Metaphor (隐喻):</b> <b>Desktop Metaphor (桌面隐喻)</b> —— 文件、文件夹、废纸篓。</p>
</li>
<li><p><b>WYSIWYG:</b> &quot;What You See Is What You Get&quot; (所见即所得)。</p>
</li>
<li><p><i>Analysis:</i> <b>为什么 Xerox Star 失败了？</b></p>
</li>
</ul>
<ol>
<li><p>太贵 ($16k)。</p>
</li>
<li><p>封闭系统 (Closed architecture)。</p>
</li>
<li><p>目标用户定位偏差 (Targeted professionals only)。</p>
</li>
</ol>
<ul>
<li><p><b>Apple Macintosh (1984):</b> </p>
</li>
<li><p><b>核心概念:</b> 它是 Xerox Star 的成功继承者。</p>
</li>
<li><p><i>Analysis:</i> <b>为什么 Mac 成功了？</b></p>
</li>
</ul>
<ol>
<li><p><b>Affordable:</b> 价格便宜得多 ($2.5k)。</p>
</li>
<li><p><b>Toolbox for Developers:</b> 乔布斯把 GUI 库写在 ROM 里，强制开发者开发一致的 UI (Rule 3: Consistency)。</p>
</li>
<li><p><b>Marketing:</b> 针对大众 (Knowledge Workers)。</p>
</li>
</ol>
<hr/>
<h3><b>Lecture 09: History II — Technology Phases &amp; Visions</b></h3>
<p><b>关键词：Moore&#39;s Law, Nielsen&#39;s Law, Ubiquitous Computing</b></p>
<p>这节课包含 <b>Calculation (35%)</b> 和 <b>Analysis (40%)</b>。</p>
<h4><b>1. The Three Laws (三大定律 - 计算/绘图题)</b></h4>
<p><b>Slide 4-15 (必考)</b></p>
<p>你不仅要背定义，还要会看图表分析。</p>
<ol>
<li>Moore&#39;s Law (摩尔定律):</li>
</ol>
<ul>
<li><p><b>定义:</b> Number of transistors on a chip doubles every <b>18-24 months</b> (集成电路上可容纳的晶体管数目，约每隔18-24个月便会增加一倍).</p>
</li>
<li><p><i>Calculation:</i> 它是指数增长 (Exponential Growth)。</p>
</li>
<li><p><i>Implication:</i> 计算能力越来越便宜，体积越来越小 -&gt; 导致了 UbiComp 的出现。</p>
</li>
</ul>
<ol>
<li>Metcalfe&#39;s Law (梅特卡夫定律):</li>
</ol>
<ul>
<li><p><b>定义:</b> The value of a network is proportional to the <b>square of the number of users</b> ().</p>
</li>
<li><p><i>Analysis:</i> 解释了互联网、社交网络为什么会有“赢家通吃”的局面。</p>
</li>
<li><p><i>Calculation:</i> 如果用户从 2 变 4，价值不是变 2 倍，而是变 4 倍 ()。</p>
</li>
</ul>
<ol>
<li>Nielsen&#39;s Law (尼尔森定律):</li>
</ol>
<ul>
<li><p><b>定义:</b> User&#39;s internet bandwidth grows by <b>50% per year</b>.</p>
</li>
<li><p><i>Comparison:</i> <b>带宽增长慢于摩尔定律</b> (Bandwidth grows slower than computer power)。</p>
</li>
<li><p><i>Analysis (重要):</i> 这就是为什么即便电脑很快，网页加载有时还是很慢。</p>
</li>
<li><p><i>Lag:</i> 带宽通常落后于计算能力 <b>5-7年</b>。</p>
</li>
</ul>
<h4><b>2. Technology Phases (技术发展阶段)</b></h4>
<p><b>Slide 16-24</b></p>
<p>这是一个宏观分析框架，考试可能会问“现在的某个产品属于哪个阶段？”</p>
<ol>
<li><p><b>Mainframe Phase (主机时代):</b> Many people share 1 computer. (Hardware centric).</p>
</li>
<li><p><b>PC Phase (个人电脑时代):</b> 1 person = 1 computer. (Software centric).</p>
</li>
<li><p><b>UC / Ubiquitous Phase (普适计算时代):</b> 1 person shares <b>many</b> computers. (User centric).</p>
</li>
</ol>
<ul>
<li><i>Key Characteristic:</i> 计算机变得无处不在且不可见 (Invisible)。</li>
</ul>
<h4><b>3. HCI Visions (人机交互愿景 - 区分概念)</b></h4>
<p><b>Slide 25-46</b></p>
<p>你需要能精准区分以下几个概念（Analysis 考点）：</p>
<ul>
<li><p><b>Ubiquitous Computing (UbiComp / 普适计算):</b> </p>
</li>
<li><p><b>提出了人:</b> <b>Mark Weiser</b> (Xerox PARC).</p>
</li>
<li><p><b>名言:</b> &quot;The most profound technologies are those that <b>disappear</b>. They weave themselves into the fabric of everyday life until they are indistinguishable from it.&quot; (最深刻的技术是那些消失的技术...).</p>
</li>
<li><p><b>核心:</b> <b>Calm Technology</b> (平静技术)。技术应该在背景中，不打扰人，只在需要时出现。</p>
</li>
<li><p><i>Tabs, Pads, Boards:</i> Weiser 定义的三种尺寸设备（现在的 手机、平板、大屏）。</p>
</li>
<li><p><b>Virtual Reality (VR):</b> </p>
</li>
<li><p><b>定义:</b> 把用户放进由电脑生成的<b>世界内部</b> (User is inside the computer world).</p>
</li>
<li><p><i>Contrast:</i> VR 是与现实隔绝 (Opaque)，UbiComp 是与现实融合。</p>
</li>
<li><p><b>Augmented Reality (AR):</b> </p>
</li>
<li><p><b>定义:</b> 把虚拟信息<b>叠加</b>在真实世界上 (Superimposing virtual info on physical world).</p>
</li>
<li><p><i>Example:</i> Google Glass, Pokemon Go.</p>
</li>
<li><p><b>Tangible User Interfaces (TUI / 可实体化交互):</b> </p>
</li>
<li><p><b>定义:</b> 用物理对象来控制数字信息 (Graspable User Interfaces)。</p>
</li>
<li><p><i>Example:</i> 移动桌子上的积木来改变投影里的建筑布局。</p>
</li>
</ul>
<hr/>
<h3><b>总结与复习策略</b></h3>
<p><b>针对 L08 (History I):</b></p>
<ul>
<li><p><b>画一条时间轴:</b> Bush (Memex/Hypertext) -&gt; Sutherland (Sketchpad/GUI) -&gt; Engelbart (Mouse/Efficiency) -&gt; Xerox Star (WIMP/Desktop) -&gt; Mac (Affordable WIMP)。</p>
</li>
<li><p><b>理解继承关系:</b> Xerox Star 发明了规则，Mac 普及了规则。</p>
</li>
</ul>
<p><b>针对 L09 (History II):</b></p>
<ul>
<li><p><b>计算/图表:</b> 记住 Moore (2x/18mo), Metcalfe (), Nielsen (50%/yr, 慢于Moore)。</p>
</li>
<li><p><b>辨析:</b></p>
</li>
<li><p>VR = 逃离现实 (Put you inside).</p>
</li>
<li><p>AR = 增强现实 (Overlay).</p>
</li>
<li><p>UbiComp = 融入背景 (Disappear/Calm).</p>
</li>
</ul>
</div>
<div class="w-[50%]" width-ratio="50">
<h2>Version 2</h2>
<p>这份复习笔记是基于你提供的两份 PPT（Lecture 08 History I 和 Lecture 09 History II）整理而成的。</p>
<p>针对你提到的**“侧重应用”<b>和</b>“定量评估/理论分析”<b>的考试风格，我特别标注了</b>【🛠️ 应用场景】<b>（用于设计题或案例分析）和</b>【🧠 核心理论/记忆点】**（用于填空或简答）。</p>
<hr/>
<h3>Lecture 08: History I — From Abacus to Macintosh</h3>
<p><em>(从算盘到麦金塔：交互方式的演变)</em></p>
<h4>1. 创新的理论模型 (Innovation Theory)</h4>
<h5>⭐ The Long Nose of Innovation (创新的长鼻理论)</h5>
<ul>
<li><p><b>Definition</b>: 任何看似“彻底创新（Radically New）”的技术，其实背后都有长期的迭代积累。从发明（Invention）到产品化（Productization）达到 10 亿美元市场规模，通常需要 <b>20年</b> 左右的时间 。</p>
</li>
<li><p><b>Process</b>:</p>
</li>
</ul>
<ol>
<li><p><b>Invention</b>: 早期发明（处于雷达监测线以下）。</p>
</li>
<li><p><b>Refinement &amp; Augmentation</b>: 改进与增强（长鼻的主体）。</p>
</li>
<li><p><b>Productization</b>: 产品化（最终爆发）。</p>
</li>
</ol>
<ul>
<li><p><b>🛠️ 【应用场景 / Exam Application】</b>:</p>
</li>
<li><p>如果题目让你分析某个“新技术”（如 AI 或 VR），你不能只看它现在的爆发，要能追溯其历史（Refinement 阶段）。</p>
</li>
<li><p><b>考点</b>: 不要认为 iPhone 是突然出现的，它是多点触控技术几十年积累的结果 (No Single Hero)。</p>
</li>
</ul>
<hr/>
<h4>2. 交互界面的演变阶段 (Evolution of Interfaces)</h4>
<p><em>(基于 Jakob Nielsen 的分类，非常重要的定性评估概念)</em></p>
<h5>Phase 1: Batch Processing (批处理) - &quot;0-D Interface&quot;</h5>
<ul>
<li><p><b>Characteristics</b>: 用户与机器没有即时交互。数据通过打孔卡（Punch cards）输入，等待结果打印 。</p>
</li>
<li><p><b>Interaction</b>: 0-Dimensional（零维）。提交作业 -&gt; 等待 -&gt; 获取结果。</p>
</li>
<li><p><b>Focus</b>: 机器效率优先，不考虑用户体验。</p>
</li>
</ul>
<h5>Phase 2: Command-Line Interfaces (命令行) - &quot;1-D Interface&quot;</h5>
<ul>
<li><p><b>Characteristics</b>: 分时系统（Time Sharing）。用户输入一行命令，按回车，系统回应 。</p>
</li>
<li><p><b>Interaction</b>: 1-Dimensional（一维）。因为交互是基于<b>时间轴上的单一流</b>（字符流）。</p>
</li>
<li><p><b>Pros/Cons</b>: 效率高但学习曲线陡峭，用户必须**Recall（回忆）<b>命令，而不是</b>Recognize（识别）**功能。</p>
</li>
</ul>
<h5>Phase 3: GUIs (图形用户界面) - &quot;2.5-D Interface&quot;</h5>
<ul>
<li><p><b>Characteristics</b>: WIMP (Windows, Icons, Menus, Pointer) 。</p>
</li>
<li><p><b>Interaction</b>: 2.5-Dimensional。虽然屏幕是 2D 的，但**重叠的窗口（Overlapping windows）**创造了深度的假象（2.5D） 。</p>
</li>
<li><p><b>Shift</b>: 从“Recall and Type”（回忆并输入）转变为“<b>See and Point</b>”（看见并点击）。</p>
</li>
</ul>
<hr/>
<h4>3. 关键系统与里程碑 (Key Systems &amp; Milestones)</h4>
<p><em>(注意：考试可能要求按照时间线排序或根据功能匹配系统)</em></p>
<h5>🧠 Pre-GUI Era (GUI 之前的愿景)</h5>
<ol>
<li><b>Memex (Vannevar Bush, 1945)</b>:</li>
</ol>
<ul>
<li><p><b>Concept</b>: 设想了一种存储个人所有书籍、记录的设备。</p>
</li>
<li><p><b>Innovation</b>: **Hypertext（超文本）**的鼻祖——通过“链接（Link）”关联信息，模拟人类大脑的联想记忆 。</p>
</li>
</ul>
<ol>
<li><b>Sketchpad (Ivan Sutherland, 1963)</b>:</li>
</ol>
<ul>
<li><p><b>Status</b>: 第一个交互式计算机图形程序 。</p>
</li>
<li><p><b>Innovation</b>: **Direct Manipulation（直接操纵）**的先驱。引入了“约束（Constraint）”的概念（例如画一个角，系统自动修正为直角）。</p>
</li>
</ul>
<ol>
<li><b>NLS (Douglas Engelbart, 1968)</b>:</li>
</ol>
<ul>
<li><p><b>The Demo</b>: &quot;Mother of All Demos&quot; 。</p>
</li>
<li><p><b>Innovation</b>: 发明了<b>鼠标 (Mouse)</b>。引入了多窗口、超链接、视频会议、协同工作。</p>
</li>
<li><p><b>Limit</b>: 它是为专家设计的（Expert performance），极其复杂，不是为了易用性</p>
</li>
</ul>
<h5>⭐ The GUI Era (图形界面的诞生与普及)</h5>
<ol>
<li><b>Xerox Alto (1973)</b>:</li>
</ol>
<ul>
<li>第一台具有<b>位图显示（Bitmap Display）和 GUI 的计算机，使用了桌面隐喻（Desktop Metaphor）</b>，但未商业化 。</li>
</ul>
<ol>
<li><b>Xerox Star (1981)</b>:</li>
</ol>
<ul>
<li><p><b>Features</b>: WYSIWYG（所见即所得）、图标、属性表。</p>
</li>
<li><p><b>Design Process</b>: <b>&quot;Design first, then code&quot;</b>（先设计后编码），进行了 8 年的原型设计 。</p>
</li>
<li><p><b>Why Failed?</b>: 价格昂贵 ($17K)，封闭系统，过于超前 。</p>
</li>
</ul>
<ol>
<li><b>Apple Lisa (1983)</b>:</li>
</ol>
<ul>
<li><p><b>Innovation</b>: 引入了<b>Fixed Menu Bar（固定菜单栏）</b>。</p>
</li>
<li><p><b>🛠️ 【Fitts&#39; Law 考点 / Calculation】</b>: 为什么 Lisa 把菜单栏放在屏幕最顶端（固定），比 Windows 放在窗口里好？</p>
</li>
<li><p>根据 <b>Fitts&#39; Law ()</b>，目标越大（W），移动时间越短。</p>
</li>
<li><p>屏幕边缘的菜单栏具有<b>无限的高度（Infinite height）</b>，因为鼠标滑过去会被边缘挡住，无法滑出屏幕。这意味着 ，用户可以极快地甩鼠标到达菜单，而不需要精确瞄准 。</p>
</li>
</ul>
<ol>
<li><b>Apple Macintosh (1984)</b>:</li>
</ol>
<ul>
<li><p><b>Significance</b>: 第一个<b>商业成功</b>的 WIMP 系统。</p>
</li>
<li><p><b>Reason</b>: 价格适中 ($2500)，针对大众（不仅是办公室），发布了《Macintosh Human Interface Guidelines》（人机交互指南），统一了软件体验 。</p>
</li>
</ul>
<hr/>
<h3>Lecture 09: History II — Technology Phases &amp; Visions</h3>
<p><em>(技术生命周期与交互愿景)</em></p>
<h4>1. 技术生命周期 (The Technology Lifecycle)</h4>
<p><em>(这是本章最核心的理论，必考应用题)</em></p>
<p>由 David Liddle 和 Jan Borchers 提出，技术发展分为四个阶段 ：</p>
<h5>Phase 1: Enthusiast Phase (发烧友阶段)</h5>
<ul>
<li><p><b>Motto</b>: <b>&quot;Exploit me!&quot;</b> (压榨我/利用我) 。</p>
</li>
<li><p><b>特征</b>: 关注<b>Power（性能/功能）</b>。极其难用，用户必须懂技术（如早期的无线电、早期的 Linux）。</p>
</li>
<li><p><b>用户</b>: 愿意为了功能忍受糟糕的体验。</p>
</li>
</ul>
<h5>Phase 2: Professional Phase (专业阶段)</h5>
<ul>
<li><p><b>Motto</b>: <b>&quot;Help me work!&quot;</b> (帮我工作) 。</p>
</li>
<li><p><b>特征</b>: 关注**Reliability（可靠性）**和效率。设备昂贵，用于特定工作（如打印机、专业仪表）。</p>
</li>
</ul>
<h5>Phase 3: Consumer Phase (消费者阶段)</h5>
<ul>
<li><p><b>Motto</b>: <b>&quot;Enjoy me!&quot;</b> (享受我) 。</p>
</li>
<li><p><b>特征</b>: 关注<b>Ease of Use（易用性）</b>、美学、价格。技术应该“消失”在背景中。</p>
</li>
<li><p><b>⭐ Sweet Spot</b>: 从 Professional 过渡到 Consumer 的早期，是产品最能改变生活且还没变得臃肿的时期 。</p>
</li>
</ul>
<h5>Phase 4: Baroque Phase (巴洛克阶段)</h5>
<ul>
<li><p><b>Motto</b>: <b>&quot;Let me do it all!&quot;</b> (让我包办一切) 。</p>
</li>
<li><p><b>特征</b>: <b>Feature Creep（功能蔓延）</b>。为了差异化竞争，厂商在产品中塞入过多无用功能（如只有两个按钮却有几十种功能的 MP3、过于复杂的汽车仪表盘），导致可用性下降 。</p>
</li>
<li><p><b>🛠️ 【应用场景 / Scenario Application】</b>:</p>
</li>
<li><p>题目可能会描述一个产品（例如：“一个拥有 50 个按钮、功能极其强大但说明书有 200 页的智能微波炉”）。</p>
</li>
<li><p><b>分析</b>: 这属于 <b>Baroque Phase</b>。建议：应该做减法，回到 Consumer Phase，关注核心体验。</p>
</li>
</ul>
<hr/>
<h4>2. 视频原型与设计策略 (Video Prototyping)</h4>
<h5>Case Study: Sun Starfire (1994)</h5>
<ul>
<li><p>这是一个展示未来 10 年（2004年）计算愿景的视频原型。</p>
</li>
<li><p><b>Guidelines for Realistic Video Prototyping (Tognazzini 的原则)</b>:</p>
</li>
</ul>
<ol>
<li><p><b>Realistic Timeframe</b>: 确保设想的技术在 10 年内是<b>可能</b>实现的（不要科幻魔法）。</p>
</li>
<li><p><b>Include Errors</b>: 在视频中展示<b>出错</b>的情景（显得真实，不只是完美的演示）。</p>
</li>
<li><p><b>No Impossible Hardware</b>: 避免物理上不可能的设计。</p>
</li>
<li><p><b>Design First</b>: <b>先设计界面，再拍电影</b>。不要为了电影效果牺牲交互逻辑 。</p>
</li>
<li><p><b>Cost Control</b>: 用便宜的交互方式（如鼠标、语音）替代昂贵的特效（如复杂手势），除非必须。</p>
</li>
</ol>
<hr/>
<h4>3. 普适计算 (Ubiquitous Computing / Ubicomp)</h4>
<h5>⭐ Mark Weiser 的愿景 (Xerox PARC, 1991)</h5>
<ul>
<li><p><b>Core Philosophy</b>:</p>
</li>
<li><p><b>Disappearing Computer</b>: 最深刻的技术是那些<b>消失</b>的技术，它们编织进日常生活中，直到无法区分（如文字、电机） 。</p>
</li>
<li><p><b>Calm Computing</b>: 技术不应时刻抢占注意力，而应在背景中提供帮助。</p>
</li>
<li><p><b>The Devices (三种尺度)</b>:</p>
</li>
</ul>
<ol>
<li><p><b>Tabs</b>: 英寸级（Inch scale）。便利贴大小，随身携带（类似现在的智能工牌或手表）。</p>
</li>
<li><p><b>Pads</b>: 英尺级（Foot scale）。纸张/书本大小（类似现在的 iPad/Tablet）。<b>注意</b>：Weiser 认为 Pad 应该是“Scrap computer”（用完即丢/随手拿），而不是现在这种昂贵的私人设备 。</p>
</li>
<li><p><b>Boards</b>: 码级（Yard scale）。黑板大小，用于协作（类似现在的 Smart Board）。</p>
</li>
</ol>
<ul>
<li><p><b>Vs. VR</b>:</p>
</li>
<li><p><b>VR (Virtual Reality)</b>: 试图模拟无限的世界，把人带入计算机内部。</p>
</li>
<li><p><b>Ubicomp</b>: 把计算机带入人的世界，**增强（Augment）**现实 。</p>
</li>
</ul>
<hr/>
<h4>4. 其他重要交互愿景</h4>
<ul>
<li><p><b>Put That There (MIT, 1980)</b>:</p>
</li>
<li><p><b>Multimodal Interface（多模态交互）</b>：结合<b>语音（Voice）和手势（Gesture）</b>。</p>
</li>
<li><p>例子：指着屏幕说 &quot;Move <em>that</em> to <em>there</em>&quot; 。</p>
</li>
<li><p><b>Apple Knowledge Navigator (1988)</b>:</p>
</li>
<li><p>设想了**智能代理（User Agent）**和平板电脑形态，类似现在的 Siri + iPad 。</p>
</li>
<li><p><b>World Wide Web (Tim Berners-Lee, 1989)</b>:</p>
</li>
<li><p>通过 GUI 访问远程网络文件。<b>关键点</b>：最早的 Web 浏览器既是浏览器也是<b>编辑器（Editor）</b>，支持读写 。</p>
</li>
</ul>
</div>
</div>

# GOMS, Interface Efficiency

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<h2>Version 1</h2>
<p>这份 Lecture 10 的 PPT 核心非常明确，完全契合你所说的“硬核考试”模式：<b>Calculation (KLM 模型计算时间)</b> 和 <b>Application (利用信息论评估效率)</b> 是绝对的重头戏。</p>
<p>以下是按照 PPT 结构拆解的考点分析，我特别针对<b>计算逻辑</b>和<b>分析陷阱</b>进行了详细标注。</p>
<hr/>
<h3><b>Part 1: GOMS 基础理论 (Conceptual Framework)</b></h3>
<p><b>Slide 1-8</b></p>
<ul>
<li><p><b>核心概念 (Key Concept): GOMS</b> </p>
</li>
<li><p><b>G</b>oals (用户想达成什么)</p>
</li>
<li><p><b>O</b>perators (基本动作：点击、按键)</p>
</li>
<li><p><b>M</b>ethods (达成目标的步骤序列)</p>
</li>
<li><p><b>S</b>election Rules (如果有多种方法，如何选择) </p>
</li>
<li><p><b>⚙️ 适用范围 (Application Scope) - </b><b>易错点</b></p>
</li>
<li><p>GOMS <b>只适用于</b> &quot;Skilled users performing routine tasks&quot; (熟练用户执行常规任务) 。</p>
</li>
<li><p><b>不要用于：</b> 初学者 (Novices)、解决问题的场景 (Problem-solving) 或 极度创新的 UI (New UI techniques) 。</p>
</li>
<li><p><i>Exam Focus:</i> 如果题目给出一个 Case 涉及“用户第一次使用某个软件”或者“用户正在探索功能”，直接判定 <b>不能使用 GOMS</b>。</p>
</li>
</ul>
<hr/>
<h3><b>Part 2: KLM - 按键级模型 (The Heavy Calculation)</b></h3>
<p><b>Slide 9-16 (考试重灾区：计算执行时间)</b></p>
<p>这是本课最硬核的<b>Calculation (35%)</b> 部分。考试通常会给你一个界面截图，让你写出操作序列并计算时间。</p>
<h4>基础算子与时间 (Operators &amp; Timings)</h4>
<p>你需要记住这些标准时间（或者考试会给，但必须熟练识别动作）：</p>
<ul>
<li><p><b>K (Keying):</b>  (敲击键盘)</p>
</li>
<li><p><b>P (Pointing):</b>  (鼠标移动并指向)</p>
</li>
<li><p><b>H (Homing):</b>  (手在键盘和鼠标间切换)</p>
</li>
<li><p><b>M (Mentally Preparing):</b>  (<b>关键变量</b>，思考/寻找/确认)</p>
</li>
<li><p><b>R (Responding):</b> 系统响应时间 (只有当用户必须等待系统时才计入)</p>
</li>
</ul>
<h4><b>2. 核心难点：M 的放置规则 (Rules for Placing Ms)</b></h4>
<p>这是计算题的<b>主要扣分点</b>。你不能随意加 M，必须严格遵循 heuristic rules 。</p>
<ul>
<li><p><b>Rule 0 (Initial Insertion):</b></p>
</li>
<li><p>在所有  (Keying) 和  (Pointing) 之前先无脑插入 。</p>
</li>
<li><p><i>逻辑：</i> 所有的动作都需要大脑先发出指令。</p>
</li>
<li><p><i>String:</i> </p>
</li>
<li><p><b>Rule 1 (Anticipation / Skill):</b></p>
</li>
<li><p>如果一连串动作是非常熟练的组合（fully anticipated），删除中间的 。</p>
</li>
<li><p><i>例子:</i> 指向并点击 () 变成 。</p>
</li>
<li><p><b>Rule 2 (Cognitive Units):</b></p>
</li>
<li><p>这是最常考的。如果输入的是一个“认知单元”（比如一个单词、一串熟悉的数字），只在开头保留 ，中间的  删掉。</p>
</li>
<li><p><i>例子:</i> 输入 &quot;dir&quot; (命令)。</p>
</li>
<li><p><i>原始:</i> </p>
</li>
<li><p><i>处理后:</i>  (因为 &quot;dir&quot; 在脑子里是一个整体) 。</p>
</li>
<li><p><b>Rule 3 (Redundant Terminators):</b></p>
</li>
<li><p>如果在认知单元结束后，需要打一个结束符（如 Enter），且这个结束符是多余/习惯性的，删掉它前面的 。</p>
</li>
<li><p><i>例子:</i> 输入数据后按 Enter:  。</p>
</li>
<li><p><b>Rule 4 (Command Terminators):</b></p>
</li>
<li><p>如果你输入的是一个<b>常量字符串</b>（命令），后面的定界符（delimiter，如 Enter）前的  也要删掉。</p>
</li>
<li><p><i>特例:</i> 如果是有参数的命令（如 <code>ls -al</code>），因为你需要思考参数，所以参数前的  可能保留 。</p>
</li>
</ul>
<h4><b>🧮 典型计算题步骤 (Algorithm for Exam):</b></h4>
<ol>
<li><p><b>List Actions:</b> 写出物理动作序列 (e.g., )。</p>
</li>
<li><p><b>Apply Rule 0:</b> 全部加 M (e.g., )。</p>
</li>
<li><p><b>Apply Rules 1-5:</b> 划掉多余的 M。</p>
</li>
</ol>
<ul>
<li><p><i>Check:</i> 鼠标点按钮通常是  (无中间 M)。</p>
</li>
<li><p><i>Check:</i> 输入单词通常是  (只有一个 M)。</p>
</li>
</ul>
<ol>
<li><b>Sum Up:</b> 代入数值求和。</li>
</ol>
<hr/>
<h3><b>Part 3: Information Efficiency (定量评估)</b></h3>
<p><b>Slide 17-23, 29-31</b></p>
<p>这部分侧重于<b>Analysis (40%)</b> 和 <b>Calculation</b>。核心在于用“信息论”来评估界面的效率，而不是看它长得好不好看。</p>
<h4><b>1. 信息量计算 (Measuring Information)</b></h4>
<p>你需要计算完成任务<b>最少</b>需要多少 bit 的信息。</p>
<ul>
<li><p><b>公式 1：等概率情况 (Equally likely alternatives)</b> </p>
</li>
<li><p>: 选项的数量。</p>
</li>
<li><p><i>例子:</i> 从 4 个菜单项里选 1 个，信息量 =  bits。</p>
</li>
<li><p><b>公式 2：不等概率情况 (Shannon Entropy)</b> </p>
</li>
<li><p><b>考点:</b> 题目会给你一张概率表（如 Slide 22 的温度输入概率），你需要代入公式计算“最小必要信息量”。</p>
</li>
<li><p><i>PPT 案例:</i> 温度转换器的最小信息量计算结果是 11.4 bits 。</p>
</li>
</ul>
<h4><b>2. 效率评估 (Efficiency Metrics)</b></h4>
<p>算出“理论最小值”后，对比“实际操作量”来算效率。</p>
<ul>
<li><p><b>Information Efficiency ():</b> </p>
</li>
<li><p><i>App &amp; Analysis:</i> 如果  很低，说明用户做了很多无用功（提供了很多废话信息）。</p>
</li>
<li><p><i>实际计算:</i> 用户的实际输入量通常按<b>按键数</b>估算。PPT 中提到标准键盘每个键约为 5 bits 。</p>
</li>
<li><p>公式变形: .</p>
</li>
<li><p><b>Character Efficiency:</b> </p>
</li>
<li><p><i>Case Study:</i> Slide 21 对比了三种不同的温度转换 UI。</p>
</li>
<li><p><i>UI 1 (Dialog):</i> 先打字再选 Checkbox，效率低。</p>
</li>
<li><p><i>UI 2 (Suffix):</i> 打字后加 &quot;c&quot; 或 &quot;f&quot;，效率中等。</p>
</li>
<li><p><i>UI 3 (Auto-detect/Omnibox):</i> 只输入数字，默认转换，效率最高 (100%) 。</p>
</li>
</ul>
<hr/>
<h3><b>Part 4: 总结与下一步 (Summary)</b></h3>
<p><b>Lecture 10 的考试生存指南：</b></p>
<ol>
<li><p><b>背诵:</b>  的时间值（以防万一）。</p>
</li>
<li><p><b>练习:</b> 找任何一个软件界面（比如 Word 的保存弹窗），试着写出 GOMS 序列，并练习应用 <b>Rule 2 (Cognitive Unit)</b> 和 <b>Rule 0</b>。</p>
</li>
<li><p><b>计算:</b> 熟练使用计算器算 ，如果是手算，记住  等基本数值。</p>
</li>
</ol>
<p><b>Next Step:</b></p>
<p>如果你需要，我可以根据 Slide 13-15 的 <b>Temperature Converter</b> 案例，给你出一个<b>模拟计算题</b>，让你练习一下 M 的放置规则（Rules for Placing Ms），并帮你检查是否掌握了逻辑？</p>
</div>
<div class="w-[50%]" width-ratio="50">
<h2>Version 2</h2>
<p>没问题，这份 PPT (Lecture 10) 也是考试中的**“计算题重灾区”<b>。它是关于</b>定量评估 (Quantitative Evaluation)** 的核心章节，不涉及用户测试，而是通过模型来<b>预测</b>用户表现。</p>
<p>这一章的重点非常明确：<b>GOMS 模型</b>（特别是 <b>KLM</b> 计算）和<b>界面效率 (Interface Efficiency)</b> 的计算。</p>
<p>以下是为你整理的复习笔记：</p>
<hr/>
<h3>Lecture 10: GOMS &amp; Interface Efficiency</h3>
<p><em>(GOMS 模型与界面效率)</em></p>
<h4>1. 核心理论：GOMS 模型</h4>
<p><em>(这是由 Card, Moran, Newell 在 1983 年提出的经典模型)</em></p>
<h5><b>Definition (定义)</b></h5>
<p>GOMS 是一个用于<b>预测</b>熟练用户（Expert Users）在执行常规任务（Routine Tasks）时所需时间的模型。</p>
<ul>
<li><p><b>G</b>oals (目标): 用户想要达成什么？(e.g., &quot;Delete a word&quot;)</p>
</li>
<li><p><b>O</b>perators (操作): 基本的动作 (e.g., Click, Type key, Move mouse)。</p>
</li>
<li><p><b>M</b>ethods (方法): 达成目标的一系列操作步骤 (e.g., Menu method vs. Shortcut method)。</p>
</li>
<li><p><b>S</b>election Rules (选择规则): 如果有多种方法，用户根据什么规则选择其中一种？(e.g., &quot;If hands are on mouse, use menu&quot;).</p>
</li>
</ul>
<h5><b>GOMS Variants (变体)</b></h5>
<ul>
<li><p><b>KLM (Keystroke-Level Model)</b>: <b>⭐ 最常考</b>。简化版，只关注按键级操作，用于计算执行时间。</p>
</li>
<li><p><b>CPM-GOMS</b>: 关键路径法，考虑并行操作（比如一边看屏幕一边打字）。</p>
</li>
<li><p><b>NGOMSL</b>: 自然语言版，还可以预测<b>学习时间 (Learning times)</b>。</p>
</li>
</ul>
<hr/>
<h4>2. 🧮 必考计算一：KLM (Keystroke-Level Model)</h4>
<p><em>(这是本章最硬核的计算部分，通常会给一个具体的交互步骤，让你计算总时间)</em></p>
<h5><b>Standard Times (标准时间参数)</b></h5>
<p>你需要对这些数值有个大致印象（考试通常会给出，但记一下更稳）：</p>
<ul>
<li><p><b>K (Keying)</b>: <b>0.2 s</b> (敲击一个键，包括修正错误的时间)。</p>
</li>
<li><p><b>P (Pointing)</b>: <b>1.1 s</b> (鼠标指向目标，遵循 Fitts&#39; Law 的平均值)。</p>
</li>
<li><p><b>H (Homing)</b>: <b>0.4 s</b> (手在键盘和鼠标之间切换)。</p>
</li>
<li><p><b>M (Mental Preparing)</b>: <b>1.35 s</b> (心理准备时间，<b>这是最容易扣分的地方</b>)。</p>
</li>
<li><p><b>R (Responding)</b>: 系统响应时间（如果用户必须等待系统反应）。</p>
</li>
</ul>
<h5><b>⭐ Rules for Placing Ms (放置 M 的规则)</b></h5>
<p>这是 KLM 计算中最难的部分。你不能随便加 M，必须严格遵守规则：</p>
<ol>
<li><p><b>Rule 0 (Initial Insertion)</b>: 先在所有 K (按键) 和 P (指向命令) 之前插入 M。<b>注意</b>：指向参数（Argument，如文本框）的 P 前面通常不加 M。</p>
</li>
<li><p><b>Rule 1 (Deletion of Anticipated Ms)</b>: 如果一个操作完全可以由前一个操作<b>预判</b>（连贯动作），删掉中间的 M。</p>
</li>
</ol>
<ul>
<li><em>例子</em>: 指向并点击 (Point &amp; Click) -&gt; <code>P M K</code> 变成 <code>P K</code> (因为点鼠标是 P 的自然延续)。</li>
</ul>
<ol>
<li><b>Rule 2 (Cognitive Units)</b>: 在输入一串<b>连续的字符</b>（Cognitive Unit，如输入单词 &quot;dir&quot;）时，只保留第一个 M，删掉中间的 M。</li>
</ol>
<ul>
<li><em>例子</em>: <code>M K M K M K</code> -&gt; <code>M K K K</code>。</li>
</ul>
<ol>
<li><b>Rule 3 (Consecutive Terminators)</b>: 连续的结束符（如输完命令按 Enter），删掉中间的 M。</li>
</ol>
<ul>
<li><em>例子</em>: <code>... K M K</code> (Enter) -&gt; <code>... K K</code>。</li>
</ul>
<ol>
<li><p><b>Rule 4 (Command Terminators)</b>: 如果按键是用来<b>结束</b>一个<b>固定命令</b>（Constant string，不需要参数的），删掉它前面的 M。</p>
</li>
<li><p><b>Rule 5 (Overlapped Ms)</b>: 如果用户在等待系统响应（R）的时间里可以进行思考，那么 M 和 R 重叠，不重复计算。</p>
</li>
</ol>
<hr/>
<h5><b>🛠️ 【计算题示例 / Calculation Example】</b></h5>
<p><b>场景</b>: 温度转换器（Case 1: 选择 F -&gt; C，然后输入数字）。</p>
<p><b>步骤</b>:</p>
<ol>
<li><p>手移到鼠标 (H)，指向单选按钮 (P)，点击 (K)。</p>
</li>
<li><p>手移回键盘 (H)，输入 &quot;23.7&quot; (4个字符)，按 Enter (1个字符)。</p>
</li>
</ol>
<p><b>原始序列 (Raw Sequence)</b>:</p>
<p><code>H P K H K K K K K</code></p>
<p><b>应用 M 规则 (Applying Rules)</b>:</p>
<ol>
<li><p><b>Rule 0 (加 M)</b>: <code>H M P M K H M K M K M K M K M K</code></p>
</li>
<li><p><b>Rule 1 (P和K连贯)</b>: <code>P M K</code> -&gt; <code>P K</code>。</p>
</li>
<li><p><b>Rule 2 (数字是认知单元)</b>: <code>M K M K M K M K</code> -&gt; <code>M K K K K</code>。</p>
</li>
<li><p><b>Rule 3 (Enter是结束符)</b>: 最后的 <code>K</code> 是 Enter，紧接数字，前面无需 M（或者是 Rule 2 的延续）。</p>
</li>
</ol>
<p><em>(注：PPT中的例子可能有特定简化，考试请依照题目给的具体操作流)</em></p>
<p><b>PPT 给出的最终模型</b>:</p>
<p><code>H M P K</code> (选按钮) + <code>H M K K K K</code> (输数字) + <code>M K</code> (按 Enter，这里保留 M 可能是因为输入完数字需要确认一下再按 Enter)</p>
<p><b>总时间</b>: 代入 K, P, H, M 的数值相加。</p>
<hr/>
<h4>3. 🧮 必考计算二：界面效率 (Interface Efficiency)</h4>
<p><em>(基于 Shannon 的信息论，衡量界面是否浪费了用户的操作)</em></p>
<h5><b>1. Character Efficiency (字符效率)</b></h5>
<ul>
<li><p><b>Formula</b>: </p>
</li>
<li><p><b>解释</b>: 比如转换温度，最少只需要输入数字（例如 &quot;23&quot;），但如果界面让你输入 &quot;23.00&quot; 或者还要打个 &quot;C&quot;，效率就低了。</p>
<ul>
<li>理论最少字符：<code>23</code>（2 个字符）</li>
<li>实际界面要求输入：<code>23.00C</code>（6 个字符）<br/>  Efficiency=2/6=0.33</li>
</ul>
</li>
</ul>
<h5><b>2. Information Efficiency (信息效率)</b></h5>
<ul>
<li><p>这是更高级的衡量标准，单位是 <b>Bit (比特)</b>。</p>
</li>
<li><p><b>Formula</b>:</p>
</li>
</ul>
<h6><b>如何计算最小信息量 (Minimal Info)?</b></h6>
<p>使用信息熵公式：$H=−∑p_i log_2p_i$</p>
<ol>
<li><b>等概率情况 (Equally likely)</b>:</li>
</ol>
<ul>
<li><em>例子</em>: 键盘上有 128 个键，按一个键提供的信息量是 8 bits。<br/>  $$H=log⁡_2N$$</li>
</ul>
<ol>
<li><b>不等概率情况 (Different probabilities)</b>:</li>
</ol>
<ul>
<li><p><b>🛠️ 【考点】</b>: PPT 第 22 页的计算表。</p>
</li>
<li><p>如果输入的值有不同的概率（如 25% 是三位数，12.5% 是负数等），你需要把每种情况的  加起来得到总信息量。<br/>  $$H=−∑p_i log_2 p_i$$<br/>  总信息量：<br/>  H=0.5+0.5+0.375+0.375=1.75 bits</p>
</li>
</ul>
<hr/>
<h4>4. 总结与考试策略 (Exam Strategy)</h4>
<h5><b>Key Concepts (核心概念)</b></h5>
<ul>
<li><p><b>GOMS 适用范围</b>: 仅适用于<b>熟练用户 (Expert/Trained users)</b> 执行<b>常规任务</b>。不适用于新手（因为新手在解决问题，不是在执行常规操作）或全新的界面设计。</p>
</li>
<li><p><b>Fitts&#39; Law vs. GOMS</b>: Fitts&#39; Law 算的是<b>单次移动</b>的时间（微观），GOMS 算的是<b>整个任务流程</b>的时间（宏观）。</p>
</li>
</ul>
<h5><b>常见题型预测</b></h5>
<ol>
<li><b>计算题</b>: 给你一个任务描述（如“从鼠标切换到键盘输入 &#39;Save&#39; 并回车”），列出 KLM 序列并计算总时间。</li>
</ol>
<ul>
<li><em>技巧</em>: 别忘了加 M！也别忘了根据规则删 M！</li>
</ul>
<ol>
<li><p><b>比较题</b>: 给你两个界面设计（比如一个用菜单，一个用快捷键），让你用 GOMS 计算哪个效率高。</p>
</li>
<li><p><b>理论题</b>: 为什么 GOMS 不适用于评估“第一次使用某软件的用户”？</p>
</li>
</ol>
<ul>
<li><em>答案</em>: 因为 GOMS 假设用户已经知道 Method (方法) 和 Selection Rules，而新手还在探索学习，行为不可预测。</li>
</ul>
<p><b>需要我为你出一道 KLM 的模拟计算题来练手吗？这部分很容易在 M 的放置上出错。</b></p>
</div>
</div>

# Ten Golden Rules, Responsiveness

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<h2>Version 1</h2>
<p>这份 Lecture 11 的 PPT 与上一节课（GOMS 计算）风格截然不同。上一节课是纯粹的计算，而这一节课（Ten Golden Rules &amp; Responsiveness）侧重于 <b>Application &amp; Analysis (应用分析)</b> 和 <b>Quantitative Constraints (定量约束)</b>。</p>
<p>虽然这节课看似全是“文科理论”，但为了应对<b>硬核考试</b>，你不能只背规则名字，而必须掌握**“如何用这些规则去通过一个具体的 UI 截图找茬（Critique）”<b>，以及背诵</b>“响应时间的硬性阈值”**。</p>
<p>以下是按照 PPT 结构拆解的考点分析：</p>
<hr/>
<h3><b>Part 1: Ten Golden Rules (核心考点：Application &amp; Analysis)</b></h3>
<p><b>Slide 4-48</b></p>
<p>这是考试中 <b>Case Study / Interface Critique（界面分析题）</b> 的核心武器库。考试通常会给一个“糟糕的界面”，让你<b>指出它违反了哪条规则，并说明原因</b>。</p>
<h4><b>1. Keep the Interface Simple (保持简洁)</b></h4>
<ul>
<li><p><b>核心概念:</b> <code>Feature Creep</code> (功能蔓延)。</p>
</li>
<li><p><b>⚙️ 考点分析:</b></p>
</li>
<li><p><b>80/20 Rule:</b> 80% 的用户只使用 20% 的功能 。</p>
</li>
<li><p><b>Exam Trick:</b> 题目可能会展示一个像“万能遥控器”或“复杂的蓝光播放器”那样塞满按钮的界面 。你的分析点应该是：“违反 Rule 1，存在 Feature Creep，应该将不常用功能移入子菜单 (sub-dialogs) 。”</p>
</li>
</ul>
<h4><b>2. Speak the User&#39;s Language (讲用户的语言)</b></h4>
<ul>
<li><p><b>核心概念:</b> <code>Domain Concepts</code> vs. <code>System Concepts</code>。</p>
</li>
<li><p><b>⚙️ 考点分析:</b></p>
</li>
<li><p>不要用技术术语（如 &quot;Buffer&quot;, &quot;Stack&quot;, &quot;Fatal Error 0x82&quot;），要用领域术语（如 &quot;Music&quot;, &quot;Song&quot; 而不是 &quot;File&quot;） 。</p>
</li>
<li><p><b>Metaphor (隐喻):</b> 比如“桌面”、“回收站”就是为了讲用户的语言。</p>
</li>
</ul>
<h4><b>3. Be Consistent and Predictable (一致性与可预测性)</b></h4>
<ul>
<li><p><b>核心概念:</b> <code>Principle of Least Surprise</code> (最小惊讶原则) 。</p>
</li>
<li><p><b>⚙️ 考点分析 (重点):</b></p>
</li>
<li><p><b>Vertical Consistency (垂直/内部一致性):</b> 软件内部统一（例如：所有的“确认”按钮都在右边）。</p>
</li>
<li><p><b>Horizontal Consistency (水平/外部一致性):</b> 与操作系统或其他流行软件统一（例如：<code>Ctrl+C</code> 永远是复制）。</p>
</li>
<li><p><i>Exam Trick:</i> 题目可能会问“为什么 Word 的快捷键应该和 Excel 一样？” -&gt; Horizontal Consistency。</p>
</li>
</ul>
<h4><b>4. Provide Feedback &amp; Be Responsive (反馈与响应)</b></h4>
<ul>
<li><p><b>核心概念:</b> 填补 <code>Gulf of Evaluation</code> (评估鸿沟) 。</p>
</li>
<li><p><b>⚙️ 考点分析:</b></p>
</li>
<li><p>任何操作都需要反馈（哪怕是按键的点击感）。</p>
</li>
<li><p><i>Case Study:</i> 进度条 (Progress Bar) 必须是诚实的，不能卡在 99% 不动，最好显示剩余时间 。</p>
</li>
</ul>
<h4><b>5. Minimize Memory Load (减少记忆负担)</b></h4>
<ul>
<li><p><b>核心概念:</b> <code>Short-term memory</code> (短时记忆) 容量有限，约为 ** chunks** 。</p>
</li>
<li><p><b>⚙️ 考点分析:</b></p>
</li>
<li><p><b>Recognition over Recall (再认 &gt; 回忆):</b> 也就是“让用户从菜单里选 (Select)”优于“让用户凭空输入命令 (Type)” 。</p>
</li>
<li><p><i>Case:</i> 如果一个界面让你在第二页输入第一页看过的 ID 号，这就是违反了 Rule 5。</p>
</li>
</ul>
<h4><b>6. Avoid Errors, Help to Recover (防错与恢复)</b></h4>
<ul>
<li><p><b>核心概念:</b> <code>Undo</code> (撤销) 和 <code>Constrained Input</code> (限制输入)。</p>
</li>
<li><p><b>⚙️ 考点分析:</b></p>
</li>
<li><p>最好的防错是不让错误发生（例如：日历控件只允许选有效日期，而不是让用户打字） 。</p>
</li>
<li><p>必须提供 <code>Undo</code>，这能降低用户的焦虑 (Anxiety) 。</p>
</li>
</ul>
<h4><b>7. Design Clear Exits (明确的出口)</b></h4>
<ul>
<li><p><b>核心概念:</b> 用户经常会迷路 (&quot;Where am I?&quot;)。</p>
</li>
<li><p><b>⚙️ 考点分析:</b></p>
</li>
<li><p>必须有 &quot;Back&quot;, &quot;Cancel&quot;, &quot;Home&quot; 按钮。</p>
</li>
<li><p><b>Closed Dialogs:</b> 任务完成后要有明确的“完成感”（Closure），比如“订单已提交”的页面 。</p>
</li>
</ul>
<h4><b>8. Help and Documentation (帮助文档)</b></h4>
<ul>
<li><p><b>核心概念:</b> 用户<b>不读</b>说明书 (Users don&#39;t read manuals) 。</p>
</li>
<li><p><b>⚙️ 考点分析:</b></p>
</li>
<li><p>帮助文档应该作为最后的手段，最好是用 Tooltips (工具提示) 或 Wizards (向导)。</p>
</li>
</ul>
<h4><b>9. Address Diverse User Needs (满足不同用户)</b></h4>
<ul>
<li><p><b>核心概念:</b> <code>Novices</code> (新手) vs. <code>Experts</code> (专家)。</p>
</li>
<li><p><b>⚙️ 考点分析:</b></p>
</li>
<li><p>新手需要向导和解释；专家需要 <b>Shortcuts (快捷键)</b> 和 <b>Macros (宏)</b> 以提高效率 。</p>
</li>
<li><p><i>Case:</i> 为什么会有快捷键 <code>Ctrl+S</code>？是为了满足 Rule 9 中的 Expert User。</p>
</li>
</ul>
<h4><b>10. Hire a Graphic Designer (视觉设计)</b></h4>
<ul>
<li><b>考点:</b> 即使功能好，丑陋的界面也会被认为不好用（Aesthetic-Usability Effect，虽然 PPT 没细讲理论，但强调了专业设计的重要性）。</li>
</ul>
<hr/>
<h3><b>Part 2: Responsiveness (核心考点：Quantitative Standards)</b></h3>
<p><b>Slide 49-60 (硬核记忆区)</b></p>
<p>这部分包含必须<b>死记硬背</b>的数字。这是本节课最容易出 <b>Quantitative Assessment (定量评估)</b> 题目的地方。</p>
<h4><b>1. The Three Human Deadlines (三个关键阈值) ⚠️</b></h4>
<p>这是必考题，一定要记住这三个时间节点及其含义 ：</p>
<ul>
<li><p><b>0.1 second (100 ms):</b></p>
</li>
<li><p><b>含义:</b> <code>Perception of cause and effect</code> (因果感知的极限)。</p>
</li>
<li><p><b>效果:</b> 感觉是“瞬间”发生的 (Instantaneous)。</p>
</li>
<li><p><i>Example:</i> 鼠标移动光标必须跟随；按下按钮按钮必须凹陷。如果超过 0.1s，用户会觉得“没点上”或者系统卡了。</p>
</li>
<li><p><b>1.0 second:</b></p>
</li>
<li><p><b>含义:</b> <code>Turn-taking / Flow of thought</code> (对话流/思维流)。</p>
</li>
<li><p><b>效果:</b> 用户会注意到延迟，但思维不会被打断。</p>
</li>
<li><p><i>Requirement:</i> 如果操作超过 1秒（比如 2秒），你<b>必须</b>显示忙碌光标 (Busy cursor) 或进度指示器，否则用户会觉得程序死机了 。</p>
</li>
<li><p><b>10 seconds:</b></p>
</li>
<li><p><b>含义:</b> <code>Attention span</code> (注意力极限)。</p>
</li>
<li><p><b>效果:</b> 用户思维彻底断开，想别的事去了。</p>
</li>
<li><p><i>Requirement:</i> 必须显示带有百分比和剩余时间的 <b>Progress Bar</b>，并且允许用户 <b>Cancel (取消)</b> 。</p>
</li>
</ul>
<h4><b>2. Latency vs. Throughput (延迟与吞吐量)</b></h4>
<ul>
<li><p><b>区分概念:</b></p>
</li>
<li><p><b>Latency (延迟):</b> 从输入到看到的延迟。交互系统最看重这个！必须低于 <b>100ms</b> 。</p>
</li>
<li><p><b>Throughput (吞吐量):</b> 单位时间处理的数据量（如下载速度）。</p>
</li>
<li><p><b>⚙️ 考点分析:</b></p>
</li>
<li><p>交互式系统（Interactive Systems）的黄金法则是 <b>Low Latency</b>，而不是 High Throughput。</p>
</li>
</ul>
<h4><b>3. Techniques for Responsiveness (如何提升响应性)</b></h4>
<p>如果系统真的很慢，怎么“骗”过用户？(Design Techniques) </p>
<ul>
<li><p><b>Acknowledge immediately:</b> 无论任务多重，先给个反应（&lt;0.1s）。</p>
</li>
<li><p><b>Predict/Pre-compute:</b> 预加载。</p>
</li>
<li><p><b>Degrade Quality:</b> 像旧的 WordStar 软件一样，优先保证打字不卡顿，屏幕排版可以慢一点刷新（牺牲质量换取响应速度）。</p>
</li>
</ul>
<hr/>
<h3><b>总结与复习建议 (Summary &amp; Next Step)</b></h3>
<p><b>Lecture 11 的考试生存指南：</b></p>
<ol>
<li><p><b>背诵数字:</b> 0.1s, 1s, 10s。考试可能会问：“如果一个操作需要 5 秒，系统应该怎么做？”（答案：显示进度指示器，因为 &gt;1s 且 &lt;10s）。</p>
</li>
<li><p><b>应用规则:</b> 看到任何界面截图，尝试用 Rule 1, 3, 5, 6, 7 去分析它。</p>
</li>
<li><p><b>区分术语:</b> 搞清楚 Recognition (Rule 5) 和 Recall 的区别；搞清楚 Latency 和 Throughput 的区别。</p>
</li>
</ol>
<p><b>Next Step:</b></p>
<p>这一章的理论部分（10 Golden Rules）常和 Lecture 10 的 GOMS 结合出题。例如：<b>“使用 GOMS 计算出某任务需要 15 秒，请根据 Responsiveness 的规则分析这个设计是否合格，并提出改进建议。”</b></p>
<p>需要我为你出一道这样的<b>综合分析题</b>来练练手吗？</p>
</div>
<div class="w-[50%]" width-ratio="50">
<h2>Version 2</h2>
<p>这份复习笔记基于 Lecture 11 &quot;Ten Golden Rules, Responsiveness&quot; 整理而成。</p>
<p>这一章是考试中**“设计原则 (Design Principles)”和“定量评估 (Quantitative Evaluation)”**的核心章节。尤其是“十条黄金法则”和“响应时间的三个阈值”，是必考的理论基础，常出现在简答题、设计分析题（如：分析界面哪里做得不好）和填空题中。</p>
<p>Lecture 11: Ten Golden Rules, Responsiveness</p>
<p>(十大交互设计黄金法则与响应性)</p>
<p>Part 1: Ten Golden Rules of Interface Design</p>
<p>(十大黄金法则 - 必背设计准则)</p>
<p>这十条法则通常作为评估标准 (Heuristics) 来考。题目可能会给你一个界面截图，问你“这个设计违反了哪条法则？”或者“体现了哪条法则？”。</p>
<ol>
<li>Keep the Interface Simple! (保持界面简洁)</li>
</ol>
<p>Core Concept: 最重要的法则。避免 Feature Creep (功能蔓延)。</p>
<p>The 80/20 Rule: 80% 的用户只使用 20% 的功能（例如 Word）。</p>
<p>🛠️ 【应用场景 / Scenario】:</p>
<p>如果你在设计一个 App，不要把所有功能都堆在首页。</p>
<p>策略: 将不常用的功能移到子对话框 (Sub-dialogs) 中。</p>
<ol>
<li>Speak the User’s Language! (说用户的语言)</li>
</ol>
<p>Definition: 使用应用领域 (Application Domain) 的术语，而不是技术术语。</p>
<p>Example:</p>
<p>✅ Apple Music 使用 &quot;Songs&quot;, &quot;Playlists&quot;（用户听得懂）。</p>
<p>❌ 避免使用 &quot;File&quot;, &quot;Directory&quot;, &quot;Buffer&quot; 这种程序员才懂的词（除非用户是程序员）。</p>
<ol>
<li>Be Consistent and Predictable! (一致性与可预测性)</li>
</ol>
<p>Consistency (一致性):</p>
<p>Internal Consistency: 系统内部字体、颜色、布局统一。</p>
<p>External Consistency: 符合平台规范（如 macOS 菜单栏位置）。</p>
<p>Predictability (可预测性):</p>
<p>Principle of Least Surprise (最小惊奇原则): 系统应总是以用户预期的方式反应，不要做让用户感到意外的事。</p>
<ol>
<li>Provide Feedback &amp; Be Responsive! (提供反馈与响应)</li>
</ol>
<p>Theory: 完整的反馈能跨越 Gulf of Evaluation (评估鸿沟)。</p>
<p>Action: 用户的每一个操作（按键、点击）都需要反馈。</p>
<p>微小操作 -&gt; 微反馈（如按键声音）。</p>
<p>主要操作 -&gt; 明显反馈（如保存文件时的进度条）。</p>
<ol>
<li>Minimize Memory Load! (最小化记忆负担)</li>
</ol>
<p>Theory: 人类的短时记忆 (Short-term memory) 容量有限 (7±2 chunks, now revised to 4±1)。</p>
<p>Guideline: &quot;Read &amp; Select&quot; instead of &quot;Remember &amp; Type&quot;（让用户看菜单选择，而不是背命令输入）。</p>
<p>Example: 提供快捷键列表，不要让用户重复输入信息。</p>
<ol>
<li>Avoid Errors, Help to Recover! (避免错误与帮助恢复)</li>
</ol>
<p>Prevention: 最好的设计是让错误无法发生 (Constraints)。</p>
<p>例子: 在数字输入框中禁止输入字母。</p>
<p>Recovery: 提供 Undo (撤销) 功能。这能降低用户的焦虑，鼓励探索。</p>
<ol>
<li>Design Clear Exits &amp; Closed Dialogs! (清晰的出口与闭环对话)</li>
</ol>
<p>Clear Exits: 用户常问 &quot;How do I get back?&quot;（我怎么回去？）。必须提供 &quot;Back&quot; 或 &quot;Cancel&quot; 按钮。</p>
<p>Closed Dialogs: 任务完成后给予明确的结束感 (Closure)（如：&quot;下载完成&quot;的提示框），让用户能从心理上释放资源，准备下一步。</p>
<ol>
<li>Include Help and Documentation! (提供帮助与文档)</li>
</ol>
<p>Reality: Users don&#39;t read manuals! (用户不看说明书！)。</p>
<p>Strategy: 提供分层帮助系统 (Tooltips -&gt; Online Tutorial -&gt; Manual)。</p>
<p>Warning: Wizards (向导) 虽然好，但会剥夺用户的控制权，可能破坏法则 3 (Predictability)。</p>
<ol>
<li>Address Diverse User Needs! (满足多样化用户需求)</li>
</ol>
<p>Conflict: 新手需要解释，专家需要效率。</p>
<p>Solution:</p>
<p>为新手提供菜单和向导。</p>
<p>为专家提供 Accelerators (加速器)，如快捷键 (Keyboard Shortcuts)、宏 (Macros)。</p>
<ol>
<li>Hire a Graphic Designer! (雇佣平面设计师)</li>
</ol>
<p>Reason: 美学影响可用性。专业的视觉设计能提升产品的感知质量。</p>
<p>Part 2: Responsiveness and Performance</p>
<p>(响应性与性能 - 这里的数字是必考点)</p>
<ol>
<li>Concept: Responsiveness ≠ Performance</li>
</ol>
<p>Performance (性能): 机器处理得有多快（吞吐量）。</p>
<p>Responsiveness (响应性): 系统满足人类时间期望的能力（延迟）。</p>
<p>例子: 一个编辑器可能处理文件很快（高性能），但如果打字时字符上屏有延迟，那就是响应性差。</p>
<ol>
<li>🧠 The Three Human Deadlines (三个关键时间阈值)</li>
</ol>
<p>(这是一个高频考点，请务必背诵这三个时间级及其含义)</p>
<p>0.1 seconds (100 ms): Perception of Cause and Effect (因果感知)</p>
<p>用户感觉系统是即时 (Instant) 的。</p>
<p>应用: 鼠标移动、菜单弹出、按键反馈必须在这个时间内完成。如果超过 0.1s，用户会觉得“卡顿”或操作与反馈断开。</p>
<p>1 second: Turn-taking / Flow of Thought (思维流)</p>
<p>用户能够保持思维连贯，不需要特别的反馈提示。</p>
<p>应用: 如果操作超过 0.1s 但小于 1s（如加载简单网页），用户会感到延迟但思维不会被打断。如果超过 1s，必须显示忙碌光标 (Busy Indicator)。</p>
<p>10 seconds: Attention Span (注意力跨度)</p>
<p>这是用户在等待时能保持注意力的极限。</p>
<p>应用: 如果操作超过 10s，用户会切换任务（去喝咖啡、切窗口）。必须显示进度条 (Progress Bar) 并提供“取消”选项。</p>
<ol>
<li>Design Techniques for Responsiveness (提升响应性的设计技巧)</li>
</ol>
<p>Progress Indicators (进度指示器):</p>
<p>🛠️ 【设计原则】: 进度条必须是诚实的。</p>
<p>不要在 99% 卡住；显示剩余时间 (Time remaining)；&quot;Less than a minute&quot; 比 &quot;47 seconds&quot; 更好（因为估算总是不准的）。</p>
<p>Dynamic Time Management (动态时间管理):</p>
<p>Case Study: WordStar (1978): 为了在慢速电脑上保持打字流畅，WordStar 采用了动态策略：如果用户打字很快，系统会优先处理文字上屏，暂停屏幕其他部分的刷新（如页码更新），直到用户停下来。</p>
<p>Principle: 牺牲质量/数量来保证关键任务的实时性。</p>
<p>Work Ahead (预加载): 在用户阅读时后台预加载下一页。</p>
<p>💡 考试复习重点 (Exam Tips)</p>
<p>Matching Question: 题目可能会描述一个现象（例如：“用户按了按钮不知道有没有生效”），让你选出违反了哪条 Golden Rule (Rule 4: Feedback)。</p>
<p>Calculation/Scenario: 题目可能问：“如果一个操作需要 5 秒，你应该设计什么样的反馈？”</p>
<p>答案: 大于 1s，需要显示忙碌光标；小于 10s，通常不需要复杂的进度条（或者简单的百分比），但必须让用户知道系统在工作，且不能打断用户思维流。</p>
<p>Definition: 解释为什么 Responsiveness 不等于 Performance。</p>
</div>
</div>

# Notations 

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<h2>Version 1</h2>
<p>这份 Lecture 12 的 PPT 主题是 <b>Notations (交互设计符号/模型)</b>。</p>
<p>如果说前两节课分别是“算时间 (GOMS)”和“背规则 (Golden Rules)”，那么这一节课就是**“画图与逻辑 (Diagramming &amp; Logic)”<b>。在硬核考试中，这部分通常以 Application (40%) 的形式出现，即</b>“给你一个场景，让你画出模型”<b>，或者 Analysis，即</b>“给你一个模型，问你某种状态是否可达”**。</p>
<p>以下是针对 <b>DIS1 硬核考试</b> 的 Lecture 12 考点拆解：</p>
<hr/>
<h3><b>Part 1: Why Notations? (为什么要用符号?)</b></h3>
<p><b>Slide 1-9</b></p>
<ul>
<li><p><b>核心概念 (Key Concept):</b></p>
</li>
<li><p><b>Specification (规格说明):</b> 用来描述系统<b>应该</b>怎么做，而不是<b>已经</b>怎么做了。</p>
</li>
<li><p><b>Communication (沟通):</b> 设计师与程序员之间的通用语言。</p>
</li>
<li><p><b>🧠 基础记忆 (Memory):</b></p>
</li>
<li><p>你需要知道 Notations 分为哪几类：</p>
</li>
</ul>
<ol>
<li><p><b>State-Oriented (面向状态):</b> STN, Statecharts, Petri Nets (关注系统处于什么状态).</p>
</li>
<li><p><b>Flow-Oriented (面向流程):</b> Flowcharts, Activity Diagrams (关注步骤顺序).</p>
</li>
<li><p><b>Object-Oriented (面向对象):</b> UML Class Diagrams (关注数据结构，HCI 考得少).</p>
</li>
</ol>
<hr/>
<h3><b>Part 2: State Transition Networks (STN - 状态转换网络)</b></h3>
<p><b>Slide 10-21 (重点：基础建模)</b></p>
<p>这是最基础的模型，考试中最简单的画图题。</p>
<ul>
<li><p><b>核心元素 (Elements):</b></p>
</li>
<li><p><b>Circles (圆圈):</b> States (状态)。比如 &quot;Waiting for coin&quot;, &quot;Brewing&quot;.</p>
</li>
<li><p><b>Arcs (箭头):</b> Transitions (转换)。比如 &quot;Insert coin&quot;, &quot;Press button&quot;.</p>
</li>
<li><p><b>⚙️ 考点分析 (Exam Focus - Application):</b></p>
</li>
<li><p><b>如何出题:</b> 题目会给一段文字：“一个灯，按一下开，再按一下关，长按闪烁”。让你画 STN。</p>
</li>
<li><p><b>陷阱 (Trick):</b> 别忘了 <b>Start State</b> (通常用黑点或双圈表示) 和 <b>Error States</b> (如果系统出错去哪里)。</p>
</li>
<li><p><b>⚠️ 致命弱点 (Critique Point):</b></p>
</li>
<li><p><b>State Explosion (状态爆炸):</b> 当系统稍微复杂一点（比如并发操作），STN 的状态数会指数级增长，变成 &quot;Spaghetti code&quot; (面条式乱码)。</p>
</li>
<li><p><i>考题:</i> 如果题目问“为什么 STN 不适合描述现代多窗口操作系统？”，答案就是 <b>State Explosion</b> 和 <b>Lack of Concurrency</b>。</p>
</li>
</ul>
<hr/>
<h3><b>Part 3: Petri Nets (佩特里网 - 难点)</b></h3>
<p><b>Slide 22-26 (重点：并发与逻辑)</b></p>
<p>这是本节课最容易出 <b>“脑筋急转弯”式逻辑题</b> 的地方。它专门解决 STN 无法处理的 <b>Concurrency (并发)</b> 问题。</p>
<ul>
<li><p><b>核心元素 (Elements):</b></p>
</li>
<li><p><b>Places (圆形):</b> 状态或资源容器。</p>
</li>
<li><p><b>Transitions (长方形/短线):</b> 动作。</p>
</li>
<li><p><b>Tokens (黑点):</b> 资源/标记。</p>
</li>
<li><p><b>Arcs (箭头):</b> 连接 Place 和 Transition。</p>
</li>
<li><p><b>🧮 逻辑推演规则 (Firing Rules) - </b><b>必考</b></p>
</li>
</ul>
<ol>
<li><p><b>Enabled:</b> 当一个 Transition 的<b>所有</b>输入 Place 都有 Token 时，它就被激活 (Enabled) 了。</p>
</li>
<li><p><b>Firing:</b> 激活后可以触发 (Fire)。触发时，从<b>所有</b>输入 Place 拿走一个 Token，给<b>所有</b>输出 Place 放上一个 Token。</p>
</li>
</ol>
<ul>
<li><p><b>⚙️ 考点分析 (Application &amp; Analysis):</b></p>
</li>
<li><p><b>Tracing (追踪):</b> 题目给一个初始图，问：“经过 2 步之后，Token 在哪里？”</p>
</li>
<li><p><b>Concurrency:</b> Petri Nets 可以同时有多个 Token 在动，这就是并发。</p>
</li>
<li><p><i>Slide 25:</i> 重点看 PPT 里关于 <b>AND (并行)</b> 和 <b>OR (选择)</b> 的结构区别。</p>
</li>
</ul>
<hr/>
<h3><b>Part 4: Statecharts (状态图 - 考试高频)</b></h3>
<p><b>Slide 27-37 (重点：解决状态爆炸)</b></p>
<p>这是 Harel 发明的，用来修复 STN 缺陷的高级工具。这是 <b>“应用题”</b> 的首选工具。</p>
<ul>
<li><b>核心特性 (Key Features) - </b><b>需要理解并会画</b></li>
</ul>
<ol>
<li><b>Hierarchy / Depth (层级/深度):</b></li>
</ol>
<ul>
<li><p><i>Super-state (父状态):</i> 把一堆小状态（如“响铃”、“贪睡”）包在一个大圈（“闹钟激活”）里。</p>
</li>
<li><p><i>Default Start State:</i> 父状态内部必须指定一个小黑点，表示进入父状态后默认去哪里。</p>
</li>
<li><p><i>Benefit:</i> 解决了复杂性，可以在不同层级看问题。</p>
</li>
</ul>
<ol>
<li><b>Orthogonality / Concurrency (正交/并发):</b></li>
</ol>
<ul>
<li><p>用虚线把一个状态分成两半（Swimlanes）。</p>
</li>
<li><p><i>含义:</i> 系统<b>同时</b>处于左边和右边的状态（例如：同时“播放音乐”和“显示时间”）。</p>
</li>
<li><p><i>Benefit:</i> 解决了 STN 的状态爆炸问题。</p>
</li>
</ul>
<ol>
<li><b>Broadcast Communication (广播通信):</b></li>
</ol>
<ul>
<li><p>一个事件（Event）可以同时触发不同部分的转换。</p>
</li>
<li><p><b>⚙️ 考点分析:</b></p>
</li>
<li><p><b>画图题:</b> 题目给一个复杂的电子表（有灯光、有闹钟、有计时器），要求使用 Statechart 建模。</p>
</li>
<li><p><i>技巧:</i> 如果题目提到“同时 (While/Concurrently)”，一定要用 <b>Orthogonality (虚线分隔)</b>。如果提到“在任何时候按 Reset 都能复位”，直接从 <b>Super-state</b> 画一条箭头出去，不要从每个小状态画（这是 History 机制或层级转换的优势）。</p>
</li>
</ul>
<hr/>
<h3><b>Part 5: Flowcharts &amp; UML (流程图与统一建模语言)</b></h3>
<p><b>Slide 38-48</b></p>
<ul>
<li><p><b>Flowcharts (流程图):</b></p>
</li>
<li><p>关注 <b>Process (流程)</b> 而非 Event (事件)。</p>
</li>
<li><p><i>区别:</i> STN 是“用户做了X，系统变到状态Y”；Flowchart 是“系统先做A，如果对则做B，否则做C”。</p>
</li>
<li><p><i>Exam Focus:</i> 程序员不仅要写代码，还要画流程图。知道菱形代表判断，矩形代表操作。</p>
</li>
<li><p><b>UML Activity Diagrams (活动图):</b></p>
</li>
<li><p>Flowchart 的“面向对象版”，支持并发（用粗黑线 Bar 表示 Fork/Join）。</p>
</li>
<li><p><b>UML Sequence Diagrams (时序图) - </b><b>重点</b></p>
</li>
<li><p>显示对象之间随<b>时间</b>的消息交互。</p>
</li>
<li><p><i>Lifelines (生命线):</i> 垂直虚线。</p>
</li>
<li><p><i>Activation (激活条):</i> 细长矩形，表示对象正在忙。</p>
</li>
<li><p><i>Messages:</i> 水平箭头。</p>
</li>
<li><p><i>Exam Focus:</i> 可能会让你画一个“用户登录”的时序图：User -&gt; Interface -&gt; Database -&gt; Interface -&gt; User。</p>
</li>
</ul>
<hr/>
<h3><b>Part 6: Model-Based Evaluation (基于模型的评估)</b></h3>
<p><b>Slide 55-63</b></p>
<p>这是 Notations 的<b>应用价值 (Value)</b>。</p>
<ul>
<li><p><b>Path Analysis (路径分析):</b></p>
</li>
<li><p>通过图论算法（如 Dijkstra）找最短路径或最长路径。</p>
</li>
<li><p><i>GOMS Link:</i> 可以用来自动计算 GOMS 模型中的操作步数。</p>
</li>
<li><p><b>Reachability (可达性):</b></p>
</li>
<li><p>检查是否存在“死胡同” (Deadlock) 或无法到达的状态。</p>
</li>
<li><p><b>Undo Analysis (撤销分析):</b></p>
</li>
<li><p><i>Graph Theory:</i> 检查是否每个节点都有反向边回到上一个节点？</p>
</li>
<li><p><i>Insight:</i> 很多时候 Undo 不是简单的 Reverse Edge，而是回到历史状态。</p>
</li>
</ul>
<hr/>
<h3><b>总结 (Summary)</b></h3>
<p><b>Lecture 12 考试生存指南：</b></p>
<ol>
<li><b>辨析工具:</b></li>
</ol>
<ul>
<li><p>简单顺序逻辑 -&gt; <b>STN</b></p>
</li>
<li><p>并发/资源争用逻辑 -&gt; <b>Petri Net</b> (数 Token)</p>
</li>
<li><p>复杂/层级/并发系统 -&gt; <b>Statecharts</b> (Harel)</p>
</li>
<li><p>时间序列/对象交互 -&gt; <b>Sequence Diagram</b></p>
</li>
</ul>
<ol>
<li><b>画图技巧:</b></li>
</ol>
<ul>
<li><p>画 Statechart 时，别忘了 <b>Default State (实心小黑点)</b>。</p>
</li>
<li><p>画 Petri Net 时，检查 Transition 是否 Enabled（输入全有 Token）。</p>
</li>
</ul>
<ol>
<li><b>Case Study 预演:</b></li>
</ol>
<ul>
<li><p>想象一个“带贪睡功能的闹钟”。</p>
</li>
<li><p><b>STN:</b> 状态会很多，乱。</p>
</li>
<li><p><b>Statechart:</b> 一个 Super-state 叫 &quot;Alarm Active&quot;，里面包含 &quot;Ringing&quot; 和 &quot;Snoozing&quot;。一条 &quot;Off&quot; 箭头直接从 &quot;Alarm Active&quot; 连出去。这就是高级用法的体现。</p>
</li>
</ul>
<p><b>Next Step:</b></p>
<p>这节课的内容通常需要<b>动手画</b>才能真正掌握。如果你有往年试题中的某个场景描述，或者想让我给你出一个**“闹钟”或“自动售货机”**的建模练习题，请告诉我！</p>
</div>
<div class="w-[50%]" width-ratio="50">
<h2>Version 2</h2>
<p>这份复习笔记基于你上传的 Lecture 12 <b>&quot;Interaction Design Notations&quot; (交互设计符号/形式化方法)</b>。</p>
<p>这一章是考试中**“画图题”<b>和</b>“逻辑分析题”**的重灾区。考试常考题目类型：</p>
<ol>
<li><p><b>Modeling (建模)</b>：给出一个交互场景（如数字手表、音乐播放器），让你画出 STN 或 State Chart。</p>
</li>
<li><p><b>Analysis (分析)</b>：给出一个状态图，问你是否存在“死胡同”或“危险状态”。</p>
</li>
<li><p><b>Comparison (比较)</b>：STN 和 Petri Net 各有什么优缺点？</p>
</li>
</ol>
<p>以下是为你整理的复习重点：</p>
<p><em>(交互设计符号与形式化模型)</em></p>
<h3>1. 为什么要使用符号 (Why Notations?)</h3>
<ul>
<li><p><b>Code is messy</b>: 直接写代码会将 UI 逻辑和核心算法混在一起，难以维护。</p>
</li>
<li><p><b>Precision</b>: 自然语言（&quot;用户点击按钮后...&quot;）容易产生歧义，形式化符号能精确描述系统的行为。</p>
</li>
</ul>
<hr/>
<h3>2. 文本式符号 (Textual Notations)</h3>
<p><em>(了解即可，通常考选择题或简答优缺点)</em></p>
<h4><b>Grammars (语法 / BNF)</b></h4>
<ul>
<li><p><b>适用场景</b>: 命令行界面 (CLI)，如 <code>copy source target</code>。</p>
</li>
<li><p><b>缺点</b>: 不适合描述图形界面 (GUI) 的点击顺序。</p>
</li>
</ul>
<h4><b>Production Rules (产生式规则)</b></h4>
<ul>
<li><p><b>形式</b>: <code>if condition then action</code>。</p>
</li>
<li><p><b>优点</b>: 适合描述<b>并发 (Concurrency)</b>，因为规则是无序的，只要条件满足就会触发。</p>
</li>
<li><p><b>缺点</b>: 难以描述<b>顺序 (Sequence)</b>，看不出任务的先后流程。</p>
</li>
</ul>
<hr/>
<h3>3. ⭐ State Transition Networks (STN, 状态转换网络)</h3>
<p><em>(必考重点，最基础的图形化模型)</em></p>
<h3><b>基本元素</b></h3>
<ul>
<li><p><b>Circles (圆圈)</b>: 状态 (States)，通常代表系统在等待用户输入。</p>
</li>
<li><p><b>Arcs (箭头)</b>: 转换 (Transitions)，代表用户操作 (Action) 及系统响应。</p>
</li>
</ul>
<h4><b>STN 的核心考点：图的属性检查</b></h4>
<p>考试可能会给你一个 STN 图，让你检查它是否有设计缺陷：</p>
<ol>
<li><p><b>Completeness (完备性)</b>: 在某个状态下，是否涵盖了所有可能的输入？(例如：用户双击了，但图里没画双击的箭头，系统会崩溃吗？)</p>
</li>
<li><p><b>Reversibility (可逆性)</b>: 用户能否回到上一步？(注意：Reversibility  Undo，只是回到之前的状态)。</p>
</li>
<li><p><b>Dangerous States (危险状态)</b>:</p>
</li>
</ol>
<ul>
<li><p>例子：文本编辑器中，“退出并保存”和“不保存直接退出”如果不小心弄混（比如按错快捷键 Esc），就是危险状态设计。</p>
</li>
<li><p><b>解决方法</b>: 调整状态布局或按键映射，避免误触进入死胡同。</p>
</li>
</ul>
<h4><b>STN 的致命弱点：State Explosion (状态爆炸)</b></h4>
<ul>
<li><p><b>问题</b>: 当有多个独立选项时，状态数量呈指数级增长。</p>
</li>
<li><p><b>案例</b>: 字体设置对话框。</p>
</li>
<li><p>只有 Bold (加粗): 2 个状态 (On/Off)。</p>
</li>
<li><p>Bold + Italic (斜体):  个状态。</p>
</li>
<li><p>Bold + Italic + Underline:  个状态。</p>
</li>
<li><p><b>结论</b>: STN <b>不适合</b>描述包含多个独立开关（并发选项）的界面。</p>
</li>
</ul>
<hr/>
<h3>4. ⭐ Petri Nets (Petri 网)</h3>
<p><em>(解决 STN “状态爆炸” 问题的神器)</em></p>
<h4><b>核心概念</b></h4>
<p>Petri 网特别适合描述<b>并发 (Concurrency)</b> 系统。</p>
<ul>
<li><p><b>Places (位置/圆圈)</b>: 代表状态或资源。</p>
</li>
<li><p><b>Tokens (黑点)</b>: 代表当前的活动状态或数据。</p>
</li>
<li><p><b>Transitions (短横线)</b>: 代表动作或事件。</p>
</li>
</ul>
<h4><b>Firing Rule (触发规则)</b></h4>
<p>这是理解 Petri 网的关键：</p>
<ul>
<li><p>只有当一个 Transition 的<b>所有输入 Place 都有 Token</b> 时，它才能被触发 (Fire)。</p>
</li>
<li><p>触发后，输入 Place 的 Token 被消耗，输出 Place 产生新 Token。</p>
</li>
</ul>
<h4><b>🛠️ 【应用场景 / Modeling】</b></h4>
<ul>
<li><p><b>题目</b>: 画出“加粗”和“斜体”两个复选框的模型。</p>
</li>
<li><p><b>画法</b>:</p>
</li>
<li><p>不像 STN 那样把所有组合画成一个大图。</p>
</li>
<li><p>而是画两个<b>平行</b>的结构：一个管 Bold (On/Off)，一个管 Italic (On/Off)。</p>
</li>
<li><p>每个结构里有一个 Token。用户点击 &quot;Bold&quot;，Bold 这一路的 Token 移动；Italic 那一路不受影响。</p>
</li>
</ul>
<hr/>
<h3>5. ⭐ State Charts (状态图 - Harel)</h3>
<p><em>(UML 中的标准状态机，集大成者)</em></p>
<p>State Charts 是对 STN 的改进，解决了 STN 的混乱问题，常用于现代建模。</p>
<h4><b>三大核心扩展 (Key Extensions)</b></h4>
<ol>
<li><b>Hierarchy (分层 / Super-states)</b>:</li>
</ol>
<ul>
<li><p>可以将一堆相关的状态打包成一个“超状态”(Super-state)。</p>
</li>
<li><p><b>XOR-decomposition</b>: 在超状态内部，同一时间只能处于一个子状态。</p>
</li>
<li><p><em>作用</em>: 简化连线（比如“取消”按钮可以从超状态边缘拉出来，不用从每个子状态都拉一根线）。</p>
</li>
</ul>
<ol>
<li><b>Concurrency (并发 / AND-decomposition)</b>:</li>
</ol>
<ul>
<li><p>使用虚线将一个状态分成两个区域，两个区域同时运行。</p>
</li>
<li><p><em>作用</em>: 完美替代 Petri 网的功能，解决状态爆炸。</p>
</li>
</ul>
<ol>
<li><b>History (历史状态 / H)</b>:</li>
</ol>
<ul>
<li><p>当离开一个超状态再回来时，记得上次离开时是在哪个子状态，而不是重置到初始状态。</p>
</li>
<li><p><em>符号</em>: 一个圈里写个 <b>H</b>。</p>
</li>
<li><p><em>例子</em>: 电视机从 Standby 唤醒时，应该回到上次看的频道，而不是默认频道。</p>
</li>
</ul>
<hr/>
<h4>💡 考试复习建议 (Exam Strategy)</h4>
<ol>
<li><b>画图练习</b>:</li>
</ol>
<ul>
<li><p>找一个简单的电子设备（如微波炉或电子表），尝试用 <b>STN</b> 画出它的操作逻辑。</p>
</li>
<li><p>然后尝试加入一个并发功能（比如一边倒计时一边设置火力），改用 <b>State Chart</b> 画。</p>
</li>
</ul>
<ol>
<li><b>概念辨析</b>:</li>
</ol>
<ul>
<li><p>如果题目问“如何解决 STN 的状态爆炸问题？”，答案是 <b>Petri Nets</b> 或 <b>State Charts (Concurrency)</b>。</p>
</li>
<li><p>如果题目问“如何让图表更整洁、支持模块化？”，答案是 <b>State Charts (Hierarchy)</b>。</p>
</li>
</ul>
<p><b>Next Step</b>:</p>
<p>如果你需要练习，我可以给你描述一个具体的界面逻辑（比如一个带“播放/暂停”和“随机播放开关”的音乐播放器），让你试着构思它的 State Chart，然后我给出标准参考答案。是否需要？</p>
</div>
</div>

# Math

