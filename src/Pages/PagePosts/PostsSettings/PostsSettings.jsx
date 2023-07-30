import React from 'react';
import styles from './PostsSettings.module.css'

const PostsSettings = (
    {
        searchQuery,
        setSearchQuery
    }) => {
    return (
        <div>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className={`col-md-7 col-12 ${styles.postsSettings_search}`}
                    placeholder="Поиск"
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery(e.target.value)}
                />
            </div>
        </div>
    );
};

export default PostsSettings;