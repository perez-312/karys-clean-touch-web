
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us! We'll get back to you shortly.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: ""
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-clean-blue py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-center mb-6">Contact <span className="text-clean-orange">Us</span></h1>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Have questions about our cleaning services? Need a custom quote?
            We're here to help! Reach out to us using the form below.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Service Question">Service Question</option>
                        <option value="Quote Request">Quote Request</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                      ></textarea>
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-clean-orange hover:bg-orange-600 transition-colors"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-clean-blue p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clean-orange">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p className="text-gray-700">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">Monday to Friday, 8am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-clean-blue p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clean-orange">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-gray-700">info@karyscleantouch.com</p>
                    <p className="text-gray-500 text-sm mt-1">We'll respond as soon as possible</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-clean-blue p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clean-orange">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Office Address</h3>
                    <p className="text-gray-700">123 Main Street</p>
                    <p className="text-gray-700">City, State 12345</p>
                    <p className="text-gray-500 text-sm mt-1">Serving all surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-clean-blue p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clean-orange">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8am - 6pm</p>
                    <p className="text-gray-700">Saturday: 9am - 4pm</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-clean-blue hover:bg-clean-blue/70 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clean-orange">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-clean-blue hover:bg-clean-blue/70 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clean-orange">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="bg-clean-blue hover:bg-clean-blue/70 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clean-orange">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-clean-blue hover:bg-clean-blue/70 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clean-orange">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        <div className="w-full h-[400px] bg-gray-200">
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <div className="text-center p-8">
              <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
              <p className="text-gray-600">
                Map integration will be added here.<br />
                (Google Maps, Mapbox, etc.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked <span className="text-clean-orange">Questions</span></h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Find quick answers to common questions about our services.
            </p>
            <div className="h-1 w-20 bg-clean-orange mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-3">What areas do you serve?</h3>
              <p className="text-gray-700 mb-6">
                We currently serve the entire [Your City/Area] and surrounding communities within
                a 30-mile radius. Contact us to confirm service availability for your location.
              </p>
              
              <h3 className="text-xl font-bold mb-3">How do I schedule a cleaning?</h3>
              <p className="text-gray-700">
                You can easily schedule a cleaning through our online booking system, by calling us
                directly at (555) 123-4567, or by filling out the contact form on this page.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Do you offer same-day service?</h3>
              <p className="text-gray-700 mb-6">
                While we try to accommodate urgent requests, we recommend booking at least 48 hours
                in advance to ensure availability. For same-day service inquiries, please call us directly.
              </p>
              
              <h3 className="text-xl font-bold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                We accept all major credit cards, debit cards, electronic transfers, and cash.
                Payment is typically collected after the cleaning service is completed to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready for a Cleaner Home?</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Schedule your cleaning service today and experience the Kary's Clean Touch difference.
            </p>
            <Button 
              size="lg" 
              className="bg-clean-orange hover:bg-orange-600 transition-colors"
              onClick={() => window.location.href = "/booking"}
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
