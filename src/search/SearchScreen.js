import React from 'react'
import { useLocation } from 'react-router';
import { heroes } from '../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    console.log(location);

    const filteredHeroes = heroes;
    const [{searchText}, setsearchText, reset] = useForm({searchText: ''});
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
        reset();
    }

    return (
        <div>
            <h1>SearchScreeen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> SearchForm </h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name='searchText'
                            onChange={setsearchText}
                            value={searchText}
                            placeholder="Buscar heroe"
                            className="form-control"
                            />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>
                        Resultados
                    </h4>
                    <hr />

                    {
                        filteredHeroes.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
