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
        title="October Finance &amp; Project Update"
        leftParagraphs={[
          {
            title: "Bench Strength:",
            description:
              "This month, we've experienced a slight slowdown in our operational pace, primarily due to the completion of two major projects, Fireside and Cognata. Additionally, the ongoing conflict in Israel has impacted us, resulting in the loss of potential new leads unable to kickstart their projects. Despite these challenges, our bench strength remains consistent with the previous month.",
          },
        ]}
        rightParagraphs={[
          {
            title: "Profit:",
            description:
              "Our profit for the recent period has fallen short of our expectations. While maintaining company stability, the wrap-up of major projects, coupled with the ongoing global challenges, has slowed our progress toward profit targets. However, we are fully aware of these hurdles. Our entire team is mobilizing its strengths and capabilities to address this situation proactively.",
          },
          {
            title: "Cash Flow:",
            description:
              "On a brighter note, our cash flow is stabilizing. We've seen a positive trend with clients making timely invoice payments, contributing significantly to the company's financial stability.",
          },
        ]}
      />
      <ProjectClientSection
        leftParagraphs={[
          {
            title: "Bielik",
            description:
              "The project is proceeding smoothly. Our initial engagement (MVP) will conclude on November 30. Post-MVP, our cooperation may continue, dependent on investment outcomes based on that MVP.",
          },
          {
            title: "Carna",
            description:
              "We're excited to share that Carna is at the finish line for launching the much-anticipated Bermuda Project, a milestone development that includes both web and mobile applications. Following this, we will embark on the Cameroon project.",
          },
          {
            title: "Concorde Health",
            description:
              "Milestone 2 has been released on the staging environment for the web, mobile, and backend teams. We are gearing up for Milestone 3 and the pilot testing with BrightMarbles employees.",
          },
          {
            title: "Crayon",
            description: "We provide consulting services for Stada and OTP.",
          },
          {
            title: "Greenlite",
            description:
              "Having completed the initial big build phase, Greenlite is now out of the shadows and running a marketing campaign to attract even more prospective clients. With that in mind, BrightMarbles engineers are now involved in building and improving core product features. Those include a new project metric dashboard 'Atlas' aimed at higher level management that will highlight the status of all construction projects for a given company. The second major work stream includes significant upgrades to the architectural plan review tool, most notably real-time collaboration. This work is planned out through the end of the year, with the product and engineering teams also working on defining the early Q1 initiatives.",
          },
          {
            title: "Incentic (Bosch)",
            description:
              "Our colleague Marjan is developing a Bosch IOT internal system for production management using Java.",
          },
          {
            title: "MTV",
            description:
              "The project is in its final phase; the deadline is mid-December and, so far, it looks challenging but feasible.",
          },
          {
            title: "NAQ Cyber",
            description:
              "The Naq Cyber team is actively involved in transitioning to a new application, with significant progress already achieved. Notably, Daniel and Kristina have rejoined the team, enhancing our capabilities and contributing to the project's success.",
          },
          {
            title: "Penetration Testing projects",
            description:
              "We welcomed two new members to our PenTesting team. The bandwidth and engagement were increased to over 20 projects per month on average, and we are now experiencing a constant rise in demand.",
          },
        ]}
        rightParagraphs={[
          // {
          //   title: "Penetration Testing projects",
          //   description:
          //     "We welcomed two new members to our PenTesting team. The bandwidth and engagement were increased to over 20 projects per month on average, and we are now experiencing a constant rise in demand."
          // },
          {
            title: "Raven",
            description:
              "We are currently implementing a slight redesign of the application, with ongoing development. Due to a recent team reshuffle, we've modified our plans slightly, aiming for a release by the end of January.",
          },
          {
            title: "Route ticketing",
            description:
              "Our colleague Nemanja is working on an MVP Route ticketing app which should be used for big commercial vehicles (trucks), focusing on the creation, planning, and charging of all route-related costs.",
          },
          {
            title: "Security Operations projects",
            description:
              "Our team has embarked on a vCISO/SecOps project with a U.S.-based B2B SaaS client. We're also gearing up for a new SecOps project with a German company specializing in Autonomous Driving SaaS.",
          },
          {
            title: "Simplify Orange",
            description:
              "The project is proceeding according to plan. The client is satisfied, and they’ve raised the budget for this year in the number of hours. The good news for us is that they have decided against internal hiring, which likely means a renewed contract for us in the upcoming year and potentially more work.",
          },
          {
            title: "Toogethr Parking & Drive",
            description:
              "Cycling: Focused on SDK updates and bug fixes. Parking: We're introducing a new parking fee calculator feature, Single Sign-On (SSO), and an advanced dashboard. Further integration with Easy Parking and improvements to the EV charger feature are underway.",
          },
          {
            title: "vCISO projects and Partnership updates",
            description:
              "We've established a new partnership with a Croatian SaaS company. Our pipeline for long-term vCISO projects is expanding, with feedback awaited from several highly qualified prospects in Switzerland, the U.S., and New Zealand.",
          },
          {
            title:
              "Anycoin, Aurum Fitness, Costa Coffee, Ethiks.ai, Hadrian, MijnDomein",
            description: "Business as usual.",
          },
          {
            title: "26bits (Porsche), HelloAgain, Fireside, Cognata",
            description:
              "Our collaboration with these clients has concluded for now.",
          },
        ]}
      />
      {/* <QuickUpdate
        bgColor="white"
        company={Company.BRIGHT_MARBLES_MACEDONIA}
        title="Lorem ipsum dolor sit amet consectetur adipisicing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam."
      /> */}
      <QuickUpdate
        bgColor="black"
        company={Company.BRIGHT_MARBLES_MACEDONIA}
        title="Среќен роденден!🎂🥳"
        description={
          <div>
            <div>
              It’s been an exciting 2 years since BrightMarbles Macedonia opened
              its doors. We are proud to have managed to build a great team with
              awesome people and we sure look forward to an even brighter
              future.{" "}
            </div>
            <div>
              To commemorate this milestone, we hosted a special celebration at
              our Skopje Office on November 10th. There was plenty of cake for
              everyone. Did I say cake? I meant rakija, sorry!
            </div>
            <div>
              🥂 Cheers to many more years of innovation, collaboration, and
              success at BrightMarbles Macedonia!
            </div>
          </div>
        }
      />
      <QuickUpdate
        company={Company.BRIGHT_MARBLES}
        title="Rust in Pieces: Benefits of the Ownership System's Knowledge Sharing Session at the Geekstone Event"
        description={
          <div>
            <div>
              This month in Novi Sad, we had a real treat – Nenad Stojković's
              deep dive into Rust's Ownership System at the Geekstone event. As
              our Tech Officer, Nenad covered key aspects like ensuring memory
              safety, enhancing code clarity, improving performance, and
              addressing bugs. The session was a rich source of practical
              knowledge, showcasing our commitment to quality tech practices.{" "}
            </div>
            <div>
              Big cheers to Nenad for making those Rust complexities look easy!
              And hey, a huge thanks to all of you who joined in. Your support
              and enthusiasm for learning more about Rust turned this event into
              something fantastic. Excited for more get-togethers like this in
              the future! 💪🙌👏
            </div>
          </div>
        }
      />
      <QuickUpdate
        bgColor="white"
        company={Company.BRIGHTLY}
        title="Teodora Pantelić Steps into Office Manager Role in Belgrade Office"
        description="Join us in welcoming Teodora Pantelić as our new Office Manager in Belgrade! Teodora steps into the role previously held by Tijana Petković, and we're excited to have her bring fresh perspectives and energy to the Brightly team. Here's to a successful journey together!"
      />
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
     />{" "} */}

      <QuickUpdate
        bgColor="black"
        company={Company.UN1QUELY}
        title="Welcome Danijel Dejanović, Our New Cybersecurity Engineer at UN1QUELY!"
        description="We're thrilled to announce Danijel Dejanović as the latest addition to our Cybersecurity Department. Joining as a Junior Offensive Security Engineer, Danijel stood out as a top participant in our Amplitudo Academy. His exceptional dedication to mastering ethical hacking makes us thrilled to have him on the team. Welcome aboard, Danijel!"
      />

      <NewsAndEvents
        data={[
          {
            img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*3NrNrEIRWNJ46o-Zsvmehg.jpeg",
            title: "Среќен роденден на BrightMarbles Macedonia!",
            description: (
              <>
                🎉 Happy 2nd Birthday to BrightMarbles Macedonia! 🎂 Here's to
                two years of innovation, growth, and success. Cheers to the team
                for their hard work and dedication. Exciting times ahead!
                {/* <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/beyond-the-quote-the-realities-of-app-development-pricing/"
                >
                  Click here to read more
                </a> */}
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*R1xLQhdejclB7p1nQe8Z_A.jpeg",
            title:
              "Rust in Pieces: Benefits of the Ownership System (Nenad Stojković)",
            description: (
              <>
                Nenad Stojković shared insights at the Geekstone event, delving
                into Rust's Ownership System, memory safety, code clarity,
                performance, and bug mitigation. A knowledge-packed session
                reflecting our dedication to tech excellence.
                {/* <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/beyond-the-quote-the-realities-of-app-development-pricing/"
                >
                  Click here to read more
                </a> */}
              </>
            ),
          },
          {
            img: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*_q6CmfLpxFBUQA0Th9aLSw.jpeg",
            title: "2023’s Cutting-Edge DevOps Trends (by Dragan Tomašević)",
            description: (
              <>
                Explore the future of DevOps in 2023 through Dragan Tomašević's
                blog. Learn about AI's role in anomaly detection, advanced
                testing, and security, along with the impact of NoCode/LowCode
                tools. Dive into DocsAsCode principles for smoother
                documentation integration. Elevate your DevOps game with these
                trends for increased efficiency and collaboration.
                <a
                  target="_blank"
                  href="https://medium.com/@Brightly_BMGH/2023s-cutting-edge-devops-trends-e9afff3baef7"
                >
                  Click here to read more
                </a>
              </>
            ),
          },

          {
            img: "https://content.kaspersky-labs.com/fm/press-releases/63/63459fdac7669bf9de01be2aaf38470b/processed/gettyimages-1353240272-q75.jpg",
            title:
              "Decoding Modern Malware: From Cryptojacking to Fileless Attacks (by Ana Batranović)",
            description: (
              <>
                Uncover the hidden dangers of modern malware in this insightful
                blog by cybersecurity expert Ana Batranović. From the sneaky
                world of cryptojacking, exploiting your device's resources, to
                the elusive threats of fileless attacks, Ana breaks down their
                workings and offers practical prevention tips. Dive into this
                concise guide by one of the industry's rising stars and stay
                ahead in the ever-evolving landscape of cybersecurity.
                <a
                  target="_blank"
                  href="https://un1quely.com/blog/decoding-modern-malware/"
                >
                  Click here to read more
                </a>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2023/10/Stress-Management-in-Tech-Cover.jpg",
            title:
              "Stress Management in Tech: Fostering Creativity & Productivity (by Milica Stanković)",
            description: (
              <>
                Explore stress management in tech through personal stories at
                BrightMarbles Group. Milica Stanković reveals the vital
                connection between mental well-being and top-notch performance.
                See how reduced stress boosts creativity, enhances productivity,
                and improves teamwork within our supportive workplace.
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/stress-management-in-tech/"
                >
                  Click here to read more
                </a>
              </>
            ),
          },
          {
            img: "https://brightmarbles.io/wp-content/uploads/2023/10/MicrosoftTeams-image-90-min.png",
            title:
              "Beyond the Quote: The Realities of App Development Pricing (by Svetlana Kosic)",
            description: (
              <>
                Unravel the mystery behind app development pricing in our latest
                blog! Discover why it's not a simple click, explore the
                evolution of project stages, and understand the value of
                expertise. We'll take you through the journey, focusing on
                transparency and established procedures. Dive in to empower your
                understanding of the evolving digital landscape!
                <a
                  target="_blank"
                  href="https://brightmarbles.io/blog/beyond-the-quote-the-realities-of-app-development-pricing/"
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
        ]}
      />
      <ThreeColorDivider />
      <Colleagues
        colleagues={[
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:548/format:webp/1*UMeEsM8-Nfe-oXG3LlOn6g.png",
            fullName: "Dunja, Brane",
            jobTitle: "& Concorde team",
            description:
              "Darko Kovač: A big shoutout to the Concorde team, especially Dunja Ibročić and Branislav Mrganić, for their exceptional commitment to the project. Despite the tight deadlines, they demonstrated dedication, persistence, and exceptional problem-solving skills, which were very important for the project's success. Congratulations on such an excellent job!",
          },
          {
            imgUrl:
              "https://media.licdn.com/dms/image/D4D03AQGWYRUf0kr3pA/profile-displayphoto-shrink_800_800/0/1674553269927?e=1704931200&v=beta&t=YT58-FG7gRigfqENjol9J_wl-rMkZs82mm2p-7mpFiQ",
            fullName: "Marina Vuković",
            jobTitle: "Quality Engineer",
            description:
              "Milan Stančić: I want to commend Marina for her exceptional dedication to the project she’s working on and her outstanding communication skills. Marina consistently tackles challenges with a positive attitude and a smile, creating a cheerful and supportive atmosphere within her team.",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*cYuBD4AMnkLFSFldwsjNBw.png",
            fullName: "Strahinja Vuksanović",
            jobTitle: "Cybersec PM",
            description:
              "Branko Džakula: I want to acknowledge and commend Strahinja's unwavering dedication and efforts during the recent period. His hard work, commitment, and positive attitude have been a source of motivation for the entire team. Strahinja, thank you for your outstanding contributions and for setting such a high standard for excellence!",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*RgwyLUqaS6CYKrGixjGJ0Q.png",
            fullName: "Design Team",
            // jobTitle: "Cybersecurity Project Manager",
            description:
              "Nevena Nemeš: It's time to highlight the remarkable contributions of some of our most dedicated Mibsters, our Design team! Goran Breberina exemplifies consistency and dependability, setting a high standard for our team with his exceptional results and willingness to tackle new challenges. Marko Vladušić consistently wows our clients with his innovative approach and keen awareness of the latest trends. His creativity makes him an invaluable team asset. Zlata Solarov's remarkable effort in creating our Halloween video in a short time frame deserves special mention. Her commitment has been truly commendable.",
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/04/DSC00s767.png",
            fullName: "Goran Fišer",
            jobTitle: "Software Engineer",
            description:
              "Nenad Stojković: I want to praise Goran for his recent work. He has shown a remarkable ability to handle the whole feature independently. It's a clear demonstration of his dedication. In addition, his collaborative nature has been a massive asset to the team. Goran brings a cheerful attitude to the workplace, making it a pleasure to work together. His contributions are truly invaluable and greatly appreciated!",
          },
          {
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2022/04/Nenad-Stojkovic-site.png",
            fullName: "Nenad Stojković",
            jobTitle: "Software Architect",
            description:
              "Nevena Nemeš and Darko Kovač: Congrats to Nenad for his exceptional role in orchestrating the RUST in Pieces: Benefits of the Ownership System presentation in collaboration with Geekstone and our marketing team. His insightful presentation, showcasing deep knowledge and excellent delivery, left a remarkable impression on the audience. Nenad's initiative and ability to independently manage such a significant task highlight his contribution to our team.",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*VBZnOKSEdllB4AJZfoeGbg.png",
            fullName: "Darko Filipović",
            jobTitle: "Software Engineer",
            description:
              "Brightly Niš team: Darko, our Senior Software Engineer, is a true tech virtuoso! With a rock-solid foundation in Java, he's not just content to rest on his laurels. Darko's willingness to dive into new tech stacks and offer support is outstanding. He's the go-to guy for tackling diverse projects and lending a hand wherever needed. Whether it's Java, .NET, or anything in between, Darko's passion and proficiency make him an invaluable asset to our team. So, here's to Darko – a software sorcerer with a heart of gold, always ready to embrace new challenges and help his fellow techies. Cheers to a job well done!",
          },
          {
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:750/format:webp/1*eKru6pe9Rb-waBSlywLVjw.png",
            fullName: "Ivan Čekerevac",
            jobTitle: "ISO",
            description:
              "Sanel Jovanović: We recently encountered a challenging situation with the migration of Carna Health and urgently needed assistance. Ivan Cekerevac stepped in without hesitation. He went above and beyond to help resolve the issue, generously dedicating his time and expertise. His commitment and willingness to go the extra mile were not only incredibly helpful but also a testament to his team spirit and professionalism. A huge thank you, Ivan, and bravo!",
          },
          {
            imgUrl:
              "https://media.licdn.com/dms/image/C4E03AQHoCRe-kFGFqg/profile-displayphoto-shrink_800_800/0/1644248646507?e=1705536000&v=beta&t=sUWo1QrtwFAUtLJv4WiJDgUksFjhVl9Dlc_l27TojOc",
            fullName: "Katarina Pavlov",
            jobTitle: "HR",
            description:
              "UN1QUELY MNGMT: Kudos to Nina! As one of the early team members at UN1QUELY, Nina has played a valuable part in shaping our culture and contributes to enhancing our overall well-being in our daily work. Her positive mindset and eagerness to tackle any task and solve every problem have been a constant source of guidance. We truly appreciate and value your contributions, Nina!",
          },
        ]}
      />
      <FamilyNews
        title="Welcoming Juniors at BMGH👶"
        data={[
          {
            img: "https://nameitcustomdecor.com.au/cdn/shop/products/IMG_2370.jpg?v=1591945706",
            description: (
              <>
                <span>Hello, Baby Darjan!</span> Our warmest welcome to baby boy
                Darjan. To the dad, Aleksandar Dembovski, and his family, we
                send sincere wishes for countless beautiful moments filled with
                joy, laughter, and love. We're all here to celebrate this
                fantastic news with you and offer our support as you embark on
                this exciting new chapter of life. Here's to creating a lifetime
                of memorable adventures, Dembo and Darjan! Congratulations to{" "}
                <span> Aleksandar Dembovski </span>
              </>
            ),
          },
          {
            img: "https://lilyandwonder.com/cdn/shop/products/Baby-Girl-Disc.jpg?v=1649946496&width=713",
            description: (
              <>
                <span>Welcome to the World, Petra!</span> Warm congratulations
                to Nenad Stojković and his wife as they welcome baby girl Petra,
                their family's newest and most precious member. We hope Petra
                will follow in her father's footsteps, growing into a strong,
                determined, wonderful person. Here's to the joyous and inspiring
                journey ahead for your family, Nenad! Congratulations to{" "}
                <span> Nenad Stojković </span>
              </>
            ),
          },
          {
            img: "https://www.fauveandco.com.au/cdn/shop/files/It_saGirl_It_saBoyBirthAnnoucementDisc_1200x1200.jpg?v=1689676288",
            description: (
              <>
                <span>Hooray for Anea!</span> Big congratulations to Bojana
                Šatara Anić and her family on the birth of their adorable baby
                girl, Anea. We're all cheering for you and wishing for Anea to
                grow up dancing through life with joy and love, bringing her
                unique light to every step of her journey. Here's to the
                wonderful new chapter for your loved ones, Bojana!
                Congratulations to <span> Bojana Šatara Anić </span>
              </>
            ),
          },
        ]}
      />
      <Birthdays
        employees={[
          {
            name: "Oliver",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/03/DSC0040dd0.png",
          },
          {
            name: "Ivan",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:376/format:webp/1*O93e7gou_A9HY_9HjNqFKA.png",
          },
          {
            name: "Milena",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:828/format:webp/1*IbYAwu5FkCnG7MXq-6VW4w.png",
          },
          {
            name: "Daniel",
            imgUrl:
              "https://brightmarbles.io/wp-content/uploads/2021/06/DSC011sss22.png",
          },
          {
            name: "Diego",
            imgUrl:
              "https://media.licdn.com/dms/image/C4E03AQF1hl9knb0Gcw/profile-displayphoto-shrink_800_800/0/1637100482334?e=1704931200&v=beta&t=8TbZbm1EiT881z-Vvgsql9l4pzu5DKUbxQ15kyeDRkw",
          },
        ]}
      />
      <Contributions />
      <ThreeColorDivider hideWhite />
    </div>
  );
};
