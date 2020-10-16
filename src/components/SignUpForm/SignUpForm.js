import React from 'react';
import 'antd/dist/antd.css';
import './SignUpForm.css'
import { Form, Input,Tooltip,Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const SignUpForm = ({ onSignUp } ) => {
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
            xs: {span: 24,},
            sm: {span: 8,},
        },
        wrapperCol: {
            xs: {span: 24,},
            sm: {span: 16,},
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {span: 24,offset: 0,},
            sm: {span: 16,offset: 8,},
        },
    };

    return (
        <div className='RegisterForm' >
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onSignUp}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="nickname"
                    label={
                        <span>
                            Nickname&nbsp;
                            <Tooltip title="What do you want others to call you?">
                            <QuestionCircleOutlined />
                            </Tooltip>
                        </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: 'Please input your nickname!',
                            whitespace: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignUpForm;