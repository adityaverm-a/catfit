import { toast } from 'react-toast'
import { v4 as uuidv4 } from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from './types'

export const successAlert = (msg) => async dispatch => {
    const id = uuidv4()
    dispatch({ type: SET_ALERT, payload: { msg, id } })

    toast.success(msg)

    setTimeout(() => {
        dispatch({ type: REMOVE_ALERT, payload: id})
        toast.hideAll()
    }, 5000)
}

export const errorAlert = (msg) => async dispatch => {
    const id = uuidv4()
    dispatch({ type: SET_ALERT, payload: { msg, id } })

    toast.error(msg)

    setTimeout(() => {
        dispatch({ type: REMOVE_ALERT, payload: id})
        toast.hideAll()
    }, 5000)
}

export const defaultAlert = (msg) => async dispatch => {
    const id = uuidv4()
    dispatch({ type: SET_ALERT, payload: { msg, id } })

    toast(msg)

    setTimeout(() => {
        dispatch({ type: REMOVE_ALERT, payload: id})
        toast.hideAll()
    }, 5000)
}

export const infoAlert = (msg) => async dispatch => {
    const id = uuidv4()
    dispatch({ type: SET_ALERT, payload: { msg, id } })

    toast.info(msg)

    setTimeout(() => {
        dispatch({ type: REMOVE_ALERT, payload: id})
        toast.hideAll()
    }, 5000)
}

export const warningAlert = (msg) => async dispatch => {
    const id = uuidv4()
    dispatch({ type: SET_ALERT, payload: { msg, id } })

    toast.warn(msg)

    setTimeout(() => {
        dispatch({ type: REMOVE_ALERT, payload: id})
        toast.hideAll()
    }, 5000)
}