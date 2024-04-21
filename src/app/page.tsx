import { CardListBig , CardListSmall } from "@/components/cardListSmall/Cardlist";
import { TableCard } from "@/components/tableCard/TableCard";
import coins from "@/constants"

const HomePage  = () => {
    return (
        <div className="flex items-center flex-col [direction:rtl] w-full">
            {/* top add */}
            <div className="w-full h-[500px] bg-secondary">

            </div>
            {/* main content */}
            <div className=" flex flex-col px-28 w-full relative">
                {/* top currency list */}
                <CardListSmall items={coins} />
                {/* quad list */}
                <CardListBig   items={coins}/>
                {/* latest */}
                <div className="flex flex-col mt-24">
                    {/* title (head) */}
                    <div className="flex justify-between items-center">   
                        {/* title */}
                        <p className="text-5xl font-bold">
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
                                <td className=" p-4 text-secondarySoft text-xl w-[5%]  ">

                                </td>
                                {/* name col */}
                                <td className=" p-4 text-secondarySoft text-xl w-1/3 text-right">
                                    نام
                                </td>
                                {/* last price col */}
                                <td className=" p-4 text-secondarySoft text-xl">
                                    اخرین قیمت
                                </td>
                                {/* change day col */}
                                <td className=" p-4 text-secondarySoft text-xl">
                                    24%
                                </td>
                                {/* market cap col*/}
                                <td className=" p-4 text-secondarySoft text-xl">
                                    ارزش بازار
                                </td>
                                {/* change week col */}
                                <td className=" p-4 text-secondarySoft text-xl text-left">
                                    هفته اخیر
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map(c => (
                                <TableCard 
                                    name={c.name}
                                    price={c.price}
                                    change={c.change}
                                    cap={c.cap}
                                    weekChange={c.weekChagne} 
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