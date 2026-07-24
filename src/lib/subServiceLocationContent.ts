import type { ServiceCategory, SubService } from "@/data/categories";
import type { Location } from "@/data/locations";

// ── Hashing for deterministic per-page variant rotation ─────────────────────
export function hashStr(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}
export function pick<T>(arr: readonly T[], seed: number): T {
  return arr[seed % arr.length];
}

// ── Service category → relevant serviceNotes key ────────────────────────────
export function noteFor(category: ServiceCategory, location: Location): string {
  switch (category.slug) {
    case "automotive": return location.profile.serviceNotes.auto;
    case "residential": return location.profile.serviceNotes.residential;
    case "commercial": return location.profile.serviceNotes.commercial;
    case "emergency": return location.profile.serviceNotes.emergency;
    default: return location.profile.serviceNotes.residential;
  }
}

export function archetypeAnchor(loc: Location): string {
  const a = loc.profile.archetype;
  const map: Record<string, string[]> = {
    "historic-suburban": ["the historic streets", "the tree-canopy blocks", "the borough's preserved homes"],
    "small-borough": ["the close-knit borough", "every block", "the borough's quiet streets"],
    "commercial-suburban": ["the busy commercial corridor", "the high-traffic neighborhoods", "the commuter-heavy blocks"],
    "suburban-family": ["the family neighborhoods", "the quiet residential streets", "every subdivision"],
    "urban-revitalizing": ["every neighborhood", "the historic rowhouse blocks", "the revitalizing waterfront"],
    "commercial-hub": ["the major retail corridors", "every shopping district", "the commercial center"],
    "historic-walkable": ["the walkable historic blocks", "the downtown district", "the tree-lined streets"],
    "luxury-historic": ["the historic district", "the upscale neighborhoods", "the preserved estate streets"],
    "victorian-borough": ["the Victorian-era blocks", "the historic borough", "the gingerbread streets"],
    "transit-hub": ["the transit-anchored neighborhoods", "the apartment complexes", "the station-area blocks"],
    "industrial-river": ["the riverfront blocks", "the industrial corridor", "the working-waterfront neighborhoods"],
    "suburban-large": ["every section of the township", "all corners of the township", "the township's many neighborhoods"],
    "luxury-exclusive": ["the private grounds", "the discreet neighborhoods", "the exclusive blocks"],
    "pinelands-rural": ["the deep-woods parcels", "the Pinelands-edge homes", "the wooded blocks"],
    "dense-urban": ["the dense rowhouse blocks", "every street", "the close-packed neighborhoods"],
    "suburban-affluent": ["the upscale subdivisions", "the corporate-suburb blocks", "the luxury communities"],
    "corporate-suburban": ["the corporate corridors", "the office-park surroundings", "every modern subdivision"],
    "lake-community": ["the lakeside cabins", "the lakefront streets", "the cabin colony"],
    "historic-county-seat": ["the historic county seat", "the courthouse-area blocks", "the downtown historic district"],
    "planned-community": ["every Levitt-built parkway", "the planned-community streets", "the original parkways"],
    "river-borough": ["the riverfront blocks", "the waterfront neighborhoods", "the river-area streets"],
    "agricultural-rural": ["the rural farmland", "the working farms", "the spread-out parcels"],
    "college-town": ["the campus-area neighborhoods", "the student-housing blocks", "the university district"],
    "college-medical": ["the medical-campus area", "the hospital-adjacent neighborhoods", "the campus blocks"],
    "college-suburban": ["the campus-area streets", "the university surroundings", "the student-housing district"],
    "historic-colonial": ["the colonial-era streets", "the historic Main Street", "the preserved 18th-century blocks"],
    "historic-arts": ["the arts-district blocks", "the historic Main Street", "the antique-row streets"],
    "historic-african-american": ["the historic central blocks", "the heritage neighborhoods", "the borough's preserved streets"],
    "historic-resort": ["the former-resort blocks", "the spring-side streets", "the historic cottages"],
    "agricultural-italian": ["the historic downtown", "the Italian-heritage blocks", "the surrounding farms"],
    "urban-capital": ["every neighborhood of the capital", "the rowhouse blocks", "the State House district"],
  };
  const opts = map[a] ?? ["every neighborhood"];
  return pick(opts, hashStr(loc.slug));
}

export function makeTitle(sub: SubService, loc: Location, seed: number): string {
  const variants = [
    `${sub.name} in ${loc.name}, NJ ${loc.zipCodes[0]} | Garden State Locksmith`,
    `${loc.name} ${sub.name} | 7 AM – 10 PM Licensed NJ Locksmith — Garden State`,
    `${sub.name} — ${loc.name}, ${loc.county} | Garden State Locksmith NJ`,
    `Trusted ${sub.name} in ${loc.name}, New Jersey | Garden State Locksmith`,
    `Fast ${sub.name} in ${loc.name}, ${loc.county} | Garden State Locksmith`,
  ];
  return pick(variants, seed);
}

