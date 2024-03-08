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
        title="Word from our CEO"
        leftParagraphs={[
          {
            // title: "Bench Strength:",
            description: "Dear BrightMarbles team,",
          },
          {
            // title: "Bench Strength:",
            description:
              "On this International Women's Day, I want to say THANK YOU to each and every woman in our team for the ambition, strength, and unique perspectives you bring to our work every day!",
          },
          {
            // title: "Bench Strength:",
            description:
              "I read something recently that really struck me. It said today's women are probably the most anxious generation yet.  You're trying to excel in your careers, raise good kids, be present and supportive friends, stay healthy, and do a million other things, all while juggling the expectations that society has unfairly placed on your shoulders for ages.",
          },
        ]}
        rightParagraphs={[
          {
            // title: "Profit:",
            description:
              "It's an immense challenge, and frankly, the determination with which you all manage this juggling act never cease to amaze me.",
          },
          {
            // title: "Profit:",
            description:
              "So, this isn't just a thank you for your hard work at BrightMarbles. It's also a nod of respect for everything you do outside of work that often goes unnoticed.",
          },
          {
            // title: "Cash Flow:",
            description:
              "Thanks for all that you do, for the dedication you bring to our workplace, and for the inspiring examples you set every day. Here's to you – the remarkable women of BrightMarbles – and to a future where the scales of gender equality are balanced for all.",
          },
          {
            // title: "Cash Flow:",
            description: "With deepest respect and admiration, Boris",
          },
        ]}
      />
      {/* <ProjectClientSection
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
      /> */}
      <NewsAndEvents
        data={[
          {
            img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*T1aKZ_SQzZ71kXPNAdnYqA.png",
            title: "Gender Diversity Ratio",
            description: (
              <>
                BMGH ended 2023 with 126 employees. Among them, 90 were men and
                36 were women, representing 71% and 29% of the workforce,
                respectively.
                {/* <a target="_blank" href="">
              Click here to read more
            </a> */}
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*1ihhCGpr6IFKpp_ZkboyDg.png",
            title: "Gender Representation Across Departments",
            description: (
              <>
                Since we know that 29% of our employees are women, let's examine
                the distribution across departments. In the Cybersecurity
                department, we have 7% women, Engineering 13%, QA 38%,
                Operations 67%, while Delivery comprises 71% women.
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
            img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BcIe4LxpiXtTGoXfImk8HQ.png",
            title: "Industry Average",
            description: (
              <>
                Globally, women remain underrepresented in numerous roles,
                particularly in technical positions, within the IT industry.
                Although precise figures vary, reports commonly suggest that
                women constitute approximately 25% to 30% of the total IT
                workforce. In light of this, BMGH's gender diversity falls
                within the industry average.
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
            img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*TLj0LeV5T5Ckd6YqHxdY-w.png",
            title: "Our Future Goals",
            description: (
              <>
                As a company, gender diversity is highly important to us, not
                only within our organization but also as a reflection of the
                broader representation of women in the industry, particularly in
                technical roles. While our goal is to elevate industry standards
                and promote knowledge through various initiatives aimed at
                increasing female participation in the industry, our hiring
                philosophy remains meritocratic. This means that we will select
                the best candidate for a position regardless of gender. In the
                upcoming period, as we aim to hire junior staff among other
                objectives, which will lead to more structured internships
                within the company, we commit to ensuring equal participation of
                both genders in these initiatives.
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
      <HeroImage
        bgColor="black"
        title="Internal celebration of Women's Day and Women's Month "
      >
        <div className={styles.heroContainer}>
          <div className={styles.heroDescription}>
            <p>
              March is the month when we talk about women. March is the month
              when we celebrate the achievements of women in the fields of
              science, culture, politics, and economics, when we discuss
              equality and women's rights. Through our internal event, we aim to
              connect with each other and have fun discussing topics that are
              important to us. We want to listen to every participant and take
              active steps to improve the situation within our company and the
              industry.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img
              className={styles.image}
              src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*ef_XIMbzQc6algFHNO6xBQ.png"
              alt="Describe this"
            />
          </div>
        </div>
      </HeroImage>
      <HeroImage bgColor="white" title="Cybersecurity for Women">
        <div className={styles.heroContainer}>
          <div className={styles.heroDescription}>
            <p>
              As you can see from our numbers, women are underrepresented in the
              field of cybersecurity. Through a lecture aimed at girls at
              technical faculties, we aim to introduce them to this field and
              provide them with a recipe on how to enter it.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img
              className={styles.image}
              src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*LYgvRDWNY6cobtiXoBzH6Q.jpeg"
              alt="Describe this"
            />
          </div>
        </div>
      </HeroImage>
      <HeroImage bgColor="blue" title="How to Start a Career in QA">
        <div className={styles.heroContainer}>
          <div className={styles.heroDescription}>
            <p>
              An online lecture for women and others interested in starting a
              career in the field of QA. We will address the role of QA,
              necessary qualifications, skills, and knowledge, and provide
              guidance on where to start learning.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img
              className={styles.image}
              src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*XhAgTjfZI4DrVAiV1rzteg.png"
              alt="Describe this"
            />
          </div>
        </div>
      </HeroImage>
      <HeroImage bgColor="black" title="Coding in Scratch for Girls">
        <div className={styles.heroContainer}>
          <div className={styles.heroDescription}>
            <p>
              This is not an initiative in March, but it builds on the Women's
              Month. In June, when the school year ends, we plan to repeat our
              last year's workshop for girls in Scratch, and help them get
              acquainted with IT and develop an interest in this field. This
              way, we would like to influence, at least in our microcosm, the
              number of women in the industry.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img
              className={styles.image}
              src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*gzZajURdY-PsRFWmissMpA.jpeg"
              alt="Describe this"
            />
          </div>
        </div>
      </HeroImage>
      {/* <QuickUpdate
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
        title="Welcoming New Talent"
        description="We're thrilled to start the new year with some fresh energy in our team! A warm welcome to Hristijan Gjorgjioski, who is joining our Macedonia office as the youngest member."
      /> */}
      {/* <QuickUpdate
    bgColor="black"
    company={Company.BRIGHT_MARBLES_NETHERLANDS}
    title="Lorem ipsum dolor sit amet consectetur adipisicing"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
  /> */}
      {/* <OpenPositions
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
            postingUrl: "",
          },
        ]}
      /> */}
      {/* <ThreeColorDivider />
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
      /> */}
      <FamilyNews
        title="We are proud to have you! 💪"
        data={[
          {
            img: "https://brightmarbles.io/wp-content/uploads/2022/01/Aleksandra.png",
            description: (
              <>
                <span> Aleksandra Grbić </span>
                Dear Sandra, You bring calm and serenity with every word and
                action and in this crazy world, that is the real blessing. I
                wish you could see yourself through my eyes for just one day, so
                you know how incredibly smart, brave and beautiful you are. You
                are the woman that should be celebrated and loved every day, so
                walk through life being aware of that quailty, because it’s so
                precious. I love you, babe!
                <span> Suzana Vasić </span>
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D03AQFyxcR4rX0GJw/profile-displayphoto-shrink_800_800/0/1697538840178?e=1715212800&v=beta&t=KjmZoNLHYnZnpjHrb0PcaYFDBvxKZGCuxogPRpTgwcg",
            description: (
              <>
                <span> Ana Batranović </span>
                Ana, getting to know you over the past few months has been an
                absolute pleasure. Apart from your outstanding commitment to
                work and mastery in your field, what truly stands out is the
                genuine kindness and sense of humor that you bring to our
                team/company. With your calm demeanor and optimistic outlook,
                you effortlessly create an environment where everyone feels
                valued and appreciated. You exemplify the kind of person and
                colleague I am glad to know and fortunate to work with.
                <span> Dragana Ječmenica </span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2021/04/Anastasia-2-Sajt-1.png",
            description: (
              <>
                <span> Anastasia Bijelić </span>
                Staša, I hope you're enjoying your well-deserved time off and
                embracing your new role as a mom. We want to thank you for your
                excellent leadership in our financial and legal sectors, and we
                look forward to seeing you again soon.
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:750/format:webp/1*c3JZSxtMK3Kiue5_7KMm1Q.png",
            description: (
              <>
                <span> Anja Jovičin Urošević </span>
                Anja, it's truly incredible to have you as a colleague. You're a
                force of nature in both your professional and personal spheres.
                As an outstanding writer, team player, devoted cat parent,
                linguist, and yogi, you consistently prove that limits don't
                exist, and dreams do come true if you believe in yourself. 🌟
                It's wonderful to work with someone who is so passionate about
                her interests and who empowers others to be their true,
                unapologetic selves. So, cheers to you on this and every other
                day! I wish everyone could have an Anja in their life! 🥂{" "}
                <span> Dragana Ječmenica </span>
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*JE8nSPks47i33Q22KNIktA.png",
            description: (
              <>
                <span> Biljana Kovač </span>
                On this International Women's Day, it's time to acknowledge your
                remarkable contributions. Your dedication, leadership, and
                resilience inspire everyone around you. You embody the essence
                of empowerment and serve as a beacon of inspiration for women
                everywhere. Happy International Women's Day!
                <span> Dunja Ibročić </span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2021/06/DSC01206-copy.png",
            description: (
              <>
                <span> Bojana Šatara Anić </span>
                Bojana, happy International Women's Day! We're delighted to have
                such a capable woman like you as part of our team. Your
                attention to detail leaves nothing unnoticed, and your proactive
                approach to work can solve even the most challenging situations.
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2020/09/DSC00sss219.png",
            description: (
              <>
                <span> Daniela Červeni</span>
                Dear Dani, For four years now, we've navigated the waters of HR
                together, and this is the perfect opportunity for me to express
                my gratitude for every bit of help, support, and kind word
                you've offered. Thank you for standing by my side from the very
                beginning and for helping me grow and thrive. We've encountered
                many beautiful moments, as well as some challenging ones, but
                thanks to your patience and expertise, we've overcome them all.
                It's a great honor to work with you, and, beyond that, it's
                incredibly enjoyable too!
                <span> Milica Stanković </span>
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/C5603AQGFSzIP0BOLrQ/profile-displayphoto-shrink_800_800/0/1654776503579?e=1715212800&v=beta&t=NGR2o5boTsDvtLKu_i2zle4klFpEi9QGMHjn0IEa80s",
            description: (
              <>
                <span> Dragana Ječmenica </span>
                Dragana, you’re not only an amazing and dedicated colleague,
                someone who’s well organized and always happy to help the rest
                of the team, but you’re someone whose youthful and cheerful
                energy is always so contagious! Whether you’re inventing
                cute-sounding new words or commenting about our crazy
                situations, your sarcasm and great sense of humor shines through
                and makes me laugh. Working with you is truly a pleasure, as is
                being friends with you. Thank you for being a fabulous colleague
                and for making our ranting sessions fun and full of laughter!
                <span> Anja Jovičin Urošević</span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2021/03/DSC00s454.png",
            description: (
              <>
                <span> Dunja Ibročić </span>
                Dunja, it's really nice to work with you. Through our
                communication, daily challenges, and plans, I honestly feel that
                we understand each other very well. After my maternity leave,
                I'm glad I met you to work together on this project. As
                challenging as the job is, I know we'll get it done right.
                <span> Biljana Kovač </span>
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*3JqBtUe-BnBUkqzcWkmoFQ.png",
            description: (
              <>
                <span> Ivana Grbić </span>I want to take a moment to celebrate
                you—not just as a fellow colleague, but as the incredible
                individual who infuses our workdays with warmth and excellence.
                From the moment I started working here, you have made me feel
                welcomed and secure as I came to you for advice almost every
                day. Your attention to detail is elevating our projects to
                levels of sophistication that wouldn't be possible without your
                touch. Thank you for being more than a colleague—a support, a
                stream of knowledge, and the person who knows the solution to
                every problem!
                <span> Teodora Pantelić </span>
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YWFZixXdjxWS95U1AgtgTg.png",
            description: (
              <>
                <span> Jasmina Dimitrijević </span>Jasmina, you're simply
                amazing! Your passion for what you do and your knack for solving
                even the trickiest coding puzzles never cease to amaze us. And
                it's not just about your coding wizardry—your upbeat vibes and
                boundless energy light up the whole team. We love how you're
                always there to lend a hand and your willingness to dive into
                any challenge head-on. Working with you is an absolute pleasure,
                and we're so grateful to have you as a cornerstone of our team!
                <span> Mirjana Parpura Đorđević</span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2022/01/jovana.png",
            description: (
              <>
                <span> Jovana Simić </span>Jovana, thank you for being a part of
                our amazing QA team! We hope you're enjoying your well-deserved
                time off and have a wonderful Women's Day celebration.
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2021/04/DSC01845-copy.png",
            description: (
              <>
                <span> Jovana Tadić </span>Jovana, we hope you're enjoying your
                well-deserved time off. Thank you for being part of this team
                and enjoy this Women's Day!
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*3NFnHw90TDfIcO6WduhI0A.png",
            description: (
              <>
                <span> Katarina Krčmar </span>Katarina, we hope you're enjoying
                your well-deserved time off. Thank you for being part of our
                engineering team, and we wish you a happy International Women's
                Day.
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2021/06/DSC0s1226.png",
            description: (
              <>
                <span> Kristina Tadić </span>Happy International Women's Day!
                Wishing you a day filled with joy, empowerment, and recognition
                for the amazing person you are. Keep smiling, dancing, and
                spreading positive energy wherever you go!
                <span> Milana Miković</span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2022/04/Marina-Vukovic.png",
            description: (
              <>
                <span> Marina Vuković </span>Dear Marina, I am continually
                impressed by your exceptional dedication and calm demeanor in
                the workplace. Your easy-going nature makes collaborating with
                you a pure pleasure, and your ability to consistently deliver
                high-quality work in a timely manner is truly remarkable.
                Thanks, and keep it up!
                <span> Vedrana Kaloper</span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2021/06/DSC01ss190.png",
            description: (
              <>
                <span> Milana Miković </span>Milana, I want to express how much
                you mean to our team. Your consistent dedication and exceptional
                skills make you an invaluable member. When faced with complex
                challenges, your positive attitude and innovative solutions
                shine through, setting you apart. We are truly fortunate to have
                someone as outstanding as you on our team.
                <span> Oliver Šipoš </span>
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5-YtJ8axQUN0jUmuLXlxrQ.png",
            description: (
              <>
                <span> Milena Petrović </span>I must shout out Milena! She's not
                just an amazing Project Manager but also one of the most genuine
                people I know. We share so many laughs together, making even the
                toughest days feel lighter. Her professionalism and reliability
                are unmatched, always there to guide the team with expertise and
                a smile. Working with her is not only productive but also a joy.
                Hats off to Milena for being such a fantastic colleague and
                friend!
                <span> Mirjana Parpura Đorđević</span>
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4E03AQGdaJ22ivVjzw/profile-displayphoto-shrink_800_800/0/1681910882695?e=1715212800&v=beta&t=YtWHjZbrkDQWmR-hpIEuqpnWugLXMAhEAMoIu1vHyYk",
            description: (
              <>
                <span> Milica Stanković </span>Mici, you know I love you! Thank
                you for being a part of what I believe is the best team anytime
                and anywhere. It's great to be here, learning and growing
                together with you. You're doing an awesome job in HR. Here's to
                lots of wins and trophies in our team sports!
                <span> Daniela Červeni</span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2021/06/DSC0ss1161.png",
            description: (
              <>
                <span> Milica Baturan </span>Happy International Women's Day,
                Milica! Thank you so much for being part of our team and
                expertly finding all the bugs.
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2022/04/Milica-Stojakovic-site.png",
            description: (
              <>
                <span> Milica Stojaković </span>Milica, you're the ray of
                sunshine in our office with your ever-present smile and
                impeccable style. Your cheerful spirit uplifts the entire team,
                and your willingness to participate in events and lend a helping
                hand is truly admirable. You're not just a beautiful and
                pleasant businesswoman; you're a source of inspiration, and I'm
                confident that even greater successes await you. Happy 8th of
                March and keep shining bright!
                <span> Milica Stojaković</span>
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*jPgewAvn3UqDh6P4ara2NA.png",
            description: (
              <>
                <span> Mirjana Parpura Đorđević </span>Mira, you're a true
                professional who consistently goes above and beyond, ensuring
                that every team member feels not only supported but truly
                valued. Your attention to detail and empathy make a significant
                difference in fostering a positive work environment. You nurture
                a culture of inclusion and understanding, creating a safe space
                for open communication and problem-solving. Your ability to
                navigate through challenging situations with grace and tact is
                truly admirable. "Kad je teško - Mira". Thank you, Mira, for all
                that you do.
                <span> Milena Petrović</span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2021/06/DSC0109ss4.png",
            description: (
              <>
                <span> Miroslava Debeljački Jovičić </span>Here's to Miroslava,
                our daring Flutter developer! Fearlessly exploring uncharted
                realms, she elegantly conquers challenges and demonstrates
                remarkable endurance. Kudos to this superwoman, supermom, and
                superdeveloper—an outstanding individual worthy of our highest
                admiration and respect!
                <span> Tanja Maliković </span>
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*wfKC7chsZfyCM744i3G4Vg.png",
            description: (
              <>
                <span> Nastasija Trajanova </span>It's incredibly inspiring to
                come across a young woman who is not only super successful in
                her profession but also embodies genuine warmth and kindness. I
                feel truly grateful to have crossed paths with such an
                extraordinary person.
                <span> Viktorija Simonoska </span>
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*RVUSD5FnIF8XcL_XqFXPGw.png",
            description: (
              <>
                <span> Nevena Nemeš </span>Nevena, you truly embody an
                incredible mix of warrior strength and genius intellect, all
                wrapped up in the kindest, most approachable person one could
                ever meet. Your ability to effortlessly simplify complex issues,
                smooth tough situations with a gentle touch, and conquer big
                obstacles with ease never ceases to amaze me. You have this
                subtle way of making us all feel at our best, and we hardly
                notice until we're shining brighter because of it. I deeply
                admire your immense power in fighting negativity, and your
                belief in the goodness of people spreads, uplifting everyone
                around you. A huge thank you to you, Nevena, for your endless
                energy and for being the kind of friend who listens even when
                words are left unsaid and sees through darkness.
                <span> Svetlana Kosić </span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2021/06/DSC011ss73.png",
            description: (
              <>
                <span> Radmila Stanivuk </span>Radmila, thank you for your work
                at BrightMarbles and your exceptional expertise in QA. We
                greatly appreciate your dedication. We hope you're enjoying your
                well-deserved time off as a mom.
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2021/03/DSC0067sss6.png",
            description: (
              <>
                <span> Smiljana Vidić </span>Smiljo, your support and presence
                mean a lot to us, and your calm demeanor is the perfect recipe
                for a wonderful day. Wishing you lots of health and love.
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2021/06/DSC01sss011.png",
            description: (
              <>
                <span> Suzana Vasić </span>There are no limits to your
                dedication and loyalty. Your strength and resilience are
                remarkable. Bringing light and positivity into everyone's lives
                is your specialty. Let the world shower you with kindness and
                opportunities for growth, love, and happiness. Explore every
                corner of this planet and fill your soul with its wonders. And
                although we always joke that you are half woman half calculator,
                don’t ever lose sight of how unique woman (and calculator) you
                are and how much this world is rich to have you leaving your
                mark everywhere you go.
                <span> Aleksandra Grbić </span>
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D03AQHKWLYJ72Jbvw/profile-displayphoto-shrink_800_800/0/1664962537289?e=1715212800&v=beta&t=H9W0Q2GzySxoEEYZGZfaXVrTDfNGkwQw5k9YQiE8NJs",
            description: (
              <>
                <span> Svetlana Kosić </span>Ceca, you are our go-to source for
                creativity and innovative ideas, with a flair for writing that's
                unmatched and a genuine care you pour into every task. Your
                passionate advocacy for justice and commitment to socially
                responsible causes shines through in your work, leaving a
                meaningful imprint both inside and beyond our company walls. You
                add color to our office life, bring creativity to our projects,
                and warmth to our team. Thanks, Ceca, for being not just an
                exceptional colleague but also a true friend whose talent and
                dedication never cease to amaze us!
                <span> Nevena Nemeš </span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2022/04/DSC0140ss7.png",
            description: (
              <>
                <span> Tanja Maliković </span>Working with you, Tanja, is always
                a pleasure, and learning from you is equally fulfilling. You're
                an incredible colleague and mentor, always ready to lend a
                helping hand. I genuinely appreciate your reliability,
                thoughtfulness, and patience, as well as your eagerness to
                tackle challenging situations. Your positive energy has a unique
                way of turning Mondays into Fridays!
                <span> Miroslava Debeljački Jovičić </span>
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*au6J4za0YoBLk3iQ6dnnoA.png",
            description: (
              <>
                <span> Teodora Pantelić </span>Teodora, you are truly
                remarkable. Your kindness and cheerfulness never fail to
                brighten our days, but what I admire most is your proactive
                approach and willingness to assist in every situation. It's
                amazing how capable you are—there's never a task left unfinished
                because you're determined to find a solution, no matter what.
                You're definitely the kind of colleague we all want in our team!
                <span> Ivana Grbić </span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2021/06/DSC009sss81.png",
            description: (
              <>
                <span> Vedrana Kaloper </span>Dear Vedrana, we’ve known each
                other for quite some time now and I must say I really appreciate
                your dedication to both your career and your family. Despite
                being a devoted mother of two, you remain committed to your
                professional growth and development. You are always open to
                learning and improving yourself. And you always look great!!! 😊
                <span> Marina Vuković </span>
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*om38JyXIu_xqF90vSyz2GQ.png",
            description: (
              <>
                <span> Viktorija Simonoska </span>On this International Women's
                Day, I want to take a moment to appreciate my incredible
                colleague, Viki! 🎉 My fellow Aquarius and the powerhouse of
                style and creativity in our branch! Your impeccable sense of
                design and trend-setting UI/UX skills never cease to amaze me.
                Here's to celebrating your unique talents and the vibrant energy
                you bring to our team every day. 🌟
                <span> Nastasija Trajanova </span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2020/09/ZLATA-sscopy.png",
            description: (
              <>
                <span> Zlata Solarov </span>It's a pleasure to work with capable
                women. Zlata makes a significant contribution to our company;
                she's always in a good mood and brings positive energy to her
                work. Her photos especially highlight the positive working
                atmosphere. She consistently strives to give her best in her
                work. Keep it up, Zlata!
                <span> Milica Stojaković </span>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2022/04/Zeljka.png",
            description: (
              <>
                <span> Željka Aleksić </span> Željka, working alongside you has
                been truly enjoyable and inspiring. Your exceptional coding
                skills, dedication to quality, and collaborative spirit make you
                an invaluable asset to our team. You consistently go above and
                beyond, bringing creativity and innovation to every project you
                touch. It's really an honor to work side by side with you. Thank
                you for your hard work and positive impact on our BrightMarbles
                team.
                <span> Luka Marić </span>
              </>
            ),
          },
        ]}
      />
      {/* <Birthdays
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
      /> */}
      <Contributions />
      <ThreeColorDivider hideWhite />
    </div>
  );
};
