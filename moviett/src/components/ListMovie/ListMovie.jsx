import classNames from 'classnames/bind';
import styles from './ListMovie.module.scss';
import { IoIosPlayCircle } from 'react-icons/io';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import 'animate.css';
import { Outlet, Link } from 'react-router-dom';
import { useMovieContext } from '../Middle/MovieProvider';

const cx = classNames.bind(styles);

function ListMovie() {
    const [movieData, setMovieData] = useState([]);
    const { setSelectedMovieSlug } = useMovieContext();

    useEffect(() => {
        const fetchData = () => {
            return axios
                .get('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1')
                .then((response) => {
                    const data = response.data.items;
                    setMovieData(data);
                })
                .catch((error) => {
                    console.error('Axios Error:', error);
                });
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className={cx('Movie')}>
                <h1 className={cx('headMovie', 'animate__animated animate__fadeInUp')}>PHIM ĐỀ CỬ</h1>

                <div className={cx('listMovie')}>
                    {movieData.length > 0 &&
                        movieData.map((movies, key) => {
                            return (
                                <Link
                                    to="/movie"
                                    className={cx('MovieForm', 'animate__animated animate__slideInUp')}
                                    key={key}
                                    onClick={() => setSelectedMovieSlug(movies.slug)}
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
