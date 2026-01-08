---
title: TNN
slug: DyrnwQs57iVgXkkXv06cIEjKnkf
sidebar_position: 1
---


# TNN

## Motivation, Why? 

### Interdisciplinary Interest in Neural Networks

不同学科出于不同目的研究神经网络：

---

### Neural Networks as a “Hot Topic”

- 在过去的 5–7 年中，神经网络技术（尤其是深度学习和卷积神经网络）在科学界和公众中广泛传播。Most of these applications are based on the neural network  paradigms： Deep learning and Convolutional Neural Networks
- 这些技术推动了图像识别、语音识别、自然语言处理等领域的突破。
- 因此，神经网络成为当前学术界和工业界的研究热点。

---

### Biological Systems as Inspiration

生物信息处理系统展现出惊人的能力：

-  execute tasks in real time：
    - Pattern Recognition
    - Speech Recognition & Production
    - Face Recognition
    - 避障与轨迹规划（Obstacle Avoidance & Trajectory Generation）
    - 控制任务（Control Tasks）

-  show the property：
    - Learning
    - Generalization
    - 自组织（Self-organization）
    - 损伤容忍（Lesion Tolerance）

---

### Limitations of von Neumann Architecture

- Today's computer architectures are still mostly based on the  von-Neumann-principle, good on computing tasks
- 但在处理非结构化数据、感知任务等方面表现不佳。
- theory claims, that the essential difference  between nowadays computers and biological neural  networks are the underlying principles that govern the  structure

---

### Desired Properties from Biology

we would like to have as well for our technical  devices:：

## Biological background  

### Discovery of the Brain as a Neural Network

since the last part of the 19th century human found that the brain is a highly structured network of single cells (neurons) that  are communicating among each other. 

Discover:

1. The first functional classes of neurons
2. single  functional regions of the brain 
3. The Brain as the Central Processing Unit
    - The most prominent part of the central nervous system is the brain.
    - The central nervous system is a highly structured network of  interconnected processing units (neurons)
    - The structure of a single neuron is simple but each neuron of it's own is a  complicated and powerful computing unit
    - A simplified neuron is  the basis for the development of the technical neurons used in most technical neural networks

4. The shape aligned with the functionality of  neurons
    - Pyramid cells（金字塔细胞）
    - Purkinje cells（浦肯野细胞）：树状结构复杂，位于小脑

### Important rule borrowed from biological role model

1. A lot of simple, interconnected processing units(neurons)
2. Modifiable, plastic connections(synapses, synaptic weighs)
3. Mapping from an input vector to a scalar output value
4. Nonlinear transfer function

## History of technical neural network research  

五个历史阶段：

1. The threshold-ed binary neural switching element proposed by McCulloch is the beginning of technical neuron networks
2. Quiet years
3. In 1980s, the Renaissance ended the “quiet years” , and a lot of neural paradigms were published

- MLP
- BP
- RBF
- ...

### Application

Neural networks and neural approaches can be found in a lot of  applications (academic and industrial):

- Character recognition  
- Signature verification  
- Face recognition 
- ...

Mainly 2 application areas:

1. Function approximation, Regression: the NN has the task to represent a goal  function (mostly continuous) as precisely as possible. 
2. Pattern recognition, Classification: the NN is mapping the input to a discrete set  of goal values. E.g.:binary classification  {O,I}, {-1,+1}, {OK, not OK}  or 1 out of M classification {0,1,2, … ,9}, {A,B,C, … Z}, ... 

### Three paradigms of learning

1. Supervised learning

The network learns from labeled examples: input-output pairs.

1. Reinforcement learning

The network learns by <b>trial and error</b>, guided by rewards.

1. Unsupervised learning

The network learns patterns <b>without labeled outputs</b>.

## Technical neural network paradigms 

### Neuron by McCulloch & Pitts 1943

Neuron model as logical binary switching elements with 2 states 0 and 1 

Input: a string of binary and each value has a weight of +1/-1

Output: sum up the wighted value, and compare it with a threshold value, if it's bigger then the neuron fires else remains calm

These neurons working together can implement the AND /NOT function, thus can realise all boolean functions

<img src="/assets/J8BcbMjXJorNgjxWTvicZnvZnEU.png" src-width="1166" src-height="466" align="center"/>

This model is the first mathematical model of a neuron. It is a binary threshold unit and has been the basic element for a lot of developments:

