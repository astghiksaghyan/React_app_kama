import Posts from '../Posts/Posts';
const Profiles = ({profilePage, addPost}) => {
    return <div className="content">
        <Posts postsData={profilePage.posts} addPost={addPost}></Posts>
    </div>
}

export default Profiles;