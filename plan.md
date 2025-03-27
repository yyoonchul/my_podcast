# My Podcast - Personalized News & Career Insights

## 프로젝트 구조
```
my_podcast/
├── frontend/
│   ├── src/
│   │   ├── components/     # 재사용 가능한 컴포넌트
│   │   │   ├── common/     # 공통 컴포넌트
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   └── Loading.tsx
│   │   ├── pages/         # 페이지 컴포넌트
│   │   │   ├── LandingPage.tsx
│   │   │   ├── PodcastSelectionPage.tsx
│   │   │   ├── CustomizationPage.tsx
│   │   │   └── SignUpPage.tsx
│   │   ├── styles/        # 스타일 파일
│   │   │   └── globals.css
│   │   ├── utils/         # 유틸리티 함수와 상수
│   │   │   ├── auth.ts    # 인증 관련 유틸리티
│   │   │   ├── firebase.ts # Firebase 설정
│   │   │   └── constants.ts
│   │   ├── types/         # TypeScript 타입 정의
│   │   │   ├── user.ts    # 사용자 관련 타입
│   │   │   ├── podcast.ts # 팟캐스트 관련 타입
│   │   │   └── index.ts
│   │   ├── App.tsx        # 메인 앱 컴포넌트
│   │   └── main.tsx       # 앱 진입점
│   ├── public/            # 정적 파일
│   │   └── google-icon.svg
│   ├── index.html         # HTML 템플릿
│   ├── package.json       # 프로젝트 설정 및 의존성
│   ├── vite.config.ts     # Vite 설정
│   ├── tailwind.config.js # Tailwind CSS 설정
│   └── postcss.config.js  # PostCSS 설정
└── README.md
```

## 기술 스택
- Frontend Framework: React with TypeScript
- Build Tool: Vite
- Styling: Tailwind CSS
- Authentication: Firebase Auth
- Database: Firebase Firestore
- Routing: React Router

## 데이터베이스 스키마

### users 컬렉션
```typescript
interface UserPreferences {
  // 기본 정보
  createdAt: Date;          // 계정 생성일
  email: string;           // 사용자 이메일
  displayName?: string;    // 표시 이름 (Google 로그인 시)
  photoURL?: string;       // 프로필 사진 URL (Google 로그인 시)

  // 온보딩 정보
  selectedTopics: string[];  // 선택한 관심 토픽
  selectedJob: string;      // 선택한 직무
  podcastType: 'news' | 'career' | 'hybrid';  // 선택한 팟캐스트 타입

  // 사용자 설정
  preferences?: {
    notificationEnabled: boolean;  // 알림 설정
    emailNotifications: boolean;   // 이메일 알림
    pushNotifications: boolean;    // 푸시 알림
  };
}
```

## 개발 상태
- [x] 프로젝트 초기 설정
- [x] 기본 페이지 구조 구현
- [x] 스타일링 적용
- [x] Firebase 연동
- [ ] 사용자 인증 구현
- [ ] 데이터베이스 연동
- [ ] 팟캐스트 생성 로직 구현
- [ ] 테스트 작성
- [ ] 배포 설정

# 1. Objectives

- **Rapid Onboarding:** Build a minimal yet effective onboarding flow from landing page to user sign-up.
- **User Preference Capture:** Allow users to select their desired podcast type and provide detailed customizations (e.g., for News: select topics; for Career: select professional role; for Mixed: custom input).
- **Firebase-Based User Management:** Use Firebase Authentication for sign-up/sign-in and Firestore for storing user profiles and preferences.
- **Scalable Foundation:** Develop a lean system that can later be extended with advanced features (e.g., full podcast generation, complex backend processing via Python/FastAPI).

---

# 2. Components & Flow

## 2.1 Frontend (React)
- **Landing Page:**
  - Engaging hero section with headline and subheadline
  - CTA: "Start Your Custom Podcast Journey"
  - Visuals: Commuter imagery, subtle digital/audio effects

- **Podcast Type Selection:**
  - Option cards for:
    - **Custom News Podcast:** Choose news topics (e.g., Politics, Economy, Tech, etc.)
    - **Career Growth Podcast:** Select professional role (e.g., Software Engineer, Product Manager, etc.)
    - **Mixed/Advanced Podcast:** Option for custom input (Pro Plan upsell)
  - CTA: "Next: Customize Your Topics"

- **Detailed Customization Screen:**
  - **News Podcast Users:** Checkbox/toggle for topic selection
  - **Career Growth Users:** Dropdown or selection cards for role choice
  - **Mixed/Advanced Users (Pro Upsell):** Free-text input for custom topics and mix options
  - CTA: "Confirm My Preferences"

- **Sign-Up Page:**
  - Simple sign-up using Firebase Auth (Google Sign-In and/or Email Sign-Up)
  - Minimal form fields and clear instructions
  - CTA: "Create My Account"

- **Onboarding Confirmation:**
  - Summary of selected podcast type and detailed preferences
  - Option to review and edit choices before final account creation

## 2.2 Backend (Firebase)
- **Authentication:**
  - Firebase Authentication for user registration and login
  - Support for Google Sign-In and Email/Password methods

- **Data Storage (Firestore):**
  - **Users Collection:**
    - Fields: `uid`, `email`, `auth_method`, `podcast_type`, `preferences`, `pro_waitlist`, `created_at`
  - **Preferences Storage:**
    - For News: `{ "topics": ["Politics", "Tech", ...] }`
    - For Career: `{ "role": "Software Engineer" }`
    - For Mixed: Custom entries as provided by the user

- **Optional Future Backend (Python/FastAPI):**
  - Implement more complex processing (e.g., news scraping, script generation, TTS conversion) when the MVP is validated and scaling becomes necessary.
  - This component will run as microservices or cloud functions and integrate with the Firebase ecosystem.

---

# 3. Technology Stack

## **Frontend:**
- **Framework:** React.js
- **Authentication:** Firebase Auth

## **Backend:**
- **Primary Backend:** Firebase (Authentication, Firestore, Cloud Functions)

---

# 6. Conclusion

The initial MVP focuses on a **lean onboarding process**—from **landing page through sign-up and podcast preference selection**—with all user data managed in Firebase. This **modular, scalable** approach allows for **quick validation** of the core user experience and lays the groundwork for future expansion into **full podcast generation** and **advanced features**.
