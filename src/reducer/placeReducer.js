// placeReducer.js
import { ADD_PLACE } from '../actions/types';
const initialState = {
  placeName: '',
  places: ['Yoruba boys', '34,098 NGN']
};
const placeReducer = (state = initialState, action) => {
  console.log(" iyui", action, state.places)
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    default:
      return state;
  }
}
export default placeReducer;