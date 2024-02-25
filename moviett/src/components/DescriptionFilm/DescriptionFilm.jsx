import classNames from 'classnames/bind';
import styles from './DescriptionFilm.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function DescriptionFilm() {
    useEffect(() => {
        Aos.init({ transition: 2000 });
    }, []);

    return (
        <>
            <div data-aos='fade-down' className={cx('form_Description')}>
                <div className={cx('layout')}>
                    <div data-aos="fade-up" className={cx('description')}>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Đang phát: </span>
                            <span className={cx('text-red-600 font-[500] text-[13px]')}> Hoàn Tất(8/8)</span>
                        </div>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Thể loại: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>
                                {' '}
                                Phim Viễn Tưởng, Phim Phiêu Lưu
                            </span>
                        </div>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Điểm Rottentomatoes: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>
                                100% Tomatometer
                            </span>
                        </div>
                    </div>

                    <div data-aos="fade-up" className={cx('description')}>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Năm Phát Hành: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>2024</span>
                        </div>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Đạo diễn: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}> Albert Kim,</span>
                        </div>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Thời lượng: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>8 Tập</span>
                        </div>
                    </div>

                    <div data-aos="fade-up" className={cx('description')}>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Quốc gia: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>Phim Âu Mỹ</span>
                        </div>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Điểm IMDb: </span>
                            <span
                                className={cx(
                                    'text-black w-[22px] h-[18px] bg-[#e3b71e] text-[13px] p-[2px] rounded-[2px] font-[700]',
                                )}
                            >
                                8.7
                            </span>
                        </div>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Diễn viên: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>
                                Gordon Cormier, Dallas Liu,
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('h-[1px] w-[950px] bg-[#3a3a3a] mt-[10px]')}></div>

                <div className={cx('main')}>
                    <h3 data-aos={'fade-left'} className={cx('text-[15px] font-[700] text-[#ff9601] mt-[10px] mb-[10px]')}>Nội dung phim</h3>
                    <div data-aos="fade-down" className={cx('text-[14px] text-[#828282]')}>
                        Thế Thần: Ngự Khí Sư Cuối Cùng (Live Action) Avatar: The Last Airbender 2024 là một series
                        truyền hình live-action được sản xuất bởi Netflix, dựa trên series hoạt hình cùng tên nổi tiếng
                        của Nickelodeon. Phim kể về Aang, một cậu bé 12 tuổi là airbender, thức dậy sau khi bị đóng băng
                        trong băng 100 năm. Aang là Avatar duy nhất còn sót lại sau khi tất cả các airbender khác bị
                        Fire Nation tiêu diệt. Phim xoay quanh hành trình của Aang cùng bạn bè trong việc học cách kiểm
                        soát bốn yếu tố (Nước, Đất, Lửa, và Khí) để phục hồi cân bằng cho thế giới bị đe dọa bởi Fire
                        Nation. Bộ phim có sự tham gia của các diễn viên như Gordon Cormier, Daniel Dae Kim và Tamlyn
                        Tomita
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescriptionFilm;
