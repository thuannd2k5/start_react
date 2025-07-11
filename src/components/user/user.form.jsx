import { Input, notification } from 'antd';
import { Button, Flex } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "create user",
                description: "tạo user thành công"
            })
        } else {
            notification.error({
                message: "error create user",
                description: JSON.stringify(res.message)
            })
        }
    }


    return (
        <div className='user-form' style={{ margin: "20px 0" }}>
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
                <div>
                    <Button
                        onClick={handClickBtn}
                        type='primary'>create user</Button>
                </div>
            </div>

        </div>
    )

}

export default UserForm;
