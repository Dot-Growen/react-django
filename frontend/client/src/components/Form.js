import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const CustomForm = (props) => {

const handleFormSubmit = (event, requestType, articleID) => {
    event.preventDefault()
    const title = event.target.elements.title.value
    const content = event.target.elements.content.value
    
    switch ( requestType ) {
        case 'post':
            return axios.post('http://localhost:8000/api/', {
                title: title,
                content: content
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        case 'put':
            return axios.put(`http://localhost:8000/api/${articleID}/`, {
                title: title,
                content: content
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

}

    return (
        <>
            <Form onSubmitCapture={(event) => handleFormSubmit(
                event,
                props.requestType,
                props.articleID
            )} layout="vertical">
                <Form.Item label="Title">
                    <Input name="title" placeholder="Enter title here" />
                </Form.Item>
                <Form.Item label="Content">
                    <Input name="content" placeholder="Enter some content ..." />
                </Form.Item>
                <Form.Item>
                    <Button type='primary'  htmlType="submit">{props.btnText}</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default CustomForm