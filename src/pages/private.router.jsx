import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Link, Navigate } from "react-router-dom";
import { Button, Result } from "antd";

const PrivateRouter = (props) => {
    const { user } = useContext(AuthContext);

    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )

    }
    return (<Result
        status="403"
        title="Oops!"
        subTitle="Bạn cần đăng nhập để vô đây"
        extra={<Button type="primary"><Link to="/">back home</Link></Button>}
    />);

}

export default PrivateRouter;