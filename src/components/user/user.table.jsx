import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';


const UserTable = () => {


    const [dataUsers, setDataUsers] = useState([
        {
            id: '1',
            userId: "1",
            title: 'delectus aut autem',
        },
        {
            id: '2',
            userId: 1,
            title: 'delectus aut autem',
        },
        {
            id: '3',
            userId: 2,
            title: 'delectus aut autem',
        },

    ]);

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

    useEffect(() => {
        console.log(">>> run useEffect 111")
        loadUser();
    }, []); // empty array =>run once

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data);
    }

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