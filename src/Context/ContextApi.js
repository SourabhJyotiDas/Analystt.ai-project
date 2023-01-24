import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import ApiReducer from "../Reducers/ApiReducer";

const ContextApi = createContext()

const ContextProvider = ({ children }) => {

    const initialValue = {
        ourData: [],
    }
    const [state, dispatch] = useReducer(ApiReducer, initialValue)

    const api = "https://jsonplaceholder.typicode.com/users"

    const updateApi = async (api) => {
        let { data } = await axios.get(api)
        dispatch({
            type: "GET_UPDATE_API",
            payload: data
        })
    }

    const toggleHide = (id) => {
        document.getElementById("toggleHidden").classList.toggle("hidden")
        dispatch({
            type: "SHOW_HIDE_BTN",
            payload: id
        })
    }

    useEffect(() => {
        updateApi(api)
    }, [])


    return <ContextApi.Provider value={{ ...state, toggleHide }}>
        {children}
    </ContextApi.Provider>
}

export { ContextApi, ContextProvider }
