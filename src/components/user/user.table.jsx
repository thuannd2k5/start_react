import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';


const UserTable = (props) => {

    const { dataUsers, loadUser } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

    const [dataUpdate, setDataUpdate] = useState(null);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (_, record) => {
                return (
                    <a href="#">{record.id}</a>
                )
            }
        },
        {
            title: 'UserID',
            dataIndex: 'userId',
        },
        {
            title: 'title',
            dataIndex: 'title',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "40px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                        style={{ cursor: 'pointer', color: "orange" }} />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>
            ),
        },
    ];


    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={'id'}
            />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
        </>
    )
}
export default UserTable;