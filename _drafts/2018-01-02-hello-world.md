---
layout: post-java
title: 从 Hello World 开始
update: 
category: java
permalink: java/hello.html
place: 
weather: 
description: 先来看一个 HelloWorld.java 程序。
highlightjs: y
---

先来看一个 `HelloWorld.java` 程序，这个程序在屏幕上打印出一串字符 `Hello World!`：

<pre><code class="java">
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
</code></pre>

程序中包括 Java 的一些基本特征：

- 类（class）：上面程序定义了一个类 `HelloWorld`，该类的名字与 `.java` 文件的名字相同
- 方法（method）：类的内部定义了该类的一个方法 `main`
- 语句（statement）：真正的“打印”功能由一个语句实现，即 `System.out.println("Hello World!")`

下面两点有关 Java 的书写方式：

- Java 中的语句要以 `;` 结尾（与 C/C++ 相同）
- 用花括号 `{}` 来整合语句，形成程序块。通过程序块，我们可以知道程序的不同部分的范围，比如类从哪里开始，到哪里结束
