import React from 'react'
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';

import { Container, Content } from './styles';

const options = [{
    value: 'Isaac Maciel',
    label: 'Isaac Maciel'
},
{
    value: 'Gabi Amaral',
    label: 'Gabi Amaral'
},
{
    value: 'Maria Bethania',
    label: 'Maria Bethania'
},]

const List: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Entradas" lineColor="#fff">
                <SelectInput options={options} />
            </ContentHeader>
            <Content>
                <HistoryFinanceCard
                    cardColor={'#313862'}
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    cardColor={'#313862'}
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    cardColor={'#313862'}
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    cardColor={'#313862'}
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    cardColor={'#313862'}
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    cardColor={'#313862'}
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    cardColor={'#313862'}
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    cardColor={'#313862'}
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    cardColor={'#313862'}
                    tagColor={'#e44c4e'}
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    cardColor={'#313862'}
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