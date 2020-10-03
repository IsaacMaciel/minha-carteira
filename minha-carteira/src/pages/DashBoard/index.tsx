import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput';



import { Container } from './styles'

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

const Dashboard: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={options} onChange={()=>{}} />
            </ContentHeader>
        </Container>
    )
}

export default Dashboard;
