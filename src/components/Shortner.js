import { useEffect, useState } from "react"

const getLocalStorage = () =>{
    let links = localStorage.getItem("links")

    if (links) {
        return JSON.parse(localStorage.getItem("links"))
    }else{
        return []
    }

}



export default function Shortner() {
    const [show, setShow] = useState(false)
    const [text,setText] = useState("")
    const [links,setLinks] = useState(getLocalStorage())
    const [btnText, setBtnText] = useState("Copy")
    const handleSubmit = (e) =>{
        e.preventDefault()
        setShow(true)
        if (!text) {
            alert("Input is empty")
        }else{
            const shortenLink = async () =>{
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
                const data = await res.json()
                setLinks(data.result)
                setText("")

            }
            shortenLink()
        }
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(links.full_short_link)
        setBtnText("Copied")
        


    }
   
    useEffect(()=>{
        localStorage.setItem("links",JSON.stringify(links))
    },[links])

  return (
    <>
      <section className='shortner space'>
       
        <form onSubmit={handleSubmit}>
            <div>
                <input type="url" placeholder='Shorten your link here' value={text} onChange={(e) => setText(e.target.value)}/>
                <button type="submit" className='btn shorten' onClick={handleSubmit}>Shorten It!</button>
            </div>
        </form>
        {show ?
            <div className="link-boxs"> 
            <article>
                <h6>{links.original_link}</h6>
            </article>
            <article>
                <ul>
                    <li><button className="short-link">{links.full_short_link}</button></li>
                    <li><button className="btn copy" onClick={handleCopy}>{btnText}</button></li>
                    
                </ul>
            </article>
            
        </div>:null}
      
        
      </section>
    </>
  )
}
