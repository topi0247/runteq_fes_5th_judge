import AlumniIcon from "../alumniIcon";
import CalendarIcon from "../calendarIcon";
import CurrentIcon from "../currentIcon";

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
      return <>RUNTEQ</>
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