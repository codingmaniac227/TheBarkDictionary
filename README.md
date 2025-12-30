# TheBarkDictionary

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  

<h3 align="center">The Bark Dictionary</h3>

  <p align="center">
    A dog breed exploration app built with React + Vite.<br />
    Browse random dog breeds, view detailed information, and navigate between breed endpoints using live API data.
    <br />
    <a href="https://github.com/codingmaniac227/TheBarkDictionary" target="_blank" rel="noopener"><strong>Explore the repo »</strong></a>
    <br />
    <br />
    <a href="thebarkdictionary.netlify.app">View Demo (Local)</a>
    ·
    <a href="https://github.com/codingmaniac227/TheBarkDictionary/issues" target="_blank" rel="noopener">Report Bug</a>
    ·
    <a href="https://github.com/codingmaniac227/TheBarkDictionary/issues" target="_blank" rel="noopener">Request Feature</a>
  </p>
</div>

---

## Table of Contents
<details>
  <summary>Expand</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#assignment-requirements-coverage">Assignment Requirements Coverage</a></li>
    <li><a href="#potential-features">Potential Features</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

---

## About The Project

<p align="center">
  <img src="./public/dog-background.jpg" alt="The Bark Dictionary Screenshot" width="520">
</p>

The Bark Dictionary is a frontend application that allows users to explore dog breeds using live data from **The Dog API**. On load, a random breed is selected and displayed. Users can then navigate to a detailed view to learn more about that breed’s characteristics.

**Highlights**
- Random dog breed discovery
- Detailed breed information view
- Context-based state sharing
- Client-side routing with React Router
- API keys handled securely via environment variables

<p align="right">(<a href="#thebarkdictionary">back to top</a>)</p>

---

## Built With

* [![React][React.js]][React-url]
* [![Vite][Vite.js]][Vite-url]
* React Router
* The Dog API

<p align="right">(<a href="#thebarkdictionary">back to top</a>)</p>

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

```sh
npm install npm@latest -g
```

### Installation (local)

Clone the repository:

```sh
git clone https://github.com/codingmaniac227/TheBarkDictionary.git
cd TheBarkDictionary
```

Install dependencies:

```sh
npm install
```

Create an environment file in the root directory:

```sh
VITE_BARKAPPAPI=https://api.thedogapi.com/v1
VITE_BARKAPPAPIKEY=your_api_key_here
```

Run the development server:

```sh
npm run dev
```

Open the app:

```
http://localhost:5173
```

<p align="right">(<a href="#thebarkdictionary">back to top</a>)</p>

---

## Usage

On load, a random dog breed is displayed. Navigate to the detailed view to see:

- Breed name
- Weight and height
- Lifespan
- Reference image

Navigate back to explore additional breeds.

<p align="right">(<a href="#thebarkdictionary">back to top</a>)</p>

---

## Assignment Requirements Coverage

### STRUCTURE
- Public GitHub repository
- HTML document (`index.html`)
- CSS files for styling
- JavaScript (React) fetching data from a public API
- README with setup and run instructions

### CONTENT
- Data displayed from multiple API endpoints
- Navigation between endpoint-driven views
- New GET requests issued when navigating between views

### FUNCTIONALITY
- App runs locally following README instructions
- Navigation behaves correctly and efficiently
- Code is readable and well structured
- API keys stored securely using environment variables
- Styling is readable and accessible

<p align="right">(<a href="#thebarkdictionary">back to top</a>)</p>

---

## Potential Features

- Search for a specific dog breed
- Filter breeds by size or lifespan
- Deploy to Netlify with public demo

---

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'feat(scope): add new feature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

<p align="right">(<a href="#thebarkdictionary">back to top</a>)</p>

---

## Contact

**Marquise Davis**  
📧 Email: codingmaniac227@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/marquise-davis/)  
🔗 [GitHub Repo](https://github.com/codingmaniac227/TheBarkDictionary)

<p align="right">(<a href="#thebarkdictionary">back to top</a>)</p>

---

## Acknowledgments

- The Dog API
- React + Vite ecosystem
- Open-source community

<p align="right">(<a href="#thebarkdictionary">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
