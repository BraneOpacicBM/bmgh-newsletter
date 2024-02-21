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

  return (<div className={styles.newsletter_body}>
    <Header
      title="January Company Update"
      leftParagraphs={[
        {
          title: "Bench Strength:",
          description:
            "We’re in a dynamic phase at our company, with several projects wrapping up and new ones beginning. We're currently reallocating team members to different projects, with two fresh projects already underway. This means our current headcount is in flux, but we expect things to stabilize soon. By next month, we should have a clearer view of our team distribution and bench strength.",
        },
      ]}
      rightParagraphs={[
        {
          title: "Profit:",
          description:
            "January is a month of Christmas celebrations in our development centers, leading to fewer working days due to absences and vacations. Total revenue in January was 16% lower than in December, as expected, due to cost reductions; consequently, the profit is 7% lower.",
        },
        {
          title: "Cash Flow:",
          description:
            "The holiday season also affected our cash flow, as expected. We anticipate improvement in February as we've begun work on two new projects.",
        },
      ]}
    />
    <ProjectClientSection
      leftParagraphs={[
        {
          title: "Adriaan",
          description:
            "The Adriaan project has entered its second phase, which begins with design, followed by the addition of two frontend, two backend engineers, one mobile engineer, and a DevOps specialist. We are developing a web application for people involved in marijuana cultivation and dispensaries - something new that we haven't worked on before. Additionally, we are working on redesigning the mobile application.",
        },
        {
          title: "Anyone",
          description:
            "The team has grown by one member and is expected to expand by another in the near future. We've also continued refining our product goal, which has undergone some changes.",
        },
        {
          title: "Carna",
          description:
            "Launching a new population screening initiative is on the horizon, and efforts are underway to ensure a seamless process. The initial phase, involving Bermuda as the first tenant, is progressing smoothly.",
        },
        {
          title: "Concorde Health",
          description:
            "The project is in the final phase of MVP. In the role of Product Owner, the client is more involved in Scrum processes, so communication and collaboration are improved.",
        },
        {
          title: "Costa Coffee",
          description:
            "Our team members are preparing for a trip to the United Kingdom at the end of Q1 for our annual strategic planning session.",
        },
        {
          title: "Crayon OTP",
          description: "It seems we will extend this cooperation to 1 FTE.",
        },
        {
          title: "Greenlite",
          description:
            "In January the overall Greenlite engineering team split into two work streams. The small original BM team is working with a separate GreenLite PM/Product Owner on the active platform functionality. The work is mainly focused on adding and improving features to the core PDF review tool. The second engineering team is focused on migrating existing features with changes onto a new tech platform and architecture, with the aim of using the new infrastructure as an offering to another set of stakeholders. The overall goal is to keep updating both products, with a planned sync and full migration of all features only after the new infrastructure has been set up and working.",
        },
        {
          title: "Hadrian",
          description:
            "Business as usual, but we are expecting some changes soon since they've got a new round of investments.",
        },
      ]}
      rightParagraphs={[
        {
          title: "MijnDomein",
          description:
            "On MijnDomein, it is business as usual for the whole team. This week all team leads, together with management, visited Macedonia - Ohrid. We had a 3-day workshop where we did a retrospective of last year, talked about improvements in development teams, and came up with suggestions on improving working on projects from the roadmap.",
        },
        {
          title: "Penetration Testing projects",
          description:
            "Expanded the team with a new trainee Marko Ignjatovic. Establishing a new sub-service Red Team led by Miroslav Milicevic. Engaging with more enterprise clients in Switzerland and Germany. Working on a first government contract in Montenegro.",
        },
        {
          title: "Raven",
          description:
            "Raven is moving ahead with a collaborative spirit that's fueling great progress. We're moving at a steady pace, meeting milestones, and fostering a strong team dynamic. This positive momentum has us well positioned to showcase the project's impact in the upcoming March newsletter.",
        },
        {
          title: "Secfix",
          description:
            "Everything is going according to plan. We are negotiating the extension of DevOps services.",
        },
        {
          title: "Security Operations projects",
          description:
            "A new project started with OTP group on DevSecOps and general Security Operations work is led by Ivan Cekerevac.",
        },
        {
          title: "Simplify Orange",
          description:
            "We’ve extended the contract for 2024, and everything is going according to the plan.",
        },
        {
          title: "vCISO projects and Partnership updates",
          description:
            "Multiple hot leads in the Netherlands and the US are highly interested in engaging with us for long-term CISO projects.",
        },
        {
          title: "Anycoin, Crayon STADA, NAQ, Toogethr Parking & Drive",
          description: "Business as usual.",
        },
      ]}
    />
    <QuickUpdate
      company={Company.BRIGHT_MARBLES}
      title="Reflecting and Planning for the Future"
      description={
        <div>
          <div>
            January marks the end of the holiday season and the festive
            atmosphere, a time for reflection and planning. At our Novi Sad
            office, we gathered for a Company meeting, looking back at the
            milestones we achieved last year and setting plans for the new
            one.
          </div>
          <div>
            Also, we missed our December newsletter, so let’s take a moment to
            appreciate the exceptional work of Dunja Ibročić, Biljana Kovač,
            Darko Kovač, and Svetlana Kosić. Their translation of the
            Evidence-Based Management Guide for Scrum.org into Serbian is
            truly a commendable achievement!
          </div>
        </div>
      }
    />
    <QuickUpdate
      company={Company.BRIGHTLY}
      bgColor="white"
      title="Company Meeting Recap and Strengthening Swiss Client Partnerships"
      description="Many exciting things are currently happening at Brightly. Like other offices, we held a company meeting where we reflected on the past year and the events that defined it, and we also shared our plans for 2024. 

    Additionally, there are developments in our collaboration with Swiss clients. Since the last newsletter, Nenad Jović has traveled to Switzerland twice with the aim of getting to know our clients better."
    />
    <QuickUpdate
      bgColor="black"
      company={Company.UN1QUELY}
      title="Expanding Horizons in Cybersecurity "
      description={
        <div>
          <div>
            Despite the market's turbulence, UN1QUELY managed to grow! Our
            Cybersecurity team has expanded by 11 new members, and we recently
            held a kick-off company meeting to outline our plans for the
            upcoming year.
          </div>
          <div>
            In exciting news, we've launched the UN1QUELY Cybersecurity
            Academy to foster knowledge sharing and train new team members. A
            big thanks to Strahinja Vuksanović and Luka Bojović for creating
            educational cybersecurity videos. Furthermore, we've initiated
            cybersecurity competitions for high school students – stay tuned
            for updates!
          </div>
        </div>
      }
    />{" "}
    {/* <QuickUpdate
    bgColor="blue"
    company={Company.BRIGHT_MARBLES}
    title="Lorem ipsum dolor sit amet consectetur adipisicing"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
  /> */}
    <QuickUpdate
      bgColor="white"
      company={Company.BRIGHT_MARBLES_MACEDONIA}
      title="Welcoming New Talent"
      description="We're thrilled to start the new year with some fresh energy in our team! A warm welcome to Hristijan Gjorgjioski, who is joining our Macedonia office as the youngest member."
    />
    {/* <QuickUpdate
    bgColor="black"
    company={Company.BRIGHT_MARBLES_NETHERLANDS}
    title="Lorem ipsum dolor sit amet consectetur adipisicing"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
  /> */}
    <NewsAndEvents
      data={[
        {
          img: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1HO2epE5pKTnDKgZ71TxIg.png",
          title: "Company meetings",
          description: (
            <>
              Last month, we gathered across all BMHG companies look back on a
              challenging year and gear up for what's ahead. We have some
              exciting plans and developments lined up for 2024. We're all in
              this together, and we can't wait to see what we'll achieve as a
              team.
              {/* <a target="_blank" href="">
              Click here to read more
            </a> */}
            </>
          ),
        },
        {
          img: "https://cdn-images-1.medium.com/max/1000/1*4c_AupQCVF4qfsUDQoPctQ.png",
          title: "Management Workshop",
          description: (
            <>
              In late January, the BrightMarbles Group management team from
              all branches met for a three-day workshop to plan the year
              ahead. We had intense brainstorming sessions, strategy talks,
              and debates, resulting in clear goals and strategies. Despite
              challenges last year, we've pooled our strengths to overcome
              obstacles and ensure success in 2024. Stay tuned for updates!
              {/* <a
              target="_blank"
              href="https://brightmarbles.io/blog/agile-chronicles-chapter1/"
            >
              Click here to read more
            </a> */}
            </>
          ),
        },
        // {
        //   img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*_nirAtUuDHn-gUGwIfxvwQ.png",
        //   title:
        //     "The Beauty of Testing: From Home to the Open Road (by Goran Manojlović)",
        //   description: (
        //     <>
        //       Check out this brilliant blog post by our teammate Goran
        //       Manojlović from UN1QUELY. He's managed to blend his love for
        //       cycling with his day job in the coolest way. Using a
        //       custom-built app made for cyclists, Goran's been testing it
        //       while zooming through the city streets on his bike. This fresh,
        //       out-of-the-box way of testing is definitely reshaping what we
        //       think a QA role can look like.
        //       <a
        //         target="_blank"
        //         href="https://medium.com/@un1quely/the-beauty-of-testing-from-home-to-the-open-road-846c9bc11477"
        //       >
        //         Click here to read more
        //       </a>
        //     </>
        //   ),
        // },
        // {
        //   img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*tgYpPWBA2msSc6Wv11rDFg.jpeg",
        //   title:
        //     "Developers as Leaders - Empowering Tech Decision-Making (by Ivan Đorđević)",
        //   description: (
        //     <>
        //       In his latest blog post, our very own Ivan Đorđević from
        //       Brightly is diving into the idea of developers stepping up as
        //       leaders, underlining the significance of empowering them in tech
        //       decision-making.
        //       <a
        //         target="_blank"
        //         href="https://medium.com/@Brightly_BMGH/developers-as-leaders-empowering-tech-decision-making-5a62606e433e"
        //       >
        //         Click here to read more
        //       </a>
        //     </>
        //   ),
        // },
      ]}
    />
    <OpenPositions
      jobPostings={[
        {
          title: "Node.js Engineer (BrightMarbles, UN1QUELY, Brightly)",
          postingUrl:
            "https://bmgh.zohorecruit.eu/jobs/Careers/36808000000430020/Experienced-Software-Engineer---Node-js?source=CareerSite",
        },
        {
          title: "React Engineer (BrightMarbles, UN1QUELY, Brightly)",
          postingUrl:
            "https://bmgh.zohorecruit.eu/jobs/Careers/36808000001590457/Experienced-Frontend-Engineer-React-?source=CareerSite",
        },
        {
          title: ".NET Engineer (BrightMarbles, UN1QUELY, Brightly)",
          postingUrl:
            "https://bmgh.zohorecruit.eu/jobs/Careers/36808000000423157/Experienced-Software-Engineer---NET?source=CareerSite",
        },
        {
          title: "Other engineering positions – accepting recommendations ",
          postingUrl: ""
        },
      ]}
    />
    <ThreeColorDivider />
    <Colleagues
      colleagues={[
        {
          imgUrl:
            "https://miro.medium.com/v2/resize:fit:640/format:webp/1*WTwlc_L1_ez2hitUCwKO2A.png",
          fullName: "Goran Simić",
          jobTitle: "Software Engineer",
          description:
            "Nenad Jović: Let's give a huge round of applause to Goran, our rockstar Senior .NET Engineer, for going above and beyond the call of duty! During his overtime, Goran lent a helping hand to colleagues on the MTV project. Not only did he crush his own tasks, but he also stepped up to share his wealth of knowledge and experience. So, Goran, we just want to say THANK YOU for being the backbone of our team and for always leading by example. Your hard work and generosity don't go unnoticed! ",
        },
        {
          imgUrl:
            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*jXAKoe38SA0_2a9g07sLBw.png",
          fullName: "Jasmina Dimitrijević",
          jobTitle: "Project Manager",
          description:
            "Mirjana Parpura: Jasmina, your dedication and expertise shine through in everything you do. Whether it's tackling complex coding challenges or lending a hand to teammates in need, your commitment to excellence is truly inspiring. But it's not just about the code – your positive attitude and infectious energy uplift the entire team. Your can-do spirit and willingness to go the extra mile make you a joy to work with. Thanks for being such an integral part of our team! ",
        },
        {
          imgUrl:
            "https://media.licdn.com/dms/image/D5603AQF-udlYqzzWYg/profile-displayphoto-shrink_400_400/0/1705016266044?e=1712793600&v=beta&t=DzXwSP_oNZX-Njcx-mJ37kHuImnGmSrPaS2rU9PzzZE",
          fullName: "Viktorija Simonoska",
          jobTitle: "Designer",
          description:
            "Nenad Stojković and Vedrana Kaloper: Viktorija is fantastic to work with. She’s hardworking and possesses excellent communication skills. It's impressive how she digs deep into our project, understanding every aspect - what we're making, why, and how it's going to be used. This really makes a difference in our work. Plus, Viktorija is very approachable and friendly, and the whole team loves working with her!",
        },
        {
          imgUrl:
            "https://media.licdn.com/dms/image/D4D03AQGWYRUf0kr3pA/profile-displayphoto-shrink_400_400/0/1674553270598?e=1712793600&v=beta&t=2uPx60uzNJ2KiFu_rH_cMlYTpXKPyZhwFWdRf-pLYYg",
          fullName: "Marina Vuković",
          jobTitle: "QA Engineer",
          description:
            "Milan Stančić: I would like to commend Marina for her outstanding contribution to testing the Carna project. Despite facing numerous challenges and tight deadlines, she demonstrated incredible skill and professionalism in overcoming them. Marina consistently maintained a positive attitude and exhibited enthusiasm in all situations, even during the most stressful moments. Her significant contribution during the previous period played a pivotal role in achieving high software quality.",
        },
        {
          imgUrl:
            "https://media.licdn.com/dms/image/D4E03AQGPtjyUvIJCGA/profile-displayphoto-shrink_400_400/0/1698412568970?e=1712793600&v=beta&t=f4GPOvQ-jKYSCGrF0PtdFF075iOi8py6bjN9D0AaaPg",
          fullName: "Filip Kecman",
          jobTitle: "Offensive Security Eng",
          description:
            "Branko Džakula: I want to express my appreciation for Filip Kecman and acknowledge the excellent progress he has made in recent times. Filip consistently demonstrates readiness to share his knowledge to the team, embodying the qualities of a true team player and a role model. His dedication and collaborative spirit contribute significantly to the overall success of the team. ",
        },
        {
          imgUrl:
            "https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif",
          fullName: "Vladimir Ilić",
          jobTitle: "DevOps Engineer",
          description:
            "Luka Kovač: A round of applause for Vladimir Ilić because of his dedication and successfully completed collaboration with Amazon Premier Tier partners, namely Caylent. With Caylent and Vladimir, we have managed to set up the Control Tower service on Amazon and thereby raised the infrastructure management to a higher level on the Concorde project. Congratulations and kudos to Vladimir, a job well done!",
        },
        {
          imgUrl:
            "https://miro.medium.com/v2/resize:fit:750/format:webp/1*NYEt419M4Nt_iC5Ed1P1eA.png",
          fullName: "Goran Manojlović",
          jobTitle: "QA Engineer",
          description:
            "Milenko Jevremović: My sincere congratulations to Goran Manojlović, who has been actively involved in two projects, one of which is notably challenging and intricate, and which helped showcase Goran’s exceptional skills. Recently, he took the initiative to conduct a demo for the client, he did an excellent job. Well done, Goran, for your exemplary efforts!",
        },
      ]}
    />
    <FamilyNews
      title="Celebrations at BMGH 🥳"
      data={[
        {
          img: "https://lilyandwonder.com/cdn/shop/products/Baby-Girl-Disc.jpg?v=1649946496&width=713",
          description: (
            <>
              <span> 👶 A New Princess in Town: </span>
              Massive congrats to Jovana Tadić (Pantić) and family on the
              arrival of the adorable baby girl, Dajana! May her life be a
              journey of joy, discovery, and endless code-breaking adventures,
              just like her mom. We're so thrilled for you, Jovana!
              Congratulations to <span> Jovana Pantić </span>
            </>
          ),
        },
        {
          img: "https://nameitcustomdecor.com.au/cdn/shop/products/IMG_2370.jpg?v=1591945706",
          description: (
            <>
              <span> 🍼 Dušan's Bundle of Joy: </span>
              Congrats, Dušan, on stepping into the incredible journey of
              fatherhood. Welcome to the club of sleepless nights and
              heart-melting smiles! We're all excited for you and can't wait
              to meet the little champ, Matija! Congratulations to{" "}
              <span> Dušan Ilić </span>
            </>
          ),
        },
        {
          img: "https://nameitcustomdecor.com.au/cdn/shop/products/IMG_2370.jpg?v=1591945706",
          description: (
            <>
              <span> 👣 Edvin's New Adventure: </span>
              Warmest congrats to Edvin on the birth of his son, Ádám! Here’s
              to love, laughter, cuddles & snuggles, and lots of coding
              sessions interrupted by cute baby giggles! Congrats, Edvin
              Kerekeš! Congratulations to <span> Edvin Kerekeš </span>
            </>
          ),
        },
        {
          img: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*1IOysxUj_PG2l26Eey_-6w.png",
          description: (
            <>
              <span> 💍 Wedding Bells for Suzana: </span>
              Huge congrats to Suzana Vasić and her partner on tying the knot
              and saying yes to love, commitment, and a lifelong journey! May
              your life together be as rewarding as a well-planned financial
              strategy, where every moment together grows your treasure of
              love! Congratulations to <span> Suzana Vasić </span>
            </>
          ),
        },
      ]}
    />
    <Birthdays
      employees={[
        {
          name: "Damjan",
          imgUrl:
            "https://miro.medium.com/v2/resize:fit:640/format:webp/1*XJnvi0iiwDcFwEJq_hhKZQ.png",
        },
        {
          name: "Suzana",
          imgUrl:
            "https://miro.medium.com/v2/resize:fit:640/format:webp/1*jZvTDxypmboFsXaYoISODQ.png",
        },
        {
          name: "Nastasija",
          imgUrl:
            "https://miro.medium.com/v2/resize:fit:640/format:webp/1*QjpvYiamhnwMrgYXWnKBLQ.png",
        },
        {
          name: "Vladimir",
          imgUrl:
            "https://miro.medium.com/v2/resize:fit:640/format:webp/1*HSGutl3s2ZJbCte3G01ZEg.png",
        },
        {
          name: "Branko",
          imgUrl:
            "https://miro.medium.com/v2/resize:fit:640/format:webp/1*O-dK43rkwC3zp8EgrWiuIA.png",
        },
      ]}
    />
    <Contributions />
    <ThreeColorDivider hideWhite />
  </div>
  );
};
