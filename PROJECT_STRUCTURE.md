# Structure du Projet Bouillon Baron

## 📁 Architecture Générale

```
bouillon_baron/
├── app/                          # Pages et layout principal
│   ├── layout.tsx               # Layout global (Header + Footer)
│   ├── page.tsx                 # Accueil
│   ├── globals.css              # Styles globaux + variables CSS
│   ├── restaurant/
│   │   └── page.tsx             # Page Restaurant
│   ├── menu/
│   │   └── page.tsx             # Page Menu/Carte
│   ├── reservation/
│   │   └── page.tsx             # Page Réservation
│   ├── contact/
│   │   └── page.tsx             # Page Contact
│   └── admin/                   # Back-office (à développer)
│       └── page.tsx
│
├── components/                  # Composants réutilisables
│   ├── layout/                  # Composants de mise en page
│   │   ├── Header.tsx          # Entête / Navigation
│   │   └── Footer.tsx          # Pied de page
│   ├── sections/               # Sections réutilisables
│   │   ├── Hero.tsx            # Section Hero
│   │   ├── ServiceCard.tsx     # Carte de service
│   │   └── MenuPreview.tsx     # Aperçu du menu
│   └── common/                 # Composants communs
│       ├── Button.tsx          # Bouton personnalisé
│       ├── Card.tsx            # Carte personnalisée
│       └── Container.tsx       # Conteneur avec max-width
│
├── lib/                         # Utilitaires et configurations
│   ├── colors.ts               # Palette de couleurs
│   └── utils.ts                # Fonctions utilitaires (à créer)
│
├── types/                       # Types TypeScript
│   └── index.ts                # Définitions de types
│
├── public/                      # Assets statiques
│   ├── images/                 # Images du site
│   ├── icons/                  # Icônes
│   └── bouillon_baron.pdf      # Cahier des charges
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts (optionnel)
├── README.md                    # Documentation du projet
└── PROJECT_STRUCTURE.md        # Ce fichier

```

## 🎨 Palette de Couleurs

**Fichier**: `lib/colors.ts`

```typescript
primary: #1a3a52           // Bleu profond
primaryDark: #0f2944       // Bleu profond foncé
accent: #d4af37            // Or/Doré
accentLight: #e8d4a8       // Or clair
background: #faf8f3        // Blanc cassé
foreground: #2c2c2c        // Gris foncé
borderLight: #e8eff7       // Bleu léger
textLight: #666666         // Texte clair
```

## 📄 Pages Principales

### 1. **Accueil** (`app/page.tsx`)
- Hero section avec CTA
- Badge Michelin
- Présentation du chef
- Aperçu du menu
- Services offerts
- Témoignages clients
- Infos pratiques rapides

### 2. **Restaurant** (`app/restaurant/page.tsx`)
- Histoire du restaurant
- Philosophie culinaire
- Présentation du chef
- Photos galerie
- Équipe

### 3. **Menu** (`app/menu/page.tsx`)
- Carte complète (Entrées, Plats, Desserts)
- Menus dégustation (2 et 3 plats)
- Prix
- Description des plats
- Option téléchargement PDF (à implémenter)

### 4. **Réservation** (`app/reservation/page.tsx`)
- Formulaire de réservation
- Sélection date/heure/nombre de personnes
- Confirmation email automatique
- Infos pratiques

### 5. **Contact** (`app/contact/page.tsx`)
- Formulaire de contact
- Coordonnées complètes
- Horaires
- Google Maps (à intégrer)

### 6. **Admin** (`app/admin/page.tsx` - À développer)
- Back-office pour gestion:
  - Menu (CRUD)
  - Photos
  - Horaires
  - Réservations
  - Export clients (RGPD)

## 🧩 Composants Disponibles

### Layout (`components/layout/`)
- **Header**: Navigation avec logo et CTA
- **Footer**: Liens, infos, mentions légales

### Sections (`components/sections/`)
- **Hero**: Banner avec title, subtitle, CTA
- **ServiceCard**: Carte de service avec icon, titre, description
- **MenuPreview**: Aperçu de 3 plats avec CTA

### Common (`components/common/`)
- **Button**: Boutons avec variantes (primary, secondary, outline)
- **Card**: Cartes avec variantes de couleur
- **Container**: Conteneur responsive avec padding/maxWidth

## 🔧 Technologies Utilisées

- **Framework**: Next.js 14+ (App Router)
- **Langage**: TypeScript
- **Styling**: CSS inline + Tailwind CSS
- **Composants**: React 18+
- **Font**: Geist (Google Fonts)

## 📝 Types TypeScript

**Fichier**: `types/index.ts`

```typescript
- MenuItem
- Reservation
- Service
- Testimonial
- ContactMessage
- RestaurantInfo
```

## 🚀 Fonctionnalités à Implémenter

- [ ] Back-office admin complet
- [ ] Intégration Google Calendar
- [ ] Synchronisation réservations
- [ ] Emails automatiques
- [ ] Google Maps API
- [ ] PDF téléchargement menu
- [ ] SEO et metas dynamiques
- [ ] Analytics (Google Analytics)
- [ ] Contact form backend
- [ ] Système de paiement (optionnel)

## 📊 Performance Objectifs

- Temps de chargement < 2s
- Lighthouse score > 90
- Images WebP optimisées
- Code-splitting automatique

## 🔐 Sécurité & Conformité

- [ ] RGPD (cookies + consentement)
- [ ] Mentions légales
- [ ] Politique de confidentialité
- [ ] Certificat SSL
- [ ] Sauvegardes automatiques

## 📈 KPIs à Suivre

- Nombre de réservations mensuelles
- Taux de conversion visiteurs → réservations
- Position Google locale
- Trafic organique
- Taux de remplissage semaine/weekend
