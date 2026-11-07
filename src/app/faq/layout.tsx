import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mount Toubkal Trek FAQs | Local Guide Answers & Preparation",
  description:
    "Practical answers about Mount Toubkal difficulty, licensed guides, altitude, weather, winter equipment, food, accommodation, and booking from Marrakech.",
  alternates: { canonical: "/faq" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How difficult is it to climb Mount Toubkal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Toubkal does not require technical mountaineering skills or ropes in the summer/autumn, but it is strenuous. Trekkers should expect long walking days, steep loose scree, and thin air near 4,167m. If you walk regularly and maintain a steady pace, it is manageable."
      }
    },
    {
      "@type": "Question",
      "name": "What is Altitude Sickness and how is it prevented?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Altitude sickness occurs when ascending too rapidly. Prevention includes walking slowly ('shwiya, shwiya'), drinking 3-4 liters of water daily, and allowing extra acclimatization time. The 3-day Azzadene route and 6-day circuit provide superior acclimatization."
      }
    },
    {
      "@type": "Question",
      "name": "Are the mountain guides licensed and qualified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our guides are officially licensed by the Moroccan Ministry of Tourism and trained at CFAMM in Tabant for high-altitude mountain safety, emergency navigation, and wilderness first aid."
      }
    },
    {
      "@type": "Question",
      "name": "Where does the trek start and how do I get there?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most routes start in the mountain hub of Imlil, approximately 90 minutes (65 km) south of Marrakech. We provide private door-to-door vehicle transfers from your Marrakech hotel or riad directly to the trailhead."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to our luggage during the trek?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You only carry a daypack with water, snacks, waterproof jacket, camera, and sunscreen. Main duffel bags are loaded onto pack mules and transported by local muleteers (up to 15kg per trekker)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the accommodation like on the mountain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On Mount Toubkal climbs, nights are spent in the Toubkal mountain refuges (Neltner or Les Mouflons) in shared bunk dormitories with blankets and dining facilities. On village treks, you stay in traditional family-run Berber guesthouses (gîtes)."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the tour price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All tours include licensed local mountain guides, private cooks preparing fresh Moroccan meals (breakfast, lunch, dinner), mule support for luggage, refuge or guesthouse lodging, and Marrakech transfers where specified."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need personal travel insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Personal travel insurance is mandatory for trekking in the High Atlas Mountains. Your policy must explicitly cover mountain hiking up to 4,200 meters and emergency medical evacuation / search and rescue."
      }
    }
  ]
};

export default function FaqLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
