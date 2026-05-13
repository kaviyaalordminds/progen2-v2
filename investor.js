/* ============== Investor Page Logic ============== */

// Category icons (PNGs from investorimages folder)
const ICON_PATHS = {
  board: 'investorimages/icon1.png',
  committees: 'investorimages/icon2.png',
  policies: 'investorimages/icon3.png',
  financial: 'investorimages/icon4.png',
  ipo: 'investorimages/icon5.png',
  announcements: 'investorimages/icon6.png',
  shareholding: 'investorimages/icon7.png',
  press: 'investorimages/icon8.png',
  meetings: 'investorimages/icon9.png',
  esop: 'investorimages/icon10.png',
  credit: 'investorimages/icon11.png',
  rta: 'investorimages/icon12.png',
  investorcontact: 'investorimages/icon13.png',
  annual: 'investorimages/icon14.png',
  disclosure: 'investorimages/icon15.png',
  moa: 'investorimages/icon16.png',
};
const PDF_ICON = 'investorimages/pdficon.png';

// Helper to render a category icon as <img>
const catIcon = (id, cls = '') =>
  ICON_PATHS[id] ? `<img src="${ICON_PATHS[id]}" alt="" class="${cls}">` : '';

const ICONS = {
  pdf: `<img src="${PDF_ICON}" alt="PDF">`,
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/></svg>',
};

// Categories
const SIDEBAR_CATEGORIES = [
  { id: 'board', label: 'Board of Directors and Key Managerial Personnel', short: 'Board & KMP' },
  { id: 'committees', label: 'Board Committees', short: 'Committees' },
  { id: 'policies', label: 'Policies', short: 'Policies' },
  { id: 'financial', label: 'Financial Information', short: 'Financials' },
  { id: 'ipo', label: 'Initial Public Offer', short: 'IPO' },
  { id: 'announcements', label: 'Corporate Announcement', short: 'Announcements' },
  { id: 'shareholding', label: 'Shareholding Pattern', short: 'Shareholding' },
  { id: 'press', label: 'Press Release', short: 'Press' },
  { id: 'meetings', label: 'Shareholders Meeting', short: 'Meetings' },
  { id: 'esop', label: 'ESOP', short: 'ESOP' },
  { id: 'credit', label: 'Credit Rating', short: 'Credit' },
  { id: 'rta', label: 'Registrar and Share Transfer Agent', short: 'RTA' },
  { id: 'investorcontact', label: 'Contact for Investors', short: 'Contact' },
  // { id: 'annual', label: 'Annual Report', short: 'Annual Report' },
  { id: 'disclosure', label: 'Disclosure - Annual Return', short: 'Disclosure' },
  { id: 'moa', label: 'MoA - Memorandum of Association', short: 'MoA' },
];

// Director portraits (from investorimages folder)
const director1 = 'investorimages/Director1.png';
const director2 = 'investorimages/Director2.png';
const director3 = 'investorimages/Director3.png';
const director4 = 'investorimages/Director4.png';
const director5 = 'investorimages/Directo5.png';
const director6 = 'investorimages/Director6.png';
const director7 = 'investorimages/Director7.png';

// Board of Directors and Key Managerial Personnel
const Alfred = 'investorimages/BOD ENHANCED PHOTOS/1.png';
const Veena = 'investorimages/BOD ENHANCED PHOTOS/4.png';
const Innocent = 'investorimages/BOD ENHANCED PHOTOS/6.png';
const Karthik = 'investorimages/BOD ENHANCED PHOTOS/3.png';
const Hari = 'investorimages/BOD ENHANCED PHOTOS/5.png';
const Subhasree = 'investorimages/BOD ENHANCED PHOTOS/7.jpg';
const Selvakumaran = 'investorimages/BOD ENHANCED PHOTOS/8.jpeg';

const BOARD_DIRECTORS = [
  { photo: Alfred, name: 'MR. ALFRED VINOD ANTONY', role: 'MANAGING DIRECTOR', din: '02776734', email: 'alfred@progenrenewables.com' },
  { photo: Veena, name: 'MRS. VEENA JOSE', role: 'WHOLE TIME DIRECTOR', din: '08017313', email: 'veena@progenrenewables.com' },
  { photo: Innocent, name: 'MR. INNOCENT JUDEJOSEPH ANTONYJOSEPH', role: 'INDEPENDENT DIRECTOR', din: '10896507', email: 'jjinnocent78@gmail.com' },
  { photo: Karthik, name: 'MR. KARTHIK VELUCHAMY KOTTUR', role: 'INDEPENDENT DIRECTOR', din: '01973367', email: '' },
  { photo: Hari, name: 'MR. HARI BASKER', role: 'INDEPENDENT DIRECTOR', din: '11281446', email: 'ISOteam@progenrenewables.com' },
  { photo: Subhasree, name: 'MS. G. SUBHASREE', role: 'COMPANY SECRETARY', din: '', email: 'CS@progenrenewables.com' },
  { photo: Selvakumaran, name: 'MR. SELVAKUMARAN CHANDRASEKARAN', role: 'DIRECTOR', din: '08355365', email: 'selvas.themechanicalengineer@gmail.com' },
];

