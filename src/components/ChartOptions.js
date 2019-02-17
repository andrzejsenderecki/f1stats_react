import React from 'react';
import '../App.scss';

const ChartOptions = (props) => {
    return(
        <form className='chartOptions'>
            <select onChange={props.sortBy}>
                <option value={props.optionA}>{props.optionAText}</option>
                <option value={props.optionB}>{props.optionBText}</option>
            </select>
            <select onChange={props.chartType}>
                <option value="ColumnChart">Wykres blokowy</option>
                <option value="LineChart">Wykres liniowy</option>
                <option value="ScatterChart">Wykres punktowy</option>
            </select>
        </form>
    )
}

export default ChartOptions;