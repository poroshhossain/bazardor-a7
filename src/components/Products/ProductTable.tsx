import { IMarketType } from "@/type/type";
import { Table } from "@heroui/react";


interface ProductTableProps {
    markets: IMarketType[]
}
export function ProductTable({ markets }: ProductTableProps) {
    return (
        <Table className="bg-cLight border-2 border-shadoColor/50">
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="">
                    <Table.Header className={'bg-cLight '}>
                        <Table.Column isRowHeader>বাজার</Table.Column>
                        <Table.Column>বিভাগ</Table.Column>
                        <Table.Column>সর্বনিম্ন</Table.Column>
                        <Table.Column>সর্বাধিক</Table.Column>
                        <Table.Column>গড়</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            markets.map((item, i) => {
                                return (
                                    <Table.Row key={i}
                                    className={`even:bg-cPrimary/5`}
                                    >
                                        <Table.Cell className="bg-transparent">{item.market}</Table.Cell>
                                        <Table.Cell className="bg-transparent">{item.division}</Table.Cell>
                                        <Table.Cell className="bg-transparent">{item.min}</Table.Cell>
                                        <Table.Cell className="bg-transparent">{item.max}</Table.Cell>
                                        <Table.Cell className="bg-transparent">{Math.round((item.min + item.max)/2)}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
}