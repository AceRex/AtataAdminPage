import React, { useState } from 'react'
import './UpdateCurrency.css'

export default function UpdateCurrency() {
    const [USD, setUSD] = useState('')
    const [EUR, setEUR] = useState('')
    const [CAD, setCAD] = useState('')
    const [GBR, setGBR] = useState('')
    const [NGN, setNGN] = useState('')

    return (
        <div className="container">
            <div className="currency__update">
                <h3>Currency Update</h3>
                <form>
                    <div className='form-group'>
                        <input
                            placeholder='USD'
                            disabled
                        />
                        <input
                            placeholder='value'
                            value={USD}
                            onChange={
                                (e) => (
                                    setUSD(e.target.value)
                                )} />
                    </div>
                    <div className='form-group'>
                        <input
                            placeholder='EUR'
                            disabled

                        />
                        <input
                            placeholder='value'
                            value={EUR}
                            onChange={
                                (e) => (
                                    setEUR(e.target.value)
                                )} />
                    </div>
                    <div className='form-group'>
                        <input
                            placeholder='CAD'
                            disabled />
                        <input
                            placeholder='value'
                            value={CAD}
                            onChange={
                                (e) => (
                                    setCAD(e.target.value)
                                )} />
                    </div>
                    <div className='form-group'>
                        <input
                            placeholder='GBR'
                            disabled
                        />
                        <input
                            placeholder='value'
                            value={GBR}
                            onChange={
                                (e) => (
                                    setGBR(e.target.value)
                                )} />
                    </div>
                    <div className='form-group'>
                        <input
                            placeholder='NGN'
                            disabled
                        />
                        <input
                            placeholder='value'
                            value={NGN}
                            onChange={
                                (e) => (
                                    setNGN(e.target.value)
                                )} />
                    </div>
                    <div className='__btns'>
                        <button
                            className='update'
                            type='submit'>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
