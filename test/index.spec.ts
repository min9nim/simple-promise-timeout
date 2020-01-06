import {expect} from 'chai'
import promiseTimeout from '../src'

describe('simple-promise-timeout test', () => {
  it('should be timeout error after timeout', async () => {
    const promise1: any = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolved')
      }, 400)
    })
    try {
      await promiseTimeout(promise1, 200)
      throw Error('promise1 is resolved')
    } catch (e) {
      expect(e.message).to.be.equal('timeout error [200ms]')
    }
  })
  it('should be resolved whthin timeout', async () => {
    const promise1: any = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolved')
      }, 200)
    })
    const result = await promiseTimeout(promise1, 400)
    expect(result).to.be.equal('resolved')
  })
  it('No error in promise1 should occur', async () => {
    const promise1: any = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(Error('promise1 error'))
      }, 400)
    })
    try {
      await promiseTimeout(promise1, 200)
    } catch (e) {
      expect(e.message).to.be.equal('timeout error [200ms]')
    }
  })
  it('should be thrown customized error', async () => {
    const promise1: any = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(Error('promise1 error'))
      }, 400)
    })
    try {
      await promiseTimeout(promise1, 200, Error('hello world'))
    } catch (e) {
      expect(e.message).to.be.equal('hello world')
    }
  })
})
