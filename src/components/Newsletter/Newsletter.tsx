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
// import HeroImage from "../HeroImage/HeroImage";

export const Newsletter = () => {
  const { loading, isVerified } = useVerify()

  if (loading || !isVerified) return null

  return (
    <div className={styles.newsletter_body}>
      <Header
        title="June Company Update"
        leftParagraphs={[
          {
            title: "Bench Strength:",
            description:
              "The Concorde project has ended, but we have started the Alithya project. Therefore, the number of people on the bench has remained stable at 16.",
          },
        ]}
        rightParagraphs={[
          {
            title: "Profit:",
            description:
              "Due to a considerable number of non-working days in May, our revenue experienced a smaller decrease, falling slightly compared to April.",
          },
          {
            title: "Cash Flow:",
            description:
              "We are currently focusing on recovering outstanding receivables to ensure stable cash flow going forward.",
          },
        ]}
      />
      <ProjectClientSection
        leftParagraphs={[
          {
            title: "Alithya",
            description:
              "The team started working on the RapidAMT project for the client Alithya on June 5th. Alithya is a Microsoft partner specializing in digital transformation services for enterprise clients. Specifically, we are working on developing a solution for automating and translating business processes using tools such as Power Automate, UIPath, and BluePrism. There are six of our colleagues on the team actively working on this project, and so far, we have established an excellent collaboration with Alithya.",
          },
          {
            title: "Anycoin",
            description:
              "The project is steadily moving forward, and we have a new colleague joining the client's team as a Scrum Master. This will be a great opportunity to identify all the areas for improvement.",
          },
          {
            title: "Anyone",
            description:
              "Smooth sailing, we’re planning a release in September.",
          },
          {
            title: "Ars T&TT",
            description:
              "The project is moving forward smoothly with Oliver and Marjan on the team. We’re also hoping to expand the team in the near future.",
          },
          {
            title: "Concorde Health",
            description:
              "We’re fixing the latest bugs on mobile, and we’re expecting the project to wrap up entirely by the end of next week.",
          },
          {
            title: "Greenlight",
            description:
              "Since our last update the BM team on Greenlite has completed all the remaining planned work on the production platform and has started onboarding on the new development platform. We’ve now merged the two teams together and joined up the efforts of the US team on building up/finishing up features on the new platform. Our current goals for June are to finish outstanding core features and perform a deployment towards the end of the month. This would be followed by a period of support for that release and migrating and onboarding the business teams from the old production platform to the new environment. On a longer term, the plan is then to address any technical debt from the release and to start reviewing and planning future iterations and development work on features and improvements.",
          },
          {
            title: "MijnDomein",
            description:
              "The project is proceeding as usual. Our team is scheduled to pay our annual visit to the client in the Netherlands during the first week of July.",
          },
        ]}
        rightParagraphs={[
          {
            title: "NAQ",
            description:
              "We’re continuously improving our Cyber Essentials and GDPR policy management and will soon introduce new features and offers to clients. We have attained full compliance with the ISO 9001 standard, providing a multitude of compliance and regulatory options, along with robust hazard tracking and management capabilities. Significant development is underway for Clinical Projects, including Clinical Risk Management Systems, Plans, Safety Case Reports, Hazard Logs, and DTAC. These features will greatly benefit customers such as medical clinics, doctor offices, pharmacies, and others in the digital health space. The team has expanded with additional developers and customer service staff.",
          },
          {
            title: "Penetration Testing projects",
            description:
              "We’re excited to share that we have applied for a tender to manage penetration testing and security projects for three Serbian ministries. This project could span three months and involve seven of our engineers. Following the launch of our Penetration Testing Progression Framework, we’ve been mapping our employees' skills to this framework and making necessary improvements based on their feedback. Additionally, we are negotiating with a prominent Dutch company for a two-month authenticated red team engagement, potentially involving three to four engineers. We are optimistic about winning this deal. We’ve also seen a positive trend of returning clients, with several from last year re-engaging us for their annual penetration tests.",
          },
          {
            title: "Raven",
            description:
              "We’re actively enhancing our existing features and currently developing a comprehensive dashboard with interesting metrics that will bring value to our users.",
          },
          {
            title: "vCISO projects and Partnership updates",
            description:
              "We won two new vCISO projects with a customer from Netherlands and US that already kicked off and will last for 3-6 months. This service is gaining popularity as we get new leads each week.",
          },
          {
            title: "Zein",
            description:
              "The project is finished and everything’s been pushed to production.",
          },
          {
            title:
              "Adriaan, Carna Health, Costa Coffee, Crayon (STADA), Hadrian, Simplify Orange, Toogether Parking & Drive",
            description: "Business as usual.",
          },
        ]}
      />
      <QuickUpdate
        company={Company.BRIGHT_MARBLES}
        title="Celebrating Pride Month, Knowledge Sharing, and Team Expansion"
        description={
          <div>
            <div>
              🌈 June is Pride Month, dedicated to the fight for LGBTQ+ rights.
              At BMGH, we support diversity and foster a culture of tolerance
              and acceptance. This month, we attended the opening event of NS
              Pride Week to show our support.
            </div>
            <div>
              ☕ We’re also thrilled to announce that we’ve revived the
              tradition of Lean Coffee knowledge-sharing sessions, which had
              been on hold due to the pandemic and remote work.
            </div>
            <div>
              We also have some exciting news on the team front! This month, we
              welcomed Slobodanka and Mihajlo, both .NET engineers, to the BM
              team. We’re also looking forward to welcoming a new colleague,
              Tamara, who will join our Finance team.
            </div>
            <div>
              Plus, we’re hiring for the position of Financial Specialist -
              check out our job opening!
            </div>
          </div>
        }
      />
      <QuickUpdate
        bgColor="white"
        company={Company.BRIGHTLY}
        title="Further changes and Tech Office expansion "
        description="At Brightly, further structural changes are taking place at the management level, which will become evident in the upcoming period. Additionally, starting in July, we expect to expand the Tech Office to include Brightly and other member companies of BMGH."
      />
      <QuickUpdate
        bgColor="black"
        company={Company.UN1QUELY}
        title="Cybersecurity Efforts and Global Recognition"
        description={
          <div>
            <div>
              This month has been highlighted by lectures and podcasts from our
              colleagues. 🎙️In May, Damjan and Lazar delivered a lecture on
              cybersecurity, focusing on protecting senior citizens in the
              digital world. The event was organized with the Novi Sad
              Humanitarian Center (NSHC).
            </div>
            <div>
              We’re thrilled to announce that UN1QUELY has been recognized as a
              Clutch Global Leader by Clutch, an organization ranking the top IT
              companies. 🌟
            </div>
            In cybersecurity news, Branko served on the judging panel at the
            Ulcinj Hackathon, and Branko, Luka, and Strahinja conducted a
            three-day crash course at the University of Montenegro.
          </div>
        }
      />{" "}
      <QuickUpdate
        bgColor="white"
        company={Company.BRIGHT_MARBLES_MACEDONIA}
        title="Open vacancies"
        description="In the Macedonian office, things are moving at a steady pace. We are currently looking to expand the team with mid-level software engineers. Check out the job details! 🚀"
      />
      <NewsAndEvents
        data={[
          {
            img: "https://images.pexels.com/photos/6321241/pexels-photo-6321241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Mental Health Awareness Webinar",
            description: (
              <>
                May was Mental Health Awareness Month, and to mark the occasion,
                Vojana Obradović, PhD in Psychology and CEO of Mental Hub,
                delivered a lecture on the importance of nurturing mental health
                and effective strategies for doing so.
                {/* <a target="_blank" href="">
                  Click here to read more
                </a> */}
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D22AQEjwMGiq67zjg/feedshare-shrink_2048_1536/0/1716810571046?e=1721260800&v=beta&t=JESOj4wk1CyWAjssLsfFn-4hHD0RFsIWcHDa3O9yizs",
            title: "Lean Coffee",
            description: (
              <>
                Lean Coffee is a knowledge-sharing format where participants
                propose and vote on the topics for discussion, rather than
                having a predefined agenda. This format was part of our company
                culture before the pandemic and the shift to remote work. We
                have now decided to revive it, alternating between in-person and
                online sessions. At the previous Lean Coffee meetup, led by
                Darko Kovač, we discussed topics such as Scrum, artificial
                intelligence, customer satisfaction, and more.
                {/* <a target="_blank" href="">
                  Click here to read more
                </a> */}
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D22AQFjdintd3rNBA/feedshare-shrink_2048_1536/0/1715937842685?e=1721260800&v=beta&t=d1Q692PLWVHjWHHeYA_U_Q14Q6U4t9LQpAFtoFUvYyw",
            title: "Celebrating Pride Month",
            description: (
              <>
                Pride Month in June marks the celebration of the fight for
                LGBTQ+ rights. At BMGH, we are built on the principles of
                diversity and tolerance. To show our strong support, we proudly
                attended the opening of Novi Sad's Pride Week.
                {/* <a target="_blank" href="">
                  Click here to read more
                </a> */}
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D22AQFeSttplr0g5A/feedshare-shrink_2048_1536/0/1716983642297?e=1721260800&v=beta&t=sHJiBeCO1UjWSNTg3TUpBDGUzq6TgjjmKFWBv0G8Cjc",
            title: "Lecture on Internet Security",
            description: (
              <>
                In collaboration with the Novi Sad Humanitarian Center (NSHC),
                Lazar Vukašinović and Damjan Cvetanović gave a lecture to our
                senior citizens on safe internet usage. By educating them and
                reducing the stress and anxiety related to online threats, we
                helped our seniors enjoy a secure and confident digital
                experience.
                {/* <a target="_blank" href="">
                  Click here to read more
                </a> */}
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*LMPuugbANgrYm5tXmrMciA.jpeg",
            title: "Crash course on Cybersecurity at University of Montenegro",
            description: (
              <>
                An intensive three-day cybersecurity course was held at the
                University of Montenegro, where Branko Džakula, Luka Bojović,
                and Strahinja Vuksanović covered topics on information security
                management, offensive security operations, and defensive
                security operations.
                {/* <a target="_blank" href="">
              Click here to read more
            </a> */}
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D22AQE1vXegiX2fPQ/feedshare-shrink_2048_1536/0/1717662409937?e=1721260800&v=beta&t=zRwHlRjD6efxe7D8te7C_mxJBnbYzIj2G7xUVyGp-YE",
            title: "Ulcinno Hackathon",
            description: (
              <>
                Branko Džakula was one of the judges at the Ulcinno Hackathon in
                Ulcinj, where he had the opportunity to select the winners of
                this competition alongside Ardian Hoxha and Anton Jurovicki.
                {/* <a target="_blank" href="">
              Click here to read more
            </a> */}
              </>
            ),
          },
        ]}
      />
      <OpenPositions
        jobPostings={[
          {
            title: "Mid-Senior Software Engineer (Macedonia)",
            postingUrl: "https://www.linkedin.com/jobs/view/3947231726/",
          },
          {
            title: "Finance Specialist (BMGH)",
            postingUrl:
              "https://bmgh.zohorecruit.eu/jobs/Careers/36808000004876084/Senior-Finance-Specialist?source=CareerSite",
          },
        ]}
      />
      <ThreeColorDivider />
      <Colleagues
        colleagues={[
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif",
            fullName: "Anastasia & Milica",
            jobTitle: "Finance and Legal",
            description:
              "Suzana Vasić: You don’t actually get to choose who you work with on a daily basis, right? Not really. Looking back, I am grateful for this, because even if I had handpicked them, they wouldn’t have been this great. So, here is the ode to Anastasia and Milica. You girls are smart, professional, funny, fearless, and everything in between. We endured some really difficult times together and you have taught me a lot, both workwise and life-wise. Thank you for your unconditional support and for making my job as easy as possible. It was truly an honor working side by side with you, and I would have loved to do so until we’re old and (re)tired.",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*dOQTrojoZ05LOg8QlzKoeQ.png",
            fullName: "Luka Kovač",
            jobTitle: "Head of Engineering",
            description:
              "Nebojša Lalić & Milenko Jevremović: Big kudos to you, Luka, for your versatility and constant support for your colleagues. You work incredibly hard and tackle everything that comes your way, and we truly appreciate all your contributions to the company! Congratulations on taking up the new project with such dedication. It's clear how much you help the team, especially when they hit roadblocks. We are very satisfied with your work and effort!",
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/06/DSC01ss190.png",
            fullName: "Milana Miković",
            jobTitle: "Software Engineer",
            description:
              "Oliver Šipoš: Milana, congratulations on your outstanding work on the Adriaan project! You quickly and seamlessly integrated into the team, fitting in perfectly with everyone. Your technical skills are top-notch, and it really shows in the quality of your work - you've consistently demonstrated a high level of expertise that has significantly benefited the project. Your contributions were invaluable and truly made a difference. Keep up the great work!",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*aHS1R8rWMIzPXr2dGjOFLg.png",
            fullName: "Jovana Simić",
            jobTitle: "QA Engineer",
            description:
              "Nenad Stojković: Jovana, you absolutely nailed it on the project right from the beginning! Taking on the dual roles of PO and QA, you managed responsibilities with incredible skill, drawing out what needed to be done, researching, designing, and excelling in every way. There aren't enough words to praise you not only for your technical and interpersonal skills but also for your enormous dedication and responsibility. You've made a huge difference on the project, which is clearly felt, and we are very happy to have you!",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*PO9U2FvvJ3AebrJn6LV-zg.png",
            fullName: "Stevan Vučić",
            jobTitle: "Security Engineer",
            description:
              "Branko Džakula: I would like to praise Stevan for his excellent mentoring of our interns. You simply excel in the role of a mentor, as evident from the significant knowledge they acquire after completing the internship. Additionally, you bring a constant positive atmosphere to the team - your cheerful energy is incredibly contagious! Your dedication and enthusiasm make you an invaluable asset to our team, inspiring both interns and colleagues alike.",
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif",
            fullName: "Alithya",
            jobTitle: "Team",
            description:
              "Luka Kovač: I want to give a big shout-out to our new colleagues, Slobodanka and Mihailo. They've seamlessly integrated into our project with their impressive resourcefulness and quick grasp of everything. It's a tremendous pleasure working alongside them. And a special thanks to our veterans, Nikola Katić, Nenad Stojković, and Milenko Jevremović, for their invaluable support and guidance. Your experience and dedication have made a significant difference.",
          },
        ]}
      />
      <FamilyNews
        title="A reason to celebrate 🥳"
        data={[
          {
            img: "https://theweddingavenue.co.uk/wp-content/uploads/2022/10/gold-wedding-rings-960x1000.jpeg",
            description: (
              <>
                Congratulations dear Kristina! Wedding bells are ringing clear,
                wishing you and your partner a lifetime of cheer. May your love
                grow stronger every day, and may your bond be tighter every step
                of the way. Cheers to a lifetime of happiness, joy and beautiful
                moments together!💍👰🤵
              </>
            ),
          },
          {
            img: "https://lilyandwonder.com/cdn/shop/products/Baby-Girl-Disc.jpg?v=1649946496&width=713",
            description: (
              <>
                Welcome baby girl Dunja! Congratulations to our colleague Marko
                on his baby girl’s birth. Wishing them all the happiness on
                earth! 👼🌟🎉 May your days be filled with love, laughter, and
                lots of cuddles. Cheers to the beginning of a sweet and
                delightful adventure!
              </>
            ),
          },
        ]}
      />
      <Birthdays
        employees={[
          {
            name: "Bojana",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/06/DSC01206-copy.png",
          },
          {
            name: "Slobodanka",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*GRqje3MoBKkQ_VQiHw06zg.png",
          },
          {
            name: "Nevena",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*EzINEfgpr9F_efcpAbU5Hw.png",
          },
          {
            name: "Nikola",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*jaCh1aAyvhAfXDqX2phQ0A.png",
          },
          {
            name: "Filip",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2022/01/Filip.png",
          },
          {
            name: "Nikola",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Oyp03c9oWBqxGkyYNrv6yw.png",
          },
          {
            name: "Šime",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*UG7FqZUNcJC27v2xCsQpzg.png",
          },
        ]}
      />
      <Contributions />
      <ThreeColorDivider hideWhite />
    </div>
  );
};
