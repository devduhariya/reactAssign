import React, { useState } from 'react'

export default function Sidemenu() {
    const section = [{
        name: 'Program',

    }, {
        name: 'Coaching',
        
    }, {
        name: 'Collaborations',
       
    }, {
        name: 'Progress',
       
    },{
        name: 'Calender',
       
    }];
    const docs = [{
        field: 'Uploads',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
    }, {
        field: "Downloads",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
    }]
    const [menu, setMenu] = useState(section)
    const [Docs, setDocs] = useState(docs)
    return (
        <div>
            <div className="web-logo">
                <a href="/" >
                    <img src={'/assets/img/logo.png'} alt="logo" />
                </a>
            </div>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                {
                    menu && menu.length > 0 ? menu.map((item, index) => {
                        return (
                            <li className="items-center" key={index}>
                                <a className="text-grey-500 text-xs py-3 font-bold block" href='/'>
                                    {item.name}
                                </a>
                            </li>
                        )
                    }) : 'LOADING ...'
                }
            </ul>
            <hr />
            <div className="flex-col mt-5">My Files
                            <ul className="flex flex-col list-none">

                    {
                        Docs && Docs.length > 0 ? Docs.map((item, index) => {
                            return (
                                <li className="items-center text-gray-600 text-xs" key={index}>
                                    <a className="folder  py-1 flex" href='/'>
                                        <span className="w-4 mx-1">{item.icon}</span>
                                        {item.field}
                                    </a>
                                </li>
                            )
                        }) : 'LOADING ...'
                    }
                </ul>
            </div>

        </div>
    )
}

