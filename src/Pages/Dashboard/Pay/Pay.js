import React from 'react';
import { useParams } from 'react-router';

const Pay = () => {
    const { perchaseId } = useParams();
    return (
        <div>
            <h1>Please Pay for:{ perchaseId }</h1>

        </div>
    );
};

export default Pay;
