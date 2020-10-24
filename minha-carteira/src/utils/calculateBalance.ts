interface IRepository {
    description: string;
    amount: string;
    type: string;
    frequency: string;
    date: string;
}

const calculateBalance = (monthSelected: number, yearSelected: number, data: Array<IRepository> ): number => {
    let total: number = 0;

    data.forEach(item => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        if (month === monthSelected && year === yearSelected) {
            try {
                total += Number(item.amount);
            } catch (error) {
                console.log(`${error} in function totalExpenses`);
            }
        }

    })

    return total;

}

export default calculateBalance;