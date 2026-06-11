# Passageway Website Rebuild - Local Setup Guide

This project contains the modernized, Tailwind CSS-based rebuild of the Passageway company website.

## How to Share the Project

To share this project with your colleague, simply compress (zip) the entire folder containing these files and send it to them. 

The essential files to include are:
1. `landing_page_prototype.html` (The homepage)
2. `company.html` (The "About Us" / Company page)
3. `logo-horizontal.svg` (The Passageway logo)
4. *(Optional)* The `modules/` folder - this is no longer strictly required since the main `.html` files are self-contained, but it can be kept for reference.

## How Your Colleague Can Run It

Because we have consolidated the website into self-contained HTML files, it is incredibly easy to run. No servers, node modules, or build tools are required!

### Step 1: Extract the Files
Extract the shared folder anywhere on the laptop (e.g., Desktop).

### Step 2: Open in a Browser
Simply **double-click** either `landing_page_prototype.html` or `company.html`. 

The file will open directly in your default web browser (Chrome, Edge, Safari, etc.) via a local `file:///` path.

### Step 3: Navigation
The links between the pages are already connected. For example, clicking the **"Company"** link in the navigation bar of the landing page will instantly open the `company.html` page.

## Technical Details (For Developers)

- **Styling**: The project uses Tailwind CSS via CDN. As long as the laptop has an active internet connection, the styles will load perfectly.
- **Images**: All placeholder images are loaded externally from Unsplash.
- **Icons**: Icons are inline SVGs.
- **Modularity**: All HTML code is contained within the two main files. You do not need to run a local python server to bypass CORS issues anymore, because we are no longer using JavaScript `fetch()` to load the components dynamically.

---
*Built with Tailwind CSS.*
