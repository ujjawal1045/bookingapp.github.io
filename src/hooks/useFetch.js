import React, { useState, useEffect } from "react"

import axios, * as others from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true)
            try {
                const res =await axios.get(url);
                setData(res.data);
            } catch (err) {
                console.log("erorrr1",err.message);
                setError(err);
                
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const reFetch = async ()=>{
        setLoading(true)
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (err) {
            console.log("erorrr2");
            setError(err);
        }
        setLoading(false);
    };

    return {data, loading, error, reFetch}
};

export default useFetch;

