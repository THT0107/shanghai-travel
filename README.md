# 🏮 SHANGHAI GUIDE · 上海旅行指南 / 상하이 여행 가이드

> **Open Source Software (OSS) University Assignment — AI Vibe Coding Project**  
> An urban trendy editorial travel guide web application for exploring Shanghai, built strictly with **HTML5, CSS3, and Vanilla JavaScript**.

---

## 📖 1. Project Overview / 프로젝트 개요 (项目概述)

**SHANGHAI GUIDE** is a modern, responsive web application designed with an **Urban Trendy Editorial Style** (inspired by world-renowned city travel magazines such as *Monocle*, *Kinfolk*, and *Cereal*). It provides travelers with an immersive, aesthetically rich, and practical travel companion for discovering the multifaceted city of Shanghai (魔都, Shanghai).

To foster international cultural exchange and ease of travel between Korea and China, **all user-facing interface text is presented bilingually in Simplified Chinese and Korean** (e.g., 景点 / 관광명소, 美食 / 맛집, 搜索 / 검색, 收藏 / 즐겨찾기).

This project was built without any external UI frameworks (no React, Vue, or Angular), no backend servers, and no paid API keys. It runs directly by opening `index.html` in any modern web browser.

---

## 🎨 2. Design System & Aesthetics / 디자인 시스템

- **Design Philosophy**: Modern Urban Editorial / Magazine layout with bold typography, asymmetric cards, generous whitespace, and sharp visual hierarchy.
- **Color Palette**:
  - **Editorial Cream White** (`#F8F7F4` / `#FFFFFF`): Clean paper-like texture and crisp cards.
  - **Dark Charcoal** (`#141517` / `#2B2C30`): Sophisticated high-contrast editorial text.
  - **China Red / Modern Vermilion** (`#E63920`): Vivid accent highlighting active states, tags, and favorites.
  - **Shanghai Deep Indigo** (`#133E87` / `#EBF1FF`): Urban transit and landmark badges.
  - **Warm Amber Gold** (`#D97706`): Heritage markers and travel tips.
- **Typography**: Dual-language typography pairing high-contrast serif headlines (*Playfair Display*) with clean, legible sans-serif body type (*Noto Sans SC / Noto Sans KR / Pretendard*).
- **Responsive Layout**: Fluid breakpoints from mobile (320px) and tablet (768px) up to ultra-wide desktop monitors (1240px+).

---

## ✨ 3. Key Features & Sections / 주요 기능 및 구성

### 🏛️ 1. Home / 首页 / 홈
- Magazine-style asymmetric hero banner with Shanghai skyline photography.
- Bilingual introduction to Shanghai's unique blend of 100-year historical concessions and futuristic skyscrapers.
- Quick statistical highlights (800+ km metro network, 100+ years heritage architecture, 24h urban vibe).
- 4 curated editorial focus pillars (*01 城市地标, 02 弄堂梧桐, 03 舌尖风味, 04 智能漫游*).

### 🗼 2. Attractions / 景点 / 관광명소
- **Featured Destinations**:
  1. **The Bund (外滩 / 와이탄)** — Historical waterfront & architectural exposition.
  2. **Oriental Pearl Tower (东方明珠广播电视塔 / 동방명주)** — Iconic 468m tower with glass skywalk.
  3. **Yu Garden (豫园与老城隍庙 / 예원 및 성황묘)** — Classical Ming Dynasty Jiangnan garden.
  4. **Shanghai Disneyland (上海迪士尼乐园 / 상하이 디즈니랜드)** — World's largest Disney enchanted castle & TRON.
  5. **Wukang Road (武康路与梧桐区 / 우캉루 및 조계지)** — Century-old villas, Wukang Mansion & chic cafes.
  6. **Shanghai Museum (上海博物馆 / 상하이 박물관)** — National treasure trove of ancient Chinese bronze & ceramics.
  7. **Xintiandi (新天地与石库门 / 신천지 & 스쿠먼)** — Revitalized Shikumen brick alleys with lively bistro life.
  8. **Jing'an Temple (静安寺 / 정안사)** — Golden Buddhist landmark glowing amidst futuristic towers.
- **Real-Time Interactive Search**: Filter by Chinese, Korean, or English keywords and metro stations.
- **Category Filter Pills**: All (全部/전체), Landmarks (城市地标), History & Culture (历史人文), Trendy Streets (潮流街区), Leisure & Theme Parks (休闲娱乐).
- **Live Search Counter**: Dynamic feedback displaying matching count.
- **Verification Notice Tags**: Realistic travel notes marking changeable admission fees and hours with an official check warning (`* 实际开放时间及票价请以官方公告为准`).

