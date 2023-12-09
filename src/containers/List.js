import React, { Fragment } from "react";
import Card from "../components/Card/Card";

//API con llave
const API = "http://www.omdbapi.com/?i=tt3896198&apikey=e9c8a924";

//Clase principal "List"
class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: '',
    };
  }

  //Funcion principal para llamar a nuestra API
  async componentDidMount() {
    try {
      const res = await fetch(`${API}&s=her`);
      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }
      const resJSON = await res.json();

      const movies = resJSON.Search || [];

      this.setState({ data: movies });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('enviando...')
  }

  //Mostrar nuestro componente "Card" según los resultados
  render() {
    console.log("Rendering data:", this.state.data);
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* Prevenir recarga desde el browser con la funcion handleSumit onChange en el form */}
            <form className="form-inline my-2 my-lg-0" onSubmit={ (e) => this.handleSubmit(e)}>
                <input 
                    className="form-control mr-sm-2" 
                    type="text" 
                    placeholder="Search" 
                    onChange={e=> this.setState({searchTerm: e.target.value})} 
                />
            </form>
        </nav>
        <div className="row g-4">
          {this.state.data.map((movie) => {
            console.log("Rendering movie:", movie);
            return <Card key={movie.imdbID} movie={movie} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default List;
