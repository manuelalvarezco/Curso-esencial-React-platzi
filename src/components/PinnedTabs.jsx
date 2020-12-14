import React from 'react';
import '../assets/styles/components/PinnedTabs.scss';

const PinnedTabs = () => (
    <div className="pinned-tabs">
            <ul className="account-list">
                <li className="btnHome">Inicio</li>
                <li>
                    <div>
                        <input className="pinned-tabs__search-input" type="text" name="" id=""/>
                        <button>Buscar</button>
                    </div>
                </li>
            </ul>
    </div>
);

export default PinnedTabs;