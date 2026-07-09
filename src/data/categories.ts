export interface SubService {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  bullets: string[];
  responseTime: string;
  image: string;
  photos?: string[];
  keywords: string[];
}

export interface ServiceCategory {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  description: string;
  emoji: string;
  heroImage: string;
  color: string;
  subServices: SubService[];
}

export const categories: ServiceCategory[] = [
  {
    slug: "emergency",
    name: "Emergency Locksmith",
    headline: "Need Help Right Now?",
    subheadline: "Fast-Response Emergency Locksmith Service Across New Jersey",
    description: "Locked out of your home, car, or business? Garden State Locksmith dispatches certified NJ emergency locksmiths across all of New Jersey — fast, professional, and non-destructive. Whether you're standing outside your front door at midnight, keys locked in your car in a parking lot, or dealing with a broken lock after a break-in, our mobile technicians arrive fully equipped to handle the situation on-site. We carry professional-grade tools for all lock types — standard deadbolts, high-security cylinders, smart locks, car door locks, and commercial hardware. No hidden fees, no damage to your property, and no job too complex.",
    emoji: "🚨",
    heroImage: "/car-lockout-service-new-jersey.webp",
    color: "red",
    subServices: [
      {
        slug: "house-lockout",
        name: "House Lockout",
        shortDesc: "Professional, damage-free home lockout service. Back inside fast.",
        longDesc: "Being locked out of your home is stressful — but it doesn't have to turn into a crisis. Garden State Locksmith dispatches a certified NJ technician to your location promptly. We use professional non-destructive entry techniques to open any residential lock without damaging your door, frame, or lock hardware. Whether it's a standard doorknob, a deadbolt, a smart lock, or a security door, we've got the tools and training to get you back inside fast.",
        bullets: [
          "Non-destructive entry — no damage to door or lock",
          "All residential lock types: deadbolts, knob locks, smart locks",
          "NJ licensed, bonded & background-checked technician",
          "Fast local dispatch throughout New Jersey",
          "Available 7 AM – 10 PM, 6 days a week",
          "Satisfaction guaranteed — we make it right if you're not happy"
        ],
        responseTime: "Same Day",
        image: "/house-lockout-nj.jpg",
        photos: ["/house-lockout-nj.jpg"],
        keywords: ["house lockout", "locked out of house nj", "home lockout service", "residential lockout new jersey", "locked out of home", "door unlock service nj"]
      },
      {
        slug: "car-lockout",
        name: "Car Lockout",
        shortDesc: "We come to you and open any make or model — no damage, no hassle.",
        longDesc: "Locked your keys in the car? Don't risk damaging your vehicle with a DIY attempt. Our automotive locksmiths are equipped to safely open any car, truck, or SUV without scratching the paint or damaging the weather stripping or door panel. We service all makes and models — domestic and foreign — and we come directly to your location anywhere in New Jersey.",
        bullets: [
          "Any make or model — domestic, foreign, luxury",
          "Zero damage to door, window, or lock mechanisms",
          "Mobile service — we come to your exact location",
          "Fast local dispatch statewide",
          "Available 7 AM – 10 PM including holidays",
          "Transponder and smart key vehicles serviced"
        ],
        responseTime: "Same Day",
        image: "/car-lockout-service-new-jersey.webp",
        photos: ["/car-lockout-service-new-jersey.webp"],
        keywords: ["car lockout nj", "keys locked in car new jersey", "auto lockout service", "unlock car door nj", "locked out of car", "vehicle lockout service"]
      },
      {
        slug: "business-lockout",
        name: "Business Lockout",
        shortDesc: "Discreet commercial lockout service — minimal downtime, every time.",
        longDesc: "A business lockout costs money every minute. Whether you're locked out of your office, retail store, warehouse, or restaurant, Garden State Locksmith provides fast, discreet commercial lockout service across New Jersey. Our technicians carry commercial-grade entry tools to handle everything from standard commercial deadbolts to high-security grade-1 locks and electronic access systems.",
        bullets: [
          "All commercial lock types including high-security hardware",
          "Electronic keypad and access control entry",
          "Discreet service — no damage, no drama",
          "Available during and outside business hours",
          "Follow-up rekey or lock change available on same visit",
          "Emergency commercial lockout throughout all NJ"
        ],
        responseTime: "Same Day",
        image: "/business-lockout-drill-nj.jpg",
        photos: ["/business-lockout-drill-nj.jpg"],
        keywords: ["business lockout nj", "commercial lockout service", "office lockout new jersey", "locked out of business", "store lockout", "commercial locksmith emergency nj"]
      },
      {
        slug: "broken-key-extraction",
        name: "Broken Key Extraction",
        shortDesc: "Key snapped in the lock? We extract it and cut a new one on-site.",
        longDesc: "A broken key stuck in a lock is a double problem — you can't use the lock and you can't get your key out. Don't make it worse with pliers or improvised tools. Our technicians use precision extraction tools to remove broken key fragments from any lock cylinder — door locks, deadbolts, padlocks, car door locks, and ignitions — without damaging the lock. Once extracted, we cut a fresh replacement key on-site.",
        bullets: [
          "Precise extraction tools — no damage to lock cylinder",
          "Residential, commercial, and automotive locks",
          "Fresh key cut on-site after extraction",
          "Rekeying available on same visit if needed",
          "Broken keys in ignition cylinders also handled",
          "Available 7 AM – 10 PM statewide"
        ],
        responseTime: "Same Day / Emergency",
        image: "/broken-key-extraction-nj.jpg",
        photos: ["/broken-key-extraction-nj.jpg"],
        keywords: ["broken key extraction nj", "key stuck in lock new jersey", "remove broken key", "key extraction service", "key snapped in door lock", "broken key in ignition nj"]
      },
      {
        slug: "lock-change-after-break-in",
        name: "Lock Change After Break-In",
        shortDesc: "Urgent lock replacement and door reinforcement after a break-in.",
        longDesc: "After a break-in, your immediate priority is securing the property again. Garden State Locksmith provides emergency lock change and door reinforcement services throughout New Jersey. We assess all entry points, replace compromised hardware with high-security alternatives, and reinforce weak areas to prevent re-entry. We work quickly to restore your sense of safety.",
        bullets: [
          "Emergency same-day response across NJ",
          "Full property security assessment included",
          "Upgrade to high-security locks available",
          "Door frame and strike plate reinforcement",
          "All entry points secured — front, rear, garage",
          "Insurance documentation assistance available"
        ],
        responseTime: "Emergency — ASAP",
        image: "/lock-change-after-break-in-nj.jpg",
        photos: ["/lock-change-after-break-in-nj.jpg"],
        keywords: ["lock change after break in nj", "emergency lock replacement new jersey", "after burglary locksmith", "break in lock repair", "post break-in security nj", "urgent lock change nj"]
      },
      {
        slug: "emergency-lock-repair",
        name: "Emergency Lock Repair",
        shortDesc: "Professional repair for jammed, frozen, or malfunctioning locks.",
        longDesc: "A malfunctioning lock is a security emergency, especially if it's your front door, office entrance, or vehicle. Our mobile technicians diagnose and repair all types of lock failures — jammed mechanisms, frozen cylinders, worn tumblers, loose mortise locks, and more. We carry a full inventory of replacement parts to complete most repairs on the spot.",
        bullets: [
          "All lock types — residential, commercial, automotive",
          "Jammed, frozen, stripped, and worn lock repair",
          "Mobile parts inventory for on-site completion",
          "Available nights, weekends, and holidays",
          "Replacement with upgrade option if unrepairable",
          "Fast local dispatch throughout New Jersey"
        ],
        responseTime: "Fast dispatch",
        image: "/emergency-lock-repair-nj.jpg",
        photos: ["/emergency-lock-repair-nj.jpg"],
        keywords: ["emergency lock repair nj", "jammed lock repair new jersey", "broken lock fix", "malfunctioning lock service", "frozen lock repair nj", "24 hour lock repair new jersey"]
      }
    ]
  },
  {
    slug: "residential",
    name: "Residential Locksmith",
    headline: "Protect Your Home",
    subheadline: "Professional Home Security Services Across New Jersey",
    description: "Your home's security starts at the door — and Garden State Locksmith makes sure it's done right. We serve homeowners across all of New Jersey with a complete range of residential locksmith services: new deadbolt installations, rekeying after a move or a missing key, smart lock upgrades with app-based access, high-security lock replacements, and full home security consultations. Our NJ-licensed technicians bring the right tools and hardware to every job, so most visits are completed in a single call with no return trips needed. Whether you're a first-time homeowner securing a new purchase, a landlord rekeying between tenants, or a homeowner upgrading to a keypad entry system, our residential team handles it all with care and precision.",
    emoji: "🏠",
    heroImage: "/residential-locksmith-lock-installation-nj.webp",
    color: "blue",
    subServices: [
      {
        slug: "lock-installation",
        name: "Lock Installation",
        shortDesc: "Professional deadbolt and security hardware installation.",
        longDesc: "Installing a new lock correctly is the foundation of home security. A misaligned bolt, shallow strike plate, or improperly seated cylinder can leave your door vulnerable even with expensive hardware. Garden State Locksmith technicians install all lock types — deadbolts, knob locks, lever sets, mortise locks, and smart locks — with perfect alignment and solid anchoring into your door frame.",
        bullets: [
          "All lock types and brands installed",
          "Deadbolts, knob sets, lever sets, mortise locks",
          "Smart lock and keypad installation",
          "Strike plate reinforcement included",
          "Same-day and scheduled appointments",
          "NJ licensed and insured technicians"
        ],
        responseTime: "Same Day or Scheduled",
        image: "/residential-locksmith-lock-installation-nj.webp",
        photos: ["/residential-locksmith-lock-installation-nj.webp"],
        keywords: ["lock installation nj", "install new lock new jersey", "deadbolt installation service", "door lock install nj", "residential lock installer", "home lock replacement nj"]
      },
      {
        slug: "lock-rekeying",
        name: "Lock Rekeying",
        shortDesc: "New keys, same locks — make all old keys useless instantly.",
        longDesc: "Rekeying is the fastest and most affordable way to change who has access to your home. When we rekey a lock, we alter the internal pin configuration so that all previous keys — including those you may have lost — no longer work. You get brand new keys, and your existing hardware stays in place. Perfect for new homeowners, after a breakup, or when a key goes missing.",
        bullets: [
          "All old keys immediately made useless",
          "Fraction of the cost of full lock replacement",
          "All pins and springs replaced with new components",
          "Multi-lock master keying available",
          "New keys cut and provided on the spot",
          "Same-day service throughout NJ"
        ],
        responseTime: "Same Day",
        image: "/lock-rekeying-nj.jpg",
        photos: ["/lock-rekeying-nj.jpg"],
        keywords: ["lock rekeying nj", "rekey locks new jersey", "change lock combination nj", "rekey after moving", "new keys same lock", "residential rekeying service nj"]
      },
      {
        slug: "lock-repair",
        name: "Lock Repair",
        shortDesc: "Fix what's broken — often cheaper than replacing.",
        longDesc: "Not every lock problem requires a full replacement. Our technicians diagnose and repair a wide range of residential lock issues — sticking or sticky mechanisms, loose or wobbly hardware, keys that don't turn smoothly, locks that don't latch properly, and worn-out internal components. Repairing is almost always faster and cheaper than replacing, and we carry parts for most major lock brands.",
        bullets: [
          "Sticking, jammed, and worn lock repair",
          "Loose hardware tightened and realigned",
          "Cylinder and internal component replacement",
          "Door alignment adjustment for better latch engagement",
          "Smart lock and electronic lock diagnostics",
          "All major brands serviced"
        ],
        responseTime: "Same Day",
        image: "/lock-repair-nj.jpg",
        photos: ["/lock-repair-nj.jpg"],
        keywords: ["lock repair nj", "fix broken lock new jersey", "door lock repair service", "jammed lock fix nj", "residential lock repair", "lock mechanism repair nj"]
      },
      {
        slug: "smart-lock-installation",
        name: "Smart Lock Installation",
        shortDesc: "Upgrade to keyless entry — convenient, connected, secure.",
        longDesc: "Smart locks give you the freedom to lock and unlock your door from anywhere, share access codes with family or guests, and track who enters and when. Garden State Locksmith installs and configures all major smart lock brands — August, Schlage Encode, Yale Assure, Kwikset Halo, and more. We handle the hardware installation, app setup, and integration with your smart home system.",
        bullets: [
          "All major brands: August, Schlage, Yale, Kwikset",
          "Wi-Fi, Z-Wave, and Zigbee models installed",
          "App setup and smart home integration included",
          "Keypad, fingerprint, and voice-control options",
          "Backup key entry always configured",
          "Full orientation so you know every feature"
        ],
        responseTime: "Scheduled",
        image: "/smart-lock-installation-nj.jpg",
        photos: ["/smart-lock-installation-nj.jpg"],
        keywords: ["smart lock installation nj", "keyless lock install new jersey", "August lock installer", "Schlage Encode installation nj", "wifi door lock setup", "smart home lock nj"]
      },
      {
        slug: "deadbolt-installation",
        name: "Deadbolt Installation",
        shortDesc: "Heavy-duty deadbolt installation for maximum door security.",
        longDesc: "A properly installed deadbolt is the single most effective upgrade you can make to your home security. Garden State Locksmith installs single-cylinder, double-cylinder, and smart deadbolts from top brands including Schlage, Medeco, and Baldwin. We ensure perfect bore alignment, deep-set strike plate anchoring with 3\" screws into the stud, and proper door clearance — all factors that determine whether a deadbolt actually resists forced entry.",
        bullets: [
          "Single and double cylinder deadbolts",
          "High-security Medeco and Mul-T-Lock options available",
          "Strike plate anchored with 3\" screws into stud",
          "Precise alignment for smooth, reliable operation",
          "ANSI Grade 1 and 2 hardware stocked",
          "Same-day and scheduled service"
        ],
        responseTime: "Same Day or Scheduled",
        image: "/deadbolt-installation-nj.jpg",
        photos: ["/deadbolt-installation-nj.jpg"],
        keywords: ["deadbolt installation nj", "install deadbolt new jersey", "deadbolt lock service", "high security deadbolt nj", "door deadbolt installer", "Schlage deadbolt install nj"]
      },
      {
        slug: "mailbox-lock-replacement",
        name: "Mailbox Lock Replacement",
        shortDesc: "Fast mailbox lock replacement for homes and apartment buildings.",
        longDesc: "A broken or compromised mailbox lock puts your mail, identity, and financial information at risk. Garden State Locksmith replaces individual residential mailbox locks and multi-unit cluster mailbox locks for apartments and condos. We stock replacement cylinders for most USPS-approved cluster box units (CBUs) and standard residential mailboxes.",
        bullets: [
          "Residential mailbox lock replacement",
          "Cluster box unit (CBU) servicing for apartments",
          "Most brands and styles stocked",
          "Immediate key cut and test on-site",
          "Available throughout NJ",
          "Quick turnaround — usually under 30 minutes"
        ],
        responseTime: "Same Day",
        image: "/mailbox-lock-replacement-nj.jpg",
        photos: ["/mailbox-lock-replacement-nj.jpg"],
        keywords: ["mailbox lock replacement nj", "mailbox lock repair new jersey", "apartment mailbox lock nj", "CBU mailbox key replacement", "cluster box lock nj", "mailbox rekey nj"]
      },
      {
        slug: "key-duplication",
        name: "Key Duplication",
        shortDesc: "Accurate key cutting for all home and office key types.",
        longDesc: "Whether you need one spare or a dozen copies, Garden State Locksmith provides precise key duplication for all residential key types — standard brass keys, high-security Medeco and Mul-T-Lock keys, Kwikset SmartKey, Schlage keys, and more. Our key machines are calibrated regularly to ensure cuts are accurate the first time. Restricted keys and \"Do Not Duplicate\" keys are also handled with proper authorization.",
        bullets: [
          "All residential key types duplicated",
          "High-security key cutting including Medeco and Mul-T-Lock",
          "Keys guaranteed to work on first use",
          "Bulk copies available at reduced rate",
          "Mobile service or in-shop duplication",
          "No original needed if key code is known"
        ],
        responseTime: "Immediate",
        image: "/residential-key-duplication-nj.jpg",
        photos: ["/residential-key-duplication-nj.jpg"],
        keywords: ["key duplication nj", "key copy service new jersey", "house key copy nj", "spare keys cut nj", "key cutting service", "high security key duplication nj"]
      }
    ]
  },
  {
    slug: "commercial",
    name: "Commercial Locksmith",
    headline: "Secure Your Business",
    subheadline: "Commercial Security Solutions for NJ Businesses",
    description: "A business lockout, a security breach, or outdated access control can cost you time, money, and peace of mind. Garden State Locksmith provides comprehensive commercial locksmith services for businesses of every size across New Jersey — from single-location retail shops to multi-site office campuses. Our commercial technicians are trained to work with high-security Grade-1 deadbolts, panic hardware, electronic keypad systems, master key hierarchies, and full access control platforms. We minimize disruption to your operations: most commercial calls are completed in a single visit, during or outside business hours. Whether you need a fast rekey after an employee departure, a new access control system for a growing team, or an emergency lockout response in the middle of the day, Garden State Locksmith is the NJ commercial locksmith businesses trust.",
    emoji: "🏢",
    heroImage: "/commercial-locksmith-new-jersey.webp",
    color: "green",
    subServices: [
      {
        slug: "commercial-lock-change",
        name: "Commercial Lock Change",
        shortDesc: "Full commercial lock change and rekeying — all hardware replaced in one visit.",
        longDesc: "After an employee departure, a security breach, or a facility upgrade, a complete commercial lock change restores control over who can access your property. Garden State Locksmith replaces commercial-grade deadbolts, cylindrical knob sets, lever sets, and mortise hardware for offices, retail stores, warehouses, and multi-tenant buildings. We carry grade-1 commercial hardware in stock for immediate same-day installation.",
        bullets: [
          "ANSI Grade 1 commercial hardware stocked and installed",
          "All entry points addressed in single visit",
          "Cylindrical, mortise, and rim-mount lock types",
          "Keying to master key system available",
          "After-hours service available to minimize disruption",
          "Serving all NJ commercial properties"
        ],
        responseTime: "Same Day or Scheduled",
        image: "/commercial-locksmith-new-jersey.webp",
        photos: ["/commercial-locksmith-new-jersey.webp"],
        keywords: ["commercial lock change nj", "business lock replacement new jersey", "office lock change nj", "commercial rekeying service", "replace business locks nj", "commercial locksmith nj"]
      },
      {
        slug: "master-key-systems",
        name: "Master Key Systems",
        shortDesc: "One key opens everything — individual keys stay limited.",
        longDesc: "A master key system lets you simplify facility management without sacrificing security. With a properly designed system, a building manager's master key opens every door, department heads access their sections only, and individual employees access only their designated spaces. Garden State Locksmith designs, installs, and manages master key systems for offices, apartments, hotels, schools, and multi-unit properties throughout New Jersey.",
        bullets: [
          "Custom system design for your facility",
          "Hierarchical access levels — GMK, MK, Change Key",
          "Rekeying existing hardware into system",
          "Documented key control records provided",
          "Expandable as your facility grows",
          "All major commercial lock brands supported"
        ],
        responseTime: "Scheduled",
        image: "/master-key-system-nj.jpg",
        photos: ["/master-key-system-nj.jpg"],
        keywords: ["master key system nj", "master key installation new jersey", "commercial master key nj", "key hierarchy system", "building master key nj", "apartment master key system nj"]
      },
      {
        slug: "access-control-systems",
        name: "Access Control Systems",
        shortDesc: "Electronic access — delete credentials in seconds, audit who enters when.",
        longDesc: "Access control systems replace physical keys with electronic credentials — PIN codes, key cards, fobs, or smartphone apps. They let you instantly add or remove users, set time-based access schedules, and pull detailed entry logs. Garden State Locksmith installs and programs commercial access control systems from simple single-door keypads to enterprise-grade multi-door networked systems for any size business in New Jersey.",
        bullets: [
          "Keypad, card reader, fob, and mobile credential options",
          "Instant credential revocation without rekeying",
          "Time-based access scheduling",
          "Detailed audit logs — know exactly who entered when",
          "Single-door to enterprise multi-door systems",
          "Integration with alarm and CCTV systems available"
        ],
        responseTime: "Scheduled",
        image: "/access-control-systems-nj.jpg",
        photos: ["/access-control-systems-nj.jpg"],
        keywords: ["access control system nj", "electronic access control new jersey", "keypad door lock commercial nj", "key fob access system nj", "commercial access control installation", "business entry system nj"]
      },
      {
        slug: "high-security-locks",
        name: "High-Security Locks",
        shortDesc: "Real protection from picks, drills, and unauthorized key copies.",
        longDesc: "Standard commercial locks can be picked in seconds and their keys easily duplicated. High-security locks — Medeco, Mul-T-Lock, ASSA ABLOY, and Abloy — are engineered to resist all common attack methods: picking, bumping, drilling, and unauthorized key copying. Garden State Locksmith supplies and installs certified high-security hardware for businesses, government facilities, and high-value residential properties across New Jersey.",
        bullets: [
          "UL-certified pick, bump, and drill resistance",
          "Patent-protected restricted keys — no unauthorized copies",
          "Medeco, Mul-T-Lock, ASSA ABLOY, and Abloy stocked",
          "Existing door prep respected — no major modifications",
          "Lifetime hardware warranty on select brands",
          "Ideal for server rooms, pharmacies, law firms, and safes"
        ],
        responseTime: "Scheduled",
        image: "/high-security-lock-installation-nj.jpg",
        photos: ["/high-security-lock-installation-nj.jpg"],
        keywords: ["high security locks nj", "Medeco lock installation new jersey", "Mul-T-Lock nj", "commercial high security lock", "pick resistant lock nj", "restricted key lock nj"]
      },
      {
        slug: "panic-bar-installation",
        name: "Panic Bar Installation",
        shortDesc: "Code-compliant panic hardware for emergency exits.",
        longDesc: "Building and fire codes in New Jersey require panic hardware (also called crash bars or exit devices) on certain commercial doors. Garden State Locksmith supplies and installs rim-mount, mortise, and vertical rod panic bars for single and double doors. All installations meet IBC and NFPA 101 Life Safety Code requirements. We also repair and maintain existing panic hardware for annual code compliance.",
        bullets: [
          "IBC and NFPA 101 code-compliant installation",
          "Rim-mount, mortise, and vertical rod devices",
          "Single and double door configurations",
          "Dogging and key-override options",
          "Alarm-equipped exit devices available",
          "Annual maintenance and inspection service"
        ],
        responseTime: "Scheduled",
        image: "/commercial-locksmith-panic-bar-installation-nj.jpg",
        photos: ["/commercial-locksmith-panic-bar-installation-nj.jpg"],
        keywords: ["panic bar installation nj", "crash bar install new jersey", "exit device installation nj", "commercial door panic hardware", "fire exit bar nj", "push bar door install nj"]
      },
      {
        slug: "safe-opening",
        name: "Safe Opening",
        shortDesc: "Lost your combination or locked out of your safe? We open it.",
        longDesc: "Whether your safe's combination is lost, the dial is malfunctioning, the battery died on an electronic model, or the lock simply failed — Garden State Locksmith technicians are trained in professional safe opening techniques. We open combination dial safes, electronic safes, depository safes, fireproof document safes, and wall safes with minimal or no damage. After opening, we service or replace the lock and restore full function.",
        bullets: [
          "Combination, electronic, and key-operated safes",
          "Minimal to no damage — preserve your safe's value",
          "Lock replacement and recombination after opening",
          "Home, office, and commercial safe types serviced",
          "Fire-rated and depository safes included",
          "Discreet, confidential service"
        ],
        responseTime: "Scheduled / Same Day",
        image: "/safe-opening-nj.jpg",
        photos: ["/safe-opening-nj.jpg"],
        keywords: ["safe opening nj", "safe cracking new jersey", "unlock safe nj", "forgot safe combination nj", "safe lockout service", "open electronic safe nj"]
      },
      {
        slug: "safe-installation",
        name: "Safe Installation",
        shortDesc: "Proper safe anchoring so it cannot be carried off.",
        longDesc: "An unbolted safe can be carried away in minutes — making it useless. Garden State Locksmith supplies and professionally anchors safes into concrete or wood sub-floors and walls. We carry a selection of residential and commercial safes including fireproof document safes, gun safes, wall safes, and heavy-duty commercial floor safes. Proper installation means your safe stays where it belongs no matter what.",
        bullets: [
          "Concrete and wood floor anchoring",
          "Wall safe installation and concealment",
          "Fireproof, gun, document, and commercial models",
          "Anchor hardware included in installation",
          "Combination/digital setup and orientation",
          "Serving homes and businesses throughout NJ"
        ],
        responseTime: "Scheduled",
        image: "/safe-installation-nj.jpg",
        photos: ["/safe-installation-nj.jpg"],
        keywords: ["safe installation nj", "bolt down safe new jersey", "home safe install nj", "safe anchoring service", "gun safe installation nj", "commercial safe nj"]
      }
    ]
  },
  {
    slug: "automotive",
    name: "Automotive Locksmith",
    headline: "Back on the Road",
    subheadline: "On-Site Automotive Locksmith Service Across All of New Jersey",
    description: "Vehicle locksmith problems happen anywhere — a parking lot, a gas station, a highway rest stop, or your own driveway. Garden State Locksmith dispatches fully equipped mobile automotive locksmiths to your location anywhere in New Jersey. We handle everything from car lockouts and lost key replacements to transponder chip programming, ignition cylinder repairs, and key fob reprogramming. Unlike dealerships that make you wait days and charge inflated prices, our mobile technicians arrive on-site and complete most automotive locksmith jobs in under an hour. We service all makes and models — domestic, import, and luxury — without damaging your vehicle. For motorcycle owners, we also provide specialized key and ignition service for most major powersports brands.",
    emoji: "🚗",
    heroImage: "/automotive-hero.webp",
    color: "yellow",
    subServices: [
      {
        slug: "car-lockout",
        name: "Car Lockout Service",
        shortDesc: "We come to you and open any make or model — fast, no damage.",
        longDesc: "Locked your keys inside your vehicle? Our automotive locksmiths will come to your exact location — parking lot, roadside, driveway, or garage — and safely open your car without damaging the door, lock, or weather stripping. We carry professional automotive entry tools for all makes and models including modern keyless entry vehicles.",
        bullets: [
          "All makes and models — domestic, import, luxury",
          "No scratches or damage to vehicle",
          "Mobile service — we come to you anywhere in NJ",
          "Fast local dispatch statewide",
          "Available 7 AM – 10 PM including weekends and holidays",
          "Keys-in-ignition lockouts also handled"
        ],
        responseTime: "Same Day",
        image: "/car-lockout-service-new-jersey.webp",
        photos: ["/car-lockout-service-new-jersey.webp"],
        keywords: ["car lockout nj", "locked out of car new jersey", "auto lockout service nj", "unlock car door nj", "keys locked in vehicle nj", "automotive lockout service"]
      },
      {
        slug: "car-key-replacement",
        name: "Car Key Replacement",
        shortDesc: "New car keys cut and programmed on-site — no dealer needed.",
        longDesc: "Lost all your car keys? Garden State Locksmith cuts and programs replacement keys for almost every vehicle on the road today — standard metal keys, transponder keys, laser-cut high-security keys, and remote head keys. We come to your location and complete the work on-site, saving you a tow truck trip and the inflated pricing at the dealership. Most vehicles programmed in under an hour.",
        bullets: [
          "All key types: standard, transponder, laser-cut, remote head",
          "All vehicle makes and models supported",
          "Cut and programmed on-site at your location",
          "Lost all keys? No problem — we can still do it",
          "Faster and more affordable than the dealer",
          "VIN verification and ownership documentation required"
        ],
        responseTime: "Same Day",
        image: "/car-key-replacement.jpg",
        keywords: ["car key replacement nj", "lost car keys new jersey", "replacement car key nj", "new car key made nj", "auto key maker new jersey", "car key cut and programmed nj"]
      },
      {
        slug: "transponder-key-programming",
        name: "Transponder Key Programming",
        shortDesc: "Chip key and key fob programming — dealer-alternative service.",
        longDesc: "Transponder keys contain a microchip that communicates with your vehicle's immobilizer system. If the chip isn't programmed to match your car, the engine won't start — even if the key turns the ignition. Garden State Locksmith programs transponder keys, chip keys, and remote fobs for virtually all makes and models. We also duplicate existing transponder keys so you have a spare.",
        bullets: [
          "All chip key and transponder types programmed",
          "Remote fob programming and synchronization",
          "Duplicate programming from existing working key",
          "All-keys-lost programming available",
          "OBD-II and EEPROM programming methods",
          "All major brands: Toyota, Honda, Ford, GM, BMW, Mercedes and more"
        ],
        responseTime: "Same Day",
        image: "/transponder-key-programming-nj.jpg",
        photos: ["/transponder-key-programming-nj.jpg"],
        keywords: ["transponder key programming nj", "chip key programming new jersey", "key fob programming nj", "car chip key nj", "immobilizer key program", "transponder key copy nj"]
      },
      {
        slug: "ignition-repair",
        name: "Ignition Repair & Replacement",
        shortDesc: "Key won't turn? Broken key in ignition? We fix it on-site.",
        longDesc: "The ignition cylinder is a precision component that wears out over time or can be damaged by forcing a wrong key. Garden State Locksmith technicians diagnose and repair all common ignition problems — key that won't turn, key stuck in ignition, broken key fragment inside the cylinder, and ignitions that won't release the key when the car is in park. We also replace full ignition assemblies when repair isn't sufficient.",
        bullets: [
          "Key stuck or won't turn in ignition",
          "Broken key extraction from ignition cylinder",
          "Ignition cylinder repair and rebuild",
          "Full ignition assembly replacement",
          "New ignition key cut and programmed",
          "Mobile service — we come to your vehicle"
        ],
        responseTime: "Same Day",
        image: "/ignition-4.jpg",
        photos: ["/ignition-4.jpg", "/ignition-5.jpg", "/ignition-1.jpg", "/ignition-2.jpg", "/ignition-3.jpg"],
        keywords: ["ignition repair nj", "key stuck in ignition new jersey", "ignition cylinder replacement nj", "car ignition locksmith nj", "ignition fix nj", "replace ignition nj"]
      },
      {
        slug: "key-fob-replacement",
        name: "Key Fob Replacement",
        shortDesc: "Lost or broken key fob replaced and programmed on-site.",
        longDesc: "Losing a key fob or having it break can mean losing remote start, keyless entry, and panic alarm functionality. Garden State Locksmith provides aftermarket and OEM-compatible replacement key fobs for most vehicles, programmed to your car on-site. We also repair fob housings, replace worn buttons, and resync fobs that have lost their programming without replacing the entire unit.",
        bullets: [
          "Aftermarket and OEM-compatible fobs stocked",
          "Programming to vehicle completed on-site",
          "Button and housing repair for existing fobs",
          "Resync lost fob programming",
          "Remote start fob programming available",
          "Most vehicles programmed in under 30 minutes"
        ],
        responseTime: "Same Day",
        image: "/key-fob-replacement.jpg",
        keywords: ["key fob replacement nj", "replace key fob new jersey", "car fob programming nj", "broken key fob nj", "lost key fob service nj", "remote key fob nj"]
      },
      {
        slug: "motorcycle-locksmith",
        name: "Motorcycle Locksmith",
        shortDesc: "Keys, ignition, and locks for motorcycles and powersports.",
        longDesc: "Motorcycles, ATVs, and powersports vehicles need specialized locksmith service — their ignitions and key systems are different from cars and most locksmiths won't touch them. Garden State Locksmith technicians are trained and equipped to handle motorcycle lockouts, lost motorcycle key replacement, ignition cylinder replacement, and fob programming for most major brands including Harley-Davidson, Honda, Yamaha, Kawasaki, Suzuki, BMW, and Ducati.",
        bullets: [
          "Motorcycle lockouts opened without damage",
          "Lost motorcycle key replacement",
          "Ignition cylinder repair and replacement",
          "Key fob programming for late-model bikes",
          "Harley-Davidson, Honda, Yamaha, Kawasaki, BMW and more",
          "Mobile service — we come to your location"
        ],
        responseTime: "Same Day",
        image: "/motorcycle-locksmith-nj.jpg",
        photos: ["/motorcycle-locksmith-nj.jpg"],
        keywords: ["motorcycle locksmith nj", "motorcycle key replacement new jersey", "lost motorcycle keys nj", "motorcycle lockout nj", "Harley Davidson locksmith nj", "bike locksmith nj"]
      }
    ]
  }
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return categories.find(c => c.slug === slug);
}

export function getSubServiceBySlug(categorySlug: string, subServiceSlug: string): SubService | undefined {
  const cat = getCategoryBySlug(categorySlug);
  return cat?.subServices.find(s => s.slug === subServiceSlug);
}
