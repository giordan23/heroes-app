import React from 'react'
import { heroes } from '../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';

export const SearchScreen = () => {

    const filteredHeroes = heroes;
    const [{inputValue}, setInputValue, reset] = useForm({inputValue: ''});
    
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(inputValue);
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
                            name='inputValue'
                            onChange={setInputValue}
                            value={inputValue}
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
