import React from 'react';
import "./cardStyle.css"
const CardBody = ({ children }) => {
    return (
        <div class="parent">
            <div class="card grid">
                {children}
            </div>
        </div>
    );
}

export default CardBody;
