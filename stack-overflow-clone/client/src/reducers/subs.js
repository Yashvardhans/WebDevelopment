const subsReducer = (state = {data : null} , action) => {
    switch (action.type) {
        case 'FETCH_ALL_PLANS':
            return {...state , data : action.payload}  
    
        default:
            return state 
            }

}

export default subsReducer