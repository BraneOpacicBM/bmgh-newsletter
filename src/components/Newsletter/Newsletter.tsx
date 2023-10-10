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
  const { loading, isVerified } = useVerify();

  if (loading || !isVerified) return null;

  return (
    <div className={styles.newsletter_body}>
      <Header
        title="September Finance &amp; Project Update"
        leftParagraphs={[
          {
            title: "Bench Strength:",
            description:
              "In September, we saw a slight dip in our bench strength, going from 17 to 16 people. Since we have many new projects kicking off or in the pipeline, we've been proactive in prepping available colleagues with the right skill sets for upcoming interviews and project onboarding. So, you can expect at least 3 of them to get assigned to projects in the coming days.",
          },
        ]}
        rightParagraphs={[
          {
            title: "Profit:",
            description:
              "On the financial side, September witnessed our profit margin dipping to 2%, a change primarily due to the wrap-up of our partnership with Litebit. Nevertheless, with several promising projects in the invoicing pipeline, we're optimistic about seeing a notable boost in our profit margins as these projects become active.",
          },
          {
            title: "Cash Flow:",
            description:
              "In September, our cash flow remained relatively stable. We're still grappling with delayed payments from some clients, a byproduct of the current crisis. Rest assured; our team is working diligently to manage these delays. Furthermore, our ongoing efforts to diversify our client portfolio have already shown promise as a strategic step forward. Consequently, we remain on course towards a positive trajectory.",
          },
        ]}
      />
      <ProjectClientSection
        leftParagraphs={[
          {
            title: "26bits (Porsche)",
            description:
              "At 26bits, the project is scheduled to be completed by the end of October, and we are discussing the possibility of continuing it after this period.",
          },
          {
            title: "Alithya",
            description:
              "Alithya, a prominent North American tech firm based in Canada, reached out to us for a collaboration. We successfully executed a video project for them and received positive feedback. Given the success of our initial venture, we are in discussions about expanding our services and continuing our partnership.",
          },
          {
            title: "Anycoin",
            description:
              "At the Anycoin project, our team is currently focused on the redesign of the website.",
          },
          {
            title: "Bielik",
            description:
              "With Bielik, we have extended our collaboration by one additional month. The team is currently focused on the MVP, finalizing the Authorization flow, with some essential initial screens already completed (Markets and Wallet screens). The next step is the implementation of localization.",
          },
          {
            title: "Carna",
            description:
              "At Carna Projects, the team has successfully secured a seed investment of $1.17 million, surpassing their initial target of $1 million. They are now actively preparing for the second phase of their seed funding and have plans to enter the Series A round within the coming year. The team is currently focused on preparations for their first two projects, Bermuda and Cameroon. The Bermuda project involves screening the population for chronic kidney disease and will be covered by the American media company Newsweek. Additionally, our team at Carna Projects has adopted the SCRUM framework and has implemented refinements in their work processes. There is noticeable technical progress in product development. ",
          },
          {
            title: "Concorde Health",
            description:
              "At Concorde Health, we've reached the first milestone by releasing the web app to the client on the staging environment. The mobile app version is expected to be released in the next day or two.",
          },
          {
            title: "Costa Coffee",
            description:
              "On the Costa Coffee project, the team is in the process of transitioning the app to SwiftUI and is working on integrating it with the Braze customer engagement platform.",
          },
          {
            title: "Crayon",
            description:
              "At Crayon, everything is going well. We're currently in discussions with a client regarding a potential new project.",
          },
          {
            title: "Crayon STADA",
            description:
              "BMGH has an opportunity for an additional project, which involves implementing a system that the client purchased on Kubernetes for the entire STADA group.",
          },
          {
            title: "Ethiks.ai",
            description:
              "We're handling Ethiks's full marketing suite now. Our current work centers around producing both video and written content for them.",
          },
          {
            title: "Greenlite",
            description:
              "Since the last update we've introduced two new key components: The map view for clients to better visualize the spread of their projects across the US. The second major feature has been the enhanced document viewer with review capabilities used by Greenlite to provide quick and easy feedback on client projects. We've also made several improvements, mostly related to the project review portal and the login workflow. We are now in the process of planning the next steps and specifying general architecture improvements to be worked on in the next quarter.",
          },
          {
            title: "HelloAgain",
            description:
              "HelloAgain has recently onboarded several new clients onto their platform. Currently, Nenad Stojković is working on customizing the platform for one of their largest clients to date.",
          },
        ]}
        rightParagraphs={[
          {
            title: "MTV",
            description:
              "Everything is progressing smoothly on the project for our MTV client. Our team is currently in the final phase, and the presentation of the current solution to the client was successful. We are on track to complete the project within the defined timeline.",
          },
          {
            title: "MTV SysAdmin",
            description:
              "In the MTV SysAdmin project, an audit has been scheduled for the beginning of November. Our team's task was to prepare the client for this audit. Regrettably, one of our team members can no longer support the client, and it is likely that we will terminate this cooperation after the audit.",
          },
          {
            title: "NAQ",
            description:
              "In the NAQ project, our team is primarily focused on the development of a new version of the application, and we are currently in the final stages of this process.",
          },
          {
            title: "Penetration Testing projects",
            description:
              "The past few months have been exceptional for our Pentesting services, marked by a record number of customers served and projects successfully completed. Our revenue has doubled in just two months. Additionally, we are experiencing significant organic growth in leads, driven by recommendations from our existing customers and partners. To meet this high demand, we have recently welcomed a new team member, and starting from November 1st, we will be adding another Senior Penetration Tester with expertise in security research and red team exercises.",
          },
          {
            title: "Raven",
            description:
              "We are pleased to spotlight the exceptional performance of our team members, Imre Čileg and Goran Simić, who have been diligently serving one of our latest cryptocurrency clients, Anycoin. Their commitment and professional expertise have greatly contributed to Anycoin's excellent performance. Their efforts have not only met but exceeded client expectations, leading to high praise and appreciation from Anycoin. We are confident that their continued dedication will further enhance our partnership with Anycoin and contribute to sustained success.",
          },
          {
            title: "Security Operations projects",
            description:
              "In our Security Operations projects, we are actively pursuing new opportunities in the SecOps field. We are bidding on several projects in collaboration with local partners such as Vega and PwC, as well as exploring international prospects in Germany. Cloud configuration reviews and compliance related SecOps engagements continue to be in high demand, keeping our SecOps team members fully occupied.",
          },
          {
            title: "Toogethr Parking & Drive",
            description:
              "Toogethr Drive: Our team is in the process of releasing a new version of Gate Management and is also actively working on integrating third-party systems for electronic car charging at various locations, as well as enabling payment for parking using the EasyPark system. At Toogethr Parking, the team remains highly committed to the development of an innovative smart parking system. Recent efforts have predominantly revolved around improving Electric Vehicle charging infrastructure. Additionally, the team is currently concentrating on making significant enhancements to the parking lot Gate Management.",
          },
          {
            title: "vCISO projects and Partnership updates",
            description:
              "We have recently brought on board a new partner for our vCISO and other security services, and we are actively negotiating additional partnership agreements to broaden our sales channels and enhance our resilience. We are consistently generating new leads every week, and our team is diligently working on finalizing longer-term vCISO projects with the aim of expanding our team by the year's end.",
          },
          {
            title: "Aurum Fitness, Hadrian, MijnDomein, Simplify Orange",
            description: "Business as usual.",
          },
        ]}
      />
      <QuickUpdate
        company={Company.BRIGHT_MARBLES}
        title=" DM Women’s Race at Ada Ciganlija 🏃‍♀️🏃🏿‍♀️"
        description={
          <div>
            <div>
              Last Sunday (Oct 1), the DM Women’s Race took center stage at Ada
              Ciganlija. This significant event, organized by the Belgrade
              Marathon, witnessed a remarkable turnout of over 2,000
              participants. As the tech partners of the event, we at
              BrightMarbles are proud to have played a role in an event bursting
              with such magnificent energy. ️✨
            </div>
            <div>
              Not to be left out, our BrightMarbles team was well-represented on
              the track. Kudos to our very own Mibsters – Zlata Solarov, Daniela
              Červeni, Kristina Tadić, Anja Jovičin, and Ivana Grbić – who laced
              up their running shoes and took on the 7,7km challenge. Their
              spirit perfectly reflects the talent and passion we champion
              within our ranks. 👟🌟
            </div>
            <div>
              Girls, we’re incredibly proud of you. Let's continue to shine
              brightly in all that we do!
            </div>
          </div>
        }
      />
      {/* <QuickUpdate
        bgColor="white"
        company={Company.BRIGHTLY}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
      /> -->
      <QuickUpdate
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
      />{" "} */}
      {/* <QuickUpdate
        bgColor="blue"
        company={Company.BRIGHT_MARBLES}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
      /> */}
      {/* <QuickUpdate
        bgColor="white"
        company={Company.BRIGHT_MARBLES_MACEDONIA}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
      /> */}
      {/* <QuickUpdate
        bgColor="black"
        company={Company.BRIGHT_MARBLES_NETHERLANDS}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
      /> */}
      <QuickUpdate
        bgColor="black"
        company={Company.UN1QUELY}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description="Exciting news! 🎉 We're thrilled to announce that Stevan Vučić has joined our team as a Penetration Tester. Stevan brings valuable expertise to our cybersecurity efforts, and we're looking forward to the positive impact he'll make. UN1QUELY hits the 2-year milestone! 🎂 A heartfelt thanks to each one of you for your consistent support through this journey. Your belief and trust in us have been a cornerstone of our story. As we look ahead, we're energized to chase bigger dreams and achievements. Thank you for being an integral part of our narrative! "
      />
      <NewsAndEvents
        data={[
          {
            img: "https://brightmarbles.io/wp-content/uploads/2023/09/Krstanovic-Blog-Cover-1.jpg",
            title:
              "Painting Your Flutter App with ‘ThemeData’ and ‘ColorScheme’ Magic (by Marko Krstanović)",
            description: (
              <>
                Have you ever wondered how to seamlessly integrate a refined
                color scheme into your Flutter app? Marko Krstanović takes us on
                an enlightening journey to explore how ‘ThemeData’ can be your
                guiding light in the world of Flutter app design. Marko states
                that ‘ThemeData’ is dynamic and versatile, therefore
                transcending static design and defining the essence of the app’s
                visual identity. ‘ThemeData’, together with the invaluable
                ‘ColorScheme’, crafts an experience that’s both visually
                captivating and consistently coherent.
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/painting-your-flutter-app-with-themedata-and-colorscheme-magic/"
                >
                  Click here to read more
                </a>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2023/09/MicrosoftTeams-image-79-min.png",
            title:
              "Geek Meets Ink: Full-Stack Digital Writers Rewriting the Rules (by Svetlana Kosić)",
            description: (
              <>
                If you assumed that the ‘full-stack’ term is only reserved for
                the techies, think again. In today’s rapidly evolving landscape
                of digital content, writers have undergone a transformation,
                becoming full-stack content creators. Svetlana defines them as
                someone who can handle the full spectrum of digital content, and
                who is always mindful of how their work resonates with both
                algorithms and audiences. Dive into the different facets of
                digital content creation, each with its own distinct approach
                and specific goals and strategies for achieving them.
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/geek-meets-ink-full-stack-digital-writers-rewriting-the-rules/"
                >
                  Click here to read more
                </a>
              </>
            ),
          },
          {
            img: "https://un1quely.com/wp-content/uploads/2023/09/cover-un1.jpg",
            title:
              "Custom Software Solutions: Why a Security-First Approach Matters (by Lazar Vukašinovic)",
            description: (
              <>
                Placing security at the forefront of the software development
                process is becoming essential in today’s rising threat
                landscape. Lazar Vukašinović explores why security-first
                approach is important, especially for decision-makers in tech
                SMEs and startups. He highlights that cyber-attacks can be not
                only expensive for the company, but also cause operational
                disruptions to business processes. Ensuring the security of your
                custom software also protects your brand reputation and give
                your brand a competitive edge in today’s saturated market.
                <a
                  target="_blank"
                  href="https://un1quely.com/why-a-security-first-approach-matters/"
                >
                  Click here to read more
                </a>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2023/09/UX-blog_blog-cover.png",
            title:
              "UX Design: The Binding Tissue Between People and Technology (by Marko Vladušić)",
            description: (
              <>
                Serving as the nexus between innovation and usability, UX design
                humanizes technology, positioning users at the epicenter of the
                design process. Marko Vladušić delves into how UX design ensures
                digital products aren't just functional but also enjoyable and
                intuitive. He emphasizes that, in this approach, technology
                solutions are shaped by users' needs, habits, and goals rather
                than imposing a predefined structure on them. Explore the
                significance of UX design for startups, and understand how BM
                aids customers in their quest to craft an MVP that not only
                works but delights.
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/ux-design-the-binding-tissue-between-people-and-technology/"
                >
                  Click here to read more
                </a>
              </>
            ),
          },
        ]}
      />
      <OpenPositions
        jobPostings={[
          {
            title: "Identity and Access Management Engineer (UN1QUELY)",
            postingUrl:
              "https://bmgh.zohorecruit.eu/jobs/UN1QUELY/36808000002674001/Identity-and-Access-Management-Engineer?source=CareerSite",
          },
          {
            title: "Penetration Tester (UN1QUELY)",
            postingUrl:
              "https://bmgh.zohorecruit.eu/jobs/UN1QUELY/36808000002466166/Penetration-Tester?source=CareerSite",
          },
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
              "https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif",
            fullName: "Radivoje & Martin",
            jobTitle: "Software Engineers",
            description:
              "Marko Krstanović: Radivoje Ostojić and Martin Berger stand out not only for their willingness to assist and guide but also for their remarkable problem-solving skills. They approach problems with a methodical and analytical mindset. Their ability to dissect problems, identify root causes, and implement practical solutions has been a source of inspiration for me. Their presence on our Mobile dev team is a source of inspiration for all of us, and we are fortunate to have them as colleagues.",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*GUt-n3KoqcV7vALZ1Ron-A.png",
            fullName: "Mladen Bojović",
            jobTitle: "Software Engineer",
            description:
              "Dušan Ilić: Mlađa has been amazing. He's been great on the WeaverPeer and MTV projects, and he's also helped others. His skills with Azure Cloud have grown a lot. He's been a team player, making us stronger. Mlađa's coding has saved time on MTV and helped other projects. He's been a big help to Božić and Braca when Vlada was away. Mlađa, you're important to our team. Keep up the good work!",
          },
          {
            imgUrl:
              "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/269935358_106127305273904_74157529001331114_n.png?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=y0CTWzNJHz0AX9puSbk&_nc_ht=scontent.fbeg5-1.fna&oh=00_AfBaV4RRolqKUtB20Yzde8MXtGvuTeoFzf8Os6sYG8o1uQ&oe=652AACFF",
            fullName: "UN1QUELY",
            jobTitle: "Cybersec Team",
            description:
              "Boris Berat: The exceptional UN1QUELY cybersecurity team, led by Branko, is truly one-of-a-kind, and they deserve a massive shoutout. They've been absolutely outstanding, especially during these challenging times. Their dedication and commitment have been off the charts, and they've consistently delivered record-breaking results. Their team spirit, which is at an all-time high, is even more impressive. Seeing their energy and motivation has been a source of inspiration. I want to extend a huge thank you to each and every member of the team. You guys truly rock!",
          },
          // {
          //   imgUrl:
          //     "https://media.licdn.com/dms/image/C4E03AQFmHWKAuQzLNw/profile-displayphoto-shrink_800_800/0/1635939612355?e=1694649600&v=beta&t=smWudPi6uQL58lKTJE1dPR4BRnP6HrA8iav_atD49zQ",
          //   fullName: "Nenad Rakić",
          //   jobTitle: "Software Quality Assurance Engineer",
          //   description:
          //     "Media Monks: Our colleague Nenad Rakić received excellent praise from our client, MediaMonks. He exemplifies all aspects of his work, consistently delivering excellent results. His exceptional skills and positive attitude make him a perfect teammate."
          // },
          // {
          //   imgUrl:
          //     "https://media.licdn.com/dms/image/C5603AQFz2Z_8lO-xdA/profile-displayphoto-shrink_800_800/0/1543964045698?e=1694649600&v=beta&t=KKHCmr2Yg_CdS9AsrmOQLJIgwo5ERJNwUrm4LVjalX8",
          //   fullName: "Ivana Grbić",
          //   jobTitle: "Office Manager",
          //   description:
          //     "Daniela Červeni: Ivana took on the responsibility of organizing the office relocation, and her performance was nothing short of extraordinary. She meticulously oversaw every aspect, ensuring a seamless transition throughout the process. Her tireless dedication and hard work were evident in the successful execution of the relocation."
          // },
          // {
          //   imgUrl:
          //     "https://media.licdn.com/dms/image/C5603AQEGIfH1cdyVjw/profile-displayphoto-shrink_800_800/0/1567535451360?e=1694649600&v=beta&t=HumMkEvcGhnQwYHgyRUGz1dvlWvVIB-M75AS8l_E1tw",
          //   fullName: "Edvin Kerekeš ",
          //   jobTitle: "Software Engineer",
          //   description:
          //     "Tanja Maliković: I have the pleasure of acknowledging and appreciating my colleague for his distinct personality and mind-boggling intellect. He has this uncanny knack for approaching work in the most unusual, yet brilliant, ways. His ability to think outside the box and conjure up innovative solutions is truly astounding."
          // }
        ]}
      />
      <FamilyNews
        title="Congratulations 🎉"
        data={[
          // {
          //   img:
          //     "https://nameitcustomdecor.com.au/cdn/shop/products/IMG_2370.jpg?v=1591945706",
          //   description: (
          //     <>
          //       Join us in extending heartfelt congratulations to our colleague,
          //       Martin Berger, and his wife on the birth of their baby boy,
          //       Konstantin. We hope Konstantin inherits his dad' strength and
          //       resilience. Congratulations to <span> Martin Berger </span>
          //     </>
          //   )
          // },
          {
            img: "https://lilyandwonder.com/cdn/shop/products/Baby-Girl-Disc.jpg?v=1649946496&width=713",
            description: (
              <>
                A hearty congratulations to our colleague, Ivan Čekerevac, on
                the arrival of his baby girl, Dunja! Your new journey into
                parenthood is a beautiful chapter in your life, and we wish for
                your days to be filled with love, laughter, and endless joy as
                you embrace this new adventure. May there be more giggles than
                diapers, and fewer sleepless nights than expected. Cheers to the
                joyous (and hopefully well-rested) moments ahead! 😴🍼🎉
                Congratulations to <span> Ivan Čekerevac </span>
              </>
            ),
          },
          {
            img: "https://hips.hearstapps.com/hmg-prod/images/how-to-grow-your-own-wedding-flowers-1624975513.jpg?crop=0.669xw:1.00xh;0.218xw,0&resize=1200:*",
            description: (
              <>
                Join us in toasting to Jovana Pantić and her partner as they
                embark on this wonderful journey together. Here's to a future
                filled with love, shared laughter, and a lifetime of memories
                worth cherishing. Let's raise our glasses high for their
                picture-perfect new beginning! 💍🥂 Congratulations to{" "}
                <span> Jovana Pantić </span>
              </>
            ),
          },
        ]}
      />
      <Birthdays
        employees={[
          {
            name: "Bojan",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/03/MDJ_0151-copy.png",
          },
          {
            name: "Jasmina",
            imgUrl:
              "https://media.licdn.com/dms/image/C4E03AQGwUx9Tcl7WZQ/profile-displayphoto-shrink_800_800/0/1517727811147?e=1701907200&v=beta&t=rW0QRx_xz1RtTtN705S1ztZ18wcOGN51jmwrNd38fyQ",
          },
          {
            name: "Goran",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*yyQHYGkCgq_0yvifJJLGQg.png",
          },
          {
            name: "Zoran",
            imgUrl:
              "https://media.licdn.com/dms/image/C5603AQFQum1ahpSNfg/profile-displayphoto-shrink_800_800/0/1517706058352?e=1701907200&v=beta&t=ZpEa3SrQS4NIgrQej6AXq9eaS9hlk3KtYLr7LAR7oIM",
          },
          {
            name: "Imre",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/06/DSC0s1058.png",
          },
          {
            name: "Dalibor",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2022/01/Dalibor.png",
          },
          {
            name: "Jovana",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/04/DSC01845-copy.png",
          },
          {
            name: "Aleksandra",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2022/01/Dalibor.png",
          },
          {
            name: "Nikola",
            imgUrl:
              "https://media.licdn.com/dms/image/D5603AQGYL76qm-OowQ/profile-displayphoto-shrink_800_800/0/1682518253085?e=1701907200&v=beta&t=leN7eRnyHOp--aYTkZV4DyUz2PowrWq0yUESeUlzu0w",
          },
          {
            name: "Sanel",
            imgUrl:
              "https://media.licdn.com/dms/image/C4E03AQG4ixGvSdFtjQ/profile-displayphoto-shrink_800_800/0/1652212474361?e=1701907200&v=beta&t=wER2Rr4Q2v8IPgGpgTZWcnsC1cA5IUCxRA7dMkg2eqQ",
          },
          {
            name: "Filip",
            imgUrl:
              "https://media.licdn.com/dms/image/C5603AQEzLZtKomab3w/profile-displayphoto-shrink_800_800/0/1638973861935?e=1701907200&v=beta&t=qNeRrforM4y6v31yAO8c8VaKePW2e3tpmg9dzwUpj5M",
          },
          {
            name: "Mladen",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*GUt-n3KoqcV7vALZ1Ron-A.png",
          },
          {
            name: "Luka",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*1hrQyXLxEwHgtmQ9DZNSog.png",
          },
          {
            name: "Stevan",
            imgUrl:
              "https://media.licdn.com/dms/image/C5603AQErbU8Pgb3OQQ/profile-displayphoto-shrink_800_800/0/1517589218542?e=1701907200&v=beta&t=gkUQ-gagOgwwq76jtZ6uXvNuiuLiZW2yqhev6EN981M",
          },
        ]}
      />
      <Contributions />
      <ThreeColorDivider hideWhite />
    </div>
  );
};
