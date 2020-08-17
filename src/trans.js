import React from 'react';

function Transaction(){
    return(
        <div>
            <h3>Add new transaction</h3>
            <hr />
            <form className="transaction-form">
                <label>
                    Enter Description <br />
                    <input type="text"  required/>
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number"  required/>
                </label>
                <br />
                <input type="submit" value="Add Transaction"/>
            </form>
        </div>
    )
}

export default Transaction;