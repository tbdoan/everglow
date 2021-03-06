// Imports
import { push as Menu } from "react-burger-menu";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function History({ darkMode }) {
  var styles = {
    bmBurgerButton: {
      position: "absolute",
      width: "5vw",
      height: "5vh",
      left: "5%",
      top: "3vh",
    },
    bmBurgerBars: {
      background: "white",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: darkMode ? "#373A47" : "#757B95",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "white",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  const [battery, setBattery] = useState([]);
  const [times, setTimes] = useState([]);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // send http request
    fetch("https://plamp-123.herokuapp.com/plamp")
      // use it to populate battery state
      .then((response) => response.json())
      .then((data) => {
        let tmpT = Object.keys(data.batteryHistory);
        let tmpB = Object.values(data.batteryHistory);
        setTimes(tmpT);
        setBattery(tmpB);
      });
  }, []);

  useEffect(() => {
    console.log(times);
    setChartData({
      labels: times.map((t) => {
        let d = new Date(parseInt(t));
        return d.toLocaleString("en-US");
      }),
      datasets: [
        {
          label: "Battery Level",
          fill: true,
          lineTension: 0.1,
          backgroundColor: darkMode ? "#6797A7" : "#436875",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: battery,
        },
      ],
    });
    setChartOptions({
      scales: {
        xAxes: [
          {
            gridLines: { color: "rgba(255,255,255,0.4)" },
            ticks: { fontColor: "rgba(255,255,255,1)" },
          },
        ],
        yAxes: [
          {
            gridLines: { color: "rgba(255,255,255,0.4)" },
            ticks: { fontColor: "rgba(255,255,255,1)" },
          },
        ],
      },
      legend: {
        labels: {
          // This more specific font property overrides the global property
          fontColor: "white",
        },
      },
    });
  }, [battery, times, darkMode]);

  // new Date(129031293102)

  return (
    <Menu
      customBurgerIcon={<FontAwesomeIcon icon={faClock} color="white" />}
      width={"90%"}
      styles={styles}
      isOpen={false}
    >
      <p style={{ fontSize: 25 }}>Battery History</p>
      <Line data={chartData} options={chartOptions} />
      {/* Render Battery components (maybe make a battery table component in Components folder*/}
    </Menu>
  );
}

export default History;
