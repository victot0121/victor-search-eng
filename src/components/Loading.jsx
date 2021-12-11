import React from 'react';
import Loader from 'react-loader-spinner';

export const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <Loader type='puff' color='#00BFFF' height={550} width={80}  />
        </div>
    )
}