const BOARD_KMPS = [
  { name: 'Mr. Rohit Jindal', role: 'Chief Financial Officer' },
  { name: 'Ms. Pankti Thakkar', role: 'Company Secretary & Compliance Officer' },
];

const COMMITTEES = [
  {
    title: 'Audit Committee', members: [
      { photo: director4, name: 'Mr. Harshil Vadodariya', role: 'Non-Executive Independent Director - Chairperson', din: '07827003' },
      { photo: director5, name: 'Mr. Vivek Nathwani', role: 'Non-Executive Independent Director - Member', din: '09791653' },
      { photo: director1, name: 'Mr. Ankit Garg', role: 'Chairman & Managing Director - Member', din: '08027760' },
    ]
  },
  {
    title: 'Nomination & Remuneration Committee', members: [
      { photo: director4, name: 'Mr. Harshil Vadodariya', role: 'Non-Executive Independent Director - Chairperson', din: '07827003' },
      { photo: director1, name: 'Mr. Ankit Garg', role: 'Chairman & Managing Director - Member', din: '08027760' },
      { photo: director2, name: 'Mr. Pankaj Vallabhbhai Gothi', role: 'Whole-Time Director - Member', din: '07348565' },
    ]
  },
  {
    title: 'Stakeholders Relationship Committee', members: [
      { photo: director4, name: 'Mr. Harshil Vadodariya', role: 'Non-Executive Independent Director - Chairperson', din: '07827003' },
      { photo: director5, name: 'Mr. Vivek Nathwani', role: 'Non-Executive Independent Director - Member', din: '09791653' },
      { photo: director3, name: 'Ms. Priya Bansal', role: 'Non-Executive Non-Independent Director - Member', din: '07788611' },
      { photo: director1, name: 'Mr. Ankit Garg', role: 'Chairman & Managing Director - Member', din: '08027760' },
    ]
  },
  {
    title: 'Corporate Social Responsibility (CSR) Committee', members: [
      { photo: director4, name: 'Mr. Harshil Vadodariya', role: 'Non-Executive Independent Director - Chairperson', din: '07827003' },
      { photo: director1, name: 'Mr. Ankit Garg', role: 'Chairman & Managing Director - Member', din: '08027760' },
      { photo: director2, name: 'Mr. Pankaj Vallabhbhai Gothi', role: 'Whole-Time Director - Member', din: '07348565' },
    ]
  },
];

const PDF_SAMPLE = '/pdfs/sample.pdf';

