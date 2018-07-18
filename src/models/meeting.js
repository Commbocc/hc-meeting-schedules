import moment from 'moment'

const DateTimeParseFormat = 'MM/DD/YYYY HH:mm:ss'

export default class Meeting {
  constructor (x) {
    this.name = x.meetingname
    this.location = x.location
    this.created = moment(x.timestamp, DateTimeParseFormat)
    this.startTime = moment(x.starttime, DateTimeParseFormat)
    this.endTime = moment(x.endtime, DateTimeParseFormat)

    // endtime not required?
    // if (moment(x.endtime, DateTimeParseFormat).isValid) {
    //   this.endTime = moment(x.endtime, DateTimeParseFormat)
    // }
  }

  timeRange () {
    if (this.startTime.isSame(this.endTime, 'day')) {
      if (this.isToday()) {
        return this.getRange('LT', 'LT')
      } else {
        return this.getRange('LLL', 'LT')
      }
    } else {
      return this.getRange('LLL', 'LLL')
    }
  }

  getRange (sFormat, eFormat) {
    if (this.startTime.isSame(this.endTime)) {
      return this.startTime.format(sFormat)
    } else {
      return `${this.startTime.format(sFormat)} - ${this.endTime.format(eFormat)}`
    }
  }

  isToday () {
    return this.startTime.isSame(moment(), 'day')
  }

  isUpcoming () {
    return this.endTime.isAfter(moment())
  }
}
