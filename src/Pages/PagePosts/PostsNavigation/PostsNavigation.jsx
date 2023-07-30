import React from 'react';
import styles from './PostsNavigation.module.css'

const PostsNavigation = ({pagesArr, current, prevPageHandler, nextPageHandler, clickPageHandler}) => {
    return (
        <div className={`row my-3 px-5 justify-content-between`}>
            <div 
                className={`col-auto order-md-1 ${styles.postsNavigation__button}`}
                onClick={prevPageHandler}
            >
                Назад
            </div>

            <div className='col-12 order-first col-md-auto order-md-2 row justify-content-center'>
                {
                    pagesArr.map((page)=>{
                        return(
                            <div 
                                className={`col text-center ${styles.postsNavigation__page} ${page === current ? styles.currentPage : ''}`} 
                                key={page}
                                onClick={()=>clickPageHandler(page)}
                            >
                                {page}
                            </div>)
                    })
                }
            </div>
            <div 
                className={`col-auto order-md-3 ${styles.postsNavigation__button}`}
                onClick={nextPageHandler}
            >
                Далее
            </div>
        </div>
    );
};

export default PostsNavigation;