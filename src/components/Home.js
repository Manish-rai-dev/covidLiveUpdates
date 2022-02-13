import React from 'react'
import Livedata from './Livedata'
import { useNavigate } from 'react-router';


const Home = ({authenticate}) => {

    const navigate=useNavigate();

    const navigateTo =()=>{
        authenticate();
        navigate("/");
            }
    const gotoLive =()=>{
authenticate();
navigate("/live");
    }
  return (
    <>
    
    <section id="title">
     <div className="hero">
        <div className="container-fluid">
         <nav className="navbar navbar-expand-lg navbar-dark ">
           <a className="navbar-brand" href="/">CoVid19</a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle nsvigation">
           <span className="navbar-toggler-icon"></span>    
           </button>
           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
           <ul className="navbar-nav ml-auto nav-links shift_right">
               <li className="nav-item">
                   <a className="nav-link" href="#title" onClick={navigateTo}>Home</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" onClick={gotoLive}>LIVE</a></li>
               <li className="nav-item">
                   <a className="nav-link" href="#features" >GetProtected</a>
               </li>
               <li className="nav-item">
                   <a className="nav-link" href="#symptoms">Symptoms</a>
               </li>
          </ul>    
           </div>
           </nav>
           <h1 className="txte">C<span><img className="rotate linear infinite c19" src="c19.jpg" alt=""/></span>VID-19</h1>
         </div>
         </div>
         </section>
     
     
     <section className="live_stats" id="live_stats">
       <h1 className="live-data">COVID-19 LIVE STATS</h1>
     
      <Livedata/>
     
     </section>
     
     
     
     <section className="conttile" >
      <div className="row">
          <div className="col-lg-6">
              <h3 className="main-head">
                  STAY HOME STAY SAFE
              </h3>
              <p>If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work. Do it all!</p>
          </div>
         <div className="col-lg-6"><img className="title-image" src="home-img.png" alt=''/></div>
     </div>
     </section>
     
  
       <section className="features" id="features"> 
         <div className="container">
         <div className="row row123">
         <div className="card col-lg-4">
             <span></span>
         <span></span>
         <span></span>
         <span></span>
         <div className="content">
         
             <i className="fas fa-syringe fa-8x"></i>
             <h3><strong>GET VACCINATED</strong></h3>
             <p>Vaccination Services; Platforms ... Register or Sign In for Vaccination. An OTP will be sent to your mobile number for verification. Get OTP.</p>
         <a href="https://selfregistration.cowin.gov.in/" className="btn">KNOW MORE</a> 
         
         </div>
         
         </div>
         
         <div className="card col-lg-4">
             <span></span>
         <span></span>
         <span></span>
         <span></span>
         <div className="content">
         
             <i className="fas fa-hands-wash fa-8x"></i>
             <h3><strong>HANDWASH</strong></h3>
             <p> Handwashing an effective tool to prevent COVID-19, other diseases </p>
             <a href="https://www.who.int/southeastasia/news/detail/15-10-2020-handwashing-an-effective-tool-to-prevent-covid-19-other-diseases" className="btn">KNOW MORE</a>  
         </div>
         
         </div>
         
         <div className="card col-lg-4">
             <span></span>
         <span></span>
         <span></span>
         <span></span>
         <div className="content">
         
             <i className="fas fa-head-side-mask fa-8x"></i>
                 <h3><strong>WEAR MASK</strong></h3>
                 <p>Make wearing a mask a normal part of being around other people. The appropriate use, storage and cleaning or disposal of masks are essential to make them as effective as possible.</p>
                 <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks" className="btn">KNOW MORE</a> 
         
         </div>
         
         </div>
         
         <div className="card col-lg-4">
             <span></span>
         <span></span>
         <span></span>
         <span></span>
         <div className="content">
         
             <i className="fas  fa-chart-line fa-8x"></i>
                 <h3><strong>LIVE-STATS</strong></h3>
                 <p>This tracker provides the number of confirmed cases and deaths from novel coronavirus by country, the trend in confirmed case and death counts by country.</p>
                 <a href="#live_stats" className="btn">KNOW MORE</a> 
         
         </div>
         
         </div>
         
         </div>
         </div>
         </section>
     <section className="symptoms" id="symptoms">
         <div className="row">
             <div className="col-lg-12">
                 <h1 className="syms">SYMPTOMS</h1>
             </div>
     <div className="col-lg-6">
         <p className='symptoms_data'>The most common things people who become ill with COVID-19 have include:
     
             Fever or chills
             A dry cough and shortness of breath
             Feeling very tired
             Muscle or body aches
             Headache
             A loss of taste or smell
             Sore throat
             Congestion or runny nose
             Nausea or vomiting
             Diarrhea
             These symptoms can start anywhere from 2 to 14 days after you’re in contact with the virus.
             
             </p>
     
     
     </div>
     
     <div className="col-lg-6">
     <img  className="sympimg" src="symptoms-img.png" alt=""/>
     
     </div>
     </div>
     
     
     
     </section>
     
     
     <footer id="footer">
         <div class ="foot-cont">
         <i className="fab fa-twitter fa-3x jija"></i>
         <i className="fab fa-facebook-f fa-3x jija"></i>
         <i className="fab fa-instagram fa-3x jija"></i>
         <i className="fas fa-envelope fa-3x jija"></i>
       </div>
     <div className="foot-copy">
         <p>© Copyright 2021 CovId-19</p>
         
       </div>
       </footer>
    
    </>
  )
}

export default Home