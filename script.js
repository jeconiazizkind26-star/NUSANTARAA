// =======================================================================
// Data Provinsi Indonesia (38 Provinsi)
// =======================================================================
const provinceData = {
    "Aceh": { 
        coords: [4.6951, 96.7494],
        zoom: 8,
        mainImg: { src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Tari Saman - Aceh", caption: "Tari Saman • Peusijuek • Rumoh Aceh" }, 
        detail: { 
            suku: "Aceh, Gayo, Alas, Tamiang", 
            adat: "Tarian seribu tangan yang melambangkan kekompakan dan persatuan.",
            long_desc: "Aceh, yang mendapat julukan 'Serambi Mekkah', memiliki sejarah yang sangat erat dengan masuknya dan penyebaran agama Islam di Nusantara, menjadikannya pusat peradaban Islam yang kuat dengan penerapan syariat yang kental. Kekayaan budayanya terlihat dari arsitektur megah Masjid Raya Baiturrahman di Banda Aceh yang menjadi monumen ketahanan, serta Tari Saman dari Suku Gayo yang telah diakui UNESCO sebagai Warisan Budaya Takbenda."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Tari Saman" }, 
            { src: "https://images.unsplash.com/photo-1593693399746-69c4d6455c9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Masjid Raya Baiturrahman" } 
        ]
    },
    "Sumatera Utara": { 
        coords: [2.0000, 99.0000],
        zoom: 8,
        mainImg: { src: "https://images.unsplash.com/photo-1598188306155-25e8d57fa4e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Danau Toba - Sumatera Utara", caption: "Ulos Batak • Tari Tor-Tor • Rumah Bolon" }, 
        detail: { 
            suku: "Batak (Toba, Karo, Mandailing, Simalungun), Melayu", 
            adat: "Tari Tor-Tor adalah tarian ritual atau persembahan yang diiringi musik gondang.",
            long_desc: "Sumatera Utara adalah rumah bagi Suku Batak dan ikon wisata alam dunia, Danau Toba, sebuah kaldera raksasa dengan Pulau Samosir di tengahnya yang menjadi pusat kebudayaan Batak Toba. Masyarakat Batak dikenal dengan sistem kekerabatan marga yang kuat, rumah adat Bolon yang khas, serta kain Ulos yang dianggap sakral."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1598188306155-25e8d57fa4e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Danau Toba" }, 
            { src: "https://images.unsplash.com/photo-1598198415172-4a7c80c5c9f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Rumah Bolon" } 
        ]
    },
    "Sumatera Barat": { 
        coords: [-0.9400, 100.355],
        zoom: 8,
        mainImg: { src: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Rumah Gadang - Sumatera Barat", caption: "Rumah Gadang • Tari Piring • Adat Basandi Syarak" }, 
        detail: { 
            suku: "Minangkabau", 
            adat: "Rumah Gadang adalah rumah adat yang berbentuk seperti tanduk kerbau (gonjong).",
            long_desc: "Sumatera Barat didominasi oleh etnis Minangkabau, salah satu kelompok etnis terbesar di Indonesia yang unik karena menganut sistem kekerabatan Matrilineal, di mana garis keturunan dan harta diwariskan melalui ibu. Inti budaya mereka diringkas dalam filosofi 'Adat Basandi Syarak, Syarak Basandi Kitabullah'."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Rumah Gadang" }, 
            { src: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", alt: "Ngarai Sianok" } 
        ]
    },
    "Riau": { 
        coords: [0.5000, 101.6000],
        zoom: 8,
        mainImg: { src: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Masjid An-Nur - Riau", caption: "Rumah Selaso Jatuh Kembar • Tari Zapin • Gurindam 12" }, 
        detail: { 
            suku: "Melayu", 
            adat: "Rumah Selaso Jatuh Kembar, rumah adat yang melambangkan musyawarah mufakat.",
            long_desc: "Riau merupakan jantung dari budaya Melayu di Sumatera, dengan pengaruh yang kuat dari Kesultanan Siak. Budayanya didasarkan pada nilai-nilai Islam, tercermin dalam kesenian seperti Tari Zapin. Warisan sastra utamanya adalah Gurindam 12 karya sastrawan ternama Raja Ali Haji."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Masjid An-Nur" }, 
            { src: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", alt: "Tari Zapin" } 
        ]
    },
    "Bali": { 
        coords: [-8.3405, 115.0920],
        zoom: 9,
        mainImg: { src: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Pura Bali", caption: "Ngaben • Tari Kecak • Hindu Bali" }, 
        detail: { 
            suku: "Bali", 
            adat: "Tari Kecak, tarian drama musikal Ramayana, penari membentuk lingkaran mengucapkan 'cak'.",
            long_desc: "Bali, dijuluki 'Pulau Dewata', adalah pusat spiritual dan pariwisata internasional yang kebudayaannya sangat unik karena mayoritas penduduknya menganut agama Hindu Dharma. Kehidupan masyarakat Bali diatur oleh Tri Hita Karana, filosofi yang menjaga keharmonisan antara manusia, alam, dan Tuhan."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Pura" }, 
            { src: "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Tari Kecak" } 
        ]
    },
    "DKI Jakarta": { 
        coords: [-6.2000, 106.8167],
        zoom: 10,
        mainImg: { src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Monas Jakarta", caption: "Ondel-Ondel • Batik Betawi • Kerak Telor" }, 
        detail: { 
            suku: "Betawi", 
            adat: "Ondel-Ondel, boneka raksasa khas Betawi yang digunakan dalam arak-arakan.",
            long_desc: "Sebagai ibu kota negara, DKI Jakarta adalah megapolitan yang menjadi pusat pemerintahan, bisnis, dan peleburan berbagai budaya dari seluruh Indonesia dan dunia. Di tengah modernitasnya, budaya asli Betawi tetap bersemayam, ditunjukkan melalui kesenian khas seperti Lenong dan Tari Lenggang Nyai."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Monas" }, 
            { src: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Kota Tua" } 
        ]
    },
    "Jawa Barat": { 
        coords: [-6.9174, 107.6191],
        zoom: 8,
        mainImg: { src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Tangkuban Perahu - Jawa Barat", caption: "Tari Jaipong • Rumah Kasepuhan • Sisingaan" }, 
        detail: { 
            suku: "Sunda", 
            adat: "Tari Jaipong, tarian pergaulan tradisional Sunda, gabungan dari seni Ketuk Tilu dan Pencak Silat.",
            long_desc: "Jawa Barat adalah wilayah Parahyangan, yang dikenal dengan keindahan alam pegunungan dan udaranya yang sejuk, serta didominasi oleh Suku Sunda. Budaya Sunda dikenal lembut, santun, dan sangat artistik, tercermin dalam alat musik tradisional Angklung yang diakui UNESCO."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Tangkuban Perahu" }, 
            { src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", alt: "Angklung" } 
        ]
    },
    "Jawa Tengah": { 
        coords: [-7.0000, 110.4000],
        zoom: 8,
        mainImg: { src: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Candi Borobudur - Jawa Tengah", caption: "Wayang Kulit • Sekaten • Borobudur" }, 
        detail: { 
            suku: "Jawa", 
            adat: "Candi Borobudur adalah situs Buddha terbesar dan simbol budaya Jawa Kuno.",
            long_desc: "Jawa Tengah adalah pusat dari kebudayaan Jawa Kuno yang bernilai tinggi dan berkarakteristik halus, dengan Keraton Surakarta dan Yogyakarta sebagai penjaga tradisi. Kesenian klasik seperti Wayang Kulit, yang diiringi orkestra Gamelan, telah menjadi bagian integral dari identitas budaya."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Candi Borobudur" }, 
            { src: "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", alt: "Wayang Kulit" } 
        ]
    },
    "DIY Yogyakarta": { 
        coords: [-7.8014, 110.3649],
        zoom: 9,
        mainImg: { src: "https://images.unsplash.com/photo-1559715541-5bb5d8b6f969?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Keraton Yogyakarta", caption: "Keraton • Gudeg • Tari Bedhaya" }, 
        detail: { 
            suku: "Jawa", 
            adat: "Keraton Yogyakarta, pusat budaya dan pemerintahan Kasultanan, rumah bagi Tari Bedhaya.",
            long_desc: "Daerah Istimewa Yogyakarta adalah satu-satunya provinsi di Indonesia yang masih berbentuk Kesultanan dan dipimpin oleh seorang Sultan sebagai Gubernur. Yogyakarta dikenal sebagai Kota Pelajar dan pusat pelestarian budaya Jawa yang paling murni, dengan Keraton sebagai jantung spiritual dan budayanya."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1559715541-5bb5d8b6f969?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Keraton Yogyakarta" }, 
            { src: "https://images.unsplash.com/photo-1559715541-5bb5d8b6f969?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", alt: "Gudeg" } 
        ]
    },
    "Jawa Timur": { 
        coords: [-7.5361, 112.2384],
        zoom: 8,
        mainImg: { src: "https://images.unsplash.com/photo-1596742510541-556a733d6f4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Gunung Bromo - Jawa Timur", caption: "Reog Ponorogo • Ludruk • Candi Singhasari" }, 
        detail: { 
            suku: "Jawa, Madura", 
            adat: "Reog Ponorogo adalah kesenian tradisional yang menampilkan topeng besar harimau.",
            long_desc: "Jawa Timur memiliki budaya yang beragam dengan dua etnis utama, yaitu Jawa dan Madura. Provinsi ini terkenal dengan kesenian Reog Ponorogo yang spektakuler, Ludruk sebagai teater rakyat, dan peninggalan sejarah seperti Candi Singhasari dan Candi Jago."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1596742510541-556a733d6f4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Gunung Bromo" }, 
            { src: "https://images.unsplash.com/photo-1596742510541-556a733d6f4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", alt: "Reog Ponorogo" } 
        ]
    },
    "Banten": { 
        coords: [-6.1200, 106.1503],
        zoom: 9,
        mainImg: { src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Masjid Agung Banten", caption: "Debus • Pencak Silat • Seni Bela Diri" }, 
        detail: { 
            suku: "Banten, Sunda", 
            adat: "Debus adalah seni bela diri tradisional yang mempertunjukkan kekebalan tubuh.",
            long_desc: "Banten memiliki sejarah panjang sebagai pelabuhan penting sejak masa Kesultanan Banten. Budayanya dipengaruhi oleh Islam yang kuat, dengan kesenian Debus sebagai ikon utamanya. Debus adalah pertunjukan seni bela diri yang menampilkan kemampuan manusia melawan benda tajam dan api."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Masjid Agung Banten" }, 
            { src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", alt: "Debus Performance" } 
        ]
    },
    "Kalimantan Barat": { 
        coords: [-0.0263, 109.3425],
        zoom: 7,
        mainImg: { src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Rumah Panjang Dayak - Kalimantan Barat", caption: "Rumah Betang • Tari Monong • Mandau" }, 
        detail: { 
            suku: "Dayak, Melayu", 
            adat: "Rumah Betang adalah rumah panjang tradisional Dayak yang dihuni oleh banyak keluarga.",
            long_desc: "Kalimantan Barat didominasi oleh Suku Dayak dan Melayu. Rumah Betang yang megah menjadi simbol kehidupan komunal Suku Dayak. Provinsi ini juga kaya dengan seni ukir kayu, tarian tradisional seperti Tari Monong, dan senjata tradisional Mandau."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Rumah Panjang Dayak" }, 
            { src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", alt: "Tari Dayak" } 
        ]
    },
    "Papua": { 
        coords: [-4.2699, 138.0804],
        zoom: 6,
        mainImg: { src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Honai - Papua", caption: "Honai • Tari Yospan • Koteka" }, 
        detail: { 
            suku: "Papua (Asmat, Dani, Biak)", 
            adat: "Honai adalah rumah tradisional Papua berbentuk bulat dengan atap jerami.",
            long_desc: "Papua merupakan provinsi paling timur Indonesia dengan keragaman budaya yang sangat kaya. Suku Asmat terkenal dengan seni pahat patung yang mendunia, Suku Dani dengan pertanian tradisional, dan Honai sebagai arsitektur rumah tradisional yang unik."
        }, 
        gallery: [ 
            { src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Honai Papua" }, 
            { src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", alt: "Tari Yospan" } 
        ]
    }
};

// =======================================================================
// TRANSLATION SYSTEM
// =======================================================================
const translations = {
    id: {
        'nav.home': 'Beranda',
        'nav.provinces': 'Provinsi',
        'nav.quiz': 'Quiz',
        'nav.rankings': 'Peringkat',
        'nav.map': 'Peta',
        'nav.about': 'Tentang',
        'nav.contact': 'Kontak',
        
        'hero.subtitle': 'Menuju Visi Indonesia 2045',
        'hero.title': 'JELAJAHI KEINDAHAN NUSANTARA',
        'hero.description': 'Temukan kekayaan budaya 38 provinsi Indonesia melalui peta interaktif, galeri, dan kuis edukatif',
        'hero.explore': 'Mulai Eksplorasi',
        
        'carousel.title': 'Galeri Provinsi Indonesia',
        
        'quiz.title': 'Quiz: Tebak Budaya & Provinsi',
        'quiz.score': 'Skor',
        'quiz.progress': 'Pertanyaan',
        'quiz.next': 'Soal Berikutnya',
        'quiz.feedback.correct': 'Jawaban Benar! +10 poin',
        'quiz.feedback.incorrect': 'Jawaban Salah. Poin tidak bertambah.',
        'quiz.timeout': 'Waktu habis! Lanjut ke soal berikutnya.',
        
        'map.title': 'Peta Interaktif Indonesia',
        'map.description': 'Pilih provinsi di bawah untuk melihat lokasinya secara langsung di Google Maps:',
        'map.select': 'Pilih Provinsi dari daftar di bawah untuk melihat lokasinya:',
        'map.zoom.in': 'Zoom In',
        'map.zoom.out': 'Zoom Out',
        'map.reset': 'Reset Peta',
        
        'about.title': 'Tentang Nusantara Explorer',
        'about.description': 'Website ini mengeksplorasi kekayaan budaya Nusantara dengan cara yang interaktif, edukatif, dan estetis. Temukan keunikan setiap provinsi melalui gambar, deskripsi mendalam, dan uji pengetahuan Anda dengan kuis menarik.',
        'about.feature1.title': 'Peta Interaktif',
        'about.feature1.desc': 'Jelajahi lokasi setiap provinsi dengan zoom dan navigasi mudah',
        'about.feature2.title': 'Galeri Lengkap',
        'about.feature2.desc': 'Lihat foto-foto budaya dan keindahan alam setiap provinsi',
        'about.feature3.title': 'Kuis Edukatif',
        'about.feature3.desc': 'Uji pengetahuan Anda tentang budaya Nusantara',
        
        'contact.title': 'Kontak Kami',
        
        'modal.gallery': 'Lanjutkan ke Galeri',
        'share.title': 'Bagikan Provinsi',
        'leaderboard.title': '🏆 Papan Peringkat Nusantara',
        
        'auth.login': 'Masuk',
        'auth.register': 'Daftar',
        'auth.logout': 'Keluar',
        'auth.profile': 'Profil Saya',
        'auth.username': 'Nama Pengguna',
        'auth.enter_username': 'Masukkan nama pengguna',
        'auth.welcome': 'Selamat datang',
        'auth.guest': 'Tamu',
        
        'notification.link_copied': 'Link berhasil disalin!',
        'notification.score_saved': 'Skor berhasil disimpan!',
        'notification.login_success': 'Login berhasil!',
        'notification.logout_success': 'Anda telah keluar.',
        'notification.dark_mode_on': 'Mode Gelap Diaktifkan',
        'notification.dark_mode_off': 'Mode Terang Diaktifkan',
        'notification.language_changed': 'Bahasa diubah ke Indonesia',
        
        'map.info.default': 'Pilih provinsi untuk melihat detail',
        'map.info.selected': 'Lokasi:'
    },
    en: {
        'nav.home': 'Home',
        'nav.provinces': 'Provinces',
        'nav.quiz': 'Quiz',
        'nav.rankings': 'Rankings',
        'nav.map': 'Map',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        'hero.subtitle': 'Towards Indonesia Vision 2045',
        'hero.title': 'EXPLORE THE BEAUTY OF THE ARCHIPELAGO',
        'hero.description': 'Discover the cultural richness of 38 Indonesian provinces through interactive maps, galleries, and educational quizzes',
        'hero.explore': 'Start Exploring',
        
        'carousel.title': 'Indonesian Provinces Gallery',
        
        'quiz.title': 'Quiz: Guess Culture & Province',
        'quiz.score': 'Score',
        'quiz.progress': 'Question',
        'quiz.next': 'Next Question',
        'quiz.feedback.correct': 'Correct Answer! +10 points',
        'quiz.feedback.incorrect': 'Wrong answer. No points added.',
        'quiz.timeout': 'Time\'s up! Moving to next question.',
        
        'map.title': 'Interactive Indonesia Map',
        'map.description': 'Select a province below to see its location on Google Maps:',
        'map.select': 'Select a province from the list below to view its location:',
        'map.zoom.in': 'Zoom In',
        'map.zoom.out': 'Zoom Out',
        'map.reset': 'Reset Map',
        
        'about.title': 'About Nusantara Explorer',
        'about.description': 'This website explores the cultural richness of the Indonesian archipelago in an interactive, educational, and aesthetic way. Discover the uniqueness of each province through images, detailed descriptions, and test your knowledge with interesting quizzes.',
        'about.feature1.title': 'Interactive Map',
        'about.feature1.desc': 'Explore each province location with easy zoom and navigation',
        'about.feature2.title': 'Complete Gallery',
        'about.feature2.desc': 'View photos of culture and natural beauty of each province',
        'about.feature3.title': 'Educational Quiz',
        'about.feature3.desc': 'Test your knowledge about Indonesian culture',
        
        'contact.title': 'Contact Us',
        
        'modal.gallery': 'Continue to Gallery',
        'share.title': 'Share Province',
        'leaderboard.title': '🏆 Nusantara Leaderboard',
        
        'auth.login': 'Login',
        'auth.register': 'Register',
        'auth.logout': 'Logout',
        'auth.profile': 'My Profile',
        'auth.username': 'Username',
        'auth.enter_username': 'Enter username',
        'auth.welcome': 'Welcome',
        'auth.guest': 'Guest',
        
        'notification.link_copied': 'Link copied successfully!',
        'notification.score_saved': 'Score saved successfully!',
        'notification.login_success': 'Login successful!',
        'notification.logout_success': 'You have logged out.',
        'notification.dark_mode_on': 'Dark Mode Enabled',
        'notification.dark_mode_off': 'Light Mode Enabled',
        'notification.language_changed': 'Language changed to English',
        
        'map.info.default': 'Select a province to see details',
        'map.info.selected': 'Location:'
    }
};

// =======================================================================
// GLOBAL VARIABLES
// =======================================================================
let currentSlideIndex = 0;
let isUserLoggedIn = false;
let userProfile = { username: 'Guest', score: 0 };
let quizQuestions = [];
let currentQuestionIndex = 0;
let maxQuestions = 5;
let currentLanguage = 'id';
let timerInterval = null;
let currentTimer = 30;
let selectedProvince = null;
let map = null;
let mapMarkers = [];
let currentModal = null;
let leaderboardData = [];

// =======================================================================
// INITIALIZATION AND LOAD
// =======================================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Nusantara Explorer - Initializing...');
    
    try {
        // 1. Load saved settings
        loadSettings();
        
        // 2. Setup Scroll Navigation
        setupScrollNavigation();

        // 3. Initialize Carousel
        renderCarouselSlides();
        setupCarouselNavigation();
        
        // 4. Initialize Map Selector
        populateMapSelector();
        
        // 5. Initialize Auth State
        updateAuthDropdown();
        
        // 6. Initialize Quiz
        initializeQuiz();

        // 7. Setup Back to Top Button
        setupBackToTop();
        
        // 8. Setup Modals
        setupModals();
        
        // 9. Setup Language Switch
        setupLanguageSwitch();
        
        // 10. Setup Dark Mode
        setupDarkMode();
        
        // 11. Setup Notifications
        setupNotifications();
        
        // 12. Load leaderboard
        loadLeaderboard();
        
        // 13. Apply initial language
        applyLanguage();
        
        console.log('✅ Nusantara Explorer initialized successfully!');
        
    } catch (error) {
        console.error('❌ Initialization error:', error);
        showNotification('Error initializing application. Please refresh the page.', 'error');
    }
});

function loadSettings() {
    try {
        // Load language preference
        const savedLang = localStorage.getItem('nusantara_language');
        if (savedLang && translations[savedLang]) {
            currentLanguage = savedLang;
            const langSwitch = document.getElementById('langSwitch');
            if (langSwitch) langSwitch.value = savedLang;
        }
        
        // Load dark mode preference
        const darkMode = localStorage.getItem('nusantara_darkmode');
        if (darkMode === 'true') {
            document.body.classList.add('light-mode');
            const darkModeToggle = document.getElementById('dark-mode-toggle');
            if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        // Load user profile
        const savedProfile = localStorage.getItem('nusantara_profile');
        if (savedProfile) {
            userProfile = JSON.parse(savedProfile);
            isUserLoggedIn = true;
            console.log('User profile loaded:', userProfile);
        }
    } catch (error) {
        console.error('Error loading settings:', error);
    }
}

function setupScrollNavigation() {
    const menuItems = document.querySelectorAll('.menu li[data-scroll]');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetId = e.target.getAttribute('data-scroll');
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

function setupBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    window.addEventListener('scroll', () => {
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                backToTopBtn.style.display = "flex";
            } else {
                backToTopBtn.style.display = "none";
            }
        }
    });
}

// =======================================================================
// LANGUAGE SYSTEM
// =======================================================================
function setupLanguageSwitch() {
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            localStorage.setItem('nusantara_language', currentLanguage);
            applyLanguage();
            showNotification(
                currentLanguage === 'id' ? 
                'Bahasa diubah ke Indonesia' : 
                'Language changed to English', 
                'info'
            );
        });
    }
}

function applyLanguage() {
    try {
        // Update all elements with data-key attribute
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[currentLanguage][key];
                } else {
                    element.textContent = translations[currentLanguage][key];
                }
            }
        });
        
        // Update dropdown
        updateAuthDropdown();
        
        // Update quiz if active
        if (quizQuestions.length > 0 && currentQuestionIndex < quizQuestions.length) {
            renderQuestion();
        }
        
        // Update map info
        updateMapInfoText();
        
    } catch (error) {
        console.error('Error applying language:', error);
    }
}

function updateMapInfoText() {
    const mapInfo = document.getElementById('map-info');
    if (mapInfo) {
        if (selectedProvince) {
            mapInfo.innerHTML = `${translations[currentLanguage]['map.info.selected']} <strong>${selectedProvince}</strong>`;
        } else {
            mapInfo.textContent = translations[currentLanguage]['map.info.default'];
        }
    }
}

// =======================================================================
// DARK MODE SYSTEM
// =======================================================================
function setupDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
        
        // Set initial icon based on saved preference
        const darkMode = localStorage.getItem('nusantara_darkmode');
        const icon = document.querySelector('#dark-mode-toggle i');
        if (icon) {
            if (darkMode === 'true') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
    }
}

function toggleDarkMode() {
    const isLightMode = document.body.classList.toggle('light-mode');
    localStorage.setItem('nusantara_darkmode', isLightMode);
    
    const icon = document.querySelector('#dark-mode-toggle i');
    if (icon) {
        icon.className = isLightMode ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    // Update map style if map exists
    if (map) {
        map.setOptions({ styles: getMapStyle() });
    }
    
    // Update video brightness
    const video = document.getElementById('bg-video');
    if (video) {
        video.style.filter = isLightMode ? 'brightness(1) grayscale(0)' : 'brightness(0.9) grayscale(0.2)';
    }
    
    showNotification(
        isLightMode ? 
        translations[currentLanguage]['notification.dark_mode_off'] : 
        translations[currentLanguage]['notification.dark_mode_on'], 
        'info'
    );
}

// =======================================================================
// NOTIFICATION SYSTEM
// =======================================================================
function setupNotifications() {
    // Create notification element if not exists
    if (!document.getElementById('notification')) {
        const notification = document.createElement('div');
        notification.id = 'notification';
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
}

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.display = 'block';
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// =======================================================================
// CAROUSEL & GALLERY LOGIC
// =======================================================================
function renderCarouselSlides() {
    const container = document.getElementById('slides-container');
    const dotsContainer = document.getElementById('dots');
    const totalSlidesElement = document.getElementById('total-slides');
    
    if (!container || !dotsContainer || !totalSlidesElement) {
        console.error('Carousel elements not found');
        return;
    }
    
    container.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    const provinceNames = Object.keys(provinceData).sort();
    totalSlidesElement.textContent = provinceNames.length;

    provinceNames.forEach((name, index) => {
        const data = provinceData[name];
        
        // Create Slide
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.dataset.province = name;
        slide.innerHTML = `
            <h2>${name} <i class="fas fa-hand-sparkles"></i></h2>
            <img src="${data.mainImg.src}" alt="${data.mainImg.alt}" onclick="openGalleryModal('${name}')" loading="lazy">
            <p>${data.mainImg.caption}</p>
            <button class="gallery-btn" onclick="openGalleryModal('${name}')">
                <i class="fas fa-images"></i> ${currentLanguage === 'id' ? 'Lihat Detail & Galeri' : 'View Details & Gallery'}
            </button>
        `;
        container.appendChild(slide);

        // Create Dot
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.dataset.index = index;
        dot.addEventListener('click', () => changeSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Initial display
    if (provinceNames.length > 0) {
        changeSlide(currentSlideIndex);
    }
}

function setupCarouselNavigation() {
    const prevBtn = document.querySelector('.carousel-wrapper .prev');
    const nextBtn = document.querySelector('.carousel-wrapper .next');
    const container = document.getElementById('slides-container');

    if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(currentSlideIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(currentSlideIndex + 1));
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') changeSlide(currentSlideIndex - 1);
        if (e.key === 'ArrowRight') changeSlide(currentSlideIndex + 1);
    });
    
    // Add swipe support for mobile
    if (container) {
        let startX = 0;
        container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        container.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    changeSlide(currentSlideIndex + 1);
                } else {
                    changeSlide(currentSlideIndex - 1);
                }
            }
        });
    }
}

function changeSlide(newIndex) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const currentSlideElement = document.getElementById('current-slide');
    const totalSlides = slides.length;

    if (newIndex < 0) {
        newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
        newIndex = 0;
    }

    currentSlideIndex = newIndex;

    const container = document.getElementById('slides-container');
    if (container) {
        container.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
    
    if (currentSlideElement) {
        currentSlideElement.textContent = currentSlideIndex + 1;
    }

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

function openGalleryModal(provinceName) {
    selectedProvince = provinceName;
    const data = provinceData[provinceName];
    const modal = document.getElementById('gallery-modal');
    const title = document.getElementById('modal-title');
    const detailSection = document.getElementById('modal-detail');
    const desc = document.getElementById('detail-description');
    const gallerySection = document.getElementById('gallery-images');
    const continueBtn = document.getElementById('continue-to-gallery');

    if (!modal || !title || !detailSection || !desc || !gallerySection || !continueBtn) {
        console.error('Modal elements not found');
        return;
    }

    title.textContent = `Detail Budaya: ${provinceName}`;

    // Show Detail Section first
    detailSection.style.display = 'block';
    gallerySection.style.display = 'none';

    desc.innerHTML = `
        <div class="province-header">
            <h3>${provinceName}</h3>
            <span class="province-badge"><i class="fas fa-map-marker-alt"></i> ${data.coords[0].toFixed(2)}°, ${data.coords[1].toFixed(2)}°</span>
        </div>
        <div class="province-details">
            <div class="detail-item">
                <strong><i class="fas fa-users"></i> Suku Dominan:</strong>
                <span>${data.detail.suku}</span>
            </div>
            <div class="detail-item">
                <strong><i class="fas fa-star"></i> Adat Khas:</strong>
                <span>${data.detail.adat}</span>
            </div>
        </div>
        <div class="modal-section">
            <h4><i class="fas fa-book-open"></i> Deskripsi Lengkap</h4>
            <p>${data.detail.long_desc}</p>
        </div>
    `;

    // Prepare gallery view
    gallerySection.innerHTML = '';
    if (data.gallery && data.gallery.length > 0) {
        data.gallery.forEach(item => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'gallery-item';
            imgContainer.innerHTML = `
                <img src="${item.src}" alt="${item.alt}" loading="lazy">
                <div class="image-caption">${item.alt}</div>
            `;
            gallerySection.appendChild(imgContainer);
        });
        continueBtn.style.display = 'flex';
    } else {
        gallerySection.innerHTML = '<p class="no-gallery">Tidak ada foto galeri tambahan yang tersedia.</p>';
        continueBtn.style.display = 'none';
    }

    // Setup button to toggle to gallery view
    continueBtn.onclick = () => {
        detailSection.style.display = 'none';
        gallerySection.style.display = 'grid';
        continueBtn.style.display = 'none';
    };

    modal.style.display = 'block';
    currentModal = modal;
}

// =======================================================================
// GOOGLE MAPS FUNCTIONS - DIPERBAIKI
// =======================================================================
{
let map = null;
let mapMarkers = [];
let mapInitialized = false;
let mapError = false;
}
function initMap() {
    console.log('🚀 Initializing Google Maps...');
    
    const mapElement = document.getElementById('google-map');
    const fallbackElement = document.getElementById('map-fallback');
    
    if (!mapElement) {
        console.error('❌ Map element not found');
        showMapFallback('Elemen peta tidak ditemukan');
        return;
    }
    
    // Hide fallback initially
    if (fallbackElement) {
        fallbackElement.style.display = 'none';
    }
    
    // Check if Google Maps API is loaded
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        console.error('❌ Google Maps API not loaded');
        showMapFallback('Google Maps API tidak tersedia. Periksa koneksi internet Anda.');
        mapError = true;
        return;
    }
    
    try {
        const defaultCenter = { lat: -2.5489, lng: 118.0149 }; // Center of Indonesia
        
        map = new google.maps.Map(mapElement, {
            zoom: 4,
            center: defaultCenter,
            mapTypeId: 'roadmap',
            styles: getMapStyle(),
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            gestureHandling: 'cooperative'
        });
        
        // Add Indonesia outline
        addIndonesiaOutline();
        
        mapInitialized = true;
        mapError = false;
        
        console.log('✅ Google Maps initialized successfully');
        
        // Test marker
        addTestMarker();
        
    } catch (error) {
        console.error('❌ Error initializing Google Maps:', error);
        showMapFallback('Error: ' + error.message);
        mapError = true;
    }
}

function showMapFallback(message) {
    const fallbackElement = document.getElementById('map-fallback');
    const mapElement = document.getElementById('google-map');
    
    if (fallbackElement) {
        fallbackElement.innerHTML = `
            <h3><i class="fas fa-exclamation-triangle"></i> Google Maps Tidak Dapat Dimuat</h3>
            <p>${message || 'Terjadi kesalahan saat memuat peta.'}</p>
            <div style="margin: 15px 0; text-align: left; max-width: 400px;">
                <p><strong>Solusi:</strong></p>
                <ul>
                    <li>Periksa koneksi internet Anda</li>
                    <li>Refresh halaman (F5)</li>
                    <li>Coba browser lain</li>
                </ul>
            </div>
            <button onclick="location.reload()" class="quiz-btn">
                <i class="fas fa-sync-alt"></i> Refresh Halaman
            </button>
        `;
        fallbackElement.style.display = 'flex';
    }
    
    if (mapElement) {
        mapElement.style.display = 'none';
    }
}

function addTestMarker() {
    if (!map || !mapInitialized) return;
    
    try {
        // Add a test marker in Jakarta
        const jakarta = { lat: -6.2088, lng: 106.8456 };
        const marker = new google.maps.Marker({
            position: jakarta,
            map: map,
            title: 'Jakarta - Ibu Kota Indonesia',
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: '#FFD700',
                fillOpacity: 1,
                strokeColor: '#B8860B',
                strokeWeight: 2
            }
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="map-info-window">
                    <h3>Jakarta</h3>
                    <p><strong>Status:</strong> Ibu Kota Indonesia</p>
                    <p><strong>Provinsi:</strong> DKI Jakarta</p>
                    <p>Peta berhasil dimuat! Sekarang pilih provinsi dari dropdown di bawah.</p>
                </div>
            `
        });
        
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
        
        // Auto open info window
        setTimeout(() => {
            infoWindow.open(map, marker);
        }, 1000);
        
        mapMarkers.push(marker);
        
    } catch (error) {
        console.error('Error adding test marker:', error);
    }
}

function addIndonesiaOutline() {
    if (!map || !mapInitialized) return;
    
    try {
        const indonesiaBounds = new google.maps.Rectangle({
            strokeColor: '#FFD700',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FFD700',
            fillOpacity: 0.05,
            map: map,
            bounds: {
                north: 6.0,
                south: -11.0,
                east: 141.0,
                west: 95.0
            }
        });
    } catch (error) {
        console.error('Error adding Indonesia outline:', error);
    }
}

function getMapStyle() {
    const isLightMode = document.body.classList.contains('light-mode');
    
    if (isLightMode) {
        // Light mode style
        return [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#000000"}]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#fefefe"}]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#b2b2b2"}]
            }
        ];
    } else {
        // Dark mode style
        return [
            {
                "elementType": "geometry",
                "stylers": [{"color": "#242f3e"}]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#746855"}]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#242f3e"}]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#d59563"}]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#d59563"}]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"color": "#38414e"}]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9ca5b3"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#17263c"}]
            }
        ];
    }
}

function updateMapLocation(provinceName) {
    if (!map || !mapInitialized) {
        showNotification('Google Maps sedang dimuat. Silakan tunggu sebentar.', 'warning');
        setTimeout(() => updateMapLocation(provinceName), 1000);
        return;
    }
    
    if (mapError) {
        showNotification('Google Maps mengalami error. Silakan refresh halaman.', 'error');
        return;
    }
    
    const data = provinceData[provinceName];
    if (!data) {
        showNotification('Data provinsi tidak ditemukan.', 'error');
        return;
    }
    
    try {
        // Clear existing markers
        clearMapMarkers();
        
        const position = { lat: data.coords[0], lng: data.coords[1] };
        const zoom = data.zoom || 8;
        
        // Center and zoom map
        map.panTo(position);
        map.setZoom(zoom);
        
        // Add marker for the province
        const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: provinceName,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 12,
                fillColor: '#FFD700',
                fillOpacity: 1,
                strokeColor: '#B8860B',
                strokeWeight: 3
            },
            animation: google.maps.Animation.DROP
        });
        
        // Add info window
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div class="map-info-window">
                    <h3>${provinceName}</h3>
                    <p><strong><i class="fas fa-users"></i> Suku:</strong> ${data.detail.suku.split(',')[0]}</p>
                    <p><strong><i class="fas fa-star"></i> Adat Khas:</strong> ${data.detail.adat.substring(0, 80)}...</p>
                    <button onclick="window.openGalleryModal('${provinceName}')" 
                            style="background: #FFD700; color: #000; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; margin-top: 10px; font-weight: 600; display: inline-flex; align-items: center; gap: 5px;">
                        <i class="fas fa-images"></i> Lihat Detail
                    </button>
                </div>
            `
        });
        
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
        
        // Store marker
        mapMarkers.push(marker);
        
        // Open info window automatically
        infoWindow.open(map, marker);
        
        // Apply map style based on dark/light mode
        map.setOptions({ styles: getMapStyle() });
        
        showNotification(`Lokasi ${provinceName} ditampilkan di peta`, 'success');
        
    } catch (error) {
        console.error('Error updating map location:', error);
        showNotification('Gagal menampilkan lokasi di peta', 'error');
    }
}

function clearMapMarkers() {
    mapMarkers.forEach(marker => {
        try {
            marker.setMap(null);
        } catch (error) {
            console.error('Error clearing marker:', error);
        }
    });
    mapMarkers = [];
}

function zoomIn() {
    if (map && mapInitialized) {
        const currentZoom = map.getZoom();
        map.setZoom(currentZoom + 1);
    }
}

function zoomOut() {
    if (map && mapInitialized) {
        const currentZoom = map.getZoom();
        map.setZoom(currentZoom - 1);
    }
}

function resetMap() {
    if (map && mapInitialized) {
        map.setCenter({ lat: -2.5489, lng: 118.0149 });
        map.setZoom(4);
        clearMapMarkers();
        addIndonesiaOutline();
        addTestMarker();
        
        // Reset selector
        const selector = document.getElementById('province-map-selector');
        if (selector) selector.value = "";
        
        selectedProvince = null;
        updateMapInfoText();
        document.getElementById('province-quick-info').innerHTML = '';
        
        showNotification('Peta telah direset ke posisi awal', 'info');
    }
}
function initMap() {
    // Jika Google Maps tidak tersedia, tampilkan image fallback
    const mapElement = document.getElementById('google-map');
    if (mapElement) {
        mapElement.innerHTML = `
            <div style="width:100%; height:100%; background:#1e1e1e; display:flex; flex-direction:column; justify-content:center; align-items:center; color:#eee;">
                <i class="fas fa-map-marked-alt" style="font-size:50px; margin-bottom:20px; color:#ffd700;"></i>
                <h3>Peta Indonesia</h3>
                <p>Google Maps tidak tersedia</p>
                <p style="margin-top:20px; font-size:12px; opacity:0.7;">Gunakan dropdown untuk melihat info provinsi</p>
            </div>
        `;
    }
}

// =======================================================================
// MODIFY populateMapSelector FUNCTION
// =======================================================================
function populateMapSelector() {
    const selector = document.getElementById('province-map-selector');
    if (!selector) return;
    
    const provinceNames = Object.keys(provinceData).sort();
    
    // Clear existing options
    selector.innerHTML = '';
    
    // Default option
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = currentLanguage === 'id' 
        ? "--- Pilih Provinsi ---" 
        : "--- Select Province ---";
    selector.appendChild(defaultOption);

    provinceNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        selector.appendChild(option);
    });

    // Check Google Maps status after a delay
    setTimeout(() => {
        if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
            console.warn('⚠️ Google Maps API not loaded');
            showNotification('Google Maps gagal dimuat. Gunakan fitur lain sementara.', 'warning');
        } else {
            console.log('✅ Google Maps API is loaded');
        }
    }, 2000);

    selector.addEventListener('change', (e) => {
        selectedProvince = e.target.value;
        if (selectedProvince && provinceData[selectedProvince]) {
            updateMapLocation(selectedProvince);
            
            // Show quick info
            showProvinceQuickInfo(selectedProvince);
            
            updateMapInfoText();
        } else {
            selectedProvince = null;
            resetMap();
        }
    });
}

// =======================================================================
// MODIFY INITIALIZATION
// =======================================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Nusantara Explorer - Initializing...');
    
    try {
        // 1. Load saved settings
        loadSettings();
        
        // 2. Setup Scroll Navigation
        setupScrollNavigation();

        // 3. Initialize Carousel
        renderCarouselSlides();
        setupCarouselNavigation();
        
        // 4. Initialize Map Selector
        populateMapSelector();
        
        // 5. Initialize Auth State
        updateAuthDropdown();
        
        // 6. Initialize Quiz
        initializeQuiz();

        // 7. Setup Back to Top Button
        setupBackToTop();
        
        // 8. Setup Modals
        setupModals();
        
        // 9. Setup Language Switch
        setupLanguageSwitch();
        
        // 10. Setup Dark Mode
        setupDarkMode();
        
        // 11. Setup Notifications
        setupNotifications();
        
        // 12. Load leaderboard
        loadLeaderboard();
        
        // 13. Apply initial language
        applyLanguage();
        
        // 14. Check Google Maps status
        setTimeout(checkGoogleMapsStatus, 3000);
        
        console.log('✅ Nusantara Explorer initialized successfully!');
        
    } catch (error) {
        console.error('❌ Initialization error:', error);
        showNotification('Error initializing application. Please refresh the page.', 'error');
    }
});

