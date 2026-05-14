export default function Icon({ name, size = 20 }) {
  const props = {
    width: size, height: size,
    viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.6,
    strokeLinecap: 'round', strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  switch (name) {
    case 'seedling':   return <svg {...props}><path d="M12 22V12M12 12C12 8 9 6 5 6c0 4 3 6 7 6zM12 12c0-4 3-6 7-6 0 4-3 6-7 6z"/></svg>;
    case 'moon':       return <svg {...props}><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>;
    case 'leaf':       return <svg {...props}><path d="M11 20A7 7 0 0 1 4 13c0-7 8-10 16-10 0 8-3 17-9 17-2 0-4-1-4-3 0-3 4-6 9-7"/></svg>;
    case 'women':      return <svg {...props}><circle cx="12" cy="6" r="3"/><path d="M9 22v-5h-2l3-7h4l3 7h-2v5"/></svg>;
    case 'arrow-right':return <svg {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'arrow-up-right': return <svg {...props}><path d="M7 17 17 7M9 7h8v8"/></svg>;
    case 'check':      return <svg {...props}><path d="M5 13l4 4L19 7"/></svg>;
    case 'shield':     return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case 'scale':      return <svg {...props}><path d="M12 3v18M5 9l-3 7c0 2 2 3 4 3s4-1 4-3l-3-7M19 9l-3 7c0 2 2 3 4 3s4-1 4-3l-3-7M3 6h18"/></svg>;
    case 'building':   return <svg {...props}><path d="M3 21h18M5 21V5l7-2 7 2v16M9 9h2M9 13h2M9 17h2M14 9h2M14 13h2M14 17h2"/></svg>;
    case 'tractor':    return <svg {...props}><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="2"/><path d="M3 13h6V8h7l3 4v3M9 8V5h5"/></svg>;
    case 'bike':       return <svg {...props}><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-9h4l4 9M10 8h2M14 8l-2 6"/></svg>;
    case 'store':      return <svg {...props}><path d="M3 9l1-5h16l1 5M3 9v11h18V9M3 9c0 2 2 3 4 2 1 1 4 1 5 0 1 1 4 1 5 0 2 1 4 0 4-2"/></svg>;
    case 'wallet':     return <svg {...props}><path d="M3 7v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9H5a2 2 0 0 1 0-4h12v3"/><circle cx="17" cy="14" r="1.2" fill="currentColor"/></svg>;
    case 'graph':      return <svg {...props}><path d="M3 3v18h18M7 15l4-4 3 3 5-6"/></svg>;
    case 'phone':      return <svg {...props}><path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3.09a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
    case 'mail':       return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
    case 'pin':        return <svg {...props}><path d="M12 22s7-7 7-13a7 7 0 0 0-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case 'spark':      return <svg {...props}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;
    case 'menu':       return <svg {...props}><path d="M4 6h16M4 12h16M4 18h16"/></svg>;
    case 'close':      return <svg {...props}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case 'globe':      return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case 'chip':       return <svg {...props}><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M3 9h3M3 15h3M21 9h-3M21 15h-3"/></svg>;
    case 'people':     return <svg {...props}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 2-4 4-4s2 2 2 4"/></svg>;
    case 'tag':        return <svg {...props}><path d="M3 12V3h9l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.2" fill="currentColor"/></svg>;
    default:           return null;
  }
}
