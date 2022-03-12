import React from 'react';
import bg from '../../../images/green.png'


const SharedBanner = ({ pageName }) => {
    return (
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
       
    );
};

export default SharedBanner;