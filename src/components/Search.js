import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { Header } from './Header'
import { useNavigate } from 'react-router-dom'

export const Seacrh=()=>{
    const{query}=useParams()
    const[data,setData]=useState([])
    const navigate=useNavigate()
    const fetchAPI=async()=>{
        await axios.get(`https://api.itbook.store/1.0/search/${query}`)
            .then(res=>{
                setData(res.data.books)
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    console.log(data)
    useEffect(()=>{
        fetchAPI()
    },[])
    
    return(
        <>
            <div className='container'>
                <Header />
                <div className='d-flex justify-content-end flex-column'style={{alignItems:'center'}}>
                    {data.map((buku)=>(
                        <>
                            <div className="card flex-row flex-wrap" style={{ width: "48rem", marginTop: "50px" }} onClick={() => { navigate('/book/' + buku.isbn13) }}>
                                <div className="card-header border-0">
                                    <img src={buku.image} alt="Buku.jpg" width="200" height="220" class="px-4" />
                                </div>
                                <div className="card-block p-4" style={{ width: "50%" }}>
                                    <h3 className="card-title">{buku.title}</h3>
                                    <p className="card-text">{buku.subtitle}</p>
                                    <p className="text-muted">{buku.isbn13}</p>
                                    <p>{buku.price}</p>
                                </div>
                            </div>        
                        </>
                    ))}
                </div>    
            </div>
        </>
    )
}