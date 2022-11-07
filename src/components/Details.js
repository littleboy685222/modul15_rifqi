import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Header } from './Header'

export const Details = ()=>{
    const {isbn} = useParams()
    const[data, setData]=useState([])
    const fetchAPI=async()=>{
        await axios.get(`https://api.itbook.store/1.0/books/${isbn}`)
            .then(res=>{
                setData(res.data)
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
            <div className="container">
                <Header/>
                <div className="d-flex justify-content-end flex-column" style={{alignItems:"center"}}>
                    <div className="card flex-row flex-wrap" style={{width:"50rem",marginTop:"50px"}}>
                        <div className="card-header border-0">
                            <img src={data.image} alt="Buku.jpg" width="250" height="270" className="px-4"/>
                        </div>
                        <div className="card-block p-4" style={{width:"58%"}}>
                            <h4 className="card-title">{data.title}</h4>
                            <p className="card-text">{data.subtitle}</p>
                            <p className="card-text">Authors:{data.authors}</p>
                            <p className="card-text">Language:{data.language}</p>
                            <p className="card-text">Pages:{data.pages}</p>
                            <p className="card-text">Year:{data.year}</p>
                            <p className="card-text">Rating:{data.rating}</p>
                            <p className="card-text">ISBN 13:{data.isbn13}</p>
                            <p className="card-text">{data.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}