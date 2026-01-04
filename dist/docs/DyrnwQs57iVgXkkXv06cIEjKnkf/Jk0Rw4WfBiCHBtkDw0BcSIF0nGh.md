---
title: A22/23
slug: DyrnwQs57iVgXkkXv06cIEjKnkf/Jk0Rw4WfBiCHBtkDw0BcSIF0nGh
sidebar_position: 1
---


# A22/23

# Assignment 22

1. Common Aspects:

- Universal Approximators: Both MLP and RBF networks are proven to be universal function approximators, capable of representing any continuous function.
- Feed-Forward Architecture: Both are feed-forward networks where information flows in one direction from input to output.
- Supervised Learning: Both are typically trained using supervised learning methods.
- Application Domains: Both are applicable for function approximation (regression) and pattern recognition (classification) tasks.

1. Different Aspects:

- Layers：
    - MLP: Can have multiple hidden layers.
    - RBF: Has exactly three layers: Input, RBF, and Output.
    - Difference: RBF is a fixed shallow architecture, while MLPs can be deep.

- Hidden Neurons
    - MLP: Uses weighted sums followed by global activation functions
    - RBF: Uses distance calculation and radial basis functions , e.g., Gaussian.
    - Difference: MLP neurons rely on linear combinations, RBF neurons rely on distance measures.

- Output Layer
    - MLP: Typically uses non‑linear transfer functions , e.g., Sigmoid, Softmax.
    - RBF: Uses a linear transfer function 
    - Difference: RBF output is a simple linear weighted sum, making weight solving mathematically easier.

- Training
    - MLP: Trains all weights simultaneously via Backpropagation .
    - RBF: Often uses hybrid training: centers/sizes fixed or unsupervised; output weights solved by matrix inverse or via gradient descent.
    - Difference: RBF training can be exact and faster because the output layer is a linear problem.

- Approximation
    - MLP: Global approximation, changing one weight affects outputs for many inputs.
    - RBF: Local approximation, changing a center or weight only affects outputs near that center.
    - Difference: RBF allows local tuning without disrupting knowledge in other regions, while MLP adjustments are global.

1. Discussion on Applications:

- RBF Networks are better suited for interpolation problems or applications where training data is sparse but clean. They are also ideal for online learning because their local nature prevents "catastrophic interference" (learning new data doesn't ruin old memories). They excel when training speed is critical due to the possibility of analytic solutions .
- MLPs are better suited for high-dimensional problems. RBFs suffer from the "curse of dimensionality". MLPs are also generally superior for complex classification tasks involving massive datasets where deep feature hierarchies are necessary.

# Assignment 23 

1. Completely Uninformed

- Philosophy: Used when there is little or no prior knowledge about the input data.
- Method: The input space is covered uniformly, e.g., using a uniform grid or tiling. The size $s_k$ is usually set to ensure moderate overlap between centers.
- Pros/Cons: It is easy to implement and guarantees full coverage, but suffers from the curse of dimensionality—the number of required centers $K$ rises exponentially as input dimensions $N$ increase.

1. Input Data Driven

- Philosophy: The centers are positioned and adjusted based on the distribution of the input data $X$. This is an unsupervised approach.
- Variants:
    - Subset of Training Data: Randomly selecting $K$ points from the training set to serve as centers.
    - Statistical Analysis: Using density analysis of the input space to place centers where data is concentrated.
    - Clustering: Using algorithms like K-means or Vector Quantization. The resulting "codebook vectors"become the RBF centers, providing a good representation of the data distribution.
    - Self-Organized Learning: Using unsupervised learning rules to move centers toward data clusters.

1. Error Driven

- Philosophy: Adjusts parameters based on the final network performance.
- Method: Centers $C_k$ and sizes $s_k$are treated as adjustable weights. The system calculates the output error and uses Gradient Descent to minimize this error.
- Implementation: This requires calculating the partial derivatives of the error function with respect to the centers ($\frac{\partial E}{\partial c_{nk}}$) and the sizes ($\frac{\partial E}{\partial s_{k}}$).

> ### Assignment 22 (3 Points)
> <b>Compare the two neural network paradigms Multi-Layer-Perceptron (MLP) and Radial-Basis-Function Network (RBF).</b>
> 1. <b>Common Aspects:</b>
> - <b>Universal Approximators:</b> Both MLP and RBF networks are proven to be universal function approximators, capable of representing any continuous function(1)(1)(1).
> - <b>Feed-Forward Architecture:</b> Both are feed-forward networks where information flows in one direction from input to output(2).
> - <b>Supervised Learning:</b> Both are typically trained using supervised learning methods (mapping inputs to target outputs)(3).
> - <b>Application Domains:</b> Both are applicable for function approximation (regression) and pattern recognition (classification) tasks(4).
> 1. <b>Different Aspects:</b>
> 2. <b>Discussion on Applications:</b>
> - <b>RBF Networks</b> are better suited for <b>interpolation</b> problems or applications where training data is sparse but clean. They are also ideal for <b>online learning</b> (real-time adaptation) because their local nature prevents "catastrophic interference" (learning new data doesn't ruin old memories). They excel when training speed is critical due to the possibility of analytic solutions (Matrix Inversion).
> - <b>MLPs</b> are better suited for <b>high-dimensional problems</b>. RBFs suffer from the "curse of dimensionality" (the number of centers required grows exponentially with input dimensions)(8). MLPs are also generally superior for complex classification tasks involving massive datasets (like image recognition) where deep feature hierarchies are necessary.
> ---
> # > ### Assignment 23 (2 Points)
> <b>Explain the three philosophies (including variants of them) to set, or adjust the centres </b>$C_k$<b> and sizes </b>$s_k$<b> of RBF-networks.</b>
> The lecture outlines three distinct philosophies based on the amount of prior knowledge available:
> 1. <b>Completely Uninformed</b>
> - <b>Philosophy:</b> Used when there is little or no prior knowledge about the input data(9).
> - <b>Method:</b> The input space is covered <b>uniformly</b> (e.g., using a uniform grid or tiling)(10). The size $s_k$ is usually set to ensure moderate overlap between centers(11).
> - <b>Pros/Cons:</b> It is easy to implement and guarantees full coverage, but suffers from the <b>curse of dimensionality</b>—the number of required centers $K$ rises exponentially as input dimensions $N$ increase(12).
> > 1. <b>Input Data Driven</b>
> - <b>Philosophy:</b> The centers are positioned and adjusted based on the <b>distribution</b> of the input data $X$(13). This is an unsupervised approach (does not use teacher/target values).
> - <b>Variants:</b>
    - <b>Subset of Training Data:</b> Randomly selecting $K$ points from the training set to serve as centers(14).
    - <b>Statistical Analysis:</b> Using density analysis of the input space to place centers where data is concentrated(15).
    - <b>Clustering:</b> Using algorithms like <b>K-means</b> or Vector Quantization. The resulting "codebook vectors" (cluster centroids) become the RBF centers, providing a good representation of the data distribution(16).
    -     - <b>Self-Organized Learning:</b> Using unsupervised learning rules to move centers toward data clusters.
> 1. <b>Error Driven</b>
> - <b>Philosophy:</b> Adjusts parameters based on the final network performance (Supervised Learning)(17).
> - <b>Method:</b> Centers $C_k$ and sizes $s_k$ are treated as adjustable weights. The system calculates the output error (difference between network output $y$ and teacher value $\hat{y}$) and uses <b>Gradient Descent</b> to minimize this error.
> - <b>Implementation:</b> This requires calculating the partial derivatives of the error function with respect to the centers ($\frac{\partial E}{\partial c_{nk}}$) and the sizes ($\frac{\partial E}{\partial s_{k}}$)(18).
> 这是一个非常好的问题。区分“资料来源”和“外部知识”对于学术严谨性很重要。以下是针对刚才回答的详细来源说明：
> > ### Assignment 22 (对比 MLP 和 RBF)
> 这部分大约 <b>60% 基于 PPT，40% 基于外部通用知识</b>。
> - <b>✅ 基于 PPT 的部分 (RBF 的特征)：</b>
    - <b>RBF 的结构：</b> 只有 3 层 (Input, RBF, Output) (1)；输入层是线性的 (2)；输出层也是线性的 (Identity) (3)；RBF 神经元使用距离和高斯函数 (4)(4)(4)(4)。
    - <b>功能：</b> 通用函数逼近器 (5)，适用于回归和分类 (6)。
    - <b>训练：</b> RBF 的权重可以通过解析解 (矩阵求逆/伪逆) 一次性计算 (7)(7)(7)(7)，这是 RBF 区别于 MLP 的一大特点。
    - <b>缺点：</b> 明确提到了 RBF 的“维数灾难” (Curse of dimensionality)，即中心点数量随维度指数增长 (8)。
> > - <b>🧠 我添加的外部知识 (MLP 的特征与对比逻辑)：</b>
    - <b>MLP 的具体细节：</b> PPT 中提到了 MLP 是 RBF 的替代品 (9)，但没有详细展开 MLP 的内部结构。我补充了 MLP 使用 <b>Sigmoid/ReLU</b> 激活函数、通常有<b>多个隐藏层</b> (Deep Learning)、以及它是基于<b>点积 (Dot Product)</b> 而非距离的知识，以便进行有效的“对比”。
    - <b>"全局 vs 局部" (Global vs Local) 逼近：</b> PPT 展示了 RBF 是高斯波峰 (Local)，但我补充了“MLP 是全局逼近 (Global approximation)”这一术语，用来解释为什么 RBF 在调整参数时只会影响局部区域，而 MLP 会影响整体。
    - <b>应用场景的推论：</b> PPT 提到了 RBF 不适合高维 (维数灾难)，我据此推论出 MLP 更适合高维任务（如图像识别）。我也补充了 RBF 适合“在线学习 (Online Learning)”的观点，这是基于其局部特性推导出的常见学术观点。
> ---
> # > ### Assignment 23 (设置 RBF 中心的方法)
> 这部分 <b>99% 基于 PPT</b>。
> - <b>✅ 基于 PPT 的部分：</b>
    - <b>三种哲学：</b> Uninformed, Input Data Driven, Error Driven 这三个分类完全来自 PPT (10)。
    - <b>Uninformed (完全无知)：</b> “均匀覆盖 (Uniformly covered)” (11)和其缺点 (维数灾难) (12) 都来自 PPT。
    - <b>Input Data Driven (数据驱动)：</b> 四种变体（子集 Subset、统计分析 Statistical、聚类 Clustering、学习 Learning）都直接列在 PPT 上 (13)。"Codebook-vectors" 这个术语也是 PPT 里的原话 (14)。
    - <b>Error Driven (误差驱动)：</b> 使用监督学习和梯度下降 (15)，以及需要计算偏导数 $\frac{\partial E}{\partial c}$ 和 $\frac{\partial E}{\partial s}$ 的公式形式，均来自 PPT (16)。
    > - <b>🧠 我添加的外部知识：</b>
    - 仅在解释 <b>Clustering (聚类)</b> 时，我稍微展开了解释了一下 K-means 是如何找到“质心”的，以帮助理解 PPT 中提到的 "Codebook vectors" 是什么意思。
> <b>总结：</b>
> - <b>Assignment 23</b> 你完全可以信赖 PPT 的内容来回答。
> - <b>Assignment 22</b> 你需要利用 PPT 中关于 RBF 的描述，但必须结合你之前学过的关于 MLP 的知识（或者我补充的这些知识）才能完成“对比 (Compare)”的部分，因为这份 PPT 主要讲 RBF，几乎没讲 MLP 的细节。