function checkGoogleMapsStatus() {
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        console.error('❌ Google Maps API failed to load');
        showNotification('Google Maps gagal dimuat. Beberapa fitur mungkin terbatas.', 'warning');
    } else if (!mapInitialized) {
        console.warn('⚠️ Google Maps not initialized yet');
    } else {
        console.log('✅ Google Maps is ready');
    }
}

// =======================================================================
// QUIZ SECTION LOGIC
// =======================================================================
function generateQuizQuestions() {
    const provinceNames = Object.keys(provinceData);
    const questions = [];
    const questionsNeeded = Math.min(maxQuestions, provinceNames.length);

    // Create questions based on culture
    const questionPool = provinceNames.map(name => {
        const data = provinceData[name];
        const questionTypes = [
            {
                type: 'culture',
                question: currentLanguage === 'id' 
                    ? `Provinsi manakah yang memiliki adat/kebudayaan: <strong>${data.detail.adat.split('.')[0]}</strong>?`
                    : `Which province has the culture: <strong>${data.detail.adat.split('.')[0]}</strong>?`,
                correctAnswer: name
            },
            {
                type: 'tribe',
                question: currentLanguage === 'id'
                    ? `Provinsi manakah yang didominasi oleh suku: <strong>${data.detail.suku.split(',')[0]}</strong>?`
                    : `Which province is dominated by the tribe: <strong>${data.detail.suku.split(',')[0]}</strong>?`,
                correctAnswer: name
            }
        ];
        
        return questionTypes[Math.floor(Math.random() * questionTypes.length)];
    });

    // Shuffle and select unique questions
    const shuffled = shuffleArray(questionPool);
    const selectedQuestions = [];
    const usedProvinces = new Set();
    
    for (const q of shuffled) {
        if (!usedProvinces.has(q.correctAnswer) && selectedQuestions.length < questionsNeeded) {
            selectedQuestions.push({
                ...q,
                options: generateOptions(q.correctAnswer, provinceNames)
            });
            usedProvinces.add(q.correctAnswer);
        }
    }

    return selectedQuestions;
}

