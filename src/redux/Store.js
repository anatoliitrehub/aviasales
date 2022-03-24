import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
    sector: {
        valuta: "UAH",
        koef: 1,
    },
    result: 0,
    filter: {
        all: true,
        noOne: false,
        one: false,
        two: false,
        three: false,
    },
    counterValue: 0,

}

const reducer = (state = initialState, action) => {
    switch (action.type) { //обработка типа action действия
        case 'valuta': {
            return {
                ...state, //разворачиваем стейт
                sector: {

                    valuta: action.valuta,
                    koef: action.koef,
                } //новое знач
            }

        }

        case 'filter': {
            return {
                ...state, //разворачиваем стейт
                filter: {

                    one: action.one,
                } //новое знач
            }

        }

        default:
            return state;// вернуть без изменений
    }
};

const store = createStore(reducer, composeWithDevTools());


export default store;