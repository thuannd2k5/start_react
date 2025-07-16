import { Table } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';


const UserTable = (props) => {

    const { dataUsers } = props;

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'UserID',
            dataIndex: 'userId',
        },
        {
            title: 'title',
            dataIndex: 'title',
        },
    ];

    console.log(">>> run render 000")

    return (
        <Table
            columns={columns}
            dataSource={dataUsers}
            rowKey={'id'}
        />
    )
}
export default UserTable;