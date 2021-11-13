import React from 'react';
import dashBanner from '../../../images/banner/dashBanner.webp';

const DashboardContent = () => {
    return (
        <>
        <div className="conatiner text-center py-5">
            <img className="img-fluid" src={dashBanner} alt="" />
            <h3 className="text-info">Who we are</h3>
            <p className="fs-lg-3 fs-sm-4 text-secondary">CarHouse.com is a leading digital marketplace and solutions provider for the automotive industry that connects car shoppers with sellers. Launched in 1998 and headquartered in <br/>Chicago, the Company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers. In a rapidly changing <br/>market, Cars.com enables dealerships and OEMs with innovative technical solutions and data-driven intelligence to better reach and influence ready-to-buy shoppers, increase inventory turn and gain market share. In 2018, Cars.com acquired Dealer <br/>Inspire®, an innovative technology company building solutions that future-proof dealerships with more efficient operations, a faster and easier car buying process, and connected digital experiences that sell and service more vehicles.<br/>

                CarHouse.com properties include DealerRater®,
                Dealer Inspire®, Auto.com™, PickupTrucks.com® and NewCars.com®. For more information, visit www.CarHouse.com.</p>
            </div>
        </>
    );
};

export default DashboardContent;