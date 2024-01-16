import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [sotad, setSotad] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                console.log(res);
                if(!res.ok) {
                    throw Error('No se ha podido recuperar la informacion');
                }
                return res.json();
            })
            .then(datos => {
                setSotad(datos);
                setCargando(false);
                setError(null);
            })
            .catch(err => {
                setCargando(false);
                setError(err.message);
            })
        }, 300);
    }, [url]);
    return { sotad, cargando, error }
};

export default useFetch;