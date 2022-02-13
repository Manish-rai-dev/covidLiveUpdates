import React from 'react'
import { useEffect,useState } from 'react'
import "./Live.css";
const Live = () => {
    const [data,setData]=useState([]);

    const getCovidData= async ()=>{
        try{
            const res = await fetch('https://corona.lmao.ninja/v2/countries?sort=country.json');
          const acutalData = await res.json();
            // console.log(acutalData[93]);
            setData(acutalData);
            // setData(acutalData[93]);
            // setDataa(acutalData[212]);
        }
        catch(err){
            console.log(err);
        }
     
    
    }
    
    
        useEffect(() => {
         getCovidData();
        }, []);
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
                   <a className="nav-link" href="/">Home</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/live">LIVE</a></li>
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


    <section>
   
    <div className="container-fluid container-fluidity  mt-5 ">
      
        <div className="main-heading">  <h1 className='mb-5 text-center'><span className='font-weight-bold'>WORLD</span> COVID-19 DASHBOARD</h1></div>
    
    <div className="table-responsive">
        <table className='table table-hover'>

            <thead className='table-dark'>
                <tr>
                    <th>
                        Country
                    </th>
                    <td>
                        Confirmed
                    </td>
                    <td>
                        Recovered
                    </td>
                    <td>
                        Active
                    </td>
                    <td>
                        Deaths
                    </td>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((curElement, ind)=>{

                        return (
                            <tr key={ind} >
                            <th>
                                {curElement.country}
                            </th>
                            <td>
                            {curElement.cases}
                            </td>
                            <td>
                           {curElement.recovered}
                            </td>
                            <td>
                                {curElement.active}
                            </td>
                            <td>
                            {curElement.deaths}
                            </td>
                        </tr>

                        )
                    })
                }


           
            </tbody>
        </table>
    </div>
    </div>
    </section>
    </>
  )
}

export default Live