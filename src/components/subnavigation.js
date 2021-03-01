import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Subnavigation() {
    const initialState = [{
        name: 'Mentor Video',
        link: '/mentor'
    }, {
        name: ' Information',
        link: '/market/information'
    }, 
    {
        name: ' Task',
        link: '/market/task'
    },
    {
        name: 'Resources',
        link: '/market/resources'
    }, {
        name: 'Submit',
        link: '/market/submit'
    }];
    const [state, setstate] = useState(initialState);
    console.log('state: ', state)
    return (
        <div>
            <nav className="px-2 py-3">
                <ul className="flex list-none">
                    {
                        state && state.length > 0 ? state.map((e, index) => {
                            return (
                                <li className="nav-item1" key={index}>
                                    <NavLink className={`text-gray-800 text-xs px-5 py-3 block nav-link`} exact activeClassName="font-bold active-link"
                                        to={e.link} >
                                        {e.name}
                                    </NavLink>
                                </li>
                            )
                        }) : 'LOADING ...'
                    }
                </ul>


            </nav>
        </div>
    )
}
