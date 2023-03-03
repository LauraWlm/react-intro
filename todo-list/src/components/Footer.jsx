import React from 'react';

const Footer = ({count}) => {
    return (
        <div className='foo'>
            <p className='foo__p'>{count} item left</p>          
        </div>
    );
};

export default Footer;