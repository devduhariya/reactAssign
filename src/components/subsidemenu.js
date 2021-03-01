import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Subsidemenu() {
    const section = [{
        name: 'Market Reserch',
        subpoint1: 'Research',
        subpoint2: 'Self Paced',
        link: '/market/mentor'

    }, {
        name: 'Solution Assessment',
        subpoint1: 'Reporting',
        subpoint2: 'Self Paced',
        link: '/solution/mentor'
    }, {
        name: 'Opportunity Evalution',
        subpoint1: 'Creativity',
        subpoint2: 'Self Paced',
        link: '/Opportunity'
    }, {
        name: 'Future Readiness',
        subpoint1: 'Critical Thinking',
        subpoint2: 'Self Paced',
        link: '/future'
    }];
    const [state, setState] = useState(section)
    return (
        <div className="inner-div">
            <div className="list-heading">
                Program View:
                <hr />
            </div>
            <ul className="list-none m-auto">
                {
                    state && state.length > 0 ? state.map((e, index) => {
                        return (
                            <li className="nav-item my-2" key={index}>
                                <NavLink activeClassName="active-menu-link"
                                    to={e.link} >
                                    <div className="text-xs flex">
                                        <span className="list-no mr-2">{index + 1}</span>
                                        <div className="verticle-sub-menu w-full pr-2">
                                            <div className="mt-1 mb-1 menu-name">{e.name}</div>
                                            {/* 
                                            {e.name}
                                        </NavLink> */}
                                            <div className="flex">
                                                <span className="flex-auto menu-items text-xs">
                                                    <span className="w-3 inline-block mx-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    </span>
                                                    <span>{e.subpoint1}</span>
                                                </span>
                                                <span className="flex-auto menu-items text-xs">
                                                    <span className="w-3 inline-block mx-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </span>
                                                    <span>{e.subpoint2}</span>
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                        )
                    }) : 'LOADING ...'
                }
            </ul>
        </div>
    )
}
