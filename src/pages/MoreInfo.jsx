import React from 'react';
import { DogContext } from '../components/Webpage.jsx'
import '../CSS/moreinfo.css'
import { BounceLoader } from "react-spinners";
import {Link} from "react-router-dom";
import blackBackButton from '../../public/blackBackButton.svg'

const MoreInfo = () => {
    const [ loadingState, setLoadingState ] = React.useState({
        error: false,
        loading: false,
        dog: null
    })

    const { dogID } = React.useContext(DogContext);

    const baseUrl = import.meta.env.VITE_BARKAPPAPI;
    const apiKey = import.meta.env.VITE_BARKAPPAPIKEY;

    React.useEffect(() => {

        if (!dogID) return

        const fetchDogID = async () => {

            setLoadingState(prev => ({
                ...prev,
                loading: true,
                error: false,
            }))

            try {
                const response = await fetch(`${baseUrl}/breeds/${dogID}`, {
                    headers: {
                        'x-api-key': apiKey,
                        Accept: 'application/json',
                    }
                })
                const data = await response.json()

                setLoadingState(prev => ({
                    ...prev,
                    dog: data,

                }))
            } catch (err) {

                setLoadingState(prev => ({
                    ...prev,
                    error: true,
                }))
                console.error(`Something went wrong: ${err}`)

            } finally {
                setLoadingState(prev => ({
                    ...prev,
                    loading: false,
                }))
            }
        }
        fetchDogID()
    }, [dogID])

    if (loadingState.loading) {
        return <BounceLoader size={215} />;
    }

    if (loadingState.error) {
        return <p>Error loading dog info.</p>;
    }

    if (!loadingState.dog) {
        return (
            <>
                <h1>Back To The Home</h1>
                <Link to='..'>
                    <img src={blackBackButton} alt='Click to go back to home page' className='navigation'/>
                </Link>
            </>
        )
    }

    const imageUrl = `https://cdn2.thedogapi.com/images/${loadingState.dog.reference_image_id}_1280.jpg`;

    return (
        <>
            <div className="more-info-container">
                <div>
                    <h1>
                        {loadingState.dog.name}'s weight is usually around{" "}
                        {loadingState.dog.weight.imperial} pounds with an average
                        height spanning from {loadingState.dog.height.imperial} inches
                    </h1>
                </div>
                <div className='img-container'>
                    <Link to='..'>
                        <img src={blackBackButton} alt='Back' className='navigation' />
                    </Link>
                    <img
                        src={imageUrl}
                        alt={`Image Not Found: Refer To Google For Images Of A ${loadingState.dog.name}`}
                    />
                </div>
            </div>

            <h2>
                The {loadingState.dog.name} has an average lifespan of{" "}
                {loadingState.dog.life_span}!
            </h2>
        </>
    );
};

export default MoreInfo;
