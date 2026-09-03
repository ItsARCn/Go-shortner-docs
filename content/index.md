---
seo:
  title: GO Shortener Documentation
  description: High-performance, ultra-lightweight, and fully self-contained URL shortener in pure Go with pure Go SQLite WAL, zero-compile deployment, and embedded assets.
---

::u-page-hero
#title
GO Shortener

#description
High-performance, ultra-lightweight, and fully self-contained URL shortener written in pure Go. Compiles into a single ~13MB standalone executable with embedded assets and a sub-0.5MB runtime memory footprint.

#links
  :::u-button
  ---
  color: primary
  size: xl
  to: /introduction/what-is-go
  trailing-icon: i-lucide-arrow-right
  ---
  Get Started
  :::

  :::u-button
  ---
  color: neutral
  icon: i-simple-icons-github
  size: xl
  target: _blank
  to: https://github.com/ItsARCn/Go-shortner
  variant: outline
  ---
  View on GitHub
  :::
::

::u-page-section
#title
Core Architectural Highlights

#features
  :::u-page-feature
  ---
  icon: i-lucide-cpu
  to: /developer/architecture
  ---
  #title
  [< 0.5 MB RAM Footprint]{.text-primary}
  
  #description
  Ultra-efficient runtime designed specifically for resource-constrained 1 GB RAM VPS environments. Compiles to a single ~13 MB binary.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-package
  to: /developer/architecture
  ---
  #title
  [100% Standalone (embed.FS)]{.text-primary}
  
  #description
  Frontend HTML, CSS, JavaScript, and static assets are embedded directly into the Go executable. Zero external web server or Node runtime required.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-database
  to: /developer/database
  ---
  #title
  [Pure Go SQLite (CGO-Free)]{.text-primary}
  
  #description
  Powered by `modernc.org/sqlite` with Write-Ahead Logging (WAL) and single-writer concurrency controls to prevent database contention.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-alert
  to: /user-guide/creating-a-short-link
  ---
  #title
  [SSRF & Anti-Recursion Shield]{.text-primary}
  
  #description
  Blocks loopback, RFC1918 private subnets, cloud metadata IPs (169.254.169.254), self-domain recursion, and unsafe schemes (javascript:, file:).
  :::

  :::u-page-feature
  ---
  icon: i-lucide-layers
  to: /user-guide/expiration
  ---
  #title
  [Dual-Tier Quota Engine]{.text-primary}
  
  #description
  15 links/24h for anonymous guests (max 7 days expiration) and 100 links/month for registered users (up to 1 year expiration) with renewal preservation.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-bar-chart-3
  to: /user-guide/analytics
  ---
  #title
  [Privacy-First Analytics]{.text-primary}
  
  #description
  Aggregates clicks, device breakdowns, browser share, OS, and referrers using SHA-256 identity hashing. Never stores raw visitor IP addresses.
  :::
::
