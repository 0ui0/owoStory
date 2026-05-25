---
title: "[转]PowerShell为什么强大"
date: 2016-06-11 20:18
categories: [来自QQ空间]
tags: [QQ空间迁移]
---

> 微软是一个很”低调”的公司,取名为微软，感觉有“微微软下去”的意思，这是个玩笑了。windows 操作系统 和office办公软件，如此之优秀，微软也没敢命名为PowerOS 和 PowerOffice，但是在Monad（PowerShell的前身）发布后的第二年（2006年），微软就直接就发布了Windows PowerShell 1.0，并且”大言不惭“地命名为PowerShell，这也有点太不淡定了。
今天我根据自己的体验来稍微总结一下为什么PowerShell如此之强大。
破天荒的方便
诸如存储计算中GB，MB，KB单位等；数组声明中的1..n和下标为-1的处理；还有所见即所得，通俗易懂的动词+名词结构Cmdlet。
面向对象
与面向过程相比，面向对象更方便更容易描述现实世界，也算赶上了时髦。
绑上.NET这棵大树
正所谓大树下面好乘凉，PowerShell绑上.NET这个大款了，借助.NET Framework平台强大的类库，几乎让一切都成为可能。
强大的兼容性
完全兼容windows 平台上其它调用，如可执行文件(exe)，批处理bat和vb script等。
基于平台的可扩展性
微软有个优点，与应用相比，它更喜欢做平台。PowerShell早已变成一个平台，在PowerShell 刚发布的第二年，微软的System Center Operations Manager 和 SharePoint就提供了针对该平台的组件，后来的活动目录，Hyper-V，Windows Azure，Office 365就更不用说了。除了微软，亚马逊的云平台管理，Dell的out-of-hand 管理，也都提供了基于PowerShell的管理组件。PowerShell 俨然变成了一个标准，变成了一个规范。
举例介绍
如果您第一次听说过PowerShell，想稍微观望下，且看下面的10个例子。
[数学计算]  (39+79-51)*497/28 = ?
心算再快，应当也没有敲回车键快吧：
1
2
PS> (39+79-51)*497/28
1189.25


