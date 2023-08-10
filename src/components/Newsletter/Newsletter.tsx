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
              "Since July 1st, we've reduced our bench strength from 23 to 20 members. This is a positive move, especially considering the usual summer slowdown. It highlights the success of our strategic shifts and the team's unwavering dedication. As business conditions get better, we're committed to further optimizing our resources."
          }
        ]}
        rightParagraphs={[
          {
            title: "Profit:",
            description:
              "Our current projections show a net profit margin of approximately 8%. This represents our strongest performance for the year thus far. It's important to recognize that this progress is a result of our team's collective efforts and dedication."
          },
          {
            title: "Cash Flow:",
            description:
              "Compared to June, we've already seen some improvement in our cash flow, but a substantial change is set to occur in August, once we collect everything that’s been invoiced."
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
              "Bielik has positioned itself as a promising entrant in the crypto brokerage landscape, specifically tailored for the Polish market. Interestingly, some ex (and potentially soon-to-be ex) LiteBit engineers played pivotal roles in the foundation of the startup. Among their lineup is Marko Reljić, a former member of our ranks. Our engagement kickstarts with the MVP phase on August 15th, deploying two of our skilled Flutter developers for at least 3 months. After this phase, we'll evaluate the roadmap and decide if we'll continue cooperation."
          },
          {
            title: "Carna",
            description:
              "We’re in the final stages of successfully completing the first release of the Carna Platform. The platform is gradually being prepared for the launch of its first two official projects. T First up is our pilot health screening in Cameroon, focusing on chronic kidney diseases. This project will reach about 500 patients across two different locations in Cameroon. The knowledge we gather from this will greatly influence our next steps. Our second project, set in Bermuda, takes on a bigger challenge than the Cameroon one. It's also centered on chronic kidney disease screening, and with our strategic methods and cutting-edge tech, we aim to showcase what the Carna Platform truly has to offer. The successful launch of these projects will set the stage for upcoming engagements in Serbia, Australia, and the United Arab Emirates. In the coming weeks, we will witness the Carna Platform in action for the first time in, executing these first official projects for population health screening."
          },
          {
            title: "Ethiks.ai",
            description:
              "Exciting developments with Ethiks.ai! Our hard work and professionalism have paid off, earning us a new assignment. We're now tasked with producing four videos and a series of blog articles to boost their marketing. If all goes well, we could soon become an integral part of their entire marketing engine."
          },
          {
            title: "GreenLite",
            description:
              "Over the past two months, we've undertaken a significant revamp of the application's subscription structure. This culminated in a major new app release, introducing a free tier. Now, users can set up a limited number of projects at no cost, giving them a taste of all the platform's features! On the personnel front, we welcomed Desko Sekulović from Novi Sad on July 17th. He's already making valuable contributions to the project. Currently, we're mapping out larger initiatives for GreenLite set to be our Q3 focus. We're eager to roll out more exciting features for our GreenLite users."
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
              "The project is proceeding according to plan, with all tasks and milestones being met. We’ve also made some tweaks to the team lineup, welcoming new members who've quickly found their stride and are adding value to the project. Development-wise, all systems are a go, with every planned feature being rolled out as intended."
          },
          {
            title: "Security Operations projects",
            description:
              "Exciting opportunities are on the horizon for our SecOps team as we make strides into the DACH market in the autonomous transportation sector. Furthermore, we're collaborating with Ernst & Young to bid on a big Security Operations Center project in the region. As this service continues to gain momentum month by month, we're anticipating the expansion of our team in the near future."
          },
          {
            title: "Simplify Orange",
            description:
              "All's good on the Simplify Orange front. Our client has given the thumbs up, expressing satisfaction with our services."
          },
          {
            title: "Toogethr",
            description:
              "At Toogethr, we are engaged in the development of an innovative smart parking system. Recently, we've boosted the system by introducing group bookings and adding Electric Vehicle chargers for the eco-conscious. Our next steps focus on improving gate management at the parking lots. At the same time, we're developing a cycling app, showing our commitment to sustainable transport for a greener future."
          },
          {
            title: "vCISO projects and Partnership updates",
            description:
              "We're advancing with a potential upsell of our pentest projects, all thanks to new partnerships with two top US Compliance Management companies. Our work with Thoropass is deepening daily and keeps growing. Besides being their go-to partner for pentest services, our other services are now featured on their site and pitched to their vast 6000-customer base. Our team's growth reflects this strong, mutually beneficial collaboration. We also recently secured a strategic partnership with Secureframe, a leading name in compliance management. We'll be offering all security and development services to their existing 5000+ customers."
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
        } 
      />*/}
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
              "Darko Kovač: Kudos to the Carna team for their exceptional performance during last month's Feature Freeze! Their dedication to excellence and commitment to delivering a top-notch product have truly stood out. Keep up the outstanding work!"
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/06/DSC01ss190.png",
            fullName: "Milana Miković",
            jobTitle: "Software Engineer",
            description:
              "Oliver Šipoš: Milana Miković has shown outstanding effort on the Concorde Health project. Her dedication and exemplary work ethic, particularly in mastering new technologies and concepts like GraphQL and Event Sourcing, have been instrumental. Milana's aptitude for understanding and applying these innovations has significantly contributed to the project's success."
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
              "Brane Opačić: Aleksandar Beronja’s teamwork and support when it comes to front-end technologies is exceptional. His willingness to lend a helping hand speaks volumes about his commitment to fostering a collaborative and productive work environment. Aleksandar’s positive attitude and approachable nature make it easy for others to seek help and feel supported."
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:720/format:webp/1*QjxoKPpfrOxungJwxR2ajQ.jpeg",
            fullName: "Viktorija Simonoska",
            jobTitle: "UI/UX Designer",
            description:
              "Dunja Ibročić: Kudos to Viktorija for her consistently strong design work. She has a genuine talent for understanding a client's vision and translating it into practical yet innovative designs. Her attention to detail and dedication makes collaboration smooth and productive. It's clear she's not just a great designer but an invaluable team member too."
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*os2anKuGGtMuVSSgj6xgig.png",
            fullName: "Legal/Finance Team",
            jobTitle: "Milica & Aleksandra",
            description:
              "Suzana Vasić: I would like to extend my heartfelt gratitude to Aleksandra and Milica for their commitment to raising the work of our department to new heights each and every day. Their dedication and tireless efforts have not only improved our team's performance but have also set a remarkable standard for excellence. There is no challenge we cannot conquer together!"
          },
          {
            imgUrl:
              "https://media.licdn.com/dms/image/C4E03AQGyKesrI1pONQ/profile-displayphoto-shrink_800_800/0/1578670511770?e=1696464000&v=beta&t=g_74BB14lgiSoCajTfIpe-HfOBgVziV71qv8kNIgVP0",
            fullName: "Zoran Stanimirović",
            jobTitle: "Android Developer",
            description:
              "Radivoje Ostojić: Zoran Stanimirovic has been instrumental in driving both the client and tech office projects forward. His consistent efforts and commitment are key to hitting our targets set earlier this year. With the aim of developing an Android project grounded in best practices, one that can be used for all future projects in the company that will be written from scratch, Zoran's skills and dedication stand out."
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*IbYAwu5FkCnG7MXq-6VW4w.png",
            fullName: "Milena Petrović",
            jobTitle: "Project Manager",
            description:
              "Mirjana Parpura Đorđević: Milena is truly the backbone of the MTV Payment project. As the Project Manager, she excels in client interactions and skillfully handles complex requirements. But her impact doesn't stop there. In Niš, she takes on crucial administrative tasks, smoothly handles HR concerns, and connects us to the lively tech community. And let's not forget the amazing job she did setting up our new office. In short, she's an invaluable asset to our team!"
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
