import { Company } from "../../common/enums";
import { ContributionPlatforms } from "./types";

export const COMPANIES = [
  Company.BRIGHT_MARBLES_NETHERLANDS,
  Company.BRIGHTLY,
  Company.UN1QUELY,
  Company.BRIGHT_MARBLES_MACEDONIA,
  Company.BRIGHT_MARBLES
]

export const CONTRIBUTION_PLATFORMS_MAPPER: Record<Company, ContributionPlatforms> = {
  [Company.UN1QUELY]: {
    Joberty: "https://www.joberty.rs/it-kompanija/1954/un1quely/o-kompaniji",
    Google:
      "https://www.google.com/maps/place//data=!4m3!3m2!1s0x475b11934cf11567:0x776c77ef794947ab!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2",
  },
  [Company.BRIGHTLY]: {
    Joberty: "https://www.joberty.rs/it-kompanija/2075/brightly-/o-kompaniji",
    Google: "https://www.google.com/maps/place/Brightly+d.o.o./@44.8185721,20.4235637,17z/data=!3m1!4b1!4m6!3m5!1s0x475a65c2d9091a69:0x7865e8833ccd2a1!8m2!3d44.8185721!4d20.4235637!16s%2Fg%2F11s57br0k4?&entry=ttu",
  },
  [Company.BRIGHT_MARBLES]: {
    Joberty: "https://www.joberty.rs/it-kompanija/215/brightmarbles/o-kompaniji",
    Google: "https://www.google.com/maps/place/BrightMarbles/@45.2555628,19.8344475,17z/data=!3m1!4b1!4m6!3m5!1s0x475b1194bcd9be6b:0xa5e980b8f2b7dc25!8m2!3d45.2555628!4d19.8344475!16s%2Fg%2F11q3kc7fmp?&entry=ttu",
    HelloWorld: "https://www.helloworld.rs/kompanija/BrightMarbles/1219",
  },
  [Company.BRIGHT_MARBLES_MACEDONIA]: {
    Joberty: "https://www.joberty.mk/kompanija/14049/brightmarbles-macedonia/za-kompanijata",
    Google: "https://www.google.com/maps/place//data=!4m3!3m2!1s0x135415152e625935:0xd18cb073c6643e11!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2",
  },
  [Company.BRIGHT_MARBLES_NETHERLANDS]: {
    Google: "https://www.google.com/maps/place/BrightMarbles+Netherlands+BV/@51.9234551,4.4691239,17z/data=!3m1!4b1!4m6!3m5!1s0x47c43530968ed01f:0x8b523714568d969b!8m2!3d51.9234551!4d4.4691239!16s%2Fg%2F11ss1grfzf?&entry=ttu",
    Glassdoor: "https://www.G.comdOverview/Working-at-BrightMarbles-EI_IE2984487.11,24.htm",
  },
};
