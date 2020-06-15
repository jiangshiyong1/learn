import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { useMemo, useState } from "react";
import EleSign from "elesigncode"
var ele =document.getElementById('root')
  var eleSign = new EleSign();//实例化对象
  eleSign.init(); //初始化
  eleSign.moutedEle(ele) //将签名节点放入到传入的element节点中

function App() {
  const [name, setName] = useState('名称')
  const [content, setContent] = useState('内容')
  
  return (
    <>
      <button onClick={() => setName(new Date().getTime())}>name</button>
      <button onClick={() => setContent(new Date().getTime())}>content</button>
      <Button name={name}>{content}</Button>


    </>
  )
}

function Button({ name, children }) {
  function changeName(name) {
    console.log('11')
    return name + '改变name的方法'
  }

  const otherName = useMemo(() => changeName(name), [name])

  // const otherName = changeName(name)
  return (
    <>
      <div>{otherName}</div>
      <div>{children}</div>
    </>

  )
}

export default App;
