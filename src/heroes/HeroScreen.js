import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const {heroId} = useParams();
    const hero = useMemo(() => getHeroById( heroId ), [heroId]);

    if (!hero) {
        return <Redirect to="/" />
    }
        const {
            superhero,
            publisher,
            alter_ego,
            first_appearance,
            characters
        } = hero;

    const handleReturn = () => {
        if (history.length > 2) {
            history.goBack();
        }else {
            history.push('/');
        }
    }
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `../assets/heroes/${heroId}.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero}
                />
            </div>

            <div className="col-8 animate__animated animate__fadeInRight">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b> Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b> Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b> First appearance: </b>{first_appearance}</li>
                </ul>
                <h5>Personajes</h5>
                <p>{characters}</p>
                <button 
                    onClick={handleReturn}
                    className="btn btn-outline-info">
                    Regresar
                </button>
            </div>
        </div>
    )
}
