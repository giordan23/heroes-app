import React, { useMemo } from 'react'
import { useLocation } from 'react-router';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import queryString from 'query-string';
import { getHeroesByName } from '../selectors/getHerooesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    
    const [{searchText}, setInputValue, reset] = useForm({searchText: q});
    const filteredHeroes = useMemo(() => getHeroesByName(q), [q ]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
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
                            onChange={setInputValue}
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
                        (q==='')
                            &&
                        <div className='alert alert-info'>Busca un heroe</div>
                    }

                    {   
                        (q!=='' && filteredHeroes.length === 0)
                            &&
                        <div className='alert alert-danger'>No encontramos al heroe {q}</div>
                    }

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
