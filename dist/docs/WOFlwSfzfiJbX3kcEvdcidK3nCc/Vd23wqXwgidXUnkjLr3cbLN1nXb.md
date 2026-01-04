---
title: Animal recognition
slug: WOFlwSfzfiJbX3kcEvdcidK3nCc/Vd23wqXwgidXUnkjLr3cbLN1nXb
sidebar_position: 0
---


# Animal recognition

# Pytorch

## Python pytorch fastai

Pytorch is a library.

Fastai is also a library, but uses Pytorch under the hood

<b>Fastai encapsulates higher level interfaces on top of Pytorch</b>

## Data process

### In pytorch

<b>在 PyTorch 中，数据处理主要依赖 </b><b>Dataset</b><b> 和 </b><b>DataLoader</b><b> 两个核心组件，用来管理数据集、批量加载、预处理和增强。</b>

#### 📌 PyTorch 数据处理的核心机制

1. <b>Dataset (数据集类)</b>
    - `torch.utils.data.Dataset` 是一个抽象类，用来表示数据集。
    - 你可以使用内置数据集（如 `MNIST`, `CIFAR10`），也可以通过继承 `Dataset` 来自定义数据集。
    - 必须实现两个方法： 
        - `__len__()`：返回数据集大小。
        - `__getitem__(idx)`：根据索引返回一个样本（输入 + 标签）。

```py
from torch.utils.data import Dataset

class MyDataset(Dataset):
    def __init__(self, X, y):
        self.X = X
        self.y = y
    def __len__(self):
        return len(self.X)
    def __getitem__(self, idx):
        return self.X[idx], self.y[idx]
```

1. <b>DataLoader (数据加载器)</b>
    - `torch.utils.data.DataLoader` 用来把 `Dataset` 包装成一个可迭代对象。
    - 支持 <b>批量加载 (batch)</b>、<b>打乱数据 (shuffle)</b>、<b>多线程加载 (num_workers)</b>。
    - 常见用法： 
    ```py
from torch.utils.data import DataLoader

dataset = MyDataset(X_data, y_data)
loader = DataLoader(dataset, batch_size=32, shuffle=True)
for batch_X, batch_y in loader:
    # 训练代码
```

2. <b>Transforms (数据预处理与增强)</b>
    - 对图像数据常用 `torchvision.transforms`： 
        - `transforms.ToTensor()`：把图片转为张量。
        - `transforms.Normalize(mean, std)`：归一化。
        - `transforms.RandomHorizontalFlip()`：随机水平翻转。
        - `transforms.Resize(size)`：调整大小。
    - 示例： 
    ```py
from torchvision import transforms

transform = transforms.Compose([
    transforms.Resize((224,224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.5], std=[0.5])
])
```

3. <b>标准数据集加载</b>
    - `torchvision.datasets` 提供常见数据集：MNIST, CIFAR10, ImageNet 等。
    - 示例： 
    ```py
from torchvision.datasets import CIFAR10

train_data = CIFAR10(root="./data", train=True, transform=transform, download=True)
train_loader = DataLoader(train_data, batch_size=64, shuffle=True)
```

---

#### ✅ 总结

- <b>Dataset</b>：定义数据集结构。
- <b>DataLoader</b>：批量加载和迭代数据。
- <b>Transforms</b>：预处理和增强数据。
- <b>torchvision.datasets</b>：快速获取常见数据集。

