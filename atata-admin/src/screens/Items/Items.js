import React from 'react'
import './Items.css'

export default function Items() {
    return (
        <div className="container">
            <section className='items-container'>
                <div className='items-container-header'>
                    <div className='header-title'>
                        Products
                   </div>
                    <div className='header-component'>
                        <div className='new-btn'>
                            <button>New</button>
                        </div>
                        <div className='search-list'>
                            <input type='search' placeholder='serach List' name='searchList' value={this.state.searchlist} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
