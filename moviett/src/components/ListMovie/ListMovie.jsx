import classNames from 'classnames/bind';
import styles from './ListMovie.module.scss';
import { IoIosPlayCircle } from 'react-icons/io';
import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { ShowTheme } from '../Header/Header';
import 'animate.css';
import { Outlet, Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function ListMovie() {
    const [movieData, setMovieData] = useState([]);
    const isShow = useContext(ShowTheme);

    const fetchData = () => {
        return axios
            .get('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1')
            .then((response) => {
                const data = response.data.items;
                setMovieData(data);
            })
            .catch((error) => {
                // Xử lý lỗi ở đây
                console.error('Axios Error:', error);
            });
    };
    fetchData();

    return (
        <div>
            <div className={cx('Movie')} style={isShow ? { backgroundColor: '#fff' } : { backgroundColor: '#1a1a1a' }}>
                <h1 className={cx('headMovie', 'animate__animated animate__fadeInUp')}>PHIM ĐỀ CỬ</h1>

                <div className={cx('listMovie')}>
                    {movieData.length > 0 &&
                        movieData.map((movies, key) => {
                            return (
                                <Link
                                    to="/movie"
                                    className={cx('MovieForm', 'animate__animated animate__slideInUp')}
                                    key={key}
                                >
                                    <div className={cx('Movie_img')}>
                                        <img
                                            src={`https://img.ophim12.cc/uploads/movies/${movies.slug}-poster.jpg`}
                                            alt="imgForm"
                                        />
                                        <IoIosPlayCircle className={cx('btn_play')} />
                                    </div>
                                    <div className={cx('Movie_name')}>{movies.name}</div>
                                </Link>
                            );
                        })}
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default ListMovie;
