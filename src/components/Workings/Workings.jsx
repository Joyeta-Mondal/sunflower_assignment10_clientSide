import { Reveal } from 'react-awesome-reveal';


const Workings = () => (
    <section className="visa-services mt-8 p-4 bg-gray-100 dark:bg-gray-900 dark:text-gray-100" 
    // style={{ padding: "20px", backgroundColor: "#e0f2fe" }}
      >
        <div className="container mx-auto text-center">
            <Reveal animation="fadeIn" delay={300} duration={1000}>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">How Our Visa Services Work</h2>
            </Reveal>

            <div className="flex flex-wrap justify-center gap-8">
                {/* card 1 */}
                <Reveal animation="slideInUp" delay={500} duration={1000}>
                    <div className="bg-white p-6 rounded-lg shadow-md w-80 dark:bg-gray-800">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Find Your Visa</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Our platform simplifies visa research by providing detailed information on visa requirements,
                            application procedures, and necessary documents for your travel destinations.
                        </p>
                    </div>
                </Reveal>

                {/* card 2 */}
                <Reveal animation="slideInUp" delay={700} duration={1000}>
                    <div className="bg-white p-6 rounded-lg shadow-md w-80 dark:bg-gray-800">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Apply for Visa</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Applying for a visa has never been easier! Our step-by-step guide walks you through the application
                            process, helping you complete forms accurately, submit necessary documents, and pay application fees.
                        </p>
                    </div>
                </Reveal>

                {/* card 3 */}
                <Reveal animation="slideInUp" delay={900} duration={1000}>
                    <div className="bg-white p-6 rounded-lg shadow-md w-80 dark:bg-gray-800">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Manage Your Visa</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Keep track of your visa status, expiry dates, and renewal requirements with our easy-to-use visa management tools.
                            Receive alerts and reminders to ensure you never miss an important deadline.
                        </p>
                    </div>
                </Reveal>
            </div>

            <Reveal animation="zoomIn" delay={1100} duration={1000}>
                <div className="bg-white p-6 rounded-lg shadow-md mt-8 w-80 mx-auto dark:bg-gray-800">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Stay Informed</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Sign up for our newsletter to receive the latest updates, tips, and alerts about visa requirements and travel advisories.
                    </p>
                    <form className="mt-4">
                        <input type="email" placeholder="Enter your email" className="p-2 border rounded-md w-full" />
                        <button type="submit" className="mt-2 bg-[#4f46e5] text-white p-2 rounded-md w-full">Subscribe</button>
                    </form>
                </div>
            </Reveal>
        </div>
    </section>
);

export default Workings;


