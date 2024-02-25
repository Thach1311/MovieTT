import classNames from 'classnames/bind';
import styles from './Episodes.module.scss';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const cx = classNames.bind(styles);
function Episodes() {
    useEffect(() => {
        Aos.init({ transition: 2000 });
    }, []);

    return (
        <>
            <div data-aos='fade-up' className={cx('form')}>
                <span className={cx('titile')}>Tập mới nhất:</span>
                <button className={cx('episodes')}>Tập 1</button>
                <button className={cx('episodes')}>Tập 2</button>
                <button className={cx('episodes')}>Tập 3</button>
            </div>
        </>
    );
}

export default Episodes;
