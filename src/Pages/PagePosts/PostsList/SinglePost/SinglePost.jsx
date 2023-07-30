import React from 'react';
import styles from './SinglePost.module.css';

const SinglePost = ({post}) => {
    return (
        <tr className={`${styles.post}`}>
            <td className='text-center'>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
        </tr>
    );
};

export default SinglePost;