const DOCUMENT_GROUPS = {
  announcements: [
    { title: 'Corporate Announcement', docs: [], comingSoon: true },
  ],
  financial: [
    { 
      title: 'Financial Information', docs: [
        { name: 'Finanical Information 2022-2023', file: 'investor/Financial Information/Progen R Pvt Ltd - Annual Report 31-March-2023.pdf', date: '—' },
        { name: 'Finanical Information 2023-2024', file: 'investor/Financial Information/Progen R Pvt Ltd - Annual Report 31-March-2024.pdf', date: '—' },
        { name: 'Finanical Information 2024-2025', file: 'investor/Financial Information/Annual Report 2024-25.pdf', date: '—' },
      ] 
    },
  ],
  shareholding: [
    {
      title: 'Shareholding Pattern', docs: [
        { name: 'Shareholders Pattern', file: 'investor/Shareholding Pattern/Shareholders Pattern.pdf', date: '—' },
      ]
    },
  ],
  press: [
    { title: 'Press Releases', docs: [], comingSoon: true },
  ],
  policies: [
    {
      title: 'Policies', docs: [
        { name: 'Code of Conduct', file: 'pdf/Polices and Code of Conduct/Code of Conduct..pdf', date: '—' },
        { name: 'CSR Policy', file: 'pdf/Polices and Code of Conduct/CSR Policy.pdf', date: '—' },
        { name: 'Policy for Determining Material Subsidiaries', file: 'pdf/Polices and Code of Conduct/Policy for Determining Material Subsidiaries..pdf', date: '—' },
        { name: 'Policy for Determination of Materiality of Event', file: 'pdf/Polices and Code of Conduct/Policy for Determination of materiality of event..pdf', date: '—' },
        { name: 'Familiarization Programmes', file: 'pdf/Polices and Code of Conduct/Familiarization Programmes..pdf', date: '—' },
        { name: 'Risk Management Policy', file: 'pdf/Polices and Code of Conduct/Risk Management Policy..pdf', date: '—' },
        { name: 'Vigil Mechanism / Whistle Blower Policy', file: 'pdf/Polices and Code of Conduct/Vigil Machanism - whistle blower policy..pdf', date: '—' },
        { name: 'Policy on Related Party Transactions', file: 'pdf/Polices and Code of Conduct/POLICY ON RELATED PARTY TRANSACTIONS .pdf', date: '—' },
      ]
    },
  ],
  investorcontact: [
    { title: 'Contact for Investors', docs: [], comingSoon: true },
  ],
  annual: [
    {
      title: 'Annual Reports', docs: [
        { name: 'Annual Report 2024-25', file: 'investor/Annual Report/Annual Report 2024-25.pdf', date: '2025' },
      ]
    },
  ],
  disclosure: [
    {
      title: 'Form AOC-4', docs: [
        { name: 'Form AOC-4 - 25.12.2018', file: 'investor/Disclosure - Annual Return/Form AOC-4-25122018_signed.pdf', date: '25.12.2018' },
        { name: 'Form AOC-4 - 02.09.2020', file: 'investor/Disclosure - Annual Return/Form AOC-4-02092020_signed.pdf', date: '02.09.2020' },
        { name: 'Form AOC-4 - 20.02.2021', file: 'investor/Disclosure - Annual Return/Form AOC-4-20022021_signed.pdf', date: '20.02.2021' },
        { name: 'Form AOC-4 - 01.02.2022', file: 'investor/Disclosure - Annual Return/Form AOC-4-01022022_signed.pdf', date: '01.02.2022' },
        { name: 'Form AOC-4 - 21.02.2023', file: 'investor/Disclosure - Annual Return/Form AOC-4-21022023_signed.pdf', date: '21.02.2023' },
        { name: 'Form AOC-4 - 10.01.2024', file: 'investor/Disclosure - Annual Return/Form AOC-4-10012024_signed.pdf', date: '10.01.2024' },
      ]
    },
    {
      title: 'Form MGT-7 / MGT-7A', docs: [
        { name: 'Form MGT-7 - 25.12.2018', file: 'investor/Disclosure - Annual Return/Form MGT-7-25122018_signed.pdf', date: '25.12.2018' },
        { name: 'Form MGT-7 - 02.09.2020', file: 'investor/Disclosure - Annual Return/Form MGT-7-02092020_signed.pdf', date: '02.09.2020' },
        { name: 'Form MGT-7 - 12.02.2021', file: 'investor/Disclosure - Annual Return/Form MGT-7-12022021_signed.pdf', date: '12.02.2021' },
        { name: 'Form MGT-7A - 01.02.2022', file: 'investor/Disclosure - Annual Return/Form MGT-7A-01022022_signed.pdf', date: '01.02.2022' },
        { name: 'Form MGT-7 - 22.02.2023', file: 'investor/Disclosure - Annual Return/Form MGT-7-22022023_signed.pdf', date: '22.02.2023' },
        { name: 'Form MGT-7 - 17.01.2024', file: 'investor/Disclosure - Annual Return/Form MGT-7-17012024_signed.pdf', date: '17.01.2024' },
        { name: 'Form MGT-7 - 06.12.2024', file: 'investor/Disclosure - Annual Return/Form MGT-7-06122024_signed.pdf', date: '06.12.2024' },
      ]
    },
  ],
  moa: [
    {
      title: 'Memorandum of Association', docs: [
        { name: 'MOA - Pvt to Pub and ASC INR 17 Cr', file: 'investor/MoA- Memorandum of Association/1) MOA Pvt to Pub and ASC INR 17 Cr.pdf', date: '—' },
      ]
    },
  ],
};

/* ===== State ===== */
let activeId = 'announcements';
const path = window.location.pathname;
const page = path.split('/').pop().replace('.html', '');
if (SIDEBAR_CATEGORIES.some(c => c.id === page)) {
  activeId = page;
}
let query = '';

/* ===== Helpers ===== */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad2 = (n) => String(n).padStart(2, '0');

/* ===== Renderers ===== */
function renderIconNav() {
  const nav = $('#iconNav');
  // Add vertical class to the nav container
  nav.classList.add('ir-iconnav--vertical');
  nav.innerHTML = SIDEBAR_CATEGORIES.map((cat) => {
    const count = (DOCUMENT_GROUPS[cat.id] || []).reduce((s, g) => s + g.docs.length, 0);
    const isActive = cat.id === activeId;
    return `
      <button class="ir-iconnav-btn ir-iconnav-btn--list ${isActive ? 'active' : ''}" data-id="${cat.id}">
        <div class="ir-iconnav-tile ir-iconnav-tile--sm">
          ${catIcon(cat.id, 'ir-iconnav-img')}
          ${count > 0 ? `<span class="ir-iconnav-badge">${count}</span>` : ''}
        </div>
        <span class="ir-iconnav-label">${esc(cat.short)}</span>
        <span class="ir-iconnav-bar"></span>
      </button>
    `;
  }).join('');
  nav.querySelectorAll('button').forEach((b) =>
    b.addEventListener('click', () => { window.location.href = `${b.dataset.id}.html`; })
  );
}

function renderMeta() {
  const cat = SIDEBAR_CATEGORIES.find((c) => c.id === activeId);
  $('#metaShort').textContent = cat.short;
  $('#metaTitle').innerHTML = `${catIcon(cat.id, 'ir-meta-icon')}<span>${esc(cat.label)}</span>`;
  const bannerTitle = document.querySelector('.about-banner-title');
  if (bannerTitle) {
    bannerTitle.textContent = cat.short;
  }
}