function generateOptions(correctAnswer, provinceNames) {
    let options = new Set([correctAnswer]);
    const otherProvinces = provinceNames.filter(name => name !== correctAnswer);

    while (options.size < 4) {
        const randomIndex = Math.floor(Math.random() * otherProvinces.length);
        options.add(otherProvinces[randomIndex]);
    }
    
    return shuffleArray(Array.from(options));
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function initializeQuiz() {
    quizQuestions = generateQuizQuestions();
    currentQuestionIndex = 0;
    userProfile.score = 0;
    
    const nextBtn = document.getElementById('next-question');
    const feedbackDiv = document.getElementById('quiz-feedback');
    
    if (nextBtn) {
        nextBtn.textContent = currentLanguage === 'id' ? 'Mulai Kuis' : 'Start Quiz';
    }
    
    if (feedbackDiv) {
        feedbackDiv.innerHTML = currentLanguage === 'id'
            ? `Tekan 'Mulai Kuis' untuk menjawab ${maxQuestions} pertanyaan.`
            : `Press 'Start Quiz' to answer ${maxQuestions} questions.`;
    }
    
    updateQuizStats();
    renderQuestion();
}

function renderQuestion() {
    const questionDiv = document.getElementById('quiz-question');
    const optionsDiv = document.getElementById('quiz-options');
    const nextBtn = document.getElementById('next-question');
    const feedbackDiv = document.getElementById('quiz-feedback');

    if (currentQuestionIndex >= quizQuestions.length) {
        finishQuiz();
        return;
    }

    const q = quizQuestions[currentQuestionIndex];

    // Reset UI
    if (questionDiv) questionDiv.innerHTML = q.question;
    if (optionsDiv) optionsDiv.innerHTML = '';
    if (feedbackDiv) feedbackDiv.innerHTML = '';
    
    if (nextBtn) {
        nextBtn.textContent = currentLanguage === 'id' ? 'Soal Berikutnya' : 'Next Question';
        nextBtn.disabled = true;
        nextBtn.onclick = nextQuestion;
    }

    // Reset timer
    resetTimer();

    // Create options
    if (optionsDiv && q.options) {
        q.options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('quiz-option');
            button.textContent = option;
            button.dataset.answer = option;
            button.addEventListener('click', handleAnswer);
            optionsDiv.appendChild(button);
        });
    }
    
    updateQuizStats();
}

