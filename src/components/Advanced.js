import React from 'react'
import brand from "../images/icon-brand-recognition.svg"
import customize from "../images/icon-fully-customizable.svg"
import records from "../images/icon-detailed-records.svg"

export default function Advanced() {
  return (
    <>
      <section className="stat space">
        <h2>Advanced Statistics</h2>
        <p>  Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>

  <div>
    <article className='brand-box'>
        <img src={brand} alt="" />
        <h3>Brand Recongnition</h3>
        <p> Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</p>
    </article>
    <article className='record-box'>
      <span></span>
        <img src={records} alt="" />
        <h3>Detailed Records</h3>
        <p>  Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
    </article>
    <article className='customize-box'>
      <span></span>
        <img src={customize} alt="" />
        <h3>Fully Customizable</h3>
        <p> Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</p>
    </article>
  </div>
      </section>
    </>
  )
}
