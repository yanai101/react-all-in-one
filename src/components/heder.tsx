import * as React from 'react';
import css from './header.css';
import scss from './headers.scss';

class Header extends React.Component <any, any> {
    
    render() {
        return (
            <div className={scss.headerCon}>
                <header className={css.headerFont}>
                   hover on the up title  !!!
                </header>
            </div>
        );
    }
}

export default Header;