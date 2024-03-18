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
import HeroImage from "../HeroImage/HeroImage";

export const Newsletter = () => {
  const { loading, isVerified } = useVerify();

  if (loading || !isVerified) return null;

  return (
    <div className={styles.newsletter_body}>
      <Header
        title="February Company Update"
        leftParagraphs={[
          {
            title: "Bench Strength:",
            description:
              "We currently have 15 employees on the bench, with the majority actively involved in existing projects, providing support to colleagues and ensuring client satisfaction remains high. W When we started sharing company updates through our newsletter in June last year, we had 33 employees on the bench. Over the last 9 months, we've managed to reduce this number by more than half. As we continue to secure new projects, we're also beginning to expand our team, anticipating the addition of 4 new employees by mid-April. One of them, Igor Trifunović, has already come on board.",
          },
        ]}
        rightParagraphs={[
          {
            title: "Profit:",
            description:
              "Despite the traditionally weak performance in January, our profit in February increased by 33%. While this is encouraging in terms of growth, the total profit isn't sufficient for operations to be comfortable without a careful watch over our expenditure.",
          },
          {
            title: "Cash Flow:",
            description:
              "The situation with cash flow mirrors that of our profit – despite seeing an improvement from January, it's crucial that we keep a close eye on our expenditures to maintain a healthy financial status.",
          },
        ]}
      />
      <ProjectClientSection
        leftParagraphs={[
          {
            title: "Adriaan",
            description:
              "As announced in the previous newsletter, we have resumed our collaboration with Adriaan on the second phase of developing a web application for the cultivation and use of marijuana. Additionally, work is underway on redesigning the mobile app. The team has been formed, and the design phase is nearly complete. The project will soon move on to the development phase.",
          },
          {
            title: "Anycoin",
            description:
              "The team is starting work on the new application, and colleague Goran Simić is part of the team for the application - before starting work, it is necessary to prepare the API that the application will use. Bitcoin is again at a new record-high price.",
          },
          {
            title: "Anyone",
            description:
              "In the last period, our team expanded and Nenad Stojković joined the team. We focused on fine-tuning our product objectives. This month, we've maintained the same momentum in our project work.",
          },
          {
            title: "Bielik",
            description:
              "The development of the application is complete, and it has been tested. Currently, it is undergoing client review, and once the necessary adjustments are made, the application will be released. This marks the conclusion of our collaboration with Bielik, which we expect to be by the end of March.",
          },
          {
            title: "Carna",
            description:
              "Starting next week, the second screening project for the Cameroon population on chronic kidney disease will begin. This pilot scientific project aims to serve as a Proof of Concept for the Ministry of Health in Cameroon, encouraging them to adopt and include in their budget the screening of the entire population over the next 10 years. This holds significant importance, given Cameroon's underserved population, where a considerable number of individuals lack adequate access to healthcare. Congratulations to the entire team for their efforts in this endeavor!",
          },
          {
            title: "Concorde Health",
            description:
              "The MVP phase of the project is wrapping up, and the client will begin sales soon. In relation to this, we are pausing our collaboration with the client as active development halts.",
          },
          {
            title: "Costa Coffee",
            description:
              "Approaching the Q2 quarterly planning, the team is in the final stages of completing the tasks associated with their planned digital transformation, which will include numerous changes to the existing application.",
          },
          {
            title: "Crayon",
            description:
              "We've received two new short-term DevOps projects through our partner, Crayon: Project Zepter: This involves redesigning their AWS infrastructure and transitioning from vertical to horizontal scaling logic. Rather than purchasing costly machines to address performance issues, our goal is to implement ALB and tailor the system usage accordingly. The project is estimated to last 1.5 months. Upon successful completion, there's potential for a subsequent long-term project. Project OTP: This is a one-month endeavor focused on rectifying issues in their Terraform code and integrating new modules into their Azure tenant. ",
          },
          {
            title: "Greenlite",
            description:
              "Since the last update, the BM team has managed to release several sets of improvements and new features, mainly focused on the core pdf review tool. With the latest release at the beginning of March, the product team also started onboarding new end-users who will start using the tool to conduct additional reviews. The goal is for the entire team to gather feedback on the newly implemented features to use as a guide for prioritizing future PDF tool work. In the meantime, the BM team is going to continue with the remainder of the planned improvements, with the difference that this time around the team might include work on the customer-facing project dashboard.",
          },
          {
            title: "Hadrian",
            description:
              "The Hadrian team is currently working on implementing new features and adding sorting/filtering options where they are missing in the application. Additionally, the team is focusing on enhancing the internal admin portal. Hadrian is expanding its team and is actively seeking profiles such as DevOps and backend engineers. Several of our colleagues are being considered for these positions, and we hope that our team will grow as well. Furthermore, we have established collaboration with Hadrian regarding cybersecurity testing, where our team is diligently working on identifying vulnerabilities in the system. ",
          },
        ]}
        rightParagraphs={[
          {
            title: "MijnDomein",
            description:
              "In 2024, MijnDomein is expanding its team by welcoming two new members from BrightMarbles. Kristina Tadic is joining the front-end-oriented team to support MijnDomein, while Vladimir Djurdjevic will contribute his expertise in a more backend-oriented capacity. Over the past 2-3 months, alongside our daily tasks, we collaborated with MijnDomein's development department to initiate some changes in our working methods. Recognizing our capabilities, our team members have selected us as candidates to lead specific features, granting us the responsibility and ownership of the role of feature lead.",
          },
          {
            title: "MijnDomein",
            description:
              "The MijnDomein team is currently participating in an on-site gathering that spans an entire week. This is an exciting opportunity for the team to collaborate, learn, and grow together. One of the key highlights of this visit is a special DevOps assembly that we've organized. This event brings together colleagues from the development, operations, and various other departments, encouraging interdisciplinary dialogue and collaboration. This unique gathering is not just about work – it also includes team-building activities designed to foster camaraderie, boost morale, and strengthen our collective spirit.",
          },
          {
            title: "MTV SysAdmin",
            description:
              "The project is finished, and we’ve performed a handover to the client.",
          },
          {
            title: "NAQ",
            description:
              "With NAQ, our collaboration continues as usual, with regular development of the application ongoing. At the end of last month, the team was downscaled by one person.",
          },
          {
            title: "Penetration Testing projects",
            description:
              "There is a slow start for pentest projects at the beginning of each year (standard behavior) and, for us, January and February were the two months where number of pentest projects was lower than our average throughout the year, but we already have a booked out March and many new projects coming up after that, from our partner channels, upsells and direct sales. The team is as amazing as ever!",
          },
          {
            title: "Raven",
            description:
              "We completed the single send redesign project, implemented extended verification protocols, and are currently testing and preparing for the March newsletter. Filip Savić joined the project.",
          },
          {
            title: "Security Operations projects",
            description:
              "A lot of interest has been generated for big prospects in Germany and Switzerland for our SecOps services, we are currently negotiating multiple deals and expect expansion of this team soon.",
          },
          {
            title: "Toogethr Parking & Drive",
            description:
              "The Toogethr team is busy with new features and has a lot on their plate. They are planning to develop a mobile application, as well as Toogethr in a Box, which aims to provide a simplified version of integration with parking systems. These are certainly topics we will inform you about in the next newsletter. The primary focus in the near future is on creating a payment system for parking, on which the team is heavily engaged. ",
          },
          {
            title: "Toogethr Parking & Drive",
            description:
              "The Toogethr team is busy with new features and has a lot on their plate. They are planning to develop a mobile application, as well as Toogethr in a Box, which aims to provide a simplified version of integration with parking systems. These are certainly topics we will inform you about in the next newsletter. The primary focus in the near future is on creating a payment system for parking, on which the team is heavily engaged. ",
          },
          {
            title: "vCISO projects and Partnership updates",
            description:
              "We are talking to a few prospects in the Netherlands interested in long term project engagement. As for our partnerships, we are accelerating the expansion of our partner network to diversify our lead generation and increase sales through partnerships. New deal signed with MJD Associated from US.",
          },
          {
            title: "Zein",
            description:
              "We started working on a new project on February 12th, it’s an educational web application designed for parents and teachers to pose questions or address concerns regarding parenting, teaching, or interacting with children. Subsequently, users will receive responses from Robbie Zein, an expert in educating and raising children of various ages.",
          },
          {
            title: "Simplify Orange",
            description: "Business as usual.",
          },
          {
            title: "Aurum Fitness, Bielik, MTV  ",
            description: "Projects are finished.",
          },
        ]}
      />
      <QuickUpdate
        company={Company.UN1QUELY}
        title="UN1QUELY's Cybersecurity Initiatives: Empowering Future Generations and Fostering Collaboration"
        description={
          <div>
            <div>
              UN1QUELY has started an exciting collaboration with the University
              of Montenegro. 🎓 Branko Džakula will be sharing his expertise in
              cybersecurity with final-year Mathematical and Electronic
              faculties students. Additionally, a similar initiative is in the
              works for the University of Kragujevac.
            </div>
            <div>
              In the cybersecurity arena, we've wrapped up an exciting contest
              for high school students in Montenegro, orchestrated with the
              Amplitudo Academy and backed by the European Union. Three teams
              came out on top, showing us that the future’s bright with the new
              generation’s talent. 🌟
            </div>
            <div>
              Stateside, Damjan Cvetanović, Nebojša Lalić, and Branko Džakula
              have been soaking up knowledge at various conferences and
              networking gigs in the USA, and we're eager to hear their insights
              in the next newsletter.
            </div>
            <div>
              For Women's History Month, we’ll shine a light on diversity in
              cybersecurity with a standout event. ✨ A big thank you to Damjan
              Cvetanović, Branko Džakula, and Sanja Kekić from Women4Cyber
              Serbia for organizing this live event that will uncover numerous
              career opportunities in the field of cybersecurity for women
              studying technical sciences in Novi Sad.
            </div>
            <div>
              Finally, our colleague Filip Kecman took part in a panel
              discussion titled "Cyber Paths for Women," organized by DAI,
              USAID, and the Serbian Chamber of Commerce. A key highlight was
              Filip's presentation of a lecture plan set to be rolled out in
              Kragujevac. This initiative offered a tangible strategy during the
              event, enhancing the partnership between public and private
              sectors in cybersecurity, a crucial step toward addressing one of
              the field's major challenges.
            </div>
          </div>
        }
      />
      <QuickUpdate
        bgColor="white"
        company={Company.BRIGHT_MARBLES}
        title="Celebrating Team Wins, Women's Empowerment, and New Beginnings"
        description="As we waved goodbye to February and welcomed March, we were treated to some lovely weather and fun events. One of the highlights was our table football tournament. It was great to see new members from the Cybersecurity department joining in alongside our regular players. We're rooting for all of you and can't wait to see you play next year. Big congrats to our winners, Milica Stanković and Marko Krstanović – Marko, snagging that title for the second time is no small feat! 🏆 March holds special significance for us as we celebrate International Women's Day and Women's History Month with exciting initiatives. Firstly, hats off to Milan Stančić and Marina Vuković for preparing a webinar aimed at guiding all women interested in a QA career. 🙌 This initiative is targeted at supporting unemployed women or those considering a career transition into this field. Just a quick heads-up—there's an internal gathering for the BMGH women on March 19, and it's shaping up to be the social extravaganza of the season! 😉 We're turning our Novi Sad office into the ultimate hangout spot. So, expect some top-notch chit-chat, laughter, and maybe even a surprise or two. And hey, let's give a warm welcome back to Igor Trifunović. It's great to have you with us again, Igor! 🎉 "
      />
      <QuickUpdate
        bgColor="black"
        company={Company.BRIGHT_MARBLES_MACEDONIA}
        title="Our Macedonian Office Expands: Welcome Nikola Donevski"
        description={
          <div>
            <div>
              Our Macedonian office continues to expand, welcoming a fresh face
              this month. With 3 years tucked under his belt as a full-stack
              engineer, Nikola Donevski steps in, brimming with expertise.
              Mastering React, Redux, and a range of other technologies, he's
              all geared up to tackle fresh challenges as our new Intermediate
              Software Engineer. A hearty welcome aboard, Nikola! 🚀
            </div>
            {/* <div>
                Description can be in form of text(string) or you can pass html as
                this example show 💙
              </div> */}
          </div>
        }
      />{" "}
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
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
        /> */}
      <NewsAndEvents
        data={[
          {
            img: "https://media.licdn.com/dms/image/D4D22AQGioGUte6I9wg/feedshare-shrink_2048_1536/0/1710242102469?e=1713398400&v=beta&t=u0B5By439MCcERIJhPH-WWiVYozMlqcA_yvOTeU9O9w ",
            title:
              "Cheers and Trophies: BMGH's Annual Table Football Tournament Recap",
            description: (
              <>
                At the start of March, we had our yearly table football
                tournament. There was a lot of friendly teasing between teams...
                well, let's call it cheering each other on. The winning team
                included last year's champ Marko Krstanović and new talent
                Milica Stanković. We also had a special highlight: our youngest
                contestant, Luka Kovač (also the director's son), proudly took
                home a trophy. Talk about some sweet family perks! 😄 Just
                another fun day at work!
                {/* <a target="_blank" href="">
                    Click here to read more
                  </a> */}
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D22AQGJEvBaDS8c2A/feedshare-shrink_2048_1536/0/1708430432238?e=1713398400&v=beta&t=f4ybN2RYxqze8V1UlBXQh8SaUJAYeFqAiholOticQnk",
            title:
              "UN1QUELY Champions Digital Safety: High School Cybersecurity Competition Success in Montenegro",
            description: (
              <>
                UN1QUELY teamed up with Amplitudo Academy to host a thrilling
                cybersecurity competition for Montenegro's high school students
                called "Hunting for Hacker Code." Three standout teams emerged
                victorious: Vuln Hunters, DedSec, and Anon1mus. This
                competition, a key part of the EU-funded "E-services and Digital
                Infrastructure in Response to Covid-19" project, showcases our
                dedication to promoting digital safety.
                {/* <a
                    target="_blank"
                    href="https://brightmarbles.io/blog/agile-chronicles-chapter1/"
                  >
                    Click here to read more
                  </a> */}
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*AAMteRjqimQFa2-FFXbr_A.png",
            title:
              "Breaking Barriers: Filip Kecman and UN1QUELY Shine at Cyber Pathways for Women Event",
            description: (
              <>
                The "Cyber Pathways for Women" event, co-hosted by DAI, USAID,
                and the Serbian Chamber of Commerce, delved into the challenges
                of achieving diversity in cybersecurity. Noteworthy moments
                included insights from a study on societal norms affecting
                workforce diversity and a sneak peek into upcoming initiatives
                by the "Cyber Pathways Task Force." The event buzzed with
                industry reps, including our own Filip Kecman from UN1QUELY, who
                sparked excitement with plans for Kragujevac, igniting
                cross-sector collaboration.
                {/* <a
                    target="_blank"
                    href="https://medium.com/@un1quely/the-beauty-of-testing-from-home-to-the-open-road-846c9bc11477"
                  >
                    Click here to read more
                  </a> */}
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2024/03/devops-manager.jpg",
            title:
              "DevOps Insights with Sanel: Tech Agility Meets Ironman Tenacity",
            description: (
              <>
                In a discussion with Sanel Jovanović, the IT director at
                Brightly, we explore the importance of DevOps in software
                development. Sanel elaborates on how DevOps serves as a vital
                link connecting development, operations, and quality assurance.
                He likens this integration to his enthusiasm for triathlons,
                illustrating the synergy and endurance required in both fields.
                He discusses the DevOps methodology, its advantages, its
                implementation in project workflows, and the technologies
                involved. Reflecting on past projects, he envisions DevOps'
                future, stressing its crucial role in efficient project delivery
                and security enhancement.
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/devops-for-effective-software-development/  "
                >
                  Click here to read more
                </a>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2024/02/onboarding-and-collaboration.jpg",
            title: "The Crucial Role of Documentation in Software Development",
            description: (
              <>
                Oliver Šipoš, a senior software engineer and co-founder at BMGH,
                emphasizes the critical role documentation plays in software
                development. He highlights its importance in providing a clear
                system overview, aiding in onboarding new team members,
                fostering collaboration, easing code maintenance and future
                development, and improving communication with stakeholders.
                Through these points, Oliver convincingly argues that
                documentation is a valuable investment in the long-term success
                and sustainability of software projects.
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/technical-documentation-in-software-development/"
                >
                  Click here to read more
                </a>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2024/02/darko-kovac-interview.jpg",
            title: "Digital Product Development – A Year of Transformation",
            description: (
              <>
                In this interview with Darko Kovač, BrightMarbles Group's CTO,
                insights are shared on the company's operations and industry
                trends. Darko discusses navigating tech challenges and adapting
                to market demands, emphasizing tailored strategies for client
                collaboration. He highlights the role of AI and the need for
                agile adaptation in 2024's dynamic global tech market.
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/digital-product-development-a-year-of-transformation/"
                >
                  Click here to read more
                </a>
              </>
            ),
          },
          {
            img: "https://computerone.com.au/wp-content/uploads/2020/02/Penetration-Testing-Main.jpg",
            title: "ROI Uncovered: The True Value of Penetration Testing",
            description: (
              <>
                Damjan's insights into penetration testing highlight its crucial
                role in proactively protecting digital assets. Through an
                exploration of ROI and real-world statistics, he effectively
                communicates the importance of this cybersecurity measure in
                mitigating the risk of data breaches for businesses.
                <a
                  target="_blank"
                  href="https://un1quely.com/blog/roi-uncovered-the-true-value-of-penetration-testing/"
                >
                  Click here to read more
                </a>
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*g6yA6sGbQBR_Pmm5EzuO4g.png",
            title: "Upgrade App Version via GitHub Action ",
            description: (
              <>
                In the dynamic world of software development, versioning is
                crucial for continuous improvement. Darko Petrović showcases how
                GitHub Actions simplifies this process, particularly for Flutter
                mobile apps. By utilizing GitHub Secrets for secure storage,
                Darko demonstrates a seamless method to automate version
                increments without altering the main branch. Through GitHub
                workflows, the current version is retrieved, incremented, and
                updated in GitHub Secrets, enhancing efficiency and minimizing
                errors. This approach enables teams to concentrate on
                development with confidence.
                <a
                  target="_blank"
                  href="https://medium.com/@Brightly_BMGH/upgrade-app-version-via-github-action-ac9ccb421ad3"
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
            title: "Software Engineer - Node.js (BMGH)",
            postingUrl:
              "https://bmgh.zohorecruit.eu/jobs/Careers/36808000000430020/Experienced-Software-Engineer---Node-js?source=CareerSite",
          },
          // {
          //   title: Software Engineer (UN1QUELY)",
          //   postingUrl:
          //     "https://bmgh.zohorecruit.eu/jobs/UN1QUELY/36808000002466166/Penetration-Tester?source=CareerSite",
          // },
          {
            title: "Software Engineer - .Net (BMGH)",
            postingUrl:
              "https://bmgh.zohorecruit.eu/jobs/Careers/36808000000423157/Experienced-Software-Engineer---NET?source=CareerSite",
          },
        ]}
      />
      <ThreeColorDivider />
      <Colleagues
        colleagues={[
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif",
            fullName: "Team",
            jobTitle: "HR & MKT",
            description:
              "Darko Kovač: I would like to commend the HR and Marketing teams for their excellent initiatives to improve the company culture. Both teams are very dedicated, creative, full of amazing ideas, but also greatly organized in implementing those ideas into reality. Their contribution to our company is immense, so I’d like to thank them and praise their invaluable efforts!",
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif",
            fullName: "TOs",
            jobTitle: "& their teams",
            description:
              "Darko Kovač: Kudos to our Tech Officers and their teams who have successfully reached an agreement on work-from-office days, thus creating a productive and collaborative work environment. Spending time together both working and having fun with coworkers is an important aspect of teamwork, and I would like to congratulate them for making this important step!",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*3JqBtUe-BnBUkqzcWkmoFQ.png",
            fullName: "Ivana Grbić",
            jobTitle: "Office Manager",
            description:
              "Vedrana Kaloper: I want to extend my heartfelt praise to Ivana for her delightful, warm, and collaborative nature. Her constant cheerfulness conveys the sense that no task is too daunting for her. Ivana approaches her diverse responsibilities, from organizing events to selecting thoughtful gifts for special occasions, with immense dedication, taste, and attention to detail. Truly, she deserves every bit of commendation. From the bottom of my heart, all kudos to Ivana!",
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/06/DSC0s1226.png",
            fullName: "Kristina Tadić",
            jobTitle: "Software Engineer",
            description:
              "Brane Opačić: A round of applause for Kristina, who is very skillful and has adapted very easily to the highly demanding selection process for one of our clients. Kristina made a great effort to prepare for interviews with the client, while she still had many obligations on her ongoing project, which shows her excellent time management skills and great dedication to new challenges. Bravo to Kristina!",
          },
          {
            imgUrl:
              "https://media.licdn.com/dms/image/D4D03AQGRatEhFmbVyQ/profile-displayphoto-shrink_400_400/0/1698358946419?e=1715817600&v=beta&t=SfZrEe2Aamu_Q4vPRy1wSQq-6dWRrNSQB8NAYEVYc04",
            fullName: "Lazar Vukašinović",
            jobTitle: "Offsec Engineer",
            description:
              "Luka Kovač: Congratulations to Lazar for his involvement and effort invested in the preparation of the career development framework for the cybersecurity team. Lazar took it upon himself to create the career development matrix for his department; he actively participates in the preparation sessions, and we all have the impression that he has shown great proactivity and willingness to participate in defining company-level procedures.",
          },
          {
            imgUrl:
              "https://media.licdn.com/dms/image/D4D03AQFyxcR4rX0GJw/profile-displayphoto-shrink_400_400/0/1697538840178?e=1715817600&v=beta&t=ZYILg6i03NqkULw3Mgf-cC-1aj_goCJTh4lJEsxEGrk",
            fullName: "Ana Batranović",
            jobTitle: "Penetration Tester",
            description:
              "Lazar Vukašinović: A big shoutout to Ana for her exceptional adaptability when it comes to learning new technologies needed for a pen testing project. Ana is very proactive in taking on new responsibilities, which shows her great desire to learn and progress. I must also commend Ana for her remarkable proficiency in English; it is phenomenal! Kudos to Ana for her outstanding contributions!",
          },
        ]}
      />
      <FamilyNews
        title="Celebrations 🎉"
        data={[
          {
            img: "https://media.licdn.com/dms/image/C4E03AQExce7v2grTIg/profile-displayphoto-shrink_800_800/0/1603114986803?e=1716422400&v=beta&t=t27JkzaJpsgqpcHtogOU7HD44C-jTpma0mpieYjZ3Xc",
            description: (
              <>
                BrightMarbles Novi Sad has grown by one familiar - new member,
                Igor Trifunović, a software engineer with approximately 12 years
                of experience. He brings 10 years of experience with Java and
                Android, and over 8 years of experience with .NET. Welcome,{" "}
                <span> Igor! </span>
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D03AQFCPh8z38Cp9g/profile-displayphoto-shrink_800_800/0/1694703536398?e=1716422400&v=beta&t=hd__Pvz6nKj-PhhNSYSDm7jGGGM5zXHQraU3tdnPpAA",
            description: (
              <>
                Nikola Donevski has joined our Macedonian office. With 3 years
                of experience as a full-stack engineer, he brings a wealth of
                knowledge to the table. Specializing in React, Redux, and more,
                he's ready to dive into new challenges as our Intermediate
                Software Engineer. Welcome <span> Nikola! </span>
              </>
            ),
          },
        ]}
      />
      <Birthdays
        employees={[
          {
            name: "Miloš",
            imgUrl:
              "https://media.licdn.com/dms/image/D4D03AQEd5M9RrjS2Cw/profile-displayphoto-shrink_800_800/0/1668608665740?e=1716422400&v=beta&t=K6fro-WtVWq9BB9D5p2IDkhOOkgXqBMh4lpQnn_i84Y",
          },
          {
            name: "Darko",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/03/DSC00sss424.png",
          },
          {
            name: "Emir",
            imgUrl:
              "https://media.licdn.com/dms/image/D4D03AQFLRrhMR9hXAg/profile-displayphoto-shrink_400_400/0/1676822575287?e=1716422400&v=beta&t=uzaHHKDv2QK3Om5oSictVU5B3pPLj1-tEVhR8ZVRJbo",
          },
          {
            name: "Darko",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2022/04/DSC0131sss7.png",
          },
          {
            name: "Atanas",
            imgUrl:
              "https://media.licdn.com/dms/image/C4E03AQGcXAnugYqC8Q/profile-displayphoto-shrink_400_400/0/1637311607836?e=1716422400&v=beta&t=3PZ2OhcnlC25XlFXAqHt3gSICH6Z8G4n16cP6b3YfCI",
          },
          {
            name: "Marko",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*q6UcxSsK46IwFriDLkAJzQ.png",
          },
          {
            name: "Milica",
            imgUrl:
              "https://media.licdn.com/dms/image/D4E03AQGdaJ22ivVjzw/profile-displayphoto-shrink_800_800/0/1681910882695?e=1716422400&v=beta&t=CX1b-Pa5owxiyRDUzTQ_UhcUbQqduXyeBD5GSTemBEQ",
          },
          {
            name: "Martin",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*RvbCzQhW4oXOSNiE-x9Eyw.png",
          },
          {
            name: "Goran",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*V-Jf29VS5vhiUUR3EcCplg.png",
          },
        ]}
      />
      <Contributions />
      <ThreeColorDivider hideWhite />
    </div>
  );
};