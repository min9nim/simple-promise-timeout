# atomicasync

`simple-promise-timeout` is a function that returns promise which is rejected if promise is not fulfilled whthin timeout given

<br>

## Install

```
npm i simple-promise-timeout
```

<br>

## Usage

```javascript
import promiseTimeout from "simple-promise-timeout"

const promise1: any = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved")
  }, 400)
})
await promiseTimeout(promise1, 200) // will be rejected after 200ms
```
