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


    return <span className="text-[12px]">{date}</span>;
};

export default CurrentDate;