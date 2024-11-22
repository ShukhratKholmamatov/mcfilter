import github from './Imgs/github.png';
import instagram from './Imgs/instagram.png';
import telegram from './Imgs/telegram.png';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="line"></div>
            <div className="footer_about">
                <h3 className='font'>©2023 Shukhrat Kholmamatov</h3>
                <div>
                <a href="https://github.com/ShukhratKholmamatov"><img src = {github} width={40} height={40} alt="" /></a>
                <a href="https://www.instagram.com/mcfilter_17/"><img src = {instagram} width={50} height={45} alt="" /></a>
                <a href="https://t.me/Mcfilter"><img src = {telegram} width={40} height={40} alt="" /></a>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;