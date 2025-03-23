import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({input}){
    const output= calculateInvestmentResults(input);
    const intialInvestment = output[0].valueEndOfYear - output[0].interest - output[0].annualInvestment;
    return <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest /Year</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>

            </tr>
        </thead>
        <tbody>
            {output.map(yearData => {
                
                const totalInvestment = yearData.valueEndOfYear- yearData.annualInvestment*yearData.year -intialInvestment;
                const totalAmount = yearData.valueEndOfYear - totalInvestment
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInvestment)}</td>
                    <td>{formatter.format(totalAmount)}</td>
                </tr>
            })}
        </tbody>
    </table>;
}