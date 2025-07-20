import { Drawer } from "antd";

const ViewUserDetail = (props) => {

    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen,
    } = props;


    return (
        <Drawer
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
            </>
                : <>
                    <p>Không có dữ liệu</p>
                </>
            }
        </Drawer>
    );

}

export default ViewUserDetail;