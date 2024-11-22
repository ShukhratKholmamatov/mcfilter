import arrow from './Imgs/output-onlinepngtools.png';
const Starting = () => {
    return ( 
    <>
      <div  className ='start_p'>
        <div className="description">
          <h1 className='font'>PORTFOLIO</h1>
          <h2 className='font'>SHUKHRAT</h2>
          <h2 className='font'>KHOLMAMATOV</h2>
        </div>
        <a href = '/'><img className='arrow' src= {arrow} alt="" /></a>
      </div>
    </>
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
export default Starting;