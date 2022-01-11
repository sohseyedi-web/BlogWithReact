import React, { useState } from 'react'
import classes from './Form.module.css'
import { useNavigate } from 'react-router-dom';
import http from './../../Services/https';
import { toast } from 'react-toastify';

const Form = () => {
    const navigate = useNavigate();
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { author, title, body }
        console.log(user);
        try {
            await http.post('/blogs', user);
            toast.success('Send Post with success');
            navigate('/')
        } catch (error) {

        }
        setAuthor('');
        setTitle('');
        setBody('');
    }


    return (
        <section className='container pt-5'>
            <form className={classes.form} onSubmit={handleSubmit}>
                <input type="text" placeholder='Author ....' className={classes.input} value={author} onChange={(e) => setAuthor(e.target.value)} />
                <input type="text" placeholder='Title ...' className={classes.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder='Message ...' className={classes.textarea} value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <input type="submit" value="Send Post" className={classes.button} />
            </form>
        </section>
    )
}

export default Form
