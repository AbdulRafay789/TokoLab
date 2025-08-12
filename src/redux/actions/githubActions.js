
import api from '../../services/githubService';

export const fetchUsers = (query) => async (dispatch) => {
  dispatch({ type: 'LOADING' });
  try {
    const res = await api.get(`/search/users?q=${encodeURIComponent(query)}`);
    dispatch({ type: 'SET_USERS', payload: res.data.items });
  } catch (err) {
    console.error(err);
    dispatch({ type: 'ERROR', payload: err.message });
  }
};

export const fetchUserDetails = (username) => async (dispatch) => {
  dispatch({ type: 'LOADING' });
  try {
    const res = await api.get(`/users/${encodeURIComponent(username)}`);
    dispatch({ type: 'SET_SELECTED_USER', payload: res.data });
  } catch (err) {
    console.error(err);
    dispatch({ type: 'ERROR', payload: err.message });
  }
};

export const clearSelectedUser = () => ({ type: 'CLEAR_SELECTED_USER' });
