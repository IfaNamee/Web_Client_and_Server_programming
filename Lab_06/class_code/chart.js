let canvas = document.querySelector('#soda-chart') // Select the canvas element from html page
let context = canvas.getContext('2d')  // Get the 2D drawing 

chart = new Chart(context, { // Create a new Chart
    type: 'bar',  // set chart type
    data: {
        // Labels on the x-axis
        labels: ["Coke", "Pepsi", "Beer", "Either", "Neither"],  
        datasets: [{  // Datasets hold the data values 
            label: 'Number of votes',  // Label for the dataset or prompty.
            data: [18, 14, 20, 7, 10],   // this is the chart data
            backgroundColor: ['red', 'blue','lime', 'yellow', 'green']  // Background colors for each bar in the chart
        }]
    }, options: {  // options for chart behavior
        scales: {
            yAxes: [{  // make for the y-axis (vertical axis) 'y'
                ticks: { // Make the y-axis starts from 0
                    beginAtZero: true
                }
            }]
        }
    }
})