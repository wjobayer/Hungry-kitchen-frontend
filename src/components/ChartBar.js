import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardHeader from "@material-tailwind/react/CardHeader";
import { Chart } from "chart.js";
import { useEffect } from "react";

export default function ChartBar() {
  useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30"
        ],
        datasets: [
          {
            label: "Total Sales",
            backgroundColor: "#03a9f4",
            borderColor: "#03a9f4",
            data: [30, 78, 56, 34, 100, 45, 13,30, 78, 56, 34, 100, 45, 13,30, 78, 56, 34, 100, 45, 13,30, 78, 56, 34, 100, 45, 13,20,12],
            fill: false,
            barThickness: 8,
          },
          {
            label: "Total Income",
            fill: false,
            backgroundColor: "#f44336",
            borderColor: "#f44336",
            data: [30, 78, 56, 34, 100, 45, 13,30, 78, 56, 34, 100, 45, 13,30, 78, 56, 34, 100, 45, 13,30, 78, 56, 34, 100, 45, 13,20,12],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(17,17,17,.7)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
    return (
        <Card>
            <CardHeader className="bg-gradient-to-b from-pink-400 to-pink-600" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview Daily
                </h6>
                <h2 className="text-white text-2xl">Sales value</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    <canvas id="bar-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
}
