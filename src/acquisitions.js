import Chart from 'chart.js/auto'
;(async () => {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
    { year: 2017, count: 25 },
    { year: 2018, count: 13 },
    { year: 2019, count: 2 },
    { year: 2020, count: 100 },
  ]

  new Chart(document.getElementById('acquisitions'), {
    type: 'line',
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: 'Aquisitions by year',
          data: data.map((row) => row.count),
        },
      ],
    },
  })
})()
