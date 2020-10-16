import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../firebase'; 
import 'antd/dist/antd.css';
import './ExpensesPage.css'
import { AuthContext } from '../../Auth';
import { Button, message } from 'antd';
import {
    PlusOutlined
} from '@ant-design/icons';

import ExpenseCreationForm from '../../components/ExpenseCreateForm/ExpenseCreationForm';

const ExpensesPage = () => {

    const {currentUser} = useContext(AuthContext);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('/users/' + currentUser.uid +'/categories').onSnapshot(snap => {
            const data = snap.docs.map(doc => doc.data())
            setCategories(data)
            console.log(currentUser);
        });
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        setOptions(categories.map(cat => ({
            value: cat.name,
            label: cat.name,
            children: cat.subCats.map(sC => ({ value: sC, label: sC }))
        })));
    }, [categories]);

    const onCreate = (values) => {
        setLoading(true);
        console.log(currentUser.uid);
        //const userUID = 'YyFHrDCUMwTHKaDQyqix'
        const expense = {
        category: values.category[0],
        subCategory: values.category[1],
        date: values.date.format("YYYY/MM/DD"),
        qty: values.qty
        }
        firebase.firestore().collection('/users/' + currentUser.uid +'/expenses').add(expense)
            .then(function (docRef) {
                setLoading(false)
                console.log("Document written with ID: ", docRef.id);
                message.success({
                    content: '¡Gasto Almacenado con éxito!',
                    style: {
                        marginTop: '20vh'
                    },
                });
                setLoading(false);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        console.log('Received values of form: ', values);
        setVisible(false);
    };

    return (
        <div className='button-add'>
            <Button
                icon={<PlusOutlined />}
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
            </Button>
            <ExpenseCreationForm
                options={options}
                visible={visible}
                loading={loading}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};

export default ExpensesPage;