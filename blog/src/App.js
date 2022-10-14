import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogShow from './components/BlogShow';
import NewBlog from './components/NewBlog';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn)

  return (
    <>
    <header>
    <Nav />
    </header>
    <main>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myblogs" element={<UserBlogs />} />
        <Route path="/myblogs/:id" element={<BlogShow />} />
        <Route path="/blogs/new" element={<NewBlog />} />
      </Routes>
    </main>
    </>
  );
}

export default App;
