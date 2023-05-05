// import React from 'react';
import { Button } from 'react-bootstrap';

const ExtraSecond = () => {
    return (
        <div className=' container-fluid d-flex gap-2 mt-5 mb-5'>
            <div className=' mt-5 p-5'>
                <h3 className='text-success'>HI, I AM ALEX.</h3>
                <p className='my-5'>I am a food stylist & photographer. Loves nature and healthy food, and good coffee. I am here to help you cook delicious and healthy <br /> food with easy to follow step by step tutorial. Don’t hesitate to <br /> come for say a small “hello!”</p>
                <Button variant="success" size="lg">
                    More About Me
                </Button>
            </div>
            <div className='p=4'>
                <img className='h=50 w-100  ' src="/src/assets/images/about-photos.jpg" alt="" />
            </div>
        </div>
    );
};

export default ExtraSecond;