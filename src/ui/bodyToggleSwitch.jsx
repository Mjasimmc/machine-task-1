import React from 'react';

import "./styleToggle.css"
const BodyToggleSwitch = () => {
    return (

        <div class="radio-inputs">
            <label class="radio">
                <input type="radio" name="radio"/>
                    <span class="name">Monthly</span>
            </label>

            <label class="radio">
                <input type="radio" name="radio"/>
                    <span class="name">Annually</span>
            </label>
        </div>

    );
}

export default BodyToggleSwitch;
