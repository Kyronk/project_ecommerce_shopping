import React from "react";
import "./UserListPage.scss";
const UserListPage = () => {
    return (
        <>
            <div>UserListPage</div>
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

export default UserListPage;
