import { useRef } from 'react';
import s from './Posts.module.css';
import Post from '../Post/Post';

const Posts = ({postsData, newPostText, addPost, updateNewPostText}) => {
    const posts = postsData.map((post) => {
        return <Post key={post.id} message={post.message} likesCount={post.likesCount}></Post>;
    });
    const textAreaRef = useRef(null);
    const addCurrentPost = () => {
        addPost();
    };
    const onPostChange = () => {
        const value = textAreaRef.current.value;
        updateNewPostText(value);
    };
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={textAreaRef}
                        onChange={onPostChange}
                        value={newPostText}
                    />
                </div>
                <div>
                    <button onClick={addCurrentPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
};

export default Posts;