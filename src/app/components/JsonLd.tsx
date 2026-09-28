import { treks } from "../data/treks";
import {
  contactEmail,
  contactPhoneDisplay,
  googleMapsUrl,
  tripAdvisorUrl,
} from "../data/contact";
import { aggregateRating, reviews } from "../data/reviews";

export function JsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Magical Toubkal Trek",
    "url": "https://www.magical-toubkal-trek.com",
    "@id": "https://www.magical-toubkal-trek.com/#website",
    "inLanguage": "en",
    "publisher": {
      "@type": "Organization",
      "name": "Magical Toubkal Trek",
      "url": "https://www.magical-toubkal-trek.com"
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency"],
    "name": "Magical Toubkal Trek",
    "@id": "https://www.magical-toubkal-trek.com/#business",
    "url": "https://www.magical-toubkal-trek.com",
    "logo": "https://www.magical-toubkal-trek.com/logo.png",
    "image": "https://www.magical-toubkal-trek.com/toubkal-hero.webp",
    "description": "Local High Atlas mountain guiding team in Imlil, Morocco. Specialist organizers of Mount Toubkal climbs and wilderness treks.",
    "telephone": contactPhoneDisplay,
    "email": contactEmail,
    "priceRange": "$$",
    "sameAs": [tripAdvisorUrl, googleMapsUrl],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Imlil Center",
      "addressLocality": "Imlil",
      "addressRegion": "Marrakech-Safi",
      "postalCode": "42165",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.1366735,
      "longitude": -7.920504
    },
    "areaServed": ["High Atlas Mountains", "Imlil", "Mount Toubkal", "Jebel M'goun", "Marrakech"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating,
      "worstRating": aggregateRating.worstRating
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "datePublished": r.datePublished,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": r.text
    })),
    "makesOffer": treks.map((t) => ({
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": t.startingPrice,
      "itemOffered": {
        "@type": "TouristTrip",
        "name": t.title,
        "description": t.subtitle,
        "url": `https://www.magical-toubkal-trek.com/treks/${t.slug}`
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
