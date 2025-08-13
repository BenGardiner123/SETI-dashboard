# SETI Dashboard 🌌

A real-time interactive dashboard for monitoring the Search for Extraterrestrial Intelligence (SETI) and exploring exoplanet discoveries. This web application provides dynamic visualization of simulated radio signals, spectrograms, and exoplanet data. Built as a foundation for real SETI monitoring systems, it demonstrates the architecture and UI patterns needed for actual astronomical data integration. The current implementation uses NASA APIs for exoplanet data and realistic simulated data for radio signals, making it perfect for extending with real observatory feeds.

## ✨ Features

- **Simulated Signal Monitoring** - Dynamic visualization of realistic radio signals with frequency analysis
- **Interactive Spectrograms** - Real-time radio telescope data simulation with realistic patterns
- **Exoplanet Timeline** - Chronological display of exoplanet discoveries from NASA's Exoplanet Archive
- **Live Statistics** - Real-time updates on simulated observatory data and signal counts
- **Immersive UI** - Animated star field background with modern, responsive design
- **Hybrid Data Sources** - NASA APIs for exoplanet data, simulated data for SETI monitoring

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/SETI-dashboard.git
cd SETI-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data**: NASA APIs and observatory feeds
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📊 Data Sources

The dashboard uses a hybrid approach to data:
- **NASA Exoplanet Archive** - Real exoplanet discovery data via API
- **Simulated SETI Data** - Realistic radio signal generation for demonstration purposes
- **Simulated Radio Telescope Data** - Dynamic spectrogram generation with realistic patterns
- **Simulated Observatory Statistics** - Realistic monitoring statistics that update in real-time

## 🎯 Use Cases

- **Research & Education** - Perfect for astronomy classes and research projects
- **Public Outreach** - Engaging way to share SETI research with the public
- **Data Visualization** - Dynamic monitoring of simulated astronomical phenomena
- **Interactive Learning** - Hands-on exploration of exoplanet discoveries and SETI concepts
- **Development Foundation** - Starting point for building real SETI monitoring systems
- **API Integration** - Template for connecting to actual radio telescopes and observatories

## 🔧 Development

### Project Structure
```
src/
├── components/          # React components
│   ├── ExoplanetTimeline.tsx
│   ├── Header.tsx
│   ├── LiveStats.tsx
│   ├── SignalVisualizer.tsx
│   ├── Spectrogram.tsx
│   └── StarField.tsx
├── hooks/              # Custom React hooks
├── services/           # API services
├── types/              # TypeScript type definitions
└── App.tsx            # Main application component
```

### Architecture Highlights
- **Modular Design** - Easy to swap simulated data with real observatory feeds
- **Type-Safe Interfaces** - Well-defined data structures for astronomical data
- **Real-time Updates** - Built-in polling system ready for live data streams
- **Responsive Components** - Reusable UI components for various data types

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🚀 Future Development & Contributing

This project is designed to be a foundation for real SETI monitoring systems. We welcome contributions that move it toward production use:

### High-Priority Extensions
- **Real Observatory Integration** - Connect to actual radio telescopes (Arecibo, Green Bank, FAST)
- **Live Data Streams** - Implement WebSocket connections for real-time observatory feeds
- **Signal Analysis** - Add machine learning models for anomaly detection
- **Multi-Observatory Support** - Coordinate data from multiple telescopes worldwide

### Contributing
Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

**Looking for contributors with experience in:**
- Radio astronomy and signal processing
- Real-time data streaming and WebSockets
- Machine learning for signal analysis
- Observatory API integration

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments & Resources

- **NASA** for providing astronomical data APIs
- **The SETI Institute** for ongoing research in extraterrestrial intelligence
- **The astronomical community** for continuous discoveries and observations

### Related Projects & APIs
- [SETI Institute API](https://www.seti.org/) - Official SETI research data
- [Breakthrough Listen](https://breakthroughinitiatives.org/initiative/1) - Global SETI program
- [NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/) - Exoplanet database
- [Green Bank Observatory](https://greenbankobservatory.org/) - Radio telescope data

---

**Explore the cosmos from your browser** 🚀✨

*Simulated data updates every 3-5 seconds • Real exoplanet data from NASA • Built with modern web technologies*

---

**Ready to take this further?** This project is designed to be the foundation for real SETI monitoring systems. Whether you're a researcher, developer, or astronomy enthusiast, there's plenty of room to expand and improve! 🌌
