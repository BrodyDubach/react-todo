import React, {useState} from 'react';

const Toggle = () => {
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <button onClick={handleClick} class="btn btn-primary mb-5">Add to List</button>

            {toggle ?
                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A Second item</li>
                    <li class="list-group-item">A Thrid item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">You get the point</li>
                </ul>
                :
                <></>
            }
        </div>

    )
}

export default Toggle;