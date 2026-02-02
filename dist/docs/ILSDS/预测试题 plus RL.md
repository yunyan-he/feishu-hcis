---
title: 预测试题 plus RL
slug: QRiFwuy0liWXaGk5KDqcgG4dnYf/RMIWw2d51iMGqXkeMCZcq0mrnvh
sidebar_position: 5
---


# 预测试题 plus RL

# 📘 Reinforcement Learning（RL）考试题预测 + 标准答案

（基于你提供的第 7 章全部内容）

---

# <b>Part A：概念理解题（高频必考）</b>

## <b>1. Why is supervised learning not suitable for environments like Pac-Man?</b>

<b>标准答案：</b>  

Supervised learning requires labeled data that specifies the correct action for every possible state.

In complex environments like Pac-Man, it is impossible to provide labels for all unseen ghost configurations.

Since no “correct action” is available for many states, supervised learning fails, and RL must learn through trial and error.

因为 Supervised Learning 需要为每个状态提供“正确动作”的标签（Label），但在复杂环境中（如 Pac-Man），我们无法为所有可能的状态配置提供标准答案。尤其是从未见过的幽灵布局，没有人能提前标注“最佳动作”。因此 RL 必须通过试错学习，而不是依赖标签。

---

## <b>2. What is the core idea behind Reinforcement Learning?</b>

<b>标准答案：</b>  

Learning through trial and error by associating actions with outcomes.

The agent receives rewards or penalties and gradually learns to choose actions that maximize long-term return.

通过试错（Trial and Error）建立“动作 → 后果”的联系。Agent 根据奖励（正反馈）和惩罚（负反馈）逐渐学会选择能最大化长期回报的行为。

---

## <b>3. Define Agent, Environment, State, Action, and Reward.</b>

<b>标准答案：</b>

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>概念</p></td><td><p>定义</p></td></tr>
<tr><td><p>Agent</p></td><td><p>做决策的主体（如 Pac-Man）</p></td></tr>
<tr><td><p>Environment</p></td><td><p>除 Agent 以外的一切（墙、鬼、豆子）</p></td></tr>
<tr><td><p>State (s)</p></td><td><p>当前环境的配置（位置、布局）</p></td></tr>
<tr><td><p>Action (a)</p></td><td><p>Agent 可采取的动作（上下左右）</p></td></tr>
<tr><td><p>Reward (r)</p></td><td><p>环境对动作的即时反馈（吃豆 +10，被吃 -100）</p></td></tr>
</tbody>
</table>

---

## <b>4. What is the Agent–Environment Loop?</b>

<b>Standard Answer:</b>

1. Observe current state st
2. Choose action at
3. Environment transitions to st+1
4. Receive reward rt  
The agent’s goal is to maximize cumulative reward.

<b>标准答案：</b>  

RL 的循环包括：  

1. 观察当前状态 \(s_t\)  
2. 选择动作 \(a_t\)  
3. 环境转移到新状态 \(s_{t+1}\)  
4. 环境给出奖励 \(r_t\)  

目标是最大化累积奖励。

---

## <b>5. What is the Reward Function and why is it important?</b>

The reward function defines what the agent should achieve. It specifies which behaviors are good or bad but does not tell the agent <em>how</em> to achieve them. Poorly designed rewards lead to reward hacking.

<b>标准答案：</b>  

Reward Function 定义了“我们想让 Agent 达成什么目标”。它告诉 Agent 哪些行为值得奖励、哪些行为应被惩罚。  

它不告诉 Agent <b>怎么做</b>，只告诉它 <b>什么是好结果</b>。  

因此设计不当会导致 Reward Hacking。

---

## <b>6. What is the Markov Property and why is it important?</b>

The future depends only on the current state, not on the full history.
This allows us to model RL problems using Markov Decision Processes (MDPs).

<b>标准答案：</b>  

未来只依赖当前状态，而不依赖过去的历史。  

这使得我们可以用当前状态 \(s_t\) 来完全描述决策问题，从而构建 MDP。

---

## <b>7. What are Return and the Discount Factor?</b>

Return is the discounted sum of future rewards:

G_t=r_t+γr_{t+1}+γ^2r_{t+2}+…

- γ=0: short-sighted
- γ≈1: long-term planning
The discount factor ensures the sum is finite and controls how much the agent values the future.

<b>标准答案：</b>  

Return \(G_t\) 是未来奖励的折扣和：  

\[

G_t = r_t + \gamma r_{t+1} + \gamma^2 r_{t+2} + \dots

\]

- \(\gamma = 0\)：只看眼前  
- \(\gamma \approx 1\)：重视长期回报  

折扣因子保证总和有限，并控制 Agent 的“远见程度”。

---

## <b>8. 解释 V(s)、Q(s,a)、Advantage 的区别。</b>

<b>标准答案：</b>

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>函数</p></td><td><p>含义</p></td></tr>
<tr><td><p>(V(s))</p></td><td><p>在状态 s 的长期价值</p></td></tr>
<tr><td><p>(Q(s,a))</p></td><td><p>在状态 s 执行动作 a 的长期价值</p></td></tr>
<tr><td><p>(A(s,a)=Q(s,a)-V(s))</p></td><td><p>动作 a 比平均水平好多少</p></td></tr>
</tbody>
</table>

---

## <b>9. What is a Policy? What is the difference between exploration and exploitation?</b>

