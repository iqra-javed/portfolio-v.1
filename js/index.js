$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


function chartFactory(argsArr) {

  for (let i = 0; i < argsArr.length; i++) {
  
      var data = {
  
        datasets: argsArr[i][0]
      };
      
        Chart.pluginService.register({
          beforeDraw: function(chart) {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
        
            ctx.restore();
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";

            var text = argsArr[i][1][0]
            console.log(text)
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
        if(chart.canvas.id == argsArr[i][3].chartID) { // this prevents one inner text from being printed in all charts
          ctx.fillText(text, textX, textY);
        }
            ctx.save();
          }
        
        });
      
      var chart = new Chart(document.getElementById(argsArr[i][3].chartID), {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          cutoutPercentage: 70,
          title: {
            display: true,
            position: 'top',
            text: argsArr[i][2]
        },
          tooltips: {
            enabled: false
          },
          legend: {
            display: false
          }
        }
      });
  }
  }

chartFactory([[
  [
    {
      data: [95, 5],
      backgroundColor: [
        "#34364F"
      ]
    }], ["95%"], ["HTML5"], {chartID: "myChart1"}
], [
  [
    {
      data: [95, 5],
      backgroundColor: [
        "#34364F"
      ]
    }], ["95%"], ["CSS3"], {chartID: "myChart2"}
], [
  [
    {
      data: [80, 20],
      backgroundColor: [
        "#34364F"
      ]
    }], ["80%"], ["Javascript"], {chartID: "myChart3"}
], [
  [
    {
      data: [75, 25],
      backgroundColor: [
        "#34364F"
      ]
    }], ["75%"], ["React"], {chartID: "myChart4"}
], [
  [
    {
      data: [65, 35],
      backgroundColor: [
        "#34364F"
      ]
    }], ["65%"], ["Node.js"], {chartID: "myChart5"}
], [
  [
    {
      data: [65, 35],
      backgroundColor: [
        "#34364F"
      ]
    }], ["65%"], ["MongoDB"], {chartID: "myChart6"}
]]);


//***************************************** 
// let myChart = document.getElementById('myChart').getContext('2d');

// let htmlChart = new Chart(myChart, {
//   type: 'doughnut',
//   data: {
//     labels: ['HTML'],
//     datasets: [{
//       label: 'Population',
//       data: [70]
//     }]
//   },
//   options: {
//     elements: {
//       center: {
//       text: 'Desktop',
//       color: '#36A2EB', //Default black
//       fontStyle: 'Helvetica', //Default Arial
//       sidePadding: 15 //Default 20 (as a percentage)
//     }
//   }
//   }
// });

// var data = {

//   datasets: [
//     {
//       data: [4, 3],
//       backgroundColor: [
//         "#00000"
//       ]
//     }]
// };

// Chart.pluginService.register({
//   beforeDraw: function(chart) {
//     var width = chart.chart.width,
//         height = chart.chart.height,
//         ctx = chart.chart.ctx;

//     ctx.restore();
//     var fontSize = (height / 114).toFixed(2);
//     ctx.font = fontSize + "em sans-serif";
//     ctx.textBaseline = "middle";

//     var text = "75%",
//         textX = Math.round((width - ctx.measureText(text).width) / 2),
//         textY = height / 2;

//     ctx.fillText(text, textX, textY);
//     ctx.save();
//   }
// });

// var chart = new Chart(document.getElementById('myChart'), {
//   type: 'doughnut',
//   data: data,
//   options: {
//   	responsive: true,
//     legend: {
//       display: false
//     }
//   }
// });
//*************************************** 