import React, { useEffect } from 'react';
import './ExpenseForm.css';
import firebase from '../../firebase'; 
//import GraphExpenses from '../GraphExpenses/GraphExpenses';
import RechartLine from '../RechartLine/RechartLine';
import { LineChart, Line } from 'recharts';
import { DatePicker } from 'antd';
import AntForms from '../AntForms/AntForms';
import SiderDemo from '../../Layout/SiderDemo';

 
const ExpenseForm = () => {
    
    const [expense, setExpense] = React.useState({});
    const [expenseList, setExpenseList] = React.useState([]);

    let newExpense = {};

    const submitExpenseHandler = (event) => {
        event.preventDefault(); 
        firebase.collection('expenses').add(expense);
    }

    useEffect(() => {
        const unsubscribe = firebase.collection('expenses').orderBy('date').where('date', '>=', '2020-10-01').onSnapshot(snap => {
            const data =snap.docs.map(doc => doc.data())
           setExpenseList(data)
           });
            return () => unsubscribe()
        },[])

/*     useEffect(() => {
        firebase.collection('expenses').onSnapshot((snapshot) => {
            const tempList = [];
            snapshot.forEach(doc => {
                tempList.push(doc.data());
            })    
        setExpenseList(tempList) 
        })
    }); */


    const logHandle = (event) => {
        event.preventDefault();
        firebase.collection('expenses').where('date', '>=', '2020-01-01').where('cat', 'in', ['uno', 'nuevo']).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                console.log(expenseList);
            })
        })
        .catch(err => {
            console.log(err);
        })

    }

    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 500, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 600, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 558, pv: 2400, amt: 2400 }
    ];

    return (
        <>
            <SiderDemo />
            <form onSubmit={submitExpenseHandler} className='ExpenseForm' >
                <input
                    onChange={(e) => setExpense({...expense, cat :e.target.value}) }
                    type='text'
                    value={newExpense.cat}
                    placeholder='Categoria' />
                <input
                    onChange={(e) => setExpense({...expense, date: e.target.value })}
                    type='date'
                    placeholder='Fecha' />
                <input
                    onChange={(e) => setExpense({...expense, qty: e.target.value })}
                    type='number'
                    placeholder='Cantidad $' />
                <button type='submit'>
                    Guardar
            </button>
                <button onClick={logHandle}>
                    Update
            </button>
            </form>
{/*             <ul>
                {Object.keys(expenseList).map(id => {
                    return <li key={id}>{expenseList[id].cat} - {expenseList[id].qty} - {expenseList[id].date}</li>
                })}
            </ul> */}
            <RechartLine data={expenseList} />
            <AntForms />
        </>
        
    );
}

export default ExpenseForm;