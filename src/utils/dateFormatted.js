import moment from 'moment-timezone'

const dateFormatted = (timestamp) => {
  const date = moment(timestamp).tz("Europe/Madrid");

  return date.format("DD/MM/YYYY HH:mm")
};

export default dateFormatted