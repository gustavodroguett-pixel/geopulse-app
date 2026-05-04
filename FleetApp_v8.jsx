import { useState, useRef, useEffect } from "react";
import {
  MapPin, Home, Camera, HelpCircle, ArrowLeft, Search, Bell,
  Check, AlertTriangle, LogOut, User, Zap, Clock, BarChart3,
  Phone, Mail, ChevronRight, Gauge, Calendar, ShieldCheck,
  Edit3, TrendingUp, Send, Square, FileText, Info,
  ZapOff, LifeBuoy, ArrowRight, Shield, CheckCircle,
  AlertOctagon, Wrench, Navigation, Radio,
  ChevronDown, Eye, EyeOff, Fuel,
  X, Star, Award, Settings, ChevronUp, List,
  UserCheck, Clipboard, Download, Filter,
  Building2, PieChart, DollarSign, Truck, Package,
  Activity, Users, ArrowUpRight, ArrowDownRight,
  Printer, Share2, RefreshCw, MoreHorizontal,
  MapPinOff, Layers, MessageSquare
} from "lucide-react";

/* ─── Design Tokens ────────────────────────────────────────── */
const T = {
  /* Brand - Geopulse teal */
  brand:    "#0D9488",
  brandDk:  "#0F766E",
  brandMd:  "#14B8A6",
  brandLt:  "#F0FDFA",
  brandGlow:"rgba(13,148,136,0.28)",
  brandGlow2:"rgba(13,148,136,0.12)",
  /* Status */
  ok:    "#10B981",
  okLt:  "#D1FAE5",
  warn:  "#F59E0B",
  warnLt:"#FEF3C7",
  danger:"#EF4444",
  dangerLt:"#FEE2E2",
  info:  "#3B82F6",
  infoLt:"#DBEAFE",
  /* Neutrals */
  bg:    "#F3F4F6",
  bg2:   "#F9FAFB",
  card:  "#FFFFFF",
  /* Text */
  t1:"#0F172A", t2:"#1E293B", t3:"#64748B", t4:"#94A3B8",
  /* Borders/Lines */
  ln:"#E2E8F0", lnDk:"#CBD5E1",
  /* Dark UI */
  d1:"#020617", d2:"#0F172A", d3:"#1E293B", d4:"#334155",
  d5:"#475569",
  /* Glass */
  glass:"rgba(255,255,255,0.08)",
  glassBorder:"rgba(255,255,255,0.12)",
};

const F = { heading:"'Barlow Condensed', 'Inter', sans-serif", body:"'DM Sans', 'Inter', sans-serif" };

/* ─── Global Style ─────────────────────────────────────────── */
const GlobalStyle = () => {
  useEffect(() => {
    // Ensure proper viewport meta tag for mobile responsiveness
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }
    viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover';
  }, []);
  return (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;}
    html,body{overflow-x:hidden;}
    body{font-family:${F.body};background:${T.bg};}
    @keyframes slideUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
    @keyframes slideIn{from{opacity:0;transform:translateX(18px)}to{opacity:1;transform:translateX(0)}}
    @keyframes slideDown{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes pop{from{opacity:0;transform:scale(0.9)}to{opacity:1;transform:scale(1)}}
    @keyframes popBig{from{opacity:0;transform:scale(0.85)}to{opacity:1;transform:scale(1)}}
    @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(0.94)}}
    @keyframes ripple{0%{transform:scale(0);opacity:0.4}100%{transform:scale(2.8);opacity:0}}
    @keyframes spin{to{transform:rotate(360deg)}}
    @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    @keyframes breathe{0%,100%{transform:scale(1);opacity:0.6}50%{transform:scale(1.15);opacity:1}}
    @keyframes glow{0%,100%{box-shadow:0 0 20px ${T.brandGlow}}50%{box-shadow:0 0 40px rgba(13,148,136,0.5)}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    @keyframes barGrow{from{height:0%;margin-top:auto}to{}}
    .su{animation:slideUp 0.3s cubic-bezier(0.34,1.2,0.64,1) forwards}
    .si{animation:slideIn 0.26s cubic-bezier(0.34,1.2,0.64,1) forwards}
    .sd{animation:slideDown 0.22s ease forwards}
    .pop{animation:pop 0.24s cubic-bezier(0.34,1.3,0.64,1) forwards}
    .popBig{animation:popBig 0.3s cubic-bezier(0.34,1.3,0.64,1) forwards}
    .pu{animation:pulse 2s ease-in-out infinite}
    .breathe{animation:breathe 3s ease-in-out infinite}
    .float{animation:float 4s ease-in-out infinite}
    button{cursor:pointer;-webkit-tap-highlight-color:transparent;font-family:${F.body};}
    input,textarea,select{font-family:${F.body};}
    input:focus,textarea:focus,select:focus{outline:none;}
    input[type=range]{-webkit-appearance:none;appearance:none;height:10px;border-radius:5px;cursor:pointer;}
    input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:26px;height:26px;border-radius:50%;background:${T.brand};border:3px solid white;box-shadow:0 2px 12px ${T.brandGlow};cursor:pointer;}
    ::-webkit-scrollbar{display:none;}
    .skeleton{background:linear-gradient(90deg,${T.ln} 25%,${T.bg} 50%,${T.ln} 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;}
    .card-hover{transition:transform 0.18s ease,box-shadow 0.18s ease;}
    .card-hover:active{transform:scale(0.97);}
    .btn-press:active{transform:scale(0.97) !important;}
    .noise-bg::after{content:'';position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;opacity:0.4;}
    /* Responsive helpers */
    @media (max-width: 360px) {
      .resp-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
    }
  `}</style>
  );
};

/* ─── Utilities ────────────────────────────────────────────── */
const formatRUT = v => {
  const c = v.replace(/[^0-9kK]/g,"").toUpperCase();
  if(!c) return "";
  if(c.length<=1) return c;
  const body = c.slice(0,-1).replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return `${body}-${c.slice(-1)}`;
};

/* ─── Brand Logo ───────────────────────────────────────────────
   Marca personalizada de Geopulse: pin de geolocalización + onda EKG
   en su interior + acento cian de "señal viva". Reemplaza el ícono
   genérico de MapPin por una identidad propia, escalable y reconocible.
   - Funciona sobre fondo teal (gradiente brand) con la pieza en blanco.
   - Mantiene legibilidad desde 16px (favicon) hasta 96px+ (splash). */
const GeopulseLogo = ({ size = 34 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64"
       xmlns="http://www.w3.org/2000/svg" style={{ display:"block" }}
       aria-label="Geopulse">
    {/* Cuerpo del pin — silueta refinada en blanco */}
    <path d="M32 4 C19.5 4 9.5 14 9.5 26.5 C9.5 36.5 21 48.5 30 57.5
             C31.1 58.6 32.9 58.6 34 57.5
             C43 48.5 54.5 36.5 54.5 26.5 C54.5 14 44.5 4 32 4 Z"
          fill="white"/>
    {/* Ventana de telemetría — disco oscuro brand */}
    <circle cx="32" cy="25" r="12.5" fill="#0F766E"/>
    {/* Onda EKG — el "pulse" de la marca */}
    <path d="M20 25 L25 25 L27 20 L30.5 30.5 L33.5 18 L36 27 L37.5 25 L44 25"
          fill="none" stroke="white" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"/>
    {/* Acento cian — señal viva en el pico del latido */}
    <circle cx="33.5" cy="18" r="1.4" fill="#5EEAD4"/>
  </svg>
);

/* ─── Vehicle Icon System ──────────────────────────────────────
   Custom SVG icons for vehicle types — consistent across devices.
   Replaces emojis (🛻🚚🚜🚐) which render differently on iOS/Android. */

/* PICKUP / Camioneta — cab + bed silhouette */
const PickupIcon = ({ size = 24, color = "#0D9488" }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 36 26" xmlns="http://www.w3.org/2000/svg">
    {/* Cargo bed (lighter shade) */}
    <path d="M19 9 L31 9 L33 18 L19 18 Z" fill={color} opacity="0.55"/>
    <rect x="20.5" y="11" width="11" height="5" rx="0.5" fill="rgba(0,0,0,0.18)"/>
    {/* Cab (full color) */}
    <path d="M3 18 L3 9 L8 4 L16 4 L19 9 L19 18 Z" fill={color}/>
    {/* Window */}
    <path d="M5.5 8 L9 5.5 L15.5 5.5 L17.5 8 Z" fill="#E0F2FE" opacity="0.9"/>
    <line x1="12" y1="5.5" x2="12" y2="8" stroke="rgba(0,0,0,0.25)" strokeWidth="0.4"/>
    {/* Headlight */}
    <circle cx="3.5" cy="11.5" r="0.9" fill="#FCD34D"/>
    {/* Door handle */}
    <line x1="11" y1="13" x2="13.5" y2="13" stroke="rgba(0,0,0,0.35)" strokeWidth="0.5" strokeLinecap="round"/>
    {/* Wheels */}
    <circle cx="8" cy="20" r="3" fill="#0F172A"/>
    <circle cx="8" cy="20" r="1.4" fill="#475569"/>
    <circle cx="26" cy="20" r="3" fill="#0F172A"/>
    <circle cx="26" cy="20" r="1.4" fill="#475569"/>
  </svg>
);

/* TRUCK / Camión — large box truck silhouette */
const TruckIcon = ({ size = 24, color = "#0D9488" }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 36 26" xmlns="http://www.w3.org/2000/svg">
    {/* Cargo box */}
    <rect x="14" y="4" width="20" height="14" rx="0.8" fill={color} opacity="0.75"/>
    {/* Cargo box panels */}
    <rect x="16" y="6" width="16" height="10" rx="0.4" fill="rgba(0,0,0,0.12)"/>
    <line x1="24" y1="6" x2="24" y2="16" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5"/>
    {/* Cab */}
    <path d="M2 18 L2 10 L6 6 L14 6 L14 18 Z" fill={color}/>
    {/* Window */}
    <path d="M4 9.5 L7 7 L13 7 L13 9.5 Z" fill="#E0F2FE" opacity="0.9"/>
    {/* Headlight */}
    <circle cx="2.5" cy="13" r="0.9" fill="#FCD34D"/>
    {/* Wheels */}
    <circle cx="7" cy="20" r="3" fill="#0F172A"/>
    <circle cx="7" cy="20" r="1.4" fill="#475569"/>
    <circle cx="22" cy="20" r="3" fill="#0F172A"/>
    <circle cx="22" cy="20" r="1.4" fill="#475569"/>
    <circle cx="29" cy="20" r="3" fill="#0F172A"/>
    <circle cx="29" cy="20" r="1.4" fill="#475569"/>
  </svg>
);

/* VAN / Furgón — single rounded body, sliding door */
const VanIcon = ({ size = 24, color = "#0D9488" }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 36 26" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <path d="M3 18 L3 9 Q3 5 7 5 L29 5 Q33 5 33 9 L33 18 Z" fill={color}/>
    {/* Front window */}
    <path d="M5 9 L8 6.5 L13 6.5 L13 9 Z" fill="#E0F2FE" opacity="0.9"/>
    {/* Side window panel */}
    <rect x="14" y="6.5" width="9" height="3.5" rx="0.5" fill="#E0F2FE" opacity="0.7"/>
    {/* Sliding door divider */}
    <line x1="14" y1="10.5" x2="14" y2="18" stroke="rgba(0,0,0,0.25)" strokeWidth="0.5"/>
    <line x1="23" y1="10.5" x2="23" y2="18" stroke="rgba(0,0,0,0.25)" strokeWidth="0.5"/>
    {/* Door handle */}
    <rect x="18" y="13" width="2.5" height="0.6" rx="0.3" fill="rgba(0,0,0,0.35)"/>
    {/* Headlight */}
    <circle cx="3.5" cy="12" r="0.9" fill="#FCD34D"/>
    {/* Wheels */}
    <circle cx="8" cy="20" r="3" fill="#0F172A"/>
    <circle cx="8" cy="20" r="1.4" fill="#475569"/>
    <circle cx="26" cy="20" r="3" fill="#0F172A"/>
    <circle cx="26" cy="20" r="1.4" fill="#475569"/>
  </svg>
);

/* MACHINERY / Maquinaria — front loader / excavator */
const MachineryIcon = ({ size = 24, color = "#0D9488" }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 36 26" xmlns="http://www.w3.org/2000/svg">
    {/* Boom arm extending up-left */}
    <path d="M14 10 L7 4 L4 5 L4 7 L11 12 Z" fill={color} opacity="0.7"/>
    {/* Bucket at end of arm */}
    <path d="M2 4 L7 4 L7 8 L4 8 L2 7 Z" fill="#475569" stroke="#0F172A" strokeWidth="0.4"/>
    {/* Main body / cabin */}
    <rect x="13" y="6" width="11" height="12" rx="1" fill={color}/>
    {/* Cab window */}
    <rect x="15" y="8" width="7" height="5" rx="0.4" fill="#E0F2FE" opacity="0.9"/>
    {/* Engine compartment / rear */}
    <path d="M24 10 L33 10 L33 18 L24 18 Z" fill={color} opacity="0.85"/>
    {/* Vents */}
    <line x1="26" y1="13" x2="31" y2="13" stroke="rgba(0,0,0,0.3)" strokeWidth="0.4"/>
    <line x1="26" y1="14.5" x2="31" y2="14.5" stroke="rgba(0,0,0,0.3)" strokeWidth="0.4"/>
    {/* Treads/wheels (larger, machinery-style) */}
    <rect x="3" y="17.5" width="30" height="5" rx="2.5" fill="#0F172A"/>
    <circle cx="7" cy="20" r="1.6" fill="#475569"/>
    <circle cx="14" cy="20" r="1.6" fill="#475569"/>
    <circle cx="22" cy="20" r="1.6" fill="#475569"/>
    <circle cx="29" cy="20" r="1.6" fill="#475569"/>
  </svg>
);

/* Unified component — picks the right icon by type */
const VehicleIcon = ({ type, size = 24, color = "#0D9488" }) => {
  // Accept both Spanish names and lowercase keys
  const t = (type || "").toLowerCase();
  if (t === "camioneta" || t === "pickup") return <PickupIcon size={size} color={color}/>;
  if (t === "camión" || t === "camion" || t === "truck") return <TruckIcon size={size} color={color}/>;
  if (t === "maquinaria" || t === "machinery") return <MachineryIcon size={size} color={color}/>;
  if (t === "furgón" || t === "furgon" || t === "van") return <VanIcon size={size} color={color}/>;
  return <PickupIcon size={size} color={color}/>;
};

/* ─── Core Components ──────────────────────────────────────── */

/* Big tappable button – min 56px for field use / gloves */
const Btn = ({ children, onClick, variant="primary", disabled=false, size="md", loading=false }) => {
  const h = size==="lg" ? "64px" : size==="sm" ? "44px" : "56px";
  const fs = size==="lg" ? "17px" : size==="sm" ? "13px" : "15px";
  const vs = {
    primary: { background:`linear-gradient(135deg, ${T.brand}, ${T.brandDk})`, color:"white", boxShadow:`0 4px 24px ${T.brandGlow}` },
    dark:    { background:`linear-gradient(135deg, ${T.t1}, ${T.d3})`, color:"white", boxShadow:"0 4px 20px rgba(0,0,0,0.3)" },
    outline: { background:"transparent", color:T.brand, border:`2px solid ${T.brand}` },
    ghost:   { background:T.bg, color:T.t2, border:`1px solid ${T.ln}` },
    danger:  { background:`linear-gradient(135deg,#EF4444,#DC2626)`, color:"white", boxShadow:"0 4px 20px rgba(239,68,68,0.35)" },
    sos:     { background:`linear-gradient(135deg,#DC2626,#B91C1C)`, color:"white", boxShadow:"0 0 0 4px rgba(220,38,38,0.25), 0 8px 32px rgba(220,38,38,0.5)", letterSpacing:"0.12em" },
    success: { background:`linear-gradient(135deg,${T.ok},#059669)`, color:"white", boxShadow:`0 4px 20px rgba(34,197,94,0.35)` },
  };
  return (
    <button onClick={disabled||loading ? undefined : onClick} disabled={disabled}
      className="btn-press"
      style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px",
        height:h, padding:"0 24px", borderRadius:"16px", fontFamily:F.body,
        fontWeight:"700", fontSize:fs, width:"100%", border:"none",
        opacity:disabled ? 0.45 : 1, transition:"all 0.18s", userSelect:"none",
        ...vs[variant], cursor:disabled ? "not-allowed" : "pointer" }}>
      {loading ? <div style={{ width:"20px", height:"20px", border:"3px solid rgba(255,255,255,0.3)", borderTopColor:"white", borderRadius:"50%", animation:"spin 0.7s linear infinite" }}/> : children}
    </button>
  );
};

/* Status pill */
const Pill = ({ children, color=T.ok, bg }) => (
  <span style={{ display:"inline-flex", alignItems:"center", gap:"4px", padding:"4px 10px", borderRadius:"20px",
    background: bg || `${color}18`, color, fontSize:"11px", fontWeight:"800", letterSpacing:"0.05em",
    whiteSpace:"nowrap" }}>
    {children}
  </span>
);

/* Section header */
const SectionLabel = ({ children, action, onAction }) => (
  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"14px" }}>
    <span style={{ fontFamily:F.heading, fontSize:"12px", fontWeight:"800", textTransform:"uppercase",
      letterSpacing:"0.18em", color:T.t3 }}>{children}</span>
    {action && <button onClick={onAction} style={{ fontSize:"12px", fontWeight:"700", color:T.brand,
      border:"none", background:"none", display:"flex", alignItems:"center", gap:"4px" }}>
      {action} <ChevronRight size={12}/>
    </button>}
  </div>
);

/* Card container */
const Card = ({ children, style={}, onClick }) => (
  <div onClick={onClick} className={onClick?"card-hover":undefined}
    style={{ background:T.card, borderRadius:"20px", border:`1px solid ${T.ln}`,
      boxShadow:"0 1px 3px rgba(15,23,42,0.06), 0 4px 16px rgba(15,23,42,0.04)",
      overflow:"hidden", ...style, cursor:onClick?"pointer":undefined }}>{children}</div>
);

/* Top navigation bar */
const TopNav = ({ onBack, title, subtitle, right, dark=false }) => (
  <div style={{ display:"flex", alignItems:"center", padding:"16px 20px", gap:"12px",
    background: dark ? "rgba(2,6,23,0.95)" : "rgba(255,255,255,0.97)",
    backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)",
    position:"sticky", top:0, zIndex:50,
    borderBottom:`1px solid ${dark ? "rgba(255,255,255,0.06)" : T.ln}`,
    boxShadow: dark ? "none" : "0 1px 12px rgba(15,23,42,0.06)" }}>
    {onBack
      ? <button onClick={onBack} style={{ width:"44px", height:"44px", borderRadius:"14px", border:"none",
          background: dark ? T.d3 : T.bg, color: dark ? "white" : T.t1,
          display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
          boxShadow: dark ? "none" : "0 1px 4px rgba(15,23,42,0.08)" }}>
          <ArrowLeft size={20} strokeWidth={2.5}/>
        </button>
      : <div style={{ width:"44px" }}/>}
    <div style={{ flex:1, minWidth:0 }}>
      <div style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"800", letterSpacing:"0.02em",
        color: dark ? "white" : T.t1, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{title}</div>
      {subtitle && <div style={{ fontSize:"11px", fontWeight:"600", color: dark ? T.d5 : T.t3, marginTop:"1px" }}>{subtitle}</div>}
    </div>
    {right || <div style={{ width:"44px" }}/>}
  </div>
);

/* Bottom Tab Nav
   Designed for Spanish-speaking field workers (25-65 yrs).
   - Spanish labels only (no English jargon like "Stats")
   - Icons reinforce meaning, with fill-on-active state for clarity
   - "Mi Jornada" uses the same vehicle icon as the rest of the app */
const BottomNav = ({ screen, go, hasActiveJourney }) => {
  const isOnJourney = screen === "active_journey";

  const active =
    ["home","notifications","profile_screen"].includes(screen) ? "home" :
    ["start_camera","end_camera","manual_start","manual_end","vehicle_selection","active_journey"].includes(screen) ? "journey" :
    screen === "soporte" ? "support" :
    screen === "performance" || screen === "history" ? "history" : "home";

  // Custom inline icons that support fill/outline states for clarity
  const HomeFill = ({ filled }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled?"currentColor":"none"} stroke="currentColor"
      strokeWidth={filled?0:2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/>
      {filled && <path d="M9 22v-7h6v7" stroke="white" strokeWidth="2" fill="none"/>}
    </svg>
  );

  const ChartFill = ({ filled }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled?"currentColor":"none"} stroke="currentColor"
      strokeWidth={filled?0:2.2} strokeLinecap="round" strokeLinejoin="round">
      {filled ? (
        <>
          <rect x="3" y="13" width="4" height="8" rx="1"/>
          <rect x="10" y="8" width="4" height="13" rx="1"/>
          <rect x="17" y="3" width="4" height="18" rx="1"/>
        </>
      ) : (
        <>
          <line x1="5" y1="21" x2="5" y2="13"/>
          <line x1="12" y1="21" x2="12" y2="8"/>
          <line x1="19" y1="21" x2="19" y2="3"/>
        </>
      )}
    </svg>
  );

  const HelpFill = ({ filled }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled?"currentColor":"none"} stroke="currentColor"
      strokeWidth={filled?0:2.2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      {filled ? (
        <>
          <path d="M12 6 L13.5 9.5 L17 11 L13.5 12.5 L12 16 L10.5 12.5 L7 11 L10.5 9.5 Z"
            fill="white" stroke="white" strokeWidth="0.5"/>
        </>
      ) : (
        <>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </>
      )}
    </svg>
  );

  const tabs = [
    { id:"home",    Comp: HomeFill,  label:"Inicio",      dest:"home" },
    { id:"journey", Comp: null,      label:"Mi Jornada",  dest: hasActiveJourney ? "active_journey" : "vehicle_selection",
      isVehicle: true },
    { id:"history", Comp: ChartFill, label:"Mi Historial", dest:"performance" },
    { id:"support", Comp: HelpFill,  label:"Ayuda",       dest:"soporte" },
  ];

  return (
    <nav style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)",
      width:"100%", maxWidth:"430px", display:"flex", zIndex:50,
      borderTop:`1px solid ${isOnJourney ? "rgba(255,255,255,0.08)" : T.ln}`,
      background: isOnJourney ? "rgba(2,6,23,0.98)" : "rgba(255,255,255,0.98)",
      backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)",
      boxShadow: isOnJourney ? "0 -8px 32px rgba(0,0,0,0.3)" : "0 -4px 24px rgba(15,23,42,0.08)",
      paddingBottom:"env(safe-area-inset-bottom,8px)" }}>
      {tabs.map(({ id, Comp, label, dest, isVehicle }) => {
        const on = active === id;
        const tint = isOnJourney ? "rgba(255,255,255,0.5)" : T.t4;
        const onColor = T.brand;
        return (
          <button key={id} onClick={() => go(dest)} style={{ flex:1, display:"flex", flexDirection:"column",
            alignItems:"center", gap:"4px", padding:"10px 0 8px", border:"none",
            background:"transparent", position:"relative", transition:"all 0.18s", cursor:"pointer" }}>
            {/* Top indicator bar when active */}
            {on && (
              <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)",
                width:"32px", height:"3px", borderRadius:"0 0 4px 4px",
                background: onColor }}/>
            )}
            {/* Icon container with fill-when-active background */}
            <div style={{ width:"40px", height:"32px", borderRadius:"12px", display:"flex",
              alignItems:"center", justifyContent:"center",
              background: on ? (isOnJourney ? `${T.brand}22` : T.brandLt) : "transparent",
              color: on ? onColor : tint,
              transition:"all 0.18s" }}>
              {isVehicle
                ? <PickupIcon size={26} color={on ? onColor : tint}/>
                : <Comp filled={on}/>}
            </div>
            <span style={{ fontSize:"10px", fontWeight: on ? "800" : "700",
              letterSpacing:"0.04em", textTransform:"uppercase", transition:"all 0.18s",
              color: on ? onColor : tint }}>
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

/* ─── SCREEN 1: Login ──────────────────────────────────────── */
const LoginScreen = ({ go }) => {
  const [tab, setTab] = useState("driver");
  const [showPwd, setShowPwd] = useState(false);
  const [empresa, setEmpresa] = useState("");
  const [pwd, setPwd] = useState("");
  const adminOk = empresa.trim().length >= 3 && pwd.length >= 6;

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.d1, display:"flex", flexDirection:"column",
      position:"relative", overflow:"hidden" }}>
      {/* Animated mesh background */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-120px", right:"-100px", width:"380px", height:"380px",
          background:`radial-gradient(circle, rgba(13,148,136,0.3) 0%, transparent 65%)`,
          animation:"float 8s ease-in-out infinite" }}/>
        <div style={{ position:"absolute", bottom:"-80px", left:"-80px", width:"280px", height:"280px",
          background:"radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 65%)",
          animation:"float 10s ease-in-out infinite 2s" }}/>
        <div style={{ position:"absolute", top:"40%", left:"30%", width:"200px", height:"200px",
          background:`radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 65%)`,
          animation:"float 6s ease-in-out infinite 1s" }}/>
        {/* Grid lines */}
        <svg width="100%" height="100%" style={{ position:"absolute", inset:0, opacity:0.04 }}>
          <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      {/* Header */}
      <div style={{ padding:"68px 32px 36px", position:"relative", zIndex:2 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"36px" }}>
          <div style={{ width:"56px", height:"56px", borderRadius:"18px",
            background:`linear-gradient(135deg, ${T.brand}, ${T.brandDk})`,
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:`0 8px 40px ${T.brandGlow}, 0 0 0 1px ${T.brandGlow}` }}
            className="breathe">
            <GeopulseLogo size={34}/>
          </div>
          <div>
            <div style={{ fontFamily:F.heading, fontSize:"24px", fontWeight:"900", color:"white",
              letterSpacing:"0.04em", lineHeight:1, display:"flex", alignItems:"center", gap:"6px" }}>
              GEOPULSE
              <span style={{ width:"5px", height:"5px", borderRadius:"50%",
                background:"#5EEAD4", display:"inline-block",
                boxShadow:"0 0 8px rgba(94,234,212,0.8)",
                animation:"breathe 2s ease-in-out infinite" }}/>
            </div>
            <div style={{ fontSize:"10px", color:T.t4, fontWeight:"600", letterSpacing:"0.18em",
              marginTop:"4px" }}>INTELIGENCIA DE FLOTAS</div>
          </div>
        </div>

        <div style={{ fontFamily:F.heading, fontSize:"40px", fontWeight:"900", color:"white",
          lineHeight:1.05, letterSpacing:"0.01em", marginBottom:"12px" }}>
          BIENVENIDO<br/>
          <span style={{ background:`linear-gradient(135deg, ${T.brand}, ${T.brandMd})`,
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>DE VUELTA.</span>
        </div>
        <p style={{ color:T.d5, fontSize:"14px", fontWeight:"500", lineHeight:1.5 }}>
          Gestión de flota inteligente · Estándar global.
        </p>
      </div>

      {/* Card */}
      <div style={{ flex:1, background:"white", borderRadius:"32px 32px 0 0", padding:"32px", zIndex:2,
        position:"relative", boxShadow:"0 -16px 48px rgba(0,0,0,0.25)" }}>
        {/* Drag indicator */}
        <div style={{ width:"40px", height:"4px", borderRadius:"2px", background:T.ln,
          margin:"-12px auto 24px" }}/>

        {/* Tabs */}
        <div style={{ display:"flex", background:T.bg, borderRadius:"16px", padding:"4px", marginBottom:"28px",
          border:`1px solid ${T.ln}` }}>
          {[
            { id:"driver", Icon: User,     label:"Conductor" },
            { id:"admin",  Icon: Building2, label:"Empresa" }
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ flex:1, padding:"13px", borderRadius:"12px",
              fontSize:"13px", fontWeight:"700", border:"none",
              background: tab===t.id ? "white" : "transparent",
              color: tab===t.id ? T.t1 : T.t3,
              boxShadow: tab===t.id ? "0 2px 8px rgba(15,23,42,0.1)" : "none",
              transition:"all 0.22s",
              display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}>
              <t.Icon size={16} strokeWidth={2.4}/>
              {t.label}
            </button>
          ))}
        </div>

        <div className="pop" key={tab} style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
          {tab==="driver" ? (
            <>
              {/* Driver card */}
              <div style={{ background:`linear-gradient(135deg, ${T.t1} 0%, ${T.d3} 100%)`,
                borderRadius:"22px", padding:"26px", color:"white", marginBottom:"8px",
                position:"relative", overflow:"hidden",
                boxShadow:"0 8px 32px rgba(15,23,42,0.2)" }}>
                <div style={{ position:"absolute", top:"-40px", right:"-40px", width:"140px", height:"140px",
                  background:`${T.brand}20`, borderRadius:"50%", filter:"blur(20px)" }}/>
                <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"22px", position:"relative" }}>
                  <div style={{ width:"50px", height:"50px", borderRadius:"15px",
                    background:`${T.brand}30`, border:`1px solid ${T.brand}50`,
                    display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <MapPin size={24} style={{ color:T.brandMd }} fill="rgba(13,148,136,0.3)"/>
                  </div>
                  <div>
                    <div style={{ fontFamily:F.heading, fontSize:"20px", fontWeight:"800",
                      letterSpacing:"0.02em", lineHeight:1 }}>Soy Conductor</div>
                    <div style={{ fontSize:"12px", color:"rgba(255,255,255,0.65)", marginTop:"4px" }}>Ingresa con tu RUT</div>
                  </div>
                </div>
                <Btn onClick={() => go("rut_entry")} variant="primary">
                  Ingresar con RUT <ArrowRight size={18}/>
                </Btn>
              </div>
              <p style={{ textAlign:"center", fontSize:"13px", color:T.t3, fontWeight:"500" }}>
                ¿Primera vez?{" "}
                <span onClick={() => go("rut_entry")} style={{ color:T.brand, fontWeight:"700", cursor:"pointer" }}>Registrarme como conductor</span>
              </p>
            </>
          ) : (
            <>
              {/* Role selector */}
              <div>
                <label style={{ fontSize:"11px", fontWeight:"700", color:T.t3, textTransform:"uppercase",
                  letterSpacing:"0.1em", display:"block", marginBottom:"10px" }}>Identificarse como</label>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"4px" }}>
                  {[
                    { id:"supervisor", Icon: ShieldCheck, title:"Supervisor", sub:"Control de flota y operarios" },
                    { id:"gerente",    Icon: BarChart3,   title:"Gerente",    sub:"Panel ejecutivo y reportes" },
                  ].map(r => (
                    <button key={r.id} onClick={() => { const sel = r.id; setEmpresa(sel==="supervisor"?"Transportes Sur":""); }}
                      style={{ border:`2px solid ${empresa===r.id||(!empresa&&r.id==="supervisor"&&false)?T.brand:T.ln}`,
                        borderColor: (empresa===r.id||(empresa==="supervisor"&&r.id==="supervisor")||(empresa==="gerente"&&r.id==="gerente")) ? T.brand : T.ln,
                        borderRadius:"16px", padding:"16px 12px", background:
                          (empresa===r.id||(empresa==="supervisor"&&r.id==="supervisor")||(empresa==="gerente"&&r.id==="gerente")) ? T.brandLt : "white",
                        cursor:"pointer", textAlign:"center", transition:"all 0.2s",
                        boxShadow: (empresa===r.id||(empresa==="supervisor"&&r.id==="supervisor")||(empresa==="gerente"&&r.id==="gerente")) ? `0 0 0 4px ${T.brandGlow2}` : "none" }}>
                      <div style={{ width:"40px", height:"40px", borderRadius:"12px",
                        background:`${T.brand}15`, display:"flex", alignItems:"center", justifyContent:"center",
                        margin:"0 auto 8px" }}>
                        <r.Icon size={22} style={{ color:T.brand }} strokeWidth={2.2}/>
                      </div>
                      <div style={{ fontSize:"13px", fontWeight:"700", color:T.t1 }}>{r.title}</div>
                      <div style={{ fontSize:"10px", color:T.t3, marginTop:"2px", lineHeight:1.3 }}>{r.sub}</div>
                    </button>
                  ))}
                </div>
                {/* Hidden real role state using empresa field cleverly */}
              </div>
              <div>
                <label style={{ fontSize:"11px", fontWeight:"700", color:T.t3, textTransform:"uppercase",
                  letterSpacing:"0.1em", display:"block", marginBottom:"8px" }}>Contraseña</label>
                <div style={{ position:"relative" }}>
                  <input type={showPwd?"text":"password"} value={pwd} onChange={e=>setPwd(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    style={{ width:"100%", padding:"16px 52px 16px 18px", borderRadius:"14px",
                      border:`1.5px solid ${pwd.length>=6?T.brand:T.ln}`, fontSize:"15px",
                      fontWeight:"500", background: pwd.length>=6?T.brandLt:T.bg }}/>
                  <button onClick={() => setShowPwd(p=>!p)} style={{ position:"absolute", right:"16px", top:"50%",
                    transform:"translateY(-50%)", background:"none", border:"none", color:T.t3 }}>
                    {showPwd ? <EyeOff size={18}/> : <Eye size={18}/>}
                  </button>
                </div>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" }}>
                <Btn onClick={() => go("supervisor_dashboard")} disabled={pwd.length<6} variant="ghost">
                  <ShieldCheck size={16}/> Supervisor
                </Btn>
                <Btn onClick={() => go("company_dashboard")} disabled={pwd.length<6}>
                  <BarChart3 size={16}/> Gerente
                </Btn>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div style={{ textAlign:"center", marginTop:"28px", padding:"16px",
          background:T.bg, borderRadius:"16px", border:`1px solid ${T.ln}` }}>
          <p style={{ color:T.t4, fontSize:"11px", fontWeight:"700",
            textTransform:"uppercase", letterSpacing:"0.1em" }}>
            Geopulse · v3.2.1 · Cifrado AES-256 · 🔒 Seguro
          </p>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MÓDULO SUPERVISOR
   ═══════════════════════════════════════════════════════════════ */

/* ─── Datos mock operarios ───────────────────────────────────── */
const OPERATORS = [
  { id:"op1", name:"Juan Pérez",    rut:"12.345.678-9", phone:"+56 9 8765 4321", license:"B·C1·D", status:"active",    vigente:true,  vehicle:"TFWZ67", score:94, journeyStatus:"active",  shift:"08:00-17:00" },
  { id:"op2", name:"Roberto M.",    rut:"11.234.567-8", phone:"+56 9 7654 3210", license:"B·C·D",  status:"active",    vigente:true,  vehicle:"ABC123", score:71, journeyStatus:"active",  shift:"08:15-18:30" },
  { id:"op3", name:"Carlos Lara",   rut:"10.123.456-7", phone:"+56 9 6543 2109", license:"B·D",    status:"idle",      vigente:true,  vehicle:"XYZ789", score:88, journeyStatus:"pending", shift:"07:45-16:00" },
  { id:"op4", name:"Miguel Araya",  rut:"9.012.345-6",  phone:"+56 9 5432 1098", license:"B·C1",   status:"active",    vigente:true,  vehicle:"DEF456", score:91, journeyStatus:"active",  shift:"08:00-17:00" },
  { id:"op5", name:"Luis Pinto",    rut:"8.901.234-5",  phone:"+56 9 4321 0987", license:"B·C",    status:"blocked",   vigente:false, vehicle:"—",      score:79, journeyStatus:"blocked", shift:"—" },
  { id:"op6", name:"Pedro Rojas",   rut:"7.890.123-4",  phone:"+56 9 3210 9876", license:"B·D·E",  status:"active",    vigente:true,  vehicle:"JKL012", score:86, journeyStatus:"active",  shift:"08:00-18:00" },
];

const WEEK_DAYS = ["Lun 14","Mar 15","Mié 16","Jue 17","Vie 18"];

const SUP_COLOR = { active:"#10B981", idle:"#F59E0B", blocked:"#EF4444", pending:"#3B82F6" };
const SUP_LABEL = { active:"En Ruta", idle:"Disponible", blocked:"Bloqueado", pending:"Pendiente" };

/* TopBar supervisor */
const SupTopBar = ({ go, title, onBack, right, tab, setTab, tabs }) => (
  <div style={{ background:"white", borderBottom:`1px solid ${T.ln}`, position:"sticky", top:0, zIndex:50,
    boxShadow:"0 1px 12px rgba(15,23,42,0.07)" }}>
    <div style={{ display:"flex", alignItems:"center", padding:"16px 20px", gap:"12px" }}>
      {onBack
        ? <button onClick={onBack} style={{ width:"44px",height:"44px",borderRadius:"14px",
            border:"none",background:T.bg,color:T.t1,
            display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
            <ArrowLeft size={20} strokeWidth={2.5}/>
          </button>
        : <div style={{ width:"44px",height:"44px",borderRadius:"14px",
            background:`linear-gradient(135deg,${T.brand},${T.brandDk})`,
            display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
            boxShadow:`0 4px 12px ${T.brandGlow}` }}>
            <ShieldCheck size={22} style={{ color:"white" }} strokeWidth={2.5}/>
          </div>}
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontFamily:F.heading,fontSize:"17px",fontWeight:"800",color:T.t1,
          letterSpacing:"0.02em",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{title}</div>
        <div style={{ fontSize:"11px",fontWeight:"600",color:T.t3 }}>Supervisor · Transportes Del Sur S.A.</div>
      </div>
      {right || <button onClick={()=>go("login")} style={{ width:"44px",height:"44px",borderRadius:"14px",
        background:T.bg,border:"none",display:"flex",alignItems:"center",justifyContent:"center" }}>
        <LogOut size={18} style={{ color:T.t3 }}/>
      </button>}
    </div>
    {tabs && (
      <div style={{ display:"flex", overflowX:"auto", padding:"0 16px 12px", gap:"6px" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ flexShrink:0,
            padding:"8px 14px", borderRadius:"20px", fontSize:"12px", fontWeight:"700",
            border:`2px solid ${tab===t.id ? T.brand : T.ln}`,
            background: tab===t.id ? T.brandLt : "white",
            color: tab===t.id ? T.brand : T.t3, cursor:"pointer", transition:"all 0.18s" }}>
            {t.label}
          </button>
        ))}
      </div>
    )}
  </div>
);

/* ─── SUPERVISOR DASHBOARD ───────────────────────────────────── */
const SupervisorDashboard = ({ go }) => {
  const [tab, setTab] = useState("flota");
  const [showLogout, setShowLogout] = useState(false);
  const tabs = [
    { id:"flota",    label:"Flota" },
    { id:"operarios",label:"Operarios" },
    { id:"asignar",  label:"Asignación" },
    { id:"comms",    label:"Comunicaciones" },
    { id:"rrhh",     label:"Recursos Humanos" },
    { id:"cierre",   label:"Cierre Jornada" },
  ];

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, paddingBottom:"32px" }}>
      <SupTopBar go={go} title="Panel Supervisor" tab={tab} setTab={setTab} tabs={tabs}
        right={
          <div style={{ display:"flex", gap:"8px", alignItems:"center" }}>
            {/* Pending approvals badge button */}
            <button onClick={() => go("approval_panel")}
              style={{ width:"44px", height:"44px", borderRadius:"14px",
                background: T.danger, border:"none",
                display:"flex", alignItems:"center", justifyContent:"center",
                position:"relative", boxShadow:"0 4px 12px rgba(239,68,68,0.35)", cursor:"pointer" }}>
              <CheckCircle size={20} style={{ color:"white" }}/>
              <div style={{ position:"absolute", top:"-4px", right:"-4px",
                width:"18px", height:"18px", borderRadius:"50%",
                background:"white", border:`2px solid ${T.danger}`,
                display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:"9px", fontWeight:"900", color:T.danger }}>3</span>
              </div>
            </button>
            {/* Logout button */}
            <button onClick={() => setShowLogout(true)}
              style={{ width:"44px", height:"44px", borderRadius:"14px",
              background: T.bg, border:`1px solid ${T.ln}`,
              display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
              <LogOut size={18} style={{ color:T.t2 }} strokeWidth={2.2}/>
            </button>
          </div>
        }/>

      <div key={tab} className="pop">
        {tab==="flota"    && <SupFlota    go={go}/>}
        {tab==="operarios"&& <SupOperarios go={go}/>}
        {tab==="asignar"  && <SupAsignar  go={go}/>}
        {tab==="comms"    && <SupComms    go={go}/>}
        {tab==="rrhh"     && <SupRRHH     go={go}/>}
        {tab==="cierre"   && <SupCierre   go={go}/>}
      </div>

      {/* Logout confirmation modal */}
      {showLogout && (
        <div onClick={() => setShowLogout(false)}
          style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.55)",
            backdropFilter:"blur(4px)", zIndex:9999,
            display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }}>
          <div onClick={(e) => e.stopPropagation()}
            style={{ background:"white", borderRadius:"24px", padding:"28px 24px",
              maxWidth:"360px", width:"100%",
              boxShadow:"0 20px 60px rgba(0,0,0,0.25)",
              display:"flex", flexDirection:"column", alignItems:"center", gap:"16px" }}>
            <div style={{ width:"64px", height:"64px", borderRadius:"50%",
              background:"#fef2f2", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <LogOut size={28} style={{ color:T.danger }} strokeWidth={2.2}/>
            </div>
            <div style={{ textAlign:"center" }}>
              <h3 style={{ fontFamily:F.heading, fontSize:"19px", fontWeight:"800",
                color:T.t1, margin:"0 0 6px 0" }}>
                ¿Cerrar sesión?
              </h3>
              <p style={{ fontSize:"13px", color:T.t3, margin:0, lineHeight:1.45 }}>
                Saldrás del panel de supervisor y volverás a la pantalla de inicio.
              </p>
            </div>
            <div style={{ display:"flex", gap:"10px", width:"100%", marginTop:"4px" }}>
              <button onClick={() => setShowLogout(false)}
                style={{ flex:1, padding:"13px", borderRadius:"14px",
                  background:T.bg, border:`1px solid ${T.ln}`,
                  fontSize:"14px", fontWeight:"700", color:T.t2, cursor:"pointer" }}>
                Cancelar
              </button>
              <button onClick={() => { setShowLogout(false); go("login"); }}
                style={{ flex:1, padding:"13px", borderRadius:"14px",
                  background:T.danger, border:"none",
                  fontSize:"14px", fontWeight:"700", color:"white", cursor:"pointer",
                  boxShadow:"0 4px 12px rgba(239,68,68,0.35)" }}>
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Tab 1: Flota ──────────────────────────────────────────── */
const SupFlota = ({ go }) => {
  const active = VEHICLES.filter(v=>v.status==="active").length;
  const idle   = VEHICLES.filter(v=>v.status==="idle").length;
  const maint  = VEHICLES.filter(v=>v.status==="maintenance").length;
  const [filter, setFilter] = useState("all");
  const filtered = filter==="all" ? VEHICLES : VEHICLES.filter(v=>v.status===filter);

  return (
    <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"20px" }}>

      {/* KPI strip */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"12px" }}>
        {[
          { label:"En Ruta",    val:active, color:T.ok,     bg:"#F0FDF4" },
          { label:"Disponible", val:idle,   color:T.warn,   bg:"#FFFBEB" },
          { label:"Mantención", val:maint,  color:T.danger, bg:"#FEF2F2" },
        ].map(s => (
          <div key={s.label} style={{ background:s.bg, borderRadius:"18px", padding:"16px 12px",
            textAlign:"center", border:`1.5px solid ${s.color}22` }}>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:"6px" }}>
              <span style={{ width:"10px", height:"10px", borderRadius:"50%", background:s.color,
                boxShadow:`0 0 8px ${s.color}50` }}/>
            </div>
            <div style={{ fontFamily:F.heading, fontSize:"28px", fontWeight:"900", color:s.color }}>{s.val}</div>
            <div style={{ fontSize:"10px", fontWeight:"700", color:s.color, marginTop:"3px", opacity:0.8 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick filter chips */}
      <div style={{ display:"flex", gap:"8px" }}>
        {["all","active","idle","maintenance"].map(s => {
          const labels = {all:"Todos",active:"En Ruta",idle:"Disponible",maintenance:"Mantención"};
          return (
            <button key={s} onClick={() => setFilter(s)} style={{ flexShrink:0,
              padding:"7px 14px", borderRadius:"20px", fontSize:"11px", fontWeight:"700",
              border:`2px solid ${filter===s ? T.brand : T.ln}`,
              background: filter===s ? T.brandLt : "white",
              color: filter===s ? T.brand : T.t3, cursor:"pointer" }}>
              {labels[s]}
            </button>
          );
        })}
      </div>

      {/* Vehicle list */}
      <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
        {filtered.map(v => {
          const sc = statusColor(v.status);
          return (
            <Card key={v.id} onClick={() => go("company_vehicle_"+v.id)}>
              <div style={{ padding:"16px 20px", display:"flex", alignItems:"center", gap:"14px" }}>
                <div style={{ width:"50px", height:"50px", borderRadius:"14px", flexShrink:0,
                  background:`${sc}15`, border:`1.5px solid ${sc}30`,
                  display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <VehicleIcon type={v.type} size={32} color={sc}/>
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px" }}>
                    <span style={{ fontFamily:F.heading, fontSize:"16px", fontWeight:"900",
                      color:T.t1, letterSpacing:"0.08em" }}>{v.plate}</span>
                    <Pill color={sc}>{statusLabel(v.status)}</Pill>
                  </div>
                  <p style={{ fontSize:"12px", color:T.t3, fontWeight:"600" }}>
                    {v.driver} · {v.type}
                  </p>
                  <div style={{ display:"flex", alignItems:"center", gap:"12px", marginTop:"6px" }}>
                    <span style={{ fontSize:"11px", color:T.t3 }}>🛣️ {v.km.day} km hoy</span>
                    <span style={{ fontSize:"11px", color:T.t3 }}>⭐ {v.score}/100</span>
                  </div>
                </div>
                <ChevronRight size={16} style={{ color:T.t4, flexShrink:0 }}/>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Maquinaria disponible */}
      <div>
        <SectionLabel>Maquinaria Disponible</SectionLabel>
        <Card>
          {VEHICLES.filter(v=>v.type==="Maquinaria"||v.status==="idle").map((v,i,arr)=>(
            <div key={v.id} style={{ padding:"14px 20px", display:"flex", alignItems:"center",
              justifyContent:"space-between", gap:"12px",
              borderBottom: i<arr.length-1 ? `1px solid ${T.ln}` : "none" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                <div style={{ width:"40px", height:"40px", borderRadius:"10px",
                  background:T.bg, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <VehicleIcon type={v.type} size={26} color={T.brand}/>
                </div>
                <div>
                  <p style={{ fontFamily:F.heading, fontSize:"15px", fontWeight:"800",
                    color:T.t1, letterSpacing:"0.06em" }}>{v.plate}</p>
                  <p style={{ fontSize:"11px", color:T.t3, fontWeight:"600" }}>{v.type} · {v.driver}</p>
                </div>
              </div>
              <Pill color={statusColor(v.status)}>{statusLabel(v.status)}</Pill>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

/* ── Tab 2: Operarios ─────────────────────────────────────── */
const SupOperarios = ({ go }) => {
  const [authorized, setAuthorized] = useState({});
  const [filter, setFilter] = useState("all");
  const [editKm, setEditKm] = useState({});
  const [supMsg, setSupMsg] = useState({});

  const filtered = filter==="all" ? OPERATORS : OPERATORS.filter(o=>o.journeyStatus===filter);

  const PENDING_DATA = {
    op3: { plate:"XYZ789", type:"Camioneta", kmEntered:"45.320", kmExpected:"45.032",
           fuel:78, photoOk:true, submitTime:"07:58", flag:"KM no coincide" },
    op4: { plate:"DEF456", type:"Camión",    kmEntered:"23.150", kmExpected:"23.150",
           fuel:91, photoOk:true, submitTime:"07:55", flag:null },
  };

  const handleApprove = (opId) => {
    const pd = PENDING_DATA[opId];
    const kmMismatch = pd && pd.kmEntered !== pd.kmExpected;
    setAuthorized(p => ({...p, [opId]: {
      action:"approved",
      msg: supMsg[opId] || "Todo en regla. Puedes salir. ¡Buen viaje hoy!",
      correction: kmMismatch ? { entered: pd.kmEntered, corrected: editKm[opId] || pd.kmExpected } : null
    }}));
  };

  const handleReject = (opId) => {
    const pd = PENDING_DATA[opId];
    setAuthorized(p => ({...p, [opId]: {
      action:"rejected",
      msg: supMsg[opId] || "El odómetro ingresado no coincide. Por favor corrige antes de salir.",
      correction: { entered: pd?.kmEntered, corrected: editKm[opId] || pd?.kmExpected }
    }}));
  };

  const pendingOps = OPERATORS.filter(o=>o.journeyStatus==="pending");

  return (
    <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"20px" }}>

      {/* Priority: Pending approvals with full data review */}
      {pendingOps.length > 0 && (
        <div style={{ background:"#EFF6FF", borderRadius:"20px", padding:"16px 18px", border:"2px solid #BFDBFE" }}>
          <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px" }}>
            <div style={{ width:"40px",height:"40px",borderRadius:"12px",background:"#DBEAFE",
              display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}
              className="pu">
              <Bell size={20} style={{ color:"#1E40AF" }}/>
            </div>
            <div>
              <p style={{ fontSize:"14px",fontWeight:"800",color:"#1E40AF" }}>
                {pendingOps.length} solicitud(es) de autorización de salida
              </p>
              <p style={{ fontSize:"11px",color:"#3B82F6",marginTop:"2px" }}>
                Verifica los datos antes de autorizar. Detecta errores de odómetro.
              </p>
            </div>
          </div>

          {pendingOps.map(op => {
            const pd = PENDING_DATA[op.id];
            const auth = authorized[op.id];
            const kmMismatch = pd && pd.kmEntered !== pd.kmExpected;
            if(!pd) return null;
            // Operator's first/last name initials
            const parts = op.name.split(" ");
            const initials = (parts[0]?.[0] || "") + (parts[parts.length-1]?.[0] || "");
            return (
              <div key={op.id} style={{ background:"white", borderRadius:"16px",
                border:`1.5px solid ${kmMismatch?"#FECACA":"#BBF7D0"}`,
                marginBottom:"10px", overflow:"hidden" }}>

                {/* Operator header */}
                <div style={{ padding:"14px 16px", display:"flex", alignItems:"center",
                  justifyContent:"space-between", gap:"12px", borderBottom:`1px solid ${T.ln}` }}>
                  <div style={{ display:"flex",alignItems:"center",gap:"10px" }}>
                    <div style={{ width:"40px",height:"40px",borderRadius:"50%",flexShrink:0,
                      background:`linear-gradient(135deg, ${kmMismatch?T.danger:T.ok}, ${kmMismatch?"#B91C1C":"#059669"})`,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      color:"white", fontSize:"13px", fontWeight:"900", fontFamily:F.heading,
                      letterSpacing:"0.04em" }}>
                      {initials.toUpperCase()}
                    </div>
                    <div>
                      <p style={{ fontSize:"13px",fontWeight:"700",color:T.t1 }}>{op.name}</p>
                      <p style={{ fontSize:"11px",color:T.t3 }}>{op.vehicle} · Enviado {pd.submitTime}</p>
                    </div>
                  </div>
                  {auth ? (
                    <Pill color={auth.action==="approved"?T.ok:T.danger}>
                      {auth.action==="approved"?"Autorizado":"Rechazado"}
                    </Pill>
                  ) : <Pill color={T.info}>Pendiente</Pill>}
                </div>

                {/* Submitted data grid */}
                <div style={{ padding:"12px 16px" }}>
                  <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"8px",marginBottom:"12px" }}>
                    {[
                      { label:"Vehículo",     val: pd.plate, sub: pd.type },
                      { label:"Combustible",  val:`${pd.fuel}%` },
                      { label:"Foto tablero", val: pd.photoOk ? "OK" : "Falta", ok: pd.photoOk },
                    ].map(f=>(
                      <div key={f.label} style={{ background:T.bg,borderRadius:"10px",padding:"10px 8px",textAlign:"center" }}>
                        <p style={{ fontSize:"9px",fontWeight:"700",color:T.t4,
                          textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"3px" }}>{f.label}</p>
                        <p style={{ fontSize:"12px",fontWeight:"700",
                          color: f.ok===false ? T.danger : T.t1 }}>{f.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* KM verification — the critical check */}
                  <div style={{ borderRadius:"14px",padding:"14px",marginBottom:"12px",
                    background: kmMismatch?"#FEF2F2":"#F0FDF4",
                    border:`1.5px solid ${kmMismatch?"#FECACA":"#BBF7D0"}` }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"10px" }}>
                      {kmMismatch
                        ? <AlertTriangle size={14} style={{ color:T.danger }} strokeWidth={2.5}/>
                        : <CheckCircle size={14} style={{ color:T.ok }} strokeWidth={2.5}/>}
                      <p style={{ fontSize:"11px",fontWeight:"800",textTransform:"uppercase",
                        letterSpacing:"0.1em",color:kmMismatch?T.danger:T.ok }}>
                        {kmMismatch ? "Revisar odómetro" : "Odómetro verificado"}
                      </p>
                    </div>
                    <div style={{ display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:"8px",alignItems:"center" }}>
                      <div style={{ background:"white",borderRadius:"10px",padding:"10px",textAlign:"center",
                        border:`1px solid ${kmMismatch?"#FECACA":T.ln}` }}>
                        <p style={{ fontSize:"9px",fontWeight:"700",color:T.t4,marginBottom:"3px" }}>INGRESÓ EL OP.</p>
                        <p style={{ fontFamily:F.heading,fontSize:"17px",fontWeight:"900",
                          color: kmMismatch ? T.danger : T.ok, textDecoration: kmMismatch?"line-through":"none" }}>
                          {pd.kmEntered} km
                        </p>
                      </div>
                      <div style={{ fontSize:"20px",textAlign:"center",fontWeight:"900",
                        color: kmMismatch?T.danger:T.ok }}>{kmMismatch ? "≠" : "="}</div>
                      <div style={{ background:"white",borderRadius:"10px",padding:"10px",textAlign:"center",
                        border:`1px solid ${kmMismatch?"#BBF7D0":T.ln}` }}>
                        <p style={{ fontSize:"9px",fontWeight:"700",color:T.t4,marginBottom:"3px" }}>REGISTRO PREV.</p>
                        <p style={{ fontFamily:F.heading,fontSize:"17px",fontWeight:"900",color:T.ok }}>
                          {pd.kmExpected} km
                        </p>
                      </div>
                    </div>
                    {kmMismatch && (
                      <div style={{ marginTop:"12px" }}>
                        <p style={{ fontSize:"11px",fontWeight:"700",color:T.t3,marginBottom:"5px",
                          display:"flex",alignItems:"center",gap:"6px" }}>
                          <Edit3 size={12}/> Corrección del Supervisor (valor real):
                        </p>
                        <input value={editKm[op.id] || pd.kmExpected}
                          onChange={e => setEditKm(p=>({...p,[op.id]:e.target.value}))}
                          style={{ width:"100%",padding:"12px 14px",borderRadius:"12px",
                            border:`2px solid ${T.brand}`,fontSize:"18px",fontWeight:"900",
                            fontFamily:F.heading,letterSpacing:"0.1em",
                            background:T.brandLt,color:T.brand,textAlign:"center" }}/>
                        <p style={{ fontSize:"10px",color:T.t4,marginTop:"4px",textAlign:"center" }}>
                          Edita si el valor de arriba no es correcto
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Supervisor message */}
                  {!auth && (
                    <div style={{ marginBottom:"12px" }}>
                      <p style={{ fontSize:"11px",fontWeight:"700",color:T.t3,marginBottom:"5px",
                        textTransform:"uppercase",letterSpacing:"0.08em" }}>
                        Mensaje para el operario (opcional)
                      </p>
                      <input value={supMsg[op.id]||""}
                        onChange={e=>setSupMsg(p=>({...p,[op.id]:e.target.value}))}
                        placeholder="ej. Todo en orden, buen viaje. Cuídate."
                        style={{ width:"100%",padding:"10px 14px",borderRadius:"12px",
                          border:`1.5px solid ${T.ln}`,fontSize:"13px",
                          fontFamily:F.body,background:"white",color:T.t1 }}/>
                    </div>
                  )}

                  {/* Action buttons */}
                  {!auth && (
                    <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px" }}>
                      <button onClick={() => handleReject(op.id)}
                        style={{ padding:"14px",borderRadius:"14px",background:"#FEF2F2",
                          border:"2px solid #FECACA",color:T.danger,
                          fontSize:"13px",fontWeight:"700",cursor:"pointer",
                          display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
                        <X size={15} strokeWidth={2.5}/> Rechazar / Corregir
                      </button>
                      <button onClick={() => handleApprove(op.id)}
                        style={{ padding:"14px",borderRadius:"14px",
                          background:`linear-gradient(135deg,${T.ok},#059669)`,
                          border:"none",color:"white",fontSize:"13px",fontWeight:"700",
                          cursor:"pointer",boxShadow:"0 4px 16px rgba(16,185,129,0.35)",
                          display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
                        <CheckCircle size={15}/> Autorizar Salida
                      </button>
                    </div>
                  )}

                  {auth && (
                    <div style={{ padding:"12px 14px",borderRadius:"12px",
                      background: auth.action==="approved"?"#F0FDF4":"#FEF2F2",
                      border:`1px solid ${auth.action==="approved"?"#BBF7D0":"#FECACA"}` }}>
                      <div style={{ display:"flex",alignItems:"center",gap:"6px",marginBottom:"4px" }}>
                        {auth.action==="approved"
                          ? <CheckCircle size={13} style={{ color:T.ok }} strokeWidth={2.5}/>
                          : <AlertTriangle size={13} style={{ color:T.danger }} strokeWidth={2.5}/>}
                        <p style={{ fontSize:"12px",fontWeight:"700",
                          color: auth.action==="approved"?T.ok:T.danger }}>
                          {auth.action==="approved"?"Autorización enviada al operario":"Corrección enviada al operario"}
                        </p>
                      </div>
                      <p style={{ fontSize:"11px",color:T.t3,fontStyle:"italic" }}>"{auth.msg}"</p>
                      {auth.correction && (
                        <p style={{ fontSize:"11px",color:T.warn,marginTop:"4px",fontWeight:"600" }}>
                          KM corregido: {auth.correction.entered} → {auth.correction.corrected} km
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Filter chips */}
      <div style={{ display:"flex", gap:"8px", overflowX:"auto" }}>
        {[
          { id:"all",     label:"Todos",      color:null },
          { id:"active",  label:"En Ruta",    color:T.ok },
          { id:"pending", label:"Pendiente",  color:T.info },
          { id:"blocked", label:"Bloqueado",  color:T.danger },
        ].map(f => (
          <button key={f.id} onClick={() => setFilter(f.id)} style={{ flexShrink:0,
            padding:"7px 14px", borderRadius:"20px", fontSize:"11px", fontWeight:"700",
            border:`2px solid ${filter===f.id ? T.brand : T.ln}`,
            background: filter===f.id ? T.brandLt : "white",
            color: filter===f.id ? T.brand : T.t3, cursor:"pointer",
            display:"flex", alignItems:"center", gap:"6px" }}>
            {f.color && <span style={{ width:"7px", height:"7px", borderRadius:"50%",
              background:f.color, display:"inline-block" }}/>}
            {f.label}
          </button>
        ))}
      </div>

      {/* Operator list */}
      <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
        {filtered.map(op => {
          const sc = SUP_COLOR[op.journeyStatus] || T.t4;
          const auth = authorized[op.id];
          return (
            <Card key={op.id}>
              <div style={{ padding:"18px 20px" }}>
                <div style={{ display:"flex", alignItems:"flex-start", gap:"14px", marginBottom:"12px" }}>
                  <div style={{ width:"44px",height:"44px",borderRadius:"13px",flexShrink:0,
                    background:`${sc}18`,border:`1.5px solid ${sc}30`,
                    display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px" }}>👷</div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:"flex",alignItems:"center",gap:"8px",marginBottom:"3px" }}>
                      <span style={{ fontSize:"14px",fontWeight:"700",color:T.t1 }}>{op.name}</span>
                      {!op.vigente && <Pill color={T.danger}>No Vigente</Pill>}
                    </div>
                    <p style={{ fontSize:"11px",color:T.t3 }}>{op.rut} · {op.license}</p>
                    <div style={{ display:"flex",alignItems:"center",gap:"8px",marginTop:"6px" }}>
                      <Pill color={sc}>{SUP_LABEL[op.journeyStatus]||op.journeyStatus}</Pill>
                      <span style={{ fontSize:"11px",color:T.t3, display:"flex",alignItems:"center",gap:"4px" }}>
                        <PickupIcon size={14} color={T.t3}/> {op.vehicle}
                      </span>
                      {auth && <Pill color={auth.action==="approved"?T.ok:T.danger}>
                        {auth.action==="approved"?"Autorizado":"Corrección enviada"}
                      </Pill>}
                    </div>
                  </div>
                </div>
                <div style={{ display:"flex", gap:"8px", borderTop:`1px solid ${T.ln}`, paddingTop:"12px" }}>
                  <a href={`tel:${op.phone}`} style={{ flex:1,padding:"10px",borderRadius:"12px",
                    background:T.bg,border:`1px solid ${T.ln}`,color:T.t2,fontSize:"12px",
                    fontWeight:"700",cursor:"pointer",textDecoration:"none",
                    display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
                    <Phone size={13} strokeWidth={2.5}/> Llamar
                  </a>
                  <a href={`https://wa.me/${op.phone.replace(/\D/g,"")}`}
                    style={{ flex:1,padding:"10px",borderRadius:"12px",
                      background:"#25D36618",border:"1px solid #25D36640",color:"#128C7E",
                      fontSize:"12px",fontWeight:"700",cursor:"pointer",textDecoration:"none",
                      display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
                    <MessageSquare size={13} strokeWidth={2.5}/> WhatsApp
                  </a>
                  {!op.vigente && (
                    <button onClick={(e)=>{e.stopPropagation(); alert(`${op.name} marcado para revisión por RRHH. Notificación enviada.`);}}
                      style={{ flex:1,padding:"10px",borderRadius:"12px",
                      background:`${T.danger}15`,border:`1.5px solid ${T.danger}40`,
                      color:T.danger,fontSize:"12px",fontWeight:"700",cursor:"pointer",
                      display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
                      <RefreshCw size={13} strokeWidth={2.5}/> RRHH
                    </button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
/* ════════════════════════════════════════════════════════════════
   TAB 3: ASIGNACIÓN — Equipos para mañana
   ────────────────────────────────────────────────────────────────
   Smart day-by-day assignment with license matching, vehicle
   availability tracking, swap confirmation and broadcast preview.
   ════════════════════════════════════════════════════════════════ */

/* License → vehicle-type compatibility */
const LICENSE_FOR_TYPE = {
  "Camioneta":  ["B"],
  "Furgón":     ["B"],
  "Camión":     ["C", "C1"],
  "Maquinaria": ["D"],
};
const parseLicense = s => (s || "").split(/[·,\s]+/).map(x => x.trim()).filter(Boolean);
const isCompatible = (op, veh) => {
  const opLics = parseLicense(op.license);
  const req = LICENSE_FOR_TYPE[veh.type] || [];
  return req.some(r => opLics.includes(r));
};

/* Build a rolling 7-day strip starting from today */
const buildDayStrip = () => {
  const months = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  const dows   = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
  const today  = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return {
      offset: i,
      isToday: i === 0,
      isTomorrow: i === 1,
      label: i === 0 ? "Hoy" : i === 1 ? "Mañana" : dows[d.getDay()],
      day: d.getDate(),
      month: months[d.getMonth()],
      full: `${dows[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`,
    };
  });
};

/* Self-refreshing "saved X seconds ago" */
const useTickingNow = () => {
  const [, force] = useState(0);
  useEffect(() => {
    const t = setInterval(() => force(n => n + 1), 5000);
    return () => clearInterval(t);
  }, []);
  return Date.now();
};
const fmtAgo = (ts, now) => {
  const s = Math.max(1, Math.floor((now - ts) / 1000));
  if (s < 60) return `hace ${s} s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `hace ${m} min`;
  return `hace ${Math.floor(m / 60)} h`;
};

/* ─── Vehicle type metadata ─────────────────────────────────── */
const VEHICLE_TYPES_META = {
  "Camión":     { label:"Camiones",   plural:"camiones",   short:"Camión" },
  "Furgón":     { label:"Furgones",   plural:"furgones",   short:"Furgón" },
  "Camioneta":  { label:"Camionetas", plural:"camionetas", short:"Camioneta" },
  "Maquinaria": { label:"Maquinaria", plural:"maquinarias",short:"Maquinaria" },
};
const TYPE_ORDER = ["Camión","Furgón","Camioneta","Maquinaria"];

const SupAsignar = ({ go }) => {
  const days = buildDayStrip();
  const [offset, setOffset]   = useState(1); // Mañana por defecto
  const [view, setView]       = useState("op"); // "op" | "vh"

  // assignments shape: { [offset]: { [opId]: vehicleId } }
  const [assignments, setAssignments] = useState(() => {
    const seed = {};
    OPERATORS.filter(o => o.vigente).forEach(op => {
      const v = VEHICLES.find(x => x.plate === op.vehicle);
      if (v && v.status !== "maintenance") seed[op.id] = v.id;
    });
    return { 0: seed, 1: { ...seed, op4: undefined } }; // ayer + hoy diferentes para demo
  });

  // confirmation status per day for the date strip indicator
  const [dayStatus, setDayStatus] = useState({ 0: "confirmed" });

  const [pickerFor,   setPickerFor]   = useState(null); // opId — opens EquipmentPicker
  const [pickerForVeh,setPickerForVeh]= useState(null); // vId  — opens OperatorPicker
  const [pendingSwap, setPendingSwap] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [confirmed,   setConfirmed]   = useState(false);
  const [filter,      setFilter]      = useState("all");
  const [savedAt,     setSavedAt]     = useState(Date.now());
  const [showActions, setShowActions] = useState(false);
  const [toast,       setToast]       = useState(null);

  const now      = useTickingNow();
  const dayAssg  = assignments[offset] || {};
  // Clean undefined values that might come from the demo seed
  const cleanDayAssg = Object.fromEntries(Object.entries(dayAssg).filter(([,v]) => v));

  const eligible = OPERATORS.filter(o => o.vigente);
  const blocked  = OPERATORS.filter(o => !o.vigente);

  const total    = eligible.length;
  const assigned = Object.keys(cleanDayAssg).length;
  const pending  = total - assigned;
  const freeVeh  = VEHICLES.filter(v =>
    v.status !== "maintenance" && !Object.values(cleanDayAssg).includes(v.id)
  ).length;
  const progress = Math.round((assigned / Math.max(total, 1)) * 100);

  // Coverage breakdown by vehicle type
  const coverage = TYPE_ORDER.map(type => {
    const all = VEHICLES.filter(v => v.type === type && v.status !== "maintenance");
    const used = all.filter(v => Object.values(cleanDayAssg).includes(v.id));
    return { type, used: used.length, total: all.length };
  }).filter(c => c.total > 0);

  const filteredOps = eligible.filter(op => {
    if (filter === "pending")  return !cleanDayAssg[op.id];
    if (filter === "assigned") return !!cleanDayAssg[op.id];
    return true;
  });

  const groupedByShift = filteredOps.reduce((acc, op) => {
    const k = op.shift || "Sin turno";
    (acc[k] = acc[k] || []).push(op);
    return acc;
  }, {});

  // For the vehicle view: group by type
  const vehiclesByType = TYPE_ORDER.reduce((acc, t) => {
    const list = VEHICLES.filter(v => v.type === t);
    if (list.length) acc[t] = list;
    return acc;
  }, {});

  const getVehicleStatus = (vId, currentOpId = null) => {
    const v = VEHICLES.find(x => x.id === vId);
    if (!v) return { state: "unknown" };
    if (v.status === "maintenance") return { state: "maintenance", v };
    const otherEntry = Object.entries(cleanDayAssg).find(
      ([opId, vid]) => vid === vId && opId !== currentOpId
    );
    if (otherEntry) {
      const op = OPERATORS.find(o => o.id === otherEntry[0]);
      return { state: "taken", v, op };
    }
    return { state: "free", v };
  };

  const writeAssignment = (opId, vId) => {
    setAssignments(prev => ({
      ...prev,
      [offset]: { ...(prev[offset] || {}), [opId]: vId },
    }));
    setSavedAt(Date.now());
  };
  const removeAssignment = (opId) => {
    setAssignments(prev => {
      const next = { ...(prev[offset] || {}) };
      delete next[opId];
      return { ...prev, [offset]: next };
    });
    setSavedAt(Date.now());
    setPickerFor(null);
  };
  const handlePick = (opId, vId) => {
    const prevVid = cleanDayAssg[opId];
    if (prevVid && prevVid !== vId) {
      setPendingSwap({ opId, newVid: vId, prevVid });
      return;
    }
    writeAssignment(opId, vId);
    setPickerFor(null);
    setPickerForVeh(null);
  };
  const handleConfirmSwap = () => {
    writeAssignment(pendingSwap.opId, pendingSwap.newVid);
    setPendingSwap(null);
    setPickerFor(null);
    setPickerForVeh(null);
  };
  const handleConfirmAll = () => {
    setShowPreview(false);
    setConfirmed(true);
    setDayStatus(s => ({ ...s, [offset]: "confirmed" }));
    setTimeout(() => setConfirmed(false), 4000);
  };

  // Quick actions
  const repeatYesterday = () => {
    const ySource = assignments[offset - 1] || assignments[0] || {};
    const cleanSource = Object.fromEntries(Object.entries(ySource).filter(([,v]) => v));
    setAssignments(prev => ({ ...prev, [offset]: { ...cleanSource } }));
    setSavedAt(Date.now());
    setShowActions(false);
    setToast({ type:"ok", text:`Asignaciones de ayer copiadas a ${days[offset].label.toLowerCase()}` });
    setTimeout(() => setToast(null), 3500);
  };
  const autoAssignRecommended = () => {
    setAssignments(prev => {
      const cur = { ...(prev[offset] || {}) };
      eligible.forEach(op => {
        if (cur[op.id]) return; // ya tiene
        const usual = VEHICLES.find(v => v.plate === op.vehicle && v.status !== "maintenance"
          && !Object.values(cur).includes(v.id) && isCompatible(op, v));
        if (usual) cur[op.id] = usual.id;
      });
      return { ...prev, [offset]: cur };
    });
    setSavedAt(Date.now());
    setShowActions(false);
    setToast({ type:"ok", text:"Recomendados auto-asignados a operarios pendientes" });
    setTimeout(() => setToast(null), 3500);
  };

  const activeDay = days[offset];

  // status color per day for the date strip
  const dayStatusColor = (off) => {
    if (dayStatus[off] === "confirmed") return T.ok;
    const a = assignments[off];
    if (!a) return T.ln;
    const cleanA = Object.fromEntries(Object.entries(a).filter(([,v]) => v));
    if (Object.keys(cleanA).length > 0) return T.warn;
    return T.ln;
  };

  return (
    <div style={{ padding:"16px 20px 32px", display:"flex", flexDirection:"column", gap:"18px" }}>

      {/* DATE STRIP with status indicators */}
      <div>
        <SectionLabel>Día a Asignar</SectionLabel>
        <div style={{ display:"flex", gap:"8px", overflowX:"auto",
          margin:"0 -20px", padding:"0 20px 4px" }}>
          {days.map(d => {
            const isActive = d.offset === offset;
            const isTom    = d.isTomorrow;
            const sColor   = dayStatusColor(d.offset);
            return (
              <button key={d.offset} onClick={() => setOffset(d.offset)} className="btn-press"
                style={{ flexShrink:0, width:"76px", padding:"12px 0", borderRadius:"16px",
                  border: isActive ? `2px solid ${T.brand}` : `1.5px solid ${isTom ? T.brand+"55" : T.ln}`,
                  background: isActive ? `linear-gradient(160deg, ${T.brand}, ${T.brandDk})`
                    : isTom ? T.brandLt : "white",
                  color: isActive ? "white" : isTom ? T.brand : T.t2,
                  boxShadow: isActive ? `0 6px 18px ${T.brandGlow}` : "none",
                  display:"flex", flexDirection:"column", alignItems:"center", gap:"3px",
                  transition:"all 0.18s", cursor:"pointer" }}>
                <span style={{ fontSize:"10px", fontWeight:"800", letterSpacing:"0.1em",
                  textTransform:"uppercase", opacity: isActive ? 0.9 : 1 }}>{d.label}</span>
                <span style={{ fontFamily:F.heading, fontSize:"22px", fontWeight:"900", lineHeight:1 }}>
                  {d.day}
                </span>
                <span style={{ fontSize:"10px", fontWeight:"700", opacity: isActive ? 0.85 : 0.6 }}>
                  {d.month}
                </span>
                <div style={{ width:"22px", height:"3px", borderRadius:"2px",
                  background: isActive ? "rgba(255,255,255,0.85)" : sColor, marginTop:"3px" }}/>
              </button>
            );
          })}
        </div>
        <div style={{ display:"flex", gap:"14px", marginTop:"8px",
          fontSize:"10px", color:T.t4, fontWeight:"600" }}>
          <span style={{ display:"flex", alignItems:"center", gap:"5px" }}>
            <span style={{ width:"8px", height:"3px", background:T.ok, borderRadius:"2px" }}/>Confirmado
          </span>
          <span style={{ display:"flex", alignItems:"center", gap:"5px" }}>
            <span style={{ width:"8px", height:"3px", background:T.warn, borderRadius:"2px" }}/>En progreso
          </span>
          <span style={{ display:"flex", alignItems:"center", gap:"5px" }}>
            <span style={{ width:"8px", height:"3px", background:T.ln, borderRadius:"2px" }}/>Vacío
          </span>
        </div>
      </div>

      {/* BLOCKED ALERT — promoted to the top */}
      {blocked.length > 0 && (
        <div style={{ background:T.warnLt, border:`1.5px solid ${T.warn}`,
          borderRadius:"14px", padding:"12px 14px",
          display:"flex", alignItems:"center", gap:"12px" }}>
          <div style={{ width:"36px", height:"36px", borderRadius:"11px", background:T.warn,
            display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <AlertTriangle size={18} color="white" strokeWidth={2.8}/>
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <p style={{ fontSize:"13px", fontWeight:"800", color:"#78350F", lineHeight:1.2 }}>
              {blocked.length} operario{blocked.length === 1 ? "" : "s"} bloqueado{blocked.length === 1 ? "" : "s"}
            </p>
            <p style={{ fontSize:"11px", color:"#92400E", marginTop:"3px", fontWeight:"600" }}>
              {blocked.map(o => o.name.split(" ")[0]).join(", ")} · revisar licencia
            </p>
          </div>
          <ChevronRight size={18} style={{ color:"#78350F", flexShrink:0 }} strokeWidth={2.5}/>
        </div>
      )}

      {/* PROGRESS HEADER with TYPE BREAKDOWN */}
      <div style={{ background:`linear-gradient(135deg, ${T.brand}, ${T.brandDk})`,
        borderRadius:"20px", padding:"18px 20px",
        boxShadow:`0 6px 24px ${T.brandGlow}` }}>
        <div style={{ display:"flex", alignItems:"flex-start",
          justifyContent:"space-between", gap:"12px" }}>
          <div>
            <p style={{ fontSize:"11px", fontWeight:"800", letterSpacing:"0.15em",
              color:"rgba(255,255,255,0.75)", textTransform:"uppercase", marginBottom:"4px" }}>
              Asignando para
            </p>
            <p style={{ fontFamily:F.heading, fontSize:"20px", fontWeight:"900",
              color:"white", letterSpacing:"0.02em" }}>{activeDay.full}</p>
          </div>
          <div style={{ background:"rgba(255,255,255,0.18)", borderRadius:"12px",
            padding:"8px 12px", textAlign:"center", minWidth:"72px" }}>
            <div style={{ fontFamily:F.heading, fontSize:"22px", fontWeight:"900",
              color:"white", lineHeight:1 }}>
              {assigned}<span style={{ opacity:0.6, fontSize:"16px" }}>/{total}</span>
            </div>
            <div style={{ fontSize:"9px", fontWeight:"800", color:"rgba(255,255,255,0.85)",
              marginTop:"3px", letterSpacing:"0.1em" }}>ASIGNADOS</div>
          </div>
        </div>
        <div style={{ marginTop:"14px", height:"8px", borderRadius:"4px",
          background:"rgba(255,255,255,0.18)", overflow:"hidden" }}>
          <div style={{ width:`${progress}%`, height:"100%", background:"white",
            borderRadius:"4px",
            transition:"width 0.4s cubic-bezier(0.34,1.2,0.64,1)",
            boxShadow:"0 0 12px rgba(255,255,255,0.5)" }}/>
        </div>

        {/* COVERAGE BY TYPE */}
        <div style={{ marginTop:"14px", paddingTop:"12px",
          borderTop:"1px solid rgba(255,255,255,0.18)" }}>
          <div style={{ fontSize:"9px", fontWeight:"800", color:"rgba(255,255,255,0.7)",
            letterSpacing:"0.12em", marginBottom:"8px" }}>COBERTURA POR TIPO</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px" }}>
            {coverage.map(c => {
              const meta = VEHICLE_TYPES_META[c.type];
              const isComplete = c.used === c.total;
              const isEmpty = c.used === 0;
              const numColor = isComplete ? "white" : isEmpty ? "#FCA5A5" : "#FBBF24";
              return (
                <div key={c.type} style={{ background:"rgba(255,255,255,0.14)",
                  padding:"7px 10px", borderRadius:"10px",
                  display:"flex", alignItems:"center", gap:"8px" }}>
                  <VehicleIcon type={c.type} size={16} color="white"/>
                  <span style={{ fontSize:"11px", color:"white", fontWeight:"700" }}>
                    {meta.label} <strong style={{ fontWeight:"900", color: numColor }}>
                      {c.used}/{c.total}
                    </strong>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display:"flex", gap:"16px", marginTop:"12px",
          fontSize:"11px", color:"rgba(255,255,255,0.85)" }}>
          <span style={{ display:"flex", alignItems:"center", gap:"5px", fontWeight:"600" }}>
            <Clock size={12} strokeWidth={2.5}/> {pending} pendiente{pending !== 1 ? "s" : ""}
          </span>
          <span style={{ display:"flex", alignItems:"center", gap:"5px", fontWeight:"600" }}>
            <CheckCircle size={12} strokeWidth={2.5}/> {freeVeh} equipo{freeVeh !== 1 ? "s" : ""} libre{freeVeh !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* VIEW TOGGLE — Por Operario / Por Vehículo */}
      <div>
        <SectionLabel>Vista</SectionLabel>
        <div style={{ background:T.bg, padding:"4px", borderRadius:"14px",
          display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4px" }}>
          {[
            { id:"op", label:"Por Operario", Icon:Users },
            { id:"vh", label:"Por Vehículo", Icon:Truck },
          ].map(t => {
            const on = view === t.id;
            return (
              <button key={t.id} onClick={() => setView(t.id)} className="btn-press"
                style={{ padding:"10px 0", borderRadius:"11px", border:"none",
                  background: on ? "white" : "transparent",
                  color: on ? T.brand : T.t3,
                  fontSize:"12px", fontWeight:"800", cursor:"pointer",
                  display:"flex", alignItems:"center", justifyContent:"center", gap:"6px",
                  boxShadow: on ? "0 2px 6px rgba(15,23,42,0.06)" : "none",
                  transition:"all 0.18s" }}>
                <t.Icon size={14} strokeWidth={2.5}/>
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div style={{ display:"flex", gap:"8px", overflowX:"auto",
        margin:"0 -20px", padding:"0 20px" }}>
        <button onClick={repeatYesterday} className="btn-press"
          style={{ flexShrink:0, padding:"9px 13px", borderRadius:"12px",
            border:`1.5px solid ${T.brand}`, background:T.brandLt,
            color:T.brandDk, fontSize:"12px", fontWeight:"800", cursor:"pointer",
            display:"flex", alignItems:"center", gap:"6px" }}>
          <RefreshCw size={13} strokeWidth={2.5}/> Repetir ayer
        </button>
        <button onClick={autoAssignRecommended} className="btn-press"
          style={{ flexShrink:0, padding:"9px 13px", borderRadius:"12px",
            border:`1.5px solid ${T.ln}`, background:"white",
            color:T.t2, fontSize:"12px", fontWeight:"800", cursor:"pointer",
            display:"flex", alignItems:"center", gap:"6px" }}>
          <Zap size={13} strokeWidth={2.5}/> Auto-asignar
        </button>
        <button onClick={() => setShowActions(true)} className="btn-press"
          style={{ flexShrink:0, padding:"9px 13px", borderRadius:"12px",
            border:`1.5px solid ${T.ln}`, background:"white",
            color:T.t2, fontSize:"12px", fontWeight:"800", cursor:"pointer",
            display:"flex", alignItems:"center", gap:"6px" }}>
          <MoreHorizontal size={13} strokeWidth={2.5}/> Más
        </button>
      </div>

      {/* FILTER CHIPS — only show in Operator view */}
      {view === "op" && (
        <div style={{ display:"flex", gap:"8px", overflowX:"auto",
          margin:"0 -20px", padding:"0 20px" }}>
          {[
            { id:"all",      label:"Todos",      count:total },
            { id:"pending",  label:"Pendientes", count:pending,  color:T.warn },
            { id:"assigned", label:"Asignados",  count:assigned, color:T.ok   },
          ].map(f => {
            const on = filter === f.id;
            const c  = f.color || T.brand;
            return (
              <button key={f.id} onClick={() => setFilter(f.id)} className="btn-press"
                style={{ flexShrink:0, padding:"8px 14px", borderRadius:"20px",
                  fontSize:"12px", fontWeight:"700",
                  border:`2px solid ${on ? c : T.ln}`,
                  background: on ? c+"15" : "white",
                  color: on ? c : T.t3, cursor:"pointer",
                  display:"flex", alignItems:"center", gap:"6px",
                  transition:"all 0.18s" }}>
                {f.label}
                <span style={{ background: on ? c : T.ln, color: on ? "white" : T.t3,
                  fontSize:"10px", fontWeight:"900",
                  padding:"1px 7px", borderRadius:"10px",
                  minWidth:"20px", textAlign:"center" }}>{f.count}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* ─── OPERATOR VIEW ─── */}
      {view === "op" && (
        Object.keys(groupedByShift).length === 0 ? (
          <Card style={{ padding:"32px 20px", textAlign:"center" }}>
            <Users size={32} style={{ color: T.t4, margin:"0 auto 8px" }}/>
            <p style={{ fontSize:"13px", color:T.t3, fontWeight:"600" }}>
              No hay operarios que coincidan con el filtro.
            </p>
          </Card>
        ) : (
          Object.entries(groupedByShift).map(([shift, ops]) => (
            <div key={shift} className="su">
              <SectionLabel>
                {shift === "Sin turno" ? "Sin Turno Asignado" : `Turno ${shift}`} · {ops.length} operari{ops.length === 1 ? "o" : "os"}
              </SectionLabel>
              <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                {ops.map(op => (
                  <OperatorRow key={op.id} op={op} vehicleId={cleanDayAssg[op.id]}
                    onTap={() => setPickerFor(op.id)}/>
                ))}
              </div>
            </div>
          ))
        )
      )}

      {/* ─── VEHICLE VIEW ─── */}
      {view === "vh" && (
        Object.entries(vehiclesByType).map(([type, list]) => (
          <div key={type} className="su">
            <SectionLabel>
              {VEHICLE_TYPES_META[type].label} · {list.length} vehícul{list.length === 1 ? "o" : "os"}
            </SectionLabel>
            <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
              {list.map(v => (
                <VehicleRow key={v.id} v={v} dayAssg={cleanDayAssg}
                  onTap={() => v.status !== "maintenance" && setPickerForVeh(v.id)}/>
              ))}
            </div>
          </div>
        ))
      )}

      {/* AUTO-SAVE */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"6px",
        padding:"8px", marginTop:"4px" }}>
        <Check size={12} strokeWidth={3} style={{ color:T.ok }}/>
        <span style={{ fontSize:"11px", fontWeight:"600", color:T.t3 }}>
          Guardado automáticamente · {fmtAgo(savedAt, now)}
        </span>
      </div>

      {/* CTA */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:"10px" }}>
        <button onClick={() => setShowPreview(true)} className="btn-press"
          style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
            height:"56px", padding:"0 16px", borderRadius:"16px",
            background:"white", border:`1.5px solid ${T.ln}`,
            color:T.t1, fontSize:"14px", fontWeight:"700", cursor:"pointer" }}>
          <Eye size={16}/> Vista previa
        </button>
        <Btn onClick={() => setShowPreview(true)} disabled={pending > 0}>
          {pending > 0 ? (
            <><AlertTriangle size={16}/> Faltan {pending}</>
          ) : (
            <><CheckCircle size={18}/> Confirmar para {activeDay.label.toLowerCase()}</>
          )}
        </Btn>
      </div>

      {/* MODALS */}
      {pickerFor && (
        <EquipmentPicker
          op={OPERATORS.find(o => o.id === pickerFor)}
          currentVid={cleanDayAssg[pickerFor]}
          dayLabel={activeDay.full}
          getStatus={(vid) => getVehicleStatus(vid, pickerFor)}
          onPick={(vid) => handlePick(pickerFor, vid)}
          onClear={() => removeAssignment(pickerFor)}
          onClose={() => setPickerFor(null)}/>
      )}
      {pickerForVeh && (
        <OperatorPicker
          v={VEHICLES.find(x => x.id === pickerForVeh)}
          dayLabel={activeDay.full}
          eligible={eligible}
          dayAssg={cleanDayAssg}
          onPick={(opId) => handlePick(opId, pickerForVeh)}
          onClose={() => setPickerForVeh(null)}/>
      )}
      {pendingSwap && (
        <ReassignModal
          op={OPERATORS.find(o => o.id === pendingSwap.opId)}
          prevVeh={VEHICLES.find(v => v.id === pendingSwap.prevVid)}
          newVeh={VEHICLES.find(v => v.id === pendingSwap.newVid)}
          dayLabel={activeDay.label}
          onCancel={() => setPendingSwap(null)}
          onConfirm={handleConfirmSwap}/>
      )}
      {showPreview && (
        <PreviewModal
          dayLabel={activeDay.full}
          assigned={assigned} pending={pending}
          eligible={eligible} dayAssg={cleanDayAssg}
          onClose={() => setShowPreview(false)}
          onConfirm={handleConfirmAll}/>
      )}
      {showActions && (
        <MoreActionsSheet
          dayLabel={activeDay.full}
          onCopyDay={() => { setShowActions(false); setToast({ type:"info", text:"Próximamente: copiar de otro día" }); setTimeout(() => setToast(null), 2500); }}
          onClearAll={() => {
            setAssignments(prev => ({ ...prev, [offset]: {} }));
            setSavedAt(Date.now()); setShowActions(false);
            setToast({ type:"info", text:"Todas las asignaciones del día removidas" });
            setTimeout(() => setToast(null), 3500);
          }}
          onClose={() => setShowActions(false)}/>
      )}
      {confirmed && (
        <div className="pop" style={{ position:"fixed", bottom:"24px",
          left:"50%", transform:"translateX(-50%)",
          background:T.ok, color:"white",
          padding:"14px 20px", borderRadius:"16px",
          boxShadow:"0 12px 40px rgba(16,185,129,0.45)",
          display:"flex", alignItems:"center", gap:"10px",
          zIndex:10000, maxWidth:"calc(100% - 40px)" }}>
          <CheckCircle size={20} strokeWidth={2.5}/>
          <span style={{ fontSize:"13px", fontWeight:"700" }}>
            Asignaciones confirmadas y enviadas a operarios
          </span>
        </div>
      )}
      {toast && (
        <div className="pop" style={{ position:"fixed", bottom:"24px",
          left:"50%", transform:"translateX(-50%)",
          background: toast.type === "ok" ? T.ok : T.t1, color:"white",
          padding:"12px 18px", borderRadius:"14px",
          boxShadow:"0 12px 40px rgba(15,23,42,0.35)",
          display:"flex", alignItems:"center", gap:"10px",
          zIndex:10000, maxWidth:"calc(100% - 40px)" }}>
          {toast.type === "ok"
            ? <CheckCircle size={18} strokeWidth={2.5}/>
            : <Info size={18} strokeWidth={2.5}/>}
          <span style={{ fontSize:"12px", fontWeight:"700" }}>{toast.text}</span>
        </div>
      )}
    </div>
  );
};

/* OperatorRow — single row with assigned vehicle slot + attributes */
const OperatorRow = ({ op, vehicleId, onTap }) => {
  const veh = vehicleId ? VEHICLES.find(v => v.id === vehicleId) : null;
  const initials = op.name.split(" ").map(n => n[0]).slice(0,2).join("").toUpperCase();
  const hasAssg = !!veh;

  return (
    <Card onClick={onTap} style={{
      padding:"14px 16px",
      borderLeft:`4px solid ${hasAssg ? T.ok : T.warn}` }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
        <div style={{ width:"44px", height:"44px", borderRadius:"13px",
          background:`linear-gradient(135deg, ${T.brand}, ${T.brandDk})`,
          color:"white", flexShrink:0,
          display:"flex", alignItems:"center", justifyContent:"center",
          fontFamily:F.heading, fontWeight:"900", fontSize:"15px",
          letterSpacing:"0.05em",
          boxShadow:`0 3px 10px ${T.brandGlow2}` }}>{initials}</div>
        <div style={{ flex:1, minWidth:0 }}>
          <p style={{ fontSize:"14px", fontWeight:"700", color:T.t1, marginBottom:"3px" }}>
            {op.name}
          </p>
          <div style={{ display:"flex", alignItems:"center", gap:"6px", flexWrap:"wrap" }}>
            <span style={{ fontSize:"10px", fontWeight:"800", color:T.brand,
              background:T.brandLt, padding:"2px 7px", borderRadius:"8px",
              letterSpacing:"0.05em" }}>Lic. {op.license}</span>
            <span style={{ fontSize:"11px", color:T.t4, fontWeight:"600" }}>·</span>
            <span style={{ fontSize:"11px", color:T.t3, fontWeight:"600" }}>{op.shift}</span>
          </div>
        </div>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end",
          gap:"4px", flexShrink:0 }}>
          {hasAssg ? (
            <div style={{ display:"flex", alignItems:"center", gap:"8px",
              background:T.brandLt, padding:"8px 10px",
              borderRadius:"12px", border:`1.5px solid ${T.brand}30` }}>
              <VehicleIcon type={veh.type} size={20} color={T.brand}/>
              <div style={{ textAlign:"right" }}>
                <p style={{ fontFamily:F.heading, fontSize:"12px", fontWeight:"900",
                  color:T.brand, letterSpacing:"0.08em", lineHeight:1 }}>{veh.plate}</p>
                <p style={{ fontSize:"9px", color:T.brand, opacity:0.75,
                  fontWeight:"700", marginTop:"2px" }}>
                  {veh.type}{veh.attributes && veh.attributes.length > 0 ? ` · ${veh.attributes[0]}` : ""}
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display:"flex", alignItems:"center", gap:"5px",
              padding:"8px 12px", borderRadius:"12px",
              background:T.warnLt, border:`1.5px dashed ${T.warn}`,
              color:T.warn, fontSize:"11px", fontWeight:"800" }}>
              <AlertTriangle size={12} strokeWidth={2.5}/> Sin asignar
            </div>
          )}
        </div>
        <ChevronRight size={18} style={{ color:T.t4, flexShrink:0 }}/>
      </div>
    </Card>
  );
};

/* VehicleRow — vehicle-first view with assigned operator */
const VehicleRow = ({ v, dayAssg, onTap }) => {
  const opEntry = Object.entries(dayAssg).find(([,vid]) => vid === v.id);
  const op = opEntry ? OPERATORS.find(o => o.id === opEntry[0]) : null;
  const isMaintenance = v.status === "maintenance";
  const accent = isMaintenance ? T.danger : op ? T.ok : T.warn;

  return (
    <Card onClick={isMaintenance ? undefined : onTap}
      style={{ padding:"14px 16px", borderLeft:`4px solid ${accent}`,
        opacity: isMaintenance ? 0.7 : 1 }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
        <div style={{ width:"44px", height:"44px", borderRadius:"13px",
          background: isMaintenance ? T.dangerLt : T.brandLt,
          flexShrink:0,
          display:"flex", alignItems:"center", justifyContent:"center",
          border:`1px solid ${isMaintenance ? T.danger+"30" : T.brand+"20"}` }}>
          <VehicleIcon type={v.type} size={26}
            color={isMaintenance ? T.danger : T.brand}/>
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"6px",
            marginBottom:"4px", flexWrap:"wrap" }}>
            <span style={{ fontFamily:F.heading, fontSize:"15px", fontWeight:"900",
              color:T.t1, letterSpacing:"0.06em" }}>{v.plate}</span>
            {v.attributes && v.attributes.map(a => (
              <span key={a} style={{ fontSize:"9px", fontWeight:"800",
                color:T.t2, background:T.bg, padding:"2px 6px", borderRadius:"6px" }}>
                {a}
              </span>
            ))}
          </div>
          {isMaintenance ? (
            <p style={{ fontSize:"11px", color:T.danger, fontWeight:"700",
              display:"flex", alignItems:"center", gap:"4px" }}>
              <Wrench size={11} strokeWidth={2.5}/> En mantención
            </p>
          ) : op ? (
            <p style={{ fontSize:"12px", color:T.t3, fontWeight:"600" }}>
              → {op.name}
            </p>
          ) : (
            <p style={{ fontSize:"11px", color:T.warn, fontWeight:"700",
              display:"flex", alignItems:"center", gap:"4px" }}>
              <AlertTriangle size={11} strokeWidth={2.5}/> Sin operario asignado
            </p>
          )}
        </div>
        {!isMaintenance && (
          op ? (
            <ChevronRight size={18} style={{ color:T.t4, flexShrink:0 }}/>
          ) : (
            <div style={{ padding:"6px 11px", borderRadius:"10px",
              background:T.brand, color:"white",
              fontSize:"11px", fontWeight:"800", flexShrink:0 }}>
              Asignar
            </div>
          )
        )}
      </div>
    </Card>
  );
};

/* EquipmentPicker — bottom sheet with bucketed vehicles */
const EquipmentPicker = ({ op, currentVid, dayLabel, getStatus, onPick, onClear, onClose }) => {
  const buckets = { recommended:[], compatibleFree:[], notCompatible:[], unavailable:[] };
  VEHICLES.forEach(v => {
    const st = getStatus(v.id);
    const compat = isCompatible(op, v);
    if (st.state === "maintenance" || st.state === "taken") {
      buckets.unavailable.push({ v, st, compat });
    } else if (compat) {
      if (op.vehicle === v.plate) buckets.recommended.push({ v, st, compat });
      else buckets.compatibleFree.push({ v, st, compat });
    } else {
      buckets.notCompatible.push({ v, st, compat });
    }
  });

  return (
    <div onClick={onClose} className="sd"
      style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.55)",
        backdropFilter:"blur(4px)", zIndex:9999,
        display:"flex", alignItems:"flex-end", justifyContent:"center" }}>
      <div onClick={e => e.stopPropagation()} className="su"
        style={{ background:"white", width:"100%", maxWidth:"430px",
          borderRadius:"24px 24px 0 0", maxHeight:"85vh",
          display:"flex", flexDirection:"column",
          boxShadow:"0 -10px 40px rgba(0,0,0,0.18)" }}>
        <div style={{ width:"40px", height:"4px", borderRadius:"2px",
          background:T.lnDk, margin:"10px auto 4px" }}/>
        <div style={{ padding:"12px 20px 16px", borderBottom:`1px solid ${T.ln}` }}>
          <div style={{ display:"flex", alignItems:"flex-start",
            justifyContent:"space-between", gap:"12px" }}>
            <div style={{ flex:1 }}>
              <p style={{ fontSize:"10px", fontWeight:"800", color:T.t4,
                letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"4px" }}>
                Asignar equipo a
              </p>
              <p style={{ fontFamily:F.heading, fontSize:"20px", fontWeight:"900",
                color:T.t1, marginBottom:"4px" }}>{op.name}</p>
              <p style={{ fontSize:"12px", color:T.t3, fontWeight:"600" }}>
                {dayLabel} · Licencia <span style={{ color:T.brand, fontWeight:"800" }}>{op.license}</span>
              </p>
            </div>
            <button onClick={onClose} style={{ width:"36px", height:"36px",
              borderRadius:"10px", background:T.bg, border:"none", flexShrink:0,
              display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
              <X size={18} style={{ color:T.t2 }} strokeWidth={2.5}/>
            </button>
          </div>
        </div>
        <div style={{ flex:1, overflowY:"auto", padding:"16px 20px",
          display:"flex", flexDirection:"column", gap:"20px" }}>
          {currentVid && (
            <button onClick={onClear} className="btn-press"
              style={{ padding:"12px 14px", borderRadius:"14px",
                background:T.dangerLt, border:`1.5px solid ${T.danger}40`,
                color:T.danger, fontSize:"13px", fontWeight:"700",
                display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
                cursor:"pointer" }}>
              <X size={16} strokeWidth={2.5}/> Quitar asignación actual
            </button>
          )}
          {buckets.recommended.length > 0 && (
            <PickerSection title="Recomendados para él" subtitle="Compatibles · ya los manejaba" tone="ok">
              {buckets.recommended.map(b => (
                <PickerCard key={b.v.id} {...b} currentVid={currentVid} onPick={() => onPick(b.v.id)}/>
              ))}
            </PickerSection>
          )}
          {buckets.compatibleFree.length > 0 && (
            <PickerSection title="Otros disponibles" subtitle="Compatibles con su licencia" tone="brand">
              {buckets.compatibleFree.map(b => (
                <PickerCard key={b.v.id} {...b} currentVid={currentVid} onPick={() => onPick(b.v.id)}/>
              ))}
            </PickerSection>
          )}
          {buckets.unavailable.length > 0 && (
            <PickerSection title="No disponibles" tone="muted">
              {buckets.unavailable.map(b => (
                <PickerCard key={b.v.id} {...b} currentVid={currentVid} disabled/>
              ))}
            </PickerSection>
          )}
          {buckets.notCompatible.length > 0 && (
            <details>
              <summary style={{ cursor:"pointer", listStyle:"none",
                fontSize:"11px", fontWeight:"800",
                color:T.t4, textTransform:"uppercase", letterSpacing:"0.15em",
                padding:"6px 0", display:"flex", alignItems:"center", gap:"6px" }}>
                <ChevronRight size={12}/> No compatibles con su licencia ({buckets.notCompatible.length})
              </summary>
              <div style={{ marginTop:"10px", display:"flex", flexDirection:"column", gap:"8px" }}>
                {buckets.notCompatible.map(b => (
                  <PickerCard key={b.v.id} {...b} currentVid={currentVid} disabled reason="incompat"/>
                ))}
              </div>
            </details>
          )}
          <div style={{ height:"8px" }}/>
        </div>
      </div>
    </div>
  );
};

/* OperatorPicker — vehicle-first: choose an operator for a given vehicle */
const OperatorPicker = ({ v, dayLabel, eligible, dayAssg, onPick, onClose }) => {
  const buckets = { recommended:[], compatibleFree:[], notCompatible:[], taken:[] };
  eligible.forEach(op => {
    const compat = isCompatible(op, v);
    const currentVid = dayAssg[op.id];
    const isUsual = op.vehicle === v.plate;
    const hasOther = currentVid && currentVid !== v.id;
    if (!compat) { buckets.notCompatible.push({ op, compat, hasOther }); return; }
    if (hasOther) { buckets.taken.push({ op, compat, hasOther, otherVeh: VEHICLES.find(x => x.id === currentVid) }); return; }
    if (isUsual) buckets.recommended.push({ op, compat, hasOther });
    else buckets.compatibleFree.push({ op, compat, hasOther });
  });

  return (
    <div onClick={onClose} className="sd"
      style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.55)",
        backdropFilter:"blur(4px)", zIndex:9999,
        display:"flex", alignItems:"flex-end", justifyContent:"center" }}>
      <div onClick={e => e.stopPropagation()} className="su"
        style={{ background:"white", width:"100%", maxWidth:"430px",
          borderRadius:"24px 24px 0 0", maxHeight:"85vh",
          display:"flex", flexDirection:"column",
          boxShadow:"0 -10px 40px rgba(0,0,0,0.18)" }}>
        <div style={{ width:"40px", height:"4px", borderRadius:"2px",
          background:T.lnDk, margin:"10px auto 4px" }}/>
        <div style={{ padding:"12px 20px 16px", borderBottom:`1px solid ${T.ln}` }}>
          <div style={{ display:"flex", alignItems:"flex-start",
            justifyContent:"space-between", gap:"12px" }}>
            <div style={{ flex:1, display:"flex", alignItems:"center", gap:"12px" }}>
              <div style={{ width:"44px", height:"44px", borderRadius:"12px",
                background:T.brandLt, display:"flex", alignItems:"center",
                justifyContent:"center", flexShrink:0 }}>
                <VehicleIcon type={v.type} size={26} color={T.brand}/>
              </div>
              <div>
                <p style={{ fontSize:"10px", fontWeight:"800", color:T.t4,
                  letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"3px" }}>
                  Asignar operario a
                </p>
                <p style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"900",
                  color:T.t1, letterSpacing:"0.06em" }}>{v.plate}</p>
                <p style={{ fontSize:"11px", color:T.t3, fontWeight:"600", marginTop:"2px" }}>
                  {v.type}{v.attributes && v.attributes.length > 0 ? ` · ${v.attributes.join(", ")}` : ""}
                </p>
              </div>
            </div>
            <button onClick={onClose} style={{ width:"36px", height:"36px",
              borderRadius:"10px", background:T.bg, border:"none", flexShrink:0,
              display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
              <X size={18} style={{ color:T.t2 }} strokeWidth={2.5}/>
            </button>
          </div>
        </div>
        <div style={{ flex:1, overflowY:"auto", padding:"16px 20px",
          display:"flex", flexDirection:"column", gap:"20px" }}>
          {buckets.recommended.length > 0 && (
            <PickerSection title="Recomendados" subtitle="Conducen este equipo habitualmente" tone="ok">
              {buckets.recommended.map(b => (
                <OpPickerCard key={b.op.id} {...b} onPick={() => onPick(b.op.id)}/>
              ))}
            </PickerSection>
          )}
          {buckets.compatibleFree.length > 0 && (
            <PickerSection title="Disponibles" subtitle="Compatibles y sin asignar" tone="brand">
              {buckets.compatibleFree.map(b => (
                <OpPickerCard key={b.op.id} {...b} onPick={() => onPick(b.op.id)}/>
              ))}
            </PickerSection>
          )}
          {buckets.taken.length > 0 && (
            <PickerSection title="Ya asignados a otro equipo" subtitle="Tap para reasignar" tone="muted">
              {buckets.taken.map(b => (
                <OpPickerCard key={b.op.id} {...b} onPick={() => onPick(b.op.id)} swap/>
              ))}
            </PickerSection>
          )}
          {buckets.notCompatible.length > 0 && (
            <details>
              <summary style={{ cursor:"pointer", listStyle:"none",
                fontSize:"11px", fontWeight:"800",
                color:T.t4, textTransform:"uppercase", letterSpacing:"0.15em",
                padding:"6px 0", display:"flex", alignItems:"center", gap:"6px" }}>
                <ChevronRight size={12}/> Sin licencia compatible ({buckets.notCompatible.length})
              </summary>
              <div style={{ marginTop:"10px", display:"flex", flexDirection:"column", gap:"8px" }}>
                {buckets.notCompatible.map(b => (
                  <OpPickerCard key={b.op.id} {...b} disabled/>
                ))}
              </div>
            </details>
          )}
          <div style={{ height:"8px" }}/>
        </div>
      </div>
    </div>
  );
};

const OpPickerCard = ({ op, hasOther, otherVeh, onPick, disabled, swap }) => {
  const initials = op.name.split(" ").map(n => n[0]).slice(0,2).join("").toUpperCase();
  let badge = null;
  if (disabled) badge = <Pill color={T.t4}>Sin licencia · {op.license}</Pill>;
  else if (swap && otherVeh) badge = <Pill color={T.warn}>Conduce {otherVeh.plate}</Pill>;
  else badge = <Pill color={T.ok}>Disponible</Pill>;

  return (
    <button onClick={disabled ? undefined : onPick} disabled={disabled}
      className={disabled ? "" : "btn-press card-hover"}
      style={{ width:"100%", textAlign:"left",
        padding:"12px 14px", borderRadius:"14px",
        background: disabled ? T.bg : "white",
        border:`1.5px solid ${T.ln}`,
        opacity: disabled ? 0.55 : 1, cursor: disabled ? "not-allowed" : "pointer",
        display:"flex", alignItems:"center", gap:"12px",
        transition:"all 0.18s" }}>
      <div style={{ width:"42px", height:"42px", borderRadius:"12px",
        background:`linear-gradient(135deg, ${T.brand}, ${T.brandDk})`,
        color:"white", flexShrink:0,
        display:"flex", alignItems:"center", justifyContent:"center",
        fontFamily:F.heading, fontWeight:"900", fontSize:"14px",
        opacity: disabled ? 0.5 : 1 }}>{initials}</div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"8px",
          marginBottom:"3px", flexWrap:"wrap" }}>
          <span style={{ fontSize:"13px", fontWeight:"800", color:T.t1 }}>{op.name}</span>
          <span style={{ fontSize:"10px", color:T.brand, fontWeight:"800",
            background:T.brandLt, padding:"2px 6px", borderRadius:"6px" }}>Lic. {op.license}</span>
        </div>
        {badge}
      </div>
      {!disabled && <ChevronRight size={18} style={{ color:T.t4 }}/>}
    </button>
  );
};

const PickerSection = ({ title, subtitle, tone, children }) => {
  const c = tone === "ok" ? T.ok : tone === "brand" ? T.brand : T.t4;
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:"6px",
        marginBottom:"10px", flexWrap:"wrap" }}>
        <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:c }}/>
        <span style={{ fontFamily:F.heading, fontSize:"12px", fontWeight:"900",
          color:c, letterSpacing:"0.12em", textTransform:"uppercase" }}>{title}</span>
        {subtitle && (
          <span style={{ fontSize:"11px", color:T.t4, fontWeight:"600" }}>· {subtitle}</span>
        )}
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>{children}</div>
    </div>
  );
};

const PickerCard = ({ v, st, currentVid, onPick, disabled, reason }) => {
  const isCurrent = v.id === currentVid;
  const tone = disabled
    ? { bg: T.bg, border: T.ln, alpha: 0.55 }
    : isCurrent
      ? { bg: T.brandLt, border: T.brand, alpha: 1 }
      : { bg: "white", border: T.ln, alpha: 1 };

  let badge = null;
  if (st.state === "maintenance") {
    badge = <Pill color={T.danger}><Wrench size={10} strokeWidth={2.5}/> Mantención</Pill>;
  } else if (st.state === "taken") {
    badge = <Pill color={T.warn}>Asignado a {st.op?.name.split(" ")[0]}</Pill>;
  } else if (reason === "incompat") {
    badge = <Pill color={T.t4}>Sin licencia</Pill>;
  } else if (isCurrent) {
    badge = <Pill color={T.brand}><Check size={10} strokeWidth={3}/> Actual</Pill>;
  } else {
    badge = <Pill color={T.ok}>Disponible</Pill>;
  }

  return (
    <button onClick={disabled ? undefined : onPick} disabled={disabled}
      className={disabled ? "" : "btn-press card-hover"}
      style={{ width:"100%", textAlign:"left",
        padding:"12px 14px", borderRadius:"14px",
        background: tone.bg, border:`1.5px solid ${tone.border}`,
        opacity: tone.alpha, cursor: disabled ? "not-allowed" : "pointer",
        display:"flex", alignItems:"center", gap:"12px",
        transition:"all 0.18s" }}>
      <div style={{ width:"44px", height:"44px", borderRadius:"12px", flexShrink:0,
        background: isCurrent ? "white" : T.bg2,
        border:`1px solid ${isCurrent ? T.brand+"30" : T.ln}`,
        display:"flex", alignItems:"center", justifyContent:"center" }}>
        <VehicleIcon type={v.type} size={26}
          color={disabled ? T.t4 : isCurrent ? T.brand : T.t2}/>
      </div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"8px",
          marginBottom:"3px", flexWrap:"wrap" }}>
          <span style={{ fontFamily:F.heading, fontSize:"16px", fontWeight:"900",
            color:T.t1, letterSpacing:"0.06em" }}>{v.plate}</span>
          <span style={{ fontSize:"10px", color:T.t3, fontWeight:"700",
            background:T.bg, padding:"2px 7px", borderRadius:"6px" }}>{v.type}</span>
          {v.attributes && v.attributes.map(a => (
            <span key={a} style={{ fontSize:"9px", color:T.t2, fontWeight:"800",
              background:T.bg2, padding:"2px 6px", borderRadius:"6px" }}>
              {a}
            </span>
          ))}
        </div>
        {badge}
      </div>
      {!disabled && <ChevronRight size={18} style={{ color: isCurrent ? T.brand : T.t4 }}/>}
    </button>
  );
};

/* MoreActionsSheet — additional bulk actions */
const MoreActionsSheet = ({ dayLabel, onCopyDay, onClearAll, onClose }) => (
  <div onClick={onClose} className="sd"
    style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.55)",
      backdropFilter:"blur(4px)", zIndex:9999,
      display:"flex", alignItems:"flex-end", justifyContent:"center" }}>
    <div onClick={e => e.stopPropagation()} className="su"
      style={{ background:"white", width:"100%", maxWidth:"430px",
        borderRadius:"24px 24px 0 0",
        boxShadow:"0 -10px 40px rgba(0,0,0,0.18)" }}>
      <div style={{ width:"40px", height:"4px", borderRadius:"2px",
        background:T.lnDk, margin:"10px auto 8px" }}/>
      <div style={{ padding:"4px 20px 20px" }}>
        <p style={{ fontSize:"10px", fontWeight:"800", color:T.t4,
          letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"4px" }}>
          Acciones masivas
        </p>
        <p style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"900",
          color:T.t1, marginBottom:"16px" }}>{dayLabel}</p>
        <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
          <button onClick={onCopyDay} className="btn-press"
            style={{ padding:"14px 16px", borderRadius:"14px",
              background:T.bg2, border:`1.5px solid ${T.ln}`,
              color:T.t1, fontSize:"13px", fontWeight:"700",
              display:"flex", alignItems:"center", gap:"12px", cursor:"pointer", textAlign:"left" }}>
            <div style={{ width:"36px", height:"36px", borderRadius:"10px",
              background:T.infoLt, color:T.info,
              display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <Calendar size={18} strokeWidth={2.5}/>
            </div>
            <div style={{ flex:1 }}>
              <p style={{ fontSize:"13px", fontWeight:"800", color:T.t1 }}>Copiar de otro día</p>
              <p style={{ fontSize:"11px", color:T.t3, marginTop:"2px", fontWeight:"600" }}>
                Reutiliza una asignación de cualquier día previo
              </p>
            </div>
            <ChevronRight size={16} style={{ color:T.t4 }}/>
          </button>

          <button className="btn-press"
            style={{ padding:"14px 16px", borderRadius:"14px",
              background:T.bg2, border:`1.5px solid ${T.ln}`,
              color:T.t1, fontSize:"13px", fontWeight:"700",
              display:"flex", alignItems:"center", gap:"12px", cursor:"pointer", textAlign:"left" }}>
            <div style={{ width:"36px", height:"36px", borderRadius:"10px",
              background:T.brandLt, color:T.brand,
              display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <Layers size={18} strokeWidth={2.5}/>
            </div>
            <div style={{ flex:1 }}>
              <p style={{ fontSize:"13px", fontWeight:"800", color:T.t1 }}>Aplicar a toda la semana</p>
              <p style={{ fontSize:"11px", color:T.t3, marginTop:"2px", fontWeight:"600" }}>
                Replica la asignación actual a los próximos 5 días
              </p>
            </div>
            <ChevronRight size={16} style={{ color:T.t4 }}/>
          </button>

          <button onClick={onClearAll} className="btn-press"
            style={{ padding:"14px 16px", borderRadius:"14px",
              background:T.dangerLt, border:`1.5px solid ${T.danger}30`,
              color:T.danger, fontSize:"13px", fontWeight:"700",
              display:"flex", alignItems:"center", gap:"12px", cursor:"pointer", textAlign:"left" }}>
            <div style={{ width:"36px", height:"36px", borderRadius:"10px",
              background:"white", color:T.danger,
              display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <X size={18} strokeWidth={2.5}/>
            </div>
            <div style={{ flex:1 }}>
              <p style={{ fontSize:"13px", fontWeight:"800", color:T.danger }}>Vaciar todo el día</p>
              <p style={{ fontSize:"11px", color:T.danger, opacity:0.8, marginTop:"2px", fontWeight:"600" }}>
                Remueve todas las asignaciones de hoy
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

/* ReassignModal — confirms vehicle swap */
const ReassignModal = ({ op, prevVeh, newVeh, dayLabel, onCancel, onConfirm }) => (
  <div onClick={onCancel}
    style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.55)",
      backdropFilter:"blur(4px)", zIndex:10001,
      display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }}>
    <div onClick={e => e.stopPropagation()} className="popBig"
      style={{ background:"white", borderRadius:"24px", padding:"24px",
        maxWidth:"360px", width:"100%",
        boxShadow:"0 20px 60px rgba(0,0,0,0.25)" }}>
      <div style={{ width:"56px", height:"56px", borderRadius:"16px",
        background:T.warnLt, color:T.warn,
        display:"flex", alignItems:"center", justifyContent:"center",
        margin:"0 auto 16px" }}>
        <RefreshCw size={26} strokeWidth={2.5}/>
      </div>
      <p style={{ fontFamily:F.heading, fontSize:"20px", fontWeight:"900",
        color:T.t1, textAlign:"center", marginBottom:"8px" }}>
        ¿Cambiar asignación?
      </p>
      <p style={{ fontSize:"13px", color:T.t3, textAlign:"center",
        marginBottom:"20px", lineHeight:1.5 }}>
        <strong style={{ color:T.t1 }}>{op.name}</strong> usará otro equipo para <strong style={{ color:T.t1 }}>{dayLabel.toLowerCase()}</strong>.
      </p>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center",
        gap:"12px", padding:"16px", background:T.bg, borderRadius:"16px",
        marginBottom:"20px" }}>
        <div style={{ flex:1, textAlign:"center", opacity:0.55 }}>
          <VehicleIcon type={prevVeh.type} size={32} color={T.t2}/>
          <p style={{ fontFamily:F.heading, fontSize:"13px", fontWeight:"900",
            color:T.t2, marginTop:"6px", letterSpacing:"0.08em" }}>{prevVeh.plate}</p>
          <p style={{ fontSize:"10px", color:T.t3, fontWeight:"600" }}>Anterior</p>
        </div>
        <ArrowRight size={20} style={{ color:T.brand }} strokeWidth={2.5}/>
        <div style={{ flex:1, textAlign:"center" }}>
          <VehicleIcon type={newVeh.type} size={32} color={T.brand}/>
          <p style={{ fontFamily:F.heading, fontSize:"13px", fontWeight:"900",
            color:T.brand, marginTop:"6px", letterSpacing:"0.08em" }}>{newVeh.plate}</p>
          <p style={{ fontSize:"10px", color:T.brand, fontWeight:"700" }}>Nuevo</p>
        </div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" }}>
        <button onClick={onCancel} className="btn-press"
          style={{ padding:"14px", borderRadius:"14px",
            background:T.bg, border:"none",
            color:T.t2, fontSize:"13px", fontWeight:"700", cursor:"pointer" }}>
          Cancelar
        </button>
        <button onClick={onConfirm} className="btn-press"
          style={{ padding:"14px", borderRadius:"14px",
            background:`linear-gradient(135deg, ${T.brand}, ${T.brandDk})`,
            border:"none", color:"white", fontSize:"13px", fontWeight:"700",
            cursor:"pointer", boxShadow:`0 4px 14px ${T.brandGlow}` }}>
          Sí, cambiar
        </button>
      </div>
    </div>
  </div>
);

const PreviewModal = ({ dayLabel, assigned, pending, eligible, dayAssg, onClose, onConfirm }) => {
  const grouped = eligible.reduce((acc, op) => {
    const k = op.shift || "Sin turno";
    (acc[k] = acc[k] || []).push(op);
    return acc;
  }, {});

  return (
    <div onClick={onClose} className="sd"
      style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.55)",
        backdropFilter:"blur(4px)", zIndex:10000,
        display:"flex", alignItems:"flex-end", justifyContent:"center" }}>
      <div onClick={e => e.stopPropagation()} className="su"
        style={{ background:"white", width:"100%", maxWidth:"430px",
          borderRadius:"24px 24px 0 0", maxHeight:"90vh",
          display:"flex", flexDirection:"column",
          boxShadow:"0 -10px 40px rgba(0,0,0,0.2)" }}>
        <div style={{ width:"40px", height:"4px", borderRadius:"2px",
          background:T.lnDk, margin:"10px auto 4px" }}/>
        <div style={{ padding:"12px 20px 16px", borderBottom:`1px solid ${T.ln}` }}>
          <p style={{ fontSize:"10px", fontWeight:"800", color:T.t4,
            letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"4px" }}>
            Asignaciones · {dayLabel}
          </p>
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginTop:"6px" }}>
            <Pill color={T.ok}>{assigned} asignados</Pill>
            {pending > 0 && <Pill color={T.warn}>{pending} pendientes</Pill>}
          </div>
        </div>
        <div style={{ flex:1, overflowY:"auto", padding:"16px 20px",
          display:"flex", flexDirection:"column", gap:"16px" }}>
          {Object.entries(grouped).map(([shift, ops]) => (
            <div key={shift}>
              <p style={{ fontFamily:F.heading, fontSize:"11px", fontWeight:"900",
                color:T.t3, letterSpacing:"0.15em", textTransform:"uppercase",
                marginBottom:"8px" }}>
                {shift === "Sin turno" ? "Sin Turno" : `Turno ${shift}`}
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
                {ops.map(op => {
                  const v = dayAssg[op.id] ? VEHICLES.find(x => x.id === dayAssg[op.id]) : null;
                  return (
                    <div key={op.id} style={{ display:"flex", alignItems:"center", gap:"10px",
                      padding:"10px 12px", background: v ? T.bg2 : T.warnLt,
                      borderRadius:"12px",
                      border:`1px solid ${v ? T.ln : T.warn+"40"}` }}>
                      <div style={{ flex:1 }}>
                        <p style={{ fontSize:"12px", fontWeight:"700", color:T.t1 }}>{op.name}</p>
                        {v ? (
                          <div style={{ display:"flex", alignItems:"center", gap:"5px",
                            marginTop:"2px" }}>
                            <VehicleIcon type={v.type} size={14} color={T.brand}/>
                            <span style={{ fontFamily:F.heading, fontSize:"11px", fontWeight:"800",
                              color:T.brand, letterSpacing:"0.06em" }}>{v.plate}</span>
                            <span style={{ fontSize:"10px", color:T.t4, fontWeight:"600" }}>·</span>
                            <span style={{ fontSize:"10px", color:T.t3, fontWeight:"600" }}>{v.type}</span>
                          </div>
                        ) : (
                          <p style={{ fontSize:"10px", color:T.warn, fontWeight:"700",
                            marginTop:"2px" }}>Sin asignar</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding:"16px 20px",
          borderTop:`1px solid ${T.ln}`, background:"white" }}>
          <Btn onClick={onConfirm} disabled={pending > 0}>
            <Send size={16}/> Confirmar y enviar a operarios
          </Btn>
          <button onClick={onClose} style={{ width:"100%", padding:"12px", marginTop:"8px",
            background:"transparent", border:"none",
            fontSize:"13px", fontWeight:"700", color:T.t3, cursor:"pointer" }}>
            Seguir editando
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Tab 4: Comunicaciones ───────────────────────────────── */
const SupComms = ({ go }) => {
  const [channel, setChannel] = useState("app");
  const [msg, setMsg] = useState("");
  const [target, setTarget] = useState("all");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState([
    { from:"Juan Pérez", time:"08:12", ch:"app", text:"Saliendo desde bodega sector 4A, todo en orden." },
    { from:"Roberto M.", time:"08:21", ch:"radio", text:"Entendido. Vehículo ABC123, rumbo norte." },
    { from:"Pedro Rojas", time:"09:05", ch:"whatsapp", text:"Jefe, hay taco en Av. Grecia con Vicuña. Desvío por Los Leones." },
    { from:"Miguel Araya", time:"10:30", ch:"app", text:"Entrega completada en Cliente Buin. Regresando." },
  ]);

  const channels = [
    { id:"app",      label:"App",       Icon: Zap,           color:"#0D9488" },
    { id:"whatsapp", label:"WhatsApp",  Icon: MessageSquare, color:"#25D366" },
    { id:"radio",    label:"Radio",     Icon: Radio,         color:"#8B5CF6" },
  ];

  const handleSend = () => {
    if(!msg.trim()) return;
    setSending(true);
    setTimeout(() => {
      setMessages(p => [...p, {
        from:"Supervisor",time:new Date().toLocaleTimeString("es-CL",{hour:"2-digit",minute:"2-digit"}),
        ch:channel, text:msg, own:true
      }]);
      setMsg(""); setSending(false); setSent(true);
      setTimeout(()=>setSent(false),2500);
    }, 1200);
  };

  const chColor = { app:"#0D9488", whatsapp:"#25D366", radio:"#8B5CF6" };
  const ChIcon = ({ ch, size = 14 }) => {
    const Icon = ch === "app" ? Zap : ch === "whatsapp" ? MessageSquare : Radio;
    return <Icon size={size} style={{ color: chColor[ch] }} strokeWidth={2.4}/>;
  };

  return (
    <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"20px" }}>

      {/* Channel selector */}
      <div>
        <SectionLabel>Canal de Comunicación</SectionLabel>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"10px" }}>
          {channels.map(ch => (
            <button key={ch.id} onClick={() => setChannel(ch.id)} style={{ padding:"14px 8px",
              borderRadius:"16px", border:`2px solid ${channel===ch.id ? ch.color : T.ln}`,
              background: channel===ch.id ? ch.color+"15" : "white",
              cursor:"pointer", textAlign:"center", transition:"all 0.18s",
              boxShadow: channel===ch.id ? `0 0 0 4px ${ch.color}18` : "none",
              display:"flex", flexDirection:"column", alignItems:"center", gap:"6px" }}>
              <div style={{ width:"36px", height:"36px", borderRadius:"10px",
                background: channel===ch.id ? ch.color+"20" : T.bg,
                display:"flex", alignItems:"center", justifyContent:"center" }}>
                <ch.Icon size={20} style={{ color: ch.color }} strokeWidth={2.2}/>
              </div>
              <div style={{ fontSize:"11px",fontWeight:"700",
                color: channel===ch.id ? ch.color : T.t3 }}>{ch.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Recipient */}
      <div>
        <SectionLabel>Destinatario</SectionLabel>
        <select value={target} onChange={e=>setTarget(e.target.value)}
          style={{ width:"100%",padding:"14px 16px",borderRadius:"14px",
            border:`1.5px solid ${T.ln}`,fontSize:"14px",fontWeight:"600",
            background:"white",color:T.t1,fontFamily:F.body,cursor:"pointer" }}>
          <option value="all">Todos los operarios</option>
          {OPERATORS.filter(o=>o.vigente).map(o=>(
            <option key={o.id} value={o.id}>{o.name}</option>
          ))}
        </select>
      </div>

      {/* Message feed */}
      <div>
        <SectionLabel>Mensajes Recientes</SectionLabel>
        <div style={{ display:"flex",flexDirection:"column",gap:"10px",
          maxHeight:"300px",overflowY:"auto" }}>
          {messages.map((m,i)=>(
            <div key={i} style={{ display:"flex",gap:"10px",
              justifyContent: m.own?"flex-end":"flex-start" }}>
              {!m.own && (
                <div style={{ width:"32px",height:"32px",borderRadius:"10px",flexShrink:0,
                  background:`${chColor[m.ch]}20`,display:"flex",alignItems:"center",
                  justifyContent:"center" }}>
                  <ChIcon ch={m.ch} size={16}/>
                </div>
              )}
              <div style={{ maxWidth:"75%",
                background: m.own ? `linear-gradient(135deg,${T.brand},${T.brandDk})` : "white",
                borderRadius: m.own?"18px 18px 4px 18px":"18px 18px 18px 4px",
                padding:"10px 14px",
                border: m.own?"none":`1px solid ${T.ln}` }}>
                {!m.own && (
                  <p style={{ fontSize:"10px",fontWeight:"700",color:chColor[m.ch],marginBottom:"3px" }}>
                    {m.from}
                  </p>
                )}
                <p style={{ fontSize:"13px",color: m.own?"white":T.t1,lineHeight:1.4 }}>{m.text}</p>
                <p style={{ fontSize:"10px",color: m.own?"rgba(255,255,255,0.6)":T.t4,
                  marginTop:"4px",textAlign:"right" }}>{m.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compose */}
      <Card style={{ padding:"16px" }}>
        <div style={{ display:"flex",alignItems:"center",gap:"8px",marginBottom:"10px" }}>
          <ChIcon ch={channel} size={16}/>
          <span style={{ fontSize:"12px",fontWeight:"700",color:chColor[channel] }}>
            Enviando por {channels.find(c=>c.id===channel)?.label}
          </span>
        </div>
        <textarea value={msg} onChange={e=>setMsg(e.target.value)}
          placeholder="Escribe tu mensaje..." rows={3}
          style={{ width:"100%",padding:"12px 14px",borderRadius:"12px",
            border:`1.5px solid ${T.ln}`,background:T.bg,fontSize:"14px",
            fontFamily:F.body,resize:"none",color:T.t1,marginBottom:"10px",display:"block" }}/>
        {sent ? (
          <div style={{ padding:"12px",background:"#F0FDF4",borderRadius:"12px",
            display:"flex",alignItems:"center",gap:"8px",border:"1px solid #BBF7D0" }}>
            <CheckCircle size={16} style={{ color:T.ok }}/>
            <span style={{ fontSize:"13px",fontWeight:"700",color:T.ok }}>Mensaje enviado ✓</span>
          </div>
        ) : (
          <Btn onClick={handleSend} disabled={!msg.trim()} loading={sending}>
            <Send size={16}/> Enviar Mensaje
          </Btn>
        )}
      </Card>

      {/* Quick radio protocols */}
      <div>
        <SectionLabel>Protocolos de Radio</SectionLabel>
        <div style={{ display:"flex",flexDirection:"column",gap:"8px" }}>
          {[
            { code:"10-4", label:"Mensaje recibido" },
            { code:"10-7", label:"Fuera de servicio" },
            { code:"10-8", label:"En servicio" },
            { code:"10-20", label:"Ubicación / Posición" },
          ].map(p => (
            <button key={p.code} onClick={() => setMsg(`[${p.code}] ${p.label}`)}
              style={{ display:"flex",alignItems:"center",justifyContent:"space-between",
                padding:"12px 16px",borderRadius:"14px",background:"white",
                border:`1px solid ${T.ln}`,cursor:"pointer" }}>
              <span style={{ fontFamily:F.heading,fontSize:"15px",fontWeight:"900",
                color:T.brand,letterSpacing:"0.06em" }}>{p.code}</span>
              <span style={{ fontSize:"12px",color:T.t2,fontWeight:"600" }}>{p.label}</span>
              <ChevronRight size={14} style={{ color:T.t4 }}/>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Tab 5: Recursos Humanos ─────────────────────────────── */
const SupRRHH = ({ go }) => {
  const [search, setSearch] = useState("");
  const filtered = OPERATORS.filter(o =>
    o.name.toLowerCase().includes(search.toLowerCase()) ||
    o.rut.includes(search)
  );
  const vigentes = OPERATORS.filter(o=>o.vigente).length;
  const noVigentes = OPERATORS.filter(o=>!o.vigente).length;

  return (
    <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"20px" }}>

      {/* Summary */}
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px" }}>
        {[
          { label:"Total",      val:OPERATORS.length, color:T.brand, bg:T.brandLt },
          { label:"Vigentes",   val:vigentes,          color:T.ok,    bg:"#F0FDF4" },
          { label:"No Vigentes",val:noVigentes,        color:T.danger,bg:"#FEF2F2" },
        ].map(s=>(
          <div key={s.label} style={{ background:s.bg,borderRadius:"18px",padding:"16px 12px",
            textAlign:"center",border:`1.5px solid ${s.color}22` }}>
            <div style={{ fontFamily:F.heading,fontSize:"28px",fontWeight:"900",color:s.color }}>{s.val}</div>
            <div style={{ fontSize:"10px",fontWeight:"700",color:s.color,opacity:0.8,marginTop:"4px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Alert no vigentes */}
      {noVigentes > 0 && (
        <div style={{ background:"#FEF2F2",borderRadius:"16px",padding:"14px 16px",
          border:`2px solid #FECACA`,display:"flex",gap:"12px",alignItems:"center" }}>
          <AlertTriangle size={18} style={{ color:T.danger,flexShrink:0 }}/>
          <div>
            <p style={{ fontSize:"13px",fontWeight:"700",color:T.danger }}>
              {noVigentes} operario(s) con documentos vencidos o no vigentes
            </p>
            <p style={{ fontSize:"11px",color:T.danger,opacity:0.8,marginTop:"2px" }}>
              No pueden operar hasta que RRHH actualice su estado.
            </p>
          </div>
        </div>
      )}

      {/* Search */}
      <div style={{ position:"relative" }}>
        <Search size={16} style={{ position:"absolute",left:"14px",top:"50%",
          transform:"translateY(-50%)",color:T.t4 }}/>
        <input value={search} onChange={e=>setSearch(e.target.value)}
          placeholder="Buscar por nombre o RUT..."
          style={{ width:"100%",padding:"13px 14px 13px 40px",borderRadius:"14px",
            border:`1.5px solid ${T.ln}`,fontSize:"14px",background:"white",color:T.t1 }}/>
      </div>

      {/* Operator list */}
      <div style={{ display:"flex",flexDirection:"column",gap:"10px" }}>
        {filtered.map(op => {
          const parts = op.name.split(" ");
          const initials = ((parts[0]?.[0] || "") + (parts[parts.length-1]?.[0] || "")).toUpperCase();
          return (
          <Card key={op.id}>
            <div style={{ padding:"16px 20px" }}>
              <div style={{ display:"flex",alignItems:"flex-start",gap:"14px",marginBottom:"12px" }}>
                <div style={{ width:"44px",height:"44px",borderRadius:"50%",flexShrink:0,
                  background: op.vigente
                    ? `linear-gradient(135deg, ${T.brand}, ${T.brandDk})`
                    : `linear-gradient(135deg, ${T.t3}, ${T.t2})`,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  color:"white", fontSize:"13px", fontWeight:"900", fontFamily:F.heading,
                  letterSpacing:"0.04em",
                  boxShadow: op.vigente ? `0 4px 12px ${T.brandGlow}` : "none" }}>
                  {initials}
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex",alignItems:"center",gap:"8px",marginBottom:"3px" }}>
                    <span style={{ fontSize:"14px",fontWeight:"700",color:T.t1 }}>{op.name}</span>
                    <Pill color={op.vigente?T.ok:T.danger}>
                      {op.vigente?"Vigente":"No Vigente"}
                    </Pill>
                  </div>
                  <p style={{ fontSize:"11px",color:T.t3 }}>{op.rut}</p>
                </div>
              </div>

              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",
                background:T.bg,borderRadius:"12px",padding:"10px 12px",marginBottom:"12px" }}>
                {[
                  { label:"Licencia",  val:op.license },
                  { label:"Puntaje",   val:`${op.score}/100` },
                  { label:"Turno",     val:op.shift },
                  { label:"Vehículo",  val:op.vehicle },
                ].map(f=>(
                  <div key={f.label}>
                    <p style={{ fontSize:"9px",fontWeight:"700",color:T.t4,
                      textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"2px" }}>{f.label}</p>
                    <p style={{ fontSize:"12px",fontWeight:"700",color:T.t1 }}>{f.val}</p>
                  </div>
                ))}
              </div>

              <div style={{ display:"flex",gap:"8px" }}>
                <a href={`tel:${op.phone}`} style={{ flex:1,padding:"10px",borderRadius:"12px",
                  background:T.bg,border:`1px solid ${T.ln}`,color:T.t2,fontSize:"12px",
                  fontWeight:"700",cursor:"pointer",textDecoration:"none",
                  display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
                  <Phone size={13} strokeWidth={2.5}/> Llamar
                </a>
                <a href={`https://wa.me/${op.phone.replace(/\D/g,"")}`}
                  style={{ flex:1,padding:"10px",borderRadius:"12px",
                    background:"#25D36618",border:`1px solid #25D36640`,color:"#128C7E",
                    fontSize:"12px",fontWeight:"700",cursor:"pointer",textDecoration:"none",
                    display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
                  <MessageSquare size={13} strokeWidth={2.5}/> WhatsApp
                </a>
                {!op.vigente && (
                  <button onClick={(e)=>{e.stopPropagation(); alert(`${op.name} marcado para revisión por RRHH. Notificación enviada.`);}}
                    style={{ flex:1,padding:"10px",borderRadius:"12px",
                    background:`${T.danger}15`,border:`1.5px solid ${T.danger}40`,
                    color:T.danger,fontSize:"12px",fontWeight:"700",cursor:"pointer",
                    display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
                    <RefreshCw size={13} strokeWidth={2.5}/> RRHH
                  </button>
                )}
              </div>
            </div>
          </Card>
          );
        })}
      </div>
    </div>
  );
};

/* ── Tab 6: Cierre de Jornada ─────────────────────────────── */
const SupCierre = ({ go }) => {
  const [reports, setReports] = useState({});
  const [confirmations, setConfirmations] = useState({});
  const [notified, setNotified] = useState({});
  const [broadcastSent, setBroadcastSent] = useState(false);
  const [broadcastLoading, setBroadcastLoading] = useState(false);

  const activeOps = OPERATORS.filter(o=>o.vigente && o.journeyStatus==="active");

  const handleReport = (id, hasIssue) => {
    setReports(p => ({...p, [id]: hasIssue}));
  };

  const handleConfirm = (id, ok) => {
    setConfirmations(p => ({...p, [id]: ok}));
  };

  const handleNotify = (id) => {
    setNotified(p => ({...p, [id]: true}));
  };

  const handleBroadcast = () => {
    setBroadcastLoading(true);
    setTimeout(() => {
      setBroadcastLoading(false);
      setBroadcastSent(true);
      const nb = {};
      activeOps.forEach(o => nb[o.id] = true);
      setNotified(nb);
    }, 1800);
  };

  const allConfirmed = activeOps.every(o => confirmations[o.id] !== undefined);

  return (
    <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"20px" }}>

      {/* Header */}
      <div style={{ background:`linear-gradient(135deg,${T.t1},${T.d3})`, borderRadius:"22px",
        padding:"20px 22px", display:"flex", gap:"14px", alignItems:"center",
        boxShadow:"0 8px 32px rgba(15,23,42,0.2)" }}>
        <div style={{ width:"50px",height:"50px",borderRadius:"15px",
          background:"rgba(255,255,255,0.12)",
          display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",flexShrink:0 }}>
          🏁
        </div>
        <div>
          <p style={{ fontFamily:F.heading,fontSize:"18px",fontWeight:"900",color:"white",
            letterSpacing:"0.05em" }}>CIERRE DE JORNADA</p>
          <p style={{ fontSize:"12px",color:"rgba(255,255,255,0.6)",marginTop:"3px" }}>
            {activeOps.length} jornadas activas · {Object.keys(confirmations).length} confirmadas
          </p>
        </div>
      </div>

      {/* Broadcast */}
      {!broadcastSent ? (
        <Btn onClick={handleBroadcast} loading={broadcastLoading} variant="dark" size="lg">
          <Bell size={18}/> Notificar Fin de Jornada a Todos
        </Btn>
      ) : (
        <div className="pop" style={{ padding:"16px",background:"#F0FDF4",
          border:"2px solid #BBF7D0",borderRadius:"16px",
          display:"flex",alignItems:"center",gap:"12px" }}>
          <CheckCircle size={20} style={{ color:T.ok,flexShrink:0 }}/>
          <p style={{ fontSize:"13px",fontWeight:"700",color:T.ok }}>
            Notificación enviada a {activeOps.length} operarios ✓
          </p>
        </div>
      )}

      {/* Progress bar */}
      <div style={{ background:"white",borderRadius:"16px",padding:"16px 18px",border:`1px solid ${T.ln}` }}>
        <div style={{ display:"flex",justifyContent:"space-between",marginBottom:"8px" }}>
          <span style={{ fontSize:"13px",fontWeight:"700",color:T.t2 }}>Progreso de Cierres</span>
          <span style={{ fontSize:"13px",fontWeight:"800",color:T.brand }}>
            {Object.keys(confirmations).length}/{activeOps.length}
          </span>
        </div>
        <div style={{ height:"10px",background:T.bg,borderRadius:"5px",overflow:"hidden" }}>
          <div style={{ height:"100%",borderRadius:"5px",transition:"width 0.5s ease",
            width:`${activeOps.length>0?(Object.keys(confirmations).length/activeOps.length)*100:0}%`,
            background:`linear-gradient(90deg,${T.brand},${T.ok})` }}/>
        </div>
      </div>

      {/* Per-operator closure cards */}
      <div>
        <SectionLabel>Estado por Operario</SectionLabel>
        <div style={{ display:"flex",flexDirection:"column",gap:"12px" }}>
          {activeOps.map(op => {
            const rep = reports[op.id];
            const conf = confirmations[op.id];
            const notif = notified[op.id];
            return (
              <Card key={op.id}>
                <div style={{ padding:"18px 20px" }}>
                  {/* Header */}
                  <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px" }}>
                    <div style={{ width:"40px",height:"40px",borderRadius:"12px",flexShrink:0,
                      background: conf===true?`${T.ok}15`:conf===false?`${T.danger}15`:
                        rep!==undefined?`${T.warn}15`:T.bg,
                      border:`1.5px solid ${conf===true?T.ok:conf===false?T.danger:
                        rep!==undefined?T.warn:T.ln}30`,
                      display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px" }}>
                      👷
                    </div>
                    <div style={{ flex:1 }}>
                      <p style={{ fontSize:"14px",fontWeight:"700",color:T.t1 }}>{op.name}</p>
                      <p style={{ fontSize:"11px",color:T.t3 }}>{op.vehicle} · {op.shift}</p>
                    </div>
                    {conf!==undefined && (
                      <Pill color={conf ? T.ok : T.danger}>
                        {conf ? "OK Mañana" : "Revisión"}
                      </Pill>
                    )}
                  </div>

                  {/* Step 1: Notify */}
                  <div style={{ borderLeft:`3px solid ${notif?T.ok:T.ln}`,
                    paddingLeft:"12px",marginBottom:"10px" }}>
                    <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                      <p style={{ fontSize:"12px",fontWeight:"700",
                        color:notif?T.ok:T.t3, display:"flex", alignItems:"center", gap:"6px" }}>
                        {notif && <CheckCircle size={13} strokeWidth={2.5}/>}
                        {notif?"Jornada finalizada notificada":"1. Notificar fin de jornada"}
                      </p>
                      {!notif && (
                        <button onClick={() => handleNotify(op.id)}
                          style={{ padding:"6px 12px",borderRadius:"10px",
                            background:T.brandLt,border:`1.5px solid ${T.brand}40`,
                            color:T.brand,fontSize:"11px",fontWeight:"700",cursor:"pointer" }}>
                          Enviar
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Step 2: Operator report */}
                  {notif && rep===undefined && (
                    <div style={{ borderLeft:`3px solid ${T.warn}`,paddingLeft:"12px",marginBottom:"10px" }}>
                      <p style={{ fontSize:"12px",fontWeight:"700",color:T.warn,marginBottom:"8px" }}>
                        2. Reporte del operario (simulando respuesta)
                      </p>
                      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px" }}>
                        <button onClick={() => handleReport(op.id, false)}
                          style={{ padding:"10px",borderRadius:"12px",
                            background:"#F0FDF4",border:"2px solid #BBF7D0",
                            color:T.ok,fontSize:"12px",fontWeight:"700",cursor:"pointer",
                            display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
                          <CheckCircle size={13} strokeWidth={2.5}/> Sin problemas
                        </button>
                        <button onClick={() => handleReport(op.id, true)}
                          style={{ padding:"10px",borderRadius:"12px",
                            background:"#FEF2F2",border:"2px solid #FECACA",
                            color:T.danger,fontSize:"12px",fontWeight:"700",cursor:"pointer",
                            display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
                          <AlertTriangle size={13} strokeWidth={2.5}/> Con problemas
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2 result */}
                  {rep !== undefined && conf===undefined && (
                    <div style={{ borderLeft:`3px solid ${rep?T.danger:T.ok}`,
                      paddingLeft:"12px",marginBottom:"10px" }}>
                      <p style={{ fontSize:"12px",fontWeight:"700",
                        color:rep?T.danger:T.ok,marginBottom:"8px",
                        display:"flex",alignItems:"center",gap:"6px" }}>
                        {rep
                          ? <AlertTriangle size={13} strokeWidth={2.5}/>
                          : <CheckCircle size={13} strokeWidth={2.5}/>}
                        {rep?"Operario reportó PROBLEMAS en el vehículo":"Operario reportó SIN problemas"}
                      </p>
                    </div>
                  )}

                  {/* Step 3: Supervisor confirmation */}
                  {rep !== undefined && conf===undefined && (
                    <div style={{ borderLeft:`3px solid ${T.brand}`,paddingLeft:"12px" }}>
                      <p style={{ fontSize:"12px",fontWeight:"700",color:T.brand,marginBottom:"8px" }}>
                        3. Tu confirmación para mañana
                      </p>
                      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px" }}>
                        <button onClick={() => handleConfirm(op.id, false)}
                          style={{ padding:"10px",borderRadius:"12px",
                            background:"#FEF2F2",border:"2px solid #FECACA",
                            color:T.danger,fontSize:"12px",fontWeight:"700",cursor:"pointer",
                            display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
                          <AlertTriangle size={14}/> Pendiente Revisión
                        </button>
                        <button onClick={() => handleConfirm(op.id, true)}
                          style={{ padding:"10px",borderRadius:"12px",
                            background:`linear-gradient(135deg,${T.ok},#059669)`,
                            border:"none",color:"white",fontSize:"12px",fontWeight:"700",cursor:"pointer",
                            boxShadow:"0 3px 12px rgba(16,185,129,0.3)",
                            display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
                          <CheckCircle size={14}/> OK para Mañana
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Final confirmation sent */}
                  {conf !== undefined && (
                    <div style={{ background: conf?"#F0FDF4":"#FEF2F2",
                      borderRadius:"12px",padding:"10px 14px",
                      border:`1px solid ${conf?"#BBF7D0":"#FECACA"}` }}>
                      <div style={{ display:"flex",alignItems:"center",gap:"8px" }}>
                        {conf
                          ? <CheckCircle size={14} style={{ color:T.ok, flexShrink:0 }} strokeWidth={2.5}/>
                          : <AlertTriangle size={14} style={{ color:T.danger, flexShrink:0 }} strokeWidth={2.5}/>}
                        <p style={{ fontSize:"12px",fontWeight:"700",color:conf?T.ok:T.danger }}>
                          {conf
                            ? "Confirmación enviada: Todo en orden para mañana"
                            : "Confirmación enviada: Revisión requerida antes de operar"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Resumen final */}
      {allConfirmed && activeOps.length > 0 && (
        <div className="pop" style={{ background:`linear-gradient(135deg,${T.brand},${T.brandDk})`,
          borderRadius:"22px",padding:"22px",
          boxShadow:`0 8px 32px ${T.brandGlow}` }}>
          <div style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px" }}>
            <div style={{ width:"40px", height:"40px", borderRadius:"12px",
              background:"rgba(255,255,255,0.18)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <CheckCircle size={22} style={{ color:"white" }} strokeWidth={2.5}/>
            </div>
            <p style={{ fontFamily:F.heading,fontSize:"20px",fontWeight:"900",color:"white",
              letterSpacing:"0.03em" }}>
              Jornada Cerrada
            </p>
          </div>
          <p style={{ fontSize:"13px",color:"rgba(255,255,255,0.8)",lineHeight:1.5 }}>
            Todas las jornadas del día han sido confirmadas. El reporte ha sido enviado automáticamente al Gerente y a los Operarios.
          </p>
          <div style={{ marginTop:"14px",display:"flex",gap:"8px" }}>
            <button onClick={() => alert("Reporte de cierre descargado correctamente (PDF).")}
              style={{ flex:1,padding:"12px",borderRadius:"12px",
              background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.25)",
              color:"white",fontSize:"12px",fontWeight:"700",cursor:"pointer",
              display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
              <Download size={14}/> Descargar Reporte
            </button>
            <button onClick={() => {
              if(navigator.share){ navigator.share({title:"Reporte de Cierre",text:"Reporte diario de cierre de jornadas"}).catch(()=>{}); }
              else if(navigator.clipboard){ navigator.clipboard.writeText("Reporte de cierre · Geopulse"); alert("Enlace copiado al portapapeles"); }
              else { alert("Compartir no disponible en este dispositivo"); }
            }} style={{ flex:1,padding:"12px",borderRadius:"12px",
              background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.25)",
              color:"white",fontSize:"12px",fontWeight:"700",cursor:"pointer",
              display:"flex",alignItems:"center",justifyContent:"center",gap:"6px" }}>
              <Share2 size={14}/> Compartir
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── SCREEN 2: RUT Entry ──────────────────────────────────── */
const RutScreen = ({ go }) => {
  const [rut, setRut] = useState("");
  const ok = rut.replace(/[^0-9kK]/g,"").length >= 8;

  return (
    <div className="su" style={{ minHeight:"100vh", background:"white", display:"flex", flexDirection:"column" }}>
      <TopNav onBack={() => go("login")} title="Verificación de Identidad" subtitle="Paso 1 de 2"/>
      <div style={{ padding:"32px", display:"flex", flexDirection:"column", flex:1 }}>

        <div style={{ marginBottom:"32px" }}>
          <div style={{ fontFamily:F.heading, fontSize:"32px", fontWeight:"900", color:T.t1,
            letterSpacing:"0.02em", marginBottom:"8px" }}>INGRESA TU RUT</div>
          <p style={{ color:T.t3, fontSize:"15px", lineHeight:1.6 }}>
            Verificamos tu identidad para garantizar la seguridad de la flota.
          </p>
        </div>

        <div style={{ position:"relative", marginBottom:"24px" }}>
          <input value={rut} onChange={e => setRut(formatRUT(e.target.value))} placeholder="12.345.678-9"
            maxLength={12} inputMode="numeric"
            style={{ width:"100%", padding:"22px 24px", borderRadius:"20px",
              border:`2px solid ${ok ? T.ok : T.ln}`, fontSize:"28px", fontWeight:"800",
              letterSpacing:"0.08em", background: ok ? "#f0fdf4" : T.bg,
              color:T.t1, transition:"all 0.2s" }}/>
          {ok && (
            <div style={{ position:"absolute", right:"16px", top:"50%", transform:"translateY(-50%)",
              background:T.ok, color:"white", padding:"6px 12px", borderRadius:"10px",
              display:"flex", alignItems:"center", gap:"5px" }}>
              <Check size={13} strokeWidth={3}/><span style={{ fontSize:"11px", fontWeight:"800" }}>VÁLIDO</span>
            </div>
          )}
        </div>

        {/* Fingerprint alternative */}
        <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"32px" }}>
          <div style={{ flex:1, height:"1px", background:T.ln }}/>
          <span style={{ fontSize:"12px", color:T.t4, fontWeight:"600" }}>o también</span>
          <div style={{ flex:1, height:"1px", background:T.ln }}/>
        </div>
        <button onClick={() => { setRut("12.345.678-9"); setTimeout(() => go("verify_code"), 600); }}
          style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"12px",
          padding:"18px", borderRadius:"16px", border:`2px dashed ${T.lnDk}`,
          background:T.bg, cursor:"pointer", marginBottom:"32px", width:"100%" }}>
          <span style={{ fontSize:"28px" }}>👆</span>
          <div style={{ textAlign:"left" }}>
            <div style={{ fontSize:"14px", fontWeight:"700", color:T.t1 }}>Huella Digital</div>
            <div style={{ fontSize:"12px", color:T.t3 }}>Touch ID disponible</div>
          </div>
        </button>

        <div style={{ marginTop:"auto" }}>
          <Btn onClick={() => go("verify_code")} disabled={!ok} size="lg">
            Enviar Código SMS <ArrowRight size={20}/>
          </Btn>
        </div>

        {/* Security note */}
        <div style={{ display:"flex", gap:"12px", marginTop:"20px", padding:"16px",
          background:T.bg, borderRadius:"16px", border:`1px solid ${T.ln}` }}>
          <Shield size={20} style={{ color:T.brand, flexShrink:0, marginTop:"1px" }}/>
          <p style={{ fontSize:"12px", color:T.t3, lineHeight:1.5 }}>
            Tus datos están protegidos bajo la Ley 19.628 de Protección de Datos Personales de Chile.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─── SCREEN 3: SMS Verify ─────────────────────────────────── */
const VerifyScreen = ({ go }) => {
  const [code, setCode] = useState(["","","","",""]);
  const r0 = useRef(null), r1 = useRef(null), r2 = useRef(null), r3 = useRef(null), r4 = useRef(null);
  const refs = [r0, r1, r2, r3, r4];
  const [resent, setResent] = useState(false);
  const [timer, setTimer] = useState(30);
  const done = code.every(c => c!=="");

  useEffect(() => {
    if(timer > 0 && !resent) {
      const t = setTimeout(() => setTimer(v => v-1), 1000);
      return () => clearTimeout(t);
    }
  }, [timer, resent]);

  const handleChange = (i, v) => {
    const nc = [...code]; nc[i] = v.replace(/\D/g,"").slice(-1); setCode(nc);
    if(v && i < 4) refs[i+1].current?.focus();
  };
  const handleKey = (i, e) => { if(e.key==="Backspace" && !code[i] && i>0) refs[i-1].current?.focus(); };

  return (
    <div className="su" style={{ minHeight:"100vh", background:"white", display:"flex", flexDirection:"column" }}>
      <TopNav onBack={() => go("rut_entry")} title="Código de Seguridad" subtitle="Paso 2 de 2"/>
      <div style={{ padding:"32px", display:"flex", flexDirection:"column", flex:1 }}>
        <div style={{ fontFamily:F.heading, fontSize:"32px", fontWeight:"900", color:T.t1,
          letterSpacing:"0.02em", marginBottom:"8px" }}>VERIFICA TU TELÉFONO</div>
        <p style={{ color:T.t3, fontSize:"15px", lineHeight:1.6, marginBottom:"40px" }}>
          Código enviado a <strong style={{ color:T.t1 }}>+56 9 *** **** 67</strong>
        </p>

        {/* Code inputs */}
        <div style={{ display:"flex", gap:"10px", justifyContent:"center", marginBottom:"32px" }}>
          {code.map((c, i) => (
            <input key={i} ref={refs[i]} value={c} onChange={e => handleChange(i,e.target.value)}
              onKeyDown={e => handleKey(i,e)} maxLength={1} inputMode="numeric"
              style={{ width:"54px", height:"68px", textAlign:"center", fontSize:"26px", fontWeight:"900",
                borderRadius:"16px", border:`2px solid ${c ? T.brand : T.ln}`,
                background: c ? T.brandLt : T.bg, color:T.t1, transition:"all 0.15s",
                fontFamily:F.heading }}/>
          ))}
        </div>

        <Btn onClick={() => go("home")} disabled={!done} size="lg">
          <CheckCircle size={20}/> Verificar y Entrar
        </Btn>

        <div style={{ textAlign:"center", marginTop:"24px" }}>
          {timer > 0 ? (
            <p style={{ fontSize:"14px", color:T.t3 }}>
              Reenviar en <strong style={{ color:T.t1 }}>{timer}s</strong>
            </p>
          ) : (
            <button onClick={() => { setResent(true); setTimer(30); }}
              style={{ fontSize:"14px", fontWeight:"700", color:T.brand, border:"none", background:"none" }}>
              {resent ? "✓ Código reenviado" : "Reenviar código"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── SCREEN 4: Home Dashboard ─────────────────────────────── */
const HomeScreen = ({ go, hasActiveJourney }) => {
  const [notifCount] = useState(2);
  const [dismissed, setDismissed] = useState([]);

  /* Alerts split by priority:
     - critical: actionable TODAY, blocks/affects journey → shown on home
     - info: future or non-actionable → only in notifications screen */
  const allAlerts = [
    { id:"fuel-low", priority:"critical", icon:Fuel,
      title:"Combustible bajo en TFWZ67",
      desc:"Reposta antes de iniciar tu jornada",
      time:"hace 12m",
      cta:"Ver vehículo", action: () => go("vehicle_selection") },
    { id:"maint-fri", priority:"info", icon:Wrench,
      title:"Mantención programada: Viernes 25 Abr",
      desc:"Recordatorio para esta semana",
      time:"hace 1h",
      cta:null, action:null },
  ];

  const homeBanners = allAlerts.filter(a => a.priority === "critical" && !dismissed.includes(a.id));
  const otherCount  = allAlerts.filter(a => a.priority !== "critical").length + (dismissed.length);

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, paddingBottom:"90px" }}>
      {/* Header */}
      <div style={{ background:`linear-gradient(160deg, ${T.d1} 0%, ${T.d2} 60%, #0a2a36 100%)`,
        padding:"52px 24px 36px", position:"relative", overflow:"hidden" }}>
        {/* Background glows */}
        <div style={{ position:"absolute", top:"-60px", right:"-60px", width:"220px", height:"220px",
          background:`radial-gradient(circle, ${T.brandGlow} 0%, transparent 70%)`, pointerEvents:"none" }}/>
        <div style={{ position:"absolute", bottom:"-20px", left:"-40px", width:"160px", height:"160px",
          background:"radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", pointerEvents:"none" }}/>

        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between",
          marginBottom:"24px", position:"relative", zIndex:2 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"6px" }}>
              <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:T.ok }} className="pu"/>
              <p style={{ fontSize:"11px", fontWeight:"700", color:"rgba(255,255,255,0.75)", letterSpacing:"0.1em", textTransform:"uppercase" }}>
                Turno Mañana · 08:00 – 17:00
              </p>
            </div>
            <button onClick={() => go("profile_screen")} style={{ background:"none", border:"none", padding:0, cursor:"pointer", textAlign:"left" }}>
              <div style={{ fontFamily:F.heading, fontSize:"30px", fontWeight:"900", color:"white",
                letterSpacing:"0.02em", lineHeight:1.1 }}>
                Hola, <span style={{ background:`linear-gradient(135deg,${T.brand},${T.brandMd})`,
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Juan</span> 👋
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:"4px", marginTop:"5px" }}>
                <User size={12} style={{ color:"rgba(255,255,255,0.75)" }}/>
                <span style={{ fontSize:"11px", color:"rgba(255,255,255,0.75)", fontWeight:"600" }}>Ver mi perfil</span>
                <ChevronRight size={10} style={{ color:"rgba(255,255,255,0.6)" }}/>
              </div>
            </button>
          </div>
          <div style={{ display:"flex", gap:"8px" }}>
            <button onClick={() => go("notifications")} style={{ width:"44px", height:"44px", borderRadius:"14px",
              background:T.glass, border:`1px solid ${T.glassBorder}`, display:"flex", alignItems:"center",
              justifyContent:"center", position:"relative", backdropFilter:"blur(8px)", cursor:"pointer" }}>
              <Bell size={20} style={{ color:"white" }}/>
              {notifCount > 0 && (
                <div style={{ position:"absolute", top:"8px", right:"8px", width:"9px", height:"9px",
                  borderRadius:"50%", background:T.danger, border:`2px solid ${T.d1}` }}/>
              )}
            </button>
            <button onClick={() => go("login")} style={{ width:"44px", height:"44px", borderRadius:"14px",
              background:T.glass, border:`1px solid ${T.glassBorder}`, display:"flex",
              alignItems:"center", justifyContent:"center", backdropFilter:"blur(8px)", cursor:"pointer" }}>
              <LogOut size={20} style={{ color:"rgba(255,255,255,0.85)" }}/>
            </button>
          </div>
        </div>

        {/* Status cards */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", position:"relative", zIndex:2 }}>
          {[
            { label:"Estado", val:"Activo", sub:"Listo para jornada", color:T.ok, dot:true },
            { label:"ID Conductor", val:"12.345.678-9", sub:"Credencial válida", color:"rgba(255,255,255,0.92)" },
          ].map(({ label, val, sub, color, dot }) => (
            <div key={label} style={{ background:T.glass, padding:"16px", borderRadius:"18px",
              border:`1px solid ${T.glassBorder}`, backdropFilter:"blur(8px)" }}>
              <p style={{ fontSize:"10px", fontWeight:"700", textTransform:"uppercase",
                letterSpacing:"0.1em", color:"rgba(255,255,255,0.6)", marginBottom:"6px" }}>{label}</p>
              <p style={{ fontWeight:"700", color, marginBottom:"3px", fontSize:"14px",
                display:"flex", alignItems:"center", gap:"6px" }}>
                {dot && <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:color, display:"inline-block" }} className="pu"/>}
                {val}
              </p>
              <p style={{ fontSize:"10px", color:"rgba(255,255,255,0.6)", fontWeight:"500" }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding:"24px", display:"flex", flexDirection:"column", gap:"20px", marginTop:"-20px", position:"relative", zIndex:5 }}>

        {/* ── Critical Action Banner (appears only when there's something blocking the journey) ── */}
        {homeBanners.length > 0 && (
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            {homeBanners.map(a => (
              <div key={a.id} style={{
                background:"white",
                borderRadius:"18px",
                padding:"16px",
                border:`1px solid ${T.warn}40`,
                borderLeft:`4px solid ${T.warn}`,
                boxShadow:"0 4px 16px rgba(245,158,11,0.15), 0 1px 3px rgba(15,23,42,0.06)",
                display:"flex",
                alignItems:"flex-start",
                gap:"14px",
                position:"relative"
              }}>
                {/* Icon */}
                <div style={{ width:"42px", height:"42px", borderRadius:"12px",
                  background:`${T.warn}15`, display:"flex",
                  alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <a.icon size={22} style={{ color: T.warn, strokeWidth:2.4 }}/>
                </div>

                {/* Content */}
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"4px" }}>
                    <span style={{ fontSize:"9px", fontWeight:"800", color: T.warn,
                      textTransform:"uppercase", letterSpacing:"0.12em",
                      padding:"2px 7px", borderRadius:"6px", background:`${T.warn}15` }}>
                      ACCIÓN REQUERIDA
                    </span>
                  </div>
                  <p style={{ fontSize:"14px", fontWeight:"800", color:T.t1, marginBottom:"3px",
                    lineHeight:1.3 }}>{a.title}</p>
                  <p style={{ fontSize:"12px", color:T.t3, lineHeight:1.4, marginBottom:"10px" }}>
                    {a.desc}
                  </p>
                  {a.cta && (
                    <button onClick={a.action} style={{
                      display:"inline-flex", alignItems:"center", gap:"5px",
                      padding:"8px 14px", borderRadius:"10px",
                      background: T.warn, border:"none",
                      color:"white", fontSize:"12px", fontWeight:"800",
                      cursor:"pointer", letterSpacing:"0.02em",
                      boxShadow:"0 2px 8px rgba(245,158,11,0.35)" }}>
                      {a.cta} <ArrowRight size={13} strokeWidth={2.5}/>
                    </button>
                  )}
                </div>

                {/* Dismiss */}
                <button onClick={() => setDismissed(p => [...p, a.id])}
                  style={{ width:"28px", height:"28px", borderRadius:"8px",
                    background:"transparent", border:"none",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    color:T.t4, cursor:"pointer", flexShrink:0, marginTop:"-2px" }}>
                  <X size={16}/>
                </button>
              </div>
            ))}

            {/* Link to full notifications */}
            {otherCount > 0 && (
              <button onClick={() => go("notifications")} style={{
                display:"flex", alignItems:"center", justifyContent:"center", gap:"6px",
                padding:"10px", borderRadius:"12px",
                background:"transparent", border:"none",
                color:T.t3, fontSize:"12px", fontWeight:"600", cursor:"pointer" }}>
                Ver {otherCount} notificación{otherCount!==1?"es":""} más
                <ChevronRight size={14}/>
              </button>
            )}
          </div>
        )}

        {/* Main CTA */}
        {hasActiveJourney ? (
          <button onClick={() => go("active_journey")} style={{ background:`linear-gradient(135deg, ${T.ok}, #16A34A)`,
            borderRadius:"20px", padding:"20px 24px", border:"none", display:"flex",
            alignItems:"center", gap:"16px", boxShadow:`0 8px 32px rgba(34,197,94,0.35)`, cursor:"pointer" }}>
            <div style={{ width:"48px", height:"48px", borderRadius:"14px", background:"rgba(255,255,255,0.15)",
              display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Navigation size={24} style={{ color:"white" }}/>
            </div>
            <div style={{ textAlign:"left", flex:1 }}>
              <div style={{ fontFamily:F.heading, fontSize:"22px", fontWeight:"900", color:"white",
                letterSpacing:"0.04em" }}>Ver mi Jornada</div>
              <div style={{ fontSize:"12px", color:"rgba(255,255,255,0.85)", fontWeight:"600" }}>En curso · Toca para ver detalles</div>
            </div>
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"white" }} className="pu"/>
          </button>
        ) : (
          <button onClick={() => go("vehicle_selection")} style={{ background:`linear-gradient(135deg, ${T.brand}, ${T.brandDk})`,
            borderRadius:"20px", padding:"20px 24px", border:"none", display:"flex",
            alignItems:"center", gap:"16px", boxShadow:`0 8px 32px ${T.brandGlow}`, cursor:"pointer" }}>
            <div style={{ width:"48px", height:"48px", borderRadius:"14px", background:"rgba(255,255,255,0.15)",
              display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Zap size={24} fill="white" style={{ color:"white" }}/>
            </div>
            <div style={{ textAlign:"left", flex:1 }}>
              <div style={{ fontFamily:F.heading, fontSize:"22px", fontWeight:"900", color:"white",
                letterSpacing:"0.04em" }}>Iniciar Jornada</div>
              <div style={{ fontSize:"12px", color:"rgba(255,255,255,0.8)", fontWeight:"600" }}>Selecciona vehículo y comienza</div>
            </div>
            <ChevronRight size={22} style={{ color:"rgba(255,255,255,0.7)" }}/>
          </button>
        )}

        {/* Quick Actions — only shortcuts not available from bottom nav or header */}
        <SectionLabel>Accesos Rápidos</SectionLabel>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
          {[
            { Icon: AlertOctagon, label:"Reportar Incidente", desc:"Falla, accidente o emergencia",
              dest:"soporte",      color:"#EF4444" },
            { Icon: User,         label:"Mi Perfil",          desc:"Datos y credenciales",
              dest:"profile_screen", color:T.brand },
          ].map(({ Icon, label, desc, dest, color }) => (
            <button key={label} onClick={() => go(dest)} style={{ background:"white", borderRadius:"18px",
              padding:"16px", border:`1px solid ${T.ln}`, display:"flex", flexDirection:"column",
              alignItems:"flex-start", gap:"10px", cursor:"pointer", textAlign:"left",
              boxShadow:"0 2px 8px rgba(15,23,42,0.06)",
              transition:"transform 0.15s, box-shadow 0.15s" }}>
              <div style={{ width:"40px", height:"40px", borderRadius:"12px",
                background:`${color}15`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <Icon size={20} style={{ color, strokeWidth:2.2 }}/>
              </div>
              <div>
                <span style={{ display:"block", fontSize:"13px", fontWeight:"800", color:T.t1,
                  marginBottom:"2px", lineHeight:1.2 }}>{label}</span>
                <span style={{ fontSize:"11px", color:T.t3, fontWeight:"500", lineHeight:1.3 }}>{desc}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Summary — adapts based on journey state */}
        <div>
          <SectionLabel action="Ver historial" onAction={() => go("history")}>
            {hasActiveJourney ? "Resumen de Hoy" : "Última Jornada"}
          </SectionLabel>
          {!hasActiveJourney && (
            <p style={{ fontSize:"12px", color:T.t3, marginBottom:"10px", marginTop:"-4px" }}>
              Lunes 14 abril · TFWZ67
            </p>
          )}
          <Card>
            {[
              { Icon:Gauge, label:"Distancia", val:"124.5 km", trend:"+12%", trendOk:true },
              { Icon:Clock, label:"Tiempo Activo", val:"6h 42m", trend:"En horario", trendOk:true },
              { Icon:Fuel, label:"Combustible prom.", val:"11.4 L/100km", trend:"-2%", trendOk:false },
            ].map(({ Icon, label, val, trend, trendOk }, i, arr) => (
              <div key={label} style={{ padding:"18px 20px", display:"flex", alignItems:"center",
                justifyContent:"space-between", borderBottom: i<arr.length-1 ? `1px solid ${T.ln}` : "none" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"14px" }}>
                  <div style={{ width:"40px", height:"40px", borderRadius:"12px", background:T.bg,
                    display:"flex", alignItems:"center", justifyContent:"center", color:T.brand }}>
                    <Icon size={20}/>
                  </div>
                  <div>
                    <p style={{ fontSize:"11px", fontWeight:"700", color:T.t3, textTransform:"uppercase",
                      letterSpacing:"0.05em", marginBottom:"2px" }}>{label}</p>
                    <p style={{ fontSize:"16px", fontWeight:"800", color:T.t1, fontFamily:F.heading,
                      letterSpacing:"0.03em" }}>{val}</p>
                  </div>
                </div>
                <Pill color={trendOk ? T.ok : T.danger}>{trend}</Pill>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

/* ─── SCREEN 5: Vehicle Selection ──────────────────────────── */
const VehicleSelectionScreen = ({ go, onComplete }) => {
  const [plate, setPlate] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const assignedVehicle = {
    plate: "TFWZ67",
    type: "Camioneta",
    model: "Toyota Hilux 2023",
    color: "Blanca",
    fuel: "Diésel",
    tank: "80 L",
    icon: "🛻"
  };
  const ok = plate.trim().toUpperCase() === assignedVehicle.plate;

  /* SVG illustration: clean side-view pickup truck */
  const PickupSVG = () => (
    <svg viewBox="0 0 140 80" width="120" height="68" xmlns="http://www.w3.org/2000/svg" style={{ filter:"drop-shadow(0 6px 12px rgba(0,0,0,0.35))" }}>
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC"/>
          <stop offset="100%" stopColor="#CBD5E1"/>
        </linearGradient>
        <linearGradient id="windowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#0369A1" stopOpacity="0.6"/>
        </linearGradient>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="70" cy="72" rx="58" ry="3" fill="rgba(0,0,0,0.25)"/>
      {/* Cargo bed */}
      <path d="M 62 38 L 124 38 L 127 58 L 62 58 Z" fill="url(#bodyGrad)" stroke="#0F172A" strokeWidth="0.8"/>
      <rect x="66" y="42" width="56" height="12" fill="#1E293B" opacity="0.25"/>
      <line x1="78" y1="42" x2="78" y2="54" stroke="rgba(0,0,0,0.2)" strokeWidth="0.6"/>
      <line x1="92" y1="42" x2="92" y2="54" stroke="rgba(0,0,0,0.2)" strokeWidth="0.6"/>
      <line x1="106" y1="42" x2="106" y2="54" stroke="rgba(0,0,0,0.2)" strokeWidth="0.6"/>
      {/* Cabin */}
      <path d="M 14 58 L 14 38 L 28 22 L 58 22 L 62 38 L 62 58 Z" fill="url(#bodyGrad)" stroke="#0F172A" strokeWidth="0.8"/>
      {/* Windows */}
      <path d="M 19 36 L 31 26 L 54 26 L 58 36 Z" fill="url(#windowGrad)" stroke="#0F172A" strokeWidth="0.6"/>
      <line x1="42" y1="26" x2="42" y2="36" stroke="#0F172A" strokeWidth="0.8"/>
      {/* Door split */}
      <line x1="40" y1="38" x2="40" y2="56" stroke="rgba(0,0,0,0.3)" strokeWidth="0.6"/>
      <line x1="36" y1="46" x2="40" y2="46" stroke="rgba(0,0,0,0.5)" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Front bumper */}
      <rect x="10" y="48" width="6" height="8" fill="#475569" rx="1.5"/>
      {/* Headlight */}
      <circle cx="14" cy="42" r="2.2" fill="#FCD34D"/>
      <circle cx="14" cy="42" r="1" fill="#FEF3C7"/>
      {/* Tail light */}
      <rect x="121" y="40" width="4" height="6" fill="#EF4444" rx="0.5"/>
      {/* Wheels */}
      <circle cx="30" cy="60" r="9" fill="#0F172A"/>
      <circle cx="30" cy="60" r="5" fill="#475569"/>
      <circle cx="30" cy="60" r="2" fill="#1E293B"/>
      <circle cx="100" cy="60" r="9" fill="#0F172A"/>
      <circle cx="100" cy="60" r="5" fill="#475569"/>
      <circle cx="100" cy="60" r="2" fill="#1E293B"/>
    </svg>
  );

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, display:"flex", flexDirection:"column" }}>
      <TopNav onBack={() => go("home")} title="Selección de Vehículo" subtitle="Inicio de Jornada"/>
      <div style={{ padding:"24px", flex:1, display:"flex", flexDirection:"column", gap:"24px" }}>

        {/* ── Assigned Vehicle Credential Card ── */}
        <div>
          <SectionLabel>Vehículo Asignado por Supervisor</SectionLabel>
          <div style={{
            borderRadius:"24px",
            overflow:"hidden",
            background:"white",
            boxShadow:"0 12px 40px rgba(15,23,42,0.18), 0 0 0 1px rgba(15,23,42,0.05)"
          }}>
            {/* Top status strip — boarding pass style */}
            <div style={{
              background:`linear-gradient(90deg, ${T.brand}, ${T.brandDk})`,
              padding:"10px 18px",
              display:"flex",
              alignItems:"center",
              justifyContent:"space-between"
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:"white",
                  boxShadow:"0 0 8px rgba(255,255,255,0.8)" }} className="pu"/>
                <span style={{ fontSize:"10px", fontWeight:"800", color:"white",
                  letterSpacing:"0.16em", textTransform:"uppercase" }}>
                  Asignada Hoy · Operativa
                </span>
              </div>
              <span style={{ fontSize:"10px", fontWeight:"700", color:"rgba(255,255,255,0.85)",
                letterSpacing:"0.08em", fontFamily:F.heading }}>
                15 ABR · TURNO AM
              </span>
            </div>

            {/* Hero: dark backdrop with vehicle illustration + plate */}
            <div style={{
              background:`linear-gradient(145deg, ${T.t1} 0%, ${T.d2} 60%, #0a2030 100%)`,
              padding:"22px",
              position:"relative",
              overflow:"hidden"
            }}>
              {/* Background glows */}
              <div style={{ position:"absolute", top:"-60px", right:"-40px", width:"180px", height:"180px",
                background:`${T.brand}30`, borderRadius:"50%", filter:"blur(40px)", pointerEvents:"none" }}/>
              <div style={{ position:"absolute", bottom:"-40px", left:"-30px", width:"120px", height:"120px",
                background:"rgba(59,130,246,0.12)", borderRadius:"50%", filter:"blur(30px)", pointerEvents:"none" }}/>

              {/* Vehicle illustration centered */}
              <div style={{ display:"flex", justifyContent:"center", marginBottom:"16px", position:"relative" }}>
                <PickupSVG/>
              </div>

              {/* Plate + type */}
              <div style={{ textAlign:"center", position:"relative" }}>
                <p style={{ fontSize:"10px", fontWeight:"800", color:"rgba(255,255,255,0.45)",
                  letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:"4px" }}>
                  Patente
                </p>
                <p style={{ fontFamily:F.heading, fontSize:"40px", fontWeight:"900",
                  color:"white", letterSpacing:"0.14em", lineHeight:1,
                  textShadow:"0 2px 12px rgba(13,148,136,0.4)" }}>
                  {assignedVehicle.plate}
                </p>
                <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.7)", marginTop:"8px",
                  fontWeight:"600" }}>
                  {assignedVehicle.type} · {assignedVehicle.model}
                </p>
              </div>
            </div>

            {/* Specs strip — quick reference */}
            <div style={{
              display:"grid",
              gridTemplateColumns:"1fr 1fr 1fr",
              borderBottom:`1px solid ${T.ln}`,
              background:T.bg2
            }}>
              {[
                { label:"Color",       val: assignedVehicle.color, icon:"🎨" },
                { label:"Combustible", val: assignedVehicle.fuel,  icon:"⛽" },
                { label:"Tanque",      val: assignedVehicle.tank,  icon:"🛢️" },
              ].map((s, i, arr) => (
                <div key={s.label} style={{
                  padding:"12px 8px",
                  textAlign:"center",
                  borderRight: i<arr.length-1 ? `1px solid ${T.ln}` : "none"
                }}>
                  <div style={{ fontSize:"15px", marginBottom:"4px" }}>{s.icon}</div>
                  <p style={{ fontSize:"9px", fontWeight:"700", color:T.t4,
                    textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"3px" }}>
                    {s.label}
                  </p>
                  <p style={{ fontSize:"13px", fontWeight:"800", color:T.t1, fontFamily:F.heading,
                    letterSpacing:"0.02em" }}>
                    {s.val}
                  </p>
                </div>
              ))}
            </div>

            {/* Supervisor signature footer */}
            <div style={{ padding:"14px 18px", display:"flex", alignItems:"center", gap:"12px",
              background:"white" }}>
              <div style={{
                width:"40px", height:"40px", borderRadius:"50%",
                background:`linear-gradient(135deg, ${T.brand}, ${T.brandDk})`,
                display:"flex", alignItems:"center", justifyContent:"center",
                color:"white", fontSize:"13px", fontWeight:"900", fontFamily:F.heading,
                letterSpacing:"0.04em", flexShrink:0,
                boxShadow:`0 4px 12px ${T.brandGlow}`
              }}>
                CR
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <p style={{ fontSize:"12px", fontWeight:"800", color:T.t1, lineHeight:1.2 }}>
                  Aprobado por Carlos Rodríguez
                </p>
                <p style={{ fontSize:"10px", color:T.t3, fontWeight:"600", marginTop:"2px" }}>
                  Supervisor de Flota · Asignada 07:42 AM
                </p>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:"5px",
                padding:"5px 10px", background:`${T.ok}15`, borderRadius:"20px",
                border:`1px solid ${T.ok}30`, flexShrink:0 }}>
                <ShieldCheck size={13} style={{ color: T.ok }}/>
                <span style={{ fontSize:"10px", fontWeight:"800", color: T.ok,
                  letterSpacing:"0.04em" }}>VERIFICADO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Confirm instructions */}
        <div style={{ background:T.brandLt, borderRadius:"16px", padding:"14px 16px",
          border:`1.5px solid ${T.brand}30`, display:"flex", gap:"12px" }}>
          <Info size={18} style={{ color:T.brand, flexShrink:0, marginTop:"1px" }}/>
          <p style={{ fontSize:"13px", color:T.t2, lineHeight:1.5 }}>
            Verifica que estés dentro del vehículo asignado e ingresa la patente para confirmar.
          </p>
        </div>

        {/* Plate input */}
        <div>
          <SectionLabel>Confirma la Patente del Vehículo</SectionLabel>
          <p style={{ fontSize:"13px", color:T.t3, marginBottom:"14px", lineHeight:1.5 }}>
            Escribe la patente que ves físicamente en tu vehículo.
          </p>

          {/* Input with character slots overlay */}
          <div style={{ position:"relative" }}>
            {/* Background slot guides — visible only when empty */}
            {plate.length === 0 && (
              <div style={{ position:"absolute", inset:0, display:"flex",
                alignItems:"center", justifyContent:"center", gap:"10px",
                pointerEvents:"none", zIndex:1 }}>
                {[0,1,2,3,4,5].map(i => (
                  <div key={i} style={{
                    width:"28px", height:"3px", borderRadius:"2px",
                    background: T.lnDk, opacity:0.6
                  }}/>
                ))}
              </div>
            )}

            <input
              value={plate}
              onChange={e => {
                const clean = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
                setPlate(clean);
              }}
              placeholder=""
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck="false"
              inputMode="text"
              maxLength={6}
              style={{
                width:"100%",
                padding:"24px 22px",
                borderRadius:"18px",
                border:`2.5px solid ${ok ? T.ok : plate.length>=6 && !ok ? T.danger : T.ln}`,
                fontSize:"34px",
                fontWeight:"900",
                letterSpacing:"0.24em",
                fontFamily:F.heading,
                background: ok ? "#F0FDF4" : plate.length>=6 && !ok ? "#FEF2F2" : "white",
                color: ok ? T.ok : plate.length>=6 && !ok ? T.danger : T.t1,
                textAlign:"center",
                transition:"all 0.2s",
                textTransform:"uppercase",
                position:"relative",
                zIndex:2,
                caretColor: T.brand
              }}/>
          </div>

          {/* Live progress: dots + counter — ALWAYS visible while typing */}
          <div style={{ marginTop:"14px", display:"flex", alignItems:"center",
            justifyContent:"center", gap:"8px" }}>
            {[...assignedVehicle.plate].map((expectedChar, i) => {
              const userChar = plate[i];
              const matches = userChar === expectedChar;
              const typed = userChar !== undefined;
              return (
                <div key={i} style={{
                  width: typed ? "16px" : "12px",
                  height:"4px",
                  borderRadius:"3px",
                  background: !typed ? T.ln : matches ? T.ok : T.danger,
                  transition:"all 0.2s"
                }}/>
              );
            })}
            <span style={{
              fontSize:"11px",
              color: ok ? T.ok : T.t3,
              fontWeight:"700",
              marginLeft:"6px",
              fontFamily:F.heading,
              letterSpacing:"0.04em"
            }}>
              {plate.length}/6
            </span>
          </div>

          {/* Status messages */}
          {plate.length>=6 && !ok && (
            <div className="pop" style={{ marginTop:"14px", padding:"12px 14px", borderRadius:"14px",
              background:"#FEF2F2", border:`1px solid #FECACA`,
              display:"flex", alignItems:"flex-start", gap:"10px" }}>
              <AlertTriangle size={18} style={{ color:T.danger, flexShrink:0, marginTop:"1px" }}/>
              <p style={{ fontSize:"12px", color:T.danger, fontWeight:"700", lineHeight:1.5 }}>
                Esta patente no es la asignada. Verifica que estés en el vehículo correcto.
              </p>
            </div>
          )}
          {ok && (
            <div className="pop" style={{ marginTop:"14px", padding:"12px 14px", borderRadius:"14px",
              background:"#F0FDF4", border:`1px solid #BBF7D0`,
              display:"flex", alignItems:"center", gap:"10px" }}>
              <CheckCircle size={18} style={{ color:T.ok, flexShrink:0 }}/>
              <p style={{ fontSize:"12px", color:T.ok, fontWeight:"700" }}>
                Vehículo confirmado. Puedes continuar.
              </p>
            </div>
          )}
        </div>

        <div style={{ marginTop:"auto" }}>
          <Btn onClick={() => { onComplete({type:"pickup", plate}); go("start_camera"); }}
            disabled={!ok} size="lg">
            Confirmar y Continuar <ChevronRight size={20}/>
          </Btn>
        </div>
      </div>
    </div>
  );
};



/* ─── SCREEN 7: Camera ─────────────────────────────────────── */
const CameraScreen = ({ go, mode="start" }) => {
  const isEnd = mode==="end";
  const [flash, setFlash] = useState(false);
  const [shot, setShot] = useState(false);

  const shoot = () => {
    setFlash(true);
    setTimeout(()=>setFlash(false),120);
    setTimeout(()=>{setShot(true);},400);
    setTimeout(()=>go(isEnd?"confirm_end":"confirm_start"),2000);
  };

  return (
    <div style={{ minHeight:"100vh", background:T.d1, display:"flex", flexDirection:"column" }}>
      <TopNav onBack={() => go(isEnd?"active_journey":"vehicle_selection")}
        title={isEnd?"Cierre de Jornada":"Apertura de Jornada"}
        subtitle="Foto del tablero" dark/>

      {/* Viewfinder */}
      <div style={{ flex:1, position:"relative", margin:"12px", borderRadius:"28px",
        background:T.d2, overflow:"hidden", border:`1px solid ${T.d3}`, minHeight:"280px" }}>

        {/* Simulated camera */}
        <svg width="100%" height="100%" viewBox="0 0 380 290" preserveAspectRatio="xMidYMid slice"
          style={{ position:"absolute", inset:0, opacity:0.5 }}>
          <rect width="380" height="290" fill="#0F172A"/>
          <rect x="0" y="0" width="380" height="140" fill="#0D9488" opacity=".06"/>
          <ellipse cx="190" cy="145" rx="100" ry="80" fill="#1E293B"/>
          <circle cx="90" cy="255" r="30" fill="none" stroke="#334155" strokeWidth="5"/>
          <circle cx="280" cy="248" r="32" fill="#0F172A" stroke="#334155" strokeWidth="2"/>
          <text x="280" y="253" textAnchor="middle" fill={T.brand} fontSize="12" fontWeight="bold" fontFamily="monospace">45210</text>
          <rect x="150" y="110" width="80" height="40" rx="4" fill="#1E293B" stroke="#334155"/>
          <text x="190" y="136" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="monospace">RPM</text>
        </svg>

        {flash && <div style={{ position:"absolute", inset:0, background:"white", zIndex:50, borderRadius:"28px" }}/>}

        {/* Capture frame */}
        <div style={{ position:"absolute", top:"50%", left:"50%",
          transform:"translate(-50%, -50%)",
          width:"260px", height:"160px" }}>
          <div style={{ width:"100%", height:"100%", position:"relative" }}>
            {/* Corner brackets */}
            {[{t:0,l:0},{t:0,r:0},{b:0,l:0},{b:0,r:0}].map((pos,i) => (
              <div key={i} style={{ position:"absolute", width:"20px", height:"20px", ...pos,
                borderTop: (pos.t===0) ? `3px solid ${T.brand}` : "none",
                borderBottom: (pos.b===0) ? `3px solid ${T.brand}` : "none",
                borderLeft: (pos.l===0) ? `3px solid ${T.brand}` : "none",
                borderRight: (pos.r===0) ? `3px solid ${T.brand}` : "none" }}/>
            ))}
            <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
              background:"rgba(0,0,0,0.6)", backdropFilter:"blur(8px)",
              borderRadius:"20px", padding:"6px 16px" }}>
              <span style={{ color:"rgba(255,255,255,0.85)", fontSize:"11px", fontWeight:"700",
                textTransform:"uppercase", letterSpacing:"0.2em" }}>
                {shot ? "✓ Capturado" : "Centrar Tablero"}
              </span>
            </div>
          </div>
        </div>

        {/* Instruction overlay */}
        <div style={{ position:"absolute", bottom:"16px", left:"16px", right:"16px" }}>
          <div style={{ background:"rgba(0,0,0,0.7)", backdropFilter:"blur(10px)", borderRadius:"16px",
            padding:"12px 16px", display:"flex", gap:"12px", alignItems:"center" }}>
            <Info size={16} style={{ color:T.brand, flexShrink:0 }}/>
            <p style={{ color:"rgba(255,255,255,0.75)", fontSize:"12px", lineHeight:1.4 }}>
              El odómetro y nivel de combustible deben ser visibles y legibles.
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ padding:"16px 32px 32px", display:"flex", flexDirection:"column", gap:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-around" }}>
          <button style={{ width:"52px", height:"52px", borderRadius:"50%", background:T.d3, border:"none",
            display:"flex", alignItems:"center", justifyContent:"center", color:T.d4 }}>
            <ZapOff size={22}/>
          </button>

          {/* Shutter */}
          <button onClick={shoot} style={{ width:"80px", height:"80px", borderRadius:"50%",
            border:`4px solid rgba(255,255,255,0.25)`, padding:"5px", background:"transparent" }}>
            <div style={{ width:"100%", height:"100%", borderRadius:"50%",
              background: shot ? T.ok : "white",
              transition:"background 0.2s",
              display:"flex", alignItems:"center", justifyContent:"center" }}>
              {shot && <Check size={28} strokeWidth={3} style={{ color:"white" }}/>}
            </div>
          </button>

          <button onClick={() => go(isEnd?"manual_end":"manual_start")}
            style={{ width:"52px", height:"52px", borderRadius:"50%", background:T.d3, border:"none",
              display:"flex", alignItems:"center", justifyContent:"center", color:T.d4 }}>
            <Edit3 size={22}/>
          </button>
        </div>

        <button onClick={() => go(isEnd?"manual_end":"manual_start")}
          style={{ padding:"12px", borderRadius:"14px", background:"rgba(255,255,255,0.06)",
            border:`1px solid ${T.d3}`, color:"rgba(255,255,255,0.6)", fontSize:"13px",
            fontWeight:"700", cursor:"pointer" }}>
          Ingresar datos manualmente
        </button>
      </div>
    </div>
  );
};

/* ─── SCREEN 8: Confirm Data ───────────────────────────────── */
const ConfirmScreen = ({ go, mode="start", vehicleData, journeyData, onComplete }) => {
  const isEnd = mode==="end";
  const endKm   = journeyData?.endKm  || "45.850";
  const startKm = journeyData?.startKm|| "45.210";
  const dist    = Math.max(0, parseInt(String(endKm).replace(/\D/g,""),10) - parseInt(String(startKm).replace(/\D/g,""),10));
  const typeEmoji = vehicleData?.type==="pickup"?"🛻":vehicleData?.type==="truck"?"🚚":vehicleData?.type==="van"?"🚐":"🚜";
  const items = isEnd
    ? [
        { emoji:"📏", label:"Odómetro Inicial", val:`${startKm} km` },
        { emoji:"🏁", label:"Odómetro Final",   val:`${endKm} km` },
        { emoji:"🚗", label:"Distancia Total",  val:`${dist} km` },
        { emoji:"⛽", label:"Combustible Final", val:`${journeyData?.fuel||32}%` },
        { emoji:"⏱", label:"Duración",          val:"8h 55m" },
      ]
    : [
        { emoji: typeEmoji, label:"Unidad",       val:`${vehicleData?.plate || "---"}` },
        { emoji:"⛽",        label:"Combustible",  val:`${journeyData?.fuel || 85}%` },
        { emoji:"🕐",        label:"Hora Inicio",  val:new Date().toLocaleTimeString("es-CL",{hour:"2-digit",minute:"2-digit"}) },
        { emoji:"📍",        label:"Ubicación",    val:"Santiago, Sector 4A" },
      ];

  const handleConfirm = () => {
    if (isEnd) {
      onComplete({ endKm:"45.850", fuel: journeyData?.fuel || 0 });
      go("vehicle_report");         // → reporte de estado del vehículo, luego espera feedback
    } else {
      onComplete({ startKm: journeyData?.startKm || "45.210", fuel: journeyData?.fuel || 85 });
      go("waiting_approval");       // → espera autorización del supervisor
    }
  };

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, display:"flex", flexDirection:"column" }}>
      <TopNav onBack={() => go(isEnd?"end_camera":"start_camera")} title="Revisar Datos" subtitle="Confirmación"/>
      <div style={{ padding:"24px", flex:1, display:"flex", flexDirection:"column", gap:"24px" }}>

        {/* AI badge */}
        <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px",
          background:`${T.ok}12`, border:`1px solid ${T.ok}33`, borderRadius:"16px" }}>
          <ShieldCheck size={20} style={{ color:T.ok }}/>
          <div>
            <p style={{ fontSize:"13px", fontWeight:"700", color:T.ok }}>Verificación IA Completada</p>
            <p style={{ fontSize:"11px", color:T.t3 }}>Datos extraídos automáticamente de la imagen</p>
          </div>
        </div>

        <Card>
          <div style={{ padding:"4px 0" }}>
            {items.map((it, i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
                padding:"18px 20px", borderBottom: i<items.length-1 ? `1px solid ${T.ln}` : "none" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"14px" }}>
                  <div style={{ width:"40px", height:"40px", borderRadius:"12px", background:T.bg,
                    display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px" }}>{it.emoji}</div>
                  <span style={{ fontSize:"13px", fontWeight:"600", color:T.t3 }}>{it.label}</span>
                </div>
                <span style={{ fontFamily:F.heading, fontSize:"16px", fontWeight:"800", color:T.t1,
                  letterSpacing:"0.03em" }}>{it.val}</span>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ display:"flex", flexDirection:"column", gap:"12px", marginTop:"auto" }}>
          <Btn onClick={handleConfirm} size="lg">
            {isEnd ? "Cerrar Jornada" : "Iniciar Jornada"} <ChevronRight size={20}/>
          </Btn>
          <Btn variant="ghost" onClick={() => go(isEnd?"manual_end":"manual_start")}>
            <Edit3 size={18}/> Corregir Manualmente
          </Btn>
        </div>
      </div>
    </div>
  );
};

/* ─── SCREEN 9: Manual Entry ───────────────────────────────── */
const ManualEntryScreen = ({ go, mode="start", onComplete }) => {
  const isEnd = mode==="end";
  const [km, setKm] = useState("");
  const [fuel, setFuel] = useState(85);
  const [chips, setChips] = useState([]);
  const [obs, setObs] = useState("");
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [kmErr, setKmErr] = useState(null);

  const toggleChip = c => setChips(p => p.includes(c) ? p.filter(x=>x!==c) : [...p,c]);
  const fuelColor = fuel<=20 ? T.danger : fuel<=50 ? T.warn : T.ok;
  const fmtKm = v => v.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,".");

  const validateKm = () => {
    const n = parseInt(km.replace(/\D/g,""),10);
    if(!km||isNaN(n)||n<1000||n>999999){ setKmErr("Lectura inválida. Ingresa entre 1.000 y 999.999 km"); return false; }
    setKmErr(null); return true;
  };

  const steps = [
    { label:"01", title:isEnd?"Odómetro Final":"Odómetro Inicial", sub:"Lectura exacta del tablero" },
    { label:"02", title:"Combustible", sub:"Ajusta el nivel actual del medidor" },
    { label:"03", title:"Estado del Vehículo", sub:"Reporte rápido (opcional)" },
    { label:"04", title:"Confirmar Registro", sub:"Revisa antes de guardar" },
  ];

  const handleNext = () => {
    if(step===0 && !validateKm()) return;
    if(step<3) { setStep(s=>s+1); return; }
    onComplete(isEnd ? {endKm:km,fuel} : {startKm:km,fuel});
    setDone(true);
    setTimeout(()=>go(isEnd?"vehicle_report":"waiting_approval"),2000);
  };

  if(done) return (
    <div style={{ minHeight:"100vh", background:"white", display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center", gap:"20px", padding:"48px" }}>
      <div className="pop" style={{ width:"96px", height:"96px", borderRadius:"28px",
        background:T.brandLt, display:"flex", alignItems:"center", justifyContent:"center", color:T.brand }}>
        <Check size={48} strokeWidth={2.5}/>
      </div>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontFamily:F.heading, fontSize:"30px", fontWeight:"900", color:T.t1,
          letterSpacing:"0.02em", marginBottom:"8px" }}>
          {isEnd ? "JORNADA CERRADA" : "JORNADA INICIADA"}
        </div>
        <p style={{ color:T.t3, fontSize:"14px" }}>Redirigiendo...</p>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", background:T.bg, display:"flex", flexDirection:"column", paddingBottom:"32px" }}>
      <div style={{ background:T.t1, paddingTop:"52px" }}>
        <TopNav onBack={() => step>0 ? setStep(s=>s-1) : go(isEnd?"end_camera":"start_camera")}
          title="Ingreso Manual" subtitle={isEnd?"Cierre de Turno":"Apertura de Turno"} dark/>
        {/* Progress bar */}
        <div style={{ display:"flex", gap:"6px", padding:"16px 24px 20px" }}>
          {steps.map((_,i) => (
            <div key={i} style={{ flex:1, height:"4px", borderRadius:"2px",
              background: i<=step ? T.brand : "rgba(255,255,255,0.1)", transition:"background 0.4s" }}/>
          ))}
        </div>
      </div>

      <div style={{ padding:"0 20px", marginTop:"-16px", flex:1 }}>
        <div style={{ background:"white", borderRadius:"28px", border:`1px solid ${T.ln}`,
          boxShadow:"0 8px 40px rgba(0,0,0,0.06)", padding:"28px", minHeight:"360px",
          display:"flex", flexDirection:"column" }}>

          <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"24px" }}>
            <div style={{ width:"44px", height:"44px", borderRadius:"14px", background:T.brandLt,
              display:"flex", alignItems:"center", justifyContent:"center",
              fontFamily:F.heading, fontWeight:"900", fontSize:"16px", color:T.brand,
              letterSpacing:"0.05em" }}>{steps[step].label}</div>
            <div>
              <div style={{ fontFamily:F.heading, fontSize:"20px", fontWeight:"900",
                letterSpacing:"0.03em", color:T.t1 }}>{steps[step].title}</div>
              <p style={{ fontSize:"12px", color:T.t3, marginTop:"2px" }}>{steps[step].sub}</p>
            </div>
          </div>

          <div style={{ flex:1 }}>
            {step===0 && (
              <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
                <div style={{ position:"relative" }}>
                  <input value={km} onChange={e=>{setKm(fmtKm(e.target.value));setKmErr(null);}}
                    onBlur={validateKm} placeholder="0" inputMode="numeric"
                    style={{ width:"100%", padding:"22px 80px 22px 24px", borderRadius:"20px",
                      border:`2px solid ${kmErr?T.danger:km?T.brand:T.ln}`, fontSize:"36px",
                      fontWeight:"900", fontFamily:F.heading, letterSpacing:"-1px",
                      background: kmErr?"#fef2f2":km?T.brandLt:T.bg, color:T.t1 }}/>
                  <span style={{ position:"absolute", right:"20px", top:"50%", transform:"translateY(-50%)",
                    color:T.t4, fontFamily:F.heading, fontWeight:"800", fontSize:"14px" }}>KM</span>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:"8px", padding:"10px 14px",
                  background:T.bg, borderRadius:"12px", border:`1px solid ${T.ln}` }}>
                  <Clock size={14} style={{ color:T.t4 }}/>
                  <span style={{ fontSize:"12px", fontWeight:"600", color:T.t3 }}>
                    Última lectura: <strong style={{ color:T.brand }}>45.045 KM</strong> (ayer 17:22)
                  </span>
                </div>
                {kmErr && (
                  <div style={{ display:"flex", gap:"8px", color:T.danger }}>
                    <AlertTriangle size={14} style={{ flexShrink:0, marginTop:"1px" }}/>
                    <p style={{ fontSize:"12px", fontWeight:"600" }}>{kmErr}</p>
                  </div>
                )}
              </div>
            )}

            {step===1 && (
              <div style={{ display:"flex", flexDirection:"column", gap:"32px" }}>
                <div style={{ textAlign:"center" }}>
                  <div style={{ fontFamily:F.heading, fontSize:"60px", fontWeight:"900", color:fuelColor,
                    letterSpacing:"-2px", lineHeight:1 }}>{fuel}%</div>
                  <p style={{ fontSize:"12px", color:T.t3, fontWeight:"600", marginTop:"4px" }}>Nivel de combustible</p>
                </div>
                <div>
                  <input type="range" min="0" max="100" value={fuel} step="5"
                    onChange={e => setFuel(Number(e.target.value))}
                    style={{ width:"100%", background:`linear-gradient(to right, ${fuelColor} ${fuel}%, ${T.ln} ${fuel}%)` }}/>
                  <div style={{ display:"flex", justifyContent:"space-between", marginTop:"16px" }}>
                    {[0,25,50,75,100].map(v => (
                      <button key={v} onClick={() => setFuel(v)} style={{ width:"50px", padding:"8px 0",
                        borderRadius:"12px", border:`1.5px solid ${fuel===v ? T.brand : T.ln}`,
                        background: fuel===v ? T.brandLt : "white",
                        color: fuel===v ? T.brand : T.t3, fontSize:"11px", fontWeight:"700" }}>{v}%</button>
                    ))}
                  </div>
                </div>
                {fuel <= 20 && (
                  <div style={{ display:"flex", gap:"10px", padding:"14px", background:"#fef2f2",
                    borderRadius:"14px", border:`1px solid #fecaca`, color:T.danger }}>
                    <AlertOctagon size={18} style={{ flexShrink:0 }}/>
                    <p style={{ fontSize:"13px", fontWeight:"600" }}>Nivel crítico. Programa repostaje antes de iniciar ruta.</p>
                  </div>
                )}
              </div>
            )}

            {step===2 && (
              <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
                  {["Todo en orden","Luz de motor encendida","Neumático bajo","Pérdida de agua","Ruido extraño","Falla mecánica","Luz quemada","Falta herramienta"].map(chip => {
                    const on = chips.includes(chip);
                    const isOk = chip === "Todo en orden";
                    return (
                      <button key={chip} onClick={() => toggleChip(chip)} style={{ padding:"10px 14px",
                        borderRadius:"20px", fontSize:"12px", fontWeight:"700",
                        border:`2px solid ${on ? (isOk?T.ok:T.warn) : T.ln}`,
                        background: on ? (isOk?"#F0FDF4":"#FFFBEB") : T.bg,
                        color: on ? (isOk?T.ok:T.warn) : T.t2,
                        cursor:"pointer", display:"flex", alignItems:"center", gap:"6px" }}>
                        {on && (isOk
                          ? <Check size={13} strokeWidth={3}/>
                          : <AlertTriangle size={13} strokeWidth={2.5}/>
                        )}
                        {chip}
                      </button>
                    );
                  })}
                </div>
                <textarea value={obs} onChange={e => setObs(e.target.value)}
                  placeholder="Observaciones adicionales..." rows={3}
                  style={{ width:"100%", padding:"16px", borderRadius:"16px",
                    border:`1.5px solid ${T.ln}`, background:T.bg, fontSize:"14px",
                    resize:"none", fontFamily:F.body, color:T.t1 }}/>
              </div>
            )}

            {step===3 && (
              <div>
                {[
                  { label:isEnd?"Odómetro Final":"Odómetro Inicial", val:`${km} KM` },
                  { label:"Combustible", val:`${fuel}%` },
                  { label:"Estado", val: chips.length > 0 ? chips.join(", ") : "Sin observaciones" },
                ].map(({ label, val }, i, arr) => (
                  <div key={label} style={{ padding:"16px 0", borderBottom: i<arr.length-1 ? `1px solid ${T.ln}` : "none",
                    display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"12px" }}>
                    <span style={{ fontSize:"12px", fontWeight:"700", color:T.t3, textTransform:"uppercase",
                      letterSpacing:"0.05em", flexShrink:0 }}>{label}</span>
                    <span style={{ fontFamily:F.heading, fontSize:"15px", fontWeight:"800", color:T.t1,
                      textAlign:"right", letterSpacing:"0.03em" }}>{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ marginTop:"28px" }}>
            <Btn onClick={handleNext} size="lg">
              {step<3 ? "Siguiente" : isEnd ? "Guardar y Cerrar Jornada" : "Guardar e Iniciar Jornada"}
              <ChevronRight size={20}/>
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── SCREEN: Waiting Supervisor Approval ──────────────────── */
const WaitingApprovalScreen = ({ go, vehicleData, journeyData, approvalState, onApprovalResult }) => {
  const status = approvalState?.status || "pending";
  const [secs, setSecs] = useState(0);
  const [phase, setPhase] = useState(0); // 0=waiting, 1=reviewing

  useEffect(() => {
    const t = setInterval(() => setSecs(s => s+1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if(secs >= 4 && phase === 0) setPhase(1);
  }, [secs, phase]);

  useEffect(() => {
    if(status === "approved") {
      const t = setTimeout(() => go("active_journey"), 2800);
      return () => clearTimeout(t);
    }
  }, [status]);

  const pad = n => String(n).padStart(2,"0");
  const timer = `${pad(Math.floor(secs/60))}:${pad(secs%60)}`;
  const typeEmoji = vehicleData?.type==="pickup"?"🛻":vehicleData?.type==="truck"?"🚚":vehicleData?.type==="van"?"🚐":"🚜";

  return (
    <div style={{ minHeight:"100vh", background:"white", display:"flex", flexDirection:"column" }}>
      <div style={{ padding:"16px 20px 12px", borderBottom:`1px solid ${T.ln}`, textAlign:"center" }}>
        <p style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"800", color:T.t1 }}>Autorización de Inicio</p>
        <p style={{ fontSize:"12px", color:T.t3, fontWeight:"500" }}>Verificación supervisor</p>
      </div>

      <div style={{ padding:"24px", display:"flex", flexDirection:"column", gap:"20px", flex:1 }}>

        {/* Status card */}
        {status === "pending" && (
          <div style={{ background: phase===1 ? "#F0F4FF" : "#FFFBEB",
            borderRadius:"24px", padding:"32px 24px", textAlign:"center",
            border: `1.5px solid ${phase===1 ? "#C7D2FE" : "#FDE68A"}`,
            transition:"all 0.6s" }}>
            <div style={{ fontSize:"52px", marginBottom:"16px" }}>
              {phase===1 ? "👁️" : "⏳"}
            </div>
            <p style={{ fontFamily:F.heading, fontSize:"22px", fontWeight:"800",
              color: phase===1 ? "#4338CA" : "#D97706", letterSpacing:"0.02em", marginBottom:"8px" }}>
              {phase===1 ? "Supervisor revisando" : "Esperando supervisor"}
            </p>
            <p style={{ fontSize:"13px", color: phase===1 ? "#6366F1" : "#B45309",
              lineHeight:1.5, marginBottom:"20px" }}>
              {phase===1
                ? "Carlos Rodríguez está revisando tus datos ahora mismo."
                : "Tu solicitud fue enviada. El supervisor está siendo notificado en tiempo real."}
            </p>
            <div style={{ fontFamily:"monospace", fontSize:"36px", fontWeight:"800",
              color: phase===1 ? "#4338CA" : "#D97706", letterSpacing:"0.1em", marginBottom:"16px" }}>
              {timer}
            </div>
            {/* Progress dots */}
            <div style={{ display:"flex", gap:"8px", justifyContent:"center" }}>
              {[0,1,2].map(i => (
                <div key={i} style={{ width: i===phase ? "24px" : "8px", height:"8px",
                  borderRadius:"4px", transition:"all 0.4s",
                  background: i<=phase ? (phase===1?"#4338CA":"#D97706") : "#E5E7EB" }}/>
              ))}
            </div>
          </div>
        )}

        {status === "approved" && (
          <div style={{ background:"#F0FDF4", borderRadius:"24px", padding:"32px 24px",
            textAlign:"center", border:"1.5px solid #86EFAC" }} className="popBig">
            <div style={{ width:"80px", height:"80px", borderRadius:"20px",
              background:"#22C55E", display:"flex", alignItems:"center",
              justifyContent:"center", margin:"0 auto 20px",
              boxShadow:"0 8px 32px rgba(34,197,94,0.4)" }}>
              <Check size={40} strokeWidth={3} style={{ color:"white" }}/>
            </div>
            <p style={{ fontFamily:F.heading, fontSize:"24px", fontWeight:"900",
              color:"#15803D", marginBottom:"10px" }}>¡Jornada autorizada!</p>
            <p style={{ fontSize:"14px", color:"#166534", lineHeight:1.5 }}>
              {approvalState?.message || "El supervisor aprobó tu inicio. Iniciando jornada..."}
            </p>
          </div>
        )}

        {status === "rejected" && (
          <div style={{ background:"#FEF2F2", borderRadius:"24px", padding:"24px",
            border:"1.5px solid #FECACA" }} className="popBig">
            <div style={{ fontSize:"40px", textAlign:"center", marginBottom:"12px" }}>⚠️</div>
            <p style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"800",
              color:T.danger, textAlign:"center", marginBottom:"12px" }}>
              CORRECCIÓN REQUERIDA
            </p>
            {approvalState?.correction && (
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"16px" }}>
                <div style={{ background:"#FEE2E2", borderRadius:"12px", padding:"12px", textAlign:"center" }}>
                  <p style={{ fontSize:"9px", fontWeight:"700", color:"#991B1B", marginBottom:"4px" }}>INGRESASTE</p>
                  <p style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"900",
                    color:"#DC2626", textDecoration:"line-through" }}>
                    {approvalState.correction.entered} km
                  </p>
                </div>
                <div style={{ background:"#F0FDF4", borderRadius:"12px", padding:"12px", textAlign:"center" }}>
                  <p style={{ fontSize:"9px", fontWeight:"700", color:"#065F46", marginBottom:"4px" }}>CORRECCIÓN</p>
                  <p style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"900", color:T.ok }}>
                    {approvalState.correction.corrected} km
                  </p>
                </div>
              </div>
            )}
            <div style={{ background:"white", borderRadius:"12px", padding:"12px", marginBottom:"16px",
              border:"1px solid #FECACA" }}>
              <p style={{ fontSize:"13px", color:T.t1, fontStyle:"italic" }}>
                "{approvalState?.message || "Los datos ingresados no coinciden. Corrige y reenvía."}"
              </p>
            </div>
            <Btn onClick={() => { onApprovalResult({status:"pending",correction:null,message:""}); }}
              variant="outline">
              Corregir y Reenviar
            </Btn>
          </div>
        )}

        {/* Supervisor card */}
        {status !== "approved" && (
          <div style={{ background:"white", borderRadius:"20px", padding:"16px 18px",
            border:`1.5px solid ${T.ln}`,
            boxShadow:"0 2px 12px rgba(15,23,42,0.06)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"14px" }}>
              <div style={{ width:"44px", height:"44px", borderRadius:"14px",
                background:`linear-gradient(135deg,${T.brand},${T.brandDk})`,
                display:"flex", alignItems:"center", justifyContent:"center",
                flexShrink:0 }}>
                <User size={22} style={{ color:"white" }}/>
              </div>
              <div style={{ flex:1 }}>
                <p style={{ fontSize:"14px", fontWeight:"700", color:T.t1 }}>Carlos Rodríguez</p>
                <p style={{ fontSize:"11px", color:T.t3 }}>Supervisor de Flota · Turno mañana</p>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"5px", justifyContent:"flex-end" }}>
                  <div style={{ width:"7px", height:"7px", borderRadius:"50%",
                    background: phase===1 ? T.ok : T.warn }} className="pu"/>
                  <span style={{ fontSize:"11px", fontWeight:"700",
                    color: phase===1 ? T.ok : T.warn }}>
                    {phase===1 ? "Revisando" : "Disponible"}
                  </span>
                </div>
                <p style={{ fontSize:"10px", color:T.t4, marginTop:"2px" }}>Resp. ~2 min</p>
              </div>
            </div>
          </div>
        )}

        {/* Data submitted */}
        <div>
          <p style={{ fontSize:"11px", fontWeight:"700", color:T.t3,
            textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"12px" }}>
            Datos Enviados
          </p>
          <Card>
            {[
              { label:"Vehículo",           val: vehicleData?.plate || "TFWZ67" },
              { label:"Odómetro inicial",   val: `${journeyData?.startKm || "45.210"} km` },
              { label:"Combustible",        val: `${journeyData?.fuel || 85}%` },
              { label:"Hora solicitud",     val: new Date().toLocaleTimeString("es-CL",{hour:"2-digit",minute:"2-digit"}) },
            ].map((it,i,arr)=>(
              <div key={i} style={{ display:"flex", justifyContent:"space-between",
                padding:"14px 20px", borderBottom: i<arr.length-1?`1px solid ${T.ln}`:"none" }}>
                <span style={{ fontSize:"13px", color:T.t3, fontWeight:"500" }}>{it.label}</span>
                <span style={{ fontSize:"13px", fontWeight:"700", color:T.t1 }}>{it.val}</span>
              </div>
            ))}
          </Card>
        </div>

        {/* Demo buttons */}
        {status==="pending" && (
          <div style={{ background:`${T.info}10`, borderRadius:"16px", padding:"14px",
            border:`1px dashed ${T.info}60` }}>
            <p style={{ fontSize:"10px", fontWeight:"700", color:T.info,
              textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"8px" }}>
              Demo — simular respuesta
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px" }}>
              <button onClick={() => onApprovalResult({ status:"approved",
                  message:"Todo en regla. Puedes salir. ¡Buen viaje, Juan!" })}
                style={{ padding:"10px", borderRadius:"10px", background:"#F0FDF4",
                  border:"2px solid #BBF7D0", color:T.ok, fontSize:"12px", fontWeight:"700",cursor:"pointer" }}>
                ✓ Supervisor aprueba
              </button>
              <button onClick={() => onApprovalResult({ status:"rejected",
                  message:"El odómetro no coincide con el registro.",
                  correction:{ entered:"45.320", corrected:"45.032" } })}
                style={{ padding:"10px", borderRadius:"10px", background:"#FEF2F2",
                  border:"2px solid #FECACA", color:T.danger, fontSize:"12px", fontWeight:"700",cursor:"pointer" }}>
                ✗ Error detectado
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── SCREEN: End-of-Day Feedback ──────────────────────────── */
const WaitingFeedbackScreen = ({ go, vehicleData, journeyData, feedbackState, onFeedbackResult }) => {
  const status = feedbackState?.status || "pending";

  /* Auto-transition from "sent" → done state after a realistic delay.
     In production this would be a real push notification from the supervisor.
     We move to "confirmed" silently in background — no fake buttons for the driver. */
  useEffect(() => {
    if (status === "sent") {
      const t = setTimeout(() => {
        const hadIssue = feedbackState?.operatorReport === "issue";
        onFeedbackResult({
          ...feedbackState,
          status: "confirmed",
          tomorrowOk: !hadIssue,
          message: hadIssue
            ? "Recibido. Llega 30 min antes mañana para revisar lo reportado. Buen trabajo cerrando con el reporte."
            : "Excelente jornada. ¡Descansa bien y nos vemos mañana a las 08:00!"
        });
      }, 4500);
      return () => clearTimeout(t);
    }
  }, [status]);

  return (
    <div style={{ minHeight:"100vh", background:T.bg, display:"flex", flexDirection:"column" }}>
      <div style={{ padding:"16px 20px 12px", borderBottom:`1px solid ${T.ln}`, textAlign:"center", background:"white" }}>
        <p style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"800", color:T.t1 }}>Cierre de Jornada</p>
        <p style={{ fontSize:"12px", color:T.t3, fontWeight:"500" }}>Reporte al Supervisor</p>
      </div>

      <div style={{ padding:"24px", flex:1, display:"flex", flexDirection:"column", gap:"20px" }}>

        {/* ── STEP 1: Confirmation + journey summary (non-blocking) ── */}
        {status === "sent" && (
          <div className="popBig" style={{ display:"flex", flexDirection:"column", gap:"16px" }}>

            {/* Success card */}
            <div style={{ background:`linear-gradient(135deg, ${T.ok}, #16A34A)`,
              borderRadius:"24px", padding:"28px 24px", textAlign:"center",
              boxShadow:"0 12px 32px rgba(34,197,94,0.3)", color:"white", position:"relative", overflow:"hidden" }}>
              {/* Decorative glow */}
              <div style={{ position:"absolute", top:"-30px", right:"-30px", width:"140px", height:"140px",
                background:"radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%)", pointerEvents:"none" }}/>

              <div style={{ width:"72px", height:"72px", borderRadius:"22px",
                background:"rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center",
                margin:"0 auto 16px", border:"2px solid rgba(255,255,255,0.3)", position:"relative" }}>
                <Check size={40} strokeWidth={3} style={{ color:"white" }}/>
              </div>
              <p style={{ fontFamily:F.heading, fontSize:"22px", fontWeight:"900", marginBottom:"8px",
                letterSpacing:"0.02em", position:"relative" }}>
                Reporte enviado
              </p>
              <p style={{ fontSize:"13px", opacity:0.95, lineHeight:1.5, position:"relative" }}>
                Tu supervisor recibió tu cierre de jornada. <br/>
                Te notificaremos cuando responda.
              </p>
            </div>

            {/* Journey summary card — keep user engaged */}
            <Card>
              <div style={{ padding:"18px 20px 14px", borderBottom:`1px solid ${T.ln}` }}>
                <p style={{ fontSize:"11px", fontWeight:"800", color:T.t3,
                  textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"4px" }}>
                  Resumen de tu jornada
                </p>
                <p style={{ fontSize:"13px", color:T.t2, fontWeight:"600" }}>
                  {vehicleData?.plate || "TFWZ67"} · {new Date().toLocaleDateString("es-CL", { weekday:"long", day:"numeric", month:"long" })}
                </p>
              </div>
              {[
                { Icon: Gauge,  label:"KM recorridos",     val:`${journeyData?.totalKm || 215} km`, color:T.brand },
                { Icon: Clock,  label:"Tiempo en ruta",    val:"8h 52m", color:T.info },
                { Icon: Star,   label:"Puntaje conducción", val:"91 / 100", color:"#F59E0B" },
              ].map(({ Icon, label, val, color }, i, arr) => (
                <div key={label} style={{ padding:"14px 20px", display:"flex",
                  alignItems:"center", justifyContent:"space-between",
                  borderBottom: i<arr.length-1 ? `1px solid ${T.ln}` : "none" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                    <div style={{ width:"36px", height:"36px", borderRadius:"10px",
                      background:`${color}15`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <Icon size={18} style={{ color }}/>
                    </div>
                    <span style={{ fontSize:"13px", color:T.t2, fontWeight:"600" }}>{label}</span>
                  </div>
                  <span style={{ fontFamily:F.heading, fontSize:"16px", fontWeight:"800",
                    color:T.t1, letterSpacing:"0.02em" }}>{val}</span>
                </div>
              ))}
            </Card>

            {/* Subtle waiting indicator */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px",
              padding:"12px", borderRadius:"14px", background:"white", border:`1px solid ${T.ln}` }}>
              <div style={{ display:"flex", gap:"4px" }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{ width:"6px", height:"6px", borderRadius:"50%", background:T.brand,
                    animation:`pulse 1.4s ease-in-out ${i*0.2}s infinite` }}/>
                ))}
              </div>
              <span style={{ fontSize:"12px", color:T.t3, fontWeight:"600" }}>
                Esperando confirmación del supervisor
              </span>
            </div>

            {/* Allow user to leave — don't block them */}
            <button onClick={() => go("home")} style={{ padding:"14px",
              background:"transparent", border:"none", cursor:"pointer",
              fontSize:"13px", fontWeight:"700", color:T.t3,
              display:"flex", alignItems:"center", justifyContent:"center", gap:"6px" }}>
              Volver al inicio (te avisaremos cuando responda)
              <ChevronRight size={14}/>
            </button>
          </div>
        )}

        {/* ── STEP 2: Supervisor confirmed (when push arrives) ── */}
        {status === "confirmed" && (
          <div className="popBig" style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
            {/* Supervisor message */}
            <div style={{ background:`linear-gradient(145deg,${T.t1},${T.d3})`,
              borderRadius:"24px", padding:"24px",
              boxShadow:"0 8px 32px rgba(15,23,42,0.2)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"18px" }}>
                <div style={{ width:"44px", height:"44px", borderRadius:"50%",
                  background:`linear-gradient(135deg, ${T.brand}, ${T.brandDk})`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  flexShrink:0, color:"white", fontSize:"14px", fontWeight:"900",
                  fontFamily:F.heading, letterSpacing:"0.04em" }}>CR</div>
                <div>
                  <p style={{ fontSize:"13px", fontWeight:"700", color:"white" }}>Carlos Rodríguez</p>
                  <p style={{ fontSize:"11px", color:"rgba(255,255,255,0.6)" }}>Supervisor · hace un momento</p>
                </div>
              </div>
              <div style={{ background:"rgba(255,255,255,0.08)", borderRadius:"14px",
                padding:"14px 16px", marginBottom:"16px" }}>
                <p style={{ fontSize:"14px", color:"white", lineHeight:1.6, fontStyle:"italic" }}>
                  "{feedbackState?.message}"
                </p>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:"10px", padding:"12px 14px",
                borderRadius:"14px",
                background: feedbackState?.tomorrowOk ? `${T.ok}25` : `${T.warn}25`,
                border: `1px solid ${feedbackState?.tomorrowOk ? T.ok+"40" : T.warn+"40"}` }}>
                {feedbackState?.tomorrowOk
                  ? <CheckCircle size={20} style={{ color:T.ok, flexShrink:0 }}/>
                  : <AlertTriangle size={20} style={{ color:T.warn, flexShrink:0 }}/>}
                <p style={{ fontSize:"12px", fontWeight:"800",
                  color: feedbackState?.tomorrowOk ? T.ok : T.warn, letterSpacing:"0.04em" }}>
                  {feedbackState?.tomorrowOk ? "OPERATIVO PARA MAÑANA" : "REVISIÓN ANTES DE SALIR"}
                </p>
              </div>
            </div>

            <Btn onClick={() => go("home")} variant="primary" size="lg">
              Volver al Inicio <ChevronRight size={18}/>
            </Btn>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── SCREEN: Supervisor Approval Panel ─────────────────────── */
const ApprovalPanelScreen = ({ go }) => {
  const [resolved, setResolved] = useState({});
  const allDone = Object.keys(resolved).length >= 3;

  const REQUESTS = [
    { id:"r1", plate:"TFWZ67", driver:"Juan Pérez",   time:"08:05", km:"45.210", deltaKm:"+165", fuel:85,  alert:null },
    { id:"r2", plate:"JKL012", driver:"Carlos López", time:"07:52", km:"78.200", deltaKm:"+0",   fuel:15,  alert:"INUSUAL" },
    { id:"r3", plate:"ABC123", driver:"Ana Martínez", time:"08:10", km:"23.150", deltaKm:"+112", fuel:72,  alert:null },
  ];

  const handleAction = (id, action) => {
    setResolved(p => ({...p, [id]: action}));
  };

  const pending = REQUESTS.filter(r => !resolved[r.id]);
  const done    = REQUESTS.filter(r =>  resolved[r.id]);

  return (
    <div style={{ minHeight:"100vh", background:T.bg, display:"flex", flexDirection:"column" }}>
      <div style={{ background:"white", borderBottom:`1px solid ${T.ln}`,
        boxShadow:"0 1px 8px rgba(15,23,42,0.06)", position:"sticky", top:0, zIndex:50 }}>
        <div style={{ display:"flex", alignItems:"center", padding:"16px 20px", gap:"12px" }}>
          <button onClick={() => go("supervisor_dashboard")}
            style={{ width:"44px", height:"44px", borderRadius:"14px",
              background:T.bg, border:"none", display:"flex",
              alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <ArrowLeft size={20} strokeWidth={2.5} style={{ color:T.t1 }}/>
          </button>
          <div style={{ flex:1 }}>
            <p style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"800", color:T.t1 }}>
              Panel de Aprobaciones
            </p>
            <p style={{ fontSize:"11px", color:T.t3 }}>Transportes Del Sur S.A.</p>
          </div>
          {pending.length > 0 && (
            <div style={{ width:"32px", height:"32px", borderRadius:"50%",
              background:T.danger, display:"flex", alignItems:"center",
              justifyContent:"center" }}>
              <span style={{ fontSize:"13px", fontWeight:"800", color:"white" }}>{pending.length}</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"16px" }}>

        {allDone ? (
          /* All resolved */
          <div className="su">
            <div style={{ textAlign:"center", padding:"40px 20px 24px" }}>
              <div style={{ width:"80px", height:"80px", borderRadius:"22px",
                background:"#22C55E", display:"flex", alignItems:"center",
                justifyContent:"center", margin:"0 auto 20px",
                boxShadow:"0 8px 32px rgba(34,197,94,0.3)" }}>
                <Check size={40} strokeWidth={3} style={{ color:"white" }}/>
              </div>
              <p style={{ fontFamily:F.heading, fontSize:"24px", fontWeight:"900",
                color:T.t1, letterSpacing:"0.04em", marginBottom:"8px" }}>
                SIN PENDIENTES
              </p>
              <p style={{ fontSize:"14px", color:T.t3 }}>Todas las solicitudes fueron revisadas.</p>
            </div>

            <div>
              <p style={{ fontSize:"11px", fontWeight:"700", color:T.t3,
                textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"12px" }}>
                Resueltas Hoy
              </p>
              <Card>
                {done.map((r, i) => (
                  <div key={r.id} style={{ display:"flex", alignItems:"center", gap:"14px",
                    padding:"16px 20px", borderBottom: i<done.length-1 ? `1px solid ${T.ln}` : "none" }}>
                    <div style={{ width:"36px", height:"36px", borderRadius:"10px",
                      background:"#22C55E", display:"flex", alignItems:"center",
                      justifyContent:"center", flexShrink:0 }}>
                      <Check size={18} strokeWidth={3} style={{ color:"white" }}/>
                    </div>
                    <div style={{ flex:1 }}>
                      <p style={{ fontSize:"13px", fontWeight:"700", color:T.t1 }}>
                        {r.plate} · {r.driver}
                      </p>
                      <p style={{ fontSize:"11px", color:T.t3 }}>
                        Aprobada · {new Date().toLocaleTimeString("es-CL",{hour:"2-digit",minute:"2-digit"})}
                      </p>
                    </div>
                    <div style={{ background:"#F0FDF4", borderRadius:"8px",
                      padding:"4px 10px", border:"1px solid #BBF7D0" }}>
                      <span style={{ fontSize:"11px", fontWeight:"800", color:T.ok }}>OK</span>
                    </div>
                  </div>
                ))}
              </Card>
            </div>
          </div>
        ) : (
          <>
            {/* Alert banner */}
            <div style={{ background:"#FEF2F2", borderRadius:"16px", padding:"14px 16px",
              border:"1.5px solid #FECACA", display:"flex", gap:"12px", alignItems:"center" }}>
              <div style={{ width:"36px", height:"36px", borderRadius:"10px",
                background:"#FEE2E2", display:"flex", alignItems:"center",
                justifyContent:"center", flexShrink:0 }} className="pu">
                <Clock size={18} style={{ color:T.danger }}/>
              </div>
              <div>
                <p style={{ fontSize:"13px", fontWeight:"700", color:T.danger }}>
                  {pending.length} conductor{pending.length>1?"es":""} esperando autorización
                </p>
                <p style={{ fontSize:"11px", color:"#B91C1C", marginTop:"2px" }}>
                  Responde antes de 5 min para evitar escalación
                </p>
              </div>
            </div>

            {/* Request cards */}
            {pending.map(r => {
              const lowFuel = r.fuel < 20;
              const zeroKm  = r.deltaKm === "+0";
              const hasAlert = r.alert || lowFuel || zeroKm;
              return (
                <div key={r.id} style={{ background:"white", borderRadius:"20px",
                  border:`1.5px solid ${hasAlert ? "#FED7AA" : T.ln}`,
                  boxShadow:"0 2px 12px rgba(15,23,42,0.06)", overflow:"hidden" }}>

                  {/* Card header */}
                  <div style={{ padding:"16px 18px 12px",
                    borderBottom:`1px solid ${T.ln}`,
                    display:"flex", alignItems:"center", gap:"12px" }}>
                    <div style={{ width:"48px", height:"48px", borderRadius:"13px",
                      background: hasAlert ? "#FFF7ED" : T.brandLt,
                      border:`1.5px solid ${hasAlert?"#FED7AA":T.brand+"30"}`,
                      display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <VehicleIcon type="pickup" size={32} color={hasAlert ? "#D97706" : T.brand}/>
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"3px" }}>
                        <span style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"900",
                          color:T.t1, letterSpacing:"0.08em" }}>{r.plate}</span>
                        {hasAlert && (
                          <div style={{ background:"#FFF7ED", borderRadius:"6px",
                            padding:"3px 8px", border:"1px solid #FED7AA",
                            display:"flex", alignItems:"center", gap:"4px" }}>
                            <AlertTriangle size={11} style={{ color:"#D97706" }}/>
                            <span style={{ fontSize:"10px", fontWeight:"800", color:"#D97706",
                              letterSpacing:"0.06em" }}>INUSUAL</span>
                          </div>
                        )}
                      </div>
                      <p style={{ fontSize:"12px", color:T.t3 }}>
                        {r.driver} · Solicitó a las {r.time}
                      </p>
                    </div>
                    <div style={{ width:"8px", height:"8px", borderRadius:"50%",
                      background:T.warn }} className="pu"/>
                  </div>

                  {/* Data row */}
                  <div style={{ padding:"14px 18px", display:"grid",
                    gridTemplateColumns:"1fr 1fr 1fr auto", gap:"8px", alignItems:"center",
                    borderBottom:`1px solid ${T.ln}` }}>
                    <div>
                      <p style={{ fontSize:"9px", fontWeight:"700", color:T.t4,
                        textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"3px" }}>KM</p>
                      <p style={{ fontFamily:F.heading, fontSize:"16px", fontWeight:"900", color:T.t1 }}>
                        {r.km}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize:"9px", fontWeight:"700", color:T.t4,
                        textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"3px" }}>Δ KM</p>
                      <p style={{ fontFamily:F.heading, fontSize:"16px", fontWeight:"900",
                        color: zeroKm ? T.danger : T.ok }}>
                        {r.deltaKm}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize:"9px", fontWeight:"700", color:T.t4,
                        textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"3px" }}>COMB.</p>
                      <p style={{ fontFamily:F.heading, fontSize:"16px", fontWeight:"900",
                        color: lowFuel ? T.danger : T.t1 }}>
                        {r.fuel}%
                      </p>
                    </div>
                    {/* Quick actions */}
                    <div style={{ display:"flex", gap:"8px" }}>
                      <button onClick={() => handleAction(r.id,"rejected")}
                        style={{ width:"38px", height:"38px", borderRadius:"12px",
                          background:"#FEE2E2", border:"none", display:"flex",
                          alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
                        <X size={16} style={{ color:T.danger }}/>
                      </button>
                      <button onClick={() => handleAction(r.id,"approved")}
                        style={{ width:"38px", height:"38px", borderRadius:"12px",
                          background:"#22C55E", border:"none", display:"flex",
                          alignItems:"center", justifyContent:"center", cursor:"pointer",
                          boxShadow:"0 3px 10px rgba(34,197,94,0.35)" }}>
                        <Check size={16} strokeWidth={3} style={{ color:"white" }}/>
                      </button>
                    </div>
                  </div>

                  {/* Anomaly explanation */}
                  {hasAlert && (
                    <div style={{ padding:"10px 18px",
                      background: zeroKm ? "#FEF2F2" : "#FFF7ED" }}>
                      <p style={{ fontSize:"11px", fontWeight:"600",
                        color: zeroKm ? T.danger : "#D97706" }}>
                        {zeroKm ? "⚠️ ΔKM=0: El vehículo no registra movimiento. Verificar odómetro." : ""}
                        {lowFuel && !zeroKm ? "⚠️ Combustible crítico (15%). Requiere reabastecimiento." : ""}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Resolved */}
            {done.length > 0 && (
              <div>
                <p style={{ fontSize:"11px", fontWeight:"700", color:T.t3,
                  textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"10px" }}>
                  Ya resueltas
                </p>
                {done.map(r => (
                  <div key={r.id} style={{ background:"white", borderRadius:"14px",
                    padding:"14px 16px", border:`1px solid ${T.ln}`,
                    display:"flex", alignItems:"center", gap:"12px", marginBottom:"8px" }}>
                    <div style={{ width:"32px", height:"32px", borderRadius:"9px",
                      background: resolved[r.id]==="approved" ? "#F0FDF4" : "#FEF2F2",
                      display:"flex", alignItems:"center", justifyContent:"center" }}>
                      {resolved[r.id]==="approved"
                        ? <Check size={16} style={{ color:T.ok }}/>
                        : <X size={16} style={{ color:T.danger }}/>}
                    </div>
                    <div style={{ flex:1 }}>
                      <p style={{ fontSize:"13px", fontWeight:"700", color:T.t1 }}>
                        {r.plate} · {r.driver}
                      </p>
                      <p style={{ fontSize:"11px", color:T.t3 }}>
                        {resolved[r.id]==="approved" ? "Aprobada" : "Rechazada"} · {r.time}
                      </p>
                    </div>
                    <Pill color={resolved[r.id]==="approved"?T.ok:T.danger}>
                      {resolved[r.id]==="approved"?"OK":"Rechazado"}
                    </Pill>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

/* ─── SCREEN 10: Active Journey ────────────────────────────── */
const ActiveJourneyScreen = ({ go, vehicleData, journeyData }) => {
  const [mins, setMins] = useState(0);
  const [showSOS, setShowSOS] = useState(false);
  const [sosPressed, setSosPressed] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setMins(m=>m+1), 60000);
    return () => clearInterval(t);
  },[]);

  const elapsed = `${Math.floor(mins/60)}h ${String(mins%60).padStart(2,"0")}m`;

  const handleSOS = () => {
    setSosPressed(true);
    // Auto-close modal 3 seconds after alert is sent
    setTimeout(() => { setSosPressed(false); setShowSOS(false); }, 3000);
  };

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, paddingBottom:"100px", position:"relative" }}>
      {/* SOS Modal */}
      {showSOS && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.85)", zIndex:200,
          display:"flex", alignItems:"center", justifyContent:"center", padding:"24px" }}>
          <div className="pop" style={{ background:"white", borderRadius:"32px", padding:"32px", width:"100%", maxWidth:"360px" }}>
            <div style={{ textAlign:"center", marginBottom:"24px" }}>
              <div style={{ width:"72px", height:"72px", borderRadius:"50%", background:"#fef2f2",
                display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px" }}>
                <AlertOctagon size={36} style={{ color:T.danger }}/>
              </div>
              <div style={{ fontFamily:F.heading, fontSize:"24px", fontWeight:"900", color:T.t1,
                letterSpacing:"0.05em" }}>EMERGENCIA SOS</div>
              <p style={{ color:T.t3, fontSize:"14px", marginTop:"8px", lineHeight:1.5 }}>
                Se enviará tu ubicación GPS al centro de control y contactos de emergencia.
              </p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
              {sosPressed ? (
                <div style={{ padding:"16px", background:"#fef2f2", borderRadius:"16px",
                  textAlign:"center", color:T.danger }}>
                  <CheckCircle size={24} style={{ margin:"0 auto 8px" }}/>
                  <p style={{ fontWeight:"800", fontSize:"14px" }}>Alerta enviada · Ayuda en camino</p>
                </div>
              ) : (
                <Btn variant="sos" onClick={handleSOS} size="lg">
                  <Radio size={20}/> ENVIAR ALERTA SOS
                </Btn>
              )}
              <Btn variant="ghost" onClick={() => setShowSOS(false)}>Cancelar</Btn>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div style={{ background:`linear-gradient(160deg,${T.d1} 0%,${T.d2} 70%,#0a2030 100%)`,
        padding:"52px 24px 28px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute",top:"-50px",right:"-50px",width:"180px",height:"180px",
          background:`${T.brandGlow}`,borderRadius:"50%",filter:"blur(50px)",pointerEvents:"none" }}/>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px" }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"6px" }}>
              <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:T.ok }} className="pu"/>
              <span style={{ fontSize:"11px", fontWeight:"700", color:T.d4, textTransform:"uppercase",
                letterSpacing:"0.12em" }}>Jornada Activa</span>
            </div>
            <div style={{ fontFamily:F.heading, fontSize:"26px", fontWeight:"900", color:"white",
              letterSpacing:"0.04em" }}>
              {vehicleData?.type==="pickup"?"CAMIONETA":vehicleData?.type==="truck"?"CAMIÓN":vehicleData?.type==="van"?"FURGÓN":"MAQUINARIA"}
            </div>
            <p style={{ color:T.d4, fontSize:"13px", fontWeight:"600", marginTop:"2px" }}>
              {vehicleData?.plate || "TFWZ67"} · Inicio: {journeyData?.startTime || "08:05 AM"}
            </p>
          </div>
          {/* SOS trigger */}
          <button onClick={() => setShowSOS(true)} style={{ width:"52px", height:"52px", borderRadius:"50%",
            background:"rgba(239,68,68,0.15)", border:`2px solid rgba(239,68,68,0.4)`,
            display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
            <AlertOctagon size={22} style={{ color:T.danger }}/>
          </button>
        </div>

        {/* Live stats row */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"8px" }}>
          {[
            { Icon:Clock,       val:elapsed,                             label:"Tiempo" },
            { Icon:Gauge,       val:`${journeyData?.startKm||"45.210"}`, label:"Km Inicio" },
            { Icon:Fuel,        val:`${journeyData?.fuel||85}%`,         label:"Combustible" },
            { Icon:ShieldCheck, val:"0",                                 label:"Incidentes" },
          ].map(({ Icon, val, label }) => (
            <div key={label} style={{ background:T.glass, borderRadius:"16px",
              padding:"12px 8px", textAlign:"center", border:`1px solid ${T.glassBorder}`,
              backdropFilter:"blur(8px)" }}>
              <Icon size={16} style={{ color:T.brandMd, margin:"0 auto 6px" }}/>
              <div style={{ fontFamily:F.heading, fontSize:"14px", fontWeight:"800", color:"white",
                letterSpacing:"0.03em" }}>{val}</div>
              <div style={{ fontSize:"9px", fontWeight:"700", color:T.d5, textTransform:"uppercase",
                letterSpacing:"0.08em", marginTop:"2px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding:"20px 24px", display:"flex", flexDirection:"column", gap:"20px", marginTop:"-16px" }}>

        {/* Map placeholder */}
        <div style={{ background:"white", borderRadius:"22px", overflow:"hidden",
          border:`1px solid ${T.ln}`, height:"176px", position:"relative",
          boxShadow:"0 4px 20px rgba(15,23,42,0.08)" }}>
          <svg width="100%" height="176" viewBox="0 0 380 176" style={{ position:"absolute", inset:0 }}>
            <defs>
              <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8F5E9"/>
                <stop offset="100%" stopColor="#E3F2FD"/>
              </linearGradient>
            </defs>
            <rect width="380" height="176" fill="url(#mapGrad)"/>
            {/* Roads */}
            <rect x="0" y="70" width="380" height="36" rx="0" fill="#CBD5E1" opacity=".5"/>
            <rect x="0" y="76" width="380" height="24" rx="0" fill="white" opacity=".6"/>
            <rect x="170" y="0" width="40" height="176" fill="#CBD5E1" opacity=".4"/>
            <rect x="176" y="0" width="28" height="176" fill="white" opacity=".5"/>
            {/* Road dashes */}
            {[0,40,80,120,160,200,240,280,320].map(x=>(
              <rect key={x} x={x+5} y="84" width="28" height="4" rx="2" fill="#94A3B8" opacity=".6"/>
            ))}
            {/* Location dot with rings */}
            <circle cx="190" cy="88" r="28" fill={T.brand} opacity=".08"/>
            <circle cx="190" cy="88" r="18" fill={T.brand} opacity=".15"/>
            <circle cx="190" cy="88" r="10" fill={T.brand}/>
            <circle cx="190" cy="88" r="5" fill="white"/>
            {/* Building blocks */}
            <rect x="20" y="20" width="50" height="40" rx="4" fill="#B0BEC5" opacity=".5"/>
            <rect x="80" y="10" width="70" height="50" rx="4" fill="#90A4AE" opacity=".4"/>
            <rect x="230" y="20" width="60" height="35" rx="4" fill="#B0BEC5" opacity=".5"/>
            <rect x="300" y="15" width="65" height="45" rx="4" fill="#90A4AE" opacity=".4"/>
            <rect x="20" y="120" width="55" height="36" rx="4" fill="#B0BEC5" opacity=".4"/>
            <rect x="300" y="118" width="65" height="40" rx="4" fill="#90A4AE" opacity=".3"/>
            {/* Route line */}
            <path d="M 40 88 Q 130 88 190 88 Q 260 88 320 60" stroke={T.brand}
              strokeWidth="3" fill="none" strokeDasharray="8 4" opacity=".7"/>
            <text x="190" y="158" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="700"
              fontFamily="system-ui">Santiago, Sector 4A</text>
          </svg>
          {/* Map overlay chips */}
          <div style={{ position:"absolute", top:"12px", right:"12px", background:"white",
            borderRadius:"12px", padding:"6px 10px",
            boxShadow:"0 2px 12px rgba(15,23,42,0.12)",
            display:"flex", alignItems:"center", gap:"6px" }}>
            <Navigation size={12} style={{ color:T.brand }}/>
            <span style={{ fontSize:"11px", fontWeight:"700", color:T.t2 }}>GPS Activo</span>
          </div>
          <div style={{ position:"absolute", top:"12px", left:"12px", background:`${T.brand}E8`,
            borderRadius:"10px", padding:"5px 10px" }}>
            <span style={{ fontSize:"10px", fontWeight:"800", color:"white", letterSpacing:"0.05em" }}>EN RUTA</span>
          </div>
        </div>

        {/* Timeline */}
        <Card>
          <div style={{ padding:"20px 20px 4px" }}>
            <SectionLabel>Línea de Tiempo</SectionLabel>
          </div>
          <div style={{ padding:"0 20px 20px" }}>
            {[
              { time:"08:05", label:"Jornada Iniciada", desc:"Sector 4A · Apertura registrada", ok:true },
              { time:"08:12", label:"GPS Establecido", desc:"Precisión 2.4m · Señal 4G", ok:true },
              { time:"Ahora", label:"En Ruta", desc:`Tiempo activo: ${elapsed}`, ok:true, active:true },
            ].map((ev,i,arr) => (
              <div key={i} style={{ display:"flex", gap:"14px", position:"relative",
                paddingBottom: i<arr.length-1 ? "20px" : 0 }}>
                {i<arr.length-1 && <div style={{ position:"absolute", top:"20px", left:"9px",
                  bottom:0, width:"2px", background:T.ln }}/>}
                <div style={{ width:"20px", height:"20px", borderRadius:"50%", flexShrink:0, zIndex:1,
                  background: ev.active ? T.brand : T.ok,
                  border:`3px solid ${ev.active ? T.brandLt : "#dcfce7"}` }}/>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                    <span style={{ fontSize:"10px", fontWeight:"800", color:T.t4 }}>{ev.time}</span>
                    <span style={{ fontSize:"14px", fontWeight:"700", color: ev.active ? T.t1 : T.t2 }}>{ev.label}</span>
                    {ev.active && <Pill color={T.ok}>EN CURSO</Pill>}
                  </div>
                  <p style={{ fontSize:"12px", color:T.t3, marginTop:"2px" }}>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick incident report */}
        <Card>
          <div style={{ padding:"20px" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"14px" }}>
              <p style={{ fontFamily:F.heading, fontSize:"14px", fontWeight:"800", color:T.t1,
                letterSpacing:"0.04em" }}>REPORTAR INCIDENTE</p>
              <Pill color={T.ok}>0 hoy</Pill>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"8px" }}>
              {[
                { id:"incident_accident",  Icon:AlertOctagon,  label:"Accidente",  color:"#EF4444", bg:"#fef2f2", brd:"#fecaca" },
                { id:"incident_mechanic",  Icon:Wrench,        label:"Mecánico",   color:T.brand,   bg:T.brandLt,  brd:`${T.brand}30` },
                { id:"incident_near_miss", Icon:AlertTriangle, label:"Casi Acc.",  color:"#D97706", bg:"#fffbeb", brd:"#fde68a" },
                { id:"incident_sanction",  Icon:FileText,      label:"Sanción",    color:T.t3,      bg:T.bg,       brd:T.ln },
              ].map(opt => (
                <button key={opt.id} onClick={() => go(opt.id)}
                  className="btn-press"
                  style={{ padding:"12px 4px", borderRadius:"14px",
                    border:`1.5px solid ${opt.brd}`, background:opt.bg,
                    display:"flex", flexDirection:"column", alignItems:"center", gap:"6px",
                    cursor:"pointer", transition:"all 0.15s" }}>
                  <opt.Icon size={20} style={{ color:opt.color }} strokeWidth={2.2}/>
                  <span style={{ fontSize:"11px", fontWeight:"800", color:T.t1, lineHeight:1.2,
                    textAlign:"center" }}>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* End journey — first capture final dashboard data (photo or manual), like at start */}
        <Btn variant="danger" onClick={() => go("end_camera")} size="lg">
          <Square size={18} fill="currentColor"/> Finalizar Jornada
        </Btn>
      </div>
    </div>
  );
};

/* ─── SCREEN: Vehicle Report (pre-cierre) ──────────────────── */
const REPORT_CATEGORIES = [
  { id:"mechanical", Icon: Settings,      label:"Mecánico",       defaultSev:"major",   desc:"Motor, transmisión, suspensión" },
  { id:"tires",      Icon: RefreshCw,     label:"Neumáticos",     defaultSev:"major",   desc:"Presión, desgaste, pinchazos"  },
  { id:"brakes",     Icon: Square,        label:"Frenos",         defaultSev:"critical",desc:"Respuesta, ruidos, vibración"  },
  { id:"electrical", Icon: Zap,           label:"Eléctrico",      defaultSev:"minor",   desc:"Luces, batería, instrumentos"  },
  { id:"bodywork",   Icon: Truck,         label:"Carrocería",     defaultSev:"minor",   desc:"Golpes, rayaduras, puertas"    },
  { id:"engine",     Icon: AlertOctagon,  label:"Motor / Temp.",  defaultSev:"critical",desc:"Sobrecalentamiento, humo"      },
  { id:"leaks",      Icon: Fuel,          label:"Pérdidas",       defaultSev:"major",   desc:"Aceite, agua, combustible"     },
  { id:"other",      Icon: Wrench,        label:"Otro",           defaultSev:"minor",   desc:"Cualquier otra situación"      },
];

const SEV = {
  minor:    { label:"Menor",    color:"#F59E0B", bg:"#fffbeb", border:"#fde68a", tomorrow:"available",
              Icon: AlertTriangle, msg:"El vehículo puede operar, pero debe revisarse a la brevedad." },
  major:    { label:"Mayor",    color:"#EF4444", bg:"#fef2f2", border:"#fecaca", tomorrow:"pending",
              Icon: AlertOctagon, msg:"Requiere revisión antes de operar. Empresa notificada." },
  critical: { label:"Crítico",  color:"#7F1D1D", bg:"#fef2f2", border:"#ef4444", tomorrow:"blocked",
              Icon: ZapOff, msg:"Vehículo fuera de servicio. No puede operar hasta resolución." },
};

const VehicleReportScreen = ({ go, vehicleData, onReportSubmit }) => {
  const [step, setStep]         = useState(0); // 0=¿problema? 1=categorías 2=detalle 3=resumen 4=enviado
  const [hasIssue, setHasIssue] = useState(null);
  const [selected, setSelected] = useState([]);   // array de ids
  const [sevMap, setSevMap]     = useState({});   // { catId: 'minor'|'major'|'critical' }
  const [notes, setNotes]       = useState("");
  const [sending, setSending]   = useState(false);

  const toggleCat = id => {
    setSelected(p => p.includes(id) ? p.filter(x=>x!==id) : [...p,id]);
    if(!sevMap[id]) {
      const def = REPORT_CATEGORIES.find(c=>c.id===id)?.defaultSev || "minor";
      setSevMap(p => ({...p, [id]: def}));
    }
  };
  const setSev = (id, sev) => setSevMap(p => ({...p, [id]: sev}));

  // Worst severity across selected
  const worstSev = selected.length === 0 ? "minor"
    : selected.some(id => sevMap[id]==="critical") ? "critical"
    : selected.some(id => sevMap[id]==="major") ? "major" : "minor";

  const tomorrowStatus = !hasIssue ? "available"
    : worstSev === "critical" ? "blocked"
    : worstSev === "major"    ? "pending"
    : "available";

  const TomorrowBanner = () => {
    const cfg = {
      available: { bg:"#f0fdf4", border:"#bbf7d0", color:T.ok,      Icon: CheckCircle,    line1:"Disponible Mañana",     line2:"Vehículo apto para operar." },
      pending:   { bg:"#fffbeb", border:"#fde68a", color:"#92400e", Icon: AlertTriangle,  line1:"Pendiente Autorización", line2:"Empresa debe revisar antes de aprobar." },
      blocked:   { bg:"#fef2f2", border:"#fecaca", color:T.danger,  Icon: AlertOctagon,   line1:"Fuera de Servicio",      line2:"No puede operar hasta que empresa resuelva." },
    }[tomorrowStatus];
    return (
      <div style={{ padding:"16px 18px", borderRadius:"16px", background:cfg.bg,
        border:`1.5px solid ${cfg.border}`, display:"flex", gap:"14px", alignItems:"center" }}>
        <div style={{ width:"44px", height:"44px", borderRadius:"13px",
          background:`${cfg.color}18`, display:"flex", alignItems:"center", justifyContent:"center",
          flexShrink:0 }}>
          <cfg.Icon size={24} style={{ color:cfg.color }} strokeWidth={2.4}/>
        </div>
        <div>
          <p style={{ fontFamily:F.heading, fontSize:"16px", fontWeight:"900",
            color:cfg.color, letterSpacing:"0.02em" }}>{cfg.line1}</p>
          <p style={{ fontSize:"12px", color:cfg.color, fontWeight:"600",
            marginTop:"3px", opacity:0.85, lineHeight:1.4 }}>{cfg.line2}</p>
        </div>
      </div>
    );
  };

  const handleSend = () => {
    setSending(true);
    setTimeout(() => {
      onReportSubmit && onReportSubmit({ hasIssue, selected, sevMap, notes, tomorrowStatus, worstSev });
      setSending(false);
      setStep(4);
    }, 1600);
  };

  /* ── Step 0: ¿Problema? ── */
  if(step === 0) return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, display:"flex", flexDirection:"column" }}>

      {/* Dark header — consistent with ActiveJourney */}
      <div style={{ background:T.t1, paddingTop:"52px", paddingBottom:"28px", paddingLeft:"24px", paddingRight:"24px" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px" }}>
          <button onClick={() => go("active_journey")} style={{ width:"40px", height:"40px", borderRadius:"12px",
            background:"rgba(255,255,255,0.08)", border:"none", display:"flex",
            alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
            <ArrowLeft size={20} style={{ color:"white" }}/>
          </button>
          <div style={{ textAlign:"center" }}>
            <p style={{ fontSize:"11px", fontWeight:"800", color:"rgba(255,255,255,0.85)", letterSpacing:"0.14em",
              textTransform:"uppercase" }}>Cierre de Jornada</p>
          </div>
          <div style={{ width:"40px" }}/>
        </div>

        {/* Vehicle summary pill */}
        <div style={{ background:"rgba(255,255,255,0.06)", borderRadius:"16px",
          padding:"16px 18px", border:"1px solid rgba(255,255,255,0.08)",
          display:"flex", alignItems:"center", gap:"14px" }}>
          <div style={{ width:"48px", height:"48px", borderRadius:"13px",
            background:`${T.brand}25`, border:`1px solid ${T.brand}40`,
            display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <VehicleIcon type={vehicleData?.type || "pickup"} size={32} color={T.brandMd}/>
          </div>
          <div style={{ flex:1 }}>
            <p style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"900",
              color:"white", letterSpacing:"0.1em" }}>
              {vehicleData?.plate || "TFWZ67"}
            </p>
            <p style={{ fontSize:"11px", color:"rgba(255,255,255,0.7)", fontWeight:"600", marginTop:"1px" }}>
              {vehicleData?.type==="pickup"?"Camioneta":vehicleData?.type==="truck"?"Camión":vehicleData?.type==="van"?"Furgón":"Maquinaria"} · Jornada completada
            </p>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"6px",
            padding:"5px 10px", borderRadius:"20px",
            background:"rgba(245,158,11,0.18)", border:"1px solid rgba(245,158,11,0.35)" }}>
            <Clock size={11} style={{ color:"#FBBF24" }}/>
            <p style={{ fontSize:"10px", color:"#FBBF24", fontWeight:"800",
              letterSpacing:"0.06em" }}>CERRANDO</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex:1, padding:"28px 24px", display:"flex", flexDirection:"column", gap:"16px" }}>

        {/* Title */}
        <div style={{ marginBottom:"4px" }}>
          <p style={{ fontFamily:F.heading, fontSize:"24px", fontWeight:"900",
            color:T.t1, letterSpacing:"0.03em" }}>
            ¿Cómo quedó el vehículo?
          </p>
          <p style={{ fontSize:"13px", color:T.t3, fontWeight:"500", marginTop:"4px", lineHeight:1.5 }}>
            Cuéntanos en qué estado dejas la unidad para mañana.
          </p>
        </div>

        {/* Option 1 — Sin problemas (primary, full width) */}
        <button onClick={() => { setHasIssue(false); setStep(3); }}
          style={{ width:"100%", background:`linear-gradient(135deg, #059669, #047857)`,
            borderRadius:"22px", padding:"24px 22px", border:"none", cursor:"pointer",
            display:"flex", alignItems:"center", gap:"18px", textAlign:"left",
            boxShadow:"0 8px 32px rgba(5,150,105,0.28)", position:"relative", overflow:"hidden" }}>
          {/* Glow blob */}
          <div style={{ position:"absolute", top:"-30px", right:"-30px", width:"120px", height:"120px",
            background:"rgba(255,255,255,0.08)", borderRadius:"50%", pointerEvents:"none" }}/>
          <div style={{ width:"56px", height:"56px", borderRadius:"18px",
            background:"rgba(255,255,255,0.15)", display:"flex", alignItems:"center",
            justifyContent:"center", flexShrink:0 }}>
            <CheckCircle size={30} style={{ color:"white" }} strokeWidth={2}/>
          </div>
          <div style={{ flex:1 }}>
            <p style={{ fontFamily:F.heading, fontSize:"22px", fontWeight:"900",
              color:"white", letterSpacing:"0.02em", lineHeight:1 }}>
              Todo en orden
            </p>
            <p style={{ fontSize:"12px", color:"rgba(255,255,255,0.85)", fontWeight:"600", marginTop:"6px" }}>
              El vehículo está en buenas condiciones
            </p>
          </div>
          <ChevronRight size={22} style={{ color:"rgba(255,255,255,0.7)", flexShrink:0 }}/>
        </button>

        {/* Divider with label */}
        <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
          <div style={{ flex:1, height:"1px", background:T.ln }}/>
          <span style={{ fontSize:"11px", fontWeight:"700", color:T.t4, letterSpacing:"0.08em" }}>o</span>
          <div style={{ flex:1, height:"1px", background:T.ln }}/>
        </div>

        {/* Option 2 — Tuve problemas (secondary, outlined) */}
        <button onClick={() => { setHasIssue(true); setStep(1); }}
          style={{ width:"100%", background:"white", borderRadius:"22px",
            padding:"22px", border:`2px solid ${T.danger}30`, cursor:"pointer",
            display:"flex", alignItems:"center", gap:"18px", textAlign:"left",
            boxShadow:"0 4px 16px rgba(239,68,68,0.08)" }}>
          <div style={{ width:"56px", height:"56px", borderRadius:"18px",
            background:"#fef2f2", display:"flex", alignItems:"center",
            justifyContent:"center", flexShrink:0, border:`1.5px solid ${T.danger}25` }}>
            <AlertTriangle size={26} style={{ color:T.danger }} strokeWidth={2}/>
          </div>
          <div style={{ flex:1 }}>
            <p style={{ fontFamily:F.heading, fontSize:"21px", fontWeight:"900",
              color:T.danger, letterSpacing:"0.02em", lineHeight:1 }}>
              Tuve un problema
            </p>
            <p style={{ fontSize:"12px", color:"#991b1b", fontWeight:"600",
              opacity:0.8, marginTop:"6px" }}>
              Reportar falla al cierre de jornada
            </p>
          </div>
          <ChevronRight size={22} style={{ color:`${T.danger}60`, flexShrink:0 }}/>
        </button>

        {/* Footer note */}
        <div style={{ display:"flex", gap:"10px", padding:"14px 16px", borderRadius:"14px",
          background:`${T.info}0D`, border:`1px solid ${T.info}20`, marginTop:"4px" }}>
          <Info size={15} style={{ color:T.info, flexShrink:0, marginTop:"1px" }}/>
          <p style={{ fontSize:"12px", color:T.t2, lineHeight:1.55, fontWeight:"500" }}>
            La empresa es notificada automáticamente. Tu reporte queda registrado con fecha, hora y vehículo.
          </p>
        </div>
      </div>
    </div>
  );

  /* ── Step 1: Categorías ── */
  if(step === 1) return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, paddingBottom:"100px" }}>
      <TopNav onBack={() => setStep(0)} title="Tipo de Problema"
        subtitle={`${vehicleData?.plate || "Vehículo"} · Selecciona todo lo que aplique`}/>

      <div style={{ padding:"20px 24px", display:"flex", flexDirection:"column", gap:"16px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" }}>
          {REPORT_CATEGORIES.map(cat => {
            const on = selected.includes(cat.id);
            return (
              <button key={cat.id} onClick={() => toggleCat(cat.id)}
                style={{ padding:"18px 14px", borderRadius:"18px", textAlign:"left",
                  border:`2px solid ${on ? T.danger : T.ln}`,
                  background: on ? "#fef2f2" : "white",
                  boxShadow: on ? "0 4px 16px rgba(239,68,68,0.12)" : "none",
                  cursor:"pointer", position:"relative", transition:"all 0.15s" }}>
                {on && (
                  <div style={{ position:"absolute", top:"10px", right:"10px",
                    width:"20px", height:"20px", borderRadius:"50%",
                    background:T.danger, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Check size={11} strokeWidth={3} style={{ color:"white" }}/>
                  </div>
                )}
                <div style={{ width:"44px", height:"44px", borderRadius:"12px",
                  background: on ? `${T.danger}15` : `${T.brand}12`,
                  display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"10px" }}>
                  <cat.Icon size={24} style={{ color: on ? T.danger : T.brand }} strokeWidth={2.2}/>
                </div>
                <div style={{ fontFamily:F.heading, fontSize:"14px", fontWeight:"800",
                  color: on ? T.danger : T.t1, letterSpacing:"0.03em" }}>{cat.label}</div>
                <p style={{ fontSize:"10px", color:T.t3, marginTop:"3px",
                  fontWeight:"600", lineHeight:1.3 }}>{cat.desc}</p>
              </button>
            );
          })}
        </div>

        <div style={{ position:"sticky", bottom:"16px" }}>
          <Btn onClick={() => setStep(2)} disabled={selected.length===0} size="lg">
            Continuar · {selected.length} problema{selected.length!==1?"s":""} seleccionado{selected.length!==1?"s":""}
            <ChevronRight size={20}/>
          </Btn>
        </div>
      </div>
    </div>
  );

  /* ── Step 2: Severidad + notas ── */
  if(step === 2) return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, paddingBottom:"100px" }}>
      <TopNav onBack={() => setStep(1)} title="Severidad y Detalle"
        subtitle="Indica la gravedad de cada problema"/>

      <div style={{ padding:"20px 24px", display:"flex", flexDirection:"column", gap:"16px" }}>
        {selected.map(id => {
          const cat = REPORT_CATEGORIES.find(c=>c.id===id);
          const cur = sevMap[id] || cat.defaultSev;
          return (
            <div key={id} style={{ background:"white", borderRadius:"20px",
              border:`1px solid ${T.ln}`, overflow:"hidden" }}>
              {/* Header */}
              <div style={{ padding:"16px 20px", borderBottom:`1px solid ${T.ln}`,
                display:"flex", alignItems:"center", gap:"12px" }}>
                <span style={{ fontSize:"22px" }}>{cat.icon}</span>
                <div>
                  <p style={{ fontSize:"15px", fontWeight:"800", color:T.t1 }}>{cat.label}</p>
                  <p style={{ fontSize:"11px", color:T.t3, fontWeight:"600" }}>{cat.desc}</p>
                </div>
              </div>
              {/* Severity selector */}
              <div style={{ padding:"14px 20px" }}>
                <p style={{ fontSize:"10px", fontWeight:"800", color:T.t3,
                  textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"10px" }}>
                  Gravedad
                </p>
                <div style={{ display:"flex", gap:"8px" }}>
                  {Object.entries(SEV).map(([key, cfg]) => (
                    <button key={key} onClick={() => setSev(id, key)}
                      style={{ flex:1, padding:"10px 6px", borderRadius:"12px",
                        border:`2px solid ${cur===key ? cfg.color : T.ln}`,
                        background: cur===key ? cfg.bg : T.bg,
                        cursor:"pointer", transition:"all 0.15s" }}>
                      <div style={{ fontSize:"14px", marginBottom:"3px" }}>{cfg.icon}</div>
                      <div style={{ fontSize:"11px", fontWeight:"800",
                        color: cur===key ? cfg.color : T.t3 }}>{cfg.label}</div>
                    </button>
                  ))}
                </div>
                {/* Description of selected severity */}
                <p style={{ fontSize:"11px", color:SEV[cur].color, fontWeight:"600",
                  marginTop:"10px", padding:"8px 12px", borderRadius:"10px",
                  background:SEV[cur].bg, border:`1px solid ${SEV[cur].border}` }}>
                  {SEV[cur].msg}
                </p>
              </div>
            </div>
          );
        })}

        {/* Notes */}
        <div>
          <p style={{ fontSize:"11px", fontWeight:"800", color:T.t3, textTransform:"uppercase",
            letterSpacing:"0.1em", marginBottom:"10px" }}>
            Observaciones adicionales (opcional)
          </p>
          <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={3}
            placeholder="Describe con más detalle qué ocurrió, cuándo y dónde..."
            style={{ width:"100%", padding:"16px", borderRadius:"16px",
              border:`1.5px solid ${T.ln}`, background:"white", fontSize:"14px",
              resize:"none", fontFamily:F.body, color:T.t1 }}/>
        </div>

        {/* Tomorrow preview */}
        <TomorrowBanner/>

        <Btn onClick={() => setStep(3)} size="lg">
          Ver resumen <ChevronRight size={20}/>
        </Btn>
      </div>
    </div>
  );

  /* ── Step 3: Resumen y envío ── */
  if(step === 3) return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, paddingBottom:"100px" }}>
      <TopNav onBack={() => hasIssue ? setStep(2) : setStep(0)}
        title="Resumen del Reporte" subtitle="Revisa antes de enviar"/>

      <div style={{ padding:"20px 24px", display:"flex", flexDirection:"column", gap:"16px" }}>

        {/* Vehicle + driver row */}
        <div style={{ background:"white", borderRadius:"18px", border:`1px solid ${T.ln}`,
          padding:"18px 20px", display:"flex", alignItems:"center", gap:"14px" }}>
          <div style={{ width:"48px", height:"48px", borderRadius:"14px", background:T.brandLt,
            display:"flex", alignItems:"center", justifyContent:"center" }}>
            <VehicleIcon type={vehicleData?.type || "pickup"} size={32} color={T.brand}/>
          </div>
          <div style={{ flex:1 }}>
            <p style={{ fontFamily:F.heading, fontSize:"17px", fontWeight:"900",
              color:T.t1, letterSpacing:"0.08em" }}>{vehicleData?.plate || "TFWZ67"}</p>
            <p style={{ fontSize:"12px", color:T.t3, fontWeight:"600" }}>
              Juan Pérez · {new Date().toLocaleDateString("es-CL")}
            </p>
          </div>
          <Pill color={!hasIssue ? T.ok : worstSev==="critical" ? T.danger : T.warn}>
            {!hasIssue ? "Sin fallas" : `${selected.length} problema${selected.length!==1?"s":""}`}
          </Pill>
        </div>

        {/* Problems list */}
        {hasIssue && selected.length > 0 && (
          <div style={{ background:"white", borderRadius:"18px",
            border:`1px solid ${T.ln}`, overflow:"hidden" }}>
            <div style={{ padding:"14px 20px", background:T.bg,
              borderBottom:`1px solid ${T.ln}` }}>
              <p style={{ fontSize:"11px", fontWeight:"800", color:T.t3,
                textTransform:"uppercase", letterSpacing:"0.1em" }}>Problemas reportados</p>
            </div>
            {selected.map((id, i, arr) => {
              const cat = REPORT_CATEGORIES.find(c=>c.id===id);
              const sev = SEV[sevMap[id]||"minor"];
              return (
                <div key={id} style={{ padding:"14px 20px",
                  borderBottom: i<arr.length-1 ? `1px solid ${T.ln}` : "none",
                  display:"flex", alignItems:"center", gap:"12px" }}>
                  <span style={{ fontSize:"20px" }}>{cat.icon}</span>
                  <div style={{ flex:1 }}>
                    <p style={{ fontSize:"13px", fontWeight:"700", color:T.t1 }}>{cat.label}</p>
                  </div>
                  <span style={{ fontSize:"11px", fontWeight:"800", padding:"4px 10px",
                    borderRadius:"8px", background:sev.bg, color:sev.color,
                    border:`1px solid ${sev.border}` }}>
                    {sev.icon} {sev.label}
                  </span>
                </div>
              );
            })}
            {notes.trim() && (
              <div style={{ padding:"14px 20px", borderTop:`1px solid ${T.ln}`,
                background:"#fafafa" }}>
                <p style={{ fontSize:"10px", fontWeight:"800", color:T.t3,
                  textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:"6px" }}>
                  Observaciones
                </p>
                <p style={{ fontSize:"13px", color:T.t2, lineHeight:1.5 }}>{notes}</p>
              </div>
            )}
          </div>
        )}

        {/* Tomorrow status — main highlight */}
        <div>
          <p style={{ fontSize:"11px", fontWeight:"800", color:T.t3, textTransform:"uppercase",
            letterSpacing:"0.1em", marginBottom:"10px" }}>
            Disponibilidad mañana
          </p>
          <TomorrowBanner/>
        </div>

        {/* Who gets notified */}
        {hasIssue && (
          <div style={{ display:"flex", gap:"10px", padding:"14px 16px", borderRadius:"14px",
            background:`${T.info}10`, border:`1px solid ${T.info}25` }}>
            <Users size={16} style={{ color:T.info, flexShrink:0, marginTop:"2px" }}/>
            <div>
              <p style={{ fontSize:"12px", fontWeight:"700", color:T.t2 }}>
                Notificación automática a:
              </p>
              <p style={{ fontSize:"12px", color:T.t3, marginTop:"3px", lineHeight:1.5 }}>
                Supervisor de flota · Área de Mantención · Transportes Del Sur S.A.
              </p>
            </div>
          </div>
        )}

        <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
          <Btn onClick={handleSend} loading={sending} size="lg"
            variant={!hasIssue ? "success" : worstSev==="critical" ? "danger" : "primary"}>
            {!sending && <Send size={18}/>}
            {!hasIssue ? "Confirmar y cerrar jornada" : "Enviar reporte y cerrar jornada"}
          </Btn>
          <Btn variant="ghost" onClick={() => setStep(hasIssue?2:0)}>
            <ArrowLeft size={16}/> Corregir
          </Btn>
        </div>
      </div>
    </div>
  );

  /* ── Step 4: Enviado — confirmación clara y libera al conductor ── */
  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, display:"flex",
      flexDirection:"column" }}>

      {/* Header strip */}
      <div style={{ padding:"16px 20px 12px", borderBottom:`1px solid ${T.ln}`,
        textAlign:"center", background:"white" }}>
        <p style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"800", color:T.t1 }}>
          Cierre de Jornada
        </p>
        <p style={{ fontSize:"12px", color:T.t3, fontWeight:"500" }}>
          Reporte completado
        </p>
      </div>

      <div style={{ flex:1, display:"flex", flexDirection:"column",
        padding:"32px 24px 24px", gap:"20px" }}>

        {/* Success card — green like other "done" states in the app */}
        <div className="popBig" style={{
          background:`linear-gradient(135deg, ${T.ok}, #16A34A)`,
          borderRadius:"24px", padding:"32px 24px", textAlign:"center",
          boxShadow:"0 12px 32px rgba(34,197,94,0.3)", color:"white",
          position:"relative", overflow:"hidden"
        }}>
          {/* Decorative glow */}
          <div style={{ position:"absolute", top:"-30px", right:"-30px", width:"160px", height:"160px",
            background:"radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 60%)",
            pointerEvents:"none" }}/>

          <div style={{ width:"76px", height:"76px", borderRadius:"22px",
            background:"rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center",
            margin:"0 auto 18px", border:"2px solid rgba(255,255,255,0.3)", position:"relative" }}>
            <Check size={42} strokeWidth={3} style={{ color:"white" }}/>
          </div>
          <p style={{ fontFamily:F.heading, fontSize:"24px", fontWeight:"900", marginBottom:"10px",
            letterSpacing:"0.03em", position:"relative" }}>
            ¡Jornada cerrada!
          </p>
          <p style={{ fontSize:"14px", opacity:0.95, lineHeight:1.5, position:"relative" }}>
            Tu reporte fue enviado al supervisor. <br/>
            Ya puedes terminar tu día.
          </p>
        </div>

        {/* Supervisor feedback preview — sets expectation that real feedback is coming */}
        <div style={{ borderRadius:"18px", overflow:"hidden",
          background:"white", border:`1px solid ${T.ln}`,
          boxShadow:"0 2px 12px rgba(15,23,42,0.05)" }}>
          {/* Header strip */}
          <div style={{ padding:"12px 16px", background:T.bg2,
            borderBottom:`1px solid ${T.ln}`, display:"flex", alignItems:"center", gap:"8px" }}>
            <MessageSquare size={14} style={{ color:T.brand }}/>
            <span style={{ fontSize:"10px", fontWeight:"800", color:T.t3,
              textTransform:"uppercase", letterSpacing:"0.12em" }}>
              Próximo paso
            </span>
          </div>

          {/* Body */}
          <div style={{ padding:"16px", display:"flex", gap:"12px", alignItems:"flex-start" }}>
            {/* Supervisor avatar */}
            <div style={{ width:"42px", height:"42px", borderRadius:"50%",
              background:`linear-gradient(135deg, ${T.brand}, ${T.brandDk})`,
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"white", fontSize:"13px", fontWeight:"900", fontFamily:F.heading,
              letterSpacing:"0.04em", flexShrink:0,
              boxShadow:`0 4px 10px ${T.brandGlow}` }}>
              CR
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <p style={{ fontSize:"13px", fontWeight:"800", color:T.t1, marginBottom:"2px" }}>
                Carlos Rodríguez te enviará un mensaje
              </p>
              <p style={{ fontSize:"11px", color:T.t3, fontWeight:"600", marginBottom:"10px" }}>
                Supervisor de Flota · Suele responder en menos de 30 min
              </p>
              <p style={{ fontSize:"12px", color:T.t2, lineHeight:1.5 }}>
                Te confirmará el cierre de tu jornada y el estado del vehículo para mañana.
                Lo verás en tus notificaciones.
              </p>
            </div>
          </div>
        </div>

        {/* Tomorrow status pill — only if blocked, important info */}
        {tomorrowStatus === "blocked" && (
          <div style={{ padding:"14px 16px", borderRadius:"16px",
            background:"#FEF2F2", border:`1px solid #FECACA`,
            display:"flex", gap:"12px", alignItems:"flex-start" }}>
            <AlertTriangle size={20} style={{ color:T.danger, flexShrink:0, marginTop:"1px" }}/>
            <div style={{ flex:1 }}>
              <p style={{ fontSize:"12px", fontWeight:"800", color:T.danger, marginBottom:"3px",
                textTransform:"uppercase", letterSpacing:"0.06em" }}>
                Vehículo no disponible mañana
              </p>
              <p style={{ fontSize:"12px", color:"#991B1B", lineHeight:1.5 }}>
                Espera la confirmación del supervisor antes de tu próximo turno.
              </p>
            </div>
          </div>
        )}

        {/* Spacer pushes button to bottom */}
        <div style={{ flex:1 }}/>

        {/* Primary action: liberate the user */}
        <Btn onClick={() => go("home")} size="lg">
          Volver al Inicio <ChevronRight size={20}/>
        </Btn>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   PANTALLAS DE ESPERA DEL OPERADOR
   ═══════════════════════════════════════════════════════════════ */

/* ─── Pantalla: Esperando autorización del Supervisor ─────── */
/* ─── SCREEN 11: Profile ───────────────────────────────────── */
const ProfileScreen = ({ go }) => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("Juan Pérez");
  const [phone, setPhone] = useState("+56 9 8765 4321");
  const [email, setEmail] = useState("juan.perez@empresa.cl");
  const [license, setLicense] = useState("B · C1 · D");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setEditMode(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const Field = ({ label, value, onChange, editable=true }) => (
    <div style={{ padding:"16px 20px", borderBottom:`1px solid ${T.ln}` }}>
      <p style={{ fontSize:"10px", fontWeight:"700", color:T.t3, textTransform:"uppercase",
        letterSpacing:"0.1em", marginBottom:"6px" }}>{label}</p>
      {editMode && editable ? (
        <input value={value} onChange={e => onChange(e.target.value)}
          style={{ width:"100%", padding:"10px 14px", borderRadius:"12px",
            border:`1.5px solid ${T.brand}`, fontSize:"15px", fontWeight:"600",
            background:T.brandLt, color:T.t1, fontFamily:F.body }}/>
      ) : (
        <p style={{ fontSize:"15px", fontWeight:"600", color:T.t1 }}>{value}</p>
      )}
    </div>
  );

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, paddingBottom:"100px" }}>
      <TopNav onBack={() => go("home")} title="Mi Perfil" subtitle="Información del Conductor"
        right={
          <button onClick={() => editMode ? handleSave() : setEditMode(true)}
            style={{ padding:"8px 16px", borderRadius:"12px", border:"none",
              background: editMode ? T.brand : T.ln,
              color: editMode ? "white" : T.t1,
              fontSize:"13px", fontWeight:"700", cursor:"pointer" }}>
            {editMode ? "Guardar" : "Editar"}
          </button>
        }/>

      {/* Avatar header */}
      <div style={{ background:`linear-gradient(160deg,${T.d1},${T.d2})`, padding:"32px 24px 48px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-60px", right:"-60px", width:"180px", height:"180px",
          background:`${T.brand}18`, borderRadius:"50%", filter:"blur(40px)" }}/>
        <div style={{ display:"flex", alignItems:"center", gap:"20px", position:"relative" }}>
          <div style={{ position:"relative" }}>
            <div style={{ width:"80px", height:"80px", borderRadius:"24px",
              background:`linear-gradient(135deg, ${T.brand}, ${T.brandDk})`,
              display:"flex", alignItems:"center", justifyContent:"center",
              boxShadow:`0 8px 24px ${T.brandGlow}` }}>
              <User size={40} style={{ color:"white" }}/>
            </div>
            <div style={{ position:"absolute", bottom:"-4px", right:"-4px", width:"20px", height:"20px",
              borderRadius:"50%", background:T.ok, border:`3px solid ${T.t1}`,
              display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Check size={10} strokeWidth={4} style={{ color:"white" }}/>
            </div>
          </div>
          <div>
            <div style={{ fontFamily:F.heading, fontSize:"24px", fontWeight:"900", color:"white",
              letterSpacing:"0.03em" }}>{name}</div>
            <p style={{ color:T.d4, fontSize:"13px", fontWeight:"600", marginTop:"2px" }}>
              Conductor Certificado · 4 años
            </p>
            <div style={{ display:"flex", gap:"8px", marginTop:"10px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"4px", padding:"4px 10px",
                background:"rgba(255,255,255,0.08)", borderRadius:"20px" }}>
                <Star size={12} style={{ color:T.warn }} fill={T.warn}/>
                <span style={{ fontSize:"11px", fontWeight:"700", color:"white" }}>4.9</span>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:"4px", padding:"4px 10px",
                background:"rgba(255,255,255,0.08)", borderRadius:"20px" }}>
                <Award size={12} style={{ color:T.brand }}/>
                <span style={{ fontSize:"11px", fontWeight:"700", color:"white" }}>Élite</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {saved && (
        <div className="pop" style={{ margin:"16px 24px 0", padding:"14px 18px",
          background:"#f0fdf4", border:"1px solid #bbf7d0", borderRadius:"16px",
          display:"flex", alignItems:"center", gap:"10px" }}>
          <CheckCircle size={18} style={{ color:T.ok }}/>
          <span style={{ fontSize:"13px", fontWeight:"700", color:T.ok }}>
            Perfil actualizado correctamente
          </span>
        </div>
      )}

      <div style={{ padding:"0 24px", marginTop:"-24px", display:"flex", flexDirection:"column", gap:"20px" }}>
        {/* Credential card — Identity card pattern */}
        <div style={{
          background:`linear-gradient(135deg, ${T.brandDk} 0%, ${T.brand} 50%, #0E8378 100%)`,
          borderRadius:"22px",
          padding:"22px 24px 20px",
          boxShadow:`0 12px 36px ${T.brandGlow}, 0 0 0 1px rgba(255,255,255,0.08) inset`,
          position:"relative",
          overflow:"hidden"
        }}>
          {/* Decorative pattern — subtle radial highlights */}
          <div style={{ position:"absolute", top:"-40px", right:"-40px", width:"160px", height:"160px",
            background:"radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)",
            pointerEvents:"none" }}/>
          <div style={{ position:"absolute", bottom:"-30px", left:"-30px", width:"120px", height:"120px",
            background:"radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)",
            pointerEvents:"none" }}/>

          {/* Header row: brand + chip */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
            marginBottom:"18px", position:"relative" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
              <ShieldCheck size={16} style={{ color:"white", strokeWidth:2.5 }}/>
              <span style={{ fontSize:"10px", fontWeight:"800", color:"white",
                letterSpacing:"0.18em", textTransform:"uppercase" }}>
                Credencial Geopulse
              </span>
            </div>
            {/* Chip-style icon (like a credit card) */}
            <div style={{ width:"34px", height:"26px", borderRadius:"6px",
              background:"linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.12))",
              border:"1px solid rgba(255,255,255,0.25)",
              display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"1fr 1fr", gap:"1px",
              padding:"4px" }}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{ background:"rgba(255,255,255,0.25)", borderRadius:"1px" }}/>
              ))}
            </div>
          </div>

          {/* Main RUT block */}
          <div style={{ position:"relative" }}>
            <p style={{ fontSize:"10px", fontWeight:"800", color:"rgba(255,255,255,0.92)",
              textTransform:"uppercase", letterSpacing:"0.22em", marginBottom:"8px" }}>
              RUT Nacional
            </p>
            <p style={{ fontFamily:F.heading, fontSize:"26px", fontWeight:"900", color:"white",
              letterSpacing:"0.16em", lineHeight:1,
              textShadow:"0 2px 8px rgba(0,0,0,0.15)" }}>
              12.345.678-9
            </p>
          </div>

          {/* Divider */}
          <div style={{ height:"1px", background:"rgba(255,255,255,0.22)", margin:"18px 0 14px",
            position:"relative" }}/>

          {/* Sub-info row */}
          <div style={{ display:"flex", justifyContent:"space-between", gap:"12px", position:"relative" }}>
            <div>
              <p style={{ fontSize:"9px", color:"rgba(255,255,255,0.85)", fontWeight:"700",
                textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"4px" }}>
                Licencia
              </p>
              <p style={{ fontSize:"14px", fontWeight:"800", color:"white", fontFamily:F.heading,
                letterSpacing:"0.04em" }}>{license}</p>
            </div>
            <div>
              <p style={{ fontSize:"9px", color:"rgba(255,255,255,0.85)", fontWeight:"700",
                textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"4px" }}>
                Vence
              </p>
              <p style={{ fontSize:"14px", fontWeight:"800", color:"white", fontFamily:F.heading,
                letterSpacing:"0.02em" }}>Mar 2027</p>
            </div>
            <div>
              <p style={{ fontSize:"9px", color:"rgba(255,255,255,0.85)", fontWeight:"700",
                textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"4px" }}>
                Estado
              </p>
              <div style={{ display:"flex", alignItems:"center", gap:"5px",
                padding:"3px 8px", background:"rgba(255,255,255,0.95)", borderRadius:"10px",
                marginTop:"-1px" }}>
                <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:T.ok }} className="pu"/>
                <span style={{ fontSize:"11px", fontWeight:"800", color:T.brandDk,
                  letterSpacing:"0.04em" }}>Vigente</span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal info */}
        <div>
          <SectionLabel>Datos Personales</SectionLabel>
          <Card>
            <Field label="Nombre Completo" value={name} onChange={setName}/>
            <Field label="Teléfono" value={phone} onChange={setPhone}/>
            <Field label="Correo Electrónico" value={email} onChange={setEmail}/>
            <Field label="Tipos de Licencia" value={license} onChange={setLicense} editable={false}/>
            <div style={{ padding:"16px 20px" }}>
              <p style={{ fontSize:"10px", fontWeight:"700", color:T.t3, textTransform:"uppercase",
                letterSpacing:"0.1em", marginBottom:"6px" }}>Empresa</p>
              <p style={{ fontSize:"15px", fontWeight:"600", color:T.t1 }}>Transportes Del Sur S.A.</p>
            </div>
          </Card>
        </div>

        {/* Preferences */}
        {(() => {
          const TogglePref = ({ label, sub, defaultOn, last }) => {
            const [tog, setTog] = useState(defaultOn);
            return (
              <div style={{ padding:"16px 20px", display:"flex", alignItems:"center",
                justifyContent:"space-between",
                borderBottom: last ? "none" : `1px solid ${T.ln}` }}>
                <div>
                  <p style={{ fontSize:"14px", fontWeight:"600", color:T.t1 }}>{label}</p>
                  <p style={{ fontSize:"11px", color:T.t3, marginTop:"2px" }}>{sub}</p>
                </div>
                <button onClick={() => setTog(v=>!v)} style={{ width:"48px", height:"28px",
                  borderRadius:"14px", border:"none", cursor:"pointer", position:"relative",
                  background: tog ? T.brand : T.lnDk, transition:"background 0.2s", flexShrink:0 }}>
                  <div style={{ position:"absolute", top:"3px", left: tog ? "23px" : "3px",
                    width:"22px", height:"22px", borderRadius:"50%", background:"white",
                    boxShadow:"0 1px 4px rgba(0,0,0,0.2)", transition:"left 0.2s" }}/>
                </button>
              </div>
            );
          };
          return (
            <div>
              <SectionLabel>Preferencias</SectionLabel>
              <Card>
                <TogglePref label="Notificaciones Push" sub="Alertas de ruta y jornada" defaultOn={true}/>
                <TogglePref label="SMS de Verificación" sub="Login con código SMS" defaultOn={true}/>
                <TogglePref label="Modo Ahorro de Batería" sub="Reduce GPS en pausa" defaultOn={false} last/>
              </Card>
            </div>
          );
        })()}

        {/* Danger zone */}
        <Card style={{ padding:"20px" }}>
          <button onClick={() => go("login")} style={{ width:"100%", display:"flex",
            alignItems:"center", gap:"12px", padding:"14px", borderRadius:"14px",
            background:"#fef2f2", border:"1px solid #fecaca", cursor:"pointer" }}>
            <LogOut size={18} style={{ color:T.danger }}/>
            <span style={{ fontSize:"14px", fontWeight:"700", color:T.danger }}>
              Cerrar Sesión
            </span>
          </button>
        </Card>
      </div>
    </div>
  );
};

/* ─── SCREEN 12: Journey History ───────────────────────────── */
const HistoryScreen = ({ go }) => {
  const [filter, setFilter] = useState("all");
  const [exportMsg, setExportMsg] = useState(false);
  const handleExport = () => {
    setExportMsg(true);
    setTimeout(() => setExportMsg(false), 2500);
  };

  const journeys = [
    { id:1, date:"Hoy, Martes 15 Abr", plate:"TFWZ67", type:"Camioneta",
      start:"08:05", end:"17:22", km:"214 km", fuel:"88 → 32%",
      score:94, status:"ok", incidents:0 },
    { id:2, date:"Lunes 14 Abr", plate:"TFWZ67", type:"Camioneta",
      start:"07:58", end:"16:45", km:"198 km", fuel:"100 → 41%",
      score:89, status:"ok", incidents:0 },
    { id:3, date:"Viernes 11 Abr", plate:"ABC123", type:"Camión",
      start:"08:15", end:"18:30", km:"276 km", fuel:"100 → 28%",
      score:71, status:"warn", incidents:1 },
    { id:4, date:"Jueves 10 Abr", plate:"TFWZ67", type:"Camioneta",
      start:"08:02", end:"17:10", km:"203 km", fuel:"100 → 38%",
      score:96, status:"ok", incidents:0 },
    { id:5, date:"Miércoles 9 Abr", plate:"XYZ789", type:"Maquinaria",
      start:"07:45", end:"15:20", km:"89 km", fuel:"100 → 62%",
      score:88, status:"ok", incidents:0 },
  ];

  const filters = [
    { id:"all", label:"Todas" },
    { id:"ok", label:"Sin incidentes" },
    { id:"warn", label:"Con alerta" },
  ];

  const filtered = filter === "all" ? journeys : journeys.filter(j => j.status === filter);
  const totalKm = journeys.reduce((s,j) => s + parseInt(j.km),0);
  const avgScore = Math.round(journeys.reduce((s,j) => s + j.score, 0) / journeys.length);

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, paddingBottom:"100px" }}>
      <TopNav onBack={() => go("home")} title="Historial de Jornadas" subtitle="Últimos 30 días"/>

      {/* Summary strip */}
      <div style={{ background:`linear-gradient(145deg,${T.d1},${T.d2})`, padding:"20px 24px 36px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"12px" }}>
          {[
            { label:"Jornadas", val: String(journeys.length), icon:"📋", color:T.brandMd },
            { label:"KM Total", val:`${totalKm.toLocaleString("es-CL")}`, icon:"🛣️", color:T.warn },
            { label:"Puntaje Prom.", val:`${avgScore}`, icon:"⭐", color:T.ok },
          ].map(({ label, val, icon, color }) => (
            <div key={label} style={{ background:T.glass, borderRadius:"18px",
              padding:"16px 12px", textAlign:"center", border:`1px solid ${T.glassBorder}`,
              backdropFilter:"blur(8px)" }}>
              <div style={{ fontSize:"22px", marginBottom:"8px" }}>{icon}</div>
              <div style={{ fontFamily:F.heading, fontSize:"22px", fontWeight:"900",
                color:"white", letterSpacing:"0.03em" }}>{val}</div>
              <div style={{ fontSize:"10px", color:T.d5, fontWeight:"700",
                textTransform:"uppercase", letterSpacing:"0.08em", marginTop:"3px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding:"0 24px", marginTop:"-16px" }}>
        {/* Filter tabs */}
        <div style={{ display:"flex", background:"white", borderRadius:"16px", padding:"4px",
          border:`1px solid ${T.ln}`, marginBottom:"20px" }}>
          {filters.map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)} style={{ flex:1, padding:"10px",
              borderRadius:"12px", fontSize:"12px", fontWeight:"700", border:"none",
              background: filter===f.id ? T.brand : "transparent",
              color: filter===f.id ? "white" : T.t3,
              transition:"all 0.2s" }}>{f.label}</button>
          ))}
        </div>

        {/* Journey cards */}
        <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
          {filtered.map(j => (
            <Card key={j.id} style={{ overflow:"visible" }}>
              {/* Top bar */}
              <div style={{ padding:"16px 20px",
                borderBottom:`1px solid ${T.ln}`,
                display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div>
                  <p style={{ fontSize:"12px", fontWeight:"700", color:T.t3 }}>{j.date}</p>
                  <div style={{ display:"flex", alignItems:"center", gap:"8px", marginTop:"4px" }}>
                    <span style={{ fontFamily:F.heading, fontSize:"16px", fontWeight:"800",
                      color:T.t1, letterSpacing:"0.08em" }}>{j.plate}</span>
                    <span style={{ fontSize:"11px", color:T.t4 }}>·</span>
                    <span style={{ fontSize:"12px", color:T.t3, fontWeight:"600" }}>{j.type}</span>
                  </div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontFamily:F.heading, fontSize:"22px", fontWeight:"900",
                    color: j.score >= 90 ? T.ok : j.score >= 75 ? T.warn : T.danger }}>
                    {j.score}
                  </div>
                  <div style={{ fontSize:"10px", color:T.t4, fontWeight:"600" }}>PUNTAJE</div>
                </div>
              </div>

              {/* Stats row */}
              <div style={{ padding:"14px 20px", display:"grid",
                gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:"0" }}>
                {[
                  { icon:"🕐", label:"Inicio", val:j.start },
                  { icon:"🏁", label:"Fin", val:j.end },
                  { icon:"📏", label:"KM", val:j.km },
                  { icon:"⛽", label:"Combustible", val:j.fuel },
                ].map(({ icon, label, val }, i) => (
                  <div key={label} style={{ textAlign:"center",
                    borderRight: i < 3 ? `1px solid ${T.ln}` : "none",
                    padding:"0 8px" }}>
                    <div style={{ fontSize:"16px", marginBottom:"4px" }}>{icon}</div>
                    <div style={{ fontSize:"11px", fontWeight:"700", color:T.t1 }}>{val}</div>
                    <div style={{ fontSize:"9px", color:T.t4, fontWeight:"600",
                      textTransform:"uppercase", letterSpacing:"0.06em" }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              {(j.incidents > 0 || j.status === "warn") && (
                <div style={{ padding:"12px 20px", background:"#fffbeb",
                  borderTop:`1px solid #fef3c7`,
                  display:"flex", alignItems:"center", gap:"8px" }}>
                  <AlertTriangle size={14} style={{ color:T.warn }}/>
                  <span style={{ fontSize:"12px", fontWeight:"700", color:T.warn }}>
                    {j.incidents} incidente{j.incidents!==1?"s":""} registrado{j.incidents!==1?"s":""}
                  </span>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Export */}
        <button onClick={handleExport} style={{ marginTop:"16px", width:"100%", display:"flex", alignItems:"center",
          justifyContent:"center", gap:"8px", padding:"16px", borderRadius:"16px",
          background:"white", border:`1.5px dashed ${T.lnDk}`, color:T.t3,
          fontSize:"13px", fontWeight:"700", cursor:"pointer" }}>
          <Download size={16}/> Exportar historial (PDF)
        </button>
        {exportMsg && (
          <div className="pop" style={{ marginTop:"10px", padding:"12px 16px",
            background:"#f0fdf4", border:"1px solid #bbf7d0", borderRadius:"14px",
            display:"flex", alignItems:"center", gap:"10px" }}>
            <CheckCircle size={16} style={{ color:T.ok }}/>
            <span style={{ fontSize:"13px", fontWeight:"700", color:T.ok }}>
              Historial exportado correctamente (PDF)
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── SCREEN 13: Performance ───────────────────────────────── */
const PerformanceScreen = ({ go }) => {
  const bars = [68,82,59,91,74,88,95];
  const days = ["L","M","X","J","V","S","D"];
  const mx = Math.max(...bars);
  const [period, setPeriod] = useState("week");

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, paddingBottom:"100px" }}>
      {/* Header */}
      <div style={{ background:"white", padding:"0", borderBottom:`1px solid ${T.ln}` }}>
        <TopNav onBack={() => go("home")} title="Mi Historial" subtitle="Tu desempeño y jornadas"
          right={
            <button onClick={() => go("history")}
              style={{ width:"44px", height:"44px", borderRadius:"14px", background:T.bg,
                border:`1px solid ${T.ln}`, display:"flex", alignItems:"center",
                justifyContent:"center", color:T.t2, cursor:"pointer" }}>
              <List size={20}/>
            </button>
          }/>
        <div style={{ padding:"12px 24px 20px" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"16px" }}>
            <div>
              <div style={{ fontFamily:F.heading, fontSize:"28px", fontWeight:"900", color:T.t1,
                letterSpacing:"0.02em" }}>DESEMPEÑO</div>
              <p style={{ color:T.t3, fontSize:"13px", fontWeight:"600" }}>Juan Pérez · ID 12.345.678-9</p>
            </div>
            <div style={{ width:"48px", height:"48px", borderRadius:"16px", background:T.brandLt,
              display:"flex", alignItems:"center", justifyContent:"center", color:T.brand }}>
              <BarChart3 size={24}/>
            </div>
          </div>
          <div style={{ display:"flex", background:T.bg, borderRadius:"12px", padding:"4px" }}>
            {[{id:"week",label:"Semana"},{id:"month",label:"Mes"},{id:"year",label:"Año"}].map(p => (
              <button key={p.id} onClick={() => setPeriod(p.id)} style={{ flex:1, padding:"10px",
                borderRadius:"9px", fontSize:"13px", fontWeight:"700", border:"none",
                background: period===p.id ? "white" : "transparent",
                color: period===p.id ? T.t1 : T.t3,
                boxShadow: period===p.id ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>{p.label}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding:"24px", display:"flex", flexDirection:"column", gap:"20px" }}>

        {/* Score card */}
        <div style={{ background:`linear-gradient(135deg, ${T.t1}, #1E3A5F)`, borderRadius:"24px",
          padding:"28px", position:"relative", overflow:"hidden", boxShadow:"0 8px 32px rgba(0,0,0,0.2)" }}>
          <div style={{ position:"absolute", top:"-40px", right:"-40px", width:"140px", height:"140px",
            background:`${T.brand}18`, borderRadius:"50%", filter:"blur(30px)" }}/>
          <p style={{ fontSize:"11px", fontWeight:"700", color:T.d4, letterSpacing:"0.15em",
            textTransform:"uppercase", marginBottom:"6px" }}>Puntaje de Seguridad</p>
          <div style={{ display:"flex", alignItems:"flex-end", gap:"10px", marginBottom:"20px" }}>
            <span style={{ fontFamily:F.heading, fontSize:"64px", fontWeight:"900", color:"white",
              letterSpacing:"-2px", lineHeight:1 }}>87</span>
            <span style={{ fontSize:"18px", fontWeight:"700", color:T.d4, marginBottom:"8px" }}>/100</span>
          </div>

          {/* Score breakdown */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"12px" }}>
            {[
              { label:"Velocidad", val:"92", ok:true },
              { label:"Puntualidad", val:"96", ok:true },
              { label:"Consumo", val:"78", ok:false },
            ].map(({ label, val, ok }) => (
              <div key={label} style={{ background:"rgba(255,255,255,0.07)", borderRadius:"14px", padding:"12px" }}>
                <div style={{ fontFamily:F.heading, fontSize:"22px", fontWeight:"900",
                  color: ok ? T.ok : T.warn, lineHeight:1, marginBottom:"4px" }}>{val}</div>
                <div style={{ fontSize:"10px", color:T.d4, fontWeight:"600" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart */}
        <Card>
          <div style={{ padding:"20px" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"20px" }}>
              <div style={{ fontFamily:F.heading, fontSize:"16px", fontWeight:"800", color:T.t1,
                letterSpacing:"0.04em" }}>DISTANCIA DIARIA (KM)</div>
              <span style={{ fontSize:"12px", fontWeight:"600", color:T.t3 }}>Últimos 7 días</span>
            </div>
            <div style={{ display:"flex", alignItems:"flex-end", gap:"8px", height:"110px" }}>
              {bars.map((v,i) => (
                <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:"8px", height:"100%" }}>
                  <div style={{ width:"100%", borderRadius:"10px 10px 6px 6px",
                    height:`${(v/mx)*100}%`, marginTop:"auto",
                    background: i===6 ? T.brand : T.bg, border:`1px solid ${i===6?"transparent":T.ln}`,
                    boxShadow: i===6 ? `0 4px 16px ${T.brandGlow}` : "none",
                    transition:"height 0.6s ease", position:"relative" }}>
                    {i===6 && (
                      <div style={{ position:"absolute", top:"-24px", left:"50%", transform:"translateX(-50%)",
                        background:T.brand, color:"white", borderRadius:"6px", padding:"2px 6px",
                        fontSize:"10px", fontWeight:"800", whiteSpace:"nowrap" }}>{v}</div>
                    )}
                  </div>
                  <span style={{ fontSize:"10px", fontWeight:"800", color:i===6?T.brand:T.t4 }}>{days[i]}</span>
                </div>
              ))}
            </div>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
              marginTop:"16px", padding:"12px 0", borderTop:`1px solid ${T.ln}` }}>
              <span style={{ fontSize:"12px", color:T.t3 }}>Total semanal</span>
              <span style={{ fontFamily:F.heading, fontSize:"16px", fontWeight:"900", color:T.t1,
                letterSpacing:"0.03em" }}>3.847 KM</span>
            </div>
          </div>
        </Card>

        {/* Stat grid */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
          {[
            { Icon:Calendar, label:"Jornadas", val:"23", sub:"este mes", ok:true },
            { Icon:Gauge,    label:"KM Totales", val:"14.820", sub:"acumulados", ok:true },
            { Icon:Clock,    label:"Puntualidad", val:"96%", sub:"a tiempo", ok:true },
            { Icon:ShieldCheck, label:"Incidencias", val:"0", sub:"sin reportes", ok:true },
          ].map(({ Icon, label, val, sub, ok }) => (
            <Card key={label} style={{ padding:"20px" }}>
              <div style={{ width:"36px", height:"36px", borderRadius:"12px", background:T.brandLt,
                display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"12px" }}>
                <Icon size={18} style={{ color:T.brand }}/>
              </div>
              <div style={{ fontFamily:F.heading, fontSize:"24px", fontWeight:"900", color:T.t1,
                letterSpacing:"0.02em", lineHeight:1, marginBottom:"4px" }}>{val}</div>
              <div style={{ fontSize:"11px", fontWeight:"700", color:T.t3, textTransform:"uppercase",
                letterSpacing:"0.05em" }}>{label}</div>
              <div style={{ fontSize:"11px", color:T.t4, marginTop:"2px" }}>{sub}</div>
            </Card>
          ))}
        </div>

        {/* Rankings */}
        <div>
          <SectionLabel>Ranking de Conductores</SectionLabel>
          <Card>
            {[
              { rank:"🥇", name:"Roberto M.", score:94 },
              { rank:"🥈", name:"Juan Pérez", score:87, me:true },
              { rank:"🥉", name:"Carlos L.", score:85 },
            ].map((r,i,arr) => (
              <div key={r.name} style={{ display:"flex", alignItems:"center", gap:"14px",
                padding:"16px 20px", borderBottom: i<arr.length-1 ? `1px solid ${T.ln}` : "none",
                background: r.me ? T.brandLt : "transparent" }}>
                <span style={{ fontSize:"20px" }}>{r.rank}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:"14px", fontWeight:"700", color:T.t1 }}>
                    {r.name} {r.me && <span style={{ fontSize:"10px", color:T.brand, fontWeight:"800" }}>YO</span>}
                  </div>
                  <div style={{ height:"4px", background:T.ln, borderRadius:"2px", marginTop:"6px", overflow:"hidden" }}>
                    <div style={{ height:"100%", width:`${r.score}%`, borderRadius:"2px",
                      background: r.me ? T.brand : T.ok }}/>
                  </div>
                </div>
                <span style={{ fontFamily:F.heading, fontSize:"18px", fontWeight:"900",
                  color: r.me ? T.brand : T.t1 }}>{r.score}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

/* ─── SCREEN 12: Notifications ─────────────────────────────── */
const NotificationsScreen = ({ go }) => {
  const [items, setItems] = useState([
    { id:1, type:"warn", title:"Combustible bajo", msg:"Camioneta TFWZ67 al 18% de capacidad", time:"hace 12m", read:false },
    { id:2, type:"info", title:"Mantención programada", msg:"Revisión técnica el Viernes 25 Abr a las 10:00", time:"hace 1h", read:false },
    { id:3, type:"ok", title:"Jornada cerrada", msg:"Jornada del Martes 15 cerrada correctamente. 640 km.", time:"ayer", read:true },
    { id:4, type:"info", title:"Nuevo turno asignado", msg:"Turno del Jueves asignado: 08:00 - 17:00", time:"ayer", read:true },
  ]);

  const iconMap = { warn:AlertTriangle, info:Bell, ok:CheckCircle };
  const colorMap = { warn:T.warn, info:T.info, ok:T.ok };

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, paddingBottom:"100px" }}>
      <TopNav onBack={() => go("home")} title="Notificaciones"
        right={
          <button onClick={() => setItems(p => p.map(n => ({...n, read:true})))}
            style={{ padding:"8px 14px", borderRadius:"10px", background:T.bg,
            border:`1px solid ${T.ln}`, fontSize:"12px", fontWeight:"700", color:T.t3, cursor:"pointer" }}>
            Leer todo
          </button>
        }/>

      <div style={{ padding:"20px 24px", display:"flex", flexDirection:"column", gap:"12px" }}>
        {items.map(n => {
          const Icon = iconMap[n.type];
          const color = colorMap[n.type];
          return (
            <div key={n.id} style={{ display:"flex", gap:"14px", padding:"18px",
              background: n.read ? "white" : `${color}0A`,
              borderRadius:"18px", border:`1px solid ${n.read ? T.ln : `${color}30`}`,
              position:"relative", cursor:"pointer" }}
              onClick={() => setItems(p => p.map(x => x.id===n.id ? {...x,read:true} : x))}>
              <div style={{ width:"40px", height:"40px", borderRadius:"12px", flexShrink:0,
                background:`${color}18`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <Icon size={18} style={{ color }}/>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"4px" }}>
                  <p style={{ fontSize:"14px", fontWeight:"700", color:T.t1 }}>{n.title}</p>
                  {!n.read && <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:color }}/>}
                </div>
                <p style={{ fontSize:"13px", color:T.t3, lineHeight:1.4 }}>{n.msg}</p>
                <p style={{ fontSize:"11px", color:T.t4, marginTop:"6px", fontWeight:"600" }}>{n.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ─── SCREEN 14: Soporte ───────────────────────────────────── */
/* ─── INCIDENT FLOWS ───────────────────────────────────────────
   4 dedicated flows for the "Reportar Incidente" buttons during
   an active journey. Each follows the same UX pattern:
   form → sending → sent (with notification confirmation).
   Mock location is "Sector Barahona, curva 19 · El Teniente" but
   in production this comes from the device GPS.
─────────────────────────────────────────────────────────────── */

const MOCK_LOCATION = "Sector Barahona, curva 19 · El Teniente";

/* Codelco El Teniente — catálogo de lugares operacionales.
   Cubre sectores subterráneos productivos, rajo abierto, rutas internas,
   plantas, talleres, garitas y centros. En producción este array
   vendría de una API o tabla de catastro de la división. */
const CODELCO_LOCATIONS = [
  /* Sectores productivos subterráneos */
  { type:"Sector",  name:"Esmeralda · Nivel 7" },
  { type:"Sector",  name:"Esmeralda · Bypass 3" },
  { type:"Sector",  name:"Esmeralda · Acceso principal" },
  { type:"Sector",  name:"Diablo Regimiento · Nivel 5" },
  { type:"Sector",  name:"Diablo Regimiento · Acceso" },
  { type:"Sector",  name:"Reservas Norte · Nivel 8" },
  { type:"Sector",  name:"Reservas Norte · Bypass 2" },
  { type:"Sector",  name:"Pilar Norte" },
  { type:"Sector",  name:"Teniente 4 Sur" },
  { type:"Sector",  name:"Dacita" },
  { type:"Sector",  name:"Sur Andes Pipa" },
  /* Rajo abierto */
  { type:"Rajo",    name:"Rajo Sur · Acceso principal" },
  { type:"Rajo",    name:"Rajo Sur · Curva 19" },
  { type:"Rajo",    name:"Rajo Sur · Curva 20" },
  { type:"Rajo",    name:"Rajo Sur · Botadero" },
  /* Ruta interna */
  { type:"Ruta",    name:"Carretera El Cobre · km 30" },
  { type:"Ruta",    name:"Carretera El Cobre · km 45" },
  { type:"Ruta",    name:"Carretera El Cobre · km 60" },
  { type:"Ruta",    name:"Sector Barahona · curva 19" },
  { type:"Ruta",    name:"Sector Barahona · curva 20" },
  /* Plantas e industriales */
  { type:"Planta",  name:"Caletones · Fundición" },
  { type:"Planta",  name:"Colón Bajo · Concentradora" },
  { type:"Planta",  name:"Colón Alto · Maestranza" },
  /* Talleres y bases */
  { type:"Taller",  name:"Taller Codelco · Bay 1" },
  { type:"Taller",  name:"Taller Codelco · Bay 7" },
  { type:"Taller",  name:"Taller mecánico móvil" },
  /* Garitas y accesos */
  { type:"Garita",  name:"Garita 1 · Acceso Sewell" },
  { type:"Garita",  name:"Garita 3 · Carretera El Cobre" },
  { type:"Garita",  name:"Garita 5 · Colón" },
  /* Otros */
  { type:"Otro",    name:"Sewell · Campamento" },
  { type:"Otro",    name:"Centro Integrado de Operaciones (CIO)" },
  { type:"Otro",    name:"Rancagua · Base administrativa" },
];

/* SmartLocationPicker — GPS sugiere, humano confirma.
   3 estados: suggested → editing → confirmed.
   Autocompletado contra catálogo Codelco + texto libre como fallback. */
const SmartLocationPicker = () => {
  const [mode, setMode]         = useState("suggested"); // suggested | editing | confirmed
  const [location, setLocation] = useState(MOCK_LOCATION);
  const [query, setQuery]       = useState("");

  const filtered = query.trim().length > 0
    ? CODELCO_LOCATIONS.filter(l =>
        l.name.toLowerCase().includes(query.toLowerCase().trim())
      ).slice(0, 5)
    : [];

  const startEditing = () => {
    setQuery(location);
    setMode("editing");
  };

  const selectLocation = (name) => {
    setLocation(name);
    setQuery("");
    setMode("confirmed");
  };

  /* ── Estado 1: Sugerida (toca para editar) ── */
  if (mode === "suggested") {
    return (
      <button onClick={startEditing}
        style={{ width:"100%", background:`${T.brand}10`, border:`1.5px solid ${T.brand}40`,
          borderRadius:"14px", padding:"12px 14px",
          display:"flex", alignItems:"center", gap:"12px", cursor:"pointer",
          textAlign:"left", transition:"all 0.15s" }}>
        <div style={{ width:"36px", height:"36px", borderRadius:"11px", background:T.brand,
          display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
          boxShadow:`0 4px 10px ${T.brandGlow}` }}>
          <MapPin size={17} style={{ color:"white" }} strokeWidth={2.4}/>
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <p style={{ fontSize:"10px", fontWeight:"800", color:T.brandDk,
            letterSpacing:"0.06em", textTransform:"uppercase", margin:0 }}>
            Ubicación sugerida · toca para editar
          </p>
          <p style={{ fontSize:"13px", fontWeight:"700", color:T.t1, margin:"2px 0 0",
            lineHeight:1.3 }}>
            {location}
          </p>
        </div>
        <Edit3 size={15} style={{ color:T.brandDk, flexShrink:0 }} strokeWidth={2.2}/>
      </button>
    );
  }

  /* ── Estado 3: Confirmada / editada por el operario ── */
  if (mode === "confirmed") {
    return (
      <button onClick={startEditing}
        style={{ width:"100%", background:"white", border:`1px solid ${T.ln}`,
          borderRadius:"14px", padding:"12px 14px",
          display:"flex", alignItems:"center", gap:"12px", cursor:"pointer",
          textAlign:"left", transition:"all 0.15s" }}>
        <div style={{ width:"36px", height:"36px", borderRadius:"11px", background:"#EAF3DE",
          display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
          <Check size={16} style={{ color:"#3B6D11" }} strokeWidth={2.8}/>
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <p style={{ fontSize:"10px", fontWeight:"800", color:"#173404",
            letterSpacing:"0.06em", textTransform:"uppercase", margin:0 }}>
            Confirmada por el operario
          </p>
          <p style={{ fontSize:"13px", fontWeight:"700", color:T.t1, margin:"2px 0 0",
            lineHeight:1.3 }}>
            {location}
          </p>
        </div>
        <Edit3 size={14} style={{ color:T.t3, flexShrink:0 }} strokeWidth={2.2}/>
      </button>
    );
  }

  /* ── Estado 2: Editando con autocompletado ── */
  return (
    <div style={{ background:"white", border:`1.5px solid ${T.brand}`,
      borderRadius:"14px", padding:"12px 14px" }}>
      <p style={{ fontSize:"10px", fontWeight:"800", color:T.brandDk,
        letterSpacing:"0.06em", textTransform:"uppercase", margin:"0 0 8px" }}>
        Ubicación del evento
      </p>

      {/* Search input */}
      <div style={{ display:"flex", alignItems:"center", gap:"8px",
        padding:"9px 12px", background:T.bg, borderRadius:"10px",
        marginBottom:"8px" }}>
        <Search size={14} style={{ color:T.t3, flexShrink:0 }} strokeWidth={2.2}/>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus
          placeholder="Escribe el lugar (ej: Esmeralda, curva 19, garita 3)"
          style={{ flex:1, border:"none", outline:"none", background:"transparent",
            fontFamily:F.body, fontSize:"13px", color:T.t1, minWidth:0 }}/>
        {query.length > 0 && (
          <button onClick={() => setQuery("")}
            style={{ background:"none", border:"none", padding:"2px", cursor:"pointer",
              display:"flex", alignItems:"center" }}>
            <X size={14} style={{ color:T.t3 }}/>
          </button>
        )}
      </div>

      {/* Autocomplete suggestions */}
      {filtered.length > 0 && (
        <>
          <p style={{ fontSize:"9px", fontWeight:"800", color:T.t3,
            letterSpacing:"0.06em", textTransform:"uppercase", margin:"10px 0 4px" }}>
            Sugerencias · catastro Codelco
          </p>
          <div style={{ background:T.bg, borderRadius:"10px", padding:"4px",
            display:"flex", flexDirection:"column", gap:"1px" }}>
            {filtered.map(loc => (
              <button key={loc.name} onClick={() => selectLocation(loc.name)}
                style={{ background:"white", border:"none", borderRadius:"7px",
                  padding:"8px 10px", display:"flex", alignItems:"center", gap:"8px",
                  cursor:"pointer", textAlign:"left", transition:"background 0.1s" }}>
                <span style={{ fontSize:"9px", fontWeight:"800",
                  padding:"2px 6px", borderRadius:"5px",
                  background:T.brandLt, color:T.brandDk,
                  letterSpacing:"0.04em", flexShrink:0 }}>{loc.type}</span>
                <span style={{ fontSize:"12px", color:T.t1, fontWeight:"600" }}>
                  {loc.name}
                </span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* Free text fallback — only shown when there's a query */}
      {query.trim().length >= 3 && (
        <button onClick={() => selectLocation(query.trim())}
          style={{ width:"100%", marginTop:"8px",
            background:"none", border:`1px dashed ${T.ln}`, borderRadius:"10px",
            padding:"9px 12px", display:"flex", alignItems:"center", gap:"8px",
            cursor:"pointer", textAlign:"left" }}>
          <span style={{ fontSize:"14px", color:T.t3, fontWeight:"700",
            width:"14px", textAlign:"center", flexShrink:0 }}>+</span>
          <span style={{ fontSize:"12px", color:T.t2, lineHeight:1.3 }}>
            Usar <strong style={{ color:T.t1, fontWeight:"800" }}>"{query.trim()}"</strong> como texto libre
          </span>
        </button>
      )}

      {/* Cancel button */}
      <button onClick={() => { setMode("suggested"); setQuery(""); }}
        style={{ width:"100%", marginTop:"8px",
          background:"none", border:"none", padding:"6px",
          fontSize:"11px", color:T.t3, fontWeight:"700",
          cursor:"pointer", textAlign:"center" }}>
        Cancelar edición
      </button>
    </div>
  );
};

/* Reusable confirmation panel — same visual language across all flows */
const IncidentSentPanel = ({ Icon, color, bgColor, title, subtitle, notified, extra, go, bottomButton }) => (
  <div className="su" style={{ minHeight:"100vh", background:T.bg }}>
    <TopNav onBack={() => go("active_journey")} title="Reporte enviado"/>
    <div style={{ padding:"24px", display:"flex", flexDirection:"column", gap:"18px" }}>
      <Card>
        <div style={{ padding:"28px 22px", textAlign:"center" }}>
          <div className="pop" style={{ width:"72px", height:"72px", borderRadius:"50%", background:bgColor,
            margin:"0 auto 14px", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <Icon size={32} style={{ color }} strokeWidth={2.4}/>
          </div>
          <h2 style={{ fontFamily:F.heading, fontSize:"22px", fontWeight:"900", color:T.t1, margin:"0 0 6px" }}>
            {title}
          </h2>
          <p style={{ fontSize:"13px", color:T.t3, lineHeight:1.5, margin:0 }}>
            {subtitle}
          </p>
        </div>
      </Card>

      <Card>
        <div style={{ padding:"18px 20px" }}>
          <p style={{ fontSize:"11px", fontWeight:"800", color:T.t3, letterSpacing:"0.08em",
            textTransform:"uppercase", marginBottom:"12px" }}>Notificados ahora</p>
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            {notified.map((n,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                <div style={{ width:"32px", height:"32px", borderRadius:"10px", background:`${T.ok}15`,
                  display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <Check size={16} style={{ color:T.ok }} strokeWidth={3}/>
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ fontSize:"13px", fontWeight:"700", color:T.t1, margin:0 }}>{n.name}</p>
                  {n.role && <p style={{ fontSize:"11px", color:T.t3, margin:"1px 0 0" }}>{n.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {extra}

      <div style={{ marginTop:"6px" }}>
        {bottomButton ?? (
          <Btn variant="ghost" onClick={() => go("active_journey")} size="lg">
            Volver a la jornada
          </Btn>
        )}
      </div>
    </div>
  </div>
);

/* Reusable GPS banner */
const GpsBanner = () => (
  <div style={{ background:`${T.brand}10`, border:`1.5px solid ${T.brand}40`,
    borderRadius:"14px", padding:"12px 14px", display:"flex", alignItems:"center", gap:"12px" }}>
    <div style={{ width:"36px", height:"36px", borderRadius:"11px", background:T.brand,
      display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
      boxShadow:`0 4px 10px ${T.brandGlow}` }}>
      <MapPin size={17} style={{ color:"white" }} strokeWidth={2.4}/>
    </div>
    <div style={{ flex:1, minWidth:0 }}>
      <p style={{ fontSize:"10px", fontWeight:"800", color:T.brandDk, letterSpacing:"0.06em",
        textTransform:"uppercase", margin:0 }}>Ubicación auto-detectada</p>
      <p style={{ fontSize:"13px", fontWeight:"700", color:T.t1, margin:"2px 0 0", lineHeight:1.3 }}>
        {MOCK_LOCATION}
      </p>
    </div>
  </div>
);

/* ─── 1. MECÁNICO — asistencia mecánica ────────────────────── */
const IncidentMechanicScreen = ({ go }) => {
  const [step, setStep]               = useState("form"); // form | sending | sent
  const [failureType, setFailureType] = useState("motor");
  const [severity, setSeverity]       = useState(null);
  const [details, setDetails]         = useState("");

  const failureTypes = [
    { id:"motor",    label:"Motor" },
    { id:"brakes",   label:"Frenos" },
    { id:"tire",     label:"Neumático" },
    { id:"electric", label:"Eléctrico" },
    { id:"leak",     label:"Pérdida" },
    { id:"other",    label:"Otro" },
  ];

  const canSend = severity !== null;

  const handleSend = () => {
    setStep("sending");
    setTimeout(() => setStep("sent"), 1500);
  };

  if (step === "sent") {
    return (
      <IncidentSentPanel
        go={go}
        Icon={Wrench}
        color={T.brand}
        bgColor={T.brandLt}
        title="Solicitud enviada"
        subtitle="Tu equipo ya está al tanto y se está coordinando la asistencia."
        notified={[
          { name:"Carlos Rodríguez", role:"Supervisor de Flota" },
          { name:"3 mecánicos en turno", role:"Taller Codelco · El Teniente" },
        ]}
        extra={
          <Card>
            <div style={{ padding:"18px 20px" }}>
              <p style={{ fontSize:"11px", fontWeight:"800", color:T.t3, letterSpacing:"0.08em",
                textTransform:"uppercase", marginBottom:"12px" }}>Mecánico más cercano</p>
              <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                <div style={{ width:"44px", height:"44px", borderRadius:"50%",
                  background:T.brand, color:"white", display:"flex", alignItems:"center",
                  justifyContent:"center", fontFamily:F.heading, fontWeight:"800", fontSize:"14px" }}>
                  JP
                </div>
                <div style={{ flex:1 }}>
                  <p style={{ fontSize:"14px", fontWeight:"800", color:T.t1, margin:0 }}>Juan Pérez</p>
                  <p style={{ fontSize:"11px", color:T.t3, margin:"2px 0 0" }}>Mecánico móvil · Llegada estimada 18 min</p>
                </div>
                <a href="tel:+56912345678" style={{ width:"40px", height:"40px", borderRadius:"12px",
                  background:T.ok, display:"flex", alignItems:"center", justifyContent:"center",
                  textDecoration:"none", flexShrink:0 }}>
                  <Phone size={16} style={{ color:"white" }} strokeWidth={2.4}/>
                </a>
              </div>
            </div>
          </Card>
        }
      />
    );
  }

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg }}>
      <TopNav onBack={() => go("active_journey")} title="Asistencia Mecánica"
        subtitle="Notifica a supervisor y mecánicos en turno"/>
      <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"18px" }}>

        <SmartLocationPicker/>

        <Card>
          <div style={{ padding:"18px 20px" }}>
            <SectionLabel>Tipo de Falla</SectionLabel>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
              {failureTypes.map(f => {
                const active = failureType === f.id;
                return (
                  <button key={f.id} onClick={() => setFailureType(f.id)}
                    style={{ padding:"9px 16px", borderRadius:"22px",
                      border: active ? `1.5px solid ${T.brand}` : `1px solid ${T.ln}`,
                      background: active ? T.brand : "white",
                      color: active ? "white" : T.t2,
                      fontSize:"13px", fontWeight:"700", cursor:"pointer",
                      transition:"all 0.15s" }}>
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Card>

        <Card>
          <div style={{ padding:"18px 20px" }}>
            <SectionLabel>¿Puedes Continuar?</SectionLabel>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" }}>
              {[
                { id:"can_continue", title:"Sí, con cuidado", subtitle:"Necesito revisión",
                  color:"#D97706", bg:"#fffbeb", brd:"#fde68a" },
                { id:"stopped",      title:"No, detenido",   subtitle:"Necesito asistencia ya",
                  color:T.danger,    bg:"#fef2f2", brd:"#fecaca" },
              ].map(s => {
                const active = severity === s.id;
                return (
                  <button key={s.id} onClick={() => setSeverity(s.id)}
                    style={{ padding:"14px 12px", borderRadius:"14px",
                      border: active ? `2px solid ${s.color}` : `1.5px solid ${T.ln}`,
                      background: active ? s.bg : "white",
                      textAlign:"left", cursor:"pointer", transition:"all 0.15s" }}>
                    <p style={{ fontSize:"13px", fontWeight:"800",
                      color: active ? s.color : T.t1, margin:0 }}>{s.title}</p>
                    <p style={{ fontSize:"11px", color:T.t3, margin:"3px 0 0", lineHeight:1.3 }}>{s.subtitle}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </Card>

        <Card>
          <div style={{ padding:"18px 20px" }}>
            <SectionLabel>Detalle (opcional)</SectionLabel>
            <textarea
              value={details}
              onChange={e => setDetails(e.target.value)}
              placeholder="Ej: Ruido fuerte en el motor al subir cuesta"
              rows={3}
              style={{ width:"100%", padding:"12px 14px", borderRadius:"12px",
                border:`1.5px solid ${T.ln}`, fontFamily:F.body, fontSize:"13px",
                color:T.t1, resize:"vertical", outline:"none", background:T.bg,
                boxSizing:"border-box" }}/>
          </div>
        </Card>

        <Btn variant="primary" onClick={handleSend} disabled={!canSend} size="lg" loading={step==="sending"}>
          {step==="sending" ? "Enviando..." : <>Enviar solicitud <Send size={18}/></>}
        </Btn>
      </div>
    </div>
  );
};

/* ─── 2. ACCIDENTE — emergencia inmediata ──────────────────── */
const IncidentAccidentScreen = ({ go }) => {
  const [step, setStep]         = useState("form");
  const [injured, setInjured]   = useState(null);   // null | "yes" | "no"
  const [accType, setAccType]   = useState(null);
  const [operative, setOperative] = useState(null); // null | "yes" | "no"

  const types = [
    { id:"vehicle",  label:"Choque con vehículo" },
    { id:"object",   label:"Choque con objeto" },
    { id:"rollover", label:"Volcamiento" },
    { id:"fire",     label:"Incendio" },
  ];

  const canSend = injured !== null && accType !== null && operative !== null;

  const handleSend = () => {
    setStep("sending");
    setTimeout(() => setStep("sent"), 1800);
  };

  if (step === "sent") {
    const notified = [
      { name:"Carlos Rodríguez", role:"Supervisor de Flota" },
      { name:"Central de Emergencias", role:"Codelco · El Teniente" },
    ];
    if (injured === "yes") notified.push({ name:"Ambulancia despachada", role:"SAMU · ETA 12 min" });
    if (operative === "no") notified.push({ name:"Grúa solicitada", role:"Taller mecánico" });

    return (
      <IncidentSentPanel
        go={go}
        Icon={ShieldCheck}
        color={T.danger}
        bgColor="#fef2f2"
        title="Emergencia reportada"
        subtitle="Mantén la calma. Si hay heridos, presta auxilio sin moverlos. La ayuda está en camino."
        notified={notified}
      />
    );
  }

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg }}>
      <TopNav onBack={() => go("active_journey")} title="Reporte de Accidente"
        subtitle="Emergencia · respuesta inmediata"/>
      <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"18px" }}>

        {/* Critical alert banner */}
        <div style={{ background:"#fef2f2", border:`1.5px solid #fecaca`,
          borderRadius:"14px", padding:"14px 16px", display:"flex", gap:"12px" }}>
          <AlertOctagon size={22} style={{ color:T.danger, flexShrink:0, marginTop:"1px" }}/>
          <div>
            <p style={{ fontSize:"13px", fontWeight:"800", color:T.danger, margin:0 }}>
              Si hay riesgo vital, llama al 131
            </p>
            <p style={{ fontSize:"12px", color:T.t2, margin:"3px 0 0", lineHeight:1.4 }}>
              Este reporte notifica al supervisor y central de emergencias.
            </p>
          </div>
        </div>

        <SmartLocationPicker/>

        <Card>
          <div style={{ padding:"18px 20px" }}>
            <SectionLabel>¿Hay Heridos?</SectionLabel>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" }}>
              {[
                { id:"yes", label:"Sí, hay heridos", color:T.danger, bg:"#fef2f2", brd:"#fecaca" },
                { id:"no",  label:"No, todos bien",  color:T.ok,     bg:"#f0fdf4", brd:"#bbf7d0" },
              ].map(o => {
                const active = injured === o.id;
                return (
                  <button key={o.id} onClick={() => setInjured(o.id)}
                    style={{ padding:"16px 12px", borderRadius:"14px",
                      border: active ? `2px solid ${o.color}` : `1.5px solid ${T.ln}`,
                      background: active ? o.bg : "white",
                      cursor:"pointer", transition:"all 0.15s" }}>
                    <p style={{ fontSize:"13px", fontWeight:"800",
                      color: active ? o.color : T.t1, margin:0 }}>{o.label}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </Card>

        <Card>
          <div style={{ padding:"18px 20px" }}>
            <SectionLabel>Tipo de Accidente</SectionLabel>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px" }}>
              {types.map(t => {
                const active = accType === t.id;
                return (
                  <button key={t.id} onClick={() => setAccType(t.id)}
                    style={{ padding:"12px 10px", borderRadius:"12px",
                      border: active ? `2px solid ${T.danger}` : `1.5px solid ${T.ln}`,
                      background: active ? "#fef2f2" : "white",
                      fontSize:"12px", fontWeight:"700",
                      color: active ? T.danger : T.t2,
                      cursor:"pointer", transition:"all 0.15s" }}>
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Card>

        <Card>
          <div style={{ padding:"18px 20px" }}>
            <SectionLabel>¿Vehículo Operativo?</SectionLabel>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" }}>
              {[
                { id:"yes", label:"Puede moverse" },
                { id:"no",  label:"Necesita grúa" },
              ].map(o => {
                const active = operative === o.id;
                return (
                  <button key={o.id} onClick={() => setOperative(o.id)}
                    style={{ padding:"12px", borderRadius:"12px",
                      border: active ? `2px solid ${T.brand}` : `1.5px solid ${T.ln}`,
                      background: active ? T.brandLt : "white",
                      fontSize:"13px", fontWeight:"700",
                      color: active ? T.brandDk : T.t2,
                      cursor:"pointer", transition:"all 0.15s" }}>
                    {o.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Card>

        <Btn variant="sos" onClick={handleSend} disabled={!canSend} size="lg" loading={step==="sending"}>
          {step==="sending" ? "Enviando emergencia..." : <>ENVIAR EMERGENCIA <ArrowRight size={18}/></>}
        </Btn>
      </div>
    </div>
  );
};

/* ─── 3. CASI ACCIDENTE — near miss (ISO 45001) ────────────── */
const IncidentNearMissScreen = ({ go }) => {
  const [step, setStep]           = useState("form");
  const [riskType, setRiskType]   = useState(null);
  const [whatHappened, setWhat]   = useState("");
  const [suggestion, setSugg]     = useState("");

  const types = [
    { id:"vehicle", label:"Otro vehículo" },
    { id:"person",  label:"Persona" },
    { id:"equipment", label:"Equipo / maquinaria" },
    { id:"road",    label:"Condición de ruta" },
    { id:"other",   label:"Otro" },
  ];

  const canSend = riskType !== null && whatHappened.trim().length >= 10;

  const handleSend = () => {
    setStep("sending");
    setTimeout(() => setStep("sent"), 1500);
  };

  if (step === "sent") {
    return (
      <IncidentSentPanel
        go={go}
        Icon={ShieldCheck}
        color="#D97706"
        bgColor="#fffbeb"
        title="Reporte recibido"
        subtitle="Gracias por reportar. Tu aporte ayuda a prevenir accidentes futuros y mejora la seguridad de todos."
        notified={[
          { name:"Equipo HSE", role:"Prevención de Riesgos" },
          { name:"Carlos Rodríguez", role:"Supervisor de Flota" },
        ]}
      />
    );
  }

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg }}>
      <TopNav onBack={() => go("active_journey")} title="Casi Accidente"
        subtitle="Reporta para prevenir incidentes futuros"/>
      <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"18px" }}>

        {/* Educational banner */}
        <div style={{ background:"#fffbeb", border:`1.5px solid #fde68a`,
          borderRadius:"14px", padding:"14px 16px", display:"flex", gap:"12px" }}>
          <Info size={20} style={{ color:"#D97706", flexShrink:0, marginTop:"1px" }}/>
          <div>
            <p style={{ fontSize:"13px", fontWeight:"800", color:"#92400E", margin:0 }}>
              ¿Qué es un casi accidente?
            </p>
            <p style={{ fontSize:"12px", color:T.t2, margin:"4px 0 0", lineHeight:1.45 }}>
              Una situación donde estuviste cerca de tener un accidente pero no ocurrió. Reportarlo
              ayuda a identificar riesgos antes de que generen daño (ISO 45001).
            </p>
          </div>
        </div>

        <SmartLocationPicker/>

        <Card>
          <div style={{ padding:"18px 20px" }}>
            <SectionLabel>¿Qué Estuvo Involucrado?</SectionLabel>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
              {types.map(t => {
                const active = riskType === t.id;
                return (
                  <button key={t.id} onClick={() => setRiskType(t.id)}
                    style={{ padding:"9px 16px", borderRadius:"22px",
                      border: active ? `1.5px solid #D97706` : `1px solid ${T.ln}`,
                      background: active ? "#D97706" : "white",
                      color: active ? "white" : T.t2,
                      fontSize:"13px", fontWeight:"700", cursor:"pointer",
                      transition:"all 0.15s" }}>
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Card>

        <Card>
          <div style={{ padding:"18px 20px" }}>
            <SectionLabel>¿Qué Pasó?</SectionLabel>
            <textarea
              value={whatHappened}
              onChange={e => setWhat(e.target.value)}
              placeholder="Describe la situación. Ej: Vehículo cruzó sin señalizar en intersección y alcancé a frenar a tiempo."
              rows={4}
              style={{ width:"100%", padding:"12px 14px", borderRadius:"12px",
                border:`1.5px solid ${T.ln}`, fontFamily:F.body, fontSize:"13px",
                color:T.t1, resize:"vertical", outline:"none", background:T.bg,
                boxSizing:"border-box" }}/>
            <p style={{ fontSize:"11px", color:T.t3, marginTop:"6px" }}>
              Mínimo 10 caracteres · {whatHappened.length}
            </p>
          </div>
        </Card>

        <Card>
          <div style={{ padding:"18px 20px" }}>
            <SectionLabel>Sugerencia para Evitarlo (opcional)</SectionLabel>
            <textarea
              value={suggestion}
              onChange={e => setSugg(e.target.value)}
              placeholder="Ej: Instalar señalética de pare en esta intersección"
              rows={2}
              style={{ width:"100%", padding:"12px 14px", borderRadius:"12px",
                border:`1.5px solid ${T.ln}`, fontFamily:F.body, fontSize:"13px",
                color:T.t1, resize:"vertical", outline:"none", background:T.bg,
                boxSizing:"border-box" }}/>
          </div>
        </Card>

        <Btn variant="primary" onClick={handleSend} disabled={!canSend} size="lg" loading={step==="sending"}>
          {step==="sending" ? "Enviando..." : <>Reportar para análisis <Send size={18}/></>}
        </Btn>
      </div>
    </div>
  );
};

/* ─── 4. SANCIÓN — catálogo Codelco El Teniente ────────────────
   4 categorías reales:
   - Tránsito interno (velocidad, estacionamiento, vías)
   - Seguridad operacional (cinturón, vaquita anti-fatiga, EPP)
   - Documentación (licencia interna, permisos)
   - Tarjeta negra (vehículo inhabilitado · acción crítica)
─────────────────────────────────────────────────────────────── */

const SANCTION_CATEGORIES = {
  traffic: {
    id:"traffic",
    label:"Tránsito interno",
    desc:"Velocidad, estacionamiento, vías restringidas",
    Icon: Gauge,
    color:"#185FA5", bg:"#E6F1FB", brd:"#85B7EB", accent:"#0C447C", accentDk:"#042C53",
    subtypes:["Velocidad","Estacionamiento","Vías restringidas","Otro"],
    requirePhoto:false,
    showJustCulture:true,
    notified:[
      { name:"Departamento Administrativo", role:"Gestión de multas" },
      { name:"Carlos Rodríguez", role:"Supervisor de Flota" },
    ],
    confirmTitle:"Sanción registrada",
    confirmSubtitle:"Administración fue notificada para gestionar el documento.",
  },
  safety: {
    id:"safety",
    label:"Seguridad operacional",
    desc:"Cinturón, vaquita anti-fatiga, EPP",
    Icon: Shield,
    color:"#854F0B", bg:"#FAEEDA", brd:"#EF9F27", accent:"#854F0B", accentDk:"#412402",
    subtypes:["Cinturón de seguridad","Vaquita anti-fatiga","EPP","Otro"],
    requirePhoto:false,
    showJustCulture:true,
    notified:[
      { name:"Equipo HSEC", role:"Salud, Seguridad y Medio Ambiente" },
      { name:"Carlos Rodríguez", role:"Supervisor de Flota" },
    ],
    confirmTitle:"Sanción registrada",
    confirmSubtitle:"HSEC fue notificado para programar conversación de seguridad.",
  },
  documentation: {
    id:"documentation",
    label:"Documentación",
    desc:"Licencia interna vencida, permisos",
    Icon: FileText,
    color:"#3C3489", bg:"#EEEDFE", brd:"#AFA9EC", accent:"#3C3489", accentDk:"#26215C",
    subtypes:["Licencia interna Codelco","Permiso de zona","Certificaciones","Otro"],
    requirePhoto:false,
    askIfCanContinue:true,
    notified:[
      { name:"Recursos Humanos", role:"Gestión de personal" },
      { name:"Carlos Rodríguez", role:"Supervisor de Flota" },
    ],
    confirmTitle:"Documento registrado",
    confirmSubtitle:"RRHH fue notificado para regularizar tu documentación.",
  },
  black_card: {
    id:"black_card",
    label:"Tarjeta negra",
    desc:"Vehículo inhabilitado para operar",
    Icon: AlertOctagon,
    color:"#791F1F", bg:"#FCEBEB", brd:"#E24B4A", accent:"#791F1F", accentDk:"#501313",
    subtypes:["Estacionamiento prohibido","Falla mecánica grave","Documentación vencida","Otro"],
    requirePhoto:true,
    askIfCanMove:true,
    isCritical:true,
    notified:[
      { name:"Carlos Rodríguez", role:"Supervisor de Flota" },
      { name:"Mantenimiento", role:"Taller Codelco" },
      { name:"Departamento Administrativo", role:"Gestión de flota" },
    ],
    confirmTitle:"Tarjeta registrada",
    confirmSubtitle:"Jornada finalizada · vehículo bloqueado en sistema",
    autoActions:[
      "Vehículo marcado fuera de servicio",
      "Jornada cerrada con observaciones",
      "Solicitud de transporte de regreso",
    ],
    confirmButtonLabel:"Esperar transporte de regreso",
  },
};

const JUST_CULTURE_OPTIONS = [
  { id:"error",     title:"No vi o no entendí algo",      desc:"Error humano · oportunidad de aprendizaje", color:"#3B6D11", bg:"#EAF3DE", brd:"#97C459" },
  { id:"urgency",   title:"Fue por urgencia operativa",   desc:"Conversemos sobre el contexto",             color:"#854F0B", bg:"#FAEEDA", brd:"#EF9F27" },
  { id:"appeal",    title:"No estoy de acuerdo, apelo",   desc:"Inicia descargo formal",                    color:"#0C447C", bg:"#E6F1FB", brd:"#85B7EB" },
  { id:"other_jc",  title:"Otra situación",                desc:"Lo explicas en notas",                      color:T.t2,      bg:T.bg,       brd:T.ln    },
];

const IncidentSanctionScreen = ({ go }) => {
  const [step, setStep]         = useState("category"); // category | form | sending | sent
  const [category, setCategory] = useState(null);
  const [subtype, setSubtype]   = useState(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [justCulture, setJC]    = useState(null);
  const [canContinue, setCanCont] = useState(null);
  const [canMove, setCanMove]   = useState(null);
  const [notes, setNotes]       = useState("");

  const cat = category ? SANCTION_CATEGORIES[category] : null;

  const resetForm = () => {
    setSubtype(null); setHasPhoto(false); setJC(null);
    setCanCont(null); setCanMove(null); setNotes("");
  };

  const pickCategory = (id) => {
    resetForm();
    setCategory(id);
    setStep("form");
  };

  const canSend = (() => {
    if (!cat) return false;
    if (subtype === null) return false;
    if (cat.requirePhoto && !hasPhoto) return false;
    if (cat.showJustCulture && justCulture === null) return false;
    if (cat.askIfCanContinue && canContinue === null) return false;
    if (cat.askIfCanMove && canMove === null) return false;
    return true;
  })();

  const handleSend = () => {
    setStep("sending");
    setTimeout(() => setStep("sent"), 1500);
  };

  /* ── STEP 3: Confirmation ── */
  if (step === "sent" && cat) {
    return (
      <IncidentSentPanel
        go={go}
        Icon={cat.Icon}
        color={cat.color}
        bgColor={cat.bg}
        title={cat.confirmTitle}
        subtitle={cat.confirmSubtitle}
        notified={cat.notified}
        extra={
          <>
            {cat.autoActions && (
              <div style={{ background:cat.bg, borderLeft:`3px solid ${cat.color}`,
                padding:"14px 16px", borderRadius:"4px" }}>
                <p style={{ fontSize:"11px", fontWeight:"800", color:cat.accentDk,
                  letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 8px" }}>
                  Acciones automáticas ejecutadas
                </p>
                {cat.autoActions.map((a,i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"8px",
                    marginBottom:"4px" }}>
                    <Check size={14} style={{ color:cat.color }} strokeWidth={3}/>
                    <p style={{ fontSize:"12px", color:cat.accentDk, margin:0 }}>{a}</p>
                  </div>
                ))}
              </div>
            )}
            <Card>
              <div style={{ padding:"14px 18px" }}>
                <p style={{ fontSize:"11px", fontWeight:"800", color:"#0C447C",
                  letterSpacing:"0.08em", textTransform:"uppercase", margin:"0 0 6px" }}>
                  Tus derechos
                </p>
                <p style={{ fontSize:"12px", color:T.t2, margin:0, lineHeight:1.5 }}>
                  Puedes apelar este registro o iniciar descargo formal con respaldo gremial (Ley 21.719).
                </p>
              </div>
            </Card>
          </>
        }
        bottomButton={cat.confirmButtonLabel ? (
          <Btn variant="ghost" size="lg" onClick={() => go("home")}>
            {cat.confirmButtonLabel}
          </Btn>
        ) : undefined}
      />
    );
  }

  /* ── STEP 1: Category picker ── */
  if (step === "category") {
    return (
      <div className="su" style={{ minHeight:"100vh", background:T.bg }}>
        <TopNav onBack={() => go("active_journey")} title="Registrar Sanción"
          subtitle="¿Qué tipo de documento recibiste?"/>
        <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"14px" }}>

          <SmartLocationPicker/>

          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            {Object.values(SANCTION_CATEGORIES).map(c => {
              const Icon = c.Icon;
              return (
                <button key={c.id} onClick={() => pickCategory(c.id)}
                  className="btn-press"
                  style={{ padding:"14px 16px", borderRadius:"16px",
                    border: c.isCritical ? `1.5px solid ${c.brd}` : `1px solid ${T.ln}`,
                    background: c.isCritical ? c.bg : "white",
                    display:"flex", alignItems:"center", gap:"14px",
                    cursor:"pointer", transition:"all 0.15s",
                    boxShadow:"0 1px 4px rgba(15,23,42,0.05)" }}>
                  <div style={{ width:"40px", height:"40px", borderRadius:"12px",
                    background: c.isCritical ? c.color : c.bg,
                    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon size={19} style={{ color: c.isCritical ? "white" : c.color }} strokeWidth={2.4}/>
                  </div>
                  <div style={{ flex:1, minWidth:0, textAlign:"left" }}>
                    <p style={{ fontSize:"14px", fontWeight:"800",
                      color: c.isCritical ? c.accentDk : T.t1, margin:0 }}>{c.label}</p>
                    <p style={{ fontSize:"11px",
                      color: c.isCritical ? c.accent : T.t3,
                      margin:"3px 0 0", lineHeight:1.3 }}>{c.desc}</p>
                  </div>
                  {c.isCritical && (
                    <span style={{ background: c.color, color:"white", fontSize:"9px",
                      padding:"3px 8px", borderRadius:"12px", fontWeight:"800",
                      letterSpacing:"0.06em", flexShrink:0 }}>CRÍTICO</span>
                  )}
                  <ChevronRight size={16} style={{ color: c.isCritical ? c.accent : T.t3, flexShrink:0 }}/>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  /* ── STEP 2: Form per category ── */
  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg }}>
      <TopNav onBack={() => setStep("category")} title={cat.label}
        subtitle="Registrar para gestión administrativa"/>
      <div style={{ padding:"20px", display:"flex", flexDirection:"column", gap:"16px" }}>

        {/* Critical banner — only black card */}
        {cat.isCritical && (
          <div style={{ background:cat.bg, border:`1.5px solid ${cat.brd}`,
            borderRadius:"14px", padding:"14px 16px", display:"flex", gap:"12px" }}>
            <AlertOctagon size={20} style={{ color:cat.accent, flexShrink:0, marginTop:"1px" }}/>
            <div>
              <p style={{ fontSize:"13px", fontWeight:"800", color:cat.accentDk, margin:0 }}>
                Tarjeta negra recibida
              </p>
              <p style={{ fontSize:"12px", color:cat.accent, margin:"3px 0 0", lineHeight:1.4 }}>
                Tu jornada se finalizará automáticamente. Coordinaremos transporte de regreso a base.
              </p>
            </div>
          </div>
        )}

        <SmartLocationPicker/>

        {/* Photo capture */}
        <Card>
          <div style={{ padding:"18px 20px" }}>
            <SectionLabel>
              {cat.requirePhoto ? "Foto Obligatoria del Documento" : "Foto del Documento (opcional)"}
            </SectionLabel>
            <button onClick={() => setHasPhoto(!hasPhoto)}
              style={{ width:"100%", padding:"24px", borderRadius:"14px",
                border: hasPhoto
                  ? `2px solid ${T.ok}`
                  : cat.requirePhoto ? `2px dashed ${cat.brd}` : `2px dashed ${T.ln}`,
                background: hasPhoto
                  ? "#f0fdf4"
                  : cat.requirePhoto ? cat.bg : T.bg,
                display:"flex", flexDirection:"column", alignItems:"center", gap:"8px",
                cursor:"pointer", transition:"all 0.15s" }}>
              {hasPhoto
                ? <>
                    <CheckCircle size={28} style={{ color:T.ok }}/>
                    <p style={{ fontSize:"13px", fontWeight:"800", color:T.ok, margin:0 }}>
                      Foto capturada
                    </p>
                    <p style={{ fontSize:"11px", color:T.t3, margin:0 }}>Toca para volver a tomar</p>
                  </>
                : <>
                    <Camera size={28} style={{ color: cat.requirePhoto ? cat.accent : T.t3 }}/>
                    <p style={{ fontSize:"13px", fontWeight:"700",
                      color: cat.requirePhoto ? cat.accentDk : T.t2, margin:0 }}>
                      Tomar foto del documento
                    </p>
                  </>
              }
            </button>
          </div>
        </Card>

        {/* Subtype chips */}
        <Card>
          <div style={{ padding:"18px 20px" }}>
            <SectionLabel>
              {cat.isCritical ? "¿Razón de la Tarjeta?" : "Tipo Específico"}
            </SectionLabel>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
              {cat.subtypes.map(s => {
                const active = subtype === s;
                return (
                  <button key={s} onClick={() => setSubtype(s)}
                    style={{ padding:"9px 16px", borderRadius:"22px",
                      border: active ? `1.5px solid ${cat.color}` : `1px solid ${T.ln}`,
                      background: active ? cat.color : "white",
                      color: active ? "white" : T.t2,
                      fontSize:"13px", fontWeight:"700", cursor:"pointer",
                      transition:"all 0.15s" }}>
                    {s}
                  </button>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Just Culture classifier — only traffic & safety */}
        {cat.showJustCulture && (
          <Card>
            <div style={{ padding:"18px 20px" }}>
              <SectionLabel>¿Cómo lo Describirías?</SectionLabel>
              <p style={{ fontSize:"12px", color:T.t3, margin:"0 0 12px", lineHeight:1.4 }}>
                Tu honestidad ayuda a mejorar el sistema, no a sancionarte.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                {JUST_CULTURE_OPTIONS.map(o => {
                  const active = justCulture === o.id;
                  return (
                    <button key={o.id} onClick={() => setJC(o.id)}
                      style={{ padding:"12px 14px", borderRadius:"12px",
                        border: active ? `2px solid ${o.brd}` : `1.5px solid ${T.ln}`,
                        background: active ? o.bg : "white",
                        textAlign:"left", cursor:"pointer", transition:"all 0.15s" }}>
                      <p style={{ fontSize:"13px", fontWeight:"800",
                        color: active ? o.color : T.t1, margin:0 }}>{o.title}</p>
                      <p style={{ fontSize:"11px", color:T.t3, margin:"3px 0 0", lineHeight:1.3 }}>
                        {o.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </Card>
        )}

        {/* Can continue? — documentation only */}
        {cat.askIfCanContinue && (
          <Card>
            <div style={{ padding:"18px 20px" }}>
              <SectionLabel>¿Permite Seguir Operando?</SectionLabel>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" }}>
                {[
                  { id:"yes", label:"Sí, puedo continuar", color:T.ok, bg:"#f0fdf4", brd:"#bbf7d0" },
                  { id:"no",  label:"No, debo detenerme", color:T.danger, bg:"#fef2f2", brd:"#fecaca" },
                ].map(o => {
                  const active = canContinue === o.id;
                  return (
                    <button key={o.id} onClick={() => setCanCont(o.id)}
                      style={{ padding:"14px 12px", borderRadius:"12px",
                        border: active ? `2px solid ${o.color}` : `1.5px solid ${T.ln}`,
                        background: active ? o.bg : "white",
                        cursor:"pointer", transition:"all 0.15s" }}>
                      <p style={{ fontSize:"13px", fontWeight:"800",
                        color: active ? o.color : T.t1, margin:0 }}>{o.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </Card>
        )}

        {/* Can move? — black card only */}
        {cat.askIfCanMove && (
          <Card>
            <div style={{ padding:"18px 20px" }}>
              <SectionLabel>¿Vehículo Puede Moverse a Zona Segura?</SectionLabel>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" }}>
                {[
                  { id:"yes", label:"Sí, despacio",   color:T.ok,     bg:"#f0fdf4", brd:"#bbf7d0" },
                  { id:"no",  label:"No, necesita grúa", color:T.danger, bg:"#fef2f2", brd:"#fecaca" },
                ].map(o => {
                  const active = canMove === o.id;
                  return (
                    <button key={o.id} onClick={() => setCanMove(o.id)}
                      style={{ padding:"14px 12px", borderRadius:"12px",
                        border: active ? `2px solid ${o.color}` : `1.5px solid ${T.ln}`,
                        background: active ? o.bg : "white",
                        cursor:"pointer", transition:"all 0.15s" }}>
                      <p style={{ fontSize:"13px", fontWeight:"800",
                        color: active ? o.color : T.t1, margin:0 }}>{o.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </Card>
        )}

        {/* Notes */}
        <Card>
          <div style={{ padding:"18px 20px" }}>
            <SectionLabel>Notas / Contexto (opcional)</SectionLabel>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="Cuenta lo que pasó con tus palabras..."
              rows={3}
              style={{ width:"100%", padding:"12px 14px", borderRadius:"12px",
                border:`1.5px solid ${T.ln}`, fontFamily:F.body, fontSize:"13px",
                color:T.t1, resize:"vertical", outline:"none", background:T.bg,
                boxSizing:"border-box" }}/>
          </div>
        </Card>

        {/* Plain language transparency notice — Ley 21.719 compliance */}
        <Card>
          <div style={{ padding:"16px 20px" }}>
            <p style={{ fontSize:"13px", fontWeight:"800", color:T.t1, margin:"0 0 12px" }}>
              Qué pasa con esta información
            </p>

            <div style={{ display:"flex", gap:"10px", alignItems:"flex-start", marginBottom:"10px" }}>
              <div style={{ width:"26px", height:"26px", borderRadius:"8px", background:T.brandLt,
                display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <Calendar size={13} style={{ color:T.brand }} strokeWidth={2.4}/>
              </div>
              <p style={{ fontSize:"12px", color:T.t2, margin:"3px 0 0", lineHeight:1.45 }}>
                Se guarda <strong style={{ color:T.t1, fontWeight:"800" }}>12 meses</strong> y luego se borra.
              </p>
            </div>

            <div style={{ display:"flex", gap:"10px", alignItems:"flex-start", marginBottom:"10px" }}>
              <div style={{ width:"26px", height:"26px", borderRadius:"8px", background:T.brandLt,
                display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <Truck size={13} style={{ color:T.brand }} strokeWidth={2.4}/>
              </div>
              <p style={{ fontSize:"12px", color:T.t2, margin:"3px 0 0", lineHeight:1.45 }}>
                Queda asociada al <strong style={{ color:T.t1, fontWeight:"800" }}>vehículo</strong>, no a tu nombre ni a tu RUT.
              </p>
            </div>

            <div style={{ display:"flex", gap:"10px", alignItems:"flex-start", marginBottom:"12px" }}>
              <div style={{ width:"26px", height:"26px", borderRadius:"8px", background:T.brandLt,
                display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <ShieldCheck size={13} style={{ color:T.brand }} strokeWidth={2.4}/>
              </div>
              <p style={{ fontSize:"12px", color:T.t2, margin:"3px 0 0", lineHeight:1.45 }}>
                Puedes <strong style={{ color:T.t1, fontWeight:"800" }}>apelar, corregir o pedir que se borre</strong> cuando quieras.
              </p>
            </div>

            <p style={{ fontSize:"11px", color:T.t3, margin:0,
              paddingTop:"10px", borderTop:`1px solid ${T.ln}` }}>
              Más detalles legales: Ley 21.719 de Protección de Datos.
            </p>
          </div>
        </Card>

        <Btn
          variant={cat.isCritical ? "danger" : "primary"}
          onClick={handleSend} disabled={!canSend} size="lg" loading={step==="sending"}>
          {step==="sending"
            ? "Enviando..."
            : cat.isCritical
              ? <>Notificar y finalizar jornada <ArrowRight size={18}/></>
              : <>Enviar a administración <Send size={18}/></>
          }
        </Btn>
      </div>
    </div>
  );
};

const SoporteScreen = ({ go }) => {
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if(!msg.trim()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
    setTimeout(() => { setSent(false); setMsg(""); }, 5000);
  };

  const faqs = [
    { q:"¿Cómo inicio una jornada?", a:"Ve a Inicio → Iniciar Jornada → Selecciona vehículo → Foto del tablero." },
    { q:"¿Puedo ingresar datos sin cámara?", a:"Sí. En la pantalla de captura, toca 'Ingresar datos manualmente'." },
    { q:"¿Qué hago ante una emergencia?", a:"Usa el botón SOS rojo en la pantalla de jornada activa. Se notifica al centro de control." },
  ];
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="su" style={{ minHeight:"100vh", background:T.bg, paddingBottom:"100px" }}>
      <TopNav onBack={() => go("home")} title="Ayuda" subtitle="Centro de soporte Geopulse"/>
      <div style={{ background:"white", padding:"20px 24px 28px", borderBottom:`1px solid ${T.ln}` }}>
        <div style={{ display:"flex", alignItems:"center", gap:"16px" }}>
          <div style={{ width:"48px", height:"48px", borderRadius:"16px", background:T.brandLt,
            display:"flex", alignItems:"center", justifyContent:"center", color:T.brand }}>
            <LifeBuoy size={24}/>
          </div>
          <div>
            <div style={{ fontFamily:F.heading, fontSize:"22px", fontWeight:"900", color:T.t1,
              letterSpacing:"0.02em" }}>CENTRO DE SOPORTE</div>
            <p style={{ color:T.t3, fontSize:"12px" }}>Disponible 24 horas · 7 días a la semana</p>
          </div>
        </div>
        {/* Online badge */}
        <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", marginTop:"16px",
          padding:"6px 12px", background:"#f0fdf4", border:"1px solid #bbf7d0", borderRadius:"20px" }}>
          <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:T.ok }} className="pu"/>
          <span style={{ fontSize:"11px", fontWeight:"700", color:T.ok }}>Agente disponible · Resp. ~15 min</span>
        </div>
      </div>

      <div style={{ padding:"24px", display:"flex", flexDirection:"column", gap:"16px" }}>
        {/* Contact options */}
        {[
          { href:"tel:+56800123456", Icon:Phone, label:"Línea Directa 24/7", val:"+56 800 123 456", color:T.ok },
          { href:"mailto:soporte@geopulse.cl", Icon:Mail, label:"Email de Soporte", val:"soporte@geopulse.cl", color:T.info },
        ].map(({ href, Icon, label, val, color }) => (
          <a key={href} href={href} style={{ textDecoration:"none" }}>
            <Card style={{ padding:"18px 20px", display:"flex", alignItems:"center", gap:"14px",
              borderLeft:`4px solid ${color}` }}>
              <div style={{ width:"44px", height:"44px", borderRadius:"14px", background:`${color}15`,
                display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <Icon size={20} style={{ color }}/>
              </div>
              <div style={{ flex:1 }}>
                <p style={{ fontSize:"11px", fontWeight:"700", color:T.t3, textTransform:"uppercase",
                  letterSpacing:"0.08em", marginBottom:"2px" }}>{label}</p>
                <p style={{ fontSize:"15px", fontWeight:"800", color:T.t1, fontFamily:F.heading,
                  letterSpacing:"0.03em" }}>{val}</p>
              </div>
              <ChevronRight size={18} style={{ color:T.t4 }}/>
            </Card>
          </a>
        ))}

        {/* FAQ */}
        <div>
          <SectionLabel>Preguntas Frecuentes</SectionLabel>
          <Card>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i<faqs.length-1 ? `1px solid ${T.ln}` : "none" }}>
                <button onClick={() => setOpenFaq(openFaq===i ? null : i)}
                  style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                    padding:"18px 20px", border:"none", background:"transparent", textAlign:"left" }}>
                  <span style={{ fontSize:"14px", fontWeight:"600", color:T.t1, flex:1, paddingRight:"12px" }}>{faq.q}</span>
                  <ChevronDown size={16} style={{ color:T.t4, flexShrink:0,
                    transform: openFaq===i ? "rotate(180deg)" : "none", transition:"transform 0.2s" }}/>
                </button>
                {openFaq===i && (
                  <div style={{ padding:"0 20px 18px" }}>
                    <p style={{ fontSize:"13px", color:T.t3, lineHeight:1.6, background:T.bg,
                      padding:"12px 14px", borderRadius:"12px" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </Card>
        </div>

        {/* Message */}
        <div>
          <SectionLabel>Enviar Mensaje</SectionLabel>
          <Card style={{ padding:"20px" }}>
            <textarea value={msg} onChange={e => setMsg(e.target.value)}
              placeholder="Describe tu problema o consulta..." rows={4}
              style={{ width:"100%", padding:"16px", borderRadius:"16px",
                border:`1.5px solid ${T.ln}`, background:T.bg, fontSize:"14px",
                resize:"none", fontFamily:F.body, color:T.t1, marginBottom:"16px",
                display:"block" }}/>
            {sent ? (
              <div className="pop" style={{ padding:"16px", background:"#f0fdf4",
                border:"1px solid #bbf7d0", borderRadius:"14px", textAlign:"center" }}>
                <CheckCircle size={20} style={{ color:T.ok, margin:"0 auto 6px" }}/>
                <p style={{ fontWeight:"800", color:T.ok, fontSize:"14px" }}>Mensaje enviado</p>
                <p style={{ fontSize:"12px", color:T.t3, marginTop:"2px" }}>Te contactaremos pronto.</p>
              </div>
            ) : (
              <Btn onClick={handleSend} disabled={!msg.trim()} loading={loading}>
                <Send size={18}/> Enviar Mensaje
              </Btn>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   EMPRESA / COMPANY MODULE
   Screens: CompanyDashboard → CompanyVehicles → CompanyVehicleDetail
   ═══════════════════════════════════════════════════════════════ */

const COMPANY_DATA = { name:"Transportes Del Sur S.A.", rut:"76.543.210-K", fleet:12, activeToday:8 };
const PERIODS = [{ id:"day",label:"Hoy" },{ id:"week",label:"Semana" },{ id:"month",label:"Mes" },{ id:"year",label:"Año" }];

const VEHICLES = [
  { id:"v1", plate:"TFWZ67", type:"Camioneta", driver:"Juan Pérez",    status:"active",    attributes:["4x4"],
    km:{day:214,week:1040,month:4280,year:51360}, fuel:{day:24.8,week:120.5,month:496,year:5952},
    cost:{day:32200,week:156650,month:644800,year:7737600}, efficiency:11.5, score:94, incidents:0 },
  { id:"v2", plate:"ABC123",  type:"Camión",    driver:"Roberto M.",   status:"active",    attributes:["grúa"],
    km:{day:276,week:1380,month:5520,year:66240}, fuel:{day:55.2,week:276,month:1104,year:13248},
    cost:{day:71760,week:358800,month:1435200,year:17222400}, efficiency:20.0, score:71, incidents:1 },
  { id:"v3", plate:"XYZ789",  type:"Maquinaria",driver:"Carlos L.",    status:"idle",      attributes:["excavadora"],
    km:{day:0,week:89,month:356,year:4272}, fuel:{day:0,week:19.6,month:78.3,year:939.6},
    cost:{day:0,week:25480,month:101790,year:1221480}, efficiency:22.3, score:88, incidents:0 },
  { id:"v4", plate:"DEF456",  type:"Furgón",    driver:"Miguel A.",    status:"active",    attributes:["refrigerado"],
    km:{day:188,week:940,month:3760,year:45120}, fuel:{day:16.9,week:84.6,month:338.4,year:4060.8},
    cost:{day:21970,week:109980,month:439920,year:5279040}, efficiency:9.0, score:91, incidents:0 },
  { id:"v5", plate:"GHI789",  type:"Camioneta", driver:"Luis P.",      status:"maintenance", attributes:[],
    km:{day:0,week:0,month:2100,year:25200}, fuel:{day:0,week:0,month:245,year:2940},
    cost:{day:0,week:0,month:318500,year:3822000}, efficiency:11.7, score:79, incidents:2 },
  { id:"v6", plate:"JKL012",  type:"Camión",    driver:"Pedro R.",     status:"active",    attributes:["plano"],
    km:{day:310,week:1550,month:6200,year:74400}, fuel:{day:62.0,week:310,month:1240,year:14880},
    cost:{day:80600,week:403000,month:1612000,year:19344000}, efficiency:20.0, score:86, incidents:0 },
];

const fmtCLP = n => "$" + Math.round(n).toLocaleString("es-CL");
const fmtNum = (n,dec=1) => n===0?"0":n.toLocaleString("es-CL",{minimumFractionDigits:dec,maximumFractionDigits:dec});
const statusColor = s => s==="active"?"#10B981":s==="idle"?"#F59E0B":"#EF4444";
const statusLabel = s => s==="active"?"En Ruta":s==="idle"?"Disponible":"Mantención";

const useDownload = () => {
  const [downloading,setDownloading] = useState(false);
  const [downloaded,setDownloaded] = useState(false);
  const trigger = () => {
    setDownloading(true);
    setTimeout(()=>{setDownloading(false);setDownloaded(true);},1800);
    setTimeout(()=>setDownloaded(false),4500);
  };
  return {downloading,downloaded,trigger};
};

const CompanyTopBar = ({ go, title, onBack, right }) => (
  <div style={{ display:"flex", alignItems:"center", padding:"16px 20px", gap:"12px",
    background:"rgba(255,255,255,0.97)", backdropFilter:"blur(16px)",
    borderBottom:`1px solid ${T.ln}`, position:"sticky", top:0, zIndex:50 }}>
    {onBack
      ? <button onClick={onBack} style={{ width:"44px",height:"44px",borderRadius:"14px",
          border:"none",background:T.ln,color:T.t1,
          display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
          <ArrowLeft size={20} strokeWidth={2.5}/>
        </button>
      : <div style={{ width:"44px",height:"44px",borderRadius:"14px",background:T.brandLt,
          display:"flex",alignItems:"center",justifyContent:"center" }}>
          <Building2 size={22} style={{ color:T.brand }}/>
        </div>}
    <div style={{ flex:1, minWidth:0 }}>
      <div style={{ fontFamily:F.heading,fontSize:"18px",fontWeight:"800",color:T.t1,
        letterSpacing:"0.02em",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{title}</div>
      <div style={{ fontSize:"11px",fontWeight:"600",color:T.t3 }}>{COMPANY_DATA.name}</div>
    </div>
    {right||<div style={{ width:"44px" }}/>}
  </div>
);

const DlButton = ({ dl }) => (
  <button onClick={dl.trigger} style={{ width:"44px",height:"44px",borderRadius:"14px",
    background:dl.downloaded?T.ok:T.brandLt,border:"none",
    display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer" }}>
    {dl.downloading
      ? <div style={{ width:"18px",height:"18px",border:`2px solid ${T.brand}`,
          borderTopColor:"transparent",borderRadius:"50%",animation:"spin 0.7s linear infinite" }}/>
      : dl.downloaded
        ? <Check size={18} strokeWidth={3} style={{ color:"white" }}/>
        : <Download size={18} style={{ color:T.brand }}/>}
  </button>
);

const DlToast = ({ downloaded }) => downloaded ? (
  <div className="pop" style={{ margin:"12px 20px 0",padding:"12px 16px",
    background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"14px",
    display:"flex",alignItems:"center",gap:"10px" }}>
    <CheckCircle size={16} style={{ color:T.ok }}/>
    <span style={{ fontSize:"13px",fontWeight:"700",color:T.ok }}>Reporte descargado exitosamente (PDF)</span>
  </div>
) : null;

/* ─── Company Screen 1: Dashboard Ejecutivo ─────────────────── */
const CompanyDashboard = ({ go }) => {
  const [period,setPeriod] = useState("month");
  const [showLogout, setShowLogout] = useState(false);
  const dl = useDownload();

  const totals = VEHICLES.reduce((acc,v)=>({
    km:acc.km+v.km[period], fuel:acc.fuel+v.fuel[period], cost:acc.cost+v.cost[period]
  }),{km:0,fuel:0,cost:0});

  const activeCount = VEHICLES.filter(v=>v.status==="active").length;
  const avgScore    = Math.round(VEHICLES.reduce((s,v)=>s+v.score,0)/VEHICLES.length);
  const maxCost     = Math.max(...VEHICLES.map(v=>v.cost[period]));
  const pLabel      = {day:"de hoy",week:"de esta semana",month:"de este mes",year:"de este año"}[period];

  return (
    <div className="su" style={{ minHeight:"100vh",background:T.bg,paddingBottom:"32px" }}>
      <CompanyTopBar title="Dashboard Empresa"
        right={<div style={{ display:"flex",gap:"6px" }}>
          <DlButton dl={dl}/>
          <button onClick={() => setShowLogout(true)}
            style={{ width:"44px",height:"44px",borderRadius:"14px",
            background:T.ln,border:"none",display:"flex",alignItems:"center",justifyContent:"center", cursor:"pointer" }}>
            <LogOut size={18} style={{ color:T.t3 }}/>
          </button>
        </div>}/>

      <DlToast downloaded={dl.downloaded}/>

      <div style={{ padding:"20px",display:"flex",flexDirection:"column",gap:"20px" }}>

        {/* Period selector */}
        <div style={{ display:"flex",background:"white",borderRadius:"16px",
          padding:"4px",border:`1px solid ${T.ln}` }}>
          {PERIODS.map(p=>(
            <button key={p.id} onClick={()=>setPeriod(p.id)} style={{ flex:1,padding:"11px 4px",
              borderRadius:"12px",fontSize:"13px",fontWeight:"700",border:"none",
              background:period===p.id?T.brand:"transparent",
              color:period===p.id?"white":T.t3,transition:"all 0.2s" }}>{p.label}</button>
          ))}
        </div>

        {/* Hero KPI */}
        <div style={{ background:`linear-gradient(145deg,${T.d1} 0%,#0a2a36 60%,#0d3040 100%)`,
          borderRadius:"24px", padding:"24px",
          boxShadow:"0 12px 48px rgba(0,0,0,0.25)", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute",top:"-50px",right:"-50px",width:"180px",height:"180px",
            background:`${T.brand}25`,borderRadius:"50%",filter:"blur(50px)" }}/>
          <div style={{ position:"absolute",bottom:"-30px",left:"-30px",width:"120px",height:"120px",
            background:"rgba(59,130,246,0.12)",borderRadius:"50%",filter:"blur(30px)" }}/>
          <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px",
            position:"relative",zIndex:2 }}>
            <div>
              <p style={{ fontSize:"11px",fontWeight:"700",color:"rgba(255,255,255,0.45)",
                textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:"6px" }}>
                Gasto Total {pLabel}
              </p>
              <div style={{ fontFamily:F.heading,fontSize:"36px",fontWeight:"900",color:"white",
                letterSpacing:"-1px",lineHeight:1 }}>{fmtCLP(totals.cost)}</div>
              <div style={{ display:"flex",alignItems:"center",gap:"5px",marginTop:"6px" }}>
                <TrendingUp size={12} style={{ color:T.brand }}/>
                <span style={{ fontSize:"11px",color:T.brand,fontWeight:"700" }}>+4.2% vs período anterior</span>
              </div>
            </div>
            <div style={{ width:"54px",height:"54px",borderRadius:"18px",
              background:`${T.brand}30`,border:`1px solid ${T.brand}40`,
              display:"flex",alignItems:"center",justifyContent:"center" }}>
              <DollarSign size={26} style={{ color:T.brandMd }}/>
            </div>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px",position:"relative",zIndex:2 }}>
            {[
              {label:"KM Recorridos",val:`${fmtNum(totals.km,0)} km`,icon:"🛣️",color:T.brandMd},
              {label:"Litros consumidos",val:`${fmtNum(totals.fuel,0)} L`,icon:"⛽",color:T.warn},
              {label:"Puntaje seguridad",val:`${avgScore}/100`,icon:"⭐",color:T.ok},
            ].map(({label,val,icon,color})=>(
              <div key={label} style={{ background:T.glass,borderRadius:"16px",
                padding:"14px 10px",border:`1px solid ${T.glassBorder}`,backdropFilter:"blur(8px)" }}>
                <div style={{ fontSize:"18px",marginBottom:"8px" }}>{icon}</div>
                <div style={{ fontFamily:F.heading,fontSize:"17px",fontWeight:"900",
                  color:"white",lineHeight:1.1 }}>{val}</div>
                <div style={{ fontSize:"9px",color:"rgba(255,255,255,0.4)",fontWeight:"700",
                  textTransform:"uppercase",letterSpacing:"0.08em",marginTop:"4px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet status */}
        <div>
          <SectionLabel action="Ver flota" onAction={()=>go("company_vehicles")}>Estado de Flota</SectionLabel>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px" }}>
            {[
              {label:"En Ruta",     val:activeCount, color:T.ok,    bg:T.okLt,    icon:Navigation, sub:`de ${VEHICLES.length}`},
              {label:"Disponibles", val:VEHICLES.filter(v=>v.status==="idle").length,color:T.warn,bg:T.warnLt,icon:Clock,sub:"sin asignación"},
              {label:"Mantención",  val:VEHICLES.filter(v=>v.status==="maintenance").length,color:T.danger,bg:T.dangerLt,icon:Wrench,sub:"fuera de servicio"},
            ].map(({label,val,color,bg,icon:Icon,sub})=>(
              <Card key={label} style={{ padding:"18px 12px",textAlign:"center",
                boxShadow:"0 2px 12px rgba(15,23,42,0.06)" }}>
                <div style={{ width:"40px",height:"40px",borderRadius:"12px",background:bg,
                  display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 10px" }}>
                  <Icon size={20} style={{ color }}/>
                </div>
                <div style={{ fontFamily:F.heading,fontSize:"30px",fontWeight:"900",color,lineHeight:1 }}>{val}</div>
                <div style={{ fontSize:"11px",fontWeight:"700",color:T.t2,marginTop:"5px" }}>{label}</div>
                <div style={{ fontSize:"10px",color:T.t4,marginTop:"2px" }}>{sub}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Cost by vehicle bar chart */}
        <div>
          <SectionLabel action="Ver detalle" onAction={()=>go("company_vehicles")}>
            Gasto por Vehículo {pLabel}
          </SectionLabel>
          <Card style={{ padding:"20px" }}>
            <div style={{ display:"flex",flexDirection:"column",gap:"14px" }}>
              {[...VEHICLES].sort((a,b)=>b.cost[period]-a.cost[period]).map(v=>{
                const pct = maxCost>0?(v.cost[period]/maxCost)*100:0;
                return (
                  <button key={v.id} onClick={()=>go("company_vehicle_"+v.id)}
                    style={{ display:"flex",alignItems:"center",gap:"12px",
                      background:"none",border:"none",cursor:"pointer",textAlign:"left",padding:0 }}>
                    <div style={{ width:"40px",height:"40px",borderRadius:"10px",flexShrink:0,
                      background:`${statusColor(v.status)}18`,
                      display:"flex",alignItems:"center",justifyContent:"center" }}>
                      <VehicleIcon type={v.type} size={26} color={statusColor(v.status)}/>
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex",justifyContent:"space-between",marginBottom:"6px" }}>
                        <span style={{ fontSize:"12px",fontWeight:"700",color:T.t1 }}>
                          {v.plate} <span style={{ color:T.t3,fontWeight:"500" }}>· {v.driver.split(" ")[0]}</span>
                        </span>
                        <span style={{ fontFamily:F.heading,fontSize:"13px",fontWeight:"800",color:T.t1 }}>
                          {fmtCLP(v.cost[period])}
                        </span>
                      </div>
                      <div style={{ height:"8px",background:T.bg,borderRadius:"4px",overflow:"hidden" }}>
                        <div style={{ height:"100%",borderRadius:"4px",width:`${pct}%`,
                          background:v.status==="maintenance"?T.danger:pct>70?T.brand:T.ok,
                          transition:"width 0.8s ease" }}/>
                      </div>
                    </div>
                    <ChevronRight size={14} style={{ color:T.t4,flexShrink:0 }}/>
                  </button>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Top consumption */}
        <div>
          <SectionLabel>Mayor Consumo de Combustible</SectionLabel>
          <Card>
            {[...VEHICLES].sort((a,b)=>b.fuel[period]-a.fuel[period]).slice(0,3).map((v,i,arr)=>(
              <div key={v.id} style={{ padding:"16px 20px",display:"flex",alignItems:"center",
                gap:"14px",borderBottom:i<arr.length-1?`1px solid ${T.ln}`:"none" }}>
                <div style={{ fontFamily:F.heading,fontSize:"22px",fontWeight:"900",
                  color:i===0?T.danger:i===1?T.warn:T.t3,width:"28px",flexShrink:0 }}>{i+1}</div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex",alignItems:"center",gap:"8px" }}>
                    <span style={{ fontFamily:F.heading,fontSize:"15px",fontWeight:"800",
                      letterSpacing:"0.06em",color:T.t1 }}>{v.plate}</span>
                    <span style={{ fontSize:"11px",color:T.t3 }}>{v.type}</span>
                  </div>
                  <p style={{ fontSize:"11px",color:T.t3,marginTop:"2px" }}>{v.driver}</p>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontFamily:F.heading,fontSize:"16px",fontWeight:"900",color:T.t1 }}>
                    {fmtNum(v.fuel[period])} L
                  </div>
                  <div style={{ fontSize:"10px",color:T.t3 }}>{fmtNum(v.efficiency)} L/100km</div>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* Incidents */}
        <div>
          <SectionLabel>Incidentes del Período</SectionLabel>
          <Card>
            {VEHICLES.filter(v=>v.incidents>0).length===0 ? (
              <div style={{ padding:"28px",textAlign:"center" }}>
                <div style={{ fontSize:"32px",marginBottom:"8px" }}>✅</div>
                <p style={{ fontSize:"14px",fontWeight:"700",color:T.ok }}>Sin incidentes registrados</p>
                <p style={{ fontSize:"12px",color:T.t4,marginTop:"4px" }}>{pLabel}</p>
              </div>
            ) : VEHICLES.filter(v=>v.incidents>0).map((v,i,arr)=>(
              <div key={v.id} style={{ padding:"14px 20px",display:"flex",alignItems:"center",
                gap:"14px",borderBottom:i<arr.length-1?`1px solid ${T.ln}`:"none",
                borderLeft:`4px solid ${T.danger}` }}>
                <AlertTriangle size={16} style={{ color:T.danger,flexShrink:0 }}/>
                <div style={{ flex:1 }}>
                  <p style={{ fontSize:"13px",fontWeight:"700",color:T.t1 }}>{v.plate} · {v.driver}</p>
                  <p style={{ fontSize:"11px",color:T.t3 }}>{v.incidents} incidente{v.incidents!==1?"s":""} · Score: {v.score}/100</p>
                </div>
                <button onClick={()=>go("company_vehicle_"+v.id)}
                  style={{ fontSize:"11px",fontWeight:"700",color:T.brand,background:"none",border:"none",cursor:"pointer" }}>
                  Ver →
                </button>
              </div>
            ))}
          </Card>
        </div>

        {/* Download report block */}
        <div style={{ background:`${T.brand}0A`,borderRadius:"20px",padding:"20px",
          border:`1.5px solid ${T.brand}30` }}>
          <div style={{ display:"flex",alignItems:"center",gap:"14px",marginBottom:"16px" }}>
            <div style={{ width:"44px",height:"44px",borderRadius:"14px",background:T.brandLt,
              display:"flex",alignItems:"center",justifyContent:"center" }}>
              <FileText size={20} style={{ color:T.brand }}/>
            </div>
            <div>
              <p style={{ fontSize:"14px",fontWeight:"700",color:T.t1 }}>Reporte Ejecutivo</p>
              <p style={{ fontSize:"11px",color:T.t3 }}>
                {PERIODS.find(p=>p.id===period)?.label} · {COMPANY_DATA.name}
              </p>
            </div>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px" }}>
            <button onClick={dl.trigger} style={{ display:"flex",alignItems:"center",
              justifyContent:"center",gap:"8px",padding:"13px",borderRadius:"14px",
              background:T.brand,border:"none",color:"white",fontSize:"13px",fontWeight:"700",cursor:"pointer" }}>
              <Download size={16}/> Descargar PDF
            </button>
            <button onClick={() => {
              if(navigator.share){ navigator.share({title:"Reporte Ejecutivo Geopulse",text:`${COMPANY_DATA.name} · Reporte ${period}`}).catch(()=>{}); }
              else if(navigator.clipboard){ navigator.clipboard.writeText(`Reporte Geopulse · ${COMPANY_DATA.name}`); alert("Enlace copiado al portapapeles"); }
              else { alert("Compartir no disponible en este dispositivo"); }
            }} style={{ display:"flex",alignItems:"center",
              justifyContent:"center",gap:"8px",padding:"13px",borderRadius:"14px",
              background:"white",border:`1.5px solid ${T.ln}`,color:T.t2,
              fontSize:"13px",fontWeight:"700",cursor:"pointer" }}>
              <Share2 size={16}/> Compartir
            </button>
          </div>
        </div>
      </div>

      {/* Logout confirmation modal */}
      {showLogout && (
        <div onClick={() => setShowLogout(false)}
          style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.55)",
            backdropFilter:"blur(4px)", zIndex:9999,
            display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }}>
          <div onClick={(e) => e.stopPropagation()}
            style={{ background:"white", borderRadius:"24px", padding:"28px 24px",
              maxWidth:"360px", width:"100%",
              boxShadow:"0 20px 60px rgba(0,0,0,0.25)",
              display:"flex", flexDirection:"column", alignItems:"center", gap:"16px" }}>
            <div style={{ width:"64px", height:"64px", borderRadius:"50%",
              background:"#fef2f2", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <LogOut size={28} style={{ color:T.danger }} strokeWidth={2.2}/>
            </div>
            <div style={{ textAlign:"center" }}>
              <h3 style={{ fontFamily:F.heading, fontSize:"19px", fontWeight:"800",
                color:T.t1, margin:"0 0 6px 0" }}>
                ¿Cerrar sesión?
              </h3>
              <p style={{ fontSize:"13px", color:T.t3, margin:0, lineHeight:1.45 }}>
                Saldrás del panel de empresa y volverás a la pantalla de inicio.
              </p>
            </div>
            <div style={{ display:"flex", gap:"10px", width:"100%", marginTop:"4px" }}>
              <button onClick={() => setShowLogout(false)}
                style={{ flex:1, padding:"13px", borderRadius:"14px",
                  background:T.bg, border:`1px solid ${T.ln}`,
                  fontSize:"14px", fontWeight:"700", color:T.t2, cursor:"pointer" }}>
                Cancelar
              </button>
              <button onClick={() => { setShowLogout(false); go("login"); }}
                style={{ flex:1, padding:"13px", borderRadius:"14px",
                  background:T.danger, border:"none",
                  fontSize:"14px", fontWeight:"700", color:"white", cursor:"pointer",
                  boxShadow:"0 4px 12px rgba(239,68,68,0.35)" }}>
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Company Screen 2: Fleet List ──────────────────────────── */
const CompanyVehicles = ({ go }) => {
  const [period,setPeriod] = useState("month");
  const [fStatus,setFStatus] = useState("all");
  const [fType,setFType] = useState("all");
  const dl = useDownload();

  const types    = ["all","Camioneta","Camión","Maquinaria","Furgón"];
  const statuses = ["all","active","idle","maintenance"];
  const sLabels  = {all:"Todos",active:"En Ruta",idle:"Disponible",maintenance:"Mantención"};

  const filtered = VEHICLES.filter(v=>
    (fStatus==="all"||v.status===fStatus)&&(fType==="all"||v.type===fType));

  const totals = filtered.reduce((acc,v)=>({
    km:acc.km+v.km[period],fuel:acc.fuel+v.fuel[period],cost:acc.cost+v.cost[period]
  }),{km:0,fuel:0,cost:0});

  return (
    <div className="su" style={{ minHeight:"100vh",background:T.bg,paddingBottom:"32px" }}>
      <CompanyTopBar onBack={()=>go("company_dashboard")} title="Gestión de Flota" right={<DlButton dl={dl}/>}/>
      <DlToast downloaded={dl.downloaded}/>

      <div style={{ padding:"20px",display:"flex",flexDirection:"column",gap:"16px" }}>

        <div style={{ display:"flex",background:"white",borderRadius:"14px",
          padding:"4px",border:`1px solid ${T.ln}` }}>
          {PERIODS.map(p=>(
            <button key={p.id} onClick={()=>setPeriod(p.id)} style={{ flex:1,padding:"10px 4px",
              borderRadius:"10px",fontSize:"12px",fontWeight:"700",border:"none",
              background:period===p.id?T.brand:"transparent",
              color:period===p.id?"white":T.t3,transition:"all 0.2s" }}>{p.label}</button>
          ))}
        </div>

        {/* Status chips */}
        <div style={{ display:"flex",gap:"8px",overflowX:"auto",paddingBottom:"2px" }}>
          {statuses.map(s=>(
            <button key={s} onClick={()=>setFStatus(s)} style={{ flexShrink:0,
              padding:"8px 14px",borderRadius:"20px",fontSize:"12px",fontWeight:"700",
              border:`2px solid ${fStatus===s?T.brand:T.ln}`,
              background:fStatus===s?T.brandLt:"white",
              color:fStatus===s?T.brand:T.t3,cursor:"pointer" }}>{sLabels[s]}</button>
          ))}
        </div>

        {/* Type chips */}
        <div style={{ display:"flex",gap:"8px",overflowX:"auto",paddingBottom:"2px" }}>
          {types.map(t=>{
            const sel = fType===t;
            return (
              <button key={t} onClick={()=>setFType(t)} style={{ flexShrink:0,
                padding:"7px 12px",borderRadius:"20px",fontSize:"11px",fontWeight:"700",
                border:`1.5px solid ${sel?T.t1:T.ln}`,
                background:sel?T.t1:"white",
                color:sel?"white":T.t3,cursor:"pointer",
                display:"flex",alignItems:"center",gap:"6px" }}>
                {t!=="all" && <VehicleIcon type={t} size={18} color={sel?"white":T.brand}/>}
                {t==="all"?"Todos":t}
              </button>
            );
          })}
        </div>

        {/* Subtotals */}
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px" }}>
          {[
            {label:"Gasto",val:fmtCLP(totals.cost),icon:"💰"},
            {label:"KM",val:`${fmtNum(totals.km,0)} km`,icon:"🛣️"},
            {label:"Combustible",val:`${fmtNum(totals.fuel,0)} L`,icon:"⛽"},
          ].map(({label,val,icon})=>(
            <Card key={label} style={{ padding:"14px 10px",textAlign:"center" }}>
              <div style={{ fontSize:"20px",marginBottom:"6px" }}>{icon}</div>
              <div style={{ fontFamily:F.heading,fontSize:"14px",fontWeight:"900",
                color:T.t1,lineHeight:1.1,marginBottom:"4px" }}>{val}</div>
              <div style={{ fontSize:"9px",color:T.t4,fontWeight:"600",
                textTransform:"uppercase",letterSpacing:"0.06em" }}>{label}</div>
            </Card>
          ))}
        </div>

        {/* Vehicle cards */}
        <div style={{ display:"flex",flexDirection:"column",gap:"12px" }}>
          {filtered.map(v=>(
            <button key={v.id} onClick={()=>go("company_vehicle_"+v.id)}
              style={{ background:"none",border:"none",padding:0,cursor:"pointer",textAlign:"left" }}>
              <Card>
                <div style={{ padding:"16px 20px",display:"flex",alignItems:"flex-start",
                  justifyContent:"space-between",borderBottom:`1px solid ${T.ln}` }}>
                  <div style={{ display:"flex",alignItems:"center",gap:"14px" }}>
                    <div style={{ width:"54px",height:"54px",borderRadius:"16px",
                      background:`${statusColor(v.status)}15`, border:`1.5px solid ${statusColor(v.status)}25`,
                      display:"flex",alignItems:"center",justifyContent:"center" }}>
                      <VehicleIcon type={v.type} size={36} color={statusColor(v.status)}/>
                    </div>
                    <div>
                      <div style={{ display:"flex",alignItems:"center",gap:"8px" }}>
                        <span style={{ fontFamily:F.heading,fontSize:"18px",fontWeight:"900",
                          letterSpacing:"0.1em",color:T.t1 }}>{v.plate}</span>
                        <span style={{ padding:"3px 8px",borderRadius:"20px",fontSize:"10px",
                          fontWeight:"700",background:`${statusColor(v.status)}18`,
                          color:statusColor(v.status) }}>{statusLabel(v.status)}</span>
                      </div>
                      <p style={{ fontSize:"12px",color:T.t3,marginTop:"2px" }}>{v.type} · {v.driver}</p>
                    </div>
                  </div>
                  <div style={{ textAlign:"right",flexShrink:0 }}>
                    <div style={{ fontFamily:F.heading,fontSize:"18px",fontWeight:"900",
                      color:v.score>=90?T.ok:v.score>=75?T.warn:T.danger }}>{v.score}</div>
                    <div style={{ fontSize:"9px",color:T.t4,fontWeight:"600",textTransform:"uppercase" }}>score</div>
                  </div>
                </div>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",
                  padding:"13px 16px" }}>
                  {[
                    {icon:"💰",label:"Gasto",val:fmtCLP(v.cost[period])},
                    {icon:"🛣️",label:"KM",val:`${fmtNum(v.km[period],0)}`},
                    {icon:"⛽",label:"Litros",val:`${fmtNum(v.fuel[period])}`},
                    {icon:"📊",label:"L/100",val:fmtNum(v.efficiency)},
                  ].map(({icon,label,val},i)=>(
                    <div key={label} style={{ textAlign:"center",
                      borderRight:i<3?`1px solid ${T.ln}`:"none",padding:"0 4px" }}>
                      <div style={{ fontSize:"13px",marginBottom:"3px" }}>{icon}</div>
                      <div style={{ fontSize:"11px",fontWeight:"800",color:T.t1,lineHeight:1.1 }}>{val}</div>
                      <div style={{ fontSize:"9px",color:T.t4,fontWeight:"600",
                        textTransform:"uppercase",letterSpacing:"0.04em",marginTop:"2px" }}>{label}</div>
                    </div>
                  ))}
                </div>
                {v.incidents>0 && (
                  <div style={{ padding:"10px 20px",background:"#fffbeb",
                    borderTop:`1px solid #fef3c7`,display:"flex",alignItems:"center",gap:"8px" }}>
                    <AlertTriangle size={13} style={{ color:T.warn }}/>
                    <span style={{ fontSize:"11px",fontWeight:"700",color:T.warn }}>
                      {v.incidents} incidente{v.incidents!==1?"s":""} registrado{v.incidents!==1?"s":""}
                    </span>
                  </div>
                )}
              </Card>
            </button>
          ))}
          {filtered.length===0 && (
            <div style={{ textAlign:"center",padding:"48px 24px" }}>
              <MapPinOff size={36} style={{ color:T.t4,margin:"0 auto 12px" }}/>
              <p style={{ fontSize:"15px",fontWeight:"700",color:T.t2 }}>Sin vehículos que coincidan</p>
            </div>
          )}
        </div>

        <button onClick={dl.trigger} style={{ display:"flex",alignItems:"center",
          justifyContent:"center",gap:"8px",padding:"16px",borderRadius:"16px",
          background:"white",border:`1.5px dashed ${T.lnDk}`,color:T.t3,
          fontSize:"13px",fontWeight:"700",cursor:"pointer",width:"100%" }}>
          <Download size={16}/> Exportar lista completa (PDF)
        </button>
      </div>
    </div>
  );
};

/* ─── Company Screen 3: Vehicle Detail ──────────────────────── */
const CompanyVehicleDetail = ({ go, vehicleId }) => {
  const v = VEHICLES.find(x=>x.id===vehicleId)||VEHICLES[0];
  const [period,setPeriod] = useState("month");
  const dl = useDownload();

  const chartData = {
    day:  [{l:"Lu",c:28900},{l:"Ma",c:31200},{l:"Mi",c:29400},{l:"Ju",c:32200},{l:"Vi",c:27600},{l:"Sa",c:0},{l:"Do",c:0}],
    week: [{l:"S1",c:152000},{l:"S2",c:168000},{l:"S3",c:145000},{l:"S4",c:v.cost.week}],
    month:[{l:"Ene",c:580000},{l:"Feb",c:612000},{l:"Mar",c:598000},{l:"Abr",c:v.cost.month}],
    year: [{l:"2022",c:6200000},{l:"2023",c:6800000},{l:"2024",c:7200000},{l:"2025",c:v.cost.year}],
  };
  const bars   = chartData[period];
  const maxBar = Math.max(...bars.map(b=>b.c));
  const pLabel = {day:"Hoy",week:"Esta semana",month:"Este mes",year:"Este año"}[period];

  return (
    <div className="su" style={{ minHeight:"100vh",background:T.bg,paddingBottom:"32px" }}>
      <CompanyTopBar onBack={()=>go("company_vehicles")} title={`Detalle · ${v.plate}`} right={<DlButton dl={dl}/>}/>
      <DlToast downloaded={dl.downloaded}/>

      <div style={{ padding:"20px",display:"flex",flexDirection:"column",gap:"20px" }}>

        {/* Vehicle hero */}
        <div style={{ background:`linear-gradient(135deg,${T.t1},#1a3a4a)`,
          borderRadius:"24px",padding:"24px",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:"-30px",right:"-30px",width:"120px",height:"120px",
            background:`${T.brand}20`,borderRadius:"50%",filter:"blur(30px)" }}/>
          <div style={{ display:"flex",alignItems:"center",gap:"16px",marginBottom:"20px" }}>
            <div style={{ width:"68px",height:"68px",borderRadius:"18px",
              background:`${statusColor(v.status)}25`, border:`1.5px solid ${statusColor(v.status)}40`,
              display:"flex",alignItems:"center",justifyContent:"center" }}>
              <VehicleIcon type={v.type} size={44} color={statusColor(v.status)}/>
            </div>
            <div>
              <div style={{ fontFamily:F.heading,fontSize:"28px",fontWeight:"900",
                color:"white",letterSpacing:"0.12em" }}>{v.plate}</div>
              <p style={{ color:"rgba(255,255,255,0.6)",fontSize:"13px",fontWeight:"600" }}>
                {v.type} · {v.driver}
              </p>
              <div style={{ display:"inline-flex",alignItems:"center",gap:"5px",marginTop:"6px",
                padding:"4px 10px",borderRadius:"20px",
                background:`${statusColor(v.status)}30`,border:`1px solid ${statusColor(v.status)}50` }}>
                <div style={{ width:"6px",height:"6px",borderRadius:"50%",background:statusColor(v.status) }}
                  className={v.status==="active"?"pu":""}/>
                <span style={{ fontSize:"11px",fontWeight:"700",color:statusColor(v.status) }}>
                  {statusLabel(v.status)}
                </span>
              </div>
            </div>
          </div>
          {/* Score ring */}
          <div style={{ display:"flex",alignItems:"center",gap:"16px",padding:"16px",
            background:"rgba(255,255,255,0.06)",borderRadius:"16px",
            border:"1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ width:"52px",height:"52px",borderRadius:"50%",flexShrink:0,
              background:`conic-gradient(${v.score>=90?T.ok:v.score>=75?T.warn:T.danger} ${v.score*3.6}deg,rgba(255,255,255,0.1) 0deg)`,
              display:"flex",alignItems:"center",justifyContent:"center" }}>
              <div style={{ width:"38px",height:"38px",borderRadius:"50%",
                background:T.d2,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <span style={{ fontFamily:F.heading,fontSize:"14px",fontWeight:"900",
                  color:v.score>=90?T.ok:v.score>=75?T.warn:T.danger }}>{v.score}</span>
              </div>
            </div>
            <div>
              <p style={{ fontSize:"11px",fontWeight:"700",color:"rgba(255,255,255,0.5)",
                textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"4px" }}>Puntaje de Seguridad</p>
              <p style={{ fontSize:"13px",fontWeight:"700",
                color:v.score>=90?T.ok:v.score>=75?T.warn:T.danger }}>
                {v.score>=90?"Excelente":v.score>=75?"Bueno":"Requiere atención"}
              </p>
            </div>
            {v.incidents>0 && (
              <div style={{ marginLeft:"auto",textAlign:"center" }}>
                <AlertTriangle size={18} style={{ color:T.warn }}/>
                <div style={{ fontSize:"10px",fontWeight:"700",color:T.warn,marginTop:"2px" }}>
                  {v.incidents} inc.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Period selector */}
        <div style={{ display:"flex",background:"white",borderRadius:"14px",
          padding:"4px",border:`1px solid ${T.ln}` }}>
          {PERIODS.map(p=>(
            <button key={p.id} onClick={()=>setPeriod(p.id)} style={{ flex:1,padding:"10px 4px",
              borderRadius:"10px",fontSize:"12px",fontWeight:"700",border:"none",
              background:period===p.id?T.brand:"transparent",
              color:period===p.id?"white":T.t3,transition:"all 0.2s" }}>{p.label}</button>
          ))}
        </div>

        {/* KPI grid */}
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px" }}>
          {[
            {label:"Gasto Total",    val:fmtCLP(v.cost[period]), sub:pLabel, color:T.brand, icon:"💰"},
            {label:"KM Recorridos",  val:`${fmtNum(v.km[period],0)} km`, sub:pLabel, color:T.info, icon:"🛣️"},
            {label:"Combustible",    val:`${fmtNum(v.fuel[period])} L`, sub:pLabel, color:T.warn, icon:"⛽"},
            {label:"Eficiencia",     val:`${fmtNum(v.efficiency)} L/100`, sub:"promedio", color:T.ok, icon:"📊"},
          ].map(({label,val,sub,color,icon})=>(
            <Card key={label} style={{ padding:"18px" }}>
              <div style={{ fontSize:"24px",marginBottom:"10px" }}>{icon}</div>
              <div style={{ fontFamily:F.heading,fontSize:"20px",fontWeight:"900",
                color:T.t1,lineHeight:1,marginBottom:"4px" }}>{val}</div>
              <div style={{ fontSize:"11px",fontWeight:"700",color:T.t3,
                textTransform:"uppercase",letterSpacing:"0.06em" }}>{label}</div>
              <div style={{ fontSize:"10px",color:T.t4,marginTop:"2px" }}>{sub}</div>
            </Card>
          ))}
        </div>

        {/* Cost evolution chart */}
        <Card style={{ padding:"20px" }}>
          <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px" }}>
            <div>
              <div style={{ fontFamily:F.heading,fontSize:"15px",fontWeight:"800",
                color:T.t1,letterSpacing:"0.04em" }}>EVOLUCIÓN DE GASTO</div>
              <p style={{ fontSize:"11px",color:T.t3,marginTop:"2px" }}>
                {period==="day"?"Últimos 7 días":period==="week"?"Últimas 4 semanas":
                 period==="month"?"Últimos 4 meses":"Últimos 4 años"}
              </p>
            </div>
            <div style={{ fontFamily:F.heading,fontSize:"13px",fontWeight:"800",color:T.brand }}>
              {fmtCLP(maxBar)} máx.
            </div>
          </div>
          <div style={{ display:"flex",alignItems:"flex-end",gap:"8px",height:"100px" }}>
            {bars.map((b,i)=>{
              const pct = maxBar>0?(b.c/maxBar)*100:4;
              const isLast = i===bars.length-1;
              return (
                <div key={i} style={{ flex:1,display:"flex",flexDirection:"column",
                  alignItems:"center",gap:"8px",height:"100%" }}>
                  <div style={{ width:"100%",borderRadius:"8px 8px 4px 4px",
                    height:`${pct||4}%`,marginTop:"auto",
                    background:isLast?T.brand:`${T.brand}40`,
                    boxShadow:isLast?`0 4px 14px ${T.brandGlow}`:"none",
                    transition:"height 0.7s ease",position:"relative" }}>
                    {isLast && b.c>0 && (
                      <div style={{ position:"absolute",top:"-22px",left:"50%",
                        transform:"translateX(-50%)",background:T.brand,color:"white",
                        borderRadius:"6px",padding:"2px 6px",fontSize:"9px",
                        fontWeight:"800",whiteSpace:"nowrap" }}>
                        {fmtCLP(b.c)}
                      </div>
                    )}
                  </div>
                  <span style={{ fontSize:"9px",fontWeight:"800",
                    color:isLast?T.brand:T.t4 }}>{b.l}</span>
                </div>
              );
            })}
          </div>
          <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",
            marginTop:"16px",paddingTop:"14px",borderTop:`1px solid ${T.ln}` }}>
            <span style={{ fontSize:"12px",color:T.t3 }}>Total acumulado</span>
            <span style={{ fontFamily:F.heading,fontSize:"16px",fontWeight:"900",color:T.t1 }}>
              {fmtCLP(bars.reduce((s,b)=>s+b.c,0))}
            </span>
          </div>
        </Card>

        {/* Recent journeys */}
        <div>
          <SectionLabel>Jornadas Recientes</SectionLabel>
          <Card>
            {[
              {date:"Hoy 15 Abr",   km:v.km.day||214, cost:v.cost.day||32200, ok:true},
              {date:"Lun 14 Abr",   km:198,            cost:29700,             ok:true},
              {date:"Vie 11 Abr",   km:276,            cost:41400,             ok:v.incidents===0},
            ].map((j,i,arr)=>(
              <div key={i} style={{ padding:"14px 20px",display:"flex",alignItems:"center",
                justifyContent:"space-between",gap:"12px",
                borderBottom:i<arr.length-1?`1px solid ${T.ln}`:"none",
                borderLeft:`3px solid ${j.ok?T.ok:T.warn}` }}>
                <div style={{ flex:1 }}>
                  <p style={{ fontSize:"13px",fontWeight:"700",color:T.t1 }}>{j.date}</p>
                  <p style={{ fontSize:"11px",color:T.t3,marginTop:"2px" }}>{v.driver} · {j.km} km</p>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontFamily:F.heading,fontSize:"15px",fontWeight:"900",color:T.t1 }}>
                    {fmtCLP(j.cost)}
                  </div>
                  {!j.ok && <div style={{ fontSize:"10px",color:T.warn,fontWeight:"700" }}>⚠ Con incidente</div>}
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* Export */}
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px" }}>
          <button onClick={dl.trigger} style={{ display:"flex",alignItems:"center",
            justifyContent:"center",gap:"8px",padding:"14px",borderRadius:"14px",
            background:T.brand,border:"none",color:"white",fontSize:"13px",fontWeight:"700",cursor:"pointer" }}>
            <Download size={16}/> Descargar PDF
          </button>
          <button onClick={() => {
            if(navigator.share){ navigator.share({title:`Reporte ${v.plate}`,text:`Vehículo ${v.plate} · ${v.driver}`}).catch(()=>{}); }
            else if(navigator.clipboard){ navigator.clipboard.writeText(`Reporte vehículo ${v.plate}`); alert("Enlace copiado al portapapeles"); }
            else { alert("Compartir no disponible en este dispositivo"); }
          }} style={{ display:"flex",alignItems:"center",
            justifyContent:"center",gap:"8px",padding:"14px",borderRadius:"14px",
            background:"white",border:`1.5px solid ${T.ln}`,color:T.t2,
            fontSize:"13px",fontWeight:"700",cursor:"pointer" }}>
            <Share2 size={16}/> Compartir
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─── Main App ─────────────────────────────────────────────── */
export default function App() {
  const [screen, setScreen] = useState("login");
  const [vehicleData, setVehicleData] = useState({ type:null, plate:"" });
  const [journeyData, setJourneyData] = useState({
    startKm:"45.210", endKm:"", fuel:85, startTime:"08:05 AM", location:"Santiago, Sector 4A"
  });
  const [hasActiveJourney, setHasActiveJourney] = useState(false);
  const [vehicleReport, setVehicleReport] = useState(null);
  const [approvalState, setApprovalState] = useState({ status:"pending", correction:null, message:"" });
  const [feedbackState, setFeedbackState] = useState({ status:"pending", operatorReport:null, tomorrowOk:null, message:"" });

  const go = s => setScreen(s);

  const handleVehicleComplete = data => setVehicleData(data);
  const handleJourneyUpdate = data => {
    setJourneyData(p => ({...p,...data}));
    if(data.startKm) setHasActiveJourney(true);
    if(data.endKm) setHasActiveJourney(false);
  };
  const handleReportSubmit = data => {
    setVehicleReport(data);
    // Auto-set feedback state based on the report — eliminates duplicate question.
    // The driver already answered "Todo en orden" / "Tuve problemas" in VehicleReportScreen.
    setFeedbackState({
      status: "sent",
      operatorReport: data.hasIssue ? "issue" : "ok",
      issueData: data.hasIssue ? { selected: data.selected, sevMap: data.sevMap, notes: data.notes, worstSev: data.worstSev } : null,
      tomorrowOk: null,
      message: ""
    });
  };

  const navScreens = ["home","notifications","performance","soporte",
    "active_journey","profile_screen","history"];
  const showNav = navScreens.includes(screen);

  const renderScreen = () => {
    switch(screen) {
      case "login":            return <LoginScreen go={go}/>;
      case "rut_entry":        return <RutScreen go={go}/>;
      case "verify_code":      return <VerifyScreen go={go}/>;
      case "home":             return <HomeScreen go={go} hasActiveJourney={hasActiveJourney}/>;
      case "notifications":    return <NotificationsScreen go={go}/>;
      case "profile_screen":   return <ProfileScreen go={go}/>;
      case "history":          return <HistoryScreen go={go}/>;
      case "vehicle_selection":return <VehicleSelectionScreen go={go} onComplete={handleVehicleComplete}/>;
      case "start_camera":     return <CameraScreen go={go} mode="start"/>;
      case "confirm_start":    return <ConfirmScreen go={go} mode="start" vehicleData={vehicleData} journeyData={journeyData} onComplete={handleJourneyUpdate}/>;
      case "active_journey":   return <ActiveJourneyScreen go={go} vehicleData={vehicleData} journeyData={journeyData}/>;
      case "vehicle_report":   return <VehicleReportScreen go={go} vehicleData={vehicleData} onReportSubmit={handleReportSubmit}/>;
      case "end_camera":       return <CameraScreen go={go} mode="end"/>;
      case "confirm_end":      return <ConfirmScreen go={go} mode="end" vehicleData={vehicleData} journeyData={journeyData} onComplete={handleJourneyUpdate}/>;
      case "performance":      return <PerformanceScreen go={go}/>;
      case "soporte":          return <SoporteScreen go={go}/>;
      /* ── Incident report flows ── */
      case "incident_mechanic":  return <IncidentMechanicScreen go={go}/>;
      case "incident_accident":  return <IncidentAccidentScreen go={go}/>;
      case "incident_near_miss": return <IncidentNearMissScreen go={go}/>;
      case "incident_fine":      return <IncidentSanctionScreen go={go}/>;
      case "incident_sanction":  return <IncidentSanctionScreen go={go}/>;
      case "manual_start":     return <ManualEntryScreen go={go} mode="start" onComplete={handleJourneyUpdate}/>;
      case "manual_end":       return <ManualEntryScreen go={go} mode="end" onComplete={handleJourneyUpdate}/>;
      /* ── Approval flow ── */
      case "waiting_approval": return <WaitingApprovalScreen go={go} vehicleData={vehicleData}
                                        journeyData={journeyData} approvalState={approvalState}
                                        onApprovalResult={r => { setApprovalState(r); if(r.status==="approved") setTimeout(()=>go("active_journey"),2800); }}/>;
      case "waiting_feedback": return <WaitingFeedbackScreen go={go} vehicleData={vehicleData}
                                        journeyData={journeyData} feedbackState={feedbackState}
                                        onFeedbackResult={r => { setFeedbackState(r); }}/>;
      /* ── Supervisor module ── */
      case "supervisor_dashboard": return <SupervisorDashboard go={go}/>;
      case "approval_panel":       return <ApprovalPanelScreen go={go}/>;
      /* ── Gerente / Company module ── */
      case "company_dashboard":return <CompanyDashboard go={go}/>;
      case "company_vehicles": return <CompanyVehicles go={go}/>;
      default: {
        if(screen.startsWith("company_vehicle_")) {
          const vid = screen.replace("company_vehicle_","");
          return <CompanyVehicleDetail go={go} vehicleId={vid}/>;
        }
        return <LoginScreen go={go}/>;
      }
    }
  };

  return (
    <div style={{ fontFamily:F.body, width:"100%", maxWidth:"430px", margin:"0 auto", background:"white",
      minHeight:"100vh", position:"relative", overflowX:"hidden",
      boxShadow:"0 0 120px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)" }}>
      <GlobalStyle/>
      <div key={screen}>{renderScreen()}</div>
      {showNav && <BottomNav screen={screen} go={go} hasActiveJourney={hasActiveJourney}/>}
    </div>
  );
}
