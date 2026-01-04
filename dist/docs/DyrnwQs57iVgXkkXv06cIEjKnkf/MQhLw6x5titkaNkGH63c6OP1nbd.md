---
title: ''
slug: DyrnwQs57iVgXkkXv06cIEjKnkf/MQhLw6x5titkaNkGH63c6OP1nbd
sidebar_position: 2
---


# 
### Assignment 36 

In a ROLF  network, if an accepting neuron exists, the closest neuron $i$ adapts both its center and its radius.

1. Adapting the Center ($C_i$)

The center moves towards the stimulus $^pX$. This makes the neuron a better representative for this pattern.

$$C_{i}(t+1)=C_{i}(t)+\eta_{c} \cdot (^{p}X-C_{i})$$

Where $\eta_{c}$ is the learning rate for the centers.

1. Adapting the Size ($\sigma_i$)

The individual size $\sigma_i$ moves towards the distance $d$ between the stimulus and the center ($d=||^{p}X-C_{i}||$). This adjusts the perceptive area.

$$\sigma_{i}(t+1)=\sigma_{i}(t)+\eta_{\sigma} \cdot (d-\sigma_{i})$$

- Where $\eta_{\sigma}$ is the learning rate for the sizes.

If $d < \sigma_i$, the size decreases so the network becomes more specific; 

if $d > \sigma_i$, the size increases so the network becomes more disposed to the region.

### Assignment 37 (2 Points)

When creating a new ROLF neuron, there are four strategies to initialize the size value $\sigma_{k+1}$:

1. <b>Init-</b>$\sigma$<b>:</b> Use a fixed initial value $\sigma_{init}$
2. <b>Minimum-</b>$\sigma$<b>:</b> Use the minimum value of all existing $\sigma_{k}$
3. <b>Maximum-</b>$\sigma$<b>:</b> Use the maximum value of all existing $\sigma_{k}$
4. <b>Mean-</b>$\sigma$<b>:</b> Use the mean value of all existing $\sigma_{k}$

