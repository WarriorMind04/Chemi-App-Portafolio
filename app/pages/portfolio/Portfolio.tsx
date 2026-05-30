import React from "react";

type Status = "live" | "wip";

interface Tech {
  label: string;
  color: "react" | "next" | "ts" | "tailwind" | "api";
}

interface App {
  name: string;
  emoji: string;
  description: string;
  status: Status;
  techs: Tech[];
  link?: string;
  linkLabel?: string;
}

const APPS: App[] = [
  {
    name: "ShopApp",
    emoji: "🛒",
    description: "E-commerce con carrito, autenticación y pagos integrados.",
    status: "live",
    techs: [
      { label: "Next.js", color: "next" },
      { label: "TS", color: "ts" },
      { label: "Stripe", color: "api" },
    ],
    link: "#",
    linkLabel: "Ver demo",
  },
  {
    name: "Dashboard Pro",
    emoji: "📊",
    description: "Panel de analytics con gráficas en tiempo real y filtros dinámicos.",
    status: "live",
    techs: [
      { label: "React", color: "react" },
      { label: "TS", color: "ts" },
      { label: "Recharts", color: "tailwind" },
    ],
    link: "#",
    linkLabel: "Ver demo",
  },
  {
    name: "AI Chat",
    emoji: "🤖",
    description: "Chatbot con integración a OpenAI, historial y modo oscuro.",
    status: "live",
    techs: [
      { label: "Next.js", color: "next" },
      { label: "TS", color: "ts" },
      { label: "OpenAI", color: "api" },
    ],
    link: "#",
    linkLabel: "Ver demo",
  },
  {
    name: "Task Manager",
    emoji: "📝",
    description: "Gestor de tareas con drag & drop, etiquetas y colaboración.",
    status: "wip",
    techs: [
      { label: "React", color: "react" },
      { label: "TS", color: "ts" },
      { label: "Tailwind", color: "tailwind" },
    ],
    link: "#",
    linkLabel: "GitHub",
  },
  {
    name: "Travel Planner",
    emoji: "🗺️",
    description: "App para planear viajes con mapas interactivos y listas de lugares.",
    status: "live",
    techs: [
      { label: "Next.js", color: "next" },
      { label: "Maps API", color: "api" },
    ],
    link: "#",
    linkLabel: "Ver demo",
  },
  {
    name: "MusicBox",
    emoji: "🎵",
    description: "Player de música con playlists, búsqueda y visualizador de ondas.",
    status: "live",
    techs: [
      { label: "React", color: "react" },
      { label: "TS", color: "ts" },
      { label: "Spotify API", color: "api" },
    ],
    link: "#",
    linkLabel: "Ver demo",
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

function AppCard({ app, index }: { app: App; index: number }) {
  const banner = BANNERS[index % BANNERS.length];
  return (
    <div className="app-card">
      <div className={`card-banner ${banner}`}>{app.emoji}</div>
      <div className="card-body">
        <div className="card-top">
          <span className="app-name">{app.name}</span>
          <span className={`app-status ${app.status === "live" ? "status-live" : "status-wip"}`}>
            {app.status === "live" ? "Live" : "En progreso"}
          </span>
        </div>
        <p className="app-desc">{app.description}</p>
        <div className="card-footer">
          <div className="tech-chips">
            {app.techs.map((t) => (
              <TechChip key={t.label} tech={t} />
            ))}
          </div>
          {app.link && (
            <a className="card-link" href={app.link}>
              {app.linkLabel} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Syne:wght@700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .port-wrap {
          font-family: 'Space Grotesk', sans-serif;
          color: #1a1a1a;
          padding: 3rem 1.5rem;
          max-width: 860px;
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
          max-width: 480px;
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
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
          margin-bottom: 2.5rem;
        }

        .app-card {
          background: #fff;
          border: 0.5px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.2s;
          cursor: pointer;
        }
        .app-card:hover { transform: translateY(-3px); border-color: #bbb; }

        .card-banner {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
        }

        .b1 { background: linear-gradient(135deg, #EEEDFE, #FBEAF0); }
        .b2 { background: linear-gradient(135deg, #E1F5EE, #E6F1FB); }
        .b3 { background: linear-gradient(135deg, #FAEEDA, #FAECE7); }
        .b4 { background: linear-gradient(135deg, #EAF3DE, #E1F5EE); }
        .b5 { background: linear-gradient(135deg, #FBEAF0, #FAEEDA); }
        .b6 { background: linear-gradient(135deg, #E6F1FB, #EEEDFE); }

        .card-body { padding: 14px 16px 16px; }

        .card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .app-name {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .app-status {
          font-size: 11px;
          font-weight: 500;
          padding: 3px 9px;
          border-radius: 12px;
        }
        .status-live { background: #EAF3DE; color: #3B6D11; }
        .status-wip  { background: #FAEEDA; color: #854F0B; }

        .app-desc {
          font-size: 13px;
          color: #666;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .card-footer { display: flex; align-items: center; justify-content: space-between; }

        .tech-chips { display: flex; gap: 6px; flex-wrap: wrap; }

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
          text-decoration: none;
          white-space: nowrap;
        }
        .card-link:hover { color: #534AB7; }
      `}</style>

      <div className="port-wrap">
        <div className="hero">
          <div className="hero-tag">✦ Dev Portfolio</div>
          <h1>
            Hola, soy<br />
            <span>José Miguel</span>
          </h1>
          <p>Desarrollador full-stack, estudiante de ingeniería de software en el Tec de Mty, estudiante de la Apple Developer Academy, apasionado por crear soluciones innovadoras.</p>
          <div className="stack-pills">
            <span className="pill pill-tail">Swift</span>
            <span className="pill pill-react">React</span>
            <span className="pill pill-next">Next.js</span>
            <span className="pill pill-ts">TypeScript</span>
            <span className="pill pill-tail">Tailwind CSS</span>
          </div>
        </div>

        <p className="section-label">Proyectos destacados</p>

        <div className="apps-grid">
          {APPS.map((app, i) => (
            <AppCard key={app.name} app={app} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}