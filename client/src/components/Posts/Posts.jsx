import s from './Posts.module.css';
import Post from '../Post/Post';

const Posts = ({postsData}) => {
    const posts = postsData.map((postData) => {
        return <Post message={postData.message} likesCount={postData.likesCount}></Post>;
    });
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
};

export default Posts;