👉 PyTorch 的数据处理流程就是：<b>Dataset → DataLoader → Transforms → 模型训练</b>  [docs.pytorch.org](https://docs.pytorch.org/tutorials/beginner/basics/data_tutorial.html)  [GeeksForGeeks](https://www.geeksforgeeks.org/deep-learning/data-preprocessing-in-pytorch/)  [菜鸟教程](https://www.runoob.com/pytorch/pytorch-dataset-dataloader.html)。

### In fastai

在 <b>fastai</b> 中，数据处理比 PyTorch 更高层次和自动化，它封装了很多常见步骤，让你用极少的代码就能完成数据加载、预处理和增强。

#### 📌 fastai 数据处理的核心机制

The `DataBlock` API in FastAI is a powerful tool for this. It allows you to easily define the data sources, splits, and the various data transformations or augmentations you want to apply. You can use built - in transformers to randomly rotate images, adjust brightness, and do other operations to increase the diversity of your training data. 

1. <b>DataBlock API</b>
    - fastai 的核心数据处理工具。
    - 用来定义数据的结构：输入类型、标签类型、如何获取数据、如何分割训练/验证集、如何做预处理。
    - 示例： 
    These parameters are crucial for customizing your data processing. `blocks` define the types of data, `get_items` tells how to access the data, `splitters` divide the data into training and validation sets, `get_y` is used to get the target values, and `item_tfms` and `batch_tfms` are for applying data transformations at the item and batch levels respectively. 
    ```py
from fastai.vision.all import *

dblock = DataBlock(
    blocks=(ImageBlock, CategoryBlock),   # 输入是图像，输出是类别
    get_items=get_image_files,            # 获取数据的方法
    splitter=RandomSplitter(valid_pct=0.2, seed=42),  # 划分训练/验证集
    get_y=parent_label,                   # 标签来源：文件夹名
    item_tfms=Resize(224),                # 单样本变换
    batch_tfms=aug_transforms()           # 批量数据增强
)

dls = dblock.dataloaders(path, bs=32)
dls.show_batch(max_n=9)
```

2. <b>DataLoaders</b>
    - `dataloaders()` 会返回一个 `DataLoaders` 对象，包含训练集和验证集的迭代器。
    - 内部依然基于 PyTorch 的 `DataLoader`，但 fastai 自动帮你处理好 transforms、batch、GPU 等。

3. <b>Transforms (数据变换与增强)</b>
    - fastai 提供了丰富的图像增强函数： 
        - `Resize`：调整大小
        - `aug_transforms`：常用的随机旋转、缩放、翻转、亮度对比度调整等
        - `Normalize`：归一化
    - 可以分别应用在 <b>item_tfms</b>（单样本级别）和 <b>batch_tfms</b>（批量级别）。

4. <b>内置数据集支持</b>
    - fastai 提供了很多现成的数据集加载器，比如 `ImageDataLoaders.from_folder()`、`TextDataLoaders.from_folder()`，只需一行代码即可完成数据准备。
    - 示例： 
    ```py
dls = ImageDataLoaders.from_folder(path, valid_pct=0.2, bs=32)
```

---

#### 📊 PyTorch vs fastai 数据处理对比

---

#### ✅ 总结

- 在 PyTorch 中，数据处理需要你手动写很多类和函数。
- 在 fastai 中，数据处理通过 <b>DataBlock API</b> 和 <b>DataLoaders</b> 高度封装，几行代码就能完成。
- fastai 的优势是 <b>快速实验</b>，特别适合原型开发和教学。

## Model building

### In pytorch

在 <b>PyTorch</b> 中，构建模型（model build）通常分为几个关键步骤：

---

#### 定义模型结构

- 使用 `torch.nn.Module` 来创建自定义模型。
- 在 `init` 方法中定义层（layers），在 `forward` 方法中定义前向传播逻辑。

```py
import torch
import torch.nn as nn
import torch.nn.functional as F

class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        # 定义层
        self.fc1 = nn.Linear(784, 128)   # 输入层 → 隐藏层
        self.fc2 = nn.Linear(128, 64)    # 隐藏层 → 隐藏层
        self.fc3 = nn.Linear(64, 10)     # 隐藏层 → 输出层

    def forward(self, x):
        # 前向传播
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.fc3(x)   # 输出层不加激活，交给 loss function
        return x
```

---

#### 初始化模型

```py
model = SimpleNet()
print(model)
```

---

#### 定义损失函数和优化器

- 损失函数：如交叉熵 `nn.CrossEntropyLoss()`
- 优化器：如 SGD 或 Adam

```py
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
```

---

### In fastai

In FastAI, you can use pre - built architectures like those from the `vision.models` library. You first choose a suitable architecture, then customize it according to your task. After that, you wrap it up into a `Learner` object which combines the model, data, optimizer, and loss function. This way, you can start training your model easily.

在 fastai 中，模型定义通常是通过 <b>Learner API</b> 来完成的。你不需要自己写 `nn.Module`，而是直接调用预定义的架构（来自 PyTorch 的 `torchvision.models`），fastai 会帮你封装好：

```text
from fastai.vision.all import *

# 使用 ResNet18 作为 backbone
learn = vision_learner(dls, resnet18, metrics=accuracy)
```

- `vision_learner` 会自动：
    - 加载预训练的 ResNet18（来自 PyTorch）
    - 替换最后一层为适合你数据集的输出层
    - 封装成一个 `Learner` 对象，后续可以直接训练和评估

👉 在 fastai 中，模型定义就是 <b>选择一个 backbone + fastai 自动封装</b>，几行代码即可完成。

### 1. `model` parameter

This is the actual neural network architecture you choose. For instance, you can use pre - trained models like `resnet18`, `resnet34`, `resnet50` etc. These models have been trained on large - scale datasets like ImageNet, and they can be fine - tuned for your specific task.

```py
from fastai.vision.all import *
data = ImageDataBunch.from_folder(path='.')
learn = vision_learner(data, resnet18, metrics=[accuracy])
```

In this code, `resnet18` is passed as the `model` parameter to `vision_learner`.

### 2. `data` parameter

This is the `ImageDataBunch` object that you've prepared earlier using `DataBlock`. It contains your training, validation (and optionally test) datasets, along with information on how to pre - process and augment the data. The `ImageDataBunch` takes care of things like normalizing the images according to the statistics of your dataset.

### 3. `metrics` parameter

This is used to define the evaluation metrics you want to track during training and validation. For classification tasks, common metrics are `accuracy`, `precision`, `recall`, and `F1 - score`. You can pass multiple metrics as a list.

```py
from fastai.vision.all import *
data = ImageDataBunch.from_folder(path='.')
learn = vision_learner(data, resnet18, metrics=[accuracy, precision])
```

Here, both `accuracy` and `precision` will be calculated during training and validation.

### 4. `opt_func` parameter

This specifies the optimizer you want to use. FastAI has several built - in optimizers like `sgd` (Stochastic Gradient Descent), `adam`, etc. The default optimizer is `adam`.

```py
from fastai.vision.all import *
data = ImageDataBunch.from_folder(path='.')
learn = vision_learner(data, resnet18, metrics=[accuracy], opt_func=sgd)
```

In this example, the `sgd` optimizer is used instead of the default.

### 5. `loss_func` parameter

This is the loss function. For image classification, the default loss function is `CrossEntropyLoss`. But if you have a specific problem, you can choose other loss functions.

```py
from fastai.vision.all import *import torch.nn as nn
data = ImageDataBunch.from_folder(path='.')
loss_func = nn.CrossEntropyLoss()
learn = vision_learner(data, resnet18, metrics=[accuracy], loss_func=loss_func)
```

These are some of the main parameters when using `vision_learner` in FastAI. Each one plays a crucial role in building, training, and evaluating your vision - based machine - learning models.

## Model Training

### In pytorch

#### 训练循环

- 前向传播 → 计算损失 → 反向传播 → 更新参数

```py
for epoch in range(10):  # 训练 10 个 epoch
    for inputs, labels in train_loader:
        # 前向传播
        outputs = model(inputs)
        loss = criterion(outputs, labels)

        # 反向传播
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

    print(f"Epoch {epoch+1}, Loss: {loss.item()}")
```

---

### In fastai

在 <b>fastai</b> 中，模型训练是它最大的优势之一：相比 PyTorch 需要手写训练循环，fastai 提供了高度封装的 <b>Learner API</b>，只需几行代码就能完成完整的训练过程。

---

#### fastai 模型训练的核心方法

1. <b>fit()</b>
    - 基础训练方法，运行指定的 epoch 数。

```py
learn.fit(5)   # 训练 5 个 epoch
```

1. <b>fine_tune()</b>
    - 用于迁移学习：先冻结预训练模型的前几层，只训练最后的分类层，然后再解冻全部层继续训练。

```py
learn.fine_tune(5)   # 迁移学习训练 5 个 epoch
```

1. <b>fit_one_cycle()</b>
    - 使用 <b>1cycle 学习率策略</b>（一种动态调整学习率的方法，常常能提升效果）。

```py
learn.fit_one_cycle(10, lr_max=1e-3)   # 训练 10 个 epoch，最大学习率 0.001
```

1. <b>学习率查找 (lr_find)</b>
    - 自动寻找合适的学习率范围。

```py
learn.lr_find()
```

1. <b>回调 (Callbacks)</b>
    - fastai 提供了很多训练过程中的回调，比如： 
        - `EarlyStoppingCallback`：验证集 loss 不再下降时提前停止。
        - `SaveModelCallback`：保存最佳模型。

```py
from fastai.callback.tracker import EarlyStoppingCallback, SaveModelCallback

learn.fine_tune(10, cbs=[EarlyStoppingCallback(monitor='valid_loss', patience=3),
                         SaveModelCallback(monitor='accuracy')])
```

---

#### 📊 PyTorch vs fastai 训练对比

---

#### ✅ 总结

在 fastai 中，模型训练就是：

- <b>定义 Learner → 调用 fit/fine_tune → 可选回调和学习率查找</b>  
 几行代码即可完成完整的训练流程。

You pointed out that FastAI simplifies a lot compared to PyTorch. In PyTorch, you have to manually set up the optimizer, loss function, and handle backpropagation. But with FastAI's `Learner` class, you can achieve these tasks with much simpler code. Also, you're correct that FastAI makes transfer learning easy. It allows you to use pre-trained models and adapt them for your specific tasks.

## Model evaluation

### In pytorch

- 在验证集或测试集上运行前向传播，不进行梯度更新。

```py
model.eval()
with torch.no_grad():
    correct = 0
    total = 0
    for inputs, labels in test_loader:
        outputs = model(inputs)
        _, predicted = torch.max(outputs.data, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()

print(f"Accuracy: {100 * correct / total:.2f}%")
```

---

#### In fastai

在 <b>fastai</b> 中，模型评估（evaluation）同样是高度封装的，你不用像在 PyTorch 那样手写测试循环。fastai 提供了多种方法来检查模型性能、可视化结果和解释错误。

---

#### 📌 常用的模型评估方法

1. <b>评估指标 (Metrics)</b>
    - 在定义 `Learner` 时就可以指定评估指标，例如 `accuracy`、`error_rate` 等。
    - 训练过程中会自动显示这些指标。

```py
learn = vision_learner(dls, resnet18, metrics=accuracy)
```

1. <b>验证集评估</b>
    - 使用 `learn.validate()` 在验证集上运行一次评估，返回 loss 和指标。

```py
learn.validate()
```

1. <b>预测 (Prediction)</b>
    - 单样本预测： 
    ```py
pred, pred_idx, probs = learn.predict("test_image.jpg")
print(pred, pred_idx, probs)
```
    - 批量预测： 
    ```py
preds, targets = learn.get_preds()
```

2. <b>结果展示</b>
    - 快速查看模型在验证集上的预测结果： 
    ```py
learn.show_results()
```

3. <b>模型解释 (Interpretation)</b>
    - fastai 提供了 `ClassificationInterpretation` 来分析错误分类： 
    ```py
from fastai.interpret import ClassificationInterpretation
interp = ClassificationInterpretation.from_learner(learn)
interp.plot_top_losses(9, figsize=(7,7))   # 显示损失最大的样本
interp.plot_confusion_matrix(figsize=(6,6)) # 混淆矩阵
interp.most_confused()                      # 最常见的错误类别对
```

---

#### 📊 PyTorch vs fastai 模型评估对比

---

#### ✅ 总结

在 fastai 中，模型评估就是：

- <b>metrics 自动跟踪</b>
- <b>validate() 一行评估</b>
- <b>predict() 快速预测</b>
- <b>show_results + Interpretation 可视化和错误分析</b>

👉 它把 PyTorch 中需要几十行代码的评估过程，简化成几行即可完成。

## Model save

In PyTorch, you can save a model's state dictionary using `torch.save`. For example, if your model is named `model`, you'd do something like `torch.save(model.state_dict, "model.pth")`. To load it back, you first create an instance of the same model class, then use `model.load_state_dict(torch.load`

