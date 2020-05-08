# Elementary_Arithmetic

it's a language called ELAR which support elementary arithmetic.

ELAR's sytanx like lisp, having four buildin function: add, subtract, multipy, divide.

## start

```bash

npx elar

yarn install -g elar

```


## play

### repl

```bash
> elar

> ? (add 1 (divide 2  (multipy 4 2) ) )
# 1.5
```

### exe file

```bash

elar run example/example.elar

```

### How to build the language

1. [Build own your language —— Tokenize](https://github.com/baixiaoji/blog/issues/39)
2. [Build own your language —— Parse](https://github.com/baixiaoji/blog/issues/40)
3. [Build own your language —— Evaluate](https://github.com/baixiaoji/blog/issues/41)