import { Menu } from 'antd';
import { UsergroupAddOutlined, HomeOutlined, BookOutlined, SettingOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const Header = () => {

    const { user } = useContext(AuthContext);

    console.log("check data:", user)


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
            label: "Cài đặt",
            key: 'setting',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={"/login"}>Đăng nhập</Link>,
                    key: 'login'
                },
                {
                    label: <Link to={"/register"}>Đăng kí</Link>,
                    key: 'register'
                }
            ],
        },
    ];
    const [current, setCurrent] = useState('');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
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