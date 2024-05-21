import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddBookmarkForm from './components/addbookmarkform/AddBookmarkForm'
import Bookmark from './components/bookmark/Bookmark'
import BookmarksList from './components/bookmarksList/BookmarksList'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' Component={BookmarksList}></Route>
        <Route path='/bookmark-list' Component={BookmarksList}></Route>
        <Route path='/bookmark-list/:searchTitle' Component={Bookmark}></Route>
        <Route path='/add-bookmark' Component={AddBookmarkForm}></Route>
        <Route path='/add-bookmark/:searchTitle' Component={AddBookmarkForm}></Route>
      </Routes>
    </>
  )
}

export default App