export function makeMeta(sub: SubService, loc: Location, seed: number): string {
  const lm = loc.profile.landmarks[0];
  const variants = [
    `${sub.name} in ${loc.name}, NJ — Garden State Locksmith covers ${loc.name} (${loc.zipCodes.join(", ")}) and the ${loc.profile.archetype.replace(/-/g, " ")} blocks near ${lm}. Licensed NJ techs, fast local dispatch. Call (856) 588-0580.`,
    `Need ${sub.name.toLowerCase()} in ${loc.name}, NJ? We serve ${archetypeAnchor(loc)} of ${loc.name} 7 AM – 10 PM — including the ${lm} area. NJ licensed and insured. Call (856) 588-0580.`,
    `${loc.name}, NJ ${sub.name.toLowerCase()} — fast 7 AM – 10 PM service across ${loc.zipCodes.join(", ")}. Garden State Locksmith knows ${loc.name}'s ${loc.profile.housingStock[0]?.toLowerCase() ?? "homes"} and businesses. Call (856) 588-0580.`,
    `Local ${sub.name.toLowerCase()} for ${loc.name}, ${loc.county}. Garden State Locksmith dispatches NJ-licensed techs to ${archetypeAnchor(loc)} promptly. Call (856) 588-0580.`,
  ];
  return pick(variants, seed);
}

export function makeH1(sub: SubService, loc: Location, seed: number): { line1: string; line2: string } {
  const variants: Array<{ line1: string; line2: string }> = [
    { line1: `${sub.name} in`, line2: `${loc.name}, NJ` },
    { line1: `7 AM – 10 PM ${sub.name}`, line2: `${loc.name}, NJ` },
    { line1: `${loc.name}'s Trusted`, line2: `${sub.name} Team` },
    { line1: `${sub.name} Service for`, line2: `${loc.name}, ${loc.county}` },
    { line1: `Licensed ${sub.name}`, line2: `Across ${loc.name}, NJ` },
  ];
  return pick(variants, seed);
}

