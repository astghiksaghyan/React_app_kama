import { renderEntireTree } from './render';
 const state = {
    profilePage: {
        posts: [{
            id: 1,
            message: 'Hy, how are you?',
            likesCount: 1
        },
        {
            id: 2,
            message: 'It is my first post',
            likesCount: 5
        }]
    },
    dialogsData: [{
            id: 1,
            name: 'Astghik',
            message: 'Hi'
        },
        {
            id: 2,
            name: 'Davit',
            message: 'How are you?'
        },
        {
            id: 3,
            name: 'Yerem',
            message: 'Yo'
        },
        {
            id: 4,
            name: 'Poghos',
            message: 'Bo'
        }
    ]
};

export default state;


export const addPost = (postMessage) => {
    const newPost = {
        id: state.profilePage.posts.length + 1,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
};