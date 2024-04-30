import { CiStar } from "react-icons/ci"

type propsType = {
    name:string
    price:string
    change:string
    cap:string    
    weekChange:string
    symbol:string
}

export const TableCard  = (props:propsType) => {
    return (
        <tr className="font-bold text-sm md:text-lg hover:bg-primary/15  ">
            <td className=" p-4 py-7 flex items-center">
                {/* <CiStar /> */}
                <CiStar size={20} />

            </td>
            {/* row name */}
            <td className=" p-4 py-7" >
                <p className=" m-auto inline">
                    {props.name}
                </p>
                <span className=" text-bgSoft m-auto">
                {" "}
                    |
                {" "}
                </span>
                {/* symbol */}
                <span className=" text-secondary m-auto ">
                    {props.symbol}
                </span>
            </td>
            <td className=" p-4 py-7 ">
                {props.price}
            </td>
            <td dir="ltr" className=" p-4 py-7 text-red-600 flex justify-end">
                {props.change}
            </td>
            <td className="invisible sm:visible p-4 py-7 ">
                {props.cap}
            </td>
            <td className=" invisible sm:visible p-4 py-7 text-left" >
                {props.weekChange}
            </td>
        </tr>
    )
};

