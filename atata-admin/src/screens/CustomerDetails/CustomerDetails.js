import { Table } from 'antd'
import { useState } from 'react'
import './CustomerDetails.css'
import axios from 'axios'


// const allUser = axios.get('http://api.atata57.com/buyers')
//     .then(res => console.log(res))
const dataSource = [
    // {
    //     key: allUser.id,
    //     name: allUser.first_name + allUser.last_name,
    //     //    customerID: 'ATLG001',
    //        phoneNumber: allUser.phone
    //     //    email: 'oluwasegunAre@atata57.com',
    //     //    location: 'Lagos'
    // }
]

const columns = [
    {
        title: 'Customer ID',
        dataIndex: 'customerID',
        key: 'customerID'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location'
    },
]


export default function CustomerDetails() {
    return (
        <div className="container">
            <div className='customer__details'>
                <h3>Customers Details</h3>
                <div className='customers__table'>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                    />
                </div>
            </div>
        </div>
    )
}
