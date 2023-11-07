import { Fragment } from "react";
import { useNavigate } from 'react-router-dom'; 

import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "John Wick 4", id: 1,
            rate: 4,
            genre: "Action, Crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            desc:"Condemned by the tyrannical High Table to be on the run for the rest of his life, deadly assassin maestro John Wick (2014) embarks on a Sisyphean mission of suicidal fury to decide his fate after the merciless carnage in John Wick: Chapter 3 - Parabellum (2019). At last, John's violent journey, fuelled by vengeance and grief, ultimately leads him to a fateful confrontation with his former employers, the crime masters that forced him into exile. And as the blood-stained vendetta to destroy those who pull the strings continues, old companions face the brutal consequences of friendship, and all-powerful, well-connected adversaries emerge to bring Wick's head on a platter. But talk is cheap--now guns have the final say. Can Baba Yaga, the grim messiah of death, make every bullet count in this bloody, once-and-for-all struggle for freedom?"
        },
        {
            title: "Oppenheimer", id: 2,
            rate: 4,
            genre: "Biography, Drama, History",
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
            desc:"J. Robert Oppenheimer, the creator of The Atomic Bomb, is put on trial for his supposed communist ties in the past, all while coming to terms with what it meant to change the history of the world for the sake of winning World War Two. This is the story of how America's Prometheus was cast out by The Gods for giving mankind an unthinkable gift: power unlike any other, the power to destroy the world; the power of Olympus."
        },
        {
            title: "Barbie", id: 3,
            rate: 5,
            genre: "Comedy",
            img: "https://people.com/thmb/KbXaWZcOfoOjVstqnS3Bd4AgiCo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(551x689:553x691)/Barbie-84bbd2b2160c41c3b051221a3cb382a6.jpg",
            desc:"Barbie suffers a crisis that leads her to question her world and her existence."
        },
        {
            title: "Fast X", id: 4,
            rate: 2,
            genre: "Action",
            img: "https://jambiindependent.disway.id/upload/eb0fda635d05bdb5cded73d50a6201ce.jpg",
            desc: "The final road begins! Dom Torretto and his family have made it through thick and thin together while succeeding in various missions and fighting off multiple villains. But now Dom is put to the ultimate test when he goes up against Dante Reyes, the son of an old foe who is out to exact revenge for the death of his father. With time running out and help from new allies, Dom and his family are in for the fight of their lives against the biggest enemy they have ever faced."
        },
    ];

    const navigateToDetailPage = (item) => {
        navigate(`/movie/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            rate={item.rate}
                            onClick={() => navigateToDetailPage(item)} 
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="movies">All Movies</p>
                    {poster.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                rate={item.rate}
                                onClick={() => navigateToDetailPage(item)} 
                            />
                            {poster.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
