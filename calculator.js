// calculator.js - Vollständige funktionierende Version

// ERSETZE die KOMPLETTE mockPropertyDatabase in calculator.js mit dieser Version:
// (Zeile 1 bis ca. Zeile 300)

let mockPropertyDatabase = [
    {
        id: 1,
        titel: "Premium Neubau-Apartment",
        adresse: "Unter den Linden 45",
        stadt: "Berlin",
        plz: "10117",
        stadtteil: "Mitte",
        lage: "A",
        baujahr: 2022,
        kaufpreis: 685000,
        wohnflaeche: 95,
        zimmer: 3,
        kaltmiete: 2850,
        nebenkosten: 280,
        hausgeld: 450,
        grundsteuer: 65,
        maklerProvision: 0.0357,
        stellplaetze: 1,
        stellplatzMiete: 120,
        energieeffizienzklasse: "A",
        heizungsart: "Fernwärme",
        features: ["Concierge", "Gym", "Dachterrasse", "Smart Home"],
        bilder: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 2,
        titel: "Altbau mit Stuck",
        adresse: "Kollwitzstraße 78",
        stadt: "Berlin",
        plz: "10435",
        stadtteil: "Prenzlauer Berg",
        lage: "A",
        baujahr: 1905,
        kaufpreis: 520000,
        wohnflaeche: 105,
        zimmer: 4,
        kaltmiete: 2100,
        nebenkosten: 250,
        hausgeld: 380,
        grundsteuer: 52,
        maklerProvision: 0.0357,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "D",
        heizungsart: "Gaszentralheizung",
        features: ["Stuck", "Holzdielen", "Balkon", "Keller"],
        bilder: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 3,
        titel: "Moderne 2-Zimmer Wohnung",
        adresse: "Karl-Marx-Allee 234",
        stadt: "Berlin",
        plz: "10243",
        stadtteil: "Friedrichshain",
        lage: "B",
        baujahr: 2018,
        kaufpreis: 385000,
        wohnflaeche: 68,
        zimmer: 2,
        kaltmiete: 1450,
        nebenkosten: 180,
        hausgeld: 320,
        grundsteuer: 38,
        maklerProvision: 0.0357,
        stellplaetze: 1,
        stellplatzMiete: 85,
        energieeffizienzklasse: "B",
        heizungsart: "Fußbodenheizung",
        features: ["Balkon", "Fußbodenheizung", "Einbauküche"],
        bilder: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 4,
        titel: "Familienwohnung mit Garten",
        adresse: "Clayallee 123",
        stadt: "Berlin",
        plz: "14195",
        stadtteil: "Zehlendorf",
        lage: "B",
        baujahr: 2010,
        kaufpreis: 620000,
        wohnflaeche: 125,
        zimmer: 5,
        kaltmiete: 2200,
        nebenkosten: 320,
        hausgeld: 480,
        grundsteuer: 72,
        maklerProvision: 0.0357,
        stellplaetze: 2,
        stellplatzMiete: 180,
        energieeffizienzklasse: "B",
        heizungsart: "Wärmepumpe",
        features: ["Garten", "2 Bäder", "Garage", "Kamin"],
        bilder: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 5,
        titel: "Investment-Studio",
        adresse: "Sonnenallee 89",
        stadt: "Berlin",
        plz: "12045",
        stadtteil: "Neukölln",
        lage: "C",
        baujahr: 2019,
        kaufpreis: 225000,
        wohnflaeche: 35,
        zimmer: 1,
        kaltmiete: 950,
        nebenkosten: 120,
        hausgeld: 180,
        grundsteuer: 22,
        maklerProvision: 0,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "A",
        heizungsart: "Fernwärme",
        features: ["Möbliert", "Balkon"],
        bilder: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 6,
        titel: "Sanierte Altbauwohnung",
        adresse: "Schönhauser Allee 156",
        stadt: "Berlin",
        plz: "10119",
        stadtteil: "Prenzlauer Berg",
        lage: "B",
        baujahr: 1910,
        kaufpreis: 480000,
        wohnflaeche: 88,
        zimmer: 3,
        kaltmiete: 1750,
        nebenkosten: 220,
        hausgeld: 350,
        grundsteuer: 48,
        maklerProvision: 0.0357,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "C",
        heizungsart: "Gasetagenheizung",
        features: ["Stuck", "Balkon", "Keller", "Hofgarten"],
        bilder: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 7,
        titel: "Günstige Wohnung in Marzahn",
        adresse: "Allee der Kosmonauten 100",
        stadt: "Berlin",
        plz: "12681",
        stadtteil: "Marzahn",
        lage: "E",
        baujahr: 1985,
        kaufpreis: 165000,
        wohnflaeche: 62,
        zimmer: 3,
        kaltmiete: 720,
        nebenkosten: 150,
        hausgeld: 220,
        grundsteuer: 18,
        maklerProvision: 0,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "E",
        heizungsart: "Fernwärme",
        features: ["Balkon", "Keller", "Grünanlage"],
        bilder: [
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 8,
        titel: "Penthouse mit Skyline-Blick",
        adresse: "Potsdamer Platz 8",
        stadt: "Berlin",
        plz: "10785",
        stadtteil: "Tiergarten",
        lage: "A",
        baujahr: 2021,
        kaufpreis: 1250000,
        wohnflaeche: 180,
        zimmer: 4,
        kaltmiete: 4500,
        nebenkosten: 450,
        hausgeld: 850,
        grundsteuer: 125,
        maklerProvision: 0.0357,
        stellplaetze: 2,
        stellplatzMiete: 300,
        energieeffizienzklasse: "A+",
        heizungsart: "Fußbodenheizung",
        features: ["Dachterrasse", "Luxusausstattung", "Concierge", "2 Stellplätze"],
        bilder: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00878c1ed0cf?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 9,
        titel: "Wohnung in München",
        adresse: "Leopoldstraße 234",
        stadt: "München",
        plz: "80802",
        stadtteil: "Schwabing",
        lage: "A",
        baujahr: 2020,
        kaufpreis: 980000,
        wohnflaeche: 105,
        zimmer: 3,
        kaltmiete: 3200,
        nebenkosten: 350,
        hausgeld: 580,
        grundsteuer: 95,
        maklerProvision: 0.0357,
        stellplaetze: 1,
        stellplatzMiete: 150,
        energieeffizienzklasse: "A",
        heizungsart: "Geothermie",
        features: ["Dachterrasse", "Luxus", "Garage"],
        bilder: [
            "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 10,
        titel: "Apartment in Hamburg",
        adresse: "Reeperbahn 66",
        stadt: "Hamburg",
        plz: "20359",
        stadtteil: "St. Pauli",
        lage: "B",
        baujahr: 2017,
        kaufpreis: 425000,
        wohnflaeche: 70,
        zimmer: 2,
        kaltmiete: 1580,
        nebenkosten: 200,
        hausgeld: 360,
        grundsteuer: 42,
        maklerProvision: 0.0357,
        stellplaetze: 1,
        stellplatzMiete: 100,
        energieeffizienzklasse: "B",
        heizungsart: "Fernwärme",
        features: ["Balkon", "Hafenblick"],
        bilder: [
            "https://images.unsplash.com/photo-1565623006066-82f23c79210b?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 20,
        titel: "Luxus-Penthouse am Englischen Garten",
        adresse: "Prinzregentenstraße 45",
        stadt: "München",
        plz: "80538",
        stadtteil: "Lehel",
        lage: "A",
        baujahr: 2021,
        kaufpreis: 320000,
        wohnflaeche: 65,
        zimmer: 2,
        kaltmiete: 1850,
        nebenkosten: 200,
        hausgeld: 350,
        grundsteuer: 45,
        maklerProvision: 0,
        stellplaetze: 1,
        stellplatzMiete: 120,
        energieeffizienzklasse: "A",
        heizungsart: "Fußbodenheizung",
        features: ["Dachterrasse", "Luxus", "Concierge"],
        bilder: [
            "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 21,
        titel: "Altbau-Juwel in der Maxvorstadt",
        adresse: "Türkenstraße 89",
        stadt: "München",
        plz: "80799",
        stadtteil: "Maxvorstadt",
        lage: "A",
        baujahr: 1905,
        kaufpreis: 285000,
        wohnflaeche: 52,
        zimmer: 2,
        kaltmiete: 1480,
        nebenkosten: 180,
        hausgeld: 280,
        grundsteuer: 38,
        maklerProvision: 0,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "D",
        heizungsart: "Gasetagenheizung",
        features: ["Stuck", "Balkon", "Uni-Nähe"],
        bilder: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 22,
        titel: "Moderne Wohnung am Hafen",
        adresse: "Am Sandtorkai 50",
        stadt: "Hamburg",
        plz: "20457",
        stadtteil: "HafenCity",
        lage: "A",
        baujahr: 2019,
        kaufpreis: 380000,
        wohnflaeche: 72,
        zimmer: 2,
        kaltmiete: 2100,
        nebenkosten: 250,
        hausgeld: 420,
        grundsteuer: 55,
        maklerProvision: 0,
        stellplaetze: 1,
        stellplatzMiete: 110,
        energieeffizienzklasse: "A",
        heizungsart: "Fernwärme",
        features: ["Wasserblick", "Balkon", "Neubau"],
        bilder: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 23,
        titel: "Investment am Jungfernstieg",
        adresse: "Neuer Wall 80",
        stadt: "Hamburg",
        plz: "20354",
        stadtteil: "Neustadt",
        lage: "A",
        baujahr: 2015,
        kaufpreis: 295000,
        wohnflaeche: 48,
        zimmer: 1,
        kaltmiete: 1520,
        nebenkosten: 150,
        hausgeld: 320,
        grundsteuer: 42,
        maklerProvision: 0,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "B",
        heizungsart: "Fernwärme",
        features: ["City-Lage", "Concierge"],
        bilder: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 24,
        titel: "Banker-Wohnung im Westend",
        adresse: "Bockenheimer Landstraße 100",
        stadt: "Frankfurt",
        plz: "60323",
        stadtteil: "Westend",
        lage: "A",
        baujahr: 2018,
        kaufpreis: 410000,
        wohnflaeche: 78,
        zimmer: 2,
        kaltmiete: 2280,
        nebenkosten: 280,
        hausgeld: 450,
        grundsteuer: 65,
        maklerProvision: 0,
        stellplaetze: 1,
        stellplatzMiete: 130,
        energieeffizienzklasse: "A",
        heizungsart: "Fußbodenheizung",
        features: ["Skyline-Blick", "Luxus", "Garage"],
        bilder: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 25,
        titel: "Rheinblick-Apartment",
        adresse: "Rheinuferstraße 20",
        stadt: "Köln",
        plz: "50996",
        stadtteil: "Rodenkirchen",
        lage: "B",
        baujahr: 2020,
        kaufpreis: 340000,
        wohnflaeche: 68,
        zimmer: 2,
        kaltmiete: 1780,
        nebenkosten: 220,
        hausgeld: 380,
        grundsteuer: 48,
        maklerProvision: 0,
        stellplaetze: 1,
        stellplatzMiete: 95,
        energieeffizienzklasse: "B",
        heizungsart: "Wärmepumpe",
        features: ["Rheinblick", "Terrasse", "Neubau"],
        bilder: [
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 26,
        titel: "Altstadt-Perle",
        adresse: "Breite Straße 40",
        stadt: "Köln",
        plz: "50667",
        stadtteil: "Altstadt",
        lage: "A",
        baujahr: 2012,
        kaufpreis: 275000,
        wohnflaeche: 55,
        zimmer: 2,
        kaltmiete: 1420,
        nebenkosten: 180,
        hausgeld: 310,
        grundsteuer: 40,
        maklerProvision: 0,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "C",
        heizungsart: "Gaszentralheizung",
        features: ["Dom-Blick", "Aufzug"],
        bilder: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 27,
        titel: "Gründerzeit in Pempelfort",
        adresse: "Kaiserswerther Straße 150",
        stadt: "Düsseldorf",
        plz: "40479",
        stadtteil: "Pempelfort",
        lage: "B",
        baujahr: 1908,
        kaufpreis: 365000,
        wohnflaeche: 85,
        zimmer: 3,
        kaltmiete: 1950,
        nebenkosten: 260,
        hausgeld: 420,
        grundsteuer: 52,
        maklerProvision: 0,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "D",
        heizungsart: "Gasetagenheizung",
        features: ["Stuck", "Balkon", "Hofgarten-Nähe"],
        bilder: [
            "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 28,
        titel: "Medienhafen-Loft",
        adresse: "Speditionstraße 15",
        stadt: "Düsseldorf",
        plz: "40221",
        stadtteil: "Medienhafen",
        lage: "A",
        baujahr: 2017,
        kaufpreis: 425000,
        wohnflaeche: 88,
        zimmer: 2,
        kaltmiete: 2420,
        nebenkosten: 300,
        hausgeld: 480,
        grundsteuer: 62,
        maklerProvision: 0,
        stellplaetze: 1,
        stellplatzMiete: 140,
        energieeffizienzklasse: "B",
        heizungsart: "Fernwärme",
        features: ["Loft", "Industriecharme", "Rheinblick"],
        bilder: [
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 29,
        titel: "Szene-Wohnung im Glockenbachviertel",
        adresse: "Müllerstraße 45",
        stadt: "München",
        plz: "80469",
        stadtteil: "Glockenbachviertel",
        lage: "A",
        baujahr: 2016,
        kaufpreis: 395000,
        wohnflaeche: 62,
        zimmer: 2,
        kaltmiete: 2050,
        nebenkosten: 200,
        hausgeld: 380,
        grundsteuer: 55,
        maklerProvision: 0,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "B",
        heizungsart: "Fußbodenheizung",
        features: ["Balkon", "Szene-Viertel", "Isar-Nähe"],
        bilder: [
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 30,
        titel: "Musikerviertel-Apartment",
        adresse: "Brahmsallee 25",
        stadt: "Hamburg",
        plz: "20144",
        stadtteil: "Eimsbüttel",
        lage: "B",
        baujahr: 2014,
        kaufpreis: 310000,
        wohnflaeche: 64,
        zimmer: 2,
        kaltmiete: 1620,
        nebenkosten: 200,
        hausgeld: 350,
        grundsteuer: 44,
        maklerProvision: 0,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "C",
        heizungsart: "Gaszentralheizung",
        features: ["Ruhige Lage", "Balkon", "Parknähe"],
        bilder: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 31,
        titel: "Startup-Studio in Mitte",
        adresse: "Torstraße 120",
        stadt: "Berlin",
        plz: "10119",
        stadtteil: "Mitte",
        lage: "A",
        baujahr: 2019,
        kaufpreis: 265000,
        wohnflaeche: 42,
        zimmer: 1,
        kaltmiete: 1380,
        nebenkosten: 140,
        hausgeld: 250,
        grundsteuer: 35,
        maklerProvision: 0,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "A",
        heizungsart: "Fernwärme",
        features: ["Neubau", "Balkon", "Rooftop"],
        bilder: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 32,
        titel: "Studentenwohnung nahe TU",
        adresse: "Hardenbergstraße 45",
        stadt: "Berlin",
        plz: "10623",
        stadtteil: "Charlottenburg",
        lage: "C",
        baujahr: 1972,
        kaufpreis: 195000,
        wohnflaeche: 38,
        zimmer: 1,
        kaltmiete: 780,
        nebenkosten: 130,
        hausgeld: 210,
        grundsteuer: 25,
        maklerProvision: 0.0357,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "D",
        heizungsart: "Nachtspeicher",
        features: ["Uni-Nähe", "Balkon"],
        bilder: [
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 33,
        titel: "Senioren-Apartment mit Service",
        adresse: "Bundesallee 200",
        stadt: "Berlin",
        plz: "10719",
        stadtteil: "Wilmersdorf",
        lage: "B",
        baujahr: 2020,
        kaufpreis: 420000,
        wohnflaeche: 75,
        zimmer: 2,
        kaltmiete: 1950,
        nebenkosten: 380,
        hausgeld: 550,
        grundsteuer: 58,
        maklerProvision: 0,
        stellplaetze: 1,
        stellplatzMiete: 90,
        energieeffizienzklasse: "A",
        heizungsart: "Fußbodenheizung",
        features: ["Barrierefrei", "Concierge", "Notrufsystem"],
        bilder: [
            "https://images.unsplash.com/photo-1600566753086-00878c1ed0cf?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 34,
        titel: "Dachgeschoss mit Terrasse",
        adresse: "Akazienstraße 18",
        stadt: "Berlin",
        plz: "10823",
        stadtteil: "Schöneberg",
        lage: "B",
        baujahr: 1995,
        kaufpreis: 485000,
        wohnflaeche: 92,
        zimmer: 3,
        kaltmiete: 1850,
        nebenkosten: 240,
        hausgeld: 390,
        grundsteuer: 50,
        maklerProvision: 0.0357,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "C",
        heizungsart: "Gasetagenheizung",
        features: ["Dachterrasse", "Kamin", "Sauna"],
        bilder: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 35,
        titel: "Gewerbeeinheit als Kapitalanlage",
        adresse: "Kantstraße 95",
        stadt: "Berlin",
        plz: "10627",
        stadtteil: "Charlottenburg",
        lage: "B",
        baujahr: 1965,
        kaufpreis: 380000,
        wohnflaeche: 120,
        zimmer: 0,
        kaltmiete: 2400,
        nebenkosten: 360,
        hausgeld: 480,
        grundsteuer: 95,
        maklerProvision: 0.0357,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "E",
        heizungsart: "Gaszentralheizung",
        features: ["Gewerbefläche", "Schaufenster", "Lager"],
        bilder: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 36,
        titel: "Maisonette in Kreuzberg",
        adresse: "Bergmannstraße 88",
        stadt: "Berlin",
        plz: "10961",
        stadtteil: "Kreuzberg",
        lage: "B",
        baujahr: 2008,
        kaufpreis: 595000,
        wohnflaeche: 110,
        zimmer: 4,
        kaltmiete: 2350,
        nebenkosten: 290,
        hausgeld: 440,
        grundsteuer: 68,
        maklerProvision: 0,
        stellplaetze: 1,
        stellplatzMiete: 105,
        energieeffizienzklasse: "B",
        heizungsart: "Fußbodenheizung",
        features: ["Maisonette", "2 Bäder", "Galerie"],
        bilder: [
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 37,
        titel: "Ruhige Wohnung in Lichterfelde",
        adresse: "Drakestraße 50",
        stadt: "Berlin",
        plz: "12205",
        stadtteil: "Lichterfelde",
        lage: "C",
        baujahr: 1958,
        kaufpreis: 285000,
        wohnflaeche: 78,
        zimmer: 3,
        kaltmiete: 1100,
        nebenkosten: 190,
        hausgeld: 310,
        grundsteuer: 38,
        maklerProvision: 0.0357,
        stellplaetze: 1,
        stellplatzMiete: 60,
        energieeffizienzklasse: "E",
        heizungsart: "Ölheizung",
        features: ["Garten", "Keller", "Ruhige Lage"],
        bilder: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 38,
        titel: "Loft in der Kulturbrauerei",
        adresse: "Schönhauser Allee 36",
        stadt: "Berlin",
        plz: "10435",
        stadtteil: "Prenzlauer Berg",
        lage: "A",
        baujahr: 2000,
        kaufpreis: 720000,
        wohnflaeche: 130,
        zimmer: 3,
        kaltmiete: 2900,
        nebenkosten: 340,
        hausgeld: 520,
        grundsteuer: 85,
        maklerProvision: 0,
        stellplaetze: 1,
        stellplatzMiete: 125,
        energieeffizienzklasse: "C",
        heizungsart: "Fernwärme",
        features: ["Loft", "Hohe Decken", "Industriecharme"],
        bilder: [
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 39,
        titel: "Kompakte Wohnung in Wedding",
        adresse: "Müllerstraße 156",
        stadt: "Berlin",
        plz: "13353",
        stadtteil: "Wedding",
        lage: "D",
        baujahr: 1962,
        kaufpreis: 145000,
        wohnflaeche: 45,
        zimmer: 2,
        kaltmiete: 650,
        nebenkosten: 140,
        hausgeld: 195,
        grundsteuer: 20,
        maklerProvision: 0,
        stellplaetze: 0,
        stellplatzMiete: 0,
        energieeffizienzklasse: "F",
        heizungsart: "Gasetagenheizung",
        features: ["Balkon", "Keller"],
        bilder: [
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=800&h=600&fit=crop"
        ]
    },
    {
        id: 40,
        titel: "Townhouse in Dahlem",
        adresse: "Im Dol 28",
        stadt: "Berlin",
        plz: "14195",
        stadtteil: "Dahlem",
        lage: "A",
        baujahr: 2015,
        kaufpreis: 890000,
        wohnflaeche: 155,
        zimmer: 5,
        kaltmiete: 3200,
        nebenkosten: 380,
        hausgeld: 580,
        grundsteuer: 110,
        maklerProvision: 0.0357,
        stellplaetze: 2,
        stellplatzMiete: 200,
        energieeffizienzklasse: "A",
        heizungsart: "Wärmepumpe",
        features: ["Townhouse", "Garten", "Garage", "Kamin"],
        bilder: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop"
        ]
    }
];


function calculateKreditlaufzeit(darlehenssumme, zinssatz, tilgung) {
    // Wenn kein Darlehen, keine Laufzeit
    if (darlehenssumme <= 0) {
        return {
            jahre: 0,
            monate: 0,
            abloeseJahr: new Date().getFullYear(),
            restschuld: 0
        };
    }
    
    // Annuitätendarlehen Berechnung
    const monatsZins = zinssatz / 12;
    const jahresRate = darlehenssumme * (zinssatz + tilgung);
    const monatsRate = jahresRate / 12;
    
    // Berechne Laufzeit mit der Annuitätenformel
    // n = -log(1 - (D * r / R)) / log(1 + r)
    // D = Darlehenssumme, r = Monatszins, R = Monatsrate
    
    let restschuld = darlehenssumme;
    let monate = 0;
    const maxMonate = 600; // Sicherheit: max 50 Jahre
    
    // Simulation Monat für Monat
    while (restschuld > 0.01 && monate < maxMonate) {
        const zinsanteil = restschuld * monatsZins;
        const tilgungsanteil = monatsRate - zinsanteil;
        
        restschuld -= tilgungsanteil;
        monate++;
    }
    
    const jahre = Math.floor(monate / 12);
    const restMonate = monate % 12;
    const currentYear = new Date().getFullYear();
    const abloeseJahr = currentYear + jahre + (restMonate > 0 ? 1 : 0);
    
    return {
        jahre: jahre,
        monate: restMonate,
        abloeseJahr: abloeseJahr,
        gesamtMonate: monate,
        restschuld: Math.max(0, restschuld)
    };
}

// Globale Variablen
let currentResults = [];
let savedProperties = [];
let analyzedCount = 0;
let currentSwipeIndex = 0;

const CALC_PARAMS = {
    zinssatz: 0.039,
    tilgung: 0.02,
    notarKosten: 0.015,
    grundbuchKosten: 0.005,
    grunderwerbsteuer: 0.06,
    afaSatz: 0.02,
    gebaeudeAnteil: 0.75,
    grenzsteuersatz: 0.42,
    mietausfallRate: 0.025,
    verwaltungProMonat: 25,
    instandhaltungProQmJahr: 10,
    wegRuecklageProQmMonat: 0.35,
    kalkulatorischerMietsteigerung: 0.02,
    kalkulatorischerWertsteigerung: 0.02,
    sollMieteFaktor: 1.0
};

// Hauptsuchfunktion
function searchByCashflow() {
    console.log("Suche wird gestartet...");
    
    // Hole Suchparameter
    const params = {
        stadt: document.getElementById('stadt').value || '',
        radius: parseInt(document.getElementById('radius').value) || 50,
        lage: document.getElementById('lage').value || '',
        eigenkapital: document.getElementById('eigenkapital').value === '' ? 100000 : parseFloat(document.getElementById('eigenkapital').value) || 0,
        mindestCashflow: parseFloat(document.getElementById('mindest-cashflow').value) || 0
    };
    
    console.log("Suchparameter:", params);
    
    // Update Filter-Anzeige
    const filterInfo = document.getElementById('filterInfo');
    if (filterInfo) {
        filterInfo.style.display = 'block';
        
        const stadtFilter = document.getElementById('stadtFilter');
        if (stadtFilter) stadtFilter.textContent = params.stadt || 'Alle Städte';
        
        const lageFilter = document.getElementById('lageFilter');
        if (lageFilter) lageFilter.textContent = params.lage ? `Lage ${params.lage}` : 'Alle Lagen';
        
        const ekFilter = document.getElementById('ekFilter');
        if (ekFilter) ekFilter.textContent = `EK: ${formatCurrency(params.eigenkapital)}`;
        
        const cashflowFilter = document.getElementById('cashflowFilter');
        if (cashflowFilter) cashflowFilter.textContent = `Min. ${formatCurrency(params.mindestCashflow)}/Monat`;
    }
    
    // Zeige Results Section
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) {
        resultsSection.style.display = 'block';
    }
    
    // Zeige Ladeanimation
    const propertyList = document.getElementById('propertyList');
    if (propertyList) {
        propertyList.innerHTML = '<div class="loading-spinner">🔍 Suche profitable Immobilien...</div>';
    }
    
    // Simuliere API-Delay
    setTimeout(() => {
        // Filtere Immobilien
        let results = mockPropertyDatabase.filter(property => {
            // Stadt-Filter
            if (params.stadt && params.stadt.trim() !== '') {
                if (!property.stadt.toLowerCase().includes(params.stadt.toLowerCase())) {
                    return false;
                }
            }
            
            // Lage-Filter
            if (params.lage && params.lage !== '') {
                if (property.lage !== params.lage) {
                    return false;
                }
            }
            
            // Berechne Cashflow
            const calc = calculatePropertyCashflow(property, params.eigenkapital);
            property.calculation = calc;
            property.calculatedCashflow = calc.cashflow;
            property.calculatedRendite = calc.bruttoMietrendite;
            
            // Cashflow-Filter
            if (calc.cashflow < params.mindestCashflow) {
                return false;
            }
            
            return true;
        });
        
        // Sortiere nach Cashflow
        results.sort((a, b) => b.calculatedCashflow - a.calculatedCashflow);
        
        currentResults = results;
        
        console.log("Gefundene Immobilien:", results.length);
        
        // Update Zähler
        const resultCount = document.getElementById('resultCount');
        if (resultCount) resultCount.textContent = results.length;
        
        const minCashflowDisplay = document.getElementById('minCashflowDisplay');
        if (minCashflowDisplay) minCashflowDisplay.textContent = params.mindestCashflow;
        
        // Zeige Ergebnisse
        displayResults(results);
        
        // Update Statistiken
        analyzedCount += results.length;
        updateProfileStats();
    }, 800);
}

function calculatePropertyCashflow(property, eigenkapital) {
    // Erlaube 0 Euro Eigenkapital
    eigenkapital = eigenkapital === undefined || eigenkapital === null || eigenkapital === '' ? 100000 : eigenkapital;

    // ==================== OBJEKT UND INVESTITION ====================
    
    // Kaufnebenkosten (wie in Excel)
    const maklerkosten = property.kaufpreis * (property.maklerProvision || 0);
    const notarkosten = property.kaufpreis * CALC_PARAMS.notarKosten;
    const grundbuchkosten = property.kaufpreis * CALC_PARAMS.grundbuchKosten;
    const grunderwerbsteuer = property.kaufpreis * CALC_PARAMS.grunderwerbsteuer;
    
    const kaufnebenkosten = maklerkosten + notarkosten + grundbuchkosten + grunderwerbsteuer;
    const gesamtinvestition = property.kaufpreis + kaufnebenkosten;
    
    // ==================== FINANZIERUNG ====================
    
    const darlehenssumme = Math.max(0, gesamtinvestition - eigenkapital);
    const eigenkapitalQuote = eigenkapital / gesamtinvestition;
    
    // Annuitätendarlehen Berechnung
    const monatszins = CALC_PARAMS.zinssatz / 12;
    const jahresAnnuitaet = darlehenssumme * (CALC_PARAMS.zinssatz + CALC_PARAMS.tilgung);
    const monatsrate = jahresAnnuitaet / 12;
    
    // Anfängliche Zins- und Tilgungsanteile
    const zinsanteilAnfang = darlehenssumme * monatszins;
    const tilgungsanteilAnfang = monatsrate - zinsanteilAnfang;
    
    // Kreditlaufzeit berechnen (Funktion ist bereits vorhanden!)
    const kreditlaufzeit = calculateKreditlaufzeit(darlehenssumme, CALC_PARAMS.zinssatz, CALC_PARAMS.tilgung);
    
    // ==================== MIETE UND WERT ====================
    
    // Soll-Miete vs. Ist-Miete
    const istKaltmiete = property.kaltmiete;
    const sollKaltmiete = istKaltmiete * CALC_PARAMS.sollMieteFaktor;
    const stellplatzMiete = property.stellplatzMiete || 0;
    const nettokaltmieteGesamt = sollKaltmiete + stellplatzMiete;
    const warmmiete = nettokaltmieteGesamt + property.nebenkosten;
    
    // Miete pro qm
    const kaltmieteProQm = sollKaltmiete / property.wohnflaeche;
    
    // Jahreswerte
    const jahresNettokaltmiete = nettokaltmieteGesamt * 12;
    const bruttoMietrendite = (jahresNettokaltmiete / property.kaufpreis) * 100;
    const mietmultiplikator = property.kaufpreis / jahresNettokaltmiete;
    
    // ==================== BEWIRTSCHAFTUNGSKOSTEN ====================
    
    // Umlagefähige Kosten (werden vom Mieter getragen)
    const hausgeldUmlagefaehig = property.hausgeld * 0.85; // 85% umlagefähig
    const grundsteuerUmlagefaehig = property.grundsteuer;
    const summeUmlagefaehig = hausgeldUmlagefaehig + grundsteuerUmlagefaehig;
    
    // Nicht umlagefähige Kosten (trägt der Vermieter)
    const hausgeldNichtUmlagefaehig = property.hausgeld * 0.15; // 15% nicht umlagefähig
    const verwaltung = CALC_PARAMS.verwaltungProMonat;
    const wegRuecklage = property.wohnflaeche * CALC_PARAMS.wegRuecklageProQmMonat;
    const eigeneInstandhaltung = (property.wohnflaeche * CALC_PARAMS.instandhaltungProQmJahr) / 12;
    const kalkulatorischerMietausfall = nettokaltmieteGesamt * CALC_PARAMS.mietausfallRate;
    
    const summeNichtUmlagefaehig = hausgeldNichtUmlagefaehig + verwaltung + 
                                   wegRuecklage + eigeneInstandhaltung + 
                                   kalkulatorischerMietausfall;
    
    const gesamtBewirtschaftungskosten = summeNichtUmlagefaehig; // Nur nicht-umlagefähige sind relevant für Cashflow
    
    // ==================== STEUERLICHE BETRACHTUNG ====================
    
    const gebaeudewert = property.kaufpreis * CALC_PARAMS.gebaeudeAnteil;
    const afaJaehrlich = gebaeudewert * CALC_PARAMS.afaSatz;
    const afaMonatlich = afaJaehrlich / 12;
    
    // Steuerliche Einnahmen (Jahresbasis)
    const steuerlicheEinnahmenJahr = jahresNettokaltmiete;
    
    // Steuerliche Ausgaben (Jahresbasis)
    const steuerlicheZinsenJahr = zinsanteilAnfang * 12; // Vereinfacht: Anfangszinsen
    const steuerlicheBewirtschaftungJahr = gesamtBewirtschaftungskosten * 12;
    const steuerlicheAusgabenJahr = steuerlicheZinsenJahr + steuerlicheBewirtschaftungJahr + afaJaehrlich;
    
    // Zu versteuerndes Einkommen aus Vermietung
    const zuVersteuerndesEinkommen = steuerlicheEinnahmenJahr - steuerlicheAusgabenJahr;
    
    // Steuereffekt (monatlich)
    const steuereffektJahr = zuVersteuerndesEinkommen * CALC_PARAMS.grenzsteuersatz;
    const steuerersparnis = -steuereffektJahr / 12; // Negativ = Ersparnis
    
    // ==================== CASHFLOW BERECHNUNG ====================
    
    // Cashflow vor Steuern
    const cashflowVorSteuern = nettokaltmieteGesamt - gesamtBewirtschaftungskosten - monatsrate;
    
    // Cashflow nach Steuern
    const cashflowNachSteuern = cashflowVorSteuern + steuerersparnis;
    
    // ==================== VERMÖGENSZUWACHS ====================
    
    // Jährlicher Vermögenszuwachs durch Tilgung (ohne Wertsteigerung)
    const vermoegenszuwachsDurchTilgungJahr = tilgungsanteilAnfang * 12;
    const vermoegenszuwachsDurchTilgungMonat = tilgungsanteilAnfang;
    
    // Kalkulatorische Wertsteigerung
    const wertsteigerungJahr = property.kaufpreis * CALC_PARAMS.kalkulatorischerWertsteigerung;
    const wertsteigerungMonat = wertsteigerungJahr / 12;
    
    // Gesamter Vermögenszuwachs
    const gesamtVermoegensZuwachsJahr = vermoegenszuwachsDurchTilgungJahr + wertsteigerungJahr;
    const gesamtVermoegensZuwachsMonat = gesamtVermoegensZuwachsJahr / 12;
    
    // ==================== KENNZAHLEN ====================
    
    // Eigenkapitalrendite (inkl. Vermögenszuwachs)
    const eigenkapitalrenditeOhneWertsteigerung = eigenkapital > 0 ? 
        ((cashflowNachSteuern * 12 + vermoegenszuwachsDurchTilgungJahr) / eigenkapital) * 100 : 0;
    
    const eigenkapitalrenditeMitWertsteigerung = eigenkapital > 0 ? 
        ((cashflowNachSteuern * 12 + gesamtVermoegensZuwachsJahr) / eigenkapital) * 100 : 0;
    
    // Nettomietrendite
    const nettoMietrendite = ((jahresNettokaltmiete - gesamtBewirtschaftungskosten * 12) / gesamtinvestition) * 100;
    
// ==================== ZUKUNFTSPROGNOSE ====================
    
    // 20-Jahres Prognose (statt nur 10)
    const prognoseJahre = 20; // GEÄNDERT von 10 auf 20
    let prognose = [];
    let restschuldAktuell = darlehenssumme;
    let mietaktuell = nettokaltmieteGesamt;
    let wertAktuell = property.kaufpreis;
    
    for (let jahr = 1; jahr <= prognoseJahre; jahr++) {
        // Mietsteigerung
        mietaktuell = mietaktuell * (1 + CALC_PARAMS.kalkulatorischerMietsteigerung);
        
        // Wertsteigerung
        wertAktuell = wertAktuell * (1 + CALC_PARAMS.kalkulatorischerWertsteigerung);
        
        // Tilgung (vereinfacht)
        const jahresTilgung = tilgungsanteilAnfang * 12 * Math.pow(1 + CALC_PARAMS.zinssatz, jahr - 1);
        restschuldAktuell = Math.max(0, restschuldAktuell - jahresTilgung);
        
        // Cashflow im Jahr
        const cashflowJahr = (mietaktuell - gesamtBewirtschaftungskosten) * 12 - jahresAnnuitaet;
        
        prognose.push({
            jahr: jahr,
            miete: mietaktuell * 12,
            wert: wertAktuell,
            restschuld: restschuldAktuell,
            cashflow: cashflowJahr,
            eigenkapital: wertAktuell - restschuldAktuell
        });
    }
       
    
    
    // Finanzierungsrisiko: Zinssatz für CF = 0
    const maxZinssatzFuerCF0 = jahresNettokaltmiete / darlehenssumme - (gesamtBewirtschaftungskosten * 12 / darlehenssumme);
    
    // RETURN - ALTE FELDER BLEIBEN + NEUE FELDER KOMMEN DAZU
    return {
        // Diese Felder waren schon da (für Kompatibilität):
        cashflow: Math.round(cashflowNachSteuern),
        kaufpreis: property.kaufpreis,
        maklerkosten,
        notarkosten,
        grundbuchkosten,
        grunderwerbsteuer,
        kaufnebenkosten,
        gesamtinvestition,
        eigenkapital,
        darlehenssumme,
        eigenkapitalQuote,
        zinssatz: CALC_PARAMS.zinssatz * 100,
        monatsrate,
        zinsanteil: zinsanteilAnfang, // Für alte Kompatibilität
        tilgungsanteil: tilgungsanteilAnfang, // Für alte Kompatibilität
        kaltmiete: property.kaltmiete, // Für alte Kompatibilität
        nebenkosten: property.nebenkosten,
        warmmiete,
        verwaltung,
        instandhaltung: eigeneInstandhaltung, // Für alte Kompatibilität
        wegRuecklage,
        mietausfall: kalkulatorischerMietausfall, // Für alte Kompatibilität
        hausgeld: property.hausgeld,
        nichtUmlagefaehigeHausgeld: hausgeldNichtUmlagefaehig, // Für alte Kompatibilität
        grundsteuer: property.grundsteuer,
        gesamtKosten: gesamtBewirtschaftungskosten, // Für alte Kompatibilität
        gebaeudewert,
        afaMonatlich,
        afaJaehrlich,
        steuerersparnis,
        bruttoMietrendite,
        nettoMietrendite,
        mietmultiplikator,
        eigenkapitalrendite: eigenkapitalrenditeMitWertsteigerung, // Für alte Kompatibilität
        kreditlaufzeitJahre: kreditlaufzeit.jahre,
        kreditlaufzeitMonate: kreditlaufzeit.monate,
        abloeseJahr: kreditlaufzeit.abloeseJahr,
        gesamtLaufzeitMonate: kreditlaufzeit.gesamtMonate,
        
        // NEUE erweiterte Felder:
        wohnflaeche: property.wohnflaeche,
        zimmer: property.zimmer || 3,
        baujahr: property.baujahr,
        zinsanteilAnfang,
        tilgungsanteilAnfang,
        tilgung: CALC_PARAMS.tilgung * 100,
        istKaltmiete,
        sollKaltmiete,
        stellplatzMiete,
        nettokaltmieteGesamt,
        kaltmieteProQm,
        jahresNettokaltmiete,
        hausgeldGesamt: property.hausgeld,
        hausgeldUmlagefaehig,
        hausgeldNichtUmlagefaehig,
        eigeneInstandhaltung,
        kalkulatorischerMietausfall,
        summeUmlagefaehig,
        summeNichtUmlagefaehig,
        gesamtBewirtschaftungskosten,
        zuVersteuerndesEinkommen,
        grenzsteuersatz: CALC_PARAMS.grenzsteuersatz * 100,
        cashflowVorSteuern,
        cashflowNachSteuern,
        vermoegenszuwachsDurchTilgungJahr,
        vermoegenszuwachsDurchTilgungMonat,
        wertsteigerungJahr,
        wertsteigerungMonat,
        gesamtVermoegensZuwachsJahr,
        gesamtVermoegensZuwachsMonat,
        eigenkapitalrenditeOhneWertsteigerung,
        eigenkapitalrenditeMitWertsteigerung,
        maxZinssatzFuerCF0: maxZinssatzFuerCF0 * 100,
        prognose
    };
}

// Zeige Ergebnisse - ERSETZE DIE ALTE FUNKTION
function displayResults(results) {
    const propertyList = document.getElementById('propertyList');
    if (!propertyList) return;
    
    if (results.length === 0) {
        propertyList.innerHTML = `
            <div class="no-results">
                <div style="font-size: 48px; margin-bottom: 20px;"></div>
                <h3 style="color: #1e293b; margin-bottom: 10px;">Keine Immobilien gefunden</h3>
                <p style="color: #64748b;">Versuchen Sie einen niedrigeren Mindest-Cashflow oder erhöhen Sie Ihr Eigenkapital.</p>
            </div>
        `;
        return;
    }
    
    // Trenne importierte und normale Immobilien
    const importedProperties = results.filter(p => p.isImported);
    const normalProperties = results.filter(p => !p.isImported);
    
    let html = '';
    
    // Zeige importierte Immobilien zuerst in eigener Sektion
    if (importedProperties.length > 0) {
        html += `
            <div style="grid-column: 1 / -1; background: linear-gradient(135deg, #ff6b00 0%, #ff8533 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
                <h3 style="margin: 0 0 10px 0; font-size: 20px;">
                    🔍 ImmoScout24 Import - Ihre analysierte Immobilie
                </h3>
                <p style="margin: 0; opacity: 0.9; font-size: 14px;">
                    Diese Immobilie wurde aus Ihrem Link importiert und analysiert
                </p>
            </div>
        `;
        
        importedProperties.forEach(property => {
            html += createPropertyCardHTML(property, true);
        });
        
        // Trennlinie
        if (normalProperties.length > 0) {
            html += `
                <div style="grid-column: 1 / -1; text-align: center; margin: 40px 0;">
                    <div style="border-top: 2px solid #e2e8f0; position: relative;">
                        <span style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #f5f7fa; padding: 0 20px; color: #64748b; font-weight: 600;">
                            Weitere verfügbare Immobilien
                        </span>
                    </div>
                </div>
            `;
        }
    }
    
    // Zeige normale Immobilien
    normalProperties.forEach(property => {
        html += createPropertyCardHTML(property, false);
    });
    
    propertyList.innerHTML = html;
}

// ERSETZE die createPropertyCardHTML Funktion in calculator.js (ca. Zeile 750-850) mit dieser Version:

function createPropertyCardHTML(property, isHighlighted = false) {
    const cashflowColor = property.calculatedCashflow >= 500 ? '#10b981' : 
                         property.calculatedCashflow >= 200 ? '#3b82f6' : 
                         property.calculatedCashflow >= 0 ? '#f59e0b' : '#ef4444';
    
    // Verwende echte Bilder oder Fallback
    let hauptbild;
    if (property.bilder && property.bilder.length > 0) {
        hauptbild = property.bilder[0];
    } else {
        // Fallback: Generiere Bild basierend auf ID
        hauptbild = `https://source.unsplash.com/800x600/?apartment,real-estate/${property.id}`;
    }
    
    // Highlight-Rahmen für importierte Immobilien
    const cardStyle = isHighlighted ? 
        'cursor: pointer; border: 3px solid #ff6b00; box-shadow: 0 6px 30px rgba(255, 107, 0, 0.3);' : 
        'cursor: pointer;';
    
    return `
        <div class="property-card" onclick="showPropertyDetails(${property.id})" style="${cardStyle}">
            <div class="property-image" style="position: relative; height: 200px; overflow: hidden;">
                <!-- Echtes Bild statt Gradient -->
                <img src="${hauptbild}" alt="${property.titel}" 
                     style="width: 100%; height: 100%; object-fit: cover;"
                     onerror="this.src='https://via.placeholder.com/800x600/667eea/ffffff?text=${encodeURIComponent(property.titel.substring(0,20))}'">
                
                <!-- Overlay für bessere Lesbarkeit -->
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
                            background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%);">
                </div>
                
                <div class="property-badges" style="position: absolute; top: 10px; right: 10px; z-index: 2;">
                    ${property.isImported ? '<span class="property-badge" style="background: #ff6b00; font-size: 12px; padding: 6px 12px;">IMMOSCOUT24 IMPORT</span>' : ''}
                    <span class="property-badge lage-badge">Lage ${property.lage}</span>
                    ${property.baujahr >= 2020 ? '<span class="property-badge">NEU</span>' : ''}
                </div>
                
                <!-- Zimmer & Größe Info -->
                <div style="position: absolute; top: 10px; left: 10px; z-index: 2; 
                            background: rgba(255,255,255,0.9); padding: 6px 12px; border-radius: 6px;">
                    <span style="color: #1e293b; font-weight: 600; font-size: 14px;">
                        ${property.zimmer || 3} Zimmer | ${property.wohnflaeche} m²
                    </span>
                </div>
                
                <div class="cashflow-indicator" style="position: absolute; bottom: 0; left: 0; right: 0; z-index: 2;">
                    <div class="cashflow-amount" style="color: ${cashflowColor};">
                        ${property.calculatedCashflow >= 0 ? '+' : ''}${formatCurrency(property.calculatedCashflow)}
                    </div>
                    <div class="cashflow-label">Cashflow/Monat</div>
                </div>
            </div>
            
            <div class="property-details">
                <h3 class="property-title">
                    ${property.isImported ? '🔍 ' : ''}${property.titel}
                </h3>
                <div class="property-location">📍 ${property.stadtteil}, ${property.stadt}</div>
                
                ${property.sourceUrl ? `
                    <div style="margin: 8px 0; padding: 8px; background: #fff4e6; border-radius: 6px; font-size: 12px; color: #ff6b00;">
                        <strong>Quelle:</strong> ${property.sourceUrl.substring(0, 50)}...
                    </div>
                ` : ''}
                
                <div class="property-specs">
                    <div class="spec-item">
                        <span class="spec-label">Kaufpreis</span>
                        <span class="spec-value">${formatCurrency(property.kaufpreis)}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Größe</span>
                        <span class="spec-value">${property.wohnflaeche} m²</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Kaltmiete</span>
                        <span class="spec-value">${formatCurrency(property.kaltmiete)}</span>
                    </div>
                </div>
                
                <div class="property-metrics">
                    <div class="metric">
                        <div class="metric-value">${property.calculatedRendite.toFixed(1)}%</div>
                        <div class="metric-label">Rendite</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">${property.calculation.mietmultiplikator.toFixed(1)}</div>
                        <div class="metric-label">Faktor</div>
                    </div>
                    <div class="metric ${property.calculation.eigenkapitalrendite >= 0 ? 'positive' : 'negative'}">
                        <div class="metric-value">${property.calculation.eigenkapitalrendite.toFixed(1)}%</div>
                        <div class="metric-label">EK-Rendite</div>
                    </div>
                    <div class="metric kredit-laufzeit">
                        <div class="metric-value" style="color: #0c8ce9; font-size: 16px;">
                            ${property.calculation.abloeseJahr || new Date().getFullYear()}
                        </div>
                        <div class="metric-label" style="color: #0c8ce9;">ABBEZAHLT</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


// ERSETZE die KOMPLETTE showPropertyDetails Funktion mit dieser Version:

function showPropertyDetails(propertyId) {
    const property = mockPropertyDatabase.find(p => p.id === propertyId);
    if (!property) return;
    
    const eigenkapital = parseFloat(document.getElementById('eigenkapital').value) || 100000;
    const calc = calculatePropertyCashflow(property, eigenkapital);
    
    const modal = document.getElementById('detailModal');
    if (!modal) return;
    
    // Bestimme Cashflow-Farbe
    const cashflowColor = calc.cashflow >= 0 ? '#10b981' : '#ef4444';
    
    // Kompakte Bildergalerie HTML
    let galerieHTML = '';
    if (property.bilder && property.bilder.length > 0) {
        galerieHTML = `
            <!-- Kompakte Bildergalerie -->
            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 20px; margin-bottom: 20px;">
                <!-- Hauptbild links -->
                <div style="position: relative; height: 200px; border-radius: 8px; overflow: hidden;">
                    <img id="hauptbild-${property.id}" 
                         src="${property.bilder[0]}" 
                         alt="${property.titel}"
                         style="width: 100%; height: 100%; object-fit: cover;"
                         onerror="this.src='https://via.placeholder.com/400x200/667eea/ffffff?text=Kein+Bild'">
                    
                    ${property.bilder.length > 1 ? `
                        <!-- Mini Navigation -->
                        <div style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); 
                                    display: flex; gap: 5px;">
                            ${property.bilder.map((_, index) => `
                                <div onclick="selectImage(${property.id}, ${index})"
                                     style="width: 8px; height: 8px; border-radius: 50%; 
                                            background: ${index === 0 ? 'white' : 'rgba(255,255,255,0.5)'}; 
                                            cursor: pointer;" 
                                     id="dot-${property.id}-${index}">
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                
                <!-- Kompakte Info rechts -->
                <div>
                    <h1 style="color: #1e293b; margin: 0 0 10px 0; font-size: 24px;">${property.titel}</h1>
                    <p style="color: #64748b; margin: 0 0 15px 0; font-size: 14px;">📍 ${property.adresse}, ${property.plz} ${property.stadtteil}, ${property.stadt}</p>
                    
                    <!-- Cashflow Kompakt -->
                    <div style="background: linear-gradient(135deg, ${cashflowColor} 0%, ${calc.cashflow >= 0 ? '#059669' : '#dc2626'} 100%); 
                                color: white; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 28px; font-weight: bold;">
                            ${calc.cashflow >= 0 ? '+' : ''}${formatCurrency(calc.cashflow)}
                        </div>
                        <div style="font-size: 12px; opacity: 0.9;">Monatlicher Cashflow nach Steuern</div>
                    </div>
                    
                    <!-- Quick Stats -->
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 15px;">
                        <div style="text-align: center; padding: 8px; background: #f8fafc; border-radius: 6px;">
                            <div style="font-size: 16px; font-weight: 600; color: #1e293b;">${calc.bruttoMietrendite.toFixed(1)}%</div>
                            <div style="font-size: 10px; color: #64748b;">Rendite</div>
                        </div>
                        <div style="text-align: center; padding: 8px; background: #f8fafc; border-radius: 6px;">
                            <div style="font-size: 16px; font-weight: 600; color: #1e293b;">${property.zimmer || 3}</div>
                            <div style="font-size: 10px; color: #64748b;">Zimmer</div>
                        </div>
                        <div style="text-align: center; padding: 8px; background: #f8fafc; border-radius: 6px;">
                            <div style="font-size: 16px; font-weight: 600; color: #1e293b;">${property.wohnflaeche} m²</div>
                            <div style="font-size: 10px; color: #64748b;">Fläche</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Thumbnail-Leiste wenn mehr als 1 Bild -->
            ${property.bilder.length > 1 ? `
                <div style="display: flex; gap: 8px; margin-bottom: 20px; overflow-x: auto;">
                    ${property.bilder.map((bild, index) => `
                        <img src="${bild}" 
                             alt="Bild ${index + 1}"
                             onclick="selectImage(${property.id}, ${index})"
                             style="width: 60px; height: 45px; object-fit: cover; border-radius: 4px; 
                                    cursor: pointer; opacity: ${index === 0 ? '1' : '0.6'}; 
                                    border: ${index === 0 ? '2px solid #3b82f6' : '2px solid transparent'};"
                             id="thumb-${property.id}-${index}">
                    `).join('')}
                </div>
            ` : ''}
        `;
    } else {
        // Fallback ohne Bilder - noch kompakter
        galerieHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div>
                    <h1 style="color: #1e293b; margin: 0 0 10px 0; font-size: 24px;">${property.titel}</h1>
                    <p style="color: #64748b; margin: 0; font-size: 14px;">📍 ${property.adresse}, ${property.plz} ${property.stadtteil}, ${property.stadt}</p>
                </div>
                <div style="background: linear-gradient(135deg, ${cashflowColor} 0%, ${calc.cashflow >= 0 ? '#059669' : '#dc2626'} 100%); 
                            color: white; padding: 15px 25px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 24px; font-weight: bold;">
                        ${calc.cashflow >= 0 ? '+' : ''}${formatCurrency(calc.cashflow)}
                    </div>
                    <div style="font-size: 11px; opacity: 0.9;">Cashflow/Monat</div>
                </div>
            </div>
        `;
    }
    
    modal.innerHTML = `
        <div class="modal-content" style="max-height: 90vh; overflow-y: auto; padding: 30px;">
            <button onclick="closeDetailModal()" class="close-modal">×</button>
            
            ${galerieHTML}
            
            <!-- KOMPAKTE KALKULATIONSTABELLEN -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                
                <!-- 1. OBJEKT UND INVESTITION KOMPAKT -->
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 16px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
                        Objekt und Investition
                    </h3>
                    <table style="width: 100%; font-size: 13px;">
                        <tr><td style="padding: 4px 0; color: #64748b;">Lage:</td><td style="text-align: right; font-weight: 600;">Kategorie ${property.lage}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Baujahr:</td><td style="text-align: right; font-weight: 600;">${property.baujahr}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Kaufpreis:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.kaufpreis)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Preis/m²:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.kaufpreis / calc.wohnflaeche)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Kaufnebenkosten:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.kaufnebenkosten)}</td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">Gesamtinvestition:</td><td style="text-align: right; font-weight: 700; color: #1e293b; font-size: 15px;">${formatCurrency(calc.gesamtinvestition)}</td></tr>
                    </table>
                </div>
                
                <!-- 2. FINANZIERUNG KOMPAKT -->
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 16px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
                        Finanzierung
                    </h3>
                    <table style="width: 100%; font-size: 13px;">
                        <tr><td style="padding: 4px 0; color: #64748b;">Eigenkapital:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.eigenkapital)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Darlehen:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.darlehenssumme)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">EK-Quote:</td><td style="text-align: right; font-weight: 600;">${(calc.eigenkapitalQuote * 100).toFixed(1)}%</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Zinssatz:</td><td style="text-align: right; font-weight: 600;">${calc.zinssatz.toFixed(2)}%</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Tilgung:</td><td style="text-align: right; font-weight: 600;">${calc.tilgung.toFixed(2)}%</td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">Monatsrate:</td><td style="text-align: right; font-weight: 700; color: #ef4444; font-size: 15px;">${formatCurrency(calc.monatsrate)}</td></tr>
                        <tr style="background: #e7f5ff;">
                            <td style="padding: 8px 0; font-weight: 600; color: #0c8ce9;">Abbezahlt:</td>
                            <td style="text-align: right; font-weight: 700; color: #0c8ce9; font-size: 15px;">
                                ${calc.darlehenssumme > 0 ? calc.abloeseJahr : 'Bar'}
                            </td>
                        </tr>
                    </table>
                </div>
                
                <!-- 3. MIETE UND WERT KOMPAKT -->
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 16px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
                        Miete und Wert
                    </h3>
                    <table style="width: 100%; font-size: 13px;">
                        <tr><td style="padding: 4px 0; color: #64748b;">Kaltmiete:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.sollKaltmiete)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Stellplätze:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.stellplatzMiete)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Nebenkosten:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.nebenkosten)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Warmmiete:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.warmmiete)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">€/m²:</td><td style="text-align: right; font-weight: 600;">${calc.kaltmieteProQm.toFixed(2)} €</td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">Mieteinnahmen:</td><td style="text-align: right; font-weight: 700; color: #10b981; font-size: 15px;">+${formatCurrency(calc.nettokaltmieteGesamt)}</td></tr>
                    </table>
                </div>
                
                <!-- 4. BEWIRTSCHAFTUNGSKOSTEN KOMPAKT -->
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 16px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
                        Bewirtschaftung/Monat
                    </h3>
                    <table style="width: 100%; font-size: 13px;">
                        <tr><td style="padding: 4px 0; color: #64748b;">Hausgeld (15%):</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.hausgeldNichtUmlagefaehig)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Verwaltung:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.verwaltung)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Rücklagen:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.wegRuecklage)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Instandhaltung:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.eigeneInstandhaltung)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Mietausfall:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.kalkulatorischerMietausfall)}</td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">Gesamt:</td><td style="text-align: right; font-weight: 700; color: #ef4444; font-size: 15px;">-${formatCurrency(calc.gesamtBewirtschaftungskosten)}</td></tr>
                    </table>
                </div>
                
                <!-- 5. STEUERLICHE BETRACHTUNG KOMPAKT -->
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 16px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
                        Steuereffekt
                    </h3>
                    <table style="width: 100%; font-size: 13px;">
                        <tr><td style="padding: 4px 0; color: #64748b;">Gebäudewert:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.gebaeudewert)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">AfA/Jahr:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.afaJaehrlich)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">AfA/Monat:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.afaMonatlich)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Steuersatz:</td><td style="text-align: right; font-weight: 600;">${calc.grenzsteuersatz.toFixed(0)}%</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Zu verst. Eink.:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.zuVersteuerndesEinkommen)}</td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">Steuereffekt:</td><td style="text-align: right; font-weight: 700; color: ${calc.steuerersparnis >= 0 ? '#10b981' : '#ef4444'}; font-size: 15px;">${calc.steuerersparnis >= 0 ? '+' : ''}${formatCurrency(Math.abs(calc.steuerersparnis))}</td></tr>
                    </table>
                </div>
                
                <!-- 6. KENNZAHLEN KOMPAKT -->
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 16px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
                        Kennzahlen
                    </h3>
                    <table style="width: 100%; font-size: 13px;">
                        <tr><td style="padding: 4px 0; color: #64748b;">Brutto-Rendite:</td><td style="text-align: right; font-weight: 600; color: ${calc.bruttoMietrendite >= 4 ? '#10b981' : '#f59e0b'};">${calc.bruttoMietrendite.toFixed(2)}%</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Netto-Rendite:</td><td style="text-align: right; font-weight: 600; color: ${calc.nettoMietrendite >= 3 ? '#10b981' : '#f59e0b'};">${calc.nettoMietrendite.toFixed(2)}%</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Faktor:</td><td style="text-align: right; font-weight: 600;">${calc.mietmultiplikator.toFixed(1)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">EK-Rendite:</td><td style="text-align: right; font-weight: 600; color: ${calc.eigenkapitalrenditeMitWertsteigerung >= 8 ? '#10b981' : calc.eigenkapitalrenditeMitWertsteigerung >= 5 ? '#f59e0b' : '#ef4444'};">${calc.eigenkapitalrenditeMitWertsteigerung.toFixed(2)}%</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Max. Zins CF=0:</td><td style="text-align: right; font-weight: 600; color: ${calc.maxZinssatzFuerCF0 >= 6 ? '#10b981' : '#f59e0b'};">${calc.maxZinssatzFuerCF0.toFixed(2)}%</td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">Vermögen +/Jahr:</td><td style="text-align: right; font-weight: 700; color: #10b981; font-size: 15px;">+${formatCurrency(calc.gesamtVermoegensZuwachsJahr)}</td></tr>
                    </table>
                </div>
            </div>
            
            <!-- CASHFLOW-BERECHNUNG KOMPAKT -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;">
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 16px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
                        Cashflow-Berechnung/Monat
                    </h3>
                    <table style="width: 100%; font-size: 13px;">
                        <tr><td style="padding: 4px 0; color: #64748b;">+ Nettokaltmiete:</td><td style="text-align: right; font-weight: 600; color: #10b981;">+${formatCurrency(calc.nettokaltmieteGesamt)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">- Bewirtschaftung:</td><td style="text-align: right; font-weight: 600; color: #ef4444;">-${formatCurrency(calc.gesamtBewirtschaftungskosten)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">- Finanzierung:</td><td style="text-align: right; font-weight: 600; color: #ef4444;">-${formatCurrency(calc.monatsrate)}</td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 6px 0; color: #64748b;">= CF vor Steuern:</td><td style="text-align: right; font-weight: 600; color: ${calc.cashflowVorSteuern >= 0 ? '#10b981' : '#ef4444'};">${calc.cashflowVorSteuern >= 0 ? '+' : ''}${formatCurrency(calc.cashflowVorSteuern)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">${calc.steuerersparnis >= 0 ? '+' : '-'} Steuereffekt:</td><td style="text-align: right; font-weight: 600; color: ${calc.steuerersparnis >= 0 ? '#10b981' : '#ef4444'};">${calc.steuerersparnis >= 0 ? '+' : '-'}${formatCurrency(Math.abs(calc.steuerersparnis))}</td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">Cashflow n. St.:</td><td style="text-align: right; font-weight: 700; color: ${calc.cashflow >= 0 ? '#10b981' : '#ef4444'}; font-size: 15px;">${calc.cashflow >= 0 ? '+' : ''}${formatCurrency(calc.cashflow)}</td></tr>
                    </table>
                </div>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 16px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
                        Gesamtertrag/Jahr
                    </h3>
                    <table style="width: 100%; font-size: 13px;">
                        <tr><td style="padding: 4px 0; color: #64748b;">Cashflow/Jahr:</td><td style="text-align: right; font-weight: 600;">${formatCurrency(calc.cashflow * 12)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">+ Tilgung/Jahr:</td><td style="text-align: right; font-weight: 600;">+${formatCurrency(calc.vermoegenszuwachsDurchTilgungJahr)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">+ Wertsteigerung:</td><td style="text-align: right; font-weight: 600;">+${formatCurrency(calc.wertsteigerungJahr)}</td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">Gesamt/Jahr:</td><td style="text-align: right; font-weight: 700; color: #10b981; font-size: 15px;">+${formatCurrency((calc.cashflow * 12) + calc.gesamtVermoegensZuwachsJahr)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Gesamt/Monat:</td><td style="text-align: right; font-weight: 600; color: #10b981;">+${formatCurrency(((calc.cashflow * 12) + calc.gesamtVermoegensZuwachsJahr) / 12)}</td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">ROI (auf EK):</td><td style="text-align: right; font-weight: 700; color: ${calc.eigenkapitalrenditeMitWertsteigerung >= 10 ? '#10b981' : '#f59e0b'}; font-size: 15px;">${calc.eigenkapitalrenditeMitWertsteigerung.toFixed(1)}%</td></tr>
                    </table>
                </div>
            </div>
            
            <!-- KENNZAHLEN ZUKUNFT KOMPAKT -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;">
                <!-- Jahr-Auswahl über allen Boxen -->
                <div style="grid-column: 1 / -1; background: white; padding: 12px; border-radius: 8px; border: 2px solid #e2e8f0;">
                    <label style="color: #64748b; font-size: 13px; font-weight: 600;">Betrachtungszeitpunkt:</label>
                    <select id="zukunftJahr" onchange="updateZukunft(${property.id})" style="margin-left: 10px; padding: 6px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px;">
                        <option value="5">2029 (5 Jahre)</option>
                        <option value="10" selected>2034 (10 Jahre)</option>
                        <option value="15">2039 (15 Jahre)</option>
                        <option value="20">2044 (20 Jahre)</option>
                    </select>
                </div>
                
                <!-- Miete und Wert -->
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 16px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
                        Miete und Wert
                    </h3>
                    <table style="width: 100%; font-size: 13px;">
                        <tr><td style="padding: 4px 0; color: #64748b;">Miete/Jahr:</td><td style="text-align: right; font-weight: 600;"><span id="zk_miete_jahr">${formatCurrency(calc.prognose[9].miete)}</span></td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">€/m² Monat:</td><td style="text-align: right; font-weight: 600;"><span id="zk_miete_qm">${(calc.prognose[9].miete / 12 / property.wohnflaeche).toFixed(2)} €</span></td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Immobilienwert:</td><td style="text-align: right; font-weight: 600; color: #10b981;"><span id="zk_wert">${formatCurrency(calc.prognose[9].wert)}</span></td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Wert/m²:</td><td style="text-align: right; font-weight: 600;"><span id="zk_wert_qm">${formatCurrency(calc.prognose[9].wert / property.wohnflaeche)}</span></td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Restschuld:</td><td style="text-align: right; font-weight: 600; color: #ef4444;"><span id="zk_restschuld">${formatCurrency(calc.prognose[9].restschuld)}</span></td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">Eigenkapital:</td><td style="text-align: right; font-weight: 700; color: #10b981; font-size: 15px;"><span id="zk_eigenkapital">${formatCurrency(calc.prognose[9].eigenkapital)}</span></td></tr>
                    </table>
                </div>
                
                <!-- Cashflow Zukunft -->
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 16px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
                        Cashflow/Monat
                    </h3>
                    <table style="width: 100%; font-size: 13px;">
                        <tr><td style="padding: 4px 0; color: #64748b;">+ Warmmiete:</td><td style="text-align: right; font-weight: 600; color: #10b981;"><span id="zk_warmmiete">+${formatCurrency(calc.prognose[9].miete / 12 + calc.nebenkosten)}</span></td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">- Bewirtschaftung:</td><td style="text-align: right; font-weight: 600; color: #ef4444;"><span id="zk_bewirt">-${formatCurrency(calc.gesamtBewirtschaftungskosten * 1.2)}</span></td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">- Zinsen:</td><td style="text-align: right; font-weight: 600; color: #ef4444;"><span id="zk_zinsen">-${formatCurrency(calc.prognose[9].restschuld * 0.039 / 12)}</span></td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">- Tilgung:</td><td style="text-align: right; font-weight: 600; color: #ef4444;"><span id="zk_tilgung">-${formatCurrency(calc.monatsrate - (calc.prognose[9].restschuld * 0.039 / 12))}</span></td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 6px 0;">= CF vor Steuern:</td><td style="text-align: right; font-weight: 600;"><span id="zk_cf_operativ">${formatCurrency(calc.prognose[9].cashflow / 12)}</span></td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">CF nach Steuern:</td><td style="text-align: right; font-weight: 700; color: ${calc.prognose[9].cashflow >= 0 ? '#10b981' : '#ef4444'}; font-size: 15px;"><span id="zk_cf_nach_steuern">${formatCurrency(calc.prognose[9].cashflow / 12 * 0.58)}</span></td></tr>
                    </table>
                </div>
                
                <!-- Steuerberechnung -->
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 16px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
                        Steuerberechnung
                    </h3>
                    <table style="width: 100%; font-size: 13px;">
                        <tr><td style="padding: 4px 0; color: #64748b;">Warmmiete:</td><td style="text-align: right; font-weight: 600;"><span id="zk_st_warmmiete">${formatCurrency(calc.prognose[9].miete / 12 + calc.nebenkosten)}</span></td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">- Kosten (80%):</td><td style="text-align: right; font-weight: 600;">-${formatCurrency(calc.gesamtBewirtschaftungskosten * 0.8)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">- Zinsen:</td><td style="text-align: right; font-weight: 600;">-${formatCurrency(calc.prognose[9].restschuld * 0.039 / 12)}</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">- AfA:</td><td style="text-align: right; font-weight: 600;">-${formatCurrency(calc.afaMonatlich)}</td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 6px 0;">= Zu verst.:</td><td style="text-align: right; font-weight: 600;"><span id="zk_zu_versteuern">${formatCurrency((calc.prognose[9].miete / 12) - (calc.gesamtBewirtschaftungskosten * 0.8) - (calc.prognose[9].restschuld * 0.039 / 12) - calc.afaMonatlich)}</span></td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">× Steuersatz:</td><td style="text-align: right; font-weight: 600;">${calc.grenzsteuersatz}%</td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">Steuern:</td><td style="text-align: right; font-weight: 700; color: #ef4444; font-size: 15px;"><span id="zk_steuer_betrag">${formatCurrency(Math.max(0, ((calc.prognose[9].miete / 12) - (calc.gesamtBewirtschaftungskosten * 0.8) - (calc.prognose[9].restschuld * 0.039 / 12) - calc.afaMonatlich) * 0.42))}</span></td></tr>
                    </table>
                </div>
                
                <!-- Zinsänderungsrisiko -->
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 16px; padding-bottom: 10px; border-bottom: 2px solid #3b82f6;">
                        Zinsänderungsrisiko
                    </h3>
                    <table style="width: 100%; font-size: 13px;">
                        <tr><td style="padding: 4px 0; color: #64748b;">Restschuld:</td><td style="text-align: right; font-weight: 600;"><span id="zk_restschuld_risk">${formatCurrency(calc.prognose[9].restschuld)}</span></td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Max. Zinsen CF=0:</td><td style="text-align: right; font-weight: 600;"><span id="zk_zins_cf0">${formatCurrency((calc.prognose[9].miete / 12) - calc.gesamtBewirtschaftungskosten - calc.tilgungsanteilAnfang)}</span></td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Break-Even Zins:</td><td style="text-align: right; font-weight: 600; color: ${calc.maxZinssatzFuerCF0 >= 6 ? '#10b981' : '#f59e0b'};"><span id="zk_zins_gewichtet">${((((calc.prognose[9].miete / 12) - calc.gesamtBewirtschaftungskosten - calc.tilgungsanteilAnfang) * 12 / calc.prognose[9].restschuld) * 100).toFixed(2)}%</span></td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Aktueller Zins:</td><td style="text-align: right; font-weight: 600;">3.90%</td></tr>
                        <tr><td style="padding: 4px 0; color: #64748b;">Puffer:</td><td style="text-align: right; font-weight: 600; color: ${((((calc.prognose[9].miete / 12) - calc.gesamtBewirtschaftungskosten - calc.tilgungsanteilAnfang) * 12 / calc.prognose[9].restschuld) * 100) - 3.9 >= 2 ? '#10b981' : '#f59e0b'};"><span id="zk_puffer">${(((((calc.prognose[9].miete / 12) - calc.gesamtBewirtschaftungskosten - calc.tilgungsanteilAnfang) * 12 / calc.prognose[9].restschuld) * 100) - 3.9).toFixed(2)}%</span></td></tr>
                        <tr style="border-top: 1px solid #e2e8f0;"><td style="padding: 8px 0; font-weight: 600;">Risiko:</td><td style="text-align: right; font-weight: 700; font-size: 15px; color: ${((((calc.prognose[9].miete / 12) - calc.gesamtBewirtschaftungskosten - calc.tilgungsanteilAnfang) * 12 / calc.prognose[9].restschuld) * 100) - 3.9 >= 2 ? '#10b981' : '#f59e0b'};"><span id="zk_risiko">${((((calc.prognose[9].miete / 12) - calc.gesamtBewirtschaftungskosten - calc.tilgungsanteilAnfang) * 12 / calc.prognose[9].restschuld) * 100) - 3.9 >= 2 ? 'Niedrig' : 'Mittel'}</span></td></tr>
                    </table>
                </div>
            </div>
<script>
function updateZukunft(propertyId) {
    const jahr = parseInt(document.getElementById('zukunftJahr').value);
    const idx = jahr === 5 ? 4 : jahr === 10 ? 9 : jahr === 15 ? 14 : 19;
    const data = ${JSON.stringify(calc.prognose)};
    
    if (!data[idx]) return;
    
    // Update alle Werte
    document.getElementById('zk_miete_jahr').textContent = formatCurrency(data[idx].miete);
    document.getElementById('zk_miete_qm').textContent = (data[idx].miete / 12 / ${property.wohnflaeche}).toFixed(2) + ' €';
    document.getElementById('zk_wert').textContent = formatCurrency(data[idx].wert);
    document.getElementById('zk_wert_qm').textContent = formatCurrency(data[idx].wert / ${property.wohnflaeche});
    document.getElementById('zk_restschuld').textContent = formatCurrency(data[idx].restschuld);
    document.getElementById('zk_eigenkapital').textContent = formatCurrency(data[idx].eigenkapital);
    
    const warmmiete = data[idx].miete / 12 + ${calc.nebenkosten};
    const bewirt = ${calc.gesamtBewirtschaftungskosten} * Math.pow(1.02, jahr);
    const zinsen = data[idx].restschuld * 0.039 / 12;
    const tilgung = ${calc.monatsrate} - zinsen;
    const cfOperativ = warmmiete - bewirt - zinsen - tilgung;
    
    document.getElementById('zk_warmmiete').textContent = '+' + formatCurrency(warmmiete);
    document.getElementById('zk_bewirt').textContent = '-' + formatCurrency(bewirt);
    document.getElementById('zk_zinsen').textContent = '-' + formatCurrency(zinsen);
    document.getElementById('zk_tilgung').textContent = '-' + formatCurrency(tilgung);
    document.getElementById('zk_cf_operativ').textContent = formatCurrency(cfOperativ);
    
    const steuern = Math.max(0, cfOperativ * 0.42);
    document.getElementById('zk_cf_nach_steuern').textContent = formatCurrency(cfOperativ - steuern);
    
    // Update Steuerberechnung
    document.getElementById('zk_st_warmmiete').textContent = formatCurrency(warmmiete);
    const zuVersteuern = warmmiete - (bewirt * 0.8) - zinsen - ${calc.afaMonatlich};
    document.getElementById('zk_zu_versteuern').textContent = formatCurrency(zuVersteuern);
    document.getElementById('zk_steuer_betrag').textContent = formatCurrency(Math.max(0, zuVersteuern * 0.42));
    
    // Update Zinsänderungsrisiko
    document.getElementById('zk_restschuld_risk').textContent = formatCurrency(data[idx].restschuld);
    const maxZinsen = warmmiete - bewirt - ${calc.tilgungsanteilAnfang};
    document.getElementById('zk_zins_cf0').textContent = formatCurrency(maxZinsen);
    const breakEvenZins = data[idx].restschuld > 0 ? (maxZinsen * 12 / data[idx].restschuld) * 100 : 0;
    document.getElementById('zk_zins_gewichtet').textContent = breakEvenZins.toFixed(2) + '%';
    const puffer = breakEvenZins - 3.9;
    document.getElementById('zk_puffer').textContent = puffer.toFixed(2) + '%';
    document.getElementById('zk_risiko').textContent = puffer >= 2 ? 'Niedrig' : 'Mittel';
    
    // Update Farben
    const risikoBewertung = puffer >= 2;
    document.getElementById('zk_risiko').style.color = risikoBewertung ? '#10b981' : '#f59e0b';
    document.getElementById('zk_puffer').style.color = risikoBewertung ? '#10b981' : '#f59e0b';
    document.getElementById('zk_cf_nach_steuern').style.color = cfOperativ - steuern >= 0 ? '#10b981' : '#ef4444';
}
</script>
    
  
<script>
function updateZukunft(propertyId) {
    const jahr = parseInt(document.getElementById('zukunftJahr').value);
    const idx = jahr === 5 ? 4 : jahr === 10 ? 9 : jahr === 15 ? 14 : 19;
    const data = ${JSON.stringify(calc.prognose)};
    
    if (!data[idx]) return;
    
    // Update alle Werte
    document.getElementById('zk_miete_jahr').textContent = formatCurrency(data[idx].miete);
    document.getElementById('zk_miete_qm').textContent = (data[idx].miete / 12 / ${property.wohnflaeche}).toFixed(2) + ' €';
    document.getElementById('zk_wert').textContent = formatCurrency(data[idx].wert);
    document.getElementById('zk_wert_qm').textContent = formatCurrency(data[idx].wert / ${property.wohnflaeche});
    
    const warmmiete = data[idx].miete / 12 + ${calc.nebenkosten};
    const bewirt = ${calc.gesamtBewirtschaftungskosten} * Math.pow(1.02, jahr);
    const zinsen = data[idx].restschuld * 0.039 / 12;
    const tilgung = ${calc.monatsrate} - zinsen;
    const cfOperativ = warmmiete - bewirt - zinsen - tilgung;
    
    document.getElementById('zk_warmmiete').textContent = '+' + formatCurrency(warmmiete);
    document.getElementById('zk_bewirt').textContent = '-' + formatCurrency(bewirt);
    document.getElementById('zk_zinsen').textContent = '-' + formatCurrency(zinsen);
    document.getElementById('zk_tilgung').textContent = '-' + formatCurrency(tilgung);
    document.getElementById('zk_cf_operativ').textContent = formatCurrency(cfOperativ);
    
    const steuern = Math.max(0, cfOperativ * 0.42);
    document.getElementById('zk_steuern').textContent = '-' + formatCurrency(steuern);
    document.getElementById('zk_cf_nach_steuern').textContent = formatCurrency(cfOperativ - steuern);
}
</script>
        </div>
    `;
    
    // Speichere Bilder-Array für Navigation
    if (property.bilder && property.bilder.length > 0) {
        window.currentPropertyImages = {
            id: property.id,
            bilder: property.bilder,
            currentIndex: 0
        };
    }
    
    modal.style.display = 'block';
}
   


                            

// Schließe Modal
function closeDetailModal() {
    const modal = document.getElementById('detailModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Sortiere Ergebnisse
function sortResults(sortBy) {
    let sorted = [...currentResults];
    
    switch(sortBy) {
        case 'cashflow-desc':
            sorted.sort((a, b) => b.calculatedCashflow - a.calculatedCashflow);
            break;
        case 'cashflow-asc':
            sorted.sort((a, b) => a.calculatedCashflow - b.calculatedCashflow);
            break;
        case 'rendite-desc':
            sorted.sort((a, b) => b.calculatedRendite - a.calculatedRendite);
            break;
        case 'preis-asc':
            sorted.sort((a, b) => a.kaufpreis - b.kaufpreis);
            break;
        case 'preis-desc':
            sorted.sort((a, b) => b.kaufpreis - a.kaufpreis);
            break;
    }
    
    displayResults(sorted);
}

// Filter zurücksetzen
function clearFilters() {
    document.getElementById('stadt').value = '';
    document.getElementById('radius').value = '50';
    document.getElementById('lage').value = '';
    document.getElementById('eigenkapital').value = '100000';
    document.getElementById('mindest-cashflow').value = '0';
    
    const filterInfo = document.getElementById('filterInfo');
    if (filterInfo) filterInfo.style.display = 'none';
    
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) resultsSection.style.display = 'none';
}

// Update Profile Stats
function updateProfileStats() {
    const totalProperties = document.getElementById('totalProperties');
    if (totalProperties) totalProperties.textContent = analyzedCount;
    
    const avgCashflow = document.getElementById('avgCashflow');
    if (avgCashflow && currentResults.length > 0) {
        const avg = currentResults.reduce((sum, p) => sum + p.calculatedCashflow, 0) / currentResults.length;
        avgCashflow.textContent = formatCurrency(avg);
    }
    
    const savedPropertiesEl = document.getElementById('savedProperties');
    if (savedPropertiesEl) savedPropertiesEl.textContent = savedProperties.length;
}

// Speichere Einstellungen
function saveSettings() {
    const settings = {
        eigenkapital: document.getElementById('defaultEigenkapital').value,
        cashflow: document.getElementById('defaultCashflow').value,
        stadt: document.getElementById('defaultStadt').value,
        maxPreis: document.getElementById('maxKaufpreis').value
    };
    
    document.getElementById('eigenkapital').value = settings.eigenkapital;
    document.getElementById('mindest-cashflow').value = settings.cashflow;
    document.getElementById('stadt').value = settings.stadt;
    
    alert('✅ Einstellungen gespeichert!');
}

// Swipe Funktionen
let currentSwipeProperty = null;

// ERSETZE die loadSwipeCard Funktion in calculator.js (ca. Zeile 1150-1250) mit dieser Version:

function loadSwipeCard() {
    // Zeige ALLE Immobilien (A-E Lagen)
    const allProperties = [...mockPropertyDatabase];
    
    if (currentSwipeIndex >= allProperties.length) {
        // Wenn alle durchgewischt, zeige Zusammenfassung
        const swipeCard = document.getElementById('swipeCard');
        if (swipeCard) {
            swipeCard.innerHTML = `
                <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: white; padding: 40px; text-align: center;">
                    <div style="font-size: 72px; margin-bottom: 20px;">🎉</div>
                    <h2 style="color: #1e293b; margin-bottom: 10px;">Alle Immobilien durchgesehen!</h2>
                    <p style="color: #64748b; margin-bottom: 30px;">Du hast ${savedProperties.length} Immobilien zu deinem Portfolio hinzugefügt.</p>
                    <button onclick="resetSwipe()" style="background: #10b981; color: white; border: none; padding: 12px 30px; border-radius: 8px; font-size: 16px; cursor: pointer;">
                        Von vorne beginnen
                    </button>
                </div>
            `;
        }
        return;
    }
    
    currentSwipeProperty = allProperties[currentSwipeIndex];
    const eigenkapital = parseFloat(document.getElementById('eigenkapital').value) || 100000;
    const calc = calculatePropertyCashflow(currentSwipeProperty, eigenkapital);
    
    // Bestimme Farben basierend auf Cashflow
    const cashflowColor = calc.cashflow >= 500 ? '#10b981' : 
                         calc.cashflow >= 200 ? '#3b82f6' : 
                         calc.cashflow >= 0 ? '#f59e0b' : '#ef4444';
    
    // Verwende echte Bilder
    let hauptbild;
    if (currentSwipeProperty.bilder && currentSwipeProperty.bilder.length > 0) {
        hauptbild = currentSwipeProperty.bilder[0];
    } else {
        // Fallback Bild
        hauptbild = `https://source.unsplash.com/800x600/?apartment,${currentSwipeProperty.stadt}/${currentSwipeProperty.id}`;
    }
    
    const swipeCard = document.getElementById('swipeCard');
    if (swipeCard) {
        swipeCard.innerHTML = `
            <!-- Echtes Bild-Header -->
            <div style="height: 280px; position: relative; overflow: hidden;">
                <img src="${hauptbild}" alt="${currentSwipeProperty.titel}" 
                     style="width: 100%; height: 100%; object-fit: cover;"
                     onerror="this.src='https://via.placeholder.com/800x600/667eea/ffffff?text=${encodeURIComponent(currentSwipeProperty.titel.substring(0,20))}'">
                
                <!-- Gradient Overlay -->
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
                            background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.8) 100%);">
                </div>
                
                <!-- Lage Badge -->
                <div style="position: absolute; top: 15px; left: 15px; background: rgba(0,0,0,0.7); color: white; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 12px; letter-spacing: 1px; z-index: 2;">
                    LAGE ${currentSwipeProperty.lage}
                </div>
                
                <!-- Index Anzeige -->
                <div style="position: absolute; top: 15px; right: 15px; background: rgba(0,0,0,0.7); color: white; padding: 8px 16px; border-radius: 20px; font-size: 12px; z-index: 2;">
                    ${currentSwipeIndex + 1} / ${allProperties.length}
                </div>
                
                <!-- Cashflow Banner -->
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.9); padding: 15px; z-index: 2;">
                    <div style="text-align: center;">
                        <div style="font-size: 32px; font-weight: bold; color: ${cashflowColor};">
                            ${calc.cashflow >= 0 ? '+' : ''}${formatCurrency(calc.cashflow)}
                        </div>
                        <div style="font-size: 12px; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 1px;">
                            Cashflow / Monat
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Immobilien-Informationen auf weißem Hintergrund -->
            <div style="padding: 25px; background: white;">
                <!-- Titel -->
                <h2 style="margin: 0 0 15px 0; color: #1e293b; font-size: 22px; font-weight: 700;">
                    ${currentSwipeProperty.titel}
                </h2>
                
                <!-- Info Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <div style="background: #f8fafc; padding: 12px; border-radius: 8px;">
                        <div style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                            📍 Stadt
                        </div>
                        <div style="color: #1e293b; font-weight: 600; font-size: 15px;">
                            ${currentSwipeProperty.stadt}
                        </div>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 12px; border-radius: 8px;">
                        <div style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                            🗓️ Baujahr
                        </div>
                        <div style="color: #1e293b; font-weight: 600; font-size: 15px;">
                            ${currentSwipeProperty.baujahr}
                        </div>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 12px; border-radius: 8px;">
                        <div style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                            💰 Kaltmiete
                        </div>
                        <div style="color: #1e293b; font-weight: 600; font-size: 15px;">
                            ${formatCurrency(currentSwipeProperty.kaltmiete)}
                        </div>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 12px; border-radius: 8px;">
                        <div style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                            🏠 Kaufpreis
                        </div>
                        <div style="color: #1e293b; font-weight: 600; font-size: 15px;">
                            ${formatCurrency(currentSwipeProperty.kaufpreis)}
                        </div>
                    </div>
                </div>
                
                <!-- Zusatz-Infos -->
                <div style="display: flex; justify-content: space-between; padding: 15px 0; border-top: 1px solid #e2e8f0;">
                    <div style="text-align: center; flex: 1;">
                        <div style="color: #1e293b; font-weight: 700; font-size: 18px;">${currentSwipeProperty.zimmer || 3}</div>
                        <div style="color: #64748b; font-size: 11px; text-transform: uppercase;">Zimmer</div>
                    </div>
                    <div style="text-align: center; flex: 1; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
                        <div style="color: #1e293b; font-weight: 700; font-size: 18px;">${currentSwipeProperty.wohnflaeche} m²</div>
                        <div style="color: #64748b; font-size: 11px; text-transform: uppercase;">Wohnfläche</div>
                    </div>
                    <div style="text-align: center; flex: 1;">
                        <div style="color: ${calc.bruttoMietrendite >= 4 ? '#10b981' : '#f59e0b'}; font-weight: 700; font-size: 18px;">
                            ${calc.bruttoMietrendite.toFixed(1)}%
                        </div>
                        <div style="color: #64748b; font-size: 11px; text-transform: uppercase;">Rendite</div>
                    </div>
                </div>
                
                <!-- Bildergalerie-Indikator -->
                ${currentSwipeProperty.bilder && currentSwipeProperty.bilder.length > 1 ? `
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e2e8f0; text-align: center;">
                        <span style="color: #64748b; font-size: 12px;">
                            📸 ${currentSwipeProperty.bilder.length} Bilder verfügbar
                        </span>
                    </div>
                ` : ''}
            </div>
        `;
        
        // Animation beim Laden
        swipeCard.style.animation = 'slideIn 0.3s ease';
    }
}



// ==================== SWIPE FUNKTIONALITÄT NEU ====================

// Swipe nach links (Ablehnen)
function swipeLeft() {
    const swipeCard = document.getElementById('swipeCard');
    if (!swipeCard) return;
    
    console.log("Swipe Left - Verworfen!");
    
    // Animation
    swipeCard.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    swipeCard.style.transform = 'translateX(-120%) rotate(-30deg)';
    swipeCard.style.opacity = '0';
    
    // Zeige Skip-Feedback
    showSwipeFeedback('skip');
    
    // Nach Animation nächste Karte laden
    setTimeout(() => {
        currentSwipeIndex++;
        swipeCard.style.transition = 'none';
        swipeCard.style.transform = 'translateX(0) rotate(0)';
        swipeCard.style.opacity = '1';
        loadSwipeCard();
    }, 400);
}

// Swipe nach rechts (Speichern)
function swipeRight() {
    const swipeCard = document.getElementById('swipeCard');
    if (!swipeCard || !currentSwipeProperty) return;
    
    console.log("Swipe Right - Gespeichert!");
    
    // Animation
    swipeCard.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    swipeCard.style.transform = 'translateX(120%) rotate(30deg)';
    swipeCard.style.opacity = '0';
    
    // Speichere Immobilie
    if (!savedProperties.some(p => p.id === currentSwipeProperty.id)) {
        savedProperties.push(currentSwipeProperty);
        updateProfileStats();
        updateSavedPropertiesDisplay();
    }
    
    // Zeige Like-Feedback
    showSwipeFeedback('like');
    
    // Nach Animation nächste Karte laden
    setTimeout(() => {
        currentSwipeIndex++;
        swipeCard.style.transition = 'none';
        swipeCard.style.transform = 'translateX(0) rotate(0)';
        swipeCard.style.opacity = '1';
        loadSwipeCard();
    }, 400);
}

// Zeige Swipe Feedback
function showSwipeFeedback(type) {
    const feedback = document.createElement('div');
    feedback.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px 40px;
        border-radius: 50px;
        font-weight: 600;
        font-size: 20px;
        z-index: 10000;
        pointer-events: none;
        animation: feedbackPop 0.6s ease;
    `;
    
    if (type === 'like') {
        feedback.innerHTML = '💚 GESPEICHERT';
        feedback.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        feedback.style.color = 'white';
    } else {
        feedback.innerHTML = '❌ VERWORFEN';
        feedback.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        feedback.style.color = 'white';
    }
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 600);
}

// Touch/Mouse Swipe Handler
let touchStartX = 0;
let touchEndX = 0;
let isDragging = false;
let currentX = 0;

function handleSwipeStart(e) {
    isDragging = true;
    touchStartX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    
    const swipeCard = document.getElementById('swipeCard');
    if (swipeCard) {
        swipeCard.style.transition = 'none';
    }
}

function handleSwipeMove(e) {
    if (!isDragging) return;
    
    currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const diffX = currentX - touchStartX;
    const rotation = diffX * 0.1;
    
    const swipeCard = document.getElementById('swipeCard');
    if (swipeCard) {
        swipeCard.style.transform = `translateX(${diffX}px) rotate(${rotation}deg)`;
        
        // Zeige visuelles Feedback
        if (diffX > 50) {
            swipeCard.style.borderColor = '#10b981';
            swipeCard.style.boxShadow = '0 10px 40px rgba(16, 185, 129, 0.3)';
        } else if (diffX < -50) {
            swipeCard.style.borderColor = '#ef4444';
            swipeCard.style.boxShadow = '0 10px 40px rgba(239, 68, 68, 0.3)';
        }
    }
}

function handleSwipeEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    
    touchEndX = e.type.includes('mouse') ? e.clientX : currentX;
    handleGesture();
}

function handleGesture() {
    const swipeCard = document.getElementById('swipeCard');
    if (!swipeCard) return;
    
    const diff = touchEndX - touchStartX;
    const threshold = 75;
    
    if (diff > threshold) {
        swipeRight();
    } else if (diff < -threshold) {
        swipeLeft();
    } else {
        // Zurück zur Mitte
        swipeCard.style.transition = 'transform 0.3s ease';
        swipeCard.style.transform = 'translateX(0) rotate(0)';
        swipeCard.style.borderColor = 'transparent';
        swipeCard.style.boxShadow = '0 10px 40px rgba(0,0,0,0.2)';
    }
}

// Initialisiere Event Listeners
function initSwipeEvents() {
    const swipeCard = document.getElementById('swipeCard');
    if (!swipeCard) return;
    
    // Touch Events
    swipeCard.addEventListener('touchstart', handleSwipeStart, {passive: true});
    swipeCard.addEventListener('touchmove', handleSwipeMove, {passive: false});
    swipeCard.addEventListener('touchend', handleSwipeEnd);
    
    // Mouse Events
    swipeCard.addEventListener('mousedown', handleSwipeStart);
    swipeCard.addEventListener('mousemove', handleSwipeMove);
    swipeCard.addEventListener('mouseup', handleSwipeEnd);
    swipeCard.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            const swipeCard = document.getElementById('swipeCard');
            if (swipeCard) {
                swipeCard.style.transition = 'transform 0.3s ease';
                swipeCard.style.transform = 'translateX(0) rotate(0)';
            }
        }
    });
}

// Update die loadSwipeCard Funktion
const originalLoadSwipeCard = loadSwipeCard;
loadSwipeCard = function() {
    originalLoadSwipeCard();
    setTimeout(initSwipeEvents, 100);
};

// Keyboard Support
document.addEventListener('keydown', function(e) {
    const swipeTab = document.getElementById('swipen');
    if (swipeTab && swipeTab.style.display !== 'none' && !isDragging) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            swipeLeft();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            swipeRight();
        }
    }
});

// Zeige gespeicherte Immobilien im Profil
function updateSavedPropertiesDisplay() {
    const container = document.getElementById('savedPropertiesList');
    if (!container) return;
    
    if (savedProperties.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #64748b;">Noch keine Immobilien gespeichert. Nutze die Swipe-Funktion!</p>';
        return;
    }
    
    container.innerHTML = savedProperties.map(property => {
        const eigenkapital = parseFloat(document.getElementById('eigenkapital')?.value) || 100000;
        const calc = calculatePropertyCashflow(property, eigenkapital);
        
        return `
            <div class="saved-property-card" onclick="showPropertyDetails(${property.id})">
                <div class="saved-property-header">
                    <h4>${property.titel}</h4>
                    <button onclick="event.stopPropagation(); removeFromSaved(${property.id})" class="remove-btn">×</button>
                </div>
                <p class="saved-property-location">📍 ${property.stadt}, ${property.stadtteil}</p>
                <div class="saved-property-metrics">
                    <span class="metric-tag cashflow-tag">+${formatCurrency(calc.cashflow)}/Monat</span>
                    <span class="metric-tag">${property.wohnflaeche} m²</span>
                    <span class="metric-tag">${formatCurrency(property.kaufpreis)}</span>
                </div>
            </div>
        `;
    }).join('');
}

// Entferne aus gespeicherten
function removeFromSaved(propertyId) {
    savedProperties = savedProperties.filter(p => p.id !== propertyId);
    updateSavedPropertiesDisplay();
    updateProfileStats();
}

// ==================== ENDE SWIPE FUNKTIONALITÄT ====================

function resetSwipe() {
    currentSwipeIndex = 0;
    loadSwipeCard();
}

function showSwipeDetails() {
    if (currentSwipeProperty) {
        showPropertyDetails(currentSwipeProperty.id);
    }
}

// Load Top Recommendations
function loadTopRecommendations() {
    const container = document.getElementById('topRecommendations');
    if (!container) return;
    
    const eigenkapital = 100000;
    const recommendations = mockPropertyDatabase
        .map(p => {
            const calc = calculatePropertyCashflow(p, eigenkapital);
            return {...p, calculation: calc, calculatedCashflow: calc.cashflow, calculatedRendite: calc.bruttoMietrendite};
        })
        .filter(p => p.calculatedCashflow > 300)
        .sort((a, b) => b.calculatedCashflow - a.calculatedCashflow)
        .slice(0, 6);
    
    container.innerHTML = recommendations.map(p => createPropertyCardHTML(p)).join('');
}

// Load Ones to Watch - NEUE VERSION MIT D/E-LAGEN LISTE UND BLAUTÖNEN
function loadOnestoWatch() {
    const listContainer = document.getElementById('stadtteilList');
    const propertiesContainer = document.getElementById('stadtteilProperties');
    
    if (!listContainer) return;
    
    // WICHTIG: Nur anzeigen wenn Ones to Watch Tab aktiv ist
    const activeTab = document.querySelector('.nav-tab.active');
    if (activeTab && activeTab.getAttribute('data-tab') !== 'ones-to-watch') {
        listContainer.style.display = 'none';
        if (propertiesContainer) propertiesContainer.style.display = 'none';
        return;
    }
    
    // Reset views
    listContainer.style.display = 'block';
    propertiesContainer.style.display = 'none';
    
    // Rest der Funktion bleibt gleich...
}
function loadOnestoWatch() {
    const listContainer = document.getElementById('stadtteilList');
    const propertiesContainer = document.getElementById('stadtteilProperties');
    
    if (!listContainer) return;
    
    // Reset views
    listContainer.style.display = 'block';
    propertiesContainer.style.display = 'none';
    
    // Definiere D- und E-Lagen mit verstecktem Potenzial
    const potenzialStadtteile = [
        {
            name: "Berlin-Marzahn",
            stadt: "Berlin",
            stadtteil: "Marzahn",
            lage: "E",
            reason: "Massive Zuzugsquote von +12% jährlich durch neue Tech-Arbeitsplätze in Adlershof. Die S-Bahn-Anbindung macht Marzahn zur bezahlbaren Alternative für Pendler.",
            bgColor: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)"
        },
        {
            name: "Hamburg-Harburg",
            stadt: "Hamburg",
            stadtteil: "Harburg",
            lage: "D",
            reason: "Die Technische Universität zieht 5.000 neue Studenten pro Jahr an. Der Binnenhafen wird zum Kreativquartier umgebaut - Wertsteigerung garantiert.",
            bgColor: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)"
        },
        {
            name: "München-Hasenbergl",
            stadt: "München",
            stadtteil: "Hasenbergl",
            lage: "E",
            reason: "BMW plant Erweiterung mit 3.000 neuen Arbeitsplätzen. Die U-Bahn-Verlängerung kommt 2026 - danach explodieren hier die Preise.",
            bgColor: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)"
        },
        {
            name: "Köln-Chorweiler",
            stadt: "Köln",
            stadtteil: "Chorweiler",
            lage: "D",
            reason: "Größtes Sanierungsprogramm NRWs mit 500 Mio. Euro Investment. Die Kriminalitätsrate sank um 40% in zwei Jahren - Image-Wandel in vollem Gange.",
            bgColor: "linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%)"
        },
        {
            name: "Frankfurt-Griesheim",
            stadt: "Frankfurt",
            stadtteil: "Griesheim",
            lage: "D",
            reason: "Neue Straßenbahn-Linie direkt zum Bankenviertel ab 2025. Google plant Campus-Erweiterung - 2.000 gut bezahlte Jobs kommen ins Viertel.",
            bgColor: "linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%)"
        }
    ];
    
    // Erstelle Listen-Einträge mit verschiedenen Blautönen
    listContainer.innerHTML = potenzialStadtteile.map((stadtteil, index) => `
        <div onclick="showStadtteilProperties('${stadtteil.stadtteil}', '${stadtteil.stadt}', '${stadtteil.lage}')" style="
            padding: 30px;
            ${index < potenzialStadtteile.length - 1 ? 'border-bottom: 2px solid #e0e7ff;' : ''}
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            background: ${stadtteil.bgColor};
        " onmouseover="this.style.transform='translateX(10px)'; this.style.boxShadow='0 4px 15px rgba(59, 130, 246, 0.2)'" 
           onmouseout="this.style.transform='translateX(0)'; this.style.boxShadow='none'">
            
            <!-- Lage Badge -->
            <div style="position: absolute; right: 30px; top: 50%; transform: translateY(-50%); background: ${stadtteil.lage === 'D' ? '#3b82f6' : '#2563eb'}; color: white; padding: 6px 14px; border-radius: 20px; font-weight: 600; font-size: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                Lage ${stadtteil.lage}
            </div>
            
            <!-- Stadtteil Name (groß und fett) -->
            <h3 style="color: #1e3a8a; font-size: 24px; margin: 0 0 10px 0; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.05);">
                ${stadtteil.name}
            </h3>
            
            <!-- Potenzial-Grund (kleiner) -->
            <p style="color: #1e293b; font-size: 14px; line-height: 1.6; margin: 0; max-width: 85%; opacity: 0.9;">
                ${stadtteil.reason}
            </p>
        </div>
    `).join('');
}
// Zeige Immobilien eines bestimmten Stadtteils (mit speziellem Eigenkapital)
function showStadtteilProperties(stadtteil, stadt, lage) {
    const listContainer = document.getElementById('stadtteilList');
    const propertiesContainer = document.getElementById('stadtteilProperties');
    const propertyList = document.getElementById('watchList');
    const titleElement = document.getElementById('selectedStadtteilTitle');
    
    if (!propertyList) return;
    
    // Verstecke Liste, zeige Properties
    listContainer.style.display = 'none';
    propertiesContainer.style.display = 'block';
    
    // Setze Titel
    titleElement.textContent = `Immobilien in ${stadt}-${stadtteil} (Lage ${lage})`;
    
    // Filtere Immobilien für diesen Stadtteil
    let stadtteilProperties = mockPropertyDatabase
        .filter(p => p.stadtteil === stadtteil && p.stadt === stadt);
    
    // Wenn keine echten Immobilien, erstelle Mock-Immobilien für D/E-Lagen
    if (stadtteilProperties.length === 0) {
        stadtteilProperties = createDELagenProperties(stadtteil, stadt, lage);
    }
    
    // Berechne für jede Immobilie mit speziellem Eigenkapital
    stadtteilProperties = stadtteilProperties.map(property => {
        // WICHTIG: Eigenkapital = Kaufnebenkosten + 15.000€ Renovierung
        const maklerkosten = property.kaufpreis * (property.maklerProvision || 0);
        const notarkosten = property.kaufpreis * 0.015;
        const grundbuchkosten = property.kaufpreis * 0.005;
        const grunderwerbsteuer = property.kaufpreis * 0.06;
        const kaufnebenkosten = maklerkosten + notarkosten + grundbuchkosten + grunderwerbsteuer;
        const renovierungskosten = 15000;
        const eigenkapital = kaufnebenkosten + renovierungskosten;
        
        const calc = calculatePropertyCashflow(property, eigenkapital);
        
        return {
            ...property,
            calculation: calc,
            calculatedCashflow: calc.cashflow,
            calculatedRendite: calc.bruttoMietrendite
        };
    }).sort((a, b) => b.calculatedCashflow - a.calculatedCashflow);
    
    // Zeige Immobilien
    propertyList.innerHTML = stadtteilProperties.map(p => createPropertyCardHTML(p)).join('');
    
    // Scroll nach oben
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Zurück zur Stadtteil-Liste
function backToStadtteilList() {
    const listContainer = document.getElementById('stadtteilList');
    const propertiesContainer = document.getElementById('stadtteilProperties');
    
    listContainer.style.display = 'block';
    propertiesContainer.style.display = 'none';
}

// Erstelle realistische D/E-Lagen Properties
function createDELagenProperties(stadtteil, stadt, lage) {
    const baseProperties = [
        {
            titel: `Renovierungsbedürftiger Altbau in ${stadtteil}`,
            kaufpreis: 165000,
            wohnflaeche: 62,
            zimmer: 3,
            kaltmiete: 720,
            baujahr: 1975,
            features: ["Renovierungsbedarf", "Balkon", "Keller"]
        },
        {
            titel: `Plattenbau-Wohnung mit Potenzial`,
            kaufpreis: 145000,
            wohnflaeche: 55,
            zimmer: 2,
            kaltmiete: 650,
            baujahr: 1985,
            features: ["Fernwärme", "Aufzug", "Grünanlage"]
        },
        {
            titel: `Kapitalanlage in ${stadtteil}`,
            kaufpreis: 125000,
            wohnflaeche: 48,
            zimmer: 2,
            kaltmiete: 580,
            baujahr: 1982,
            features: ["Vermietet", "Stellplatz", "Ruhige Lage"]
        },
        {
            titel: `Studentenwohnung nahe ÖPNV`,
            kaufpreis: 110000,
            wohnflaeche: 35,
            zimmer: 1,
            kaltmiete: 520,
            baujahr: 1990,
            features: ["Kompakt", "U-Bahn-Nähe", "Ideal für Studenten"]
        }
    ];
    
    return baseProperties.map((base, index) => {
        const property = {
            id: 2000 + index + Math.floor(Math.random() * 1000), // Eindeutige ID
            ...base,
            adresse: `Beispielstraße ${Math.floor(Math.random() * 200) + 1}`,
            stadt: stadt,
            plz: "10000",
            stadtteil: stadtteil,
            lage: lage,
            nebenkosten: 150,
            hausgeld: 220,
            grundsteuer: 25,
            maklerProvision: 0,
            stellplaetze: index < 2 ? 1 : 0,
            stellplatzMiete: index < 2 ? 40 : 0,
            energieeffizienzklasse: lage === "D" ? "D" : "E",
            heizungsart: "Fernwärme"
        };
        
        return property;
    });
}
// Load Heat Map
function loadHeatMap() {
    const container = document.getElementById('heatMapDisplay');
    if (!container) return;
    
    container.innerHTML = '<div style="text-align: center; color: #64748b;">Heat Map wird geladen...</div>';
}

// Format Currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Initial Load
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM geladen, initialisiere Immobilienkalkulator...");
    
    // Event Listener für Enter-Taste
    const inputs = document.querySelectorAll('.search-field input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchByCashflow();
            }
        });
    });
    
    // Lade andere Tabs
    setTimeout(() => {
        if (typeof loadTopEmpfehlungen === 'function') {
    loadTopEmpfehlungen();
}
        loadOnestoWatch();
        loadHeatMap();
        loadSwipeCard();
    }, 100);
    
    // Automatische Suche beim Start
    setTimeout(() => {
        searchByCashflow();
    }, 500);

// ==================== CASHFLOW INPUT STYLING ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log("Cashflow Input Styling wird initialisiert...");
    
    const cashflowInput = document.getElementById('mindest-cashflow');
    
    if (cashflowInput) {
        console.log("Cashflow Input gefunden!");
        
        // Initiale Styles setzen
        cashflowInput.style.background = 'white';
        cashflowInput.style.color = 'black';
        
        // Funktion zum Updaten der Farbe
        function updateCashflowColor() {
            const value = parseFloat(cashflowInput.value);
            console.log("Cashflow Wert:", value);
            
            // Entferne alle Klassen
            cashflowInput.classList.remove('positive-cashflow', 'negative-cashflow');
            
            // Setze neue Klasse basierend auf Wert
            if (!isNaN(value)) {
                if (value > 0) {
                    console.log("Positive Zahl - wird grün");
                    cashflowInput.classList.add('positive-cashflow');
                } else if (value < 0) {
                    console.log("Negative Zahl - wird rot");
                    cashflowInput.classList.add('negative-cashflow');
                } else {
                    // Bei 0 - neutral
                    cashflowInput.style.background = 'white';
                    cashflowInput.style.color = 'black';
                }
            }
        }
        
        // Event Listener für Eingabe (während des Tippens)
        cashflowInput.addEventListener('input', function() {
            // Zurücksetzen auf weiß während der Eingabe
            this.classList.remove('positive-cashflow', 'negative-cashflow');
            this.style.background = 'white';
            this.style.color = 'black';
        });
        
        // Event Listener für Enter-Taste
        cashflowInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                updateCashflowColor();
            }
        });
        
        // Event Listener für Fokus verlieren
        cashflowInput.addEventListener('blur', function() {
            updateCashflowColor();
        });
        
        // Event Listener für den Such-Button
        const searchButton = document.querySelector('.search-button');
        if (searchButton) {
            searchButton.addEventListener('click', function() {
                setTimeout(updateCashflowColor, 100);
            });
        }
    } else {
        console.error("Cashflow Input NICHT gefunden!");
    }
});
// ==================== ENDE CASHFLOW INPUT STYLING ====================
// ==================== TOP-EMPFEHLUNGEN FUNKTIONEN ====================

// Lade Top-Empfehlungen für ganz Deutschland
window.loadTopEmpfehlungen = function() {
    console.log("Lade Top-Empfehlungen aus ganz Deutschland...");
    
    const container = document.getElementById('topRecommendations');
    if (!container) {
        console.error("Container für Top-Empfehlungen nicht gefunden!");
        return;
    }
    
    // Hole Eigenkapital-Wert (Standard: 0 für 100% Finanzierung)
    const ekInput = document.getElementById('top-eigenkapital');
    const eigenkapital = ekInput ? parseFloat(ekInput.value) || 0 : 0;
    
    console.log("Berechne für Eigenkapital:", eigenkapital);
    
    // Filtere nur A und B Lagen aus ganz Deutschland
    let topProperties = mockPropertyDatabase
        .filter(property => property.lage === 'A' || property.lage === 'B')
        .map(property => {
            const calc = calculatePropertyCashflow(property, eigenkapital);
            return {
                ...property,
                calculation: calc,
                calculatedCashflow: calc.cashflow,
                calculatedRendite: calc.bruttoMietrendite,
                cashflowProQm: calc.cashflow / property.wohnflaeche
            };
        })
    
        .sort((a, b) => b.calculatedCashflow - a.calculatedCashflow) // Nach Cashflow sortiert
        .slice(0, 20); // Top 20
    
    // Zeige Ergebnisse
    if (topProperties.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; background: white; border-radius: 12px;">
                <h3>Keine profitablen A/B-Lagen gefunden</h3>
                <p>Erhöhen Sie das Eigenkapital für bessere Ergebnisse</p>
            </div>
        `;
        return;
    }
    
    // Erstelle Ranking-Liste
    container.innerHTML = topProperties.map((property, index) => `
        <div class="top-property-card" onclick="showPropertyDetails(${property.id})" style="
            background: white;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            display: grid;
            grid-template-columns: 60px 1fr auto;
            gap: 20px;
            align-items: center;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid ${index < 3 ? '#ffd700' : '#e2e8f0'};
            ${index === 0 ? 'background: linear-gradient(135deg, #fffbf0 0%, #fff9e6 100%);' : ''}
        " onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
            
            <!-- Ranking -->
            <div style="text-align: center;">
                <div style="
                    font-size: 24px;
                    font-weight: bold;
                    color: ${index === 0 ? '#ffd700' : index === 1 ? '#c0c0c0' : index === 2 ? '#cd7f32' : '#64748b'};
                    ${index < 3 ? 'text-shadow: 0 2px 4px rgba(0,0,0,0.1);' : ''}
                ">
                    ${index < 3 ? ['🥇', '🥈', '🥉'][index] : '#' + (index + 1)}
                </div>
                <div style="font-size: 10px; color: #94a3b8; margin-top: 4px;">
                    PLATZ
                </div>
            </div>
            
            <!-- Property Info -->
            <div>
                <h3 style="margin: 0 0 8px 0; color: #1e293b; font-size: 18px;">
                    ${property.titel}
                </h3>
                <div style="color: #64748b; font-size: 14px; margin-bottom: 12px;">
                    📍 ${property.stadt}, ${property.stadtteil} | Lage ${property.lage}
                </div>
                <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                    <span style="font-size: 13px;">
                        <span style="color: #94a3b8;">Kaufpreis:</span>
                        <strong style="color: #1e293b;">${formatCurrency(property.kaufpreis)}</strong>
                    </span>
                    <span style="font-size: 13px;">
                        <span style="color: #94a3b8;">Größe:</span>
                        <strong style="color: #1e293b;">${property.wohnflaeche} m²</strong>
                    </span>
                    <span style="font-size: 13px;">
                        <span style="color: #94a3b8;">Miete:</span>
                        <strong style="color: #1e293b;">${formatCurrency(property.kaltmiete)}</strong>
                    </span>
                    <span style="font-size: 13px;">
                        <span style="color: #94a3b8;">Rendite:</span>
                        <strong style="color: ${property.calculatedRendite >= 5 ? '#10b981' : '#f59e0b'};">
                            ${property.calculatedRendite.toFixed(1)}%
                        </strong>
                    </span>
                    <!-- NEU: Ablösejahr -->
                    <span style="font-size: 13px; background: #e7f5ff; padding: 2px 8px; border-radius: 4px;">
                        <span style="color: #0c8ce9;"> Abbezahlt:</span>
                        <strong style="color: #0c8ce9;">
                            ${property.calculation.darlehenssumme > 0 ? property.calculation.abloeseJahr : 'Bar'}
                        </strong>
                    </span>
                </div>
            </div>
            
            <!-- Cashflow Display -->
            <div style="text-align: center; padding: 15px; background: linear-gradient(135deg, #d4f4dd 0%, #bbf7d0 100%); border-radius: 12px; min-width: 140px;">
                <div style="font-size: 24px; font-weight: bold; color: #059669;">
                    +${formatCurrency(property.calculatedCashflow)}
                </div>
                <div style="font-size: 11px; color: #047857; margin-top: 4px;">
                    CASHFLOW/MONAT
                </div>
                <div style="font-size: 10px; color: #065f46; margin-top: 2px; opacity: 0.8;">
                    ${property.cashflowProQm.toFixed(2)} €/m²
                </div>
            </div>
        </div>
    `).join('');
    
    // Update Statistiken
    const avgCashflow = topProperties.reduce((sum, p) => sum + p.calculatedCashflow, 0) / topProperties.length;
    const bestCity = getMostFrequentCity(topProperties);
    
    // Zeige Statistiken oben
    const statsHtml = `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
            <h2 style="margin: 0 0 20px 0; font-size: 24px;"> Top ${topProperties.length} A/B-Lagen Deutschlandweit</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px;">
                <div>
                    <div style="font-size: 28px; font-weight: bold;">Ø ${formatCurrency(avgCashflow)}</div>
                    <div style="font-size: 12px; opacity: 0.9;">Durchschnittlicher Cashflow</div>
                </div>
                <div>
                    <div style="font-size: 28px; font-weight: bold;">${formatCurrency(eigenkapital)}</div>
                    <div style="font-size: 12px; opacity: 0.9;">Eigenkapital</div>
                </div>
                <div>
                    <div style="font-size: 28px; font-weight: bold;">${bestCity}</div>
                    <div style="font-size: 12px; opacity: 0.9;">Beste Stadt</div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = statsHtml + container.innerHTML;
};

// Hilfsfunktion: Häufigste Stadt
function getMostFrequentCity(properties) {
    const cities = {};
    properties.forEach(p => {
        cities[p.stadt] = (cities[p.stadt] || 0) + 1;
    });
    return Object.keys(cities).reduce((a, b) => cities[a] > cities[b] ? a : b);
}

// Event Listener für Eigenkapital-Änderung
document.addEventListener('DOMContentLoaded', function() {
    const topEkInput = document.getElementById('top-eigenkapital');
    if (topEkInput) {
        topEkInput.addEventListener('change', function() {
            loadTopEmpfehlungen();
        });
        
        topEkInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                loadTopEmpfehlungen();
            }
        });
    }
});

// ==================== ENDE TOP-EMPFEHLUNGEN ====================
// ==================== SWIPE FUNKTIONALITÄT CLEAN ====================
let currentSwipeProperty = null;
let currentSwipeIndex = 0;
let savedProperties = [];

// Swipe nach links (Ablehnen)
function swipeLeft() {
    const swipeCard = document.getElementById('swipeCard');
    if (!swipeCard) return;
    
    // Animation
    swipeCard.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    swipeCard.style.transform = 'translateX(-120%) rotate(-30deg)';
    swipeCard.style.opacity = '0';
    
    // Feedback
    showSwipeFeedback('skip');
    
    // Nächste Karte
    setTimeout(() => {
        currentSwipeIndex++;
        swipeCard.style.transition = 'none';
        swipeCard.style.transform = 'translateX(0) rotate(0)';
        swipeCard.style.opacity = '1';
        loadSwipeCard();
        initSwipeEvents();
    }, 400);
}

// Swipe nach rechts (Speichern)  
function swipeRight() {
    const swipeCard = document.getElementById('swipeCard');
    if (!swipeCard || !currentSwipeProperty) return;
    
    // Animation
    swipeCard.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    swipeCard.style.transform = 'translateX(120%) rotate(30deg)';
    swipeCard.style.opacity = '0';
    
    // Speichern
    if (!savedProperties.some(p => p.id === currentSwipeProperty.id)) {
        savedProperties.push(currentSwipeProperty);
        updateProfileStats();
        updateSavedPropertiesDisplay();
    }
    
    // Feedback
    showSwipeFeedback('like');
    
    // Nächste Karte
    setTimeout(() => {
        currentSwipeIndex++;
        swipeCard.style.transition = 'none';
        swipeCard.style.transform = 'translateX(0) rotate(0)';
        swipeCard.style.opacity = '1';
        loadSwipeCard();
        initSwipeEvents();
    }, 400);
}

// Details anzeigen
function showSwipeDetails() {
    if (currentSwipeProperty) {
        showPropertyDetails(currentSwipeProperty.id);
    }
}

// Reset Swipe
function resetSwipe() {
    currentSwipeIndex = 0;
    loadSwipeCard();
    initSwipeEvents();
}

// Feedback Animation
function showSwipeFeedback(type) {
    const feedback = document.createElement('div');
    feedback.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px 40px;
        border-radius: 50px;
        font-weight: 600;
        font-size: 20px;
        z-index: 10000;
        pointer-events: none;
        animation: feedbackPop 0.6s ease;
    `;
    
    if (type === 'like') {
        feedback.innerHTML = '💚 GESPEICHERT';
        feedback.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        feedback.style.color = 'white';
    } else {
        feedback.innerHTML = '❌ VERWORFEN';
        feedback.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        feedback.style.color = 'white';
    }
    
    document.body.appendChild(feedback);
    setTimeout(() => feedback.remove(), 600);
}

// Drag & Swipe Handler
let startX = 0;
let currentX = 0;
let isDragging = false;

function initSwipeEvents() {
    const swipeCard = document.getElementById('swipeCard');
    if (!swipeCard) return;
    
    // Remove old listeners
    swipeCard.replaceWith(swipeCard.cloneNode(true));
    const newCard = document.getElementById('swipeCard');
    
    // Touch
    newCard.addEventListener('touchstart', e => {
        isDragging = true;
        startX = e.touches[0].clientX;
        newCard.style.transition = 'none';
    });
    
    newCard.addEventListener('touchmove', e => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        const rotation = diff * 0.1;
        newCard.style.transform = `translateX(${diff}px) rotate(${rotation}deg)`;
    });
    
    newCard.addEventListener('touchend', handleDragEnd);
    
    // Mouse
    newCard.addEventListener('mousedown', e => {
        isDragging = true;
        startX = e.clientX;
        newCard.style.transition = 'none';
        e.preventDefault();
    });
    
    newCard.addEventListener('mousemove', e => {
        if (!isDragging) return;
        currentX = e.clientX;
        const diff = currentX - startX;
        const rotation = diff * 0.1;
        newCard.style.transform = `translateX(${diff}px) rotate(${rotation}deg)`;
    });
    
    newCard.addEventListener('mouseup', handleDragEnd);
    newCard.addEventListener('mouseleave', handleDragEnd);
}

function handleDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    
    const diff = currentX - startX;
    const threshold = 75;
    
    if (diff > threshold) {
        swipeRight();
    } else if (diff < -threshold) {
        swipeLeft();
    } else {
        const swipeCard = document.getElementById('swipeCard');
        swipeCard.style.transition = 'transform 0.3s ease';
        swipeCard.style.transform = 'translateX(0) rotate(0)';
    }
}

// Keyboard Support
document.addEventListener('keydown', e => {
    const swipeTab = document.getElementById('swipen');
    if (swipeTab && swipeTab.style.display !== 'none') {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            swipeLeft();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            swipeRight();
        }
    }
});

// Update Saved Properties Display
function updateSavedPropertiesDisplay() {
    const container = document.getElementById('savedPropertiesList');
    if (!container) return;
    
    if (savedProperties.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #64748b;">Noch keine Immobilien gespeichert. Nutze die Swipe-Funktion!</p>';
        return;
    }
    
    container.innerHTML = savedProperties.map(property => {
        const eigenkapital = 100000;
        const calc = calculatePropertyCashflow(property, eigenkapital);
        
        return `
            <div class="saved-property-card" onclick="showPropertyDetails(${property.id})">
                <div class="saved-property-header">
                    <h4>${property.titel}</h4>
                    <button onclick="event.stopPropagation(); removeFromSaved(${property.id})" class="remove-btn">×</button>
                </div>
                <p class="saved-property-location">📍 ${property.stadt}, ${property.stadtteil}</p>
                <div class="saved-property-metrics">
                    <span class="metric-tag cashflow-tag">+${formatCurrency(calc.cashflow)}/Monat</span>
                    <span class="metric-tag">${property.wohnflaeche} m²</span>
                    <span class="metric-tag">${formatCurrency(property.kaufpreis)}</span>
                </div>
            </div>
        `;
    }).join('');
}

// Remove from Saved
function removeFromSaved(propertyId) {
    savedProperties = savedProperties.filter(p => p.id !== propertyId);
    updateSavedPropertiesDisplay();
    updateProfileStats();
}

// Init on load
setTimeout(() => {
    if (document.getElementById('swipeCard')) {
        initSwipeEvents();
    }
}, 500);
// ==================== ENDE SWIPE CLEAN ====================
// ==================== DYNAMISCHES BUDGET & EIGENKAPITAL SYSTEM ====================

// Globale Variablen
let userSettings = {
    eigenkapital: 100000,    // Vom User eingebbar
    monthlyBudget: 500,      // Vom User eingebbar
    currentBudget: 500,      // Verändert sich durch Immobilien
    stadt: 'Berlin'
};

// Lade Settings
function loadUserSettings() {
    const saved = localStorage.getItem('userSettings');
    if (saved) {
        userSettings = JSON.parse(saved);
    }
    // Stelle sicher dass savedProperties existiert
    if (!savedProperties) savedProperties = [];
    
    updateAllDisplays();
}

// Update alle Anzeigen
function updateAllDisplays() {
    // Setze Profil-Werte
    const ekInput = document.getElementById('profileEigenkapital');
    if (ekInput) ekInput.value = userSettings.eigenkapital;
    
    const budgetInput = document.getElementById('profileMonthlyBudget');
    if (budgetInput) budgetInput.value = userSettings.monthlyBudget;
    
    const stadtSelect = document.getElementById('profileStadt');
    if (stadtSelect) stadtSelect.value = userSettings.stadt;
    
    // Update Swipe Budget
    updateSwipeBudgetDisplay();
}

// Update Swipe Budget Display
function updateSwipeBudgetDisplay() {
    const budgetEl = document.getElementById('swipeBudgetAmount');
    if (!budgetEl) return;
    
    budgetEl.textContent = formatCurrency(userSettings.currentBudget);
    
    const box = document.getElementById('swipeBudgetBox');
    if (box) {
        if (userSettings.currentBudget < 0) {
            box.style.background = 'linear-gradient(135deg, #fee2e2, #fecaca)';
            box.style.borderColor = '#ef4444';
            budgetEl.style.color = '#ef4444';
        } else if (userSettings.currentBudget < 200) {
            box.style.background = 'linear-gradient(135deg, #fef3c7, #fed7aa)';
            box.style.borderColor = '#f59e0b';
            budgetEl.style.color = '#f59e0b';
        } else {
            box.style.background = 'linear-gradient(135deg, #d1fae5, #a7f3d0)';
            box.style.borderColor = '#10b981';
            budgetEl.style.color = '#10b981';
        }
    }
}

// Speichere Profil Settings
function saveProfileSettings() {
    const oldEigenkapital = userSettings.eigenkapital;
    
    // Hole neue Werte vom User
    userSettings.eigenkapital = parseFloat(document.getElementById('profileEigenkapital').value) || 100000;
    userSettings.monthlyBudget = parseFloat(document.getElementById('profileMonthlyBudget').value) || 500;
    userSettings.stadt = document.getElementById('profileStadt').value || 'Berlin';
    
    // Wenn Eigenkapital geändert wurde, berechne alles neu
    if (oldEigenkapital !== userSettings.eigenkapital) {
        recalculateAllCashflows();
    }
    
    // Speichere
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
    updateAllDisplays();
    
    alert('✅ Einstellungen gespeichert und Cashflows neu berechnet!');
}

// Berechne alle Cashflows neu bei Eigenkapital-Änderung
function recalculateAllCashflows() {
    // Reset Budget zu Monthly
    userSettings.currentBudget = userSettings.monthlyBudget;
    
    // Berechne jede gespeicherte Immobilie neu
    savedProperties.forEach(property => {
        const newCalc = calculatePropertyCashflow(property, userSettings.eigenkapital);
        property.savedCashflow = newCalc.cashflow;
        
        // Subtrahiere vom Budget (positiver Cashflow erhöht Budget, negativer verringert es)
        userSettings.currentBudget += newCalc.cashflow;
    });
    
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
}

// Überschreibe swipeRight für Immobilien speichern
swipeRight = function() {
    if (!currentSwipeProperty) return;
    
    const swipeCard = document.getElementById('swipeCard');
    if (!swipeCard) return;
    
    // Berechne Cashflow mit aktuellem Eigenkapital
    const calc = calculatePropertyCashflow(currentSwipeProperty, userSettings.eigenkapital);
    
    // Speichere Immobilie
    if (!savedProperties.some(p => p.id === currentSwipeProperty.id)) {
        savedProperties.push({
            ...currentSwipeProperty,
            savedCashflow: calc.cashflow
        });
        
        // Update Budget (positiver Cashflow = mehr Budget, negativer = weniger)
        userSettings.currentBudget += calc.cashflow;
        
        // Speichere Settings
        localStorage.setItem('userSettings', JSON.stringify(userSettings));
        updateSwipeBudgetDisplay();
        updateProfileStats();
    }
    
    // Animation
    swipeCard.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    swipeCard.style.transform = 'translateX(120%) rotate(30deg)';
    swipeCard.style.opacity = '0';
    
    setTimeout(() => {
        currentSwipeIndex++;
        swipeCard.style.transition = 'none';
        swipeCard.style.transform = 'translateX(0) rotate(0)';
        swipeCard.style.opacity = '1';
        loadSwipeCard();
    }, 400);
};

// Zeige gespeicherte Immobilien
function showSavedProperties() {
    const modal = document.getElementById('detailModal');
    if (!modal) return;
    
    modal.innerHTML = `
        <div class="modal-content">
            <button onclick="closeDetailModal()" class="close-modal">×</button>
            <h1 style="color: #1e293b;">💚 Gespeicherte Immobilien</h1>
            <p style="color: #64748b; margin-bottom: 30px;">
                ${savedProperties.length} Immobilien | Budget-Effekt: ${formatCurrency(userSettings.currentBudget - userSettings.monthlyBudget)}
            </p>
            
            ${savedProperties.length === 0 ? 
                '<p style="text-align: center; padding: 60px; color: #94a3b8;">Noch keine Immobilien gespeichert</p>' :
                savedProperties.map((property, index) => `
                    <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 15px;">
                        <div style="display: flex; justify-content: space-between;">
                            <div style="flex: 1; cursor: pointer;" onclick="showPropertyDetails(${property.id})">
                                <h3 style="color: #1e293b;">#${index + 1} ${property.titel}</h3>
                                <p style="color: #64748b;">📍 ${property.stadt}, ${property.stadtteil}</p>
                                <div style="margin-top: 10px;">
                                    <span style="background: ${property.savedCashflow >= 0 ? '#10b981' : '#ef4444'}; 
                                                 color: white; padding: 5px 12px; border-radius: 6px; font-weight: 600;">
                                        Cashflow: ${property.savedCashflow >= 0 ? '+' : ''}${formatCurrency(property.savedCashflow)}/Monat
                                    </span>
                                </div>
                            </div>
                            <button onclick="removeFromSaved(${property.id})" 
                                    style="background: #ef4444; color: white; border: none; 
                                           padding: 10px 20px; border-radius: 8px; cursor: pointer; height: fit-content;">
                                Entfernen
                            </button>
                        </div>
                    </div>
                `).join('')}
        </div>
    `;
    modal.style.display = 'block';
}

// Entferne aus gespeicherten
function removeFromSaved(propertyId) {
    const property = savedProperties.find(p => p.id === propertyId);
    if (property) {
        // Gib Budget zurück (umgekehrte Operation)
        userSettings.currentBudget -= property.savedCashflow;
        
        // Entferne aus Array
        savedProperties = savedProperties.filter(p => p.id !== propertyId);
        
        // Speichere und update
        localStorage.setItem('userSettings', JSON.stringify(userSettings));
        updateSwipeBudgetDisplay();
        updateProfileStats();
        
        // Refresh Modal
        showSavedProperties();
    }
}

// Init beim Laden
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        loadUserSettings();
    }, 100);
});

// ==================== ENDE SYSTEM ====================
// FÜGE DIESE HILFSFUNKTIONEN AM ENDE DER calculator.js DATEI HINZU
// (ganz unten, nach der letzten geschweiften Klammer)

// ==================== BILDERGALERIE NAVIGATION FUNKTIONEN ====================

// Funktion zum Auswählen eines bestimmten Bildes
window.selectImage = function(propertyId, index) {
    if (!window.currentPropertyImages || window.currentPropertyImages.id !== propertyId) return;
    
    const hauptbild = document.getElementById(`hauptbild-${propertyId}`);
    const bildindex = document.getElementById(`bildindex-${propertyId}`);
    
    if (hauptbild) {
        hauptbild.src = window.currentPropertyImages.bilder[index];
        window.currentPropertyImages.currentIndex = index;
    }
    
    if (bildindex) {
        bildindex.textContent = index + 1;
    }
    
    // Update Thumbnails
    window.currentPropertyImages.bilder.forEach((_, i) => {
        const thumb = document.getElementById(`thumb-${propertyId}-${i}`);
        if (thumb) {
            thumb.style.opacity = i === index ? '1' : '0.6';
            thumb.style.border = i === index ? '2px solid #3b82f6' : '2px solid transparent';
        }
    });
};

// Funktion für nächstes Bild
window.nextImage = function(propertyId) {
    if (!window.currentPropertyImages || window.currentPropertyImages.id !== propertyId) return;
    
    const nextIndex = (window.currentPropertyImages.currentIndex + 1) % window.currentPropertyImages.bilder.length;
    selectImage(propertyId, nextIndex);
};

// Funktion für vorheriges Bild
window.previousImage = function(propertyId) {
    if (!window.currentPropertyImages || window.currentPropertyImages.id !== propertyId) return;
    
    const prevIndex = window.currentPropertyImages.currentIndex === 0 
        ? window.currentPropertyImages.bilder.length - 1 
        : window.currentPropertyImages.currentIndex - 1;
    selectImage(propertyId, prevIndex);
};

// Optional: Keyboard Navigation für Galerie
document.addEventListener('keydown', function(e) {
    // Nur wenn Modal offen ist
    const modal = document.getElementById('detailModal');
    if (modal && modal.style.display === 'block' && window.currentPropertyImages) {
        if (e.key === 'ArrowLeft') {
            previousImage(window.currentPropertyImages.id);
        } else if (e.key === 'ArrowRight') {
            nextImage(window.currentPropertyImages.id);
        } else if (e.key === 'Escape') {
            closeDetailModal();
        }
    }
});

// ==================== ENDE BILDERGALERIE FUNKTIONEN ====================


// Load Heat Map - Deutschland Karte mit echten Koordinaten
function loadHeatMap() {
    const container = document.getElementById('heatMapContainer');
    if (!container) return;
    
    container.innerHTML = `
        <style>
            #heatMapContainer {
                width: 100%;
                height: calc(100vh - 60px);
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 20px;
            }
            .hm-header {
                background: white;
                padding: 20px 30px;
                border-radius: 16px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                margin-bottom: 20px;
            }
            .hm-map {
                background: white;
                border-radius: 16px;
                height: calc(100vh - 220px);
                position: relative;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            .hm-svg {
                width: 100%;
                height: 100%;
                cursor: grab;
            }
            .hm-svg.dragging {
                cursor: grabbing;
            }
            .hm-city {
                cursor: pointer;
                transition: all 0.3s;
            }
            .hm-city:hover {
                transform: scale(1.5);
                filter: brightness(1.2) drop-shadow(0 4px 8px rgba(0,0,0,0.3));
            }
            .hm-tooltip {
                position: absolute;
                background: rgba(0,0,0,0.9);
                color: white;
                padding: 10px 15px;
                border-radius: 6px;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s;
                z-index: 1000;
                font-size: 14px;
            }
            .hm-controls {
                position: absolute;
                right: 30px;
                top: 30px;
                display: flex;
                gap: 10px;
                z-index: 100;
            }
            .hm-btn {
                background: white;
                border: 2px solid #e2e8f0;
                width: 40px;
                height: 40px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 20px;
                transition: all 0.3s ease;
            }
            .hm-btn:hover {
                background: #f8fafc;
                border-color: #3b82f6;
                transform: translateY(-2px);
            }
            .hm-legend {
                position: absolute;
                left: 30px;
                top: 30px;
                background: white;
                padding: 15px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .hm-legend-item {
                display: flex;
                align-items: center;
                gap: 8px;
                margin: 5px 0;
                font-size: 14px;
            }
            .hm-legend-color {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: 2px solid white;
                box-shadow: 0 1px 3px rgba(0,0,0,0.2);
            }
        </style>
        
        <div class="hm-header">
            <h2 style="color: #1e293b; margin: 0 0 10px 0; font-size: 28px;"> Deutschland Immobilien Heat Map</h2>
            <p style="color: #64748b; margin: 0;">Interaktive Visualisierung der Lagequalitäten deutscher Städte (A-E)</p>
        </div>
        
        <div class="hm-map">
            <div class="hm-legend">
                <div class="hm-legend-item">
                    <div class="hm-legend-color" style="background: #10b981;"></div>
                    <span><strong>A</strong> - Top-Lage</span>
                </div>
                <div class="hm-legend-item">
                    <div class="hm-legend-color" style="background: #3b82f6;"></div>
                    <span><strong>B</strong> - Sehr gut</span>
                </div>
                <div class="hm-legend-item">
                    <div class="hm-legend-color" style="background: #f59e0b;"></div>
                    <span><strong>C</strong> - Gut</span>
                </div>
                <div class="hm-legend-item">
                    <div class="hm-legend-color" style="background: #fb923c;"></div>
                    <span><strong>D</strong> - Mittel</span>
                </div>
                <div class="hm-legend-item">
                    <div class="hm-legend-color" style="background: #ef4444;"></div>
                    <span><strong>E</strong> - Einfach</span>
                </div>
            </div>
            
            <div class="hm-controls">
                <button class="hm-btn" onclick="hmZoom(1.3)">+</button>
                <button class="hm-btn" onclick="hmZoom(0.77)">−</button>
                <button class="hm-btn" onclick="hmReset()">⟲</button>
            </div>
            
            <svg class="hm-svg" id="germanyMapSvg" viewBox="0 0 1000 1200">
                <!-- Deutschland Umriss - realistischere Form -->
                <path fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" d="
                    M 480 80 L 520 75 L 560 85 L 580 95 L 600 92 L 630 100 L 650 95 L 670 105 L 690 120
                    L 700 140 L 710 165 L 720 190 L 735 210 L 745 235 L 750 260 L 745 285 L 740 310
                    L 735 335 L 740 360 L 745 385 L 750 410 L 755 435 L 760 460 L 765 485 L 770 510
                    L 775 535 L 770 560 L 760 580 L 745 600 L 720 620 L 690 640 L 650 660 L 610 680
                    L 570 700 L 530 720 L 490 740 L 450 750 L 410 760 L 370 770 L 330 775 L 290 770
                    L 260 755 L 230 735 L 210 710 L 195 685 L 185 660 L 180 635 L 175 610 L 170 585
                    L 165 560 L 160 535 L 155 510 L 150 485 L 145 460 L 140 435 L 135 410 L 130 385
                    L 125 360 L 130 335 L 140 310 L 150 285 L 165 265 L 180 245 L 200 225 L 220 210
                    L 245 195 L 270 180 L 295 165 L 320 150 L 345 135 L 370 120 L 395 105 L 420 95
                    L 450 85 Z
                "/>
                
                <!-- Bundesländer Grenzen (vereinfacht) -->
                <g stroke="#e2e8f0" stroke-width="1" fill="none" opacity="0.3">
                    <path d="M 200 300 L 600 300"/>
                    <path d="M 200 450 L 600 450"/>
                    <path d="M 200 600 L 600 600"/>
                    <path d="M 350 200 L 350 700"/>
                    <path d="M 500 200 L 500 700"/>
                </g>
            </svg>
            
            <div class="hm-tooltip" id="hmTooltip"></div>
        </div>
    `;
    
    // Aktualisierte Städte-Datenbank basierend auf Ihrer Liste
    const cities = [
        // A-Städte (Top-Metropolen)
        { name: "Berlin", lat: 52.5200, lon: 13.4050, lage: "A", einwohner: 3700000 },
        { name: "München", lat: 48.1351, lon: 11.5820, lage: "A", einwohner: 1488000 },
        { name: "Hamburg", lat: 53.5511, lon: 9.9937, lage: "A", einwohner: 1900000 },
        { name: "Köln", lat: 50.9375, lon: 6.9603, lage: "A", einwohner: 1090000 },
        { name: "Frankfurt am Main", lat: 50.1109, lon: 8.6821, lage: "A", einwohner: 753000 },
        { name: "Düsseldorf", lat: 51.2277, lon: 6.7735, lage: "A", einwohner: 620000 },
        { name: "Stuttgart", lat: 48.7758, lon: 9.1829, lage: "A", einwohner: 630000 },

        // B-Städte (starke Großstädte)
        { name: "Leipzig", lat: 51.3397, lon: 12.3731, lage: "B", einwohner: 600000 },
        { name: "Nürnberg", lat: 49.4521, lon: 11.0767, lage: "B", einwohner: 520000 },
        { name: "Hannover", lat: 52.3759, lon: 9.7320, lage: "B", einwohner: 540000 },
        { name: "Dresden", lat: 51.0504, lon: 13.7373, lage: "B", einwohner: 560000 },
        { name: "Bremen", lat: 53.0793, lon: 8.8017, lage: "B", einwohner: 570000 },
        { name: "Essen", lat: 51.4556, lon: 7.0116, lage: "B", einwohner: 580000 },
        { name: "Dortmund", lat: 51.5136, lon: 7.4653, lage: "B", einwohner: 590000 },
        { name: "Bonn", lat: 50.7374, lon: 7.0982, lage: "B", einwohner: 330000 },
        { name: "Münster", lat: 51.9607, lon: 7.6261, lage: "B", einwohner: 315000 },
        { name: "Karlsruhe", lat: 49.0069, lon: 8.4037, lage: "B", einwohner: 310000 },
        { name: "Mannheim", lat: 49.4875, lon: 8.4660, lage: "B", einwohner: 310000 },
        { name: "Wiesbaden", lat: 50.0782, lon: 8.2397, lage: "B", einwohner: 280000 },
        { name: "Augsburg", lat: 48.3705, lon: 10.8978, lage: "B", einwohner: 300000 },
        { name: "Freiburg im Breisgau", lat: 47.9990, lon: 7.8421, lage: "B", einwohner: 230000 },
        { name: "Mainz", lat: 49.9929, lon: 8.2473, lage: "B", einwohner: 220000 },
        { name: "Heidelberg", lat: 49.3988, lon: 8.6724, lage: "B", einwohner: 160000 },
        { name: "Regensburg", lat: 49.0134, lon: 12.1016, lage: "B", einwohner: 150000 },
        { name: "Darmstadt", lat: 49.8729, lon: 8.6512, lage: "B", einwohner: 160000 },
        { name: "Ulm", lat: 48.4011, lon: 9.9876, lage: "B", einwohner: 125000 },
        { name: "Würzburg", lat: 49.7913, lon: 9.9534, lage: "B", einwohner: 130000 },
        { name: "Ingolstadt", lat: 48.7665, lon: 11.4257, lage: "B", einwohner: 140000 },
        { name: "Tübingen", lat: 48.5216, lon: 9.0576, lage: "B", einwohner: 90000 },
        { name: "Konstanz", lat: 47.6779, lon: 9.1732, lage: "B", einwohner: 85000 },
        { name: "Ludwigsburg", lat: 48.8940, lon: 9.1955, lage: "B", einwohner: 93000 },
        { name: "Erlangen", lat: 49.5897, lon: 11.0119, lage: "B", einwohner: 115000 },
        { name: "Potsdam", lat: 52.3906, lon: 13.0645, lage: "B", einwohner: 180000 },
        { name: "Oldenburg", lat: 53.1435, lon: 8.2146, lage: "B", einwohner: 170000 },
        { name: "Kiel", lat: 54.3233, lon: 10.1228, lage: "B", einwohner: 250000 },
        { name: "Aachen", lat: 50.7753, lon: 6.0839, lage: "B", einwohner: 250000 },
        { name: "Braunschweig", lat: 52.2689, lon: 10.5268, lage: "B", einwohner: 250000 },
        { name: "Jena", lat: 50.9277, lon: 11.5899, lage: "B", einwohner: 110000 },
        { name: "Siegen", lat: 50.8838, lon: 8.0247, lage: "B", einwohner: 105000 },
        { name: "Koblenz", lat: 50.3569, lon: 7.5890, lage: "B", einwohner: 115000 },
        { name: "Recklinghausen", lat: 51.6140, lon: 7.1979, lage: "B", einwohner: 110000 },
        { name: "Hildesheim", lat: 52.1549, lon: 9.9579, lage: "B", einwohner: 105000 },
        { name: "Göttingen", lat: 51.5413, lon: 9.9158, lage: "B", einwohner: 120000 },
        { name: "Heilbronn", lat: 49.1427, lon: 9.2109, lage: "B", einwohner: 125000 },
        { name: "Pforzheim", lat: 48.8922, lon: 8.6946, lage: "B", einwohner: 125000 },
        { name: "Offenbach am Main", lat: 50.0956, lon: 8.7761, lage: "B", einwohner: 130000 },
        { name: "Fürth", lat: 49.4774, lon: 10.9886, lage: "B", einwohner: 130000 },
        { name: "Paderborn", lat: 51.7189, lon: 8.7544, lage: "B", einwohner: 150000 },
        { name: "Neuss", lat: 51.1987, lon: 6.6850, lage: "B", einwohner: 155000 },
        { name: "Leverkusen", lat: 51.0459, lon: 7.0192, lage: "B", einwohner: 165000 },
        { name: "Osnabrück", lat: 52.2799, lon: 8.0472, lage: "B", einwohner: 165000 },
        { name: "Solingen", lat: 51.1702, lon: 7.0844, lage: "B", einwohner: 160000 },

        // C-Städte (durchschnittliche Städte)
        { name: "Bochum", lat: 51.4818, lon: 7.2162, lage: "C", einwohner: 365000 },
        { name: "Duisburg", lat: 51.4344, lon: 6.7623, lage: "C", einwohner: 500000 },
        { name: "Wuppertal", lat: 51.2562, lon: 7.1508, lage: "C", einwohner: 355000 },
        { name: "Bielefeld", lat: 52.0302, lon: 8.5325, lage: "C", einwohner: 335000 },
        { name: "Mönchengladbach", lat: 51.1805, lon: 6.4428, lage: "C", einwohner: 260000 },
        { name: "Krefeld", lat: 51.3388, lon: 6.5853, lage: "C", einwohner: 230000 },
        { name: "Halle (Saale)", lat: 51.4828, lon: 11.9705, lage: "C", einwohner: 240000 },
        { name: "Magdeburg", lat: 52.1205, lon: 11.6276, lage: "C", einwohner: 240000 },
        { name: "Lübeck", lat: 53.8655, lon: 10.6866, lage: "C", einwohner: 220000 },
        { name: "Kassel", lat: 51.3127, lon: 9.4797, lage: "C", einwohner: 200000 },
        { name: "Saarbrücken", lat: 49.2402, lon: 6.9969, lage: "C", einwohner: 180000 },
        { name: "Hamm", lat: 51.6804, lon: 7.8208, lage: "C", einwohner: 180000 },
        { name: "Herne", lat: 51.5369, lon: 7.2009, lage: "C", einwohner: 155000 },
        { name: "Mülheim an der Ruhr", lat: 51.4272, lon: 6.8838, lage: "C", einwohner: 170000 },
        { name: "Rostock", lat: 54.0924, lon: 12.0991, lage: "C", einwohner: 210000 },
        { name: "Oberhausen", lat: 51.4696, lon: 6.8514, lage: "C", einwohner: 210000 },
        { name: "Bremerhaven", lat: 53.5396, lon: 8.5809, lage: "C", einwohner: 115000 },
        { name: "Remscheid", lat: 51.1790, lon: 7.1894, lage: "C", einwohner: 110000 },
        { name: "Bergisch Gladbach", lat: 50.9856, lon: 7.1276, lage: "C", einwohner: 110000 },
        { name: "Trier", lat: 49.7490, lon: 6.6371, lage: "C", einwohner: 110000 },
        { name: "Salzgitter", lat: 52.1520, lon: 10.3326, lage: "C", einwohner: 105000 },
        { name: "Moers", lat: 51.4516, lon: 6.6408, lage: "C", einwohner: 105000 },
        { name: "Gütersloh", lat: 51.9032, lon: 8.3858, lage: "C", einwohner: 100000 },
        { name: "Cottbus", lat: 51.7606, lon: 14.3342, lage: "C", einwohner: 100000 },
        { name: "Gera", lat: 50.8779, lon: 12.0833, lage: "C", einwohner: 95000 },
        { name: "Zwickau", lat: 50.7180, lon: 12.4921, lage: "C", einwohner: 90000 },
        { name: "Villingen-Schwenningen", lat: 48.0585, lon: 8.4507, lage: "C", einwohner: 85000 },
        { name: "Ratingen", lat: 51.2973, lon: 6.8489, lage: "C", einwohner: 90000 },
        { name: "Gießen", lat: 50.5840, lon: 8.6784, lage: "C", einwohner: 90000 },
        { name: "Worms", lat: 49.6327, lon: 8.3653, lage: "C", einwohner: 85000 },
        { name: "Lünen", lat: 51.6189, lon: 7.5287, lage: "C", einwohner: 85000 },
        { name: "Minden", lat: 52.2833, lon: 8.9167, lage: "C", einwohner: 85000 },
        { name: "Norderstedt", lat: 53.6964, lon: 9.9820, lage: "C", einwohner: 80000 },
        { name: "Velbert", lat: 51.3419, lon: 7.0435, lage: "C", einwohner: 80000 },
        { name: "Delmenhorst", lat: 53.0522, lon: 8.6296, lage: "C", einwohner: 75000 },
        { name: "Neumünster", lat: 54.0729, lon: 9.9840, lage: "C", einwohner: 80000 },
        { name: "Viersen", lat: 51.2564, lon: 6.3906, lage: "C", einwohner: 75000 },
        { name: "Rheine", lat: 52.2799, lon: 7.4329, lage: "C", einwohner: 75000 },
        { name: "Bamberg", lat: 49.8988, lon: 10.8918, lage: "C", einwohner: 75000 },
        { name: "Troisdorf", lat: 50.8163, lon: 7.1556, lage: "C", einwohner: 75000 },
        { name: "Gladbeck", lat: 51.5706, lon: 6.9851, lage: "C", einwohner: 75000 },
        { name: "Dessau-Roßlau", lat: 51.8309, lon: 12.2286, lage: "C", einwohner: 85000 },
        { name: "Flensburg", lat: 54.7937, lon: 9.4469, lage: "C", einwohner: 90000 },
        { name: "Wilhelmshaven", lat: 53.5221, lon: 8.1075, lage: "C", einwohner: 75000 },

        // D-Städte (problematische Märkte)
        { name: "Gelsenkirchen", lat: 51.5177, lon: 7.0857, lage: "D", einwohner: 260000 },
        { name: "Ludwigshafen am Rhein", lat: 49.4741, lon: 8.4329, lage: "D", einwohner: 170000 },
        { name: "Bottrop", lat: 51.5235, lon: 6.9293, lage: "D", einwohner: 115000 }
        
        
    ];
    
    const colors = {
        'A': '#10b981',
        'B': '#3b82f6', 
        'C': '#f59e0b',
        'D': '#fb923c',
        'E': '#ef4444'
    };
    
    // Städte zur Karte hinzufügen
    const svg = document.getElementById('germanyMapSvg');
    cities.forEach(city => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', city.x);
        circle.setAttribute('cy', city.y);
        circle.setAttribute('r', city.lage === 'A' ? 8 : 6);
        circle.setAttribute('fill', colors[city.lage]);
        circle.setAttribute('stroke', 'white');
        circle.setAttribute('stroke-width', '2');
        circle.classList.add('hm-city');
        
        circle.addEventListener('mouseenter', (e) => {
            const tooltip = document.getElementById('hmTooltip');
            tooltip.innerHTML = '<strong>' + city.name + '</strong><br>Lage ' + city.lage + '<br>' + city.einwohner.toLocaleString('de-DE') + ' Einwohner';
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY - 30 + 'px';
            tooltip.style.opacity = '1';
        });
        
        circle.addEventListener('mouseleave', () => {
            document.getElementById('hmTooltip').style.opacity = '0';
        });
        
        svg.appendChild(circle);
    });
}

// Zoom Funktionen
let hmScale = 1;
let hmTranslateX = 0;
let hmTranslateY = 0;

function hmZoom(factor) {
    hmScale *= factor;
    hmScale = Math.max(0.5, Math.min(hmScale, 3));
    updateHmTransform();
}

function hmReset() {
    hmScale = 1;
    hmTranslateX = 0;
    hmTranslateY = 0;
    updateHmTransform();
}

function updateHmTransform() {
    const svg = document.getElementById('germanyMapSvg');
    if (svg) {
        svg.style.transform = 'scale(' + hmScale + ') translate(' + hmTranslateX + 'px, ' + hmTranslateY + 'px)';
    }
}
});
