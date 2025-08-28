# Qiscus Assessment

## Overview

This repository contains my submission for Qiscus assessment that involves designing and implementing a chatting system that supports single and group chats, including diagrams, database structure, a responsive chat interface, and extensions for media messages.<br>
I've built the chat interface using Next.js for a responsive web and mobile view. The dummy JSON data is used for rendering conversations, and I've extended it to support images, videos, and PDFs. The project is deployed for easy evaluation, and the code is available in this repository.
- **Deployment Link**: https://qiscus-assessment.haydaramru.com/
- **Repository Link**: https://github.com/haydaramru/qiscus-assessment

## Tech Stack

- Frontend: Next.js
- Styling: Tailwind CSS and Shadcn UI
- Data: Static JSON files (original and extended)
- Diagrams: Created with Draw.io (exported as PNG)

No backend or database is implemented, as the focus is on frontend and design. The UI loads data from local JSON files.

## Installation and Local Setup

To run the project locally:
1. Clone the repository
```bash
git clone https://github.com/haydaramru/qiscus-assessment.git
cd qiscus-assessment
```

2. Install dependencies
```bash
bun install
```

3. Run the development server
```bash
bun run dev
```
Open http://localhost:3000 in your browser.

## Task Breakdown

### 1. Chatting System Diagram
- File: `diagrams/1_chatting_system_diagram.png`
- Description: A high-level architecture diagram showing components like clients (web/mobile), server, database, and flows for single and group chats. It includes real-time communication assumptions (e.g., WebSockets) for scalability.

### 2. Database Structure (ERD)
- File: `diagrams/2_chat_erd.png`
- Description: An Entity-Relationship Diagram modeling entities such as Rooms, Participants, and Messages. Designed with a NoSQL approach (e.g., collections in MongoDB/Firestore) for flexibility with unstructured data like media attachments. Relationships include one-to-many for rooms to messages.

### 3. Chat Interface with Responsive View
- Location: Live at the [deployment link](https://qiscus-assessment.haydaramru.com/) (root: `/inbox`)
- Description: A responsive chat UI using the dummy JSON from https://bit.ly/chat_room_endpoint.
- Data Source: `data/chat_response.json`

### 4. Extended JSON Format
- File: `data/extended_chat_response.json`
- Description: Extended the original payload to support "image", "video", and "pdf" message types. Added a "url" field for media links and sample messages.

### 5. Updated Chat Interface for Media
- Location: Live at the [deployment link](https://qiscus-assessment.haydaramru.com/) (root: `/inbox`)
- Description: Enhanced the UI from task 3 to render media by adding `"url"` and "`caption`" fields, which maps each comment to `Message` props (mediaUrl, content, filename) based on its type. `Message` conditionally renders text, linked image previews (`img`), HTML5 video (`video controls`), or a PDF link.
