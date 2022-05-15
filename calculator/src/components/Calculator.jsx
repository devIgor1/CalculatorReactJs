import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container'; 
import { Box } from '@mui/system';

export default function Calculator() {
    const[num,setNum]=useState(0)
    const[oldNum,setOldNum]=useState(0)
    const[operator,setOperator]=useState()

    function inputNum(e){
        var input= e.target.value
        if(num===0){
          setNum(input);
        }else{
          setNum(num+input)
        }
    }

    function clear(e){
      setNum(0)
    }

    function percentage(e){
      setNum(num / 100)
    }

    function changeSign(){
      if(num>0){
        setNum(-num);
      } else{
        setNum(Math.abs(num))
      }
    }
    function calculate(){
      if(operator==='/'){
        setNum(parseFloat(oldNum) / parseFloat(num));
    }
    if(operator==='X'){
      setNum(parseFloat(oldNum) * parseFloat(num));
    } 
    if(operator==='-'){
      setNum(parseFloat(oldNum) - parseFloat(num));
    } 
    if(operator==='+'){
      setNum(parseFloat(oldNum) + parseFloat(num));
    } 
      console.log('CALCULOU!')
      console.log(oldNum)
      console.log(num)
      console.log(operator)
    }
    
    function operatorHandle(e){
      var operatorInput=e.target.value
      setOperator(operatorInput)
      setOldNum(num)
      setNum(0)
    }
  return (
      <div>
          <Box m={5}/>
      <Container maxWidth="xs">
    <div className='wrapper'>
        <Box m={12}/>
        <h1 className='result'>{num}</h1>
        <button className='lwhite' onClick={clear}>AC</button>
        <button className='lwhite' onClick={changeSign}>+/-</button>
        <button className='lwhite' onClick={percentage}>%</button>
        <button className='orange' onClick={operatorHandle} value={'/'}>/</button>
        <button className='gray' onClick={inputNum} value={7}>7</button>
        <button className='gray' onClick={inputNum} value={8}>8</button>
        <button className='gray' onClick={inputNum} value={9}>9</button>
        <button className='orange' onClick={operatorHandle} value={'X'}>X</button>
        <button className='gray' onClick={inputNum} value={4}>4</button>
        <button className='gray' onClick={inputNum} value={5}>5</button>
        <button className='gray' onClick={inputNum} value={6}>6</button>
        <button className='orange' onClick={operatorHandle} value={'-'}>-</button>
        <button className='gray' onClick={inputNum} value={1}>1</button>
        <button className='gray' onClick={inputNum} value={2}>2</button>
        <button className='gray' onClick={inputNum} value={3}>3</button>
        <button className='orange' onClick={operatorHandle} value={'+'}>+</button>
        <button className='gray' onClick={inputNum} value={0}>0</button>
        <button className='lwhite'onClick={inputNum} value={'.'}>.</button>
        <button className='lwhite' style={{visibility: 'hidden'}}>,</button>
        <button className='orange' onClick={calculate}>=</button>
    </div>
    </Container>
    </div>
  )
}
