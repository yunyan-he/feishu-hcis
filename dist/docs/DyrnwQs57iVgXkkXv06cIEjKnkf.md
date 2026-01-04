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

# 