A policy maps states to actions.

Exploration: trying new actions to discover better strategies

Exploitation: choosing the best-known action

RL requires a balance of both.

<b>标准答案：</b>  

Policy 是从状态到动作的映射。  

- Exploration：尝试新动作，探索未知  
- Exploitation：利用已知信息，选择 Q 值最高的动作  

RL 需要两者平衡。

---

# <b>Part B：公式理解题（中高频）</b>

## <b>10. Write the Bellman Equation and explain each term.。</b>

<b>标准答案：</b>

\[

V(s_t) = \max_a [ R(s_t,a) + \gamma \sum_{s_{t+1}} P(s_{t+1}|s_t,a) V(s_{t+1}) ]

\]

解释：  

- 当前价值 = 即时奖励 + 折扣后的未来价值期望  
- max 表示选择最优动作  
- P 是状态转移概率  

Explanation:

Current value = immediate reward + discounted expected future value

max: choose the optimal action

𝑃: transition probability

---

## <b>11. 写出 Q-Learning 的更新公式并解释其含义。</b>

<b>标准答案：</b>

\[

Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha [ R + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t) ]

\]

含义：  

- 当前 Q 值向“目标值”靠近  
- 通过不断迭代逼近真实 Q 值  
- 是 off-policy、model-free 的方法  

The Q-value is updated toward a target value.

Repeated updates make Q converge to the true action-value function.

---

# <b>Part C：应用理解题（老师很可能考）</b>

## <b>12. Why does PPO use clipping?</b>

<b>标准答案：</b>  

为了防止策略更新过大导致训练不稳定。  

Clipping 限制新旧策略概率比 \(r_t(\theta)\) 在 \([1-\epsilon,1+\epsilon]\) 内，使训练更平滑、更稳定。

To prevent the policy from changing too much in a single update.

Large updates cause instability, so PPO clips the probability ratio to keep training stable.

---

## <b>13. What is the main improvement of GRPO over PPO?</b>

<b>标准答案：</b>  

移除了 Critic 网络，减少显存和计算量。  

通过“组内相对优势”来替代绝对价值评估：  

- 对同一输入生成多个输出  
- 用 Reward Model 打分  
- 比较每个输出与组平均水平的差距  

不需要训练一个独立的 Value Function。

GRPO removes the critic network, reducing memory and computation.

It uses relative advantage within a group of sampled outputs instead of an absolute value estimate.

---

## <b>14. Why do LLMs need RLHF?</b>

Because “good responses” cannot be defined with a mathematical formula.

Human feedback is easy to collect, and RLHF uses it to train a reward model that guides the LLM toward human-preferred behavior.

<b>标准答案：</b>  

因为“好回答”的质量难以用数学公式定义，但人类可以轻松给出偏好（点赞/点踩）。  

RLHF 通过：  

1. 收集人类偏好  
2. 训练 Reward Model  
3. 用 PPO/GRPO 优化模型  

从而让模型更符合人类价值观。

---

## <b>15. What is Reward Hacking? Give an example.</b>

Reward hacking occurs when the agent finds loopholes in the reward function instead of solving the intended task.
Example:
If reward = “unit test passes,” the agent may write:

```text
def test(): pass
```

It passes but is meaningless.

<b>标准答案：</b>  

Reward Hacking 指 Agent 找到“钻漏洞”的方式最大化奖励，而不是完成真正任务。  

例子：  

如果奖励是“单元测试通过”，Agent 会写 `def test(): pass`，虽然毫无意义但能拿满分。  

说明奖励设计必须严谨。

---

# <b>Part D：综合理解题（高阶理解，老师可能出 1–2 题）</b>

## <b>16. Why do we say “You get what you reward”?</b>

The agent optimizes only the reward function, not the true goal.

If the reward is poorly designed, the agent will optimize the wrong behavior.

Thus the reward function determines the agent’s actual behavior.

<b>标准答案：</b>  

因为 Agent 的目标是最大化奖励，它不会理解任务本身，只会优化 Reward Function。  

如果奖励定义不完整或有漏洞，Agent 会利用漏洞而不是完成真正目标。  

因此 Reward Function 决定了 Agent 的行为方向。

---

## <b>17. Why is RL essential for training modern LLMs?</b>

LLMs must learn not only to predict text but to reason, follow instructions, and align with human preferences.

RL (PPO, GRPO, RLHF) enables optimization toward human-valued behavior, not just statistical prediction.

<b>标准答案：</b>  

因为 LLM 需要学习“如何思考、如何回答”，而不是简单预测下一个词。  

RL（尤其是 PPO、GRPO、RLHF）允许模型根据人类偏好和任务目标进行优化，使其输出更符合人类价值、逻辑和质量要求。

---

# <b>Part E：判断题（理解型，不考死记）</b>

## <b>18.（T/F）Markov Property 表示未来与过去完全无关。</b>

<b>标准答案：</b>  

False。  

未来与“过去的历史”无关，但与“当前状态”有关，而当前状态本身可能包含历史信息。

---

## <b>19.（T/F）Q-Learning 需要知道环境的转移概率 P。</b>

<b>标准答案：</b>  

False。  

Q-Learning 是 model-free，不需要知道 P。

---

## <b>20.（T/F）PPO 的 Critic 用来估计 Advantage。</b>

<b>标准答案：</b>  

True。  

Critic 估计 Value Function，从而计算 Advantage。

