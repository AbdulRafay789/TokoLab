
const initialState = { users: [], loading: false, selectedUser: null, error: null };

export default function githubReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOADING': return { ...state, loading: true };
    case 'SET_USERS': return { ...state, users: action.payload, loading: false };
    case 'SET_SELECTED_USER': return { ...state, selectedUser: action.payload, loading: false };
    case 'CLEAR_SELECTED_USER': return { ...state, selectedUser: null };
    case 'ERROR': return { ...state, loading: false, error: action.payload };
    default: return state;
  }
}
