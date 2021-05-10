import Posts from '../Posts/Posts';
const Profiles = ({profilePage, addPost, updateNewPostText}) => {
    return <div className="content">
        <Posts
            postsData={profilePage.posts}
            newPostText={profilePage.newPostText}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        ></Posts>
    </div>
}

export default Profiles;