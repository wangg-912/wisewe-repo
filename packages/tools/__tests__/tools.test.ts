import { isEmpty, isObject } from './../util'
describe('Utils:tools', () => {
  it('isObject', () => {
    expect(isObject({ name: 'zs' })).toBe(true)
    expect(isObject('xxxx')).toBe(false)
  })
  it('isEmpty', () => {
    expect(isEmpty({ name: 'zs' })).toBe(false)
    expect(isEmpty('')).toBe(true)
  })
})
