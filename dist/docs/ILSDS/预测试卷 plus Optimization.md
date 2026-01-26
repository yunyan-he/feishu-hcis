---
title: 预测试卷 plus Optimization
slug: QRiFwuy0liWXaGk5KDqcgG4dnYf/Lilkw2LlGi74XTkpdKQcukGcnFg
sidebar_position: 3
---


# 预测试卷 plus Optimization

当然可以，云雁。你对老师的判断非常准确：<b>这一章的考点一定是“理解型”而不是“死记硬背型”</b>。  

我给你做一份<b>高质量、覆盖所有核心概念、完全贴合 PPT 内容、考试风格的预测题 + 标准答案</b>。  

题目类型会包括：<b>概念解释、对比题、推导题、判断题、简答题、应用题</b>——这是最符合 ILSDS 风格的。

下面开始。

---

# <b>《Advanced Optimization》考试题预测 + 标准答案（高质量版）</b>

---

## <b>Part 1 — 核心概念理解题（必考）</b>

---

### <b>Q1. Explain the difference between smooth and rugged loss landscapes. Why do rugged landscapes make optimization difficult?</b>

#### <b>Standard Answer</b>

- <b>Smooth loss landscapes</b>  
    - 梯度变化平稳  
    - 优化路径可预测  
    - 但可能存在 flat regions（梯度接近 0，下降慢）
        
- <b>Rugged loss landscapes</b>  
    - 含大量 local minima、saddle points、plateaus  
    - 梯度方向变化剧烈  
    - 优化容易卡住或震荡
        
<b>Why difficult?</b>  

因为优化器可能陷入局部极小值、在鞍点附近停滞、或在高曲率方向震荡，导致收敛慢或失败。

---

### <b>Q2. Why is vanilla gradient descent slow in long, narrow valleys?</b>

#### <b>Standard Answer</b>

- 在狭长谷底中，主下降方向梯度小 → 步长小 → 下降慢  
- 垂直方向梯度大 → 震荡严重  
- 结果：<b>zig-zag behavior</b>，效率极低
    
---

## <b>Part 2 — Momentum（Heavy Ball Method）考点</b>

---

### <b>Q3. Write down the update rule of the Heavy Ball Method and explain the role of β.</b>

#### <b>Standard Answer</b>

Velocity update:

\[

v_{t+1} = \beta v_t + (1-\beta)\nabla f(x_t)

\]

Parameter update:

\[

x_{t+1} = x_t - \eta v_{t+1}

\]

<b>Role of β:</b>  

- 控制过去梯度的记忆长度  
- β 越大 → 惯性越强 → 更平滑、更快  
- 常用范围：0.8–0.99
    
---

### <b>Q4. Why does momentum help escape saddle points?</b>

#### <b>Standard Answer</b>

在 saddle point 附近，梯度接近 0，但动量项 \(v_t\) 仍然保留之前的方向信息，因此优化器不会停下来，而是继续向前冲，从而更容易离开鞍点。

---

### <b>Q5. Expand the momentum term and explain why it is an exponential moving average.</b>

#### <b>Standard Answer</b>

展开：

\[

v_{t+1} = (1-\beta)(\nabla f(x_t) + \beta \nabla f(x_{t-1}) + \beta^2 \nabla f(x_{t-2}) + \cdots)

\]

解释：  

- 每个过去的梯度都乘以 \(\beta^k\)  
- 权重随时间指数衰减  
- 因此是 <b>exponential moving average (EMA)</b>
    
---

## <b>Part 3 — RMSProp（Adaptive Learning Rate）考点</b>

---

### <b>Q6. What problem does RMSProp solve? Why does it use squared gradients?</b>

#### <b>Standard Answer</b>

<b>Problem solved:</b>  

- 在 steep directions → 避免 overshoot  
- 在 flat directions → 加速收敛  
- 即：<b>不同方向需要不同学习率</b>
    
<b>Why squared gradients?</b>  

\[

s_{t+1} = \rho s_t + (1-\rho)(\nabla f(x_t))^2

\]

梯度平方反映“最近是否陡峭”  

- 大梯度 → 大平方 → 学习率变小  
- 小梯度 → 小平方 → 学习率变大
    
---

### <b>Q7. Write the RMSProp update rule.</b>

#### <b>Standard Answer</b>

\[

s_{t+1} = \rho s_t + (1-\rho)(\nabla f(x_t))^2

\]

\[

x_{t+1} = x_t - \frac{\eta}{\sqrt{s_{t+1}}+\epsilon}\nabla f(x_t)

\]

---

## <b>Part 4 — Adam（Momentum + Adaptive LR）考点</b>

---

