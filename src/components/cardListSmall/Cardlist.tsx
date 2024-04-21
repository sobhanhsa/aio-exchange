import { CardBig, CardSmall } from "@/components/card/Card";

type props = {
    items:any[]
}

export const CardListSmall  = ({items}:props) => {
    return (
        <div className="bg-bg flex flex-col items-center justify-center rounded-lg p-6 card-shadow h-60  relative top-[-120px]">
            {/* switch main currency */}
            <div className="flex absolute p-1 bg-secondarySoft rounded-full text-2xl top-[-30px] text-bg">
                <button className="py-2 px-4 bg-bgSoft rounded-full z-10 text-black" >
                    تومان
                </button>
                <button className="py-2 px-4 z-0 rounded-full bg-transparent">
                    دلار
                </button>
            </div>
            {/* coins container */}
            <div className="flex w-full h-full justify-center gap-2 mt-2">
                {items.map(c => (
                    <CardSmall 
                        isSmall
                        img={c.img} 
                        name={c.name}
                        abbreviation={c.abbreviation}
                        price={c.price}
                        change={c.change}
                    />
                ))}
            </div>
        </div>
    )
};

export const CardListBig = ({items}:props) => {
    return (
        <div className="bg-bg grid grid-cols-2 gap-10 rounded-lg p-7 card-shadow h-[800px] ">
            {items.map(c => (
                <CardBig
                    isSmall
                    img={c.img} 
                    name={c.name}
                    abbreviation={c.abbreviation}
                    price={c.price}
                    change={c.change}
                />
                
            ))}
            
        </div>
    )
};

