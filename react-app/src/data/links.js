// Fairfield County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-24

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "Pivot Point";

export const LINKS = [
  // ---------- Government ----------
  { name: "Fairfield County (Official Site)", category: "Government", subcategory: "County", url: "https://www.co.fairfield.oh.us/", description: "Official government portal for Fairfield County, Ohio (county seat: Lancaster)." },
  { name: "Fairfield County Auditor", category: "Government", subcategory: "Auditor", url: "https://auditorrealestate.fairfieldcountyohio.gov/", description: "Property records, valuations, and parcel/property search (hosted on the Pivot Point platform)." },
  { name: "Fairfield County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/fairfield/", description: "Voter registration, polling locations, and election administration." },
  // ---------- Education ----------
  { name: "Fairfield County District Library", category: "Education", subcategory: "Library", url: "https://www.fcdlibrary.org/", description: "County district library system, headquartered in Lancaster." },
  { name: "Lancaster City Schools", category: "Education", subcategory: "K-12", url: "https://www.lancaster.k12.oh.us/", description: "Public school district serving the City of Lancaster (home of the Golden Gales)." },
  { name: "Ohio University Lancaster", category: "Education", subcategory: "Higher Ed", url: "https://www.ohio.edu/lancaster", description: "Regional campus of Ohio University, located in Lancaster." },
  // ---------- Health ----------
  { name: "Fairfield Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.fmchealth.org/", description: "Full-service community hospital and health network in Lancaster." },
  { name: "Fairfield Department of Health", category: "Health", subcategory: "Public Health", url: "https://www.fairfieldhealth.org/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  // ---------- Business & Economy ----------
  { name: "Lancaster-Fairfield County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.lancoc.org/", description: "Business advocacy, member support, and community resources across Fairfield County." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Fairfield County", category: "Community & Social", subcategory: "Workforce", url: "https://ohiomeansjobs.ohio.gov/", description: "Workforce, job-search, and employment services for county residents." },
  // ---------- Recreation & Tourism ----------
  { name: "Visit Fairfield County", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://visitfairfieldcounty.org/", description: "Visitors bureau — downtown Lancaster, Sherman House, festivals, and things to do." },
  // ---------- News & Media ----------
  { name: "Lancaster Eagle-Gazette", category: "News & Media", subcategory: "Newspaper", url: "https://www.lancastereaglegazette.com/", description: "Lancaster's daily newspaper covering Fairfield County news, sports, and events." },
];
