"use client";
import React, { useState } from "react";

type Status = "live" | "test-flight";

interface Tech {
  label: string;
  color: "react" | "next" | "ts" | "tailwind" | "api";
}

type ProjectType = "individual" | "collaborative";

interface App {
  name: string;
  icon: string;
  description: string;
  status: Status;
  techs: Tech[];
  link?: string;
  linkLabel?: string;

  // 🆕 nuevos campos
  projectType: ProjectType;
  teamMembers?: string[];
  contributions?: string[];
}

const APPS: App[] = [
  {
    name: "WhyNot?!",
    icon: "/icons/WNOTICON.png",
    description:
      "App for iPhone/iPad that helps people to connect more with the present through small challenges that can help them to find new hobbies, to grow as a person, etc...",
    status: "live",
    projectType: "individual",
    teamMembers: [],
    contributions: [
      "Full design and development of the app",
      "Implemented core challenge system",
      "Full ideation, and full development and design of the app",
    ],
    techs: [
      { label: "Swift", color: "react" },
      { label: "SwiftUI", color: "next" },
      { label: "Swift Playgrounds", color: "ts" },
    ],
    link: "https://apps.apple.com/mx/app/whynot/id6759918158?l=en-GBWhyNot?!",
    linkLabel: "Go to App",
  },

  {
    name: "WarriorMind",
    icon: "/icons/AppIconWM.png",
    description:
      "WarriorMind is a self-improvement app designed to turn intention into action. It helps you build discipline through personalized challenges called “Battles,” track your goals, and grow through an identity-based system that adapts to your mindset. With features like motivational content and a customizable AI-generated warrior avatar, WarriorMind transforms personal growth into an engaging, game-like experience.",
    status: "live",
    projectType: "individual",
    teamMembers: [],
    contributions: [
      "Full ideation, and full development and design of the app",
      "Core architecture in SwiftUI",
      "AI avatar integration",
      "Gamification system design",
    ],
    techs: [
      { label: "Swift", color: "react" },
      { label: "SwiftUI", color: "next" },
      { label: "Image Playgrounds", color: "tailwind" },
    ],
    link: "https://apps.apple.com/mx/app/warriormind/id6759920278?l=en-GBWarriorMind",
    linkLabel: "Go to App",
  },

  {
    name: "Sugar-Lens",
    icon: "/icons/AppIconSL.png",
    description:
      "This is an app to help people with diabetes to manage better their blood glucose levels depending on the food they consume, through scanning the food, logging the sugar, predictions of sugar glucose levels and companion with the Apple Watch through suggestions in order to control your daily amount of sugar.",
    status: "live",
    projectType: "collaborative",
    teamMembers: ["Fatemeh Abolhasani", "Haniyeh Azimzadeh", "Michela D'Auria", "Mobina Haghighat", "Chaima Chafaai", "José Miguel Guerrero Jiménez"],
    contributions: [
      "Food scanning system",
      "ML integration for glucose prediction",
      "Apple Watch companion features",
      "Development of the app's core architecture",
    ],
    techs: [
      { label: "Swift", color: "next" },
      { label: "SwiftUI", color: "ts" },
      { label: "CreateML", color: "api" },
      { label: "WatchKit", color: "api" },
    ],
    link: "https://apps.apple.com/mx/app/sugar-lens/id6758524494?l=en-GBSugar-Lens",
    linkLabel: "Go to App",
  },

  {
    name: "Remo-Tennis",
    icon: "/icons/RemoTennisIcon.png",
    description:
      "Tennis app to play with the remote control as the racket, 3d unity game for the Apple TV",
    status: "test-flight",
    projectType: "collaborative",
    teamMembers: ["Harith Angelo Perera", "Brunella Roy Chowdhury", "Jonathan Tellez Perez", "José Miguel Guerrero Jiménez", "Sahil Chouhan", "Şule Nur Çelik", "Sagar Ramakrishna Shetty"],
    contributions: [
      "Unity gameplay integration",
      "Remote control input system",
    ],
    techs: [
      { label: "Swift", color: "react" },
      { label: "SwiftUI", color: "ts" },
      { label: "Unity", color: "tailwind" },
    ],
    link: "https://testflight.apple.com/join/sRXaffXe",
    linkLabel: "Go to App",
  },

  {
    name: "CultrAxy",
    icon: "/icons/AppIconCA.png",
    description:
      "This is an app to help people who wants or are moving to another countries, to help them to adapt easier to the new culture, by reading fun facts, asking specific questions from that culture to an ai, looking by their own some important things of some cultures and also with a gamified notification system.",
    status: "test-flight",
    projectType: "collaborative",
    teamMembers: ["Sara", "Estrella", "José Miguel Guerrero Jiménez", "A P", "Asad"],
    contributions: [
      "AI integration for cultural Q&A",
      "Gamified notification system",
    ],
    techs: [
      { label: "Swift", color: "next" },
      { label: "SwiftUI", color: "ts" },
      { label: "Gemini API", color: "api" },
    ],
    link: "https://testflight.apple.com/join/RSKEA1r9",
    linkLabel: "Go to App",
  },

  {
    name: "MuseNema",
    icon: "/icons/MNAppIcon.png",
    description:
      "An app to find the soundtrack of movies, series and video games, in which you can play song´s demos thanks to music kit",
    status: "test-flight",
    projectType: "individual",
    teamMembers: [],
    contributions: [
      "Full development of the app",
      "MusicKit integration",
      "Spotify API integration",
    ],
    techs: [
      { label: "Swift", color: "next" },
      { label: "SwiftUI", color: "ts" },
      { label: "MusicKit", color: "api" },
      { label: "Spotify API", color: "api" },
    ],
    link: "https://testflight.apple.com/join/A8tY4f9s",
    linkLabel: "Go to App",
  },
];

