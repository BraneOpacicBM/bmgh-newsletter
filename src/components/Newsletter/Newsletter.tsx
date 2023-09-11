import styles from "./Newsletter.module.scss";
import Header from "../Header/Header";
import ProjectClientSection from "../ProjectClientSection/ProjectClientSection";
import QuickUpdate from "../QuickUpdate/QuickUpdate";
import { Company } from "../../common/enums";
import NewsAndEvents from "../NewsAndEvents/NewsAndEvents";
import OpenPositions from "../OpenPositions/OpenPositions";
import ThreeColorDivider from "../ThreeColorDivider/ThreeColorDivider";
import Colleagues from "../Colleagues/Colleagues";
import Birthdays from "../Birthdays/Birthdays";
import Contributions from "../Contribution/Contribution";
import useVerify from "../../hooks/useVerify";
import FamilyNews from "../FamilyNews/FamilyNews";

export const Newsletter = () => {
  const { loading, isVerified } = useVerify()

  if (loading || !isVerified) return null

  return (
    <div className={styles.newsletter_body}>
      <Header
        title="August Finance &amp; Project Update"
        leftParagraphs={[
          {
            title: "Bench Strength:",
            description:
              "Since August 1st, we've reduced our bench from 20 to 17 people, indicating a steady downwards trend. Members of certain departments have been placed on projects. As new projects arrive, we will employ new people, but only per confirmed project in case we don't have available profiles in house."
          }
        ]}
        rightParagraphs={[
          {
            title: "Profit:",
            description:
              "Our profit has remained stable, maintaining a consistent profit margin of 7% this month."
          },
          {
            title: "Cash Flow:",
            description:
              "There was no significant change in our cash flow in August. In the market residuals from the ongoing crisis are still noticeable, the main indicator is that clients still need a little more time to service their obligations. The good thing is that with our clients we are noticing slight improvements, but still not where we want to be. Our strategy to overcome this situation is diversification of the client portfolio which is already happening and telling us that it is a good way to go."
          }
        ]}
      />
      <ProjectClientSection
        leftParagraphs={[
          {
            title: "Bielik",
            description:
              "On August 15th, we deployed two of our skilled Flutter developers, and the team has recently been expanded by one Frontend developer."
          },
          {
            title: "Ceres",
            description:
              "We’ve completed several minor tasks for them, and in the following weeks we’ll meet with them to discuss the infrastructure redesign."
          },
          {
            title: "Concorde Health",
            description:
              "The project is advancing as scheduled, both in terms of its design and development phases."
          },
          {
            title: "Crayon STADA",
            description:
              "The client has requested a proposal for one full-time position for the upcoming year."
          },
          {
            title: "Ethiks.ai",
            description:
              "As you know, the Ethiks project has been one of our pivotal ventures this year, and we're delighted to report that things are progressing really well. The most recent highlight is the signing of a new contract. This expansion in our partnership involves providing Ethiks with content writing services, which opens doors for further collaboration in areas where we have demonstrated expertise."
          },
          {
            title: "Fireside",
            description:
              "We are switching the focus towards building strong networks around the influential content creators on their platform. This way Fireside aims to empower their users to purchase membership passes and get special access to the content created by their favorites. Fireside also recently made some breakthroughs towards Amazon TV, and focused their efforts on testing and upgrading their CTV app."
          },
          {
            title: "GreenLite",
            description:
              "On GreenLite, since our last update, we've worked on delivering key improvements based on user feedback for the most recent batch of features. Our focus this period was the platform internal tools used by GreenLite employees to manage and review the customer construction projects. Going forward, our next big goal is further improving those internal tools by overhauling and improving the construction set document review capabilities."
          },
          {
            title: "HelloAgain",
            description:
              "Development has continued at a reduced pace due to the holiday season, with no new deployments over the past few weeks. The current version is stable."
          },
          {
            title: "Intelliya",
            description:
              "We maximized our efforts within the constraints of our limited access to the client's resources. We conducted a brief presentation for their DevOps Engineer, and it appeared to meet his satisfaction. We are on the verge of completing a Phase 1 handover, and once that's done, we'll gain more clarity on our next steps."
          },
          {
            title: "LiteBit",
            description: "The project finally closed on August 31."
          },
          {
            title: "MijnDomein",
            description:
              "There were no significant changes at MijnDomein in August. Besides the regular roadmap, in August we planned to start working on hackathon projects (ones we worked on at the get-together event in July). Because a lot of people were on summer holidays, hackathon projects will be moved to September."
          },
          {
            title: "MTV SysAdmin",
            description:
              "The client applied for the CyberEssentialPlus certificate, and we’re awaiting additional tasks. Other than that, there are some smaller tasks for us to finish before they move into maintenance mode."
          }
        ]}
        rightParagraphs={[
          {
            title: "NAQ",
            description:
              "We’ve successfully finished everything that was asked of us, and we’re soon expecting their feedback. We’ll discuss a more extensive collaboration after they receive the next round of financing."
          },
          {
            title: "Partnership updates",
            description:
              "Our collaboration with Thoropass partner is reaching new levels every day and continuously expanding as you may have seen on our social media channels. We have conducted training for their CS staff to sell all our services to their customers and expect a rise in leads generated by this partner in the coming weeks. We are expanding our partnership network and have signed another partner A-lign to the roaster."
          },
          {
            title: "Penetration Testing projects",
            description:
              "We are experiencing a high volume in demand for penetration tests from our partner Thoropass (Laika) and 1to1 sales, with a record of over 40 penetration testing projects in the pipeline in the next three months. We are also seeing a rise in organic growth of leads through recommendations from current customers and social media outreach."
          },
          {
            title: "Polity",
            description:
              "One of our newest clients, Polity Network, is a new generation crypto wealth management network for professional advisors and qualified investors. We started the project with one developer for now, so we’ll see how things will proceed from there."
          },
          {
            title: "Raven",
            description:
              "Development has picked up without any slowdown, with ongoing efforts concentrated on expanding existing features and bolstering system stability. We are actively working to refine current functionalities while also implementing additional layers of stability to ensure a seamless user experience."
          },
          {
            title: "Secfix",
            description:
              "Project is moving along according to the plan. We’re awaiting confirmation of the final date to switch to a new infrastructure that was built a few months ago."
          },
          {
            title: "Security Operations projects",
            description:
              "We are in the final round for a big client in the DACH region to win a multiyear SecOps project that will unlock further scaling of this service and team."
          },
          {
            title: "Simplify Orange",
            description:
              "The client increased the year-end budget from 250 hours to 450 hours. We're currently in talks regarding the formation of the complete team."
          },
          {
            title: "Toogethr",
            description:
              "The project is currently in feature freeze due to a number of employees absent on summer holidays. Focused on improving gate management functionality and putting more accent on quality and testing."
          },
          {
            title:
              "26bits (Porsche), Adriaan, Anycoin, Aurum Fitness, Carna Health, Crayon, Hadrian, and MTV:",
            description: "Business as usual."
          }
        ]}
      />
      <QuickUpdate
        company={Company.BRIGHT_MARBLES}
        title="Here's a quick peek into the happenings at BrightMarbles:"
        description={
          <div>
            <div>
              🛠 Polished Processes: While many used the vacation season to bask
              in the sun, we took the time to review and polish a few things
              internally. Our sales processes, in particular, have seen some
              work. We've made efforts to streamline and make things a bit more
              efficient. Hopefully, you'll notice the smoother flow in the
              coming weeks.
            </div>
            <div>
              💡 Tech Officers' Meeting: Our Tech Officer team recently had a
              highly productive meeting. They've hashed out a few things, made
              some decisions, and are looking forward to implementing changes
              aimed at better functioning. Engineers, you might find a few
              updates coming your way, geared towards enhancing our workflow.
            </div>
            <div>
              So, how about a firsthand experience of our new office? Swing by,
              take a tour, soak up the vibes, and join us in toasting to our new
              chapter.
            </div>
            <div>
              🏃‍♂️ 10K Belgrade Marathon: We had quite the day on the 9th of
              September at the "10K Belgrade - Powered by Nike" race.
              Representing as the official tech partner of the Belgrade Marathon
              was a proud moment for us. It was heartening to see our
              colleagues, Branko Džakula, Imre Čileg, and Sanel Jovanović, give
              their best on the track. And, of course, the support from the
              sidelines was just as spirited. Big thanks to everyone involved!
            </div>
          </div>
        }
      />
      <QuickUpdate
        bgColor="black"
        company={Company.UN1QUELY}
        title="Welcoming New Talent to Our Pentest Team"
        description="We're thrilled to introduce Darko Milanović, our new Penetration Tester! 😊 Darko's role as an expert in this crucial field adds a significant layer of security knowledge to our team. With his insights, we're further empowered to ensure the safety and integrity of our systems. Darko, we're looking forward to the future endeavours!"
      />
      {/* <QuickUpdate
        bgColor="white"
        company={Company.BRIGHTLY}
        title="A Warm Welcome Back: Miloš Vasić Rejoins Our Team"
        description={
          <div>
            <div>
              Team, we've got some amazing news to share. Remember our talented
              intern, Miloš Vasić? We're pleased to announce that Miloš is
              rejoining our ranks, lending his expertise to the MTV Payment
              project as a React Developer. Given his past performance and
              unwavering commitment, we're confident he'll bring a new dimension
              of excellence to the initiative. So, without further ado, let’s
              extend a warm welcome back to Miloš.
            </div>
            <div>
              We're absolutely sure you're going to crush it in this role.
              Welcome back to the fold, Miloš! 🚀
            </div>
          </div>
            />
        } */}
      {/* <QuickUpdate
        bgColor="blue"
        company={Company.BRIGHT_MARBLES}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
      />
      <QuickUpdate
        bgColor="white"
        company={Company.BRIGHT_MARBLES_MACEDONIA}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
      />
      <QuickUpdate
        bgColor="black"
        company={Company.BRIGHT_MARBLES_NETHERLANDS}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam." */}
      {/* /> */}
      <NewsAndEvents
        data={[
          {
            img:
              "https://un1quely.com/wp-content/uploads/2023/08/featured-photo.jpg",
            title:
              "How to Build a High-Performing Cybersecurity Team (by Branko Džakula)",
            description: (
              <>
                Are you intrigued by the prospect of how an unparalleled
                security team is assembled? Branko Džakula explores the notion
                that building a team requires more than technical expertise,
                encompassing an array of soft skills and core values. Branko
                underlines just how important cultural fit is in order to find
                individuals who complement and enhance our collective
                capabilities. He further explores trust, transparency, and
                ethics as values with a profound impact on team dynamics, even
                in the realm of remote work.
                <a
                  target="_blank"
                  href="https://un1quely.com/how-to-build-a-high-performing-cybersecurity-team/" rel="noreferrer"
                >
                  Click here to read more
                </a>
              </>
            )
          },
          {
            img:
              "https://brightmarbles.io/wp-content/uploads/2023/08/image-6.png",
            title:
              "How to Handle Pull Requests Without Making Enemies: A Guide for the Diplomatic Developer (by Darko Kovač)",
            description: (
              <>
                Pull requests (PRs) can be a touchy subject for developers, and
                Darko Kovač gives his insight into how to handle them with
                grace. Darko underlines the importance of communication,
                focusing on the code itself, and not the person, as well as
                positive feedback. He emphasizes the fact that there is a human
                behind the code, and that framing your feedback as a suggestion
                would be the path of least resistance. Want to know how we
                practice constructive PRs at Bright Marbles? Hop in for a ride!
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/pull-requests/" rel="noreferrer"
                >
                  Click here to read more
                </a>
              </>
            )
          },
          {
            img:
              "https://brightmarbles.io/wp-content/uploads/2023/08/image-3-1024x683.png",
            title:
              "Decoding Software Architecture: The Essential Role of Architectural Decision Records (ADRs) (by Nenad Stojković)",
            description: (
              <>
                Nenad discusses Architectural Decision Records (ADRs) as one of
                the effective ways of documenting architectural decisions.
                Consisting of Architecturally Significant Requirements (ASR) and
                Architectural Decisions (AD), ADR both fortifies the
                architectural framework and ensures that the logic behind each
                decision is within reach for all team members. Jump in Nenad’s
                exploration of the key components of ADR and how to preserve its
                integrity.
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/software-architecture/" rel="noreferrer"
                >
                  Click here to read more
                </a>
              </>
            )
          },
          {
            img:
              "https://brightmarbles.io/wp-content/uploads/2023/08/image-2-1024x682.jpeg",
            title:
              "Empowering Brands through Full-Spectrum Digital Services: BrightMarbles Approach (by Nevena Berat)",
            description: (
              <>
                Full spectrum digital services can help brands to not just
                survive but excel with their online presence. Nevena Nemes
                explains BrightMarbles’ approach that implies a holistic digital
                approach, which in turn helps create impactful and resilient
                strategies. Nevena describes how it’s best to begin by exploring
                the business objectives and market dynamics in order to create a
                narrative that resonates with the brand’s audience and helps
                magnify your brand’s impact through social media.
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/brightmarbles-digital-marketing-services/" rel="noreferrer"
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
          }
          // {
          //   title: "Penetration Tester (UN1QUELY)",
          //   postingUrl:
          //     "https://bmgh.zohorecruit.eu/jobs/UN1QUELY/36808000002466166/Penetration-Tester?source=CareerSite"
          // }
          // {
          //   title: "Junior Project Manager (UN1QUELY)",
          //   postingUrl:
          //     "https://bmgh.zohorecruit.eu/jobs/UN1QUELY/36808000003315001/Junior-Project-Manager-Cybersecurity?source=CareerSite"
          // }
        ]}
      />
      <ThreeColorDivider />
      <Colleagues
        colleagues={[
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*DIVvWAev8ga80WeBIUHdLA.png",
            fullName: "Concorde Health",
            jobTitle: "Dušan & Ognjen",
            description:
              "Brane Opačić: Dušan and Ognjen have truly set the bar high with their remarkable contributions to the Concorde Health web application. Their synergy and dedication have translated into an instant and impressive transformation of the platform. Kudos to this dynamic duo for their outstanding work, making waves right from the start!"
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*XL0UDwETHxNzFko3UPOCaw.png",
            fullName: "Raven team",
            jobTitle: "Everybody",
            description:
              "Darko Kovač: I want to commend the entire Raven team for their remarkable progress and exceptional display of teamwork. The unity and camaraderie within the team have undoubtedly contributed to our achievements, fostering an environment where ideas flourish and challenges are overcome together."
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2022/04/DSC0131sss7.png",
            fullName: "Darko Bučevac",
            jobTitle: "QA Engineer",
            description:
              "Vedrana Kaloper: Due to Darko's dedication and effort, he is extremely hardworking and responsible. His attention to detail is impeccable, and he consistently puts in the effort to excel. Transitioning to an entirely new role (QA -> DEV) showcases his commitment to mastering new skills. He conducts independent research, demonstrates a proactive attitude, and approaches tasks conscientiously. His work is truly commendable and reflects his dedication to excellence!"
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/06/DSC011sss22.png",
            fullName: "Daniel Kupčo",
            jobTitle: "Software Engineer",
            description:
              "Vedrana Kaloper: Daniel's proactive approach sets him apart – he consistently takes the initiative by delving several steps ahead and autonomously explores potential solutions or root causes. His rationality shines through, making his insights invaluable, especially in project estimations, whether temporal or technical. His reliability from a technical standpoint, along with his pragmatic and realistic perspectives, greatly influences and enhances our collaborative efforts."
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*wfKC7chsZfyCM744i3G4Vg.png",
            fullName: "Nastasija Trajanova",
            jobTitle: "Marketing Specialist",
            description:
              "Nevena Nemeš: Staša is the embodiment of reliability and thoroughness in our team. Not only is she a trusted colleague, but her tenacity stands out—what she doesn’t know, she diligently researches and executes brilliantly. Working alongside her is both an assurance and a delight. Kudos, Staša!"
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*rmh4zHnNrJVZv--fLb2PQA.png",
            fullName: "Milica Pališaški",
            jobTitle: "QA Engineer",
            description:
              "Milan Stančić: Milica deserves high praise for her exceptional dedication to her work. She not only diligently tends to her responsibilities but also cultivates transparent communication, both within the team and with clients. Her proactive approach shines during refinements, and she adeptly handles new challenges that come her way."
          },
          {
            imgUrl:
              "https://media.licdn.com/dms/image/D4D03AQEd5M9RrjS2Cw/profile-displayphoto-shrink_800_800/0/1668608665318?e=1699488000&v=beta&t=sFapLskHhOQlUQj8opSDwN-Z0WRMuvwl1gI6CJOS0Ow",
            fullName: "Miloš Ristić",
            jobTitle: "Software Engineer",
            description:
              "Milena Petrović: Miloš’s dedication and hard work have shone brightly on not one but two projects – a testament to his incredible work ethic and skill. His responsiveness is off the charts – quick, helpful, and precise. His commitment to the team is steadfast, and his positive attitude is a breath of fresh air. He brings a level of professionalism that's truly outstanding. Thanks, Miloš, for being such an essential part of the team – your contributions are nothing short of phenomenal!"
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/03/DSC007ss23.png",
            fullName: "Marko Krstanović",
            jobTitle: "Software Engineer",
            description:
              "Nevena Nemeš: Even beyond his core role, Marko consistently crafts tech posts that not only educate but engage, masterfully translating complex tech jargon into relatable content. Hats off to Marko for seamlessly juggling roles and continually lending a much-valued hand to our marketing efforts!"
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/06/DSC0s1226.png",
            fullName: "Kristina Tadić",
            jobTitle: "Software Engineer",
            description:
              "Naq Cyber: Kristina is ace! She consistently delivers exceptional results. Her precision in task execution and fearlessness in seeking clarification or catching overlooked details are remarkable. Her coding skills are top-notch, known for their cleanliness, efficiency, and minimal bugs. Furthermore, her strong grasp of design theory ensures her work not only functions flawlessly but also looks aesthetically pleasing—an uncommon quality in a UI developer. Kristina's confidence in challenging design decisions, combined with her respectful approach, consistently proves invaluable. She is an outstanding asset to the team, and we eagerly anticipate future collaborations with her."
          }
        ]}
      />
      <FamilyNews
        title="Welcoming Juniors at BrightMarbles 👶"
        data={[
          {
            img:
              "https://i.pinimg.com/originals/78/db/a6/78dba6715bb4b0d42bdd24a70a982e93.jpg",
            description: (
              <>
                Let’s congratulate our colleague Radivoje and his wife on the
                arrival of their baby girl, Sofija. May the wisdom that
                symbolizes her name be a guiding light leading her through every
                step of life’s adventure. Congratulations to{" "}
                <span> Radivoje Ostojić! </span>
              </>
            )
          },
          {
            img:
              "https://lilyandwonder.com/cdn/shop/products/Baby-Girl-Disc.jpg?v=1649946496&width=713",
            description: (
              <>
                Huge congratulations to our colleague Danilo on becoming a
                father to a beautiful baby girl! Wishing you and your family all
                the happiness as you embark on this wonderful journey of
                parenthood. Enjoy every moment with your precious little one.
                Congratulations to <span> Danilo Kukrić! </span>
              </>
            )
          },
          {
            img:
              "https://i.pinimg.com/originals/9d/4a/19/9d4a1990e7359af436f8e1ae5b782212.jpg",
            description: (
              <>
                A big congratulations to our colleague Miloš, who became the
                father of an adorable baby boy. We wish you and your family a
                world of joy, laughter, and countless precious moments!
                Congratulations to <span> Miloš Milić! </span>
              </>
            )
          }
        ]}
      />
      <Birthdays
        employees={[
          {
            name: "Marko",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/03/DSC007ss23.png"
          },
          {
            name: "Ivo",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*4f2hpbaVTgBYnXdzXTu0Lw.jpeg"
          },
          {
            name: "Milan",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*XRUdwcOhkIoJL9HQz0JTYw.png"
          },
          {
            name: "Radivoje",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/04/DSC003ss22.png"
          },
          {
            name: "Nikola",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*WGCwkoPBgJYyc7tNHeQI9w.png"
          },
          {
            name: "Nebojša",
            imgUrl:
              "https://media.licdn.com/dms/image/D4D03AQGl158fQv-ing/profile-displayphoto-shrink_200_200/0/1669627524238?e=1698883200&v=beta&t=WLS-2jdsYYf9ueK1p5VlgxUKYg4O6gQnUDRX0CgXGfc"
          },
          {
            name: "Marko",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*okW_pcaPZUGHe4f3fsDAyQ.png"
          },
          {
            name: "Nenad",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*o9GECTwg97TfDtygxr2bGQ.png"
          }
          // {
          //   name: "Nikola",
          //   imgUrl:
          //     "https://miro.medium.com/v2/resize:fit:750/format:webp/1*TwOgkDGdhOKJSiPKXhUqbw.png"
          // },
          // {
          //   name: "Vladan",
          //   imgUrl:
          //     "https://miro.medium.com/v2/resize:fit:750/format:webp/1*hNgviC6QIwKf4rSHfesVAQ.png"
          // },
          // {
          //   name: "Lazar",
          //   imgUrl:
          //     "https://media.licdn.com/dms/image/C5603AQE1wnWij3DeXA/profile-displayphoto-shrink_800_800/0/1625768665853?e=1696464000&v=beta&t=yspv7OZ1p6yqJnO7zBRv9aLVvmE6rPYZkwXoLSmzFiU"
          // },
          // {
          //   name: "Pavle",
          //   imgUrl:
          //     "https://media.licdn.com/dms/image/D4D03AQEeRojESA49JA/profile-displayphoto-shrink_800_800/0/1667220488329?e=1696464000&v=beta&t=gOITu3jn23QJOOsOidKL0XuuWoSIGebfsq_BXLu9lno"
          // },
          // {
          //   name: "Bojan",
          //   imgUrl:
          //     "https://brightmarbles.io/wp-content/uploads/2022/04/DSC0143s0-copy.png"
          // },
          // {
          //   name: "Marko",
          //   imgUrl:
          //     "https://brightmarbles.io/wp-content/uploads/2021/04/DSC002s70.png"
          // },
          // {
          //   name: "Zoran",
          //   imgUrl:
          //     "https://media.licdn.com/dms/image/C4E03AQGyKesrI1pONQ/profile-displayphoto-shrink_800_800/0/1578670511770?e=1696464000&v=beta&t=g_74BB14lgiSoCajTfIpe-HfOBgVziV71qv8kNIgVP0"
          // }
        ]}
      />
      <Contributions />
      <ThreeColorDivider hideWhite />
    </div>
  );
};
