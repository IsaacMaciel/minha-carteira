import React, { useMemo, useState, useEffect } from 'react'
import {uuid} from 'uuidv4'

import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listMonths from '../../utils/months';


import { Container, Content, Filters } from './styles';


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
    dateFormatted: string;
    tagColor: string;
}


const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const [selectedFrequency,setSelectedFrequency] = useState(['recorrente','eventual']);

    const movimentType = match.params.type;

    // const listData = useMemo(() => {
    //     return movimentType === 'entry' ? gains : expenses;
    // }, [movimentType])

    // const title = useMemo(() => {
    //     return movimentType === 'entry' ? 'Entradas' : movimentType === 'exit' ? 'Saídas' : 'Error'
    // }, [movimentType]);

    // const lineColor = useMemo(() => {
    //     return movimentType === 'entry' ? '#F7931B' : '#E44C4E'
    // }, [movimentType])

    const pageData = useMemo(() => {
      return  movimentType === 'entry' ?
        {
            title:'Entradas',
            lineColor: '#F7931B',
            data: gains
        } :
        {
            title:'Saídas',
            lineColor: '#E44C4E',
            data:expenses
        }
        
    },[movimentType]) 

    const years = useMemo(()=>{
        let uniqueYears: number[] = [];
        const { data } = pageData

        data.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        })

        return uniqueYears.map(year => {
            return {
                value: year,
                label: String(year),
            }
        })
    },[data])

    const months = useMemo(()=>{
      return   listMonths.map((month,index) => {
            return {
                value: index + 1,
                label: month
            }
        })
    },[])

    const handleSelectedFrequency = (frequency: string): void => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency);

        if(alreadySelected >= 0) {
            const filtered = selectedFrequency.filter(item => item !== frequency);
            setSelectedFrequency(filtered);
            return;
        }
        setSelectedFrequency((prev) => [...prev,frequency])
    }
    
    useEffect(() => {
        const {data} = pageData;
        const filteredDate = data.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);

        })
        const formattedData = filteredDate.map(item => {

            return {
                id: uuid(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })

        setData(formattedData);
    }, [pageData,monthSelected,yearSelected,selectedFrequency])

    return (
        <Container>
            <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>
            <Filters>
                <button onClick={() => handleSelectedFrequency('recorrente')} className={`tag-filter tag-filter-recurrent ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}>
                    Recorrentes
                </button>
                <button onClick={() => handleSelectedFrequency('eventual')} className={`tag-filter tag-filter-eventual ${selectedFrequency.includes('eventual') && 'tag-actived'}`}>
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
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))

                }
            </Content>

        </Container>


    )
}

export default List;