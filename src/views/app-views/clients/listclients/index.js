import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, Table, Tooltip, Button, Spin} from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { withRouter} from 'react-router-dom';

import AvatarStatus from 'components/shared-components/AvatarStatus';
import { fetchUsers, deleteUser } from 'redux/actions/UserActions';
import UserView from './UserView';
import { Link } from "react-router-dom";


class UserList extends Component {
    state = {
        selectedUser: null,
    };

    componentDidMount() {
        this.props.fetchUsers();
    }

    showUserProfile = (userInfo) => {
        this.setState({ selectedUser: userInfo });
    };

    closeUserProfile = () => {
        this.setState({ selectedUser: null });
    };

    render() {
        const { users, loading, error, deleteUser } = this.props;
        const { selectedUser } = this.state;

        if (loading) {
            return<div className="text-center">
                <Spin size="large" />
            </div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        const tableColumns = [
            {
                title: 'User',
                dataIndex: 'name',
                render: (_, record) => (
                    <div className="d-flex">
                        <AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase();
                        b = b.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Username',
                dataIndex: 'username',
            },
            {
                title: 'Email',
                dataIndex: 'email',
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
            },
            {
                title: 'Website',
                dataIndex: 'website',
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right">
                        <Tooltip title="View">

                                <Link to={`/app/clients/edit-profile/${elm.id}`}>
                                    <Button
                                        type="primary"
                                        className="mr-2"
                                        icon={<EyeOutlined />}
                                        size="small"
                                    />
                                </Link>


                            />
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() => deleteUser(elm.id)}
                                size="small"
                            />
                        </Tooltip>
                    </div>
                ),
            },
        ];

        return (
            <Card bodyStyle={{ padding: '0px' }}>
                <Table columns={tableColumns} dataSource={users} rowKey="id" />
                <UserView
                    data={selectedUser}
                    visible={selectedUser !== null}
                    close={this.closeUserProfile}
                />
            </Card>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    loading: state.users.loading,
    error: state.users.error,
});

const mapDispatchToProps = {
    fetchUsers,
    deleteUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
