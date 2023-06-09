var ADB_PROJECT_DATA = '';

var config = {
	mapping: [
		{
			country: "Regional",
			code: "regional",
		},
		{
			country: "Afghanistan",
			code: "afghanistan",
		},
		{
			country: "Armenia",
			code: "armenia",
		},
		{
			country: "Azerbaijan",
			code: "azerbaijan",
		},
		{
			country: "Bangladesh",
			code: "bangladesh",
		},
		{
			country: "Bhutan",
			code: "bhutan",
		},
		{
			country: "Cambodia",
			code: "cambodia",
		},
		{
			country: "Cook Islands",
			code: "cook-islands",
		},
		{
			country: "Federated States of Micronesia",
			code: "micronesia-federated-states",
		},
		{
			country: "Fiji",
			code: "fiji",
		},
		{
			country: "Georgia",
			code: "georgia",
		},
		{
			country: "India",
			code: "india",
		},
		{
			country: "Indonesia",
			code: "indonesia",
		},
		{
			country: "Kazakhstan",
			code: "kazakhstan",
		},
		{
			country: "Kiribati",
			code: "kiribati",
		},
		{
			country: "Kyrgyz Republic",
			code: "kyrgyz-republic",
		},
		{
			country: "Lao People’s Democratic Republic",
			code: "lao-peoples-democratic-republic",
		},
		{
			country: "Maldives",
			code: "maldives",
		},
		{
			country: "Marshall Islands",
			code: "marshall-islands",
		},
		{
			country: "Mongolia",
			code: "mongolia",
		},
		{
			country: "Myanmar",
			code: "myanmar",
		},
		{
			country: "Nauru",
			code: "nauru",
		},
		{
			country: "Nepal",
			code: "nepal",
		},
		{
			country: "Niue",
			code: "niue",
		},
		{
			country: "Pakistan",
			code: "pakistan",
		},
		{
			country: "Palau",
			code: "palau",
		},
		{
			country: "Papua New Guinea",
			code: "papua-new-guinea",
		},
		{
			country: "People’s Republic of China",
			code: "china-peoples-republic",
		},
		{
			country: "Philippines",
			code: "philippines",
		},
		{
			country: "Samoa",
			code: "samoa",
		},
		{
			country: "Solomon Islands",
			code: "solomon-islands",
		},
		{
			country: "Sri Lanka",
			code: "sri-lanka",
		},
		{
			country: "Tajikistan",
			code: "tajikistan",
		},
		{
			country: "Thailand",
			code: "thailand",
		},
		{
			country: "Timor-Leste",
			code: "timor-leste",
		},
		{
			country: "Tonga",
			code: "tonga",
		},
		{
			country: "Turkmenistan",
			code: "turkmenistan",
		},
		{
			country: "Tuvalu",
			code: "tuvalu",
		},
		{
			country: "Uzbekistan",
			code: "uzbekistan",
		},
		{
			country: "Vanuatu",
			code: "vanuatu",
		},
		{
			country: "Viet Nam",
			code: "viet-nam",
		},

		{
			sector: "Agriculture, Natural Resources and Rural Development",
			code: "agriculture-natural-resources-and-rural-development-1057",
		},
		{
			sector: "Education",
			code: "education-1058",
		},
		{
			sector: "Energy",
			code: "energy-1059",
		},
		{
			sector: "Finance",
			code: "finance-1060",
		},
		{
			sector: "Health",
			code: "health-1061",
		},
		{
			sector: "Industry and trade",
			code: "industry-and-trade-1062",
		},
		{
			sector: "Information and Communication Technology",
			code: "information-and-communication-technology-1066",
		},
		{
			sector: "Multisector",
			code: "multisector-1067",
		},
		{
			sector: "Public Sector Management",
			code: "public-sector-management-1063",
		},
		{
			sector: "Transport",
			code: "transport-1064",
		},
		{
			sector: "Water and Other Urban Infrastructure and Services",
			code: "water-and-other-urban-infrastructure-and-services-1065",
		},
		{
			theme: "Environmentally sustainable growth",
			code: "environmentally-sustainable-growth-1666",
		},
		{
			theme: "Governance and capacity development",
			code: "governance-and-capacity-development-1646",
		},
		{
			theme: "Inclusive economic growth",
			code: "inclusive-economic-growth-1676",
		},
		{
			theme: "Partnerships",
			code: "partnerships-1661",
		},
		{
			theme: "Private sector development",
			code: "private-sector-development-1641",
		},
		{
			theme: "Regional integration",
			code: "regional-integration-1671",
		},
	],
};

