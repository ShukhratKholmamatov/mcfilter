import github from './Imgs/github.png';
import instagram from './Imgs/instagram.png';
import telegram from './Imgs/telegram.png';
const Home = () => {

    return ( 
        <div className="home">
            <h1 className="font">Shukhrat <label id='word'>Kholmamatov</label></h1>
            <p>Undergraduate software engineer. Trying to bring brevity for every task and life.</p>
            <div className="social">
                <a href="https://github.com/ShukhratKholmamatov"><img src = {github} width={40} height={40} alt="" /></a>
                <a href="https://www.instagram.com/mcfilter_17/"><img src = {instagram} width={50} height={45} alt="" /></a>
                <a href="https://t.me/Mcfilter"><img src = {telegram} width={40} height={40} alt="" /></a>             
            </div>
        </div>
     );
}
    

let words = ["Dev", "Kholmamatov", "Reader"];
    
// setInterval(changeText, 2000);
// let i = 0;

// function changeText(){
    
//     let word = document.getElementById('word');
//     word.innerText = words[i];
//     word.style.transition = "left to right 1s"; 
//     i++;
//     if (i > 2) {
//         i = 0;
//     }
    
// }
 
export default Home;