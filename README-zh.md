# Elementary_Arithmetic (四则运算)

我管这门语言叫做`ELAR`。 这门语言仅仅支持简单的四则运算。
其语法和`Lisp`语言类似，语言内置了加减乘除方法（分别是：add, subtract, multipy, divide）。

## 起步

```bash

npx elar

yarn install -g elar

```


## 玩一下

如果不知道如何玩起来，可以尝试运行`npx elar --help`，我提供了一些解释说明和运行的例子。

### repl (交互式解释器)

```bash
> elar

> ? (add 1 (divide 2  (multipy 4 2) ) )
# 1.5
```

### exec file (执行文件)

你可以使用 `run` 命令去执行符合 ELAR 语法的文件。

```bash

elar run example/example.elar

```

### 我是怎么创造这门语言的

以下三篇文章是我在思考写这门语言的随笔记录，如果你好奇一门语言是如何被创造出来的，你可以花点时间看看。

1. [Build own your language —— Tokenize](https://github.com/baixiaoji/blog/issues/39)
2. [Build own your language —— Parse](https://github.com/baixiaoji/blog/issues/40)
3. [Build own your language —— Evaluate](https://github.com/baixiaoji/blog/issues/41)

### 接下来

思考中ing