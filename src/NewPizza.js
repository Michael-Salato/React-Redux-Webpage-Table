import React from 'react';

function NewPizza() {
    return(
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <select>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </td>
            <td>
                <input type="text" />
            </td>
            <td>
                <input type="number" min="0" max="10"/>
            </td>
        </tr>
    );
}

export default NewPizza;