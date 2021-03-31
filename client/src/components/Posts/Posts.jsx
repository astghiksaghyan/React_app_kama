import { useRef } from 'react';
import s from './Posts.module.css';
import Post from '../Post/Post';

const Posts = ({postsData, addPost}) => {
    const posts = postsData.map((post) => {
        return <Post key={post.id} message={post.message} likesCount={post.likesCount}></Post>;
    });
    const textAreaRef = useRef(null);
    const addCurrentPost = () => {
        addPost(textAreaRef.current.value);
    };
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={(textArea) => {
                        textAreaRef.current = textArea;
                    }}></textarea>
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