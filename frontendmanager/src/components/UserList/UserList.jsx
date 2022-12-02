import React, { useState } from "react";

import axios from "axios";
import { useEffect } from "react";

const UserList = () => {

    const [userList, setUserList] = useState([])

    useEffect(() => {
        getUserList();
    }, []);

    const getUserList = async() => {
        const req = await axios.get('http://localhost:5012/api/admin/user-list?page=1&limit=2');

        console.log(req.data.user)
        const list = req.data.user;
        setUserList(list)
    }
    

    return (
        <>
            <h3>user list</h3>

            <h5>UserListPage</h5>
            <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>No.</th>
                            <th style={{ textAlign: "center" }}>Name Product</th>
                            <th style={{ textAlign: "center" }}>Image</th>
                            <th style={{ textAlign: "center" }}>Price</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>nike gi gi do</td>
                            <td>this is your img</td>
                            <td>100$</td>
                            <td>
                                <button>xoa</button>
                                <button>xem</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </>
    );
};

export default UserList;
