import { Button, Drawer } from "antd";
import { useState } from "react";

const ViewUserDetail = (props) => {

    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen,
    } = props;

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    console.log("check file :", preview);
    return (
        <Drawer
            width={"40vw"}
            title="chi tiết User"
            open={isDetailOpen}
            onClose={() => {
                setDataDetail(null);
                setIsDetailOpen(false);
            }
            }
        >
            {dataDetail ? <>
                <p>ID: {dataDetail.id}</p>
                <br />
                <p>UserId {dataDetail.userId}</p>
                <br />
                <p>Title: {dataDetail.title}</p>
                <br />
                <p>avatar:</p>
                <div style={{
                    marginTop: "15px",
                    height: "100px",
                    width: "150px",
                    border: "1px solid #ccc",
                }}>
                    <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                        // src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/dataDetail.avatar`}
                        src="https://picsum.photos/seed/picsum/200/300"
                    />
                </div>
                <div>
                    <label htmlFor="avatar" style={{
                        display: "block",
                        width: "fit-content",
                        marginTop: "10px",
                        cursor: "pointer",
                        background: "orange",
                        padding: "5px 10px",
                        borderRadius: "5px",
                    }}>
                        Upload avatar
                    </label>
                    <input
                        // onChange={handleOnChangeFile}
                        onChange={(event) => handleOnChangeFile(event)}
                        type="file" hidden id="avatar" />
                </div>
                {preview &&
                    <div style={{
                        marginTop: "15px",
                        height: "100px",
                        width: "150px",
                        border: "1px solid #ccc",
                    }}>
                        <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                            // src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/dataDetail.avatar`}
                            src={preview}
                        />
                    </div>
                }
            </>
                : <>
                    <p>Không có dữ liệu</p>
                </>
            }
        </Drawer >
    );

}

export default ViewUserDetail;