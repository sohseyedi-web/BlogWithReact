import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import classes from './Full.module.css'
import http from './../../Services/https';
import { toast } from 'react-toastify';

const Full = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const [message, setMessage] = useState('');
    const [text, setText] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const { data } = await http.get(`/blogs/${id}`)
                setMessage(data)

            } catch (error) {

            }
        }
        return getPosts();
    })

    const handleDelete = async () => {
        try {
            await http.delete(`/blogs/${id}`)
            toast.error('Done ... !')
            navigate('/')
        } catch (error) {

        }
    }

    return (
        <section className='container pt-5'>
            <div className={classes.content}>
                <div className={classes.header}>
                    <div className={classes.name}>Name : {message.author}</div>
                    <div className={classes.title}>Title : {message.title}</div>
                </div>
                <div className={classes.body}>
                    <p>Body : {message.body}</p>
                </div>
                <div className={classes.footer} onClick={handleDelete}>
                    <button className={classes.btn}>Delete Post</button>
                </div>
            </div>
        </section>
    )
}

export default Full
