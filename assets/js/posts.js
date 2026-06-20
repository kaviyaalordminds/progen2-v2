/* ==========================================================================
   posts.js
   Hardcoded data source for all blog posts.
   To add a new post: copy an object below, give it a new unique "id",
   and fill in the fields. blog.html and post.html will pick it up
   automatically — no other file needs to change.
========================================================================== */

const BLOG_POSTS = [
  {
    id: "4th-power-hike-solar-surcharge-update",
    title: "4th Power Hike In 5 Months: Solar Surcharge Update",
    category: "Industry News",
    author: "Progen Team",
    date: "2025-12-17",
    image: "assets/images/servicesimg1.png",
    excerpt: "Electricity tariffs have risen for the fourth time in five months. Here's what the latest surcharge means for your power bill and why solar is becoming the obvious hedge.",
    content: `
      <p>Electricity tariffs have been revised upward for the fourth time in just five months, putting renewed pressure on household and commercial power bills across the region.</p>
      <h3>What changed</h3>
      <p>The latest surcharge adjustment reflects rising fuel costs and grid infrastructure spending being passed on to consumers. For an average household, this translates to a noticeable jump in the monthly electricity bill.</p>
      <h3>Why solar insulates you from this</h3>
      <p>A rooftop solar installation locks in a large share of your energy costs at the time of installation. Once your system is commissioned, the electricity it generates is effectively immune to future tariff hikes, surcharges, and fuel cost adjustments.</p>
      <h3>What you can do</h3>
      <p>If you've been on the fence about going solar, repeated tariff hikes are a strong signal that grid electricity costs will keep climbing. A simple savings audit can show you exactly how much a rooftop system could save over its lifetime.</p>
    `
  },
  {
    id: "solar-om-keeps-plants-running-better",
    title: "How Solar O&M Keeps Plants Running Better",
    category: "Maintenance",
    author: "Progen Team",
    date: "2022-03-30",
    image: "assets/images/servicesimg2.jpg",
    excerpt: "Operations and Maintenance (O&M) is the most overlooked factor in long-term solar performance. Here's how a disciplined O&M plan protects your investment.",
    content: `
      <p>A solar plant's performance doesn't end at commissioning — it begins there. Operations and Maintenance (O&M) is what determines whether a plant performs at 95% of its rated capacity or quietly degrades to 70% over a few years.</p>
      <h3>Core O&M activities</h3>
      <ul>
        <li>Regular module cleaning to remove dust, pollen, and bird droppings</li>
        <li>Thermal imaging to catch hotspots before they become failures</li>
        <li>Inverter health checks and firmware updates</li>
        <li>Vegetation management around ground-mount arrays</li>
        <li>String-level monitoring to catch underperforming panels early</li>
      </ul>
      <h3>The financial case for O&M</h3>
      <p>A well-maintained plant typically retains 1-2% more annual energy yield compared to a poorly maintained one, which compounds significantly over a 25-year system life. O&M cost is a fraction of the revenue it protects.</p>
    `
  },
  {
    id: "rooftop-vs-ground-mount-solar",
    title: "Rooftop vs Ground-Mount Solar: Which Is Right for You?",
    category: "Guides",
    author: "Progen Team",
    date: "2025-11-02",
    image: "assets/images/servicesimg3.jpg",
    excerpt: "Choosing between rooftop and ground-mounted solar depends on land availability, roof condition, and your energy goals. We break down the trade-offs.",
    content: `
      <p>Both rooftop and ground-mount solar systems convert sunlight into electricity, but the right choice depends on your site conditions and goals.</p>
      <h3>Rooftop solar</h3>
      <p>Ideal when usable land is limited. Rooftop systems make use of otherwise unused space and typically have lower installation costs since they don't require separate mounting structures or land clearing.</p>
      <h3>Ground-mount solar</h3>
      <p>Better suited for utility-scale or large commercial projects where land is available. Ground-mount arrays allow for optimal panel orientation and easier maintenance access, often resulting in higher energy yield per panel.</p>
      <h3>Our recommendation</h3>
      <p>For residential and most commercial properties, rooftop is usually the more cost-effective starting point. For industrial or utility-scale needs, ground-mount unlocks greater scale and efficiency.</p>
    `
  },
  {
    id: "understanding-net-metering-india",
    title: "Understanding Net Metering: A Homeowner's Guide",
    category: "Guides",
    author: "Progen Team",
    date: "2025-10-15",
    image: "assets/images/servicesimg4.jpg",
    excerpt: "Net metering lets you sell excess solar power back to the grid. Here's how it works, what to expect on your bill, and how to apply.",
    content: `
      <p>Net metering is the billing mechanism that makes rooftop solar financially attractive for most homeowners. It allows excess electricity generated by your panels to be exported to the grid in exchange for credits.</p>
      <h3>How it works</h3>
      <p>During the day, your solar system generates more power than your home may be using. This surplus flows back to the grid through a bi-directional meter. At night or on cloudy days, you draw power back from the grid, and your bill reflects the net of what you exported versus what you consumed.</p>
      <h3>Getting connected</h3>
      <p>Net metering applications are typically processed through your local electricity distribution company, and your installer can usually handle this paperwork on your behalf as part of the installation process.</p>
    `
  },
  {
    id: "solar-panel-degradation-explained",
    title: "Solar Panel Degradation: What's Normal and What's Not",
    category: "Education",
    author: "Progen Team",
    date: "2025-09-20",
    image: "assets/images/servicesimg5.jpg",
    excerpt: "All solar panels lose efficiency over time — but how much, and how fast? We explain typical degradation rates and warning signs to watch for.",
    content: `
      <p>Solar panels don't suddenly stop working — they degrade gradually. Understanding normal degradation helps you know when something's actually wrong.</p>
      <h3>Typical degradation rates</h3>
      <p>Quality crystalline silicon panels typically degrade at around 0.5% per year, meaning a panel rated at 100% output in year one might still produce around 87-88% of its original output after 25 years. Most manufacturers warranty against degradation exceeding this rate.</p>
      <h3>Warning signs of abnormal degradation</h3>
      <ul>
        <li>Sudden drops in output not explained by weather or shading</li>
        <li>Visible discoloration or delamination on panel surfaces</li>
        <li>Hotspots detected during thermal scans</li>
        <li>Inverter error codes pointing to string-level faults</li>
      </ul>
    `
  },
  {
    id: "commercial-solar-roi-breakdown",
    title: "Commercial Solar ROI: A Realistic Breakdown",
    category: "Finance",
    author: "Progen Team",
    date: "2025-08-11",
    image: "assets/images/servicesimg1.png",
    excerpt: "How long does it actually take a commercial solar investment to pay for itself? We walk through the real numbers businesses should expect.",
    content: `
      <p>Business owners considering solar often ask one question first: when does it pay for itself? The honest answer depends on several factors, but typical commercial systems achieve payback within 3-6 years.</p>
      <h3>Factors that affect ROI</h3>
      <ul>
        <li>Current electricity tariff and expected future increases</li>
        <li>Available roof or land area and system size</li>
        <li>Applicable depreciation benefits and incentives</li>
        <li>Financing structure — cash purchase vs loan vs lease</li>
      </ul>
      <h3>Beyond payback period</h3>
      <p>After the payback period, a commercial system continues generating nearly free electricity for 20+ more years, which is where the real long-term value is created.</p>
    `
  },
  {
    id: "off-grid-vs-hybrid-solar-systems",
    title: "Off-Grid vs Hybrid Solar: Choosing the Right Setup",
    category: "Guides",
    author: "Progen Team",
    date: "2025-07-22",
    image: "assets/images/servicesimg2.jpg",
    excerpt: "Not every property has reliable grid access. Here's how off-grid and hybrid solar systems differ, and which makes sense for your situation.",
    content: `
      <p>For properties with unreliable or no grid access, off-grid and hybrid solar systems offer independent power solutions — but they work quite differently.</p>
      <h3>Off-grid systems</h3>
      <p>Completely disconnected from the utility grid, off-grid systems rely entirely on battery storage to power your property when the sun isn't shining. They require larger battery banks and careful load planning.</p>
      <h3>Hybrid systems</h3>
      <p>Hybrid systems combine solar, battery storage, and a grid connection, giving you the best of both worlds — battery backup during outages and the ability to draw from or export to the grid as needed.</p>
      <h3>Which to choose</h3>
      <p>If you have grid access, hybrid is almost always the more flexible and cost-effective choice. Off-grid makes sense primarily for remote sites with no practical grid connection.</p>
    `
  },
  {
    id: "solar-water-pumps-for-agriculture",
    title: "How Solar Water Pumps Are Transforming Agriculture",
    category: "Applications",
    author: "Progen Team",
    date: "2025-06-18",
    image: "assets/images/servicesimg3.jpg",
    excerpt: "Solar-powered irrigation is cutting diesel costs and improving reliability for farmers. Here's how solar pumping systems work and what to expect.",
    content: `
      <p>Diesel and grid-dependent irrigation pumps are a major recurring cost for farmers. Solar water pumps eliminate fuel costs entirely and run reliably during daylight hours when irrigation is typically needed most.</p>
      <h3>How solar pumping works</h3>
      <p>Solar panels power a specialized pump controller that drives a submersible or surface pump directly, without needing batteries in most agricultural applications, since pumping happens during sunlight hours.</p>
      <h3>Benefits for farmers</h3>
      <ul>
        <li>Zero fuel cost after installation</li>
        <li>Minimal maintenance compared to diesel pumps</li>
        <li>No dependency on unreliable grid power in rural areas</li>
        <li>Often eligible for government subsidy schemes</li>
      </ul>
    `
  },
  {
    id: "energy-storage-systems-explained",
    title: "Battery Energy Storage: Do You Really Need One?",
    category: "Education",
    author: "Progen Team",
    date: "2025-05-09",
    image: "assets/images/servicesimg4.jpg",
    excerpt: "Battery storage adds resilience and flexibility to a solar system, but it's not always necessary. We break down when it makes sense.",
    content: `
      <p>Adding battery storage to a solar system increases upfront cost significantly, so it's worth understanding exactly what it does and doesn't solve for.</p>
      <h3>What batteries solve</h3>
      <ul>
        <li>Backup power during grid outages</li>
        <li>Storing excess solar generation for use after sunset</li>
        <li>Reducing reliance on the grid during peak tariff hours</li>
      </ul>
      <h3>When you might skip it</h3>
      <p>If your area has stable grid power and net metering is available with favorable export rates, a battery may not be financially necessary — exporting excess solar to the grid can be just as effective as storing it.</p>
    `
  },
  {
    id: "street-lighting-solar-led-benefits",
    title: "Why Cities Are Switching to Solar LED Street Lighting",
    category: "Applications",
    author: "Progen Team",
    date: "2025-04-14",
    image: "assets/images/servicesimg5.jpg",
    excerpt: "Solar street lights are cutting municipal energy costs and improving uptime in areas with unreliable grid infrastructure.",
    content: `
      <p>Municipalities are increasingly turning to solar-powered LED street lighting to reduce both energy costs and infrastructure complexity.</p>
      <h3>Key advantages</h3>
      <ul>
        <li>No trenching or grid cabling required — each unit is self-contained</li>
        <li>Continues operating during grid outages</li>
        <li>Significantly lower operating cost versus grid-powered lighting</li>
        <li>Faster deployment in rural or hard-to-reach areas</li>
      </ul>
      <h3>Considerations</h3>
      <p>Battery sizing needs to account for regional weather patterns and the number of cloudy days expected, to ensure lights remain reliable through the monsoon season.</p>
    `
  },
  {
    id: "epc-vs-diy-solar-installation",
    title: "EPC vs DIY: Why Turnkey Solar Installation Wins",
    category: "Guides",
    author: "Progen Team",
    date: "2025-03-08",
    image: "assets/images/servicesimg1.png",
    excerpt: "Doing solar installation piecemeal can lead to mismatched components and compliance headaches. Here's why an EPC approach is usually smarter.",
    content: `
      <p>EPC stands for Engineering, Procurement, and Construction — a turnkey approach where a single provider handles design, equipment sourcing, and installation end to end.</p>
      <h3>Why turnkey matters</h3>
      <p>Solar systems involve multiple interdependent components: panels, inverters, mounting structures, wiring, and grid connection equipment. Sourcing these separately risks compatibility issues and voided warranties.</p>
      <h3>What a good EPC partner provides</h3>
      <ul>
        <li>Site assessment and system design tailored to your load</li>
        <li>Single point of accountability for performance</li>
        <li>Handling of permits, net metering applications, and compliance</li>
        <li>Coordinated warranties across all system components</li>
      </ul>
    `
  },
  {
    id: "solar-inverter-types-explained",
    title: "String, Central, or Microinverters: Which Is Best?",
    category: "Education",
    author: "Progen Team",
    date: "2025-02-19",
    image: "assets/images/servicesimg2.jpg",
    excerpt: "The inverter is the brain of your solar system. We compare the three main types and explain where each one fits best.",
    content: `
      <p>Inverters convert the DC electricity generated by solar panels into the AC electricity used by homes and the grid. The type you choose affects performance, cost, and resilience to shading.</p>
      <h3>String inverters</h3>
      <p>The most common and cost-effective choice for residential and commercial systems with consistent sun exposure across the array.</p>
      <h3>Microinverters</h3>
      <p>Installed per-panel, microinverters optimize each panel individually, making them ideal for roofs with partial shading or multiple orientations.</p>
      <h3>Central inverters</h3>
      <p>Used in utility-scale plants where a small number of large inverters manage massive arrays efficiently.</p>
    `
  },
  {
    id: "solar-subsidy-schemes-update",
    title: "Latest Government Solar Subsidy Schemes: What's Available",
    category: "Industry News",
    author: "Progen Team",
    date: "2025-01-25",
    image: "assets/images/servicesimg3.jpg",
    excerpt: "Government incentives can meaningfully reduce your solar installation cost. Here's a roundup of current schemes worth knowing about.",
    content: `
      <p>Various central and state-level subsidy schemes exist to make solar adoption more affordable for residential and agricultural consumers.</p>
      <h3>What's typically covered</h3>
      <ul>
        <li>Capital subsidies on residential rooftop installations up to a defined capacity</li>
        <li>Subsidized solar pump schemes for farmers</li>
        <li>Accelerated depreciation benefits for commercial and industrial installations</li>
      </ul>
      <h3>Note on changing policy</h3>
      <p>Subsidy schemes and their terms are revised periodically, so it's worth confirming current eligibility and benefit amounts with your installer before finalizing a system size.</p>
    `
  },
  {
    id: "utility-scale-solar-grid-integration",
    title: "Utility-Scale Solar: Challenges of Grid Integration",
    category: "Industry News",
    author: "Progen Team",
    date: "2024-12-12",
    image: "assets/images/servicesimg4.jpg",
    excerpt: "Large-scale solar plants face unique technical challenges connecting to the grid. Here's what utility-scale developers need to plan for.",
    content: `
      <p>Unlike small rooftop systems, utility-scale solar plants must be carefully integrated with the broader grid to maintain stability and reliability.</p>
      <h3>Key challenges</h3>
      <ul>
        <li>Voltage and frequency regulation as large amounts of variable power enter the grid</li>
        <li>Transmission infrastructure capacity near the plant site</li>
        <li>Forecasting generation accurately to support grid balancing</li>
        <li>Coordinating with grid operators on connection agreements and protocols</li>
      </ul>
      <h3>Why this matters for developers</h3>
      <p>Grid integration studies should be conducted early in project planning, since transmission constraints can significantly affect project viability and timelines.</p>
    `
  },
  {
    id: "solar-myths-debunked",
    title: "5 Solar Myths That Are Costing You Money",
    category: "Education",
    author: "Progen Team",
    date: "2024-11-05",
    image: "assets/images/servicesimg5.jpg",
    excerpt: "Misconceptions about solar power often hold people back from making the switch. Let's clear up some of the most common myths.",
    content: `
      <p>Despite solar's growing adoption, several persistent myths continue to create hesitation. Here are five worth clearing up.</p>
      <h3>Myth 1: Solar doesn't work on cloudy days</h3>
      <p>Panels still generate power in diffuse light, just at reduced output — they don't stop working entirely.</p>
      <h3>Myth 2: Solar panels require constant maintenance</h3>
      <p>Beyond periodic cleaning and occasional inspections, solar systems are largely maintenance-free, with no moving parts in the panels themselves.</p>
      <h3>Myth 3: Solar isn't worth it if you're renting or might move</h3>
      <p>Many systems add resale value to a property, and the investment is increasingly seen as a value-add during property sales.</p>
      <h3>Myth 4: It's too expensive to be worth it</h3>
      <p>With falling equipment costs and available incentives, payback periods have shortened considerably in recent years.</p>
      <h3>Myth 5: Solar panels are bad for the roof</h3>
      <p>Professionally installed systems are designed to protect, not damage, your roof, and many installations actually extend roof lifespan by shielding it from direct weather exposure.</p>
    `
  }
];

// Sort newest-first by default for listing pages
BLOG_POSTS.sort((a, b) => new Date(b.date) - new Date(a.date));
