import React from 'react'
import './style.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/context'

const Main = () => {

  
  const { prevPrompt, setPreviousPrompt,recentPrompt,setRecentPrompt,input,setInput,showResult,setShowResult,loading,setLoading,resultData,setResultData,onSent} =useContext(Context) 
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Call the onSent function when Enter key is pressed
      onSent();
    }
  };
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" />
      </div>
      <div className="main-conatainer">
        {!showResult
        ?<>
         <div className="greet">
          <p><span>Hello,</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card" 
          onClick={()=>{
          setInput("Suggest beautiful places to see on an upcoming road trip") 
          onSent()} 
          }>
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card" 
          onClick={()=>{
            setInput("Suggest beautiful places to see on an upcoming road trip") 
            onSent()} 
            }>
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card"
          onClick={()=>{
            setInput("") 
            onSent("Brainstorm team bonding activities for our work retreat")} 
            }>
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card"
          onClick={()=>{
            setInput("Tell me about React js and React native") 
            onSent()} 
            }>
            <p>Tell me about React js and React native</p>
            <img src={assets.code_icon} alt="" />
          </div>

        </div>
        </>
        :
        <div className='result'>
          <div className="result-title">
            <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading?
             <div className='loader'>
              <hr/>
              <hr/>
              <hr/>
            </div> 
            : 
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            
          </div>
          </div>}
        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' id='textInput'  onKeyPress={handleKeyPress}/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img src={assets.send_icon} onClick={()=>{onSent()}}alt="" />:null}
            </div>
          </div>
          <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
      </div>
    </div>
  )
}

export default Main
