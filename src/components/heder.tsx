import * as React  from 'react';
import css from './header.css';
import scss from './headers.scss';

const a = 12;

class Header extends React.Component <any, any> {

    private poo: any;
    render() {
        return (
            <div className={scss.headerCon}>
                <header className={css.headerFont}>
                   hover on the up title  👌!!!
                    {this.poo}                   
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