import { useState } from 'react'
import './App.css'



function Heading() {
  return (
    <h1 className='heading text-5xl bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent p-4 drop-shadow-xl'> Daily Quote </h1>
  )
}

function QuoteBox() {
  return (
    <div className="quote-box flex flex-col justify-center items-center p-5 ">

      <span>"</span>

      <p className='text-xl'>The more you try , The better you become Lorem ipsum dolor sit aur adipisicing elit. Dolorem sint rerum, rem culpa quasi veritatis asuta magnam, porro molestias! </p>

      <span>"</span>
    </div>
  )
}

function AuthorName() {
  return (
    <div className="author-name  flex flex-col justify-end items-center ">
      <p className='text-xl'> - Dhanjit Nath</p>
    </div>


  )
}

function MainQuoteBox() {
  return (
    <div className='main-quote-box h-96 mx-10 bg-slate-700 p-4 shadow-lg rounded-lg flex flex-col justify-evenly overflow-y-scroll '>
      <QuoteBox />
      <AuthorName />
    </div>
  )
}

function GetQuoteBtn() {
  return (
    <div className='bg-slate-100 text-black px-10 py-3 rounded-3xl text-lg'>
      New Quote
    </div>
  )
}

function Button({ imgSrc  }) {
  return (
    <button className ="bg-slate-300 rounded-3xl p-2">
      <img src={imgSrc} alt="button" />
    </button>
  )
}

function NavigationButtons() {
  return (
    <div className="navigation-buttons flex  justify-center items-center gap-5 ">
      <Button imgSrc={"/images/back.png"} />
      <Button imgSrc={"/images/save.png"}/>
      <Button imgSrc={"/images/forward.png"}/>
    </div>

  )
}

function TranslateBtn() {
  return (
    <div className="translate-btn bg-slate-200 text-black px-10 py-3 rounded-3xl text-lg cursor-pointer" >
      <p className='text-lg'>Assamese</p>
    </div>
  )
}

function App() {
  let quoteValue = "You are awesome "
  const [quote, setQuote] = useState(quoteValue)

  return (
    <>
      <div className="main-container bg-gray-900 text-white h-screen w-full
     flex flex-col items-center gap-5
     " style={{ backgroundImage: "" }}>

        <Heading />

        <MainQuoteBox />


        <NavigationButtons />

        <TranslateBtn />

      </div>
    </>
  )
}

export default App
