import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a href='#' className='navbar-brand'>
                    TurimApp
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    {/* usando o tipo de navegação hash */}
                    <li><a href="#/clients">Clients</a></li> 
                    <li><a href="#/about">About</a></li>
                </ul>
            </div>
        </div>
    </nav>
)