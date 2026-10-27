export type PricingTier = {
  groupSize: number; // e.g., 1, 2, 3, 4, 5, 6, 7+
  pricePerPerson: number;
};

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  walkingTime?: string;
  distance?: string;
  elevationChange?: string;
  meals?: string;
  accommodation?: string;
};

export type Trek = {
  slug: string;
  title: string;
  duration: string;
  subtitle: string;
  summary: string;
  seoTitle?: string;
  seoDescription?: string;
  touristType?: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Strenuous";
  maxElevation: string;
  startLocation: string;
  endLocation: string;
  startingPrice: number;
  imageSrc: string;
  imageAlt: string;
  galleryImages?: Array<{
    src: string;
    alt: string;
  }>;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  pricingTiers: PricingTier[];
  itinerary: ItineraryDay[];
  packingList: string[];
};

const cloudinaryImage = (publicId: string) =>
  `https://res.cloudinary.com/dg13m8nf0/image/upload/f_auto,q_auto,w_1200/${publicId}`;

export const treks: Trek[] = [
  {
    slug: "2-day-toubkal-trek",
    title: "2-Day Mount Toubkal Climb",
    duration: "2 Days",
    subtitle: "A short, strong climb to the highest summit in North Africa.",
    summary: "This is the direct Toubkal route for fit walkers with limited time. You leave Imlil, pass Sidi Chamharouch, sleep at the refuge, and start early for the summit. It is simple on paper, but the altitude and loose stone make pacing important.",
    difficulty: "Challenging",
    maxElevation: "4,167m (13,671 ft)",
    startLocation: "Imlil (Pick up from Marrakech)",
    endLocation: "Imlil (Drop off in Marrakech)",
    startingPrice: 160,
    imageSrc: cloudinaryImage("45970676-08df-4ce6-b80d-30c5b758ddad_qzvpfc"),
    imageAlt: "Trekkers climbing from Imlil to the Toubkal Refuge on the Mount Toubkal route",
    highlights: [
      "Reach the summit of Mount Toubkal (4,167m), North Africa's highest peak",
      "Stunning pre-dawn alpine ascent and sunrise over the Atlas range",
      "Trek past the famous shrine of Sidi Chamharouch in the Ait Mizane valley",
      "Share simple Berber meals at the mountain refuge",
      "Fully supported with local mountain guides, cooks, and mules"
    ],
    inclusions: [
      "Private transfer from/to your hotel or riad in Marrakech",
      "Licensed and experienced English-speaking local mountain guide",
      "All meals during the trek (breakfasts, lunches, dinners)",
      "Mules and muleteers to carry your main luggage (max 15kg)",
      "One night shared accommodation at the Toubkal Refuge (Neltner Hut)",
      "Cook to prepare fresh traditional Moroccan meals",
      "Crampons and sleeping bags if needed during winter seasons"
    ],
    exclusions: [
      "Travel insurance (mandatory)",
      "Personal items, snacks, and soft drinks",
      "Tips for the local guiding team (guides, cooks, muleteers)",
      "Rental of personal trekking gear (boots, poles, warm layers)"
    ],
    pricingTiers: [
      { groupSize: 1, pricePerPerson: 290 },
      { groupSize: 2, pricePerPerson: 180 },
      { groupSize: 3, pricePerPerson: 165 },
      { groupSize: 4, pricePerPerson: 150 },
      { groupSize: 5, pricePerPerson: 140 },
      { groupSize: 6, pricePerPerson: 130 }
    ],
    packingList: [
      "Sturdy, broken-in trekking boots with good ankle support",
      "Thermal base layers (top and bottom)",
      "Warm fleece or insulated down jacket for the summit day",
      "Windproof and waterproof jacket and trousers",
      "Trekking poles (highly recommended for steep scree descents)",
      "Headlamp with spare batteries (for early morning summit push)",
      "Sun protection (sunglasses, high SPF sunscreen, sun hat)",
      "Personal first aid kit, water purification, and reusable water bottles (min 2L)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech – Imlil (1,740m) – Toubkal Refuge (3,207m)",
        description: "Depart early from Marrakech for a scenic 90-minute drive to the mountain village of Imlil. Here you meet the local support team, load your luggage onto the mules, and enjoy a traditional welcome mint tea. Start your trek climbing steadily through walnut groves and juniper forest, alongside the Ait Mizane river. Pass the Berber hamlet of Aroumd (Aremd) and cross the floodplain to the shrine of Sidi Chamharouch (2,350m) for a hot lunch. After lunch, continue climbing the rocky zig-zag path to the Toubkal Refuge, nestled at the foot of the west face. Relax, acclimatize, and enjoy a hearty dinner.",
        walkingTime: "5 - 6 hours",
        distance: "11 km (6.8 miles)",
        elevationChange: "+1,467m",
        meals: "Lunch, Dinner",
        accommodation: "Toubkal Refuge (Shared dorms)"
      },
      {
        day: 2,
        title: "Summit Push (4,167m) – Descend to Imlil – Marrakech",
        description: "Wake before dawn, eat a quick breakfast, and start up the southern scree slopes. The pace stays slow and steady. After 3 to 4 hours, reach the metal tripod on Toubkal summit. On clear days you can see across the Anti-Atlas and toward the desert edge. Descend to the refuge for lunch, then continue down to Imlil for the drive back to Marrakech.",
        walkingTime: "8 - 10 hours",
        distance: "19 km (11.8 miles)",
        elevationChange: "+960m / -2,427m",
        meals: "Breakfast, Lunch",
        accommodation: "None (Return to Marrakech)"
      }
    ]
  },
  {
    slug: "3-day-toubkal-tamsoult",
    title: "3-Day Mount Toubkal Trek via Tamsoult",
    duration: "3 Days",
    subtitle: "A quieter Toubkal route through Azzadene, waterfalls, and high passes.",
    summary: "This route gives Toubkal more space. You cross from Imlil into Azzadene, visit the Ighouliden waterfalls, then climb over Aguelzim Pass before the summit day. It is better for acclimatization and shows a calmer side of the Atlas.",
    difficulty: "Challenging",
    maxElevation: "4,167m (13,671 ft)",
    startLocation: "Imlil (Pick up from Marrakech)",
    endLocation: "Imlil (Drop off in Marrakech)",
    startingPrice: 230,
    imageSrc: cloudinaryImage("c697a8e8-927c-41dc-90fb-32245b41991a_zz9vui"),
    imageAlt: "Trekkers crossing Tizi Mzik toward Tamsoult on the Mount Toubkal trek",
    highlights: [
      "Climb Tizi Mzik Pass (2,489m) for panoramic double-valley views",
      "Visit the Ighouliden waterfalls above Azzadene",
      "Acclimatize gradually by crossing the high Aguelzim Pass (3,560m)",
      "Ascend Mount Toubkal (4,167m) for a glorious sunrise",
      "Circular route with fresh scenery each day, avoiding retraced steps"
    ],
    inclusions: [
      "Private transfer from/to your hotel or riad in Marrakech",
      "Licensed and experienced English-speaking local mountain guide",
      "All meals during the trek (breakfasts, lunches, dinners)",
      "Mules and muleteers to carry your main luggage (max 15kg)",
      "Two nights mountain refuge accommodation (Tamsoult and Toubkal)",
      "Cook to prepare fresh traditional Moroccan meals",
      "Crampons and sleeping bags if needed during winter seasons"
    ],
    exclusions: [
      "Travel insurance (mandatory)",
      "Personal items, snacks, and soft drinks",
      "Tips for the local guiding team (guides, cooks, muleteers)",
      "Rental of personal trekking gear"
    ],
    pricingTiers: [
      { groupSize: 1, pricePerPerson: 390 },
      { groupSize: 2, pricePerPerson: 250 },
      { groupSize: 3, pricePerPerson: 230 },
      { groupSize: 4, pricePerPerson: 210 },
      { groupSize: 5, pricePerPerson: 195 },
      { groupSize: 6, pricePerPerson: 180 }
    ],
    packingList: [
      "Sturdy, broken-in trekking boots with good ankle support",
      "Thermal base layers (top and bottom)",
      "Warm fleece or insulated down jacket for the summit day",
      "Windproof and waterproof jacket and trousers",
      "Trekking poles (highly recommended for steep scree descents)",
      "Headlamp with spare batteries (for early morning summit push)",
      "Sun protection (sunglasses, high SPF sunscreen, sun hat)",
      "Personal first aid kit, water purification, and reusable water bottles (min 2L)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech – Imlil (1,740m) – Tizi Mzik (2,489m) – Tamsoult (2,250m)",
        description: "Drive from Marrakech to Imlil, meet the guide and mule team, then climb toward Tizi Mzik Pass. From the pass you see Imlil on one side and Azzadene on the other. After lunch near the juniper trees, descend past fields and red-clay villages to Tamsoult Refuge. If there is time, walk to Ighouliden waterfalls before dinner.",
        walkingTime: "5 - 6 hours",
        distance: "12 km (7.5 miles)",
        elevationChange: "+749m / -239m",
        meals: "Lunch, Dinner",
        accommodation: "Tamsoult Refuge (Shared dorms)"
      },
      {
        day: 2,
        title: "Tamsoult – Aguelzim Pass (3,560m) – Toubkal Refuge (3,207m)",
        description: "Start early and climb the long zig-zags toward Aguelzim Pass (3,560m). This high crossing helps acclimatization and gives close views of the Toubkal massif. After lunch near the pass, descend toward Toubkal Base Camp. Rest, drink well, and prepare for summit morning.",
        walkingTime: "6 - 7 hours",
        distance: "14 km (8.7 miles)",
        elevationChange: "+1,310m / -353m",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Toubkal Refuge (Shared dorms)"
      },
      {
        day: 3,
        title: "Summit Push (4,167m) – Descend to Imlil – Marrakech",
        description: "Rise early around 4:00 AM for the climb to the summit of Mount Toubkal. The route follows the southern scree path, which is steep and rocky. Keep a slow, rhythmic pace as the air thins. Reach the peak (4,167m) as the sun rises, casting long shadows across the Atlas Mountains and lighting up the valleys below. Enjoy the sense of achievement and take in views that stretch all the way to the Anti-Atlas range. Descend back down to the refuge for a well-deserved hot meal. Continue the descent along the main valley route, passing Sidi Chamharouch, to arrive in Imlil for your drive back to Marrakech.",
        walkingTime: "8 - 10 hours",
        distance: "19 km (11.8 miles)",
        elevationChange: "+960m / -2,427m",
        meals: "Breakfast, Lunch",
        accommodation: "None (Return to Marrakech)"
      }
    ]
  },
  {
    slug: "3-day-mount-toubkal-acclimatization-trek",
    title: "3-Day Mount Toubkal Trek with Acclimatization",
    duration: "3 Days",
    subtitle: "Prepare on Tedli Summit before a guided ascent of North Africa's highest peak.",
    summary: "This three-day Mount Toubkal trek adds a dedicated acclimatization hike from Imlil to Tedli Summit before the refuge and summit stages. The gradual approach gives you more time on the mountain, a night in Imlil, and a better-prepared route to the 4,167m summit.",
    seoTitle: "3-Day Mount Toubkal Acclimatization Trek",
    seoDescription: "Climb Mount Toubkal in three days with a Tedli Summit acclimatization hike, local guide, Marrakech transfers, meals, and two mountain nights.",
    difficulty: "Challenging",
    maxElevation: "4,167m (13,671 ft)",
    startLocation: "Marrakech (Hotel pickup)",
    endLocation: "Marrakech (Hotel drop-off)",
    startingPrice: 230,
    imageSrc: cloudinaryImage("8b842b25-725a-447e-bad7-27c019bc4ec6_cnsukf"),
    imageAlt: "Trekkers approaching Mount Toubkal during a three-day acclimatization trek from Imlil",
    galleryImages: [
      {
        src: cloudinaryImage("f898e7a1-59a3-42e7-b3ad-7329e64de383_edlx7b"),
        alt: "High Atlas trail above Imlil on the Mount Toubkal acclimatization route"
      },
      {
        src: cloudinaryImage("e97e0c56-7ed0-4a32-9946-939232109c6c_ziqcj7"),
        alt: "Mountain scenery near the Toubkal Refuge in Morocco"
      }
    ],
    highlights: [
      "Acclimatize with a guided first-day hike from Imlil to Tedli Summit",
      "Walk through the Aït Mizane Valley and traditional Amazigh villages",
      "Spend one night in Imlil and one night at the Toubkal Refuge",
      "Reach the 4,167m summit of Mount Toubkal, North Africa's highest peak",
      "Travel privately between your Marrakech accommodation and the trailhead"
    ],
    inclusions: [
      "Private transfer from and to your hotel or riad in Marrakech",
      "Licensed and experienced English-speaking local mountain guide",
      "All meals during the trek (breakfasts, lunches, and dinners)",
      "Mules and muleteers to carry your main luggage (maximum 15kg)",
      "One night in an Imlil village guesthouse",
      "One night in shared accommodation at the Toubkal Refuge",
      "Cook to prepare fresh traditional Moroccan meals",
      "Crampons and sleeping bags if required during winter"
    ],
    exclusions: [
      "Travel insurance covering high-altitude trekking",
      "Personal items, snacks, and soft drinks",
      "Tips for the guide, cook, and muleteer team",
      "Rental of personal trekking clothing, boots, and poles"
    ],
    pricingTiers: [
      { groupSize: 1, pricePerPerson: 390 },
      { groupSize: 2, pricePerPerson: 250 },
      { groupSize: 3, pricePerPerson: 230 },
      { groupSize: 4, pricePerPerson: 210 },
      { groupSize: 5, pricePerPerson: 195 },
      { groupSize: 6, pricePerPerson: 180 }
    ],
    packingList: [
      "Sturdy, broken-in trekking boots with ankle support",
      "Thermal base layers and a warm insulated jacket",
      "Windproof and waterproof jacket and trousers",
      "Trekking poles for the long summit descent",
      "Headlamp with spare batteries for the early summit start",
      "Sun hat, sunglasses, and high-SPF sunscreen",
      "Personal first-aid kit and reusable water bottles (minimum 2L)",
      "Warm hat and gloves, plus seasonal winter equipment when advised"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech – Imlil – Tedli Summit",
        description: "Early morning pickup from your hotel in Marrakech and transfer to Imlil, the gateway to the High Atlas Mountains. Begin your guided acclimatization trek towards Tedli Summit, following beautiful mountain trails past traditional Amazigh villages and viewpoints over the surrounding valleys and peaks. After reaching the summit, descend to Imlil for dinner and an overnight stay.",
        meals: "Lunch, Dinner",
        accommodation: "Village guesthouse in Imlil"
      },
      {
        day: 2,
        title: "Imlil – Aït Mizane Valley – Toubkal Refuge",
        description: "After breakfast, start the trek from Imlil towards the Toubkal Refuge. Follow scenic mountain trails through the Aït Mizane Valley, passing traditional Amazigh villages and enjoying impressive views of the High Atlas. Continue uphill to the Toubkal Refuge, where you will have dinner and spend the night before the summit ascent.",
        walkingTime: "Approximately 5 - 6 hours",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Toubkal Refuge (shared dormitory)"
      },
      {
        day: 3,
        title: "Toubkal Refuge – Mount Toubkal Summit – Imlil – Marrakech",
        description: "Wake early and begin the ascent of Mount Toubkal (4,167m), the highest peak in North Africa. Reach the summit and admire panoramic views across the Atlas Mountains. Descend to the refuge and continue through the Aït Mizane Valley to Imlil, where your vehicle will be waiting for the transfer to Marrakech. The trek ends on arrival at your Marrakech accommodation.",
        walkingTime: "Approximately 8 - 10 hours",
        meals: "Breakfast, Lunch",
        accommodation: "None (return to Marrakech)"
      }
    ]
  },
  {
    slug: "1-day-imlil-valley-tour",
    title: "1-Day Imlil Valley & Berber Village Hike",
    duration: "1 Day",
    subtitle: "An easy day in Imlil with villages, walnut trees, and mountain views.",
    summary: "This is a good choice if you want the Atlas without a hard summit climb. We walk through Imlil valley, visit nearby villages and waterfalls, and stop for a local lunch. The pace can be easy for families or first-time walkers.",
    difficulty: "Easy",
    maxElevation: "1,940m (6,365 ft)",
    startLocation: "Marrakech",
    endLocation: "Marrakech",
    startingPrice: 50,
    imageSrc: cloudinaryImage("701FA6D7-809B-402D-918B-8CD10151C39A_i04spe"),
    imageAlt: "Hikers walking from Imlil to Aroumd village on the Imlil Valley day hike",
    highlights: [
      "Escape the heat and noise of Marrakech for fresh mountain air",
      "Stunning scenery of snow-capped peaks and green terraced valleys",
      "Walk through ancient Berber villages like Aroumd and Ait Souka",
      "Visit the refreshing waterfalls of the Imlil Valley",
      "Enjoy a traditional home-cooked Berber lunch in a local family house"
    ],
    inclusions: [
      "Pick up and drop off at your accommodation in Marrakech",
      "Private air-conditioned vehicle with professional English-speaking driver",
      "Local, certified, English-speaking mountain guide",
      "Delicious traditional Berber lunch (tagine, salad, fresh fruits, mint tea)",
      "Short mule ride if requested (ideal for children or elderly travelers)"
    ],
    exclusions: [
      "Travel insurance",
      "Personal expenses and drinks",
      "Tips for the driver and guide"
    ],
    pricingTiers: [
      { groupSize: 1, pricePerPerson: 90 },
      { groupSize: 2, pricePerPerson: 55 },
      { groupSize: 3, pricePerPerson: 50 },
      { groupSize: 4, pricePerPerson: 45 },
      { groupSize: 5, pricePerPerson: 40 },
      { groupSize: 6, pricePerPerson: 35 }
    ],
    packingList: [
      "Comfortable trainers or light walking shoes with good grip",
      "Light jacket or windbreaker (mountain temperatures are cooler than Marrakech)",
      "Sun protection (sunglasses, sun cream, sun hat)",
      "Camera or smartphone for beautiful photos",
      "Small backpack to carry water and personal items",
      "Comfortable clothing suitable for walking and respectful of local culture"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech – Imlil Valley – Berber Lunch – Return",
        description: "Your driver collects you from your Marrakech accommodation at 9:00 AM. Leave the city behind as you drive south through the Haouz plains, stopping if you wish at a local cooperative or the bustling market town of Asni (Saturday only). Arriving in the mountain hub of Imlil (1,740m), enjoy a welcoming cup of mint tea and meet your local guide. Set off on a customizable 3-to-4 hour walk along valley trails. Trek to the traditional village of Aroumd, built on a giant moraine spur with panoramic views of Mount Toubkal. Visit local waterfalls and learn about the ancient terraced irrigation systems. Head to a traditional Berber home in Ait Souka for a delicious, fresh lunch of local tagine and Moroccan mint tea. Walk back down to Imlil and meet your vehicle for the return drive, arriving back in Marrakech by 5:30 PM.",
        walkingTime: "3 - 4 hours",
        distance: "6 - 8 km (4 - 5 miles)",
        elevationChange: "+200m / -200m",
        meals: "Lunch",
        accommodation: "None (Return to Marrakech)"
      }
    ]
  },
  {
    slug: "5-day-high-atlas-traverse",
    title: "5-Day High Atlas Traverse",
    duration: "5 Days",
    subtitle: "Imlil – Tachdirt – Oukaïmeden – Matat – Tizi Oussem – Imlil",
    summary: "Discover the beauty of Morocco's High Atlas Mountains on a five-day trek through traditional Amazigh villages, spectacular mountain passes, green valleys, and remote landscapes. Walking along ancient mule tracks, you will experience local mountain life, enjoy panoramic views, and explore some of the most beautiful areas of the High Atlas.",
    seoTitle: "5-Day High Atlas Traverse from Imlil",
    seoDescription: "Trek for five days from Imlil through Tachdirt, Oukaïmeden, Matat, and Tizi Oussem, with a local guide, mountain guesthouses, meals, and mule support.",
    difficulty: "Challenging",
    maxElevation: "Approx. 2,960m (Tizi n'Addi)",
    startLocation: "Imlil",
    endLocation: "Imlil",
    startingPrice: 320,
    imageSrc: cloudinaryImage("40aeb74c-c7d7-4e3a-9bb3-06a0a300b2e7_dr6tv2"),
    imageAlt: "High Atlas mountain scenery on the five-day traverse from Imlil",
    galleryImages: [
      {
        src: cloudinaryImage("2063ceab-3ec6-4e9a-9f79-010b986f098a_ek7q1q"),
        alt: "Mountain trail between traditional villages on the High Atlas traverse"
      },
      {
        src: cloudinaryImage("3f5a7513-85f8-4259-a216-86ddd5b403af_ag5hsw"),
        alt: "Green valley and mountain landscape along the five-day High Atlas route"
      },
      {
        src: cloudinaryImage("c2531c7e-6eef-49c5-aa5a-2bb96893e3f3_zy4i3y"),
        alt: "Remote High Atlas scenery between Oukaïmeden and Tizi Oussem"
      }
    ],
    highlights: [
      "Cross scenic mountain passes between the Imlil, Imnane, and Azzaden valleys",
      "Walk ancient mule tracks through traditional Amazigh villages and terraced fields",
      "Explore the high plateau and summer pastures around Oukaïmeden",
      "Experience remote mountain life around Matat and Tizi Oussem",
      "Finish with panoramic views from Tizi Mzik before descending to Imlil"
    ],
    inclusions: [
      "Experienced local mountain guide",
      "Four nights of accommodation in mountain guesthouses",
      "Meals during the trek",
      "Mule support for luggage, subject to the agreed arrangements",
      "Trekking organisation and route guidance"
    ],
    exclusions: [
      "Travel insurance covering mountain trekking",
      "Optional private transfer between Imlil and Marrakech unless arranged in advance",
      "Personal drinks, snacks, and purchases",
      "Tips for the guide, muleteer, and guesthouse teams",
      "Personal trekking clothing and equipment"
    ],
    pricingTiers: [
      { groupSize: 1, pricePerPerson: 620 },
      { groupSize: 2, pricePerPerson: 420 },
      { groupSize: 3, pricePerPerson: 370 },
      { groupSize: 4, pricePerPerson: 340 },
      { groupSize: 5, pricePerPerson: 320 },
      { groupSize: 6, pricePerPerson: 300 }
    ],
    packingList: [
      "Comfortable hiking boots with good grip",
      "Daypack and reusable water bottles",
      "Warm layers, including a fleece or down jacket",
      "Waterproof jacket and trousers",
      "Sun hat, sunglasses, and sunscreen",
      "Trekking poles",
      "Headlamp and personal essentials"
    ],
    itinerary: [
      {
        day: 1,
        title: "Imlil – Tizi n'Tamatert – Tachdirt",
        description: "Meet your local mountain guide in Imlil and begin your trek through traditional Amazigh villages and terraced fields. Climb gradually towards Tizi n'Tamatert, a scenic mountain pass with beautiful views over the Imlil and Imnane valleys. After enjoying the mountain scenery, descend through Ouanesekra towards Tachdirt, one of the highest traditional villages in the region. Arrive at your guesthouse for a traditional Moroccan dinner in the peaceful mountain surroundings.",
        walkingTime: "4 - 5 hours",
        distance: "Approximately 9 - 11 km",
        elevationChange: "Highest point: approximately 2,279m",
        meals: "Lunch, Dinner",
        accommodation: "Guesthouse in Tachdirt"
      },
      {
        day: 2,
        title: "Tachdirt – Tizi n'Addi – Oukaïmeden",
        description: "After breakfast, leave Tachdirt and continue across the High Atlas towards Oukaïmeden. Follow mountain trails through rugged terrain, remote settlements, and high-altitude pastures. Depending on the route and weather conditions, cross the Tizi n'Addi area and enjoy magnificent views of the surrounding peaks and valleys. Continue towards the Oukaïmeden plateau, famous for its dramatic mountain scenery and traditional summer pastures.",
        walkingTime: "Confirmed according to the selected route",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Guesthouse or lodge in Oukaïmeden"
      },
      {
        day: 3,
        title: "Oukaïmeden – Matat",
        description: "After breakfast, set off from Oukaïmeden and continue through the varied landscapes of the High Atlas. Follow established mountain paths towards the Matat area, passing traditional villages, cultivated terraces, and beautiful mountain scenery. Enjoy a picnic lunch along the way and take time to appreciate the quiet atmosphere of rural mountain life before settling into your accommodation in the afternoon.",
        walkingTime: "Confirmed after verifying the route",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Local guesthouse in the Matat area, subject to availability"
      },
      {
        day: 4,
        title: "Matat – Tizi Oussem",
        description: "After breakfast, continue towards the beautiful Azzaden Valley, known for its traditional Amazigh villages, terraced fields, walnut trees, and dramatic mountain scenery. Walk along mountain paths connecting remote settlements and enjoy views of the surrounding High Atlas peaks. Take a break for lunch before continuing towards Tizi Oussem, a picturesque village surrounded by cultivated hillsides.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Guesthouse in Tizi Oussem"
      },
      {
        day: 5,
        title: "Tizi Oussem – Tizi Mzik – Imlil",
        description: "After breakfast, leave Tizi Oussem and follow the mountain trail towards Tizi Mzik where the selected route permits. Enjoy panoramic views across the Azzaden Valley and the surrounding High Atlas Mountains. Descend through the mountain paths towards Aroumd and continue to Imlil, where your five-day trek ends. If arranged in advance, a private transfer can take you from Imlil back to Marrakech.",
        meals: "Breakfast, Lunch",
        accommodation: "None (trek ends in Imlil; optional transfer to Marrakech)"
      }
    ]
  },
  {
    slug: "5-day-mgoun-trek",
    title: "5-Day Jebel M'goun Wilderness Trek",
    duration: "5 Days",
    subtitle: "A remote route to Morocco's second-highest peak.",
    summary: "M'goun is quieter than Toubkal and feels wilder. The trek starts in Ait Bougmez, crosses high grazing plateaus, and follows long ridges with open views toward the south. Expect fewer people, bigger days, and nights close to the land.",
    difficulty: "Strenuous",
    maxElevation: "4,071m (13,356 ft)",
    startLocation: "Aït Bougmez (Pick up from Marrakech)",
    endLocation: "Aït Bougmez (Drop off in Marrakech)",
    startingPrice: 380,
    imageSrc: cloudinaryImage("20260612_085923_mpuawn"),
    imageAlt: "Trekkers climbing from Tarkedit Plateau toward the Jebel M'goun summit",
    highlights: [
      "Summit Jebel M'goun (4,071m), a remote limestone peak with a knife-edge ridge",
      "Explore the beautiful Aït Bougmez Valley, 'The Happy Valley' of Morocco",
      "Camp on the high Tarkedit Plateau (2,900m) alongside nomadic shepherds",
      "Witness wild, lunar-like limestone gorges and deep canyons",
      "Escape the crowds on a quiet, remote trail with high-altitude wilderness"
    ],
    inclusions: [
      "Private transfers between Marrakech and the Aït Bougmez Valley",
      "Licensed and experienced English-speaking local mountain guide",
      "All meals during the trek, prepared fresh by our camp cook",
      "Mules and muleteers for carrying all luggage and camp gear",
      "High-quality dual-layer tents, foam mattresses, and dining tent",
      "One night guesthouse accommodation in Aït Bougmez and three nights camping"
    ],
    exclusions: [
      "Travel insurance (mandatory)",
      "Personal gear (sleeping bags, hiking poles, boots)",
      "Snacks, soft drinks, and mineral water",
      "Tips for the guiding team"
    ],
    pricingTiers: [
      { groupSize: 1, pricePerPerson: 650 },
      { groupSize: 2, pricePerPerson: 440 },
      { groupSize: 3, pricePerPerson: 390 },
      { groupSize: 4, pricePerPerson: 360 },
      { groupSize: 5, pricePerPerson: 340 },
      { groupSize: 6, pricePerPerson: 320 }
    ],
    packingList: [
      "Warm sleeping bag rated to at least -5°C (23°F) for high-altitude camping",
      "Sturdy mountain trekking boots with stiff soles",
      "Windproof, waterproof outer shell jacket and trousers",
      "Thermal base layers and warm fleece layers",
      "Trekking poles (essential for the long M'goun ridge hike)",
      "Sun protection (sunglasses, sun cream, sun hat)",
      "Headlamp with spare batteries",
      "Water purification tablets/filter and bottles (min 3L capacity)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech – Azilal – Aït Bougmez (1,800m) – Ikkis N'Arous (2,300m)",
        description: "Leave Marrakech for the long drive through Azilal to Ait Bougmez. Meet the guide, cook, and muleteers, load the gear, then walk gently up the Arous valley. Sleep in a gite or camp near Ikkis N'Arous, below sandstone cliffs.",
        walkingTime: "2 - 3 hours",
        distance: "6 km (3.7 miles)",
        elevationChange: "+500m",
        meals: "Lunch, Dinner",
        accommodation: "Camping or Local Gîte"
      },
      {
        day: 2,
        title: "Ikkis N'Arous – Tizi n'Tarkedit (3,400m) – Tarkedit Plateau (2,900m)",
        description: "Start the day climbing a steep zig-zag path leading to the Tizi n'Tarkedit pass (3,400m). Reaching the pass, take in the vast views of the M'goun ridge and the southern valleys. Descend onto the Tarkedit Plateau, a high alpine meadow situated at 2,900m. Here, nomads graze their sheep and goats in summer. Set up camp, rest, and acclimatize for the big climb tomorrow.",
        walkingTime: "5 - 6 hours",
        distance: "11 km (6.8 miles)",
        elevationChange: "+1,100m / -500m",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Camping (Tarkedit Plateau)"
      },
      {
        day: 3,
        title: "Tarkedit – Jebel M'goun Summit (4,071m) – Oulilimt Valley (2,600m)",
        description: "Start around 4:00 AM and climb the limestone scree to M'goun ridge. Follow the ridge for about 2 hours, with the Atlas to the north and dry southern country opening below. Reach the 4,071m summit, then descend into Oulilimt Valley to camp near the river.",
        walkingTime: "8 - 9 hours",
        distance: "16 km (9.9 miles)",
        elevationChange: "+1,171m / -1,471m",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Camping (Oulilimt Valley)"
      },
      {
        day: 4,
        title: "Oulilimt Valley – Tizi n'Aït Imi (2,905m) – Aït Bougmez Valley (1,800m)",
        description: "Follow the river downstream, passing striking rock formations and small shepherd dwellings. Start a steady climb to cross the Tizi n'Aït Imi pass (2,905m), which offers a stunning gateway view back down into the lush green Aït Bougmez Valley. Descend a long, steep path through juniper forests to reach the valley floor. Spend the night in a traditional Berber guesthouse (gîte) in the village of Tabant, enjoying a hot shower and home-cooked feast.",
        walkingTime: "6 - 7 hours",
        distance: "15 km (9.3 miles)",
        elevationChange: "+305m / -1,105m",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Local Guesthouse (Gîte) in Tabant"
      },
      {
        day: 5,
        title: "Aït Bougmez Valley – Marrakech",
        description: "After a relaxing breakfast, take a short walk through the village fields to see the local architecture and lifestyle. Say goodbye to your local support team, board your private vehicle, and transfer back to Marrakech. Stop for lunch along the way, arriving back at your Marrakech hotel or riad in the late afternoon.",
        walkingTime: "1 hour",
        distance: "2 km (1.2 miles)",
        elevationChange: "Minimal",
        meals: "Breakfast",
        accommodation: "None (Return to Marrakech)"
      }
    ]
  },
  {
    slug: "6-day-toubkal-circuit",
    title: "6-Day Mount Toubkal Grand Circuit",
    duration: "6 Days",
    subtitle: "A full Toubkal loop through passes, villages, and Lake Ifni.",
    summary: "This is the long way around Toubkal. You cross high passes, sleep in villages and camps, visit Lake Ifni, then approach the summit from the south. It suits walkers who want more than a quick up-and-down climb.",
    difficulty: "Strenuous",
    maxElevation: "4,167m (13,671 ft)",
    startLocation: "Imlil (Pick up from Marrakech)",
    endLocation: "Imlil (Drop off in Marrakech)",
    startingPrice: 420,
    imageSrc: cloudinaryImage("IMG_2060_rz7xjv"),
    imageAlt: "Trekkers hiking from Amsouzert to Lake Ifni on the Mount Toubkal circuit",
    highlights: [
      "Make a full circuit around Mount Toubkal",
      "Climb high mountain passes including Tizi Likemt (3,555m) and Tizi n'Ourai (3,120m)",
      "Explore isolated, traditional Berber villages in the valleys of Imnan and Ourai",
      "Camp on the shores of Lake Ifni (2,295m), a turquoise alpine lake",
      "Ascend Mount Toubkal (4,167m) and complete your journey with a summit sunrise"
    ],
    inclusions: [
      "Private transfer from/to your hotel or riad in Marrakech",
      "Licensed and experienced English-speaking local mountain guide",
      "All meals during the trek, prepared fresh by our camp cook",
      "Mules and muleteers for carrying all luggage and camping gear",
      "Three nights camping (tents and mattresses provided) and two nights in guesthouses/refuge",
      "Cook to prepare fresh traditional Moroccan meals"
    ],
    exclusions: [
      "Travel insurance (mandatory)",
      "Personal gear (sleeping bags, hiking poles, boots)",
      "Snacks, soft drinks, and tips for the guiding team"
    ],
    pricingTiers: [
      { groupSize: 1, pricePerPerson: 750 },
      { groupSize: 2, pricePerPerson: 490 },
      { groupSize: 3, pricePerPerson: 450 },
      { groupSize: 4, pricePerPerson: 420 },
      { groupSize: 5, pricePerPerson: 395 },
      { groupSize: 6, pricePerPerson: 370 }
    ],
    packingList: [
      "Warm sleeping bag rated to at least -5°C (23°F)",
      "Sturdy, well-supported mountain hiking boots",
      "Windproof, waterproof shell jacket and trousers",
      "Layered clothing including thermals and warm fleece/down",
      "Trekking poles (essential for high passes and scree paths)",
      "Headlamp with spare batteries",
      "Sun protection (sunglasses, sun cream, sun hat)",
      "Water purification tablets/filter and bottles (min 3L capacity)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech – Imlil – Tizi n'Tamatert (2,279m) – Tacheddirt (2,400m)",
        description: "Transfer from Marrakech to Imlil. Load the mules and begin the trek with a steady climb to the Tizi n'Tamatert pass (2,279m). Enjoy views of the Ait Mizane and Imnan valleys. Follow the trail along the valley slopes to the highest village in the Atlas, Tacheddirt (2,400m). Stay in a local gîte or camp.",
        walkingTime: "4 - 5 hours",
        distance: "8 km (5.0 miles)",
        elevationChange: "+660m",
        meals: "Lunch, Dinner",
        accommodation: "Local Gîte or Camping in Tacheddirt"
      },
      {
        day: 2,
        title: "Tacheddirt – Tizi Likemt (3,555m) – Azib Likemt (2,600m)",
        description: "Begin with a long, steep climb to Tizi Likemt pass (3,555m). The trail is demanding and gives open views of the Toubkal massif. Descend on scree to the summer pastures of Azib Likemt, where shepherds use stone shelters in season. Set up camp.",
        walkingTime: "6 - 7 hours",
        distance: "11 km (6.8 miles)",
        elevationChange: "+1,155m / -955m",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Camping at Azib Likemt"
      },
      {
        day: 3,
        title: "Azib Likemt – Tizi n'Ourai (3,120m) – Amsouzert (1,740m)",
        description: "Trek through a high-altitude landscape before climbing to the Tizi n'Ourai pass (3,120m). Standing on the pass, you are treated to views of the southern slope of Mount Toubkal and the Ifni Dome. Descend into the beautiful Ourai valley to reach the traditional village of Amsouzert (1,740m) for guesthouse lodging.",
        walkingTime: "6 - 7 hours",
        distance: "14 km (8.7 miles)",
        elevationChange: "+520m / -1,380m",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Local Guesthouse (Gîte) in Amsouzert"
      },
      {
        day: 4,
        title: "Amsouzert – Lake Ifni (2,295m)",
        description: "A shorter, relaxing day. Hike through walnut groves and flat riverbeds, ascending slowly past Berber hamlets. Climb up a wall of volcanic rock to reveal the hidden, turquoise waters of Lake Ifni (2,295m), the only natural lake in the massif. Arrive in time for lunch. Spend the afternoon swimming, exploring the shoreline, and resting by the water. Camp by the lake.",
        walkingTime: "4 hours",
        distance: "8 km (5.0 miles)",
        elevationChange: "+555m",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Camping near Lake Ifni"
      },
      {
        day: 5,
        title: "Lake Ifni – Tizi n'Ouanoums (3,664m) – Toubkal Refuge (3,207m)",
        description: "One of the most scenic and difficult days. Climb a steep, rocky gorge leading to the narrow Tizi n'Ouanoums pass (3,664m), squeezed between high cliffs of Toubkal. The pass offers views back to Lake Ifni and ahead to the base camp valley. Descend a rocky trail down the west side to the Toubkal Refuge (3,207m) and set up camp.",
        walkingTime: "6 - 7 hours",
        distance: "10 km (6.2 miles)",
        elevationChange: "+1,369m / -457m",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Toubkal Refuge (Tents or Dorms)"
      },
      {
        day: 6,
        title: "Summit Push (4,167m) – Descend to Imlil – Marrakech",
        description: "Wake up at 4:00 AM for your final summit bid. Scramble up the steep southern route to the peak of Mount Toubkal (4,167m) as the sunrise lights up Morocco. Feel the triumph of completing the circuit. Descend to the refuge for hot tea, then follow the main descent route via Sidi Chamharouch back to Imlil. Board your vehicle for the drive back to Marrakech.",
        walkingTime: "9 - 11 hours",
        distance: "21 km (13.0 miles)",
        elevationChange: "+960m / -2,427m",
        meals: "Breakfast, Lunch",
        accommodation: "None (Return to Marrakech)"
      }
    ]
  },
  {
    slug: "2-day-azzaden-valley-berber-villages",
    title: "2-Day Azzaden Valley & Berber Villages Trek",
    duration: "2 Days",
    subtitle: "A scenic village-to-village circuit over Tizi Mzik into the quieter Azzaden Valley.",
    summary: "This two-day High Atlas trek trades the busy summit trail for red-earth villages, juniper slopes, walnut terraces, and wide views across the Azzaden Valley. Cross Tizi Mzik from Imlil, sleep in Tizi Oussem, and return by a different valley route. It is a strong cultural trek without extreme altitude.",
    difficulty: "Moderate",
    maxElevation: "2,489m (8,166 ft)",
    startLocation: "Imlil (Pick up from Marrakech)",
    endLocation: "Aguersioual (Drop off in Marrakech)",
    startingPrice: 135,
    imageSrc: cloudinaryImage("c697a8e8-927c-41dc-90fb-32245b41991a_zz9vui"),
    imageAlt: "Hikers crossing Tizi Mzik toward the Azzaden Valley and Berber villages",
    highlights: [
      "Cross Tizi Mzik (2,489m) between the Imlil and Azzaden valleys",
      "Stay overnight in the mountain village of Tizi Oussem",
      "Walk through walnut groves, terraced fields, and juniper woodland",
      "See the Toubkal massif from a quieter western approach",
      "Complete a varied circuit rather than retracing the same trail"
    ],
    inclusions: [
      "Private transfer from and to your Marrakech accommodation",
      "Licensed English-speaking local mountain guide",
      "One night in a simple village guesthouse in Tizi Oussem",
      "Lunch and dinner on day one, breakfast and lunch on day two",
      "Cook and mule support for main luggage where trail conditions allow",
      "Tea and drinking-water guidance during the trek"
    ],
    exclusions: [
      "Travel insurance covering mountain walking",
      "Personal snacks, bottled drinks, and souvenirs",
      "Tips for the guide, cook, and muleteer team",
      "Personal trekking clothing, boots, and poles"
    ],
    pricingTiers: [
      { groupSize: 1, pricePerPerson: 250 },
      { groupSize: 2, pricePerPerson: 165 },
      { groupSize: 3, pricePerPerson: 150 },
      { groupSize: 4, pricePerPerson: 140 },
      { groupSize: 5, pricePerPerson: 130 },
      { groupSize: 6, pricePerPerson: 120 }
    ],
    packingList: [
      "Comfortable hiking boots with reliable grip",
      "Small daypack and reusable water bottles (at least 2L)",
      "Light waterproof jacket and an insulating evening layer",
      "Sun hat, sunglasses, and high-SPF sunscreen",
      "Trekking poles for the pass descent",
      "Personal toiletries and a lightweight travel towel",
      "Cash for village purchases and guide-team tips",
      "Seasonal layers; winter departures may need warmer equipment"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech – Imlil (1,740m) – Tizi Mzik (2,489m) – Tizi Oussem (1,850m)",
        description: "Leave Marrakech in the morning and meet the mountain team in Imlil. The trail climbs through Mzik village and shaded juniper slopes to Tizi Mzik, the broad pass separating the Ait Mizane and Azzaden valleys. Pause for lunch and views toward the Toubkal massif, then descend into a quieter landscape of terraces and scattered hamlets. Continue to Tizi Oussem for mint tea, dinner, and a night in a village guesthouse.",
        walkingTime: "5 - 6 hours",
        distance: "11 km (6.8 miles)",
        elevationChange: "+749m / -639m",
        meals: "Lunch, Dinner",
        accommodation: "Village guesthouse in Tizi Oussem"
      },
      {
        day: 2,
        title: "Tizi Oussem – Id Aissa – Tizi Oudite (2,219m) – Aguersioual – Marrakech",
        description: "After breakfast, follow the Azzaden Valley past cultivated slopes and the village of Id Aissa. Climb steadily to Tizi Oudite for a final panorama across the western High Atlas. The path then drops through juniper woodland toward Matate and the road near Aguersioual. Meet the vehicle after lunch for the return to Marrakech, normally arriving in the late afternoon.",
        walkingTime: "5 - 6 hours",
        distance: "12 km (7.5 miles)",
        elevationChange: "+369m / -829m",
        meals: "Breakfast, Lunch",
        accommodation: "None (Return to Marrakech)"
      }
    ]
  },
  {
    slug: "2-day-imlil-imenane-valleys-trek",
    title: "2-Day Imlil & Imenane Valleys Trek",
    duration: "2 Days",
    subtitle: "Cross Tizi n'Tamatert and walk through the high villages of the Imenane Valley.",
    summary: "A rewarding two-day traverse from Imlil into the Imenane Valley, designed for hikers who want mountain scenery and Amazigh village life without a 4,000m summit. The route crosses Tizi n'Tamatert, stays in Tacheddirt, and follows the cultivated valley downstream through traditional settlements.",
    difficulty: "Moderate",
    maxElevation: "2,400m (7,874 ft)",
    startLocation: "Imlil (Pick up from Marrakech)",
    endLocation: "Asni (Drop off in Marrakech)",
    startingPrice: 130,
    imageSrc: cloudinaryImage("701FA6D7-809B-402D-918B-8CD10151C39A_i04spe"),
    imageAlt: "Hikers overlooking villages and terraces in the Imenane Valley near Imlil",
    highlights: [
      "Cross panoramic Tizi n'Tamatert between two High Atlas valleys",
      "Spend a night in Tacheddirt, one of Morocco's highest villages",
      "Follow village paths through Ouaneskra, Tamguist, and Ikiss",
      "Experience cultivated terraces, walnut groves, and local guesthouse hospitality",
      "Enjoy a lower-altitude alternative to a Mount Toubkal climb"
    ],
    inclusions: [
      "Private Marrakech transfers at the beginning and end of the trek",
      "Licensed English-speaking mountain guide from the Imlil area",
      "One night in a simple Tacheddirt village guesthouse",
      "All trek meals from lunch on day one through lunch on day two",
      "Cook and mule support for luggage where required",
      "Route planning adapted to weather and group pace"
    ],
    exclusions: [
      "Travel insurance covering hiking activities",
      "Personal drinks, snacks, and purchases",
      "Tips for the local support team",
      "Personal clothing, footwear, and trekking equipment"
    ],
    pricingTiers: [
      { groupSize: 1, pricePerPerson: 240 },
      { groupSize: 2, pricePerPerson: 160 },
      { groupSize: 3, pricePerPerson: 145 },
      { groupSize: 4, pricePerPerson: 135 },
      { groupSize: 5, pricePerPerson: 125 },
      { groupSize: 6, pricePerPerson: 115 }
    ],
    packingList: [
      "Broken-in hiking shoes or boots with good grip",
      "Daypack and two litres of reusable water capacity",
      "Waterproof shell and warm layer for the high village evening",
      "Sun hat, sunglasses, and sunscreen",
      "Trekking poles for uneven village paths",
      "Personal toiletries and travel towel",
      "Headlamp for the guesthouse",
      "Warmer layers for spring, autumn, and winter departures"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech – Imlil (1,740m) – Tizi n'Tamatert (2,279m) – Tacheddirt (2,300m)",
        description: "Drive from Marrakech to Imlil and meet the guide and support team. Walk through Tamatert village, then climb the zig-zag trail to Tizi n'Tamatert. The pass opens views back across Imlil and forward along the long Imenane Valley. After a picnic lunch, traverse the upper slopes and descend gently to Ouaneskra and Tacheddirt. Settle into a local guesthouse and explore the village before dinner.",
        walkingTime: "4 - 5 hours",
        distance: "9 km (5.6 miles)",
        elevationChange: "+660m / -100m",
        meals: "Lunch, Dinner",
        accommodation: "Village guesthouse in Tacheddirt"
      },
      {
        day: 2,
        title: "Tacheddirt – Ouaneskra – Tamguist – Ikiss – Asni – Marrakech",
        description: "Descend gradually through the Imenane Valley, using old village paths above the river and passing stone houses, irrigated terraces, and seasonal orchards. Walk through Ouaneskra, Tamguist, and Ikiss, stopping for tea or lunch according to the group's pace. Continue to the lower valley and meet the vehicle near Asni for the afternoon drive back to Marrakech.",
        walkingTime: "5 - 6 hours",
        distance: "13 km (8.1 miles)",
        elevationChange: "+120m / -1,150m",
        meals: "Breakfast, Lunch",
        accommodation: "None (Return to Marrakech)"
      }
    ]
  },
  {
    slug: "3-day-family-imlil-azzaden-ouirgane-trek",
    title: "3-Day Family Trek: Imlil, Azzaden Valley & Ouirgane",
    duration: "3 Days",
    subtitle: "A family-friendly High Atlas journey through Imlil, Tizi n'Mzik, the Azzaden Valley, and Ouirgane.",
    summary: "Designed for families travelling with children, this three-day High Atlas experience begins with a gentle afternoon in Imlil before crossing Tizi n'Mzik into the beautiful Azzaden Valley. Comfortable village accommodation, mule support, and an adaptable pace make it an approachable introduction to mountain trekking.",
    seoTitle: "3-Day Family Atlas Trek: Imlil to Ouirgane",
    seoDescription: "A three-day family trek from Imlil through Tizi n'Mzik and the Azzaden Valley to Ouirgane, with a guide, mule support, meals, and gîte stays.",
    difficulty: "Moderate",
    maxElevation: "2,489m (8,166 ft)",
    startLocation: "Marrakech",
    endLocation: "Ouirgane",
    startingPrice: 190,
    imageSrc: cloudinaryImage("af5d3b3f-71bb-4dfc-9ce6-8ce040fb121b_gnhfwe"),
    imageAlt: "A family walking through the Azzaden Valley between Imlil and Ouirgane",
    galleryImages: [
      {
        src: cloudinaryImage("8c3a4779-cbae-49f6-a4a3-9e3e97b2b493_bons2v"),
        alt: "Family trekking scenery between Imlil and the Azzaden Valley"
      },
      {
        src: cloudinaryImage("a106e5bc-c06f-438e-bb1c-90d295cf7141_taoetn"),
        alt: "High Atlas village landscape on the family trek to Ouirgane"
      },
      {
        src: cloudinaryImage("524b0fa9-f284-4ad6-a5d3-592a31c52eba_di3i5q"),
        alt: "Mountain trail through the Azzaden Valley"
      }
    ],
    highlights: [
      "Enjoy an easy first afternoon exploring Imlil and its surrounding trails",
      "Cross Tizi n'Mzik Pass (2,489m) for panoramic High Atlas views",
      "Descend through juniper forest into the spectacular Azzaden Valley",
      "Walk between traditional villages, terraced fields, and peaceful mountain scenery",
      "Follow a family-friendly pace adapted to children"
    ],
    inclusions: [
      "English-speaking mountain guide",
      "Mule for carrying the main luggage",
      "One night in Imlil",
      "One night in the Azzaden Valley",
      "Comfortable accommodation, with private bathrooms where available",
      "Full board during the trekking days",
      "All meals mentioned in the itinerary",
      "Family-friendly pace adapted to the children"
    ],
    exclusions: [
      "Travel insurance covering mountain walking",
      "Personal drinks, snacks, and purchases",
      "Tips for the guide and muleteer team",
      "Personal trekking clothing, footwear, and equipment"
    ],
    pricingTiers: [
      { groupSize: 1, pricePerPerson: 400 },
      { groupSize: 2, pricePerPerson: 250 },
      { groupSize: 3, pricePerPerson: 250 },
      { groupSize: 4, pricePerPerson: 190 },
      { groupSize: 5, pricePerPerson: 190 },
      { groupSize: 6, pricePerPerson: 190 }
    ],
    packingList: [
      "Comfortable hiking boots or shoes with reliable grip",
      "Small daypack and reusable water bottles",
      "Light waterproof jacket and a warm evening layer",
      "Sun hat, sunglasses, and high-SPF sunscreen",
      "Trekking poles for the pass descent",
      "Personal toiletries and a lightweight travel towel",
      "Comfortable layers suitable for children",
      "Warmer clothing for spring, autumn, and winter departures"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech – Imlil – Imlil Village",
        description: "Arrive in Imlil, the gateway to the High Atlas Mountains. After settling into your comfortable accommodation, enjoy a relaxed afternoon exploring the village and its surrounding trails. This first day is designed as an easy introduction to the mountains, particularly suitable for families travelling with children.",
        meals: "Dinner; breakfast the following morning",
        accommodation: "Comfortable gîte in Imlil"
      },
      {
        day: 2,
        title: "Imlil – Tizi n'Mzik – Azzaden Valley – Tizi Oussem",
        description: "After breakfast, meet your English-speaking guide and begin your trek from Imlil. The trail climbs gradually towards Tizi n'Mzik Pass (2,489m), with beautiful panoramic views over the High Atlas. From the pass, descend through juniper forests into the spectacular Azzaden Valley, passing traditional Berber villages and mountain landscapes. Continue to Tizi Oussem, where you will have dinner and spend the night in a comfortable gîte.",
        walkingTime: "Approximately 5 - 6 hours",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Comfortable gîte in Tizi Oussem"
      },
      {
        day: 3,
        title: "Tizi Oussem – Aït Aïssa – Ouirgane",
        description: "After breakfast, continue through the beautiful Azzaden Valley, passing traditional villages, terraced fields, and peaceful mountain landscapes. From Aït Aïssa, continue towards Ouirgane, enjoying the scenery along the way. Arrive in Ouirgane in the afternoon, where the trek ends.",
        walkingTime: "Approximately 5 - 6 hours",
        meals: "Breakfast, Lunch",
        accommodation: "None (trek ends in Ouirgane)"
      }
    ]
  },
  {
    slug: "3-day-merzouga-desert-tour-from-marrakech",
    title: "3-Day Merzouga Desert Tour from Marrakech",
    duration: "3 Days",
    subtitle: "Cross the High Atlas to Aït Benhaddou, Dades Valley, Todra Gorge, and the dunes of Merzouga.",
    summary: "Travel from Marrakech to the edge of the Sahara on a private three-day journey through southern Morocco. Visit the UNESCO-listed ksar of Aït Benhaddou, spend a night in the Dades Valley, walk beneath the cliffs of Todra Gorge, then ride camels across the Erg Chebbi dunes for an overnight stay in a Merzouga desert camp.",
    seoTitle: "3-Day Merzouga Desert Tour from Marrakech",
    seoDescription: "Book a private 3-day Marrakech to Merzouga desert tour with Aït Benhaddou, Dades Valley, Todra Gorge, camel rides, and an overnight Sahara camp.",
    touristType: "Couples, families, photographers, and culture-focused travellers",
    difficulty: "Easy",
    maxElevation: "2,260m (Tizi n'Tichka)",
    startLocation: "Marrakech (Hotel pickup)",
    endLocation: "Marrakech (Hotel drop-off)",
    startingPrice: 190,
    imageSrc: "/merzouga-dunes-cc0.jpg",
    imageAlt: "Golden Erg Chebbi dunes near Merzouga on a three-day desert tour from Marrakech",
    highlights: [
      "Cross the High Atlas Mountains over the panoramic Tizi n'Tichka pass",
      "Explore the UNESCO-listed fortified village of Aït Benhaddou",
      "Spend one night in the dramatic Dades Valley",
      "Walk through Todra Gorge beneath its towering canyon walls",
      "Ride camels across the Erg Chebbi dunes at sunset",
      "Sleep in a Merzouga desert camp beneath the Sahara sky"
    ],
    inclusions: [
      "Private air-conditioned transport with an experienced driver",
      "Pickup from and return to your Marrakech hotel or riad",
      "One night in a hotel or guesthouse in the Dades Valley",
      "One night in a Merzouga desert camp",
      "Breakfasts and dinners during the tour",
      "Camel rides to and from the desert camp",
      "Scheduled visits to Aït Benhaddou, Dades Valley, and Todra Gorge",
      "Entrance fees for the visits mentioned in the itinerary",
      "Fuel and road costs"
    ],
    exclusions: [
      "Lunches during the three-day tour",
      "Drinks"
    ],
    pricingTiers: [
      { groupSize: 1, pricePerPerson: 500 },
      { groupSize: 2, pricePerPerson: 400 },
      { groupSize: 3, pricePerPerson: 300 },
      { groupSize: 4, pricePerPerson: 300 },
      { groupSize: 5, pricePerPerson: 300 },
      { groupSize: 6, pricePerPerson: 300 },
      { groupSize: 7, pricePerPerson: 190 }
    ],
    packingList: [
      "Comfortable walking shoes",
      "Light layers for warm daytime temperatures",
      "Warm jacket for the desert evening and early morning",
      "Sun hat, sunglasses, and high-SPF sunscreen",
      "Small overnight bag for the desert camp",
      "Reusable water bottle",
      "Camera or phone with a portable charger",
      "Personal toiletries and any required medication"
    ],
    itinerary: [
      {
        day: 1,
        title: "Marrakech – High Atlas – Aït Benhaddou – Dades Valley",
        description: "Leave Marrakech in the morning and cross the High Atlas Mountains via Tizi n'Tichka (2,260m), stopping at panoramic viewpoints along the way. Visit the UNESCO-listed ksar of Aït Benhaddou, a historic fortified village known for its earthen architecture, before continuing through Ouarzazate and the Valley of Roses. Arrive in the Dades Valley for dinner and an overnight stay in a hotel or guesthouse.",
        meals: "Dinner",
        accommodation: "Hotel or guesthouse in the Dades Valley"
      },
      {
        day: 2,
        title: "Dades Valley – Todra Gorge – Erfoud – Merzouga Desert",
        description: "After breakfast, travel through the changing landscapes of southern Morocco to Todra Gorge. Take time to walk beneath the high canyon walls, then continue through oasis towns and desert country toward Merzouga. At the edge of the Erg Chebbi dunes, meet the camel team and ride across the sand as the light changes over the Sahara. Reach the desert camp for dinner, local music, and a night beneath the stars.",
        meals: "Breakfast, Dinner",
        accommodation: "Merzouga desert camp"
      },
      {
        day: 3,
        title: "Merzouga – Rissani – Ouarzazate – Marrakech",
        description: "Wake early to watch sunrise over the Erg Chebbi dunes, then enjoy breakfast at the camp. Return from the dunes by camel and begin the journey back to Marrakech. Travel through the desert towns and valleys of southern Morocco, passing Rissani and Ouarzazate before crossing the High Atlas Mountains. Arrive at your Marrakech hotel or riad in the evening, where the tour ends.",
        meals: "Breakfast",
        accommodation: "None (return to Marrakech)"
      }
    ]
  }
];

export function getTrekBySlug(slug: string): Trek | undefined {
  return treks.find((t) => t.slug === slug);
}

export function getPriceForGroup(trek: Trek, groupSize: number): { pricePerPerson: number; total: number } {
  // Find matching tier
  const tiers = [...trek.pricingTiers].sort((a, b) => b.groupSize - a.groupSize);
  const matched = tiers.find((tier) => groupSize >= tier.groupSize) || { pricePerPerson: trek.startingPrice };
  const price = matched.pricePerPerson;
  return {
    pricePerPerson: price,
    total: price * groupSize
  };
}
