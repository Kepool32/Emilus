import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Input, Button, Spin } from 'antd';
import { fetchUser } from 'redux/actions/UserActions';
import { withRouter, useParams } from 'react-router-dom';

const EditProfile = (props) => {
    const { user, fetchUser, history } = props;
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUser(id);
    }, [fetchUser, id]);

    const handleSubmit = async (values) => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setLoading(false);
        history.push('/app/clients/list');
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <Card title="Edit Profile">
            {loading ? (
                <div className="text-center">
                    <Spin size="large" />
                </div>
            ) : (
                <Form onFinish={handleSubmit}>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true }]}
                        initialValue={user.name}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[{ required: true }]}
                        initialValue={user.username}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, type: 'email' }]}
                        initialValue={user.email}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[{ required: true }]}
                        initialValue={user.phone}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="website"
                        label="Website"
                        rules={[{ required: true }]}
                        initialValue={user.website}
                    >
                        <Input />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save change
                    </Button>
                </Form>
            )}
        </Card>
    );
};

const mapStateToProps = (state) => ({
    user: state.users.user,
});

const mapDispatchToProps = {
    fetchUser,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(EditProfile)
);