const ARCHETYPE_OPENERS: Record<string, string[]> = {
  "historic-suburban": [
    `${"{name}"} is one of New Jersey's quietly historic boroughs, and that history is literally bolted into the front doors — original mortise sets, decades-old strike plates, and trim that's irreplaceable if it splinters.`,
    `Working as a locksmith in ${"{name}"} means respecting the borough's pre-war character. The houses here weren't built for big-box deadbolts, and a tech who doesn't know that does more harm than good.`,
    `Pulling up to a ${"{name}"} job, the first thing we look at is the door itself. This borough is full of original 1920s and 1930s hardware, and most of it is still serviceable if you handle it correctly.`,
  ],
  "small-borough": [
    `${"{name}"} is the kind of small Jersey borough where every block is a known quantity — and where a botched lock job is something neighbors talk about for years.`,
    `In a borough as small as ${"{name}"}, the locksmith you call is going to drive past your door fifty more times that year. We treat every ${"{name}"} job like the next call we make will be from your neighbor.`,
    `${"{name}"} isn't a town where you want a stranger from a national call center showing up at midnight. It's small, it's tight-knit, and the locksmith work here demands the same.`,
  ],
  "commercial-suburban": [
    `${"{name}"} runs on its commercial corridor — and that means lock work in this town is rarely just a one-house call. Storefronts, restaurants, and the homes packed in behind them all sit on the same dispatch radius for us.`,
    `Locksmith work in ${"{name}"} is shaped by the constant flow along its main commercial strip. Hardware here gets used hard, fails fast, and needs a tech who shows up with the right replacements already on the truck.`,
    `${"{name}"} is one of those Jersey towns where the line between residential and commercial blurs by the block. Our ${"{name}"} response is set up for both — sometimes on the same trip.`,
  ],
  "suburban-family": [
    `${"{name}"} is a quiet family suburb, which means most of our ${"{name}"} calls aren't drama — they're a parent locked out at school pickup, a kid who lost the spare, a homeowner who finally wants the deadbolt rekeyed after the closing.`,
    `If you're calling a locksmith in ${"{name}"}, odds are you've got a busy household and you need this fixed before dinner. That's how we set up our ${"{name}"} dispatch — quick in, clean work, no upsell.`,
    `${"{name}"} is the kind of suburban Jersey town where lock work needs to be predictable, polite, and done before the kids are home from practice.`,
  ],
  "urban-revitalizing": [
    `${"{name}"} is a city that's actively rebuilding itself, and that shows up in the lock work. Some blocks have brand-new construction with smart-lock infrastructure; the next street over has 1910 rowhomes with hardware that hasn't been touched since the war.`,
    `Working as a locksmith in ${"{name}"} means being ready for anything from a tenant lockout in a renovated rowhome to an emergency rekey on a property that just changed hands. The city moves fast, and so does our ${"{name}"} response.`,
    `${"{name}"} is one of the most varied locksmith markets in the state. New deadbolts on freshly renovated blocks, century-old mortise locks two streets away — our ${"{name}"} trucks are stocked for both.`,
  ],
  "commercial-hub": [
    `${"{name}"} is built around its retail and commercial volume, and that constant turnover — staff, tenants, deliveries — drives most of the lock work here. Rekeys and master-key updates in ${"{name}"} are not an annual thing; they're a weekly thing.`,
    `When your business is in ${"{name}"}, your locks see more keys than most towns see in a year. Our ${"{name}"} commercial work is built around exactly that.`,
    `${"{name}"} is one of the busiest commercial corridors in the area, and lock failures here happen during business hours, in front of customers. We dispatch to ${"{name}"} accordingly.`,
  ],
  "historic-walkable": [
    `${"{name}"} is the rare New Jersey town where people actually walk to the shops, the train, and the cafes — and that walkable, historic character means our ${"{name}"} lock work is mostly old hardware on old doors that the owners want preserved.`,
    `In ${"{name}"}, a locksmith call is usually about something more than just the lock. It's about preserving a 100-year-old door, matching a strike plate that hasn't been made in decades, or rekeying a downtown shop without disturbing customers.`,
    `${"{name}"} is one of those storybook walkable Jersey towns, and the locks reflect it. Our ${"{name}"} jobs lean heavily on old skeleton-key work, mortise repairs, and historically appropriate hardware swaps.`,
  ],
  "luxury-historic": [
    `${"{name}"} is one of New Jersey's most preserved historic communities — meaning the lock hardware here is often original, irreplaceable, and worth more than the average homeowner realizes.`,
    `Locksmith work in ${"{name}"} is a careful, almost surgical thing. The borough's homes were built when craftsmen made their own keys, and most ${"{name}"} owners want that craftsmanship intact.`,
    `In ${"{name}"}, residents don't call a locksmith — they call someone who can be trusted around an antique mortise lock, a leaded-glass sidelight, and 18th-century millwork. That's how we approach every ${"{name}"} job.`,
  ],
  "victorian-borough": [
    `${"{name}"} is a Victorian-era jewel of a borough, and the locks on its painted ladies and gingerbread homes deserve a tech who treats them as part of the architecture.`,
    `The Victorian homes that define ${"{name}"} were built with original mortise hardware, leaded sidelights, and trim that no big-box hardware will ever match. Our ${"{name}"} work is built for exactly that reality.`,
    `${"{name}"}'s Victorian streetscape is the whole reason most people moved here. Lock work in ${"{name}"} has to respect that — no splintered jambs, no mismatched modern deadbolts screwed into 1880s wood.`,
  ],
  "transit-hub": [
    `${"{name}"} runs around the train timetable — early-morning commuters, late-night arrivals, apartment buildings full of people who lost a fob between platforms. Our ${"{name}"} dispatch is set up for that 7 AM – 10 PM rhythm.`,
    `Living in ${"{name}"} means riding the train, which means key fobs, building fobs, garage remotes, and apartment locks — and most ${"{name}"} lockout calls trace back to one of those four. We arrive ready for all of them.`,
    `${"{name}"} is a transit-anchored community, and a stuck building entry or a lost car key here doesn't just inconvenience you — it derails a commute. We treat ${"{name}"} calls with that urgency.`,
  ],
  "industrial-river": [
    `${"{name}"} sits along the river with a working-industrial backbone, and the lock work here reflects it — heavy commercial doors, warehouse cylinders, padlocks on fence gates, and the homes packed in beside them.`,
    `In ${"{name}"}, a single block can take you from a 1920s rowhome to a heavy-gauge industrial roll-up. Our ${"{name}"} trucks carry hardware for both, because most days we see both.`,
    `${"{name}"}'s working waterfront means lock failures here often happen on doors that weren't designed for elegance — they were designed to keep people out. Our ${"{name}"} work is built around that.`,
  ],
  "suburban-large": [
    `${"{name}"} is one of the biggest townships in the area, with subdivisions, commercial pockets, and older neighborhoods all sharing the same name. Our ${"{name}"} dispatch covers every section, not just the closest one.`,
    `Because ${"{name}"} is so spread out, the locksmith you call needs to actually know which side of town you're on. We do — and our ${"{name}"} trucks stage accordingly.`,
    `${"{name}"} isn't one neighborhood, it's a dozen. A call from one section can be 15 minutes from a call in another, and we route ${"{name}"} dispatch with that in mind.`,
  ],
  "luxury-exclusive": [
    `${"{name}"} is one of New Jersey's most discreet, exclusive communities, and the lock work here is held to that same standard — quiet arrival, unmarked when requested, and absolute confidentiality.`,
    `Working in ${"{name}"} means understanding that homeowners here often don't want their security setup discussed, photographed, or even acknowledged outside the property. We honor that on every ${"{name}"} job.`,
    `${"{name}"} residents call us specifically because we know how to operate in a community where privacy isn't a preference, it's a requirement.`,
  ],
  "pinelands-rural": [
    `${"{name}"} sits in or beside the Pinelands, and that means lock calls here can be deep down a sand road, on a cabin nobody's visited since hunting season, or on a property where cell service barely works.`,
    `Locksmith work in ${"{name}"} requires a truck that can handle the back roads and a tech who isn't surprised by a dirt driveway, a cabin lock, or a gate padlock that's seen ten winters.`,
    `${"{name}"} is one of the more rural pockets we cover, and our ${"{name}"} jobs reflect it — sheds, barns, hunting cabins, and old farmhouses with hardware nobody's looked at in twenty years.`,
  ],
  "dense-urban": [
    `${"{name}"} is one of the densest urban grids in the area, where rowhomes share walls and a single broken lock can affect half a building. Our ${"{name}"} calls move quickly because they have to.`,
    `In ${"{name}"}, a lockout isn't just you on the stoop — it's traffic on the block, neighbors at the windows, and a rowhome door that was probably last rekeyed before you moved in.`,
    `${"{name}"}'s rowhouse density means lock work has to be fast, quiet, and done without a scene. That's how our ${"{name}"} techs operate.`,
  ],
  "suburban-affluent": [
    `${"{name}"} is one of the more affluent suburban communities we cover, with larger homes, multi-car garages, and security setups that often go well beyond a basic deadbolt. Our ${"{name}"} work is set up for that.`,
    `In ${"{name}"}, the average home has more entry points than the average suburban — front, back, garage, side, basement, and often a smart-lock or two thrown in. We arrive at ${"{name}"} jobs prepared for all of them.`,
    `${"{name}"} homeowners expect their locksmith to know high-security cylinders, smart-lock integration, and proper rekey practices for a house that has six exterior doors. That's our standard for every ${"{name}"} call.`,
  ],
  "corporate-suburban": [
    `${"{name}"} is built around its corporate parks and the upscale subdivisions that surround them, which means our ${"{name}"} work splits between executive homes and after-hours office calls.`,
    `Working in ${"{name}"} means knowing both ends of the corridor — the modern subdivisions where families live and the office complexes where they work. We service both.`,
    `${"{name}"} residents and the businesses that anchor the town both expect a locksmith who's punctual, professional, and discreet. That's our ${"{name}"} baseline.`,
  ],
  "lake-community": [
    `${"{name}"} is built around its lake, and our ${"{name}"} calls reflect that — original cabin locks, sliders facing the water, padlocks on boat sheds, and seasonal homes that need rekeys after every rental.`,
    `In ${"{name}"}, lock work is heavily seasonal. Cabins that sit empty all winter, vacation rentals that turn over every Saturday, and lakefront sliders that warp in the humidity. Our ${"{name}"} response is built for it.`,
    `${"{name}"}'s lake-community character means original 1950s cabin hardware, modern smart-lock installs on rentals, and everything in between. We carry it all on every ${"{name}"} call.`,
  ],
  "historic-county-seat": [
    `${"{name}"} is the historic county seat, and the lock work here ranges from 18th-century brass on courthouse-area buildings to modern commercial cylinders along the surrounding business corridor.`,
    `As the county seat, ${"{name}"} concentrates a lot of older institutional and residential buildings into a small footprint. Our ${"{name}"} techs are familiar with the full range of hardware that comes with that.`,
    `${"{name}"}'s downtown blocks carry the county's longest building history, and the locks reflect it. Our ${"{name}"} approach respects what's worth preserving and updates what isn't.`,
  ],
  "planned-community": [
    `${"{name}"} is one of the original Levitt-style planned communities in New Jersey, which means the homes here were built to nearly identical specs — and the lock hardware that came with them is just as uniform.`,
    `Because ${"{name}"} was built as a planned community, the locks across town are remarkably consistent. Our ${"{name}"} trucks stock the exact hardware these original homes were fitted with.`,
    `${"{name}"} residents often don't realize how distinctive their original front-door hardware actually is. Our ${"{name}"} work is built around that history — repair first, replace only when we have to.`,
  ],
  "river-borough": [
    `${"{name}"} is a riverfront borough, and that proximity to the water shows up in the locks — humidity, salt air, and seasonal swelling all take a toll. Our ${"{name}"} trucks come stocked for it.`,
    `Living in ${"{name}"} means dealing with doors that swell every summer and contract every winter. That movement is hard on lock alignment, and most of our ${"{name}"} calls trace back to it.`,
    `${"{name}"}'s waterfront character means our ${"{name}"} lock work skews toward weatherproofing, alignment fixes, and corrosion-resistant hardware that won't fail two summers in.`,
  ],
  "agricultural-rural": [
    `${"{name}"} is genuinely agricultural Jersey — working farms, equipment sheds, long driveways, and gate padlocks that haven't been touched in a decade. Our ${"{name}"} dispatch is built for the spread.`,
    `Locksmith calls in ${"{name}"} aren't typical suburban work. Barns, equipment buildings, farmhouse hardware, and gate locks all show up regularly, and our ${"{name}"} trucks carry the right keys for it.`,
    `${"{name}"} is one of the more rural communities we serve, and our ${"{name}"} jobs reflect it — long property lines, multiple outbuildings, and hardware that has to work in every weather.`,
  ],
  "college-town": [
    `${"{name}"} runs on the college calendar, and our ${"{name}"} lock work follows it — fall move-in lockouts, mid-semester roommate rekeys, off-campus rental turnovers in May, and the same cycle again in August.`,
    `Working in a college town like ${"{name}"} means understanding student-rental velocity. Locks change tenants twice a year here, and we set up our ${"{name}"} work around that rhythm.`,
    `${"{name}"} sees more lockouts per capita than most towns we cover, and that's not a knock — it's the nature of student housing. Our ${"{name}"} response is built for it.`,
  ],
  "college-medical": [
    `${"{name}"} is anchored by both its university and its medical campus, which means our ${"{name}"} work runs during business hours — student lockouts, faculty rekeys, and medical-staff calls at every hour.`,
    `Lock work in ${"{name}"} doesn't have a 9-to-5. Hospital shift changes, student housing, and faculty homes all generate calls at unusual hours, and our ${"{name}"} dispatch is staffed for it.`,
    `${"{name}"}'s mix of campus, hospital, and surrounding neighborhoods means a single day of ${"{name}"} calls can take us from a dorm to an executive home to an after-hours clinic.`,
  ],
  "college-suburban": [
    `${"{name}"} carries the rhythm of its college without losing its suburban character. That means our ${"{name}"} work splits between student housing turnover and quieter family-home jobs on the same blocks.`,
    `Living near a campus shapes ${"{name}"} in obvious ways — rental turnover, late nights, missing keys — and our ${"{name}"} response is set up for it.`,
    `${"{name}"} is the kind of college-adjacent suburb where a Tuesday call is a parent locked out and a Friday call is a student moving in. We handle both with the same speed.`,
  ],
  "historic-colonial": [
    `${"{name}"} is one of the oldest settlements in the state, and the locks here can be older than most of America. Our ${"{name}"} work treats colonial-era hardware with the seriousness it deserves.`,
    `Working in ${"{name}"} means handling 18th-century doors, hand-forged hardware, and trim that simply cannot be replaced. We do not force entries in ${"{name}"} unless every other option is exhausted.`,
    `${"{name}"} predates most of New Jersey, and its historic homes hold lock hardware that requires a careful, knowledgeable hand. That's the standard we hold every ${"{name}"} job to.`,
  ],
  "historic-arts": [
    `${"{name}"} is a historic arts and antiques destination, and our ${"{name}"} lock work is shaped by it — old shop hardware along Main Street, gallery security needs, and historic homes filled with collections that need real protection.`,
    `In ${"{name}"}, locksmith work has to respect the town's historic and creative character. Our ${"{name}"} approach favors restoration over replacement, and discreet upgrades over visible ones.`,
    `${"{name}"}'s arts district means historic shopfronts, gallery security concerns, and homes filled with art that deserves better than a builder-grade deadbolt. We bring the right hardware for it.`,
  ],
  "historic-african-american": [
    `${"{name}"} carries deep historic significance, and we treat the community and its homes with the respect that history deserves on every ${"{name}"} call.`,
    `Working in ${"{name}"} means understanding the borough's heritage and the long-standing homes that anchor it. Our ${"{name}"} work prioritizes preservation and careful hardware repair over quick replacements.`,
    `${"{name}"} is a historically rich community, and the homes here often hold original hardware that's worth keeping. We approach every ${"{name}"} job with that perspective.`,
  ],
  "historic-resort": [
    `${"{name}"} is a former Victorian-era resort town, and the historic cottages here carry original hardware that's both fragile and beautiful. Our ${"{name}"} work is built around preserving it.`,
    `The cottages and former resort buildings of ${"{name}"} hold lock hardware most modern locksmiths simply have never seen. We have, and our ${"{name}"} trucks are stocked accordingly.`,
    `${"{name}"} is one of the most architecturally distinct towns we cover, and the locks tell that story. Our ${"{name}"} approach respects every original piece worth saving.`,
  ],
  "agricultural-italian": [
    `${"{name}"} sits in the heart of New Jersey's agricultural belt, with a strong Italian-American heritage and a downtown that's seen four generations of family businesses. Our ${"{name}"} work covers every part of it.`,
    `Working in ${"{name}"} means knowing the historic downtown shops, the surrounding farms, and the family homes that connect them. Our ${"{name}"} response is set up for the spread.`,
    `${"{name}"} is one of those Jersey towns with a real sense of itself — and the lock work here reflects family-owned shops, multi-generational homes, and the working farms beyond town.`,
  ],
  "urban-capital": [
    `${"{name}"} is the state capital, and that means lock work here doesn't really sleep — government workers, downtown residents, after-hours office calls, and rowhome neighborhoods all generate work at every hour.`,
    `Working in ${"{name}"} means being available when the rest of the state is asleep. Capital-city work runs late, and our ${"{name}"} dispatch is staffed for it.`,
    `${"{name}"} carries the daily rhythm of a capital city, and our ${"{name}"} lock work is set up to match — 7 AM – 10 PM, every neighborhood, no exceptions.`,
  ],
};

