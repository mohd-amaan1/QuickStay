const Experience = () => {
  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 text-gray-800 font-inter">
      {/* Heading Section */}
      <div className="text-left max-w-4xl mx-auto mb-10">
        <h1 className="font-playfair text-4xl md:text-[40px] mb-4">
          Discover Unforgettable Experiences
        </h1>
        <p className="text-gray-600 text-base">
          At <strong>QuickStay</strong>, we don't just provide a place to sleep
          — we offer a way to recharge, reconnect, and rediscover joy. Every
          booking is a step toward your next great memory.
        </p>
      </div>

      {/* Experience Images Section */}
      <div className="grid md:grid-cols-3 gap-4 mb-16">
        <img
          className="rounded-xl shadow-md object-cover h-64 w-full"
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="relaxing-hotel-room"
        />
        <img
          className="rounded-xl shadow-md object-cover h-64 w-full"
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
          alt="luxury-lobby"
        />
        <img
          className="rounded-xl shadow-md object-cover h-64 w-full"
          src="https://images.unsplash.com/photo-1644329685732-ea312763d963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hotel-poolside-relaxation"
        />
      </div>

      {/* Four Experience Highlights */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {[
          {
            title: "Comfort That Feels Like Home",
            desc: "Enjoy modern rooms that blend warmth and design. Clean, cozy, and curated for every type of traveler.",
          },
          {
            title: "Local Discoveries",
            desc: "Our listings are near top attractions, food spots, and hidden gems—giving you the most authentic travel experience.",
          },
          {
            title: "Secure & Hassle-Free Booking",
            desc: "With Clerk login and Stripe integration, your booking journey is safe, smooth, and transparent.",
          },
          {
            title: "24/7 Friendly Support",
            desc: "Stuck somewhere? Our dedicated support team is always just one message away—day or night.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[#F5F5FF]/70 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Trust & Confidence Section */}
      <div className="bg-[#f9f9ff] rounded-xl p-10 mb-20 shadow-lg text-center">
        <h2 className="text-3xl font-playfair mb-4">Why Trust QuickStay?</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          We are trusted by 10,000+ happy guests. With end-to-end encryption,
          verified hotel owners, and lightning-fast support, you’re not just
          booking a room — you’re securing peace of mind.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <img
              className="w-12 mx-auto mb-2"
              src="https://img.icons8.com/fluency/48/guarantee.png"
              alt="verified"
            />
            <p className="text-sm font-semibold">Verified Properties</p>
          </div>
          <div>
            <img
              className="w-12 mx-auto mb-2"
              src="https://img.icons8.com/fluency/48/lock.png"
              alt="secure"
            />
            <p className="text-sm font-semibold">Secure Payments</p>
          </div>
          <div>
            <img
              className="w-12 mx-auto mb-2"
              src="https://img.icons8.com/fluency/48/customer-support.png"
              alt="support"
            />
            <p className="text-sm font-semibold">24/7 Support</p>
          </div>
          <div>
            <img
              className="w-12 mx-auto mb-2"
              src="https://img.icons8.com/fluency/48/star.png"
              alt="rating"
            />
            <p className="text-sm font-semibold">4.8★ Rated Platform</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-center py-14 px-6 rounded-xl shadow-xl">
        <h2 className="text-3xl font-playfair mb-4">
          Make Your Next Stay Extraordinary
        </h2>
        <p className="text-lg mb-6">
          The best moments often begin with a great stay. Book now with
          QuickStay and enjoy the difference.
        </p>
        <a
          href="/rooms"
          className="inline-block bg-white text-[#764ba2] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Browse Rooms
        </a>
      </div>
    </div>
  );
};

export default Experience;
