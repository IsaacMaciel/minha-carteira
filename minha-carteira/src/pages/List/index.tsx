import React, { useMemo, useState, useEffect } from 'react'
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

import { Container, Content, Filters } from './styles';

const months = [{
    value: 1,
    label: 'Janeiro'
},
{
    value: 2,
    label: 'Fevereiro'
},
{
    value: 3,
    label: 'Março'
},
{
    value: 4,
    label: 'Abril'
},
{
    value: 5,
    label: 'Maio'
},
{
    value: 6,
    label: 'Junho'
},
{
    value: 7,
    label: 'Julho'
},
{
    value: 8,
    label: 'Agosto'
},
{
    value: 9,
    label: 'Setembro'
},
{
    value: 10,
    label: 'Outubro'
},
{
    value: 11,
    label: 'Novembro'
},
{
    value: 12,
    label: 'Dezembro'
},]
const years = [{
    value: 2018,
    label: 2018
}, {
    value: 2019,
    label: 2019
}, {
    value: 2020,
    label: 2020
},]

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}


const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

    const { type } = match.params;

    const listData = useMemo(() => {
        return type === 'entry' ? gains : expenses;
    }, [type])

    const title = useMemo(() => {
        return type === 'entry' ? 'Entradas' : type === 'exit' ? 'Saídas' : 'Error'
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'entry' ? '#F7931B' : '#E44C4E'
    }, [type])

    useEffect(() => {
        const filteredDate = listData.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;

        })
        const formattedData = filteredDate.map(item => {

            return {
                id: String(new Date().getTime()) + item.amount,
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })

        setData(formattedData);
    }, [listData,monthSelected,yearSelected])



    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>
            <Filters>
                <button className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>
                <button className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>
            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormatted}
                            amount={item.amountFormatted}
                        />
                    ))

                }
            </Content>

        </Container>


    )
}

export default List;