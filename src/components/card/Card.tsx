import Image from "next/image";

type cardProps = {
    isSmall:boolean
    img:string
    name:string
    abbreviation:string
    price:string
    change:string
    // chartInfo:string[]
};

export const CardSmall = (props:cardProps) => {
    console.log("change : ",Number(props.change));
    return (
        <div className="flex bg-bgSoft rounded-lg p-6 w-1/4">
            {/* info container */}
            <div className=" flex flex-col sm:gap-5 flex-1">
                {/* logo container */}
                <div className="relative w-10 h-10" >
                    <Image className="object-cover" src={props.img.toLowerCase()} alt="" fill/>
                </div>
                {/* name */}
                <p className="text-sm font-bold text-nowrap">
                    {props.name}
                </p>
                {/* abbreviation */}
                <p className=" text-secondary text-lg font-bold">
                    {props.abbreviation.toUpperCase()}
                </p>
            </div>

            {/* price container  */}
            <div className="flex flex-col flex-[3] items-end gap-4">
                {/* chart */}
                <div className="w-28 h-10 bg-green-400  ">

                </div>
                {/* change */}
                <p className="text-base text-white [direction:ltr]">
                    <span className={`${Number(props.change) > 0 ?  "bg-green-700" : "bg-red-700"} p-2 py-1 rounded`}>
                        {props.change.slice(0,5)}%
                    </span>
                </p>
                {/* price */}
                <p className=" text-2xl bold font-bold ">
                    {props.price}
                </p>
            </div>
        </div>
    )
};

export const CardBig = (props:cardProps) => {
    return (
        <div className="flex bg-bgSoft rounded-lg p-4 sm:p-8   ">
            {/* info container */}
            <div className=" flex flex-col sm:justify-between flex-1">
                {/* logo container */}
                <div className="relative w-20 h-20">
                    <Image className=" object-cover" src={props.img} alt="" fill/>
                </div>
                {/* name */}
                <p className="text-xl   font-bold">
                    {props.name}
                </p>
                {/* abbreviation */}
                <p className=" text-secondary text-lg font-bold">
                    {props.abbreviation.toUpperCase()}
                </p>
            </div>

            {/* price container  */}
            <div className="flex flex-col justify-between flex-[3] items-end gap-4">
                {/* chart */}
                <div className="w-56 h-20 bg-green-400  ">

                </div>
                {/* change */}
                <p className="text-base text-white [direction:ltr]">
                    <span className={
                        `${Number(props.change) > 0 ?  "bg-green-700" : "bg-red-700"}
                        p-8 py-1 rounded-3xl `}
                    >
                        {props.change}
                    </span>
                </p>
                {/* price */}
                <p className=" text-2xl bold font-bold ">
                    {props.price}
                </p>
            </div>
        </div>
    )
};


