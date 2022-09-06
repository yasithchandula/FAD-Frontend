import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { MDBDataTableV5 } from 'mdbreact'
import SideNav from "./sideNav";


import axios from "axios";

export default function OrganizationRequestList() {

    const toggleSidenav = (e) => {
        e.preventDefault();
        document.body.classList.remove("g-sidenav-pinned");
    };


    const navigate = useNavigate()
    const [datatable, setDatatable] = useState({
        columns: [],
        rows: [],
    });
    

    const tableColumns = [
        {
            label: 'Leader ID',
            field: '_id'
        },
        {
            label: 'username',
            field: 'username'
        },
        {
            label: 'Role',
            field: 'role'
        },
    ]

    useEffect(() => {
        axios.get(`http://localhost:8070/admin/reqorglist`)
            .then((res) => {
                // console.log(res.data);
                res.data.forEach(row => {
                    // row.clickEvent = () => {
                    //     navigate(`/student/submissionview/${row.itNumber}`)
                    // }
                    row._id = row._id.length
                });
                setDatatable({
                    columns: tableColumns,
                    rows: res.data
                })
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    return (

        <>
        {/* <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <SideNav/>
                <div className="container-fluid py-4" onClick={toggleSidenav}>
                    <div className="row">
                        <h1>Admin Dashboard</h1>
                    </div>
                    <div className="row">
            <MDBDataTableV5
                hover
                entriesOptions={[5, 10, 20, 25]}
                entries={10}
                pagesAmount={4}
                data={datatable}
                searchTop
                searchBottom={false} />
        </div>


                </div>
            </main> */}
            

            
        
        </>

        
    )
}
