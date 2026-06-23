---
layout: post
title: 在 Emacs 里实现无外部依赖的离线词典
subtitle: sdcv-pure.el — 纯 Elisp 的 StarDict 词典查询
update: 2026-06-23
category: post
tags: emacs
place:
weather: 晴
permalink:
description: 不需要安装 sdcv 命令行工具，不需要网络连接，纯 Elisp 实现的 StarDict 词典查询。一切都在 Emacs 内完成。
poster:
---

## 为什么做这个

Emacs 社区里查词典最常见的方案是 [sdcv.el](https://github.com/manateelazycat/sdcv)，它封装了 `sdcv` 这个命令行程序来查询 StarDict 格式的词典。

问题在于：你必须先安装 `sdcv`。

在各种受限环境里，多一个外部依赖就多一分麻烦。而 StarDict 的词典格式本身并不复杂——`.idx` 索引 + `.dict.dz` 压缩数据——完全可以用纯 Elisp 解析。

[sdcv-pure.el](https://github.com/jsntn/sdcv-pure.el) 就做了这件事：**零外部依赖**，直接在 Emacs 里读取 StarDict 词典文件，实现离线查词。

## 功能

三种查询方式，覆盖不同场景：

**`sdcv-simple-definition`** — 弹窗查词（popup overlay）

光标放在单词上，一键弹出释义。支持在多本词典间切换：

- `C-j` 下一本词典
- `C-k` 上一本词典
- `y` 复制释义到 kill ring
- 其他任意键关闭弹窗

词典按需加载，只有翻到时才解析，翻过的结果缓存在内存里，来回切换瞬间完成。

**`sdcv-complete-definition`** — 多词典完整展示

所有词典的结果在一个 buffer 中依次列出，适合需要对比不同词典释义的场景。同样用 `C-j` / `C-k` 在词典间跳转，`q` 关闭。

**`sdcv-select-definition`** — 选择词典查词

先选词典，再查词。适合你只想看特定词典的结果。

## 查词历史

设置 `sdcv-history-file` 后，每次查询的单词会自动记录，最新的在最前面，自动去重：

```elisp
(setq sdcv-history-file "~/sdcv-history.txt")
```

这个历史文件是纯文本，一行一个词——你可以用它来复习、统计高频生词、或者导入到 Anki。

## 配置示例

```elisp
(add-to-list 'load-path "/path/to/sdcv-pure.el")
(require 'sdcv-pure)

(setq sdcv-simple-dict
  '("~/.stardict/dic/stardict-lazyworm-ec-2.4.2"))

(setq sdcv-multiple-dicts
  '(("~/.stardict/dic/stardict-lazyworm-ec-2.4.2")
    ("~/.stardict/dic/stardict-langdao-ce-gb-2.4.2")
    ("~/.stardict/dic/stardict-langdao-ec-gb-2.4.2")))

(global-set-key (kbd "C-c d") 'sdcv-simple-definition)
(global-set-key (kbd "C-c D") 'sdcv-complete-definition)
```

## 设计哲学

- **无外部依赖** — 不需要 sdcv、不需要网络、不需要 Python。只要 Emacs 和词典文件。
- **离线优先** — 词典数据在本地，查询在本地，没有任何网络请求。
- **懒加载** — 词典文件只在第一次查询时打开并缓存，不影响 Emacs 启动速度。
- **可组合** — popup 弹窗和 buffer 展示两种模式，根据需要选择。

## 获取

项目地址：[https://github.com/jsntn/sdcv-pure.el](https://github.com/jsntn/sdcv-pure.el)

StarDict 词典文件可以从网上找到各种语言的版本。放到本地目录，配置路径即可使用。

## 扩展阅读

- [StarDict 词典格式说明](https://github.com/huzheng001/stardict-3/blob/master/dict/doc/StarDictFileFormat)
- [陈斌的原始实现](https://github.com/redguardtoo/emacs.d/blob/be57e47c974015bb4623b1d32f41fed5b126d229/lisp/init-dictionary.el) — sdcv-pure.el 基于此代码发展而来
