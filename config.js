// ============================================================
// Truth and Solidarity — Gauteng · site configuration
// Edit this file to change settings. No other file needs edits.
// ============================================================
window.W120 = {
  // Shared backend with Fix Ward 120 — one ledger for the whole movement
  SUPABASE_URL: "https://vzwkelixolmexgfkwoif.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6d2tlbGl4b2xtZXhnZmt3b2lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwMTgyMjQsImV4cCI6MjEwMzU5NDIyNH0.6h8RIjnh2FIK1XVvuUYh9yOAIj-ffv9vCJKQIZZREXA",

  // Truth and Solidarity WhatsApp (international format, digits only)
  WHATSAPP_NUMBER: "27833435786",

  // Map defaults: whole of Gauteng
  MAP_CENTER: [-26.15, 28.10],
  MAP_ZOOM: 9,

  // Department emails used by the admin "Escalate" button, per municipality.
  // These are publicly listed addresses — VERIFY them before first use and fill
  // in the blanks (your ward councillor's office will know the right ones).
  // Per-category overrides: water, sewer, drain, road, light. "default" is the fallback.
  ESCALATION_EMAILS: {
    "City of Johannesburg": {
      default: "joburgconnect@joburg.org.za",
      water: "custserv@jwater.co.za",
      sewer: "custserv@jwater.co.za",
      drain: "hotline@jra.org.za",
      road:  "hotline@jra.org.za"
    },
    "City of Tshwane":   { default: "customercare@tshwane.gov.za" },
    // Filled 2026-09-09 from each municipality's own website / official listing.
    "City of Ekurhuleni": { default: "call.centre@ekurhuleni.gov.za" },   // call centre 0860 543 000
    "Emfuleni":          { default: "" },                                 // no public e-mail; customer care 010 345 1640 / WhatsApp 083 434 3473
    "Midvaal":           { default: "complaints@midvaal.gov.za" },        // call centre 087 106 2471 / 0800 228 8275
    "Lesedi":            { default: "" },                                 // website down 9 Sept 2026; call 016 466 1900
    "Mogale City":       { default: "customerservices@mogalecity.gov.za" }, // call centre 0861 664 253
    "Rand West City":    { default: "" },                                 // no public e-mail; switchboard 011 411 0000, water & lights 087 238 2493
    "Merafong City":     { default: "info@merafong.gov.za" }              // contact centre 018 788 9990
  },

  // Donations. Fill either (or both) to show them on the Support card:
  // DONATE_URL: a payment link (PayFast / BackaBuddy / SnapScan / Yoco page)
  // DONATE_BANK: bank/EFT details, use \n for new lines
  DONATE_URL: "",
  DONATE_BANK: "",

  // Gauteng municipalities offered in the report form
  MUNICIPALITIES: [
    "City of Johannesburg",
    "City of Tshwane",
    "City of Ekurhuleni",
    "Emfuleni",
    "Midvaal",
    "Lesedi",
    "Mogale City",
    "Rand West City",
    "Merafong City"
  ]
};
