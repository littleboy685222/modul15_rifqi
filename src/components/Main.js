import { Header } from "./Header";
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";

export const Main= ()=>{
    const navigate = useNavigate()
    const [data, setData]=useState([])
    const fetchAPI = async()=>{
        await axios.get(`https://api.itbook.store/1.0/new`)
            .then(res=>{
                setData(res.data.books)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    console.log(data)
    useEffect(()=>{
        fetchAPI()
    },[])
    return(
        <>
            <div className="container">
                <Header/>
                <div className="d-flex justify-content-end flex-column" style={{alignItems:"center"}}>
                    <h5 style={{width:"48rem",marginTop:"50px"}}>New Arrival</h5>
                    {data.map((buku)=>(
                        <>
                            <div className="card flex-row flex-wrap" style={{width:"48rem",marginTop:"50px"}} onClick={()=>{navigate('/book/'+ buku.isbn13)}}>
                                <div className="card-header border-0">
                                    <img src={buku.image} alt="Buku.jpg" width="200" height="220" class="px-4"/>
                                </div>
                                <div className="card-block p-4" style={{width:"50%"}}>
                                    <h4 className="card-title">{buku.title}</h4>
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