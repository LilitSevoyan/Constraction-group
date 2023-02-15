import React,{useEffect} from "react"

export default function Address(){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return(
  
    <div className="MainContent">
      <div className="locations-wrapper">
          <div className="map">
            <iframe title="This is a unique title"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.9626923898913!2d44.55907902920782!3d40.19013439871203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd2857634dd9%3A0x7e89f6960cbe62a5!2z1LPVtdW41oLWgNW71bXVodW2IDI3!5e0!3m2!1sru!2s!4v1645691546606!5m2!1sru!2s" width="600" height="450" style={{border:"0"}}  loading="lazy"></iframe>
          </div>
      </div>
    </div>
    
  
    
  )

}