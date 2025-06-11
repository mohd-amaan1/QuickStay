
const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 text-gray-800">
      {/* Left Content */}
      <div className="lg:w-2/3 space-y-6">
        <h1 className="font-playfair text-4xl md:text-[40px]">About QuickStay</h1>
        <p className="text-base text-gray-600">
          <strong>QuickStay</strong> is a modern and seamless hotel room booking platform designed to enhance the experience of both travelers and hotel owners. Whether you're a solo traveler, a family, or a hotel business owner, QuickStay offers a feature-rich and intuitive interface that makes booking, managing, and hosting rooms hassle-free.
        </p>

        <h2 className="text-2xl font-semibold mt-4">Why Choose QuickStay?</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Easy Room Booking:</strong> Instantly book your ideal room with real-time availability checks and secure payment powered by Stripe.</li>
          <li><strong>Clerk Authentication:</strong> Enjoy seamless and secure login/signup via Clerk for both users and hotel owners.</li>
          <li><strong>Room Hosting Dashboard:</strong> Hotel owners get access to a dedicated dashboard to manage rooms, monitor revenue, and track bookings.</li>
          <li><strong>Media Uploads:</strong> Upload beautiful room and hotel images with Cloudinary integration for high performance and reliability.</li>
          <li><strong>Instant Booking Confirmation:</strong> Get email notifications with complete booking details via Brevo Mailer upon successful reservation.</li>
          <li><strong>Fully Responsive Design:</strong> Optimized for all devices — access QuickStay from mobile, tablet, or desktop seamlessly.</li>
        </ul>

        <p className="text-base text-gray-600 pt-4">
          Our mission at <strong>QuickStay</strong> is to simplify the room booking experience and empower hotel owners with the tools they need to manage their businesses efficiently — all in one unified platform.
        </p>
        <p className="text-sm text-gray-500 mt-12 border-t pt-4">
            <strong>Disclaimer:</strong> QuickStay is a demonstration project built for educational and portfolio purposes only. All hotel listings, images, bookings, and transactions displayed on this platform are fictitious. No real services are provided, and no payments are processed. This platform is not intended for commercial use.
        </p>

        <br />
        <br />
      </div>

      {/* Right Image or Visual (Optional) */}
      <div className="lg:w-1/3 mb-10 lg:mb-0">
        <img
          src="https://images.unsplash.com/photo-1560347876-aeef00ee58a1" 
          alt="QuickStay illustration"
          className="rounded-xl shadow-lg object-cover w-full h-full"
        />
       </div>
    </div>
      
  );
};

export default About;
