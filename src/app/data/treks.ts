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
  difficulty: "Easy" | "Moderate" | "Challenging" | "Strenuous";
  maxElevation: string;
  startLocation: string;
  endLocation: string;
  startingPrice: number;
  imageSrc: string;
  imageAlt: string;
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