function renderStats() {
  const groups = DOCUMENT_GROUPS[activeId] || [];
  const totalDocs = groups.reduce((s, g) => s + g.docs.length, 0);
  $('#statSections').textContent = SIDEBAR_CATEGORIES.length;
  $('#statDocs').textContent = totalDocs;
}

function docRowHTML(doc, i) {
  const filename = doc.file.split('/').pop();
  return `
    <a class="ir-doc-row" href="${esc(doc.file)}" download="${esc(filename)}" target="_blank" rel="noopener noreferrer">
      <span class="ir-doc-num">${pad2(i + 1)}</span>
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <div class="ir-doc-info">
        <p class="ir-doc-name">${esc(doc.name)}</p>
        <p class="ir-doc-meta">PDF · ${esc(doc.date || 'Available')}</p>
      </div>
      <span class="ir-doc-dl">${ICONS.download}<span>Download</span></span>
      <span class="ir-doc-dl-mobile">${ICONS.download}</span>
    </a>
  `;
}

function groupCardHTML(group) {
  const docCount = group.docs.length;
  if (group.comingSoon && docCount === 0) {
    return `
      <article class="ir-coming-soon">
        <div class="ir-coming-soon-icon">📁</div>
        <h3>Coming soon</h3>
        <p>Documents for this section will be published here shortly.</p>
      </article>
    `;
  }
  return `
    <article class="ir-group-card collapsed">
      <header class="ir-group-header" role="button" tabindex="0" aria-expanded="false">
        <div>
          <h3>${esc(group.title)}</h3>
          <p>${docCount} ${docCount === 1 ? 'document' : 'documents'}</p>
        </div>
        <div class="ir-group-header-right">
          <span class="ir-group-count">${pad2(docCount)}</span>
          <span class="ir-group-chevron" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
        </div>
      </header>
      <div class="ir-group-body">
        ${docCount === 0
      ? `<div class="ir-empty-row">No documents available at this time.</div>`
      : group.docs.map(docRowHTML).join('')}
      </div>
    </article>
  `;
}

function personCardHTML(p) {
  return `
    <div class="ir-person-card">
      ${p.photo ? `<div class="ir-person-img-wrap">
        <img src="${esc(p.photo)}" alt="${esc(p.name)}">
      </div>` : ''}
      <div class="ir-person-info">
        <p class="ir-person-name">${esc(p.name)}</p>
        <p class="ir-person-role">${esc(p.role)}</p>
        ${p.din ? `<p class="ir-person-din">DIN: ${esc(p.din)}</p>` : ''}
        ${p.email ? `<a class="ir-person-email" href="mailto:${esc(p.email)}">${esc(p.email)}</a>` : ''}
      </div>
    </div>
  `;
}

