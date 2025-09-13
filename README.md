# Individuell examination: Strajk bowling (ENGLISH description - end of page)

- **Vitest** – för enhetstester  
- **React Testing Library & Jest-DOM** – För att skriva och definiera tester 
- **Mock Service Worker (MSW)** – för att 'mocka' API-anrop i tester
- **jsdom** – för att simulera en webbläsarmiljö

## Bakgrund

Strajk bowling är en nyöppnad bowlinghall i centrala Bromölla. Ägaren K. Ägla gillar tekniska lösningar och har tillsammans med brorsonen Keso Ägla byggt denna webbapp.
Herr Ägla är väldigt nöjd med appen men vill försäkra sig om att den är fortsatt stabil när ny funktionalitet läggs till framöver. Ditt uppdrag är att skriva unit tester med React testing library som sen kan köras för att testa av all funktionalitet när man gör en push till Github.

Du hittar de user stories som har implementerats nedan och som de ska skrivas tester för. Koden hittar du i mappen `Strajk bowling`.

## User stories

### Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.

**Acceptanskriterier:**

- Användaren ska kunna välja ett datum och en tid från ett kalender- och tidvalssystem.
- Användaren ska kunna ange antal spelare (minst 1 spelare).
- Användaren ska kunna reservera ett eller flera banor beroende på antal spelare.
- VG - Ifall användaren inte fyller i något av ovanstående så ska ett felmeddelande visas
- VG - Om det inte finns tillräckligt med lediga banor för det angivna antalet spelare, ska användaren få ett felmeddelande.

### Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.

**Acceptanskriterier:**

- Användaren ska kunna ange skostorlek för varje spelare.
- Användaren ska kunna ändra skostorlek för varje spelare.
- Det ska vara möjligt att välja skostorlek för alla spelare som ingår i bokningen.
- VG - Om användaren försöker slutföra bokningen utan att ange skostorlek för en spelare som har valt att boka skor, ska systemet visa ett felmeddelande och be om att skostorleken anges.
- VG - Om antalet personer och skor inte matchas ska ett felmeddelande visas
- Systemet ska visa en översikt där användaren kan kontrollera de valda skostorlekarna för varje spelare innan bokningen slutförs.

### Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.

**Acceptanskriterier:**

- Användaren ska kunna ta bort ett tidigare valt fält för skostorlek genom att klicka på en "-"-knapp vid varje spelare.

### Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).

**Acceptanskriterier:**

- Användaren ska kunna slutföra bokningen genom att klicka på en "slutför bokning"-knapp.
- Systemet ska generera ett bokningsnummer och visa detta till användaren efter att bokningen är slutförd.
- Systemet ska beräkna och visa den totala summan för bokningen baserat på antalet spelare (120 kr per person) samt antalet reserverade banor (100 kr per bana).
- Den totala summan ska visas tydligt på bekräftelsesidan och inkludera en uppdelning mellan spelare och banor.

### Som användare vill jag kunna navigera mellan boknings-och bekräftelsevyn.

**Acceptanskriterier:**

- Användaren ska kunna navigera från bokningsvyn till bekräftelsevyn när bokningen är klar.
- Om användaren navigerar till bekräftelsevyn och ingen bokning är gjord eller finns i `session storage` ska texten "Ingen bokning gjord visas".
- Om användaren navigerar till bekräftelsevyn och det finns en bokning sparad i `session storage` ska denna visas.

## Betygskriterier

**Får godkänt ska du:**

- Gjort tester i React testing library för alla user stories och acceptanskriter som går grönt när man kör dessa.
- Mockat POST-anrop med Mock service worker.
- Testerna triggas via en Github actions på main-branchen. Det bör alltså finnas en grön bock i ditt Github repo när du lämnar in examinationen. Det ska heller inte gå och deploya om inte man når en viss procent.

**Får Väl Godkänt ska du:**

