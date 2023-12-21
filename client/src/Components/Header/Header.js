
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import './Header.scss';

const Header = (props) => {

    const navigate = useNavigate();
    const [isMenu, setMenu] = useState(false);

    const hambugerBtn = () => {
        setMenu(isMenu => !isMenu);
    }
    
    const LogOut = async () => {
        // props.setNickname();
        await axios.get(process.env.REACT_APP_BASE_URL + "/auth/logout");
        window.localStorage.clear();
        window.location.replace('/');
    }
    
    return (
        <header>
            <div className='headerArea'>
                <div className='head_wrap'>
                    <h1 className='logo'>
                        <Link to='/'>내일뭐하지?</Link>
                    </h1>

                    <ul className="navbar_1 navbar_pc">
                        <li>
                            <Link className='bt_line' to='/event'> 지역 검색 </Link>
                        </li>

                        <li>
                            <Link className='bt_line two_line' to='/chat'> 채팅 </Link>
                        </li>

                        <li>
                            <Link className='bt_line two_line' to='/mypage'> 일정 </Link>
                        </li>
                    </ul>

                    <div className='nav'>
                        { props.name == "" ? (
                            <ul className="navbar_2 navbar_pc">
                                <li>
                                    <Link to='/user/login'> 로그인 </Link>
                                </li>

                                <li>
                                    <Link to='/user/signup'> 회원가입 </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar_2 navbar_pc">
                                <li>{props.name}</li>
                                <li style={{cursor:'pointer'}} onClick={LogOut}> 로그아웃 </li>
                                <li style={{cursor:'pointer'}} onClick={() => navigate('/mypage')}> 마이페이지 </li>
                            </ul>
                        ) }

                        <div className='nav_icon' onClick={hambugerBtn}>
                            <div className='nav_hambuger'></div>
                        </div>

                        <div className={isMenu ? 'mob_box' : 'hide_box'}>
                            <ul className="navbar_3 navbar_mobile">
                                <li className='mob_li'>
                                    <Link className='arrow' to='/event' onClick={hambugerBtn}> 지역 검색 </Link>
                                </li>

                                <li className='mob_li'>
                                    <Link className='arrow' to='/chat' onClick={hambugerBtn}> 채팅 </Link>
                                </li>

                                <li className='mob_li'>
                                    <Link className='arrow' to='/mypage' onClick={hambugerBtn}> 일정 </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;