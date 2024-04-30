import { CardBig, CardSmall } from "@/components/card/Card";

type props = {
    items:any[]
}

const fetcher = async(url:string) => {
    try{

        const res = await fetch(url);
    
        const body = await res.json();
        if (!res.ok) {
            throw new Error(body.message);
        }
        return body;
    } catch(error:any) {
        console.log("error in cardListSmall component fetcher : ",error.message);
    }
}

const featured = [
    "usd",
    "coin-emami",
    "euro",
    "coin-baharazadi",
]

export const CardListSmall  = async() => {
    const items : any[] = [];

    for (let f of featured) {
        const body = await fetcher(process.env.NEXT_PUBLIC_API_URL+"/currency"+"/"+f);
        console.log("body : ",body);

        if (body.currency) {

            items.push({...body.currency,price:body.currency.priceIrr});
        }
    }
    
    return (
        <div className="bg-bg flex flex-col items-center justify-center rounded-lg p-6 card-shadow h-60  relative top-[-120px]">
            {/* switch main currency */}
            {/* <div className="flex absolute p-1 bg-secondarySoft rounded-full text-2xl top-[-30px] text-bg">
                <button className="py-2 px-4 bg-bgSoft rounded-full z-10 text-black" >
                    تومان
                </button>
                <button className="py-2 px-4 z-0 rounded-full bg-transparent">
                    دلار
                </button>
            </div> */}
            {/* coins container */}
            <div className="flex w-full h-full justify-center gap-2 mt-2">
                {items.map(c => (
                    <CardSmall 
                        isSmall
                        img={"/images/symbols/"+c.symbol+".png"} 
                        name={c.name.fa}
                        abbreviation={c.symbol.includes("-") ?  c.symbol.slice(5) : c.symbol}
                        price={c.price}
                        change={"5"}
                    />
                ))}
            </div>
        </div>
    )
};

export const CardListBig = ({items}:props) => {
    return (
        <div className="bg-bg grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 rounded-lg p-4 lg:p-7 card-shadow min-h-[800px] ">
            {items.map(c => (
                <CardBig
                    isSmall
                    img={"/images/symbols/"+c.symbol+".png"} 
                    name={c.name.fa}
                    abbreviation={c.symbol}
                    price={c.price}
                    change={c.percentChangeDay}
                />
                
            ))}
            
        </div>
    )
};

