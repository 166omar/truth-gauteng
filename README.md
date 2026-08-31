# Truth and Solidarity — Gauteng 🤝

Movement website + Gauteng-wide public fault ledger. Residents anywhere in Gauteng
report water leaks, sewer spills, road damage, illegal dumping, blocked storm drains
and dead street lights; every report is public, numbered (TS-XXXX) and tracked on a
visible timeline until fixed.

| | |
|---|---|
| **Public site** | https://166omar.github.io/truth-gauteng/ |
| **Team console** | https://166omar.github.io/truth-gauteng/admin.html |
| **Flagship** | https://166omar.github.io/ward120-fixit/ (Fix Ward 120) |
| **Backend** | Shared with Fix Ward 120 — Supabase `vzwkelixolmexgfkwoif`. One ledger, one team console (both sites' `admin.html` show all reports). |

Configuration lives in `config.js` (WhatsApp number, municipalities, map view).
Category/status metadata in `js/common.js` — must stay in sync with the database
check constraint (see `ward120-fixit/supabase/migrations/`). The `js/` and `css/`
files are shared with the ward120-fixit repo — when changing them, copy to both
repos and bump the `?v=` on the script tags.

Full architecture, security model and ops playbook: see the
[ward120-fixit README](https://github.com/166omar/ward120-fixit#readme).
