import React, { useState, useMemo } from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';


import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import listMonths from '../../utils/months';

import HappyImg from '../../assets/happy.svg'
import SadImg from '../../assets/sad.svg';
import GrinningImg from '../../assets/grinning.svg'

import calculateBalance from '../../utils/calculateBalance'



import { Container, Content } from './styles'

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

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        })

        return uniqueYears.map(year => {
            return {
                value: year,
                label: String(year),
            }
        })
    }, [])

    const months = useMemo(() => {
        return listMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        })
    }, [])

    const totalExpenses = useMemo(() => {
        return calculateBalance(monthSelected, yearSelected, expenses);
    }, [monthSelected, yearSelected])

    const totalGains = useMemo(() => {
        return calculateBalance(monthSelected, yearSelected, gains);
    }, [monthSelected, yearSelected])

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalExpenses, totalGains])

    const messageWallet = useMemo(() => {
        if (totalBalance > 0) {
            return {
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo",
                icon: HappyImg
            }
        } else if (totalBalance === 0) {
            return {
                title: "Ufa,passou perto!",
                description: "Você gastou exatamente o que recebeu",
                footerText: "Tente poupar mais um pouco no próximo mês",
                icon: GrinningImg
            }
        } else {
            return {
                title: "Eitaa!!",
                description: "Você fechou o mês negativo",
                footerText: "Procure economizar mais no mês que vem e cortar as coisas desnecessárias",
                icon: SadImg
            }
        }


    }, [totalBalance])


    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);

        } catch (error) {
            console.log(`${error} in function handleMonthSelected`);
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch (error) {
            console.log(`${error} in function handleYearSelected`);
        }
    }


    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>
            <Content>
                <WalletBox title="saldo" amount={totalBalance} footerlabel="atualizado com base nas entradas e saídas" icon="dolar" color="#4E41F0"></WalletBox>
                <WalletBox title="entradas" amount={totalGains} footerlabel="atualizado com base nas entradas e saídas" icon="arrowUp" color="#F7931B"></WalletBox>
                <WalletBox title="saídas" amount={totalExpenses} footerlabel="atualizado com base nas entradas e saídas" icon="arrowDown" color="#E44C4E"></WalletBox>

                <MessageBox title={messageWallet.title} description={messageWallet.description} footerText={messageWallet.footerText} icon={messageWallet.icon} />
            </Content>
        </Container>
    )
}

export default Dashboard;
