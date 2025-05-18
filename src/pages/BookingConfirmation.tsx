
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;

  // Redirect if page is accessed directly without booking data
  useEffect(() => {
    if (!bookingData) {
      navigate("/booking");
    }
  }, [bookingData, navigate]);

  if (!bookingData) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div>
      <section className="bg-clean-blue py-16 md:py-24">
        <div className="container-custom text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-clean-orange" />
          </div>
          <h1 className="text-center mb-6">Booking <span className="text-clean-orange">Confirmed</span></h1>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Thank you for choosing Kary's Clean Touch! Your cleaning service has been scheduled.
            We've sent a confirmation email with all the details.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <Card className="border border-gray-200 shadow-md">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Booking Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b pb-2">Service Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Service Type:</span>
                      <span>{bookingData.service?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Date:</span>
                      <span>
                        {bookingData.date?.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Time:</span>
                      <span>{bookingData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Estimated Duration:</span>
                      <span>{bookingData.service?.duration}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t">
                      <span className="font-bold">Price:</span>
                      <span className="font-bold text-clean-orange">${bookingData.service?.price}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b pb-2">Contact & Address</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium">Name:</span>
                      <p>{bookingData.firstName} {bookingData.lastName}</p>
                    </div>
                    <div>
                      <span className="font-medium">Email:</span>
                      <p>{bookingData.email}</p>
                    </div>
                    <div>
                      <span className="font-medium">Phone:</span>
                      <p>{bookingData.phone}</p>
                    </div>
                    <div>
                      <span className="font-medium">Address:</span>
                      <p>{bookingData.address}</p>
                      <p>{bookingData.city}, {bookingData.state} {bookingData.zip}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {bookingData.specialInstructions && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-2">Special Instructions</h3>
                  <p className="bg-gray-50 p-4 rounded-md">{bookingData.specialInstructions}</p>
                </div>
              )}
              
              <div className="mt-8 border-t pt-8">
                <h3 className="text-lg font-semibold mb-4">What's Next?</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>You will receive a confirmation email with all booking details.</li>
                  <li>Our team will review your booking and contact you if any clarification is needed.</li>
                  <li>24 hours before your scheduled cleaning, you'll receive a reminder email.</li>
                  <li>Our cleaning team will arrive at the scheduled time ready to work!</li>
                </ol>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Return to Homepage
                  </Button>
                </Link>
                <Button className="bg-clean-orange hover:bg-orange-600 transition-colors w-full sm:w-auto">
                  View My Bookings
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Need to make changes?</h2>
            <p className="text-center text-gray-700 mb-6">
              If you need to reschedule, cancel, or modify your booking, please contact us at least
              24 hours before your scheduled appointment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clean-orange mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clean-orange mr-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>support@karyscleantouch.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingConfirmation;
