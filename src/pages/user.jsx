import { useEffect, useState } from "react";
import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table"
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {

    const [dataUsers, setDataUsers] = useState([]);

    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadUser();
    }, [current, pageSize]);
    // empty array =>run once
    //not empty => next value !== preview 

    const loadUser = async () => {
        const res = await fetchAllUserAPI(current, pageSize);

        if (res.data) {
            setDataUsers(res.data);
            setCurrent(res.data.current);
            setPageSize(res.data.pageSize);
            setTotal(res.data.total);
        }

    }

    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                loadUser={loadUser}
                dataUsers={dataUsers}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />

        </div>
    )
}

export default UserPage;