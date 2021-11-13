import React from 'react';
import img from '../../../images/banner/4.png';
import './Features.css'

const Features = () => {
    return (
        <div id="features">
            <div className="features-container">
                <div className="text-end">
                    <h3>Experience support team</h3>
                    <p>Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur, duis fusce varius.

                    </p>
                    <h3>Handle emergency situations</h3>
                    <p>Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur, duis fusce varius.</p>
                    <h3>Insurance Included</h3>
                    <p>Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur, duis fusce varius.
                    </p>
                </div>
                <div><img className="img-fluid" src={img} alt="" /></div>
                <div className="text-start">
                    <h3>Hight technology instrument</h3>
                    <p>Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur, duis fusce varius.</p>
                    <h3>Access control system</h3>
                    <p>Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur, duis fusce varius.</p>
                    <h3>Online 24/7 Available</h3>
                    <p>Fusce nec tortor velit ante sagittis nunc malesuada. Lectus malesuada fringilla fames fames fermentum curabitur, duis fusce varius.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;