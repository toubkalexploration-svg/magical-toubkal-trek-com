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
      ...(t.customPrice ? { "description": "Custom quote on request" } : { "price": t.startingPrice }),
      "itemOffered": {
        "@type": "TouristTrip",
        "name": t.title,
        "description": t.subtitle,
        "url": `https://www.magical-toubkal-trek.com/treks/${t.slug}`
      }
    }))
  };

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need a guide to climb Mount Toubkal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, a licensed local guide is legally required on the standard Mount Toubkal approach, with mandatory police checkpoints operating above Imlil."
        }
      },
      {
        "@type": "Question",
        "name": "Which trek is best for a first visit to the High Atlas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose the 1-Day Imlil Valley hike for a gentle introduction, the 2-Day Mount Toubkal climb if you are physically fit and short on time, or a 3-Day Berber Valleys route for a steadier cultural experience."
        }
      },
      {
        "@type": "Question",
        "name": "Are Marrakech transfers included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, multi-day Mount Toubkal packages include private pickup and return transfers from your Marrakech hotel or riad directly to Imlil."
        }
      },
      {
        "@type": "Question",
        "name": "Can Mount Toubkal be climbed in winter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but winter conditions turn Toubkal into an alpine mountaineering ascent requiring crampons, ice axes, proper winter gear, and a safety-conscious mountain guide."
        }
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
    </>
  );
}
