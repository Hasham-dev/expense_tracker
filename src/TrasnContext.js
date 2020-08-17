import React,{createContext, useReducer} from 'react'
import TrasactionReducer from './transRreducer';


const instialTransactions = [
    { amount: 100, desc: "Cash" },
    { amount: -60, desc: "Book" },
    { amount: -20, desc: "Camera" }
]

export const TransactionContext = createContext(instialTransactions);


export const TransactionProvider = ({children})=>{
    let [state,dispatch] = useReducer(TrasactionReducer,instialTransactions);
    
    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRSANCTION",
            payload:{
                amount:transObj.amount,
                desc: transObj.desc
            },
        })
    }
    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}