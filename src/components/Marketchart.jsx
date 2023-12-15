import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MarketChart = ({ data }) => {

    // Format number to 2 decimal places
    const formatNumber = num => num.toFixed(2);

    // Format price data
    const priceData = data.map(datum => ({
        x: `Week ${datum.week}, ${datum.year}`,
        y: formatNumber(datum.grpavgprice)
    }));

    // Format weight data  
    const weightData = data.map(datum => ({
        x: `Week ${datum.week}, ${datum.year}`,
        y: formatNumber(datum.groupavgweight)
    }));

    const series = [
        {
            name: 'Group Average Price',
            data: priceData
        },
        {
            name: 'Group Average Weight',
            data: weightData
        }
    ];

    const options = {
        chart: {
            type: 'line',
            height: 350,
            zoom: {
                enabled: false
            },
            toolbar: {
                show: true,
                tools: {
                    download: false // Set the download option to false to remove the download button
                }
            },
            tooltip: {
                followCursor: true // Tooltip will follow the cursor
            },
        },

        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'category',
            labels: {
                rotate: -45
            }
        },
        yaxis: [
            {
                seriesName: 'Group Average Price',
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: 'rgb(75, 192, 192)'
                },
                labels: {
                    style: {
                        colors: 'rgb(75, 192, 192)',
                    },
                },
                title: {
                    text: "Average Price ($)",
                    style: {
                        color: 'rgb(75, 192, 192)',
                    }
                },
            },
            {
                seriesName: 'Group Average Weight',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: 'rgb(255, 99, 132)'
                },
                labels: {
                    style: {
                        colors: 'rgb(255, 99, 132)',
                    },
                },
                title: {
                    text: "Average Weight (lbs)",
                    style: {
                        color: 'rgb(255, 99, 132)',
                    }
                },
            }
        ],
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        }
    };

    return (
        <>
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={350}
            />


        </>
    );
}

export default MarketChart;