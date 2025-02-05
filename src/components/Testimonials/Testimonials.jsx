


// dark mode 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typewriter } from "react-simple-typewriter";

const Testimonials = () => (
  <section className="mt-8 p-8 bg-gray-100 dark:bg-gray-800">
    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
      What Our Users Say
    </h2>
    <Carousel showThumbs={false} infiniteLoop>
      {[
        { id: 1, review: "Great service!", name: "Sarah L." },
        { id: 2, review: "User-friendly platform.", name: "John D." },
        { id: 3, name: 'Alice M.', review: 'I found all the necessary information quickly and easily. Great service!' },
        { id: 4, name: 'Mark T.', review: 'Very informative and easy to use. Helped me plan my trip without any hassle.' },
        { id: 5, name: 'Emma W.', review: 'Loved the simplicity and ease of finding visa requirements.' },
        { id: 6, name: 'Michael K.', review: 'Excellent user experience. Would definitely use this again!' },
        { id: 7, name: 'Olivia P.', review: 'Helpful and comprehensive information. A must for travelers!' },
        { id: 8, name: 'Liam S.', review: 'Superb resource for visa information. Made my travel planning a breeze.' },
        { id: 9, name: 'Sophia R.', review: 'Great tool for finding the right visa quickly and efficiently.' },
        { id: 10, name: 'Daniel H.', review: 'Highly recommend this to all travelers. Very user-friendly.' },
      ].map(({ id, review, name }) => (
        <div key={id} className="p-6 bg-white dark:bg-gray-700 rounded-lg">
          <blockquote className="text-gray-600 dark:text-gray-300 italic">
            <Typewriter words={[review]} loop cursor />
          </blockquote>
          <p className="text-gray-900 dark:text-gray-200 mt-2">- {name}</p>
        </div>
      ))}
    </Carousel>
  </section>
);

export default Testimonials;