- Rosenblatt's Perzeptron (1957-1958
- ADALINE (1960), MADALINE: Widrow & Hoff  
- Lernmatrix: K.Steinbuch, (1961)  
- Perzeptrons (1963-1969
- ...

### Hebbian learning rule 1949

This first answers the question of how biological neural networks can learn or adapt.

He postulated the Hebbian learning rule that synaptic efficiency will increase if the pre-synatic side and the post-synatic side will be active at the same time window.

This rule is still the basis of most learning paradigms we have today.

> Cells that fire together, wire together.

$Δw_{nm}=h⋅y_m⋅x_n$ 

- h is learning rate  
- $Δw_{nm}$is the change of weigh between neuron m and n

### Perceptron, Frank Rosenblatt 1958

Inspired by the <b>structure of the biological retina【视网膜】</b>

Rosenblatt's perceptron is a layered structure 

- an array of sensors
- an intermediate layer of simple feature detectors(threshold units) 
- an output layer of threshold-units

It is able to perform <b>complex classification tasks</b>, and demonstrate biologycal properties such as generalization, lesion  tolerance, and learning.

The multi-layer perceptron structure is still basis for a lot of neural network paradigms today.

Rosenblatt 感知器（1958）：三层结构，具备学习与泛化能力

Widrow & Hoff 的 ADALINE（1960）：线性神经元 + LMS 学习规则

### Perzeptron

可实现线性可分的布尔函数（如 AND, OR）

无法实现 XOR → 需要多层结构

引入 BIAS 概念简化阈值处理

感知器可将输入空间映射为输出空间，实现分类或函数逼近

[Exercises sheet 1](/DyrnwQs57iVgXkkXv06cIEjKnkf/JKUfwrJdiivoFdkfgChcUoOknPc)

# L2

> Use these prompts to test your memory of the derivation.
> 1. <b>The Goal:</b> What is the "Error Function" $E$? How do we get the "Global Error" $G$? 
> 2. <b>The Method:</b> What is the "Error Surface"? What is "Gradient Descent"? 
> 3. <b>The Formula:</b> The gradient gives the <em>steepest ascent</em>. What formula do we use to <em>descend</em>? What does the $\eta$ (eta) symbol represent? 
> 4. <b>The Tool:</b> What mathematical rule is the key to solving $\frac{\partial E}{\partial w}$ for a multi-layer network?
> 5. <b>Output Layer (m):</b>
    - To find $\Delta w_{hm}$, we must solve $\frac{\partial E}{\partial w_{hm}}$.
    - What is the 3-part chain to solve this? ($\dots \rightarrow \dots \rightarrow \dots \rightarrow w_{hm}$)
    - What is the final $\delta$-rule for an output neuron, $\delta_m$? 
> 6. <b>Hidden Layer (h):</b>
    - To find $\Delta w_{gh}$, we must solve $\frac{\partial E}{\partial w_{gh}}$.
    - What is the 4-part chain to solve this? ($\dots \rightarrow \dots \rightarrow \dots \rightarrow \dots \rightarrow w_{gh}$)
    - What is the <em>hardest part</em> of this chain? (Hint: How does $out_h$ affect $E$?) 
    - How do we solve this "hard part"? What does the $\sum$ (summation) represent? 
    - What is the final $\delta$-rule for a hidden neuron, $\delta_h$? 
> 7. <b>The Algorithm:</b> What are the 7 steps of the Backpropagation algorithm? (Acronym: <b>I.P.F.C.B.U.R.</b>) 

## The Goal: Error Minimization

- Error Function (per pattern p): We measure the "mistake" for a single training pattern p using a sum-of-squares error function. The $\frac{1}{2}$ is a mathematical convenience that simplifies the derivative.
    $$^{p}E = \frac{1}{2}\sum_{m=1}^{M}(^{p}\hat{y}_{m} - ^{p}y_{m})^{2}$$
    - The P is for a specific, single training pattern $p$
    - $^{p}\hat{y}_{m}$is the teacher value, the desired output for pattern $p$
    - M is the number of neurons in the output layer.  So the network's output is an M-dimensional vector, which means the real output and desired output is like [$y_1,y_2,y_3...y_M$] ,for each neuron in output layer, neuron $i$ produces a $y_i$ 

- <b>Global Error (G):</b> The total error across all `P` training patterns is the sum of all individual pattern errors. 

$$G = \sum_{p=1}^{P} {}^{p}E$$

- <b>Error Surface:</b> This is the central concept. The Global Error $G$ can be visualized as a high-dimensional landscape or "surface," where the "altitude" at any point is determined by the current values of all the weights $W$ in the network. 
- <b>The Objective:</b> Our goal is to find the set of weights $W$ that corresponds to the lowest possible altitude (a "minimum") on this error surface. 

## The Method: Gradient Descent

- <b>"Skiing Downhill":</b> We find the minimum of the error surface by "skiing downhill" from our starting position. 
- <b>The Gradient (</b>$\nabla$<b>):</b> The gradient ($\nabla_w G$) is a vector that points in the direction of the <b>steepest uphill slope</b> at our current position. 
- <b>The Learning Rule:</b> To go <em>downhill</em>, we must take a step in the <b>opposite</b> (negative) direction of the gradient. 

$$\Delta w \sim -\nabla_{w}G$$

- <b>The Learning Rate (</b>$\eta$<b>):</b> We introduce a constant $\eta$ (eta), the <b>learning rate</b>, to control how large our step ($\Delta w$) is. This changes the "proportional to" ($\sim$) into an equals sign. 

$$\Delta w = -\eta \nabla_{w}G$$

- <b>For a single weight </b>$w_s$<b>:</b> The change for one weight is proportional to the negative partial derivative of the error with respect to that weight. 

$$\Delta w_{s} = -\eta \frac{\partial^{p}E}{\partial w_{s}}$$

# 
## The Backpropagation Formulas (The $\delta$-Rule)

We derived the solution for $\frac{\partial^{p}E}{\partial w_{s}}$ by using the chain rule. This process led to a clean, two-part learning rule:

### . The General Update Rule (The $\delta$-Rule):

The change for any weight $w_{ij}$ (connecting neuron $i$ to neuron $j$) is:

$$\Delta w_{ij} = \eta \cdot \delta_j \cdot \tilde{out}_i$$

- $\eta$ = Learning Rate
- $\delta_j$ = The "error signal" of the <b>destination</b> neuron $j$.
- $\tilde{out}_i$ = The output of the <b>source</b> neuron $i$, also the input of neuron $j$

> $$\Delta w_{ij} = -\eta \frac{\partial ^{p}E }{\partial w_{ij}}$$
> 1. First chain rule:
> $$\Delta w_{ij} = -\eta(\frac{\partial ^p E}{\partial ^p net_j}) \cdot (\frac{\partial ^p net_j}{\partial w_{ij}})$$
> $$=-\eta(\frac{\partial ^p E}{\partial ^p net_j})\cdot ^pout_i$$
> $net_j$is calculated by the first step: weighted sum
> Then it will be passed to a transfer function
> $$net_j = \sum_{k}{}w_{kj}\cdot out_k$$
> Only when $k=i$, the item is related to $w_{ij}$,so :
> $$\frac{\partial ^p net_j}{\partial w_{ij}} = \frac{d (w_{ij}
\cdot out_i)}{d w_{ij}}=^pout_i$$
> 1. using $\delta = -\frac{\partial ^p E}{\partial ^p net_j}$, so we have the $\delta$-rule

### . The Error Signal ($\delta$) Formulas:

The key to the algorithm is calculating $\delta_j$. The formula is different depending on where the neuron is.

#### For an OUTPUT Layer Neuron ($m$):

We can calculate its error $\delta_m$ by directly comparing its output $y_m$ to the "teacher" value $\hat{y}_m$.

$$\delta_m = (^{p}\hat{y}_m - ^{p}y_m) \cdot f'(^{p}net_m)$$

- $(\hat{y}_m - y_m)$ = The actual error (teacher - output). 
- $f'(net_m)$ = The derivative of the activation function at that neuron. 

> Start from $\delta_m = -\frac{\partial ^pE}{\partial ^p net_m}$
> 1. First chain rule
> $$\frac{\partial ^pE}{\partial ^p net_m}  = \frac{\partial ^pE}{\partial y_m} \cdot \frac{\partial y_m}{\partial net_m}$$
> 1. $y_m = f(net)$ so $\frac{\partial y_m}{\partial net_m} = f'(net_m)$
> 2. From the definition of $^pE = \frac{1}{2} \cdot \sum_{j=1}^{M} (^p \hat y_j-^py_j)^2$,only when $j=m$ , it has meaning, so 
> $$\frac{\partial ^pE}{\partial y_m} = \frac{d \frac 12 \cdot (^p \hat y_m-^p y_m)^2}{dy_m}=^p \hat y_m-^p y_m$$

#### For a HIDDEN Layer Neuron ($h$):

We have no "teacher" value for a hidden neuron. We must calculate its error $\delta_h$ by looking at the errors from the next layer ($\delta_k$) and propagating them backward.

$$\delta_h = \left( \sum_{k=1}^{K} \delta_k \cdot w_{hk} \right) \cdot f'(^{p}net_h)$$

- $\sum_{k=1}^{K} \delta_k \cdot w_{hk}$ = The <b>sum</b> of all error signals $\delta_k$ from the next layer, each multiplied by the weight $w_{hk}$ that connects $h$ to $k$. 
- $f'(net_h)$ = The derivative of the transfer function at that hidden neuron. 

> We start from $\delta_h = -\frac{\partial^{p}E}{\partial^{p}net_h}$
> 1. Using chain rule
    $$\frac{\partial^{p}E}{\partial^{p}net_h} = \frac{\partial^{p}E}{\partial^{p}out_h} \cdot \frac{\partial^{p}out_h}{\partial^{p}net_h}$$
> 2. $$\frac{\partial^{p}out_h}{\partial^{p}net_h} = f'(net_h)$$
> 3. The output $out_h$ affects the total error $E$ <em>indirectly</em> because it is an input to <em>all</em> $K$ neurons in the <em>next</em> layer. We must sum up all these contributions.
    $$\frac{\partial^{p}E}{\partial out_h} = \sum_{k=1}^{K} \left( \frac{\partial^{p}E}{\partial net_k} \cdot \frac{\partial net_k}{\partial out_h} \right)$$
> 4. $$\frac{\partial net_k}{\partial out_h} = \frac {d (out_h\cdot w_{hk})}{d(out_h)}=w_{hk}$$
> so:
> $$\frac{\partial^{p}E}{\partial out_h} = \sum_{k=1}^{K} \left( \frac{\partial^{p}E}{\partial net_k} \cdot w_{hk} \right)$$
> 1. $\frac{\partial^{p}E}{\partial net_k}=\delta_k$ so:
> $$\delta_h = \left( \sum_{k=1}^{K} \delta_k \cdot w_{hk} \right) \cdot f'(^{p}net_h)$$

## The Full Backpropagation Algorithm (The 7 Steps)

This is the complete learning loop that combines all the concepts above:

1. <b>I</b>nitialization: Set all weights $w$ to small, random values.
2. <b>P</b>ick a pattern: Select one training sample ($^{p}X$, $^{p}\hat{Y}$) from your dataset.
3. <b>F</b>orward: Feed $^{p}X$ into the network and calculate all $net$ and $out$ values, layer by layer, until you get the final output $^{p}Y$.
4. <b>C</b>ompare: Use the final output $^{p}Y$ and the teacher $^{p}\hat{Y}$ to...
5. <b>B</b>ackward:
    - ...calculate the error signals $\delta_m$ for the <b>output layer</b>.
    - ...use the $\delta_m$ signals to calculate the error signals $\delta_h$ for the <b>hidden layer(s)</b>.

6. <b>U</b>pdate: Use the $\delta$ signals from all layers to calculate $\Delta w_{ij}$ for all weights, and add this change to them: $w_{ij} = w_{ij} + \Delta w_{ij}$.
7. <b>R</b>eady?: Check if your "stop criterion" is met (e.g., global error $G$ is low enough, or you've run for 1000 epochs).
    - <b>No:</b> Go back to Step 2 and pick a new pattern.
    - <b>Yes:</b> Stop. The network is trained.

# L4

## initialization

1. 
- Global minimum 
- suboptimal local  minimum (wrong  valley )

1. Symmetry breaking 

Can't have same weights

set initial weight distributed -0.1~0.1 /0.5

## EFfect of the error surface 

steep valley (small change have big effect )

Isolated point (smooth function so hard to find this point )

FLat plateau (gradient close to 0, got stuck)

Fissured surfaces

### Local minima

Some way to deal with local minima

1. several runs/muti-start method (different starting points )
2. Large learning rate (step out local minima)
3. 
## Learning Curve

 The learning curve is the graph showing the development 
of the error (the single error E, or the global error G) with 
respect to time, or the number of patterns presented.

1. smoothly decreasing
2. stepped
3. noisy/ jittery because single step mode

# BP Extension

## Momentum

## Weight Decay

## Pruning

# L5

### P=K

Let's break down exactly how we go from a single messy summation formula to that clean, elegant matrix equation on <b>Page 55</b>.

1. The Starting Point: One Pattern, One Output

First, look at the basic formula for a single pattern $p$ and a single output neuron (simplification $M=1$) on <b>Page 47</b>.

The network output $y$ for pattern $p$ is the sum of all the weighted RBF responses:

$$^p\hat{y} = \sum_{k=1}^{K} w_{k1} \cdot ^pr_k$$

- $^p\hat{y}$ is the target value for pattern $p$.
- $w_{k1}$ is the weight for the $k$-th RBF neuron.
- $^pr_k$ is the response of the $k$-th RBF neuron to pattern $p$.

1. Writing it Out for ALL Patterns (The "Long" Way)

Now, imagine we have $P$ different training patterns. We need this equation to be true for <b>every single one</b> of them.

As shown on <b>Pages 50–52</b>, we can write them as a list of separate linear equations:

- <b>Pattern 1:</b> $\hat{y}_1 = r_{1,1}w_1 + r_{1,2}w_2 + \dots + r_{1,K}w_K$
- <b>Pattern 2:</b> $\hat{y}_2 = r_{2,1}w_1 + r_{2,2}w_2 + \dots + r_{2,K}w_K$
- ...
- <b>Pattern P:</b> $\hat{y}_P = r_{P,1}w_1 + r_{P,2}w_2 + \dots + r_{P,K}w_K$

Notice a pattern? We have a column of $\hat{y}$'s on the left, a block of $r$'s in the middle, and a repeating column of $w$'s.

1. The Matrix Transformation (Page 55)

Mathematicians are lazy (efficient!). Instead of writing that long list, they pack the numbers into grids (matrices) (1).

- The Target Vector ($\hat{Y}$):

We stack all the target values into a single column vector.

$$\hat{Y} = \begin{bmatrix} \hat{y}_1 \\ \hat{y}_2 \\ \vdots \\ \hat{y}_P \end{bmatrix}$$

- The Weights Vector ($W$):

We stack all the unknown weights into a single column vector.

$$W = \begin{bmatrix} w_1 \\ w_2 \\ \vdots \\ w_K \end{bmatrix}$$

The RBF Matrix ($R$):

This is the most important part. We take all the $r$ values (the response of every neuron to every pattern) and arrange them into a grid.

$$R = \begin{bmatrix} r_{1,1} & r_{1,2} & \dots & r_{1,K} \\ r_{2,1} & r_{2,2} & \dots & r_{2,K} \\ \vdots & \vdots & \ddots & \vdots \\ r_{P,1} & r_{P,2} & \dots & r_{P,K} \end{bmatrix}$$

# 
1. The Result

Now, using the rules of matrix multiplication (row times column), that massive list of equations collapses into:

$$\hat{Y} = R \cdot W$$

This is the equation shown on <b>Page 55</b>.

The Catch:

For the approximation case ($P > K$), as noted on Page 60, the matrix $R$ is a tall rectangle (more rows than columns).

According to Page 61, since the standard inverse $R^{-1}$ does not exist for rectangular matrices, what specific "extended" inverse do we use instead? (2)

### P&gt;k

You nailed it again! 🔨 It is indeed the <b>Moore-Penrose Pseudo-Inverse</b> (often called MPPI or just the pseudo-inverse).

This is the mathematical "magic trick" that lets us solve the equation even when the matrix isn't square.

Here is exactly how it works, according to <b>Page 62</b>:

1. The Formula for $R^+$

Since we can't invert the rectangular matrix $R$ directly, we multiply it by its transpose ($R^T$) to <em>force</em> it to become square.

- $R$ is size $(P \times K)$
- $R^T$ is size $(K \times P)$
- Multiplying $R^T \cdot R$ creates a square matrix of size $(K \times K)$.

Because this new matrix is square, we <b>can</b> invert it (usually). The formula for the pseudo-inverse $R^+$ basically packages this whole operation into one symbol:

$$R^+ = (R^T \cdot R)^{-1} \cdot R^T$$

1. Calculating the Weights (Page 64)

Now we just plug $R^+$ back into our original weight equation:

$$W = R^+ \cdot \hat{Y}$$

This gives us the <b>optimal</b> weights. When we say "optimal" here, we mean it minimizes the squared error (Least Mean Squares) between what the network outputs and what the teacher wants.

---

So, we have two ways to train this network:

1. <b>Analytic Solution (MPPI):</b> Do all this matrix math and get the exact answer in one shot.
2. <b>Iterative Learning (Gradient Descent)</b><b>:</b> Slowly adjust the weights step-by-step (like in standard Backpropagation), as shown on <b>Page 67</b>.【faster,preciser but no direct math solution and the same problem as MLP】

---

Pros and cons

- Advantages: a mathematically exact calculation and has constant and known time requirements (you know exactly how many operations the matrix math will take).
- Disadvantages: computationally expensive (calculating inverses for huge matrices takes a lot of power) and numerically unstable for large matrices.

# ! BP还是有不太会的

数学推导再来一遍

# L8 ART & Hopfield

## ART

### Definition and types

definition of ART : a family of neural network paradigms, developed by  G.Carpenter  and S.Grossberg since 1976.

> ART; Adaptive Resonance Theory is a family of neural  network paradigms that have been developed by G.Carpenter  and S.Grossberg since 1976.

Members of ART network family:

- ART 1 1976 and 1987,  
- ART 2 1987, 
- ART 2A-2C 1991,  
- ART 3 1990,  
- ART MAP 1991, Fuzzy ART 1991,  
- Fuzzy ART MAP 1992.  

### motivation and ability

Motivation for ART-1: aim to overcome the <b>stability-plasticity dilemma</b>( competitive learning paradigms has such problem)

ability of ART networks:【无监督】

- Pattern recognition【classification任务，但是不是监督式 ART 会把输入模式映射到 F2 层的某个神经元（类别原型）。】
- Content-addressable memory
- <b>Unsupervised</b> learning【ART1 完全不需要标签。 它通过“共振（resonance）”机制决定是否创建新类别。】
- Clustering 【ART 的 F2 层神经元本质上就是聚类中心。 每个 F2 神经元代表一个 cluster。】

### ART-1

- 2 layers F1 F2
    - F1 Comparison layer
        - Contains N neurons
        - Receives binary input vector X(dim = N)
        - Produces comparison signals $s_n$
    - F2 Recognition layer
        - Contains M neurons, each neuron represents a category
        - Produces recognition responses $r_m$
        - Outputs a one‑out‑of‑M winner vector Y(F2 使用 Winner-Takes-All（WTA）：响应最大的神经元 = 1;其他所有神经元 = 0)

- 2 weight matrices
    - Forward weights W
        - Real‑valued $W_{nm}$
        - Carry signals from F1 → F2
    - Backward weights V
        - Binary $V_{nm}$
        - Project from F2 → F1

- 2 layers represents short-term memory STM or working-memory
- ART-1  is a binary network(input 0/1)

<img src="/assets/SPgXbb0JgooIkexVfBfcukSAnNv.png" src-width="934" src-height="398" align="center"/>

procedure：

1. F1 receive binary input $X_n$
    1. Each F1 neuron n receives one component xn
    2. No transformation is applied
    3. output:  $s_n$ =  $X_n$

2. F1 connect with F2 via W
    1. W is real‑valued, size N×M
    2. Each neuron connect with all neurons of F2 with weight  matrix W

3. F2 receive from F1
    1. F2 neuron j receives  $x_n*w_{nj}$from F1 neuron n
    2. Each neuron j in F2 will receive $r_j=∑_{n=1}^N x_n w_{nj}$
    3. Select one winner that is largest, output $Y_m$ only one dim is 1 else 0【WTA winner takes all】

<img src="/assets/Jm4RbQTN0oEWNqxzmkNcVLyTnyd.png" src-width="938" src-height="430" align="center"/>

1. F2 project back to F1 via V
    1. F2 send back to F1 by weight matrix V(binary)
    2. For F2 neuron j , send out  $Y_j$(0 or 1) *  Vji to neuron i in F1【相当于 选中的那个F2 neuron发送出去的才是有效的】

2. F1 receive returns from F2
    1. Each neuron will receive  $net_n$(dim = n)
    2. For neuron i  $net_i=∑_{m=1}^Mv_{mi}y_m$
    3. Only $y_j$ is 1 so   $net_i=v_{ji}$
    4. Backward projection 将 F2 胜者神经元 j 的 prototype（V 的第 j 行）完整地投射回 F1，使得 F1 收到的向量正是V的第j行 就是WTA里面那个胜利者对应的prototype

3. F1 neuron computes new output 
    每个 F1 神经元 n 有三个输入：
    1. 输入向量xn
    2. 从 F2 返回的类别模版 $net_n=v_{jn}$
    3. 控制信号 gain<b> </b>g1
    $$s_n =
\begin{cases}
1, & \text{if } x_n \cdot \text{net}_n = 1 \\
1, & \text{if } x_n \cdot g_1 = 1 \\
1, & \text{if } \text{net}_n \cdot g_1 = 1 \\
0, & \text{otherwise}
\end{cases}$$
    2/3 rule
    解释：
    - <b>如果输入和模板都为 1 → 保持 1</b>
    - <b>如果输入为 1 且 g1 激活 → 1</b>
    - <b>如果模板为 1 且 g1 激活 → 1</b>
    - 否则输出 0

4. New F1 output
    1. Send the new s' to F2
    2. Repite the cycle until resonance
    这就是所谓的 <b>two‑third rule</b>（三个条件中满足任意一个即可）。

## Hopfield

### 动机与科学背景 (Motivation)

Hopfield 网络在 1982 年由 John J. Hopfield 提出，它的出现是神经网络研究重新回到国际舞台的“发令枪” (1)(1)(1)(1)。讲义指出其灵感来源于三大领域：

- <b>神经生物学</b>：模拟生物神经元的二值发放状态（Firing 或 Not Firing） (2)(2)(2)(2)。
- <b>计算机科学</b>：旨在实现<b>内容可寻址存储（Content-addressable memory, CAM）</b> (3)(3)(3)(3)。
- <b>统计物理学</b>：借鉴了磁性材料（自旋玻璃 Spin-Glasses）的特性，利用原子自旋（北极/南极）的二值状态进行信息处理 (4)(4)(4)(4)。

---

### 核心任务 (Task)

文档明确了 Hopfield 网络的两个主要用途：

1. <b>联想记忆（Associative Memory）</b>：
    - 这是一种“以内容为索引”的存储方式 (5)。
    - 即使提供的是原始信息的碎片或残缺部分，系统也能检索并还原出完整的原始信息（例如：输入图片的一部分，系统恢复完整图片） (6)。

2. <b>解决优化问题</b>：利用其能量最小化的特性来寻找问题的最优解 (7)。

---

### 数学结构 (Structure)

讲义详细定义了硬件和参数的设置规则：

- <b>神经元定义</b>：
    - 由 $K$ 个完全相同的二值神经元组成。
    - 状态 $x_k \in \{-1, +1\}$ 。
    - 整个网络的状态是一个 $K$ 维二进制向量 $X$ (10)。

- <b>权重矩阵 </b>$W$<b> 的三大铁律</b>：
    - <b>全连接</b>：每个神经元 $i$ 与除自己外的所有神经元 $j$ 相连 。
    - <b>对称性</b>：必须满足 $w_{ij} = w_{ji}$ 。
    - <b>无自反馈</b>：对角线元素必须为零，即 $w_{ii} = 0$ 。

---

### 动力学与更新规则 (Functionality: Dynamics)

这是网络如何“运行”的核心逻辑。

#### 更新公式

每个神经元 $k$ 的下一个状态 $x_k(t+1)$ 取决于加权总和与阈值 $\theta_k$ 的比较 ：

- <b>标准规则</b>：如果加权和 $z > \theta_k$，则 $x_k = +1$；否则为 $-1$ 。
- <b>变体规则</b>：如果加权和正好等于阈值$\theta_k$，神经元保持前一个状态 $x_k(t)$ 不变 。

#### 异步更新 (Asynchronous Update) —— 文档强调这是标准操作

- <b>机制</b>：在每一个更新步骤中，<b>只选择一个</b>神经元 $j$ 进行状态更新。
- <b>反馈效应</b>：下一个神经元的计算会“看到”这个已经改变的状态，这种反馈推动了系统的演化 。
- <b>顺序</b>：神经元的更新序列应该是随机的，且每个神经元在每一轮（时间步 $t$）中应恰好被选中一次 。

#### 能量函数 (Energy Function)

文档引入了能量 $E$ 的概念来证明收敛性 212121：

$$E = -\frac{1}{2}\sum_{i}^{K}\sum_{j}^{K}w_{ij}x_{i}x_{j} + \sum_{k}^{K}\theta_{k}x_{k}$$

- <b>收敛证明点</b>：在对称权重和异步更新下，每一次更新都会使 $E$ 减小或保持不变。
- <b>最终态</b>：系统最终会停在一个稳定的最终模式 $X^*$ 上 。

---

### 学习与训练 (Learning)

学习的过程就是通过设置权重 $w_{ij}$，在能量曲面上“挖坑”（创造极小值点），使训练模式处于坑底 。

1. <b>存储单个模式</b>：
    - <b>逻辑</b>：如果两个神经元在模式中状态相同，权重应为正；不同则为负 。
    - <b>公式</b>：$w_{ik} = x_i \cdot x_k$。

2. <b>存储 </b>$P$<b> 个模式</b>：
    - <b>公式</b>：$w_{ik} = \sum_{p=1}^{P} x_i^p \cdot x_k^p$ 。
    - <b>实现方式</b>：将 $P$ 个单模式生成的矩阵进行累加。

---

### 局限性与应用 (Limitations & Applications)

- <b>存储容量限制</b>：最大存储数量 $P_{max} \approx 0.138 \times K$。
- <b>操作模式</b>：
    - <b>自动联想模式 (Autoassociator)</b>：将模式与自身关联（对称矩阵） (30)。
    - <b>异联想模式 (Heteroassociator)</b>：将模式 $p$ 与模式 $q$ 关联（矩阵不再对称），可用于学习序列。

- <b>实际应用</b>：模式识别、去噪、字符识别，甚至是量子计算的相关研究。
- <b>硬件实现</b>：包括 80 年代的数字稀疏编码、自旋玻璃模拟以及光学实现方案。

# L9 Recurrent MLPs & Neocognitron

## Recurrent MLPs

### Motivation

1. 为什么我们需要“递归神经网络（Recurrent Networks）”。

三种典型的神经网络拓扑结构

讲义想表达的核心：

> <b>现实世界很多任务是时间相关的（序列），前馈网络无法处理“过去的信息”，所以需要 Recurrent Networks。</b>

1. 什么是 Recurrent MLP？

讲义说：

> 一种特殊的递归网络，其本质是 MLP（多层感知机），但加入了少量显式的反馈连接。

也就是说：

- 结构上仍然是 MLP（输入层 → 隐藏层 → 输出层）
- 但加入了从后层返回前层的连接（带时间延迟）
- 这样网络就能“记住过去”

1. MLP structure 回顾

MLP 的三个层次：

1. Backpropagation（回顾）

权重更新公式：

$$Δw_ij=η⋅δ_j⋅out_i$$

δ 的计算：

讲义在这里复习 BP，是为了后面讲：

> <b>普通 BP 不能直接用于 Recurrent MLP，因为反馈会导致无限反向传播。</b>

### Recurrent MLP

1. Recurrent MLP 的特点：
    - 在普通 MLP 的基础上<b>加上反馈连接feedback connections.</b>
    - 反馈来自“后面的层” → “前面的层”
    - 反馈信号带有<b>时间延迟</b>（t → t+1） time delay 
    - 这样网络就能“记住过去的输出或隐藏状态”

2. 为什么要有时间延迟 Δt？

讲义说：

> feedback lines typically have an explicit time delay … suspend the transmission by one time step t → t+1

意思是：

- 反馈信号不是立即回到网络
- 而是延迟一个时间步
- 这样网络在 t+1 时刻能看到 t 时刻的输出

这就是 RNN 的“记忆”。

1. <b>两种典型的 Recurrent MLP 结构</b>

讲义说：

> The two typical MLP architectures with feedback connections are:
<b>Jordan-Networks</b> and <b>Elman-Networks</b>

<b>They differ in the way the feedback connections are located.</b>

它们的区别在于：

- Jordan：反馈来自 <b>输出层</b>
- Elman：反馈来自 <b>隐藏层</b>

#### Jordan Network——反馈来自输出层

Jordan 网络结构：

- 输出层 Y(t) → 反馈（weighted with g） → <b>context neurons（上下文神经元）</b>
- context neurons 存储过去的输出 Y(t−1)，weighted with g，通常是1
- context neurons 的输出作为<b>额外输入additional input </b>传给隐藏层【相当于与输入层位置一样 增强输入 传给隐藏层】
- context neuron 的输出也会反馈给自己（自反馈），权重是 λ（通常是0）不保留更久的记忆，只记住上一时刻。
- context neuron 的输入:$c_m(t)=g⋅y_m(t−1)+λ⋅c_m(t−1)$
- context neuron 的输出 = 它当前的值 c(t)
- 输入层 → 隐藏层的权重数量是：
    - (1+N+M)×H
    - 1 = bias
    - N = 输入维度
    - M = context neurons 数量
    - H = 隐藏层神经元数

```text
输入层： X(t) = [x1(t), x2(t), ..., xN(t)]
context： C(t) = g * Y(t-1)<-|  
隐藏层： H(t)                 |
输出层： Y(t)-----------------
```

#### Elman

1. Elman Network 到底是什么？

> <b>Elman 网络 = 普通 MLP + 把隐藏层的输出 H(t) 反馈到隐藏层（通过 context neurons），带时间延迟 Δt。</b>

也就是说：

> <b>隐藏层有自己的“记忆输入”。</b>

1. 每一层（除了最后一层）都有 context neurons（上下文神经元）：

- 它们存储上一时刻的隐藏层输出 H(t−1)
- 然后把这些值作为额外输入送回隐藏层
-  对隐藏层来说：
    - 隐藏层有 H 个神经元
    - 就会有 H 个 context neurons

因为每个隐藏神经元都需要一个对应的记忆单元。

1. 和 Jordan 不同：
    - <b>Elman 没有 λ 自反馈</b>
    - context neurons 只存储上一时刻的隐藏层输出
    - $$c_h(t)=h_h(t−1)$$

Jordan 有 λ，Elman 没有。

#### <b>Jordan vs Elman</b>

#### Recurrent MLPs（递归多层感知机） 的运行模式（operation modes）

> <b>Recurrent MLPs（递归 MLP）和普通前馈 MLP 不一样，它们的输出不仅取决于当前输入，还取决于过去的输出或状态，因此具有“动态行为”。dynamical behavior</b>

#### “<b>dynamical behavior</b>”？

因为：

- 普通 MLP 是静态映射：
 [ $X(t) \rightarrow Y(t)$ ] 每次输入一样，输出就一样。
- 递归 MLP 是动态映射：
 [ $Y(t) = f(X(t), Y(t-1))$ ] 即使输入 $X(t)$ 不变，输出 $Y(t)$也可能变化，因为它还依赖过去的输出。

---

1. Jordan 网络的特殊行为（讲义重点）

讲义反复强调：

> 如果是一个 <b>Jordan 网络</b>，权重固定（不学习），输入不变 $X(t+1) = X(t)$，它仍然可以生成一个<b>无限的输出序列 </b>$Y(t)$。

这说明：

- 网络有“记忆”
- 即使输入不变，输出也能变化
- Jordan 网络可以生成时间序列、状态序列

---

1. 初始化过程

运行 Jordan 网络时：

1. <b>初始化 context neurons</b>  
 比如： [ $c_1(t_0) = 0.0,\quad c_2(t_0) = 0.0$ ]
2. <b>输入第一个模式</b>$X(t_0)$
 网络计算出第一个输出 $Y(t_0)$
3. <b>输出 </b>$Y(t_0)$<b> 被反馈到 context neurons</b>  
 在下一时刻 $t_1 = t_0 + 1$，context neurons 的值变了
4. <b>隐藏层接收到新的 context 输入</b>  
 所以即使 $X(t_1) = X(t_0)$，输出 $Y(t_1) \ne Y(t_0)$

这就是“动态行为”。

---

#### 四种运行模式（operation modes）

讲义后面列出了 <b>四种运行模式</b>，非常重要：

Mode 1:  Input is constant, network output converges to a const. value.  

Mode 2:  Input is varying with time, network output converges.  

Mode 3:  Input is constant, network output <b>generates a sequence of states,  values or a continuous time series</b>.  

Mode 4:  Input is varying with time, network output generates a sequence of  states, values or a continuous time series.

### Train & Learning

1. <b>循环 MLP（Jordan / Elman 网络）必须处理时间序列数据。</b>

因此：

- 输入 X(t) 必须是随时间变化的序列  X(t) is <b>time  dependent data</b>; typically it is a complete<b> time series</b>
- 如果是<b>监督学习</b>，教师信号 Y(t) 也必须是时间序列<b> time  dependent data</b>
- <b>无监督或强化学习</b>时，必须明确“网络输出到底代表什么” what the result of the networks shall be.

换句话说：
<b>循环网络不是对单个样本做映射，而是对整个时间序列建模。</b>

1. Why not Backpropagation

> <b>经典 BP 不能用于循环网络，因为反馈连接会导致无限反向传播。</b>

原因：

- 循环网络内部有 feedback（例如 y(t−1) → context → 下一步输入）
- 如果直接反向传播，误差会沿着循环结构无限回溯→ <b>梯度永远不会停止传播</b>

<b>feedback loop would cause an infinite back-propagation</b>

三种常见的循环网络训练方法

1. BPTT（Backpropagation Through Time）也叫 <b>时间展开（Unfolding in Time）</b>
2. RTRL（Real-Time Recurrent Learning）
    - RTRL 是一种 <b>在线学习算法</b>
    - 每来一个时间步就更新一次权重
    - 计算量非常大（复杂度 $O(n^4)$）

3. Open Loop Learning / Teacher Forcing

#### 
#### 
