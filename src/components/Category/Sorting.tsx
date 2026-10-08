"use client"

import { Dispatch, SetStateAction } from "react";
import { ListBox, Select } from "@heroui/react";
interface SortingProp{
    sort:string | null
      setSort: Dispatch<SetStateAction<string | null>>;

}
const Sorting = ({sort, setSort}:SortingProp ) => {
    return (
        <Select
            value={sort}
            onChange={(value)=> setSort(value as string)}
            aria-label="সাজান"
            className="flex border border-shadoColor rounded-[10px] ">
            <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
                <ListBox>
                    <ListBox.Item id="default" textValue="default">
                        <span className="p-2">ডিফল্ট</span>
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="price-asc" textValue="price-asc">
                        <span className="p-2"> দাম: কম থেকে বেশি</span>
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="price-dasc" textValue="price-dasc">
                        <span className="p-2">দাম: বেশি থেকে কম</span>
                        <ListBox.ItemIndicator />
                    </ListBox.Item>

                </ListBox>
            </Select.Popover>
        </Select>
    )
}
export default Sorting