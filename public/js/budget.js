axios
  .get("/getBudget")
  .then(function(response) {
    let data = JSON.parse(response.data);
    let labels = Object.keys(data);
    let datas = Object.values(data);
    console.log(labels[0]);
    console.log(datas[0]);
    console.log(data);
    let aa = [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 6, y: 5 }
    ];
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: labels[0],
            data: datas[0]
          },
          {
            label: labels[1],
            data: datas[1]
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              type: "linear"
            }
          ]
        }
      }
    });
    addData(myChart, labels, datas);
  })
  .catch(function(error) {
    console.log(error);
  });

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach(dataset => {
    dataset.data.push(data);
    console.log(data);
  });
  chart.update();
  console.log("added");
}