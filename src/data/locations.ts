export interface LocationProfile {
  archetype:
    | "historic-suburban"
    | "small-borough"
    | "commercial-suburban"
    | "suburban-family"
    | "urban-revitalizing"
    | "commercial-hub"
    | "historic-walkable"
    | "luxury-historic"
    | "victorian-borough"
    | "transit-hub"
    | "industrial-river"
    | "suburban-large"
    | "luxury-exclusive"
    | "pinelands-rural"
    | "dense-urban"
    | "suburban-affluent"
    | "corporate-suburban"
    | "lake-community"
    | "historic-county-seat"
    | "planned-community"
    | "river-borough"
    | "agricultural-rural"
    | "college-town"
    | "college-medical"
    | "college-suburban"
    | "historic-colonial"
    | "historic-arts"
    | "historic-african-american"
    | "historic-resort"
    | "agricultural-italian"
    | "urban-capital";
  vibe: string;
  housingStock: string[];
  landmarks: string[];
  neighborhoods: string[];
  serviceNotes: {
    auto: string;
    residential: string;
    commercial: string;
    emergency: string;
  };
  commonScenarios: string[];
}

export interface Location {
  slug: string;
  name: string;
  county: string;
  state: string;
  zipCodes: string[];
  nearbyLocations: string[];
  population: string;
  description: string;
  profile: LocationProfile;
}

