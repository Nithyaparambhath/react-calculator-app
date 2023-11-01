import React, { useState } from 'react'

function Calculator() {

    const [inputData, setInputData] = useState("");
    const [result, setResult] = useState("");


    const handleInput = (value) => {
        setResult(result + value);
        setInputData(inputData + value);
        
    };

    const handleCalculate = () => {
        try {
          setResult(eval(result).toString());
          setInputData(eval(result).toString());
          
        } catch (err) {
          setInputData(alert("Invalid operation. Please try again."));
        }
      };
    
      const handleClear = () => {
        setResult("");
        setInputData("");
       
      };
    
      const handleBackSpace = () => {
        
        setResult(inputData.slice(0,-1));
        setInputData(inputData.slice(0, -1));
      
        
      };


  return (
    <div div className='p-3'>
    <div className=" d-flex justify-content-center align-items-center">
       
      </div>
      <div  className="  full content container-fluid">
        <div  className="  d-flex justify-content-end align-items-center text-light p-2 mb-5">
          {/*  */}
          <h1 >
           
       
            {
              inputData?.length>0?
              inputData
              : result
            }
            </h1> 
                
        </div>
        <div style={{height:'350px'}} className="">
           <div className="d-flex justify-content-evenly align-items-center mb-2">
              <button style={{backgroundColor:'#a5a5a5'}} onClick={handleClear}  className="me-2  btn border rounded-5 p-3" >C</button>
              <button style={{backgroundColor:'#a5a5a5'}}  onClick={()=>handleBackSpace('space')} className=" me-2  border  rounded-5 p-3" ><i class="fa-solid fa-delete-left fa-xl"></i></button>
              <button style={{backgroundColor:'#a5a5a5'}}  onClick={() => handleInput('/')} className=" me-2  btn border-none rounded-5 p-3" >/</button>
              <button style={{backgroundColor:'#ff9e0a',color:'#ffffff'}}  onClick={() => handleInput('*')} className=" me-2  btn border-none rounded-5 p-3" >*</button>
            </div>
            <div className="d-flex justify-content-evenly align-items-center mb-2 ">
              <button style={{backgroundColor:'#333333',color:'#ffffff'}} onClick={() => handleInput('7')} className=" me-2  btn border-black rounded-5 p-3" >7</button>
              <button style={{backgroundColor:'#333333',color:'#ffffff'}} onClick={() => handleInput('8')} className=" me-2  btn border-black rounded-5 p-3" >8</button>
              <button style={{backgroundColor:'#333333',color:'#ffffff'}} onClick={() => handleInput('9')} className=" me-2  btn border-black rounded-5 p-3" >9</button>
              <button style={{backgroundColor:'#ff9e0a',color:'#ffffff'}}  onClick={() => handleInput('-')} className=" me-2  btn border rounded-5 p-3" >-</button>
            </div>
            <div className=" d-grid d-flex justify-content-evenly align-items-center mb-2 ">
              <button style={{backgroundColor:'#333333',color:'#ffffff'}} onClick={() => handleInput('4')} className=" me-2  btn border-black rounded-5 p-3  " >4</button>
              <button style={{backgroundColor:'#333333',color:'#ffffff'}} onClick={() => handleInput('5')} className="  me-2  btn border-black rounded-5 p-3" >5</button>
              <button style={{backgroundColor:'#333333',color:'#ffffff'}} onClick={() => handleInput('6')} className="  me-2  btn border-black rounded-5 p-3" >6</button>
              <button  style={{backgroundColor:'#ff9e0a',color:'#ffffff'}}  onClick={() => handleInput('+')} className="  me-2  btn border rounded-5 p-3" >+</button>
            </div>
            <div className="d-flex justify-content-evenly align-items-center mb-2">
              <button style={{backgroundColor:'#333333',color:'#ffffff'}} onClick={() => handleInput('3')} className="  me-2  btn border-black rounded-5 p-3" >3</button>
              <button style={{backgroundColor:'#333333',color:'#ffffff'}} onClick={() => handleInput('2')} className="  me-2  btn border-black rounded-5 p-3" >2</button>
              <button style={{backgroundColor:'#333333',color:'#ffffff'}} onClick={() => handleInput('1')} className="  me-2  btn border-black rounded-5 p-3" >1</button>
              <button style={{backgroundColor:'#ff9e0a',color:'#ffffff'}}  onClick={() => handleInput('.')} className="  me-2  btn border rounded-5 p-3" >.</button>
            </div>
            <div className="d-flex justify-content-evenly align-items-center mb-5">
              <button style={{backgroundColor:'#333333',color:'#ffffff'}}  onClick={() => handleInput('00')} className="  me-2 btn border-black rounded-5 p-3" >00</button>
              <button style={{backgroundColor:'#333333',color:'#ffffff'}}  onClick={() => handleInput('0')}  className=" me-2  btn border-black rounded-5 p-3" >0</button>
              <button style={{backgroundColor:'#333333',color:'#ffffff'}}  onClick={() => handleInput(',')}  className="  me-2  btn border-black rounded-5 p-3" >,</button>
              <button style={{backgroundColor:'#ff9e0a',color:'#ffffff'}}  onClick={handleCalculate} onC className=" me-2  btn border-none rounded-5 p-3" >=</button>
            </div>
            
           

          </div>
      </div>
    </div>
  )
}

export default Calculator