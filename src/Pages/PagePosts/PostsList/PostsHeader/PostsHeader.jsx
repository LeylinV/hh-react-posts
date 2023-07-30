import React from 'react';
import styles from './PostsHeader.module.css'

const PostsHeader = ({setSelectedSort}) => {
    return (
        <thead className={`table-dark text-center ${styles.posts__header}`}>
            <tr>
                <th className='col-1' onClick={()=>setSelectedSort('id')} scope='col'>ID   <i className="bi bi-chevron-down"></i></th>
                <th className='col-6' onClick={()=>setSelectedSort('title')} scope='col'>Заголовок   <i className="bi bi-chevron-down"></i></th>
                <th className='col-5' onClick={()=>setSelectedSort('body')} scope='col'>Описание   <i className="bi bi-chevron-down"></i></th>
            </tr>
        </thead>
    );
};

export default PostsHeader;