import React, { useCallback, useReducer } from 'react';
import { Product, products } from '../dummy_product';

enum Action {
    ADD = "ADD",
    REMOVE = "REMOVE",
    ADDONE = "ADDONE",
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    CHECKOUT = "CHECKOUT",
    PAYMENT = "PAYMENT"
}

type ReducerActionType = {
    type: Action;
    payload?: any;
}

type InitStateType = {
    token: string;
    items: Product[];
    totalPrice: number;
}

const initState: InitStateType = {
    token: JSON.parse(localStorage.getItem('token')!) || null,
    items: [],
    totalPrice: 0
};

const reducer = (state: InitStateType, action: ReducerActionType): InitStateType => {
    let updatedItems: Product[] = [...state.items];
    const product: Product = products.find(p => p.id === action.payload)!;
    const productIndex = state.items.findIndex(p => p.id === action.payload);

    switch (action.type) {
        case "ADD":

            if (productIndex >= 0) {
                updatedItems = state.items.map(p => p.id === action.payload ? { ...p, quantity: p.quantity + 1 } : p);
            } else {
                updatedItems.unshift(product);
            }

            return {
                token: state.token,
                items: updatedItems,
                totalPrice: state.totalPrice + product.price * product.quantity,
            }

        case "REMOVE":

            const prod: Product = state.items.find(p => p.id === action.payload)!;

            if (prod.quantity > 1) {
                updatedItems = state.items.map(p => p.id === action.payload ? { ...p, quantity: p.quantity - 1 } : p);
            } else {
                updatedItems = state.items.filter(p => p.id !== prod.id);
            }

            return {
                token: state.token,
                items: updatedItems,
                totalPrice: state.totalPrice - product.price * product.quantity
            }

        case "ADDONE":
            updatedItems = state.items.map(p => {
                if (p.id === action.payload) {
                    return { ...p, quantity: p.quantity + 1 }
                }
                return p;
            });

            return {
                token: state.token,
                items: updatedItems,
                totalPrice: state.totalPrice + product.price * product.quantity
            }

        case "CHECKOUT":
            localStorage.setItem('successShop', JSON.stringify('successShop'));

            return {
                token: state.token,
                items: state.items,
                totalPrice: state.totalPrice
            }

        case "PAYMENT":
            localStorage.setItem('successShop', JSON.stringify('successShop'));

            return {
                token: state.token,
                items: [],
                totalPrice: 0
            }

        case "LOGIN":
            localStorage.setItem('token', JSON.stringify(action.payload));
            localStorage.setItem('loggedin', JSON.stringify(action.payload));

            return {
                token: JSON.stringify(action.payload),
                items: state.items,
                totalPrice: state.totalPrice
            }

        case "LOGOUT":
            localStorage.removeItem('token');
            window.location.reload();

            return {
                token: '',
                items: state.items,
                totalPrice: state.totalPrice
            }

        default:
            throw new Error();
    }
}

type ContextType = {
    token: string;
    isLoggedIn: boolean;
    items: Product[],
    add: (id: string) => void;
    remove: (id: string) => void;
    addOne: (id: string) => void;
    checkout: () => void;
    payment: () => void;
    login: (token: string) => void;
    logout: () => void;
    totalPrice: number;
}

export const StoreContext = React.createContext<ContextType>({
    token: '',
    isLoggedIn: false,
    items: [],
    add: () => { },
    remove: () => { },
    addOne: () => { },
    checkout: () => { },
    payment: () => { },
    login: () => { },
    logout: () => { },
    totalPrice: 0,
});

const StoreContextProvider = (props: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    const addToCart = useCallback((id: string) => dispatch({ type: Action.ADD, payload: id }), []);
    const removeFromCart = useCallback((id: string) => dispatch({ type: Action.REMOVE, payload: id }), []);
    const addOne = useCallback((id: string) => dispatch({ type: Action.ADDONE, payload: id }), []);
    const checkout = useCallback(() => dispatch({ type: Action.CHECKOUT }), []);
    const makePayment = useCallback(() => dispatch({ type: Action.PAYMENT }), []);

    const login = useCallback((token: string) => {
        dispatch({ type: Action.LOGIN, payload: token });
    }, []);
    
    const logout = useCallback(() => {
        dispatch({ type: Action.LOGOUT });
    }, []);

    const contextValue: ContextType = {
        items: state.items,
        token: state.token,
        isLoggedIn: !!state.token && state.token.length > 800,
        add: addToCart,
        remove: removeFromCart,
        addOne,
        checkout,
        payment: makePayment,
        login,
        logout,
        totalPrice: state.totalPrice
    }

    setTimeout(() => {
        localStorage.removeItem('successShop');
        localStorage.removeItem('loggedin');
    }, 4000);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;