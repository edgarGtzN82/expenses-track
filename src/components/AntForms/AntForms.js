import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../../firebase'; 
import 'antd/dist/antd.css';
import './AntForms.css'
import { Form, DatePicker, InputNumber, Cascader, Button, message } from 'antd';

import Rechart from '../RechartLine/RechartLine';

const AntForms = () => {
    
    //const [expense, setExpense] = useState({});
    //const [expenseList, setExpenseList] = useState([]);
    const [form] = Form.useForm();
    const [categories, setCategories] = useState([]);
    const [expensesList, setExpenseList] = useState([]);
    const [options, setOptions] = useState(
       [ {
            value: '',
            label: '',
            children: [
                {
                    value: '',
                    label: '',
                },
            ],
        },]
    );

     useEffect(() => {
        const unsubscribe = firebase.collection('/families/YyFHrDCUMwTHKaDQyqix/categories').onSnapshot(snap => {
            const data = snap.docs.map(doc => doc.data())
            setCategories(data)
        });
        return () => unsubscribe()
    }, [])  

    useEffect(() => {
        const unsubscribe = firebase.collection('/families/YyFHrDCUMwTHKaDQyqix/expenses').orderBy('date').onSnapshot(snap => {
            const data = snap.docs.map(doc => doc.data())
            setExpenseList(data)
        });
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        console.log("categories changed!");
        setOptions(categories.map(cat => ({
            value: cat.catName,
            label: cat.catName,
            children: cat.subCats.map(sC => ({ value: sC, label: sC }))
        })));
    }, [categories]);

    function onCatChange(value) {
        console.log(value.join('/'));
    }


    const onFinish = (values) => {
        console.log('Success:', values);
        console.log(values.date.format("YYYY/MM/DD"));
        const expense = {
            category: values.category[0],
            subCategory: values.category[1],
            date: values.date.format("YYYY/MM/DD"),
            qty: values.qty
        }
        firebase.collection('/families/YyFHrDCUMwTHKaDQyqix/expenses').add(expense)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                message.success({
                    content: '¡Gasto Almacenado con éxito!',
                    style: {
                        marginTop: '20vh'
                    },
                });
                form.resetFields();
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });;
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                form={form}
                name="expense_input"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: 'default',
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item className='Cascader'
                    label="Categoría"
                    name="category"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor seleecione la categoría!',
                        },
                    ]}
                >
                    <Cascader
                        options= {options}
                        onChange={(value) => onCatChange(value)}
                    />
                </Form.Item>
                <Form.Item 
                    label="Fecha"
                    name="date"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor seleccione la fecha!',
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item 
                    label="Cantidad"
                    name="qty"
                    rules={[
                        {
                            required: true,
                            type: 'number',
                            message: 'Por favor ingrese la cantidad!',
                        },
                    ]}
                >
                <InputNumber />
                </Form.Item>
                <Form.Item>
                    <Button 
                        type="primary"
                        htmlType="submit"    
                    >
                        Submit
                 </Button>
                </Form.Item>
            </Form>
            <Rechart data={expensesList}/>
        </>
    );
};

export default AntForms;