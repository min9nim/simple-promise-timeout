# simple-promise-timeout

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
promiseTimeout(promise1, 200) // will be rejected after 200ms
```

<br>

## Custom error

```javascript
const promise1: any = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error("promise1 error"))
  }, 400)
})
try {
  await promiseTimeout(promise1, 200, Error("custom error"))
} catch (e) {
  console.log(e.message) // print "custom error"
}
```
