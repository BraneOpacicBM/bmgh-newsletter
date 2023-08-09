import styles from "./Newsletter.module.scss";
import Header from "../Header/Header";
import ProjectClientSection from "../ProjectClientSection/ProjectClientSection";
import QuickUpdate from "../QuickUpdate/QuickUpdate";
import { Company } from "../../common/enums";
import NewsAndEvents from "../NewsAndEvents/NewsAndEvents";
import OpenPositions from "../OpenPositions/OpenPositions";
import ThreeColorDivider from "../ThreeColorDivider/ThreeColorDivider";
import Colleagues from "../Colleagues/Colleagues";
// import FamilyNews from "../FamilyNews/FamilyNews";
import Birthdays from "../Birthdays/Birthdays";
import Contributions from "../Contribution/Contribution";
import useVerify from "../../hooks/useVerify";

export const Newsletter = () => {
  const { loading, isVerified } = useVerify()

  if (loading || !isVerified) return null

  return (
    <div className={styles.newsletter_body}>
      <Header
        title="July Finance &amp; Project Update"
        leftParagraphs={[
          {
            title: "Bench Strength:",
            description:
              "Since July 1st, we've managed to reduce our bench strength from 23 down to 20 team members. It's an encouraging step, particularly when one factors in the typical summer slowdown. These reductions are a testament to our adaptive strategies and the team's hard work. As we see business operations gain traction, we're confident in our ability to continue this positive trajectory and optimize our resources even further in the upcoming months. "
          }
        ]}
        rightParagraphs={[
          {
            title: "Profit:",
            description:
              "We're projecting a net profit margin of approximately 8%. This is noteworthy, marking the best performance we've registered since the beginning of the year. Every percentage point is a collective achievement, and this one's no exception."
          },
          {
            title: "Cash Flow:",
            description:
              "Compared to June, we've already seen some improvement in our cash flow, but a substantial change is set to occur in August, once we collect everything that’s been invoiced."
          },
          {
            description:
              "These incremental gains underscore the value of staying proactive, adaptable, and cohesive as a team. Let's continue to approach the future with informed optimism and dedication!"
          }
        ]}
      />
      <ProjectClientSection
        leftParagraphs={[
          {
            title: "Adrian",
            description:
              "We've wrapped up Phase 1 and are now waiting to hear from the client. For now, there are no new updates on the support side."
          },
          {
            title: "Anycoin",
            description:
              "Good news here! Two of our team members are on the Anycoin project, and the feedback has been positive. We're hopeful that our team might grow on this one soon."
          },
          {
            title: "Bielik",
            description:
              "Bielik emerges as an exciting venture in the realm of crypto brokerage, specifically tailored for the Polish market. Interesting to note, some ex (and potentially soon-to-be ex) LiteBit engineers played pivotal roles in the startup's inception. Our engagement kickstarts with the MVP phase on August 15th, deploying two of our skilled Flutter developers for a span of at least 3 months. After this phase, we'll evaluate the roadmap ahead and decide if we'll continue cooperation."
          },
          {
            title: "Carna",
            description:
              "The Carna team is thrilled to announce that we are in the final stages of successfully completing the first release of the Carna Platform. With meticulous planning and dedication, the platform is gradually being prepared for the launch of its first two official projects. The first project is a pioneering initiative for population health screening in Cameroon, specifically targeting chronic kidney diseases. This pilot project will involve approximately 500 patients and will be conducted at two separate testing locations within Cameroon. The experience and insights gained from this project will be instrumental in shaping our future initiatives. The second project represents a significantly larger effort compared to the Cameroon initiative. It focuses on chronic kidney disease screening in Bermuda. The strategic approach and advanced technology implemented will serve as a testament to the capabilities of the Carna Platform. The successful launch of these projects will set the stage for upcoming engagements in Serbia, Australia, and the United Arab Emirates. In the coming weeks, we will witness the Carna Platform in action for the first time in, executing these first official projects for population health screening."
          },
          {
            title: "Ethiks.ai",
            description:
              "Exciting developments with Ethiks.ai! Thanks to the quality and professionalism we've consistently showcased, they've handed us a new challenge. We're now on board to produce four videos and several blog articles to boost their marketing. This renewed trust signifies not just their satisfaction but also hints at deeper collaboration on the horizon. If all goes well, we could soon become an integral part of their entire marketing engine."
          },
          {
            title: "Greenlite",
            description:
              "In the past two months, we've been working on a major overhaul of the subscription structure of the application. We completed these efforts with a major new release of the app, introducing a free tier, and allowing users to create a fixed number of free projects to explore the platform and everything it offers! We also had a new addition from BrightMarbles, Desko Sekulović, who joined us on the 17th of July and who is already contributing to the project. Lastly, we are currently in the middle of planning the next bigger initiatives for Greenlite that will be the focus of the 3rd quarter, and we are looking forward to bringing new exciting features to Greenlite customers."
          },
          {
            title: "HelloAgain",
            description:
              "We're making solid strides with HelloAgain. Proud to share that we've onboarded our target of five clients, all of whom are seamlessly integrated and actively using our product. The development train is chugging along nicely, with everything progressing as planned."
          },
          {
            title: "Intelliya",
            description:
              "A fresh challenge is on our plate. We've embarked on a month-long project to transition an on-prem app in K8s to Azure and streamline environment provisioning with Terraform. It's a tight timeline, but we're up for it!"
          },
          {
            title: "LiteBit",
            description:
              "A chapter comes to a close as we wrap up our development and support tasks for LiteBit by August 31st. A big shoutout to our engineers who've worked diligently on this project."
          },
          {
            title: "MTV",
            description:
              "The first part of the project is successfully finished, and we're now focused on delivering the additional features that have been requested. Kudos to the team for their consistent efforts."
          }
        ]}
        rightParagraphs={[
          {
            title: "MTV SysAdmin",
            description:
              "We've hit our targets, and the client's pleased. It seems we've struck the right balance in our operations, but as always, we'll keep a close eye to ensure we maintain this rhythm."
          },
          {
            title: "Penetration Testing projects",
            description:
              "We have completed 24 penetration tests through this partnership in June and July and the demand keeps growing. Projects vary everything from fintech, healthtech, insurance, HR, e-commerce and general SaaS. Due to high demand, we have increased our Security team by 4 new members that start in August. On top, we are expanding the services we offer to Thoropass clients and have workshops scheduled with their CSM teams to train them on selling our other security services. Hero Health - We have completed a very challenging and engaging pentest project for a US healthcare company that manufactures devices for dispensing medication to patients according to their prescriptions. EyeSee - We have completed a very interesting pentest project for a big marketing product company that developed Eye tracking software as a unique behavioral research method measuring eye gaze when performing user research."
          },
          {
            title: "Publicis",
            description:
              "Sadly, the Publicis project has hit an unforeseen roadblock due to the ongoing economic crisis. Because of the current economic challenges, the end client, Holcim, had some budget limitations and opted not to keep the contract going with Publicis. It's important to highlight that our client was quite pleased with the quality of our work, and we want to genuinely thank the team for their hard work and contributions to the project."
          },
          {
            title: "Raven",
            description:
              "The project is proceeding according to plan, with all tasks and milestones being met. We’ve also made some tweaks to the team lineup, welcoming new members who've quickly found their stride and are adding value to the project. Development-wise, all systems are a go, with every planned feature being rolled out as planned."
          },
          {
            title: "Security Operations projects",
            description:
              "Exciting times lie ahead for our SecOps team. We are in the final stages of winning a huge SecOps deal in the DACH region with a multiyear contract and the opportunity to grow our SecOps team further. We are collaborating with Ernst Young on bidding on a big Security Operations Center project in the region. This service is gaining traction month over month and the expected expansion of the team in the coming months."
          },
          {
            title: "Simplify Orange",
            description:
              "All's good on the Simplify Orange front. Our client has given the thumbs up, expressing satisfaction with our offerings."
          },
          {
            title: "Toogethr",
            description:
              "At Toogethr, we are actively engaged in the development of an innovative smart parking system. In recent times, we've ramped up thesmart parking system by adding group bookings and catering to the eco-conscious with Electric Vehicle chargers. Our upcoming plans revolve around the ambitious goal of significantly improving gate management at the parking lots. Simultaneously, the development of the cycling app represents our dedication to fostering sustainable transportation alternatives for a cleaner environment."
          },
          {
            title: "vCISO projects and Partnership updates",
            description:
              "We’re making strides with a potential upsell of our pentest projects, thanks to forging bonds with two leading US Compliance Management entities. Our collaboration with Thoropass partner is reaching new levels every day and continuously expanding. In addition to being their exclusive partner for pentest services, we have now expanded our collaboration, and our other services are being promoted on their website as well and directly pitched to their pool of over 6000 customers. Furthermore, our team has been consistently growing, indicating the high-quality collaboration that benefits both parties. Another key strategic partnership was sealed last week with Secureframe, a leader in compliance management, where all security services and development services shall be offered to their existing pool of over 5000 customers."
          },
          {
            title:
              "26bits (Porsche), Aurum Fitness, Concorde Health, Crayon STADA, Fireside, Hadrian, MijnDomein, NAQ, Secfix",
            description: "Business as usual."
          }
        ]}
      />
      {/* <QuickUpdate
        company={Company.BRIGHT_MARBLES}
        title="We Welcome You All to Our New Office Space in Novi Sad"
        description={
          <div>
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
          </div>
        } */}
      {/* /> */}
      <QuickUpdate
        bgColor="black"
        company={Company.UN1QUELY}
        title="Welcoming New Talent to Our Pentest Team"
        description="A warm shoutout to our newest addition, Strahinja Vuksanović, joining us as a Junior Project Manager! With fresh insights and energy, Strahinja will undoubtedly benefit our projects. We look forward to collaborating with him and witnessing his contributions to our collective success. Together, we'll achieve great things! Welcome aboard, Strahinja! 🚀"
      />
      <QuickUpdate
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
        }
      />
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
              "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ujJUC6tVDj9PHzPbAfKNAA.jpeg",
            title:
              "Exploring Python API Testing and the Power of Locust (by Bojan Popović) ",
            description: (
              <>
                Dive into the realm of software development and one can't miss
                the significance of API testing. In this compelling write-up,
                Bojan Popović demystifies Python API testing and highlights its
                key benefits. He also introduces us to Locust's capabilities for
                effective load testing, ensuring our apps are resilient and
                ready to scale. Eager to boost your skills? Hop in for a ride
                into the intricacies of API testing!
                <a
                  target="_blank"
                  href="https://medium.com/@un1quely/exploring-python-api-testing-and-the-power-of-locust-87ccf38e2a0a"
                >
                  Click here to read more
                </a>
              </>
            )
          },
          {
            img:
              "https://brightmarbles.io/wp-content/uploads/2023/07/Angular-16-Signals-A-Guide-to-Boost-Your-Angular-Development-Skills-.png",
            title:
              "Angular 16 Signals: A Guide to Boost Your Angular Development Skills (by Kristina Tadić)",
            description: (
              <>
                Our brilliant colleague, Kristina Tadić, introduces us to the
                latest in Angular: the Angular 16 Signals. This innovative
                feature takes reactive programming a notch higher. With each
                release since Angular 14, we've seen impressive additions, and
                Angular 16 is no different. Let’s journey together into the
                nuances of Angular 16 Signals and discover how they can
                revolutionize our application development.
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/angular-16-signals/"
                >
                  Click here to read more
                </a>
              </>
            )
          },
          {
            img:
              "https://brightmarbles.io/wp-content/uploads/2023/07/image.png",
            title:
              "Understanding the Differences: MVC vs. MVVM (by Marko Krstanović)",
            description: (
              <>
                Marko Krstanović's insightful piece dives into the world of
                software architecture. He shines a spotlight on the importance
                of choosing the right pattern to craft scalable, maintainable,
                and easily testable applications. With a focus on the popular
                MVC and MVVM patterns, Marko outlines their distinct features,
                strengths, and best-use scenarios. If you're aiming for a solid
                grounding in these patterns, this read is a must.
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/differences-between-mvc-and-mvvm/"
                >
                  Click here to read more
                </a>
              </>
            )
          },
          {
            img:
              "https://brightmarbles.io/wp-content/uploads/2023/07/image-1-1024x683.jpeg",
            title:
              "The Mibsters' Culture Manifesto: Excellence – The Driving Force Behind Our Company's Growth (by Svetlana Kosić)",
            description: (
              <>
                In this thought-provoking piece, our colleague Svetlana Kosić
                takes us on a journey through the heart of our company's culture
                and uncovers the secret sauce that propels us forward –
                Excellence! 💪🏼 Prepare to be inspired as she unravels the
                powerful impact this mindset has on our growth and success.
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/company-culture-excellence/"
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
          }
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
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*jsOTei6YBqvOwYT7LYo6gQ.png",
            fullName: "Carna Team",
            jobTitle: "Everybody",
            description:
              "Darko Kovač: Hats off to the Carna team for their remarkable performance during the Feature Freeze last month! Their dedication and unwavering commitment to excellence are truly impressive, and their commitment to delivering a top-notch product has not gone unnoticed. Keep up the fantastic work!"
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/06/DSC01ss190.png",
            fullName: "Milana Miković",
            jobTitle: "Software Engineer",
            description:
              "Oliver Šipoš: Milana Miković puts an excellent effort into the Concorde Health project. Milana’s dedication and hard work have been exemplary, especially her adept handling of new technologies and concepts, such as GraphQL and Event Sourcing. Her ability to grasp and apply these innovative ideas to the project has been a significant driving force behind its success."
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/06/DSC01206-copy.png",
            fullName: "Bojana Šatara Anić",
            jobTitle: "Test Engineer",
            description:
              "Milan Stančić: Bojana's dedication to her job is truly remarkable, and it's evident in every aspect of her work. It's not just about completing tasks for her; she genuinely cares about the software she's working on and the impact it will have on users. One of the things that make Bojana stand out is her openness and honesty. Her transparency creates a culture of trust and open communication within the team."
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2022/01/Aleksandar.png",
            fullName: "Aleksandar Beronja",
            jobTitle: "Software Engineer",
            description:
              "Brane Opačić: Aleksandar Beronja’s teamwork and unwavering support when it comes to front-end technologies is exceptional. His willingness to lend a helping hand speaks volumes about his commitment to fostering a collaborative and productive work environment. Aleksandar’s positive attitude and approachable nature make it easy for others to seek help and feel supported."
          },
          {
            imgUrl:
              "https://media.licdn.com/dms/image/D5603AQFptSkC5dMP7g/profile-displayphoto-shrink_800_800/0/1683661005106?e=1696464000&v=beta&t=eE4xBMtqOOD-3B76DvkhLTNBQ1iEul7FOHqHclCxzTE",
            fullName: "Viktorija Simonoska",
            jobTitle: "UI/UX Designer",
            description:
              "Dunja Ibročić: Kudos to Viktorija! Her impressive design skills not only create stunning and innovative design, but also reflect the remarkable ability to attentively follow and understand client's vision, ideas and needs. It is a pleasure to work with such a creative and detail-oriented professional, and truly a team player."
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*os2anKuGGtMuVSSgj6xgig.png",
            fullName: "Legal/Finance Team",
            jobTitle: "Milica & Aleksandra",
            description:
              "Suzana Vasić: I would like to extend my heartfelt gratitude to Aleksandra and Milica for their unwavering commitment to raising the work of our department to new heights each and every day. Their dedication and tireless efforts have not only improved our team's performance but have also set a remarkable standard for excellence. There is no challenge we cannot conquer together!"
          },
          {
            imgUrl:
              "https://media.licdn.com/dms/image/C4E03AQGyKesrI1pONQ/profile-displayphoto-shrink_800_800/0/1578670511770?e=1696464000&v=beta&t=g_74BB14lgiSoCajTfIpe-HfOBgVziV71qv8kNIgVP0",
            fullName: "Zoran Stanimirović",
            jobTitle: "Android Developer",
            description:
              "Radivoje Ostojić: Zoran Stanimirovic’s contributions to both the client project and the tech office project are significant! His hard work and dedication have been invaluable in achieving the goals we set at the beginning of the year. The goal is to create a project in Android according to best practices that can be used for all future projects in the company that will be written from scratch, and Zoran’s expertise and commitment have been nothing short of commendable."
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*IbYAwu5FkCnG7MXq-6VW4w.png",
            fullName: "Milena Petrović",
            jobTitle: "Project Manager",
            description:
              "Mirjana Parpura Đorđević: As the heart of the MTV Payment project, in her role as a Project Manager Milena ensures flawless client communication and navigates any tricky requirements. Beyond her project skills, she's our administrative hero in Niš, sorting out HR matters, and acting as the perfect bridge to the vibrant Niš tech scene. Plus, she orchestrated our new office setup to perfection. A hearty thank you, Milena – you're a true gem in our team!"
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*cMMtR3T5V4PkYno85tDRIg.png",
            fullName: "Bratislav Živaljević",
            jobTitle: "DevOps Engineer",
            description:
              "Sanel Jovanović: Bratislav took on the Seclo project with unparalleled speed and efficiency, propelling the team and the entire project to a swift completion. He consistently exceeds expectations, even while multitasking. When CloudFormation required a revamp for migration to a new account, Bratislav rose to the challenge. Despite unexpected hurdles with Cognito, he masterfully crafted a solution, turning what seemed impossible into a straightforward task. A big applause for Bratislav's unmatched dedication and brilliance!"
          }
        ]}
      />
      {/* <FamilyNews
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
      /> */}
      <Birthdays
        employees={[
          {
            name: "Bojan",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*mOmqKit7yls285xokIB1cw.png"
          },
          {
            name: "Dragan",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*oH_yaOVa-98cmaiKfnUd1Q.png"
          },
          {
            name: "Biljana",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*a6b-Febu7qjpctNvBlFohw.png"
          },
          {
            name: "Miroslava",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/06/DSC0109ss4.png"
          },
          {
            name: "Miroslav",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*nKsXsFjuN7PY3NRrx77RHA.png"
          },
          {
            name: "Anastasia",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/04/Anastasia-2-Sajt-1.png"
          },
          {
            name: "Goran",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2022/04/Goran-Breberina-site.png"
          },
          {
            name: "Dunja",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/03/DSC00s454.png"
          },
          {
            name: "Nikola",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*TwOgkDGdhOKJSiPKXhUqbw.png"
          },
          {
            name: "Vladan",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*hNgviC6QIwKf4rSHfesVAQ.png"
          },
          {
            name: "Lazar",
            imgUrl:
              "https://media.licdn.com/dms/image/C5603AQE1wnWij3DeXA/profile-displayphoto-shrink_800_800/0/1625768665853?e=1696464000&v=beta&t=yspv7OZ1p6yqJnO7zBRv9aLVvmE6rPYZkwXoLSmzFiU"
          },
          {
            name: "Pavle",
            imgUrl:
              "https://media.licdn.com/dms/image/D4D03AQEeRojESA49JA/profile-displayphoto-shrink_800_800/0/1667220488329?e=1696464000&v=beta&t=gOITu3jn23QJOOsOidKL0XuuWoSIGebfsq_BXLu9lno"
          },
          {
            name: "Bojan",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2022/04/DSC0143s0-copy.png"
          },
          {
            name: "Marko",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/04/DSC002s70.png"
          },
          {
            name: "Zoran",
            imgUrl:
              "https://media.licdn.com/dms/image/C4E03AQGyKesrI1pONQ/profile-displayphoto-shrink_800_800/0/1578670511770?e=1696464000&v=beta&t=g_74BB14lgiSoCajTfIpe-HfOBgVziV71qv8kNIgVP0"
          }
        ]}
      />
      <Contributions />
      <ThreeColorDivider hideWhite />
    </div>
  );
};
