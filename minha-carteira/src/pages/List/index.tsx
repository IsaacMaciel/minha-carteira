import React, { useMemo } from 'react'
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';

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


const List: React.FC<IRouteParams> = ({ match }) => {
    const { type } = match.params;

    const title = useMemo(() => {
        return type === 'entry' ? 'Entradas' : type === 'exit' ? 'Saídas' : 'Error'
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'entry' ? '#F7931B' : '#E44C4E'
    }, [type])

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
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
                <HistoryFinanceCard
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
            </Content>

        </Container>


    )
}

export default List;