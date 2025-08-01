import { Button, Input, Form, notification, Row, Col, Divider } from "antd";
import { registerUserAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";
const RegisterPage = () => {
    const [form] = Form.useForm();

    const navigate = useNavigate();


    const onFinish = async (values) => {

        // call api
        const res = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone
        );

        if (res.data) {
            notification.success({
                message: "register user",
                description: "đăng kí user thành công"
            })
            navigate("/login")
        } else {
            notification.error({
                message: "register user",
                description: JSON.stringify(res.message)
            })
        }


    }


    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
        >
            <Row>
                <h2 style={{ textAlign: "center" }}>Đăng kí người dùng</h2>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your fullName!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                                min: 6
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: "Wrong format!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Button
                        onClick={() => form.submit()}
                        type="primary"
                    >
                        register
                    </Button>
                    <Divider />
                    <div>Đã có tài khoản ? <Link to={"/login"}>Đăng nhập tại đây</Link> </div>
                </Col>
            </Row>

        </Form>
    )
}

export default RegisterPage;