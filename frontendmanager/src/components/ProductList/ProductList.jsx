import React, {useEffect, useState} from "react";
import './ProductList.scss';
import {Link} from 'react-router-dom';
import axios from "axios";
import queryString from "query-string";
import { toast } from "react-toastify";
import ReactPaginate from 'react-paginate';

const ProductList = () => {
    const [pageCount, setPageCount] = useState();
    const [ data, setData ] = useState([]);

    const [filter, setFilter] = useState({
        page: 1,
        limit: 6,
    });

    useEffect(() => {
        getProductList();
    }, [filter]);

    const getProductList = async () => {
        const paramString = queryString.stringify(filter);
        const response = await axios.get(`http://localhost:5012/api/admin/products?${paramString}`);
        const resDataList = response.data.product;
        const totalPage = response.data.pagination.totalPage;
        if(response.status === 200) {
            setData(resDataList);
            setPageCount(totalPage);
        }
        
    }

    const handlePageChange = (newPage) => {
        // console.log("next page",  newPage);
        const numberPage = newPage.selected;

        //console.log(numberPage)
        
        setFilter({
            ...filter,
            page: numberPage ,
        });
    };

    const msgError = () => toast.warn("Wow so easy !");

    const handleDeleteProduct = async(id) => {
        if( 
            window.confirm("Are you sure that you wanted to delete product")
        ) {
            const response = await axios.delete(`http://localhost:5012/api/admin/product/${id}`);
            if(response.status === 200) {
                msgError();
            }
            getProductList();
        }
    }

    return (
        <div className="productlist_container">
            <div>
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
                        {
                            data.map((item, index) => {
                                return(
                                    <tr key={item._id}>
                                        <td scope='row'>{index + 1}</td>
                                        <td>{item.title}</td>
                                        {/* <td>{item.img}</td> */}
                                        <td>
                                            <img
                                                className="img_product" 
                                                alt="" 
                                                src={item.img}/>
                                        </td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button 
                                                className="btn btn-delete" 
                                                onClick={() => handleDeleteProduct(item._id)}
                                                >Delete</button>
                                            <Link to={`view/${item._id}`}>
                                                <button className="btn btn-view" >View</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {/* <tr>
                            <th scope="row">1</th>
                            <td>nike gi gi do</td>
                            <td>this is your img</td>
                            <td>100$</td>
                            <td>
                                <button>xoa</button>
                                <button>xem</button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <ReactPaginate
                    onPageChange={handlePageChange}
                    
                    // forcePage={1}
                    // initialPage={1}
                    className="page"
                    breakLabel="..."
                    nextLabel="Next >"

                    pageRangeDisplayed={3}
                    marginPagesDisplayed={3}

                    pageCount={pageCount}
                    previousLabel="< Previous"
                    
                    renderOnZeroPageCount={null}
                    containerClassName="page_num"
                    pageLinkClassName="page_num"
                    previousLinkClassName="page_num"
                    nextLinkClassName="page_num"
                    activeLinkClassName="page_num_active"
                />
        </div>
    );
};

export default ProductList;
