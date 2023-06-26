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

export const Newsletter = () => {
  return (
    <div className={styles.newsletter_body}>
      <Header />
      <ProjectClientSection />
      <QuickUpdate
        company={Company.BRIGHT_MARBLES}
        title='Lorem ipsum dolor sit amet consectetur adipisicing'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam.'
      />
      <QuickUpdate
        bgColor="white"
        company={Company.UN1QUELY}
        title='Lorem ipsum dolor sit amet consectetur adipisicing'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam.'
      />
      <QuickUpdate
        bgColor="black"
        company={Company.BRIGHTLY}
        title='Lorem ipsum dolor sit amet consectetur adipisicing'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam.'
      />
      <NewsAndEvents />
      <OpenPositions jobPostings={[
        {
          title: 'Penetration Tester Junior-Senior (UN1QUELY)',
          postingUrl: 'lhttps://bmgh.zohorecruit.eu/jobs/UN1QUELY/36808000002466166/Penetration-Tester?source=CareerSite'
        },
        {
          title: 'Front end developer Senior (UN1QUELY)',
          postingUrl: 'lhttps://bmgh.zohorecruit.eu/jobs/UN1QUELY/36808000002466166/Penetration-Tester?source=CareerSite'
        },
      ]} />
      <ThreeColorDivider />
      <Colleagues colleagues={[{
        fullName: 'John Doe',
        jobTitle: 'Software Developper',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt velit nobis magni nulla magnam."
      },
      {
        fullName: 'John Doe',
        jobTitle: 'Software Developper',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt velit nobis magni nulla magnam."
      },
      {
        fullName: 'John Doe',
        jobTitle: 'Software Developper',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt velit nobis magni nulla magnam."
      }]} />
      <FamilyNews />
      <Birthdays employees={[{
        name: 'John',
        imgUrl: 'https://brightmarbles.io/wp-content/uploads/2021/06/DSC01206-copy.png'
      },
      {
        name: 'John',
        imgUrl: 'https://brightmarbles.io/wp-content/uploads/2021/06/DSC01206-copy.png'
      },
      {
        name: 'John',
        imgUrl: 'https://brightmarbles.io/wp-content/uploads/2021/06/DSC01206-copy.png'
      },
      {
        name: 'John',
        imgUrl: 'https://brightmarbles.io/wp-content/uploads/2021/06/DSC01206-copy.png'
      },
      {
        name: 'John',
        imgUrl: 'https://brightmarbles.io/wp-content/uploads/2021/06/DSC01206-copy.png'
      },
      {
        name: 'John',
        imgUrl: 'https://brightmarbles.io/wp-content/uploads/2021/06/DSC01206-copy.png'
      }]} />
      <Contributions />
      <ThreeColorDivider hideWhite/>
    </div>
  );
};
