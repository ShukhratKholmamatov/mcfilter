import myimg from './Imgs/myimg.jpg'
import image from './Imgs/image.png'
import po1 from './Imgs/po1.jpg'
import po2 from './Imgs/po2.jpg'
import po3 from './Imgs/po3.jpg'
import po4 from './Imgs/po4.jpg'
import playstation from './Imgs/playstation.jpg'
import sahara from './Imgs/sahara.jpg'
import buxoriy from './Imgs/buxoriy.jpg'
import porj from './Imgs/porj.jpg'

const About = () => {
    return ( 
        <div className="about">
            <div className='me'>
                <img src= {myimg} alt="" />
                <div className='info'>
                    <h1 className='font'>ME, 18 y.o.</h1>
                    <p className='font'>Philosophy and computer science enthusiast from Tashkent. Currently, studying in faculty of software engineering in “Presidential University of the Republic of Uzbekistan”.  
                    <br></br> <label>IF YOU BOOK LOVER THAN YOU’RE MY FRIEND !</label></p>
                </div>
            </div>
            
            <div className='skills'>
            <h1 className='heading'>Projects</h1>
                <div className='blocks'>
                    <a href="https://bristot-coffee.uz/">
                    <div className='project'>
                        <img src={image} alt="" />
                        <h2>Distributor brand (Bristot)</h2>
                    </div>
                    </a>

                    <div className='project1'>
                        <img src={po1} alt="" />
                        <h2>Intro template for biz</h2>
                    </div>
                </div>

                <div className='blocks'>
                    

                    <a href="https://husaynbuxoriy.com/">
                    <div className='project'>
                        <img src={buxoriy} alt="" />
                        <h2>ongoing</h2>
                    </div>
                    </a>

                    <a href="https://github.com/ShukhratKholmamatov?tab=repositories">
                    <div className='project1'>
                        <img src={porj} alt="" />
                        <h2>Codes of 43 projects</h2>
                    </div>
                    </a>
                </div>
            </div>

            <div className='useit'>
            <h1 className='heading'>Use it wisely</h1>
                <div className='blocks'>
                    <div className='project'>
                        <a href="https://age-calculator-sandy.vercel.app/">
                        <img src={po2} alt="" />
                        </a>
                        <h2>Age calculator</h2>
                    </div>

                    <div className='project1'>
                        <img src={po3} alt="" />
                        <h2>Joke geneartor</h2>
                    </div>
                </div>
                <div className='blocks'>
                    <div className='project'>
                        <a href="https://age-calculator-sandy.vercel.app/">
                        <img src={po4} alt="" />
                        </a>
                        <h2>Joke generator</h2>
                    </div>

                    <div className='project1'>
                        <img src={po4} alt="" />
                        <h2>News home page</h2>
                    </div>
                </div>

                <div className='blocks'>
                    <div className='project'>
                        <a href="https://playstation-gold.vercel.app/#">
                        <img src={playstation} alt="" />
                        </a>
                        <h2>playstation landing page</h2>
                    </div>

                    <div className='project1'>
                        <img src={sahara} alt="" />
                        <h2>sahara landing page</h2>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default About;