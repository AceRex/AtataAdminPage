import React, { Component } from 'react'
import './Items.css'
import data from '../../Data.json'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { ShowModal } from '../../Redux/Modal';
import Modal from './Modal';
import Preview from './Preview'

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
                                        <tr className='item__' onClick={this.showPreview}>
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
                                        <div className={this.state.previewItem ? 'preview__modal' : 'hidden'}>
                                            <Preview
                                                categoryList={this.state.categoryList}
                                                close={this.showPreview}
                                                items={items}
                                            />
                                        </div>

                                    </>
                                ))}
                            </table>

                        </div>
                    </div>

                </section>
                <div className={this.state.modal ? 'modal' : 'hidden'}>
                    <Modal
                        categoryList={this.state.categoryList}
                        close={this.showModal}
                        user={this.state.user}
                    />
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
