import { getAdvisorList } from "../actions";

const initialState = { advisor: [], isLoading: false, status: false };

export const actionCreators = {

  requestWeatherForecasts: () => async (dispatch, getState) => {
    dispatch({ type: 'GET_ADVISOR', data: initialState });
    await fetch('https://raw.githubusercontent.com/Unitz-Co/int-quiz/main/data.json', {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'GET_ADVISOR_SUCCESS', data: { advisor: data, isLoading: true, status: true }});
      })
      .catch((error) => {
        dispatch({ type: 'GET_ADVISOR_FAIL', data: { advisor: [], isLoading: true, status: false }});
      });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === 'GET_ADVISOR_SUCCESS') {
    return {
      data: action.data,
      isLoading: action.isLoading,
      status: action.status
    };
  }

  if (action.type === 'GET_ADVISOR_FAIL') {
    return {
      data: action.data,
      isLoading: action.isLoading,
      status: action.status
    };
  }

  return state;
};
