import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, AreaChart, Area, CartesianGrid } from 'recharts';
import './RechartLine.css'

const RechartLine = (props) => {
    const dataInt = props.data.map(el => {
        return { date: el.date, qty: parseInt(el.qty) }
    })

    //Se suma la cantidad para los registros que tiene la misma fecha
    const exp = dataInt.reduce((acc, gasto) => {
        const elementoYaExiste = acc.find(elemento => elemento.date === gasto.date);
        if (elementoYaExiste) {
            return acc.map((elemento) => {
                if (elemento.date === gasto.date) {
                    return {
                        ...elemento,
                        qty: elemento.qty + gasto.qty
                    }
                }
                return elemento;
            });
        }
        return [...acc, gasto];
    }, []);

    //Se obtiene la suma acumulada para mostrar en la gráfica
    const expAcc = exp.map((elem, index) => exp.slice(0, index + 1).reduce((a, b) => {
        return {
            ...b, qty: a.qty + b.qty
            }
        }
    ));

    return (
        <div className='RechartLine'>
            <AreaChart width={800} height={400} data={expAcc}>
                <Area type="monotone" dataKey="qty" stroke="#8884d8" fill="#8884d8" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
            </AreaChart>
        </div>
    );

}

export default RechartLine;