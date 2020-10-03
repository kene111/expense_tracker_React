import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

import Transaction from './Transaction';

const TransactionList= () => {

    

    const { transactions } =  useContext(GlobalContext);

    return (
        <> 
           <h3>History</h3>
           <ul  className="list">

                {transactions.map( transaction => (<Transaction key ={transaction.id} transaction={transaction}/>) )}
                
           </ul>
        </>
    )
}

// Basically, what is going on is, we destructured the array on line 6
// then we looped through each of the items in the array using .map()
// then we said for each item display it in a list
export default TransactionList;