export const locations: Location[] = [
  // ─── CAMDEN COUNTY ───────────────────────────────────────────────────────────
  {
    slug: "audubon", name: "Audubon", county: "Camden County", state: "NJ", zipCodes: ["08106"],
    nearbyLocations: ["haddon-heights", "oaklyn", "mount-ephraim"], population: "8,600",
    description: "A historic borough with a proud, patriotic spirit and a close-knit community.",
    profile: {
      archetype: "historic-suburban",
      vibe: "a tight-knit walkable borough of post-WWI and WWII single-families along tree-lined streets, anchored by Merchant Street and the Patriots' Theater",
      housingStock: ["1920s-30s American Foursquares", "post-WWII Cape Cods", "single-family colonials", "a handful of small apartment buildings near the White Horse Pike"],
      landmarks: ["Patriots' Theater on Merchant Street", "the Audubon Crossings shopping center", "Audubon High School", "the White Horse Pike commercial corridor"],
      neighborhoods: ["West Audubon", "the Merchant Street downtown blocks", "the streets around Audubon Lake"],
      serviceNotes: {
        auto: "Audubon homeowners often park on the street, which makes overnight key lockouts and frozen-trunk situations common in the winter",
        residential: "many Audubon homes still run on their original 1940s-50s mortise locks and skeleton-key cabinets that need careful, non-destructive handling",
        commercial: "the small storefronts along the White Horse Pike and Merchant Street need quiet, after-hours rekeys when staff turn over",
        emergency: "older wood frames around Audubon's century-old front doors mean a botched DIY entry can damage trim that's hard to match"
      },
      commonScenarios: [
        "a homeowner on Edgewood Ave locked out after the morning paper run",
        "a Merchant Street shop owner who needs a fresh set of keys after a manager leaves",
        "a 1928 bungalow whose front-door deadbolt finally seized after 80 years"
      ]
    }
  },
  {
    slug: "audubon-park", name: "Audubon Park", county: "Camden County", state: "NJ", zipCodes: ["08106"],
    nearbyLocations: ["audubon", "oaklyn", "collingswood"], population: "1,000",
    description: "A small, quiet residential community adjacent to Audubon Borough.",
    profile: {
      archetype: "small-borough",
      vibe: "a one-square-block enclave of WWII-era garden apartments and small single-families tucked beside Audubon proper",
      housingStock: ["1940s federal-housing garden apartments", "small post-war single-family rentals"],
      landmarks: ["the original Audubon Park federal housing complex", "neighboring Audubon Crossings retail", "the Black Horse Pike"],
      neighborhoods: ["the central Audubon Park complex"],
      serviceNotes: {
        auto: "narrow shared driveways and tight off-street parking lead to plenty of locked-in-the-car situations",
        residential: "the original 1940s apartment locks here are simple but obscure — most modern hardware stores can't cut a matching key",
        commercial: "small landlord-managed properties need rekeys between tenants more often than most NJ communities",
        emergency: "shared entry vestibules in the older complex mean a single broken key can lock a whole hallway out"
      },
      commonScenarios: [
        "a tenant locked out of a garden apartment on a Sunday evening",
        "a landlord rekeying a unit after a midnight move-out",
        "a broken key snapped in a vestibule lock"
      ]
    }
  },
  {
    slug: "barrington", name: "Barrington", county: "Camden County", state: "NJ", zipCodes: ["08007"],
    nearbyLocations: ["haddon-heights", "runnemede", "lawnside"], population: "6,700",
    description: "A thriving New Jersey borough with a strong local business presence.",
    profile: {
      archetype: "small-borough",
      vibe: "a busy borough straddling the White Horse Pike with mid-century homes, small storefronts, and the Barrington PATCO stop",
      housingStock: ["mid-century single-family ranches", "post-WWII Cape Cods", "older twin homes near Clements Bridge Rd", "small apartment buildings along the Pike"],
      landmarks: ["Barrington PATCO station", "Clements Bridge Road shopping district", "Barrington Plaza", "Avon Field"],
      neighborhoods: ["downtown Barrington", "the Avon section", "the streets near Woodland Avenue"],
      serviceNotes: {
        auto: "PATCO commuters routinely lock keys in cars at the Barrington station park-and-ride",
        residential: "many Clements Bridge area homes have aging Schlage and Kwikset locks from the 1980s ripe for a rekey",
        commercial: "Pike-front businesses turn over keys often and need quick, low-disruption rekeys",
        emergency: "a snapped key in a frozen January deadbolt is a recurring Barrington morning call"
      },
      commonScenarios: [
        "a commuter locked out at the PATCO lot",
        "a small-business owner on the White Horse Pike needing a master rekey",
        "a homeowner on Avon Road whose front lock is grinding"
      ]
    }
  },
  {
    slug: "bellmawr", name: "Bellmawr", county: "Camden County", state: "NJ", zipCodes: ["08031", "08099"],
    nearbyLocations: ["runnemede", "mount-ephraim", "brooklawn"], population: "11,400",
    description: "A bustling town with easy access to Routes 295 and 42.",
    profile: {
      archetype: "commercial-suburban",
      vibe: "a high-traffic borough where Routes 42, 295, and 76 converge — a mix of mid-century homes, warehouse parks, and busy commercial strips",
      housingStock: ["1950s split-levels", "mid-century brick ranches", "townhomes off Browning Road", "garden apartments near the Black Horse Pike"],
      landmarks: ["the Bellmawr Park Mutual Housing community", "Macarthur Boulevard warehouse district", "Bellmawr Plaza", "the Route 42/295 interchange"],
      neighborhoods: ["Bellmawr Park", "Browning Road area", "the warehouse district off Macarthur"],
      serviceNotes: {
        auto: "the I-295 truck stops and Route 42 park-and-rides see frequent car lockouts and dropped fobs",
        residential: "Bellmawr Park's historic 1942 cooperative homes have unique original hardware that needs experienced hands",
        commercial: "warehouses off Macarthur and Creek Road need master-key systems and high-cycle commercial deadbolts",
        emergency: "garden-apartment lockouts spike on weekends and after late-shift schedules at nearby distribution centers"
      },
      commonScenarios: [
        "a trucker locked out of a cab at a Route 295 lot",
        "a Bellmawr Park homeowner needing original-style lock matching",
        "a warehouse manager rekeying after a shift change"
      ]
    }
  },
  {
    slug: "berlin", name: "Berlin", county: "Camden County", state: "NJ", zipCodes: ["08009"],
    nearbyLocations: ["berlin-township", "pine-hill", "gloucester-township"], population: "7,500",
    description: "A growing borough balancing residential living with commercial development.",
    profile: {
      archetype: "suburban-family",
      vibe: "a steadily growing borough centered on the White Horse Pike, with a famous Saturday farmers market and a mix of older homes and newer subdivisions",
      housingStock: ["mid-century ranches and split-levels", "newer 1990s-2000s subdivisions off Cross Keys Road", "small downtown twins", "newer townhouse communities"],
      landmarks: ["the Berlin Farmers Market", "downtown along the Pike", "Berlin Park", "Eastern Regional High School"],
      neighborhoods: ["downtown Berlin", "the Cross Keys Road developments", "the Berlin Park area"],
      serviceNotes: {
        auto: "the Saturday market draws crowds — and a steady weekend stream of car-lockout calls from the gravel lots",
        residential: "newer Cross Keys subdivisions often want smart-lock upgrades while older Pike-front homes need full rekeys",
        commercial: "market vendors and Pike storefronts ask for quick rekeys when seasonal staff rotate",
        emergency: "older borough homes with original deadbolts often jam during the first cold snap"
      },
      commonScenarios: [
        "a market shopper locked out at the gravel lot on a Saturday",
        "a new homeowner in a Cross Keys community wanting a smart-lock install",
        "a Pike-front shop needing emergency lock repair before opening"
      ]
    }
  },
  {
    slug: "berlin-township", name: "Berlin Township", county: "Camden County", state: "NJ", zipCodes: ["08091"],
    nearbyLocations: ["berlin", "voorhees", "pine-hill"], population: "5,800",
    description: "A suburban township offering a mix of parks and neighborhoods.",
    profile: {
      archetype: "suburban-family",
      vibe: "a quiet residential township of West Berlin neighborhoods, parks, and small commercial pockets between Berlin Borough and Voorhees",
      housingStock: ["1960s-70s ranches and bi-levels", "split-level family homes", "newer cul-de-sac developments", "a few smaller apartment complexes"],
      landmarks: ["West Berlin Park", "the West Atco section", "Eastern Regional High School", "Camden County Tech Sicklerville campus nearby"],
      neighborhoods: ["West Berlin", "West Atco", "the Park Drive area"],
      serviceNotes: {
        auto: "long suburban driveways and detached garages mean lots of accidentally locked car doors at home",
        residential: "many 1970s split-levels still have original Schlage F-series knobs that wear out and need replacement",
        commercial: "small office/medical pockets need after-hours rekeys when staff turn over",
        emergency: "snapped keys in frozen morning deadbolts are common in winter months"
      },
      commonScenarios: [
        "a parent locked out after dropping kids at school",
        "a 1970s split-level needing a full deadbolt replacement",
        "a small medical office requesting after-hours rekey"
      ]
    }
  },
  {
    slug: "brooklawn", name: "Brooklawn", county: "Camden County", state: "NJ", zipCodes: ["08030"],
    nearbyLocations: ["gloucester-city", "bellmawr", "westville"], population: "1,900",
    description: "A small borough situated along the Delaware River waterfront.",
    profile: {
      archetype: "river-borough",
      vibe: "a tiny waterfront borough of 1930s-50s rowhomes and twins right where the Delaware River meets Newton Creek",
      housingStock: ["1930s-50s twin rowhomes", "small single-family bungalows", "older brick rowhouses near the river"],
      landmarks: ["the Brooklawn Circle on Route 130", "Newton Creek Park", "the riverside industrial edge", "the Brooklawn Ballpark"],
      neighborhoods: ["the Browning Lane corridor", "the streets around Brooklawn School"],
      serviceNotes: {
        auto: "the busy Brooklawn Circle on Route 130 is a frequent site for fender-bender lockouts and emergency tows that need a locksmith",
        residential: "century-old twin homes here often share original front-door hardware that requires careful, non-destructive lockout work",
        commercial: "small Route 130 storefronts need durable commercial deadbolts that can handle daily cycling",
        emergency: "moisture from the river and creek means lock corrosion is one of the most common emergency calls"
      },
      commonScenarios: [
        "a driver in an accident at the Brooklawn Circle needing emergency vehicle entry",
        "a twin-home owner whose vintage front door lock has corroded shut",
        "a Route 130 storefront needing a heavy-duty commercial lock upgrade"
      ]
    }
  },
  {
    slug: "camden", name: "Camden", county: "Camden County", state: "NJ", zipCodes: ["08102", "08103", "08104", "08105"],
    nearbyLocations: ["pennsauken", "collingswood", "gloucester-city"], population: "71,000",
    description: "The county seat and a major urban center undergoing significant revitalization.",
    profile: {
      archetype: "urban-revitalizing",
      vibe: "the urban county seat — a mix of historic rowhouses, redeveloped waterfront, hospital and university campuses, and dense neighborhoods undergoing major reinvestment",
      housingStock: ["19th-century brick rowhouses", "Federal-style townhomes near the waterfront", "modern apartment towers downtown", "subsidized garden-apartment complexes", "Victorian twins in Cooper-Grant"],
      landmarks: ["Cooper University Hospital", "Rutgers-Camden", "Adventure Aquarium", "Freedom Mortgage Pavilion (BB&T)", "the Walt Whitman House", "Campbell's Field area", "the PATCO Broadway station"],
      neighborhoods: ["Cooper-Grant", "Lanning Square", "Cramer Hill", "Fairview", "Parkside", "East Camden", "Waterfront South"],
      serviceNotes: {
        auto: "lockouts at Cooper Hospital staff lots, the Aquarium garage, and the Pavilion event lots are an everyday occurrence",
        residential: "century-old Cooper-Grant rowhouses often have original mortise locks that need specialized restoration, while newer waterfront condos want smart-lock conversions",
        commercial: "Camden businesses need high-security commercial-grade locks, master-key systems, and panic bars to meet hospital, university, and city code requirements",
        emergency: "Camden's mix of student housing, hospital staff shifts, and 24-hour businesses generates daily emergency lockout calls"
      },
      commonScenarios: [
        "a Cooper Hospital nurse finishing a 12-hour shift locked out of her car at the staff garage",
        "a Cooper-Grant rowhouse owner restoring a 1890s mortise lock",
        "a Rutgers-Camden student locked out of a Cooper Street apartment at 2 AM"
      ]
    }
  },
  {
    slug: "cherry-hill", name: "Cherry Hill", county: "Camden County", state: "NJ", zipCodes: ["08002", "08003", "08034"],
    nearbyLocations: ["haddonfield", "pennsauken", "voorhees"], population: "74,000",
    description: "A major commercial and residential hub in New Jersey.",
    profile: {
      archetype: "commercial-hub",
      vibe: "a sprawling mid-century-built suburb where Route 70 and Route 38 anchor a massive retail and corporate corridor, surrounded by leafy 1960s neighborhoods and modern condo communities",
      housingStock: ["mid-century split-level homes", "post-war ranches in Erlton and Barclay Farms", "modern condominium and townhouse communities", "luxury single-families in Old Orchard and Wexford Leas", "high-rise apartments along Route 70"],
      landmarks: ["Cherry Hill Mall", "Garden State Park", "Cooper River Park", "Kennedy University Hospital", "the Route 70 retail corridor", "the Cherry Hill Public Library", "Croft Farm"],
      neighborhoods: ["Erlton", "Barclay Farms", "Old Orchard", "Downs Farm", "Wexford Leas", "Kresson Woods", "Woodcrest"],
      serviceNotes: {
        auto: "the Mall, Garden State Park lots, and the Route 70 retail strip generate constant car-lockout calls — especially during holiday shopping seasons",
        residential: "Cherry Hill's mid-century homes still commonly run on their original 1960s-70s deadbolts and Kwikset hardware that's overdue for an upgrade or smart-lock conversion",
        commercial: "office parks along Route 70 and Haddonfield Road need master-key systems and quick after-hours rekeys when staff turn over",
        emergency: "high-rise apartments along Marlton Pike often need emergency lockouts when residents step out for the elevator without keys"
      },
      commonScenarios: [
        "a shopper locked out at the Cherry Hill Mall parking deck after a long Saturday",
        "a Wexford Leas townhouse rekey after a tenant move-out",
        "an Erlton ranch with a deadbolt that finally seized after 50 years"
      ]
    }
  },
  {
    slug: "chesilhurst", name: "Chesilhurst", county: "Camden County", state: "NJ", zipCodes: ["08089"],
    nearbyLocations: ["waterford-township", "winslow-township", "berlin"], population: "1,600",
    description: "A small, predominantly residential borough in the eastern part of the county.",
    profile: {
      archetype: "small-borough",
      vibe: "a tiny historic Pinelands-edge borough founded as a Black summer colony — quiet, wooded, and sparsely populated",
      housingStock: ["older small bungalows", "modular ranches on wooded lots", "a handful of newer custom homes"],
      landmarks: ["the historic Chesilhurst founding markers", "the Atlantic City Expressway exit nearby", "the surrounding Pinelands"],
      neighborhoods: ["the central borough blocks"],
      serviceNotes: {
        auto: "long unlit roads mean most car lockouts here happen at home rather than commercial lots",
        residential: "wooded-lot homes often have older detached garage locks that need rekeying after years of weather exposure",
        commercial: "the few small businesses here need durable commercial deadbolts that handle Pinelands humidity",
        emergency: "after-dark lockouts on the borough's quiet roads call for fast, well-equipped mobile response"
      },
      commonScenarios: [
        "a homeowner locked out of a wooded-lot bungalow at night",
        "a detached garage with a corroded lock needing rekey",
        "a small business needing a heavy-duty deadbolt upgrade"
      ]
    }
  },
  {
    slug: "clementon", name: "Clementon", county: "Camden County", state: "NJ", zipCodes: ["08021"],
    nearbyLocations: ["pine-hill", "lindenwold", "somerdale"], population: "4,900",
    description: "A community with a close-knit feel and easy access to major roads.",
    profile: {
      archetype: "suburban-family",
      vibe: "a small lakeside borough best known for the historic Clementon Park amusement grounds, with mid-century homes ringing Clementon Lake",
      housingStock: ["mid-century ranches around the lake", "older lakeside cottages", "newer townhouse developments", "small apartment buildings"],
      landmarks: ["Clementon Park & Splash World", "Clementon Lake", "downtown along the Berlin-Clementon Road", "the Echo Lake area"],
      neighborhoods: ["the Clementon Lake area", "the streets around Clementon Park"],
      serviceNotes: {
        auto: "Clementon Park draws large summer crowds and produces a steady stream of car-lockout calls in the gravel and asphalt lots",
        residential: "1950s-60s lakeside cottages often have original front-door hardware that needs careful non-destructive entry",
        commercial: "small storefronts on Berlin-Clementon Road need fast rekeys between staff",
        emergency: "summer humidity off the lake causes older deadbolts to swell and jam — a frequent emergency call"
      },
      commonScenarios: [
        "a family locked out at the Clementon Park parking lot after a long day at Splash World",
        "a lakefront cottage with a swollen, jammed deadbolt",
        "a Berlin-Clementon Road business needing a fast morning rekey"
      ]
    }
  },
  {
    slug: "collingswood", name: "Collingswood", county: "Camden County", state: "NJ", zipCodes: ["08108"],
    nearbyLocations: ["haddon-township", "oaklyn", "camden"], population: "13,800",
    description: "A historic borough famous for its vibrant downtown and acclaimed restaurants.",
    profile: {
      archetype: "historic-walkable",
      vibe: "a walkable, dry historic borough famed for its Haddon Avenue restaurant row, Saturday farmers' market, Victorian and Foursquare homes, and the PATCO Collingswood station",
      housingStock: ["Victorian twins and singles", "American Foursquares", "1920s-30s bungalows", "a growing number of luxury condos near downtown"],
      landmarks: ["Haddon Avenue restaurant row", "the Collingswood Farmers' Market", "the Scottish Rite Auditorium", "Knight Park", "the Collingswood PATCO station"],
      neighborhoods: ["Parkview", "Knight Park area", "downtown Haddon Ave", "the streets near the PATCO line"],
      serviceNotes: {
        auto: "the Collingswood PATCO lot and the busy Haddon Ave restaurant valet pickups produce regular evening car-lockout calls",
        residential: "Collingswood's Victorians and Foursquares commonly retain their original mortise locks, glass-knob hardware, and skeleton-key cabinets that demand specialty service",
        commercial: "Haddon Avenue's restaurants and shops cycle through staff seasonally and want quick after-hours rekeys with no daytime disruption",
        emergency: "century-old wood doors mean a forced entry is rarely an option — non-destructive techniques are essential"
      },
      commonScenarios: [
        "a diner locked out of a car after a long Haddon Ave dinner",
        "a Victorian-twin owner restoring an 1890s mortise lock with original hardware",
        "a Haddon Ave restaurant needing an early-morning master rekey before service"
      ]
    }
  },
  {
    slug: "gibbsboro", name: "Gibbsboro", county: "Camden County", state: "NJ", zipCodes: ["08026"],
    nearbyLocations: ["voorhees", "lindenwold", "berlin-township"], population: "2,200",
    description: "A small borough known for its scenic trails and rich history.",
    profile: {
      archetype: "small-borough",
      vibe: "a quiet former mill-town borough wrapped around Silver Lake with the historic Lucas Paint Works site and the Camden County Boathouse",
      housingStock: ["older lake-area cottages", "mid-century single-families", "a few newer custom homes"],
      landmarks: ["Silver Lake", "the historic Lucas Paint Works site", "Camden County Boathouse trailhead", "the Borough Hall"],
      neighborhoods: ["Silver Lake area", "the central borough"],
      serviceNotes: {
        auto: "trailhead lots near the lake see hikers locking keys in cars on weekend mornings",
        residential: "older lakefront homes often have original door hardware that benefits from careful rekeying rather than replacement",
        commercial: "the borough's handful of small businesses need durable, weather-tolerant commercial locks",
        emergency: "humidity from Silver Lake causes seasonal lock-jam emergencies in older homes"
      },
      commonScenarios: [
        "a hiker locked out at the boathouse trailhead",
        "a lakefront cottage with a corroded original deadbolt",
        "a Borough Hall area shop needing an after-hours rekey"
      ]
    }
  },
  {
    slug: "gloucester-city", name: "Gloucester City", county: "Camden County", state: "NJ", zipCodes: ["08030"],
    nearbyLocations: ["camden", "brooklawn", "west-deptford"], population: "11,200",
    description: "An industrial and residential city on the Delaware River.",
    profile: {
      archetype: "industrial-river",
      vibe: "a working-class river city of dense Victorian-era rowhouses, the historic Proprietors House, and an active port and industrial waterfront along the Delaware",
      housingStock: ["19th-century brick rowhouses", "Victorian twins along Monmouth Street", "post-war Cape Cods on the south end", "small multi-family conversions"],
      landmarks: ["the Proprietors House (1670)", "Gloucester Marine Terminal", "the Holy Angels Church", "King Street downtown", "Pyne Poynt Park"],
      neighborhoods: ["Monmouth Street area", "the Highland Park section", "the King Street downtown blocks"],
      serviceNotes: {
        auto: "shift workers at the marine terminal and surrounding industrial sites generate daily car-lockout calls",
        residential: "row-house front doors here are often original 1880s-1920s wood with vintage mortise hardware that demands non-destructive entry",
        commercial: "industrial and port-area businesses need heavy-cycle commercial locks, padlocks, and master-key systems that survive salt air and heavy use",
        emergency: "river humidity and salt corrosion are recurring causes of lock failure in Gloucester City's older housing stock"
      },
      commonScenarios: [
        "a port worker on the night shift locked out of a truck cab",
        "a Monmouth Street rowhouse with a 130-year-old front door lock that finally failed",
        "a King Street business needing high-security padlocks for outdoor storage"
      ]
    }
  },
  {
    slug: "gloucester-township", name: "Gloucester Township", county: "Camden County", state: "NJ", zipCodes: ["08012", "08081"],
    nearbyLocations: ["pine-hill", "somerdale", "runnemede"], population: "64,000",
    description: "A large, diverse township with numerous communities and amenities.",
    profile: {
      archetype: "suburban-large",
      vibe: "one of South Jersey's largest townships, sprawling across Blackwood, Erial, Sicklerville, Hilltop, and Glendora — a mix of mid-century neighborhoods, big-box retail along Black Horse Pike, and modern subdivisions",
      housingStock: ["1960s-70s ranches and split-levels in Blackwood", "newer 1990s-2010s subdivisions in Sicklerville", "townhouses in Erial", "garden apartments along the Pike"],
      landmarks: ["the Black Horse Pike retail corridor", "Camden County College Blackwood campus", "Timber Creek Park", "Premium Outlets nearby in Williamstown", "the Atlantic City Expressway exit"],
      neighborhoods: ["Blackwood", "Erial", "Sicklerville", "Hilltop", "Glendora", "the Lakeland section"],
      serviceNotes: {
        auto: "Black Horse Pike retail lots, the college campus, and the AC Expressway park-and-rides all generate steady car-lockout traffic",
        residential: "the township's wide age range of housing means everything from original 1960s deadbolts to brand-new smart locks needs service in the same week",
        commercial: "Pike-front retailers and Camden County College tenants need master-key systems and quick rekeys when staff rotate",
        emergency: "a township this large means we keep multiple Gloucester-Township-zone vans dispatched for fast emergency response"
      },
      commonScenarios: [
        "a college student locked out at the Camden County College Blackwood lot",
        "a Sicklerville subdivision homeowner upgrading a builder-grade lock to a smart deadbolt",
        "an Erial townhouse rekey after a long-term tenant moves out"
      ]
    }
  },
  {
    slug: "haddon-heights", name: "Haddon Heights", county: "Camden County", state: "NJ", zipCodes: ["08035"],
    nearbyLocations: ["haddonfield", "barrington", "audubon"], population: "7,400",
    description: "A picturesque borough with tree-lined streets and historic homes.",
    profile: {
      archetype: "historic-suburban",
      vibe: "a tree-canopy borough of late-Victorian and Foursquare homes around Station Avenue, with the historic Haddon Heights train station and a beloved walkable downtown",
      housingStock: ["late-Victorian singles", "American Foursquares", "1920s-30s colonials", "a handful of newer infill homes"],
      landmarks: ["Station Avenue downtown", "the Haddon Heights train station building", "Hoff's Bakery", "Atkinson Memorial Park", "the historic 7th Avenue blocks"],
      neighborhoods: ["the Station Avenue downtown", "the 7th Avenue historic blocks", "the Park Drive area"],
      serviceNotes: {
        auto: "Station Avenue's compact angled parking and the small commuter lot nearby produce regular car-lockout calls",
        residential: "century-old Haddon Heights homes commonly retain their original mortise locks, beveled-glass doors, and skeleton-key hardware needing specialty service",
        commercial: "the small Station Ave shops cycle staff seasonally and need fast morning rekeys",
        emergency: "the borough's wood-frame doors mean non-destructive entry is essential — forced entry damages historic trim that's hard to replace"
      },
      commonScenarios: [
        "a Station Avenue diner locked out after a long brunch",
        "a 1905 Foursquare homeowner restoring an original mortise lock",
        "a Hoff's-area business needing an early-morning rekey before opening"
      ]
    }
  },
  {
    slug: "haddon-township", name: "Haddon Township", county: "Camden County", state: "NJ", zipCodes: ["08108"],
    nearbyLocations: ["collingswood", "haddonfield", "oaklyn"], population: "14,600",
    description: "A thriving community bordering several historic boroughs.",
    profile: {
      archetype: "historic-walkable",
      vibe: "a walkable township of Westmont and Audubon-adjacent neighborhoods centered on Haddon Avenue, with PATCO access at the Westmont station and a strong mix of 1920s twins and modern infill",
      housingStock: ["1920s-30s twin homes", "Cape Cods and bungalows", "Foursquares around Westmont", "newer infill colonials", "small condo conversions near the PATCO line"],
      landmarks: ["Westmont PATCO station", "Haddon Avenue Westmont business district", "Crystal Lake Pool", "Saddler's Woods", "the Westmont Theater"],
      neighborhoods: ["Westmont", "Haddon Hills", "the streets around Crystal Lake"],
      serviceNotes: {
        auto: "Westmont PATCO commuters routinely lock keys in cars at the station lot",
        residential: "Westmont's 1920s twins frequently have shared front-door entries with original hardware needing careful work",
        commercial: "Haddon Avenue's mix of restaurants and small shops asks for quick after-hours rekeys",
        emergency: "twin-home shared entries mean a single broken key can lock out two families at once"
      },
      commonScenarios: [
        "a commuter at the Westmont PATCO lot needing emergency car entry",
        "a 1925 twin home owner restoring shared-entry hardware",
        "a Haddon Ave Westmont shop needing a master rekey"
      ]
    }
  },
  {
    slug: "haddonfield", name: "Haddonfield", county: "Camden County", state: "NJ", zipCodes: ["08033"],
    nearbyLocations: ["cherry-hill", "haddon-township", "haddon-heights"], population: "12,300",
    description: "A historic borough known for its colonial architecture and upscale downtown.",
    profile: {
      archetype: "luxury-historic",
      vibe: "an upscale, dry colonial borough of meticulously preserved 18th and 19th century homes — Kings Highway shopping, the Indian King Tavern, top-ranked schools, and one of the region's most prized historic districts",
      housingStock: ["18th-century colonials", "Federal-style townhouses on Kings Highway", "Victorian singles", "1920s-30s revival colonials", "luxury custom-built infill homes"],
      landmarks: ["Indian King Tavern Museum", "Kings Highway shopping district", "Tatum Park", "the Hadrosaurus statue", "the Haddonfield PATCO station", "the Greenfield Hall"],
      neighborhoods: ["the Kings Highway historic district", "Tatum Estates", "the Estaugh", "the Hopkins Lane area"],
      serviceNotes: {
        auto: "Kings Highway's diagonal parking, the PATCO station, and the popular First Friday events produce regular evening car-lockout calls",
        residential: "Haddonfield's pre-1900 homes commonly retain their original mortise locks, brass hardware, and skeleton-key cabinets — these demand restoration-level locksmith expertise, not replacement",
        commercial: "Kings Highway boutiques and professional offices want discreet, after-hours rekeys with no disruption to daytime business",
        emergency: "historic wood doors and original trim mean non-destructive entry isn't a preference — it's a requirement"
      },
      commonScenarios: [
        "a Kings Highway shopper locked out after First Friday",
        "an 1820s colonial homeowner restoring original mortise hardware",
        "a professional office on Tanner Street needing a discreet after-hours master rekey"
      ]
    }
  },
  {
    slug: "hi-nella", name: "Hi-Nella", county: "Camden County", state: "NJ", zipCodes: ["08083"],
    nearbyLocations: ["somerdale", "stratford", "magnolia"], population: "800",
    description: "One of the smallest boroughs in the county, offering a quiet residential setting.",
    profile: {
      archetype: "small-borough",
      vibe: "a one-square-block residential pocket of post-war ranches and small singles tucked between Somerdale and Stratford",
      housingStock: ["1950s ranches and Cape Cods", "a few small single-family infill homes"],
      landmarks: ["the central residential blocks", "the borough's tiny municipal building", "neighboring Stratford and Somerdale commercial strips"],
      neighborhoods: ["the central borough blocks"],
      serviceNotes: {
        auto: "long suburban driveways mean most car lockouts here happen at home",
        residential: "Hi-Nella's mid-century homes often still run on original Schlage and Kwikset hardware ready for upgrade",
        commercial: "the borough has very few commercial properties, so most service here is residential",
        emergency: "tight-knit borough means our techs know the streets and arrive quickly"
      },
      commonScenarios: [
        "a homeowner locked out after taking out the trash",
        "a 1950s ranch needing a full deadbolt replacement",
        "a borough resident requesting a same-day rekey after a roommate move-out"
      ]
    }
  },
  {
    slug: "laurel-springs", name: "Laurel Springs", county: "Camden County", state: "NJ", zipCodes: ["08021"],
    nearbyLocations: ["lindenwold", "stratford", "somerdale"], population: "1,900",
    description: "A small borough once celebrated as a resort town with natural springs.",
    profile: {
      archetype: "historic-resort",
      vibe: "a tiny former Victorian resort borough where Walt Whitman summered — winding streets, springs, and historic cottages tucked away from the main roads",
      housingStock: ["Victorian-era summer cottages", "1920s craftsman bungalows", "mid-century ranches", "a few newer infill homes"],
      landmarks: ["the Walt Whitman cottage area", "Crystal Lake", "the historic Atco Avenue blocks", "Laurel Mill Park"],
      neighborhoods: ["the Crystal Lake area", "the Atco Avenue historic blocks"],
      serviceNotes: {
        auto: "tight winding streets make residential lockouts more common than commercial-lot calls here",
        residential: "Victorian-era cottages frequently retain original mortise locks and porcelain knobs that need restoration-level care",
        commercial: "the borough's few storefronts need durable but historically appropriate hardware",
        emergency: "century-old wood doors here cannot tolerate forced entry — non-destructive techniques are mandatory"
      },
      commonScenarios: [
        "a Crystal Lake area homeowner locked out late at night",
        "a Victorian cottage needing original mortise lock restoration",
        "a snapped key in an original Atco Avenue front door lock"
      ]
    }
  },
  {
    slug: "lawnside", name: "Lawnside", county: "Camden County", state: "NJ", zipCodes: ["08045"],
    nearbyLocations: ["barrington", "haddonfield", "magnolia"], population: "2,900",
    description: "A historic borough with a rich African American heritage.",
    profile: {
      archetype: "historic-african-american",
      vibe: "the only independently incorporated historically Black community in the northern US — a proud borough founded by free African Americans and freedom-seekers, with the Peter Mott House and deep Underground Railroad history",
      housingStock: ["historic 19th-century single-families", "post-war Cape Cods", "mid-century ranches", "newer infill colonials"],
      landmarks: ["the Peter Mott House (an Underground Railroad station)", "Mt. Pisgah AME Church", "the Lawnside Historical Society", "Warwick Road shops"],
      neighborhoods: ["the historic central blocks around Mott Street", "the Warwick Road area"],
      serviceNotes: {
        auto: "the small commercial corridor along Warwick Road sees occasional car-lockout calls",
        residential: "Lawnside's century-old historic homes often retain original mortise hardware that benefits from preservation-grade locksmith work",
        commercial: "the borough's small businesses want reliable, durable commercial locks they can count on",
        emergency: "older wood doors here demand careful, non-destructive entry to preserve historic trim and frames"
      },
      commonScenarios: [
        "a homeowner near Mott Street locked out in the evening",
        "a historic single-family needing original mortise lock restoration",
        "a Warwick Road business needing a dependable commercial deadbolt"
      ]
    }
  },
  {
    slug: "lindenwold", name: "Lindenwold", county: "Camden County", state: "NJ", zipCodes: ["08021"],
    nearbyLocations: ["clementon", "laurel-springs", "gibbsboro"], population: "21,000",
    description: "A diverse borough serving as a major transit hub with the PATCO station.",
    profile: {
      archetype: "transit-hub",
      vibe: "a busy transit-anchored borough — the eastern terminus of the PATCO Speedline, with massive park-and-ride lots, large garden-apartment complexes, and a diverse, fast-cycling tenant base",
      housingStock: ["large garden-apartment complexes", "1960s-70s townhouses", "post-war single-family ranches", "modern condo conversions near the station"],
      landmarks: ["Lindenwold PATCO terminus station", "the massive PATCO park-and-ride", "Lindenwold High School", "the White Horse Pike retail corridor"],
      neighborhoods: ["the PATCO station area", "the White Horse Pike corridor", "the apartment complexes off Berlin Road"],
      serviceNotes: {
        auto: "the Lindenwold PATCO park-and-ride is one of South Jersey's biggest — and one of our busiest spots for commuter car lockouts",
        residential: "high tenant turnover in Lindenwold's garden apartments means rekeys between renters are a near-daily request",
        commercial: "Pike storefronts and apartment-complex management offices need fast, low-disruption rekeys at all hours",
        emergency: "with so many renters and commuters, lockouts here happen at every hour of the day and night"
      },
      commonScenarios: [
        "a PATCO commuter locked out at the terminus station after a long workday",
        "a property manager rekeying a garden-apartment unit between tenants",
        "a Pike storefront needing an emergency lock repair before opening"
      ]
    }
  },
  {
    slug: "magnolia", name: "Magnolia", county: "Camden County", state: "NJ", zipCodes: ["08049"],
    nearbyLocations: ["somerdale", "lawnside", "barrington"], population: "4,300",
    description: "A residential borough with active local organizations and businesses.",
    profile: {
      archetype: "small-borough",
      vibe: "a quiet residential borough of post-war single-families and small commercial pockets along Evesham Avenue and Warwick Road",
      housingStock: ["post-war Cape Cods and ranches", "1950s-60s single-families", "small twin homes", "a few newer infill colonials"],
      landmarks: ["Magnolia Park", "Evesham Avenue", "Warwick Road business strip", "Magnolia School"],
      neighborhoods: ["the Evesham Avenue blocks", "the Magnolia Park area"],
      serviceNotes: {
        auto: "neighborhood streets here see most car lockouts at home rather than in commercial lots",
        residential: "1950s-era Cape Cods commonly need first-time rekeys from their original Schlage or Kwikset hardware",
        commercial: "Warwick Road and Evesham Ave shops need fast morning rekeys when staff rotate",
        emergency: "winter cold snaps cause original 1950s deadbolts here to seize — a recurring emergency"
      },
      commonScenarios: [
        "a homeowner locked out walking the dog",
        "a Cape Cod needing a full Schlage rekey after a divorce",
        "a Warwick Road shop with a frozen January deadbolt"
      ]
    }
  },
  {
    slug: "merchantville", name: "Merchantville", county: "Camden County", state: "NJ", zipCodes: ["08109"],
    nearbyLocations: ["pennsauken", "cherry-hill", "camden"], population: "3,800",
    description: "A small, historic borough entirely surrounded by Pennsauken Township.",
    profile: {
      archetype: "victorian-borough",
      vibe: "a tiny historic Victorian borough completely surrounded by Pennsauken — known for its grand Lippincott-era mansions, leafy streets, and a tight walkable downtown",
      housingStock: ["Victorian mansions", "Queen Anne and Stick-style singles", "American Foursquares", "1920s twins"],
      landmarks: ["the Lippincott Mansion", "Centre Street downtown", "the Merchantville Country Club nearby", "the Cattell House"],
      neighborhoods: ["the Centre Street historic district", "the Park Avenue mansion blocks"],
      serviceNotes: {
        auto: "Centre Street's compact downtown parking generates most of the borough's car-lockout calls",
        residential: "Merchantville's grand Victorians commonly retain original brass mortise locks and elaborate hardware that demands restoration-grade locksmith expertise",
        commercial: "Centre Street shops want quiet, after-hours rekeys with no impact on daytime walk-ins",
        emergency: "century-old beveled-glass front doors here are irreplaceable — non-destructive entry is mandatory"
      },
      commonScenarios: [
        "a Centre Street diner locked out of a car after dinner",
        "an 1880s Queen Anne mansion needing original mortise lock restoration",
        "a Park Avenue homeowner upgrading historic hardware while preserving original brass plates"
      ]
    }
  },
  {
    slug: "mount-ephraim", name: "Mount Ephraim", county: "Camden County", state: "NJ", zipCodes: ["08059"],
    nearbyLocations: ["audubon", "bellmawr", "haddon-heights"], population: "4,600",
    description: "A compact borough offering easy access to major transportation routes.",
    profile: {
      archetype: "small-borough",
      vibe: "a small Black Horse Pike borough with mid-century homes, easy I-295/76 access, and a steady commuter base",
      housingStock: ["1950s-60s ranches and Cape Cods", "post-war single-families", "small twin homes", "garden apartments along the Pike"],
      landmarks: ["Black Horse Pike commercial strip", "Mount Ephraim High School", "Mary Bray Park"],
      neighborhoods: ["the central borough blocks", "the Bray Avenue area"],
      serviceNotes: {
        auto: "Black Horse Pike commuters and the I-295 commuter ramps generate steady car-lockout calls",
        residential: "mid-century homes here often need rekeys after decades on original hardware",
        commercial: "Pike-front storefronts need quick rekeys between staff and reliable commercial deadbolts",
        emergency: "twin homes with shared entries are a frequent source of broken-key calls"
      },
      commonScenarios: [
        "a commuter locked out at a Pike commercial lot",
        "a Cape Cod needing a full Schlage rekey",
        "a twin-home shared entry with a snapped key"
      ]
    }
  },
  {
    slug: "oaklyn", name: "Oaklyn", county: "Camden County", state: "NJ", zipCodes: ["08107"],
    nearbyLocations: ["collingswood", "audubon", "haddon-township"], population: "3,900",
    description: "A tight-knit community featuring a vibrant local business district.",
    profile: {
      archetype: "small-borough",
      vibe: "a walkable, tight-knit borough of 1920s twins and bungalows with a small but growing West Clinton Avenue business district near the Newton Lake Park trail",
      housingStock: ["1920s-30s twin homes", "American Foursquares", "small craftsman bungalows", "a few newer infill colonials"],
      landmarks: ["West Clinton Avenue business district", "Newton Lake Park", "Oaklyn Public School"],
      neighborhoods: ["the West Clinton Avenue blocks", "the Newton Lake Park area"],
      serviceNotes: {
        auto: "compact diagonal parking on West Clinton Ave generates regular car-lockout calls during dinner hours",
        residential: "Oaklyn's 1920s twins commonly retain original front-door mortise locks needing skilled service",
        commercial: "West Clinton Ave shops want quick, after-hours rekeys with no daytime disruption",
        emergency: "shared entries on twin homes mean a single broken key can lock out two families"
      },
      commonScenarios: [
        "a West Clinton Ave diner locked out of a car after dinner",
        "an Oaklyn twin home with a 1925 mortise lock that finally seized",
        "a small business needing a fast morning rekey"
      ]
    }
  },
  {
    slug: "pennsauken", name: "Pennsauken", county: "Camden County", state: "NJ", zipCodes: ["08109", "08110"],
    nearbyLocations: ["merchantville", "cherry-hill", "camden"], population: "37,000",
    description: "A large township with diverse neighborhoods and significant commercial areas.",
    profile: {
      archetype: "commercial-hub",
      vibe: "a large diverse township spanning the Airport Circle, the Tonnelle Avenue commercial corridor, the Pennsauken Mart, and major industrial parks — bordered by Camden, Merchantville, and Cherry Hill",
      housingStock: ["mid-century single-families", "1950s-60s split-levels", "garden apartments along Route 130", "townhouses near the Mart", "older twins in the Delair section"],
      landmarks: ["Pennsauken Mart", "Airport Circle on Route 130", "the Tonnelle Avenue industrial corridor", "Pennsauken Country Club", "the Pennsauken/Merchantville train station"],
      neighborhoods: ["Delair", "Bethel", "Fairview", "the Mart area", "the Route 130 corridor"],
      serviceNotes: {
        auto: "Airport Circle, the Mart parking lots, and the Route 130 commercial strip generate constant car-lockout calls — including for tractor-trailers at the industrial parks",
        residential: "Pennsauken's mix of housing means we see everything from 1950s split-level rekeys to brand-new smart-lock installs in the same week",
        commercial: "Tonnelle Avenue industrial buildings need master-key systems, panic bars, and high-cycle commercial locks built for warehouse use",
        emergency: "the township's size means we keep multiple Pennsauken-zone vans dispatched to maintain fast local dispatch"
      },
      commonScenarios: [
        "a Mart shopper locked out in the parking lot",
        "a Tonnelle Avenue warehouse rekey after a shift change",
        "a Delair-area split-level homeowner upgrading from original 1960s deadbolts to a smart lock"
      ]
    }
  },
  {
    slug: "pine-hill", name: "Pine Hill", county: "Camden County", state: "NJ", zipCodes: ["08021"],
    nearbyLocations: ["clementon", "berlin", "gloucester-township"], population: "10,700",
    description: "A borough offering scenic views and a mix of housing options.",
    profile: {
      archetype: "suburban-family",
      vibe: "a hilly residential borough wrapped around the Pine Hill Golf Club, with mid-century ranches, newer subdivisions, and good views from the high blocks",
      housingStock: ["1960s-70s ranches and split-levels", "newer 1990s-2000s subdivisions", "townhouses on the higher blocks", "garden apartments off Erial Road"],
      landmarks: ["Pine Hill Golf Club", "the Erial Road commercial strip", "Overbrook Senior High School", "Branch Avenue downtown"],
      neighborhoods: ["the high blocks above the golf club", "the Branch Avenue area", "the Erial Road corridor"],
      serviceNotes: {
        auto: "the golf club lot and the Erial Road strip see regular weekend car-lockout calls",
        residential: "long suburban driveways with detached garages mean lots of locked-out-while-grilling situations",
        commercial: "Erial Road businesses want quick rekeys when staff rotate",
        emergency: "older 1960s ranches commonly need emergency deadbolt repair after winter freeze cycles"
      },
      commonScenarios: [
        "a golfer locked out at the Pine Hill Golf Club lot",
        "a Branch Avenue ranch with a deadbolt that finally jammed",
        "an Erial Road shop needing a fast morning rekey"
      ]
    }
  },
  {
    slug: "pine-valley", name: "Pine Valley", county: "Camden County", state: "NJ", zipCodes: ["08021"],
    nearbyLocations: ["pine-hill", "clementon", "berlin"], population: "10",
    description: "A unique borough centered around a world-renowned private golf course.",
    profile: {
      archetype: "luxury-exclusive",
      vibe: "a tiny, ultra-private borough built almost entirely around the world-renowned Pine Valley Golf Club — discreet, quiet, and known for the highest standards in everything",
      housingStock: ["a small number of private cottages and member residences on club grounds"],
      landmarks: ["Pine Valley Golf Club (consistently ranked the #1 course in the world)", "the club's entry gates"],
      neighborhoods: ["the club grounds"],
      serviceNotes: {
        auto: "occasional member and guest car-lockout calls at the club entrance and lots",
        residential: "the small number of on-site residences expect discreet, white-glove locksmith service",
        commercial: "the club's facilities require high-security commercial-grade locks, master-key systems, and absolute discretion",
        emergency: "when something goes wrong here, response speed and professionalism matter as much as the work itself"
      },
      commonScenarios: [
        "a member or guest locked out of a vehicle at the club lot",
        "a discreet rekey of a club-grounds residence",
        "a high-security lock upgrade for a club facility"
      ]
    }
  },
  {
    slug: "runnemede", name: "Runnemede", county: "Camden County", state: "NJ", zipCodes: ["08078"],
    nearbyLocations: ["bellmawr", "gloucester-township", "barrington"], population: "8,300",
    description: "A busy borough with strong community roots and local commerce.",
    profile: {
      archetype: "commercial-suburban",
      vibe: "a busy Black Horse Pike borough with mid-century homes, the Stewart's Drive-In, and a long-running commercial corridor",
      housingStock: ["1950s-60s ranches and Cape Cods", "post-war single-families", "small twin homes", "garden apartments along the Pike"],
      landmarks: ["Stewart's Drive-In on the Pike", "Runnemede Park", "Holy Child Catholic School", "Black Horse Pike commercial strip"],
      neighborhoods: ["the Pike commercial blocks", "the Runnemede Park area", "the streets behind Holy Child"],
      serviceNotes: {
        auto: "Pike-front retail and Stewart's parking generate steady car-lockout calls, especially in summer",
        residential: "1950s-era Cape Cods commonly run on original Schlage hardware that's overdue for first rekey",
        commercial: "Pike storefronts need fast rekeys when staff rotate and reliable commercial deadbolts",
        emergency: "winter cold causes original deadbolts here to bind — a frequent emergency call"
      },
      commonScenarios: [
        "a customer locked out at the Stewart's lot on a summer night",
        "a Cape Cod needing a full Schlage rekey",
        "a Pike-front shop with a frozen morning deadbolt"
      ]
    }
  },
  {
    slug: "somerdale", name: "Somerdale", county: "Camden County", state: "NJ", zipCodes: ["08083"],
    nearbyLocations: ["magnolia", "hi-nella", "stratford"], population: "5,400",
    description: "A residential community with active local organizations and businesses.",
    profile: {
      archetype: "small-borough",
      vibe: "a quiet bedroom borough of post-war ranches and Capes, with a small Warwick Road business district and a tight-knit community",
      housingStock: ["1950s-60s ranches and Cape Cods", "post-war single-families", "small twin homes"],
      landmarks: ["Warwick Road business strip", "Somerdale Park School", "Roberts Pond Park"],
      neighborhoods: ["the Warwick Road area", "the streets near Somerdale Park"],
      serviceNotes: {
        auto: "most car lockouts here are residential rather than commercial-lot calls",
        residential: "Somerdale's 1950s homes commonly need first-time rekeys after decades on original hardware",
        commercial: "Warwick Road shops want quick rekeys between staff",
        emergency: "older deadbolts here often jam during winter cold snaps"
      },
      commonScenarios: [
        "a homeowner locked out walking the dog",
        "a Cape Cod needing a full deadbolt replacement",
        "a Warwick Road shop with a stuck morning lock"
      ]
    }
  },
  {
    slug: "stratford", name: "Stratford", county: "Camden County", state: "NJ", zipCodes: ["08084"],
    nearbyLocations: ["somerdale", "laurel-springs", "hi-nella"], population: "6,900",
    description: "A suburban borough home to Rowan University's School of Osteopathic Medicine.",
    profile: {
      archetype: "college-medical",
      vibe: "a suburban borough anchored by Rowan University's School of Osteopathic Medicine and the Jefferson Stratford Hospital — a steady stream of medical students, residents, and hospital staff",
      housingStock: ["mid-century single-families", "newer townhouses near the medical campus", "garden apartments leased by students and residents", "1950s-60s ranches"],
      landmarks: ["Rowan University SOM campus", "Jefferson Stratford Hospital", "the PATCO Stratford station nearby in Lindenwold", "Laurel Mill Park"],
      neighborhoods: ["the medical campus area", "the streets near Jefferson Hospital", "the Laurel Mill area"],
      serviceNotes: {
        auto: "hospital and medical-school parking lots generate constant lockout calls — including from overnight residents and shift workers",
        residential: "high turnover among medical students and residents means frequent rekey requests in apartments and shared-housing units",
        commercial: "medical office and hospital-adjacent businesses need master-key systems and high-security commercial locks",
        emergency: "daily hospital staff schedules mean lockout calls happen at every hour"
      },
      commonScenarios: [
        "a medical resident locked out at the SOM campus lot after a 14-hour shift",
        "a student-rental rekey when a new cohort moves in",
        "a hospital-adjacent office needing a master-key system upgrade"
      ]
    }
  },
  {
    slug: "tavistock", name: "Tavistock", county: "Camden County", state: "NJ", zipCodes: ["08033"],
    nearbyLocations: ["haddonfield", "cherry-hill", "voorhees"], population: "5",
    description: "A tiny borough primarily consisting of the historic Tavistock Country Club.",
    profile: {
      archetype: "luxury-exclusive",
      vibe: "a famously tiny borough — just a handful of residents — built almost entirely around the historic Tavistock Country Club, founded in 1921",
      housingStock: ["a small number of private member residences on club grounds"],
      landmarks: ["Tavistock Country Club", "the club's historic clubhouse and grounds"],
      neighborhoods: ["the club grounds"],
      serviceNotes: {
        auto: "occasional member and guest car-lockout calls at the club lot",
        residential: "the few on-site residences expect discreet, white-glove service",
        commercial: "the club's facilities need high-security commercial-grade locks and master-key systems",
        emergency: "discretion and speed matter equally for any service call here"
      },
      commonScenarios: [
        "a member locked out of a car at the club lot",
        "a discreet rekey of a club-grounds residence",
        "a high-security upgrade for a club facility"
      ]
    }
  },
  {
    slug: "voorhees-township", name: "Voorhees Township", county: "Camden County", state: "NJ", zipCodes: ["08043"],
    nearbyLocations: ["cherry-hill", "gibbsboro", "berlin-township"], population: "30,000",
    description: "A prominent suburban township with extensive retail and residential developments.",
    profile: {
      archetype: "suburban-affluent",
      vibe: "a prominent affluent suburb of modern subdivisions, the Voorhees Town Center (former Echelon Mall), and the Flyers Skate Zone — home to many corporate professionals and physicians",
      housingStock: ["1990s-2010s luxury subdivisions", "modern townhouse communities", "1980s split-levels", "newer custom-built single-families"],
      landmarks: ["Voorhees Town Center", "Flyers Skate Zone (Eagles practice facility nearby)", "Centennial Lake", "the Virtua Voorhees Hospital", "Echelon Glen"],
      neighborhoods: ["Echelon Glen", "Sturbridge Lakes", "Lions Head", "the Centennial Lake area", "Hidden Valley"],
      serviceNotes: {
        auto: "the Town Center, Skate Zone, and Virtua Hospital lots all generate steady car-lockout calls",
        residential: "Voorhees subdivisions overwhelmingly want smart-lock and access-control upgrades over basic rekeys",
        commercial: "corporate offices in Voorhees need master-key systems, access-control hardware, and high-security commercial deadbolts",
        emergency: "modern smart locks sometimes fail in unexpected ways — battery, firmware, or pairing issues that need an experienced locksmith"
      },
      commonScenarios: [
        "a Town Center shopper locked out after a long Saturday",
        "an Echelon Glen homeowner upgrading from a builder-grade deadbolt to a smart lock",
        "a corporate office in Voorhees needing access-control card programming"
      ]
    }
  },
  {
    slug: "waterford-township", name: "Waterford Township", county: "Camden County", state: "NJ", zipCodes: ["08004"],
    nearbyLocations: ["chesilhurst", "winslow-township", "berlin"], population: "10,600",
    description: "A large township with rural character and access to the Pine Barrens.",
    profile: {
      archetype: "pinelands-rural",
      vibe: "a large rural township along the edge of the Pinelands National Reserve — wooded lots, the Atsion Lake area, and a quiet, spread-out residential character",
      housingStock: ["wooded-lot single-families", "modular and ranch homes on large parcels", "older Atco-area homes", "newer custom builds"],
      landmarks: ["Atsion Lake recreation area", "Wharton State Forest edges", "the historic Atco Avenue blocks", "Atco Speedway"],
      neighborhoods: ["Atco", "the Atsion Lake area", "the wooded southern parcels"],
      serviceNotes: {
        auto: "Atco Speedway events and Atsion Lake recreation lots see weekend car-lockout calls",
        residential: "wooded-lot homes here often have detached garage and outbuilding locks that need rekeying after years of weather exposure",
        commercial: "the small Atco commercial pocket needs durable, weather-resistant commercial hardware",
        emergency: "long unlit roads mean fast, well-equipped mobile response is essential for after-dark lockouts"
      },
      commonScenarios: [
        "a Speedway visitor locked out at the Atco lot on race night",
        "a wooded-lot homeowner with a corroded detached-garage lock",
        "an Atsion-area cabin needing a fresh rekey after winter"
      ]
    }
  },
  {
    slug: "winslow-township", name: "Winslow Township", county: "Camden County", state: "NJ", zipCodes: ["08037", "08081", "08095"],
    nearbyLocations: ["waterford-township", "chesilhurst", "hammonton"], population: "39,000",
    description: "The largest township in the county, blending suburban developments with agricultural land.",
    profile: {
      archetype: "suburban-large",
      vibe: "the county's largest township — a sprawling mix of Sicklerville and Cedar Brook suburban subdivisions, working farmland, and Pinelands-adjacent rural pockets",
      housingStock: ["1990s-2010s subdivisions in Sicklerville", "older Berlin-Cross Keys ranches", "rural single-families on large parcels", "newer townhouses"],
      landmarks: ["Sicklerville Road retail corridor", "Camden County Boathouse", "the Atlantic City Expressway exits", "Premium Outlets nearby in Williamstown"],
      neighborhoods: ["Sicklerville", "Cedar Brook", "Tansboro", "the Berlin-Cross Keys area"],
      serviceNotes: {
        auto: "Sicklerville Road retail lots and the Atlantic City Expressway park-and-rides generate steady car-lockout calls",
        residential: "the township's wide age range of housing means every kind of locksmith service in a single week",
        commercial: "Sicklerville Road retailers need master-key systems and high-cycle commercial locks",
        emergency: "Winslow's size means we keep multiple zone vans dispatched to maintain fast response across all sub-areas"
      },
      commonScenarios: [
        "a shopper locked out at a Sicklerville Road retail lot",
        "a newer Sicklerville subdivision home upgrading to a smart lock",
        "a rural Tansboro property needing detached-outbuilding rekeys"
      ]
    }
  },
  {
    slug: "woodlynne", name: "Woodlynne", county: "Camden County", state: "NJ", zipCodes: ["08107"],
    nearbyLocations: ["collingswood", "camden", "oaklyn"], population: "2,900",
    description: "A small, densely populated borough bordering Camden.",
    profile: {
      archetype: "dense-urban",
      vibe: "a tiny but densely populated borough wedged between Camden and Collingswood — an immigrant-rich community with closely packed late-19th-century twins and rowhouses",
      housingStock: ["late-1800s brick rowhouses", "Victorian-era twins", "small multi-family conversions", "older 1920s singles"],
      landmarks: ["the dense central residential blocks", "the borough's compact downtown corner", "neighboring Collingswood and Camden commercial strips"],
      neighborhoods: ["the central rowhouse blocks"],
      serviceNotes: {
        auto: "tight on-street parking and high density mean residential car-lockouts are the norm",
        residential: "Woodlynne's century-old rowhouses commonly retain original mortise locks needing skilled, non-destructive service",
        commercial: "the few small businesses here need durable commercial deadbolts that handle constant cycling",
        emergency: "shared entries between adjacent rowhouses mean a single broken key can lock multiple families out"
      },
      commonScenarios: [
        "a tenant locked out of a rowhouse on a Sunday evening",
        "a 1890s twin with a snapped key in an original mortise lock",
        "a corner shop needing an emergency lock repair"
      ]
    }
  },
  {
    slug: "voorhees", name: "Voorhees", county: "Camden County", state: "NJ", zipCodes: ["08043"],
    nearbyLocations: ["cherry-hill", "gibbsboro", "marlton"], population: "30,000",
    description: "A prominent suburban area with excellent amenities and neighborhoods.",
    profile: {
      archetype: "suburban-affluent",
      vibe: "an affluent suburb known for its modern subdivisions, Town Center retail, the Flyers Skate Zone, and a strong professional and physician community",
      housingStock: ["1990s-2010s luxury subdivisions", "modern townhouse communities", "1980s split-levels", "newer custom-built homes"],
      landmarks: ["Voorhees Town Center", "Flyers Skate Zone", "Centennial Lake", "Virtua Voorhees Hospital", "Echelon Glen"],
      neighborhoods: ["Echelon Glen", "Sturbridge Lakes", "Lions Head", "the Centennial Lake area"],
      serviceNotes: {
        auto: "the Town Center and hospital lots generate constant car-lockout calls",
        residential: "Voorhees homeowners overwhelmingly want smart-lock and access-control upgrades over simple rekeys",
        commercial: "Voorhees offices need master-key systems and access-control hardware",
        emergency: "smart-lock failures (battery, firmware, pairing) are an increasingly common emergency call here"
      },
      commonScenarios: [
        "a Town Center shopper locked out on a Saturday afternoon",
        "an Echelon Glen home upgrading to a smart deadbolt",
        "a corporate office requesting access-control programming"
      ]
    }
  },
  {
    slug: "marlton", name: "Marlton", county: "Burlington County", state: "NJ", zipCodes: ["08053"],
    nearbyLocations: ["cherry-hill", "voorhees", "medford"], population: "10,000",
    description: "A thriving community with a strong commercial center in Burlington County.",
    profile: {
      archetype: "commercial-hub",
      vibe: "the heart of Evesham Township — a busy commercial center where Routes 70 and 73 meet, anchored by the Promenade at Sagemore and surrounded by modern subdivisions",
      housingStock: ["1980s-90s subdivisions", "modern townhouses", "newer luxury single-families", "garden apartments along Route 70"],
      landmarks: ["the Promenade at Sagemore", "the Route 70/73 intersection", "Marlton Greene", "Sagemore Park", "the Evesham municipal complex"],
      neighborhoods: ["Sagemore", "Kings Grant", "Briarwood", "the Greentree area"],
      serviceNotes: {
        auto: "the Promenade and the Route 70 retail lots generate constant car-lockout calls — especially during weekend shopping peaks",
        residential: "Marlton's modern subdivisions overwhelmingly want smart-lock and access-control upgrades",
        commercial: "Sagemore retailers and Route 73 office tenants need master-key systems and quick after-hours rekeys",
        emergency: "smart-lock failures are an increasingly common emergency call in Marlton's newer homes"
      },
      commonScenarios: [
        "a Promenade shopper locked out after dinner at Sagemore",
        "a Kings Grant home upgrading to a smart deadbolt with keypad entry",
        "a Route 73 office needing master-key reprogramming"
      ]
    }
  },
  {
    slug: "medford", name: "Medford", county: "Burlington County", state: "NJ", zipCodes: ["08055"],
    nearbyLocations: ["marlton", "mount-holly", "medford-lakes"], population: "23,000",
    description: "A historic township known for its quaint downtown and Pine Barrens proximity.",
    profile: {
      archetype: "historic-suburban",
      vibe: "a historic township with a charming Main Street downtown, antique shops, and miles of Pine Barrens-adjacent wooded country — home to a beloved Halloween village atmosphere",
      housingStock: ["historic Main Street singles and twins", "wooded-lot single-families", "lakefront homes around the township's many lakes", "newer custom builds on large parcels"],
      landmarks: ["Main Street Medford historic downtown", "the Kirby's Mill Museum", "the township's many lakes", "Wharton State Forest edges", "Medford Village"],
      neighborhoods: ["Main Street Medford", "Medford Village", "the lakefront communities", "the wooded northern parcels"],
      serviceNotes: {
        auto: "Main Street's compact diagonal parking and lake-area trailheads generate regular car-lockout calls",
        residential: "Medford's historic Main Street homes commonly retain original mortise locks needing restoration-grade service",
        commercial: "antique shops and Main Street boutiques want discreet, after-hours rekeys with no daytime disruption",
        emergency: "wooded-lot homes need fast mobile response — long, unlit roads make speed essential"
      },
      commonScenarios: [
        "a Main Street antique-shop visitor locked out of a car after browsing",
        "an 1880s Main Street single needing original mortise lock restoration",
        "a wooded-lot home with a corroded detached-garage lock"
      ]
    }
  },

  // ─── BURLINGTON COUNTY ───────────────────────────────────────────────────────
  {
    slug: "mount-laurel", name: "Mount Laurel", county: "Burlington County", state: "NJ", zipCodes: ["08054"],
    nearbyLocations: ["marlton", "moorestown", "cherry-hill"], population: "43,000",
    description: "A growing suburban township with major corporate centers and top-rated schools.",
    profile: {
      archetype: "corporate-suburban",
      vibe: "a major corporate suburb — home to Bishops Gate, Larchmont Commons, and Pelican Pointe office parks, with sprawling modern subdivisions, top-rated schools, and easy I-295 access",
      housingStock: ["1990s-2010s luxury subdivisions", "modern townhouse communities", "corporate-relocation single-families", "newer townhouses near Larchmont"],
      landmarks: ["Larchmont Commons office park", "Bishops Gate", "Pelican Pointe office complex", "Centerton Square shopping", "the I-295 Mount Laurel exits", "Laurel Acres Park"],
      neighborhoods: ["Larchmont", "Holiday Village", "Birchfield", "Rancocas Pointe", "the Centerton Road corridor"],
      serviceNotes: {
        auto: "corporate office lots, Centerton Square, and the I-295 commuter ramps all generate steady car-lockout calls",
        residential: "Mount Laurel's modern subdivisions overwhelmingly want smart-lock installs and access-control upgrades",
        commercial: "corporate offices need master-key systems, access-control card systems, and panic-bar installations to meet building codes",
        emergency: "daily corporate operations mean we get lockout calls at every hour"
      },
      commonScenarios: [
        "a corporate-office worker locked out at the Larchmont lot during a late shift",
        "a Birchfield home upgrading to a smart-lock with remote keypad",
        "a corporate office requesting an access-control card-system upgrade"
      ]
    }
  },
  {
    slug: "moorestown", name: "Moorestown", county: "Burlington County", state: "NJ", zipCodes: ["08057"],
    nearbyLocations: ["mount-laurel", "cinnaminson", "maple-shade"], population: "21,000",
    description: "Consistently ranked among the best places to live in NJ, known for its charming downtown.",
    profile: {
      archetype: "luxury-historic",
      vibe: "a consistently top-ranked NJ town with deep Quaker roots, a postcard-perfect Main Street, the historic Moorestown Friends Meeting, and tree-lined neighborhoods of preserved 18th-19th century homes alongside modern luxury builds",
      housingStock: ["18th and 19th-century colonials", "Federal-style townhouses on Main Street", "Victorian singles on Chester Avenue", "1920s revival colonials", "modern luxury custom builds"],
      landmarks: ["Main Street Moorestown historic district", "Moorestown Friends Meeting", "Strawbridge Lake Park", "the Moorestown Mall", "the historic Smith-Cadbury Mansion"],
      neighborhoods: ["the Main Street historic district", "Chester Avenue", "Strawbridge Lake area", "the Borton Landing area"],
      serviceNotes: {
        auto: "Main Street's compact diagonal parking and the Moorestown Mall lots generate regular car-lockout calls",
        residential: "Moorestown's pre-1900 colonials commonly retain original mortise locks, brass hardware, and skeleton-key cabinets requiring restoration-grade locksmith expertise",
        commercial: "Main Street boutiques and professional offices want discreet, after-hours rekeys with absolute attention to historic preservation",
        emergency: "century-old wood doors and irreplaceable original trim mean non-destructive entry isn't optional"
      },
      commonScenarios: [
        "a Main Street diner locked out after an evening at Pamel's",
        "an 1830s colonial homeowner restoring original brass mortise hardware",
        "a Chester Avenue Victorian needing a careful master rekey"
      ]
    }
  },
  {
    slug: "cinnaminson", name: "Cinnaminson", county: "Burlington County", state: "NJ", zipCodes: ["08077"],
    nearbyLocations: ["moorestown", "riverton", "pennsauken"], population: "16,000",
    description: "A suburban township on the Delaware River with easy highway access.",
    profile: {
      archetype: "suburban-family",
      vibe: "a quiet riverside suburban township along the Delaware River, with mid-century single-families, easy Tacony-Palmyra Bridge access, and a strong family-neighborhood character",
      housingStock: ["1950s-60s single-families", "post-war Cape Cods", "newer 1980s-2000s subdivisions", "townhouses near the highway"],
      landmarks: ["Tacony-Palmyra Bridge access", "Cinnaminson High School", "the Delaware riverfront", "Cinnaminson Memorial Park"],
      neighborhoods: ["the Riverton-adjacent blocks", "the New Albany area", "the streets near Cinnaminson High"],
      serviceNotes: {
        auto: "the Tacony-Palmyra Bridge approaches and Route 130 commuter strip generate steady car-lockout calls",
        residential: "1950s-era homes here commonly need first-time rekeys after decades on original Schlage hardware",
        commercial: "small Route 130 storefronts need quick rekeys when staff rotate",
        emergency: "river humidity causes older deadbolts to swell — a recurring summer emergency"
      },
      commonScenarios: [
        "a commuter locked out approaching the Tacony-Palmyra Bridge",
        "a Cape Cod needing a full Schlage rekey after closing",
        "a riverside home with a swollen, jammed front-door deadbolt"
      ]
    }
  },
  {
    slug: "maple-shade", name: "Maple Shade", county: "Burlington County", state: "NJ", zipCodes: ["08052"],
    nearbyLocations: ["moorestown", "cherry-hill", "cinnaminson"], population: "19,000",
    description: "A diverse township conveniently located near major shopping and transit routes.",
    profile: {
      archetype: "suburban-family",
      vibe: "a diverse, walkable township along Routes 38 and 73 — close to the Cherry Hill Mall and Moorestown Mall — with mid-century homes, garden apartments, and a strong rental community",
      housingStock: ["1950s-60s single-families and ranches", "garden-apartment complexes", "townhouses along Route 38", "older twin homes on Main Street", "newer condo conversions"],
      landmarks: ["Route 38 retail corridor", "Main Street Maple Shade", "the original 1950s Levitt diner site", "Memorial Park", "Maple Shade High School"],
      neighborhoods: ["the Main Street area", "the Route 38 corridor", "the apartment complexes off Lenola Road"],
      serviceNotes: {
        auto: "Route 38 retail lots and apartment-complex parking generate steady car-lockout calls at every hour",
        residential: "high tenant turnover in Maple Shade's apartments means rekeys between renters are nearly daily",
        commercial: "Route 38 storefronts need fast rekeys when staff rotate and reliable commercial deadbolts",
        emergency: "garden-apartment shared entries mean a single broken key can lock out an entire hallway"
      },
      commonScenarios: [
        "a tenant locked out of a Lenola Road apartment late at night",
        "a property manager rekeying after a move-out",
        "a Route 38 shop with a broken commercial deadbolt"
      ]
    }
  },
  {
    slug: "mount-holly", name: "Mount Holly", county: "Burlington County", state: "NJ", zipCodes: ["08060"],
    nearbyLocations: ["medford", "lumberton", "westampton"], population: "10,700",
    description: "The Burlington County seat with a charming historic district and vibrant arts scene.",
    profile: {
      archetype: "historic-county-seat",
      vibe: "the Burlington County seat — a walkable historic district along Mill Street and High Street with the Burlington County Prison Museum, the Iron Works, and a vibrant arts and antiques scene",
      housingStock: ["Federal-style 18th-19th century townhouses", "Victorian singles", "American Foursquares", "1920s twins", "modern infill condos"],
      landmarks: ["Mill Street historic district", "Burlington County Prison Museum", "Mount Holly Iron Works", "High Street downtown", "the courthouse complex", "Iron Works Park"],
      neighborhoods: ["the Mill Street historic district", "the High Street downtown", "the courthouse area", "Pine Street"],
      serviceNotes: {
        auto: "Mill Street's diagonal parking and the courthouse lots generate regular car-lockout calls",
        residential: "Mount Holly's pre-1900 homes commonly retain original mortise locks, brass hardware, and original beveled-glass doors needing restoration-grade work",
        commercial: "Mill Street boutiques, antique shops, and professional offices want discreet, historically appropriate hardware and after-hours rekeys",
        emergency: "courthouse-area lockouts during business hours need fast, professional response"
      },
      commonScenarios: [
        "a juror or attorney locked out at the Burlington County courthouse lot",
        "an 1840s Mill Street townhouse needing original mortise lock restoration",
        "an antique shop on High Street needing a discreet morning rekey"
      ]
    }
  },
  {
    slug: "willingboro", name: "Willingboro", county: "Burlington County", state: "NJ", zipCodes: ["08046"],
    nearbyLocations: ["mount-laurel", "cinnaminson", "delran"], population: "31,000",
    description: "One of the first planned communities in America, offering suburban convenience.",
    profile: {
      archetype: "planned-community",
      vibe: "a historic Levitt-built planned community — one of the first in America — with curved residential parkways, identical builder-designed mid-century ranches and Capes, and strong family neighborhoods",
      housingStock: ["1950s-60s Levitt-designed Cape Cods and ranches", "split-level Levitt homes", "newer 1980s-90s subdivisions on the township edges", "townhouses near the Town Center"],
      landmarks: ["the Willingboro Town Center", "Mill Creek Park", "the original Levitt parkways", "Willingboro Plaza", "the J.F.K. Center"],
      neighborhoods: ["Pennypacker Park", "Garfield Park", "Twin Hills", "Buckingham Park", "Hawthorne Park"],
      serviceNotes: {
        auto: "the Town Center and plaza lots generate steady car-lockout calls",
        residential: "Willingboro's nearly identical Levitt-built homes commonly run on their original 1950s-60s hardware — we know the floor plans and lock layouts well from decades of service",
        commercial: "Town Center retailers need quick rekeys when staff rotate and reliable commercial deadbolts",
        emergency: "Levitt-era front doors are a known, predictable design — we keep matching hardware on every truck"
      },
      commonScenarios: [
        "a Town Center shopper locked out on a Saturday afternoon",
        "a Pennypacker Park Cape Cod needing a full Schlage rekey",
        "a Buckingham Park split-level upgrading to a smart deadbolt"
      ]
    }
  },
  {
    slug: "delran", name: "Delran", county: "Burlington County", state: "NJ", zipCodes: ["08075"],
    nearbyLocations: ["riverside", "cinnaminson", "moorestown"], population: "17,000",
    description: "A growing township with strong community spirit and excellent amenities.",
    profile: {
      archetype: "suburban-family",
      vibe: "a steadily growing township with the Tenby Chase neighborhoods, Rancocas Creek access, and a mix of mid-century and newer family homes",
      housingStock: ["1960s-70s single-families and ranches", "newer 1990s-2000s subdivisions", "townhouses on the township edges", "Tenby Chase mid-century homes"],
      landmarks: ["Tenby Chase neighborhoods", "Rancocas Creek access", "the Delran Plaza", "Delran High School"],
      neighborhoods: ["Tenby Chase", "Holiday Hills", "the Bridgeboro section", "the streets near Delran High"],
      serviceNotes: {
        auto: "the Delran Plaza and creek-access lots see regular weekend car-lockout calls",
        residential: "Tenby Chase's 1960s-70s homes commonly need first-time rekeys and full deadbolt upgrades",
        commercial: "Plaza-area shops need quick rekeys when staff rotate",
        emergency: "creek humidity contributes to seasonal lock corrosion in older homes"
      },
      commonScenarios: [
        "a parent locked out after dropping kids at Delran High",
        "a Tenby Chase ranch upgrading from original 1960s deadbolts",
        "a Bridgeboro homeowner with a corroded back-door deadbolt"
      ]
    }
  },
  {
    slug: "riverside", name: "Riverside", county: "Burlington County", state: "NJ", zipCodes: ["08075"],
    nearbyLocations: ["delran", "riverton", "palmyra"], population: "8,100",
    description: "A historic riverside township with close ties to the Delaware River.",
    profile: {
      archetype: "industrial-river",
      vibe: "a historic working-class river township with the famous Watchcase Building, dense rowhouses, and an industrial heritage along the Delaware",
      housingStock: ["19th-century brick rowhouses", "Victorian twins", "post-war Cape Cods", "older multi-family conversions"],
      landmarks: ["the historic Watchcase Building", "Riverside High School", "the Delaware riverfront", "Cooper-Roebling industrial sites"],
      neighborhoods: ["the rowhouse blocks near the Watchcase", "the riverfront streets", "the Pavilion Avenue area"],
      serviceNotes: {
        auto: "industrial-area shift workers and commuters generate steady car-lockout calls at all hours",
        residential: "Riverside's century-old rowhouses commonly retain original mortise locks needing skilled non-destructive service",
        commercial: "industrial-heritage buildings and small storefronts need durable commercial-grade locks that handle salt-air corrosion",
        emergency: "river humidity is one of the most common causes of lock failure in Riverside's older housing"
      },
      commonScenarios: [
        "an industrial-shift worker locked out of a truck cab",
        "a Pavilion Avenue rowhouse with a 100-year-old front door lock that finally failed",
        "a Watchcase-area business needing a heavy-duty commercial padlock"
      ]
    }
  },
  {
    slug: "riverton", name: "Riverton", county: "Burlington County", state: "NJ", zipCodes: ["08077"],
    nearbyLocations: ["riverside", "cinnaminson", "palmyra"], population: "2,700",
    description: "A charming Victorian-era borough along the Delaware River.",
    profile: {
      archetype: "victorian-borough",
      vibe: "a tiny postcard-perfect Victorian borough on the Delaware River — gingerbread cottages, the Riverton Yacht Club (founded 1865), and tree-canopy streets that feel frozen in time",
      housingStock: ["Victorian gingerbread cottages", "Queen Anne and Stick-style singles", "American Foursquares", "early-1900s shore-style homes"],
      landmarks: ["Riverton Yacht Club (1865)", "the Riverton train station", "Main Street historic district", "the Delaware riverfront promenade"],
      neighborhoods: ["the Main Street historic district", "the riverfront blocks", "the Yacht Club area"],
      serviceNotes: {
        auto: "the train station lot and Main Street parking see regular car-lockout calls from commuters and visitors",
        residential: "Riverton's Victorians commonly retain their original mortise locks, beveled-glass doors, and porcelain knobs — these demand restoration-grade locksmith work",
        commercial: "Main Street's small shops want discreet, after-hours rekeys that respect the historic streetscape",
        emergency: "century-old wood doors here cannot tolerate forced entry — non-destructive techniques are essential"
      },
      commonScenarios: [
        "a Yacht Club member locked out at the riverfront lot",
        "an 1875 gingerbread cottage needing original mortise lock restoration",
        "a Main Street shop needing an early-morning master rekey"
      ]
    }
  },
  {
    slug: "palmyra", name: "Palmyra", county: "Burlington County", state: "NJ", zipCodes: ["08065"],
    nearbyLocations: ["riverton", "riverside", "cinnaminson"], population: "7,300",
    description: "A small Delaware River borough with a rich history and community pride.",
    profile: {
      archetype: "river-borough",
      vibe: "a small Delaware River borough at the foot of the Tacony-Palmyra Bridge — a mix of Victorian-era homes, mid-century singles, and a tight-knit community pride",
      housingStock: ["Victorian-era twins and singles", "1920s craftsman bungalows", "post-war Cape Cods", "small apartment buildings near the bridge approach"],
      landmarks: ["the Tacony-Palmyra Bridge", "Palmyra High School", "the riverfront promenade", "Legion Field"],
      neighborhoods: ["the riverfront blocks", "the Cinnaminson Avenue area", "the streets near Palmyra High"],
      serviceNotes: {
        auto: "the Tacony-Palmyra Bridge approach and Route 73 commuter strip generate steady car-lockout calls",
        residential: "Victorian-era twins here commonly retain original mortise hardware needing careful service",
        commercial: "small Cinnaminson Avenue shops want quick rekeys when staff rotate",
        emergency: "river-area humidity causes older deadbolts to bind — a frequent emergency call"
      },
      commonScenarios: [
        "a commuter locked out approaching the Tacony-Palmyra Bridge",
        "a Cinnaminson Avenue twin home with a 1900s mortise lock that finally failed",
        "a riverfront home with a corroded back-door deadbolt"
      ]
    }
  },
  {
    slug: "westampton", name: "Westampton", county: "Burlington County", state: "NJ", zipCodes: ["08060"],
    nearbyLocations: ["mount-holly", "hainesport", "lumberton"], population: "9,000",
    description: "A fast-growing township offering a mix of residential communities and open space.",
    profile: {
      archetype: "suburban-family",
      vibe: "a fast-growing township along the Burlington-Mount Holly Road corridor — newer subdivisions, the Burlington Center mall area, and easy access to I-295",
      housingStock: ["1990s-2010s subdivisions", "modern townhouse communities", "newer custom-built single-families", "older homes on the township's older blocks"],
      landmarks: ["the Burlington-Mount Holly Road corridor", "the former Burlington Center site", "Smithville Park area", "the I-295 access points"],
      neighborhoods: ["the Burlington-Mount Holly Road developments", "the Smithville section", "the newer subdivisions on the township edges"],
      serviceNotes: {
        auto: "the I-295 commuter ramps and the Burlington Center area generate steady car-lockout calls",
        residential: "newer Westampton subdivisions overwhelmingly want smart-lock and access-control upgrades",
        commercial: "Burlington-Mount Holly Road businesses need master-key systems and quick rekeys",
        emergency: "smart-lock failures are an increasingly common emergency call in newer Westampton homes"
      },
      commonScenarios: [
        "a commuter locked out at the I-295 park-and-ride",
        "a newer subdivision home upgrading to a smart deadbolt",
        "a small office needing master-key rekey after a staff change"
      ]
    }
  },
  {
    slug: "hainesport", name: "Hainesport", county: "Burlington County", state: "NJ", zipCodes: ["08036"],
    nearbyLocations: ["mount-holly", "westampton", "lumberton"], population: "5,800",
    description: "A quiet township known for its residential neighborhoods and scenic landscapes.",
    profile: {
      archetype: "suburban-family",
      vibe: "a quiet residential township along Rancocas Creek with mid-century homes, newer subdivisions, and easy access to Mount Holly's downtown",
      housingStock: ["1960s-70s single-families and ranches", "newer 1990s-2000s subdivisions", "creek-side custom homes", "small townhouse developments"],
      landmarks: ["Rancocas Creek frontage", "Hainesport Mews", "the township's open-space parks"],
      neighborhoods: ["the creek-side blocks", "Hainesport Mews", "the newer subdivisions"],
      serviceNotes: {
        auto: "long suburban driveways mean most car lockouts here happen at home",
        residential: "creek-side homes have detached garages and outbuildings that need rekeys after years of weather",
        commercial: "the township's small commercial pockets need durable commercial deadbolts",
        emergency: "creek humidity contributes to seasonal lock corrosion"
      },
      commonScenarios: [
        "a homeowner locked out after taking out the trash",
        "a creek-side home with a corroded outbuilding lock",
        "a small business needing a heavy-duty commercial deadbolt"
      ]
    }
  },
  {
    slug: "lumberton", name: "Lumberton", county: "Burlington County", state: "NJ", zipCodes: ["08048"],
    nearbyLocations: ["mount-holly", "medford", "hainesport"], population: "12,000",
    description: "A growing township in central Burlington County with excellent residential neighborhoods.",
    profile: {
      archetype: "suburban-family",
      vibe: "a growing central Burlington township with strong family neighborhoods, Rancocas Creek frontage, and a mix of mid-century and newer subdivisions",
      housingStock: ["1970s-80s single-families", "newer 1990s-2010s subdivisions", "townhouse communities", "creek-side custom homes"],
      landmarks: ["Rancocas Creek frontage", "Lumberton Plaza", "Lumberton Middle School", "the Route 38 corridor"],
      neighborhoods: ["the creek-side blocks", "the Lumberton Leas area", "the Route 38 corridor"],
      serviceNotes: {
        auto: "Lumberton Plaza and Route 38 retail lots generate steady car-lockout calls",
        residential: "newer Lumberton subdivisions commonly want smart-lock upgrades over basic rekeys",
        commercial: "Plaza-area businesses need quick rekeys when staff rotate",
        emergency: "creek-side homes occasionally need emergency lockout work due to humidity-induced lock failure"
      },
      commonScenarios: [
        "a Plaza shopper locked out on a Saturday morning",
        "a Lumberton Leas home upgrading to a smart deadbolt",
        "a creek-side home with a swollen, jammed back-door lock"
      ]
    }
  },
  {
    slug: "medford-lakes", name: "Medford Lakes", county: "Burlington County", state: "NJ", zipCodes: ["08055"],
    nearbyLocations: ["medford", "marlton", "mount-holly"], population: "4,100",
    description: "A unique lakeside community surrounded by the Pinelands National Reserve.",
    profile: {
      archetype: "lake-community",
      vibe: "a one-of-a-kind lakeside community of original 1920s log cabins and lakefront cottages, surrounded by Pinelands forest — a unique architectural identity preserved for nearly a century",
      housingStock: ["original 1920s-30s log cabins", "lakefront cottages", "newer custom builds with log-cabin character", "1950s-60s lake-area singles"],
      landmarks: ["the township's lakes including Aetna and Lower Aetna", "the Cabin Circle", "the Medford Lakes Colony Club", "the original 1920s clubhouse"],
      neighborhoods: ["the Cabin Circle", "the lakefront streets", "the inland blocks"],
      serviceNotes: {
        auto: "lakefront trailhead lots and the Colony Club generate weekend car-lockout calls",
        residential: "Medford Lakes' historic 1920s log cabins commonly have unique original hardware that demands specialty service — and the township enforces strict architectural review rules",
        commercial: "the few small businesses here need durable, weather-resistant commercial hardware",
        emergency: "lake humidity contributes to seasonal lock corrosion in the older cabins"
      },
      commonScenarios: [
        "a homeowner locked out of a 1920s log cabin",
        "a Colony Club member locked out at the lakefront lot",
        "a lakefront cabin needing original cabin-door hardware restoration"
      ]
    }
  },
  {
    slug: "edgewater-park", name: "Edgewater Park", county: "Burlington County", state: "NJ", zipCodes: ["08010"],
    nearbyLocations: ["palmyra", "riverside", "burlington-city"], population: "8,500",
    description: "A riverfront township with a mix of residential neighborhoods and recreational areas.",
    profile: {
      archetype: "river-borough",
      vibe: "a riverfront township between Palmyra and Burlington City with the Beverly section, mid-century homes, and Delaware River access",
      housingStock: ["mid-century single-families", "1950s-60s ranches", "older Beverly-section homes", "newer subdivisions on the township edges"],
      landmarks: ["Beverly section", "Edgewater Park's Delaware riverfront", "the township's open-space parks"],
      neighborhoods: ["Beverly", "the riverside blocks", "the central township blocks"],
      serviceNotes: {
        auto: "river-access lots and the Route 130 corridor generate steady car-lockout calls",
        residential: "Beverly-section homes commonly retain original 1950s-60s hardware needing first-time rekeys",
        commercial: "Route 130 storefronts need quick rekeys when staff rotate",
        emergency: "river-area humidity causes older deadbolts to bind during summer months"
      },
      commonScenarios: [
        "a homeowner locked out walking the dog along the river",
        "a Beverly-section ranch with a stuck deadbolt",
        "a Route 130 small business with a broken commercial lock"
      ]
    }
  },
  {
    slug: "burlington-city", name: "Burlington City", county: "Burlington County", state: "NJ", zipCodes: ["08016"],
    nearbyLocations: ["edgewater-park", "palmyra", "florence"], population: "9,700",
    description: "One of the oldest cities in NJ with a beautifully preserved historic district.",
    profile: {
      archetype: "historic-colonial",
      vibe: "one of the oldest cities in NJ — High Street is a meticulously preserved colonial avenue with the James Fenimore Cooper birthplace, the Burlington Pharmacy, and a beautifully intact 17th-19th century streetscape on the Delaware",
      housingStock: ["17th-19th century Federal-style colonials", "Victorian singles", "American Foursquares", "Federal-style brick townhouses", "1920s twins"],
      landmarks: ["High Street historic district", "James Fenimore Cooper birthplace", "the Burlington Pharmacy (1731)", "the Friends Meeting", "the Riverfront Promenade"],
      neighborhoods: ["the High Street historic district", "the riverfront blocks", "the Federal-Wood Street area"],
      serviceNotes: {
        auto: "High Street's diagonal parking and the Riverfront Promenade lots generate regular car-lockout calls",
        residential: "Burlington City's pre-1850 homes commonly retain original mortise locks, brass hardware, and irreplaceable beveled-glass doors — these demand the highest level of restoration locksmith expertise",
        commercial: "High Street boutiques and historic-district businesses want discreet, historically appropriate hardware",
        emergency: "the historic district's irreplaceable original wood doors and trim require non-destructive entry as an absolute requirement"
      },
      commonScenarios: [
        "a High Street visitor locked out of a car after browsing antiques",
        "a 1740s colonial homeowner restoring original mortise hardware",
        "a Federal Street townhouse needing a discreet master rekey"
      ]
    }
  },
  {
    slug: "burlington-township", name: "Burlington Township", county: "Burlington County", state: "NJ", zipCodes: ["08016"],
    nearbyLocations: ["burlington-city", "florence", "westampton"], population: "23,000",
    description: "A growing township surrounding Burlington City with strong commercial development.",
    profile: {
      archetype: "suburban-family",
      vibe: "a growing township that surrounds Burlington City — strong commercial development along Route 130, modern subdivisions, and a steadily expanding family community",
      housingStock: ["1980s-2010s subdivisions", "modern townhouse communities", "newer luxury single-families", "older Route 130 homes"],
      landmarks: ["the Burlington-Mount Holly Road retail corridor", "Sunset Auditorium", "the I-295 access points", "Burlington Township High School"],
      neighborhoods: ["the Sunset Road area", "the newer subdivisions on the township edges", "the Route 130 corridor"],
      serviceNotes: {
        auto: "Route 130 retail and I-295 commuter lots generate steady car-lockout calls",
        residential: "newer Burlington Township subdivisions overwhelmingly want smart-lock upgrades",
        commercial: "Route 130 retailers and small office tenants need master-key systems and quick rekeys",
        emergency: "daily commercial activity means lockout calls happen at every hour"
      },
      commonScenarios: [
        "a commuter locked out at the I-295 park-and-ride",
        "a newer subdivision home upgrading to a smart deadbolt",
        "a Route 130 office needing master-key reprogramming"
      ]
    }
  },
  {
    slug: "florence", name: "Florence", county: "Burlington County", state: "NJ", zipCodes: ["08518"],
    nearbyLocations: ["burlington-city", "burlington-township", "bordentown-city"], population: "12,500",
    description: "A diverse township along the Delaware River with expanding residential communities.",
    profile: {
      archetype: "suburban-family",
      vibe: "a Delaware River township with the historic Roebling section (built around the famous wire-rope works), expanding residential communities, and easy access to I-295",
      housingStock: ["historic Roebling-built workers' homes", "1950s-60s single-families", "newer 1990s-2010s subdivisions", "townhouses near the I-295 access"],
      landmarks: ["the Roebling section and historic wire-rope works site", "the Delaware riverfront", "Florence Township High School", "I-295 access"],
      neighborhoods: ["Roebling", "the riverside blocks", "the newer subdivisions"],
      serviceNotes: {
        auto: "I-295 commuter ramps and the Roebling area generate steady car-lockout calls",
        residential: "Roebling's historic Roebling-Co.-built workers' homes commonly retain original early-1900s hardware needing skilled service",
        commercial: "small businesses along the river need durable commercial-grade locks",
        emergency: "river humidity contributes to seasonal lock corrosion in the older Roebling homes"
      },
      commonScenarios: [
        "a commuter locked out at the I-295 park-and-ride",
        "a Roebling-built workers' home needing original-era lock restoration",
        "a riverside small business with a corroded deadbolt"
      ]
    }
  },
  {
    slug: "bordentown-city", name: "Bordentown City", county: "Burlington County", state: "NJ", zipCodes: ["08505"],
    nearbyLocations: ["florence", "bordentown-township", "burlington-township"], population: "3,900",
    description: "A historic Delaware River city with a charming Main Street and arts district.",
    profile: {
      archetype: "historic-arts",
      vibe: "a charming historic Delaware River city — Joseph Bonaparte once lived here, Farnsworth Avenue is lined with antique shops and art galleries, and the streetscape preserves a 19th-century arts-and-crafts character",
      housingStock: ["18th-19th century colonials", "Federal-style townhouses", "Victorian singles", "American Foursquares", "1920s twins"],
      landmarks: ["Farnsworth Avenue antique and arts district", "the Joseph Bonaparte estate site", "Crosswicks Creek", "Clara Barton Schoolhouse", "the historic Friends Meeting"],
      neighborhoods: ["the Farnsworth Avenue historic district", "the Crosswicks Creek area", "the Mary Street blocks"],
      serviceNotes: {
        auto: "Farnsworth Avenue's diagonal parking generates regular car-lockout calls from antiquing visitors",
        residential: "Bordentown's pre-1900 homes commonly retain original mortise locks and brass hardware needing restoration-grade service",
        commercial: "Farnsworth Avenue antique dealers and galleries want discreet, historically appropriate hardware and after-hours rekeys",
        emergency: "irreplaceable historic wood doors mean non-destructive entry is essential"
      },
      commonScenarios: [
        "a Farnsworth Avenue antique-shop visitor locked out of a car",
        "an 1820s Mary Street colonial needing original mortise lock restoration",
        "a gallery needing a discreet master rekey before opening"
      ]
    }
  },
  {
    slug: "bordentown-township", name: "Bordentown Township", county: "Burlington County", state: "NJ", zipCodes: ["08505"],
    nearbyLocations: ["bordentown-city", "florence", "hamilton"], population: "11,500",
    description: "A growing township surrounding Bordentown City with convenient I-295 access.",
    profile: {
      archetype: "suburban-family",
      vibe: "a growing township surrounding Bordentown City with newer subdivisions, expanding commercial development, and easy I-295/Turnpike access",
      housingStock: ["1990s-2010s subdivisions", "modern townhouse communities", "newer luxury single-families", "older homes on the township edges"],
      landmarks: ["I-295 access points", "the NJ Turnpike interchange", "Mary G. Roebling Building", "the township commercial corridors"],
      neighborhoods: ["the I-295 access area", "the newer subdivisions", "the Crosswicks Road area"],
      serviceNotes: {
        auto: "I-295 commuter ramps and the Turnpike interchange generate steady car-lockout calls",
        residential: "newer Bordentown Township homes overwhelmingly want smart-lock upgrades",
        commercial: "small offices and retailers need master-key systems and quick rekeys",
        emergency: "smart-lock failures are an increasingly common emergency call in newer subdivisions"
      },
      commonScenarios: [
        "a commuter locked out at the Turnpike park-and-ride",
        "a newer subdivision home upgrading to a smart deadbolt",
        "a small office needing access-control card reprogramming"
      ]
    }
  },
  {
    slug: "eastampton", name: "Eastampton", county: "Burlington County", state: "NJ", zipCodes: ["08060"],
    nearbyLocations: ["mount-holly", "westampton", "lumberton"], population: "6,300",
    description: "A suburban township with strong residential communities and local parks.",
    profile: {
      archetype: "suburban-family",
      vibe: "a quiet suburban township just east of Mount Holly with strong residential neighborhoods, mid-century homes, and easy downtown Mount Holly access",
      housingStock: ["1960s-70s single-families and ranches", "newer 1990s-2000s subdivisions", "townhouse developments"],
      landmarks: ["Eastampton Village Center", "Smithville Park area", "the township's open-space parks"],
      neighborhoods: ["Eastampton Village", "the older central blocks", "the newer subdivisions"],
      serviceNotes: {
        auto: "long suburban driveways mean most car lockouts here happen at home",
        residential: "1970s-era homes commonly need first-time rekeys and full deadbolt upgrades",
        commercial: "the small Village Center needs quick rekeys when staff rotate",
        emergency: "winter cold causes original 1970s deadbolts to bind"
      },
      commonScenarios: [
        "a parent locked out after dropping kids at school",
        "a 1970s home upgrading from original Schlage hardware",
        "a Village Center business with a frozen morning deadbolt"
      ]
    }
  },
  {
    slug: "springfield-township-burlington", name: "Springfield", county: "Burlington County", state: "NJ", zipCodes: ["08086"],
    nearbyLocations: ["westampton", "mount-holly", "hainesport"], population: "3,200",
    description: "A quiet agricultural township in Burlington County.",
    profile: {
      archetype: "agricultural-rural",
      vibe: "a quiet agricultural township of working farms, large rural parcels, and a small handful of crossroads communities",
      housingStock: ["working-farm homesteads", "rural single-families on large parcels", "older farmhouses", "modular homes on wooded lots"],
      landmarks: ["the township's working farms", "Smithville Park nearby", "the rural crossroads"],
      neighborhoods: ["the township's farming hamlets"],
      serviceNotes: {
        auto: "long unlit roads mean fast mobile response is essential for after-dark lockouts",
        residential: "rural farmhouses commonly have detached barns, sheds, and outbuildings with locks that need rekeying",
        commercial: "the few small businesses need durable, weather-resistant commercial hardware",
        emergency: "farm-area calls require techs equipped for outbuilding and equipment-lock work"
      },
      commonScenarios: [
        "a farmer locked out of a barn or equipment shed",
        "a rural farmhouse with a corroded original deadbolt",
        "a long-distance after-dark residential lockout"
      ]
    }
  },
  {
    slug: "tabernacle", name: "Tabernacle", county: "Burlington County", state: "NJ", zipCodes: ["08088"],
    nearbyLocations: ["medford", "southampton-township", "medford-lakes"], population: "7,400",
    description: "A large rural township on the edge of the Pinelands National Reserve.",
    profile: {
      archetype: "pinelands-rural",
      vibe: "a large rural Pinelands township — Wharton State Forest borders, deep woods, working cranberry bogs, and spread-out homes on big wooded lots",
      housingStock: ["wooded-lot single-families on large parcels", "modular homes deep in the Pinelands", "older country homesteads", "newer custom log-style builds"],
      landmarks: ["Wharton State Forest borders", "the Tabernacle cranberry bogs", "the Carranza Memorial site", "the township's deep-woods trails"],
      neighborhoods: ["the township's wooded hamlets"],
      serviceNotes: {
        auto: "long unlit Pinelands roads make fast mobile response critical for any after-dark lockout",
        residential: "deep-woods homes have detached garages, sheds, and outbuildings whose locks need regular weatherproofing",
        commercial: "the few small businesses need durable, weather-resistant commercial-grade locks",
        emergency: "Pinelands humidity and seasonal temperature swings cause lock corrosion year-round"
      },
      commonScenarios: [
        "a homeowner locked out of a deep-woods cabin late at night",
        "a cranberry-farm operator needing outbuilding rekeys",
        "a long-distance Pinelands lockout call requiring rapid mobile response"
      ]
    }
  },
  {
    slug: "southampton-township", name: "Southampton Township", county: "Burlington County", state: "NJ", zipCodes: ["08088"],
    nearbyLocations: ["tabernacle", "medford", "hammonton"], population: "10,200",
    description: "A sprawling Pinelands township with a mix of forests, farmland, and communities.",
    profile: {
      archetype: "pinelands-rural",
      vibe: "a sprawling Pinelands township anchored by Vincentown and Red Lion — a mix of forests, working farmland, and the Leisuretowne 55-plus community",
      housingStock: ["Leisuretowne 55-plus community homes", "Vincentown historic singles", "wooded-lot single-families", "rural homesteads", "modular homes on large parcels"],
      landmarks: ["Leisuretowne 55-plus community", "Vincentown historic crossroads", "Red Lion section", "Wharton State Forest borders"],
      neighborhoods: ["Vincentown", "Leisuretowne", "Red Lion", "the wooded southern parcels"],
      serviceNotes: {
        auto: "Leisuretowne residents and the Vincentown crossroads generate steady residential car-lockout calls",
        residential: "Leisuretowne's nearly identical 55-plus homes commonly run on builder-grade hardware that's overdue for rekey or upgrade",
        commercial: "the Vincentown commercial pocket needs durable, weather-resistant commercial deadbolts",
        emergency: "long unlit roads mean fast mobile response is essential after dark"
      },
      commonScenarios: [
        "a Leisuretowne resident locked out late at night",
        "a Vincentown historic home needing original hardware service",
        "a wooded-lot home with a corroded outbuilding lock"
      ]
    }
  },

  // ─── GLOUCESTER COUNTY ───────────────────────────────────────────────────────
  {
    slug: "washington-township", name: "Washington Township", county: "Gloucester County", state: "NJ", zipCodes: ["08080"],
    nearbyLocations: ["deptford", "gloucester-township", "pitman"], population: "48,000",
    description: "The largest municipality in Gloucester County with thriving residential and retail areas.",
    profile: {
      archetype: "suburban-large",
      vibe: "the largest municipality in Gloucester County, anchored by the Sewell area — a mix of mid-century homes, sprawling 1990s-2000s subdivisions, and major Route 42 retail",
      housingStock: ["1970s-80s single-families and split-levels", "1990s-2010s subdivisions in Sewell", "modern townhouse communities", "newer custom builds"],
      landmarks: ["Washington Lake Park", "Route 42 retail corridor", "Washington Township High School", "the Hurffville-Cross Keys Road retail strip"],
      neighborhoods: ["Sewell", "Turnersville", "Hurffville", "Grenloch", "the Washington Lake Park area"],
      serviceNotes: {
        auto: "Route 42 retail lots and the Hurffville-Cross Keys retail strip generate constant car-lockout calls",
        residential: "newer Sewell subdivisions overwhelmingly want smart-lock upgrades while older Hurffville homes need first-time rekeys",
        commercial: "Route 42 retailers and small office tenants need master-key systems and quick rekeys",
        emergency: "the township's size means we keep multiple Washington-Township-zone vans dispatched for fast response"
      },
      commonScenarios: [
        "a Route 42 shopper locked out on a Saturday afternoon",
        "a Sewell subdivision home upgrading to a smart deadbolt",
        "a Hurffville-area split-level needing a full rekey after divorce"
      ]
    }
  },
  {
    slug: "deptford", name: "Deptford", county: "Gloucester County", state: "NJ", zipCodes: ["08096"],
    nearbyLocations: ["washington-township", "westville", "west-deptford"], population: "30,000",
    description: "A bustling township home to major shopping centers and convenient highway access.",
    profile: {
      archetype: "commercial-hub",
      vibe: "a bustling commercial-hub township — home to the Deptford Mall, the Almonesson Lake area, and major Route 41/42 retail traffic",
      housingStock: ["1960s-70s single-families and split-levels", "garden apartments along Route 41", "townhouse developments", "newer custom builds"],
      landmarks: ["Deptford Mall", "Almonesson Lake", "the Route 41/42 retail corridor", "Camden County Tech Deptford campus", "the Deptford diner row"],
      neighborhoods: ["Almonesson", "the Mall area", "the Route 41 corridor", "Oak Valley"],
      serviceNotes: {
        auto: "the Deptford Mall, the diner row, and the Route 41/42 retail strip generate constant car-lockout calls — among the highest volumes in the county",
        residential: "Deptford's mix of older mid-century homes and newer subdivisions means a wide range of locksmith service in any week",
        commercial: "Mall and Route 41 retailers need master-key systems, panic bars, and high-cycle commercial deadbolts",
        emergency: "daily retail operations mean lockout calls happen at every hour"
      },
      commonScenarios: [
        "a Mall shopper locked out at the Macy's parking lot",
        "an Almonesson home upgrading from original 1970s deadbolts",
        "a Route 41 diner needing an emergency commercial-lock repair"
      ]
    }
  },
  {
    slug: "west-deptford", name: "West Deptford", county: "Gloucester County", state: "NJ", zipCodes: ["08086", "08096"],
    nearbyLocations: ["deptford", "woodbury", "gloucester-city"], population: "21,000",
    description: "A riverside township with growing commercial corridors along the Delaware.",
    profile: {
      archetype: "industrial-river",
      vibe: "a riverside township with the RiverWinds residential community, oil-refinery industrial corridor along the Delaware, and a strong family-suburb character on the inland blocks",
      housingStock: ["RiverWinds modern townhouses", "1970s-80s single-families", "newer 1990s-2010s subdivisions", "older homes near the riverfront industrial area"],
      landmarks: ["RiverWinds community and golf course", "Riverwinds Drive", "Paulsboro Refinery (adjacent)", "the Delaware riverfront", "Camden County Tech West Deptford"],
      neighborhoods: ["RiverWinds", "the Riverwinds Drive area", "the Crown Point Road area", "the inland subdivisions"],
      serviceNotes: {
        auto: "the riverside industrial corridor and RiverWinds golf course generate steady car-lockout calls",
        residential: "RiverWinds townhouses and newer subdivisions overwhelmingly want smart-lock upgrades",
        commercial: "industrial-corridor businesses need heavy-duty commercial-grade locks, padlocks, and master-key systems built for salt-air conditions",
        emergency: "river humidity is a recurring cause of lock failure in older West Deptford homes"
      },
      commonScenarios: [
        "a refinery shift worker locked out of a truck cab",
        "a RiverWinds townhouse upgrading to a smart deadbolt",
        "a Crown Point Road home with a corroded back-door deadbolt"
      ]
    }
  },
  {
    slug: "woodbury", name: "Woodbury", county: "Gloucester County", state: "NJ", zipCodes: ["08096"],
    nearbyLocations: ["west-deptford", "deptford", "woodbury-heights"], population: "10,300",
    description: "The Gloucester County seat with a historic downtown and active arts community.",
    profile: {
      archetype: "historic-county-seat",
      vibe: "the Gloucester County seat — a walkable historic downtown along Broad Street, the Hunter-Lawrence-Jessup House, the Friends Meeting House, and a strong arts-and-restaurants community",
      housingStock: ["18th-19th century colonials", "Federal-style brick townhouses", "Victorian singles", "American Foursquares", "1920s twins"],
      landmarks: ["Broad Street historic district", "Hunter-Lawrence-Jessup House (1765)", "the Friends Meeting House", "Bell Lake Park", "the Gloucester County courthouse"],
      neighborhoods: ["the Broad Street historic district", "the Bell Lake area", "the courthouse blocks", "the West End"],
      serviceNotes: {
        auto: "Broad Street's diagonal parking and the courthouse lots generate regular car-lockout calls",
        residential: "Woodbury's pre-1900 colonials commonly retain original mortise locks, brass hardware, and irreplaceable beveled-glass doors needing restoration-grade service",
        commercial: "Broad Street restaurants, antique shops, and professional offices want discreet, historically appropriate hardware",
        emergency: "courthouse-area lockouts during business hours need fast, professional response"
      },
      commonScenarios: [
        "a juror or attorney locked out at the Gloucester County courthouse lot",
        "an 1840s Broad Street townhouse needing original mortise lock restoration",
        "a downtown restaurant needing a discreet morning rekey"
      ]
    }
  },
  {
    slug: "woodbury-heights", name: "Woodbury Heights", county: "Gloucester County", state: "NJ", zipCodes: ["08097"],
    nearbyLocations: ["woodbury", "wenonah", "deptford"], population: "3,000",
    description: "A quiet residential borough adjacent to Woodbury with tree-lined streets.",
    profile: {
      archetype: "small-borough",
      vibe: "a quiet residential borough of tree-lined streets, mid-century homes, and a tight-knit community right next to Woodbury",
      housingStock: ["1950s-60s single-families and ranches", "post-war Cape Cods", "small twin homes", "newer infill colonials"],
      landmarks: ["the Elm Avenue residential blocks", "Glen Avenue commercial pocket", "the borough's tree-canopy streets"],
      neighborhoods: ["the Elm Avenue area", "the Glen Avenue blocks"],
      serviceNotes: {
        auto: "neighborhood streets here see most car lockouts at home rather than commercial lots",
        residential: "1950s-era ranches commonly need first-time rekeys after decades on original Schlage hardware",
        commercial: "the small Glen Avenue commercial pocket needs quick rekeys when staff rotate",
        emergency: "older deadbolts here jam during winter cold snaps"
      },
      commonScenarios: [
        "a homeowner locked out walking the dog",
        "a 1950s ranch needing a full deadbolt replacement",
        "a Glen Avenue shop with a stuck morning lock"
      ]
    }
  },
  {
    slug: "glassboro", name: "Glassboro", county: "Gloucester County", state: "NJ", zipCodes: ["08028"],
    nearbyLocations: ["washington-township", "pitman", "clayton"], population: "19,000",
    description: "A college town home to Rowan University with a revitalized downtown.",
    profile: {
      archetype: "college-town",
      vibe: "a thriving college town anchored by Rowan University — a steady tide of students and faculty, a revitalized downtown along Rowan Boulevard with the Whitney Center, and a fast-cycling rental market",
      housingStock: ["Rowan-area student rentals and apartment complexes", "Rowan Boulevard luxury student housing", "older single-families converted to multi-family rentals", "1950s-60s ranches in the surrounding neighborhoods", "newer townhouse developments"],
      landmarks: ["Rowan University main campus", "Rowan Boulevard / Whitney Center", "the Hollybush Mansion (site of the 1967 Glassboro Summit)", "the Pfleeger Concert Hall", "Glassboro High School"],
      neighborhoods: ["the Rowan-Boulevard student-housing district", "the campus-edge rentals", "the older Center Street blocks", "the Heston Road subdivisions"],
      serviceNotes: {
        auto: "Rowan student lots, the Whitney Center garage, and the campus-area apartments generate constant car-lockout calls — and they peak during move-in week and finals",
        residential: "the high turnover among Rowan student renters means rekeys between leases are one of our most-requested services in Glassboro — every August and December",
        commercial: "Rowan Boulevard retailers, downtown restaurants, and student-housing management companies need fast turnaround on master rekeys and access-control upgrades",
        emergency: "late-night student lockouts (and the occasional locked-out professor) keep our Glassboro vans busy at every hour"
      },
      commonScenarios: [
        "a Rowan student locked out of a Whitney Center apartment at 3 AM",
        "a property manager rekeying a campus-edge rental between graduating tenants and incoming freshmen",
        "a Rowan Boulevard restaurant needing an early-morning master rekey before service"
      ]
    }
  },
  {
    slug: "pitman", name: "Pitman", county: "Gloucester County", state: "NJ", zipCodes: ["08071"],
    nearbyLocations: ["washington-township", "glassboro", "mantua"], population: "9,000",
    description: "A historic borough with a charming Victorian downtown and strong community identity.",
    profile: {
      archetype: "victorian-borough",
      vibe: "a charming Victorian-era borough founded as a Methodist camp meeting in 1871 — Pitman Grove still preserves the original gingerbread tabernacle cottages, and the downtown along Broadway has a beloved small-town character",
      housingStock: ["Pitman Grove original 1870s gingerbread tabernacle cottages", "Victorian Queen Anne and Stick-style singles", "American Foursquares", "1920s craftsman bungalows", "newer infill colonials"],
      landmarks: ["Pitman Grove (the original 1871 Methodist camp meeting tabernacle and cottages)", "the Broadway historic downtown", "Alcyon Lake Park", "the Pitman Theatre"],
      neighborhoods: ["Pitman Grove", "the Broadway downtown blocks", "the Alcyon Lake area"],
      serviceNotes: {
        auto: "Broadway's diagonal parking and the Theatre district generate regular evening car-lockout calls",
        residential: "Pitman Grove's 1870s gingerbread cottages have unique original mortise locks, glass knobs, and tiny doorways — these demand specialty restoration-grade locksmith service",
        commercial: "Broadway shops want discreet, after-hours rekeys with hardware that respects the historic streetscape",
        emergency: "the Grove's irreplaceable original wood doors mean non-destructive entry is mandatory"
      },
      commonScenarios: [
        "a Broadway diner locked out after dinner",
        "a Pitman Grove gingerbread cottage needing original 1870s mortise lock restoration",
        "a small Broadway shop needing a fast morning rekey"
      ]
    }
  },
  {
    slug: "mantua", name: "Mantua", county: "Gloucester County", state: "NJ", zipCodes: ["08051"],
    nearbyLocations: ["pitman", "deptford", "wenonah"], population: "15,000",
    description: "A growing suburban township in the heart of Gloucester County.",
    profile: {
      archetype: "suburban-family",
      vibe: "a growing central-Gloucester township anchored by Sewell — strong family neighborhoods, expanding subdivisions, and easy Route 55 access",
      housingStock: ["1970s-80s single-families and ranches", "newer 1990s-2010s subdivisions", "townhouse communities", "older Mantua-section homes"],
      landmarks: ["Mantua Township Municipal Building", "Mantua Creek frontage", "Wenonah Lake nearby", "the Route 55 access points"],
      neighborhoods: ["the Sewell section", "the Mantua Center area", "the newer subdivisions", "the creek-side blocks"],
      serviceNotes: {
        auto: "Route 55 commuter ramps and small commercial pockets generate steady car-lockout calls",
        residential: "newer Mantua subdivisions overwhelmingly want smart-lock upgrades while older homes need first-time rekeys",
        commercial: "small office and retail tenants need master-key systems and quick rekeys",
        emergency: "creek humidity contributes to seasonal lock corrosion in older homes"
      },
      commonScenarios: [
        "a commuter locked out at the Route 55 park-and-ride",
        "a newer subdivision home upgrading to a smart deadbolt",
        "an older Mantua-section ranch needing a full rekey"
      ]
    }
  },
  {
    slug: "wenonah", name: "Wenonah", county: "Gloucester County", state: "NJ", zipCodes: ["08090"],
    nearbyLocations: ["woodbury", "mantua", "washington-township"], population: "2,300",
    description: "A charming Victorian-era borough known for its beautiful tree canopy.",
    profile: {
      archetype: "victorian-borough",
      vibe: "a tiny Victorian-era borough laid out in 1872 with a famous tree canopy, original Queen Anne and Stick-style cottages, and a preservation-minded community",
      housingStock: ["Victorian Queen Anne and Stick-style cottages", "American Foursquares", "1920s craftsman bungalows", "carefully restored historic homes"],
      landmarks: ["the original 1872 borough plan grid", "the famous tree-canopy streets", "Wenonah Lake", "the historic train station"],
      neighborhoods: ["the central historic blocks", "the Wenonah Lake area"],
      serviceNotes: {
        auto: "the small downtown and lake-area parking generate occasional car-lockout calls",
        residential: "Wenonah's preservation-minded homeowners commonly request restoration-grade locksmith work that respects original mortise hardware, glass knobs, and beveled-glass doors",
        commercial: "the borough's few small businesses want hardware that fits the historic streetscape",
        emergency: "irreplaceable century-old wood doors require non-destructive entry without exception"
      },
      commonScenarios: [
        "a Wenonah Lake area homeowner locked out late at night",
        "a Victorian cottage needing original mortise lock restoration",
        "a 1880s Stick-style single needing a careful master rekey"
      ]
    }
  },
  {
    slug: "national-park", name: "National Park", county: "Gloucester County", state: "NJ", zipCodes: ["08063"],
    nearbyLocations: ["paulsboro", "west-deptford", "woodbury"], population: "3,200",
    description: "A Delaware River borough near Red Bank Battlefield and historic Civil War sites.",
    profile: {
      archetype: "small-borough",
      vibe: "a small Delaware River borough best known for Red Bank Battlefield and the historic Whitall House — a tight-knit waterfront community with a deep Revolutionary War history",
      housingStock: ["small bungalows and single-families", "older riverfront cottages", "post-war Cape Cods", "a few newer custom builds"],
      landmarks: ["Red Bank Battlefield Park", "the Whitall House (1748)", "the Delaware riverfront", "the borough hall"],
      neighborhoods: ["the riverfront blocks", "the central borough"],
      serviceNotes: {
        auto: "Red Bank Battlefield Park's parking generates weekend visitor car-lockout calls",
        residential: "Whitall House-area historic homes occasionally retain original early-American hardware needing specialty service",
        commercial: "the few small businesses need durable, weather-resistant commercial deadbolts",
        emergency: "river-area humidity causes older deadbolts to bind during summer"
      },
      commonScenarios: [
        "a Battlefield Park visitor locked out in the parking lot",
        "a riverfront historic cottage needing original mortise lock restoration",
        "a borough hall area shop with a stuck deadbolt"
      ]
    }
  },
  {
    slug: "paulsboro", name: "Paulsboro", county: "Gloucester County", state: "NJ", zipCodes: ["08066"],
    nearbyLocations: ["national-park", "west-deptford", "swedesboro"], population: "6,100",
    description: "A Delaware River borough with industrial and residential character.",
    profile: {
      archetype: "industrial-river",
      vibe: "a Delaware River borough with the historic Paulsboro Refinery and Marine Terminal, dense rowhouses, and a strong working-class waterfront identity",
      housingStock: ["19th-century brick rowhouses", "Victorian twins", "post-war Cape Cods", "small multi-family conversions"],
      landmarks: ["Paulsboro Refinery", "Paulsboro Marine Terminal", "the Delaware riverfront", "Paulsboro High School", "Broad Street downtown"],
      neighborhoods: ["the Broad Street downtown", "the rowhouse blocks", "the riverfront streets"],
      serviceNotes: {
        auto: "refinery and marine-terminal shift workers generate daily car-lockout calls",
        residential: "century-old rowhouses commonly retain original mortise locks needing skilled non-destructive service",
        commercial: "industrial and port-area businesses need heavy-cycle commercial-grade locks, padlocks, and master-key systems built for salt-air conditions",
        emergency: "river humidity and salt corrosion are recurring causes of lock failure"
      },
      commonScenarios: [
        "a refinery shift worker locked out of a truck cab",
        "a Broad Street rowhouse with a corroded original mortise lock",
        "a port-area business needing high-security padlocks for outdoor storage"
      ]
    }
  },
  {
    slug: "swedesboro", name: "Swedesboro", county: "Gloucester County", state: "NJ", zipCodes: ["08085"],
    nearbyLocations: ["woolwich-township", "logan-township", "paulsboro"], population: "2,500",
    description: "A historic Delaware River town founded by Swedish settlers in the 1600s.",
    profile: {
      archetype: "historic-colonial",
      vibe: "a tiny historic borough founded by Swedish settlers in the 1600s — Old Swedes (Trinity) Church (1784) anchors a Main Street of antique shops, restaurants, and preserved colonial homes",
      housingStock: ["18th-19th century colonials", "Federal-style townhouses", "Victorian singles", "1920s twins"],
      landmarks: ["Old Swedes (Trinity) Church (1784)", "Kings Highway historic district", "Main Street antiques and restaurants", "the colonial-era cemetery"],
      neighborhoods: ["the Kings Highway historic district", "the Main Street downtown", "the streets near Trinity Church"],
      serviceNotes: {
        auto: "Main Street's diagonal parking generates regular car-lockout calls from antique-shop and restaurant visitors",
        residential: "Swedesboro's pre-1850 colonials commonly retain original mortise locks, brass hardware, and irreplaceable beveled-glass doors needing restoration-grade service",
        commercial: "Main Street antique dealers and restaurants want discreet, historically appropriate hardware and after-hours rekeys",
        emergency: "irreplaceable historic wood doors require non-destructive entry without exception"
      },
      commonScenarios: [
        "a Main Street antique-shop visitor locked out of a car",
        "an 1820s Kings Highway colonial needing original mortise lock restoration",
        "a Trinity Church area home needing a discreet master rekey"
      ]
    }
  },
  {
    slug: "woolwich-township", name: "Woolwich Township", county: "Gloucester County", state: "NJ", zipCodes: ["08085"],
    nearbyLocations: ["swedesboro", "logan-township", "east-greenwich"], population: "12,000",
    description: "One of Gloucester County's fastest-growing communities with new residential developments.",
    profile: {
      archetype: "suburban-family",
      vibe: "one of NJ's fastest-growing townships — sprawling 2000s-2010s subdivisions, brand-new homes, and a community that has nearly tripled in size in two decades",
      housingStock: ["2000s-2010s luxury subdivisions", "modern townhouse communities", "newer custom-built single-families", "a small number of older farmhouse properties"],
      landmarks: ["the Locke Avenue corridor", "Woolwich Township Municipal Building", "the township's many newer subdivisions", "the I-295 access"],
      neighborhoods: ["the Locke Avenue developments", "the High Hill section", "the newer subdivisions throughout the township"],
      serviceNotes: {
        auto: "I-295 commuter ramps and the small commercial pockets generate steady car-lockout calls",
        residential: "Woolwich's brand-new homes overwhelmingly want smart-lock installs, access-control hardware, and modern keyless entry — rekey requests are minimal here",
        commercial: "the township's expanding commercial base needs master-key systems and modern access-control hardware",
        emergency: "smart-lock failures are by far the most common emergency call in Woolwich's newer subdivisions"
      },
      commonScenarios: [
        "a brand-new homeowner needing a smart-lock install before move-in",
        "a Locke Avenue subdivision home with a smart-lock battery failure",
        "a commuter locked out at the I-295 park-and-ride"
      ]
    }
  },
  {
    slug: "east-greenwich", name: "East Greenwich", county: "Gloucester County", state: "NJ", zipCodes: ["08056"],
    nearbyLocations: ["woolwich-township", "mantua", "swedesboro"], population: "9,500",
    description: "A growing residential township in the southwestern part of Gloucester County.",
    profile: {
      archetype: "suburban-family",
      vibe: "a growing residential township anchored by Mickleton and Mt. Royal — newer subdivisions, expanding family neighborhoods, and easy I-295 access",
      housingStock: ["1990s-2010s subdivisions", "modern townhouse communities", "newer custom-built single-families", "older Mickleton-section homes"],
      landmarks: ["the Mickleton section", "Mt. Royal section", "the I-295 access", "the township's newer subdivisions"],
      neighborhoods: ["Mickleton", "Mt. Royal", "the newer subdivisions", "the older central blocks"],
      serviceNotes: {
        auto: "I-295 commuter ramps generate steady car-lockout calls",
        residential: "newer East Greenwich subdivisions overwhelmingly want smart-lock upgrades",
        commercial: "small businesses need master-key systems and quick rekeys",
        emergency: "smart-lock failures are an increasingly common emergency call"
      },
      commonScenarios: [
        "a commuter locked out at the I-295 park-and-ride",
        "a Mickleton subdivision home upgrading to a smart deadbolt",
        "an older Mt. Royal home needing a full rekey"
      ]
    }
  },
  {
    slug: "monroe-township-gloucester", name: "Monroe Township", county: "Gloucester County", state: "NJ", zipCodes: ["08094"],
    nearbyLocations: ["washington-township", "glassboro", "williamstown"], population: "38,000",
    description: "A large township in southern Gloucester County experiencing rapid residential growth.",
    profile: {
      archetype: "suburban-large",
      vibe: "a large, fast-growing southern Gloucester township anchored by Williamstown — sprawling subdivisions, commercial expansion along Black Horse Pike and Route 322, and active 55-plus communities",
      housingStock: ["1990s-2010s subdivisions", "active-adult 55-plus community homes", "modern townhouse developments", "older Williamstown center homes", "newer custom-built single-families"],
      landmarks: ["Black Horse Pike retail corridor", "Williamstown Town Center", "Premium Outlets nearby", "the Atlantic City Expressway exits", "Williamstown High School"],
      neighborhoods: ["Williamstown center", "the active-adult communities", "the Black Horse Pike corridor", "Cecil"],
      serviceNotes: {
        auto: "Black Horse Pike retail and the AC Expressway park-and-rides generate steady car-lockout calls",
        residential: "the township's wide age range of housing means everything from active-adult community rekeys to brand-new smart-lock installs",
        commercial: "Pike retailers and small office tenants need master-key systems and quick rekeys",
        emergency: "the township's size means we keep multiple Monroe-zone vans dispatched for fast response"
      },
      commonScenarios: [
        "a Pike shopper locked out at a retail lot",
        "an active-adult community resident needing a full rekey after a roommate change",
        "a newer Williamstown subdivision home upgrading to a smart lock"
      ]
    }
  },
  {
    slug: "clayton", name: "Clayton", county: "Gloucester County", state: "NJ", zipCodes: ["08312"],
    nearbyLocations: ["glassboro", "monroe-township-gloucester", "pitman"], population: "8,200",
    description: "A borough in southern Gloucester County with historic downtown character.",
    profile: {
      archetype: "small-borough",
      vibe: "a small southern Gloucester borough with a historic downtown along Delsea Drive, mid-century homes, and a tight-knit community",
      housingStock: ["older Victorian and Foursquare singles downtown", "1950s-60s ranches", "newer subdivisions on the borough edges", "small twin homes"],
      landmarks: ["Delsea Drive historic downtown", "Clayton Park", "Clayton High School"],
      neighborhoods: ["the Delsea Drive downtown", "the Clayton Park area", "the newer subdivisions"],
      serviceNotes: {
        auto: "Delsea Drive's downtown parking generates regular car-lockout calls",
        residential: "Clayton's downtown Victorians and Foursquares commonly retain original mortise hardware needing careful service",
        commercial: "Delsea Drive shops want quick after-hours rekeys",
        emergency: "older downtown homes occasionally need emergency lockout work due to lock corrosion"
      },
      commonScenarios: [
        "a Delsea Drive diner locked out after dinner",
        "a downtown Victorian needing original mortise lock restoration",
        "a Clayton Park ranch with a stuck back-door deadbolt"
      ]
    }
  },
  {
    slug: "logan-township", name: "Logan Township", county: "Gloucester County", state: "NJ", zipCodes: ["08085"],
    nearbyLocations: ["swedesboro", "woolwich-township", "paulsboro"], population: "6,800",
    description: "A township along the Delaware River with significant industrial and residential areas.",
    profile: {
      archetype: "industrial-river",
      vibe: "a Delaware River township anchored by the massive Pureland Industrial Complex — significant industrial and warehouse activity alongside residential subdivisions and rural parcels",
      housingStock: ["newer subdivisions in the residential pockets", "older single-families on rural parcels", "a few historic farmhouse properties"],
      landmarks: ["Pureland Industrial Complex", "the Delaware riverfront", "Repaupo Creek", "the Pureland warehouses and distribution centers"],
      neighborhoods: ["the Pureland industrial corridor", "the residential subdivisions", "the rural parcels"],
      serviceNotes: {
        auto: "Pureland warehouse and distribution-center shift workers generate constant car-lockout and tractor-trailer-lockout calls",
        residential: "the few residential subdivisions need standard rekeys and smart-lock upgrades",
        commercial: "Pureland industrial buildings need heavy-duty commercial-grade locks, padlocks, panic bars, and high-security master-key systems",
        emergency: "daily industrial operations mean we get lockout calls at every hour"
      },
      commonScenarios: [
        "a Pureland warehouse worker locked out of a truck cab at 3 AM",
        "a distribution center needing high-security padlocks for outdoor storage",
        "a residential subdivision home upgrading to a smart deadbolt"
      ]
    }
  },

  // ─── MERCER COUNTY ───────────────────────────────────────────────────────────
  {
    slug: "trenton", name: "Trenton", county: "Mercer County", state: "NJ", zipCodes: ["08601", "08602", "08603", "08604", "08605", "08606", "08607", "08608", "08609", "08610", "08611", "08618", "08619", "08620", "08625", "08629", "08638", "08648", "08650"],
    nearbyLocations: ["hamilton", "ewing", "lawrence-township"], population: "90,000",
    description: "The state capital of New Jersey, offering rich history and urban conveniences.",
    profile: {
      archetype: "urban-capital",
      vibe: "the state capital — a dense urban city of historic rowhouses, the State House complex, the Old Barracks Museum, the famous 'Trenton Makes' bridge, and active downtown government, hospital, and university campuses",
      housingStock: ["19th-century brick rowhouses", "Federal-style townhouses near the State House", "Victorian singles in the historic neighborhoods", "modern downtown apartments and lofts", "subsidized garden-apartment complexes"],
      landmarks: ["NJ State House complex", "Old Barracks Museum", "the 'Trenton Makes the World Takes' Lower Trenton Bridge", "Cadwalader Park", "Capital City Market", "Trenton Transit Center"],
      neighborhoods: ["Mill Hill", "Chambersburg", "West End", "Wilbur", "Hiltonia", "Cadwalader Heights", "the State House district"],
      serviceNotes: {
        auto: "the Trenton Transit Center, State House lots, and downtown government parking generate constant car-lockout calls — including for legislators and state workers",
        residential: "Trenton's century-old rowhouses commonly retain original mortise locks, brass hardware, and irreplaceable beveled-glass doors needing skilled restoration-grade service",
        commercial: "downtown government buildings, courthouses, and offices need high-security commercial-grade locks, panic bars, master-key systems, and access-control hardware to meet capitol-area code requirements",
        emergency: "daily government and hospital operations mean lockout calls happen at every hour"
      },
      commonScenarios: [
        "a state worker locked out at the State House lot during a late session",
        "a Mill Hill rowhouse owner restoring an 1880s mortise lock",
        "a downtown office needing a discreet master rekey after a senior staff change"
      ]
    }
  },
  {
    slug: "hamilton", name: "Hamilton", county: "Mercer County", state: "NJ", zipCodes: ["08609", "08610", "08619", "08620", "08629", "08650", "08690"],
    nearbyLocations: ["trenton", "ewing", "bordentown-township"], population: "88,000",
    description: "One of New Jersey's largest townships with diverse neighborhoods and amenities.",
    profile: {
      archetype: "suburban-large",
      vibe: "one of NJ's largest townships — sprawling across Hamilton Square, Mercerville, Yardville, and Whitehorse — a wide mix of mid-century homes, modern subdivisions, major retail along Route 33, and the famous Grounds For Sculpture",
      housingStock: ["mid-century single-families and split-levels", "1990s-2010s subdivisions", "townhouse communities", "garden apartments along Route 33", "newer custom-built single-families"],
      landmarks: ["Grounds For Sculpture", "Hamilton Marketplace", "Sayen Gardens", "the Hamilton Train Station (Northeast Corridor)", "Hamilton Square retail"],
      neighborhoods: ["Hamilton Square", "Mercerville", "Yardville", "Whitehorse", "the Hamilton Marketplace area", "Klockner"],
      serviceNotes: {
        auto: "the Hamilton Train Station park-and-ride, Hamilton Marketplace, and Route 33 retail lots generate constant car-lockout calls",
        residential: "Hamilton's mix of housing means we see everything from 1950s deadbolt rekeys to brand-new smart-lock installs in the same week",
        commercial: "Route 33 retailers and small office tenants need master-key systems and quick rekeys",
        emergency: "the township's size means we keep multiple Hamilton-zone vans dispatched for fast response"
      },
      commonScenarios: [
        "a Northeast Corridor commuter locked out at the Hamilton Train Station",
        "a Hamilton Square split-level upgrading from original 1960s deadbolts",
        "a Route 33 retailer needing emergency commercial-lock repair"
      ]
    }
  },
  {
    slug: "ewing", name: "Ewing", county: "Mercer County", state: "NJ", zipCodes: ["08618", "08628", "08638"],
    nearbyLocations: ["trenton", "hamilton", "lawrence-township"], population: "36,000",
    description: "A suburban township adjacent to Trenton, home to The College of New Jersey.",
    profile: {
      archetype: "college-suburban",
      vibe: "a suburban township anchored by The College of New Jersey (TCNJ) and the Trenton-Mercer Airport — a steady stream of students, faculty, and travelers, plus mid-century neighborhoods and a strong family character",
      housingStock: ["mid-century single-families and split-levels", "TCNJ-area student rentals and apartment complexes", "garden apartments along Pennington Road", "newer townhouse developments"],
      landmarks: ["The College of New Jersey (TCNJ)", "Trenton-Mercer Airport", "Olden Avenue retail corridor", "Ewing Senior High School", "Ewing Township Municipal Complex"],
      neighborhoods: ["the TCNJ-area student district", "the Olden Avenue corridor", "the Pennington Road area", "the Mountain View section"],
      serviceNotes: {
        auto: "Trenton-Mercer Airport, TCNJ campus lots, and the Olden Avenue retail strip generate steady car-lockout calls",
        residential: "high turnover among TCNJ student rentals means rekeys between leases are a frequent request — especially in August and December",
        commercial: "Olden Avenue retailers and TCNJ-adjacent businesses need fast, low-disruption rekeys",
        emergency: "late-night student lockouts and airport-area calls keep our Ewing vans busy at every hour"
      },
      commonScenarios: [
        "a TCNJ student locked out of an apartment near campus",
        "an airport traveler locked out at a Trenton-Mercer parking lot",
        "an Olden Avenue business needing an emergency commercial-lock repair"
      ]
    }
  },
  {
    slug: "lawrence-township", name: "Lawrence Township", county: "Mercer County", state: "NJ", zipCodes: ["08648"],
    nearbyLocations: ["trenton", "ewing", "bordentown-city"], population: "34,000",
    description: "A central Mercer County township with strong residential and commercial development.",
    profile: {
      archetype: "commercial-suburban",
      vibe: "a central Mercer township along the Route 1 commercial corridor — anchored by Quaker Bridge Mall, Mercer Mall, the Lawrenceville historic Main Street, and major office parks",
      housingStock: ["1960s-80s single-families", "modern townhouse communities", "luxury subdivisions", "garden apartments along Route 1", "historic Lawrenceville Village singles"],
      landmarks: ["Quaker Bridge Mall", "Mercer Mall", "Lawrenceville Main Street historic district", "Princeton Pike corridor", "Rider University (in adjacent Lawrenceville Village)", "the Lawrenceville School (one of America's oldest prep schools)"],
      neighborhoods: ["Lawrenceville Village", "the Quaker Bridge area", "Princeton Pike corridor", "the historic Main Street district"],
      serviceNotes: {
        auto: "Quaker Bridge Mall, Mercer Mall, and the Route 1 corridor generate constant car-lockout calls — among the highest volumes in Mercer County",
        residential: "Lawrenceville Village's pre-1900 historic homes commonly retain original mortise locks needing restoration-grade service, while newer subdivisions want smart-lock upgrades",
        commercial: "Route 1 retailers, office tenants, and the prep school campuses need master-key systems, panic bars, and high-security commercial deadbolts",
        emergency: "daily retail operations mean lockout calls happen at every hour"
      },
      commonScenarios: [
        "a Quaker Bridge Mall shopper locked out at the parking deck",
        "a Lawrenceville Village 1820s colonial needing original mortise lock restoration",
        "a Route 1 office needing an emergency master rekey"
      ]
    }
  },
  {
    slug: "robbinsville", name: "Robbinsville", county: "Mercer County", state: "NJ", zipCodes: ["08691"],
    nearbyLocations: ["hamilton", "bordentown-township", "lawrence-township"], population: "13,000",
    description: "A growing Mercer County township with new residential developments and Amazon facilities.",
    profile: {
      archetype: "corporate-suburban",
      vibe: "a fast-growing township anchored by the massive Amazon fulfillment center, Town Center retail, and brand-new luxury subdivisions — a strong mix of corporate and family suburban living",
      housingStock: ["2000s-2010s luxury subdivisions", "modern townhouse communities", "Town Center luxury apartments", "newer custom-built single-families"],
      landmarks: ["Amazon fulfillment center (one of the largest in the region)", "Robbinsville Town Center", "the Sharon-Robbinsville Plaza", "the I-195 access points"],
      neighborhoods: ["the Town Center luxury developments", "Foxmoor", "the Washington Boulevard corridor", "the newer subdivisions throughout the township"],
      serviceNotes: {
        auto: "the Amazon fulfillment center and Town Center generate constant car-lockout calls, including for shift workers at every hour",
        residential: "Robbinsville's brand-new homes overwhelmingly want smart-lock installs, access-control hardware, and modern keyless entry",
        commercial: "the Amazon facility, corporate offices, and Town Center retailers need master-key systems and high-security commercial deadbolts",
        emergency: "smart-lock failures are by far the most common emergency call in newer Robbinsville homes"
      },
      commonScenarios: [
        "an Amazon shift worker locked out at the fulfillment-center lot at 4 AM",
        "a Town Center luxury apartment needing a smart-lock install",
        "a brand-new subdivision home needing emergency smart-lock troubleshooting"
      ]
    }
  },

  // ─── SALEM COUNTY ────────────────────────────────────────────────────────────
  {
    slug: "carneys-point", name: "Carneys Point", county: "Salem County", state: "NJ", zipCodes: ["08069"],
    nearbyLocations: ["pennsville", "penns-grove", "swedesboro"], population: "8,700",
    description: "A Delaware River township in Salem County near the Delaware Memorial Bridge.",
    profile: {
      archetype: "industrial-river",
      vibe: "a Delaware River township with deep DuPont Chambers Works industrial heritage, easy Delaware Memorial Bridge access, and a working-class waterfront character",
      housingStock: ["DuPont-era workers' homes", "post-war Cape Cods and ranches", "older single-families", "a few newer custom builds"],
      landmarks: ["Delaware Memorial Bridge access", "DuPont Chambers Works site", "the Delaware riverfront", "Carneys Point Plaza"],
      neighborhoods: ["the Chambers Works area", "the Penn-Beth section", "the riverfront blocks"],
      serviceNotes: {
        auto: "Delaware Memorial Bridge approach traffic and industrial-area shift workers generate steady car-lockout calls",
        residential: "DuPont-era workers' homes commonly retain original early-1900s hardware needing skilled service",
        commercial: "industrial and bridge-area businesses need durable commercial-grade locks built for salt-air conditions",
        emergency: "river humidity and salt corrosion are recurring causes of lock failure"
      },
      commonScenarios: [
        "a bridge-area commuter locked out approaching the Delaware Memorial",
        "a Chambers Works-era workers' home needing original-era lock restoration",
        "a riverfront business with a corroded commercial deadbolt"
      ]
    }
  },
  {
    slug: "penns-grove", name: "Penns Grove", county: "Salem County", state: "NJ", zipCodes: ["08069"],
    nearbyLocations: ["carneys-point", "pennsville", "oldmans-township"], population: "4,800",
    description: "A small Salem County borough along the Delaware River.",
    profile: {
      archetype: "river-borough",
      vibe: "a small Delaware River borough with Victorian-era twins and singles, dense central blocks, and a tight-knit waterfront community",
      housingStock: ["Victorian-era twins", "American Foursquares", "post-war Cape Cods", "small multi-family conversions"],
      landmarks: ["the Delaware riverfront", "Penns Grove High School", "the Main Street downtown", "Riverview Park"],
      neighborhoods: ["the Main Street downtown", "the riverfront blocks"],
      serviceNotes: {
        auto: "Main Street downtown parking generates regular car-lockout calls",
        residential: "Victorian-era twins commonly retain original mortise hardware needing skilled service",
        commercial: "the few small businesses need durable commercial-grade locks",
        emergency: "river humidity is a recurring cause of lock failure in older homes"
      },
      commonScenarios: [
        "a Main Street diner locked out after dinner",
        "a Victorian twin with a corroded original mortise lock",
        "a riverfront business needing an emergency commercial-deadbolt repair"
      ]
    }
  },
  {
    slug: "pennsville", name: "Pennsville", county: "Salem County", state: "NJ", zipCodes: ["08070"],
    nearbyLocations: ["carneys-point", "penns-grove", "pilesgrove"], population: "12,000",
    description: "A Delaware River township in Salem County with ferry access to Delaware.",
    profile: {
      archetype: "river-borough",
      vibe: "a Delaware River township with Three Forts Ferry access to Delaware, the popular Riverview Beach Park, and a strong waterfront-community character",
      housingStock: ["1950s-60s single-families and ranches", "older waterfront cottages", "newer subdivisions", "a few historic homes"],
      landmarks: ["Three Forts Ferry to Delaware", "Riverview Beach Park", "Fort Mott State Park nearby", "the Delaware riverfront"],
      neighborhoods: ["the riverfront blocks", "the central township", "the newer subdivisions"],
      serviceNotes: {
        auto: "the ferry terminal and Riverview Beach Park lots generate weekend car-lockout calls",
        residential: "1950s-era ranches commonly need first-time rekeys after decades on original hardware",
        commercial: "small Route 49 businesses need durable commercial-grade locks built for salt-air conditions",
        emergency: "river humidity and salt corrosion are recurring causes of lock failure"
      },
      commonScenarios: [
        "a ferry passenger locked out at the Three Forts terminal",
        "a riverfront cottage with a corroded original deadbolt",
        "a Route 49 business needing an emergency commercial-lock repair"
      ]
    }
  },
  {
    slug: "oldmans-township", name: "Oldmans Township", county: "Salem County", state: "NJ", zipCodes: ["08066"],
    nearbyLocations: ["swedesboro", "pennsville", "logan-township"], population: "2,100",
    description: "A rural Salem County township along the Delaware River.",
    profile: {
      archetype: "agricultural-rural",
      vibe: "a tiny rural Delaware River township of working farms, large rural parcels, and a handful of crossroads communities",
      housingStock: ["working-farm homesteads", "rural single-families on large parcels", "older farmhouses"],
      landmarks: ["the township's working farms", "the Delaware riverfront", "the rural crossroads"],
      neighborhoods: ["the township's farming hamlets"],
      serviceNotes: {
        auto: "long unlit roads mean fast mobile response is essential after dark",
        residential: "rural farmhouses commonly have detached barns, sheds, and outbuildings needing rekeying",
        commercial: "the few small businesses need durable, weather-resistant commercial hardware",
        emergency: "farm-area calls require techs equipped for outbuilding and equipment-lock work"
      },
      commonScenarios: [
        "a farmer locked out of a barn or equipment shed",
        "a rural farmhouse with a corroded original deadbolt",
        "a long-distance after-dark residential lockout"
      ]
    }
  },
  {
    slug: "pilesgrove", name: "Pilesgrove", county: "Salem County", state: "NJ", zipCodes: ["08098"],
    nearbyLocations: ["woodstown", "pennsville", "washington-township"], population: "4,100",
    description: "A quiet agricultural township in Salem County.",
    profile: {
      archetype: "agricultural-rural",
      vibe: "a quiet agricultural township home to the famous Cowtown Rodeo — working farms, large rural parcels, and a deep South Jersey farming heritage",
      housingStock: ["working-farm homesteads", "rural single-families on large parcels", "older farmhouses", "modular homes on wooded lots"],
      landmarks: ["Cowtown Rodeo (operating since 1929)", "Cowtown Flea Market", "the township's working farms", "the rural Route 40 corridor"],
      neighborhoods: ["the township's farming hamlets"],
      serviceNotes: {
        auto: "Cowtown Rodeo and Flea Market crowds generate weekend car-lockout calls in the gravel lots",
        residential: "rural farmhouses commonly have detached barns, sheds, and outbuildings needing rekeying after years of weather",
        commercial: "the few small businesses need durable, weather-resistant commercial hardware",
        emergency: "farm-area calls require techs equipped for outbuilding and equipment-lock work"
      },
      commonScenarios: [
        "a rodeo visitor locked out at the Cowtown gravel lot",
        "a rural farmhouse with a corroded barn-door padlock",
        "a long-distance after-dark farm lockout"
      ]
    }
  },
  {
    slug: "woodstown", name: "Woodstown", county: "Salem County", state: "NJ", zipCodes: ["08098"],
    nearbyLocations: ["pilesgrove", "elsinboro", "carneys-point"], population: "3,300",
    description: "A historic Salem County borough with Victorian-era architecture.",
    profile: {
      archetype: "victorian-borough",
      vibe: "a charming historic Salem County borough with Victorian-era architecture, a walkable Main Street, and the Woodstown-Pilesgrove farming heritage just outside its limits",
      housingStock: ["Victorian Queen Anne and Stick-style singles", "American Foursquares", "Federal-style townhouses", "1920s twins"],
      landmarks: ["Main Street historic district", "Woodstown High School", "the historic borough hall", "the surrounding farmland"],
      neighborhoods: ["the Main Street historic district", "the central blocks"],
      serviceNotes: {
        auto: "Main Street's diagonal parking generates regular car-lockout calls",
        residential: "Woodstown's pre-1900 Victorians commonly retain original mortise locks, brass hardware, and irreplaceable beveled-glass doors needing restoration-grade service",
        commercial: "Main Street shops want discreet, after-hours rekeys with historically appropriate hardware",
        emergency: "century-old wood doors require non-destructive entry without exception"
      },
      commonScenarios: [
        "a Main Street diner locked out after dinner",
        "an 1880s Queen Anne single needing original mortise lock restoration",
        "a small downtown shop needing a discreet morning rekey"
      ]
    }
  },

  // ─── ATLANTIC COUNTY ─────────────────────────────────────────────────────────
  {
    slug: "hammonton", name: "Hammonton", county: "Atlantic County", state: "NJ", zipCodes: ["08037"],
    nearbyLocations: ["winslow-township", "waterford-township", "southampton-township"], population: "14,000",
    description: "The Blueberry Capital of the World, a charming small town at the edge of the Pinelands.",
    profile: {
      archetype: "agricultural-italian",
      vibe: "the famous Blueberry Capital of the World — a charming small town at the edge of the Pinelands with deep Italian-American heritage, a walkable Bellevue Avenue downtown, and working blueberry farms surrounding the town",
      housingStock: ["Victorian Italian-American singles in the historic downtown", "American Foursquares", "1920s-30s craftsman bungalows", "working-farm homesteads on the town edges", "newer custom-built single-families"],
      landmarks: ["Bellevue Avenue downtown historic district", "the Hammonton Theatre", "the working blueberry farms", "the Italian-American heritage celebrations", "the Atlantic City Expressway exit"],
      neighborhoods: ["the Bellevue Avenue downtown", "the Italian-American historic blocks", "the surrounding farm pockets"],
      serviceNotes: {
        auto: "the Bellevue Avenue downtown and AC Expressway park-and-ride generate steady car-lockout calls — and the summer Italian Festival brings a major weekend spike",
        residential: "Hammonton's Victorian Italian-American singles commonly retain original mortise locks, brass hardware, and unique heritage details needing skilled restoration service",
        commercial: "Bellevue Avenue restaurants and shops want discreet, after-hours rekeys that respect the historic streetscape",
        emergency: "blueberry-farm operations require fast emergency response for outbuilding, equipment, and barn-lock issues"
      },
      commonScenarios: [
        "a Bellevue Avenue restaurant diner locked out after dinner during the Italian Festival",
        "an Italian-heritage Victorian needing original mortise lock restoration",
        "a blueberry farm operator needing emergency rekeys for harvest-season outbuildings"
      ]
    }
  },
  {
    slug: "williamstown", name: "Williamstown", county: "Gloucester County", state: "NJ", zipCodes: ["08094"],
    nearbyLocations: ["monroe-township-gloucester", "washington-township", "hammonton"], population: "15,000",
    description: "A community within Monroe Township offering suburban living in Gloucester County.",
    profile: {
      archetype: "suburban-family",
      vibe: "a Monroe Township community along the Black Horse Pike — a mix of older single-families, expanding subdivisions, the famous Premium Outlets, and active family neighborhoods",
      housingStock: ["older Williamstown-center singles", "1990s-2010s subdivisions", "modern townhouse developments", "newer custom-built single-families", "active-adult community homes"],
      landmarks: ["Premium Outlets at Gloucester", "the Black Horse Pike retail corridor", "Williamstown Town Center", "Williamstown High School"],
      neighborhoods: ["Williamstown center", "the Pike commercial corridor", "the newer subdivisions", "the active-adult communities"],
      serviceNotes: {
        auto: "the Premium Outlets, Pike retail, and AC Expressway park-and-rides generate constant car-lockout calls — among the highest volumes in southern Gloucester",
        residential: "Williamstown's mix of older homes and brand-new subdivisions means a wide range of locksmith service in any week",
        commercial: "Premium Outlets retailers, Pike-front businesses, and small office tenants need master-key systems and quick rekeys",
        emergency: "daily outlet retail operations mean lockout calls happen at every hour"
      },
      commonScenarios: [
        "a Premium Outlets shopper locked out at the parking lot",
        "an older Williamstown center home needing a full rekey after divorce",
        "a newer subdivision home upgrading to a smart deadbolt"
      ]
    }
  },
];
