import styles from "./Newsletter.module.scss";
import Header from "../Header/Header";
import ProjectClientSection from "../ProjectClientSection/ProjectClientSection";
import QuickUpdate from "../QuickUpdate/QuickUpdate";
import { Company } from "../../common/enums";
import NewsAndEvents from "../NewsAndEvents/NewsAndEvents";
import OpenPositions from "../OpenPositions/OpenPositions";
import ThreeColorDivider from "../ThreeColorDivider/ThreeColorDivider";
import Colleagues from "../Colleagues/Colleagues";
import FamilyNews from "../FamilyNews/FamilyNews";
import Birthdays from "../Birthdays/Birthdays";
import Contributions from "../Contribution/Contribution";
import useVerify from "../../hooks/useVerify";

export const Newsletter = () => {
  const { loading, isVerified } = useVerify()

  if (loading || !isVerified) return null

  return (
    <div className={styles.newsletter_body}>
      <Header
        title="June Finance &amp; Project Update"
        leftParagraphs={[
          {
            title: "Bench Strength:",
            description:
              "We started June with 28 of our valuable employees on the bench. However, through strategic planning and the acquisition of a major client, Concord Health, we successfully reduced that number to 23 by the end of the month. This represents a considerable improvement and a promising trend. As we move forward, we remain confident that continued efforts will yield even better results in the upcoming month. "
          }
        ]}
        rightParagraphs={[
          {
            title: "Profit:",
            description:
              "Concerning BMGH Holding's monthly profit, it is slightly lower than anticipated. However, it's important to remember that this is a typical trend during the peak vacation season, when employees are utilizing their accrued leave. We view this as a temporary seasonal fluctuation, and we are optimistic for a favorable shift in profit margins as we progress through the holiday season and into the coming months."
          },
          {
            title: "Cash Flow:",
            description:
              "Similarly, our cash flow for the month has been slightly lower than projected, which can be attributed to the number of employees on the bench in the past few months and the annual vacation period. Despite this, we have made significant progress in assigning colleagues from the bench to new projects. While we haven't invoiced these projects yet, we anticipate an improvement in the cash flow next month as these projects commence and start generating revenue."
          }
        ]}
      />
      <ProjectClientSection
        leftParagraphs={[
          {
            title: "Concorde Health ",
            description:
              "The design phase, centered around delivering an outstanding UI/UX experience, is progressing smoothly and according to plan. A significant highlight this month was the successful onboarding of our development team, marking this project as one of the largest in BrightMarbles' portfolio. This exceptional team, led by the talented Dunja Ibrocic, is fully geared up and enthusiastic about shaping a superior product for Concord Health. We remain committed to driving forward this ambitious project, and we're confident about its success under Dunja's leadership."
          },
          {
            title: "Hello Again ",
            description:
              "In our previous newsletter, we anticipated implementing our solution with four new customers. However, due to the vacation season, we've successfully completed this process for two customers so far. Our development efforts are now back on track as we continue to work towards further progress."
          },
          {
            title: "Adrian",
            description:
              "Due to a delay in the start of Phase 1.1, we're shifting gears and transitioning into a supportive role. Our current focus is devoted to resolving any outstanding issues and providing assistance where necessary. This change in strategy is aimed at ensuring the project's smooth progression once we're ready to kickstart Phase 1.1. Our team is fully equipped and committed to mitigating any hurdles, and we're here to assist in any way we can. We remain optimistic about the project's future and are keenly anticipating the start of the next phase. As always, we'll continue to keep you updated on any developments."
          },
          {
            title: "Carna",
            description:
              "We're thrilled to share that the Carna product recently achieved a significant milestone. Its initial demonstrations before a discerning audience of investors and nephrologists were a resounding success, a testament to the hard work and dedication of our team. With this triumph, Carna secured half of its seed investment goal, totaling an impressive one million euros. A hearty congratulations to the team for their relentless effort and commitment to developing this exceptional product. The feedback received from the attendees, including American investors, nephrologists, representatives from health ministries, and hospital management, has been overwhelmingly positive. This encouraging response underscores the unique value and immense potential that Carna brings to the market."
          },
          {
            title: "MTV SysAdmin",
            description:
              "Our dedicated team continues to work diligently on the infrastructure of MTV Payment SysAdmin, aimed at fulfilling the necessary requirements for obtaining the CyberSecurity+ certificate. We're proud of our team's commitment to delivering high-quality work in this vital area of the project. Recently, we've reached a significant milestone with the issuance of our first invoice. However, looking ahead, the long-term perspective for our continued partnership seems uncertain at this point."
          },
          {
            title: "MTV Payment",
            description:
              "The team working on MTV Payment has successfully integrated a complex API, marking a significant milestone in our journey. We'd like to extend our heartfelt congratulations to the team for this impressive achievement. The project is on schedule, in line with our planned timeline, and we're optimistic about meeting our deadline. This successful progress is a testament to the team's dedication, skill, and relentless effort. However, we're mindful that there is still a considerable amount of work to be undertaken. As we move forward, we remain committed to maintaining our momentum."
          },
          {
            title: "Simplify Orange",
            description:
              "The first invoice for the project has been issued, marking an important step forward. Moreover, we're delighted to share that the project is advancing smoothly, and the client has expressed satisfaction with our services. Such positive feedback serves to further inspire and motivate us as we continue to strive for excellence in our project execution."
          },
          {
            title: "26bits (Porsche)",
            description:
              "We're excited to provide an update on our partnership with 26bits that we introduced in our previous newsletter. Initially, we had the privilege of working on the Maserati project with Porsche, a collaboration that brought us immense joy and professional satisfaction. Now, we're incredibly thrilled to announce that we're expanding our portfolio with an exciting new collaboration - we're teaming up with Ducati! This is indeed a proud moment for all of us at BrightMarbles Group, as these eminent brands represent the pinnacle of excellence in their respective industries. Working with such esteemed partners not only enhances our portfolio but also inspires us to continually strive for innovation and excellence in all that we do."
          }
        ]}
        rightParagraphs={[
          {
            title: "Aurum Fitness",
            description:
              "We're proud to report that Aurum Fitness, our first client from Switzerland, has expressed satisfaction with the work we've accomplished together. In alignment with our plans, we're progressing well in our efforts to expand our team. As always, we remain committed to maintaining the highest standards of quality and service, while continually broadening our horizons."
          },
          {
            title: "MijnDomein",
            description:
              "The MijnDomein team is currently participating in an on-site gathering that spans an entire week. This is an exciting opportunity for the team to collaborate, learn, and grow together. One of the key highlights of this visit is a special DevOps assembly that we've organized. This event brings together colleagues from the development, operations, and various other departments, encouraging interdisciplinary dialogue and collaboration. This unique gathering is not just about work – it also includes team-building activities designed to foster camaraderie, boost morale, and strengthen our collective spirit."
          },
          {
            title: "Fireside",
            description:
              "Operations are progressing smoothly as usual, but we've recently seen a change within our team. Filip Kiš, who has been a valued member of the team, has moved on from the project. We wish to express our heartfelt appreciation to Filip for his meaningful contributions to the Fireside project. His efforts have been significant, and he will be missed. We remain committed to continuing the successful execution of the Fireside project."
          },
          {
            title: "Raven",
            description:
              "The planned objectives for June have been accomplished as per schedule, marking a successful month for our team. Our team is currently in the active development phase, focusing on enhancing workspaces and meeting the needs of individuals with decreased capacity. This ensures the project remains on track, aligning with the required standards and specifications. We continue to forge ahead, maintaining our momentum and commitment to building a product that exceeds expectations."
          },
          {
            title: "Toogethr",
            description:
              "Regarding our client Toogethr, there has been a change in our team composition. Milan Majstorović has now taken over the role previously held by Dušan Rajković. We're confident that Milan's dedication and expertise will add significant value to our continued partnership with Toogethr."
          },
          {
            title: "Greenlite",
            description:
              "Greenlite, for whom we offer team augmentation services, continues to make strides in accelerating the process of obtaining construction permits, focusing on enhancing speed, predictability, and transparency. In recent news, there's been a transition within the team dedicated to the Greenlite project. Desko Sekulović has stepped in to take over the role previously held by Jovana Novaković. We're confident that Desko will continue the excellent work, maintaining the high standards that our partnership with Greenlite is known for."
          },
          {
            title: "Anycoin",
            description:
              "We are pleased to spotlight the exceptional performance of our team members, Imre Čileg and Goran Simić, who have been diligently serving one of our latest cryptocurrency clients, Anycoin. Their commitment and professional expertise have greatly contributed to Anycoin's excellent performance. Their efforts have not only met but exceeded client expectations, leading to high praise and appreciation from Anycoin. We are confident that their continued dedication will further enhance our partnership with Anycoin and contribute to sustained success."
          },
          {
            title: "Crayon-STADA, LiteBit, Hadrian, NAQ",
            description: "Business as usual."
          },
          {
            title: "Ethiks.ai",
            description:
              "Having successfully concluded our market research phase, and created an effective marketing strategy, brand guidelines, and a compelling pitch deck, we're now gearing up for the next stages. Our focus has shifted to developing robust website content, crafting promotional videos, writing insightful whitepapers, and generating engaging blog posts. These efforts are aimed at enhancing their visibility and impact."
          }
        ]}
      />
      <QuickUpdate
        company={Company.BRIGHT_MARBLES}
        title="We Welcome You All to Our New Office Space in Novi Sad"
        description={
          <>
            <div>
              Drumroll, please... 🥁 We're thrilled to announce that as of July
              1st, we've unpacked our boxes and set up shop in our shiny new
              office in Novi Sad!🥳
            </div>
            <div>
              This is more than just a change of address; it's a fresh start,
              loaded with modern facilities, vibrant workspaces, and a buzzing
              atmosphere that's going to kick our productivity up a notch.
            </div>
            <div>
              So, how about a firsthand experience of our new office? Swing by,
              take a tour, soak up the vibes, and join us in toasting to our new
              chapter.
            </div>
            <div>
              Here's where you can find us: 📍 Đorđa Rajkovića 2, Novi Sad. See
              you there!
            </div>
          </>
        }
      />
      {/* <QuickUpdate
        bgColor="white"
        company={Company.BRIGHTLY}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
      /> */}
      {/* <QuickUpdate
        bgColor="black"
        company={Company.BRIGHTLY}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description={
          <div>
            <div>
              Description can be in form of text(string) or you can pass html as
              this example show 💙
            </div>
            <div>
              Description can be in form of text(string) or you can pass html as
              this example show 💙
            </div>
          </div>
        }
      // /> */}
      //{" "}
      {/* <QuickUpdate
      //   bgColor="blue"
      //   company={Company.BRIGHT_MARBLES}
      //   title="Lorem ipsum dolor sit amet consectetur adipisicing"
      //   description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
      // /> */}
      {/* <QuickUpdate
        bgColor="white"
        company={Company.BRIGHT_MARBLES_MACEDONIA}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
      />
      <QuickUpdate
        bgColor="black"
        company={Company.BRIGHT_MARBLES_NETHERLANDS}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
      /> */}
      <NewsAndEvents
        data={[
          {
            img:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*vLW-aSxDQkhZXOEU4HHhMQ.jpeg",
            title: "Debate: Test First Development vs. Test Last Development",
            description: (
              <>
                Our recent electrifying debate on "Test First Development vs.
                Test Last Development" brought together diverse perspectives,
                sparking in-depth discussions around code quality, development
                speed, and adaptability. Our TFD advocates did a stellar job
                highlighting how writing tests first can make our development
                process more efficient, mitigate potential bugs, and reinforce
                code maintenance. On the flip side, TLD champions cited the
                advantages of rapid prototyping and its flexibility when facing
                changing requirements. The passion and enthusiasm displayed
                throughout the discussion truly made it an engaging and
                enjoyable learning experience for all involved. Keep bringing on
                such spirited debates, folks!
                {/* <a target="_blank" href="">
                  Click here to read more
                </a> */}
              </>
            )
          },
          {
            img:
              "https://brightmarbles.io/wp-content/uploads/2023/06/MicrosoftTeams-image-42.jpg",
            title:
              "Agile Chronicles – Chaper I: “Alliance of Greatness, Ingenuity and Legendary Expeditions” (by Tanja Maliković)",
            description: (
              <>
                Join us for a unique learning experience about Agile through our
                bewitching blog series, the "Agile Chronicles", expertly crafted
                by our skilled product manager Tanja Maliković. We're kicking
                off with the first chapter - "Alliance of Greatness, Ingenuity,
                and Legendary Expeditions." Stay updated and keep an eye out for
                the upcoming chapters!
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/agile-chronicles-chapter1/"
                >
                  Click here to read more
                </a>
              </>
            )
          },
          {
            img:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*_nirAtUuDHn-gUGwIfxvwQ.png",
            title:
              "The Beauty of Testing: From Home to the Open Road (by Goran Manojlović)",
            description: (
              <>
                Check out this brilliant blog post by our teammate Goran
                Manojlović from UN1QUELY. He's managed to blend his love for
                cycling with his day job in the coolest way. Using a
                custom-built app made for cyclists, Goran's been testing it
                while zooming through the city streets on his bike. This fresh,
                out-of-the-box way of testing is definitely reshaping what we
                think a QA role can look like.
                <a
                  target="_blank"
                  href="https://medium.com/@un1quely/the-beauty-of-testing-from-home-to-the-open-road-846c9bc11477"
                >
                  Click here to read more
                </a>
              </>
            )
          },
          {
            img:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*tgYpPWBA2msSc6Wv11rDFg.jpeg",
            title:
              "Developers as Leaders - Empowering Tech Decision-Making (by Ivan Đorđević)",
            description: (
              <>
                In his latest blog post, our very own Ivan Đorđević from
                Brightly is diving into the idea of developers stepping up as
                leaders, underlining the significance of empowering them in tech
                decision-making.
                <a
                  target="_blank"
                  href="https://medium.com/@Brightly_BMGH/developers-as-leaders-empowering-tech-decision-making-5a62606e433e"
                >
                  Click here to read more
                </a>
              </>
            )
          }
        ]}
      />
      <OpenPositions
        jobPostings={[
          {
            title: "Identity and Access Management Engineer (UN1QUELY)",
            postingUrl:
              "https://bmgh.zohorecruit.eu/jobs/UN1QUELY/36808000002674001/Identity-and-Access-Management-Engineer?source=CareerSite"
          },
          {
            title: "Penetration Tester (UN1QUELY)",
            postingUrl:
              "https://bmgh.zohorecruit.eu/jobs/UN1QUELY/36808000002466166/Penetration-Tester?source=CareerSite"
          },
          {
            title: "Junior Project Manager (UN1QUELY)",
            postingUrl:
              "https://bmgh.zohorecruit.eu/jobs/UN1QUELY/36808000003315001/Junior-Project-Manager-Cybersecurity?source=CareerSite"
          }
        ]}
      />
      <ThreeColorDivider />
      <Colleagues
        colleagues={[
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/04/DSC01845-copy.png",
            fullName: "Jovana Pantić",
            jobTitle: "Software Engineer",
            description:
              "Nenad Stojković: Jovana has made a remarkable impact on the Raven project through her outstanding contributions. Her work ethic is unparalleled, and she consistently demonstrates dedication and proactivity. With her vast knowledge and expertise, she not only enhances her own skills but also elevates the performance of her fellow developers."
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*A9RWcQU2Hlp05qo2Tbk7rw.png",
            fullName: "Zoran Siljanovski",
            jobTitle: "Software Engineer",
            description:
              "Tanja Maliković: Zoran demonstrates exceptional endurance and hard work, consistently taking on every challenge that comes his way. His unwavering determination enables him to overcome even the most challenging coding puzzles. We greatly admire his persistence and dedication, particularly during the feature freeze phase."
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/03/DSC00s454.png",
            fullName: "Dunja Ibročić",
            jobTitle: "Product & Delivery Manager",
            description:
              "Boris Berat: Dunja's invaluable contribution has enabled us to establish a fruitful partnership with a significant new client, Concorde Health. Dunja played a pivotal role in every stage of securing the deal, including introductory calls, crafting the offer, negotiating terms, and assembling a dedicated team. Moving forward, she will continue to lead the team, ensuring our ongoing success with Concorde Health."
          },
          {
            imgUrl:
              "https://media.licdn.com/dms/image/C4E03AQFmHWKAuQzLNw/profile-displayphoto-shrink_800_800/0/1635939612355?e=1694649600&v=beta&t=smWudPi6uQL58lKTJE1dPR4BRnP6HrA8iav_atD49zQ",
            fullName: "Nenad Rakić",
            jobTitle: "Software Quality Assurance Engineer",
            description:
              "Media Monks: Our colleague Nenad Rakić received excellent praise from our client, MediaMonks. He exemplifies all aspects of his work, consistently delivering excellent results. His exceptional skills and positive attitude make him a perfect teammate."
          },
          {
            imgUrl:
              "https://media.licdn.com/dms/image/C5603AQFz2Z_8lO-xdA/profile-displayphoto-shrink_800_800/0/1543964045698?e=1694649600&v=beta&t=KKHCmr2Yg_CdS9AsrmOQLJIgwo5ERJNwUrm4LVjalX8",
            fullName: "Ivana Grbić",
            jobTitle: "Office Manager",
            description:
              "Daniela Červeni: Ivana took on the responsibility of organizing the office relocation, and her performance was nothing short of extraordinary. She meticulously oversaw every aspect, ensuring a seamless transition throughout the process. Her tireless dedication and hard work were evident in the successful execution of the relocation."
          },
          {
            imgUrl:
              "https://media.licdn.com/dms/image/C5603AQEGIfH1cdyVjw/profile-displayphoto-shrink_800_800/0/1567535451360?e=1694649600&v=beta&t=HumMkEvcGhnQwYHgyRUGz1dvlWvVIB-M75AS8l_E1tw",
            fullName: "Edvin Kerekeš ",
            jobTitle: "Software Engineer",
            description:
              "Tanja Maliković: I have the pleasure of acknowledging and appreciating my colleague for his distinct personality and mind-boggling intellect. He has this uncanny knack for approaching work in the most unusual, yet brilliant, ways. His ability to think outside the box and conjure up innovative solutions is truly astounding."
          }
        ]}
      />
      <FamilyNews
        title="Welcoming Juniors at BrightMarbles 👶"
        data={[
          {
            img:
              "https://nameitcustomdecor.com.au/cdn/shop/products/IMG_2370.jpg?v=1591945706",
            description: (
              <>
                Join us in extending heartfelt congratulations to our colleague,
                Martin Berger, and his wife on the birth of their baby boy,
                Konstantin. We hope Konstantin inherits his dad' strength and
                resilience. Congratulations to <span> Martin Berger </span>
              </>
            )
          },
          {
            img:
              "https://lilyandwonder.com/cdn/shop/products/Baby-Girl-Disc.jpg?v=1649946496&width=713",
            description: (
              <>
                Warm congratulations to our colleague, Anastasia Bijelić, and
                her husband on becoming parents of a little bundle of joy named
                Teodora. May she grow up to be as beautiful and smart as her
                amazing mom. Congratulations to <span> Anastasia Bijelić </span>
              </>
            )
          }
        ]}
      />
      <Birthdays
        employees={[
          {
            name: "Luka",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/10/Luka-Maric.png"
          },
          {
            name: "Srđan",
            imgUrl:
              "https://media.licdn.com/dms/image/C4E03AQH1-40gglH2Zg/profile-displayphoto-shrink_800_800/0/1636531823625?e=1694649600&v=beta&t=xd3zK10odVD8G8o4XhdaYDwm_T1cpzNqpoIAPrLn7Tk"
          },
          {
            name: "Milana",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/06/DSC01ss190.png"
          },
          {
            name: "Tanja",
            imgUrl:
              "https://media.licdn.com/dms/image/C4E03AQEiDWPCncx9ug/profile-displayphoto-shrink_800_800/0/1626882587591?e=1694649600&v=beta&t=pzj9C0SumN27qPQkz6cntqrOPVjeioj-sN_jf5kctb8"

          }
        ]}
      />
      <Contributions />
      <ThreeColorDivider hideWhite />
    </div>
  );
};
