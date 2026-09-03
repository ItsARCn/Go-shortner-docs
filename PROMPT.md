I want you to create a complete documentation website for my project "GO Shortener".

Use the official Docus repository as the documentation framework/reference:
https://github.com/nuxt-content/docus

The documentation site will eventually be deployed to Vercel.

IMPORTANT:
- Do NOT add any AI features to the documentation website.
- Do NOT add an AI chatbot.
- Do NOT add an AI assistant.
- Do NOT add Gemini/OpenAI APIs.
- Do NOT add AI-generated content at runtime.
- This is a normal documentation website.
- Use Docus/Nuxt Content's existing documentation capabilities.
- Keep the site fast, clean, responsive, accessible, and mobile-friendly.
- Follow the visual quality and navigation style of Docus.
- Do not unnecessarily modify Docus core functionality.
- Do not hardcode secrets, API keys, Firebase credentials, Turnstile secrets, or other credentials.

Create a separate documentation project/repository for GO.

Project name:
GO Documentation

Suggested domain:
docs.arcn.online

The documentation structure should be:

GO Documentation

├── Introduction
│   ├── What is GO?
│   └── Features
│
├── Getting Started
│   ├── Installation
│   ├── Configuration
│   ├── First Setup
│   └── Updating
│
├── User Guide
│   ├── Creating a Short Link
│   ├── Expiration
│   ├── Renewing Links
│   ├── Dashboard
│   └── Analytics
│
├── Authentication
│   ├── Email Login
│   ├── Google Login
│   └── Firebase Setup
│
├── CAPTCHA
│   └── Cloudflare Turnstile
│
├── Administration
│   ├── Admin Panel
│   ├── Users
│   ├── Links
│   ├── Reports
│   ├── Bans & Timeouts
│   └── Audit Logs
│
├── Deployment
│   ├── VPS Installation
│   ├── Environment Variables
│   ├── Cloudflare Tunnel
│   ├── Systemd
│   └── Updating
│
├── Developer
│   ├── Architecture
│   ├── API
│   ├── Database
│   ├── Development
│   └── Building Releases
│
└── Reference
    ├── Configuration
    ├── API Reference
    └── Changelog

Documentation requirements:

1. Create the complete Docus project structure.

2. Create all navigation/sidebar entries for the structure above.

3. Create a proper landing/introduction page for GO.

4. Create placeholder documentation pages where the exact implementation is not yet known.

5. DO NOT invent technical details about GO.
   If a feature or implementation is not yet confirmed, clearly mark the section as needing implementation-specific details.

6. The documentation must eventually describe the real GO implementation, including:
   - URL shortening
   - random short IDs
   - link expiration
   - link renewal
   - anonymous quotas
   - registered-user quotas
   - user accounts
   - Google authentication
   - Firebase Authentication
   - Cloudflare Turnstile
   - analytics
   - reports
   - moderation
   - admin roles
   - bans
   - timeouts
   - permanent/auto-renew requests
   - audit logs
   - SQLite
   - systemd deployment
   - standalone binary releases
   - GitHub Actions releases

7. Keep security documentation clear and prominent.

8. Include warnings where users must protect:
   - JWT/session secrets
   - Firebase configuration where applicable
   - Turnstile secret keys
   - admin credentials
   - .env files
   - SQLite database files

9. Create a clean configuration reference documenting environment variables, but use empty/example values only.

10. Create an Updating page explaining the intended standalone update process:
    - download the new release
    - stop the service
    - replace the binary
    - preserve .env
    - preserve the SQLite database
    - start the service
    - verify the service

11. Create a deployment guide for Ubuntu VPS + systemd.

12. Create a Cloudflare Tunnel guide for exposing GO through:
    https://go.arcn.online

13. Create Firebase setup documentation for:
    - Firebase project
    - Web app configuration
    - Email/password authentication
    - Google authentication
    - authorized domains

14. Create Cloudflare Turnstile documentation for:
    - creating the Turnstile site
    - site key
    - secret key
    - environment variables
    - enabling/disabling Turnstile

15. Create developer documentation explaining the intended architecture without exposing private infrastructure details.

16. Create API documentation structure, but do not invent endpoints that do not exist in the actual GO source.

17. Create a changelog page/structure that can be updated with future releases.

18. Make the documentation look polished and production-ready, inspired by the Docus documentation experience.

19. Support dark mode and light mode.

20. Make navigation work correctly on desktop and mobile.

21. Include search using Docus's normal documentation search functionality. Do NOT add AI search.

22. Make code blocks, tabs, notes, warnings, links, tables, and other normal documentation components available where appropriate.

23. Keep dependencies reasonable and do not add unnecessary packages.

24. Make sure the project can be built for production and deployed to Vercel.

25. Include:
    - README.md
    - installation instructions
    - development instructions
    - production build instructions
    - Vercel deployment instructions

26. Before finishing, verify:
    - npm install works
    - development server works
    - production build works
    - navigation works
    - all documentation pages are reachable
    - no broken internal links
    - no secrets are committed
    - no AI functionality has been added

IMPORTANT WORKFLOW:

First inspect the Docus repository and understand its current structure and recommended setup.

Then create the GO Documentation project based on it.

Do not simply make a mockup. Build an actual working Docus documentation project that can be pushed to GitHub and deployed to Vercel.

If you need information about GO's actual implementation, inspect the GO Shortener GitHub repository rather than guessing.

The GO application repository is:
https://github.com/ItsARCn/Go-shortner

Keep the documentation project separate from the GO application.

The final result should be:

GO Shortener
    ↓
GitHub application repository

GO Documentation
    ↓
Docus/Nuxt Content
    ↓
Vercel
    ↓
docs.arcn.online
