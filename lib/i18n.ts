export const defaultNS = "common";
export const cookieName = "NEXT_LOCALE";

export const defaultLocale = "id";
export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

export function getOptions(lng = defaultLocale, ns = defaultNS) {
  return {
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

export const translations = {
  id: {
    common: {
      nav: {
        logo: "INOVA",
        products: "Paket Usaha",
        packages: "Paket",
        whyUs: "Mengapa Kami",
        process: "Cara Beli",
        testimonials: "Testimoni",
        faq: "FAQ",
        contact: "Hubungi Kami",
        darkMode: "Mode Gelap",
        language: "Bahasa",
        whatsapp: "WhatsApp",
      },
      hero: {
        badge: "Paket Usaha Laundry Terlengkap",
        title: "Mulai Bisnis Laundry Anda dengan Paket Komplit",
        subtitle: "Dapatkan peralatan profesional, training lengkap, dan dukungan bisnis untuk kesuksesan usaha laundry Anda.",
        cta: "Hubungi Sales",
        cta_secondary: "Lihat Paket",
      },
      features: {
        title: "Mengapa Memilih INOVA",
        subtitle: "Keunggulan yang membuat bisnis laundry Anda sukses",
        items: [
          {
            name: "Peralatan Profesional",
            desc: "Mesin laundry berkualitas tinggi dari brand terpercaya",
          },
          {
            name: "Training Lengkap",
            desc: "Pelatihan operasional dan manajemen bisnis",
          },
          {
            name: "Dukungan Bisnis",
            desc: "Bimbingan ahli untuk mengembangkan usaha",
          },
          {
            name: "Garansi Perawatan",
            desc: "Maintenance dan support teknis jangka panjang",
          },
        ],
      },
      packages: {
        badge: "Paket Usaha Laundry",
        title: "Paket Usaha Laundry",
        subtitle: "Pilih paket yang sesuai dengan budget dan kebutuhan Anda",
        note: "* Harga dapat berubah sewaktu-waktu. Hubungi kami untuk informasi terkini dan promo khusus.",
        basic: "Paket Basic",
        standard: "Paket Standard",
        premium: "Paket Premium",
        enterprise: "Paket Enterprise",
        month: "",
        features: "Fitur",
        support: "Dukungan",
        cta: "Pilih Paket",
        mulai: "Mulai dari",
        hubungi: "Hubungi Sales",
      },
      products: {
        title: "Produk & Peralatan",
        subtitle: "Peralatan laundry profesional untuk bisnis Anda",
        mesinCuci: "Mesin Cuci Commercial",
        mesinCuciDesc: "Mesin cuci kapasitas besar dengan teknologi hemat energi",
        dryer: "Mesin Pengering",
        dryerDesc: "Pengering pakaian efisien dengan berbagai kapasitas",
        display: "Tampilan",
        displayDesc: "Mesin otomatis dengan sistem coin/payment",
        startPrice: "Mulai dari",
        cta: "Tanya Detail",
      },
      whyLaundryHub: {
        title: "Mengapa INOVA?",
        subtitle: "Partner terpercaya untuk bisnis laundry Anda",
        items: [
          {
            title: "Pengalaman Terpercaya",
            desc: "Telah membantu ratusan pengusaha laundry sukses di Indonesia",
          },
          {
            title: "Kualitas Terjamin",
            desc: "Peralatan dari brand internasional dengan garansi resmi",
          },
          {
            title: "Harga Kompetitif",
            desc: "Paket lengkap dengan harga terbaik di kelasnya",
          },
          {
            title: "Layanan Purna Jual",
            desc: "Tim teknisi siap membantu kapan saja",
          },
        ],
      },
      process: {
        title: "Cara Pemesanan",
        subtitle: "Proses mudah dalam 4 langkah",
        steps: [
          { num: 1, title: "Pilih Paket", desc: "Konsultasi dan pilih paket yang sesuai kebutuhan" },
          { num: 2, title: "Konfirmasi", desc: "Team sales akan menghubungi Anda untuk konfirmasi" },
          { num: 3, title: "Pembayaran", desc: "Lakukan pembayaran via transfer bank" },
          { num: 4, title: "Pengiriman & Training", desc: "Peralatan dikirim dan training dilakukan" },
        ],
      },
      testimonials: {
        title: "Testimoni",
        subtitle: "Apa kata entrepreneur laundry tentang INOVA",
        items: [
          {
            name: "Budi Santoso",
            role: "Pemilik Laundry Cemerlang",
            text: "Semua kebutuhan usaha laundry saya terpenuhi dalam satu paket. Sangat membantu pemula seperti saya!",
            rating: 5,
          },
          {
            name: "Siti Rahman",
            role: "Pemilik Clean Laundry",
            text: "Mesin berkualitas dan training yang diberikan sangat profesional. Bisnis saya berkembang pesat!",
            rating: 5,
          },
          {
            name: "Ahmad Wijaya",
            role: "Pemilik Fresh Laundry",
            text: "Dukungan customer service sangat responsif. Sangat direkomendasikan!",
            rating: 5,
          },
        ],
      },
      faq: {
        title: "FAQ",
        subtitle: "Pertanyaan yang Sering Diajukan",
        items: [
          {
            q: "Apakah paket sudah termasuk installation?",
            a: "Ya, semua paket sudah termasuk instalasi gratis oleh tim profesional kami.",
          },
          {
            q: "Berapa lama garansi peralatan?",
            a: "Garansi peralatan minimal 1 tahun, untuk paket Premium mendapat garansi 2 tahun.",
          },
          {
            q: "Apakah bisa financing/cicilan?",
            a: "Ya, kami bekerja sama dengan berbagai leasing untuk menyediakan opsi cicilan.",
          },
          {
            q: "Bagaimana jika peralatan rusak?",
            a: "Tim teknisi kami siap上门 service. Untuk paket Premium ada layanan maintenance gratis.",
          },
          {
            q: "Apakah ada training operasional?",
            a: "Ya, semua paket sudah包括 training operasional untuk staff Anda.",
          },
        ],
      },
      cta: {
        title: "Siap Memulai Bisnis Laundry?",
        subtitle: "Konsultasi gratis dengan tim sales kami sekarang juga",
        button: "Hubungi via WhatsApp",
      },
      calculator: {
        title: "Kalkulator Bisnis",
        subtitle: "Hitung potensi keuntungan bisnis laundry Anda",
        inputs: {
          kapasitas: "Kapasitas Harian (kg)",
          harga: "Harga per kg",
          operational: "Biaya Operasional Harian",
          pajak: "Pajak (%)",
          target: "Target Omset Bulanan",
        },
        results: {
          omset: "Omset Harian",
          profit: "Profit Bersih Harian",
          margin: "Margin Profit",
          bep: "BEP (kg)",
          target_days: "Hari untuk Target",
        },
      },
      footer: {
        product: "Paket Usaha",
        company: "Perusahaan",
        resources: "Sumber Daya",
        legal: "Legal",
        rights: "© 2024 INOVA. Hak cipta dilindungi.",
        address: "Yogyakarta, Indonesia",
        phone: "+62 816-1333-440",
        email: "inovalaundrysolution@gmail.com",
        whatsapp: "+62 812-3456-7890",
      },
    },
  },
  en: {
    common: {
      nav: {
        logo: "INOVA",
        products: "Business Packages",
        packages: "Packages",
        whyUs: "Why Us",
        process: "How to Buy",
        testimonials: "Testimonials",
        faq: "FAQ",
        contact: "Contact",
        darkMode: "Dark Mode",
        language: "Language",
        whatsapp: "WhatsApp",
      },
      hero: {
        badge: "Complete Laundry Business Packages",
        title: "Start Your Laundry Business with Complete Packages",
        subtitle: "Get professional equipment, comprehensive training, and business support for your laundry success.",
        cta: "Contact Sales",
        cta_secondary: "View Packages",
      },
      features: {
        title: "Why Choose INOVA",
        subtitle: "Advantages that make your laundry business successful",
        items: [
          {
            name: "Professional Equipment",
            desc: "High-quality laundry machines from trusted brands",
          },
          {
            name: "Complete Training",
            desc: "Operational and business management training",
          },
          {
            name: "Business Support",
            desc: "Expert guidance to grow your business",
          },
          {
            name: "Warranty & Maintenance",
            desc: "Long-term maintenance and technical support",
          },
        ],
      },
      packages: {
        badge: "Business Packages",
        title: "Laundry Business Packages",
        subtitle: "Choose the package that fits your budget and needs",
        note: "* Prices are subject to change. Contact us for the latest information and special promotions.",
        basic: "Basic Package",
        standard: "Standard Package",
        premium: "Premium Package",
        enterprise: "Enterprise Package",
        month: "",
        features: "Features",
        support: "Support",
        cta: "Select Package",
        mulai: "Starting from",
        hubungi: "Contact Sales",
      },
      products: {
        title: "Products & Equipment",
        subtitle: "Professional laundry equipment for your business",
        mesinCuci: "Commercial Washing Machines",
        mesinCuciDesc: "Large capacity washers with energy-efficient technology",
        dryer: "Dryers",
        dryerDesc: "High-performance dryers with various capacities",
        display: "Display Units",
        displayDesc: "Automatic machines with coin/payment system",
        startPrice: "Starting from",
        cta: "Ask Details",
      },
      whyLaundryHub: {
        title: "Why INOVA?",
        subtitle: "Your trusted partner for laundry business",
        items: [
          {
            title: "Trusted Experience",
            desc: "Have helped hundreds of entrepreneurs succeed in Indonesia",
          },
          {
            title: "Guaranteed Quality",
            desc: "Equipment from international brands with official warranty",
          },
          {
            title: "Competitive Pricing",
            desc: "Complete packages at the best prices in class",
          },
          {
            title: "After-Sales Service",
            desc: "Technical team ready to assist anytime",
          },
        ],
      },
      process: {
        title: "How to Order",
        subtitle: "Easy process in 4 steps",
        steps: [
          { num: 1, title: "Choose Package", desc: "Consultation and select package that suits your needs" },
          { num: 2, title: "Confirmation", desc: "Sales team will contact you for confirmation" },
          { num: 3, title: "Payment", desc: "Make payment via bank transfer" },
          { num: 4, title: "Delivery & Training", desc: "Equipment delivered and training conducted" },
        ],
      },
      testimonials: {
        title: "Testimonials",
        subtitle: "What laundry entrepreneurs say about INOVA",
        items: [
          {
            name: "Budi Santoso",
            role: "Owner of Cemerlang Laundry",
            text: "All my laundry business needs were met in one package. Very helpful for beginners like me!",
            rating: 5,
          },
          {
            name: "Siti Rahman",
            role: "Owner of Clean Laundry",
            text: "Quality machines and professional training. My business grew rapidly!",
            rating: 5,
          },
          {
            name: "Ahmad Wijaya",
            role: "Owner of Fresh Laundry",
            text: "Customer service support is very responsive. Highly recommended!",
            rating: 5,
          },
        ],
      },
      faq: {
        title: "FAQ",
        subtitle: "Frequently Asked Questions",
        items: [
          {
            q: "Does the package include installation?",
            a: "Yes, all packages include free installation by our professional team.",
          },
          {
            q: "How long is the equipment warranty?",
            a: "Equipment warranty is at least 1 year, Premium package gets 2 years warranty.",
          },
          {
            q: "Can I get financing/installment?",
            a: "Yes, we partner with various leasing companies for installment options.",
          },
          {
            q: "What if equipment breaks down?",
            a: "Our technician team is ready for on-site service. Premium package includes free maintenance.",
          },
          {
            q: "Is operational training provided?",
            a: "Yes, all packages include operational training for your staff.",
          },
        ],
      },
      calculator: {
        title: "Business Calculator",
        subtitle: "Calculate your laundry business profit potential",
        inputs: {
          kapasitas: "Daily Capacity (kg)",
          harga: "Price per kg",
          operational: "Daily Operational Cost",
          pajak: "Tax (%)",
          target: "Monthly Revenue Target",
        },
        results: {
          omset: "Daily Revenue",
          profit: "Net Daily Profit",
          margin: "Profit Margin",
          bep: "BEP (kg)",
          target_days: "Days to Target",
        },
      },
      cta: {
        title: "Ready to Start Your Laundry Business?",
        subtitle: "Free consultation with our sales team now",
        button: "Contact via WhatsApp",
      },
      footer: {
        product: "Business Packages",
        company: "Company",
        resources: "Resources",
        legal: "Legal",
        rights: "© 2024 INOVA. All rights reserved.",
        address: "Yogyakarta, Indonesia",
        phone: "+62 816-1333-440",
        email: "inovalaundrysolution@gmail.com",
        whatsapp: "+62 812-3456-7890",
      },
    },
  },
};
