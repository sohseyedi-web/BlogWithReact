import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Posts from './../Components/Posts/Posts';
import Form from './../Components/Form/Form';
import http from './../Services/https';
import { ToastContainer } from 'react-toastify';
import Full from '../Components/FullPost/Full';

const Container = () => {

    const [posts, setPosts] = useState(null);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await http.get("/blogs");
                setPosts(response.data)
            } catch (error) {

            }
        }

        return getPosts();
    })

    return (
        <>
            <ToastContainer />
            <Navbar />
            <Routes>
                <Route path="/" element={<Posts posts={posts} />} />
                <Route path="/send" element={<Form />} />
                <Route path="/post/:id" element={<Full />} />
            </Routes>
        </>
    )
}

export default Container
