import React from 'react'

export const CategoryCheck = () => {
    return (
        <>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Basket</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">Sepak Bola</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">Remember me</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
            </div>
        </>
    )
}
