const initialState = {
    count: 0
    };
    
const globalReducer = (state = initialState, action) => {
    // switch(action.type) {
    // case COUNTER_CHANGE:
    // return {
    // ...state,
    // count:action.payload
    // };
    // default:
    // return state;
    // }
    return state;
}
    
export default globalReducer;