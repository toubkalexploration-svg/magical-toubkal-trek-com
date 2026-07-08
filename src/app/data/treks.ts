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

export const treks: Trek[] = [
  {
    slug: "2-day-toubkal-trek",
    title: "2-Day Mount Toubkal Climb",
    duration: "2 Days",
    subtitle: "Conquer North Africa's highest summit on a classic 2-day alpine trek.",
    summary: "The 2-day Mount Toubkal trek is the most popular route to the summit of North Africa (4,167m). Perfect for travelers with limited time but excellent physical fitness, this trek takes you through the beautiful Ait Mizane valley, past the holy shrine of Sidi Chamharouch, and onto the rocky heights of the High Atlas. Guided by our experienced local experts, you'll tackle the summit push at dawn for spectacular panoramic views.",
    difficulty: "Challenging",
    maxElevation: "4,167m (13,671 ft)",
    startLocation: "Imlil (Pick up from Marrakech)",
    endLocation: "Imlil (Drop off in Marrakech)",
    startingPrice: 160,
    imageSrc: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Mount Toubkal summit ridge in the High Atlas Mountains",
    highlights: [
      "Reach the summit of Mount Toubkal (4,167m), North Africa's highest peak",
      "Stunning pre-dawn alpine ascent and sunrise over the Atlas range",
      "Trek past the famous shrine of Sidi Chamharouch in the Ait Mizane valley",
      "Experience authentic Berber hospitality at the mountain refuge",
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
        description: "A pre-dawn wake-up call (usually around 4:30 AM) for a quick breakfast before heading out under the stars. The climb starts immediately with a steep scramble up the southern scree slopes of Toubkal. The pace is slow and steady to aid acclimatization. As dawn breaks, the views open up to reveal the surrounding peaks. After 3 to 4 hours of hiking, reach the metal tripod marking the summit of Mount Toubkal (4,167m). Celebrate and take photos of the breathtaking views extending to the Anti-Atlas and the edge of the Sahara. Descend back to the refuge for a warm lunch, pack up your gear, and complete the trek back down to Imlil. Meet your private vehicle and return to Marrakech by evening.",
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
    subtitle: "A scenic, circular route with superior acclimatization and gorgeous waterfall views.",
    summary: "For travelers seeking a richer landscape experience and better altitude preparation, the 3-day Toubkal trek via the Azzadene Valley is the perfect choice. This circular route ascends through the beautiful Azzadene valley, passes the spectacular Ighouliden Waterfalls, and climbs over the Aguelzim Pass (3,560m) to reach base camp. This gradual ascent greatly improves your comfort and energy levels for the final summit day, while showcasing a side of the High Atlas that most day-trippers never see.",
    difficulty: "Challenging",
    maxElevation: "4,167m (13,671 ft)",
    startLocation: "Imlil (Pick up from Marrakech)",
    endLocation: "Imlil (Drop off in Marrakech)",
    startingPrice: 230,
    imageSrc: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Alpine valley and peaks in the Atlas Mountains near Tamsoult",
    highlights: [
      "Climb Tizi Mzik Pass (2,489m) for panoramic double-valley views",
      "Visit the dramatic, tumbling cascades of the Ighouliden Waterfalls",
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
        description: "Depart Marrakech in the morning for the drive to Imlil. Meet your guide and mules, and start trekking with a steady climb toward the Tizi Mzik Pass (2,489m). From the pass, enjoy breathtaking views of the Imlil Valley to the east and the wilder Azzadene Valley to the west. Have a picnic lunch under the shade of juniper trees, then descend into the pine forests and terraced fields of Azzadene. Trek past traditional red clay Berber villages to reach the Tamsoult Refuge (2,250m). Take a short evening hike to the nearby Ighouliden Waterfalls (2,400m) before a fresh dinner.",
        walkingTime: "5 - 6 hours",
        distance: "12 km (7.5 miles)",
        elevationChange: "+749m / -239m",
        meals: "Lunch, Dinner",
        accommodation: "Tamsoult Refuge (Shared dorms)"
      },
      {
        day: 2,
        title: "Tamsoult – Aguelzim Pass (3,560m) – Toubkal Refuge (3,207m)",
        description: "A strenuous but rewarding day. The climb starts early, leaving the Azzadene Valley behind. Navigate a long series of steep zig-zags up toward the Aguelzim Pass (3,560m). This high crossing provides superior acclimatization. At the summit of the pass, you will be rewarded with spectacular close-up views of the Toubkal massif and its rugged rock faces. After a scenic lunch at the pass, descend gradually along the western ridge of the valley to reach the Toubkal Base Camp (3,207m) by late afternoon. Rest your legs, hydrate, and prepare for the summit day.",
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
    subtitle: "A delightful day trip to escape the heat of Marrakech and experience Berber culture.",
    summary: "If you want to experience the majesty of the Atlas Mountains and the warmth of Berber culture without a strenuous summit climb, our Imlil Valley Day Tour is the perfect escape. Just 90 minutes from Marrakech, you will step into a world of fresh mountain air, towering walnut trees, and traditional red-clay villages. This guided walk is fully customizable, taking you through scenic valley trails, past waterfalls, and into a local home for a traditional Berber lunch.",
    difficulty: "Easy",
    maxElevation: "1,940m (6,365 ft)",
    startLocation: "Marrakech",
    endLocation: "Marrakech",
    startingPrice: 50,
    imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Berber village on a hillside in the Imlil Valley with walnut trees",
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
    subtitle: "A remote, wild journey to Morocco's second-highest peak through the Happy Valley.",
    summary: "Jebel M'goun (4,071m) is Morocco's best-kept trekking secret. Lying in the Central High Atlas, it offers a dramatic and remote alternative to Mount Toubkal. This 5-day trek begins in the beautiful, fertile Aït Bougmez Valley (known locally as the 'Happy Valley') with its traditional stone villages. You will cross high plateaus home to nomadic shepherds, camp under the stars on the Tarkedit Plateau, and scramble along the spectacular summit ridge of M'goun. With fewer travelers and wilder trails, this is an unforgettable adventure for true trekking enthusiasts.",
    difficulty: "Strenuous",
    maxElevation: "4,071m (13,356 ft)",
    startLocation: "Aït Bougmez (Pick up from Marrakech)",
    endLocation: "Aït Bougmez (Drop off in Marrakech)",
    startingPrice: 380,
    imageSrc: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Rugged limestone mountains and ridge of Jebel M'goun in Morocco",
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
        description: "Depart Marrakech at 8:00 AM for a 5-hour drive through the plains and into the mountains, passing Azilal, to arrive in the breathtaking Aït Bougmez Valley. Meet your guide, cook, and muleteers. After loading the gear, begin a gentle 2.5-hour trek climbing up the valley of Arous. Sleep in a gite or camp in the peaceful sheepfolds of Ikkis N'Arous (2,300m), surrounded by towering sandstone cliffs.",
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
        description: "A very early start (around 4:00 AM) for the summit push. Climb steadily up the limestone scree slope to reach the spectacular knife-edge ridge of Jebel M'goun. Walk along the ridge for 2 hours, with dramatic views of the Sahara to the south and the Atlas mountains to the north, before reaching the high summit at 4,071m. Descend via the eastern slopes into the beautiful Oulilimt Valley (2,600m) to set up camp by a refreshing river.",
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
    subtitle: "The ultimate High Atlas trek through remote passes, Berber villages, and Lake Ifni.",
    summary: "The 6-day Mount Toubkal Grand Circuit is our most comprehensive and immersive trekking adventure. Perfect for active hikers, this grand loop circumvents the entire Toubkal massif. You will trek through remote valleys, cross demanding high mountain passes, and visit the stunning, turquoise-blue Lake Ifni. Spend nights in traditional Berber villages and wild campsites before tackling the classic summit ascent of Mount Toubkal (4,167m) from the south, completing a full alpine loop.",
    difficulty: "Strenuous",
    maxElevation: "4,167m (13,671 ft)",
    startLocation: "Imlil (Pick up from Marrakech)",
    endLocation: "Imlil (Drop off in Marrakech)",
    startingPrice: 420,
    imageSrc: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Lake Ifni nestled deep within the rocky peaks of the High Atlas",
    highlights: [
      "Complete the ultimate circular circuit around the majestic Mount Toubkal",
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
        description: "A challenging morning. Begin a long, steep climb up to the Tizi Likemt pass (3,555m). The trail is demanding but offers spectacular vistas of the Toubkal massif. Descend along scree slopes to the summer pastures of Azib Likemt (2,600m), where shepherds live in stone shelters during summer. Set up camp.",
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
