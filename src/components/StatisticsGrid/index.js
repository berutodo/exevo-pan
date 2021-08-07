import React, { useState, useEffect, useContext } from 'react';
import StatisticsGrid, { ItemsWrapper, GridHeader } from './StatisticsGrid.styled';
import { Chip } from 'components/Atoms';
import Chart from '../../modules/Statistics/components/Chart';
import PercentageCard from 'modules/Statistics/components/PercentageCard';
import PieChart from 'modules/Statistics/components/PieChart';
import List from '../List';

import { urlParametersState } from 'utils';

import { endpoints, paths } from 'Constants'

import { formatNumberWithCommas } from 'utils/formatNumberWithCommas';

export default () => {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${endpoints.BASE_HISTORY_DATA}${paths.OVERALL_STATISTICS}`);
                const data = await response.json();

                data.totalTibiaCoins.lastMonth = fillArrayUntil(data.totalTibiaCoins.lastMonth, 28);
                data.totalRevenue.lastMonth = fillArrayUntil(data.totalRevenue.lastMonth, 28);

                setData(data);
                setLoaded(true);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    if (!loaded) return null;
    return (
        <StatisticsGrid className="custom-scrollbar">
            {loaded ?
                <ItemsWrapper className="inner-container">
                    <Chart
                        totalLabel="Total volume"
                        yesterdayLabel="Yesterday's volume"
                        tooltipLabel="Tibia Coins volume"
                        chartData={data.totalTibiaCoins}
                    />
                    <Chart
                        totalLabel="Cipsoft's total revenue"
                        yesterdayLabel="Yesterday's revenue"
                        tooltipLabel="Cipsoft revenue"
                        chartData={data.totalRevenue}
                    />
                    <PercentageCard title="Auction success rate" percentage={data.successRate} />
                    <PieChart
                        title="Vocation distribution"
                        pieDataSet={data.vocationPercentage}
                    />
                </ItemsWrapper>
                : null
            }

            {/* {loaded && option === 'highscores' ?
                <ItemsWrapper className="inner-container">
                    <List
                        label="Top 10 Bid"
                        data={data.top10Bid}
                        keyName="currentBid"
                        rowLabel="Bid"
                        format={formatNumberWithCommas}
                    />
                    <List
                        label="Top 10 Level"
                        data={data.top10Level}
                        keyName="level"
                        rowLabel="Level"
                        format={formatNumberWithCommas}
                    />
                    <List
                        label="Top 10 Magic Level"
                        data={data.top10Magic}
                        keyName="magic"
                        rowLabel="Magic"
                    />
                    <List
                        label="Top 10 Distance Fighting"
                        data={data.top10Distance}
                        keyName="distance"
                        rowLabel="Distance"
                    />
                    <List
                        label="Top 10 Sword Fighting"
                        data={data.top10Sword}
                        keyName="sword"
                        rowLabel="Sword"
                    />
                    <List
                        label="Top 10 Axe Fighting"
                        data={data.top10Axe}
                        keyName="axe"
                        rowLabel="Axe"
                    />
                    <List
                        label="Top 10 Club Fighting"
                        data={data.top10Club}
                        keyName="club"
                        rowLabel="Club"
                    />
                    <List
                        label="Top 10 Fist Fighting"
                        data={data.top10Fist}
                        keyName="fist"
                        rowLabel="Fist"
                    />
                    <List
                        label="Top 10 Shielding"
                        data={data.top10Shielding}
                        keyName="shielding"
                        rowLabel="Shielding"
                    />
                    <List
                        label="Top 10 Fishing"
                        data={data.top10Fishing}
                        keyName="fishing"
                        rowLabel="Fishing"
                    />
                </ItemsWrapper>
                : null
            } */}
        </StatisticsGrid>
    )
}

const fillArrayUntil = (array, size) => {
    const newArray = [...array];
    while (newArray.length < size) {
        newArray.unshift(newArray[0]);
    }

    return newArray;
}