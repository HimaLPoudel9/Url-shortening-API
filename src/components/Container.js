import React from 'react'
import working from "../images/illustration-working.svg"

export default function Container() {
  return (
    <>
      <section>
        <div className='showcase space'>
            <article>
            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
  <button className='btn'>Get Started</button>
            </article>
            <article>
                <img src={working} alt="" />
            </article>
       
        </div>
      </section>
    </>
  )
}
