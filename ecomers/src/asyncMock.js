const products = [
    {
        id: "1",
        name: "Core i3-12100F",
        price: 110,
        category: "procesadores",
        img: "/assets/img/Core i3-12100F.jpg",
        stock: 25,
        description: "Procesador Intel Core i3 de 12ª generación."
    },
    {
        id: "2",
        name: "Core i3-10100",
        price: 120,
        category: "procesadores",
        img: "/assets/img/Core i3-10100.jpeg",
        stock: 30,
        description: "Procesador Intel Core i3 de 10ª generación."
    },
    {
        id: "3",
        name: "Core i3-10105",
        price: 130,
        category: "procesadores",
        img: "/assets/img/Core i3-10105.jpeg",
        stock: 20,
        description: "Procesador Intel Core i3 de 10ª generación con mejoras."
    },
    {
        id: "4",
        name: "Core i3-10300",
        price: 140,
        category: "procesadores",
        img: "/assets/img/Core i3-10300.jpeg",
        stock: 15,
        description: "Procesador Intel Core i3 avanzado de 10ª generación."
    },
    {
        id: "5",
        name: "Core i5-12400F",
        price: 170,
        category: "procesadores",
        img: "/assets/img/Core i5-12400F.jpg",
        stock: 25,
        description: "Procesador Intel Core i5 de 12ª generación, sin gráficos integrados."
    },
    {
        id: "6",
        name: "Core i5-10400",
        price: 160,
        category: "procesadores",
        img: "/assets/img/Core i5-10400.jpeg",
        stock: 18,
        description: "Procesador Intel Core i5 de 10ª generación."
    },
    {
        id: "7",
        name: "Core i5-10500",
        price: 180,
        category: "procesadores",
        img: "/assets/img/Core i5-10500.webp",
        stock: 22,
        description: "Procesador Intel Core i5 de 10ª generación con mejoras."
    },
    {
        id: "8",
        name: "Core i5-11400",
        price: 190,
        category: "procesadores",
        img: "/assets/img/Core i5-11400.webp",
        stock: 12,
        description: "Procesador Intel Core i5 de 11ª generación."
    },
    {
        id: "9",
        name: "Core i5-11600K",
        price: 240,
        category: "procesadores",
        img: "/assets/img/Core i5-11600K.jpeg",
        stock: 10,
        description: "Procesador Intel Core i5 desbloqueado de 11ª generación."
    },
    {
        id: "10",
        name: "Core i5-10600K",
        price: 220,
        category: "procesadores",
        img: "/assets/img/Core i5-10600K.jpeg",
        stock: 8,
        description: "Procesador Intel Core i5 desbloqueado de 10ª generación."
    },
    {
        id: "11",
        name: "Core i7-10700",
        price: 320,
        category: "procesadores",
        img: "/assets/img/Core i7-10700.jpg",
        stock: 14,
        description: "Procesador Intel Core i7 de 10ª generación."
    },
    {
        id: "12",
        name: "Core i7-10700K",
        price: 350,
        category: "procesadores",
        img: "/assets/img/Core i7-10700K.webp",
        stock: 11,
        description: "Procesador Intel Core i7 desbloqueado de 10ª generación."
    },
    {
        id: "13",
        name: "Core i7-11700",
        price: 330,
        category: "procesadores",
        img: "/assets/img/Core i7-11700.jpg",
        stock: 13,
        description: "Procesador Intel Core i7 de 11ª generación."
    },
    {
        id: "14",
        name: "Core i7-11700K",
        price: 370,
        category: "procesadores",
        img: "/assets/img/Core i7-11700K.webp",
        stock: 7,
        description: "Procesador Intel Core i7 desbloqueado de 11ª generación."
    },
    {
        id: "15",
        name: "Core i9-10900",
        price: 450,
        category: "procesadores",
        img: "/assets/img/Core i9-10900.jpg",
        stock: 5,
        description: "Procesador Intel Core i9 de 10ª generación."
    },
    {
        id: "16",
        name: "Core i9-10900K",
        price: 500,
        category: "procesadores",
        img: "/assets/img/Core i9-10900K.jpg",
        stock: 3,
        description: "Procesador Intel Core i9 desbloqueado de 10ª generación."
    },
    {
        id: "17",
        name: "Core i9-11900",
        price: 470,
        category: "procesadores",
        img: "/assets/img/Core i9-11900.webp",
        stock: 4,
        description: "Procesador Intel Core i9 de 11ª generación."
    },
    {
        id: "18",
        name: "Core i9-11900K",
        price: 520,
        category: "procesadores",
        img: "/assets/img/Core i9-11900K.webp",
        stock: 2,
        description: "Procesador Intel Core i9 desbloqueado de 11ª generación."
    },
    {
        id: "19",
        name: "Core i5-12600K",
        price: 290,
        category: "procesadores",
        img: "/assets/img/Core i5-12600K.jpg",
        stock: 18,
        description: "Procesador Intel Core i5 desbloqueado de 12ª generación."
    },
    {
        id: "20",
        name: "Core i9-13900K",
        price: 580,
        category: "procesadores",
        img: "/assets/img/Core i9-13900K.webp",
        stock: 6,
        description: "Procesador Intel Core i9 desbloqueado de 13ª generación."
    },
    {
        id: "21",
        name: "Ryzen 3 3100",
        price: 100,
        category: "procesadores",
        img: "/assets/assets/img/Ryzen 3 3100.jpeg",
        stock: 20,
        description: "Procesador AMD Ryzen 3 con un rendimiento ideal para equipos económicos."
    },
    {
        id: "22",
        name: "Ryzen 3 4100",
        price: 110,
        category: "procesadores",
        img: "/assets/img/Ryzen 3 4100.jpeg",
        stock: 18,
        description: "Procesador AMD Ryzen 3 de nueva generación con mejor desempeño."
    },
    {
        id: "23",
        name: "Ryzen 3 3300X",
        price: 120,
        category: "procesadores",
        img: "/assets/img/Ryzen 3 3300X.jpeg",
        stock: 15,
        description: "Procesador AMD Ryzen 3 con un excelente balance precio-rendimiento."
    },
    {
        id: "24",
        name: "Ryzen 5 4600G",
        price: 170,
        category: "procesadores",
        img: "/assets/img/Ryzen 5 4600G.jpeg",
        stock: 25,
        description: "Procesador AMD Ryzen 5 con gráficos integrados."
    },
    {
        id: "25",
        name: "Ryzen 5 5600",
        price: 190,
        category: "procesadores",
        img: "/assets/img/Ryzen 5 5600.jpg",
        stock: 22,
        description: "Procesador AMD Ryzen 5 de alto rendimiento."
    },
    {
        id: "26",
        name: "Ryzen 5 5600X",
        price: 210,
        category: "procesadores",
        img: "/assets/img/Ryzen 5 5600X.jpeg",
        stock: 20,
        description: "Procesador AMD Ryzen 5 con desempeño mejorado y tecnología avanzada."
    },
    {
        id: "27",
        name: "Ryzen 5 7600",
        price: 230,
        category: "procesadores",
        img: "/assets/img/Ryzen 5 7600.jpg",
        stock: 18,
        description: "Procesador AMD Ryzen 5 con soporte para DDR5."
    },
    {
        id: "28",
        name: "Ryzen 5 7600X",
        price: 250,
        category: "procesadores",
        img: "/assets/img/Ryzen 5 7600X.avif",
        stock: 17,
        description: "Procesador AMD Ryzen 5 desbloqueado para overclocking."
    },
    {
        id: "29",
        name: "Ryzen 7 3700X",
        price: 300,
        category: "procesadores",
        img: "/assets/img/Ryzen 7 3700X.webp",
        stock: 14,
        description: "Procesador AMD Ryzen 7 con alto rendimiento para tareas intensivas."
    },
    {
        id: "30",
        name: "Ryzen 7 5700G",
        price: 300,
        category: "procesadores",
        img: "/assets/img/Ryzen 7 5700G.jpeg",
        stock: 12,
        description: "Procesador AMD Ryzen 7 con gráficos integrados para productividad y gaming."
    },
    {
        id: "31",
        name: "Ryzen 7 3800X",
        price: 320,
        category: "procesadores",
        img: "/assets/img/Ryzen 7 3800X.webp",
        stock: 10,
        description: "Procesador AMD Ryzen 7 diseñado para entusiastas."
    },
    {
        id: "32",
        name: "Ryzen 7 7700",
        price: 360,
        category: "procesadores",
        img: "/assets/img/Ryzen 7 7700.jpg",
        stock: 8,
        description: "Procesador AMD Ryzen 7 de última generación."
    },
    {
        id: "33",
        name: "Ryzen 7 7700X",
        price: 380,
        category: "procesadores",
        img: "/assets/img/Ryzen 7 7700X.avif",
        stock: 6,
        description: "Procesador AMD Ryzen 7 desbloqueado para rendimiento extremo."
    },
    {
        id: "34",
        name: "Ryzen 7 5800X",
        price: 350,
        category: "procesadores",
        img: "/assets/img/Ryzen 7 5800X.jpeg",
        stock: 9,
        description: "Procesador AMD Ryzen 7 con excelente relación calidad-precio."
    },
    {
        id: "35",
        name: "Ryzen 7 5800X3D",
        price: 400,
        category: "procesadores",
        img: "/assets/img/Ryzen 7 5800X3D.webp",
        stock: 7,
        description: "Procesador AMD Ryzen 7 optimizado para gaming."
    },
    {
        id: "36",
        name: "Ryzen 9 7900",
        price: 420,
        category: "procesadores",
        img: "/assets/img/Ryzen 9 7900.jpg",
        stock: 5,
        description: "Procesador AMD Ryzen 9 de alto rendimiento."
    },
    {
        id: "37",
        name: "Ryzen 9 7900X",
        price: 500,
        category: "procesadores",
        img: "/assets/img/Ryzen 9 7900X.avif",
        stock: 4,
        description: "Procesador AMD Ryzen 9 desbloqueado con tecnología avanzada."
    },
    {
        id: "38",
        name: "Ryzen 9 3900X",
        price: 500,
        category: "procesadores",
        img: "/assets/img/Ryzen 9 3900X.webp",
        stock: 3,
        description: "Procesador AMD Ryzen 9 para multitarea intensiva."
    },
    {
        id: "39",
        name: "Ryzen 9 5950X",
        price: 800,
        category: "procesadores",
        img: "/assets/img/Ryzen 9 5950X.jpg",
        stock: 2,
        description: "Procesador AMD Ryzen 9 para rendimiento profesional."
    },
    {
        id: "40",
        name: "Ryzen 9 3950X",
        price: 750,
        category: "procesadores",
        img: "/assets/img/Ryzen 9 3950X.jpeg",
        stock: 2,
        description: "Procesador AMD Ryzen 9 con potencia extrema."
    },
    {
        id: "41",
        name: "Ryzen 9 7950X",
        price: 700,
        category: "procesadores",
        img: "/assets/img/Ryzen 9 7950X.jpg",
        stock: 3,
        description: "Procesador AMD Ryzen 9 de última generación con soporte para DDR5."
    },
    {
        id: 42,
        name: "ASUS ROG Strix Z690-E Gaming WiFi",
        price: 380,
        category: "motherboard",
        img: "/assets/img/ASUS ROG Strix Z690-E Gaming WiFi.jpg",
        stock: 25,
        description: "Motherboard ASUS ROG Strix Z690-E Gaming WiFi con chipset Z690, socket LGA 1700, compatible con procesadores Intel."
    },
    {
        id: 43,
        name: "MSI MPG Z690 Carbon WiFi",
        price: 350,
        category: "motherboard",
        img: "/assets/img/MSI MPG Z690 Carbon WiFi.jpeg",
        stock: 20,
        description: "Motherboard MSI MPG Z690 Carbon WiFi con chipset Z690, socket LGA 1700, compatible con procesadores Intel."
    },
    {
        id: 44,
        name: "Gigabyte Z690 AORUS Elite AX",
        price: 320,
        category: "motherboard",
        img: "/assets/img/Gigabyte Z690 AORUS Elite AX.jpeg",
        stock: 15,
        description: "Motherboard Gigabyte Z690 AORUS Elite AX con chipset Z690, socket LGA 1700, compatible con procesadores Intel."
    },
    {
        id: 45,
        name: "ASRock Z690 Extreme",
        price: 270,
        category: "motherboard",
        img: "/assets/img/ASRock Z690 Extreme.jpeg",
        stock: 10,
        description: "Motherboard ASRock Z690 Extreme con chipset Z690, socket LGA 1700, compatible con procesadores Intel."
    },
    {
        id: 46,
        name: "ASUS ROG Strix Z490-E Gaming",
        price: 280,
        category: "motherboard",
        img: "/assets/img/ASUS ROG Strix Z490-E Gaming.jpeg",
        stock: 12,
        description: "Motherboard ASUS ROG Strix Z490-E Gaming con chipset Z490, socket LGA 1200, compatible con procesadores Intel."
    },
    {
        id: 47,
        name: "MSI MPG Z490 Gaming Edge WiFi",
        price: 200,
        category: "motherboard",
        img: "/assets/img/MSI MPG Z490 Gaming Edge WiFi.jpeg",
        stock: 10,
        description: "Motherboard MSI MPG Z490 Gaming Edge WiFi con chipset Z490, socket LGA 1200, compatible con procesadores Intel."
    },
    {
        id: 48,
        name: "Gigabyte Z490 AORUS Master",
        price: 300,
        category: "motherboard",
        img: "/assets/img/Gigabyte Z490 AORUS Master.jpeg",
        stock: 8,
        description: "Motherboard Gigabyte Z490 AORUS Master con chipset Z490, socket LGA 1200, compatible con procesadores Intel."
    },
    {
        id: 49,
        name: "ASRock Z490 Taichi",
        price: 370,
        category: "motherboard",
        img: "/assets/img/ASRock Z490 Taichi.jpeg",
        stock: 5,
        description: "Motherboard ASRock Z490 Taichi con chipset Z490, socket LGA 1200, compatible con procesadores Intel."
    },
    {
        id: 50,
        name: "ASUS Prime Z590-A",
        price: 250,
        category: "motherboard",
        img: "/assets/img/ASUS Prime Z590-A.jpeg",
        stock: 14,
        description: "Motherboard ASUS Prime Z590-A con chipset Z590, socket LGA 1200, compatible con procesadores Intel."
    },
    {
        id: 51,
        name: "MSI MEG Z590 ACE",
        price: 400,
        category: "motherboard",
        img: "/assets/img/MSI MEG Z590 ACE.jpeg",
        stock: 6,
        description: "Motherboard MSI MEG Z590 ACE con chipset Z590, socket LGA 1200, compatible con procesadores Intel."
    },
    {
        id: 52,
        name: "Gigabyte Z590 AORUS Elite",
        price: 230,
        category: "motherboard",
        img: "/assets/img/Gigabyte Z590 AORUS Elite.jpeg",
        stock: 18,
        description: "Motherboard Gigabyte Z590 AORUS Elite con chipset Z590, socket LGA 1200, compatible con procesadores Intel."
    },
    {
        id: 53,
        name: "ASRock Z590 Extreme WiFi 6E",
        price: 220,
        category: "motherboard",
        img: "/assets/img/ASRock Z590 Extreme WiFi 6E.jpg",
        stock: 7,
        description: "Motherboard ASRock Z590 Extreme WiFi 6E con chipset Z590, socket LGA 1200, compatible con procesadores Intel."
    },
    {
        id: 54,
        name: "MSI Z390-A PRO",
        price: 140,
        category: "motherboard",
        img: "/assets/img/MSI Z390-A PRO.jpeg",
        stock: 30,
        description: "Motherboard MSI Z390-A PRO con chipset Z390, socket LGA 1151, compatible con procesadores Intel."
    },
    {
        id: 55,
        name: "Gigabyte Z390 AORUS Ultra",
        price: 260,
        category: "motherboard",
        img: "/assets/img/Gigabyte Z390 AORUS Ultra.jpeg",
        stock: 11,
        description: "Motherboard Gigabyte Z390 AORUS Ultra con chipset Z390, socket LGA 1151, compatible con procesadores Intel."
    },
    {
        id: 56,
        name: "ASUS ROG Maximus XI Hero (Wi-Fi)",
        price: 290,
        category: "motherboard",
        img: "/assets/img/ASUS ROG Maximus XI Hero (Wi-Fi).jpeg",
        stock: 4,
        description: "Motherboard ASUS ROG Maximus XI Hero (Wi-Fi) con chipset Z390, socket LGA 1151, compatible con procesadores Intel."
    },
    {
        id: 57,
        name: "ASRock Z390 Phantom Gaming 4",
        price: 150,
        category: "motherboard",
        img: "/assets/img/ASRock Z390 Phantom Gaming 4.jpeg",
        stock: 13,
        description: "Motherboard ASRock Z390 Phantom Gaming 4 con chipset Z390, socket LGA 1151, compatible con procesadores Intel."
    },
    {
        id: 58,
        name: "MSI MPG Z390 Gaming Pro Carbon",
        price: 200,
        category: "motherboard",
        img: "/assets/img/MSI MPG Z390 Gaming Pro Carbon.jpeg",
        stock: 9,
        description: "Motherboard MSI MPG Z390 Gaming Pro Carbon con chipset Z390, socket LGA 1151, compatible con procesadores Intel."
    },
    {
        id: 59,
        name: "ASUS TUF Z370-PLUS Gaming",
        price: 160,
        category: "motherboard",
        img: "/assets/img/ASUS TUF Z370-PLUS Gaming.jpeg",
        stock: 22,
        description: "Motherboard ASUS TUF Z370-PLUS Gaming con chipset Z370, socket LGA 1151, compatible con procesadores Intel."
    },
    {
        id: 60,
        name: "ASUS Z97-A",
        price: 180,
        category: "motherboard",
        img: "/assets/img/ASUS Z97-A.jpeg",
        stock: 17,
        description: "Motherboard ASUS Z97-A con chipset Z97, socket LGA 1150, compatible con procesadores Intel."
    },
    {
        id: 61,
        name: "MSI Z97 Gaming 5",
        price: 160,
        category: "motherboard",
        img: "/assets/img/MSI Z97 Gaming 5.jpeg",
        stock: 12,
        description: "Motherboard MSI Z97 Gaming 5 con chipset Z97, socket LGA 1150, compatible con procesadores Intel."
    },
    {
        id: 62,
        name: "Gigabyte Z97X-UD3H-BK",
        price: 150,
        category: "motherboard",
        img: "/assets/img/Gigabyte Z97X-UD3H-BK.jpeg",
        stock: 10,
        description: "Motherboard Gigabyte Z97X-UD3H-BK con chipset Z97, socket LGA 1150, compatible con procesadores Intel."
    },
    {
        id: 63,
        name: "ASRock Z97 Extreme4",
        price: 140,
        category: "motherboard",
        img: "/assets/img/ASRock Z97 Extreme4.jpeg",
        stock: 8,
        description: "Motherboard ASRock Z97 Extreme4 con chipset Z97, socket LGA 1150, compatible con procesadores Intel."
    },
    {
        id: 64,
        name: "ASUS ROG Crosshair X670E Hero",
        price: 500,
        category: "motherboard",
        img: "/assets/img/ASUS ROG Crosshair X670E Hero.jpg",
        stock: 10,
        description: "Motherboard ASUS ROG Crosshair X670E Hero con chipset X670E, socket AM5, compatible con procesadores AMD Ryzen."
    },
    {
        id: 65,
        name: "MSI MEG X670E Ace",
        price: 550,
        category: "motherboard",
        img: "/assets/img/MSI MEG X670E Ace.jpeg",
        stock: 10,
        description: "Motherboard MSI MEG X670E Ace con chipset X670E, socket AM5, compatible con procesadores AMD Ryzen."
    },
    {
        id: 66,
        name: "Gigabyte X670 AORUS Master",
        price: 450,
        category: "motherboard",
        img: "/assets/img/Gigabyte X670 AORUS Master.jpeg",
        stock: 10,
        description: "Motherboard Gigabyte X670 AORUS Master con chipset X670, socket AM5, compatible con procesadores AMD Ryzen."
    },
    {
        id: 67,
        name: "ASRock X670E Taichi",
        price: 480,
        category: "motherboard",
        img: "/assets/img/ASRock X670E Taichi.jpeg",
        stock: 10,
        description: "Motherboard ASRock X670E Taichi con chipset X670E, socket AM5, compatible con procesadores AMD Ryzen."
    },
    {
        id: 68,
        name: "ASUS ROG Strix X570-E Gaming WiFi II",
        price: 320,
        category: "motherboard",
        img: "/assets/img/ASUS ROG Strix X570-E Gaming WiFi II.jpeg",
        stock: 10,
        description: "Motherboard ASUS ROG Strix X570-E Gaming WiFi II con chipset X570, socket AM4, compatible con procesadores AMD Ryzen."
    },
    {
        id: 69,
        name: "MSI MPG B550 Gaming Edge WiFi",
        price: 180,
        category: "motherboard",
        img: "/assets/img/MSI MPG B550 Gaming Edge WiFi.jpeg",
        stock: 10,
        description: "Motherboard MSI MPG B550 Gaming Edge WiFi con chipset B550, socket AM4, compatible con procesadores AMD Ryzen."
    },
    {
        id: 70,
        name: "Gigabyte B550 AORUS Elite V2",
        price: 160,
        category: "motherboard",
        img: "/assets/img/Gigabyte B550 AORUS Elite V2.jpeg",
        stock: 10,
        description: "Motherboard Gigabyte B550 AORUS Elite V2 con chipset B550, socket AM4, compatible con procesadores AMD Ryzen."
    },
    {
        id: 71,
        name: "ASRock B450 Steel Legend",
        price: 100,
        category: "motherboard",
        img: "/assets/img/ASRock B450 Steel Legend.jpeg",
        stock: 10,
        description: "Motherboard ASRock B450 Steel Legend con chipset B450, socket AM4, compatible con procesadores AMD Ryzen."
    },
    {
        id: 72,
        name: "ASUS TUF Gaming X570-Plus WiFi",
        price: 200,
        category: "motherboard",
        img: "/assets/img/ASUS TUF Gaming X570-Plus WiFi.jpg",
        stock: 10,
        description: "Motherboard ASUS TUF Gaming X570-Plus WiFi con chipset X570, socket AM4, compatible con procesadores AMD Ryzen."
    },
    {
        id: 73,
        name: "MSI B450 Tomahawk Max",
        price: 110,
        category: "motherboard",
        img: "/assets/img/MSI B450 Tomahawk Max.jpeg",
        stock: 10,
        description: "Motherboard MSI B450 Tomahawk Max con chipset B450, socket AM4, compatible con procesadores AMD Ryzen."
    },
    {
        id: 74,
        name: "Gigabyte X570 AORUS Elite",
        price: 200,
        category: "motherboard",
        img: "/assets/img/Gigabyte X570 AORUS Elite.jpeg",
        stock: 10,
        description: "Motherboard Gigabyte X570 AORUS Elite con chipset X570, socket AM4, compatible con procesadores AMD Ryzen."
    },
    {
        id: 75,
        name: "ASRock B550 Taichi",
        price: 240,
        category: "motherboard",
        img: "/assets/img/ASRock B550 Taichi.jpeg",
        stock: 10,
        description: "Motherboard ASRock B550 Taichi con chipset B550, socket AM4, compatible con procesadores AMD Ryzen."
    },
    {
        id: 76,
        name: "ASUS ROG Crosshair V Formula-Z",
        price: 200,
        category: "motherboard",
        img: "/assets/img/ASUS ROG Crosshair V Formula-Z.jpeg",
        stock: 10,
        description: "Motherboard ASUS ROG Crosshair V Formula-Z con chipset 990FX, socket AM3+, compatible con procesadores AMD."
    },
    {
        id: 77,
        name: "MSI 970 Gaming",
        price: 130,
        category: "motherboard",
        img: "/assets/img/MSI 970 Gaming.jpeg",
        stock: 10,
        description: "Motherboard MSI 970 Gaming con chipset 970, socket AM3+, compatible con procesadores AMD."
    },
    {
        id: 78,
        name: "Gigabyte GA-990FXA-UD3",
        price: 150,
        category: "motherboard",
        img: "/assets/img/Gigabyte GA-990FXA-UD3.jpeg",
        stock: 10,
        description: "Motherboard Gigabyte GA-990FXA-UD3 con chipset 990FX, socket AM3+, compatible con procesadores AMD."
    },
    {
        id: 79,
        name: "ASRock 970 Extreme4",
        price: 110,
        category: "motherboard",
        img: "/assets/img/ASRock 970 Extreme4.jpeg",
        stock: 10,
        description: "Motherboard ASRock 970 Extreme4 con chipset 970, socket AM3+, compatible con procesadores AMD."
    },
    {
        id: 80,
        name: "RTX 2060",
        price: 349,
        category: "tarjetavideo",
        img: "/assets/img/RTX 2060.jpg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 2060 con 6GB GDDR6, arquitectura Turing y soporte para ray tracing."
    },
    {
        id: 81,
        name: "RTX 2060 Super",
        price: 399,
        category: "tarjetavideo",
        img: "/assets/img/RTX 2060 Super.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 2060 Super con 8GB GDDR6, arquitectura Turing y soporte para ray tracing."
    },
    {
        id: 82,
        name: "RTX 2070",
        price: 499,
        category: "tarjetavideo",
        img: "/assets/img/RTX 2070.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 2070 con 8GB GDDR6, arquitectura Turing y soporte para ray tracing."
    },
    {
        id: 83,
        name: "RTX 2070 Super",
        price: 599,
        category: "tarjetavideo",
        img: "/assets/img/RTX 2070 Super.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 2070 Super con 8GB GDDR6, arquitectura Turing y soporte para ray tracing."
    },
    {
        id: 84,
        name: "RTX 2080",
        price: 699,
        category: "tarjetavideo",
        img: "/assets/img/RTX 2080.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 2080 con 8GB GDDR6, arquitectura Turing y soporte para ray tracing."
    },
    {
        id: 85,
        name: "RTX 2080 Super",
        price: 799,
        category: "tarjetavideo",
        img: "/assets/img/RTX 2080 Super.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 2080 Super con 8GB GDDR6, arquitectura Turing y soporte para ray tracing."
    },
    {
        id: 86,
        name: "RTX 2080 Ti",
        price: 999,
        category: "tarjetavideo",
        img: "/assets/img/RTX 2080 Ti.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 2080 Ti con 11GB GDDR6, arquitectura Turing y soporte para ray tracing."
    },
    {
        id: 87,
        name: "RTX 3060",
        price: 329,
        category: "tarjetavideo",
        img: "/assets/img/RTX 3060.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 3060 con 12GB GDDR6, arquitectura Ampere y soporte para ray tracing."
    },
    {
        id: 88,
        name: "RTX 3060 Ti",
        price: 399,
        category: "tarjetavideo",
        img: "/assets/img/RTX 3060 Ti.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 3060 Ti con 8GB GDDR6, arquitectura Ampere y soporte para ray tracing."
    },
    {
        id: 89,
        name: "RTX 3070",
        price: 499,
        category: "tarjetavideo",
        img: "/assets/img/RTX 3070.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 3070 con 8GB GDDR6, arquitectura Ampere y soporte para ray tracing."
    },
    {
        id: 90,
        name: "RTX 3070 Ti",
        price: 599,
        category: "tarjeta grafica",
        img: "/assets/img/RTX 3070 Ti.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 3070 Ti con 8GB GDDR6, arquitectura Ampere y soporte para ray tracing."
    },
    {
        id: 91,
        name: "RTX 3080",
        price: 699,
        category: "tarjetavideo",
        img: "/assets/img/RTX 3080.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 3080 con 10GB GDDR6X, arquitectura Ampere y soporte para ray tracing."
    },
    {
        id: 92,
        name: "RTX 3080 Ti",
        price: 1199,
        category: "tarjetavideo",
        img: "/assets/img/RTX 3080 Ti.jpg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 3080 Ti con 12GB GDDR6X, arquitectura Ampere y soporte para ray tracing."
    },
    {
        id: 93,
        name: "RTX 3090",
        price: 1499,
        category: "tarjetavideo",
        img: "/assets/img/RTX 3090.jpg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 3090 con 24GB GDDR6X, arquitectura Ampere y soporte para ray tracing."
    },
    {
        id: 94,
        name: "RTX 3090 Ti",
        price: 1999,
        category: "tarjetavideo",
        img: "/assets/img/RTX 3090 Ti.jpg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 3090 Ti con 24GB GDDR6X, arquitectura Ampere y soporte para ray tracing."
    },
    {
        id: 95,
        name: "RTX 4060",
        price: 299,
        category: "tarjetavideo",
        img: "/assets/img/RTX 4060.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 4060 con 8GB GDDR6, arquitectura Ada Lovelace y soporte para ray tracing."
    },
    {
        id: 96,
        name: "RTX 4060 Ti",
        price: 399,
        category: "tarjetavideo",
        img: "/assets/img/RTX 4060 Ti.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 4060 Ti con 8GB GDDR6, arquitectura Ada Lovelace y soporte para ray tracing."
    },
    {
        id: 97,
        name: "RTX 4070",
        price: 599,
        category: "tarjetavideo",
        img: "/assets/img/RTX 4070.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 4070 con 12GB GDDR6X, arquitectura Ada Lovelace y soporte para ray tracing."
    },
    {
        id: 98,
        name: "RTX 4070 Ti",
        price: 799,
        category: "tarjetavideo",
        img: "/assets/img/RTX 4070 Ti.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 4070 Ti con 12GB GDDR6X, arquitectura Ada Lovelace y soporte para ray tracing."
    },
    {
        id: 99,
        name: "RTX 4080",
        price: 1199,
        category: "tarjetavideo",
        img: "/assets/img/RTX 4080.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 4080 con 16GB GDDR6X, arquitectura Ada Lovelace y soporte para ray tracing."
    },
    {
        id: 100,
        name: "RTX 4090",
        price: 1599,
        category: "tarjetavideo",
        img: "/assets/img/RTX 4090.jpeg",
        stock: 10,
        description: "Tarjeta gráfica NVIDIA RTX 4090, la mejor opción para juegos en 4K y aplicaciones de IA."
    },
    {
        id: 101,
        name: "RX 5500 XT",
        price: 199,
        category: "tarjetavideo",
        img: "/assets/img/RX 5500 XT.jpeg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 5500 XT, ideal para juegos en 1080p."
    },
    {
        id: 102,
        name: "RX 5600 XT",
        price: 279,
        category: "tarjetavideo",
        img: "/assets/img/RX 5600 XT.jpeg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 5600 XT, alto rendimiento en juegos 1440p."
    },
    {
        id: 103,
        name: "RX 5700",
        price: 349,
        category: "tarjetavideo",
        img: "/assets/img/RX 5700.jpg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 5700, gran desempeño en juegos 1440p y 4K."
    },
    {
        id: 104,
        name: "RX 5700 XT",
        price: 399,
        category: "tarjetavideo",
        img: "/assets/img/RX 5700 XT.jpeg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 5700 XT, ideal para juegos en 1440p y 4K."
    },
    {
        id: 105,
        name: "RX 6600",
        price: 329,
        category: "tarjetavideo",
        img: "/assets/img/RX 6600.jpg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 6600, gran rendimiento para juegos en 1080p."
    },
    {
        id: 106,
        name: "RX 6600 XT",
        price: 379,
        category: "tarjetavideo",
        img: "/assets/img/RX 6600 XT.jpg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 6600 XT, excelente desempeño en juegos 1440p."
    },
    {
        id: 107,
        name: "RX 6650 XT",
        price: 399,
        category: "tarjetavideo",
        img: "/assets/img/RX 6650 XT.jpeg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 6650 XT, alto rendimiento en juegos 1440p."
    },
    {
        id: 108,
        name: "RX 6700 XT",
        price: 479,
        category: "tarjetavideo",
        img: "/assets/img/RX 6700 XT.jpg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 6700 XT, ideal para juegos en 1440p y 4K."
    },
    {
        id: 109,
        name: "RX 6750 XT",
        price: 549,
        category: "tarjetavideo",
        img: "/assets/img/RX 6750 XT.jpeg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 6750 XT, rendimiento excepcional en juegos 4K."
    },
    {
        id: 110,
        name: "RX 6800",
        price: 579,
        category: "tarjetavideo",
        img: "/assets/img/RX 6800.jpeg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 6800, rendimiento avanzado para juegos 4K."
    },
    {
        id: 111,
        name: "RX 6800 XT",
        price: 649,
        category: "tarjetavideo",
        img: "/assets/img/RX 6800 XT.jpg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 6800 XT, ideal para juegos en 4K con alta calidad."
    },
    {
        id: 112,
        name: "RX 6900 XT",
        price: 999,
        category: "tarjetavideo",
        img: "/assets/img/RX 6900 XT.jpeg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 6900 XT, la mejor opción para juegos en 4K y VR."
    },
    {
        id: 113,
        name: "RX 6950 XT",
        price: 1099,
        category: "tarjetavideo",
        img: "/assets/img/RX 6950 XT.jpeg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 6950 XT, para un rendimiento sobresaliente en 4K."
    },
    {
        id: 114,
        name: "RX 7600",
        price: 269,
        category: "tarjetavideo",
        img: "/assets/img/RX 7600.jpg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 7600, gran rendimiento para juegos en 1080p."
    },
    {
        id: 115,
        name: "RX 7700 XT",
        price: 449,
        category: "tarjetavideo",
        img: "/assets/img/RX 7700 XT.jpeg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 7700 XT, ideal para juegos en 1440p."
    },
    {
        id: 116,
        name: "RX 7800 XT",
        price: 499,
        category: "tarjetavideo",
        img: "/assets/img/RX 7800 XT.jpg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 7800 XT, excelente desempeño en juegos 1440p."
    },
    {
        id: 117,
        name: "RX 7900 XT",
        price: 849,
        category: "tarjetavideo",
        img: "/assets/img/RX 7900 XT.jpg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 7900 XT, para un rendimiento increíble en 4K."
    },
    {
        id: 118,
        name: "RX 7900 XTX",
        price: 999,
        category: "tarjetavideo",
        img: "/assets/img/RX 7900 XTX.jpeg",
        stock: 10,
        description: "Tarjeta gráfica AMD RX 7900 XTX, la mejor opción para juegos de alta gama en 4K."
    },
    {
        id: 119,
        name: "Corsair RM550x",
        price: 90,
        category: "fuentepoder",
        imagen: "/assets/img/Corsair RM550x.jpg",
        stock: 10,
        description: "Fuente de poder Corsair RM550x, potencia de 550W, certificación 80 Plus Gold."
    },
    {
        id: 120,
        name: "EVGA SuperNOVA 650 G5",
        price: 120,
        category: "fuentepoder",
        imagen: "/assets/img/EVGA SuperNOVA 650 G5.jpeg",
        stock: 10,
        description: "Fuente de poder EVGA SuperNOVA 650 G5, potencia de 650W, certificación 80 Plus Gold."
    },
    {
        id: 121,
        name: "Seasonic Focus GX-750",
        price: 130,
        category: "fuentepoder",
        imagen: "/assets/img/Seasonic Focus GX-750.jpg",
        stock: 10,
        description: "Fuente de poder Seasonic Focus GX-750, potencia de 750W, certificación 80 Plus Gold."
    },
    {
        id: 122,
        name: "Corsair RM850x",
        price: 140,
        category: "fuentepoder",
        imagen: "/assets/img/Corsair RM850x.jpeg",
        stock: 10,
        description: "Fuente de poder Corsair RM850x, potencia de 850W, certificación 80 Plus Gold."
    },
    {
        id: 123,
        name: "Cooler Master V850",
        price: 150,
        category: "fuentepoder",
        imagen: "/assets/img/Cooler Master V850.jpg",
        stock: 10,
        description: "Fuente de poder Cooler Master V850, potencia de 850W, certificación 80 Plus Gold."
    },
    {
        id: 124,
        name: "Thermaltake Toughpower GF1 650W",
        price: 110,
        category: "fuentepoder",
        imagen: "/assets/img/Thermaltake Toughpower GF1 650W.jpg",
        stock: 10,
        description: "Fuente de poder Thermaltake Toughpower GF1 650W, potencia de 650W, certificación 80 Plus Gold."
    },
    {
        id: 125,
        name: "ASUS ROG Strix 750W",
        price: 135,
        category: "fuentepoder",
        imagen: "/assets/img/ASUS ROG Strix 750W.jpeg",
        stock: 10,
        description: "Fuente de poder ASUS ROG Strix 750W, potencia de 750W, certificación 80 Plus Gold."
    },
    {
        id: 126,
        name: "NZXT C850",
        price: 140,
        category: "fuentepoder",
        imagen: "/assets/img/NZXT C850.jpeg",
        stock: 10,
        description: "Fuente de poder NZXT C850, potencia de 850W, certificación 80 Plus Gold."
    },
    {
        id: 127,
        name: "be quiet! Straight Power 11 850W",
        price: 160,
        category: "fuentepoder",
        imagen: "/assets/img/be quiet! Straight Power 11 850W.jpg",
        stock: 10,
        description: "Fuente de poder be quiet! Straight Power 11 850W, potencia de 850W, certificación 80 Plus Platinum."
    },
    {
        id: 128,
        name: "Corsair AX1000",
        price: 280,
        category: "fuentepoder",
        imagen: "/assets/img/Corsair AX1000.jpg",
        stock: 10,
        description: "Fuente de poder Corsair AX1000, potencia de 1000W, certificación 80 Plus Titanium."
    },
    {
        id: 129,
        name: "EVGA SuperNOVA 1000 T2",
        price: 300,
        category: "fuentepoder",
        imagen: "/assets/img/EVGA SuperNOVA 1000 T2.jpeg",
        stock: 10,
        description: "Fuente de poder EVGA SuperNOVA 1000 T2, potencia de 1000W, certificación 80 Plus Titanium."
    },
    {
        id: 130,
        name: "Seasonic Prime TX-850",
        price: 250,
        category: "fuentepoder",
        imagen: "/assets/img/Seasonic Prime TX-850.jpeg",
        stock: 10,
        description: "Fuente de poder Seasonic Prime TX-850, potencia de 850W, certificación 80 Plus Titanium."
    },
    {
        id: 131,
        name: "Thermaltake Toughpower iRGB Plus 850W",
        price: 190,
        category: "fuentepoder",
        imagen: "/assets/img/Thermaltake Toughpower iRGB Plus 850W.jpg",
        stock: 10,
        description: "Fuente de poder Thermaltake Toughpower iRGB Plus 850W, potencia de 850W, certificación 80 Plus Platinum."
    },
    {
        id: 132,
        name: "Cooler Master MWE Gold 650 V2",
        price: 90,
        category: "fuentepoder",
        imagen: "/assets/img/Cooler Master MWE Gold 650 V2.jpg",
        stock: 10,
        description: "Fuente de poder Cooler Master MWE Gold 650 V2, potencia de 650W, certificación 80 Plus Gold."
    },
    {
        id: 133,
        name: "MSI MPG A850GF",
        price: 130,
        category: "fuentepoder",
        imagen: "/assets/img/MSI MPG A850GF.jpeg",
        stock: 10,
        description: "Fuente de poder MSI MPG A850GF, potencia de 850W, certificación 80 Plus Gold."
    },
    {
        id: 134,
        name: "Gigabyte P750GM",
        price: 100,
        category: "fuentepoder",
        imagen: "/assets/img/Gigabyte P750GM.jpeg",
        stock: 10,
        description: "Fuente de poder Gigabyte P750GM, potencia de 750W, certificación 80 Plus Gold."
    },
    {
        id: 135,
        name: "be quiet! Dark Power Pro 12 1200W",
        price: 400,
        category: "fuentepoder",
        imagen: "/assets/img/be quiet! Dark Power Pro 12 1200W.jpg",
        stock: 10,
        description: "Fuente de poder be quiet! Dark Power Pro 12 1200W, potencia de 1200W, certificación 80 Plus Titanium."
    },
    {
        id: 136,
        name: "ASUS ROG Thor 1200W",
        price: 350,
        category: "fuentepoder",
        imagen: "/assets/img/ASUS ROG Thor 1200W.jpeg",
        stock: 10,
        description: "Fuente de poder ASUS ROG Thor 1200W, potencia de 1200W, certificación 80 Plus Platinum."
    },
    {
        id: 137,
        name: "Corsair Vengeance LPX 16GB",
        category: "memoriaRAM",
        price: 70,
        img: "/assets/img/Corsair Vengeance LPX 16GB.jpg",
        stock: 29,
        description: "Capacidad: 16GB (2x8GB), Frecuencia: 3200 MHz, Tipo: DDR4"
    },
    {
        id: 138,
        name: "G.Skill Ripjaws V 16GB",
        category: "memoriaRAM",
        price: 80,
        img: "/assets/img/G.Skill Ripjaws V 16GB.jpeg",
        stock: 15,
        description: "Capacidad: 16GB (2x8GB), Frecuencia: 3600 MHz, Tipo: DDR4"
    },
    {
        id: 139,
        name: "Kingston FURY Beast 32GB",
        category: "memoriaRAM",
        price: 120,
        img: "/assets/img/Kingston FURY Beast 32GB.jpeg",
        stock: 32,
        description: "Capacidad: 32GB (2x16GB), Frecuencia: 3200 MHz, Tipo: DDR4"
    },
    {
        id: 140,
        name: "Corsair Dominator Platinum RGB 32GB",
        category: "memoriaRAM",
        price: 150,
        img: "/assets/img/Corsair Dominator Platinum RGB 32GB.jpeg",
        stock: 23,
        description: "Capacidad: 32GB (2x16GB), Frecuencia: 3600 MHz, Tipo: DDR4"
    },
    {
        id: 141,
        name: "G.Skill Trident Z RGB 32GB",
        category: "memoriaRAM",
        price: 180,
        img: "/assets/img/G.Skill Trident Z RGB 32GB.jpg",
        stock: 18,
        description: "Capacidad: 32GB (2x16GB), Frecuencia: 4000 MHz, Tipo: DDR4"
    },
    {
        id: 142,
        name: "Kingston FURY Beast 64GB",
        category: "memoriaRAM",
        price: 250,
        img: "/assets/img/Kingston FURY Beast 64GB.jpg",
        stock: 28,
        description: "Capacidad: 64GB (2x32GB), Frecuencia: 3200 MHz, Tipo: DDR4"
    },
    {
        id: 143,
        name: "Corsair Vengeance DDR5 32GB",
        category: "memoriaRAM",
        price: 220,
        img: "/assets/img/Corsair Vengeance DDR5 32GB.jpeg",
        stock: 14,
        description: "Capacidad: 32GB (2x16GB), Frecuencia: 5200 MHz, Tipo: DDR5"
    },
    {
        id: 144,
        name: "G.Skill Ripjaws S5 32GB",
        category: "memoriaRAM",
        price: 250,
        img: "/assets/img/G.Skill Ripjaws S5 32GB.jpeg",
        stock: 37,
        description: "Capacidad: 32GB (2x16GB), Frecuencia: 6000 MHz, Tipo: DDR5"
    },
    {
        id: 145,
        name: "Crucial Ballistix 16GB",
        category: "memoriaRAM",
        price: 65,
        img: "/assets/img/Crucial Ballistix 16GB.jpeg",
        stock: 22,
        description: "Capacidad: 16GB (2x8GB), Frecuencia: 3200 MHz, Tipo: DDR4"
    },
    {
        id: 146,
        name: "TeamGroup T-Force Delta RGB 32GB",
        category: "memoriaRAM",
        price: 140,
        img: "/assets/img/TeamGroup T-Force Delta RGB 32GB.jpg",
        stock: 33,
        description: "Capacidad: 32GB (2x16GB), Frecuencia: 3600 MHz, Tipo: DDR4"
    },
    {
        id: 147,
        name: "Corsair Dominator Platinum RGB 64GB",
        category: "memoriaRAM",
        price: 450,
        img: "/assets/img/Corsair Dominator Platinum RGB 64GB.jpeg",
        stock: 11,
        description: "Capacidad: 64GB (2x32GB), Frecuencia: 5200 MHz, Tipo: DDR5"
    },
    {
        id: 148,
        name: "G.Skill Trident Z5 RGB 32GB",
        category: "memoriaRAM",
        price: 280,
        img: "/assets/img/G.Skill Trident Z5 RGB 32GB.jpeg",
        stock: 20,
        description: "Capacidad: 32GB (2x16GB), Frecuencia: 6000 MHz, Tipo: DDR5"
    },
    {
        id: 149,
        name: "TeamGroup Elite Plus 16GB",
        category: "memoriaRAM",
        price: 60,
        img: "/assets/img/TeamGroup Elite Plus 16GB.jpeg",
        stock: 25,
        description: "Capacidad: 16GB (2x8GB), Frecuencia: 3200 MHz, Tipo: DDR4"
    },
    {
        id: 150,
        name: "Crucial Ballistix Max 32GB",
        category: "memoriaRAM",
        price: 200,
        img: "/assets/img/Crucial Ballistix Max 32GB.jpeg",
        stock: 16,
        description: "Capacidad: 32GB (2x16GB), Frecuencia: 4000 MHz, Tipo: DDR4"
    },
    {
        id: 151,
        name: "Kingston FURY Renegade 32GB",
        category: "memoriaRAM",
        price: 240,
        img: "/assets/img/Kingston FURY Renegade 32GB.jpg",
        stock: 30,
        description: "Capacidad: 32GB (2x16GB), Frecuencia: 6000 MHz, Tipo: DDR5"
    },
    {
        id: 152,
        name: "Patriot Viper Steel 16GB",
        category: "memoriaRAM",
        price: 75,
        img: "/assets/img/Patriot Viper Steel 16GB.jpeg",
        stock: 34,
        description: "Capacidad: 16GB (2x8GB), Frecuencia: 3733 MHz, Tipo: DDR4"
    },
    {
        id: 153,
        name: "Samsung 970 EVO Plus",
        category: "almacenamiento",
        price: 130,
        img: "/assets/img/Samsung 970 EVO Plus.jpeg",
        stock: 28,
        description: "Capacidad: 1TB, Tipo: M.2 NVMe, Lectura Secuencial: 3500 MB/s, Escritura Secuencial: 3300 MB/s"
    },
    {
        id: 154,
        name: "WD Black SN850",
        category: "almacenamiento",
        price: 150,
        img: "/assets/img/WD Black SN850.jpg",
        stock: 35,
        description: "Capacidad: 1TB, Tipo: M.2 NVMe, Lectura Secuencial: 7000 MB/s, Escritura Secuencial: 5300 MB/s"
    },
    {
        id: 155,
        name: "Crucial MX500",
        category: "almacenamiento",
        price: 85,
        img: "/assets/img/Crucial MX500.jpeg",
        stock: 22,
        description: "Capacidad: 1TB, Tipo: SATA, Lectura Secuencial: 560 MB/s, Escritura Secuencial: 510 MB/s"
    },
    {
        id: 156,
        name: "Samsung 980 Pro",
        category: "almacenamiento",
        price: 220,
        img: "/assets/img/Samsung 980 Pro.jpg",
        stock: 18,
        description: "Capacidad: 2TB, Tipo: M.2 NVMe, Lectura Secuencial: 7000 MB/s, Escritura Secuencial: 5000 MB/s"
    },
    {
        id: 157,
        name: "Kingston KC2500",
        category: "almacenamiento",
        price: 140,
        img: "/assets/img/Kingston KC2500.jpg",
        stock: 33,
        description: "Capacidad: 1TB, Tipo: M.2 NVMe, Lectura Secuencial: 3500 MB/s, Escritura Secuencial: 2900 MB/s"
    },
    {
        id: 158,
        name: "Sabrent Rocket 4 Plus",
        category: "almacenamiento",
        price: 250,
        img: "/assets/img/Sabrent Rocket 4 Plus.jpeg",
        stock: 19,
        description: "Capacidad: 2TB, Tipo: M.2 NVMe, Lectura Secuencial: 7100 MB/s, Escritura Secuencial: 6600 MB/s"
    },
    {
        id: 159,
        name: "WD Blue SN550",
        category: "almacenamiento",
        price: 60,
        img: "/assets/img/WD Blue SN550.jpeg",
        stock: 30,
        description: "Capacidad: 500GB, Tipo: M.2 NVMe, Lectura Secuencial: 2400 MB/s, Escritura Secuencial: 1950 MB/s"
    },
    {
        id: 160,
        name: "Crucial P5 Plus",
        category: "almacenamiento",
        price: 150,
        img: "/assets/img/Crucial P5 Plus.jpg",
        stock: 25,
        description: "Capacidad: 1TB, Tipo: M.2 NVMe, Lectura Secuencial: 6600 MB/s, Escritura Secuencial: 5000 MB/s"
    },
    {
        id: 161,
        name: "ADATA XPG SX8200 Pro",
        category: "almacenamiento",
        price: 120,
        img: "/assets/img/ADATA XPG SX8200 Pro.jpeg",
        stock: 23,
        description: "Capacidad: 1TB, Tipo: M.2 NVMe, Lectura Secuencial: 3500 MB/s, Escritura Secuencial: 3000 MB/s"
    },
    {
        id: 162,
        name: "Seagate FireCuda 520",
        category: "almacenamiento",
        price: 210,
        img: "/assets/img/Seagate FireCuda 520.jpeg",
        stock: 27,
        description: "Capacidad: 2TB, Tipo: M.2 NVMe, Lectura Secuencial: 5000 MB/s, Escritura Secuencial: 4850 MB/s"
    },
    {
        id: 163,
        name: "Samsung 870 EVO",
        category: "almacenamiento",
        price: 220,
        img: "/assets/img/Samsung 870 EVO.jpg",
        stock: 18,
        description: "Capacidad: 2TB, Tipo: SATA, Lectura Secuencial: 560 MB/s, Escritura Secuencial: 530 MB/s"
    },
    {
        id: 164,
        name: "WD Black SN770",
        category: "almacenamiento",
        price: 130,
        img: "/assets/img/WD Black SN770.jpeg",
        stock: 28,
        description: "Capacidad: 1TB, Tipo: M.2 NVMe, Lectura Secuencial: 5150 MB/s, Escritura Secuencial: 4900 MB/s"
    },
    {
        id: 165,
        name: "Kingston A2000",
        category: "almacenamiento",
        price: 70,
        img: "/assets/img/Kingston A2000.jpeg",
        stock: 31,
        description: "Capacidad: 500GB, Tipo: M.2 NVMe, Lectura Secuencial: 2200 MB/s, Escritura Secuencial: 2000 MB/s"
    },
    {
        id: 166,
        name: "Sabrent Rocket Q",
        category: "almacenamiento",
        price: 110,
        img: "/assets/img/Sabrent Rocket Q.jpeg",
        stock: 24,
        description: "Capacidad: 1TB, Tipo: M.2 NVMe, Lectura Secuencial: 3200 MB/s, Escritura Secuencial: 2900 MB/s"
    },
    {
        id: 167,
        name: "Corsair MP600 PRO",
        category: "almacenamiento",
        price: 240,
        img: "/assets/img/Corsair MP600 PRO.jpeg",
        stock: 26,
        description: "Capacidad: 2TB, Tipo: M.2 NVMe, Lectura Secuencial: 7000 MB/s, Escritura Secuencial: 6800 MB/s"
    },
    {
        id: 168,
        name: "Samsung 860 EVO",
        category: "almacenamiento",
        price: 100,
        img: "/assets/img/Samsung 860 EVO.jpeg",
        stock: 32,
        description: "Capacidad: 1TB, Tipo: SATA, Lectura Secuencial: 550 MB/s, Escritura Secuencial: 520 MB/s"
    },
    {
        id: 169,
        name: "TeamGroup T-Force Cardea Zero Z440",
        category: "almacenamiento",
        price: 140,
        img: "/assets/img/TeamGroup T-Force Cardea Zero Z440.jpeg",
        stock: 21,
        description: "Capacidad: 1TB, Tipo: M.2 NVMe, Lectura Secuencial: 5000 MB/s, Escritura Secuencial: 4400 MB/s"
    },
    {
        id: 170,
        name: "Patriot Viper VP4300",
        category: "almacenamiento",
        price: 270,
        img: "/assets/img/Patriot Viper VP4300.jpeg",
        stock: 16,
        description: "Capacidad: 2TB, Tipo: M.2 NVMe, Lectura Secuencial: 7400 MB/s, Escritura Secuencial: 6800 MB/s"
    },
    {
        id: 171,
        name: "WD Blue",
        category: "almacenamiento",
        price: 50,
        img: "/assets/img/WD Blue.jpg",
        stock: 30,
        description: "Capacidad: 1TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 172,
        name: "Seagate BarraCuda",
        category: "almacenamiento",
        price: 70,
        img: "/assets/img/Seagate BarraCuda.jpeg",
        stock: 25,
        description: "Capacidad: 2TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 173,
        name: "Toshiba P300",
        category: "almacenamiento",
        price: 65,
        img: "/assets/img/Toshiba P300.jpeg",
        stock: 18,
        description: "Capacidad: 2TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 174,
        name: "WD Black",
        category: "almacenamiento",
        price: 130,
        img: "/assets/img/WD Black.jpeg",
        stock: 12,
        description: "Capacidad: 4TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 175,
        name: "Seagate IronWolf",
        category: "almacenamiento",
        price: 115,
        img: "/assets/img/Seagate IronWolf.jpg",
        stock: 15,
        description: "Capacidad: 4TB, Tipo: SATA, RPM: 5900"
    },
    {
        id: 176,
        name: "Toshiba X300",
        category: "almacenamiento",
        price: 110,
        img: "/assets/img/Toshiba X300.jpg",
        stock: 20,
        description: "Capacidad: 4TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 177,
        name: "Seagate Exos X16",
        category: "almacenamiento",
        price: 320,
        img: "/assets/img/Seagate Exos X16.jpeg",
        stock: 8,
        description: "Capacidad: 10TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 178,
        name: "WD Red Plus",
        category: "almacenamiento",
        price: 240,
        img: "/assets/img/WD Red Plus.jpeg",
        stock: 10,
        description: "Capacidad: 8TB, Tipo: SATA, RPM: 5400"
    },
    {
        id: 179,
        name: "Toshiba N300",
        category: "almacenamiento",
        price: 230,
        img: "/assets/img/Toshiba N300.jpeg",
        stock: 18,
        description: "Capacidad: 8TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 180,
        name: "Seagate BarraCuda Pro",
        category: "almacenamiento",
        price: 180,
        img: "/assets/img/Seagate BarraCuda Pro.jpeg",
        stock: 22,
        description: "Capacidad: 6TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 181,
        name: "WD Purple",
        category: "almacenamiento",
        price: 160,
        img: "/assets/img/WD Purple.jpg",
        stock: 17,
        description: "Capacidad: 6TB, Tipo: SATA, RPM: 5400"
    },
    {
        id: 182,
        name: "Seagate SkyHawk",
        category: "almacenamiento",
        price: 250,
        img: "/assets/img/Seagate SkyHawk.jpg",
        stock: 14,
        description: "Capacidad: 8TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 183,
        name: "Toshiba L200",
        category: "almacenamiento",
        price: 45,
        img: "/assets/img/Toshiba L200.jpeg",
        stock: 30,
        description: "Capacidad: 1TB, Tipo: SATA, RPM: 5400"
    },
    {
        id: 184,
        name: "HGST Ultrastar",
        category: "almacenamiento",
        price: 400,
        img: "/assets/img/HGST Ultrastar.jpg",
        stock: 7,
        description: "Capacidad: 12TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 185,
        name: "Seagate IronWolf Pro",
        category: "almacenamiento",
        price: 370,
        img: "/assets/img/Seagate IronWolf Pro.jpeg",
        stock: 9,
        description: "Capacidad: 12TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 186,
        name: "WD Gold",
        category: "almacenamiento",
        price: 500,
        img: "/assets/img/WD Gold.jpeg",
        stock: 6,
        description: "Capacidad: 14TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 187,
        name: "Seagate BarraCuda",
        category: "almacenamiento",
        price: 45,
        img: "/assets/img/Seagate BarraCuda.jpeg",
        stock: 50,
        description: "Capacidad: 1TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 188,
        name: "WD Red",
        category: "almacenamiento",
        price: 110,
        img: "/assets/img/WD Red.jpeg",
        stock: 26,
        description: "Capacidad: 4TB, Tipo: SATA, RPM: 5400"
    },
    {
        id: 189,
        name: "Toshiba MG Series",
        category: "almacenamiento",
        price: 600,
        img: "/assets/img/Toshiba MG Series.jpg",
        stock: 5,
        description: "Capacidad: 16TB, Tipo: SATA, RPM: 7200"
    },
    {
        id: 190,
        name: "NZXT H510",
        category: "gabinetes",
        price: 100,
        img: "/assets/img/NZXT H510.jpg",
        stock: 20,
        description: "Factor de forma: ATX, Compatibilidad: ATX, Micro-ATX, Mini-ITX"
    },
    {
        id: 191,
        name: "Corsair 4000D",
        category: "gabinetes",
        price: 95,
        img: "/assets/img/Corsair 4000D.jpg",
        stock: 22,
        description: "Factor de forma: ATX, Compatibilidad: ATX, Micro-ATX, Mini-ITX"
    },
    {
        id: 192,
        name: "Cooler Master MasterBox Q300L",
        category: "gabinetes",
        price: 60,
        img: "/assets/img/Cooler Master MasterBox Q300L.jpg",
        stock: 18,
        description: "Factor de forma: Micro-ATX, Compatibilidad: Micro-ATX, Mini-ITX"
    },
    {
        id: 193,
        name: "Fractal Design Meshify C",
        category: "gabinetes",
        price: 110,
        img: "/assets/img/Fractal Design Meshify C.jpeg",
        stock: 15,
        description: "Factor de forma: ATX, Compatibilidad: ATX, Micro-ATX, Mini-ITX"
    },
    {
        id: 194,
        name: "Thermaltake Core P3",
        category: "gabinetes",
        price: 150,
        img: "/assets/img/Thermaltake Core P3.jpg",
        stock: 10,
        description: "Factor de forma: ATX, Compatibilidad: ATX, Micro-ATX, Mini-ITX"
    },
    {
        id: 195,
        name: "Lian Li PC-O11 Dynamic",
        category: "gabinetes",
        price: 140,
        img: "/assets/img/Lian Li PC-O11 Dynamic.jpeg",
        stock: 12,
        description: "Factor de forma: ATX, Compatibilidad: ATX, Micro-ATX, Mini-ITX"
    },
    {
        id: 196,
        name: "Phanteks Eclipse P300A",
        category: "gabinetes",
        price: 75,
        img: "/assets/img/Phanteks Eclipse P300A.jpeg",
        stock: 25,
        description: "Factor de forma: ATX, Compatibilidad: ATX, Micro-ATX, Mini-ITX"
    },
    {
        id: 197,
        name: "be quiet! Pure Base 500",
        category: "gabinetes",
        price: 90,
        img: "/assets/img/be quiet! Pure Base 500.jpeg",
        stock: 20,
        description: "Factor de forma: ATX, Compatibilidad: ATX, Micro-ATX, Mini-ITX"
    },
    {
        id: 198,
        name: "Thermaltake V200",
        category: "gabinetes",
        price: 70,
        img: "/assets/img/Thermaltake V200.jpg",
        stock: 30,
        description: "Factor de forma: ATX, Compatibilidad: ATX, Micro-ATX, Mini-ITX"
    },
    {
        id: 199,
        name: "SilverStone SG13",
        category: "gabinetes",
        price: 55,
        img: "/assets/img/SilverStone SG13.jpg",
        stock: 15,
        description: "Factor de forma: Mini-ITX, Compatibilidad: Mini-ITX"
    }
];

// obtener todos los productos
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 10);
    });
};

// obtener los productos por categoria
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 10);
    });
};

// obtener un solo producto por id
export const getProductByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 10);
    });
};
