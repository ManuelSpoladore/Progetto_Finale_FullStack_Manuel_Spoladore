# Scuola Ribelle – Piattaforma di orientamento universitario

## 🧠 Descrizione del progetto

Scuola Ribelle è una piattaforma di orientamento universitario che permette agli studenti di connettersi, condividere esperienze e orientarsi nel mondo accademico. La piattaforma offre un sistema sociale integrato dove gli utenti possono registrarsi selezionando la propria università e facoltà, creare post e interagire con altri studenti del proprio ateneo.

## 🔧 Stack Tecnologico

### Frontend
- **React 18** con **Vite**
- **Tailwind CSS** per il design responsive
- **React Router DOM** per la gestione delle rotte
- **Context API** per la gestione globale dell'utente loggato
- **Framer Motion** per le animazioni di transizione

### Backend
- **PHP (procedurale + MVC custom)**
- **MySQL** come database relazionale
- **JWT (JSON Web Token)** per l'autenticazione sicura
- **Axios** per le chiamate HTTP tra client e server

---

## 📁 Struttura delle cartelle principali

```
/frontend
├── /components     # Componenti riutilizzabili come Navbar, Footer, PostCard...
├── /contexts       # Context globale utente
├── /pages          # Pagine principali (Home, Blog, Login, ecc.)
├── /utils          # Utility come tokenStorage.js
└── App.jsx         # Router principale con animazioni

/backend
├── /config         # Connessione al DB e variabili di configurazione
├── /controllers    # Logica dei controller (es. CourseController.php)
├── /models         # Modelli dati (es. course.php)
├── /routes         # Routing custom lato PHP
├── /public         # Endpoint API accessibili da frontend
└── /vendor         # Librerie installate via Composer (es. firebase/php-jwt)
```

---

## 🚀 Avvio locale

### 1. Prerequisiti
- Node.js 18+
- PHP 8.x
- MySQL / phpMyAdmin
- XAMPP o simili (Apache + MySQL)
- Composer

### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Setup Backend

1. Avvia Apache + MySQL da XAMPP
2. Configura il file `/config/database.php` con le tue credenziali DB
3. Installa le dipendenze:
   ```bash
   cd backend
   composer install
   ```
4. Importa lo schema del DB via phpMyAdmin
5. Assicurati che `.htaccess` e `index.php` siano configurati per il routing

---

## 🔐 Autenticazione

- **Registrazione**: utente può creare un profilo selezionando Università e Facoltà
- **Login**: viene generato un JWT firmato con `JWT_SECRET`
- **Token JWT**: salvato nel localStorage e inviato via Authorization Header
- **Contesto globale utente**: gestito tramite UserContext in React
- **Accesso ai dati protetti**: con `get-user-profile.php` che decodifica il token

---

## 📡 API Endpoints

| Endpoint                    | Metodo | Descrizione                    |
| --------------------------- | ------ | ------------------------------ |
| `/api/register.php`         | POST   | Registra un nuovo utente       |
| `/api/login.php`            | POST   | Login e generazione token JWT  |
| `/api/get-user-profile.php` | GET    | Restituisce i dati dell'utente |
| `/api/create-post.php`      | POST   | Crea un nuovo post social      |
| `/api/get-post.php`         | GET    | Recupera i post, con filtri    |
| `/api/contact.php`          | POST   | Invia messaggi di contatto     |

---

## 🗂️ Funzionalità Implementate

- ✅ Registrazione e login utente con token
- ✅ Sistema universitario relazionale (università ↔ facoltà)
- ✅ Area social: post filtrabili per università e facoltà
- ✅ Responsive design e animazioni di pagina
- ✅ Navbar dinamica in base al login
- ✅ Context globale dell'utente
- ✅ Salvataggio token e gestione profilo via API

---

## 🗄️ Schema Database

### Struttura Tabelle

```sql
-- Elimina le tabelle se già esistono (per test in locale)
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS faculties;
DROP TABLE IF EXISTS universities;

-- Università
CREATE TABLE universities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Facoltà
CREATE TABLE faculties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    university_id INT NOT NULL,
    FOREIGN KEY (university_id) REFERENCES universities(id) ON DELETE CASCADE
);

-- Utenti
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    mail VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    university_id INT NOT NULL,
    faculty_id INT NOT NULL,
    FOREIGN KEY (university_id) REFERENCES universities(id) ON DELETE CASCADE,
    FOREIGN KEY (faculty_id) REFERENCES faculties(id) ON DELETE CASCADE
);

-- Post social
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    university_id INT NOT NULL,
    faculty_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (university_id) REFERENCES universities(id) ON DELETE CASCADE,
    FOREIGN KEY (faculty_id) REFERENCES faculties(id) ON DELETE CASCADE
);
```

### Dati di esempio

```sql
-- Università
INSERT INTO universities (name) VALUES
('Università degli Studi di Milano'),
('Università di Roma La Sapienza'),
('Università di Padova');

-- Facoltà per Università degli Studi di Milano (id: 1)
INSERT INTO faculties (name, university_id) VALUES
('Medicina', 1),
('Ingegneria', 1),
('Economia', 1);

-- Facoltà per Università di Roma La Sapienza (id: 2)
INSERT INTO faculties (name, university_id) VALUES
('Medicina', 2),
('Ingegneria', 2),
('Economia', 2);

-- Facoltà per Università di Padova (id: 3)
INSERT INTO faculties (name, university_id) VALUES
('Medicina', 3),
('Ingegneria', 3),
('Economia', 3);
```

---

## 📊 Importazione Database

### Procedura consigliata:

1. Copia tutto lo script (schema + insert)
2. Apri phpMyAdmin
3. Crea un nuovo database (es. `scuolaribelle`)
4. Vai su SQL e incolla tutto
5. Esegui

---

## 🚧 Sviluppi Futuri
- [ ] Verifica della mail nella propria casella mail e possibilità di aggiornare i propri dati, dalla password alla propria università

- [ ] Possibilità di modificare i propri post e pubblicare materiale

- [ ] Filtro per materie dei corsi di laurea

- [ ] Aggiunta di un metodo di caricamento degli articoli tramite API

- [ ] Aggiunta di un test simil AlphaTest per aiutare gli studenti a capire i propri gusti di studio

- [ ] Aggiunta di una sezione “Futuro Lavoro” dove saranno presenti i lavori che un determinato corso di laurea ha portato a svolgere, per   orientare al meglio le persone, con un filtro ad esempio su quanti soldi si guadagnano e in che regione lo si svolge  

- [ ] Sistema di notifiche real-time

- [ ] Chat privata tra utenti

- [ ] Sistema di valutazione corsi

- [ ] Mobile app con React Native

---

## 📄 Licenza

Distribuito sotto licenza MIT. Vedi `LICENSE` per maggiori informazioni.

---

## 📞 Contatti

- **Progetto**: [Scuola Ribelle](https://github.com/ManuelSpoladore/Progetto_Finale_FullStack_Manuel_Spoladore)
- **Autore**: Manuel Spoladore
- **Email**: manuelspoladore@gmail.com