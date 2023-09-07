import axios from "axios";


const API = axios.create({baseURL : "http://localhost:5000"})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req ;
})

export const logIn = (authData) =>  API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData);
export const getAllQuestions = () => API.get('/questions/get');
export const postAnswer = (id,noOfAnswers,answerBody , userAnswer) => API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody , userAnswer})
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
export const deleteAnswer = (id , answerId , noOfAnswers) => API.patch(`/answer/delete/${id}` , {noOfAnswers, answerId})
export const voteQuestion =(id , value) =>  API.patch(`/questions/vote/${id}` , {value })


export const getAllUsers = () => API.get('/user/getAllUsers')
export const updatedProfile = (id , updateData) => API.patch(`/User/update/${id}` , updateData)

