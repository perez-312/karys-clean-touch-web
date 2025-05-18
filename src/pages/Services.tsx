
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Basic Clean",
      description: "Our standard cleaning package covers all the essentials to maintain a clean and tidy home.",
      price: 99,
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=600&auto=format&fit=crop",
      features: [
        "Dusting all accessible surfaces",
        "Vacuuming and mopping floors",
        "Cleaning kitchen counters and appliances",
        "Bathroom cleaning and sanitizing",
        "Emptying trash bins",
        "Making beds (linens provided)"
      ]
    },
    {
      id: 2,
      name: "Deep Clean",
      description: "A thorough cleaning service that reaches those often neglected areas for a truly refreshed home.",
      price: 179,
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=600&auto=format&fit=crop",
      features: [
        "All Basic Clean services",
        "Deep cleaning of kitchen appliances",
        "Detailed bathroom cleaning",
        "Baseboards and door frame cleaning",
        "Window sills and track cleaning",
        "Cabinet fronts cleaning",
        "Light fixtures dusting",
        "Removal of cobwebs"
      ]
    },
    {
      id: 3,
      name: "Move-In/Out Clean",
      description: "Specialized cleaning for transitioning to or from a property, ensuring it's spotless from top to bottom.",
      price: 249,
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=600&auto=format&fit=crop",
      features: [
        "All Deep Clean services",
        "Inside cabinet cleaning",
        "Inside oven and refrigerator cleaning",
        "Window cleaning",
        "Removal of all dust and debris",
        "Detailed cleaning of all fixtures",
        "Deep cleaning of all flooring",
        "Cleaning inside and outside of all appliances"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-clean-blue py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-center mb-6">Our <span className="text-clean-orange">Services</span></h1>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-700 mb-8">
            We offer comprehensive cleaning services tailored to meet your specific needs.
            Choose the package that's right for you and enjoy a spotless, fresh home.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <Card key={service.id} className="border-none shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
                  <div className="h-64 lg:h-auto lg:col-span-1 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.name}</h2>
                    <p className="mb-6 text-gray-700">{service.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-clean-orange mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mt-6">
                      <div className="text-2xl font-bold text-clean-orange">
                        From ${service.price}
                        <span className="text-sm text-gray-500 font-normal ml-1">/ visit</span>
                      </div>
                      <Link to={`/booking?service=${service.id}`}>
                        <Button className="bg-clean-orange hover:bg-orange-600 transition-colors">
                          Book This Service
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Additional <span className="text-clean-orange">Services</span></h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Customize your cleaning experience with our additional services.
              These can be added to any of our standard packages.
            </p>
            <div className="h-1 w-20 bg-clean-orange mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Window Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Interior and exterior window cleaning to let more natural light into your home.
                </p>
                <p className="text-clean-orange font-semibold">From $60</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Carpet Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Deep cleaning of carpets to remove stains, odors, and allergens.
                </p>
                <p className="text-clean-orange font-semibold">From $85</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Oven Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Thorough cleaning of your oven, removing grease and food residue.
                </p>
                <p className="text-clean-orange font-semibold">From $45</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Refrigerator Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Deep cleaning inside and outside of your refrigerator.
                </p>
                <p className="text-clean-orange font-semibold">From $55</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Laundry Service</h3>
                <p className="text-gray-600 mb-4">
                  Washing, drying, and folding of clothes and linens.
                </p>
                <p className="text-clean-orange font-semibold">From $35</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Organization</h3>
                <p className="text-gray-600 mb-4">
                  Organizing closets, pantries, or other spaces in your home.
                </p>
                <p className="text-clean-orange font-semibold">From $65</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked <span className="text-clean-orange">Questions</span></h2>
            <div className="h-1 w-20 bg-clean-orange mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-3">How often should I schedule cleaning?</h3>
              <p className="text-gray-700 mb-6">
                It depends on your needs and lifestyle. Many clients prefer weekly or bi-weekly
                cleanings for regular maintenance. Larger homes or homes with pets might benefit
                from more frequent visits.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Do I need to provide cleaning supplies?</h3>
              <p className="text-gray-700 mb-6">
                No, we bring all necessary cleaning supplies and equipment. We use eco-friendly
                products that are effective yet safe for your family and pets.
              </p>
              
              <h3 className="text-xl font-bold mb-3">How many cleaners will come to my home?</h3>
              <p className="text-gray-700">
                Typically, we send 1-3 cleaners depending on the size of your home and the service
                you've selected. This helps us complete the cleaning efficiently.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Are your services insured?</h3>
              <p className="text-gray-700 mb-6">
                Yes, we are fully insured for your peace of mind. Our cleaners are bonded and
                insured, covering any potential accidents or damages.
              </p>
              
              <h3 className="text-xl font-bold mb-3">What if I'm not satisfied with the cleaning?</h3>
              <p className="text-gray-700 mb-6">
                Your satisfaction is our priority. If you're not completely satisfied, contact us
                within 24 hours and we'll return to re-clean any areas at no additional cost.
              </p>
              
              <h3 className="text-xl font-bold mb-3">How do I schedule a cleaning?</h3>
              <p className="text-gray-700">
                You can easily schedule a cleaning through our online booking system or by calling us
                directly. We'll find a time that works best for your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Experience a Professional Clean?</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Book your cleaning service today and see the difference professional cleaning can make in your home.
            </p>
            <Link to="/booking">
              <Button size="lg" className="bg-clean-orange hover:bg-orange-600 transition-colors">
                Schedule Your Cleaning
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
