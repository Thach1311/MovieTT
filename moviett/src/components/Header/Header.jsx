import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { CiSearch } from 'react-icons/ci';
import { IoMdSunny } from 'react-icons/io';
import { IoMoonSharp } from 'react-icons/io5';
import { useState, createContext } from 'react';
import { Outlet, Link } from 'react-router-dom';


const cx = classNames.bind(style);
export const ShowTheme = createContext();

function Header() {
    const [isShow, setIsShow] = useState(false);
    return (
        <ShowTheme.Provider value={isShow}>
            <div className={cx('header')}>
                <Link to="/" className={cx('logo')}>
                    TTPhim
                </Link>
                <div className={cx('search')}>
                    <input type="text" name="" id="" className={cx('search_input')} placeholder="Search"></input>
                    <CiSearch className={cx('search_icon')} />
                </div>
                <IoMoonSharp
                    onClick={() => {
                        setIsShow(true);
                    }}
                    style={isShow && { display: 'none' }}
                    className={cx('moon_icon')}
                />
                <IoMdSunny
                    onClick={() => {
                        setIsShow(false);
                    }}
                    style={isShow && { display: 'block' }}
                    className={cx('sun_icon')}
                />
            </div>
            <Outlet />
        </ShowTheme.Provider>
    );
}

export default Header;
