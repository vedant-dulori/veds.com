import type { MomentTarget } from "./types"

export const momentHref = (t: MomentTarget): string => {
  switch (t.kind) {
    case "trip":
      return `/travel/${t.tripId}${t.anchor ? "#" + t.anchor : ""}`
    case "project":
      return `/work/${t.projectId}`
    case "yearRecap":
      return `/recaps/${t.year}${t.anchor ? "#" + t.anchor : ""}`
    case "moment":
      return `/moments/${t.year}/${t.slug}`
  }
}
