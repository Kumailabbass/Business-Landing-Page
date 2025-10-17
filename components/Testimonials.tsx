import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; title: string; image: string; }> = ({ quote, name, title, image }) => (
  <div className="bg-primary text-dark-text p-8 rounded-xl shadow-lg relative">
    <svg className="absolute top-0 left-0 -mt-3 -ml-3 h-16 w-16 text-primary-dark opacity-20" fill="currentColor" viewBox="0 0 32 32">
    </svg>
    <p className="text-lg italic mb-6 relative z-10">"{quote}"</p>
    <div className="flex items-center">
      <img className="w-14 h-14 rounded-full mr-4 border-2 border-white" src={image} alt={name} />
      <div>
        <p className="font-bold text-white text-lg">{name}</p>
        <p className="text-indigo-200">{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      quote: "Working with ModernBiz has been a game-changer for our company. Their strategic insights are unparalleled.",
      name: 'Alex',
      title: 'CEO, Tech Innovations',
      image: 'https://picsum.photos/id/1027/100/100'
    },
    {
      quote: "The website they built for us is not only beautiful but also incredibly fast and user-friendly. Our conversion rates have soared!",
      name: 'Syed Ali',
      title: 'Marketing Director, Creative Co.',
      image: 'https://picsum.photos/id/1005/100/100'
    },
     {
      quote: "Their team is professional, responsive, and truly dedicated to our success. I couldn't recommend them more highly.",
      name: 'Heally',
      title: 'Founder, Startup Hub',
      image: 'https://picsum.photos/id/1011/100/100'
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-light-text">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Real stories from businesses we've helped transform.</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
