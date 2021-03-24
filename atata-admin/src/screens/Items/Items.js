import React, { Component } from 'react'
import './Items.css'
import { MdEdit, MdClear } from "react-icons/md";
import data from '../../Data.json'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
// import { productIDChange } from '../../Redux/ProductID'
import { ShowModal } from '../../Redux/Modal';
import ImageUpload from './ImageUpload'

class Items extends Component {
    constructor() {
        super();
        this.state = {
            searchlist: '',
            categoryValue: '',
            className: '',
            user: data.user,
            categoryList: data.allcategory,
            headerList: ["Product Name", "Product Price ($)", "Available Qty", "Created by", "Approved by", "Status"],
            delete: false,
            modal: false,
            itemList: [],
            previewItem: false,
            itemPreview: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleDlt = this.handleDlt.bind(this)
        this.showModal = this.showModal.bind(this)
        this.handleItemClicked = this.handleItemClicked.bind(this)
        this.showPreview = this.showPreview.bind(this)

    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
        this.props.productIDChange(value);
    }
    handleDlt() {
        this.setState({
            delete: true
        })
    }
    showModal() {
        if (this.state.modal === false) {
            this.setState({
                modal: true
            })
        }
        else {
            this.setState({
                modal: false
            })
        }


    }
    showPreview() {
        if (this.state.previewItem === false) {
            this.setState({
                previewItem: true
            })
        }
        else {
            this.setState({
                previewItem: false
            })
        }


    }
    handleItemClicked(itemList) {
        this.setState({
            previewItem: true,
            itemPreview: itemList

        })

    }
    clicked(categoryList) {
        this.setState({
            itemList: categoryList.Items,
        })
    }
    render() {
        return (
            <div className="container">
                <section className='items-container'>
                    <div className='items-container-header'>
                        <div className='header-title'>
                            Products
                        </div>
                        <div className='header-component'>
                            <div className='new-btn'>
                                <button onClick={this.showModal}> New</button>
                            </div>
                            <div className='search-list'>
                                <input
                                    value={this.state.searchList}
                                    name="searchList"
                                    onChange={this.handleChange}
                                    type='search'
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='items-container-content'>
                        <nav className='sideNav'>
                            <ul>
                                <p>Categories</p>
                                {this.state.categoryList.map((menulist) =>
                                (
                                    <Link to={menulist.link} onClick={this.clicked.bind(this, menulist)} key={menulist._id}>
                                        <li className={this.state.className}>{menulist.category}</li>
                                    </Link>

                                ))}
                            </ul>
                        </nav>
                        <div className='content'>
                            <table>
                                <tr>
                                    {this.state.headerList.map((items) =>
                                    (
                                        <th>{items}</th>
                                    ))}
                                </tr>
                                {this.state.itemList.map((items) => (
                                    <>
                                        <tr>
                                            <td>{items.ProductName}</td>
                                            <td>{items.ProductPrice}</td>
                                            <td>{items.AvailableQTY}</td>
                                            <td>{items.CreatedBy}</td>
                                            <td>{items.ApprovedBy}</td>
                                            <td
                                                value={items.Status}
                                                id='status'>{items.Status}
                                            </td>

                                        </tr>
                                        <div className={this.state.previewItem ? 'modal' : 'hidden'}>
                                            <div className='modal-content-container'>
                                                <button className='cancel' onClick={this.showPreview}>
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
                                                                            <label>Created By : {items.CreatedBy}</label>
                                                                        </div>
                                                                        <div className='entry-inputs'>
                                                                            <label>Product Name</label>
                                                                            <input type='text' name='productName' value={items.ProductName} />
                                                                        </div>
                                                                        <div className='entry-inputs'>
                                                                            <label>Product Price ($)</label>
                                                                            <input type='text' name='productPrice' value={items.ProductPrice} />
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
                                                                            <input type='text' name='availableQty' value={items.AvailableQTY} />
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
                                                        <button onClick={this.showModal}>
                                                            Cancel
                               </button>
                                                        <button className='save'>
                                                            Save
                               </button>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    </>
                                ))}
                            </table>

                        </div>
                    </div>

                </section>
                <div className={this.state.modal ? 'modal' : 'hidden'}>
                    <div className='modal-content-container'>
                        <button className='cancel' onClick={this.showModal}>
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
                                            <ImageUpload/>
                                            <div className='entry'>
                                                <div className='entry-inputs'>
                                                    <label>Created By : {this.state.user[0].adminName}</label>
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
                                <button onClick={this.showModal}>
                                    Cancel
                               </button>
                                <button className='save'>
                                    Save
                               </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        ShowModal: () => dispatch(ShowModal())
    }
};
export default connect(null, mapDispatchToProps)(Items);
