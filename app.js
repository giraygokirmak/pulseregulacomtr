/* PulseRegula — i18n + mobile nav (fully static, no server code) */
(function () {
  "use strict";

  var SUPPORTED = ["tr", "en", "de"];
  var DEFAULT_LANG = "en";

  var I18N = {
    tr: {
      meta: {
        title: "PulseRegula | Tıbbi Cihaz Regülasyon ve Kalite Danışmanlığı",
        description: "MDR ve IVDR uyumunu netleştirin. Belgeli uzmanlıkla bağımsız danışmanlık: ISO 13485, teknik dokümantasyon, denetim hazırlığı. Görüşme talep edin."
      },
      skip: "İçeriğe atla",
      navAria: "Ana menü",
      menuAria: "Menüyü aç/kapat",
      badgesAria: "Uzmanlık alanları",
      navServices: "Hizmetler",
      navProcess: "Süreç",
      navAbout: "Hakkında",
      navFaq: "SSS",
      navContact: "Görüşme Talep Et",
      heroEyebrow: "Tıbbi Cihaz & IVD Uyum Danışmanlığı",
      heroH1: "Regülasyonları karşılayın. Piyasaya güvenle ulaşın.",
      heroSub: "PulseRegula'nın bağımsız danışmanlığı MDR ve IVDR uyumunu net, yönetilebilir adımlara dönüştürür — belgeli ISO 13485 deneyimiyle.",
      heroCta: "Görüşme Talep Edin",
      servicesH2: "Piyasaya daha hızlı ulaşmanıza yardımcı olan danışmanlık",
      servicesIntro: "Uyum bir engel olmak zorunda değil. Ürününüzün yaşam döngüsünün her aşamasında yanınızdayız.",
      svc1H: "Uyum stratejisi ve boşluk analizi",
      svc1a: "MDR 2017/745 ve IVDR 2017/746 gerekliliklerinin ürününüze göre haritalanması",
      svc1b: "Mevcut durum analizi ve net bir yol haritası",
      svc1c: "Onaylanmış kuruluş iletişimi ve denetime hazırlık desteği",
      svc2H: "Teknik dokümantasyon",
      svc2a: "SDS, etiket, DoC, IFU, PMS ve PSUR hazırlığı",
      svc2b: "ISO 14971 ve ISO 31000'e uygun risk yönetimi dosyaları",
      svc2c: "Türkçe, İngilizce ve Almanca denetime hazır dokümantasyon",
      svc3H: "Kayıt ve kalite sistemleri",
      svc3a: "ÜTS ve EUDAMED kayıt başvuruları",
      svc3b: "ISO 13485:2016 ve ISO 9001:2015 uyumlu KYS kurulumu",
      svc3c: "İç denetim, CAPA yönetimi ve tedarikçi kalite denetimleri",
      processH2: "Uyuma giden net bir yol",
      processIntro: "Her iş birliği aynı kanıtlanmış dört adımı izler.",
      step1H: "Keşif",
      step1P: "Ürününüzü, sınıfını ve hedef pazarlarınızı anlıyoruz.",
      step2H: "Boşluk analizi",
      step2P: "Mevcut dokümantasyonunuzu MDR/IVDR gereklilikleriyle karşılaştırıyoruz.",
      step3H: "Yol haritası",
      step3P: "Önceliklendirilmiş, gerçekçi takvimli bir uyum planı çıkarıyoruz.",
      step4H: "Uygulama",
      step4P: "Dokümantasyon, denetim hazırlığı ve kayıtlarda yanınızdayız.",
      aboutH: "Belgelenmiş deneyim, bağımsız odak",
      aboutIntro: "PulseRegula, sağlık sektöründe on yılı aşan regülasyon ve kalite deneyimi üzerine kuruldu.",
      founderH: "Kurucu: Begüm Gizem Gökırmak",
      founderA: "Regulatory Affairs & Quality Manager — Bioeksen R&D Tech. / BioeXsen GmbH (IVDR uyumu, denetimler, EUDAMED)",
      founderB: "Regulatory Affairs & Quality Manager — Gazi Kimya (ISO 13485 ve ISO 9001 sertifikasyonu, ÜTS başvuruları)",
      founderC: "İstanbul Üniversitesi — Biyolojik Bilimler Yüksek Lisans",
      certsH: "Sertifikalar",
      certA: "BSI ISO 13485:2016 Auditor/Lead Auditor eğitimi",
      certB: "BSI ISO 14971:2019 Risk Yönetimi",
      certC: "BSI ISO 9001:2015 İç Denetçi",
      certD: "SZUTEST ISO 19011 Denetim Kılavuzları",
      certE: "KIWA ISO 13485:2016 İç Denetçi",
      certF: "Valtech proses, paketleme ve temiz oda validasyonu eğitimleri",
      faqH: "Sık sorulan sorular",
      q1: "Ürünüm MDR veya IVDR kapsamında mı?",
      a1: "Sınıflandırma, ürününüzün kullanım amacına bağlıdır. Kısa bir keşif görüşmesinde kapsamı netleştirip hangi kuralların geçerli olduğunu söylüyoruz.",
      q2: "Hangi dokümanların eksik olduğunu nasıl anlarız?",
      a2: "Boşluk analizi, mevcut teknik dosyanızı ilgili gerekliliklerle madde madde karşılaştırır. Sonuçta eksiklerin öncelik sırasına göre listelendiği bir rapor alırsınız.",
      q3: "Onaylanmış kuruluş denetimine nasıl hazırlanırız?",
      a3: "Denetim öncesi iç denetimler ve örnek incelemelerle zayıf noktaları bulur, düzeltici faaliyetleri planlarız. Deneyim: ISO 13485 ve ISO 9001 kapsamında onaylanmış kuruluş denetimleri ve bulgu yönetimi.",
      q4: "Türkiye ve AB pazarları için ayrı dokümantasyon mu gerekli?",
      a4: "Evet — Türkiye'de ÜTS kaydı, AB'de ise EUDAMED ve MDR/IVDR teknik dosyası gerekir. İki pazar için üç dilde (TR/EN/DE) tutarlı dokümantasyon hazırlıyoruz.",
      q5: "Sadece belirli bir konuda destek alabilir miyiz?",
      a5: "Evet. Risk yönetimi dosyası, PMS/PSUR hazırlığı veya tek bir ÜTS başvurusu gibi tek kalem işler de alıyoruz. Kapsamı birlikte tanımlarız.",
      contactH: "Uyum yolculuğunuza bugün başlayın",
      contactIntro: "Kısaca durumunuzu anlatın, size en uygun yolu birlikte bulalım.",
      contactMail: "E-posta Gönderin",
      contactLinkedin: "LinkedIn'den Ulaşın",
      contactLoc: "İstanbul, Türkiye",
      footerTag: "Regulatory Affairs & Quality Consulting",
      mailSubject: "PulseRegula – Görüşme Talebi"
    },

    en: {
      meta: {
        title: "PulseRegula | Medical Device Regulatory & Quality Consulting",
        description: "Get clear on MDR and IVDR compliance. Independent consulting backed by documented ISO 13485 expertise: technical documentation, audit readiness. Book a call."
      },
      skip: "Skip to content",
      navAria: "Main menu",
      menuAria: "Toggle menu",
      badgesAria: "Areas of expertise",
      navServices: "Services",
      navProcess: "Process",
      navAbout: "About",
      navFaq: "FAQ",
      navContact: "Book a Call",
      heroEyebrow: "Medical Device & IVD Compliance Consulting",
      heroH1: "Meet the regulations. Reach the market with confidence.",
      heroSub: "PulseRegula's independent consulting turns MDR and IVDR compliance into clear, manageable steps — backed by documented ISO 13485 expertise.",
      heroCta: "Book a Call",
      servicesH2: "Consulting that helps you reach the market faster",
      servicesIntro: "Compliance does not have to be a barrier. We support every stage of your product's life cycle.",
      svc1H: "Compliance strategy and gap analysis",
      svc1a: "Mapping MDR 2017/745 and IVDR 2017/746 requirements to your product",
      svc1b: "Assessment of where you stand and a clear roadmap",
      svc1c: "Notified Body communication and audit-readiness support",
      svc2H: "Technical documentation",
      svc2a: "SDS, labels, DoC, IFU, PMS and PSUR preparation",
      svc2b: "Risk management files aligned with ISO 14971 and ISO 31000",
      svc2c: "Audit-ready documentation in Turkish, English and German",
      svc3H: "Registrations and quality systems",
      svc3a: "UTS and EUDAMED registration submissions",
      svc3b: "QMS setup aligned with ISO 13485:2016 and ISO 9001:2015",
      svc3c: "Internal audits, CAPA management and supplier quality audits",
      processH2: "A clear path to compliance",
      processIntro: "Every engagement follows the same proven four steps.",
      step1H: "Discovery",
      step1P: "We learn about your product, its class and your target markets.",
      step2H: "Gap analysis",
      step2P: "We compare your current documentation against MDR/IVDR requirements.",
      step3H: "Roadmap",
      step3P: "You get a prioritised compliance plan with a realistic timeline.",
      step4H: "Implementation",
      step4P: "We stand by you through documentation, audit preparation and registrations.",
      aboutH: "Documented experience, independent focus",
      aboutIntro: "PulseRegula is built on more than a decade of regulatory and quality experience in the health sector.",
      founderH: "Founder: Begüm Gizem Gökırmak",
      founderA: "Regulatory Affairs & Quality Manager — Bioeksen R&D Tech. / BioeXsen GmbH (IVDR compliance, audits, EUDAMED)",
      founderB: "Regulatory Affairs & Quality Manager — Gazi Kimya (ISO 13485 and ISO 9001 certification, UTS submissions)",
      founderC: "Istanbul University — MSc in Biological Sciences",
      certsH: "Certifications",
      certA: "BSI ISO 13485:2016 Auditor/Lead Auditor training",
      certB: "BSI ISO 14971:2019 Risk Management",
      certC: "BSI ISO 9001:2015 Internal Auditor",
      certD: "SZUTEST ISO 19011 Auditing Guidelines",
      certE: "KIWA ISO 13485:2016 Internal Auditor",
      certF: "Valtech process, packaging and cleanroom validation training",
      faqH: "Frequently asked questions",
      q1: "Is my product covered by MDR or IVDR?",
      a1: "Classification depends on your product's intended purpose. In a short discovery call we clarify the scope and which rules apply to you.",
      q2: "How do we find out which documents are missing?",
      a2: "A gap analysis compares your current technical file against the applicable requirements, item by item. You receive a report listing the gaps in priority order.",
      q3: "How do we prepare for a Notified Body audit?",
      a3: "We find weak points through internal audits and mock inspections, then plan corrective actions. Experience: Notified Body audits and findings management under ISO 13485 and ISO 9001.",
      q4: "Do we need separate documentation for Türkiye and the EU?",
      a4: "Yes — Türkiye requires UTS registration, while the EU requires EUDAMED and an MDR/IVDR technical file. We prepare consistent documentation for both markets in three languages (TR/EN/DE).",
      q5: "Can we get support on a single topic only?",
      a5: "Yes. We also take on single-item work such as a risk management file, PMS/PSUR preparation or a single UTS submission. We define the scope together.",
      contactH: "Start your compliance journey today",
      contactIntro: "Briefly describe your situation and we will find the best path together.",
      contactMail: "Send an Email",
      contactLinkedin: "Connect on LinkedIn",
      contactLoc: "Istanbul, Türkiye",
      footerTag: "Regulatory Affairs & Quality Consulting",
      mailSubject: "PulseRegula – Call Request"
    },

    de: {
      meta: {
        title: "PulseRegula | Regulatorik- & Qualitätsberatung für Medizinprodukte",
        description: "MDR- und IVDR-Compliance klar geregelt. Unabhängige Beratung mit dokumentierter ISO-13485-Expertise: technische Dokumentation, Auditbereitschaft. Gespräch buchen."
      },
      skip: "Zum Inhalt springen",
      navAria: "Hauptmenü",
      menuAria: "Menü öffnen/schließen",
      badgesAria: "Fachgebiete",
      navServices: "Leistungen",
      navProcess: "Vorgehen",
      navAbout: "Über uns",
      navFaq: "FAQ",
      navContact: "Gespräch buchen",
      heroEyebrow: "Compliance-Beratung für Medizinprodukte & IVD",
      heroH1: "Erfüllen Sie die Vorschriften. Erreichen Sie den Markt mit Sicherheit.",
      heroSub: "Die unabhängige Beratung von PulseRegula verwandelt MDR- und IVDR-Compliance in klare, machbare Schritte — mit dokumentierter ISO-13485-Expertise.",
      heroCta: "Gespräch buchen",
      servicesH2: "Beratung, die Sie schneller zum Markt bringt",
      servicesIntro: "Compliance muss kein Hindernis sein. Wir begleiten jede Phase des Lebenszyklus Ihres Produkts.",
      svc1H: "Compliance-Strategie und Gap-Analyse",
      svc1a: "Zuordnung der Anforderungen aus MDR 2017/745 und IVDR 2017/746 zu Ihrem Produkt",
      svc1b: "Ist-Analyse und eine klare Roadmap",
      svc1c: "Kommunikation mit Benannten Stellen und Unterstützung bei der Auditvorbereitung",
      svc2H: "Technische Dokumentation",
      svc2a: "Erstellung von SDS, Etiketten, DoC, IFU, PMS und PSUR",
      svc2b: "Risikomanagementakten nach ISO 14971 und ISO 31000",
      svc2c: "Auditfähige Dokumentation auf Türkisch, Englisch und Deutsch",
      svc3H: "Registrierungen und Qualitätssysteme",
      svc3a: "UTS- und EUDAMED-Registrierungen",
      svc3b: "QMS-Aufbau nach ISO 13485:2016 und ISO 9001:2015",
      svc3c: "Interne Audits, CAPA-Management und Lieferantenaudits",
      processH2: "Ein klarer Weg zur Compliance",
      processIntro: "Jede Zusammenarbeit folgt denselben vier bewährten Schritten.",
      step1H: "Analyse",
      step1P: "Wir lernen Ihr Produkt, seine Klasse und Ihre Zielmärkte kennen.",
      step2H: "Gap-Analyse",
      step2P: "Wir gleichen Ihre vorhandene Dokumentation mit den MDR/IVDR-Anforderungen ab.",
      step3H: "Roadmap",
      step3P: "Sie erhalten einen priorisierten Compliance-Plan mit realistischem Zeitrahmen.",
      step4H: "Umsetzung",
      step4P: "Wir stehen Ihnen bei Dokumentation, Auditvorbereitung und Registrierungen zur Seite.",
      aboutH: "Dokumentierte Erfahrung, unabhängiger Fokus",
      aboutIntro: "PulseRegula basiert auf mehr als zehn Jahren Regulatorik- und Qualitätserfahrung im Gesundheitssektor.",
      founderH: "Gründerin: Begüm Gizem Gökırmak",
      founderA: "Managerin Regulatory Affairs & Qualität — Bioeksen R&D Tech. / BioeXsen GmbH (IVDR-Konformität, Audits, EUDAMED)",
      founderB: "Managerin Regulatory Affairs & Qualität — Gazi Kimya (ISO-13485- und ISO-9001-Zertifizierung, UTS-Meldungen)",
      founderC: "Universität Istanbul — M.Sc. Biologische Wissenschaften",
      certsH: "Zertifizierungen",
      certA: "BSI ISO 13485:2016 Auditor/Lead Auditor Schulung",
      certB: "BSI ISO 14971:2019 Risikomanagement",
      certC: "BSI ISO 9001:2015 Interner Auditor",
      certD: "SZUTEST ISO 19011 Audit-Leitlinien",
      certE: "KIWA ISO 13485:2016 Interner Auditor",
      certF: "Valtech-Schulungen zu Prozess-, Verpackungs- und Reinraumvalidierung",
      faqH: "Häufig gestellte Fragen",
      q1: "Fällt mein Produkt unter die MDR oder IVDR?",
      a1: "Die Klassifizierung hängt vom Verwendungszweck Ihres Produkts ab. In einem kurzen Erstgespräch klären wir den Geltungsbereich und welche Regeln für Sie gelten.",
      q2: "Wie erkennen wir, welche Dokumente fehlen?",
      a2: "Eine Gap-Analyse gleicht Ihre aktuelle technische Dokumentation Punkt für Punkt mit den geltenden Anforderungen ab. Sie erhalten einen Bericht mit den Lücken in Prioritätenreihenfolge.",
      q3: "Wie bereiten wir uns auf ein Audit der Benannten Stelle vor?",
      a3: "Wir finden Schwachstellen durch interne Audits und Probeprüfungen und planen Korrekturmaßnahmen. Erfahrung: Audits Benannter Stellen und Findings-Management nach ISO 13485 und ISO 9001.",
      q4: "Brauchen wir separate Dokumentation für die Türkei und die EU?",
      a4: "Ja — die Türkei verlangt eine UTS-Registrierung, die EU EUDAMED und eine MDR/IVDR-Techndokumentation. Wir erstellen konsistente Dokumentation für beide Märkte in drei Sprachen (TR/EN/DE).",
      q5: "Können wir auch nur Unterstützung zu einem einzelnen Thema erhalten?",
      a5: "Ja. Wir übernehmen auch Einzelaufgaben wie eine Risikomanagementakte, die PMS/PSUR-Erstellung oder eine einzelne UTS-Meldung. Den Umfang definieren wir gemeinsam.",
      contactH: "Starten Sie heute Ihren Weg zur Compliance",
      contactIntro: "Schildern Sie kurz Ihre Situation — wir finden gemeinsam den passenden Weg.",
      contactMail: "E-Mail senden",
      contactLinkedin: "Über LinkedIn kontaktieren",
      contactLoc: "Istanbul, Türkei",
      footerTag: "Regulatory Affairs & Quality Consulting",
      mailSubject: "PulseRegula – Gesprächsanfrage"
    }
  };

  function detectLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var fromUrl = params.get("lang");
      if (fromUrl && SUPPORTED.indexOf(fromUrl) !== -1) return fromUrl;
    } catch (e) { /* older browsers */ }
    try {
      var stored = window.localStorage.getItem("pr-lang");
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) { /* private mode */ }
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    nav = nav.toLowerCase();
    for (var i = 0; i < SUPPORTED.length; i++) {
      if (nav.indexOf(SUPPORTED[i]) === 0) return SUPPORTED[i];
    }
    return DEFAULT_LANG;
  }

  function apply(lang) {
    var dict = I18N[lang] || I18N[DEFAULT_LANG];
    document.documentElement.setAttribute("lang", lang);
    document.title = dict.meta.title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict.meta.description);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key]) el.setAttribute("aria-label", dict[key]);
    });

    var mailLink = document.querySelector('a[data-i18n="contactMail"]');
    if (mailLink) {
      mailLink.setAttribute(
        "href",
        "mailto:gizem.gokirmak@pulseregula.com?subject=" + encodeURIComponent(dict.mailSubject)
      );
    }

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try { window.localStorage.setItem("pr-lang", lang); } catch (e) { /* ignore */ }
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-lang"));
    });
  });

  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.getElementById("mobileNav");
  if (toggle && mobileNav) {
    var setNav = function (open) {
      mobileNav.hidden = !open;
      mobileNav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "✕" : "☰";
    };
    toggle.addEventListener("click", function () {
      setNav(mobileNav.hidden);
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        setNav(false);
      });
    });
    // Close the menu when resizing back to desktop width.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860 && !mobileNav.hidden) setNav(false);
    });
  }

  // Logo click scrolls to the very top smoothly.
  var brand = document.querySelector(".brand");
  if (brand) {
    brand.addEventListener("click", function (ev) {
      ev.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (history.replaceState) history.replaceState(null, "", window.location.pathname + window.location.search);
    });
  }

  apply(detectLang());
})();
