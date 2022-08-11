//selectors

export const getPostById = ({ posts }, postId) => posts.find((post) => post.id === postId);

export const getPostsAllApartFromSelected = ({ posts }, postId) =>posts.filter((post) => post.id !== postId);
// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');

export const deletePost = (payload) => ({type: DELETE_POST,payload});


// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
    return statePart.filter(post => post.id !== action.payload);
    default:
      return statePart;
  };
};

export default postsReducer;