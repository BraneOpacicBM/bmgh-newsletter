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
                title="April Company Update"
                leftParagraphs={[
                    {
                        title: "Bench Strength:",
                        description:
                            "Our team remains strong and stable, with no significant changes compared to last month. We’ve added three new members who have quickly integrated and are actively contributing to projects. We're continuing to recruit to gear up for future client projects.",
                    },
                ]}
                rightParagraphs={[
                    {
                        title: "Profit:",
                        description:
                            "Revenue this month has stayed consistent with the previous month. We’re stable, though slightly under our projected figures. We’re actively working on strategies to boost our revenue growth.",
                    },
                    {
                        title: "Cash Flow:",
                        description:
                            "Our cash flow hasn't hit our target yet, but we’re not sitting back. Management is hands-on, taking steps to improve and stabilize our financial flow.",
                    },
                ]}
            />
            <ProjectClientSection
                leftParagraphs={[
                    {
                        title: "Adriaan",
                        description:
                            "We've witnessed exciting progress since launching the project a month ago, and momentum is building. Our foundation is strong, setting us up for success. The Adriaan team has grown with the addition of three new members: a backend developer, a QA developer, and a mobile developer. Welcome aboard, Milana, Goran, and Nemanja!",
                    },
                    {
                        title: "Anyone",
                        description:
                            "Business as usual, we had a very productive visit to the client’s office in Amsterdam where we achieved the planned goal.",
                    },
                    {
                        title: "Concorde Health",
                        description:
                            "The project is nearing its conclusion, with the final sprint slated for the end of May. Clients are gearing up to launch into the product's sales phase.",
                    },
                    {
                        title: "Costa Coffee",
                        description:
                            "We are in the last stage of regression testing for a digital transformation project. With this project, we are switching from the old stack to Talon.One. Last month we visited Costa Coffee in London to be a part of the Quarterly planning meetings.",
                    },
                    {
                        title: "Crayon OTP",
                        description:
                            "We've completed the project just about on schedule. The slight delay was due to the Easter holidays and the client's absence. Moving forward, we're transitioning into a maintenance phase, working on it part-time.",
                    },
                    {
                        title: "Crayon Zepter",
                        description:
                            "The project is underway and expected to wrap up by the end of the month. Following its completion, we'll begin negotiations for Phase 2.",
                    },
                    {
                        title: "Greenlite",
                        description:
                            "Since the last update in early March, the BrightMarbles team has continued working on various improvements and features focused on the Greenlite core review tool. We've done two major releases with a small minor bug-fix release in between. We have also been working on a new release that will include another set of improvements and features, planned for around the middle of April. In discussions with the client's engineering teams, we also started planning the consolidation of the two platforms we've been developing in parallel. The initial goal would be to build out some of the potentially missing core features, as well as porting any of the improvements and features we've built out for the production platform. This plan should come into action by the end of April or early May, so watch this space for future updates!",
                    },
                    {
                        title: "Hadrian",
                        description:
                            "We've reestablished collaboration with Hadrian for DevOps. Currently, Dusan Ilic is onboard, and we aim to grow our team further.",
                    },
                ]}
                rightParagraphs={[
                    {
                        title: "NAQ",
                        description:
                            "Our newest team member, Igor Trifunovic, has joined the NAQ team, and we persist in our development efforts according to schedule.",
                    },
                    {
                        title: "Penetration Testing projects",
                        description:
                            "Pentest projects have picked up in numbers with increased activity both from our channel partners and direct sales. We have established the first Red Team led by Miroslav Milicevic that will be our premium service within our overall Offensive Security offering. We are expanding our internship program and we’ll be onboarding new interns starting from June this year.",
                    },
                    {
                        title: "Raven",
                        description:
                            "An important milestone has been achieved - the first email has been sent out through our service with success (Company Newsletter). Prior to this milestone the app was in the testing phase and afterwards the team shifted their focus back to development and bug fixing.",
                    },
                    {
                        title: "Security Operations projects",
                        description:
                            "We are experiencing longer sale cycles for Security Operations projects than expected, with current seven opportunities in negotiation phase with high potential for team expansion. Current SecOps enagement with Otp Group is progressing as planned.",
                    },
                    {
                        title: "vCISO projects and Partnership updates ",
                        description:
                            "Similar experience is present with sales cycles with vCISO projects as with Security Operations projects with current negotiations ongoing with prospects from the Netherlands and the United States.",
                    },
                    {
                        title: "Zein",
                        description:
                            "The design phase is wrapping up, while development is set to continue through May, with completion anticipated by the end of the month.",
                    },
                    {
                        title:
                            "Anycoin, Carna, Crayon Stada, MijnDomein, Secfix, Simplify Orange, Toogethr Parking & Drive, Vega ReThink",
                        description: "Business as usual.",
                    },
                ]}
            />
            <QuickUpdate
                company={Company.BRIGHT_MARBLES}
                title="New Mibsters have joined our team!"
                description={
                    <div>
                        <div>
                            We've had an exciting few weeks at BrightMarbles, welcoming three
                            new team members! 😊 Marko Nikolić from Niš has joined our
                            frontend team, bringing a wealth of expertise. Nemanja Lugumerski,
                            hailing from Sombor, enhances our capabilities as an experienced
                            mobile developer. And a big welcome back to Marko Stanaćev, who
                            rejoins us to contribute significantly to the Carna project. ⚕️️
                            Guys, once again, we extend a warm welcome to you all!
                        </div>
                    </div>
                }
            />
            <QuickUpdate
                bgColor="white"
                company={Company.BRIGHT_MARBLES_MACEDONIA}
                title="March Adventures: Visits to Novi Sad Office and Client Collaboration in the Netherlands"
                description="March, Women’s History Month (marked by International Women's Day), was a perfect opportunity for Viktorija and Nastasja to visit our Novi Sad office and meet with their teams – marketing, Raven, and Zein. In addition to this trip, we also had another one to the Netherlands, where Atanas, alongside Nenad from Serbia, worked on enhancing our collaboration with the client Anyone."
            />
            <QuickUpdate
                bgColor="black"
                company={Company.BRIGHTLY}
                title="Dear Nenad, get well soon!"
                description={
                    <div>
                        <div>
                            It is with a sense of concern that we announce Nenad Jović, our
                            esteemed CEO, is taking a temporary leave for health reasons. This
                            decision was made in consultation with the BMGH management team,
                            and we fully support Nenad in prioritizing his health and
                            well-being. During his recuperation, Boris Berat and the Brightly
                            management team will manage day-to-day operations. We ask for your
                            understanding and support during this time, as we rally around
                            Nenad in his recovery and continue to uphold the values of
                            solidarity and teamwork that define our community.
                        </div>
                    </div>
                }
            />{" "}
            <QuickUpdate
                bgColor="white"
                company={Company.BRIGHT_MARBLES}
                title="UN1QUELY: Celebrating Success and Sustaining Momentum"
                description="Our UN1QUELY team remains strong in their commitment and productivity. During Women's Month, we hosted impactful cybersecurity events that have significantly boosted interest in the UN1QUELY Academy. Additionally, our engineers consistently foster successful client collaborations across various projects. Fantastic job, team—keep pushing forward!"
            />
            <NewsAndEvents
                data={[
                    {
                        img: "https://media.licdn.com/dms/image/D4D22AQHMbrsjg0P5lQ/feedshare-shrink_2048_1536/0/1711712980735?e=1715817600&v=beta&t=zLcgsVU_9yF2oujrBJFyZl_PD95FCSNeOSlQ9uWW2E8",
                        title: "Empowering Women: Recap of March Workshops and Lectures",
                        description: (
                            <>
                                March has ended, along with the series of events we organized in
                                celebration of International Women's Day and Women’s History
                                Month. One of the highlights was a painting workshop for our
                                female colleagues on March 8th. It was a delightful opportunity
                                to bond, get to know each other better, and share some laughs.
                                Another noteworthy event that occurred between our newsletters
                                was a Cybersecurity workshop tailored specifically for girls.
                                Speakers Branko Džakula, Damjan Cvetanović, and Sanja Kekić
                                engaged the audience in an interactive discussion, shedding
                                light on the career path of a cybersecurity professional. Last
                                but certainly not least, we organized a lecture aimed at women
                                interested in exploring the field of QA. Milan Stančić and
                                Marina Vuković expertly presented this career avenue, providing
                                valuable insights and guidance. These events underscore our
                                commitment to fostering diversity and empowering women in the
                                tech industry.
                                {/* <a target="_blank" href="">
                  Click here to read more
                </a> */}
                            </>
                        ),
                    },
                    {
                        img: "https://images.pexels.com/photos/974198/pexels-photo-974198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        title:
                            "April Initiatives: Supporting Autism Awareness, Easter Fun, and Healthy Living",
                        description: (
                            <>
                                April looks like a busy month for us! It's Autism Awareness
                                Month, an important time for many families. We're dedicated to
                                helping children with autism find their place in regular work
                                environments and explore careers in IT. To support this, our
                                tale talented team is organizing a Scratch programming workshop
                                for 16 remarkable young people. As Easter approaches, we’re also
                                planning a festive egg-painting event for the kids of our
                                colleagues. It’s a wonderful opportunity for fun and creativity,
                                bringing our BrightMarbles team together. This week, we're
                                meeting with a nutritionist to brush up on our healthy eating
                                knowledge, something we'll put into action after the holidays.
                                Additionally, we're excited about our first Lean Coffee session
                                and a Bachata workshop, blending knowledge exchange with fun in
                                our full calendar. And we can’t overlook the Belgrade
                                Marathon—our runners are actively training and ready to hit the
                                pavement!
                            </>
                        ),
                    },
                    {
                        img: "https://brightmarbles.io/wp-content/uploads/2024/04/MicrosoftTeams-image-87.png",
                        title:
                            "Implementing Tech Behind a Healthy Future: The BrightMarbles Initiative (by Pavle Bobić)",
                        description: (
                            <>
                                Discover how BrightMarbles Group is revolutionizing healthcare
                                through technology with groundbreaking projects like Cellink,
                                Concorde Health, and Carna Health. Explore their innovative
                                solutions, collaborative efforts, and real-world impact in
                                tackling global healthcare challenges. From cutting-edge 3D
                                bioprinting to early detection platforms for chronic kidney
                                disease, BrightMarbles is at the forefront of health-tech
                                innovation, shaping a healthier tomorrow, one innovation at a
                                time.
                                <a
                                    target="_blank"
                                    href="https://brightmarbles.io/blog/implementing-tech-behind-a-healthy-future/"
                                >
                                    Click here to read more
                                </a>
                            </>
                        ),
                    },
                    {
                        img: "https://brightmarbles.io/wp-content/uploads/2024/04/Sanja-Cover-1.png",
                        title:
                            "A Recap of Women's History Month at BrightMarbles Group (by Nastasija Trajanova)",
                        description: (
                            <>
                                At BrightMarbles Group, diversity and inclusion aren't just
                                buzzwords – they're core values that drive everything we do.
                                This Women’s History Month, we proudly celebrated the
                                achievements of women in tech and took concrete steps to empower
                                and inspire the next generation of female leaders. From hosting
                                informative webinars on Quality Assurance (QA) and Cybersecurity
                                to organizing fun and empowering team-building events like Paint
                                & Wine, we're committed to creating a workplace where everyone
                                feels valued and supported.
                                <a
                                    target="_blank"
                                    href="https://brightmarbles.io/blog/recap-of-womens-history-month-at-brightmarbles-group/"
                                >
                                    Click here to read more
                                </a>
                            </>
                        ),
                    },
                    {
                        img: "https://brightmarbles.io/wp-content/uploads/2024/03/Untitled-design-2.jpg",
                        title:
                            "Business Strategy and Brand Positioning – an Interview with Nevena Nemeš",
                        description: (
                            <>
                                Dive into the dynamic world of marketing and software
                                development with Nevena Nemeš, Chief Experience Officer and Head
                                of Marketing at BrightMarbles Group. In this enlightening
                                conversation, Nevena shares her journey from psychology to IT
                                and marketing, offering valuable insights into the blend of
                                creativity and strategy required in her role. Join us as we
                                explore the intricacies of marketing strategy, content creation,
                                and team dynamics, gaining a deeper understanding of the role of
                                marketing in driving impactful user experiences and business
                                success.
                                <a
                                    target="_blank"
                                    href="https://brightmarbles.io/blog/business-strategy-and-brand-positioning-an-interview-with-nevena-nemes/"
                                >
                                    Click here to read more
                                </a>
                            </>
                        ),
                    },
                    {
                        img: "	https://brightmarbles.io/wp-content/uploads/2024/03/MicrosoftTeams-image-77.jpg",
                        title:
                            "HR feat. Business Development - An Interview with Mirjana Parpura Đorđević",
                        description: (
                            <>
                                Explore the fascinating career journey of Mirjana
                                Parpura-Đorđević, the HR Director at Brightly, as she reflects
                                on her diverse experiences spanning the banking sector, IT
                                startups, and now, Brightly within the BrightMarbles Group. From
                                her early days as a French teacher to navigating the intricacies
                                of HR in the tech industry, Mirjana shares valuable insights
                                into her career transitions, challenges, and achievements. Join
                                us as we delve into her role at Brightly, her perspectives on
                                women in the IT industry, and her passion for gardening outside
                                the office.
                                <a
                                    target="_blank"
                                    href="https://brightmarbles.io/blog/hr-feat-business-development-an-interview-with-mirjana-parpura-dordevic/"
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
                        title:
                            "Experienced Software Engineer (.NET) - Medior or Senior level (BRIGHTMARBLES & UN1QUELY)",
                        postingUrl:
                            "https://bmgh.zohorecruit.eu/jobs/Careers/36808000000423157/Experienced-Software-Engineer---NET?source=CareerSite",
                    },
                    {
                        title:
                            "Experienced Frontend Engineer (React) - Medior or Senior level (BRIGHTMARBLES & UN1QUELY)",
                        postingUrl:
                            "https://bmgh.zohorecruit.eu/jobs/Careers/36808000001590457/Experienced-Frontend-Engineer-React-?source=CareerSite",
                    },
                    {
                        title:
                            "Experienced Software Engineer (Node.js) - Medior or Senior level (BRIGHTMARBLES & UN1QUELY)",
                        postingUrl:
                            "https://bmgh.zohorecruit.eu/jobs/Careers/36808000000430020/Experienced-Software-Engineer---Node-js?source=CareerSite",
                    },
                ]}
            />
            <ThreeColorDivider />
            <Colleagues
                colleagues={[
                    {
                        imgUrl:
                            "https://media.licdn.com/dms/image/D4D03AQHsVJeZWybtcQ/profile-displayphoto-shrink_800_800/0/1704895229445?e=1718841600&v=beta&t=rYVCn6Ueo3HluECRh1l0WL3P54kMBA_hthQ1_bq4Big",
                        fullName: "Teodora Pantelić",
                        jobTitle: "Office Manager",
                        description:
                            "Brightly Belgrade team: In the heartbeat of our office, there's a force that keeps everything running seamlessly. That force is Teodora, our exceptional Office Manager, whose dedication and expertise elevate our workplace to extraordinary heights! Teodora is more than just an Office Manager; she's the cornerstone of our operations. No task is too daunting for her, and no challenge too great to overcome. Beyond her professional prowess, Teodora embodies the spirit of teamwork and collaboration. Her warm smile and encouraging demeanor create a welcoming atmosphere for everyone, fostering a sense of unity and camaraderie within our team. Thank you, Teodora, for being the heartbeat of our office and for everything you do! ",
                    },
                    {
                        imgUrl:
                            "https://brightmarbles.io/wp-content/uploads/2021/06/DSC0113ss9.png",
                        fullName: "Milan Stančić",
                        jobTitle: "& the tech office",
                        description:
                            "Darko Kovač: I would like to praise Milan Stančić and his Tech Office for their amazing knowledge sharing initiatives! Community of Practice meetings that they maintain once or twice a month are a great opportunity to exchange knowledge and share ideas, as well as discuss any other topics in the area of software testing. Milan also organized an API testing workshop for his colleagues, where he introduced them to the basics of API testing with Postman, so kudos for such an exceptional work!",
                    },
                    {
                        imgUrl:
                            "https://miro.medium.com/v2/resize:fit:828/format:webp/1*PO9U2FvvJ3AebrJn6LV-zg.png",
                        fullName: "Stevan Vučić",
                        jobTitle: "InfoSec Engineer",
                        description:
                            "Branko Džakula: I would like to commend Stevan for his excellent mentoring of our first intern in the Cybersecurity team! His dedication and expertise have not only fostered Danijel's professional development but have also strengthened the team's capabilities overall. We're fortunate to have such a valuable mentor as Stevan on our team. Great work!",
                    },
                    {
                        imgUrl:
                            "https://media.licdn.com/dms/image/D4D03AQGWYRUf0kr3pA/profile-displayphoto-shrink_400_400/0/1674553270598?e=1718236800&v=beta&t=m09E58zPGff1x0TTbcqqbbcLPTvoUQMUUhWgl5RibTo",
                        fullName: "Marina Vuković ",
                        jobTitle: "QA Engineer",
                        description:
                            "Milan Stančić: I would like to commend Marina for her outstanding cooperation in preparing a presentation about the QA role that we organized for the Women’s History Month. The performance of the lecture exceeded expectations, keeping the attention of the participants, who gave us positive feedback afterwards. Great work, Marina!",
                    },
                    {
                        imgUrl:
                            "https://brightmarbles.io/wp-content/uploads/2023/03/Nastasija-Trajanova.png",
                        fullName: "Nastasija Trajanova",
                        jobTitle: "MKT Specialist",
                        description:
                            "Nevena Nemeš: Staša is exceptional! Always ready with fresh ideas, she pushes the whole team to improve. And when there's a task that needs doing, she's on it—no hesitation, no need for handholding. Let's all give it up for Staša, who keeps proving time and again that she's a key part of what we do!",
                    },
                    {
                        imgUrl:
                            "https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif",
                        fullName: "Zein",
                        jobTitle: "Team",
                        description:
                            "Dunja Ibročić: Hats off to every member of the Zein team for their commitment, exceptional dedication, and remarkable self-organization in delivering a top-quality product within the deadline.",
                    },
                    {
                        imgUrl:
                            "https://brightmarbles.io/wp-content/uploads/2021/06/DSC0109ss4.png",
                        fullName: "Miroslava Debeljački",
                        jobTitle: "Software Engineer",
                        description:
                            "Tanja Maliković: Miroslava, as part of our Flutter team, I want to thank you for your great work in getting the HCP app ready for release. Your help was crucial, and I appreciate your consistent hard work in our team.",
                    },
                    {
                        imgUrl:
                            "https://brightmarbles.io/wp-content/uploads/2021/03/DSC007ss23.png",
                        fullName: "Marko Krstanović",
                        jobTitle: "SE & Flutter TO",
                        description:
                            "Tanja Maliković: Marko, as the other half of our Flutter team, I also want to thank you for your efforts in getting the HCP app ready for release. You did a fantastic job, and I'm really grateful. I know I can always count on your expertise.",
                    },
                    {
                        imgUrl:
                            "https://brightmarbles.io/wp-content/uploads/2021/02/join-us.gif",
                        fullName: "Concorde",
                        jobTitle: "Team",
                        description:
                            "Dunja Ibročić: Enormous appreciation to every member of the Concorde team for their dedication, focus, and remarkable achievements over the past nine months while contributing to the Concorde product.",
                    },
                ]}
            />
            <FamilyNews
                title="A reason to celebrate"
                data={[
                    {
                        img: "https://nameitcustomdecor.com.au/cdn/shop/products/IMG_2370.jpg?v=1591945706",
                        description: (
                            <>
                                Welcome to the world of parenthood, Marko! Enjoy every snuggle,
                                every smile, and cherish every moment with your wonderful boy
                                Andrej. Congratulations on the arrival of your precious little
                                one! We can’t wait to hear all about your adventures together.
                                Congratulations to <span> Marko Dobrijević </span>
                            </>
                        ),
                    },
                    {
                        img: "https://images.pexels.com/photos/7784602/pexels-photo-7784602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        description: (
                            <>
                                Dear Katarina, Congratulations on your marriage! Wishing you a
                                lifetime of love, joy, and happiness together. May your days be
                                filled with beautiful moments and your hearts be forever
                                intertwined. Cheers to a wonderful journey ahead as husband and
                                wife! Congratulations to <span> Katarina </span>
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
                            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lAitD4_xZ3pbvoi-Rq5Wmg.png",
                    },
                    {
                        name: "Marjan",
                        imgUrl:
                            "https://miro.medium.com/v2/resize:fit:828/format:webp/1*c7Htp6QVu024A9qgxZ17OQ.png",
                    },
                    {
                        name: "Marko",
                        imgUrl:
                            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*X-jfvy8lEzJt6qJM_1lOCw.png",
                    },
                    {
                        name: "Milan",
                        imgUrl:
                            "https://brightmarbles.io/wp-content/uploads/2021/06/DSC0113ss9.png",
                    },
                    {
                        name: "Ivana",
                        imgUrl:
                            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*NoCsyngn_vP6ZBQSATer2A.png",
                    },
                    {
                        name: "Dragana",
                        imgUrl:
                            "https://media.licdn.com/dms/image/C5603AQGFSzIP0BOLrQ/profile-displayphoto-shrink_800_800/0/1654776503579?e=1718236800&v=beta&t=n4E67LR62oPlDoin5DeDr2s_5DdBN1MrLLfNIb9DgYg",
                    },
                    {
                        name: "Milica",
                        imgUrl:
                            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Nc8fBL5Xxokv9dflZIrh_w.png",
                    },
                    {
                        name: "Katarina",
                        imgUrl:
                            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*XigZ-njzVL3L4eLORLjhjA.png",
                    },
                    {
                        name: "Aleksandar",
                        imgUrl:
                            "https://media.licdn.com/dms/image/D4D03AQEEvnBFZZy-oA/profile-displayphoto-shrink_800_800/0/1674633375134?e=1718236800&v=beta&t=mt5KBrKwm9v8f6qC09dGANpoBqRHQVfoyYAjYzkfdMA",
                    },
                    {
                        name: "Jovana",
                        imgUrl:
                            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GUYxTBz4Ivj1vVibwf-rVQ.png",
                    },
                ]}
            />
            <Contributions />
            <ThreeColorDivider hideWhite />
        </div>
    );
};