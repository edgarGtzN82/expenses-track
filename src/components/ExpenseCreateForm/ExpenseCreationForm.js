import React from 'react';
import {  Modal, Form, DatePicker, InputNumber, Cascader } from 'antd';
import 'antd/dist/antd.css';

const ExpenseCreationForm = ({ visible, onCreate, onCancel, loading, options }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    
    return (
        <Modal
            visible={visible}
            title="Agregar nuevo Gasto"
            okText="Agregar"
            cancelText="Cancelar"
            onCancel={onCancel}
            confirmLoading={loading}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }} >
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
                }}   >
                <Form.Item className='Cascader'
                    label="Categoría"
                    name="category"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor seleecione la categoría!',
                        },
                    ]} >
                    <Cascader
                        options={options}
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
                    ]} >
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
                    ]} >
                    <InputNumber />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ExpenseCreationForm;