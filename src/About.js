import myimg from './Imgs/myimg.jpg'

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
            <div className='collage'>

            </div>
            <h1 className='heading'>Achievments and Skills</h1>
        </div>
    );
}
 
export default About;