export function archetypeOpener(loc: Location, seed: number): string {
  const pool = ARCHETYPE_OPENERS[loc.profile.archetype] ?? [
    `${"{name}"} is one of the New Jersey communities we cover most often, and our ${"{name}"} work is built around what makes the town distinct.`,
  ];
  return pick(pool, seed).replace(/\{name\}/g, loc.name);
}

export function categoryAngle(cat: ServiceCategory, sub: SubService, loc: Location, seed: number): string {
  const note = noteFor(cat, loc);
  const cap = note.charAt(0).toUpperCase() + note.slice(1);
  const lm = pick(loc.profile.landmarks, seed);
  const variants: Record<string, string[]> = {
    automotive: [
      `For ${sub.name.toLowerCase()} specifically, that matters because ${note} — and our ${loc.name} auto trucks carry the transponder gear, key blanks, and programming tools to handle it on the first visit.`,
      `${cap}, which is why our ${loc.name} automotive techs arrive with the diagnostic equipment and key-cutting tools matched to the makes and models we actually see in this town — not a generic kit.`,
      `When you need ${sub.name.toLowerCase()} in ${loc.name}, we're already familiar with the parking situation around ${lm} and the kinds of vehicles that fill it. ${cap}.`,
    ],
    residential: [
      `For ${sub.name.toLowerCase()}, that matters because ${note}. Our ${loc.name} residential techs treat your hardware like it belongs to a real home — not a builder spec sheet.`,
      `${cap}, and ${sub.name.toLowerCase()} done correctly in ${loc.name} means starting with that reality, not ignoring it.`,
      `That's especially true for ${sub.name.toLowerCase()} — ${note} — and we plan every ${loc.name} residential job around it before we ever knock on the door.`,
    ],
    commercial: [
      `For ${sub.name.toLowerCase()}, that matters because ${note}. We schedule ${loc.name} commercial work around your business hours, not ours.`,
      `${cap}, and that shapes how we approach every ${loc.name} ${sub.name.toLowerCase()} job — fast, quiet, after-hours when needed, and documented for your records.`,
      `${cap} — so ${sub.name.toLowerCase()} in ${loc.name} usually means working around staff schedules, deliveries, and customer foot traffic. We build that into the dispatch from the first call.`,
    ],
    emergency: [
      `For ${sub.name.toLowerCase()}, that matters because ${note}. When you call us in an emergency, our ${loc.name} tech is already mentally prepared for the kind of door, frame, and lock they're about to see.`,
      `${cap}, which is why ${sub.name.toLowerCase()} in ${loc.name} demands a tech who arrives ready — not one who has to drive back for the right tools.`,
      `In an emergency, the last thing you want is a locksmith who doesn't know your town. ${cap} — and we know it.`,
    ],
  };
  const pool = variants[cat.slug] ?? variants.residential;
  return pick(pool, seed + 17);
}

