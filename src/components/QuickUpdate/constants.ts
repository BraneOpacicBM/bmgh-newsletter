import { Company } from "../../common/enums";
import { SocialMedia } from "./types";


export const SOCIAL_MEDIA_LINKS_MAPPER: Record<Company, SocialMedia> = {
  [Company.UN1QUELY]: {
    facebook: "https://www.facebook.com/un1quely.team/",
    instagram: "https://www.instagram.com/un1quely.team/",
    youtube: "https://www.youtube.com/@un1quely_team",
    linkedin: "https://www.linkedin.com/company/un1quely/",
    twitter: "https://twitter.com/un1quely",
  },
  [Company.BRIGHTLY]: {
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    twitter: ""
  },
  [Company.BRIGHT_MARBLES]: {
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    twitter: ""
  },
  [Company.BRIGHT_MARBLES_NETHERLANDS]: {
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    twitter: ""
  },
  [Company.BRIGHT_MARBLES_MACEDONIA]: {
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    twitter: ""
  }
};
