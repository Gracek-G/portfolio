import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className="about__box">
      <i class='bx bxl-javascript about__icon'></i>
        <h3 className="about__title">JavaScript</h3>
        <span className="about__subtitle"></span>
      </div>

      <div className="about__box">
      <i class='bx bxl-react about__icon'></i>
        <h3 className="about__title">React JS</h3>
        <span className="about__subtitle"></span>
      </div>

      <div className="about__box">
      <i class='bx bxl-html5 about__icon'></i>
      <i class='bx bxl-css3 about__icon'></i>
        <h3 className="about__title">HTML/CSS</h3>
        <span className="about__subtitle"></span>
      </div>
    </div>
  )
}

export default Info