export function makeIntroP1(sub: SubService, cat: ServiceCategory, loc: Location, seed: number): string {
  return `${archetypeOpener(loc, seed)} ${categoryAngle(cat, sub, loc, seed)}`;
}

export function makeIntroP2(sub: SubService, loc: Location, seed: number): string {
  const scenario = pick(loc.profile.commonScenarios, seed);
  const lm = pick(loc.profile.landmarks, seed + 5);
  const lm2 = loc.profile.landmarks.length > 1 ? pick(loc.profile.landmarks, seed + 11) : loc.profile.landmarks[0];
  const housing = pick(loc.profile.housingStock, seed + 7);
  const hood = loc.profile.neighborhoods.length > 0 ? pick(loc.profile.neighborhoods, seed + 9) : null;

  const concretePool = [
    `A typical ${loc.name} ${sub.name.toLowerCase()} call for us looks something like ${scenario}, and we've handled enough of them in ${loc.name} to arrive already knowing what we're walking into.`,
    `Recent ${loc.name} jobs include things like ${scenario} — the kind of call that demands a tech who's already familiar with ${loc.name}'s ${housing.toLowerCase()}.`,
    `On a ${loc.name} ${sub.name.toLowerCase()} call, you might be dealing with ${scenario}${hood ? ` over in ${hood}` : ""} — and that's exactly the kind of work we've built our ${loc.name} response around.`,
    `One of our most common ${loc.name} situations is ${scenario}. We see it often enough that the truck is already loaded for it before dispatch even hits send.`,
  ];

  const dispatchPool = [
    `Our trucks stage across ${loc.county}, so reaching ${loc.name} (zip ${loc.zipCodes[0]}) usually takes 15 to 30 minutes whether you're near ${lm} or out by ${lm2}.`,
    `Mobile units staged throughout ${loc.county} mean a ${loc.name} arrival of 15 to 30 minutes on average — same speed at 3 PM as at 3 AM, and the same NJ-licensed tech either way.`,
    `From dispatch to your ${loc.name} address — whether that's near ${lm} or ${lm2} — averages 15 to 30 minutes, during business hours, with the same NJ-licensed tech regardless of the hour.`,
    `Wherever you are in ${loc.name} — ${loc.zipCodes.join(" or ")}, ${lm} area, or anywhere in between — our average arrival is 15 to 30 minutes, day or night, holiday or weekday.`,
  ];

  return `${pick(concretePool, seed + 3)} ${pick(dispatchPool, seed + 13)} ${sub.shortDesc}`;
}