const BANNERS = ["b1", "b2", "b3", "b4", "b5", "b6"];

const techClass: Record<Tech["color"], string> = {
  react:    "chip chip-r",
  next:     "chip chip-n",
  ts:       "chip chip-t",
  tailwind: "chip chip-tw",
  api:      "chip chip-api",
};

function TechChip({ tech }: { tech: Tech }) {
  return <span className={techClass[tech.color]}>{tech.label}</span>;
}

function AppModal({ app, index, onClose }: { app: App; index: number; onClose: () => void }) {
  const banner = BANNERS[index % BANNERS.length];
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>

        <div className={`modal-banner ${banner}`}>
          <img
            src={app.icon}
            alt={app.name}
            style={{ width: 80, height: 80, borderRadius: 20, objectFit: "cover", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
          />
        </div>

        <div className="modal-body">
          <div className="modal-top">
            <div>
              <h2 className="modal-title">{app.name}</h2>
              <span className={`app-status ${app.status === "live" ? "status-live" : "status-wip"}`}>
                {app.status === "live" ? "App Store" : "TestFlight"}
              </span>
            </div>
            {app.link && (
              <a
                className="modal-cta"
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {app.linkLabel} →
              </a>
            )}
          </div>

          <p className="modal-desc">{app.description}</p>

          
          <div className="modal-section-label">Project</div>

            <p className="modal-desc">
              Type: {app.projectType === "collaborative" ? "Collaborative" : "Individual"}
            </p>

            {app.projectType === "collaborative" && app.teamMembers?.length && (
              <>
                <div className="modal-section-label">Team Members</div>
                <ul className="modal-list">
                  {app.teamMembers.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </>
            )}

            {app.contributions?.length && (
              <>
                <div className="modal-section-label">My Contributions</div>
                <ul className="modal-list">
                  {app.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </>
            )}
            <div className="modal-section-label">Stack</div>
          <div className="tech-chips" style={{ gap: 8 }}>
            {app.techs.map((t) => (
              <TechChip key={t.label} tech={t} />
            ))}
          </div>

        </div>
        
      </div>
      
    </div>
  );
}

function AppCard({ app, index, onClick }: { app: App; index: number; onClick: () => void }) {
  const banner = BANNERS[index % BANNERS.length];
  return (
    <div className="app-card" onClick={onClick}>
      <div className={`card-banner ${banner}`}>
        <img
          src={app.icon}
          alt={app.name}
          style={{ width: 48, height: 48, borderRadius: 12, objectFit: "cover" }}
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <span className="app-name">{app.name}</span>
          <span className={`app-status ${app.status === "live" ? "status-live" : "status-wip"}`}>
            {app.status === "live" ? "App Store" : "TestFlight"}
          </span>
        </div>
        <p className="app-desc">{app.description}</p>
        <div className="card-footer">
          <div className="tech-chips">
            {app.techs.map((t) => (
              <TechChip key={t.label} tech={t} />
            ))}
          </div>
          <span className="card-link">Ver más →</span>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selected, setSelected] = useState<{ app: App; index: number } | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Syne:wght@700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .port-wrap {
          font-family: 'Space Grotesk', sans-serif;
          color: #1a1a1a;
          padding: 3rem 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .hero { margin-bottom: 2.5rem; }

        .hero-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #7F77DD;
          background: #EEEDFE;
          border-radius: 20px;
          padding: 4px 14px;
          margin-bottom: 12px;
        }

        .hero h1 {
          font-family: 'Syne', sans-serif;
          font-size: 42px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 10px;
        }

        .hero h1 span {
          background: linear-gradient(90deg, #7F77DD, #D4537E, #EF9F27);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          font-size: 15px;
          color: #666;
          max-width: 600px;
          line-height: 1.6;
        }

        .stack-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }

        .pill {
          font-size: 12px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 20px;
          border: 1.5px solid;
        }
        .pill-react  { color: #1D9E75; background: #E1F5EE; border-color: #5DCAA5; }
        .pill-next   { color: #3C3489; background: #EEEDFE; border-color: #AFA9EC; }
        .pill-ts     { color: #185FA5; background: #E6F1FB; border-color: #85B7EB; }
        .pill-tail   { color: #0F6E56; background: #E1F5EE; border-color: #9FE1CB; }

        .section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 1rem;
        }

        .apps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 720px) {
          .apps-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .apps-grid { grid-template-columns: 1fr; }
        }

        .app-card {
          background: #fff;
          border: 0.5px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }
        .app-card:hover {
          transform: translateY(-3px);
          border-color: #bbb;
          box-shadow: 0 8px 24px rgba(0,0,0,0.07);
        }

        .card-banner {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
        }

        .b1 { background: linear-gradient(135deg, #EEEDFE, #FBEAF0); }
        .b2 { background: linear-gradient(135deg, #E1F5EE, #E6F1FB); }
        .b3 { background: linear-gradient(135deg, #FAEEDA, #FAECE7); }
        .b4 { background: linear-gradient(135deg, #EAF3DE, #E1F5EE); }
        .b5 { background: linear-gradient(135deg, #FBEAF0, #FAEEDA); }
        .b6 { background: linear-gradient(135deg, #E6F1FB, #EEEDFE); }

        .card-body { padding: 10px 14px 14px; }

        .card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .app-name {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .app-status {
          font-size: 11px;
          font-weight: 500;
          padding: 3px 9px;
          border-radius: 12px;
          white-space: nowrap;
        }
        .status-live { background: #EAF3DE; color: #3B6D11; }
        .status-wip  { background: #FAEEDA; color: #854F0B; }

        .app-desc {
          font-size: 12px;
          color: #666;
          line-height: 1.5;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-footer { display: flex; align-items: center; justify-content: space-between; }

        .tech-chips { display: flex; gap: 5px; flex-wrap: wrap; }

        .chip {
          font-size: 11px;
          font-weight: 500;
          padding: 3px 8px;
          border-radius: 8px;
        }
        .chip-r   { background: #E1F5EE; color: #0F6E56; }
        .chip-n   { background: #EEEDFE; color: #3C3489; }
        .chip-t   { background: #E6F1FB; color: #185FA5; }
        .chip-tw  { background: #E1F5EE; color: #0F6E56; }
        .chip-api { background: #FAECE7; color: #993C1D; }

        .card-link {
          font-size: 12px;
          font-weight: 500;
          color: #7F77DD;
          white-space: nowrap;
          cursor: pointer;
        }

        /* ── MODAL ── */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          animation: fadeIn 0.15s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .modal-box {
          background: #fff;
          border-radius: 20px;
          max-width: 480px;
          width: 100%;
          overflow: hidden;
          position: relative;
          animation: slideUp 0.2s ease;
          box-shadow: 0 24px 60px rgba(0,0,0,0.18);
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        .modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255,255,255,0.8);
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          font-size: 13px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          z-index: 10;
          backdrop-filter: blur(4px);
        }
        .modal-close:hover { background: #f0f0f0; }

        .modal-banner {
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-body { padding: 20px 24px 28px; }

        .modal-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
          gap: 12px;
        }

        .modal-title {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 6px;
        }

        .modal-cta {
          display: inline-block;
          background: linear-gradient(135deg, #7F77DD, #D4537E);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 20px;
          text-decoration: none;
          white-space: nowrap;
          transition: opacity 0.15s;
          flex-shrink: 0;
        }
        .modal-cta:hover { opacity: 0.88; }

        .modal-desc {
          font-size: 14px;
          color: #555;
          line-height: 1.65;
          margin-bottom: 18px;
        }

        .modal-section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 10px;
        }
      `}</style>

      <div className="port-wrap">
        <div className="hero">
          <div className="hero-tag">✦ Dev Portfolio</div>
          <h1>
            Hello, I'm<br />
            <span>José Miguel</span>
          </h1>
          <p>Full-stack developer, software engineering student at the Tec de Mty, Apple Developer Academy student, passionate about creating innovative solutions. I love building apps that make a difference, software architecture, project management and full-stack development.</p>
          <div className="stack-pills">
            <span className="pill pill-tail">Swift</span>
            <span className="pill pill-react">React</span>
            <span className="pill pill-next">Next.js</span>
            <span className="pill pill-ts">TypeScript</span>
            <span className="pill pill-tail">Tailwind CSS</span>
          </div>
        </div>

        <p className="section-label">Featured Projects</p>

        <div className="apps-grid">
          {APPS.map((app, i) => (
            <AppCard
              key={app.name}
              app={app}
              index={i}
              onClick={() => setSelected({ app, index: i })}
            />
          ))}
        </div>
        <div className="advice-section">
        <p className="section-label">Advice for Future Academy Students</p>

        <div className="advice-card">
          <h3>Things I Wish I Knew Before Starting</h3>

          <ul>
            <li>
              Focus on learning rather than trying to build the perfect app.
              The Academy is one of the best places to experiment and fail fast.
            </li>

            <li>
              Collaborate with as many people as possible. Some of the most
              valuable lessons come from working with people from different
              backgrounds and cultures.
            </li>

            <li>
              Be proactive and take initiative. Opportunities often come to
              those who volunteer, lead discussions, and step outside their
              comfort zone.
            </li>

            <li>
              Build relationships and network. The people you meet during the
              Academy can become future teammates, friends, mentors, or
              collaborators.
            </li>

            <li>
              Enjoy the journey. The projects are important, but the personal
              growth and experiences are what stay with you the longest.
            </li>
          </ul>
        </div>
      </div>
      </div>

      {selected && (
        <AppModal
          app={selected.app}
          index={selected.index}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}