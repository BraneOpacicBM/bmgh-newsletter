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
    const { loading, isVerified } = useVerify();

    if (loading || !isVerified) return null;

  return (
    <div className={styles.newsletter_body}>
      <Header
        title="April / May Company Update"
        leftParagraphs={[
          {
            title: "Bench Strength:",
            description:
              "Our team remains strong and stable, with no major changes since last month. We're continuing our proactive recruitment to gear up for exciting new client projects on the horizon.",
          },
        ]}
        rightParagraphs={[
          {
            title: "Profit:",
            description:
              "April saw a 6% dip in our net profit margin, largely due to increased time-off taken by the team (18% more than in March).",
          },
          {
            title: "Cash Flow:",
            description:
              "While this will impact our cash flow in May, we're committed to navigating this challenge and anticipate stronger cash flow in the latter half of the year.",
          },
        ]}
      />
      <ProjectClientSection
        leftParagraphs={[
          {
            title: "ARS T&TT",
            description:
              "ARS Traffic & Transport Technology stands as a premier provider of Intelligent traffic and transport technology solutions, boasting a legacy of over 24 years. Their mission revolves around enhancing transportation safety, efficiency, and sustainability for all stakeholders, which is achieved through the application of pioneering technology and collaborative efforts with clients and associates. Our team on the project consists of Oliver Šipoš and Marjan Stojković. Marjan is currently working with databases, as data migration from the old system version to the new one is underway. Meanwhile, Oliver is focused on the application side, primarily addressing bugs.",
          },
          {
            title: "Carna",
            description:
              "Businesswire has published a press release spotlighting Carna Health's executive team and the encouraging early outcomes of the CDK screening trial in Bermuda.",
          },
          {
            title: "Concorde Health",
            description:
              "The project is in its final phase; currently, teams are working on minor improvements. There's just a few more weeks of bug fixing left, and the project is nearing completion.",
          },
          {
            title: "Crayon OTP",
            description:
              "OTP has extended their engagement until the end of this month, and it seems there will be more work there.",
          },
          {
            title: "Crayon STADA",
            description:
              "We're in negotiations for the allocation of new DevOps to the project, probably 50% to the existing project and one person to the new project.",
          },
          {
            title: "Crayon Zepter",
            description:
              "The Zepter project should be finished by the end of the month.",
          },
          {
            title: "Greenlite",
            description:
              "Since our last update, we've continued working on improvements on the production platform. We've had a couple of releases with the latest one at the end of April. These releases continue to improve the core tooling based on continuous feedback from the Greenlite review teams, working on active projects for several clients building with the help of the platform. After that last big release, the last couple of weeks have been filled with work on smaller improvements as most of the team has been on well-deserved leave around the May holidays. Coming back at almost the mid-point of May, the team will be focused on review sessions and planning out the next couple of months. We’re looking forward to either continuing building out improvements and addressing feedback, or as mentioned in the last update, focusing on onboarding and planning all the work that we would be starting on the new platform.",
          },
        ]}
        rightParagraphs={[
          {
            title: "MijnDomein",
            description:
              "Over the past couple of months, we initiated the idea of having feature leads, with Vladan Desnica stepping up as our lead. Under his guidance, the project he's overseeing has progressed seamlessly. Additionally, we've commenced discussions with MijnDomein to potentially provide our security services, starting with a penetration test.",
          },
          {
            title: "Penetration Testing projects",
            description:
              "Pentest projects have seen increased activity from both channel partners and direct sales. We are excited to onboard a new intern starting June 1st as part of our expanded internship program. We are in talks with a local bank to continue our penetration testing partnership, and we have also initiated one of our largest pentesting projects to date. Lastly, we have launched a penetration testing progression framework to enhance the skills and effectiveness of our team.",
          },
          {
            title: "Raven",
            description:
              "Our focus is on bug fixing and the planning of the next phase of the project.",
          },
          {
            title: "Zein",
            description:
              "The first phase of the project ends on May 31st; it’s still unknown if we will be extending our work. The project is progressing well, and we anticipate potentially finishing even before the deadline.",
          },
          {
            title:
              "Adriaan, Anycoin, Anyone, Costa Coffee, Hadrian, NAQ, Simplify Orange, Toogethr Parking & Drive",
            description: "Business as usual.",
          },
        ]}
      />
      <QuickUpdate
        company={Company.BRIGHT_MARBLES}
        title="Our Journey to The Hundred Begins!"
        description={
          <div>
            <div>
              In April, we had a company meeting at the NS office where we
              introduced something exciting - the merger into one company: The
              Hundred 💯 We're super pumped about everything that's coming, and
              we believe this new chapter will help us achieve even greater
              results and smash all our goals! In addition to this big news, our
              team participated in the IT Loop fair and the student conference,
              where we talked to bright future engineers, presenting the company
              to them. In the Belgrade Marathon, Imre tackled the full 42km,
              enduring the challenging uphill routes, while Brane conquered the
              21km, and Pavle smashed his personal record with a 10km run. Huge
              congrats to our marathon heroes! 🎉
            </div>
          </div>
        }
      />
      <QuickUpdate
        bgColor="white"
        company={Company.BRIGHT_MARBLES_MACEDONIA}
        title="Macedonian Office Updates: Congratulations to Igor Bulovski on His Wedding!"
        description="At the Macedonian office, it's business as usual. But have you heard the wedding bells? Yes, you've heard them correctly – Congratulations Igor Bulovski on your wedding!"
      />
      <QuickUpdate
        bgColor="black"
        company={Company.BRIGHTLY}
        title="Updates from Brightly: Marathon Participation, Health Lecture, and Farewell to Teodora"
        description={
          <div>
            <div>
              At Brightly, we've been busy. Darko Petrović took on the 21km
              Belgrade Marathon, putting our app to the test, while our team
              supported the participants throughout the event. We kicked off
              April, the world health awareness month, with an insightful
              lecture from nutritionist Biljana Gavović. Sadly, we also said
              goodbye to our wonderful Office Manager, Teodora. We wish her all
              the best in her future endeavors!
            </div>
          </div>
        }
      />{" "}
      <QuickUpdate
        bgColor="white"
        company={Company.UN1QUELY}
        title="UN1QUELY Highlights: Conferences, Marathons, and Educational Events"
        description="Our UN1QUELY team remains strong in their commitment and productivity. During Women's Month, we hosted impactful cybersecurity events that have significantly boosted interest in the UN1QUELY Academy. Additionally, our engineers consistently foster successful client collaborations across various projects. Fantastic job, team—keep pushing forward!"
      />
      <NewsAndEvents
        data={[
          {
            img: "https://humanitarianglobal.com/wp-content/uploads/2021/09/Principles-of-Nutrition-Article-scaled.jpg",
            title: "Healthy Nutrition Principles on World Health Day",
            description: (
              <>
                On World Health Day, nutritionist Biljana Gavović gave an
                insightful online lecture, debunking myths and guiding us on the
                right path to health.
                {/* <a target="_blank" href="">
                  Click here to read more
                </a> */}
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D5622AQHn-CMKnpMYUQ/feedshare-shrink_2048_1536/0/1713533761313?e=1718841600&v=beta&t=jYaLWkhQ9wFaPWo3wMcqSO2gNdrgId0u46VIjwA4q9g",
            title:
              "Empowering Young Minds: Scratch Workshop for Autism Awareness Month",
            description: (
              <>
                In April, during World Autism Month, we held a Scratch
                programming workshop for children and youth with autism. This
                inspiring workshop, attended by 16 wonderful young people,
                filled our hearts and emboldened us for future endeavors in this
                field. We owe a big thank you to Srđan Marjanović, Darko Kovač,
                Luka Kovač, Oliver Šipoš, Milan Stančić, Nenad Rakić, Ivana
                Grbić, the marketing team, and the HR team.
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D22AQGnMRbzoyNgmg/feedshare-shrink_2048_1536/0/1715252929615?e=1718841600&v=beta&t=BxfGV606DPAfLhqifNopyvbGdCM23DLSuTVOVDl4Hzo",
            title: "Cheers to Gin & Tonic with Ginović!",
            description: (
              <>
                We recently hosted a cocktail party where our very own Srđan
                Marjanović, a partner at Ginović, treated us to an unforgettable
                evening. Srđan showcased their exceptional products and crafted
                delicious gin and tonics, making the experience truly
                delightful.
                {/* <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/implementing-tech-behind-a-healthy-future/"
                >
                  Click here to read more
                </a> */}
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D22AQFcQBDppKWENQ/feedshare-shrink_2048_1536/0/1713949758618?e=1718841600&v=beta&t=MKEa_MBfDuwccBXzBB9jUanOhFm6OrCYnzEv1LNe_pQ",
            title: "Celebrating World Book Day with Generosity",
            description: (
              <>
                This World Book Day, the incredible team at BrightMarbles Group
                has turned a page towards compassion and community support.
                United by our love for literacy, our colleagues gathered a
                significant collection of books for the young residents at the
                Shelter for Children and Youth of the City of Novi Sad, the
                School for Elementary Education of Adults “Sveti Sava,” Novi
                Sad, as well as the Nursing Home for the Elderly “Novi
                Dživdžani,” Belgrade, and the Center for the Protection of
                Infants, Children, and Youth “Zvečanska,” Belgrade.
                {/* <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/recap-of-womens-history-month-at-brightmarbles-group/"
                >
                  Click here to read more
                </a> */}
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4E22AQE2fYH_OoNNqA/feedshare-shrink_2048_1536/0/1714387491484?e=1718841600&v=beta&t=xM5r0A6K6bmM-Zr6al08DJZ-AcIiiYu77y1_kBokYZg",
            title: "Family Day Fun in Novi Sad",
            description: (
              <>
                In April, we celebrated Family Day in Novi Sad, and it was an
                absolute blast! We had a fantastic time coloring Easter eggs,
                with little ones getting delightfully messy in the process. Our
                young artists also enjoyed drawing, painting, making new
                friends, and exploring our office. Thank you to all the families
                who joined us and made this day memorable!
                {/* <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/business-strategy-and-brand-positioning-an-interview-with-nevena-nemes/"
                >
                  Click here to read more
                </a> */}
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D22AQEDHgW8IyJr4Q/feedshare-shrink_2048_1536/0/1715084854464?e=1718841600&v=beta&t=SUZYwd781mHZxz4Zuaq9XfFQMoRXC3v7x8xdyfIcRr8",
            title: "Run BMGH, Run! Marathon Highlights",
            description: (
              <>
                What an amazing performance by our incredible team from
                BrightMarbles, Brightly, and UN1QUELY at the marathon! A huge
                congratulations to Imre for conquering the full 42km, and to
                Branko, Brane, and Dušan for their impressive 21km finishes.
                Kudos also to Pavle, Filip, Mihailo, and Marko for completing
                the 10km race with flying colors. A special shoutout to the team
                that organized and managed the entire event and participated in
                the Running Expo. We're proud of each and every one of you!
                {/* <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/hr-feat-business-development-an-interview-with-mirjana-parpura-dordevic/"
                >
                  Click here to read more
                </a> */}
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D22AQHISgS5Miahpg/feedshare-shrink_2048_1536/0/1715594813476?e=1718841600&v=beta&t=gapzDflzntxYc-EVF0nUzojLuBvolLeIyfAyYMt80KU",
            title:
              "Inspiring Future IT Professionals at the Student Conference in Novi Sad",
            description: (
              <>
                In May, the association We are the FUTURE of IT organized an
                inspiring student conference and job fair in Novi Sad.
                Participants had the chance to attend a lecture on cybersecurity
                and gain valuable insights into our company, thanks to our
                dedicated HR team.
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D22AQHpzBNhwshxDQ/feedshare-shrink_2048_1536/0/1711032366475?e=1718841600&v=beta&t=w4KrR2I7wzFIdAi0hAeTCfSgTOaP277jGzzqzas_tzs",
            title:
              "IT'S CYBER DAY event at the Faculty of Science, University of Kragujevac",
            description: (
              <>
                At the panel discussion held during the IT'S CYBER DAY event at
                the Faculty of Science, University of Kragujevac, Lazar, along
                with other experts in the field of cybersecurity, discussed and
                addressed topics related to current projects and developments in
                the public sector, future cybersecurity trends in business,
                career paths in cybersecurity, employers' expectations from
                candidates, and personal career journeys and experiences.
              </>
            ),
          },
          {
            img: "https://media.licdn.com/dms/image/D4D22AQFT3TtnaPWCVg/feedshare-shrink_2048_1536/0/1714049379627?e=1718841600&v=beta&t=Hck92MwJ3IL-oQTDXxtrtWaTgdmqMj-gDs4AOqHlqq8",
            title:
              "First Contemporary Security Challenges Conference in Montenegro",
            description: (
              <>
                Branko Džakula, participated in the first-ever conference
                'Security - Challenges and perspectives' organized by the
                Association of Security Managers of Montenegro. This significant
                event, held under the distinguished auspices of the President of
                Montenegro, highlighted the rapid progress and strong support
                for enhancing security practices within the region. During the
                panel, Branko shared valuable insights alongside esteemed
                industry peers, emphasizing the critical need to bridge the
                cybersecurity skills gap. This is crucial for the successful
                implementation of Montenegro’s National Cybersecurity Strategy
                and the ongoing battle against cybercrime.
              </>
            ),
          },
        ]}
      />
      <OpenPositions
        jobPostings={[
          {
            title: "General application for software developer (BMGH)",
            postingUrl:
              "https://bmgh.zohorecruit.eu/jobs/Careers/36808000000430020/Experienced-Software-Engineer---Node-js?source=CareerSite",
          },
          {
            title: "Finance assistant (BMGH)",
            postingUrl:
              "https://bmgh.zohorecruit.eu/jobs/Careers/36808000004694001/Finance-Assistant?source=CareerSite",
          },
          // {
          //   title:
          //     "Experienced Software Engineer (Node.js) - Medior or Senior level (BRIGHTMARBLES & UN1QUELY)",
          //   postingUrl:
          //     "https://bmgh.zohorecruit.eu/jobs/Careers/36808000000430020/Experienced-Software-Engineer---Node-js?source=CareerSite",
          // },
        ]}
      />
      <ThreeColorDivider />
      <Colleagues
        colleagues={[
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2022/01/Aleksandra.png",
            fullName: "Aleksandra Grbić",
            jobTitle: "Finance Assistant",
            description:
              "Suzana Vasić: Dear (Alek)Sandra, I am beyond jealous of your future colleagues because they are so blessed to have someone like you on their team, just as we were. To say you will be missed is an understatement of the century. You are one of the sharpest people I’ve ever worked with, and you’ve made our finance team impeccable. We’ve grown with you, and I dare say, you’ve grown with us as well. Thank you for always giving 100% (and at times even more), for showing initiative, taking ownership, and creating a wonderful office vibe. May you thrive and excel on your new journey!",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*ePfVFLytghdAMgFOhfofMw.png",
            fullName: "Darko Petrović",
            jobTitle: "DevOps Engineer",
            description:
              "Tanja Maliković: In the kingdom of code, where servers roam free, there's a hero among us, as eager as can be. With a heart full of dedication and a mind sharp and keen, our DevOps dynamo shines like a gleam! Through storms of bugs and glitches, he bravely strides, with a smile on his face and solutions by his side. When servers stutter and systems quake, he's there in a flash, no challenge too great. Nemaš frke šefe, he says with a grin, as he tackles each task with vigor within. No problem too puzzling, no glitch too tall, our DevOps champion conquers them all! So, here's to our colleague, so helpful and true, with a spirit that's bright and a heart that's brand new. In the world of DevOps, he's a shining star, spreading joy and solutions, near and far!",
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif",
            fullName: "Marjan S. & Darko F.",
            jobTitle: "Software Engineers",
            description:
              "Mirjana Parpura: Marjan and Darko exemplify the epitome of dedication and adaptability as Senior Software Engineers. Their remarkable flexibility and strong commitment have been instrumental in successfully navigating the intricacies of handling two pivotal projects concurrently. Despite the demanding nature of their roles, Marjan and Darko have demonstrated exceptional time management skills and a profound understanding of prioritization, ensuring that both projects receive the attention and expertise they require.  Thank you, guys!",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*c5mzfJWTiD_uwbNfptNaQg.png",
            fullName: "Dušan Srbulović",
            jobTitle: "Software Engineer",
            description:
              "Brane Opačić: Big congratulations to Dušan Srbulović for seamlessly diving into the Zein project with such speed! His contributions have made an instant positive difference, boosting both productivity and overall conditions. Dušan's versatility and dedication are truly admirable traits that deserve recognition.",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*920ruFBiuUoJiwOK7HqoEg.png",
            fullName: "Ognjen Atlagić",
            jobTitle: "Software Engineer",
            description:
              "Brane Opačić: A big round of applause for Ognjen Atlagić, who diligently refreshes our newsletter every month! His technical expertise ensures smooth deployment, delivering a fresh version of the newsletter like clockwork. Thank you so much, Ognjen, for your consistent enthusiasm - your hard work doesn't go unnoticed!",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*c-UWcbh89NkHrpeNGAyhFA.png",
            fullName: "Miroslav Milićević",
            jobTitle: "OffSec Engineer",
            description:
              "Branko Džakula: During the recent period, Miroslav Milićević excelled in establishing and educating the Red Team within the cybersecurity department. Miroslav's dedication, exceptional organizational skills, and openness have been instrumental in this endeavor. Well done, Miroslav! We truly appreciate your work and effort!",
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif",
            fullName: "Carna",
            jobTitle: "Team",
            description:
              "Boris Berat: Hats off to the entire Carna team for their exceptional commitment and effort in developing the Carna platform, a project with the potential to save countless lives. It's truly heartening to see this noble mission recognized by Businesswire, which featured a PR article highlighting Carna Health's leadership team and the promising initial results of the CDK screening pilot in Bermuda. Congratulations on a job well done, team!",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*NoCsyngn_vP6ZBQSATer2A.png",
            fullName: "Ivana Grbić",
            jobTitle: "Office Manager",
            description:
              "Branko Džakula: During the recent period, Ivana Grbić played such an important role in organizing both internal and external events, actively participating in every aspect and demonstrating remarkable organizational skills. Ivana's fantastic contributions have been key in the success of these events, and her commitment is truly appreciated. Thank you, Ivana, for your dedication and cheerful spirit. You’re an invaluable part of BrightMarbles, and we truly appreciate everything you do!",
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif",
            fullName: "Autism Workshop",
            jobTitle: "Tutors",
            description:
              "Nebojša Lalić: Let's give a round of applause to our remarkable tutors from the programming workshop for children with autism: Darko Kovač, Luka Kovač, Oliver Šipoš, Nenad Rakić, Srđan Marjanović, and Milan Stančić. Their amazing organizational skills and patience have left a profound impact on the workshop participants. Through their expertise and compassionate guidance, they have not only imparted valuable knowledge but also nurtured a supportive learning environment. Their commitment to making a difference is truly inspiring and deeply appreciated.",
          },
        ]}
      />
      <FamilyNews
        title="A reason to celebrate"
        data={[
          {
            img: "data:image/jpeg;base64,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",
            description: (
              <>
                Hello baby Alisa! Warmest congrats to our colleague Darko on the
                birth of his little princess Alisa. 👶🍼 Your arrival brings
                overwhelming joy and happiness. May your days be filled with
                love, laughter, and the endless exploration of all the wonders
                life has to offer. Cheers to your new adventure! Congratulations
                to <span> Darko Bučevac </span>
              </>
            ),
          },
          {
            img: "https://images.pexels.com/photos/7784602/pexels-photo-7784602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: (
              <>
                Massive congrats to Milica and her partner on this incredible
                milestone. 🤵👰 Your legal bond marks the beginning of a
                beautiful journey filled with love, growth, and endless
                possibilities. Here's to a future where every vow spoken becomes
                a cherished reality, and every promise fulfilled brings you
                closer together. 💍 Cheers to your happily ever after! ⭐
                Congratulations to <span> Milica Stojaković </span>
              </>
            ),
          },
        ]}
      />
      <Birthdays
        employees={[
          {
            name: "Vladislav",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*eVvf5A-Cu4K6CtELelCJHQ.png",
          },
          {
            name: "Boris",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2020/09/boris2-.png",
          },
          {
            name: "Dušan",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*c5mzfJWTiD_uwbNfptNaQg.png",
          },
          {
            name: "Igor",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*UHR2RPXGaYLUry0NqebTtw.jpeg",
          },
          {
            name: "Desko",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*3v7EGF1ORki-JDcD8xoZxw.png",
          },
          {
            name: "Gjorgji",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*n99nODYZ80OHwHZNZwnPzg.png",
          },
          {
            name: "Zoran",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*m-r-onxp9tgq6NBhtI1LAQ.png",
          },
          {
            name: "Marko",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*-E1Cabuq7G1LkxF1RB3TTw.png",
          },
          {
            name: "Smiljana",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*2QcIFYzTMo8uV3Y4IYZdlw.png",
          },
          {
            name: "Milenko",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*a_uEo_Bk3BcjK3F9QtB2Tg.png",
          },
          {
            name: "Nemanja",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:640/format:webp/1*x3ylZF_yMXM3BmSa4IAVmg.png",
          },
          {
            name: "Erhad",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif",
          },
        ]}
      />
      <Contributions />
      <ThreeColorDivider hideWhite />
    </div>
  );
};
