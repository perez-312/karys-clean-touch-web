
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div>
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100"></div>
          {/* Animated bubbles/waves */}
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-clean-blue opacity-20"
            animate={{ 
              y: [0, -15, 0], 
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute top-60 right-20 w-48 h-48 rounded-full bg-clean-blue opacity-20"
            animate={{ 
              y: [0, -20, 0], 
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 7,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-clean-blue opacity-30"
            animate={{ 
              y: [0, -15, 0], 
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-clean-light-blue opacity-10"
            animate={{ 
              y: [0, -10, 0], 
              x: [0, 10, 0],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "easeInOut" 
            }}
          />
        </div>
        <div className="container-custom min-h-[85vh] flex items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="mb-6">
                  Professional <span className="text-clean-light-blue">Cleaning</span> 
                  <br />Services For Your Home
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-700">
                  Let us take care of the cleaning, so you can focus on what matters most.
                  Professional, reliable, and thorough cleaning services tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/booking">
                    <Button size="lg" className="bg-clean-light-blue hover:bg-blue-500 transition-colors">
                      Book Now
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="border-clean-light-blue text-clean-light-blue hover:bg-clean-light-blue/10">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <motion.img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop"
                alt="Clean home living room"
                className="rounded-lg shadow-xl w-full max-w-md object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">About <span className="text-clean-light-blue">Kary's Clean Touch</span></h2>
            <div className="h-1 w-20 bg-clean-light-blue mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-6 text-gray-700">
                Kary's Clean Touch is a family-owned cleaning company dedicated to providing exceptional
                cleaning services for homes in the local community. With years of experience and a
                passion for cleanliness, our team approaches each home with care and attention to detail.
              </p>
              <p className="mb-6 text-gray-700">
                We understand that every home is unique, which is why we offer customized cleaning
                solutions tailored to your specific needs. Our professional cleaners are thoroughly
                trained, reliable, and trustworthy.
              </p>
              <p className="text-gray-700">
                We use eco-friendly cleaning products that effectively clean and sanitize without
                harsh chemicals, making your home safe for children, pets, and the environment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Multiple smaller cleaning images instead of one large one */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=400&auto=format&fit=crop" 
                  alt="Cleaning supplies" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400&auto=format&fit=crop" 
                  alt="Cleaning service" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=400&auto=format&fit=crop" 
                  alt="Clean home" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md relative">
                <img 
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=400&auto=format&fit=crop" 
                  alt="Cleaning tools" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-0 left-0 bg-clean-blue p-3 rounded-tr-lg shadow-md">
                  <p className="font-bold text-lg text-clean-dark">5+ Years</p>
                  <p className="text-xs text-gray-700">Of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our <span className="text-clean-light-blue">Services</span></h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Choose from our range of professional cleaning services designed to keep your home
              spotless and comfortable.
            </p>
            <div className="h-1 w-20 bg-clean-light-blue mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Clean */}
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=600&auto=format&fit=crop" 
                  alt="Basic Clean"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Basic Clean</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for regular maintenance cleaning. Includes all essential cleaning tasks to
                  keep your home fresh and tidy.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-clean-light-blue font-semibold text-lg">From $99</span>
                  <Link to="/services">
                    <Button variant="outline" className="border-clean-light-blue text-clean-light-blue hover:bg-clean-light-blue hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Deep Clean */}
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=600&auto=format&fit=crop" 
                  alt="Deep Clean"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Deep Clean</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive cleaning service that covers all areas of your home, including
                  hard-to-reach places and detailed attention.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-clean-light-blue font-semibold text-lg">From $179</span>
                  <Link to="/services">
                    <Button variant="outline" className="border-clean-light-blue text-clean-light-blue hover:bg-clean-light-blue hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Move-In/Out Clean */}
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=600&auto=format&fit=crop" 
                  alt="Move-In/Out Clean"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Move-In/Out Clean</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning for when you're moving in or out. Ensures the property is
                  spotless from top to bottom.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-clean-light-blue font-semibold text-lg">From $249</span>
                  <Link to="/services">
                    <Button variant="outline" className="border-clean-light-blue text-clean-light-blue hover:bg-clean-light-blue hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-clean-light-blue hover:bg-blue-500 transition-colors">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our <span className="text-clean-light-blue">Customers Say</span></h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Don't just take our word for it. Here's what our satisfied customers have to say about
              our cleaning services.
            </p>
            <div className="h-1 w-20 bg-clean-light-blue mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="#33C3F0" 
                      stroke="#33C3F0" 
                      strokeWidth="1" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-gray-600 mb-4">
                  "Kary's team did an exceptional job cleaning our home. They were thorough,
                  professional, and paid attention to every detail. Our house has never looked
                  better!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-clean-gray mr-3 flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold">Jennifer D.</p>
                    <p className="text-sm text-gray-500">Regular Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="#33C3F0" 
                      stroke="#33C3F0" 
                      strokeWidth="1" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-gray-600 mb-4">
                  "I was amazed at the transformation of my house after Kary's team finished. They
                  were efficient, friendly, and went above and beyond my expectations. Highly
                  recommend!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-clean-gray mr-3 flex items-center justify-center text-white font-bold">
                    MS
                  </div>
                  <div>
                    <p className="font-semibold">Michael S.</p>
                    <p className="text-sm text-gray-500">Repeat Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="#33C3F0" 
                      stroke="#33C3F0" 
                      strokeWidth="1" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-gray-600 mb-4">
                  "I've tried several cleaning services, but Kary's Clean Touch is by far the best.
                  They're reliable, thorough, and always leave my home smelling fresh and looking
                  spotless."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-clean-gray mr-3 flex items-center justify-center text-white font-bold">
                    AT
                  </div>
                  <div>
                    <p className="font-semibold">Amanda T.</p>
                    <p className="text-sm text-gray-500">Monthly Service</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/reviews">
              <Button className="bg-clean-light-blue hover:bg-blue-500 transition-colors">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready for a Cleaner, Fresher Home?</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Book your cleaning service today and experience the Kary's Clean Touch difference.
              Satisfaction guaranteed!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-clean-light-blue hover:bg-blue-500 transition-colors">
                  Book Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-clean-light-blue text-clean-light-blue hover:bg-clean-light-blue/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
