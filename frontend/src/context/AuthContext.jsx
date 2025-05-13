import { createContext, useContext, useEffect, useReducer } from "react";

// Initial state
const initialState = {
    user: localStorage.getItem('user') !== undefined 
    ? JSON.parse(localStorage.getItem('user')) 
    : null,
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
};

// Create context
export const authContext = createContext(initialState);

// Reducer function
const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN_START':
            return{
                user: null,
                role: null,
                token: null,
            };

        case "LOGIN_SUCCESS":
            return{
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role,
            };

        case 'LOGOUT':
            return{
                user: null,
                role: null,
                token: null,
            };        

        default:
            return state;
    }
};

// AuthContextProvider component
export const authContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Sync the state with localStorage
    useEffect(() => {
        if (state.user) {
            localStorage.setItem('user', JSON.stringify(state.user));
        }
        if (state.token) {
            localStorage.setItem('token', state.token);
        }
        if (state.role) {
            localStorage.setItem('role', state.role);
        }
    }, [state]);

    return (
        <authContext.Provider value={{ 
            user: state.user, 
            token: state.token, 
            role: state.role, 
            dispatch 
        }}>
            {children}
        </authContext.Provider>
    );
};
