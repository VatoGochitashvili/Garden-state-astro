export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  keywords: string[];
  responseTime: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: "lockout-services",
    name: "Lockout Services",
    shortDesc: "Fast, non-destructive entry for homes and businesses.",
    longDesc: "Locked out? We provide rapid, damage-free lockout services for residential and commercial properties. Our experienced technicians arrive promptly equipped with specialized tools to get you back inside quickly and safely.",
    icon: "DoorOpen",
    keywords: ["home lockout", "business lockout", "locked out of house", "emergency door unlock"],
    responseTime: "Same Day",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  {
    slug: "lock-installation",
    name: "Lock Installation",
    shortDesc: "Professional installation of high-security locks.",
    longDesc: "Upgrade your security with our professional lock installation services. We install deadbolts, smart locks, mortise locks, and high-security cylinders from top brands to ensure your property is fully protected.",
    icon: "Wrench",
    keywords: ["lock installation", "new locks", "door lock install", "smart lock installation"],
    responseTime: "Scheduled or Same Day",
    image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=800&q=80"
  },
  {
    slug: "lock-repair",
    name: "Lock Repair",
    shortDesc: "Expert repair for broken or malfunctioning locks.",
    longDesc: "Don't leave your property vulnerable. We repair all types of locks, fixing issues like sticking mechanisms, broken components, or misalignment. We'll restore your lock's functionality quickly.",
    icon: "Settings",
    keywords: ["lock repair", "fix broken lock", "door lock repair", "jammed lock"],
    responseTime: "Same Day",
    image: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?w=800&q=80"
  },
  {
    slug: "deadbolt-installation",
    name: "Deadbolt Installation",
    shortDesc: "Heavy-duty deadbolt installation for maximum security.",
    longDesc: "A quality deadbolt is your first line of defense. We provide precise deadbolt installation on wooden and metal doors, ensuring perfect alignment and robust security against forced entry.",
    icon: "Shield",
    keywords: ["deadbolt installation", "install deadbolt", "heavy duty lock", "door security"],
    responseTime: "Scheduled or Same Day",
    image: "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?w=800&q=80"
  },
  {
    slug: "key-duplication",
    name: "Key Duplication",
    shortDesc: "Accurate key cutting for homes and businesses.",
    longDesc: "Need a spare? We offer precise key duplication services for all standard keys, high-security keys, and specialized commercial keys. Our cuts are guaranteed to work smoothly.",
    icon: "Key",
    keywords: ["key cutting", "key copy", "spare keys", "duplicate keys"],
    responseTime: "Immediate",
    image: "https://images.unsplash.com/photo-1582977892982-ba43e31bde28?w=800&q=80"
  },
  {
    slug: "rekeying-services",
    name: "Rekeying Services",
    shortDesc: "Change your keys without replacing the hardware.",
    longDesc: "Just moved in or lost a key? Rekeying is a cost-effective way to secure your property. We alter the internal pins of your existing locks so old keys no longer work, providing you with a brand new set.",
    icon: "KeySquare",
    keywords: ["rekey locks", "change keys", "lock rekeying", "new keys old lock"],
    responseTime: "Same Day",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
  },
  {
    slug: "master-key-systems",
    name: "Master Key Systems",
    shortDesc: "Convenient access control for commercial properties.",
    longDesc: "Simplify your keychain while maintaining tight security. We design and implement custom master key systems for offices, apartment complexes, and retail spaces, granting varying levels of access to different personnel.",
    icon: "Network",
    keywords: ["master key system", "access control", "commercial rekey", "grand master key"],
    responseTime: "Scheduled",
    image: "https://images.unsplash.com/photo-1580973543890-8cf4c7a7a9f7?w=800&q=80"
  },
  {
    slug: "car-lockout-service",
    name: "Car Lockout Service",
    shortDesc: "Rapid automotive entry without damaging your vehicle.",
    longDesc: "Locked your keys in the car? Our emergency auto locksmiths can safely open any make or model without scratching the paint or damaging the weather stripping. Available 7 AM – 10 PM.",
    icon: "Car",
    keywords: ["car lockout", "keys locked in car", "auto lockout", "unlock car door"],
    responseTime: "Same Day",
    image: "https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&q=80"
  },
  {
    slug: "automotive-key-replacement",
    name: "Automotive Key Replacement",
    shortDesc: "On-the-spot key replacement for most vehicles.",
    longDesc: "Lost your car keys? We cut and program replacement car keys on-site, including standard keys, fobs, and smart keys, saving you a costly and time-consuming trip to the dealership.",
    icon: "KeySquare",
    keywords: ["car key replacement", "lost car keys", "new car key", "auto key maker"],
    responseTime: "Same Day",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
  },
  {
    slug: "transponder-key-programming",
    name: "Transponder Key Programming",
    shortDesc: "Advanced programming for modern vehicle keys.",
    longDesc: "We have the technology to program transponder keys and remote fobs for almost all modern vehicles. We can sync new keys to your car's immobilizer system quickly and affordably.",
    icon: "Cpu",
    keywords: ["transponder key", "key fob programming", "chip key", "smart key programming"],
    responseTime: "Same Day",
    image: "https://images.unsplash.com/photo-1473171212-e5700d2f95ce?w=800&q=80"
  },
  {
    slug: "ignition-repair",
    name: "Ignition Repair",
    shortDesc: "Fixing jammed or broken car ignitions.",
    longDesc: "Key won't turn? Key broken off in the ignition? We provide expert ignition cylinder repair and replacement. We can extract broken keys and rebuild the ignition so you can get back on the road.",
    icon: "Zap",
    keywords: ["ignition repair", "key stuck in ignition", "replace ignition cylinder", "car won't start"],
    responseTime: "Same Day",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80"
  },
  {
    slug: "commercial-locksmith",
    name: "Commercial Locksmith",
    shortDesc: "Comprehensive security solutions for businesses.",
    longDesc: "Protect your business, employees, and assets. We offer commercial hardware installation, panic bars, door closers, high-security locks, and comprehensive access control solutions tailored to your facility.",
    icon: "Building2",
    keywords: ["commercial locksmith", "business security", "panic bar installation", "storefront locks"],
    responseTime: "Scheduled or Emergency",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
  },
  {
    slug: "safe-opening",
    name: "Safe Opening",
    shortDesc: "Professional safe cracking and opening.",
    longDesc: "Lost your combination or the lock malfunctioned? Our skilled technicians use advanced techniques to open your safe with minimal to no damage, retrieving your valuables securely.",
    icon: "Unlock",
    keywords: ["safe opening", "safe cracking", "unlock safe", "forgot safe combination"],
    responseTime: "Scheduled",
    image: "https://images.unsplash.com/photo-1607619662634-3ac2573d1574?w=800&q=80"
  },
  {
    slug: "safe-installation",
    name: "Safe Installation",
    shortDesc: "Secure installation of home and commercial safes.",
    longDesc: "We supply and bolt down high-quality safes for homes and businesses. Proper installation ensures your safe cannot be easily removed, providing maximum protection for your most important items.",
    icon: "Lock",
    keywords: ["safe installation", "bolt down safe", "home safe", "commercial safe"],
    responseTime: "Scheduled",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"
  },
  {
    slug: "emergency-locksmith",
    name: "Emergency Locksmith",
    shortDesc: "7 AM – 10 PM rapid response for all lock emergencies.",
    longDesc: "Emergencies don't happen on a schedule. Whether it's 3 AM or a holiday weekend, our fully equipped mobile units are ready to handle lockouts, break-in repairs, and urgent security issues immediately.",
    icon: "AlertTriangle",
    keywords: ["emergency locksmith", "24 hour locksmith", "urgent lock repair", "after hours locksmith"],
    responseTime: "ASAP",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
  }
];