function handleAnswer(event) {
    const selectedAnswer = event.target.dataset.answer;
    const correct = quizQuestions[currentQuestionIndex].correctAnswer;
    const feedbackDiv = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-question');
    
    // Clear timer
    clearTimer();
    
    // Disable all options
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.answer === correct) {
            btn.classList.add('correct');
        } else if (btn.dataset.answer === selectedAnswer) {
            btn.classList.add('incorrect');
        }
    });

    // Provide feedback and update score
    if (selectedAnswer === correct) {
        if (feedbackDiv) {
            feedbackDiv.innerHTML = currentLanguage === 'id'
                ? '<i class="fas fa-check-circle" style="color: #3cb371;"></i> Jawaban Benar! +10 poin'
                : '<i class="fas fa-check-circle" style="color: #3cb371;"></i> Correct Answer! +10 points';
        }
        userProfile.score += 10;
        showNotification(currentLanguage === 'id' ? '+10 Poin!' : '+10 Points!', 'success');
    } else {
        if (feedbackDiv) {
            feedbackDiv.innerHTML = currentLanguage === 'id'
                ? `<i class="fas fa-times-circle" style="color: #ff6347;"></i> Jawaban Salah. Yang benar adalah: ${correct}`
                : `<i class="fas fa-times-circle" style="color: #ff6347;"></i> Wrong answer. The correct answer is: ${correct}`;
        }
    }

    // Enable next button
    if (nextBtn) nextBtn.disabled = false;
    updateAuthDropdown();
    updateQuizStats();
    saveProfile();
}

