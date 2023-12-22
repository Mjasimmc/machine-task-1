import React from 'react';
import BodyToggleSwitch from '../ui/bodyToggleSwitch';
import CardBody from '../ui/cardBody';

const Body = () => {
    return (
        <div className='body-container'>
            <h1 className='body-header max-sm:text-lg max-md:text-xl md:text-3xl lg:text-4xl '>Choose a plan that's just right for you !</h1>
            <div className="body-option-handling"><BodyToggleSwitch /></div>
            <div className="body-plans-container `z  sm:grid-cols-2 lg:grid-cols-3">

                <CardBody >
                    <div className="plan-cards">
                        <h1 className='plan-card-header'>Basic Plan</h1>
                        <p className='plan-card-amount-cancelled'>$ 89.99/mo</p>
                        <p className='plan-card-amount'>$ 9.99/mo</p>
                        <div className="py-3">
                            <button className='plan-card-button-to-start bg-green-200'>Get Started</button>
                        </div>
                        <div className="grid w-full py-1">
                            <hr />
                        </div>
                        <div className="plan-info-main-container">
                            <p className='plan-info'>what you get :</p>
                            <p className='plan-info-mes '>Upto 25 users</p>
                            <p className='plan-info-mes'>Upto 25 users</p>
                            <p className='plan-info-mes'>Upto 25 users</p>
                        </div>
                        <a href="#" className='underline underline-offset-2'>Explore features</a>
                    </div>
                </CardBody>
                <CardBody >
                    <div className="plan-cards">
                        <h1 className='plan-card-header'>Basic Plan</h1>
                        <p className='plan-card-amount-cancelled'>$ 89.99/mo</p>
                        <p className='plan-card-amount'>$ 9.99/mo</p>
                        <div className="py-3">
                            <button className='plan-card-button-to-start bg-green-200'>Get Started</button>
                        </div>
                        <div className="grid w-full py-1">
                            <hr />
                        </div>
                        <div className="plan-info-main-container">
                            <p className='plan-info'>what you get :</p>
                            <p className='plan-info-mes '>Upto 25 users</p>
                            <p className='plan-info-mes'>Upto 25 users</p>
                            <p className='plan-info-mes'>Upto 25 users</p>
                        </div>
                        <a href="#" className='underline underline-offset-2'>Explore features</a>
                    </div>
                </CardBody>
                <CardBody >
                    <div className="plan-cards">
                        <h1 className='plan-card-header'>Basic Plan</h1>
                        <p className='plan-card-amount-cancelled'>$ 89.99/mo</p>
                        <p className='plan-card-amount'>$ 9.99/mo</p>
                        <div className="py-3">
                            <button className='plan-card-button-to-start bg-green-200'>Get Started</button>
                        </div>
                        <div className="grid w-full py-1">
                            <hr />
                        </div>
                        <div className="plan-info-main-container">
                            <p className='plan-info'>what you get :</p>
                            <p className='plan-info-mes '>Upto 25 users</p>
                            <p className='plan-info-mes'>Upto 25 users</p>
                            <p className='plan-info-mes'>Upto 25 users</p>
                        </div>
                        <a href="#" className='underline underline-offset-2'>Explore features</a>
                    </div>
                </CardBody>
            </div>
            <div className="w-full gap-4 grid lg:grid-cols-2 p-4">
                <CardBody >
                    <div className="w-full min-h-[4rem] gap-3 grid sm:grid-cols-2 bg-white shadow p-4 rounded-lg">
                        <div className="">
                            <button className='px-2 button-card bg-green-400 rounded-full'>free forever</button>
                            <h1 className='plan-card-header'>Free starter</h1>
                            <p className='plan-info-mes '>The quickest and easiest way to try Protocols with basic funcitonalities</p>
                            <div className="py-3">
                                <button className='plan-card-button-to-start bg-green-200'>Get Started</button>
                            </div>
                        </div>
                        <div className="plan-info-main-container">
                            <p className='plan-info'>what you get :</p>
                            <p className='plan-info-mes '> - More than 75 users</p>
                            <p className='plan-info-mes'> - Customise of all other features</p>
                        </div>
                    </div>
                </CardBody>
                <CardBody >
                    <div className="w-full min-h-[4rem] gap-3 grid sm:grid-cols-2 bg-white shadow p-4 rounded-lg">
                        <div className="">
                            <button className='px-2 button-card bg-green-400 rounded-full'>free forever</button>
                            <h1 className='plan-card-header'>Free starter</h1>
                            <p className='plan-info-mes '>The quickest and easiest way to try Protocols with basic funcitonalities</p>
                            <div className="py-3">
                                <button className='plan-card-button-to-start bg-green-200'>Get Started</button>
                            </div>
                        </div>
                        <div className="plan-info-main-container">
                            <p className='plan-info'>what you get :</p>
                            <p className='plan-info-mes '> - More than 75 users</p>
                            <p className='plan-info-mes'> - Customise of all other features</p>
                        </div>
                    </div>
                </CardBody>

            </div>
        </div>
    );
}

export default Body;
