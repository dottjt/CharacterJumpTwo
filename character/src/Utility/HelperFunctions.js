import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export let splitDate = (date) => (
  date.split("T")[0]
)
