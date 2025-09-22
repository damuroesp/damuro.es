// Datos de experiencias con rutas locales Y DESCRIPCIONES
const experiences = {
  'customer-service': {
    title: 'Atención al cliente',
    icon: 'fas fa-headset',
    jobs: [
      {
        logo: 'src/img/logos/Orange.jpeg',
        company: 'Orange España Servicios de Telemarketing',
        position: 'Teleoperador',
        duration: 'jun 2021 - jul 2021',
        description: 'Atención al cliente para servicios de fibra y móvil. Gestión de incidencias, venta de servicios y fidelización de clientes. Alto nivel de resolución de problemas y satisfacción del cliente.'
      },
      {
        logo: 'src/img/logos/Liberbank.jpg',
        company: 'Liberbank',
        position: 'Teleoperador',
        duration: 'sep 2021 - sep 2021',
        description: 'Atención a clientes bancarios, gestión de consultas sobre productos financieros, soporte en banca online y resolución de incidencias. Cumplimiento de protocolos de seguridad y protección de datos.'
      },
      {
        logo: 'src/img/logos/TotalEnergies.jpg',
        company: 'TotalEnergies',
        position: 'Teleoperador',
        duration: 'dic 2021 - mar 2022',
        description: 'Atención a clients de energía, gestión de contrataciones, modificaciones contractuales y resolución de incidencias. Formación específica en sector energético y comercialización.'
      },
      {
        logo: 'src/img/logos/Liberbank.jpg',
        company: 'Liberbank',
        position: 'Teleoperador',
        duration: 'may 2022 - may 2022',
        description: 'Segunda etapa en Liberbank, especializado en gestión de cartera de clientes y fidelización. Implementación de estrategias de retención y mejora de la experiencia del cliente.'
      },
      {
        logo: 'src/img/logos/Ayesa.jpg',
        company: 'Ayesa',
        position: 'Teleoperador',
        duration: 'ene 2023 - mar 2023',
        description: 'Atención multicanal (voz, email, chat) para clientes de diversos sectores. Enfoque en resolución eficiente y medición de indicadores de calidad y satisfacción.'
      }
    ]
  },
  'media': {
    title: 'Medios de comunicación',
    icon: 'fas fa-broadcast-tower',
    jobs: [
      {
        logo: 'src/img/logos/ElComercio.jpeg',
        company: 'Diario El Comercio',
        position: 'Colaborador',
        duration: 'oct 2009 - oct 2014',
        description: 'Colaboraciones en sección de tecnología y videojuegos. Redacción de artículos, análisis de productos y cobertura de eventos. Desarrollo de habilidades de comunicación y adaptación de contenido para diferentes audiencias.'
      },
      {
        logo: 'src/img/logos/OPlay.jpeg',
        company: 'Ontech Play',
        position: 'Founder & Editor',
        duration: 'feb 2013 - jun 2019',
        description: 'Fundador y editor principal de medio especializado en tecnología. Gestión de equipo de redactores, planificación de contenidos, SEO, redes sociales y monetización. Crecimiento orgánico hasta 10,000 visitas mensuales.'
      }
    ]
  },
  'sales': {
    title: 'Ventas',
    icon: 'fas fa-chart-line',
    jobs: [
      {
        logo: 'src/img/logos/LCDLC.png',
        company: 'La Casa de las Carcasas',
        position: 'Sales Assistant',
        duration: 'dic 2021 - ene 2022',
        description: 'Venta directa y asesoramiento personalizado en accesorios. Gestiono tu experiencia para que encuentres protección, estilo o facilidad para tu móvil. Juntos logramos tu objetivo y te vas con lo que necesitas.'
      },
      {
        logo: 'src/img/logos/NVIDIA.png',
        company: 'NVIDIA',
        position: 'Promotor',
        duration: 'ene 2024 - jun 2024',
        description: 'Impulsando la tecnología NVIDIA en MediaMarkt Siero. Realizo demostraciones y ofrezco las mejores tarjetas gráficas y soluciones de IA/Gaming. Juntos convertimos specs técnicas en argumentos de venta.'
      },
      {
        logo: 'src/img/logos/Samsung.png',
        company: 'Samsung (Gama Blanca)',
        position: 'Promotor',
        duration: 'jul 2024 - jul 2024',
        description: 'Promociono la gama de electrodomésticos Samsung con las tecnologías más innovadoras. Te muestro en persona cómo ahorrar energía y cuidar del planeta con tu cocina. #MadeBySamsung'
      },
      {
        logo: 'src/img/logos/ASUS.png',
        company: 'ASUS',
        position: 'Promotor',
        duration: 'jul 2024 - jul 2025',
        description: 'Tu asesor especializado en tecnología ASUS. Te ayudo a encontrar el portátil, componente o periférico que mejor se adapte a tus necesidades de gaming o trabajo. Experiencia de compra elevada y trato de usuario a usuario.'
      },
      {
        logo: 'src/img/logos/Samsung.png',
        company: 'Samsung (Galaxy)',
        position: 'Promotor',
        duration: 'jul 2025 - sep 2025',
        description: 'Promoción de dispositivos móviles Samsung Galaxy. Demostraciones de funciones avanzadas, ecosistema de productos y ventajas competitivas. Alto conocimiento técnico y habilidades de comunicación.'
      }
    ]
  },
  'it': {
    title: 'Informática y Telecomunicaciones',
    icon: 'fas fa-laptop-code',
    jobs: [
      {
        logo: 'src/img/logos/Gijon.jpeg',
        company: 'Ayuntamiento de Gijón (en prácticas)',
        position: 'Helpdesk N1',
        duration: 'mar 2016 - jun 2016',
        description: 'Soporte técnico a usuarios internos. Resolución de incidencias de hardware y software, mantenimiento de equipos y gestión de tickets. Primer contacto profesional en entorno IT corporativo.'
      },
      {
        logo: 'src/img/logos/Magmacultura.jpeg',
        company: 'Magmacultura',
        position: 'Técnico de Realidad Virtual (VR)',
        duration: 'jun 2022 - jul 2022',
        description: 'Configuración y mantenimiento de equipos de realidad virtual para eventos culturales. Soporte técnico in situ, formación de usuarios y resolución de incidencias. Experiencia en tecnologías inmersivas.'
      },
      {
        logo: 'src/img/logos/Telecable.jpg',
        company: 'Telecable',
        position: 'Helpdesk N1',
        duration: 'jun 2023 - sep 2023',
        description: 'Atención técnica a clientes de telecomunicaciones. Diagnóstico remoto de incidencias, configuración de routers y soporte para servicios de internet, telefonía y televisión. Alto índice de resolución en primer contacto.'
      }
    ]
  }
};

