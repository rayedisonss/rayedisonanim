import React from 'react'

export const Radio = () => {
    return (
        <>
            <div className='flex justify-start flex-row'>

                <div className="form-control ">
                    <label className="label cursor-pointer flex justify-start gap-2 w-fit">
                        <input type="radio" name="radio-1" className="radio checked:bg-red-500" />
                        <span className="label-text">Red</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer flex justify-start gap-2 w-fit">
                        <input type="radio" name="radio-1" className="radio checked:bg-blue-500" />
                        <span className="label-text">Blue</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer flex justify-start gap-2 w-fit">
                        <input type="radio" name="radio-1" className="radio checked:bg-black-500" />
                        <span className="label-text">Black</span>
                    </label>
                </div>
            </div>

            <h3 className='font-semibold'>Pilih Ukuran Sepatu : </h3>
            <div className='flex justify-start flex-row'>

                <div className="form-control ">
                    <label className="label cursor-pointer flex justify-start gap-2 w-fit">
                        <input type="radio" name="radio-2" className="radio checked:bg-black-500" />
                        <span className="label-text">39</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer flex justify-start gap-2 w-fit">
                        <input type="radio" name="radio-2" className="radio checked:bg-black-500" />
                        <span className="label-text">40</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer flex justify-start gap-2 w-fit">
                        <input type="radio" name="radio-2" className="radio checked:bg-black-500" />
                        <span className="label-text">41</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer flex justify-start gap-2 w-fit">
                        <input type="radio" name="radio-2" className="radio checked:bg-black-500" />
                        <span className="label-text">42</span>
                    </label>
                </div>
            </div>
        </>
    )
}