var colors_sector = {
    'Agriculture, Natural Resources and Rural Development': '#a6cee3',
    'Education': '#1f78b4',
    'Energy': '#b2df8a',
    'Finance': '#33a02c',
    'Health': '#fb9a99',
    'Industry and trade': '#e31a1c',
    'Information and Communication Technology': '#fdbf6f',
    'Multisector': '#ff7f00',
    'Public Sector Management': '#6a3d9a',
    'Transport': '#cab2d6',
    'Water and Other Urban Infrastructure and Services': '#ffff99'
}

var map = new maplibregl.Map({
    container: 'pe_map',
    // style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    // style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
    style: {
        'version': 8,
        "glyphs": "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
        'sources': {
            'raster-tiles': {
                'type': 'raster',
                'tiles': [
                    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                ],
            'tileSize': 256,
            'attribution':
            'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            }
        },
        'layers': [
            {
            'id': 'simple-tiles',
            'type': 'raster',
            'source': 'raster-tiles',
            'minzoom': 0,
            'maxzoom': 22
            }
        ]
    },
    center: [121.8733, 13.5221], // starting position [lng, lat]
    zoom: 3 // starting zoom
});

map.addControl(
    new maplibregl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
    },
        trackUserLocation: true
        })
    );

map.addControl(new maplibregl.NavigationControl());

map.on('load', () => {
    map.addSource('pe-data', {
        'type': 'geojson',
        'data': ADB_PROJECT_DATA,
    });

    map.addSource('pe-data-cluster', {
        'type': 'geojson',
        'data': ADB_PROJECT_DATA',
        'cluster': true,
        'clusterMaxZoom': 14, // Max zoom to cluster points on
        'clusterRadius': 40 // Radius of each cluster when clustering points (defaults to 50)
    });

    // Individual Points
    // map.addLayer({
    //     'id': 'pe-data-points',
    //     'type': 'circle',
    //     'source': 'pe-data',
    //     'layout': {},
    //     'paint': {
    //         'circle-radius': 6,
    //         'circle-color': [
    //             'match',
    //             ['get', 'SECTOR'],
    //             'Agriculture, Natural Resources and Rural Development' , colors_sector['Agriculture, Natural Resources and Rural Development'],
    //             'Education' , colors_sector['Education'],
    //             'Energy' , colors_sector['Energy'],
    //             'Finance' , colors_sector['Finance'],
    //             'Health', colors_sector['Health'],
    //             'Industry and trade', colors_sector['Industry and trade'],
    //             'Information and Communication Technology', colors_sector['Information and Communication Technology'],
    //             'Multisector', colors_sector['Multisector'],
    //             'Public Sector Management', colors_sector['Public Sector Management'],
    //             'Transport', colors_sector['Transport'],
    //             'Water and Other Urban Infrastructure and Services', colors_sector['Water and Other Urban Infrastructure and Services'],
    //             'black'
    //         ],
    //     }
    // });

    // Clustered Points
    map.addLayer({
        'id': 'pe-data-clusters',
        'type': 'circle',
        'source': 'pe-data-cluster',
        'filter': ['has', 'point_count'],
        'paint': {
            'circle-radius': [
                'step',
                ['get', 'point_count'],
                15, 10,
                25, 30,
                35, 50,
                45, 70,
                60
            ],
            'circle-color':[
                'step',
                ['get', 'point_count'],
                '#ffffcc', 10,
                '#a1dab4', 30,
                '#41b6c4', 50,
                '#2c7fb8', 70,
                '#253494'
            ],
            'circle-opacity': 0.8,
            'circle-stroke-color': '#000',
            'circle-stroke-width': 0.5
        }
    });

    map.addLayer({
        'id': 'cluster-count',
        'type': 'symbol',
        'source': 'pe-data-cluster',
        'filter': ['has', 'point_count'],
        'layout': {
            'text-field': '{point_count_abbreviated}',
            'text-size': 12,
         }
    });

    map.addLayer({
        'id': 'pe-data-unclustered',
        'type': 'circle',
        'source': 'pe-data-cluster',
        'filter': ['!', ['has', 'point_count']],
        'paint': {
            'circle-color': '#11b4da',
            'circle-radius': 4,
            'circle-stroke-width': 0.5,
            'circle-stroke-color': '#fff'
        }
    });

})
