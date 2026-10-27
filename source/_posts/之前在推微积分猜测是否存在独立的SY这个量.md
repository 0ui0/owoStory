---
title: "之前在推微积分猜测是否存在独立的SY这个量"
date: 2026-10-27 12:05:00
categories: [数学]
tags: [微积分, 算子, 导数, 积分]
mathjax: true
---

之前在推微积分猜测是否存在独立的SY这个量
我想现在可以把它具体化了
首先关于算子 $d$，它是一个微差
$df = f_2 - f_1 = \Delta f$
根据通分法则，我们有
$d\left(\frac{y}{dx}\right) = \frac{y_2}{dx} - \frac{y_1}{dx} = \frac{y_2 - y_1}{dx} = \frac{dy}{dx}$
关于算子 $s$，它是一个连续无穷求和 $\Sigma$
$sf = \Sigma f(x_i)$
可以证明基本运算
$d(a+b) = da + db$
$s(a+b) = sa + sb$
和数乘
$c \cdot df = d(c \cdot f)$
$c \cdot sf = s(c \cdot f)$
其中 $a, b$ 是函数，$c$ 是常数
于是
微分是 $d\left(\frac{y}{dx}\right) = \frac{dy}{dx} = Y$
积分是 $s(Y \cdot dx) = sY \cdot dx = y + c$ （？$sY$ 是什么，后面解释）
其中互逆运算
$s(dy) = y + c$
$d(sY) = Y$
其中
$dy = Y \cdot dx = \Delta y + o(x) \approx \Delta y$ （三角形的对边）
类比 $dy$ 定义 $sY$
$sY = \frac{y+c}{dx} = \frac{s(Y \cdot dx)}{dx} = \Sigma Y_i + o(x) \approx \Sigma Y_i$ (矩形高度和） ，其中如图 $\Sigma Y_i = \Sigma f'(x_i)$

![矩形高度和](image1.png)

于是我发现教材很奇怪
微分取了前半 $\frac{dy}{dx}$
积分取了后半 $s(Y \cdot dx)$
但是在微分方程里，是真的可以对 $sf$ 单个应用上面的运算法则的，它不用强行绑定 $Y \cdot dx$
联合：
$$d(sY)$$
$$= d\left[\frac{y+c}{dx}\right]$$
$$= \frac{d(y+c)}{dx}$$
$$= \frac{dy}{dx} = Y$$
根据上述原子运算，我们尝试逆运算出积分算子的和公式（不算推导，因为有循环论证嫌疑）
有原函数 $f$ 和导函数 $F$
原函数 $g$ 和导函数 $G$
由微分算子和法则，有
$d(af+bg) = a \cdot df + b \cdot dg$
两边同时使用算子 $s$，得
$s[d(af+bg)] = s(a \cdot df + b \cdot dg)$
由 $s(dy) = y+c$ 逆运算法则和 $s$ 算子的数乘和加法法则，得
$af + bg + c_0 = a \cdot s(df) + b \cdot s(dg)$
由 $df = F \cdot dx$ $dg = G \cdot dx$，对 $df$ 施加 $s$ 做还原操作
$f+c = s(df) = s(F \cdot dx) = sF \cdot dx$
$g+c = s(dg) = s(G \cdot dx) = sG \cdot dx$
移项
$f = sF \cdot dx - c_1$
$g = sG \cdot dx - c_2$
带入上面的左边和右边，把小 $f$ 换成 $F$,得
$a(sF \cdot dx - c_1) + b(sG \cdot dx - c_2) + c_0 = a \cdot s(F \cdot dx) + b \cdot s(G \cdot dx)$
由数乘法则和分配律
$a(sF \cdot dx) - a \cdot c_1 + b(sG \cdot dx) - b \cdot c_2 + c_0 = a \cdot sF \cdot dx + b \cdot sG \cdot dx$
两边同时除 $dx$，得
$a \cdot sF - \frac{a \cdot c_1}{dx} + b \cdot sG - \frac{b \cdot c_2}{dx} + \frac{c_0}{dx} = a \cdot sF + b \cdot sG$
整理得
$a \cdot sF + b \cdot sG + \frac{-a \cdot c_1 - b \cdot c_2 + c_0}{dx} = s(aF+bG)$
常数项统一成 $c$，得
$a \cdot sF + b \cdot sG + c = s(aF+bG)$
即
$s(aF+bG) = a \cdot sF + b \cdot sG + c$
