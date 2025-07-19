import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/api.service";
import { Input, notification, Modal } from 'antd';

const UpdateUserModal = (props) => {
    const [id, setId] = useState("");
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;
    // const [handleOk,setHandleOk] = useState(false);

    useEffect(() => {
        console.log("check dataUpdate props :", dataUpdate);
        if (dataUpdate) {
            setId(dataUpdate.id);
            setUserId(dataUpdate.userId);
            setTitle(dataUpdate.title);
        }
    }, [dataUpdate])

    const handleSubmit = async () => {
        const res = await updateUserAPI(id, userId, title);
        if (res.data) {
            notification.success({
                message: "update user",
                description: "cập nhật user thành công"
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
        setId("");
        setUserId("");
        setTitle("");
        setIsModalUpdateOpen(false);
        setDataUpdate(null)
    }


    return (
        <Modal
            title="Update a User"
            open={isModalUpdateOpen}
            onOk={() => handleSubmit()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText="Save"
        >
            <div style={{ display: "flex", gap: "15px", flexDirection: " column" }}>
                <div>
                    <span>ID</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>
                <div>
                    <span>UserId</span>
                    <Input
                        value={userId}
                        onChange={(event) => { setUserId(event.target.value) }}
                    />
                </div>
                <div>
                    <span>title</span>
                    <Input
                        value={title}
                        onChange={(event) => { setTitle(event.target.value) }}
                    />
                </div>
            </div>
        </Modal>
    );
}
export default UpdateUserModal;