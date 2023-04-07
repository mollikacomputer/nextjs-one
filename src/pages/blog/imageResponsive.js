import Image from 'next/image';
import React from 'react';

const imageResponsive = () => {
    return (
        <div>
            <h2 className='text-3xl'> this is blog page</h2>
            <Image 
            src="/naturale.jpg" 
            fill
            sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                     /> 
            
            
        </div>
    );
};

export default imageResponsive;