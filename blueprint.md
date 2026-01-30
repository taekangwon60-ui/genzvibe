
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

## 4. Frontend Design (v1) - DEPRECATED

This initial design is now deprecated and will be replaced by V2.

---

## 5. Frontend Design (V2): The Redesign

### Plan & Features

The second version focuses on a complete visual and structural overhaul to create a more "hip, clean, and easy to view" experience.

- **Aesthetic:** Modern Dark Mode UI.
- **Layout:** A single-column, centered layout for better focus on content.
- **Typography:** Use of 'Inter' font for clean and readable text.
- **Header:** A simplified header that contains the application title and integrated filter controls. The logo is removed for now.
- **Filters:**
  - Redesigned and fixed dropdown menus for Country and Platform selection.
  - Default selection set to "Worldwide" and "Youtube".
  - The UI issues (checkmark overlapping, menu popping up) will be resolved.
- **Data Visualization:**
  - **Trend Rankings:** A prominently displayed list of the top trending keywords, showing rank, keyword, and trend score.
  - **Comparison Chart:** A visual line chart comparing the trends over time for the top keywords.
- **Color Palette:**
  - Background: A deep, dark gray (`#111827`).
  - Cards/Elements: A slightly lighter dark gray (`#1F2937`).
  - Primary/Accent: A vibrant purple for interactive elements.
  - Text: Clean white and light gray for readability.

### Implementation Plan:

1.  **[Current]** **Reset and Redesign:**
    *   Update `globals.css` with the new dark mode color palette and typography.
    *   Fix the `select.tsx` component to resolve UI bugs.
    *   Delete the old `Header.tsx`, `Filters.tsx`, and `Dashboard.tsx` components.
    *   Create new components:
        *   `TrendRankings.tsx`: For the keyword list.
        *   `TrendChart.tsx`: For the comparison chart.
    *   Rebuild `page.tsx` from scratch with the new layout and components.
2.  **[Next]** **Data Integration:**
    *   Connect to a data source (initially mock data, then a real API) to populate the rankings and chart.
3.  **[Future]** **Backend and Database:**
    *   Build out the backend services for data crawling and storage.
