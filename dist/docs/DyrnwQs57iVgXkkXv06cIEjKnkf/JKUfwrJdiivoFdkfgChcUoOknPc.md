---
title: Exercises sheet 1
slug: DyrnwQs57iVgXkkXv06cIEjKnkf/JKUfwrJdiivoFdkfgChcUoOknPc
sidebar_position: 0
---


# Exercises sheet 1

1. 4 important basic principles:
    - A lot of simple, interconnected processing units (neurons).  
    - Modifiable, plastic connections (synapses, synaptic weights).  
    - Mapping from an input vector to a scalar output value.  
    - Nonlinear transfer function.

2. ResNet(Residual Network)

Reference:  
He, K., Zhang, X., Ren, S., & Sun, J. (2016). *Deep Residual Learning for Image Recognition*. Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 770–778.  
[https://arxiv.org/abs/1512.03385](https://arxiv.org/abs/1512.03385)

1. The five historical phases are:
    1. 1940–1960: Beginning  
    2. 1960–1982: Quiet Years 
    3. 1980–1990: Renaissance  
    4. 1990–1999: Consolidation 
    5. Since 2000: Second Start-Up  

2. Answer:

<img src="/assets/KwVVbUWAYoeYxFxeLqicSvAOnAh.jpeg" src-width="1038" src-height="1050" align="center"/>

1. In a traditional neuron model, the computation involves 2 steps:
    - Calculate the weighted sum of inputs:  
    $$z=w_1x_1+w_2x_2+⋯+w_nx_n$$
    - Compare the result with a threshold value $θ$
    $$

y = 
\begin{cases}
1 & \text{if } z \geq \theta \\
0 & \text{otherwise}
\end{cases}$$
    In this way, the threshold $θ$ is treated as a separate parameter, which can be inconvenient.
    But by the concept of BIAS, we can simplify this proecss by adding a constant input 1 to the neuron, and the weight of this input $w_b$ is $-θ$, we call it-BIAS weight.
    So now we have a sum
    $$z=w_1x_1+w_2x_2+⋯+w_nx_n+w_b*1$$
    This way, the threshold is absorbed into the weighted sum. We just to exam if the result is larger then 0, making the computation more unified and easier to train.

2. Two classes:

- $^1X,^3X,^5X,^8X$ are the same class
- $^2X,^4X,^6X,^7X$are the other class

We find that:
- Points$^3X$and  $^4X$are very close to (–1, 3), but have opposite labels.
- Points $^7X$and  $^8X$are very close to (5, –2), also with opposite labels.

Therefore, the decision boundary must pass between these two pairs of points. We draw a line through the approximate midpoints of these pairs (-1,3) and (5,-2)

Thus, the line passing through (–1, 3) and (5, –2) is a valid decision boundary for the perceptron. 

This line can be represented as$5x+6y-13=0$

So $w_1 = 5$, $w_2 = 6$, $w_b = -13$

