// Initialize the Chart.js library
const ctx = document.getElementById('myChart');
      
// Create a new chart
var myChart = new Chart(ctx, {
    type: 'line', // Specify the type of chart (e.g. bar, line, pie, etc.)
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // Specify the labels for the x-axis
        datasets: [{
            label: 'Steps Taken', // Specify the label for the data
            data: [1200, 1900, 300, 500, 200, 300, 900], // Specify the data for the chart
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Specify the background color for the data
            borderColor: 'rgba(54, 162, 235, 1)', // Specify the border color for the data
            borderWidth: 1 // Specify the border width for the data
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true // Specify the minimum value for the y-axis
                }
            }]
        }
    }
});


