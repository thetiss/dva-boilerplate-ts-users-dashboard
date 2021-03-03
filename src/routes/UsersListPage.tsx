import React, { useState } from 'react';
import { connect } from 'dva';
import { Button, Table } from 'antd';
import UserModal from '../components/UserModal';
import Ex from '../components/Example';

const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

const UserListPage = () => {
    const [ userInfoModalVisible, setUserInfoModalVisible] = useState(false);
    return(
        <div>
            <h1>Users Dashboard</h1>
            <Button type='primary' onClick={() => alert('Success')}>Antd Button</Button>
            <Table dataSource={dataSource} columns={columns} />
            <UserModal visible={userInfoModalVisible} />
            <Ex />
            <Ex />

        </div>
    )
};
export default connect()(UserListPage);