import { Table } from 'antd'
import { useState } from 'react'
import './CustomerDetails.css'


const dataSource = [
    {
        key: '1',
        name: 'Are Oluwasegun Johnson',
        customerID: 'ATLG001',
        phoneNumber: '07055467890',
        email: 'oluwasegunAre@atata57.com',
        location: 'Lagos'
    },
    {
        key: '2',
        name: 'Mike John Doe',
        customerID: 'ATLG001',
        phoneNumber: '07055467890',
        email: 'oluwasegunAre@atata57.com',
        location: 'Lagos'
    },
    {
        key: '3',
        name: 'Mike John Doe',
        customerID: 'ATLG001',
        phoneNumber: '07055467890',
        email: 'oluwasegunAre@atata57.com',
        location: 'Lagos'
    },
    {
        key: '4',
        name: 'Mike John Doe',
        customerID: 'ATLG001',
        phoneNumber: '07055467890',
        email: 'oluwasegunAre@atata57.com',
        location: 'Lagos'
    },
    {
        key: '5',
        name: 'Mike John Doe',
        customerID: 'ATLG001',
        phoneNumber: '07055467890',
        email: 'oluwasegunAre@atata57.com',
        location: 'Lagos'
    },
    {
        key: '6',
        name: 'Mike John Doe',
        customerID: 'ATLG001',
        phoneNumber: '07055467890',
        email: 'oluwasegunAre@atata57.com',
        location: 'Lagos'
    },
    {
        key: '7',
        name: 'Mike John Doe',
        customerID: 'ATLG001',
        phoneNumber: '07055467890',
        email: 'oluwasegunAre@atata57.com',
        location: 'Lagos'
    },
    {
        key: '8',
        name: 'Mike John Doe',
        customerID: 'ATLG001',
        phoneNumber: '07055467890',
        email: 'oluwasegunAre@atata57.com',
        location: 'Lagos'
    },
    {
        key: '9',
        name: 'Mike John Doe',
        customerID: 'ATLG001',
        phoneNumber: '07055467890',
        email: 'oluwasegunAre@atata57.com',
        location: 'Lagos'
    },
    {
        key: '10',
        name: 'Mike John Doe',
        customerID: 'ATLG001',
        phoneNumber: '07055467890',
        email: 'oluwasegunAre@atata57.com',
        location: 'Lagos'
    },
    {
        key: '11',
        name: 'Mike John Doe',
        customerID: 'ATLG001',
        phoneNumber: '07055467890',
        email: 'oluwasegunAre@atata57.com',
        location: 'Lagos'
    }
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
