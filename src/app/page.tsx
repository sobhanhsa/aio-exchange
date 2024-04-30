import { CardListBig , CardListSmall } from "@/components/cardListSmall/Cardlist";
import { TableCard } from "@/components/tableCard/TableCard";
// import coins from "@/constants"

const fetcher = async(url:string) => {
    try{

        const res = await fetch(url);
    
        const body = await res.json();
        if (!res.ok) {
            throw new Error(body.message);
        }
        return body;
    } catch(error:any) {
        console.log("error in home page fetcher : ",error.message);
    }
}

const HomePage  = async() => {

    const data = await 
        fetcher(process.env.NEXT_PUBLIC_API_URL+"/currency/?from=1&to=7");
    
    if (!data) throw "server error"

    const coins : any[] = data?.currencies;
    
    console.log("coins : ",coins);

    return (
        <div className="flex items-center flex-col [direction:rtl] w-full">
            {/* top add */}
            <div className="w-full h-[500px] bg-secondary relative">
                <p className=" absolute top-1/2 left-1/2 text-9xl">
                    ADD
                </p>
                <p className=" absolute top-1/2 left-1/3 text-9xl text-white">
                    ADD
                </p>
                
            </div>
            {/* main content */}
            <div className=" flex flex-col p-1 md:px-12 lg:px-28 w-full relative">
                {/* top currency list */}
                <CardListSmall  />
                {/* quad list */}
                <CardListBig   items={coins.slice(0,4)}/>
                {/* latest */}
                <div className="flex text-base flex-col mt-24">
                    {/* title (head) */}
                    <div className="flex justify-between items-center">   
                        {/* title */}
                        <p className="text-2xl sm:text-3xl md:text-5xl font-bold">
                            اواخر بازار
                        </p>
                        {/* show more */}
                        <p
                            className=" underline decoration-2 cursor-pointer font-bold"
                        >
                            تماشا همه
                        </p>
                    </div>
                    {/* table */}
                    <table>
                        <thead className="border-b-2">
                            <tr>
                                {/* star col */}
                                <td className=" p-4 text-secondarySoft md:text-xl w-[5%]  ">

                                </td>
                                {/* name col */}
                                <td className=" p-4 text-secondarySoft md:text-xl w-1/3 text-right">
                                    نام
                                </td>
                                {/* last price col */}
                                <td className=" p-4 text-secondarySoft md:text-xl">
                                    اخرین قیمت
                                </td>
                                {/* change day col */}
                                <td className=" p-4 text-secondarySoft md:text-xl">
                                    24%
                                </td>
                                {/* market cap col*/}
                                <td className=" invisible sm:visible p-4 text-secondarySoft md:text-xl">
                                    ارزش بازار
                                </td>
                                {/* change week col */}
                                <td className="invisible sm:vivisble p-4 text-secondarySoft md:text-xl text-left">
                                    هفته اخیر
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}
                            {coins?.map((c:any) => (
                                <TableCard 
                                    symbol={c.symbol}
                                    name={c.name.fa}
                                    price={c.price}
                                    change={c.percentChangeDay}
                                    cap={c.cap}
                                    weekChange={c.changeWeek} 
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default HomePage;