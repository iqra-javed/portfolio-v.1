$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


function chartFactory(argsArr) {

  for (let i = 0; i < argsArr.length; i++) {
  
      var data = {
  
        datasets: [
          {
            data: [argsArr[i][0][0], argsArr[i][0][1]],
            backgroundColor: [
              "#5E4980"
            ]
          }]
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

            var text = argsArr[i][1]
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
        if(chart.canvas.id == argsArr[i][3]) { // this prevents one inner text from being printed in all other charts too
          ctx.fillText(text, textX, textY);
        }
            ctx.save();
          }
        
        });
      
      var chart = new Chart(document.getElementById(argsArr[i][3]), {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          cutoutPercentage: 75,
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

chartFactory([
// shade%     %     title    chart ID
  [[95, 5], "95%", "HTML5", "htmlChart"], 
  [[95, 5], "95%", "CSS3", "cssChart"], 
  [[80, 20], "80%", "Javascript", "jsChart"], 
  [[75, 25], "75%", "React", "reactChart"], 
  [[65, 35], "65%", "Node.js", "nodeChart"], 
  [[65, 35], "65%", "MongoDB", "mongoChart"]
]);


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