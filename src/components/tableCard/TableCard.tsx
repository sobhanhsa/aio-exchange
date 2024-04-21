type propsType = {
    name:string
    price:string
    change:string
    cap:string    
    weekChange:string
}

export const TableCard  = (props:propsType) => {
    return (
        <tr className="font-bold text-lg">
            <td className=" p-4 py-7">
                {/* <CiStar /> */}
            </td>
            {/* row name */}
            <td className=" p-4 py-7 " >
                {props.name}
            </td>
            <td className=" p-4 py-7 ">
                {props.price}
            </td>
            <td className=" p-4 py-7 text-red-600">
                {props.change}
            </td>
            <td className=" p-4 py-7 ">
                {props.cap}
            </td>
            <td className=" p-4 py-7 text-left" >
                {props.weekChange}
            </td>
        </tr>
    )
};

