//selectors

export const getPostById = ({ posts }, postId) => posts.filter((post) => post.id === postId);
// actions
const createActionName = actionName => `app/posts/${actionName}`;



// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsReducer;