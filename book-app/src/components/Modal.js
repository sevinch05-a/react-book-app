import react from 'react';
const Modal=()=>{
    return(
        <>
        <div className="overlay">
            <div classname="overlay-inner">
                <button className="close"><FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-xmark" /></button>
                <div className="inner-box">
                <img src="./images/react book.jpg" alt="" />
                <div className="info">
                    <h1>ReactJS by Example - Building Modern Web Applications with React</h1>
                    <h3>Prathamesh Sonpatki</h3><br/>
                    <h4>Packt Publishing Ltd <span>2016-04-21</span></h4><br/>
                    <a href="#"><button>More</button></a>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Modal;