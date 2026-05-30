---
layout: post
title: "#23 NEVER REINVENT THE WHEEL"
subtitle: 
update: 2022-07-15
category: 
tags: newsletter
place: 
weather: 
permalink: never-reinvent-the-wheel.html
description: 要不时去检查自己想要的和自己正在做的事情。映射到写代码这件事上，这和 NEVER REINVENT THE WHEEL 是直接关联的。
poster: 
duration: 
length: 
mp3: 
discussion: 
---

使用 Emacs 时，我会更倾向于通过配置实现一些特定的功能，而不是贸然使用插件，因为很多时候我并不需要整个插件的功能，而只是其中之一二，例如中英文混排的等宽显示。

这样一来的思维惯性，可让自己更了解细节。直到我今天打开一个 PDF 文档，准备注释时发现新开的 frame 的字体显示问题。

尝试修复时我突然意识到——围绕最初的功能，代码已经越来越臃肿，这显然也意味着需求已经被放大了若干倍。如果是这样，何不去借助已有的 package 呢？果然我发现了 cnfonts！

我觉得这件事给我的教训就是——要不时去检查自己想要的和自己正在做的事情。映射到写代码这件事上，这和 NEVER REINVENT THE WHEEL 是直接关联的。

Read more

* <https://github.com/tumashu/cnfonts>
