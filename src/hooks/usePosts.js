import {useEffect, useMemo} from "react";

export const useSortedPosts = (posts, selectedSort) => {
    const sortedPosts = useMemo(()=>{
        if (!selectedSort){
            return [...posts]
        }else{
            return [...posts].sort((post1, post2)=>{
                if (selectedSort === 'id'){
                    return post2[selectedSort] - post1[selectedSort]
                }
                return post1[selectedSort].localeCompare(post2[selectedSort])
            })
        }
    }, [posts, selectedSort])
    return sortedPosts
}

export const useSortedAndFilteredPosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndFilteredPosts = useMemo(()=>{
        if(!query){
            return [...sortedPosts]
        }else{
            return ([...sortedPosts].filter((post)=>{
                return (
                    post.title.includes(query)
                    ||
                    post.body.includes(query)
                    ||
                    String(post.id).includes(query)
                )
            }))
        }
    },[sortedPosts, query])

    return sortedAndFilteredPosts
}

export const useSortedAndFilteredPostsArrays = (posts, sort, query, perPage) =>{
    const sortedAndFilteredPosts = useSortedAndFilteredPosts(posts, sort, query)
    
    const sortedAndFilteredPostsArrays = useMemo(()=>{
        const result = []
        for (let i = 0; i < sortedAndFilteredPosts.length; i += perPage) {
            const chunk = sortedAndFilteredPosts.slice(i, i + perPage);
            result.push(chunk);
        }
        return(result)
    },[sortedAndFilteredPosts])
    return sortedAndFilteredPostsArrays
}