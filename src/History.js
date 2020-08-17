import React, {useContext} from 'react';
import {TransactionContext} from './TrasnContext'

function History() {
    
    let {transactions} = useContext(TransactionContext);
    console.log(transactions);
    return (
        <div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return(<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default History;