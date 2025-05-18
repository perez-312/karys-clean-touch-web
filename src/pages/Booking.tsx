
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface ServiceOption {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
}

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const queryParams = new URLSearchParams(location.search);
  const initialServiceId = queryParams.get('service');
  
  const serviceOptions: ServiceOption[] = [
    {
      id: 1,
      name: "Basic Clean",
      description: "Regular cleaning service for home maintenance",
      price: 99,
      duration: "2-3 hours"
    },
    {
      id: 2,
      name: "Deep Clean",
      description: "Thorough cleaning of all areas including hard-to-reach places",
      price: 179,
      duration: "4-5 hours"
    },
    {
      id: 3,
      name: "Move-In/Out Clean",
      description: "Complete cleaning for when you're moving in or out of a property",
      price: 249,
      duration: "5-7 hours"
    }
  ];

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  // Generate available days (current date + 30 days)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    // Skip weekends and randomly make some weekdays unavailable
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      
      // Skip Sundays (0) and some random dates
      if (date.getDay() !== 0 && Math.random() > 0.3) {
        dates.push(date);
      }
    }
    
    return dates;
  };
  
  const availableDates = generateAvailableDates();

  // State variables
  const [selectedService, setSelectedService] = useState<number | null>(
    initialServiceId ? parseInt(initialServiceId) : null
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    specialInstructions: ""
  });
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Effect to handle service selection from URL params
  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(parseInt(initialServiceId));
    }
  }, [initialServiceId]);

  const handleServiceSelect = (value: number) => {
    setSelectedService(value);
  };

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const isDateAvailable = (date: Date) => {
    return availableDates.some(availableDate => 
      availableDate.getDate() === date.getDate() && 
      availableDate.getMonth() === date.getMonth() &&
      availableDate.getFullYear() === date.getFullYear()
    );
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1 && !selectedService) {
      toast({
        title: "Please select a service",
        description: "You need to select a cleaning service to continue.",
        variant: "destructive"
      });
      return;
    }
    
    if (step === 2 && (!selectedDate || !selectedTime)) {
      toast({
        title: "Please select date and time",
        description: "You need to select both a date and time slot to continue.",
        variant: "destructive"
      });
      return;
    }
    
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !selectedDate || !selectedTime) {
      toast({
        title: "Incomplete booking information",
        description: "Please complete all booking steps before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Request Submitted",
        description: "We've received your booking request and will contact you shortly to confirm.",
      });
      
      // Navigate to success page
      navigate("/booking-confirmation", { 
        state: { 
          service: serviceOptions.find(s => s.id === selectedService),
          date: selectedDate,
          time: selectedTime,
          ...formData
        } 
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-clean-blue py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-center mb-6">Book Your <span className="text-clean-orange">Cleaning</span></h1>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Schedule your professional cleaning service in just a few simple steps.
            Choose your service, select a date and time, and provide your details.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <div className={`flex-1 h-1 ${step >= 1 ? 'bg-clean-orange' : 'bg-gray-300'}`}></div>
              <div className={`flex-1 h-1 ${step >= 2 ? 'bg-clean-orange' : 'bg-gray-300'}`}></div>
              <div className={`flex-1 h-1 ${step >= 3 ? 'bg-clean-orange' : 'bg-gray-300'}`}></div>
            </div>
            <div className="flex justify-between">
              <div className="text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${step >= 1 ? 'bg-clean-orange text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <p className="text-sm font-medium">Service</p>
              </div>
              <div className="text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${step >= 2 ? 'bg-clean-orange text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <p className="text-sm font-medium">Schedule</p>
              </div>
              <div className="text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${step >= 3 ? 'bg-clean-orange text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <p className="text-sm font-medium">Details</p>
              </div>
            </div>
          </div>

          {/* Step 1: Select Service */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Select a Cleaning Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {serviceOptions.map((service) => (
                  <Card 
                    key={service.id}
                    className={`cursor-pointer border-2 transition-all hover:shadow-md ${
                      selectedService === service.id 
                        ? "border-clean-orange" 
                        : "border-gray-200"
                    }`}
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex justify-between">
                        <span className="text-clean-orange font-bold">${service.price}</span>
                        <span className="text-gray-500">{service.duration}</span>
                      </div>
                      {selectedService === service.id && (
                        <div className="mt-4 text-clean-orange flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                          <span className="ml-2">Selected</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Choose Date & Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Select a Date</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateChange}
                    className="rounded-md border p-3 pointer-events-auto"
                    disabled={(date) => {
                      return (
                        date < new Date() || // Disable past dates
                        !isDateAvailable(date) // Disable unavailable dates
                      );
                    }}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    * We're closed on Sundays and some dates may be fully booked.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Select a Time Slot</h3>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant="outline"
                          className={`
                            ${selectedTime === time ? "bg-clean-orange text-white hover:bg-orange-600" : "hover:bg-gray-100"}
                            ${Math.random() > 0.7 ? "opacity-50 cursor-not-allowed" : ""}
                          `}
                          onClick={() => Math.random() > 0.7 ? null : handleTimeSelect(time)}
                          disabled={Math.random() > 0.7}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-6 rounded-md text-center">
                      <p className="text-gray-500">Please select a date first</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Personal Details */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
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
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Property Address</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Street Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                            State
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700 mb-1">
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                    placeholder="E.g., entry instructions, pets, areas that need special attention..."
                  ></textarea>
                </div>
              </form>

              {/* Booking Summary Card */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Service:</span>
                        <span className="text-clean-dark">
                          {selectedService ? serviceOptions.find(s => s.id === selectedService)?.name : ""}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Date:</span>
                        <span className="text-clean-dark">
                          {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : ""}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Time:</span>
                        <span className="text-clean-dark">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Estimated Price:</span>
                        <span className="text-xl font-bold text-clean-orange">
                          ${selectedService ? serviceOptions.find(s => s.id === selectedService)?.price : ""}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <Button 
                variant="outline" 
                onClick={prevStep}
                className="border-clean-orange text-clean-orange hover:bg-clean-orange/10"
              >
                Previous
              </Button>
            ) : (
              <div></div> // Empty div for flex layout
            )}
            
            {step < 3 ? (
              <Button
                className="bg-clean-orange hover:bg-orange-600 transition-colors"
                onClick={nextStep}
              >
                Continue
              </Button>
            ) : (
              <Button
                className="bg-clean-orange hover:bg-orange-600 transition-colors"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Processing..." : "Complete Booking"}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our <span className="text-clean-orange">Customers Say</span></h2>
            <div className="h-1 w-20 bg-clean-orange mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  "The booking process was smooth and easy! The cleaning team arrived right on
                  time and did a fantastic job. Will definitely book again."
                </p>
                <p className="font-semibold">- Sarah M.</p>
              </CardContent>
            </Card>
            
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
                  "I loved being able to choose the exact date and time for my cleaning. The
                  service was excellent and my apartment has never looked better!"
                </p>
                <p className="font-semibold">- Thomas R.</p>
              </CardContent>
            </Card>
            
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
                  "Booking with Kary's Clean Touch was so convenient. I appreciated the confirmation
                  email and reminders before my appointment. Great experience!"
                </p>
                <p className="font-semibold">- Emma K.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
