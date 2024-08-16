import AlumniIcon from "../alumniIcon";
import CalendarIcon from "../calendarIcon";
import CurrentIcon from "../currentIcon";
import RuntequnIcon from "../runtequnIcon";

export default function TimelineIcon({ iconType }) {
  switch (iconType) {
    case "before":
      return (
        <CalendarIcon />
      )
    case "alumni":
      return (
        <AlumniIcon />
      )
    case "runteq":
      return (
        <RuntequnIcon />
      )
    case "current":
      return (
        <CurrentIcon />
      )
    default:
      return (
        <CalendarIcon />
      )
  }
}