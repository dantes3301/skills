var doughnutCanvas = document.getElementById("doughnutChart");

Chart.defaults.global.defaultFontSize = 18;

var doughnutData = {
  datasets: [
    {
      data: [70, 30],
      backgroundColor: [
        "#008CFF",
        "rgba(0, 140, 255, 0.12)"
      ]
    }]
};

var pieChart = new Chart(doughnutCanvas, {
  type: 'doughnut',
  data: doughnutData,
  options: {
    tooltips: {
      custom: function (tooltipModel) {
        tooltipModel.opacity = 0;
      }
    }
  }
});