function nextQuestion() {
    currentQuestionIndex++;
    renderQuestion();
}

function finishQuiz() {
    const questionDiv = document.getElementById('quiz-question');
    const optionsDiv = document.getElementById('quiz-options');
    const nextBtn = document.getElementById('next-question');
    const feedbackDiv = document.getElementById('quiz-feedback');
    
    if (questionDiv) {
        questionDiv.innerHTML = currentLanguage === 'id'
            ? `<h3>🎉 Kuis Selesai!</h3>`
            : `<h3>🎉 Quiz Completed!</h3>`;
    }
    
    if (optionsDiv) optionsDiv.innerHTML = '';
    
    if (feedbackDiv) {
        feedbackDiv.innerHTML = currentLanguage === 'id'
            ? `Skor Akhir Anda: <strong>${userProfile.score}</strong>. Terima kasih telah berpartisipasi!`
            : `Your Final Score: <strong>${userProfile.score}</strong>. Thank you for participating!`;
    }
    
    if (nextBtn) {
        nextBtn.textContent = currentLanguage === 'id' ? 'Ulangi Kuis' : 'Restart Quiz';
        nextBtn.disabled = false;
        nextBtn.onclick = initializeQuiz;
    }
    
    // Clear timer bar
    const timerBar = document.getElementById('timer-bar');
    if (timerBar) timerBar.style.width = '0%';
    
    // Update leaderboard
    updateLeaderboard();
    
    showNotification(
        currentLanguage === 'id' 
            ? `Kuis selesai! Skor: ${userProfile.score}` 
            : `Quiz completed! Score: ${userProfile.score}`, 
        'success'
    );
}

