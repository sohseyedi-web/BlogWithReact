import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Posts.module.css'

const Posts = ({ posts }) => {

    return (
        <section className={`${classes.posts} container`}>
            {
                posts ? (
                    posts.map((post) => (
                        <Link to={`/post/${post.id}`} className={classes.link}>
                            <div className={classes.box} key={post.id}>
                                <p className={classes.name}>Author : {post.author}</p>
                                <p className={classes.title}>Title : {post.title}</p>
                            </div>
                        </Link>
                    ))
                ) :
                    <div className='text-center display-3' dir='rtl'>لطفا صبر کنید ... </div>
            }
        </section>
    )
}

export default Posts
