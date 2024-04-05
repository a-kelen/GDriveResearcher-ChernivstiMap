let map = null;
let places = [];
let selectedCategories = new ObservableSet();
selectedCategories.onChange = () => {
    const arrayCategories = [...selectedCategories.value];
    if (arrayCategories.length === 0) {
        places.forEach(place => place.map = map);
    } else {
        places.forEach(place => {
            const hasIntersection = arrayIntersection(arrayCategories, place.categories).length > 0;
            hasIntersection ? place.map = map : place.map = null;
        })
    }
};

document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggle-list');
    var checkboxList = document.getElementById('checkbox-list');

    var categories = getCategories(data);
    categories.forEach(category => {
        var div = document.createElement('div');
        div.className = 'checkbox-container';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `cat-${category}`;
        checkbox.checked = false;
        checkbox.value = category;
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedCategories.add(this.value);
            } else {
                selectedCategories.delete(this.value);
            }
        })

        var label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = category;
        
        div.appendChild(checkbox);
        div.appendChild(label);
        checkboxList.appendChild(div);
    });


    toggleButton.addEventListener('click', () => {
        if (checkboxList.style.display === 'none') {
            checkboxList.style.display = 'block';
            toggleButton.textContent = 'Hide';
        } else {
            checkboxList.style.display = 'none';
            toggleButton.textContent = 'Show';
        }
    });
});

async function initMap() {
    const { Map } = await google.maps.importLibrary('maps');
    const { AdvancedMarkerElement: Marker, PinElement } = await google.maps.importLibrary('marker');
    
    function createMarker(place, isMain = false) {
        const pinScaled = new PinElement(isMain ? getMainMarkerOptions() : getRelatedMarkerOptions());

        const marker = new Marker({
            map: map,
            position: place.geometry.location,
            title: place.name || '',
            content: pinScaled.element,
            zIndex: isMain ? 99999999 : 1
        });
        marker.categories = place.types;

        return marker;
    }

    map = new Map(document.getElementById('map'), {
        center: {
            lat: 48.29149,
            lng: 25.94034
        },
        zoom: 12,
        mapId: '5af49cc201eaef43',
        fullscreenControl: false,
        streetViewControl: false,
    });
    
    const [mainLocation, ...otherPlaces] = data;
    createMarker(mainLocation, true);
    places = otherPlaces.map(place => createMarker(place));
}

function getMainMarkerOptions() {
    return {
        scale: 1.5,
    };
}

function getRelatedMarkerOptions() {
    return {
        scale: 1,
        background: '#4464B4',
        borderColor: '#042780',
        glyphColor: '#042780',
    };
}

function arrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