function updateQuizStats() {
    const currentScore = document.getElementById('current-score');
    const currentQuestion = document.getElementById('current-question');
    const totalQuestions = document.getElementById('total-questions');
    
    if (currentScore) currentScore.textContent = userProfile.score;
    if (currentQuestion) currentQuestion.textContent = currentQuestionIndex + 1;
    if (totalQuestions) totalQuestions.textContent = maxQuestions;
}

function resetTimer() {
    clearTimer();
    currentTimer = 30;
    const timerBar = document.getElementById('timer-bar');
    if (timerBar) timerBar.style.width = '100%';
    
    timerInterval = setInterval(() => {
        currentTimer--;
        if (timerBar) {
            timerBar.style.width = `${(currentTimer / 30) * 100}%`;
        }
        
        if (currentTimer <= 0) {
            clearTimer();
            // Auto skip to next question if time's up
            const nextBtn = document.getElementById('next-question');
            if (nextBtn && !nextBtn.disabled) {
                nextQuestion();
            } else {
                // Disable all options and show timeout message
                document.querySelectorAll('.quiz-option').forEach(btn => {
                    btn.disabled = true;
                });
                const feedbackDiv = document.getElementById('quiz-feedback');
                if (feedbackDiv) {
                    feedbackDiv.innerHTML = currentLanguage === 'id'
                        ? '<i class="fas fa-clock" style="color: #ffa500;"></i> Waktu habis!'
                        : '<i class="fas fa-clock" style="color: #ffa500;"></i> Time\'s up!';
                }
                if (nextBtn) {
                    nextBtn.disabled = false;
                    nextBtn.click();
                }
            }
        }
    }, 1000);
}

function clearTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// =======================================================================
// AUTH & PROFILE LOGIC
// =======================================================================
function updateAuthDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');
    if (!dropdownContent) return;
    
    dropdownContent.innerHTML = '';

    if (isUserLoggedIn) {
        dropdownContent.innerHTML = `
            <div><i class="fas fa-user"></i> ${userProfile.username}</div>
            <div><i class="fas fa-star"></i> ${currentLanguage === 'id' ? 'Skor' : 'Score'}: ${userProfile.score}</div>
            <div onclick="openAuthModal('profile')"><i class="fas fa-cog"></i> ${currentLanguage === 'id' ? 'Profil Saya' : 'My Profile'}</div>
            <div onclick="handleLogout()"><i class="fas fa-sign-out-alt"></i> ${currentLanguage === 'id' ? 'Keluar' : 'Logout'}</div>
        `;
    } else {
        dropdownContent.innerHTML = `
            <div onclick="openAuthModal('login')"><i class="fas fa-sign-in-alt"></i> ${currentLanguage === 'id' ? 'Masuk' : 'Login'}</div>
            <div onclick="openAuthModal('register')"><i class="fas fa-user-plus"></i> ${currentLanguage === 'id' ? 'Daftar' : 'Register'}</div>
        `;
    }
}

function openAuthModal(type) {
    const modal = document.getElementById('auth-modal');
    const title = document.getElementById('auth-title');
    const body = document.getElementById('auth-body');

    if (!modal || !title || !body) return;

    if (type === 'login' || type === 'register') {
        title.textContent = type === 'login' 
            ? (currentLanguage === 'id' ? 'Masuk ke Akun' : 'Login to Account')
            : (currentLanguage === 'id' ? 'Daftar Akun Baru' : 'Register New Account');
        
        body.innerHTML = `
            <p>${currentLanguage === 'id' ? 'Masukkan nama pengguna Anda' : 'Enter your username'}</p>
            <input type="text" id="auth-username" placeholder="${currentLanguage === 'id' ? 'Nama Pengguna' : 'Username'}" 
                   style="width: 100%; padding: 12px; margin: 15px 0; border-radius: 8px; border: 2px solid var(--secondary-color); 
                   background: var(--background-dark); color: var(--text-light); font-size: 16px;">
            <button onclick="handleAuth('${type}')" class="quiz-btn" style="width: 100%; padding: 12px; font-size: 16px;">
                ${type === 'login' ? (currentLanguage === 'id' ? 'Masuk' : 'Login') : (currentLanguage === 'id' ? 'Daftar' : 'Register')}
            </button>
        `;
    } else if (type === 'profile' && isUserLoggedIn) {
        title.textContent = currentLanguage === 'id' ? 'Profil Pengguna' : 'User Profile';
        body.innerHTML = `
            <div class="profile-detail">
                <p><strong><i class="fas fa-user"></i> ${currentLanguage === 'id' ? 'Nama Pengguna' : 'Username'}:</strong> ${userProfile.username}</p>
                <p><strong><i class="fas fa-star"></i> ${currentLanguage === 'id' ? 'Skor Tertinggi' : 'High Score'}:</strong> ${userProfile.score}</p>
                <p style="margin-top: 20px; color: var(--text-muted); font-style: italic;">
                    ${currentLanguage === 'id' ? 'Skor Anda akan ditampilkan di papan peringkat.' : 'Your score will be displayed on the leaderboard.'}
                </p>
                <button onclick="handleLogout()" class="quiz-btn" style="width: 100%; margin-top: 20px; background: var(--error-color);">
                    <i class="fas fa-sign-out-alt"></i> ${currentLanguage === 'id' ? 'Keluar' : 'Logout'}
                </button>
            </div>
        `;
    }
    
    modal.style.display = 'block';
    currentModal = modal;
}

function handleAuth(type) {
    const usernameInput = document.getElementById('auth-username');
    if (!usernameInput) return;
    
    const username = usernameInput.value.trim();
    
    if (username) {
        isUserLoggedIn = true;
        userProfile.username = username;
        userProfile.score = 0; // Reset score on new login/register
        
        saveProfile();
        updateAuthDropdown();
        closeModal('auth-modal');
        
        showNotification(
            currentLanguage === 'id' 
                ? `Selamat datang, ${username}!` 
                : `Welcome, ${username}!`, 
            'success'
        );
        
        initializeQuiz(); // Reset quiz for new user
    } else {
        showNotification(
            currentLanguage === 'id' 
                ? 'Mohon masukkan nama pengguna' 
                : 'Please enter a username', 
            'error'
        );
    }
}

function handleLogout() {
    isUserLoggedIn = false;
    userProfile.username = 'Guest';
    userProfile.score = 0;
    
    saveProfile();
    updateAuthDropdown();
    closeModal('auth-modal');
    
    showNotification(
        currentLanguage === 'id' 
            ? 'Anda telah keluar' 
            : 'You have logged out', 
        'info'
    );
    
    initializeQuiz(); // Reset quiz
}

function saveProfile() {
    try {
        localStorage.setItem('nusantara_profile', JSON.stringify(userProfile));
    } catch (error) {
        console.error('Error saving profile:', error);
    }
}

// =======================================================================
// LEADERBOARD LOGIC
// =======================================================================
function loadLeaderboard() {
    try {
        const savedLeaderboard = localStorage.getItem('nusantara_leaderboard');
        if (savedLeaderboard) {
            leaderboardData = JSON.parse(savedLeaderboard);
        } else {
            // Default leaderboard
            leaderboardData = [
                { name: 'Admin', score: 100 },
                { name: 'Explorer', score: 80 },
                { name: 'Traveler', score: 60 },
                { name: 'Visitor', score: 40 },
                { name: 'Beginner', score: 20 }
            ];
            localStorage.setItem('nusantara_leaderboard', JSON.stringify(leaderboardData));
        }
    } catch (error) {
        console.error('Error loading leaderboard:', error);
    }
}

function updateLeaderboard() {
    if (!isUserLoggedIn || userProfile.username === 'Guest') return;
    
    try {
        // Check if user already exists in leaderboard
        const existingUserIndex = leaderboardData.findIndex(entry => entry.name === userProfile.username);
        
        if (existingUserIndex !== -1) {
            // Update score if current score is higher
            if (userProfile.score > leaderboardData[existingUserIndex].score) {
                leaderboardData[existingUserIndex].score = userProfile.score;
            }
        } else {
            // Add new user
            leaderboardData.push({ name: userProfile.username, score: userProfile.score });
        }
        
        // Sort by score descending
        leaderboardData.sort((a, b) => b.score - a.score);
        
        // Keep only top 10
        leaderboardData = leaderboardData.slice(0, 10);
        
        // Save to localStorage
        localStorage.setItem('nusantara_leaderboard', JSON.stringify(leaderboardData));
        
        console.log('Leaderboard updated');
    } catch (error) {
        console.error('Error updating leaderboard:', error);
    }
}

