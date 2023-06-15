import React, { Component } from 'react';
import { Avatar, Drawer, Divider } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined, CloseOutlined } from '@ant-design/icons';

class UserView extends Component {
    render() {
        const { data, visible, close } = this.props;

        if (!data || !visible) {
            return null;
        }

        const { name, username, email, phone, address, website, company } = data;

        return (
            <Drawer
                title={name}
                placement="right"
                closable={false}
                visible={visible}
                width={300}
                onClose={close}
                footer={
                    <div style={{ textAlign: 'right' }}>
                        <CloseOutlined onClick={close} />
                    </div>
                }
            >
                <div className="text-center">
                    <Avatar size={80} icon={<UserOutlined />} />
                    <h4 className="mt-2">{username}</h4>
                    <p>{email}</p>
                </div>
                <Divider />
                <div className="mt-2">
                    <h5>
                        <PhoneOutlined /> Phone
                    </h5>
                    <p>{phone}</p>
                </div>
                <div className="mt-2">
                    <h5>
                        <MailOutlined /> Email
                    </h5>
                    <p>{email}</p>
                </div>
                <div className="mt-2">
                    <h5>
                        <EnvironmentOutlined /> Address
                    </h5>
                    <p>
                        {address.street}, {address.suite}, {address.city}, {address.zipcode}
                    </p>
                </div>
                <div className="mt-2">
                    <h5>Website</h5>
                    <p>{website}</p>
                </div>
                <div className="mt-2">
                    <h5>Company</h5>
                    <p>{company.name}</p>
                </div>
            </Drawer>
        );
    }
}

export default UserView;
