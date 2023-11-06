import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Game.css";

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Elden Ring", id: 1,
            rate: 4,
            genre: "RPG",
            img: "https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/Qfw5KNFAaoVJjwSt2oO8oHUt.png",
            desc:"Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment."
        },
        {
            title: "Counter Strike 2", id: 2,
            rate: 3,
            genre: "FPS",
            img: "https://cdn.sanity.io/images/hdokr93d/production/5c57ed5aba24492b9460f49fda8f9a220b0a8236-1200x1200.jpg?rect=150,0,900,1200&w=600&h=800",
            desc:"For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2."
        },
        {
            title: "Assassin's Creed mirage", id: 3,
            rate: 4,
            genre: "Action, Stealth",
            img: "https://image.api.playstation.com/vulcan/ap/rnd/202208/1718/NFf86jgU4AeVYgJBEoEKBpxW.jpg",
            desc:"Discover a narrative-driven action-adventure experience that follows the transformation of a defiant young man into a refined Master Assassin with a conflicted destiny. Meet an inspiring cast of characters who will shape Basim’s destiny and may be more than what they seem"
        },
        
    ];

    const navigateToDetailPage = (item) => {
        navigate(`/game/detail/${item.id}`, { state: { movieData: item } });
    };
    

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => navigateToDetailPage(item)} 
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
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} rate={item.rate} 
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
