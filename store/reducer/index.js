
const ACTIONS = {
    SUCCESS: 'success',
    ERROR: 'error',
    SEARCH:'search'
};

export const initialState = {
  postsData: [],
  filterdPosts : [],
  error: null,
};


export const fetchPosts = (state= initialState, action) => {
    switch (action.type) {      
        case ACTIONS.SUCCESS: {
            return {
                ...state,
                postsData: action.data,
                filterdPosts : action.data,
            };
        }
        case ACTIONS.ERROR: {
            return {
                ...state,
                error: action.error,
            };
        }

        case ACTIONS.SEARCH:{
            return {
                ...state,
                filterdPosts: action.data
            }
        }
    }
};


