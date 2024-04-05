
function getCategories(data) {
    const uniqueValues = new Set();
    data.forEach(function(place) {
        place.types.forEach(function(value) {
            uniqueValues.add(value);
        });
    });
    uniqueValues.delete('establishment');
    uniqueValues.delete('point_of_interest');

    return Array.from(uniqueValues);
}


const data = [
    {
        "geometry": {
            "location": {
                "lat": 48.2924827,
                "lng": 25.9356008
            },
            "viewport": {
                "south": 48.24387398430203,
                "west": 25.83222407046282,
                "north": 48.3988219972998,
                "east": 26.03561290223145
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "Чернівці",
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116598696361482293942\">Halyna Tkach</a>"
                ],
                "width": 2268
            }
        ],
        "place_id": "ChIJBc324n8INEcRem15WfaWs8U",
        "reference": "ChIJBc324n8INEcRem15WfaWs8U",
        "scope": "GOOGLE",
        "types": [
            "locality",
            "political"
        ],
        "vicinity": "Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2773857,
                "lng": 25.9436684
            },
            "viewport": {
                "south": 48.2760635697085,
                "west": 25.9422282197085,
                "north": 48.2787615302915,
                "east": 25.94492618029151
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Готель \"Буковина\"",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 398,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117901196952320189859\">Готель &quot;Буковина&quot;</a>"
                ],
                "width": 531
            }
        ],
        "place_id": "ChIJs00dEMcINEcRFmAQPescuak",
        "plus_code": {
            "compound_code": "7WGV+XF Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WGV+XF"
        },
        "rating": 4.3,
        "reference": "ChIJs00dEMcINEcRFmAQPescuak",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 2375,
        "vicinity": "Головна вулиця, 141, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.29675899999999,
                "lng": 25.9336728
            },
            "viewport": {
                "south": 48.2953936197085,
                "west": 25.9322326197085,
                "north": 48.2980915802915,
                "east": 25.9349305802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Магнат",
        "photos": [
            {
                "height": 829,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102935962938464601679\">vasya vasya</a>"
                ],
                "width": 1474
            }
        ],
        "place_id": "ChIJjfaHTOwINEcRJKj42up9nbE",
        "plus_code": {
            "compound_code": "7WWM+PF Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WWM+PF"
        },
        "rating": 3.7,
        "reference": "ChIJjfaHTOwINEcRJKj42up9nbE",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 239,
        "vicinity": "вулиця Толстого, 16, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.26041679999999,
                "lng": 25.9466895
            },
            "viewport": {
                "south": 48.2591558197085,
                "west": 25.9452828197085,
                "north": 48.2618537802915,
                "east": 25.9479807802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "City Club European",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103182724492058140168\">Bohdan Patsai</a>"
                ],
                "width": 4160
            }
        ],
        "place_id": "ChIJRZbj9SwPNEcRQd3xba8Mh3Y",
        "plus_code": {
            "compound_code": "7W6W+5M Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77W6W+5M"
        },
        "rating": 4.4,
        "reference": "ChIJRZbj9SwPNEcRQd3xba8Mh3Y",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 489,
        "vicinity": "вулиця Івасюка, 4, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.3280475,
                "lng": 25.9081007
            },
            "viewport": {
                "south": 48.3268232697085,
                "west": 25.9065794697085,
                "north": 48.3295212302915,
                "east": 25.9092774302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Дворік",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 480,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107934805634089444951\">Дворик</a>"
                ],
                "width": 640
            }
        ],
        "place_id": "ChIJ89ad_boHNEcRULSOb4Db7BA",
        "plus_code": {
            "compound_code": "8WH5+66 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW78WH5+66"
        },
        "rating": 3.8,
        "reference": "ChIJ89ad_boHNEcRULSOb4Db7BA",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 446,
        "vicinity": "вулиця Коломийська, 9г, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.28232310000001,
                "lng": 25.95978
            },
            "viewport": {
                "south": 48.28099601970851,
                "west": 25.9583211197085,
                "north": 48.28369398029151,
                "east": 25.9610190802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Прем'єр клуб",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2250,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107825636212929586454\">Олег Павлович</a>"
                ],
                "width": 4000
            }
        ],
        "place_id": "ChIJrzhWN-gINEcRHrMY8Bp0fdY",
        "plus_code": {
            "compound_code": "7XJ5+WW Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77XJ5+WW"
        },
        "rating": 3.8,
        "reference": "ChIJrzhWN-gINEcRHrMY8Bp0fdY",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 167,
        "vicinity": "вулиця Жасмінна, 4, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.28254070000001,
                "lng": 25.9217541
            },
            "viewport": {
                "south": 48.2810940197085,
                "west": 25.9203967197085,
                "north": 48.2837919802915,
                "east": 25.92309468029151
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Готель Андінна",
        "photos": [
            {
                "height": 3472,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106489964049476648330\">Денис Чернявский</a>"
                ],
                "width": 4640
            }
        ],
        "place_id": "ChIJAzLP8pkINEcRxh9Xjgc1CUg",
        "plus_code": {
            "compound_code": "7WMC+2P Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WMC+2P"
        },
        "rating": 4.3,
        "reference": "ChIJAzLP8pkINEcRxh9Xjgc1CUg",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 317,
        "vicinity": "вулиця Лібавська, 22А, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2928783,
                "lng": 25.9369934
            },
            "viewport": {
                "south": 48.2915702697085,
                "west": 25.9356712197085,
                "north": 48.2942682302915,
                "east": 25.9383691802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Магнат-Люкс",
        "photos": [
            {
                "height": 3072,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110438822766759838842\">Argo</a>"
                ],
                "width": 4608
            }
        ],
        "place_id": "ChIJNdTBE5oINEcReq20LoPEEi8",
        "plus_code": {
            "compound_code": "7WVP+5Q Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WVP+5Q"
        },
        "rating": 4,
        "reference": "ChIJNdTBE5oINEcReq20LoPEEi8",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 364,
        "vicinity": "вулиця Андрія Шептицького, 6, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.274943,
                "lng": 25.9218644
            },
            "viewport": {
                "south": 48.2735289697085,
                "west": 25.9205949697085,
                "north": 48.2762269302915,
                "east": 25.92329293029151
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Арбат Готель",
        "photos": [
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115972164859980963559\">den pluzhhnikov</a>"
                ],
                "width": 4032
            }
        ],
        "place_id": "ChIJRfDNaK0INEcRbfoP8Rr7I_s",
        "plus_code": {
            "compound_code": "7WFC+XP Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WFC+XP"
        },
        "rating": 4.1,
        "reference": "ChIJRfDNaK0INEcRbfoP8Rr7I_s",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 786,
        "vicinity": "вулиця Сторожинецька, 82, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.25567979999999,
                "lng": 25.9462628
            },
            "viewport": {
                "south": 48.25438056970849,
                "west": 25.9449611697085,
                "north": 48.25707853029149,
                "east": 25.9476591302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "Chernivtsi Apartments",
        "photos": [
            {
                "height": 2256,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105783860437891953055\">TANER KÖKEN</a>"
                ],
                "width": 4000
            }
        ],
        "place_id": "ChIJWzxvMCkPNEcRU0icmyznGsc",
        "plus_code": {
            "compound_code": "7W4W+7G Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77W4W+7G"
        },
        "rating": 4.4,
        "reference": "ChIJWzxvMCkPNEcRU0icmyznGsc",
        "scope": "GOOGLE",
        "types": [
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 55,
        "vicinity": "Татарбунарська вулиця, 42Д, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.29317700000001,
                "lng": 25.93625
            },
            "viewport": {
                "south": 48.2918512697085,
                "west": 25.9349203197085,
                "north": 48.2945492302915,
                "east": 25.9376182802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Chernivtsi Central Square Hostel",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4640,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111392656060899218086\">Ирина Шелест</a>"
                ],
                "width": 3472
            }
        ],
        "place_id": "ChIJOzLTEpoINEcRB5HtlC1-3u0",
        "plus_code": {
            "compound_code": "7WVP+7G Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WVP+7G"
        },
        "rating": 4.3,
        "reference": "ChIJOzLTEpoINEcRB5HtlC1-3u0",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 83,
        "vicinity": "Apt3/5a Sheptytskgo 2, Chernivtsi",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2666765,
                "lng": 25.9646861
            },
            "viewport": {
                "south": 48.26541361970849,
                "west": 25.9633342697085,
                "north": 48.26811158029149,
                "east": 25.9660322302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Готель Леотон",
        "photos": [
            {
                "height": 2604,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104165094534711763319\">Tetiana</a>"
                ],
                "width": 4624
            }
        ],
        "place_id": "ChIJCZbGUCgJNEcRB9gGNCRRNY4",
        "plus_code": {
            "compound_code": "7X87+MV Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77X87+MV"
        },
        "rating": 3.7,
        "reference": "ChIJCZbGUCgJNEcRB9gGNCRRNY4",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 143,
        "vicinity": "вулиця Чкалова, 30V, Monasteriska",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2709831,
                "lng": 25.94700079999999
            },
            "viewport": {
                "south": 48.26964081970849,
                "west": 25.9456733197085,
                "north": 48.27233878029149,
                "east": 25.9483712802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Premium Hotel",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4672,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109686501529786841939\">Отель Премиум</a>"
                ],
                "width": 7000
            }
        ],
        "place_id": "ChIJ1zp3Vc4INEcR7q_MBPk4sNw",
        "plus_code": {
            "compound_code": "7WCW+9R Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WCW+9R"
        },
        "rating": 4.4,
        "reference": "ChIJ1zp3Vc4INEcR7q_MBPk4sNw",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 542,
        "vicinity": "Головна вулиця, 124 Б, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2744238,
                "lng": 25.9235028
            },
            "viewport": {
                "south": 48.2729783197085,
                "west": 25.9220239697085,
                "north": 48.2756762802915,
                "east": 25.9247219302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Mini Hotel JTM",
        "photos": [
            {
                "height": 4608,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116532266989372547341\">Вячеслав Юрьевич</a>"
                ],
                "width": 2592
            }
        ],
        "place_id": "ChIJ5UTvj7EINEcRQfLwjwtqvYM",
        "plus_code": {
            "compound_code": "7WFF+QC Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WFF+QC"
        },
        "rating": 4.2,
        "reference": "ChIJ5UTvj7EINEcRQfLwjwtqvYM",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 253,
        "vicinity": "Ulitsa Kaspruka 9, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2921815,
                "lng": 25.9363141
            },
            "viewport": {
                "south": 48.2909281197085,
                "west": 25.9347697197085,
                "north": 48.2936260802915,
                "east": 25.9374676802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Allure Inn Grill",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 720,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109134302689204005853\">Fedoruk Ruslanka</a>"
                ],
                "width": 1080
            }
        ],
        "place_id": "ChIJ2aWSHpoINEcRH8FhxklfR7M",
        "plus_code": {
            "compound_code": "7WRP+VG Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WRP+VG"
        },
        "price_level": 2,
        "rating": 4.6,
        "reference": "ChIJ2aWSHpoINEcRH8FhxklfR7M",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 692,
        "vicinity": "вулиця Руська, 2, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2682067,
                "lng": 25.92595569999999
            },
            "viewport": {
                "south": 48.2667576197085,
                "west": 25.92457286970849,
                "north": 48.2694555802915,
                "east": 25.9272708302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Турист",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117699234696527186144\">Турист</a>"
                ],
                "width": 4032
            }
        ],
        "place_id": "ChIJURzN0rQINEcRpOAfyLdZ9Nw",
        "plus_code": {
            "compound_code": "7W9G+79 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77W9G+79"
        },
        "rating": 3,
        "reference": "ChIJURzN0rQINEcRpOAfyLdZ9Nw",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 862,
        "vicinity": "вулиця Героїв Майдану, 184, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.28910510000001,
                "lng": 25.935794
            },
            "viewport": {
                "south": 48.2877543197085,
                "west": 25.9344449197085,
                "north": 48.2904522802915,
                "east": 25.9371428802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Pelican",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3234,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109769750197655913860\">Vasile Dorin (V451)</a>"
                ],
                "width": 2160
            }
        ],
        "place_id": "ChIJaxakNJsINEcRkBUYB_d80Ek",
        "plus_code": {
            "compound_code": "7WQP+J8 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WQP+J8"
        },
        "rating": 4.7,
        "reference": "ChIJaxakNJsINEcRkBUYB_d80Ek",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 222,
        "vicinity": "вулиця Гоголя, 7А, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.3620894,
                "lng": 25.738891
            },
            "viewport": {
                "south": 48.3608086697085,
                "west": 25.7374836697085,
                "north": 48.3635066302915,
                "east": 25.7401816302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Шале",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111399583727224186719\">Шале</a>"
                ],
                "width": 3024
            }
        ],
        "place_id": "ChIJQZkZPzEANEcRviqHL8g2GhE",
        "plus_code": {
            "compound_code": "9P6Q+RH Шипинці, Чернівецька область, Україна",
            "global_code": "8GW79P6Q+RH"
        },
        "price_level": 2,
        "rating": 4.6,
        "reference": "ChIJQZkZPzEANEcRviqHL8g2GhE",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 903,
        "vicinity": "вулиця Лесі Українки, 21є, Шипинці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.28235989999999,
                "lng": 25.9760628
            },
            "viewport": {
                "south": 48.2809786197085,
                "west": 25.9746790197085,
                "north": 48.28367658029149,
                "east": 25.9773769802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Mirage",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2998,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106007228911637317280\">Mirage</a>"
                ],
                "width": 3998
            }
        ],
        "place_id": "ChIJq6q6VuIINEcRCjDIZvcA9xM",
        "plus_code": {
            "compound_code": "7XJG+WC Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77XJG+WC"
        },
        "rating": 4.6,
        "reference": "ChIJq6q6VuIINEcRCjDIZvcA9xM",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 139,
        "vicinity": "вулиця Руська, 207-в, Чернівці",
        "html_attributions": []
    },
    {
        "geometry": {
            "location": {
                "lat": 48.2893386,
                "lng": 25.9692926
            },
            "viewport": {
                "south": 48.24663495138751,
                "west": 25.87864884989756,
                "north": 48.32518197033363,
                "east": 26.01359801031593
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "Першотравневий район",
        "photos": [
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109438775429617347135\">Olek</a>"
                ],
                "width": 3840
            }
        ],
        "place_id": "ChIJF7EHFJUINEcRmDxd8ltLsQc",
        "reference": "ChIJF7EHFJUINEcRmDxd8ltLsQc",
        "scope": "GOOGLE",
        "types": [
            "sublocality_level_1",
            "sublocality",
            "political"
        ],
        "vicinity": "Першотравневий район",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.29017220000001,
                "lng": 25.9478427
            },
            "viewport": {
                "south": 48.28876501970851,
                "west": 25.9464676197085,
                "north": 48.29146298029151,
                "east": 25.9491655802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        "icon_background_color": "#4B96F3",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/shopping_pinlet",
        "name": "Маляр",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4128,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100434708258501840236\">Andrii Prodan</a>"
                ],
                "width": 3096
            }
        ],
        "place_id": "ChIJ0x6fWt3UMkcRDv8in3XtrAQ",
        "plus_code": {
            "compound_code": "7WRX+34 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WRX+34"
        },
        "rating": 4.3,
        "reference": "ChIJ0x6fWt3UMkcRDv8in3XtrAQ",
        "scope": "GOOGLE",
        "types": [
            "store",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 31,
        "vicinity": "вулиця Руська, 63, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.26980390000001,
                "lng": 25.9341534
            },
            "viewport": {
                "south": 48.2682375697085,
                "west": 25.9327480197085,
                "north": 48.2709355302915,
                "east": 25.9354459802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
        "name": "ДНЗ №9",
        "place_id": "ChIJYftHbcoINEcR430KYzc7ZD4",
        "plus_code": {
            "compound_code": "7W9M+WM Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77W9M+WM"
        },
        "rating": 3,
        "reference": "ChIJYftHbcoINEcR430KYzc7ZD4",
        "scope": "GOOGLE",
        "types": [
            "school",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 4,
        "vicinity": "проспект Незалежності, 88, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.3636843,
                "lng": 25.7788047
            },
            "viewport": {
                "south": 48.36237681970849,
                "west": 25.77728711970849,
                "north": 48.36507478029149,
                "east": 25.7799850802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/worship_general-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/worship_christian_pinlet",
        "name": "Свято-Вознесенська церква (XIV ст.)",
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101987320990985355767\">3D Ukraine</a>"
                ],
                "width": 3024
            }
        ],
        "place_id": "ChIJJc9q7F4ANEcRe5L6SJNt5CI",
        "plus_code": {
            "compound_code": "9Q7H+FG Лужани, Чернівецька область, Україна",
            "global_code": "8GW79Q7H+FG"
        },
        "rating": 4.9,
        "reference": "ChIJJc9q7F4ANEcRe5L6SJNt5CI",
        "scope": "GOOGLE",
        "types": [
            "church",
            "place_of_worship",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 28,
        "vicinity": "Лужани",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2659019,
                "lng": 25.93376599999999
            },
            "viewport": {
                "south": 48.2644947697085,
                "west": 25.9323582697085,
                "north": 48.2671927302915,
                "east": 25.9350562302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "KVARTIRA",
        "place_id": "ChIJVVXF1DQPNEcRPTRM3VsbuUg",
        "plus_code": {
            "compound_code": "7W8M+9G Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77W8M+9G"
        },
        "reference": "ChIJVVXF1DQPNEcRPTRM3VsbuUg",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "1B, вулиця Пилипа Орлика, 1Б, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.3053179,
                "lng": 25.9221946
            },
            "viewport": {
                "south": 48.3040574197085,
                "west": 25.9208931697085,
                "north": 48.3067553802915,
                "east": 25.9235911302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Кайзер",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118133425293081220318\">Кайзер</a>"
                ],
                "width": 2448
            }
        ],
        "place_id": "ChIJkelGI5gINEcR7XyZ6w5ZBRw",
        "plus_code": {
            "compound_code": "8W4C+4V Чернівці, Чернівецька область, Україна",
            "global_code": "8GW78W4C+4V"
        },
        "rating": 4.3,
        "reference": "ChIJkelGI5gINEcR7XyZ6w5ZBRw",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 493,
        "vicinity": "вулиця Гагаріна, 51, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.27449319999999,
                "lng": 25.923519
            },
            "viewport": {
                "south": 48.2730257697085,
                "west": 25.9220106697085,
                "north": 48.2757237302915,
                "east": 25.9247086302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Sakvoyage-ArT Hotel",
        "photos": [
            {
                "height": 1702,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110922584529173689122\">Sakvoyage-ArT Hotel</a>"
                ],
                "width": 3024
            }
        ],
        "place_id": "ChIJ__9LWK4INEcRt0ykcrHpBR0",
        "plus_code": {
            "compound_code": "7WFF+QC Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WFF+QC"
        },
        "rating": 4.4,
        "reference": "ChIJ__9LWK4INEcRt0ykcrHpBR0",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 125,
        "vicinity": "вулиця Павла Каспрука, 9, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2941809,
                "lng": 25.932286
            },
            "viewport": {
                "south": 48.2928548197085,
                "west": 25.9308857697085,
                "north": 48.29555278029149,
                "east": 25.9335837302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Apartments на Трояндовій",
        "photos": [
            {
                "height": 1280,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104565887419788164276\">Инна Терещенко</a>"
                ],
                "width": 720
            }
        ],
        "place_id": "ChIJVVVh7ZsINEcRR3dZ31CMeCk",
        "plus_code": {
            "compound_code": "7WVJ+MW Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WVJ+MW"
        },
        "rating": 4.9,
        "reference": "ChIJVVVh7ZsINEcRR3dZ31CMeCk",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 154,
        "vicinity": "вулиця Трояндова, 4, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.290795,
                "lng": 25.935519
            },
            "viewport": {
                "south": 48.2895919697085,
                "west": 25.9345284697085,
                "north": 48.2922899302915,
                "east": 25.9372264302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Yard Hostel & Coffee",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3534,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110582393361566228472\">Yard Hostel &amp; Coffee</a>"
                ],
                "width": 3534
            }
        ],
        "place_id": "ChIJA7Zt3ZkINEcRg24HNo5XUyk",
        "plus_code": {
            "compound_code": "7WRP+86 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WRP+86"
        },
        "rating": 4.7,
        "reference": "ChIJA7Zt3ZkINEcRg24HNo5XUyk",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "cafe",
            "point_of_interest",
            "store",
            "food",
            "establishment"
        ],
        "user_ratings_total": 470,
        "vicinity": "вулиця Кобилянської, 10, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2877945,
                "lng": 25.9367966
            },
            "viewport": {
                "south": 48.2862306197085,
                "west": 25.9357354197085,
                "north": 48.2889285802915,
                "east": 25.9384333802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/worship_general-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/worship_christian_pinlet",
        "name": "Свято-Духівський кафедральний собор УПЦ",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1704,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102000222444335212749\">Snizhana Nikitaieva</a>"
                ],
                "width": 2272
            }
        ],
        "place_id": "ChIJz5XXxZcINEcR3OZgTJviQ1c",
        "plus_code": {
            "compound_code": "7WQP+4P Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WQP+4P"
        },
        "rating": 4.6,
        "reference": "ChIJz5XXxZcINEcR3OZgTJviQ1c",
        "scope": "GOOGLE",
        "types": [
            "church",
            "place_of_worship",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1254,
        "vicinity": "Головна вулиця, 85, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.28883940000001,
                "lng": 25.918698
            },
            "viewport": {
                "south": 48.28742136970851,
                "west": 25.9173986697085,
                "north": 48.2901193302915,
                "east": 25.9200966302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Navigator",
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108467277208725340969\">Анна Данихно</a>"
                ],
                "width": 3024
            }
        ],
        "place_id": "ChIJw-jcZaAINEcRGd4bOGDqwJI",
        "plus_code": {
            "compound_code": "7WQ9+GF Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WQ9+GF"
        },
        "rating": 4.6,
        "reference": "ChIJw-jcZaAINEcRGd4bOGDqwJI",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 149,
        "vicinity": "32A, вулиця Курильська, 32А, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.291385,
                "lng": 25.9322569
            },
            "viewport": {
                "south": 48.2901667697085,
                "west": 25.9312418697085,
                "north": 48.2928647302915,
                "east": 25.9339398302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
        "name": "Буковинський державний медичний університет",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3016,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100846881975439629242\">Женя Губернюк</a>"
                ],
                "width": 4032
            }
        ],
        "place_id": "ChIJP41_DJkINEcRKgKAVpJV2cE",
        "plus_code": {
            "compound_code": "7WRJ+HW Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WRJ+HW"
        },
        "rating": 4.5,
        "reference": "ChIJP41_DJkINEcRKgKAVpJV2cE",
        "scope": "GOOGLE",
        "types": [
            "university",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 303,
        "vicinity": "Театральна площа, 2, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2855196,
                "lng": 25.947101
            },
            "viewport": {
                "south": 48.2841005697085,
                "west": 25.9458144197085,
                "north": 48.2867985302915,
                "east": 25.9485123802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Home Steel",
        "place_id": "ChIJAQBUOJUINEcRAnT4gwhhcs0",
        "plus_code": {
            "compound_code": "7WPW+6R Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WPW+6R"
        },
        "reference": "ChIJAQBUOJUINEcRAnT4gwhhcs0",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "67A, вулиця Лук'яна Кобилиці, 67А, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.3182373,
                "lng": 25.9602718
            },
            "viewport": {
                "south": 48.3168408697085,
                "west": 25.95889791970849,
                "north": 48.3195388302915,
                "east": 25.9615958802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Іліт",
        "photos": [
            {
                "height": 700,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108864163793674915149\">Готель ІЛІТ</a>"
                ],
                "width": 1243
            }
        ],
        "place_id": "ChIJVVUwA3IINEcRbPfw62vrj7Y",
        "plus_code": {
            "compound_code": "8X96+74 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW78X96+74"
        },
        "rating": 4.8,
        "reference": "ChIJVVUwA3IINEcRbPfw62vrj7Y",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 5,
        "vicinity": "1 пров. Калинівський, 10, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.29683850000001,
                "lng": 25.9379745
            },
            "viewport": {
                "south": 48.29551566970851,
                "west": 25.9365905197085,
                "north": 48.29821363029151,
                "east": 25.9392884802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Apartments on Petra Sahaidachnoho 11",
        "place_id": "ChIJpza8KpsINEcRWLvgnkuv72s",
        "plus_code": {
            "compound_code": "7WWQ+P5 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WWQ+P5"
        },
        "rating": 3.4,
        "reference": "ChIJpza8KpsINEcRWLvgnkuv72s",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 7,
        "vicinity": "Sahaidachnoho street 11, floor 1, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.28275079999999,
                "lng": 25.9396304
            },
            "viewport": {
                "south": 48.2813717197085,
                "west": 25.9383059197085,
                "north": 48.28406968029149,
                "east": 25.9410038802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "C O I N",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105880856753469439333\">COIN Apartments &amp; Hostel</a>"
                ],
                "width": 3000
            }
        ],
        "place_id": "ChIJq6p6YL4INEcRkMm_DGBz9sQ",
        "plus_code": {
            "compound_code": "7WMQ+4V Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WMQ+4V"
        },
        "rating": 4.3,
        "reference": "ChIJq6p6YL4INEcRkMm_DGBz9sQ",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 389,
        "vicinity": "Казарменний провулок, 7, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2387311,
                "lng": 25.9701553
            },
            "viewport": {
                "south": 48.2373461697085,
                "west": 25.9689608197085,
                "north": 48.24004413029149,
                "east": 25.9716587802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Rivoli Hotel",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3456,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113555566081220388147\">Роман Галецький</a>"
                ],
                "width": 4608
            }
        ],
        "place_id": "ChIJHxFA9N0INEcRiDdwau12dZY",
        "plus_code": {
            "compound_code": "6XQC+F3 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW76XQC+F3"
        },
        "rating": 4.8,
        "reference": "ChIJHxFA9N0INEcRiDdwau12dZY",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 915,
        "vicinity": "Вул. Незалежності 2 Чернівці, село Чагор, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2699699,
                "lng": 25.9268283
            },
            "viewport": {
                "south": 48.2686209197085,
                "west": 25.9254793197085,
                "north": 48.2713188802915,
                "east": 25.9281772802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "Редакція газети \"Від і дО\"",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1728,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109064456537748933868\">konserv</a>"
                ],
                "width": 2880
            }
        ],
        "place_id": "ChIJgzDn7LQINEcRT3Ui8zAtr2Q",
        "plus_code": {
            "compound_code": "7W9G+XP Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77W9G+XP"
        },
        "rating": 4.1,
        "reference": "ChIJgzDn7LQINEcRT3Ui8zAtr2Q",
        "scope": "GOOGLE",
        "types": [
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 52,
        "vicinity": "проспект Незалежності, 96, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.266855,
                "lng": 25.967217
            },
            "viewport": {
                "south": 48.2655022697085,
                "west": 25.9657952697085,
                "north": 48.2682002302915,
                "east": 25.9684932302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/airport-71.png",
        "icon_background_color": "#10BDFF",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/airport_pinlet",
        "name": "Міжнародний аеропорт «Чернівці» ім. Леоніда Каденюка",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2736,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114697056556215074929\">O K</a>"
                ],
                "width": 3648
            }
        ],
        "place_id": "ChIJc60tbCMJNEcRTkiDGesFeSQ",
        "plus_code": {
            "compound_code": "7X88+PV Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77X88+PV"
        },
        "rating": 3.6,
        "reference": "ChIJc60tbCMJNEcRTkiDGesFeSQ",
        "scope": "GOOGLE",
        "types": [
            "airport",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 190,
        "vicinity": "вулиця Чкалова, 30, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2971268,
                "lng": 25.9244121
            },
            "viewport": {
                "south": 48.2953723697085,
                "west": 25.9234763697085,
                "north": 48.29807033029149,
                "east": 25.9261743302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
        "name": "Чернівецький національний університет імені Юрія Федьковича",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1068,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104776428203035875563\">Черновицкий национальный университет имени Юрия Федьковича</a>"
                ],
                "width": 1600
            }
        ],
        "place_id": "ChIJJ7THcCcGNEcRTWU2XcKOeXA",
        "plus_code": {
            "compound_code": "7WWF+VQ Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WWF+VQ"
        },
        "rating": 4.8,
        "reference": "ChIJJ7THcCcGNEcRTWU2XcKOeXA",
        "scope": "GOOGLE",
        "types": [
            "university",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 2675,
        "vicinity": "вулиця Коцюбинського, 2, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2914146,
                "lng": 25.9345984
            },
            "viewport": {
                "south": 48.2901022697085,
                "west": 25.9331160197085,
                "north": 48.2928002302915,
                "east": 25.93581398029151
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Шафран",
        "place_id": "ChIJVVWBk5kINEcRqp4UGGzumbI",
        "plus_code": {
            "compound_code": "7WRM+HR Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WRM+HR"
        },
        "rating": 3,
        "reference": "ChIJVVWBk5kINEcRqp4UGGzumbI",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1,
        "vicinity": "Новоселицький район село зеленогай Ивана франка 1г Cherlena-Mare Chernivtsi Region",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2978501,
                "lng": 25.9289578
            },
            "viewport": {
                "south": 48.2964723197085,
                "west": 25.9275376197085,
                "north": 48.29917028029149,
                "east": 25.9302355802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Георг Палац",
        "photos": [
            {
                "height": 1280,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112458301439931341367\">Георг Палац</a>"
                ],
                "width": 851
            }
        ],
        "place_id": "ChIJreDmIp0INEcRbthet83JrkA",
        "plus_code": {
            "compound_code": "7WXH+4H Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WXH+4H"
        },
        "rating": 4.7,
        "reference": "ChIJreDmIp0INEcRbthet83JrkA",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "restaurant",
            "point_of_interest",
            "food",
            "establishment"
        ],
        "user_ratings_total": 1087,
        "vicinity": "вулиця Івана Богуна, 24, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2837121,
                "lng": 25.9732622
            },
            "viewport": {
                "south": 48.2823996697085,
                "west": 25.9718894197085,
                "north": 48.2850976302915,
                "east": 25.9745873802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "ANGELHOLM, ШВЕД.-УКР. КЛІНІКА",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106272932281297438530\">Шведско-украинская клиника &quot;Энгельхольм&quot;</a>"
                ],
                "width": 2048
            }
        ],
        "place_id": "ChIJGYTsRUoPNEcRIe8rEGJyBJI",
        "plus_code": {
            "compound_code": "7XMF+F8 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77XMF+F8"
        },
        "rating": 4.5,
        "reference": "ChIJGYTsRUoPNEcRIe8rEGJyBJI",
        "scope": "GOOGLE",
        "types": [
            "health",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 585,
        "vicinity": "вулиця Руська, 185, В м, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.28431510000001,
                "lng": 25.9778291
            },
            "viewport": {
                "south": 48.28283901970851,
                "west": 25.97635761970849,
                "north": 48.2855369802915,
                "east": 25.9790555802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Апартхостел JTM",
        "place_id": "ChIJq6q6VuIINEcRBmquqixAw3I",
        "plus_code": {
            "compound_code": "7XMH+P4 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77XMH+P4"
        },
        "reference": "ChIJq6q6VuIINEcRBmquqixAw3I",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "Руська, буд. 207-В 4 этажа Черновцы Chernivtsi Region",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.266048,
                "lng": 25.938813
            },
            "viewport": {
                "south": 48.2646749697085,
                "west": 25.9377444197085,
                "north": 48.2673729302915,
                "east": 25.9404423802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "Арт Хаус (Art House) - дизайн, печать, полиграфия, веб",
        "opening_hours": {
            "open_now": true
        },
        "place_id": "ChIJq2meoswINEcRsEKsDDI3edU",
        "plus_code": {
            "compound_code": "7W8Q+CG Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77W8Q+CG"
        },
        "reference": "ChIJq2meoswINEcRsEKsDDI3edU",
        "scope": "GOOGLE",
        "types": [
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "вулиця Небесної сотні, 14а, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.260435,
                "lng": 25.9439797
            },
            "viewport": {
                "south": 48.2591068197085,
                "west": 25.9427676197085,
                "north": 48.26180478029149,
                "east": 25.9454655802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "Гринвич Тур, Супермаркет Горящих Путёвок",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 1536,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108787255166345589184\">Гринвич Тур, Супермаркет Горящих Путёвок</a>"
                ],
                "width": 2048
            }
        ],
        "place_id": "ChIJ76_PpS0PNEcR23Bj5845eqs",
        "plus_code": {
            "compound_code": "7W6V+5H Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77W6V+5H"
        },
        "rating": 5,
        "reference": "ChIJ76_PpS0PNEcR23Bj5845eqs",
        "scope": "GOOGLE",
        "types": [
            "travel_agency",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1,
        "vicinity": "вулиця Воробкевича, 1А, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.30222699999999,
                "lng": 25.92613679999999
            },
            "viewport": {
                "south": 48.30083086970851,
                "west": 25.9247514697085,
                "north": 48.3035288302915,
                "east": 25.9274494302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Кімнати тривалого відпочинку на вокзалі станції Чернівці",
        "place_id": "ChIJVVVl_ygGNEcRf2lhnVQ-Tak",
        "plus_code": {
            "compound_code": "8W2G+VF Чернівці, Чернівецька область, Україна",
            "global_code": "8GW78W2G+VF"
        },
        "reference": "ChIJVVVl_ygGNEcRf2lhnVQ-Tak",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "вулиця Гагаріна 38 Чернівці Chernivtsi Region",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.3537488,
                "lng": 25.8216823
            },
            "viewport": {
                "south": 48.3522248197085,
                "west": 25.8202699697085,
                "north": 48.3549227802915,
                "east": 25.8229679302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "комплекс Прага",
        "photos": [
            {
                "height": 4608,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107998062067496582104\">Olexandr Dzer</a>"
                ],
                "width": 2592
            }
        ],
        "place_id": "ChIJVS0P-sYANEcRidIG9y5D67Y",
        "plus_code": {
            "compound_code": "9R3C+FM Мамаївці, Чернівецька область, Україна",
            "global_code": "8GW79R3C+FM"
        },
        "rating": 4.3,
        "reference": "ChIJVS0P-sYANEcRidIG9y5D67Y",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 139,
        "vicinity": "вул.Шевченка 214 214 Мамаївці Chernivtsi Region, вулиця Шевченка, 214, Мамаївці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.273191,
                "lng": 25.92935499999999
            },
            "viewport": {
                "south": 48.2718594197085,
                "west": 25.92791591970849,
                "north": 48.2745573802915,
                "east": 25.9306138802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "ТМ Болена, Фабрика вікон та дверей",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1200,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103487280854741050696\">ТМ Болена, Фабрика вікон та дверей</a>"
                ],
                "width": 1600
            }
        ],
        "place_id": "ChIJcyvGorYINEcRg9BvoV9cKoU",
        "plus_code": {
            "compound_code": "7WFH+7P Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WFH+7P"
        },
        "rating": 4.4,
        "reference": "ChIJcyvGorYINEcRg9BvoV9cKoU",
        "scope": "GOOGLE",
        "types": [
            "point_of_interest",
            "general_contractor",
            "establishment"
        ],
        "user_ratings_total": 11,
        "vicinity": "ОСББ \"Український дім, вулиця Героїв Майдану, 55, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2755652,
                "lng": 25.9444356
            },
            "viewport": {
                "south": 48.27415421970849,
                "west": 25.9428855197085,
                "north": 48.27685218029149,
                "east": 25.9455834802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "Роднічок Тревел",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109744403469765352187\">Сєва Рудий</a>"
                ],
                "width": 3120
            }
        ],
        "place_id": "ChIJX1V7SMYINEcRBv5fpw_qC8g",
        "plus_code": {
            "compound_code": "7WGV+6Q Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WGV+6Q"
        },
        "rating": 4,
        "reference": "ChIJX1V7SMYINEcRBv5fpw_qC8g",
        "scope": "GOOGLE",
        "types": [
            "travel_agency",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 23,
        "vicinity": "навпроти Льодового майданчику, Головна вулиця, 145, Chernivtsi",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2811986,
                "lng": 25.9521397
            },
            "viewport": {
                "south": 48.27992261970849,
                "west": 25.9506794697085,
                "north": 48.28262058029149,
                "east": 25.9533774302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
        "name": "Чернівецький кооперативний економіко-правовий коледж",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 516,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104503857771745510294\">Чернівецький кооперативний економіко-правовий коледж</a>"
                ],
                "width": 683
            }
        ],
        "place_id": "ChIJLduDj8EINEcRIuMSVSq9poA",
        "plus_code": {
            "compound_code": "7XJ2+FV Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77XJ2+FV"
        },
        "rating": 4.2,
        "reference": "ChIJLduDj8EINEcRIuMSVSq9poA",
        "scope": "GOOGLE",
        "types": [
            "university",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 77,
        "vicinity": "1-й провулок Кармелюка, 6, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.28908320000001,
                "lng": 25.9800506
            },
            "viewport": {
                "south": 48.28767411970851,
                "west": 25.97886021970849,
                "north": 48.2903720802915,
                "east": 25.9815581802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "ТМ Болена, Фабрика вікон та дверей",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 540,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115372293717263205808\">ТМ Болена, Фабрика вікон та дверей</a>"
                ],
                "width": 666
            }
        ],
        "place_id": "ChIJgZ0z9PwINEcR0oXUeO7snY8",
        "plus_code": {
            "compound_code": "7XQJ+J2 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77XQJ+J2"
        },
        "rating": 4.3,
        "reference": "ChIJgZ0z9PwINEcR0oXUeO7snY8",
        "scope": "GOOGLE",
        "types": [
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 132,
        "vicinity": "вулиця Січових Стрільців, 34 - Б, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.258254,
                "lng": 25.9330051
            },
            "viewport": {
                "south": 48.2568044697085,
                "west": 25.9316785197085,
                "north": 48.2595024302915,
                "east": 25.9343764802915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "Центр відновлення зору Анатолія Совви",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116352757850832834837\">Центр відновлення зору Анатолія Совви</a>"
                ],
                "width": 1929
            }
        ],
        "place_id": "ChIJ8ys3cMsINEcRMBpu1OgqYQc",
        "plus_code": {
            "compound_code": "7W5M+86 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77W5M+86"
        },
        "rating": 4.4,
        "reference": "ChIJ8ys3cMsINEcRMBpu1OgqYQc",
        "scope": "GOOGLE",
        "types": [
            "hospital",
            "health",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 82,
        "vicinity": "вулиця Комарова, 32Б, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.266988,
                "lng": 25.93555
            },
            "viewport": {
                "south": 48.2656374697085,
                "west": 25.93421336970849,
                "north": 48.2683354302915,
                "east": 25.9369113302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        "icon_background_color": "#4B96F3",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/shopping_pinlet",
        "name": "KREDENS, МАГ.",
        "place_id": "ChIJLwkuGMsINEcRt5xgb9kg5iQ",
        "plus_code": {
            "compound_code": "7W8P+Q6 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77W8P+Q6"
        },
        "reference": "ChIJLwkuGMsINEcRt5xgb9kg5iQ",
        "scope": "GOOGLE",
        "types": [
            "store",
            "point_of_interest",
            "establishment"
        ],
        "vicinity": "117, проспект Незалежності, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.3586755,
                "lng": 25.7108669
            },
            "viewport": {
                "south": 48.3573818697085,
                "west": 25.7100011697085,
                "north": 48.3600798302915,
                "east": 25.7126991302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color": "#FF9E67",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name": "Ґранд Аристократ",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1482,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108316035596032442018\">Grand Aristocrate</a>"
                ],
                "width": 1097
            }
        ],
        "place_id": "ChIJvS5ufX-qNkcR_cSWbIWw9gI",
        "plus_code": {
            "compound_code": "9P56+F8 Дубівці, Чернівецька область, Україна",
            "global_code": "8GW79P56+F8"
        },
        "price_level": 2,
        "rating": 4.6,
        "reference": "ChIJvS5ufX-qNkcR_cSWbIWw9gI",
        "scope": "GOOGLE",
        "types": [
            "restaurant",
            "lodging",
            "point_of_interest",
            "food",
            "establishment"
        ],
        "user_ratings_total": 631,
        "vicinity": "вулиця Шевченка, 4 К, Дубівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.26282039999999,
                "lng": 25.9460819
            },
            "viewport": {
                "south": 48.26129971970849,
                "west": 25.9448483697085,
                "north": 48.26399768029149,
                "east": 25.9475463302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
        "icon_background_color": "#4B96F3",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/shopping_pinlet",
        "name": "Світ Саун та басейни",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1702,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113488397356963349582\">Світ Саун та басейни</a>"
                ],
                "width": 3024
            }
        ],
        "place_id": "ChIJi-JxMy0PNEcR-Sp_U3c5BFM",
        "plus_code": {
            "compound_code": "7W7W+4C Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77W7W+4C"
        },
        "rating": 3.7,
        "reference": "ChIJi-JxMy0PNEcR-Sp_U3c5BFM",
        "scope": "GOOGLE",
        "types": [
            "store",
            "point_of_interest",
            "spa",
            "establishment"
        ],
        "user_ratings_total": 7,
        "vicinity": "Світ саун та басейни, вулиця Комарова, 12, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.289818,
                "lng": 25.938487
            },
            "viewport": {
                "south": 48.28846146970851,
                "west": 25.9372480697085,
                "north": 48.29115943029151,
                "east": 25.9399460302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "БУКОВИНА, РЕД., ГРОМАД.-ПОЛІТ. ГАЗ.",
        "place_id": "ChIJ5S0uF5cINEcR_DZfNfQcnfg",
        "plus_code": {
            "compound_code": "7WQQ+W9 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WQQ+W9"
        },
        "rating": 4.5,
        "reference": "ChIJ5S0uF5cINEcR_DZfNfQcnfg",
        "scope": "GOOGLE",
        "types": [
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 2,
        "vicinity": "вулиця Українська, 22, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2668251,
                "lng": 25.9390736
            },
            "viewport": {
                "south": 48.2656433197085,
                "west": 25.9377727697085,
                "north": 48.2683412802915,
                "east": 25.9404707302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "Інформаційне агентство Чернівців",
        "place_id": "ChIJr1Q2g8wINEcRnDesI9fCkn4",
        "plus_code": {
            "compound_code": "7W8Q+PJ Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77W8Q+PJ"
        },
        "rating": 1,
        "reference": "ChIJr1Q2g8wINEcRnDesI9fCkn4",
        "scope": "GOOGLE",
        "types": [
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1,
        "vicinity": "проспект Незалежності, 111, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2980469,
                "lng": 25.9335269
            },
            "viewport": {
                "south": 48.2967088197085,
                "west": 25.9322972197085,
                "north": 48.29940678029149,
                "east": 25.93499518029151
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
        "name": "Хостел У Поттера",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106193822751869469699\">Хостел У Поттера</a>"
                ],
                "width": 3024
            }
        ],
        "place_id": "ChIJVVWF6rwINEcR6uLZluM_yNA",
        "plus_code": {
            "compound_code": "7WXM+6C Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WXM+6C"
        },
        "rating": 4.4,
        "reference": "ChIJVVWF6rwINEcR6uLZluM_yNA",
        "scope": "GOOGLE",
        "types": [
            "lodging",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 254,
        "vicinity": "тупик Богдана Хмельницького, 11, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.2912395,
                "lng": 25.936703
            },
            "viewport": {
                "south": 48.2898098697085,
                "west": 25.9353505697085,
                "north": 48.2925078302915,
                "east": 25.9380485302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bank-71.png",
        "icon_background_color": "#909CE1",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bank-intl_pinlet",
        "name": "ОТП Банк, відділення м.Чернівці",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3303,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114680094663125575905\">Діана Антонюк</a>"
                ],
                "width": 2505
            }
        ],
        "place_id": "ChIJAzLP8pkINEcRLtCzj5zeayU",
        "plus_code": {
            "compound_code": "7WRP+FM Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WRP+FM"
        },
        "rating": 3.6,
        "reference": "ChIJAzLP8pkINEcRLtCzj5zeayU",
        "scope": "GOOGLE",
        "types": [
            "bank",
            "atm",
            "insurance_agency",
            "finance",
            "health",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 30,
        "vicinity": "вулиця Доброго, 7, Чернівці",
        "html_attributions": []
    },
    {
        "business_status": "OPERATIONAL",
        "geometry": {
            "location": {
                "lat": 48.29532859999999,
                "lng": 25.9375513
            },
            "viewport": {
                "south": 48.29401091970849,
                "west": 25.93621946970849,
                "north": 48.29670888029149,
                "east": 25.9389174302915
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "icon_background_color": "#7B9EB0",
        "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
        "name": "ФАЙНО, МАЙСТЕРНЯ ДИЗАЙНУ",
        "place_id": "ChIJ751TwpsINEcR9ojccYsGXCI",
        "plus_code": {
            "compound_code": "7WWQ+42 Чернівці, Чернівецька область, Україна",
            "global_code": "8GW77WWQ+42"
        },
        "reference": "ChIJ751TwpsINEcR9ojccYsGXCI",
        "scope": "GOOGLE",
        "types": [
            "point_of_interest",
            "general_contractor",
            "establishment"
        ],
        "vicinity": "вулиця Кароля Мікулі, 8/10, Чернівці",
        "html_attributions": []
    }
]