function openLeaderboardModal() {
    const modal = document.getElementById('leaderboard-modal');
    const body = document.getElementById('leaderboard-body');
    
    if (!modal || !body) return;
    
    // Sort leaderboard by score
    const sortedLeaderboard = [...leaderboardData].sort((a, b) => b.score - a.score);
    
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>${currentLanguage === 'id' ? 'Nama' : 'Name'}</th>
                    <th>${currentLanguage === 'id' ? 'Skor' : 'Score'}</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    sortedLeaderboard.forEach((entry, index) => {
        const rankClass = index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : '';
        tableHTML += `
            <tr class="${rankClass}">
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.score}</td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    body.innerHTML = tableHTML;
    modal.style.display = 'block';
    currentModal = modal;
}

// =======================================================================
// SHARE FUNCTIONALITY
// =======================================================================
function shareProvince() {
    if (!selectedProvince) {
        showNotification(
            currentLanguage === 'id' 
                ? 'Pilih provinsi terlebih dahulu' 
                : 'Select a province first', 
            'error'
        );
        return;
    }
    
    const modal = document.getElementById('share-modal');
    const shareLink = document.getElementById('share-link');
    
    if (!modal || !shareLink) return;
    
    const url = `${window.location.origin}${window.location.pathname}?province=${encodeURIComponent(selectedProvince)}`;
    shareLink.value = url;
    
    modal.style.display = 'block';
    currentModal = modal;
}

function closeShareModal() {
    closeModal('share-modal');
}

function shareFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareTwitter() {
    const text = encodeURIComponent(`Lihat budaya ${selectedProvince} di Nusantara Explorer!`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareWhatsApp() {
    const text = encodeURIComponent(`Lihat budaya ${selectedProvince} di Nusantara Explorer: ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareYouTube() {
    window.open('https://www.youtube.com/', '_blank');
}

function shareInstagram() {
    window.open('https://www.instagram.com/', '_blank');
}

function copyLink() {
    const shareLink = document.getElementById('share-link');
    if (!shareLink) return;
    
    shareLink.select();
    shareLink.setSelectionRange(0, 99999);
    
    try {
        document.execCommand('copy');
        showNotification(translations[currentLanguage]['notification.link_copied'], 'success');
    } catch (error) {
        console.error('Error copying link:', error);
        showNotification('Gagal menyalin link', 'error');
    }
}

// =======================================================================
// MODAL HANDLERS
// =======================================================================
function setupModals() {
    // Gallery modal
    const galleryModal = document.getElementById('gallery-modal');
    const closeGalleryBtn = document.getElementById('close-modal');
    if (closeGalleryBtn) {
        closeGalleryBtn.onclick = () => closeModal('gallery-modal');
    }
    
    // Auth modal
    const authModal = document.getElementById('auth-modal');
    const closeAuthBtn = document.getElementById('close-auth-modal');
    if (closeAuthBtn) {
        closeAuthBtn.onclick = () => closeModal('auth-modal');
    }
    
    // Leaderboard modal
    const leaderboardModal = document.getElementById('leaderboard-modal');
    const closeLeaderboardBtn = document.getElementById('close-leaderboard-modal');
    if (closeLeaderboardBtn) {
        closeLeaderboardBtn.onclick = () => closeModal('leaderboard-modal');
    }
    
    // Share modal
    const shareModal = document.getElementById('share-modal');
    
    // Close modals when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === galleryModal) closeModal('gallery-modal');
        if (event.target === authModal) closeModal('auth-modal');
        if (event.target === leaderboardModal) closeModal('leaderboard-modal');
        if (event.target === shareModal) closeModal('share-modal');
    });
    
    // Account dropdown
    const accountIcon = document.getElementById('account-icon');
    const accountDropdown = document.getElementById('account-dropdown');
    
    if (accountIcon && accountDropdown) {
        accountIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            accountDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        window.addEventListener('click', (e) => {
            if (!e.target.matches('#account-icon') && !e.target.closest('#account-dropdown')) {
                accountDropdown.classList.remove('show');
            }
        });
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        currentModal = null;
    }
    
    // Close account dropdown
    const accountDropdown = document.getElementById('account-dropdown');
    if (accountDropdown) {
        accountDropdown.classList.remove('show');
    }
}

// =======================================================================
// EXPORT FUNCTIONS (for global access)
// =======================================================================
window.openGalleryModal = openGalleryModal;
window.openAuthModal = openAuthModal;
window.openLeaderboardModal = openLeaderboardModal;
window.toggleDarkMode = toggleDarkMode;
window.zoomIn = zoomIn;
window.zoomOut = zoomOut;
window.resetMap = resetMap;
window.shareProvince = shareProvince;
window.closeShareModal = closeShareModal;
window.shareFacebook = shareFacebook;
window.shareTwitter = shareTwitter;
window.shareWhatsApp = shareWhatsApp;
window.shareYouTube = shareYouTube;
window.shareInstagram = shareInstagram;
window.copyLink = copyLink;

console.log('Nusantara Explorer JavaScript loaded successfully!');
/* ==========================
   DATA PROVINSI (DAPAT DITAMBAHKAN)
========================== */
const provinceCoordinates = {
    "Aceh": "Aceh, Indonesia",
    "Sumatera Utara": "Sumatera Utara, Indonesia",
    "Sumatera Barat": "Sumatera Barat, Indonesia",
    "Riau": "Riau, Indonesia",
    "Jambi": "Jambi, Indonesia",
    "Sumatera Selatan": "Sumatera Selatan, Indonesia",
    "Bengkulu": "Bengkulu, Indonesia",
    "Lampung": "Lampung, Indonesia",
    "Bangka Belitung": "Bangka Belitung, Indonesia",
    "Kepulauan Riau": "Kepulauan Riau, Indonesia",
    "DKI Jakarta": "Jakarta, Indonesia",
    "Jawa Barat": "Jawa Barat, Indonesia",
    "Jawa Tengah": "Jawa Tengah, Indonesia",
    "DI Yogyakarta": "Yogyakarta, Indonesia",
    "Jawa Timur": "Jawa Timur, Indonesia",
    "Banten": "Banten, Indonesia",
    "Bali": "Bali, Indonesia",
    "Nusa Tenggara Barat": "Nusa Tenggara Barat, Indonesia",
    "Nusa Tenggara Timur": "Nusa Tenggara Timur, Indonesia",
};

/* ==========================
   ELEMENT
========================== */
const mapIframe = document.getElementById("google-map-embed");
const provinceSelector = document.getElementById("province-map-selector");
let currentZoom = 5;

/* ==========================
   ISI DROPDOWN PROVINSI
========================== */
for (let prov in provinceCoordinates) {
    const opt = document.createElement("option");
    opt.value = provinceCoordinates[prov];
    opt.textContent = prov;
    provinceSelector.appendChild(opt);
}

/* ==========================
   FUNGSI SET MAP
========================== */
function setMapLocation(location) {
    const encodedLoc = encodeURIComponent(location);
    mapIframe.src = `https://www.google.com/maps?q=${encodedLoc}&hl=id&z=${currentZoom}&output=embed`;
}

/* ==========================
   EVENT: PROVINSI DIPILIH
========================== */
provinceSelector.addEventListener("change", function () {
    const loc = this.value || "Indonesia";
    setMapLocation(loc);

    const quickInfo = document.getElementById("province-quick-info");
    quickInfo.textContent = `Lokasi saat ini: ${this.options[this.selectedIndex].text}`;
});

/* ==========================
   ZOOM IN / OUT / RESET
========================== */
function zoomIn() {
    if (currentZoom < 20) {
        currentZoom++;
        const loc = provinceSelector.value || "Indonesia";
        setMapLocation(loc);
    }
}

function zoomOut() {
    if (currentZoom > 3) {
        currentZoom--;
        const loc = provinceSelector.value || "Indonesia";
        setMapLocation(loc);
    }
}

function resetMap() {
    currentZoom = 5;
    provinceSelector.value = "";
    setMapLocation("Indonesia");
}