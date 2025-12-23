import React from 'react';

const Modal = () => {
    const [loadingState, setLoadingState] = React.useState({
        loading: false,
        error: false,
        refetch: false,
        data: []
    });

    const baseUrl = import.meta.env.VITE_BARKAPPAPI;
    const apiKey = import.meta.env.VITE_BARKAPPAPIKEY;

    React.useEffect(() => {
        const fetchData = async () => {
            setLoadingState(prev => ({
                ...prev,
                loading: true,
                error: false
            }));


            try {
                const response = await fetch(`${baseUrl}/breeds/34`, {
                    method: 'GET',
                    headers: {
                        'x-api-key': apiKey,
                        'Accept': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }

                const data = await response.json();

                setLoadingState(prev => ({
                    ...prev,
                    data,
                    loading: false
                }));
            } catch (err) {
                console.error(err);
                setLoadingState(prev => ({
                    ...prev,
                    error: true,
                    loading: false
                }));
            }
        };

        fetchData()
        console.log('Data fetched')
    }, []);


    console.log(loadingState.data)
    const imageUrl = `https://cdn2.thedogapi.com/images/${loadingState.data.reference_image_id}_1280.jpg`;

    return (
        <div>
            <h1>{loadingState.data.name}</h1>
            <h2>{loadingState.data.breed_group}</h2>
            <img src={imageUrl} alt={`Image Not Found: Refer To Google For Images Of A ${loadingState.data.name}`}/>
            <h2>{loadingState.data.temperament}</h2>
        </div>
    );
};

export default Modal;