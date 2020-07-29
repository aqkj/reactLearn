/**
 * 入口
 */
import React from 'react'
import ReactDom from 'react-dom'
console.log(123)
ReactDom.render(
  <div>123</div>,
  document.querySelector('#app'),
  () => {
    console.log('回调')
  }
)