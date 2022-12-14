import React from 'react';
import "./scroller.css";

const Scroller = () => {

  window.addEventListener("scroll", function() {
    const scroller = document.querySelector(".scroller");
    // when scroll is higher than 560 viewport height add the show-scroll class to the scroller
    if (this.scrollY >= 560) scroller.classList.add("show-scroll");
    else scroller.classList.remove("show-scroll");
  })

  return (
    <a href="#" className="scroller">
      <i className="uil uil-arrow-up scroller__icon"></i>
    </a>
  )
}

export default Scroller