import React from 'react';
import { useEffect ,useState} from 'react';
import './Livedata.css';

const Livedata = () => {
    const[data, setData]= useState([]);
    const[dataa, setDataa]= useState([]);
const getCovidData= async ()=>{
    try{
        const res = await fetch('https://corona.lmao.ninja/v2/countries?sort=country.json');
      const acutalData = await res.json();
        // console.log(acutalData[93]);
        setData(acutalData[93]);
        setDataa(acutalData[212]);
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
    <div className="container container-flipcard">
        <div className="row">
            <div className="col-lg-4">
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
        <h1 className="design"> <strong>COUNTRY  <img src="indian_flag.png" height={90} width={90} alt="" /></strong><p>{data.country}</p></h1>
       
    </div>
    <div className="flip-card-back">
      <h1 className="design">TOTAL CASES REPORTED <p className='design2'>{data.cases}</p></h1>
      
      
    </div>
  </div>
</div>
</div>
<div className="col-lg-4">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front  flip-card-front1">
        <h1 className="design"> <strong>ACTIVE CASES</strong><p>{data.active}</p></h1>
    </div>
    <div className="flip-card-back flip-card-back1">
      <h1 className="design">TOTAL RECOVERED  <p>{data.recovered}</p></h1>
     
      
    </div>
  </div>
</div>
</div>
<div className="col-lg-4">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front flip-card-front2">
        <h1 className="design"> <strong>TOTAL TESTS</strong><p>{data.tests}</p></h1>
    </div>
    <div className="flip-card-back flip-card-back2">
      <h1 className="design">TOTAL DEATHS <p>{data.deaths}</p></h1>
    
      
    </div>
  </div>
</div>
</div>
</div>
<div className="row usadata">
            <div className="col-lg-4">
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
        <h1 className="design"> <strong>COUNTRY<img src="USA_flag.png" height={90} width={90} alt="" /></strong><p>{dataa.country}</p></h1>
        
    </div>
    <div className="flip-card-back">
      <h1 className="design">TOTAL CASES REPORTED <p>{dataa.cases}</p></h1>
      
      
    </div>
  </div>
</div>
</div>
<div className="col-lg-4">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front flip-card-front1">
        <h1 className="design"> <strong>ACTIVE CASES</strong><p>{dataa.active}</p></h1>
    </div>
    <div className="flip-card-back flip-card-back1">
      <h1 className="design">TOTAL RECOVERED  <p>{dataa.recovered}</p></h1>
     
      
    </div>
  </div>
</div>
</div>
<div className="col-lg-4">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front flip-card-front2">
        <h1 className="design"> <strong>TOTAL TESTS</strong><p>{dataa.tests}</p></h1>
    </div>
    <div className="flip-card-back flip-card-back2">
      <h1 className="design">TOTAL DEATHS <p>{dataa.deaths}</p></h1>
    
      
    </div>
  </div>
</div>
</div>
</div>
</div> 
    </>
  )
}

export default Livedata