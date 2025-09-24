# Webbased-English-Dictionary

### **Description**

This project is a functional, single-page **Online Dictionary Web Application** built using **HTML**, **CSS**, and **JavaScript**. It allows users to search for the meaning of English words by querying a public dictionary API. The application provides the word, its definition, and an available audio pronunciation.

The design is visually distinct, featuring a **dark blue theme** with contrasting colorful text for the word and meaning, all centered on the screen.

---

### **Key Features**

#### **1. HTML Structure (`index.html`)**
* **Layout:** The main content is contained within a centered `.container` with the title "English Dictionary."
* **Input:** An `<input type="text">` field (`#search-word`) is provided for the user to type in a word.
* **Status Message:** A paragraph element (`#info`) displays status messages, such as instructions, search progress, or error messages.
* **Output Box:** A `div` (`#main-box`) contains a table structure to neatly display the **Word** (`#words`) and its **Meaning** (`#mean`).
* **Audio Player:** An `<audio>` element (`#audio-file`) is included to play the pronunciation of the word.

#### **2. CSS Styling (`style.css`)**
* **Centering:** The entire application is **horizontally and vertically centered** on the page using `display: flex` on the `body`.
* **Theme:** The `.container` has a **dark blue background** (`rgb(5, 5, 68)`) with white text for the headings.
* **Color-Coded Output:** The **Word** (`.info-2`) is highlighted in **lime green** (`rgb(126, 255, 40)`), and the **Meaning** (`.info-1`) is displayed in **bright red** (`rgb(255, 0, 0)`).
* **Hiding Element:** The CSS class `.active` uses `display: none` to **toggle the visibility** of the main output box or the status message, which is controlled by JavaScript.

#### **3. JavaScript Functionality (`index.js`)**
* **Event Trigger:** The script listens for the `keyup` event on the input field (`#search-word`). When a non-empty word is typed and the **Enter key** is pressed, the `getmeaning()` function is called.
* **API Integration:** The core function `getmeaning(word)` uses the `fetch` API to query the **Free Dictionary API** (`https://api.dictionaryapi.dev/api/v2/entries/en/`).
* **State Management:**
    * Before fetching, it updates the status message to "Search meaning of word..."
    * It uses `classList.add("active")` and `classList.remove("active")` to show/hide the status message and the main meaning box, providing visual feedback to the user.
* **Data Parsing:** On a successful response, it extracts:
    * The primary **Definition** from the first meaning object.
    * The **Audio URL** by iterating through the `phonetics` array to find the first entry that contains an audio file.
* **Display:** The extracted meaning and word are injected into the `#words` and `#mean` elements. The audio URL is set as the `src` attribute of the `#audio-file` element.
* **Error Handling:** A `try...catch` block is implemented to handle cases where the word is not found or the API request fails. In this event, a user-friendly error message is displayed: "Sorry, We could not meaning of word [word]."
