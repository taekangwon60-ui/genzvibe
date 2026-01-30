# Project Blueprint: GenzVibe - Global Meme Trend Analyzer

## 1. Overview

GenzVibe is a web application designed to identify, analyze, and display the latest internet meme trends from around the world. It will crawl data from various social media platforms, process it using a scoring algorithm, and present the trending keywords and related content in an intuitive dashboard.

---

## 2. System Architecture

The project is divided into three main parts:

1.  **Frontend (Next.js App):** A responsive and interactive user interface built with Next.js, Tailwind CSS, and Shadcn UI. It will display the trend data and allow users to filter by country and platform.
2.  **Backend (Serverless Functions):** Server-side logic, likely deployed as serverless functions (e.g., Firebase Functions or Vercel Serverless Functions), will handle data crawling and API interactions.
3.  **Database:** A database (e.g., Firestore, Supabase, or a traditional SQL DB) will store the crawled data, user information, and analysis results.

### Data Flow:
`Crawl Job (Scheduler)` -> `YouTube API` -> `Store Raw Data in DB` -> `Analysis Service (Scoring Algorithm)` -> `Store Trend Scores in DB` -> `Frontend API` -> `Display on Website`

---

## 3. Tech Stack

*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS
*   **UI Components:** Shadcn UI
*   **Data Source (Initial):** YouTube Data API v3
*   **Future Data Sources:** TikTok, Instagram APIs
*   **Database:** TBD (To be determined)
*   **Deployment:** Vercel / Firebase

---

## 4. Frontend Design (v1)

The UI will be designed for scalability and a clean user experience.

*   **Layout:**
    *   **Header:** Contains the site title ("GenzVibe") and primary navigation.
    *   **Filters:** Dropdown menus to select:
        *   **Country:** Worldwide (default), USA, India, Indonesia, Brazil, Korea.
        *   **Platform:** YouTube (default), TikTok, Instagram, All.
    *   **Dashboard:** A grid or list view to display trending keywords as cards. Each card will show:
        *   Rank
        *   Keyword
        *   Trend Score
        *   A sparkline/chart showing trend velocity (future feature)
        *   Links to related content.

---

## 5. Current Plan: Phase 1 - Foundation & UI Scaffolding

This initial phase focuses on setting up the core technologies and building the basic UI structure for the dashboard.

### Steps:

1.  **[Done]** Update the project blueprint (`blueprint.md`).
2.  **Setup Shadcn UI:** Initialize Shadcn UI to integrate its component library.
3.  **Update Base Styles:** Modify `globals.css` and `tailwind.config.ts` as required by Shadcn UI.
4.  **Create Core Components:**
    *   `Header.tsx`: Application header.
    *   `Filters.tsx`: Country and Platform selection controls.
    *   `Dashboard.tsx`: Placeholder for displaying trend data.
5.  **Build Main Page:** Redesign `page.tsx` to assemble the Header, Filters, and Dashboard components into a cohesive layout.
6.  **Push to GitHub:** Commit and push the new foundational structure to the repository.
