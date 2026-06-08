# 骇客邦

> 以名誉为重，始于态度，这里没有领导者，却有为人尊重的英雄。

[haikebang.com](https://haikebang.com) 的源代码。基于 Jekyll 构建，通过 GitHub Pages 部署。

## 内容

- 📝 Newsletter — 不定期通讯，关于技术、工具、效率与思考
- 🎙️ Podcast — 播客节目（[iTunes](https://itunes.apple.com/podcast/id1306886829) / [RSS](/podcast.xml)）
- 📮 邮件订阅 — [haikebang.substack.com](https://haikebang.substack.com)

## 本地运行

需要 Ruby 环境和 Jekyll 3.8.x：

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

站点将运行在 `http://localhost:4000`。

## 部署

推送至 `main` 分支后，GitHub Actions 自动构建并部署至 GitHub Pages。
