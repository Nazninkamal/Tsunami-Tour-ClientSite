import React from 'react';
import bg from '../../../images/banner-5.jpg'


const SharedBanner = ({ pageName }) => {
    return (
    <div className='col-sm-12'>
            <div style={{
            width: '100%',
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: 80,
            my: 3
        }}>
           
                <h1
                    style={{
                       
                        fontWeight: '500',
                        color: 'white',
                        textAlign: 'center'
                    }}
                >
                    {pageName}
                </h1>
            </div>
    </div>
       
    );
};

export default SharedBanner;