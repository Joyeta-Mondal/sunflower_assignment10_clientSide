

// dark mode 

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={500}
        showStatus={false}
        useKeyboardArrows
      >
        {/* Slide 1 */}
        <div>
          <img
            src="https://st3.depositphotos.com/1105977/32206/i/450/depositphotos_322069858-stock-photo-passengers-commercial-airplane-flying-above.jpg"
            alt="Airplane Flying"
          />
          <p className="legend dark:bg-gray-800 dark:text-gray-200">
            Travel with Ease - Book Your Flight Today
          </p>
        </div>

        {/* Slide 2 */}
        <div>
          <img
            src="https://media.istockphoto.com/id/1392494719/photo/woman-with-pink-suitcase-and-passport-with-boarding-pass-standing-on-passengers-ladder-of.jpg?s=612x612&w=0&k=20&c=MVUZvIdaUmvRKdG-B5EEGGkIVFj51jss-b6IkxqY3fg="
            alt="Woman with Suitcase"
          />
          <p className="legend dark:bg-gray-800 dark:text-gray-200">
            Pack Your Bags - Your Adventure Awaits!
          </p>
        </div>

        {/* Slide 3 */}
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
            alt="Passport and Documents"
          />
          <p className="legend dark:bg-gray-800 dark:text-gray-200">
            Streamline Your Visa Process with Us
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
