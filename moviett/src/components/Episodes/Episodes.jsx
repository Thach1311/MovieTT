import classNames from 'classnames/bind';
import styles from './Episodes.module.scss';
import { useEffect, useState } from 'react';
import { useMovieContext } from '../Middle/MovieProvider';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
const cx = classNames.bind(styles);
function Episodes() {
    const { selectedMovieSlug } = useMovieContext();
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        Aos.init({ transition: 2000 });
    }, []);

    useEffect(() => {
        const fetchAPI = () => {
            return axios
                .get(`https://ophim1.com/phim/${selectedMovieSlug}`)
                .then((response) => {
                    const data = response.data.episodes;
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
            <div data-aos="fade-up" className={cx('form')}>
                {movieData.map((server) =>
                    server.server_data.map((episode, index) => (
                        <button key={index} className={cx('episodes')}>
                            <a href={episode.link_embed}> Tập {index + 1}</a>
                        </button>
                    )),
                )}
            </div>
        </>
    );
}

export default Episodes;
