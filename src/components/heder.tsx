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
                {
                    // use can use in environment variables in React :
                    // process.env.API_URL
                }
            </div>
        );
    }
}

export default Header;