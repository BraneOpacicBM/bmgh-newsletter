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
    facebook: "https://www.facebook.com/BrightlyBMGH",
    instagram: "https://www.instagram.com/brightly.bmgh/",
    youtube: "",
    linkedin: "https://www.linkedin.com/company/brightly-bmgh/",
    twitter: "https://twitter.com/Brightly_BMGH"
  },
  [Company.BRIGHT_MARBLES]: {
    facebook: "https://www.facebook.com/brightmarbles",
    instagram: "https://www.instagram.com/brightmarbles/",
    youtube: "https://www.youtube.com/BrightMarbles",
    linkedin: "https://www.linkedin.com/company/brightmarbles/",
    twitter: "https://twitter.com/BrightMarbles"
  },
  [Company.BRIGHT_MARBLES_MACEDONIA]: {
    facebook: "https://www.facebook.com/brightmarbles.mk",
    instagram: "https://www.instagram.com/brightmarbles.mk/",
    youtube: "",
    linkedin: "https://www.linkedin.com/company/brightmarbles-macedonia/",
    twitter: ""
  },
  [Company.BRIGHT_MARBLES_NETHERLANDS]: {
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    twitter: ""
  }
};
