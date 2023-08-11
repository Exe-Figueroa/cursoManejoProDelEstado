const initialState = {
  value: '',
  loading: false,
  error: false,
  deleted: false,
  confirmed: false
};

// const reducer = (state, action)=>{
  
// }
const reducer = (state, action)=>{
  if (action.type === 'ERROR') {
    return {
      ...state,
      error: true,
      loading: false
    }
  }else if(action.type === 'CHECK') {
    return {
      ...state,
      loading: true
    }
  }else {
    return{
      ...initialState
    }
  }
}