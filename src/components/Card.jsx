import trend1 from "../assets/trend1.webp"
import trend2 from "../assets/trend2.webp"
import trend3 from "../assets/trend3.webp"
import trend4 from "../assets/trend4.webp"
import trend5 from "../assets/trend1.webp"
import trend6 from "../assets/trend2.webp"
import trend7 from "../assets/trend3.webp"
import trend8 from "../assets/trend4.webp"
const data = [
    {
        id: 1,
        image: trend1
    },
    {
        id: 2,
        image: trend2
    },
    {
        id: 3,
        image: trend3
    },
    {
        id: 4,
        image: trend4
    },
    {
        id: 5,
        image: trend5
    },
    {
        id: 6,
        image: trend6
    },
    {
        id: 7,
        image: trend7
    },
    {
        id: 8,
        image: trend8
    }
]

function Card() {

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-4 text-center">Trending Now</h1>
            <div className="cardGroup md:flex ">
                 {data.map((item) => (

                <div className="card mx-3" key={item.id}>
                    <div className="relative m-5 w-full">
                        <img src={item.image} className="rounded-xl  w-screen md:h-80 md:w-120" />
                        <p className="absolute -left-3 bottom-10 md:text-9xl text-[18rem] font-bold  text-stroke-white text-black">{item.id}</p>
                    </div>
                </div>
                
            ))}
            </div>
           
        </div>
    )
}

export default Card