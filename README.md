# Elementary_Arithmetic

[中文版](./README-zh.md)

it's a language called ELAR which support elementary arithmetic.

ELAR's sytanx like lisp, having four buildin function: add, subtract, multipy, divide.

## start

```bash

npx elar

yarn install -g elar

```


## playing

if not knowing what to do, please run `npx elar --help`, it will provide some example and explaination.

### repl

```bash
> elar

> ? (add 1 (divide 2  (multipy 4 2) ) )
# 1.5
```

### exec file

you can use `run` command to exec file which content match the ELAR grammer.

```bash

elar run example/example.elar

```

### How to build the language

there are three article to help you step by step to building the same language. But I writing by Chinese, but many code snapshot which will help you.

1. [Build own your language —— Tokenize](https://github.com/baixiaoji/blog/issues/39)
2. [Build own your language —— Parse](https://github.com/baixiaoji/blog/issues/40)
3. [Build own your language —— Evaluate](https://github.com/baixiaoji/blog/issues/41)


### Next

Think...