- Har skrivit tester för alla acceptanskriterier som är VG. Observera att det finns flera unika felmeddelanden och varje felmeddelande ska vara i sitt eget test. Här gäller det också att tänka igenom hur man skriver sina test. Om vi tar, att man ska ha fyllt i allt fält (datum, tid, antalet spelare och banor) så gäller det att testet kollar att felmeddelandet visas för flera kombinationer av vad man glömt att fylla i.
- Du ska ha över 90% coverage i dina tester.



# Individual Examination: Strajk Bowling

> **Note:** This project was created as part of a test assignment.  
> The purpose was to write unit tests for an existing React application using React Testing Library and Mock Service Worker, with automated testing via GitHub Actions.

---

## Tools & Dependencies

This project uses the following main tools and libraries:
 
- **Vitest** – for unit testing  
- **React Testing Library & Jest-DOM** – for writing and asserting tests  
- **Mock Service Worker (MSW)** – for mocking API calls in tests  
- **jsdom** – to simulate a browser environment for testing  

---

## Background

Strajk Bowling is a newly opened bowling alley in central Bromölla.  
The owner, K. Ägla, enjoys technical solutions and together with his nephew, Keso Ägla, has built this web app.  

While he is very satisfied with the app, he wants to ensure its continued stability as new functionality is added.  
Your task was to write unit tests using React Testing Library, which should run automatically whenever code is pushed to GitHub.  

The implemented user stories to be tested are described below.  
The source code can be found in the `Strajk bowling` folder.

---

## User Stories & Acceptance Criteria

### 1. Booking date, time, and number of players

**As a user, I want** to book a date and time and specify the number of players so I can reserve one or more lanes.  

**Acceptance criteria:**
- User can select a date and time from a calendar/time picker.  
- User can enter the number of players (minimum 1).  
- User can reserve one or more lanes depending on the number of players.  
- **VG:** If any field is missing, an error message is shown.  
- **VG:** If there aren’t enough available lanes for the given number of players, an error message is shown.  

---

### 2. Selecting shoe sizes

**As a user, I want** to choose shoe sizes for each player so everyone gets proper shoes.  

**Acceptance criteria:**
- User can set a shoe size for each player.  
- User can change the shoe size for each player.  
- All players in the booking must have a shoe size assigned.  
- **VG:** If booking is finalized without entering a shoe size, an error message is shown.  
- **VG:** If the number of people and shoes do not match, an error message is shown.  
- An overview of shoe sizes per player is shown before finalizing the booking.  

---

### 3. Removing a shoe size field

**As a user, I want** to remove an extra shoe size field if I mistakenly added one.  

**Acceptance criteria:**
- User can remove a shoe size field by clicking a "-" button next to the player.  

---

### 4. Completing the reservation

**As a user, I want** to send my booking and receive a booking number and total cost so I know what to pay.  
(120 SEK per person + 100 SEK per lane)  

**Acceptance criteria:**
- User can finalize the booking with a "Complete Booking" button.  
- System generates a booking number and displays it to the user.  
- System calculates and shows the total cost: players (120 SEK each) + lanes (100 SEK each).  
- Confirmation page clearly shows the total, broken down into players and lanes.  

---

### 5. Navigating between booking and confirmation view

**As a user, I want** to navigate between the booking and confirmation views.  

**Acceptance criteria:**
- User can navigate from booking to confirmation once a booking is complete.  
- If there is no booking (or none saved in `sessionStorage`), the text *"No booking made"* is shown.  
- If a booking exists in `sessionStorage`, it should be displayed.  

---

## Grading Criteria

**To pass (G):**
- Write tests in React Testing Library for all user stories and acceptance criteria.  
- Mock POST requests with Mock Service Worker.  
- Tests must run via GitHub Actions on the `main` branch. A green checkmark should appear in the repo.  
- Deployment must be blocked if coverage does not meet the required percentage.  

**To pass with distinction (VG):**
- Write tests for all *VG* acceptance criteria.  
- Each unique error message must be covered in a separate test.  
- Test cases should cover multiple combinations of missing inputs (e.g., missing date, time, or players).  
- Test coverage must be above 90%.  

---



