---
title: 归档
layout: default
permalink: /archives.html
---

<h1 style="font-family:var(--font-mono);font-size:1.3em;margin-bottom:1em;">归档</h1>

<input type="text" id="search-input" placeholder="搜索文章..." style="width:100%;padding:0.6em 1em;font-size:0.92em;border:1px solid var(--border);border-radius:4px;background:var(--bg);color:var(--text);font-family:var(--font-body);margin-bottom:1.5em;outline:none;" onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'" />

<div id="search-results" style="display:none;margin-bottom:2em;"></div>

<div id="archives-list">
{% assign posts_by_year = site.posts | where_exp: "post", "post.layout != 'redir'" | group_by_exp: "post", "post.date | date: '%Y'" %}
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
  var archivesList = document.getElementById('archives-list');
  var searchResults = document.getElementById('search-results');
  var searchData = null;

  function loadSearchData() {
    if (searchData) return Promise.resolve();
    return fetch('/search.json').then(function(r) { return r.json(); }).then(function(data) {
      searchData = data;
    });
  }

  input.addEventListener('input', function() {
    var q = this.value.toLowerCase().trim();
    if (!q) {
      searchResults.style.display = 'none';
      archivesList.style.display = '';
      return;
    }
    loadSearchData().then(function() {
      var results = searchData.filter(function(post) {
        return post.title.toLowerCase().indexOf(q) > -1 || post.content.toLowerCase().indexOf(q) > -1;
      });
      archivesList.style.display = 'none';
      searchResults.style.display = '';
      if (results.length === 0) {
        searchResults.innerHTML = '<p style="color:var(--text-muted);">未找到相关文章</p>';
      } else {
        searchResults.innerHTML = '<ul style="padding:0;list-style:none;">' + results.map(function(post) {
          return '<li style="list-style:none;margin:0.5em 0;"><span style="font-family:var(--font-mono);font-size:0.82em;color:var(--text-muted);margin-right:0.8em;">' + post.date.slice(5) + '</span><a href="' + post.url + '">' + post.title + '</a></li>';
        }).join('') + '</ul>';
      }
    });
  });
})();
</script>