### <b>Q8. What are the two moving averages in Adam and what do they represent?</b>

#### <b>Standard Answer</b>

1. <b>First moment (m)</b>

\[

m_{t+1} = \beta_1 m_t + (1-\beta_1)\nabla f(x_t)

\]

→ 动量（类似 Heavy Ball）

1. <b>Second moment (v)</b>

\[

v_{t+1} = \beta_2 v_t + (1-\beta_2)(\nabla f(x_t))^2

\]

→ 自适应学习率（类似 RMSProp）

---

### <b>Q9. Why does Adam need bias correction?</b>

#### <b>Standard Answer</b>

因为初始时 \(m_0 = 0\), \(v_0 = 0\)，导致前几步的 moving averages 偏小。  

因此需要除以 \(1-\beta^t\) 来校正。

---

### <b>Q10. Write the full Adam update rule.</b>

#### <b>Standard Answer</b>

Bias-corrected moments:

\[

\hat{m}_{t+1} = \frac{m_{t+1}}{1-\beta_1^{t+1}}

\]

\[

\hat{v}_{t+1} = \frac{v_{t+1}}{1-\beta_2^{t+1}}

\]

Update:

\[

x_{t+1} = x_t - \frac{\eta}{\sqrt{\hat{v}_{t+1}}+\epsilon}\hat{m}_{t+1}

\]

---

### <b>Q11. Why is Adam the default optimizer in deep learning?</b>

#### <b>Standard Answer</b>

- 结合 momentum + adaptive learning rate  
- 对噪声鲁棒  
- 几乎不需要调参  
- 收敛快、稳定  
- 在大多数任务上表现良好
    
---

## <b>Part 5 — Simulated Annealing（SA）考点</b>

---

### <b>Q12. What is the analogy between simulated annealing and physical annealing?</b>

#### <b>Standard Answer</b>

- 金属加热 → 原子自由移动  
- 缓慢冷却 → 形成低能量晶体结构  
- SA 模拟这一过程：  
    - 高温允许随机探索  
    - 降温后逐渐集中到低能量（低损失）区域
        
---

### <b>Q13. Why does simulated annealing allow uphill moves?</b>

###### <b>Standard Answer</b>

为了避免陷入局部极小值。  

接受概率：

\[

\exp\left(-\frac{E(x') - E(x)}{T}\right)

\]

温度高时 → 更容易接受上坡  

温度低时 → 更严格

---

### <b>Q14. Give two common cooling schedules.</b>

#### <b>Standard Answer</b>

- Exponential:

\[

T_{k+1} = \alpha T_k

\]

- Logarithmic:

\[

T_k = \frac{T_0}{\log(k+c)}

\]

---

### <b>Q15. Why is simulated annealing not used in deep learning?</b>

#### <b>Standard Answer</b>

- 收敛极慢  
- 需要大量随机采样  
- 不利用梯度信息  
- 在高维连续空间效率极低  
- Adam 等方法更快更稳定
    
---

## <b>Part 6 — 应用题（老师很可能考）</b>

---

### **Q16. Compare Heavy Ball, RMSProp, and Adam in terms of:

(1) what they track, (2) what problem they solve.**

#### <b>Standard Answer</b>

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>Method</p></td><td><p>Tracks</p></td><td><p>Solves</p></td></tr>
<tr><td><p>Heavy Ball</p></td><td><p>EMA of gradients</p></td><td><p>震荡、慢收敛</p></td></tr>
<tr><td><p>RMSProp</p></td><td><p>EMA of squared gradients</p></td><td><p>不同方向学习率不匹配</p></td></tr>
<tr><td><p>Adam</p></td><td><p>Both m &amp; v</p></td><td><p>综合问题，最稳定</p></td></tr>
</tbody>
</table>

---

### <b>Q17. Given a loss landscape with steep walls and flat valleys, which optimizer performs best and why?</b>

#### <b>Standard Answer</b>

<b>Adam</b>  

因为它同时：  

- 用 momentum 解决震荡  
- 用 adaptive LR 加速平坦方向  
- 在复杂地形中表现最稳定
    
---

## <b>Part 7 — 判断理解题（快速检测是否真正懂了）</b>

---

### <b>Q18. True or False: Momentum always increases the step size.</b>

<b>Answer:</b> False  

Momentum可能增加，也可能减少，取决于梯度方向是否一致。

---

### <b>Q19. True or False: RMSProp can escape saddle points better than vanilla GD.</b>

<b>Answer:</b> True  

因为 adaptive LR 会在平坦方向增大学习率。

---

### <b>Q20. True or False: Simulated annealing uses gradients.</b>

<b>Answer:</b> False  

SA 完全不使用梯度。

