import type { BlockProperties } from 'grapesjs'

export const customBlocks: BlockProperties[] = [
  // ---- SECCION: Basicos ----
  {
    id: 'section',
    label: 'Sección',
    category: 'Básicos',
    content: '<section style="padding:60px 40px;background:#fff"></section>',
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" stroke-width="1.5"/></svg>',
  },
  {
    id: 'text',
    label: 'Texto',
    category: 'Básicos',
    content: '<p style="font-family:Inter,sans-serif;font-size:16px;color:#374151;line-height:1.7;padding:8px">Escribe aquí tu texto...</p>',
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h7"/></svg>',
  },
  {
    id: 'heading',
    label: 'Título',
    category: 'Básicos',
    content: '<h2 style="font-family:Inter,sans-serif;font-size:36px;font-weight:800;color:#0f172a;padding:8px">Tu título aquí</h2>',
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h8"/></svg>',
  },
  {
    id: 'image',
    label: 'Imagen',
    category: 'Básicos',
    content: { type: 'image' },
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
    activate: true,
  },
  {
    id: 'button',
    label: 'Botón',
    category: 'Básicos',
    content: '<a href="#" style="display:inline-block;background:#3b82f6;color:#fff;font-family:Inter,sans-serif;font-size:15px;font-weight:600;padding:12px 28px;border-radius:50px;text-decoration:none;cursor:pointer">Botón</a>',
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="8" rx="4" stroke-width="1.5"/></svg>',
  },
  {
    id: 'divider',
    label: 'Separador',
    category: 'Básicos',
    content: '<hr style="border:none;border-top:2px solid #e2e8f0;margin:20px 0"/>',
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14"/></svg>',
  },
  {
    id: 'video',
    label: 'Video',
    category: 'Básicos',
    content: { type: 'video' },
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>',
    activate: true,
  },

  // ---- SECCION: Layouts ----
  {
    id: 'columns-2',
    label: '2 Columnas',
    category: 'Layouts',
    content: `<div style="display:flex;gap:20px;padding:40px">
      <div style="flex:1;background:#f1f5f9;padding:20px;border-radius:8px;min-height:80px"></div>
      <div style="flex:1;background:#f1f5f9;padding:20px;border-radius:8px;min-height:80px"></div>
    </div>`,
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="18" rx="1" stroke-width="1.5"/><rect x="13" y="3" width="8" height="18" rx="1" stroke-width="1.5"/></svg>',
  },
  {
    id: 'columns-3',
    label: '3 Columnas',
    category: 'Layouts',
    content: `<div style="display:flex;gap:16px;padding:40px">
      <div style="flex:1;background:#f1f5f9;padding:20px;border-radius:8px;min-height:80px"></div>
      <div style="flex:1;background:#f1f5f9;padding:20px;border-radius:8px;min-height:80px"></div>
      <div style="flex:1;background:#f1f5f9;padding:20px;border-radius:8px;min-height:80px"></div>
    </div>`,
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="3" width="6" height="18" rx="1" stroke-width="1.5"/><rect x="9" y="3" width="6" height="18" rx="1" stroke-width="1.5"/><rect x="16" y="3" width="6" height="18" rx="1" stroke-width="1.5"/></svg>',
  },

  // ---- SECCION: Bloques Filatecnica ----
  {
    id: 'hero-filatecnica',
    label: 'Hero Principal',
    category: 'Filatecnica',
    content: `
<section style="background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#0f172a 100%);padding:100px 40px;text-align:center">
  <span style="display:inline-block;background:rgba(59,130,246,0.15);border:1px solid #3b82f6;color:#93c5fd;font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;padding:6px 16px;border-radius:50px;margin-bottom:24px;font-family:Inter,sans-serif">Expertos Tecnológicos</span>
  <h1 style="font-family:Inter,sans-serif;font-size:48px;font-weight:800;color:#fff;line-height:1.15;margin-bottom:20px">
    Tu experto en <span style="color:#60a5fa">informática</span>, energía y <span style="color:#22d3ee">telefonía IP</span>
  </h1>
  <p style="font-family:Inter,sans-serif;font-size:18px;color:#94a3b8;max-width:600px;margin:0 auto 40px;line-height:1.7">
    Soluciones tecnológicas de alta calidad para empresas de todos los tamaños. Servicio intuitivo y dinámico.
  </p>
  <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
    <a href="#contacto" style="background:#3b82f6;color:#fff;font-family:Inter,sans-serif;font-size:15px;font-weight:600;padding:14px 32px;border-radius:50px;text-decoration:none">Contáctanos</a>
    <a href="#servicios" style="border:1px solid #64748b;color:#94a3b8;font-family:Inter,sans-serif;font-size:15px;font-weight:600;padding:14px 32px;border-radius:50px;text-decoration:none">Ver servicios</a>
  </div>
</section>`,
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"/></svg>',
  },
  {
    id: 'navbar',
    label: 'Navegación',
    category: 'Filatecnica',
    content: `
<header style="background:#fff;padding:16px 40px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 1px 3px rgba(0,0,0,0.1);position:sticky;top:0;z-index:100">
  <a href="#" style="font-family:Inter,sans-serif;font-size:20px;font-weight:800;color:#0f172a;text-decoration:none">Filat<span style="color:#3b82f6">ecnica</span></a>
  <nav style="display:flex;gap:32px;font-family:Inter,sans-serif;font-size:14px;font-weight:500">
    <a href="#" style="color:#374151;text-decoration:none">Inicio</a>
    <a href="#" style="color:#374151;text-decoration:none">Consultoría</a>
    <a href="#" style="color:#374151;text-decoration:none">Informática</a>
    <a href="#" style="color:#374151;text-decoration:none">Energía</a>
    <a href="#" style="color:#374151;text-decoration:none">Telecomunicaciones</a>
    <a href="#" style="background:#3b82f6;color:#fff;padding:8px 20px;border-radius:50px;text-decoration:none">Contacto</a>
  </nav>
</header>`,
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>',
  },
  {
    id: 'services-cards',
    label: 'Cards Servicios',
    category: 'Filatecnica',
    content: `
<section style="padding:80px 40px;background:#f8fafc">
  <div style="text-align:center;margin-bottom:48px">
    <div style="width:60px;height:4px;background:linear-gradient(90deg,#3b82f6,#06b6d4);border-radius:2px;margin:0 auto 20px"></div>
    <h2 style="font-family:Inter,sans-serif;font-size:36px;font-weight:800;color:#0f172a;margin-bottom:12px">Nuestros Servicios</h2>
    <p style="font-family:Inter,sans-serif;color:#64748b;font-size:16px">Soluciones tecnológicas integrales para tu empresa</p>
  </div>
  <div style="display:flex;gap:24px;max-width:1100px;margin:0 auto;flex-wrap:wrap">
    <div style="flex:1;min-width:260px;background:#fff;border-radius:16px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,0.08)">
      <div style="width:56px;height:56px;background:#dbeafe;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;font-size:28px">💻</div>
      <h3 style="font-family:Inter,sans-serif;font-size:20px;font-weight:700;color:#0f172a;margin-bottom:12px">Informática</h3>
      <p style="font-family:Inter,sans-serif;font-size:15px;color:#64748b;line-height:1.7">Equipos, software y soporte técnico con la última tecnología del mercado.</p>
    </div>
    <div style="flex:1;min-width:260px;background:#fff;border-radius:16px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,0.08)">
      <div style="width:56px;height:56px;background:#cffafe;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;font-size:28px">📞</div>
      <h3 style="font-family:Inter,sans-serif;font-size:20px;font-weight:700;color:#0f172a;margin-bottom:12px">Telefonía IP</h3>
      <p style="font-family:Inter,sans-serif;font-size:15px;color:#64748b;line-height:1.7">Comunicación empresarial de alta calidad con tecnología VoIP avanzada.</p>
    </div>
    <div style="flex:1;min-width:260px;background:#fff;border-radius:16px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,0.08)">
      <div style="width:56px;height:56px;background:#ede9fe;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;font-size:28px">📄</div>
      <h3 style="font-family:Inter,sans-serif;font-size:20px;font-weight:700;color:#0f172a;margin-bottom:12px">Ofimática</h3>
      <p style="font-family:Inter,sans-serif;font-size:15px;color:#64748b;line-height:1.7">Software y soluciones para maximizar la productividad de tu equipo.</p>
    </div>
  </div>
</section>`,
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"/></svg>',
  },
  {
    id: 'stats-bar',
    label: 'Estadísticas',
    category: 'Filatecnica',
    content: `
<section style="background:#3b82f6;padding:48px 40px">
  <div style="display:flex;gap:20px;max-width:1100px;margin:0 auto;flex-wrap:wrap;justify-content:center;text-align:center">
    <div style="flex:1;min-width:150px"><p style="font-family:Inter,sans-serif;font-size:40px;font-weight:800;color:#fff">+500</p><p style="font-family:Inter,sans-serif;font-size:14px;color:#bfdbfe;margin-top:4px">Clientes satisfechos</p></div>
    <div style="flex:1;min-width:150px"><p style="font-family:Inter,sans-serif;font-size:40px;font-weight:800;color:#fff">20+</p><p style="font-family:Inter,sans-serif;font-size:14px;color:#bfdbfe;margin-top:4px">Años de experiencia</p></div>
    <div style="flex:1;min-width:150px"><p style="font-family:Inter,sans-serif;font-size:40px;font-weight:800;color:#fff">4</p><p style="font-family:Inter,sans-serif;font-size:14px;color:#bfdbfe;margin-top:4px">Áreas de especialización</p></div>
    <div style="flex:1;min-width:150px"><p style="font-family:Inter,sans-serif;font-size:40px;font-weight:800;color:#fff">24/7</p><p style="font-family:Inter,sans-serif;font-size:14px;color:#bfdbfe;margin-top:4px">Soporte técnico</p></div>
  </div>
</section>`,
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
  },
  {
    id: 'contact-form',
    label: 'Formulario Contacto',
    category: 'Filatecnica',
    content: `
<section id="contacto" style="padding:80px 40px;background:#fff">
  <div style="max-width:600px;margin:0 auto">
    <div style="text-align:center;margin-bottom:40px">
      <div style="width:60px;height:4px;background:linear-gradient(90deg,#3b82f6,#06b6d4);border-radius:2px;margin:0 auto 20px"></div>
      <h2 style="font-family:Inter,sans-serif;font-size:36px;font-weight:800;color:#0f172a;margin-bottom:12px">Contáctanos</h2>
      <p style="font-family:Inter,sans-serif;color:#64748b">Estamos listos para ayudarte. Escríbenos.</p>
    </div>
    <form style="display:flex;flex-direction:column;gap:16px">
      <input type="text" placeholder="Nombre completo" style="border:1px solid #e2e8f0;border-radius:12px;padding:14px 16px;font-family:Inter,sans-serif;font-size:14px;outline:none;color:#374151"/>
      <input type="email" placeholder="Correo electrónico" style="border:1px solid #e2e8f0;border-radius:12px;padding:14px 16px;font-family:Inter,sans-serif;font-size:14px;outline:none;color:#374151"/>
      <select style="border:1px solid #e2e8f0;border-radius:12px;padding:14px 16px;font-family:Inter,sans-serif;font-size:14px;color:#64748b;background:#fff">
        <option>Selecciona un servicio</option>
        <option>Informática</option>
        <option>Telefonía IP</option>
        <option>Energía</option>
        <option>Consultoría</option>
      </select>
      <textarea placeholder="Tu mensaje..." rows="4" style="border:1px solid #e2e8f0;border-radius:12px;padding:14px 16px;font-family:Inter,sans-serif;font-size:14px;resize:none;color:#374151"></textarea>
      <button type="submit" style="background:#3b82f6;color:#fff;font-family:Inter,sans-serif;font-size:15px;font-weight:600;padding:14px;border-radius:12px;border:none;cursor:pointer">Enviar mensaje</button>
    </form>
  </div>
</section>`,
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  },
  {
    id: 'energy-section',
    label: 'Sección Energía',
    category: 'Filatecnica',
    content: `
<section style="padding:80px 40px;background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);text-align:center">
  <div style="font-size:64px;margin-bottom:20px">⚡</div>
  <div style="width:56px;height:3px;background:#facc15;border-radius:2px;margin:0 auto 24px"></div>
  <h2 style="font-family:Inter,sans-serif;font-size:36px;font-weight:800;color:#fff;margin-bottom:16px">Soluciones de <span style="color:#facc15">Energía</span></h2>
  <p style="font-family:Inter,sans-serif;font-size:16px;color:#94a3b8;max-width:560px;margin:0 auto 32px;line-height:1.7">Optimiza el consumo, reduce costos y contribuye a un modelo más sostenible para tu empresa.</p>
  <a href="#contacto" style="display:inline-block;background:#facc15;color:#0f172a;font-family:Inter,sans-serif;font-size:15px;font-weight:700;padding:14px 32px;border-radius:50px;text-decoration:none">Consultar soluciones</a>
</section>`,
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
  },
  {
    id: 'footer',
    label: 'Pie de página',
    category: 'Filatecnica',
    content: `
<footer style="background:#0f172a;padding:48px 40px;text-align:center">
  <p style="font-family:Inter,sans-serif;font-size:20px;font-weight:800;color:#fff;margin-bottom:20px">Filat<span style="color:#3b82f6">ecnica</span> s.l.</p>
  <div style="display:flex;gap:24px;justify-content:center;flex-wrap:wrap;margin-bottom:32px">
    <a href="#" style="font-family:Inter,sans-serif;font-size:13px;color:#64748b;text-decoration:none">Inicio</a>
    <a href="#" style="font-family:Inter,sans-serif;font-size:13px;color:#64748b;text-decoration:none">Consultoría</a>
    <a href="#" style="font-family:Inter,sans-serif;font-size:13px;color:#64748b;text-decoration:none">Informática</a>
    <a href="#" style="font-family:Inter,sans-serif;font-size:13px;color:#64748b;text-decoration:none">Energía</a>
    <a href="#" style="font-family:Inter,sans-serif;font-size:13px;color:#64748b;text-decoration:none">Política de Privacidad</a>
    <a href="#" style="font-family:Inter,sans-serif;font-size:13px;color:#64748b;text-decoration:none">Aviso Legal</a>
  </div>
  <p style="font-family:Inter,sans-serif;font-size:12px;color:#475569">© 2026 Copyright. Todos los derechos reservados por Filatecnica s.l.</p>
</footer>`,
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 20h16M4 16h16M4 12h8"/></svg>',
  },
  {
    id: 'cta-banner',
    label: 'Banner CTA',
    category: 'Filatecnica',
    content: `
<section style="background:#eff6ff;border-top:1px solid #bfdbfe;border-bottom:1px solid #bfdbfe;padding:48px 40px">
  <div style="display:flex;align-items:center;justify-content:space-between;max-width:1100px;margin:0 auto;flex-wrap:wrap;gap:24px">
    <div>
      <h3 style="font-family:Inter,sans-serif;font-size:24px;font-weight:700;color:#0f172a;margin-bottom:8px">Asistencia Técnica Remota</h3>
      <p style="font-family:Inter,sans-serif;font-size:15px;color:#64748b">Soporte inmediato desde cualquier lugar sin salir de tu oficina.</p>
    </div>
    <a href="https://download.remotepc.com/downloads/OTA/RemotePCAttended.exe" style="background:#3b82f6;color:#fff;font-family:Inter,sans-serif;font-size:15px;font-weight:600;padding:14px 28px;border-radius:50px;text-decoration:none;white-space:nowrap">Iniciar asistencia</a>
  </div>
</section>`,
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
  },
  {
    id: 'testimonial',
    label: 'Testimonio',
    category: 'Filatecnica',
    content: `
<div style="background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:32px;max-width:500px;margin:20px auto">
  <div style="display:flex;gap:4px;margin-bottom:16px">
    <span style="color:#facc15;font-size:18px">★★★★★</span>
  </div>
  <p style="font-family:Inter,sans-serif;font-size:16px;color:#374151;line-height:1.7;margin-bottom:20px;font-style:italic">"Excelente servicio técnico. Resolvieron nuestros problemas de red en tiempo récord. Muy profesionales."</p>
  <div style="display:flex;align-items:center;gap:12px">
    <div style="width:40px;height:40px;border-radius:50%;background:#3b82f6;display:flex;align-items:center;justify-content:center;color:#fff;font-family:Inter,sans-serif;font-weight:700">JL</div>
    <div><p style="font-family:Inter,sans-serif;font-weight:600;font-size:14px;color:#0f172a">Juan López</p><p style="font-family:Inter,sans-serif;font-size:12px;color:#64748b">Director, Empresa XYZ</p></div>
  </div>
</div>`,
    media: '<svg width="40" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>',
  },
]
