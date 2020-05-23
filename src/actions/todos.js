import {
    ADD_SUCCESS,
    DELETE_SUCCESS,
    GET_MESSAGE,
    GET_SUCCESS,
    UPDATE_SUCCESS,
} from "./types";
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

export const addTodo = (title, id) => (dispatch) => {

    const body = JSON.stringify({title});
    axios.post('http://localhost:8082/api/v1/todos' ,body, config)
        .then(res => {

            dispatch({
                type: ADD_SUCCESS,
                payload: {
                    title: title,
                    id: id
                }
            });
        }).catch(err =>{
        dispatch({
            type: GET_MESSAGE,
            payload: {
                message: "Add element error",
            }
        })
    })
};

export const getTodos = () => (dispatch) => {

    axios.get('http://localhost:8082/api/v1/todos', config)
        .then(res => {
            dispatch({
                type: GET_SUCCESS,
                payload: res.data
            })
        }).catch(err =>{
        dispatch({
            type: GET_MESSAGE,
            payload: { message:"Get elements error"}
        })
    })};

export const deleteTodo = (id) => (dispatch) => {

    axios.delete(`http://localhost:8082/api/v1/todos/${id}`, config)
        .then(res => {
            dispatch({
                type: DELETE_SUCCESS,
                payload: {
                    id: id
                }
            })
        }).catch(err =>{
        dispatch({
            type: GET_MESSAGE,
            payload: {
                message: "Delete element error",
            }
        })
    })};

export const updateTodo = (id, title) => (dispatch) => {

    const body = JSON.stringify({title});

    axios.put(`http://localhost:8082/api/v1/todos/${id}`, body, config)
        .then(res => {
            dispatch({
                type: UPDATE_SUCCESS,
                payload: {
                    id: id,
                    title: title
                }
            })
        }).catch(err => {
        dispatch({
            type: GET_MESSAGE,
            payload: {
                message: "Update element error",
            }
        })
    })};