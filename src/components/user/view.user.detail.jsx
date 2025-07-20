import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {

    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen,
    } = props;


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
                <div>
                    <img
                        height={250}
                        width={300}
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
                    <input type="file" hidden id="avatar" />
                </div>
                {/* <Button type="primary">Upload avatar</Button> */}
            </>
                : <>
                    <p>Không có dữ liệu</p>
                </>
            }
        </Drawer>
    );

}

export default ViewUserDetail;