### 🥟 3. Food / 美食 / 특색맛집
- **Iconic Shanghai Delicacies**:
  1. **Nanxiang Xiaolongbao (南翔小笼包 / 난샹 샤오롱바오)** — Thin wrapper with scalding, savory soup broth.
  2. **Shengjianbao (老上海生煎包 / 성지엔바오)** — Golden pan-fried crispy pork buns topped with sesame & chives.
  3. **Scallion Oil Noodles (开洋葱油拌面 / 파기름 비빔면)** — Aromatic scallion oil with dried shrimp and soy sauce.
  4. **Braised Pork Belly (本帮秘制红烧肉 / 상하이식 홍소육)** — Rich, tender pork belly in glistening sweet-savory glaze.
  5. **Pork Chop with Rice Cakes (鲜得来排骨年糕 / 갈비 떡구이)** — Crispy fried pork chop with chewy rice cakes.
  6. **Fresh Crab Roe Noodles & Tangbao (现拆蟹黄面与蟹粉小笼 / 게살 비빔면 & 탕바오)** — Decadent golden river crab roe.
  7. **Sweet Osmanthus Lotus Root & Rice Cake (桂花糖藕与条头糕 / 계화 연근 조림 & 찰떡)** — Jiangnan sweet dessert tea bites.
  8. **Traditional Crispy Smoked Fish (老上海本帮熏鱼 / 상하이식 훈제 생선)** — Sweet-savory crispy appetizer.
- **Flavor Profile Tags**: Sensory descriptors (e.g., *皮薄汁多 / 육즙 가득*, *焦葱浓郁 / 파기름 풍미*).
- **Foodie Secrets (品味秘诀 / 맛 팁)**: Authentic advice on how to eat without scalding your tongue and best local condiment pairings (e.g., Shanghai yellow-label Worcestershire sauce).
- **Interactive Search & Category Filters**: Dim sum (经典点心), Noodles (面食主食), Shanghainese cuisine (本帮名菜), Street snacks & desserts (街头甜点).

### 🚇 4. Transport / 交通指南 / 교통안내
- **Shanghai Metro (上海地铁 / 상하이 메트로)**: Lines 2, 10, and 14 breakdown, payment via Alipay / WeChat QR Transit Codes or multi-day travel passes.
- **Airports & High-Speed Rail (机场与高铁)**:
  - Pudong International Airport (PVG) & the **Shanghai Maglev (磁浮列车)** running at up to 300–430 km/h in 8 minutes.
  - Hongqiao Integrated Transportation Hub (SHA) linking air, high-speed rail, and metro.
- **Ride-Hailing & River Ferry (网约车与轮渡)**:
  - Didi Chuxing inside Alipay with automatic bilingual in-app translation.
  - 2 RMB Huangpu River cross-river commuter ferry experience.
- **Practical Travel Checklist (실전 여행 체크리스트)**: Mobile payments (Alipay Tour Card binding foreign Visa/Mastercard), international roaming / eSIM, Amap & Apple Maps navigation, 220V plug compatibility.

### 🗺️ 5. Itineraries / 推荐行程 / 추천일정
- **Tabbed Interactive Route Switcher**:
  - **1-Day Tour (1日精华游 / 1일 핵심 코스)**: Yu Garden ➔ Nanjing Road ➔ The Bund ➔ 2 RMB Ferry ➔ Lujiazui & Oriental Pearl night view.
  - **2-Day Tour (2日深度游 / 2일 클래식 & 트렌드 코스)**: Day 1 Classic Landmarks + Day 2 Wukang Road, Anfu Road café walk, Xintiandi & Jing'an Temple.
  - **3-Day Tour (3日全景游 / 3일 완전 정복 코스)**: Days 1–2 Landmarks & Heritage + Day 3 Choice A (Shanghai Disneyland full-day magical tour) or Choice B (Zhujiajiao Jiangnan ancient water town boat tour).
- **Detailed Timeline Cards**: Morning, afternoon, and evening breakdowns with suggested transit lines, dining recommendations, and photography tips.

### ❤️ 6. Favorites System / 我的收藏 / 내 즐겨찾기
- **One-Click Bookmark**: Toggle heart icon on any attraction or food card.
- **Browser Persistence**: Saved automatically into `localStorage` (`shanghai_guide_favorites_v1`), retaining user items across browser restarts.
- **Slide-in Quick Drawer Modal**: Accessible anytime via the header badge button, displaying item count in real-time.
- **Dedicated Full Section View**: Filter saved items by All, Attractions Only, or Foods Only.
- **Clear All Confirmation**: Safely clear all saved items with bilingual confirmation prompt.
- **Animated Toast Feedback**: Non-intrusive floating toasts with bilingual messages confirming additions and removals.

---

## 🛠️ 4. Technology Stack / 기술 스택 (技术架构)

| Layer | Technology | Description |
|---|---|---|
| **Structure** | **HTML5** | Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), ARIA accessibility attributes, clean meta tags. |
| **Styling** | **CSS3** | CSS Custom Properties (Variables), CSS Grid & Flexbox, Backdrop Filter blur, custom scrollbar, smooth transitions, responsive media queries. |
| **Logic** | **Vanilla JavaScript (ES5/ES6)** | Pure client-side JavaScript without any build step, modular structure, localStorage sync, dynamic DOM rendering, SVG error fallback handlers. |
| **Typography** | **Google Fonts** | *Playfair Display* for editorial titles; system fonts fallback to *Noto Sans KR / Noto Sans SC / Pretendard*. |
| **Assets** | **Wikimedia Commons & SVG Fallbacks** | 100% verified, authentic historical and culinary photographs sourced from Wikimedia Commons and Wikipedia; coupled with built-in responsive SVG fallbacks to guarantee zero broken image icons even offline. |

