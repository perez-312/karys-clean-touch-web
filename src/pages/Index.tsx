
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient">
        <div className="container-custom min-h-[85vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="mb-6">
                  Professional <span className="text-clean-orange">Cleaning</span> 
                  <br />Services For Your Home
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-700">
                  Let us take care of the cleaning, so you can focus on what matters most.
                  Professional, reliable, and thorough cleaning services tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/booking">
                    <Button size="lg" className="bg-clean-orange hover:bg-orange-600 transition-colors">
                      Book Now
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="border-clean-orange text-clean-orange hover:bg-clean-orange/10">
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
            <h2 className="mb-4">About <span className="text-clean-orange">Kary's Clean Touch</span></h2>
            <div className="h-1 w-20 bg-clean-orange mx-auto"></div>
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
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=600&auto=format&fit=crop" 
                alt="Cleaning supplies" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-clean-blue p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-2xl text-clean-dark">5+ Years</p>
                <p className="text-gray-700">Of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our <span className="text-clean-orange">Services</span></h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Choose from our range of professional cleaning services designed to keep your home
              spotless and comfortable.
            </p>
            <div className="h-1 w-20 bg-clean-orange mx-auto mt-4"></div>
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
                  <span className="text-clean-orange font-semibold text-lg">From $99</span>
                  <Link to="/services">
                    <Button variant="outline" className="border-clean-orange text-clean-orange hover:bg-clean-orange hover:text-white">
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
                  <span className="text-clean-orange font-semibold text-lg">From $179</span>
                  <Link to="/services">
                    <Button variant="outline" className="border-clean-orange text-clean-orange hover:bg-clean-orange hover:text-white">
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
                  <span className="text-clean-orange font-semibold text-lg">From $249</span>
                  <Link to="/services">
                    <Button variant="outline" className="border-clean-orange text-clean-orange hover:bg-clean-orange hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-clean-orange hover:bg-orange-600 transition-colors">
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
            <h2 className="mb-4">What Our <span className="text-clean-orange">Customers Say</span></h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Don't just take our word for it. Here's what our satisfied customers have to say about
              our cleaning services.
            </p>
            <div className="h-1 w-20 bg-clean-orange mx-auto mt-4"></div>
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
                      fill="#F97316" 
                      stroke="#F97316" 
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
                      fill="#F97316" 
                      stroke="#F97316" 
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
                      fill="#F97316" 
                      stroke="#F97316" 
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
              <Button className="bg-clean-orange hover:bg-orange-600 transition-colors">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready for a Cleaner, Fresher Home?</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Book your cleaning service today and experience the Kary's Clean Touch difference.
              Satisfaction guaranteed!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-clean-orange hover:bg-orange-600 transition-colors">
                  Book Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-clean-orange text-clean-orange hover:bg-clean-orange/10">
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
