import React, { Component } from 'react'
import ImageUpload from './ImageUpload'
import './Items.css'


class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CreatedBy: this.props.items.CreatedBy,
            ProductName: this.props.items.ProductName,
            ProductPrice: this.props.items.ProductPrice,
            AvailableQTY: this.props.items.AvailableQTY

        }

    }



    render() {
        return (

            <div className='preview__content__container'>
                <div className='modal-content'>
                    <div className='modal-content-content'>
                        <section>
                            <div className='heading'>
                                Create New Product
</div>
                            <div className='form-group'>
                                <div className='header'>
                                    Product Information
</div>
                                <div className='entry-group'>
                                    <ImageUpload />
                                    <div className='entry'>
                                        <div className='entry-inputs'>
                                            <label>Created By : {this.state.CreatedBy}</label>
                                        </div>
                                        <div className='entry-inputs'>
                                            <label>Product Name</label>
                                            <input type='text' name='productName' value={this.state.ProductName} />
                                        </div>
                                        <div className='entry-inputs'>
                                            <label>Product Price ($)</label>
                                            <input type='text' name='productPrice' value={this.state.ProductPrice} />
                                        </div>
                                        <div className='entry-inputs'>
                                            <label>Product Category</label>
                                            <select
                                                name='categoryValue'
                                                onChange={this.handleChange}
                                                value={this.state.categoryValue}>
                                                {this.props.categoryList.map((category) => (
                                                    <option value={category.category}>{category.category}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='entry-inputs'>
                                            <label>Available Qty</label>
                                            <input type='text' name='availableQty' value={this.state.AvailableQTY} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='header'>
                                    Product Description
</div>
                                <div className='entry-group'>
                                    <div className='entry'>
                                        <div className='entry-inputs'>
                                            <label>Item Description</label>
                                            <textarea name='itemDes' rows='20' required />
                                        </div>
                                    </div>
                                    <div className='entry'>
                                        <div className='entry-inputs'>
                                            <label>General Specification</label>
                                        </div>
                                        <table>
                                            <tr>
                                                <td><input className='lft-input' disabled placeholder='Product ID' /></td>
                                                <td><input className='rgt-input' /></td>
                                            </tr>
                                            <tr>
                                                <td><input className='lft-input' disabled placeholder='Weight (Kg)' /></td>
                                                <td><input className='rgt-input' /></td>
                                            </tr>
                                            <tr>
                                                <td><input className='lft-input' /></td>
                                                <td><input className='rgt-input' /></td>
                                            </tr>
                                            <tr>
                                                <td><input className='lft-input' /></td>
                                                <td><input className='rgt-input' /></td>
                                            </tr>
                                            <tr>
                                                <td><input className='lft-input' /></td>
                                                <td><input className='rgt-input' /></td>
                                            </tr>
                                            <tr>
                                                <td><input className='lft-input' /></td>
                                                <td><input className='rgt-input' /></td>
                                            </tr>
                                            <tr>
                                                <td><input className='lft-input' /></td>
                                                <td><input className='rgt-input' /></td>
                                            </tr>
                                            <tr>
                                                <td><input className='lft-input' /></td>
                                                <td><input className='rgt-input' /></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className='modal-content-content-btn'>
                        <button onClick={this.props.close}>
                            Close
</button>
                        <button className='delete'>
                            Delete
                   </button>
                        <button className='save'>
                            Save
</button>
                    </div>

                </div>
            </div>

        )
    }

}

export default Preview;