import { useState } from 'react'
import './index.css'
import "./maincontent.css"
import './footer.css'
import Header from "./Header"
import Footer from "./Footer"
import MainContent from './MainContent'
export default function App(){
  return(
    <main>
    <Header/>
    <MainContent/>
    <Footer/>
    </main>
  )
}