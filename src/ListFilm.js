import "./App.css";
import FilmCard from "./FilmCard";
import {Link} from "react-router-dom";

function ListFilm({list}){
    return(
        <div className="ListFilm">{
        list.map( (ele,index)=>(
            <Link key={index} to={"/"+index} > 
            <FilmCard key={index} ele={ele} />
            </Link>
        ))
        }
        </div>
    );
}

export default ListFilm;