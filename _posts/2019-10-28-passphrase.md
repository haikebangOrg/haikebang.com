---
layout: post
title: 关于「密码」的一些建议
subtitle: 密码均可被破解
update: 2019-10-28
category: 
tags: 
place: 大连
weather: 晴
permalink: passphrase.html
description: 「密码学」是互联网的基石。
poster: /images/2019/10/akshay-m--y-UmkbyXaE-unsplash.jpg
duration: 
length: 
mp3: 
---

Unix 源码的 `/etc/passwd` 文件，包含了创始人 Ken Thompson 的密码哈希 `ZghOT0eRm4U9s`，一直破解不了。

直到 2019 年 10 月 9 日，有人用 AMD 的 GPU  算了四天才破解，这个上世纪 80 年代的密码为`p/q2-q4!`。

——出自 [Re: [TUHS] Recovered /etc/passwd files](https://inbox.vuxu.org/tuhs/CACCFpdx_6oeyNkgH_5jgfxbxWbZ6VtOXQNKOsonHPF2=747ZOw@mail.gmail.com/)

## 一些建议

注：本文中的「密码管理器」以 [KeePass](https://cn.apkjam.com/keepass.html) 为例。

001) **使用“强壮”的密码**

> generating with KeePass etc

使用「密码管理器」生成强壮的密码，无序排列远胜有意义的组合。

002) **不要使用“通用”密码**

> unique passphrase for each Website, App etc

不要在两个网站/应用上面使用同一个密码。

003) **保护好 OTP**

> OTP is good, secure it carefully if you are using it

004) **“设计”好你的密码**

> think about the DESIGN, and think it harder

思考如何设计一个强壮的密码。

例如：

- `@)!(` 是由 <kbd>shift</kbd> + `2019` 输出的
- `t@)!(b` 首字母 `t` 和尾字母 `b` 代表“淘宝”
- `!doGyMhO` 是 `OhMyGod!` 的反转
- `G@o)o!g(l!e)` 是 `Google` 和 <kbd>shift</kbd> + `201910` 的穿插组合
- 银行卡的密码——前四位和最后两位数的和、特别日期 MMDD 加上卡号首尾两位或末两位等……
- 同类网站/应用使用相同的密码规则

注意：密码长度不要过短。

005) **「密码学」是互联网的基石**

> learn ENCRYPTION

006) **不要依赖 KeePass**

> keep the Key & Source passphrase in your memory

总有一些密码是我们应该记在脑子里的，例如邮箱密码，对很多网站/应用而言，它们相当于密码的入口，一旦失去了「密码管理器」，邮箱可能是我们找回密码的途径。

007) **不要过于信任「记忆力」**

> there's no super memory

008) **密码均可被破解**

> cracking comes with encrypting

009) **定期修改密码**

> STRONG is relative

010) **不要把密码写在纸上**

> never ever

011) **开始吧**

> go change all your weak passphrase NOW

## 扩展阅读

- [强化 Evernote 的加密和隐私保护](https://jsntn.com/secure-evernote.html)
- [Vim 加密解密](https://jsntn.com/go/vim.html)
- [“隐私盒子”](/secure-portable.html)
- [便携版 Cryptomator](https://jsntn.com/software/portable-cryptomator.html)
