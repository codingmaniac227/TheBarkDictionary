import React, {useContext} from 'react';
import '../CSS/modal.css'
import blackNextButton from '../../public/blackNextButton.svg'
import {Link} from "react-router-dom";
import { DogContext } from '../components/Webpage.jsx'

const Modal = () => {

    const { setDogID, dogID } = useContext(DogContext);

    const [loadingState, setLoadingState] = React.useState({
        loading: false,
        error: false,
        refetch: false,
        data: [],
    });

    const [navigation, setNavigation] = React.useState({
        nextButtonClicked: false,
    })

    const baseUrl = import.meta.env.VITE_BARKAPPAPI;
    const apiKey = import.meta.env.VITE_BARKAPPAPIKEY;

    React.useEffect(() => {
        const fetchData = async () => {
            setLoadingState(prev => ({
                ...prev,
                loading: true,
                error: false
            }));

            const randomPetID = Math.floor(Math.random() * 99);

            try {
                const response = await fetch(`${baseUrl}/breeds/${randomPetID}`, {
                    headers: {
                        'x-api-key': apiKey,
                        Accept: 'application/json'
                    }
                });

                const data = await response.json();

                setLoadingState(prev => ({
                    ...prev,
                    data,
                    loading: false
                }));

                setDogID(randomPetID)

                setNavigation(prev => ({
                    ...prev,
                    nextButtonClicked: false
                }));
            } catch (err) {
                setLoadingState(prev => ({
                    ...prev,
                    error: true,
                    loading: false
                }));
            }
        };

        fetchData();
    }, [navigation.nextButtonClicked]);

    console.log(dogID)

    const handleButtonClicked = () => {
        setNavigation(prev => ({
            nextButtonClicked: true,
        }));

    }


    console.log(loadingState.data)
    const imageUrl = `https://cdn2.thedogapi.com/images/${loadingState.data.reference_image_id}_1280.jpg`;


return (
            <div>
                <h1>Name: {loadingState.data.name}</h1>
                <h2>Breed: {loadingState.data.breed_group}</h2>
                <h4>Click The Image Below For More Info On This Dog!</h4>
                <div className='img-container'>
                    <Link to='more-info'>
                        <img src={imageUrl} alt={`Image Not Found: Refer To Google For Images Of A ${loadingState.data.name}`} />
                    </Link>
                    <img src={blackNextButton} className='navigation' onClick={handleButtonClicked} />
                </div>
                <h2>Fun Fact: {loadingState.data.temperament}</h2>
            </div>
    );
};

export default Modal;