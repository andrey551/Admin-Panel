import React from 'react'
import DataTable from './table';
const UserList = () => {
    return(
        <>
        <div>
            <div>
                <h2><b>User List</b></h2>
            </div>
            <div style={{width: 1030}}>
                <DataTable />
            </div>
        </div>
        </>
    )
}

export default UserList;