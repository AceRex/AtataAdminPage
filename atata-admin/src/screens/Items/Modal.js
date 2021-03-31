import React, { Component } from 'react'
import ImageUpload from './ImageUpload'
import { MdClear } from "react-icons/md";



class Modal extends Component{
    constructor(props){
        super(props);
        this.state = {
            close: this.props.close,
            user: this.props.user,
            categoryList: this.props.categoryList
        }
    }
    render(){
        return(
            <div className='modal-content-container'>
            <button className='cancel' onClick={this.state.close}>
                <MdClear />
            </button>
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
                                        <label>Created By : {this.state.user.adminName}</label>
                                    </div>
                                    <div className='entry-inputs'>
                                        <label>Product Name</label>
                                        <input type='text' name='productName' value='productname' />
                                    </div>
                                    <div className='entry-inputs'>
                                        <label>Product Price ($)</label>
                                        <input type='text' name='productPrice' value='productPrice' />
                                    </div>
                                    <div className='entry-inputs'>
                                        <label>Product Category</label>
                                        <select
                                            name='categoryValue'
                                            onChange={this.handleChange}
                                            value={this.state.categoryValue}>
                                            {this.state.categoryList.map((category) => (
                                                <option value={category.category}>{category.category}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='entry-inputs'>
                                        <label>Available Qty</label>
                                        <input type='text' name='availableQty' value='availableQty' />
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
                    <button onClick={this.state.close}>
                        Cancel
                   </button>
                    <button className='save'>
                        Send for approval
                   </button>
                </div>

            </div>
        </div>

        )
    }
}

export default Modal;