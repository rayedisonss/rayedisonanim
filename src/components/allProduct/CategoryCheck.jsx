import React from 'react'

export const CategoryCheck = () => {
    return (
        <>
            <div className="form-control">
                <h2 className='text-center py-2 text-bold'>Olahraga</h2>
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
            <div className="divider"></div>
            <div className="form-control">
                <h2 className='text-center py-2 text-bold'>Ukuran Sepatu</h2>
                <label className="label cursor-pointer">
                    <span className="label-text">38</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">39</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">40</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">41</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">42</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
            </div>
            <div className="divider"></div>
            <div className="form-control">
                <h2 className='text-center py-2 text-bold'>Tipe Sepatu</h2>
                <label className="label cursor-pointer">
                    <span className="label-text">Sneakers</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">Sepatu Olahraga</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">Sepatu Lifestyle</span>
                    <input type="checkbox" className="checkbox checkbox-primary" />
                </label>

            </div>
            <div className="divider"></div>
        </>
    )
}
