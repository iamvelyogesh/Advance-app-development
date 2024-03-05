import React from "react"
import "../../assets/css/courses.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

import { coursesCard } from "../../dummydata"
import { Link } from "react-router-dom";

const CoursesCard = () => {
  return (
    <>
 
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content'>
                {/* <div className='left'> */}
                  <div className='imgg'>
                    <img src={val.cover} alt='' />
                  {/* </div> */}
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  {/* <div className="flex"> */}
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                  {/* </div> */}
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <Link to = '/enroll'><button className='outline-btn'>ENROLL NOW !</button></Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
