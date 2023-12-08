import React from "react";
import Card from '../components/Card/Card'

//API con llave
const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=e9c8a924'

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    //Funcion principal para llamar a nuestra API
    async componentDidMount() {
        try {
            const res = await fetch(`${API}&s=batman`);
            if (!res.ok) {
                throw new Error(`Failed to fetch data. Status: ${res.status}`);
            }
            const resJSON = await res.json();
    
            const movies = resJSON.Search || [];
    
            this.setState({ data: movies });
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }
    
    //Mostrar nuestro componente "Card" según los resultados
    render() {
        console.log('Rendering data:', this.state.data);
        return (
            <div className="row g-4"> 
                {this.state.data.map(movie => {
                    console.log('Rendering movie:', movie);
                    return <Card key={movie.imdbID} movie={movie} />;
                })}
            </div>
        );
    }
}

export default List;
