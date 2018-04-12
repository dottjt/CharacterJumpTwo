import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);


let generateChartColours = (index) => {
  switch(index) {
    case 1:
      return '#FF6384';
      break;

    case 2:
      return '#36A2EB';
      break;

    case 3: 
      return '#FFCE56';
      break;

    case 4: 
      return '#cc65fe';
      break;

    case 5: 
      return "#e8c3b9";
      break;

    default: 
      '#fff';
  }
}

let generateChartLabels = (formatBoolean) => {

  let today = moment().format('MM-DD-YYYY');
  let sevenDaysBefore = moment().subtract(7, 'days').format('MM-DD-YYYY');

  let range = moment.range(sevenDaysBefore, today);

  let days = Array.from(range.by('days'));

  return (
    formatBoolean
  ?
    days.map(m => m.format('MMMM Do'))
    // days.map(m => m.format('MMMM Do YYYY'))
  :
    days.map(m => m)
  )
  
}

let generateChartCharacters = characters => (
  characters.map(character => (
    { label: character.display_name
    }
  ))
)

let generateChartCharactersData = (timeline, character_name) => (
      timeline.map(day => 
        day.characters.map(character => 
              character.display_name === character_name ? 1 : 0
          ))
          .filter(day => 
            day.reduce((acc, current) => acc + current) > 0
          )[0]
  )

let generateChartDatasets = (timeline, characters, type) => {
  
  let dataset = generateChartCharacters(characters);

  let improved_dataset = dataset.map((character, i) => {
    console.log(i)

    return {...character, 
               data: generateChartCharactersData(timeline, character.label),
               backgroundColor: generateChartColours(i),
               borderColor: 'rgba(255,99,132,1)',
              //  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              //  hoverBorderColor: 'rgba(255,99,132,1)',       
               borderWidth: 1
              }

  })

  console.log(improved_dataset);

  return improved_dataset;
}


// How I went and did it:
// Get list of all characters



export let generateChartData = (timeline, characters, type) => {

  const labels = generateChartLabels(true);
  const datasets = generateChartDatasets(timeline, characters, type);
  
  return {
      datasets: datasets,
      labels: labels
    }
}


export let generateChartOptions = () => (
  {
    scales: {
         xAxes: [{
             stacked: true
         }],
         yAxes: [{
             stacked: true
         }]
     },
     responsive: true,
    //  maintainAspectRatio: true
 }
)