export function makeWhyUs(cat: ServiceCategory, loc: Location, seed: number): Array<{ icon: string; title: string; body: string }> {
  const note = noteFor(cat, loc);
  const lm = pick(loc.profile.landmarks, seed);
  const housing = pick(loc.profile.housingStock, seed + 4);

  const titlePoolA = [`Fast ${loc.name} Response`, `${loc.name}-Local Dispatch`, `Fast Dispatch to ${loc.name}`, `Closest Locksmith to ${loc.name}`];
  const titlePoolB = [`NJ Licensed & ${loc.county}-Insured`, `Fully Licensed in NJ`, `Bonded, Insured, Background-Checked`, `Certified NJ Locksmith Team`];
  const titlePoolC = [`Built for ${loc.name}'s Housing`, `${loc.name} Hardware Expertise`, `Right Tools for ${loc.name}`, `Knows ${loc.name}'s Locks`];
  const titlePoolD = [`Non-Destructive Methods`, `No Damage to Your Door`, `Clean, Damage-Free Entry`, `Trim & Frame Stay Intact`];

  return [
    { icon: "clock", title: pick(titlePoolA, seed), body: `Our nearest tech is dispatched directly to ${loc.name} from a ${loc.county} staging point. Average arrival to ${loc.zipCodes[0]} and the area around ${lm} is 15 to 30 minutes — six days a week, including evenings, Sundays, and holidays (closed Saturdays).` },
    { icon: "shield", title: pick(titlePoolB, seed + 1), body: `Every ${loc.name} job is performed by a New Jersey state-licensed locksmith who is fully bonded, insured, and background-checked. You get a real receipt, real accountability, and a name and badge before any work begins.` },
    { icon: "star", title: pick(titlePoolC, seed + 2), body: `${loc.name}'s ${housing.toLowerCase()} need a different approach than a generic suburban call. ${note.charAt(0).toUpperCase() + note.slice(1)} — and our trucks carry the matching hardware before we even arrive.` },
    { icon: "star", title: pick(titlePoolD, seed + 3), body: `We use professional-grade picking, decoding, and bypass tools so ${loc.name} doors, frames, and historic trim stay intact. Forced entry is a last resort — and on most ${loc.name} jobs we never need it at all.` },
  ];
}

