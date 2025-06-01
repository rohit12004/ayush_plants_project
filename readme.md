## Learning Project designed to test coding skills .

# Virtual Herbal Garden

The **Virtual Herbal Garden** is a web-based platform designed to promote the healing power of medicinal plants through the AYUSH systems (Ayurveda, Yoga, Unani, Siddha, and Homeopathy). It provides educational content, plant details, and gardening tips to help users explore and cultivate traditional medicinal plants.

## Features

- **Explore AYUSH Systems**: Learn about Ayurveda, Yoga, Unani, Siddha, and Homeopathy, and their associated medicinal plants.
- **Plant Information**: Detailed articles on each plant, including images, common names, descriptions, medicinal uses, preparation methods, and precautions.
- **Gardening Guides**: Tips for growing and caring for AYUSH herbs, suitable for both indoor and outdoor settings.
- **Interactive UI**: Modern, responsive design with carousels, animations (GSAP), and Bootstrap components.
- **Virtual Garden Experience**: Immersive sections to discover, learn, and connect with traditional herbal knowledge.

## Project Structure

```
plants/
│
├── about/           # About page, images, styles
├── database/        # JSON data for plants and gardening
├── home/            # Home page, scripts, images, styles
├── indept/          # In-depth gardening guides and plant care
├── main/            # Main content, scripts, styles
├── package.json     # Project dependencies and scripts
```

## Technology Stack

- **HTML5** & **CSS3** (custom + Bootstrap)
- **JavaScript (ES6+)**
- **GSAP** (GreenSock Animation Platform)
- **Bootstrap** (CDN)
- **JSON Server** (for local API/data)
- **Node.js** (for running JSON Server)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository** (if not already):
    ```sh
    git clone <repository-url>
    cd plants
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the JSON server**:
    ```sh
    npm start
    ```
    This will serve plant and section data from `database/db2.json` at `http://localhost:3000/`.

4. **Open the main site**:
    - Open `plants/home/index.html` or `plants/main/main.html` in your browser.


