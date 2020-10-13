import React from 'react';
import { VictoryLine, VictoryChart } from 'victory';
import './GraphExpenses.css'



const Victory = (props) => {


const data = [
    { q1: 1, earnings: 120},
    { q2: 2, earnings: 200 },
    { q3: 3, earnings: 158 },
    { q4: 4, earnings: 48 },
    { q5: 5, earnings: 17 },
    { q6: 6, earnings: 125 },
    { q7: 7, earnings: 500 },
];

const dataInt = props.data.map(el => {
    return {date: el.date, qty:parseInt(el.qty)}
})

    const exp = dataInt.reduce((acc, valorActual) => {
        const elementoYaExiste = acc.find(elemento => elemento.date === valorActual.date);
        if (elementoYaExiste) {
            return acc.map((elemento) => {
                if (elemento.date === valorActual.date) {
                    return {
                        ...elemento,
                        qty: elemento.qty + valorActual.qty
                    }
                }

                return elemento;
            });
        }

        return [...acc, valorActual];
    }, []);


/* let prevDate=null;
const exp  = props.data.map(ex => {
    if (ex.date === prevDate){
        acc = ex.qty;
    }
    return { date: ex.date, qty: parseInt(ex.qty)};
}) */
console.log(exp);

return (
    <div className='GraphExpenses'>
        <VictoryChart>
            <VictoryLine data={exp}
                x='date'
                y='qty' />
        </VictoryChart>
    </div>
);

}

export default Victory;