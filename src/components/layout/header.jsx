import { Menu, message } from 'antd';
import {
    UsergroupAddOutlined, HomeOutlined, BookOutlined, SettingOutlined,
    LoginOutlined,
    AliwangwangOutlined
} from '@ant-design/icons';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { logoutAPI } from '../../services/api.service';

const Header = () => {

    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        setCurrent(e.key);
    };

    const handleLogout = async () => {
        const res = await logoutAPI();
        if (res.data) {
            //clear data
            localStorage.removeItem("access_token");
            setUser({
                id: "",
                userId: "",
                title: ""
            })

            message.success("logout thành công");
            // redirect to home
            navigate("/")
        }
    }

    const items = [
        {
            label: <Link to={"/"}>Home </Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />,
        },
        {
            label: <Link to={"books"}>Books</Link>,
            key: 'books',
            icon: <BookOutlined />,
        },
        {
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'register',
            icon: <LoginOutlined />,
        },
        // ...(!user.id ? [{
        //     label: <Link to={"/login"}>Đăng nhập</Link>,
        //     key: 'register',
        //     icon: <LoginOutlined />,
        // }] : []),

        {
            label: `Welcome`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <span onClick={handleLogout}>Đăng xuất</span>,
                    key: 'logout'
                }
            ],
        }
    ];

    return (

        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    )
}

export default Header;