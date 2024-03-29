import * as api from "../api/index"


export const askQuestion = (questionData , navigate) => async (dispatch) => {
    try {
        console.log(questionData);
        const { data } = await api.postQuestion(questionData)
        dispatch({type: "POST_QUESTION" , payload:data})
        dispatch(fetchAllQuestions())
        
        navigate("/")
    } catch (error) {
        console.log(error);
    }
    
}

export const fetchAllQuestions = () => async (dispatch) =>{
    try {
        const {data} = await api.getAllQuestions()
        dispatch({type : 'FETCH_ALL_QUESTIONS',  payload : data})
    } catch (error) {
        console.log(error)
    }
}

export const postAnswers = (answerData) => async (dispatch) =>{
    try {
    const {id , noOfAnswers,answerBody , userAnswer} = answerData
    const {data} = await api.postAnswer (id,noOfAnswers,answerBody , userAnswer)
    dispatch({type : "POST_ANSWER" , payload : data})
    dispatch(fetchAllQuestions())
    
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteQuestion = (id , navigate) => async(dispatch) => {
    try {
        await api.deleteQuestion(id)
        dispatch(fetchAllQuestions())
        navigate("/")
    } catch (error) {
        
    }

}

export const deleteAnswer = (id , answerId , noOfAnswers) =>async (dispatch) =>{
   try {
    const { data } = await api.deleteAnswer()
    dispatch(fetchAllQuestions())
   }   catch (error) {
      console.log(error); 
}
}

export const voteQuestion = (id , value) => async(dispatch) =>{
    try {
        await api.voteQuestion(id , value);
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error);
    }
}