import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import { IoIosPlayCircle } from 'react-icons/io';

const cx = classNames.bind(styles);
function Banner() {
    return (
        <>
            <div className={cx('Banner')}>
                <div className={cx('Banner_form')}>
                    <div className={cx('poster')}>
                        <img src="https://img.ophim12.cc/uploads/movies/sorbet-nam-viet-quat-poster.jpg" alt="" />
                        <IoIosPlayCircle className={cx('btn_play')} />
                    </div>
                    <div className={cx('descriptionFilm')}></div>
                </div>
            </div>
        </>
    );
}

export default Banner;
