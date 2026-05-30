---
layout: post
title: "#30 人生苦短，要去折腾真正有意义的事情"
subtitle: 
update: 2023-01-16
category: 
tags: newsletter
place: 
weather: 
permalink: life-is-short.html
description: 这封 newsletter 太碎了，最后，来一句话做个总结吧——人生苦短，善用 Copilot，慎用 Windows。
poster: 
duration: 
length: 
mp3: 
discussion: 
---

## Revue 关闭了

如大家可能知道的，Revue 关闭了。

所以我近期已经把 Revue 的数据（包括历史 newsletter 和 subscriber）迁移至 Substack 了。

新的 Substack 地址为： <https://haikebang.substack.com>

## 高级数据保护

[2022-12-15 Thu 11:04] 刚启用了 iOS 16.2 RC 版本的「高级数据保护」。想到 Passkeys 也来了，再加上大家近来对手机隐私的重视。我预测库克很快就要赢麻了。

![高级数据保护](/images/2023/01/advanced-data-protection.jpeg)

## Windows 是一点长进都没有啊

[2022-12-29 Thu 23:11] 我已经记不清上一次在 Windows 上调 Python 开发环境具体是什么时候了，至少得是 3 年前了吧…… 这次换完新的办公电脑，我今天又试着安装了一下，结果是在 virtualenv 里安装第一个 module 就遇到了个 filename too long 的报错，虽然后来通过设置一个短点的 TEMPDIR 解决了，但要用 Windows 的 Python 开发环境还是算了吧，我今天都不该试的。

## Emacs

[2023-01-03 Tue 21:04] 需要把 700 多个文件重命名，涉及到删、改和部分大小写转换，这活儿按照我本来的想法是得整一个 shell 脚本跑一遍的，用 Emacs 初始化了脚本后我突然想到也许 Emacs 的 dired 模式下可以快速完成吧？于是进入了 dired，dired-toggle-read-only，再然后就是在其中直接 query-replace 和借用正则尽情翱翔了，最后 wdired-finish-edit 退出，完成。

全程约 7 分钟，含 Google 约 1 分钟，感动加感慨了约 2 分钟，实际操作约 4 分钟。

按理说已经学习了 2 年 Emacs，我应该非常平静和冷淡地看待这件事才是，但我仍无法淡定，因为我发现在 Emacs 面前我还是像个才入门的菜鸡一样。

2 年了，不能说急切，哥都焦虑了，夜不能寐那种。

## 小宇宙

[2023-01-09 Mon 22:06] 使用小宇宙近一年，从最初我要在上面托管 feed 开始就添加了客服微信。期间提过几个问题，包括 Podcast 协议标准、时长显示问题，还有最近的 Show Notes 时间戳渲染格式问题，基本上每次的问题小宇宙都会很快就修复！我猜想小宇宙一定是一个敏捷的技术驱动型的团队的产品。另外，想到提出的问题被接受并修复，这应该也会间接让小宇宙的其他用户的体验好了一点，自己也十分开心。😀

## Copilot NB!

[2023-01-15 Sun 06:43] pamubay 分享了一段很好的代码，可以拿循环列表去替换目标内容中的值：

<https://discourse.gohugo.io/t/replace-function-when-applied-to-content-displays-html-tags-instead-of-rendering-them/37717>

我觉得在这段基础上继续去写的话，就可以做一个很实用的网站关键词内链的功能出来。

我都定好两个番茄钟了，结果初始化了一个 comment 解释说明下代码目的，敲了一个变量名，按了几次 Tab，Copilot 就把代码补全了。稍加删改后推送到 GitHub Pipeline，一分钟左右测试通过，部署也完成了。

<https://github.com/shufangOrg/shufang.org/blob/main/layouts/partials/replace-content-with-keywords-links.html>

Copilot NB!

![Copilot](/images/2023/01/copilot.png)

## 最后

这封 newsletter 太碎了，最后，来一句话做个总结吧 —— 人生苦短，善用 Copilot，慎用 Windows。
