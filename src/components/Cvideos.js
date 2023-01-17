import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import { cdata } from './cdata';
const Cvideos = () => {
        const [cldata, setCldata] = useState([]);
       useEffect(()=>{
        setCldata(cdata);
       
       },[])
   
  return (
    <div>
      <Navbar />
       <center>
       <h3 className='mt-3 mb-3'>C Programming</h3>
       
      <div>
        {
            cdata.map((data)=>(
                <div key={data.day} style={{width : "80%" }} className="border border-ligth  shadow p-1 mb-3 bg-body rounded d-flex justify-content-between"> 
                    <div className='d-flex '>
                        <p className='rounded-circle bg-secondary m-3 p-1 Ligth text-white' style={{width:30,height:30}}>{data.day}</p> 
                        <p className='p-1 mt-3 fs-6'>{data.date}</p>
                        <h6 className='p-2 mt-2 ms-5 fs-5 fst-italic'>{data.topic}</h6>
                    </div>
                    <div className='bg-ligth d-flex justify-content-around' style={{width :270}}> 
                        <p className='fs-6 me-2' style={{marginTop:20}}>passcode : {data.passcode}</p>
                        <a href={data.url} className="btn btn-primary mt-3 ms-2 " target="blank" style={{height:35}}>Watch</a>
                    </div>
                </div>
               
            ))
        }
      </div>
      </center>
    </div>
  );
}

export default Cvideos;
