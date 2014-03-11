// Inspired by Google Map Maker
// http://mapmaker.donkeymagic.co.uk
var map
    openInfowindow = null
    newPoints = [];

function initialize () {
    var mapOptions = {
        center: new google.maps.LatLng(32.07763, 34.808246000000054),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false
    };
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    
    // Draw points
    for (var i = 0; i < Points.length; i++) {
        addPoints(Points[i]);
    }
}

function addPoints (pointsContainer) {
    points = pointsContainer.points;
    for (var i = 0; i < points.length; i++) {
        var position = new google.maps.LatLng(points[i][0], points[i][1]);
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: pointsContainer.icon
        });
        pointsContainer.markers.push(marker);
        createMarker(marker, i, points);
    }
}

function createMarker (marker, i, points) {
    var infowindow = new google.maps.InfoWindow({
        content: '<div class="popup">' + points[i][3] + '</div>',
    });
    google.maps.event.addListener(marker, 'click', function () {
        if (openInfowindow) {
            openInfowindow.close();
        }
        infowindow.open(marker.getMap('map_canvas'), marker);
        openInfowindow = infowindow;
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

// Aux functions (findMarkersByName, showMarkers, hideMarkers)
function findMarkersByName(name) {
    for (var i = 0; i < Points.length; i++) {
        if (Points[i].name == name) return Points[i].markers;
    }
}

function showMarkers(markers) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function hideMarkers(markers) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}

// Points
Points = [
    {
        'name': 'suduch',
        'repr': 'Suduch',
        'icon': 'images/Suduch Icon.png',
        'markers': [],
        'points': [
            [32.068083, 34.787196,  'Suduch HaMasger',          'Suduch HaMasger'       ],
            [32.071375, 34.782304,  'Suduch Karlibach',         'Suduch Karlibach'      ],
            [32.109296, 34.826592,  'Suduch Afeka',             'Suduch Afeka'          ],
            [32.082702, 34.768764,  'Suduch HaYarkon',          'Suduch HaYarkon'       ],
            [32.068538, 34.802646,  'Suduch HaShalom Givataim', 'Suduch HaShalom Givataim'],
            [32.02305,  34.77563,   'Suduch Hulon',             'Suduch Hulon Sokolov'  ],
            [32.089392, 34.886738,  'Suduch Petach Tikva',      'Suduch Petach Tikva'   ],
            [31.988605, 34.773571,  'Suduch Rishon LeTsion',    'Suduch Rishon LeTsion' ],
            [32.156431, 34.894613,  'Suduch Ramat HaSharon',    'Suduch Ramat HaSharon' ],
            [31.97763,  34.808246,  'Suduch Rishon LeTsion',    'Suduch Rishon LeTsion' ],
            [32.276538, 34.859698,  'Suduch Netanya',           'Suduch Netanya'        ],
            [32.021667, 34.860453,  'Suduch Or Yehuda',         'Suduch Or Yehuda'      ],
            [32.803544, 34.986516,  'Suduch Haifa',             'Suduch Haifa'          ]
        ]
    },
    {
        'name': 'burger ranch',
        'repr': 'Burger Ranch',
        'icon': 'images/Burger Ranch Icon.png',
        'markers': [],
        'points': [
            [32.046861, 34.908389, 'Burger Ranch Beerot Itzh', 'Burger Ranch Beerot Itzhak Mall'],
            [32.090792, 34.822043, 'Burger Ranch Bnei Brak', 'Burger Ranch Bnei Brak'],
            [32.074811, 34.843544, 'Burger Ranch Coca Cola J', 'Burger Ranch Bnei Brak Coca Cola Junction'],
            [32.082538, 34.937504, 'Burger Ranch Einat', 'Burger Ranch Einat'],
            [32.114803, 34.82552, 'Burger Ranch TA Pinchas', 'Burger Ranch Tel Aviv Pinchas Rozen'],
            [32.069956, 34.770717, 'Burger Ranch TA Alenbi', 'Burger Ranch Tel Aviv Alenbi'],
            [32.073716, 34.765564, 'Burger Ranch TA Opera To', 'Burger Ranch Tel Aviv Opera Tower'],
            [32.075084, 34.790629, 'Burger Ranch TA Azrieli', 'Burger Ranch Tel Aviv Azrieli'],
            [32.112859, 34.794985, 'Burger Ranch TA Ramat Av', 'Burger Ranch Tel Aviv Ramat Aviv'],
            [32.084538, 34.796606, 'Burger Ranch TA Savidor', 'Burger Ranch Tel Aviv Savidor Train Station'],
            [32.072229, 34.828867, 'Burger Ranch RG Marom Na', 'Burger Ranch Ramat Gan Marom Nave'],
            [31.975464, 34.774386, 'Burger Ranch RL Be&#39;er Ma', 'Burger Ranch Rishon LeTsion Be&#39;er Mall'],
            [31.990079, 34.765288, 'Burger Ranch RL Lishinsk', 'Burger Ranch Rishon LeTsion Lishinsky'],
            [31.990752, 34.773689, 'Burger Ranch RL Zahav Ma', 'Burger Ranch Rishon LeTsion Zahav Mall'],
            [31.964014, 34.801165, 'Burger Ranch RL Rothsch', 'Burger Ranch Rishon LeTsion Rothschild'],
            [32.077738, 34.922698, 'Burger Ranch PT Sirkin', 'Burger Ranch Petach Tikva Sirkin'],
            [32.093464, 34.866654, 'Burger Ranch PT Big Mall', 'Burger Ranch Petach Tikva Big Mall'],
            [32.011879, 34.781488, 'Burger Ranch Hulon Mall', 'Burger Ranch Hulon Big Mall'],
            [32.02254, 34.785394, 'Burger Ranch Hulon Sokol', 'Burger Ranch Hulon Sokolov'],
            [32.066974, 34.808715, 'Burger Ranch Givataim', 'Burger Ranch Givataim'],
            [32.197513, 34.879486, 'Burger Ranch Raanana Ren', 'Burger Ranch Raanana Renanim Mall'],
            [32.164242, 34.825066, 'Burger Ranch Herzeliya 7', 'Burger Ranch Herzeliya 7 Star Mall'],
            [32.162589, 34.841935, 'Burger Ranch Herzeliya G', 'Burger Ranch Herzeliya Shaar HaIr'],
            [32.13343, 34.900342, 'Burger Ranch Hod HaSharo', 'Burger Ranch Hod HaSharon Sharonim Mall'],
            [32.276629, 34.859787, 'Burger Ranch Netanya', 'Burger Ranch Netanya Poleg'],
            [32.262096, 34.901866, 'Burger Ranch Bnei Dror', 'Burger Ranch Bnei Dror'],
            [31.894265, 34.80713, 'Burger Ranch Rehovot Mal', 'Burger Ranch Rehovot Mall'],
            [31.889109, 34.963854, 'Burger Ranch Modiin Ishp', 'Burger Ranch Modiin Ishparu'],
            [31.989915, 34.907034, 'Burger Ranch Airport Cit', 'Burger Ranch Airport City']
        ]
    },
    {
        'name': 'mcdonalds',
        'repr': 'McDonalds',
        'icon': 'images/McDonalds Icon.png',
        'markers': [],
        'points': [
            [32.113913, 34.803504, 'McDonalds TA University', 'McDonalds TA University'],
            [32.080538, 34.788763, 'McDonalds Ichilov Hsptl', 'McDonalds TA Ichilov Hospital'],
            [32.075884, 34.774944, 'McDonalds Dizengoff Ctr', 'McDonalds TA Dizengoff Center'],
            [32.061955, 34.791938, 'McDonalds Nokia Hall', 'McDonalds TA Nokia Hall'],
            [32.055027, 34.759687, 'McDonalds Yaffo', 'McDonalds TA Yaffo'],
            [32.077884, 34.767326, 'McDonalds TA Boardwalk', 'McDonalds Tel Aviv Boardwalk'],
            [32.07532, 34.781832, 'McDonalds TA Even Gvirol', 'McDonalds TA Even Gvirol'],
            [32.074811, 34.797796, 'McDonalds TA Towers', 'McDonalds TA Towers'],
            [32.12329, 34.816654, 'McDonalds TA Mikdao Cent', 'McDonalds TA Mikado Center'],
            [32.066165, 34.777853, 'McDonalds TA Hanger 17', 'McDonalds TA Hanger 17'],
            [32.112913, 34.794685, 'McDonalds TA Aviv Mall', 'McDonalds TA Aviv Mall'],
            [32.07442, 34.791094, 'McDonalds TA Azrieli', 'McDonalds TA Azrieli'],
            [32.06376, 34.77344, 'McDonalds TA Rothschild', 'McDonalds TA Rothschild'],
            [32.11016, 34.841322, 'McDonalds TA Ramat HaHay', 'McDonalds TA Ramat HaChayal'],
            [32.124671, 34.803593, 'McDonalds TA Ramat Aviv', 'McDonalds TA Ramat Aviv Gimel'],
            [32.056475, 34.780297, 'McDonalds TA Central Sta', 'McDonalds TA Central Bus Station'],
            [32.100308, 34.826746, 'McDonalds RG Ayalon Mall', 'McDonalds Ramat Gan Ayalon Mall'],
            [32.086233, 34.811449, 'McDonalds RG Elram', 'McDonalds Ramat Gan Elram'],
            [32.084783, 34.803003, 'McDonalds RG Stock Exch', 'McDonalds Ramat Gan Stock Exchang District'],
            [32.100086, 34.827268, 'McDonalds RG Ayalon Mall', 'McDonalds Ramat Gan Ayalon Mall 2'],
            [31.964176, 34.804738, 'McDonalds RL Rothschild', 'McDonalds Rishon LeTsion Rothschild'],
            [31.970381, 34.772463, 'McDonalds RL Mngmt Collg', 'McDonalds Rishon LeTsion Management College'],
            [31.976622, 34.808499, 'McDonalds RL Sonol Gas S', 'McDonalds Rishon LeTsion Sonol Gas Stop'],
            [31.983372, 34.771173, 'McDonalds RL Cinema G', 'McDonalds Rishon LeTsion Cinema G'],
            [31.975409, 34.774403, 'McDonalds RL Be&#39;er Mall', 'McDonalds Rishon LeTsion Be&#39;er Mall'],
            [31.989607, 34.774484, 'McDonalds RL Zahav Mall', 'McDonalds Rishon LeTsion Zahav Mall'],
            [31.97621, 34.784278, 'McDonalds RL Rishon Gate', 'McDonalds Rishon LeTsion Rishon Gate'],
            [32.094546, 34.97254, 'McDonalds Rosh HaAyin', 'McDonalds Rosh HaAyin'],
            [32.055043, 34.862379, 'McDonalds Kiryat Ono 1', 'McDonalds Kiryat Ono 1'],
            [32.048879, 34.84749, 'McDonalds Kiryat Ono 2', 'McDonalds Kiryat Ono 2 Tel HaShomer'],
            [32.092305, 34.864839, 'McDonalds PT M Express', 'McDonalds Petach Tikva M Express'],
            [32.099699, 34.876099, 'McDonalds PT Em HaMoshav', 'McDonalds Petach Tikva Em HaMoshavot'],
            [32.089238, 34.86744, 'McDonalds PT Beilinson', 'McDonalds Petach Tikva Beilinson Hospital'],
            [32.091787, 34.857227, 'McDonalds PT HaSivim', 'McDonalds Petach Tikva HaSivim'],
            [32.074675, 34.869495, 'McDonalds PT Kfar Ganim', 'McDonalds Petach Tikva Kfar Ganim'],
            [32.075997, 34.885543, 'McDonalds PT Rothschild', 'McDonalds Petach Tikva Rothschild'],
            [32.092317, 34.864828, 'McDonalds PT Avnet Mall', 'McDonalds Petach Tikva Avnet Mall'],
            [32.035838, 34.762293, 'McDonalds Hulon Wolfson', 'McDonalds Hulon Wolfson Hospital'],
            [32.002726, 34.772072, 'McDonalds Hulon Rabin', 'McDonalds Hulon Rabin'],
            [32.066629, 34.809926, 'McDonalds Givataim Mall', 'McDonalds Givataim Mall'],
            [32.07589, 34.85525, 'McDonalds Givat Shmuel', 'McDonalds Givat Shmuel'],
            [32.015756, 34.75619, 'McDonalds Bat-Yam Mall', 'McDonalds Bat-Yam Mall'],
            [32.025799, 34.858039, 'McDonalds Or Yehuda 1', 'McDonalds Or Yehuda 1'],
            [32.031345, 34.85522, 'McDonalds Or Yehuda 2', 'McDonalds Or Yehuda 2'],
            [32.170979, 34.926476, 'McDonalds KS G2', 'McDonalds Kfar Saba G2'],
            [32.170645, 34.927698, 'McDonalds KS G', 'McDonalds Kfar Saba G'],
            [32.181162, 34.896903, 'McDonalds KS Meir Hospit', 'McDonalds Kfar Saba Meir Hospital'],
            [32.178205, 34.903725, 'McDonalds KS Arim Mall', 'McDonalds Kfar Saba Arim Mall'],
            [32.321556, 34.926401, 'McDonalds Kfar Yona', 'McDonalds Kfar Yona'],
            [32.138738, 34.818278, 'McDonalds Glilot', 'McDonalds Glilot Junction'],
            [32.164347, 34.823106, 'McDonalds Herzeliya 7Sta', 'McDonalds Herzeliya 7 Star Mall'],
            [32.161127, 34.810449, 'McDonalds Herzeliya HaGa', 'McDonalds Herzeliya HaGalim'],
            [32.161953, 34.796244, 'McDonalds Herzeliya Mari', 'McDonalds Herzeliya Marina'],
            [32.147348, 34.839178, 'McDonalds Ramat HaSharon', 'McDonalds Ramat HaSharon'],
            [32.184035, 34.853391, 'McDonalds Raanana Mul Ha', 'McDonalds Raanana Mul HaPark'],
            [32.197332, 34.879752, 'McDonalds Raanana Renani', 'McDonalds Raanana Renanim Mall'],
            [32.216005, 34.8221, 'McDonalds Shfayim', 'McDonalds Shfayim'],
            [32.253132, 34.918172, 'McDonalds Tel Mond', 'McDonalds Tel Mond'],
            [32.276496, 34.860941, 'McDonalds Netanya Big Po', 'McDonalds Netanya Big Center Poleg'],
            [32.327131, 34.857945, 'McDonalds Netanya Egged', 'McDonalds Netanya Egged Central Bus Station'],
            [32.278715, 34.847034, 'McDonalds Netanya Ir Yam', 'McDonalds Netanya Ir Yamim Poleg'],
            [32.305996, 34.868785, 'McDonalds Netanya Kiryat', 'McDonalds Netanya Kiryat HaSharon'],
            [32.275286, 34.844411, 'McDonalds Netanya Poleg', 'McDonalds Netanya Poleg'],
            [32.143419, 34.892512, 'McDonalds Hod HaSharon', 'McDonalds Hod HaSharon Margaliot HaSharon Mall'],
            [32.133362, 34.900841, 'McDonalds Hod HaSharon', 'McDonalds Hod HaSharon HaSharonim Mall'],
            [31.893582, 34.807777, 'McDonalds Rehovot Egged', 'McDonalds Rehovot Egged Central Bus Station'],
            [31.880314, 34.811766, 'McDonalds Rehovot Ezorim', 'McDonalds Rehovot Ezorim'],
            [31.863373, 34.816192, 'McDonalds Rehovot Billu ', 'McDonalds Rehovot Billu Center'],
            [31.909496, 34.805366, 'McDonalds Rehovot Weisma', 'McDonalds Rehovot Weisman Center'],
            [31.89237, 34.805752, 'McDonalds Rehovot Billu ', 'McDonalds Rehovot Billu Center 2'],
            [31.889918, 34.962144, 'McDonalds Modiin Ishparu', 'McDonalds Modiin Ishparu'],
            [31.899166, 35.008259, 'McDonalds Modiin Lev HaI', 'McDonalds Modiin Lev HaIr Mall'],
            [31.99885, 34.946609, 'McDonalds Shoham', 'McDonalds Shoham']
        ]
    }
];