function boardSectionHTML() {
  const profiles = [
    { name: 'Profile - MR. Alfred Vinod Antony', file: 'pdf/1- Board Of Directors Key Personn/KMP/Profile - MR.Alfred Vinod Antony.pdf' },
    { name: 'Profile - Mrs. Veena Jose', file: 'pdf/1- Board Of Directors Key Personn/KMP/Profile - Mrs.Veena Jose.pdf' },
    { name: 'Profile - MR. J J Innocent', file: 'pdf/1- Board Of Directors Key Personn/KMP/Profile - MR.J J Innocent.pdf' },
    { name: 'Profile - MR. Karthik', file: 'pdf/1- Board Of Directors Key Personn/KMP/Profile - MR. Karthik.pdf' },
    { name: 'Profile - MR. Hari Basker R', file: 'pdf/1- Board Of Directors Key Personn/KMP/Profile - MR.Hari Basker R.pdf' },
  ];
  const appointments = [
    { name: 'A. Karthi - Appointment Letter', file: 'pdf/1- Board Of Directors Key Personn/SMP/SMP- Appointment -1/1. A Karthi - Appointment.pdf' },
    { name: 'A.K. Anand - Appointment Letter', file: 'pdf/1- Board Of Directors Key Personn/SMP/SMP- Appointment -1/2. A K Anand - Appointment.pdf' },
    { name: 'Balaji R - Appointment Letter', file: 'pdf/1- Board Of Directors Key Personn/SMP/SMP- Appointment -1/3. Balaji - Appointment.pdf' },
    { name: 'Sundararajan A - Appointment Letter', file: 'pdf/1- Board Of Directors Key Personn/SMP/SMP- Appointment -1/4. Sundararajan - Appointment.pdf' },
    { name: 'R. Manju - Appointment Letter', file: 'pdf/1- Board Of Directors Key Personn/SMP/SMP- Appointment -1/5. R Manju Appointment.pdf' },
    { name: 'Justin A. Vadakkethala - Appointment Letter', file: 'pdf/1- Board Of Directors Key Personn/SMP/SMP- Appointment -1/6. Mr. Justin - Appointment letter.pdf' },
  ];

  const docList = (docs) => docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(d.name)}</span>
      <span class="ir-doc-download">${ICONS.download}</span>
    </a>
  `).join('');
  return `
    <div class="ir-people-block">
      <p class="ir-section-label">Details of Directors</p>
      <div class="ir-people-grid">${BOARD_DIRECTORS.map(personCardHTML).join('')}</div>
    </div>
    <!-- Director Profiles -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>KMP</h3>
          <p>${profiles.length} documents</p>
        </div>
      </header>

      <div class="ir-group-body">
        ${docList(profiles)}
      </div>
    </article>

    <!-- Appointment Letters Main Folder -->
    <article class="ir-group-card" style="margin-top:1rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>SMP</h3>
          <p>1 Folder</p>
        </div>
      </header>

      <div class="ir-group-body">
        <!-- Inner Folder -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>SMP- Appointment -1</h3>
              <p>${appointments.length} documents</p>
            </div>
          </header>

          <div class="ir-group-body">
            ${docList(appointments)}
          </div>
        </article>
      </div>
    </article>
  `;
}

function committeesSectionHTML() {
  const members = [
    { photo: 'investorimages/BOD ENHANCED PHOTOS/6.png', name: 'MR. INNOCENT JUDEJOSEPH ANTONYJOSEPH', role: 'INDEPENDENT DIRECTOR', din: '10896507', email: 'jjinnocent78@gmail.com' },
    { photo: 'investorimages/BOD ENHANCED PHOTOS/3.png', name: 'MR. KARTHIK VELUCHAMY KOTTUR', role: 'INDEPENDENT DIRECTOR', din: '01973367', email: 'karthik@deccanindustries.com' },
    { photo: 'investorimages/BOD ENHANCED PHOTOS/4.png', name: 'MRS. VEENA JOSE', role: 'WHOLE TIME DIRECTOR', din: '08017313', email: 'veena@progenrenewables.com' },
    { photo: 'investorimages/BOD ENHANCED PHOTOS/5.png', name: 'MR. HARI BASKER', role: 'INDEPENDENT DIRECTOR', din: '11281446', email: 'r.haribhaskaran@gmail.com' },
  ];
  const COMMITTEES = [
    {
      title: 'Stakeholder committee',
      members: [
        { photo: Innocent, name: 'MR. INNOCENT JUDEJOSEPH ANTONYJOSEPH', role: 'Non-Executive Independent Director - Chairman', din: '10896507' },
        { photo: Alfred, name: 'MR. ALFRED VINOD ANTONY', role: 'Managing Director - Member', din: '02776734' },
        { photo: Veena, name: 'MRS. VEENA JOSE', role: 'Whole-Time Director - Member', din: '08017313' },
      ]
    },
    {
      title: 'IPO Committee',
      members: [
        { photo: Alfred, name: 'MR. ALFRED VINOD ANTONY', role: 'Managing Director - Chairman', din: '02776734' },
        { photo: Veena, name: 'MRS. VEENA JOSE', role: 'Whole-Time Director - Member', din: '08017313' },
      ]
    },
    {
      title: 'Audit Committee',
      members: [
        { photo: Innocent, name: 'MR. INNOCENT JUDEJOSEPH ANTONYJOSEPH', role: 'Non-Executive Independent Director - Chairman', din: '10896507' },
        { photo: Karthik, name: 'MR. KARTHIK VELUCHAMY KOTTUR', role: 'Non-Executive Independent Director - Member', din: '01973367' },
        { photo: Veena, name: 'MRS. VEENA JOSE', role: 'Whole-Time Director - Member', din: '08017313' },
      ]
    },
    {
      title: 'Nomination & Remuneration Committee',
      members: [
        { photo: Hari, name: 'MR. RADHAKRISHNAN HARI BASKER', role: 'Non-Executive Independent Director - Chairman', din: '11281446' },
        { photo: Innocent, name: 'MR. INNOCENT JUDEJOSEPH ANTONYJOSEPH', role: 'Non-Executive Independent Director - Member', din: '10896507' },
      ]
    },
  ];
  const audit_committee_docs = [
    { name: 'Constitution of Audit Committee', file: 'pdf/2. Borad Committees/1.Audit Committee/1. Constitution of Audit Committee.pdf' },
  ];
  const nomination_renumeration_committee_docs = [
    { name: 'Nomination & Renumeration Committee', file: '' },
  ];
  const stakeholder_committee_docs = [
    { name: 'Constitution of Stakeholders Relationship Committee', file: 'pdf/2. Borad Committees/3.StakeHolders Relationship Committee/1. Constitution of stakeholders Relationship Committee.pdf' },
  ];

  const audit_committee_docList = (audit_committee_docs) => audit_committee_docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(d.name)}</span>
      <span class="ir-doc-download">${ICONS.download}</span>
    </a>
  `).join('');
  const nomination_renumeration_committee_docList = (nomination_renumeration_committee_docs) => nomination_renumeration_committee_docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(d.name)}</span>
      <span class="ir-doc-download">${ICONS.download}</span>
    </a>
  `).join('');
  const stakeholder_committee_docList = (stakeholder_committee_docs) => stakeholder_committee_docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(d.name)}</span>
      <span class="ir-doc-download">${ICONS.download}</span>
    </a>
  `).join('');

  return `
    <div class="ir-people-block">
      <p class="ir-section-label">Board Committees</p>
      <div class="ir-people-grid">${members.map(personCardHTML).join('')}</div>
    </div>
    <div class="ir-people-block">
      <p class="ir-section-label">StakeHolder Committees</p>
      <div class="ir-people-grid">${COMMITTEES[0].members.map(personCardHTML).join('')}</div>
    </div>
    <div class="ir-people-block">
      <p class="ir-section-label">IPO Committees</p>
      <div class="ir-people-grid">${COMMITTEES[1].members.map(personCardHTML).join('')}</div>
    </div>
    <div class="ir-people-block">
      <p class="ir-section-label">Audit Committees</p>
      <div class="ir-people-grid">${COMMITTEES[2].members.map(personCardHTML).join('')}</div>
    </div>
    <div class="ir-people-block">
      <p class="ir-section-label">Nomination & Renumeration Committees</p>
      <div class="ir-people-grid">${COMMITTEES[3].members.map(personCardHTML).join('')}</div>
    </div>

    <!-- Main Folder -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Committee Constitution Documents</h3>
          <p>1 Folder</p>
        </div>
      </header>

      <div class="ir-group-body">
        <!-- Inner Folder -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Audit Committee</h3>
              <p>${audit_committee_docs.length} documents</p>
            </div>
          </header>

          <div class="ir-group-body">
            ${audit_committee_docList(audit_committee_docs)}
          </div>
        </article>
      </div>

      <div class="ir-group-body">
        <!-- Inner Folder -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Nomination & Renumeration Committee</h3>
              <!-- <p>${nomination_renumeration_committee_docs.length} documents</p> -->
            </div>
          </header>

          <div class="ir-group-body">
            <!-- ${nomination_renumeration_committee_docList(nomination_renumeration_committee_docs)} -->
          </div>
        </article>
      </div>

      <div class="ir-group-body">
        <!-- Inner Folder -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>StakeHolders Relationship Committee</h3>
              <p>${stakeholder_committee_docs.length} documents</p>
            </div>
          </header>

          <div class="ir-group-body">
            ${stakeholder_committee_docList(stakeholder_committee_docs)}
          </div>
        </article>
      </div>
    </article>
  `;
}

