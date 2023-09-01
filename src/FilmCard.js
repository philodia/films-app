import "./App.css";

export default function FilmCard({ele}) {
    return (
        <div className="FilmCard">
                <div>
                    <div>
                    <img width="300" src={ele.img} alt={ele.title} />
                    </div>
                    <div >
                    <h2>{ele.title}</h2>
                    <p>{ele.description}</p>
                    <h3>Rate : {ele.rating}</h3>
                    <h4>{ele.posterURL}</h4>
                    </div>
                </div>
            </div>
    )
}