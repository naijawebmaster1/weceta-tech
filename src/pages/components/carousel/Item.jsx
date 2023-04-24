import React, { useState } from 'react';
import Image, { MyImage } from './MyImage';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export default function Item({ scrollPosition, ...props }) {
    let [state, setstate] = useState(0);

    return (
        <div className="slide-item">
            {/* <div className="flex flex-col rounded-3xl bg-white border border-gray-200 m-10">
                <div className="p-6 flex flex-col pt-10">
                    <img alt="" className="inline w-10" src="./assets/icons/ClockIcon.svg" />
                    <h4 className="text-xl font-semibold text-blue-900 mt-5 ">SUPPORT</h4>
                    <p className="text-blue-300 mt-2 m-auto">
                        Weceta provides total supply chain traceability to all the stakeholders in the first
                        class supply chain including producers, distributors, and retailers.
                    </p>
                </div>
            </div> */}
            
                 <div className="flex flex-col rounded-3xl bg-white border border-gray-200 m-10">

            <img
                className='rounded-3xl'
                src={props.download_url}
                alt="ss"
                style={{
                    minHeight: '100px',
                    minWidth: '230px',
                    objectFit: 'fill',
                    backgroundPosition: 'center',
                    WebkitTransformOrigin: 'center'
                }}
                height={'120px'}
            />
            <div className='flex justify-center'>
<button
    style={{
        position: 'absolute',
        top: '60%',
        left: '17%'
    }}
    className=" w-4/6 py-6 m-auto mt-6 px-6 font-semibold rounded-md bg-green-200 text-white text-md transform transition duration-500  hover:bg-yellow hover:text-white"
    type="submit">
    {props.buttonTag}
</button>

            </div>

</div>
            {/* <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%'
                }}>
                {state}
            </div> */}
        </div>
    );
}
