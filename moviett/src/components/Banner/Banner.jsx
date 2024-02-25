import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import { IoIosPlayCircle } from 'react-icons/io';
import 'animate.css';
import { FaYoutube } from 'react-icons/fa';
import { FaCirclePlay } from 'react-icons/fa6';
import { useMovieContext } from '../Middle/MovieProvider';
import axios from 'axios';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Banner() {
    const { selectedMovieSlug } = useMovieContext();
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const fetchAPI = () => {
            return axios
                .get(`https://ophim1.com/phim/${selectedMovieSlug}`)
                .then((response) => {
                    const data = response.data.movie;
                    setMovieData(data);
                })
                .catch((error) => {
                    console.error('Axios Error:', error);
                });
        };
        fetchAPI();
    }, [selectedMovieSlug]);

    return (
        <>
            <div className={cx('Banner')}>
                <div className={cx('Banner_form')}>
                    <div className={cx('poster')}>
                        <img src={movieData.poster_url} alt="" />
                        <IoIosPlayCircle className={cx('btn_play')} />
                        <div className={cx('descriptionFilm', 'ml-[30px] mb-[30px]')}>
                            <div
                                className={cx(
                                    'text-[28px] font-[600]',
                                    'animate__animated animate__fadeInDown animate__slower',
                                )}
                            >
                                {movieData.name}
                            </div>
                            <div
                                className={cx(
                                    'text-[16px] font-[500] mb-[10px]',
                                    'animate__animated animate__fadeInDown animate__slower',
                                )}
                            >
                                {movieData.origin_name}
                            </div>
                            <div style={{ display: 'flex' }}>
                                <button
                                    className={cx(
                                        'text-[14px] font-[400] w-[85px] h-[33px] bg-[#31B0D5] ',
                                        'animate__animated animate__fadeInDown animate__slower',
                                    )}
                                >
                                    <FaYoutube className={cx('mr-[3px] text-[12px]')} />
                                    {movieData.trailer_url != '' ? (
                                        <a href={movieData.trailer_url}> Trailer</a>
                                    ) : (
                                        <a>Trailer</a>
                                    )}
                                </button>
                                <button
                                    className={cx(
                                        'text-[14px] font-[400] w-[85px] h-[33px] bg-[#C9302C] ml-[10px] ',
                                        'animate__animated animate__fadeInDown animate__slower',
                                    )}
                                >
                                    <FaCirclePlay className={cx('mr-[3px] text-[12px]')} />
                                    Xem phim
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
