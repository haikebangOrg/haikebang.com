---
layout: post
title: 用 Elfeed 打造本地离线 RSS 阅读系统
subtitle: 不依赖任何 RSS 云服务，新闻聚合完全本地化
update: 2026-06-27
category: post
tags: emacs
place:
weather: 晴
permalink:
description: 把阅读清单握在自己手里。无订阅、无算法、无云端死锁，用 Elfeed 在 Emacs 里安静地读 RSS。
poster:
---

## 为什么做这个

RSS 是互联网上最古老的开放协议之一，也是我个人获取信息的主力方式。

但过去几年的趋势是：RSS 服务一个接一个关闭，或者被收购后变质。算法推荐、广告追踪、付费墙、账户迁移——这些都不是我想要的阅读体验。

我不想再依赖 Feedly、Inoreader 或者任何一家的 RSS 服务器。我想要的是一个**完全本地运行**的阅读系统：

- 我的订阅清单，我自己掌握
- 我的文章数据库，存在我的硬盘里
- 我的已读、星标、搜索索引，不依赖任何第三方

[Elfeed](https://github.com/skeeto/elfeed) 就是 Emacs 生态里最适合这个需求的工具。

## 核心能力

Elfeed 是一个用 Emacs Lisp 写的 RSS/Atom 阅读器。它的数据全部存在本地一个索引文件里（`~/.emacs.d/.elfeed/index`），抓取的文章保存在 `~/.emacs.d/.elfeed/data` 目录下。

这意味着：不管网络好不好，你已经拉下来的文章永远可以读。

**基本界面**

- `M-x elfeed` 进入主列表
- `g` 刷新所有 feed
- `s` 搜索（标题、内容、作者、标签、时间范围都支持）
- `b` 在浏览器打开原文
- `r` 标记已读，`u` 标记未读
- `+` / `-` 添加或移除标签

**标签系统**

Elfeed 的标签非常灵活，可以给单篇文章打多个标签。配合搜索表达式用，你可以快速构造出自己的信息筛选器，比如：

```
+unread +emacs @3-days-ago
+starred +productivity @1-month-ago
```

## 我的配置

目录设定：

```elisp
(setq elfeed-db-directory (expand-file-name ".elfeed" user-emacs-directory))
```

订阅列表（节选）：

```elisp
(setq elfeed-feeds
      '(
        "https://nullprogram.com/feed/"
        "https://planet.emacslife.com/atom.xml"
        "https://sive.rs/feed"
        "https://protesilaos.com/master.xml"
        "https://simonwillison.net/atom/everything/"
        "https://feeds.feedburner.com/ruanyifeng"
        "https://feeds.appinn.com/appinns"
        "https://stephango.com/feed"
        "https://fs.blog/feed/"
        "https://www.joelonsoftware.com/feed"
        ))
```

## 跨设备同步

Elfeed 的 `.elfeed` 目录本质上就是一个普通文件夹。我用 rsync 每天把它镜像到另一台机器上的共享目录：

```elisp
(defun my-backup-elfeed-db ()
  "Copy Elfeed database to a shared directory for cross-device sync."
  (interactive)
  (let ((source (expand-file-name ".elfeed/" user-emacs-directory))
        (dest (expand-file-name "shared/.elfeed/" "~")))
    (make-directory dest t)
    (if (executable-find "rsync")
        (shell-command
         (format "rsync -av --delete %s %s"
                 (shell-quote-argument source)
                 (shell-quote-argument (file-name-directory dest))))
      (copy-directory source dest t t t))))
```

只要 rsync 能把 `.elfeed` 目录同步过去，Windows 或 NixOS 上的 Emacs 打开后状态完全一致。不需要任何在线服务帮你"同步阅读进度"。

## 设计哲学

- **离线优先** — 拉取一次，本地永久可读。
- **数据主权** — 订阅列表、阅读状态、文章存档都在自己硬盘上。
- **无算法** — 没有推荐流，没有"你可能感兴趣"。你决定读什么。
- **可迁移** — 整个 `.elfeed` 目录打包带走，换个机器继续用。

## 获取

- 项目地址：[https://github.com/skeeto/elfeed](https://github.com/skeeto/elfeed)