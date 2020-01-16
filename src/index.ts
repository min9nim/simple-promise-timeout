export default function(promise: Promise<any>, timeout: number, timeoutError?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    let fulfilled = false
    promise
      .then(res => {
        if (fulfilled) {
          return
        }
        fulfilled = true
        resolve(res)
      })
      .catch(err => {
        if (fulfilled) {
          return
        }
        fulfilled = true
        reject(err)
      })
    setTimeout(() => {
      if (fulfilled) {
        return
      }
      fulfilled = true
      if (timeoutError) {
        reject(timeoutError)
        return
      }
      reject(new Error('timeout error [' + timeout + 'ms]'))
    }, timeout)
  })
}
