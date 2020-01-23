// Index of reducer

const initialState = {
  isLoading: false,
  price: null,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    default:
      console.log(state)
      return state;
  }
}