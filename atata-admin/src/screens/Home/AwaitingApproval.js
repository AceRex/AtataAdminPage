import { Component } from 'react'

class Approval extends Component {
    constructor() {
        super();
        this.state = {
            headerList: ["Product ID", "Product Name", "Product Price ($)", "Available Qty", "Created by"],
            ProductToApprove: [
                {
                    id: 1,
                    productName: "Ankara Sneakers",
                    productPrice: "5000",
                    availableQTY: "20",
                    createdBy: "Oluwasegun"

                }
            ]
        }
    }
    render() {
        return (
            <div className='aprvl__'>
                    <h3>Products Awating Approval</h3>
                    <table>
                        <tr className='aprvl__header'>
                            {this.state.headerList.map((items) =>
                            (
                                <th>{items}</th>
                            ))}
                        </tr>
                        {this.state.ProductToApprove.map((items) =>
                        (
                            <tr className='aprvl__body'>

                                <td>{items.id}</td>
                                <td>{items.productName}</td>
                                <td>{items.productPrice}</td>
                                <td>{items.availableQTY}</td>
                                <td>{items.createdBy}</td>
                            </tr>

                        ))}
                    </table>
            </div>
        )
    }
}
export default Approval;