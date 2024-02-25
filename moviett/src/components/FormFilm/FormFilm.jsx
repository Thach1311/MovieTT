import classNames from 'classnames/bind';
import styles from './FormFilm.module.scss';
import Banner from '../../components/Banner/Banner';
import Episodes from '../../components/Episodes/Episodes';
import DescriptionFilm from '../DescriptionFilm/DescriptionFilm';
const cx = classNames.bind(styles);
function FormFilm() {
    return (
        <div className={cx('formFilm')}>
            <Banner />
            <Episodes />
            <DescriptionFilm/>
        </div>
    );
}

export default FormFilm;