function financialSectionHTML() {
  const annualDocs = [
    { name: 'Accounting Policies', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Accounting Policies.pdf' },
    { name: 'Addendum to the Notice - 8th AGM', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Addendum to the Notice - 8th AGM.pdf' },
    { name: 'Assets and Liabilities', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Assets and liablaities.pdf' },
    { name: 'Benefit, Plan, Cost', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Benefit , Plan, Cost.pdf' },
    { name: 'Contingent Liabilities and Commitment', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/contingent liabilities and commitement.pdf' },
    { name: 'Corporate Information', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Corporate Information.pdf' },
    { name: 'Disclosure Requirement', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Disclosure requirement.pdf' },
    { name: 'Foreign Exchange Transaction', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/foreign Exchange Transaction.pdf' },
    { name: 'Goods and Services Tax', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Goods and Services Tax.pdf' },
    { name: 'Impairment Assets', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Impairment Assets.pdf' },
    { name: 'Other Disclosure', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Other Disclosure.pdf' },
    { name: 'Prior Period Comparatives', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Prior Period Comparatives.pdf' },
    { name: 'Raw Materials - Total Consumption', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Raw Materials - Total consumption.pdf' },
    { name: 'Segment Reporting', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Segment Reporting.pdf' },
    { name: 'Significant Accounting Ratio', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Significant Accounting Ratio.pdf' },
    { name: 'Tax and Cash Flow Statement', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Tax and Cash flow Statement.pdf' },
    { name: 'Transaction with Relative Parties', file: 'pdf/4. Financial Information/Annual Report - 2024-2025/Transaction with Relative Parties.pdf' },
  ];
  const audit2023Docs = [
    { name: 'Progen R Pvt Ltd - Annual Report 2023', file: 'pdf/4. Financial Information/Financials Prior to Conversion/2022-2023 Audit Report/Progen R Pvt Ltd - Annual Report  2023.pdf' },
  ];
  const audit2024Docs = [
    { name: 'Progen R Pvt Ltd - Annual Report 31-March-2024', file: 'pdf/4. Financial Information/Financials Prior to Conversion/2023-2024 Audit Report/Progen R Pvt Ltd - Annual Report 31-March-2024.pdf' },
  ];

  const docList = (docs) => docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(d.name)}</span>
    </a>
  `).join('');

  return `
    <!-- Annual Report 2024-2025 Folder -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Annual Report - 2024-2025</h3>
          <p>${annualDocs.length} documents</p>
        </div>
      </header>
      <div class="ir-group-body">
        ${docList(annualDocs)}
      </div>
    </article>

    <!-- Financials Prior to Conversion Main Folder -->
    <article class="ir-group-card" style="margin-top:1rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Financials Prior to Conversion</h3>
          <p>2 Folders</p>
        </div>
      </header>
      <div class="ir-group-body">
        <!-- Sub-folder 1 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>2022-2023 Audit Report</h3>
              <p>${audit2023Docs.length} document</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(audit2023Docs)}
          </div>
        </article>
        <!-- Sub-folder 2 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>2023-2024 Audit Report</h3>
              <p>${audit2024Docs.length} document</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(audit2024Docs)}
          </div>
        </article>
      </div>
    </article>
  `;
}

function announcementsSectionHTML() {
  const shareholdingDocs = [
    { name: 'Shareholders Pattern', file: 'pdf/6. Corporate Announcement/ShareHolding Pattern/Shareholders Pattern (4).pdf' },
  ];

  const docList = (docs) => docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(d.name)}</span>
    </a>
  `).join('');

  return `
    <!-- ShareHolding Pattern Folder -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>ShareHolding Pattern</h3>
          <p>${shareholdingDocs.length} document</p>
        </div>
      </header>
      <div class="ir-group-body">
        ${docList(shareholdingDocs)}
      </div>
    </article>
  `;
}

function policiesSectionHTML() {
  const policiesDocs = [
    { name: 'CSR Policy', file: 'pdf/3. Policies/Policies/CSR Policy.pdf' },
    { name: 'Policy for Determination of Materiality of Event', file: 'pdf/3. Policies/Policies/Policy for Determination of Materiality of Event - Print.pdf' },
    { name: 'Policy on Related Party Transactions', file: 'pdf/3. Policies/Policies/Policy On Related Party Transactions  .pdf' },
    { name: 'Risk Management Policy', file: 'pdf/3. Policies/Policies/Risk Management Policy.pdf' },
    { name: 'Sexual Harassment Policy', file: 'pdf/3. Policies/Policies/Sexual Harassment Policy.pdf' },
  ];
  const mdDocs = [
    { name: 'Alfred - Appointment', file: 'pdf/3. Policies/Terms of Conditions for appointment of independent directors/1. Appointment of Mananging Director/Alfred -  Appointment.pdf' },
  ];
  const wtdDocs = [
    { name: 'Veena Jose - Appointment', file: 'pdf/3. Policies/Terms of Conditions for appointment of independent directors/2. Appointment of Whole Time Director/Veena Jose - Appointment  .pdf' },
  ];
  const idDocs = [
    { name: 'Hari Basker - Appointment', file: 'pdf/3. Policies/Terms of Conditions for appointment of independent directors/3. Appointment of Independent Directors/Hari Basker -  Appointment (1).pdf' },
    { name: 'Innocent - Appointment', file: 'pdf/3. Policies/Terms of Conditions for appointment of independent directors/3. Appointment of Independent Directors/Innocent -  Appointment.pdf' },
    { name: 'Karthik - Appointment', file: 'pdf/3. Policies/Terms of Conditions for appointment of independent directors/3. Appointment of Independent Directors/Karthik - Appointment.pdf' },
  ];

  const docList = (docs) => docs.map(d => `
    <a class="ir-doc-row" href="${esc(d.file)}" target="_blank" rel="noopener">
      <span class="ir-doc-pdf">${ICONS.pdf}</span>
      <span class="ir-doc-name">${esc(d.name)}</span>
    </a>
  `).join('');

  return `
    <!-- Policies Folder -->
    <article class="ir-group-card" style="margin-top:1.5rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Policies</h3>
          <p>${policiesDocs.length} documents</p>
        </div>
      </header>
      <div class="ir-group-body">
        ${docList(policiesDocs)}
      </div>
    </article>

    <!-- Terms and Conditions Main Folder -->
    <article class="ir-group-card" style="margin-top:1rem;">
      <header class="ir-group-header" style="cursor:default;">
        <div>
          <h3>Terms of Conditions for Appointment of Independent Directors</h3>
          <p>3 Folders</p>
        </div>
      </header>
      <div class="ir-group-body">
        <!-- Sub-folder 1 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Appointment of Managing Director</h3>
              <p>${mdDocs.length} document</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(mdDocs)}
          </div>
        </article>
        <!-- Sub-folder 2 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Appointment of Whole Time Director</h3>
              <p>${wtdDocs.length} document</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(wtdDocs)}
          </div>
        </article>
        <!-- Sub-folder 3 -->
        <article class="ir-group-card" style="margin:1rem;">
          <header class="ir-group-header" style="cursor:default;">
            <div>
              <h3>Appointment of Independent Directors</h3>
              <p>${idDocs.length} documents</p>
            </div>
          </header>
          <div class="ir-group-body">
            ${docList(idDocs)}
          </div>
        </article>
      </div>
    </article>
  `;
}

function renderGroups() {
  const area = $('#groupsArea');
  const search = document.querySelector('.ir-search');
  if (search) search.style.display = (activeId === 'board' || activeId === 'committees' || activeId === 'policies' || activeId === 'announcements' || activeId === 'financial') ? 'none' : '';
  if (activeId === 'board') { area.innerHTML = boardSectionHTML(); return; }
  if (activeId === 'committees') { area.innerHTML = committeesSectionHTML(); return; }
  if (activeId === 'policies') { area.innerHTML = policiesSectionHTML(); return; }
  if (activeId === 'announcements') { area.innerHTML = announcementsSectionHTML(); return; }
  if (activeId === 'financial') { area.innerHTML = financialSectionHTML(); return; }

  const groups = DOCUMENT_GROUPS[activeId] || [];
  let filtered = groups;
  if (query.trim()) {
    const q = query.toLowerCase();
    filtered = groups
      .map((g) => ({ ...g, docs: g.docs.filter((d) => d.name.toLowerCase().includes(q)) }))
      .filter((g) => g.docs.length > 0 || g.title.toLowerCase().includes(q));
  }

  if (filtered.length === 0) {
    area.innerHTML = `
      <div class="ir-empty">
        <div class="ir-empty-icon">📂</div>
        <h3>${query ? 'No results found' : 'Coming soon'}</h3>
        <p>${query
        ? `Try a different search term — nothing matched "${esc(query)}".`
        : 'Documents for this section will be published here shortly.'}</p>
      </div>
    `;
    return;
  }

  area.innerHTML = filtered.map(groupCardHTML).join('');
}

function renderAside() {
  const aside = $('#asideArea');
  const groups = DOCUMENT_GROUPS[activeId] || [];
  const totalDocs = groups.reduce((s, g) => s + g.docs.length, 0);

  let topPanel = '';
  if (activeId === 'committees') {
    topPanel = `
      <div class="ir-panel-dark">
        <p class="ir-panel-title">Committees Overview</p>
        <ul class="ir-panel-list">
          ${COMMITTEES.map((c) => `
            <li><span class="lbl">${esc(c.title)}</span></li>
          `).join('')}
        </ul>
        <p class="ir-panel-note">Board Committees operate under defined terms of reference in compliance with the Companies Act, 2013 and SEBI (LODR) Regulations.</p>
      </div>
    `;
  } else if (activeId === 'board') {
    topPanel = `
      <div class="ir-panel-dark">
        <p class="ir-panel-title">Governance Principles</p>
        <ul class="ir-principles">
          <li><span class="num">1</span><span>Transparency in disclosures and timely communication with stakeholders.</span></li>
          <li><span class="num">2</span><span>Accountability through independent oversight and committee structure.</span></li>
          <li><span class="num">3</span><span>Ethical conduct guided by our Code of Conduct and SEBI regulations.</span></li>
          <li><span class="num">4</span><span>Long-term value creation for shareholders and the wider community.</span></li>
        </ul>
        <a class="ir-panel-btn" href="contact.html">View Board Committees →</a>
      </div>
    `;
  } else {
    topPanel = `
      <div class="ir-panel-dark">
        <p class="ir-panel-title">Quick Stats</p>
        <div class="ir-stats-rows">
          <div class="ir-stats-row"><span class="lbl">Document Groups</span><span class="val">${groups.length}</span></div>
          <div class="ir-stats-row"><span class="lbl">Total Files</span><span class="val green">${totalDocs}</span></div>
          <div class="ir-stats-row"><span class="lbl">Format</span><span class="pdf-tag">PDF</span></div>
        </div>
      </div>
    `;
  }

  const otherSections = SIDEBAR_CATEGORIES.filter((c) => c.id !== activeId).slice(0, 6);
  const otherList = `
    <div class="ir-panel-light">
      <p class="ir-panel-title">Other Sections</p>
      <ul class="ir-other-list">
        ${otherSections.map((c) => `
          <li>
            <button data-goto="${c.id}">
              ${catIcon(c.id, 'ir-other-img')}
              <span class="name">${esc(c.short)}</span>
              <span class="arrow">→</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  const helpCard = `
    <div class="ir-help-card">
      <h4>Need help?</h4>
      <p>For investor queries, reach out to our grievance officer.</p>
      <a class="ir-help-btn" href="contact.html">Contact Investor Relations</a>
    </div>
  `;

  aside.innerHTML = topPanel + otherList + helpCard;

  aside.querySelectorAll('[data-goto]').forEach((b) =>
    b.addEventListener('click', () => { window.location.href = `${b.dataset.goto}.html`; })
  );
}

function renderAll() {
  renderIconNav();
  renderMeta();
  renderStats();
  renderGroups();
  renderAside();
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  $('#searchInput').addEventListener('input', (e) => { query = e.target.value; renderGroups(); });

  // Collapsible group cards
  $('#groupsArea').addEventListener('click', (e) => {
    const header = e.target.closest('.ir-group-header');
    if (!header) return;
    const card = header.closest('.ir-group-card');
    const open = card.classList.toggle('collapsed');
    header.setAttribute('aria-expanded', String(!open));
  });
  const burger = document.querySelector('.nav-hamburger');
  const navEl  = document.querySelector('nav');
  if (burger && navEl) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navEl.classList.toggle('open');
    });
  }
  renderAll();
});

// Handle mobile dropdown toggle
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    if (link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1000) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });
});
