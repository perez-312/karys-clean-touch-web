
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  service: string;
  images?: string[];
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Jennifer D.",
      date: "2024-04-15",
      rating: 5,
      comment: "Kary's team did an exceptional job cleaning our home. They were thorough, professional, and paid attention to every detail. Our house has never looked better!",
      service: "Deep Clean",
      images: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=400&auto=format&fit=crop"
      ]
    },
    {
      id: 2,
      name: "Michael S.",
      date: "2024-04-10",
      rating: 5,
      comment: "I was amazed at the transformation of my house after Kary's team finished. They were efficient, friendly, and went above and beyond my expectations. Highly recommend!",
      service: "Basic Clean",
      images: [
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=400&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Amanda T.",
      date: "2024-04-05",
      rating: 5,
      comment: "I've tried several cleaning services, but Kary's Clean Touch is by far the best. They're reliable, thorough, and always leave my home smelling fresh and looking spotless.",
      service: "Deep Clean"
    },
    {
      id: 4,
      name: "Robert J.",
      date: "2024-03-28",
      rating: 4,
      comment: "Great service overall. Very thorough cleaning and friendly staff. The only reason for 4 stars instead of 5 is they arrived a bit later than scheduled.",
      service: "Move-In/Out Clean",
      images: [
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=400&auto=format&fit=crop"
      ]
    },
    {
      id: 5,
      name: "Sarah P.",
      date: "2024-03-20",
      rating: 5,
      comment: "Absolutely fantastic service! My apartment looks brand new after their deep cleaning. Will definitely be using their services regularly from now on.",
      service: "Deep Clean"
    },
    {
      id: 6,
      name: "David L.",
      date: "2024-03-15",
      rating: 5,
      comment: "The move-out cleaning service was worth every penny. I got my full deposit back thanks to how thorough they were. Very impressed!",
      service: "Move-In/Out Clean",
      images: [
        "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558101930-7be84f3d60dc?q=80&w=400&auto=format&fit=crop"
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Basic Clean",
    rating: 5,
    comment: "",
    images: []
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // In a real application, this would send the review data to your backend
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback! Your review will be posted after moderation.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      service: "Basic Clean",
      rating: 5,
      comment: "",
      images: []
    });
  };

  // Filter reviews based on active tab
  const filteredReviews = reviews.filter(review => {
    if (activeTab === "all") return true;
    return review.service.toLowerCase().replace(/\s+/g, '-') === activeTab;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-clean-blue py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-center mb-6">Customer <span className="text-clean-orange">Reviews</span></h1>
          <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            See what our clients are saying about their experience with Kary's Clean Touch.
            We value feedback and strive to provide the best cleaning service possible.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Reviews</TabsTrigger>
                <TabsTrigger value="basic-clean">Basic Clean</TabsTrigger>
                <TabsTrigger value="deep-clean">Deep Clean</TabsTrigger>
                <TabsTrigger value="move-in/out-clean">Move-In/Out Clean</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredReviews.map((review) => (
                  <ReviewCard 
                    key={review.id} 
                    review={review} 
                    setSelectedImage={setSelectedImage}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="basic-clean">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredReviews.map((review) => (
                  <ReviewCard 
                    key={review.id} 
                    review={review} 
                    setSelectedImage={setSelectedImage}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="deep-clean">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredReviews.map((review) => (
                  <ReviewCard 
                    key={review.id} 
                    review={review} 
                    setSelectedImage={setSelectedImage}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="move-in/out-clean">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredReviews.map((review) => (
                  <ReviewCard 
                    key={review.id} 
                    review={review}
                    setSelectedImage={setSelectedImage}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Leave a Review Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Share Your <span className="text-clean-orange">Experience</span></h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              We value your feedback. Please take a moment to share your experience with our
              cleaning services.
            </p>
            <div className="h-1 w-20 bg-clean-orange mx-auto mt-4"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
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
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service You Received
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                    >
                      <option value="Basic Clean">Basic Clean</option>
                      <option value="Deep Clean">Deep Clean</option>
                      <option value="Move-In/Out Clean">Move-In/Out Clean</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                      Rating
                    </label>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-1"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill={formData.rating >= star ? "#F97316" : "none"} 
                            stroke="#F97316" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Review
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Images (Optional)
                    </label>
                    <input
                      type="file"
                      id="images"
                      name="images"
                      multiple
                      accept="image/*"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-orange"
                    />
                    <p className="mt-1 text-sm text-gray-500">Share before/after photos of your cleaned space</p>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" className="bg-clean-orange hover:bg-orange-600 transition-colors">
                      Submit Review
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Review" 
              className="max-h-[80vh] mx-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

interface ReviewCardProps {
  review: Review;
  setSelectedImage: (image: string | null) => void;
}

const ReviewCard = ({ review, setSelectedImage }: ReviewCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {/* Display star rating */}
          <div className="flex mr-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star}
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill={review.rating >= star ? "#F97316" : "none"} 
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
          <span className="text-sm text-gray-500">
            {formatDate(review.date)}
          </span>
        </div>

        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-clean-gray mr-3 flex items-center justify-center text-white font-bold">
            {review.name.split(' ')[0][0]}{review.name.split(' ')[1][0]}
          </div>
          <div>
            <p className="font-semibold">{review.name}</p>
            <p className="text-sm text-clean-orange">{review.service}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{review.comment}</p>

        {review.images && review.images.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {review.images.map((image, i) => (
              <div 
                key={i} 
                className="cursor-pointer overflow-hidden rounded-md"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`${review.name}'s review`}
                  className="h-36 w-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Reviews;
