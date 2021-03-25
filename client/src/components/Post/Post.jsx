import s from './Post.module.css';

const Post = ({
    message,
    likesCount
}) => {
    return (
        <div className={s.post}>
            <div>
                <p>{message}</p>
            </div>
            <div className={s.likes}>
                <p>{likesCount}</p>
            </div>
        </div>
    )
};

export default Post;