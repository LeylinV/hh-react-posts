import React, {useEffect, useState} from 'react';
import PostsList from './PostsList/PostsList';
import PostsSettings from "./PostsSettings/PostsSettings";
import {useSortedAndFilteredPostsArrays} from "../../hooks/usePosts";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import { usePagination } from '../../hooks/usePagination';
import PostsNavigation from './PostsNavigation/PostsNavigation';

const PagePosts = () => {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    const [searchQuery, setSearchQuery] = useState('')
    const [selectedSort, setSelectedSort] = useState('')

    const sortedAndFilteredPostsArrays = useSortedAndFilteredPostsArrays(posts, selectedSort, searchQuery, limit)
    const pagesArr = usePagination(totalPages)

    const [fetchPosts, isLoading, postError] = useFetching(async (limit) => {
        const response = await PostService.getAll();
        const data = await response.json()
        setPosts([...data])
    })

    useEffect(()=>{
        setTotalPages(sortedAndFilteredPostsArrays.length);
        setPage(1)
    },[sortedAndFilteredPostsArrays])

    const prevPageHandler = () =>{
        setPage(page === 1 ? 1 : page - 1)
    }
    const nextPageHandler = () =>{
        setPage(page === totalPages ? totalPages : page + 1)
    }
    const clickPageHandler = (clickedPage) =>{
        setPage(clickedPage)
    }

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])


    return (
        <div className='container mt-3'>
            <PostsSettings
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <PostsList 
                setSelectedSort={setSelectedSort}
                posts={sortedAndFilteredPostsArrays.length > 0 ? sortedAndFilteredPostsArrays[page - 1] : []} 
                isLoading={isLoading} 
            />
            <PostsNavigation 
                prevPageHandler={prevPageHandler}
                nextPageHandler={nextPageHandler}
                clickPageHandler={clickPageHandler}
                pagesArr={pagesArr} 
                current={page}
            />
        </div>
    );
};

export default PagePosts;