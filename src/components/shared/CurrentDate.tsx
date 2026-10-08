"use client";

import { useEffect, useState } from "react";



const CurrentDate = () => {

    const [date, setDate] = useState("Lodding...");

    useEffect(() => {
        setDate(
            new Date().toLocaleDateString("bn-BD", {
                dateStyle: "full",
            })
        );
    }, []);


    return <p className="text-[12px] text-cForeground">{date}</p>;
};

export default CurrentDate;