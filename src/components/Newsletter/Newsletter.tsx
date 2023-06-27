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
  const { loading, isVerified } = useVerify()

  if (loading || !isVerified) return null

  return (
    <div className={styles.newsletter_body}>
      <Header
        title='May Finance &amp; Project Update'
        leftParagraphs={[
          {
            title: 'Bench Strength:',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          }, {
            title: 'Cash Flows:',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          }
        ]}
        rightParagraphs={[
          {
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          },
          {
            title: 'Cash Flows:',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          },
          {
            title: 'New Projects:',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit '
          }
        ]}
      />
      <ProjectClientSection
        leftParagraphs={[
          {
            title: 'Bench Strength',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          },
          {
            title: 'Cash Flows',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          },
          {
            title: 'Bench Strength',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          },
          {
            title: 'Cash Flows',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          },
          {
            title: 'Bench Strength',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          },
          {
            title: 'Cash Flows',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          }
        ]}
        rightParagraphs={[
          {
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          },
          {
            title: 'Cash Flows',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          },
          {
            title: 'New Projects',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit '
          },
          {
            title: 'Bench Strength',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          },
          {
            title: 'Cash Flows',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          },
          {
            title: 'Bench Strength',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sequi cumque eveniet quibusdam modi voluptas doloribus culpa vero, architecto, cupiditate fugiat rem nulla, porro odit.  '
          },
        ]}
      />
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
        description={(
          <div>
            <p>Description can be in form of text(string) or you can pass html as this example show 💙</p>
          </div>
        )}
      />
      <QuickUpdate
        bgColor="blue"
        company={Company.BRIGHT_MARBLES}
        title='Lorem ipsum dolor sit amet consectetur adipisicing'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam.'
      />
      <QuickUpdate
        bgColor="white"
        company={Company.BRIGHT_MARBLES_MACEDONIA}
        title='Lorem ipsum dolor sit amet consectetur adipisicing'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam.'
      />
      <QuickUpdate
        bgColor="black"
        company={Company.BRIGHT_MARBLES_NETHERLANDS}
        title='Lorem ipsum dolor sit amet consectetur adipisicing'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quia aut dolore reiciendis facilis cum quos animi illo eveniet maxime asperiores dolores labore quasi pariatur rem, quisquam perferendis similique debitis, necessitatibus voluptate commodi, minus earum ullam. Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam.'
      />
      <NewsAndEvents
        data={[
          {
            img: 'https://brightmarbles.io/wp-content/uploads/2023/06/MicrosoftTeams-image-38-1.png',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            description: (
              <>
                Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam.
                <a target='_blank' href='www.wikipedia.com'>Click here to read more</a>
              </>
            )
          },
          {
            img: 'https://brightmarbles.io/wp-content/uploads/2023/06/MicrosoftTeams-image-38-1.png',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            description: (
              <>
                Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam.
                <a target='_blank' href='www.wikipedia.com'>Click here to read more</a>
              </>
            )
          },
          {
            img: 'https://brightmarbles.io/wp-content/uploads/2023/06/MicrosoftTeams-image-38-1.png',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            description: (
              <>
                Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam.
                <a target='_blank' href='www.wikipedia.com'>Click here to read more</a>
              </>
            )
          },
          {
            img: 'https://brightmarbles.io/wp-content/uploads/2023/06/MicrosoftTeams-image-38-1.png',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            description: (
              <>
                Est blanditiis soluta cupiditate nulla, fugit odit explicabo, magni eveniet consequuntur ipsa dolores ut. Aliquam repellendus vel nostrum unde reiciendis. Aut asperiores debitis, corrupti incidunt harum cupiditate molestiae unde doloribus eum, expedita corporis placeat illum odio. Eius dignissimos, deserunt minus officiis odio assumenda culpa nesciunt at iste et beatae nemo deleniti, accusantium aliquid voluptatibus quia blanditiis voluptatum voluptates perferendis magni. Inventore, praesentium aliquam.
                <a target='_blank' href='www.wikipedia.com'>Click here to read more</a>
              </>
            )
          }
        ]}

      />
      <OpenPositions jobPostings={[
        {
          title: 'Penetration Tester Junior-Senior (UN1QUELY)',
          postingUrl: 'https://bmgh.zohorecruit.eu/jobs/UN1QUELY/36808000002466166/Penetration-Tester?source=CareerSite'
        },
        {
          title: 'Front end developer Senior (UN1QUELY)',
          postingUrl: 'https://bmgh.zohorecruit.eu/jobs/UN1QUELY/36808000002466166/Penetration-Tester?source=CareerSite'
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
      <FamilyNews
        title="Wedding Bells Ring at Brightly ❤️"
        data={[
          {
            img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            description: (
              <>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est tempore voluptatum! Tenetur delectus impedit mollitia hic maiores? Maiores molestiae doloribus incidunt repellendus rerum!
                Congratulations to <span> John Doe</span>
              </>
            )
          },
          {
            img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            description: (
              <>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est tempore voluptatum! Tenetur delectus impedit mollitia hic maiores? Maiores molestiae doloribus incidunt repellendus rerum!
                Congratulations to <span> John Doe</span>
              </>
            )
          },
        ]}
      />
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
      <ThreeColorDivider hideWhite />
    </div>
  );
};
