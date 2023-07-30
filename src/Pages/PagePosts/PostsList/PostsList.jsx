import React from 'react';
// import styles from './PostsList.module.css'
import SinglePost from './SinglePost/SinglePost';
import PostsHeader from './PostsHeader/PostsHeader';
// import Loader from "../../../UI/Loader/Loader";

const PostsList = ({posts, setSelectedSort, isLoading}) => {
    return (
        <div>
            <table className="table table-bordered table-hover align-middle">
                <PostsHeader setSelectedSort={setSelectedSort} />
                <tbody>
                    {
                        posts.map((post) => (
                            <SinglePost 
                                post={post} 
                                key={post.id}
                            />
                        ))
                    }
                 </tbody>
            </table>
        </div>
    );
};

export default PostsList;