

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 
  const[bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0)
  const handleMarkAsRead = (time)=>{
    const parsedTime = parseInt(time);
    setReadingTime(readingTime + parsedTime)
  }

  const handleAddToBookmarks = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks)
  }

  return (
    <>
     
    <div>
    <Header></Header>
    </div>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs 
    handleMarkAsRead={handleMarkAsRead}
    handleAddToBookmarks={handleAddToBookmarks}
    ></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
      
    </>
  )
}

export default App