export function makeFAQs(sub: SubService, cat: ServiceCategory, loc: Location, seed: number): Array<{ q: string; a: string }> {
  const note = noteFor(cat, loc);
  const lm = pick(loc.profile.landmarks, seed);
  const lm2 = loc.profile.landmarks.length > 1 ? pick(loc.profile.landmarks, seed + 1) : loc.profile.landmarks[0];
  const housing = pick(loc.profile.housingStock, seed + 2);
  const scenario = pick(loc.profile.commonScenarios, seed + 3);
  const hoodLine = loc.profile.neighborhoods.length > 0
    ? `including ${loc.profile.neighborhoods.slice(0, 3).join(", ")}`
    : `across all ${loc.zipCodes.length > 1 ? "zip codes" : "of " + loc.zipCodes[0]}`;

  return [
    { q: `How fast can a locksmith get to ${loc.name}, NJ?`, a: `Our average response to ${loc.name} is 15 to 30 minutes from the time you call. We keep mobile units staged across ${loc.county}, so wherever you are in ${loc.name} — near ${lm}, near ${lm2}, or anywhere else — the closest available NJ-licensed tech is dispatched immediately.` },
    { q: `Do you actually know ${loc.name}, or are you a national call center?`, a: `Garden State Locksmith is a real local NJ company. We work in ${loc.name} every week. We know it's ${loc.profile.vibe.replace(/^a /, "a ")}, and we know what kind of locks are typical here — ${note}.` },
    { q: `Can you handle ${housing.toLowerCase()} in ${loc.name}?`, a: `Yes — that's exactly the kind of ${loc.name} work we specialize in. ${housing.charAt(0).toUpperCase() + housing.slice(1)} are very common in ${loc.name}, and our trucks carry the matching hardware so we can usually rekey, repair, or replace on the same visit. We've seen jobs like ${scenario} many times in ${loc.name}.` },
    { q: `What ${loc.name} zip codes and neighborhoods do you serve?`, a: `We serve every ${loc.name} address — zip code${loc.zipCodes.length > 1 ? "s" : ""} ${loc.zipCodes.join(", ")}, ${hoodLine}. We also cover the surrounding ${loc.county} towns. If you're not sure whether your address is in our ${loc.name} service zone, just call (856) 588-0580 and we'll confirm in seconds.` },
    { q: `What are your hours in ${loc.name}?`, a: `Garden State Locksmith answers ${loc.name} calls 7 AM – 10 PM Monday through Thursday and Sunday, 7 AM – 6 PM on Friday, and we're closed Saturdays. Holidays and Sundays are covered. Every job is handled by a real NJ-licensed technician. ${loc.profile.archetype === "transit-hub" || loc.profile.archetype === "urban-revitalizing" || loc.profile.archetype === "urban-capital" ? `${loc.name}'s daily activity is exactly why we keep ${loc.name} fully staffed throughout business hours.` : `Whether the call comes at 8 AM or 9 PM, ${loc.name} gets the same fast response.`}` },
  ];
}

export function makeAlt(sub: SubService, loc: Location): string {
  return `${sub.name} service in ${loc.name}, ${loc.county}, New Jersey — Garden State Locksmith near ${loc.profile.landmarks[0]}`;
}

export function whyHeading(loc: Location, seed: number): string {
  const variants = [`Why ${loc.name} Calls Garden State Locksmith`, `What Makes Us ${loc.name}'s Locksmith of Choice`, `Why ${loc.name} Residents and Businesses Trust Us`, `The Locksmith ${loc.name} Recommends`];
  return pick(variants, seed);
}

export function aboutHeading(loc: Location, seed: number): string {
  const variants = [`Serving Every Block of ${loc.name}, ${loc.county}`, `Our ${loc.name} Coverage Area`, `${loc.name}, NJ — Where We Work`, `Garden State Locksmith in ${loc.name}`, `What We Cover in ${loc.name}`];
  return pick(variants, seed);
}

export function nearbyHeading(loc: Location, sub: SubService, seed: number): string {
  const variants = [`${sub.name} in Towns Near ${loc.name}`, `Also Covering Near ${loc.name}`, `Other ${loc.county} Towns We Serve`, `${sub.name} Across ${loc.county}`];
  return pick(variants, seed);
}