// ===== FUNCIONES PRINCIPALES (DEFINIDAS AL INICIO) =====

// Función para generar archivo VCF
function generateVCF() {
  const vcfData = `BEGIN:VCARD
VERSION:3.0
FN:David Muñoz Rodríguez
ORG:Tech Specialist
TITLE:Tech Specialist
TEL;TYPE=WORK,VOICE:+34 638 035 001
EMAIL;TYPE=PREF,INTERNET:david@dmunoz.es
URL:${window.location.href}
NOTE:#MakingThingsHappen
END:VCARD`;
  
  const blob = new Blob([vcfData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'david_munoz_rodriguez.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  URL.revokeObjectURL(url);
}

// Función para descargar CV en español
function downloadCVEsp() {
  const url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
  const a = document.createElement('a');
  a.href = url;
  a.download = 'David_Munoz_CV_Espanol.pdf';
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Función para descargar CV en inglés
function downloadCVEng() {
  const url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
  const a = document.createElement('a');
  a.href = url;
  a.download = 'David_Munoz_CV_English.pdf';
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Funciones de compartir
function shareViaWhatsApp() {
  const url = `https://api.whatsapp.com/send?text=Mira la tarjeta digital de David Muñoz - Tech Specialist: ${encodeURIComponent(window.location.href)}`;
  window.open(url, '_blank');
}

function shareViaTelegram() {
  const url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=Mira la tarjeta digital de David Muñoz - Tech Specialist`;
  window.open(url, '_blank');
}

function shareViaEmail() {
  const subject = 'Tarjeta digital de David Muñoz - Tech Specialist';
  const body = `Te comparto la tarjeta digital de David Muñoz:\n\n${window.location.href}\n\nTech Specialist - #MakingThingsHappen`;
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function shareViaLinkedIn() {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
  window.open(url, '_blank');
}

function shareViaTwitter() {
  const url = `https://twitter.com/intent/tweet?text=Mira la tarjeta digital de David Muñoz - Tech Specialist&url=${encodeURIComponent(window.location.href)}`;
  window.open(url, '_blank');
}

function copyToClipboard() {
  navigator.clipboard.writeText(window.location.href).then(function() {
    alert('Enlace copiado al portapapeles');
  }, function() {
    const textArea = document.createElement('textarea');
    textArea.value = window.location.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Enlace copiado al portapapeles');
  });
}

// Función para abrir el modal de experiencias
function openExperienceModal(category) {
  const experienceData = experiences[category];
  
  if (!experienceData) {
    console.error('Categoría no encontrada:', category);
    return;
  }
  
  let content = '';
  
  experienceData.jobs.forEach(job => {
    content += `
      <div class="job">
        <div class="job-header">
          ${job.logo ? `<img src="${job.logo}" alt="${job.company}" class="job-logo" onerror="this.style.display='none'">` : ''}
          <div class="job-info">
            <h4>${job.position}</h4>
            <p>${job.company}</p>
            <span class="job-duration">${job.duration}</span>
          </div>
        </div>
        <div class="job-description">
          <p>${job.description}</p>
        </div>
      </div>
    `;
  });
  
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const experienceModal = document.getElementById('experienceModal');
  
  modalTitle.innerHTML = `
    <div class="modal-category-icon">
      <i class="${experienceData.icon}"></i>
    </div>
    <span>${experienceData.title}</span>
  `;
  modalContent.innerHTML = content;
  experienceModal.style.display = 'block';
}

// ===== FUNCIONES PARA EL QR (DEFINIDAS AL INICIO) =====

function generateQRCode(qrCodeContainer) {
    console.log('🔄 Generando código QR...');
    if (!qrCodeContainer) {
        console.error('❌ qrCodeContainer no definido');
        return;
    }
    
    qrCodeContainer.innerHTML = '';
    
    if (typeof QRCode === 'undefined') {
        console.error('Librería QRCode no cargada');
        qrCodeContainer.innerHTML = `
            <div style="text-align: center; padding: 20px; color: #0066FF;">
                <i class="fas fa-qrcode" style="font-size: 80px; margin-bottom: 15px;"></i>
                <p style="font-weight: bold; margin: 10px 0;">David Muñoz Rodríguez</p>
                <p>Tech Specialist</p>
                <p>#MakingThingsHappen</p>
            </div>
        `;
        return;
    }
    
    try {
        new QRCode(qrCodeContainer, {
            text: window.location.href,
            width: 200,
            height: 200,
            colorDark: "#0066FF",
            colorLight: "#FFFFFF",
            correctLevel: QRCode.CorrectLevel.H
        });
        console.log('✅ QR generado correctamente para:', window.location.href);
    } catch (error) {
        console.error('❌ Error generando QR:', error);
    }
}

function saveQRCode(qrCodeContainer) {
    const canvas = qrCodeContainer.querySelector('canvas');
    if (canvas) {
        try {
            const image = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = image;
            a.download = 'david_munoz_qr.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            console.log('✅ QR guardado correctamente');
        } catch (error) {
            console.error('❌ Error guardando QR:', error);
            alert('Error al guardar el QR. Inténtalo de nuevo.');
        }
    } else {
        console.error('❌ No se encontró el canvas del QR');
        alert('Primero genera el código QR.');
    }
}

function shareQRCode(qrCodeContainer) {
    const canvas = qrCodeContainer.querySelector('canvas');
    if (canvas) {
        try {
            canvas.toBlob(function(blob) {
                if (navigator.share && navigator.canShare) {
                    const file = new File([blob], 'david_munoz_qr.png', { type: 'image/png' });
                    
                    if (navigator.canShare({ files: [file] })) {
                        navigator.share({
                            files: [file],
                            title: 'David Muñoz - Tech Specialist',
                            text: 'Escanea este QR para visitar mi perfil profesional - #MakingThingsHappen'
                        }).then(() => {
                            console.log('✅ QR compartido exitosamente');
                        }).catch(error => {
                            console.log('❌ Compartir cancelado:', error);
                        });
                    } else {
                        saveQRCode(qrCodeContainer);
                    }
                } else {
                    saveQRCode(qrCodeContainer);
                }
            });
        } catch (error) {
            console.error('❌ Error compartiendo QR:', error);
            alert('Error al compartir el QR. Puedes guardarlo y compartirlo manualmente.');
        }
    } else {
        console.error('❌ No se encontró el canvas del QR');
        alert('Primero genera el código QR.');
    }
}

function openQRModal(qrModal, qrCodeContainer) {
    console.log('🎯 Abriendo modal QR...');
    
    if (!qrModal) {
        console.error('❌ qrModal no definido');
        return;
    }
    
    generateQRCode(qrCodeContainer);
    
    qrModal.style.display = 'flex';
    setTimeout(() => {
        qrModal.classList.add('active');
    }, 10);
    
    console.log('✅ Modal QR activado con QR de:', window.location.href);
}

function closeQRModal(qrModal) {
    if (!qrModal) return;
    
    qrModal.classList.remove('active');
    setTimeout(() => {
        qrModal.style.display = 'none';
    }, 300);
}

// Función para cerrar el menú flotante
function closeFloatingMenu(floatingButtons, mainFloatingBtn) {
    if (floatingButtons) floatingButtons.classList.remove('expanded');
    if (mainFloatingBtn) {
        const icon = mainFloatingBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-plus';
    }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando aplicación...');
    
    // ===== INICIALIZAR VARIABLES =====
    const qrModal = document.getElementById('qrModal');
    const qrCodeContainer = document.getElementById('qrCode');
    const qrClose = document.getElementById('qrClose');
    const saveQrBtn = document.getElementById('saveQrBtn');
    const shareQrBtn = document.getElementById('shareQrBtn');
    
    // Elementos de los botones flotantes
    const floatingButtons = document.getElementById('floatingButtons');
    const mainFloatingBtn = document.getElementById('mainFloatingBtn');
    const cvEspFloatingBtn = document.getElementById('cvEspFloatingBtn');
    const cvEngFloatingBtn = document.getElementById('cvEngFloatingBtn');
    const contactFloatingBtn = document.getElementById('contactFloatingBtn');
    const qrFloatingBtn = document.getElementById('qrFloatingBtn');
    const shareFloatingBtn = document.getElementById('shareFloatingBtn');
    
    // Modales
    const shareModal = document.getElementById('shareModal');
    const shareClose = document.getElementById('shareClose');
    const experienceModal = document.getElementById('experienceModal');
    const closeModal = document.querySelector('.close-modal');
    
    // Elementos de compartir
    const shareWhatsApp = document.getElementById('shareWhatsApp');
    const shareTelegram = document.getElementById('shareTelegram');
    const shareEmail = document.getElementById('shareEmail');
    const shareLinkedIn = document.getElementById('shareLinkedIn');
    const shareTwitter = document.getElementById('shareTwitter');
    const copyLink = document.getElementById('copyLink');
    
    // Otros elementos
    const accordionBtn = document.querySelector('.accordion-btn');
    const accordionContent = document.querySelector('.accordion-content');
    const categoryCards = document.querySelectorAll('.category-card');
    
    // Estado de los botones flotantes
    let isExpanded = false;
    
    // ===== EVENT LISTENERS PARA BOTONES FLOTANTES =====
    
    // Botón principal
    mainFloatingBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        floatingButtons.classList.toggle('expanded', isExpanded);
        const icon = mainFloatingBtn.querySelector('i');
        icon.className = isExpanded ? 'fas fa-times' : 'fas fa-plus';
    });
    
    // CV Español
    cvEspFloatingBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('📄 CV Español clickeado');
        downloadCVEsp();
        closeFloatingMenu(floatingButtons, mainFloatingBtn);
    });
    
    // CV Inglés
    cvEngFloatingBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('📄 CV Inglés clickeado');
        downloadCVEng();
        closeFloatingMenu(floatingButtons, mainFloatingBtn);
    });
    
    // Contacto - VCF
    contactFloatingBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('📇 Contacto clickeado');
        generateVCF();
        closeFloatingMenu(floatingButtons, mainFloatingBtn);
    });
    
    // QR - CORREGIDO: ahora pasa los parámetros necesarios
    qrFloatingBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🎯 Botón QR clickeado');
        openQRModal(qrModal, qrCodeContainer);
        closeFloatingMenu(floatingButtons, mainFloatingBtn);
    });
    
    // Compartir
    shareFloatingBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🔗 Compartir clickeado');
        if (shareModal) {
            shareModal.classList.add('active');
        }
        closeFloatingMenu(floatingButtons, mainFloatingBtn);
    });
    
    // ===== EVENT LISTENERS PARA MODALES =====
    
    // Cerrar modal QR
    qrClose.addEventListener('click', function(e) {
        e.preventDefault();
        closeQRModal(qrModal);
    });
    
    qrModal.addEventListener('click', function(e) {
        if (e.target === qrModal) closeQRModal(qrModal);
    });
    
    // Prevenir cierre accidental del modal QR
    const qrModalContent = qrModal.querySelector('.qr-modal-content');
    if (qrModalContent) {
        qrModalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Guardar QR
    saveQrBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('💾 Guardar QR clickeado');
        saveQRCode(qrCodeContainer);
    });
    
    // Compartir QR
    shareQrBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🔗 Compartir QR clickeado');
        shareQRCode(qrCodeContainer);
    });
    
    // Modal compartir
    if (shareClose) {
        shareClose.addEventListener('click', function() {
            shareModal.classList.remove('active');
        });
    }
    
    if (shareModal) {
        shareModal.addEventListener('click', function(e) {
            if (e.target === shareModal) {
                shareModal.classList.remove('active');
            }
        });
    }
    
    // Botones de compartir
    if (shareWhatsApp) shareWhatsApp.addEventListener('click', shareViaWhatsApp);
    if (shareTelegram) shareTelegram.addEventListener('click', shareViaTelegram);
    if (shareEmail) shareEmail.addEventListener('click', shareViaEmail);
    if (shareLinkedIn) shareLinkedIn.addEventListener('click', shareViaLinkedIn);
    if (shareTwitter) shareTwitter.addEventListener('click', shareViaTwitter);
    if (copyLink) copyLink.addEventListener('click', copyToClipboard);
    
    // ===== EVENT LISTENERS PARA DASHBOARD =====
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            openExperienceModal(category);
        });
    });
    
    // Cerrar modal de experiencias
    closeModal.addEventListener('click', function() {
        experienceModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === experienceModal) {
            experienceModal.style.display = 'none';
        }
    });
    
    // ===== EVENT LISTENERS PARA OTROS ELEMENTOS =====
    
    // Acordeón
    accordionBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        accordionContent.classList.toggle('active');
    });
    
    // Botones de contacto en la sección principal
    document.querySelectorAll('.btn-call').forEach(btn => {
        btn.addEventListener('click', function() {
            window.open('tel:+34638035001');
        });
    });
    
    document.querySelectorAll('.btn-whatsapp').forEach(btn => {
        btn.addEventListener('click', function() {
            window.open('https://wa.me/34638035001');
        });
    });
    
    document.querySelectorAll('.btn-email').forEach(btn => {
        btn.addEventListener('click', function() {
            window.location.href = 'mailto:david@dmunoz.es';
        });
    });
    
    // Sticky banner
    window.addEventListener('scroll', function() {
        const stickyBanner = document.getElementById('stickyBanner');
        if (window.scrollY > 100) {
            stickyBanner.classList.add('compact');
        } else {
            stickyBanner.classList.remove('compact');
        }
    });
    
    console.log('✅ Aplicación inicializada correctamente');
});