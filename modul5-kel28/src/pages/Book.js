import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Book.css";

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Calculus", id: 1,
            rate: 2,
            genre: "Matematika",
            img: "https://matematika-mipa.unsri.ac.id/wp-content/uploads/2022/10/kalkulus.jpg",
            desc:"The ninth edition continues to be the briefest of all the successful mainstream calculus texts. We have tried to prevent the text from ballooning up- ward with new topics and alternative approaches. In less than 800 pages we cover the major topics of calculus, including a preliminary chapter, and the material from limits to vector calculus. In the last few decades, students have developed some bad habits. They prefer not to read the textbook. They want to find the appropriate worked-out example so it can be matched to their homework problem. Our goal with this text continues to be to keep calculus as a course focused on some few basic ideas centered around words, formulas, and graphs. Solving problem sets, while crucial to developing mathematical and problem-solving skills, should not overshadow the goal of understanding calculus."
        },
        {
            title: "Sistem Digital", id: 2,
            rate: 5,
            genre: "Embedded System",
            img: "https://edwidianto.files.wordpress.com/2021/02/978-602-262-211-6-1254.jpg?w=144",
            desc:"Buku ini membahas dasar-dasar sistem digital mulai dari konsep, analisis, perancangan, implementasi dan evaluasi rangkaian logika. Konsep dan analisis rangkaian logika meliputi gerbang logika, ekspresi dan persamaan logika, aljabar Boolean, representasi bilangan digital dan operasi aritmetika."
        },
        {
            title: "Majalah Bobo 50 Tahun", id: 3,
            rate: 5,
            genre: "Anak",
            img: "https://www.gramedia.com/blog/content/images/2023/10/Majalah-Bobo-Edisi-Koleksi-50-Tahun.jpeg",
            desc:"Dalam rangka merayakan hari jadi ke-50 tahun, Majalah Bobo menerbitkan koleksi spesial karya-karya terbaiknya dalam satu eksemplar bersampul emas ini. Majalah Bobo Edisi Koleksi Terbatas 50 Tahun berisi 50 lebih cerita bergambar yang hanya bisa kita temukan di Majalah Bobo, hasil kurasi dari edisi-edisi favorit pembaca."
        },
        
    ];
    
    const navigateToDetailPage = (item) => {
        navigate(`/book/detail/${item.id}`, { state: { movieData: item } });
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
