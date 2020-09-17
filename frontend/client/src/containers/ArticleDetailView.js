import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Button, Card } from 'antd'
import CustomForm from '../components/Form';



const ArticleDetail = (props) => {

    const [article, setArticle] = useState({});

    useEffect(() => {
        const articleID = props.match.params.articleID
        axios.get(`http://localhost:8000/api/${articleID}/`)
            .then(res => {
                setArticle(res.data);
            })
    }, [])

    const handleDelete = (event) => {
        const articleID = props.match.params.articleID
        axios.delete(`http://localhost:8000/api/${articleID}/`)
        
    }

    return (
        <div>
            <Card title={article.title}>
                <p>{article.content}</p>
            </Card>
            <CustomForm
                requestType="put"
                articleID={props.match.params.articleID}
                btnText="Update"
            />
            <form onSubmit={handleDelete}>
                <Button type="danger" htmlType="submit">
                    Delete
                </Button>
            </form>
        </div>
    );
}

export default ArticleDetail;
