---
title: 归档
layout: default
permalink: /archives.html
---

<h1 style="font-family:var(--font-mono);font-size:1.3em;margin-bottom:1em;">归档</h1>

<input type="text" id="search-input" placeholder="搜索文章..." style="width:100%;padding:0.6em 1em;font-size:0.92em;border:1px solid var(--border);border-radius:4px;background:var(--bg);color:var(--text);font-family:var(--font-body);margin-bottom:1.5em;outline:none;" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'" />

<div id="archives-list">
{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
<h2 style="font-family:var(--font-mono);font-size:1em;color:var(--text-muted);margin:1.5em 0 0.5em;">{{ year.name }}</h2>
<ul style="padding:0;list-style:none;">
{% for post in year.items %}
<li class="archive-item" style="list-style:none;margin:0.4em 0;padding-left:0;"><span style="font-family:var(--font-mono);font-size:0.82em;color:var(--text-muted);margin-right:0.8em;">{{ post.date | date: "%m-%d" }}</span><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
{% endfor %}
</div>

<script>
(function() {
  var input = document.getElementById('search-input');
  var items = document.querySelectorAll('.archive-item');
  input.addEventListener('input', function() {
    var q = this.value.toLowerCase();
    items.forEach(function(item) {
      item.style.display = item.textContent.toLowerCase().indexOf(q) > -1 ? '' : 'none';
    });
    document.querySelectorAll('#archives-list h2').forEach(function(h) {
      var ul = h.nextElementSibling;
      var hasVisible = false;
      ul.querySelectorAll('li').forEach(function(li) { if (li.style.display !== 'none') hasVisible = true; });
      h.style.display = hasVisible ? '' : 'none';
      ul.style.display = hasVisible ? '' : 'none';
    });
  });
})();
</script>