---

## 📁 5. Project Structure / 프로젝트 구조 (项目目录)

```text
shanghai-travel/
├── index.html        # Main HTML5 entry point containing all sections & modals
├── style.css         # Complete editorial design system, typography, & responsive CSS
├── script.js         # Interactive application logic, data stores, search, filters & storage
└── README.md         # Comprehensive project documentation for GitHub & OSS evaluation
```

---

## 🚀 6. How to Run Locally / 로컬 실행 방법 (本地运行指南)

No installation, Node.js, npm, or build tools are required!

### Option 1: Direct File Launch (Easiest)
1. Download or clone this repository to your computer.
2. Double-click `index.html` or right-click and choose **Open with** -> **Google Chrome**, **Microsoft Edge**, **Safari**, or **Mozilla Firefox**.
3. The website will load and function completely offline (including favorites and search).

### Option 2: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Right-click `index.html` and select **"Open with Live Server"**.
3. The site opens automatically at `http://127.0.0.1:5500/index.html`.

### Option 3: Using Python Static Server (Optional)
```bash
# In the project directory, run:
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

---

## 🧪 7. Testing & Interaction Checklist / 기능 검증 체크리스트

- [x] **Navigation Links**: Smooth scrolling to `#home`, `#attractions`, `#food`, `#transport`, `#itineraries`, and `#favorites`.
- [x] **Mobile Menu**: Responsive hamburger toggle with animated bars that closes smoothly upon link selection.
- [x] **Attractions Search & Filter**: Real-time multi-lingual search (Chinese, Korean, English) and category pill switching.
- [x] **Food Search & Filter**: Real-time food name and flavor query matching with dynamic count updates.
- [x] **Itinerary Route Switcher**: Instant switching between 1-Day, 2-Day, and 3-Day tour cards with animated fade-in.
- [x] **Favorites System**:
  - Heart button toggles fill state and increments/decrements header counter.
  - Floating toast shows bilingual confirmation message.
  - Stored in `localStorage` and restored automatically on page reload.
  - Slide-in modal drawer opens smoothly and supports single-item removal and full clearing.
- [x] **Image Authenticity & Content Accuracy Audit**:
  - **Homepage Hero**: Replaced incorrect generic image with authentic high-resolution Lujiazui Pudong skyline as seen from The Bund across the Huangpu River.
  - **The Bund**: Authentic historic Customs House and HSBC colonial-era waterfront buildings.
  - **Oriental Pearl Tower**: Authentic Oriental Pearl TV Tower in Lujiazui.
  - **Yu Garden**: Authentic Ming Dynasty classical pavilions and rockery in Shanghai Yuyuan.
  - **Shanghai Disneyland**: Authentic Enchanted Storybook Castle.
  - **Wukang Road**: Authentic historic Wukang Mansion (Normandie Apartments) flatiron building.
  - **Shanghai Museum**: Authentic bronze ding-shaped Shanghai Museum building at People's Square.
  - **Xintiandi**: Authentic Shanghai Shikumen brick architecture.
  - **Jing'an Temple**: Authentic golden Buddhist temple complex in downtown Shanghai.
  - **Xiaolongbao**: Authentic steamed soup dumplings in bamboo steamer.
  - **Shengjianbao**: Authentic Shanghai pan-fried pork buns with crispy bottoms, sesame, and scallions.
  - **Scallion Oil Noodles**: Authentic Shanghainese Kaiyang scallion oil noodles.
  - **Hongshao Rou**: Authentic Shanghai red-braised pork belly from Shanghai's famous Lao Ji Shi restaurant.
  - **Paigu Niangao**: Authentic Shanghai fried pork chop with rice cakes from Xiandelai on Yunnan South Road.
  - **Crab Roe Noodles**: Authentic fresh river crab roe and meat sauce over noodles.
  - **Sweet Osmanthus Lotus Root**: Authentic steamed lotus root stuffed with glutinous rice in osmanthus syrup.
  - **Shanghai Smoked Fish**: Authentic crispy deep-fried fish fillets immersed in sweet soy sauce (Baoyu / Xunyu).
  - **Transport**: Authentic Shanghai Metro Line 10 train and Shanghai Maglev high-speed train at PVG.
- [x] **Image Fallback System**: Built-in SVG data URI fallback on image `onerror` to guarantee no broken image icons.
- [x] **Bilingual Requirement**: All headings, labels, tags, buttons, empty states, and warnings are presented in Simplified Chinese and Korean.

---

## 📜 8. Academic Submission & License / 학술 과제 안내

- **Course**: Open Source Software (OSS) Assignment
- **Methodology**: AI Vibe Coding (Human-AI Collaborative Frontend Development)
- **License**: MIT License — Open for academic demonstration and open source contribution.

