export const SHOP_INFO = {
  name: "The Modern Barber Shop",
  tagline: "Premium Urban Grooming & Craftsmanship",
  phone: "(555) 839-2041",
  formattedPhone: "+15558392041",
  address: "742 Industrial Blvd, Suite 104, Metropolis",
  directionsUrl: "https://maps.google.com/?q=742+Industrial+Blvd+Metropolis",
  email: "concierge@modernbarbershop.com",
  hours: [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM", openHour: 9, closeHour: 20 },
    { day: "Saturday", hours: "8:00 AM - 7:00 PM", openHour: 8, closeHour: 19 },
    { day: "Sunday", hours: "10:00 AM - 5:00 PM", openHour: 10, closeHour: 17 },
  ],
  socials: {
    instagram: "@modernbarber_lounge",
    facebook: "TheModernBarberShopOfficial",
  }
};

export const SERVICES = [
  {
    category: "Signature Haircuts",
    items: [
      {
        id: "s1",
        name: "The Executive Cut",
        price: "$45",
        duration: "45 mins",
        description: "Tailored haircut with hot towel treatment, neck razor line-up, and signature matte clay finish.",
        featured: true,
      },
      {
        id: "s2",
        name: "Skin Fade & Sculpt",
        price: "$50",
        duration: "50 mins",
        description: "Precision foil shaver skin fade seamlessly blended into styled top section with razor edge details.",
        featured: true,
      },
      {
        id: "s3",
        name: "Classic Gentleman's Cut",
        price: "$40",
        duration: "40 mins",
        description: "Traditional shear work or classic taper tailored to your scalp shape and growth pattern.",
        featured: false,
      },
      {
        id: "s4",
        name: "Buzz Cut & Sharp Edges",
        price: "$30",
        duration: "25 mins",
        description: "Single length clipper cut with razor edging, shampoo wash, and scalp conditioning spray.",
        featured: false,
      }
    ]
  },
  {
    category: "Beard Engineering & Shaving",
    items: [
      {
        id: "b1",
        name: "Royal Hot Towel Straight Razor Shave",
        price: "$45",
        duration: "40 mins",
        description: "3-step hot towel steams, pre-shave essential oils, classic cut-throat razor shave & cool mint balm.",
        featured: true,
      },
      {
        id: "b2",
        name: "Beard Sculpture & Line-Up",
        price: "$35",
        duration: "30 mins",
        description: "Full beard shape-up with hot oil treatment, razor cheek lines, and organic beard oil massage.",
        featured: true,
      },
      {
        id: "b3",
        name: "Express Beard Trim",
        price: "$25",
        duration: "20 mins",
        description: "Quick clipper trim, length evening, and quick cheek razor touchup.",
        featured: false,
      }
    ]
  },
  {
    category: "VIP Grooming Packages",
    items: [
      {
        id: "p1",
        name: "The Modern Godfather Experience",
        price: "$95",
        duration: "90 mins",
        description: "Executive Cut + Royal Hot Towel Shave + Scalp Massage + Complimentary Craft Beverage & Hair Wash.",
        featured: true,
      },
      {
        id: "p2",
        name: "Father & Son Duo Cut",
        price: "$75",
        duration: "60 mins",
        description: "Pair appointment including Executive Cut for Dad and Junior Sculpt for Son under 12.",
        featured: false,
      }
    ]
  }
];

export const TEAM_MEMBERS = [
  {
    id: "barber-1",
    name: "Marcus Vance",
    role: "Founder & Master Barber",
    experience: "14+ Years Exp.",
    specialties: ["Custom Skin Fades", "Straight Razor Artistry", "Beard Restoration"],
    bio: "Classically trained in London & New York, Marcus established The Modern Barber Shop to bring elite precision grooming back to local urban professionals.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    instagram: "@vance_cuts"
  },
  {
    id: "barber-2",
    name: "Dante Rossi",
    role: "Senior Grooming Stylist",
    experience: "9 Years Exp.",
    specialties: ["Textured Crop Cuts", "Hot Towel Shaves", "Classic Pompadours"],
    bio: "Dante specializes in blending heritage barber techniques with modern streetwear style. Known for flawless taper blends and sharp razor lineups.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
    instagram: "@dante_barber_art"
  },
  {
    id: "barber-3",
    name: "Julian Kross",
    role: "Beard Specialist & Barber",
    experience: "7 Years Exp.",
    specialties: ["Beard Sculpting", "Scalp Treatments", "Low Drop Fades"],
    bio: "Julian is a master of facial hair physics. Whether you need a thick dense beard sculpted or a crisp line-up, his eye for detail is unmatched.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    instagram: "@kross_blade"
  }
];

export const GALLERY_IMAGES = [
  {
    id: "g1",
    title: "Mid Skin Fade & Textured Top",
    category: "Fades & Tapers",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
    barber: "Marcus Vance"
  },
  {
    id: "g2",
    title: "Precision Beard Sculpture",
    category: "Beard Grooming",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    barber: "Julian Kross"
  },
  {
    id: "g3",
    title: "Vintage Leather Chair Lounge",
    category: "Shop Interior",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
    barber: "Shop Atmosphere"
  },
  {
    id: "g4",
    title: "Classic Pompadour Taper",
    category: "Classic Cuts",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80",
    barber: "Dante Rossi"
  },
  {
    id: "g5",
    title: "Royal Straight Razor Shave",
    category: "Beard Grooming",
    image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80",
    barber: "Marcus Vance"
  },
  {
    id: "g6",
    title: "Industrial Barber Station",
    category: "Shop Interior",
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=80",
    barber: "Grooming Lounge"
  }
];

export const REVIEWS = [
  {
    id: "r1",
    author: "David Miller",
    date: "2 days ago",
    rating: 5,
    comment: "Hands down the best barber shop experience in the city. Marcus gave me an executive cut that lasted weeks. Hot towel service is top tier!",
    service: "The Executive Cut"
  },
  {
    id: "r2",
    author: "Alexander Wright",
    date: "1 week ago",
    rating: 5,
    comment: "Dante is an absolute magician with skin fades. The vibe in the shop is sleek, industrial, and super professional. 10/10 recommendation.",
    service: "Skin Fade & Sculpt"
  },
  {
    id: "r3",
    author: "Marcus Sterling",
    date: "2 weeks ago",
    rating: 5,
    comment: "Got the Godfather package before my wedding. The hot towel straight razor shave left my skin smooth and refreshed. Will be a lifelong customer.",
    service: "The Modern Godfather"
  }
];
