import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

const fetcher = async(url:string) => {

    const res = await fetch(url);

    const data = await res.json();

    console.log("status : ",res.status);

    if (!res.ok) {
        const error = new Error(data.message);
        
        throw error;

    }

    return data;

}

export const useGetCoins = (count:number) => {

    const {data,isLoading,mutate,error} = useSWR(
        `${process.env.NEXT_PUBLIC_API_URL}/currency/?from=1&to=${count}`
    ,fetcher)   

    fetcher(`${process.env.NEXT_PUBLIC_API_URL}/currency/?from=1&to=${count}`);
    
    if (error) {
        console.log("error : ",error);
        toast.error("شکست در یافتن داده");
    }

    return {
        data,isLoading,mutate
    }
    
};