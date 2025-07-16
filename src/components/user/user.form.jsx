import { Button, Input, notification, Modal } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';

const UserForm = (props) => {

    const { loadUser } = props;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [handleOk,setHandleOk] = useState(false);

    const handleSubmit = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "create user",
                description: "tạo user thành công"
            })
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "error create user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setIsModalOpen(false);
    }

    return (
        <div className='user-form' style={{ margin: "10px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: " column" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>Table users</h3>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        type='primary'>create user</Button>
                </div>


                <Modal
                    title="Create User"
                    open={isModalOpen}
                    onOk={() => handleSubmit()}
                    onCancel={() => resetAndCloseModal()}
                    maskClosable={false}
                    okText="Create"
                >
                    <div style={{ display: "flex", gap: "15px", flexDirection: " column" }}>
                        <div>
                            <span>FullName</span>
                            <Input
                                value={fullName}
                                onChange={(event) => { setFullName(event.target.value) }}
                            />
                        </div>
                        <div>
                            <span>Email</span>
                            <Input
                                value={email}
                                onChange={(event) => { setEmail(event.target.value) }}
                            />
                        </div>
                        <div>
                            <span>Password</span>
                            <Input.Password
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }}
                            />
                        </div>
                        <div>
                            <span>Phone Number</span>
                            <Input
                                value={phone}
                                onChange={(event) => { setPhone(event.target.value) }}
                            />
                        </div>
                    </div>
                </Modal>
            </div>

        </div>
    )

}

export default UserForm;
