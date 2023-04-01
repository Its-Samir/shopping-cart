import React, { useCallback, useReducer } from 'react';
import { Product, products } from '../dummy_product';

enum ActionType {
    add,
    remove,
    addOne,
    login,
    logout,
    checkout
}

type ActionReducerType = {
    type: ActionType;
    payload?: string | object;
}

type InitStateType = {
    token: string;
    items: Product[];
    totalPrice: number;
}

const initState: InitStateType = { token: JSON.parse(localStorage.getItem('token')!) || null, items: [], totalPrice: 0 };

const reducer = (state: InitStateType, action: ActionReducerType): InitStateType => {
    let updatedItems: Product[] = [...state.items];
    const product: Product = products.find(p => p.id === action.payload)!;
    const productIndex = state.items.findIndex(p => p.id === action.payload);

    switch (action.type) {
        case ActionType.add:

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

        case ActionType.remove:

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

        case ActionType.addOne:
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

        case ActionType.checkout:
            localStorage.setItem('successShop', JSON.stringify(state.token))

            setTimeout(() => {
                localStorage.removeItem('successShop')
            }, 5000)

            return {
                token: state.token,
                items: [],
                totalPrice: 0
            }

        case ActionType.login:
            localStorage.setItem('token', JSON.stringify(action.payload));

            return {
                token: JSON.stringify(action.payload),
                items: state.items,
                totalPrice: state.totalPrice
            }

        case ActionType.logout:
            localStorage.removeItem('token');

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
    login: () => { },
    logout: () => { },
    totalPrice: 0,
});

const StoreContextProvider = (props: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    const add = useCallback((id: string) => dispatch({ type: ActionType.add, payload: id }), []);
    const remove = useCallback((id: string) => dispatch({ type: ActionType.remove, payload: id }), []);
    const addOne = useCallback((id: string) => dispatch({ type: ActionType.addOne, payload: id }), []);
    const checkout = useCallback(() => dispatch({ type: ActionType.checkout }), []);

    const login = useCallback((token: string) => {
        dispatch({ type: ActionType.login, payload: token });
    }, []);
    const logout = useCallback(() => {
        dispatch({ type: ActionType.logout });
    }, []);

    const contextValue: ContextType = {
        items: state.items,
        token: state.token,
        isLoggedIn: !!state.token && state.token.length > 800,
        add,
        remove,
        addOne,
        checkout,
        login,
        logout,
        totalPrice: state.totalPrice
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;