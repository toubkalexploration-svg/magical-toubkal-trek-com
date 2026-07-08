// Real review data sourced from the verified TripAdvisor profile:
// https://www.tripadvisor.com/Attraction_Review-g293734-d25186071-Reviews-Magical_Toubkal_Trek-Marrakech_Marrakech_Safi.html

export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: 106,
  bestRating: 5,
  worstRating: 1,
};

export type Review = {
  name: string;
  country?: string;
  rating: number;
  trek: string;
  date: string; // human-readable, for display
  datePublished: string; // ISO 8601, for structured data
  text: string;
  source: string;
};

export const reviews: Review[] = [
  {
    name: "Tham Tran",
    country: "Vietnam",
    rating: 5,
    trek: "Atlas Mountains Day Hike",
    date: "February 2026",
    datePublished: "2026-03-08",
    text: "Highly recommend this day trip for those who love mountains and outdoor activities. The way up and the way back were different routes so you never get bored. Our guide Hasan was nice and helpful, and afterwards they served us tagine in a local restaurant — the best tagine I had in my whole trip in Morocco.",
    source: "TripAdvisor",
  },
  {
    name: "Michael H.",
    rating: 5,
    trek: "Atlas Mountains Day Hike",
    date: "March 2025",
    datePublished: "2025-03-31",
    text: "Great day trek in the Atlas Mountains. Our guide Youseff spoke good English and led the hike at a good pace that suited all five members of our party. It was a varied hike and fabulous to see the snow on the higher mountains. We were provided with a packed lunch which we ate at the summit. Would definitely recommend this trip.",
    source: "TripAdvisor",
  },
  {
    name: "Bert B.",
    rating: 5,
    trek: "Atlas Mountains Day Hike",
    date: "March 2025",
    datePublished: "2025-03-25",
    text: "Great way to see the mountains. Mohamed was a fantastic guide and very knowledgeable with his background in geology. We had the choice of eating on our return or taking a packed lunch to eat at the top, which we did. A perfect day out.",
    source: "TripAdvisor",
  },
  {
    name: "Per Tuvesson",
    country: "Sweden",
    rating: 5,
    trek: "Atlas Mountains Day Hike",
    date: "November 2025",
    datePublished: "2025-12-01",
    text: "Lovely views and a good guide, Muhammad. Requires decent fitness as the pace was quite high. Even if you don't climb all the way to the mountain top, the view is still fantastic and the walk is very rewarding.",
    source: "TripAdvisor",
  },
  {
    name: "Harvey R.",
    rating: 5,
    trek: "Imlil Valley Day Hike",
    date: "September 2025",
    datePublished: "2025-09-10",
    text: "Good day walking in the Atlas Mountains — about three and a half hours including a break for lunch. Imlil was about an hour and a half's drive from Marrakech with two stops on the way: a viewpoint and a visit to an Argan oil collective. Really well organised.",
    source: "TripAdvisor",
  },
  {
    name: "Markus W.",
    rating: 5,
    trek: "Atlas Mountains Day Hike",
    date: "March 2025",
    datePublished: "2025-03-24",
    text: "Many thanks, Lahcen, for this wonderful day in the Atlas Mountains with the amazing view of Toubkal, Morocco's highest mountain. Absolutely a recommendation.",
    source: "TripAdvisor",
  },
];
