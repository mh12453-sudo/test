var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_cell_clermont_ferrand_au_1 = new ol.format.GeoJSON();
var features_cell_clermont_ferrand_au_1 = format_cell_clermont_ferrand_au_1.readFeatures(json_cell_clermont_ferrand_au_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cell_clermont_ferrand_au_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cell_clermont_ferrand_au_1.addFeatures(features_cell_clermont_ferrand_au_1);
var lyr_cell_clermont_ferrand_au_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cell_clermont_ferrand_au_1, 
                style: style_cell_clermont_ferrand_au_1,
                popuplayertitle: 'cell_clermont_ferrand_au',
                interactive: true,
                title: '<img src="styles/legend/cell_clermont_ferrand_au_1.png" /> cell_clermont_ferrand_au'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_cell_clermont_ferrand_au_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_cell_clermont_ferrand_au_1];
lyr_cell_clermont_ferrand_au_1.set('fieldAliases', {'id': 'id', 'pop_sc': 'pop_sc', 'pop_ar': 'pop_ar', 'pop_ca': 'pop_ca', 'pop_pi': 'pop_pi', 'pop_em': 'pop_em', 'pop_ou': 'pop_ou', 'pop_re': 'pop_re', 'pop_in': 'pop_in', 'pop_et': 'pop_et', 'ac': 'ac', 'ag': 'ag', 'al': 'al', 'am': 'am', 'aq': 'aq', 'co': 'co', 'de': 'de', 'em': 'em', 'lo': 'lo', 'ly': 'ly', 'mc': 'mc', 'nc': 'nc', 'pr': 'pr', 're': 're', 'sum': 'sum', 'rs': 'rs', 'sa': 'sa', 'tr': 'tr', 'un': 'un', 'vi': 'vi', });
lyr_cell_clermont_ferrand_au_1.set('fieldImages', {'id': '', 'pop_sc': '', 'pop_ar': '', 'pop_ca': '', 'pop_pi': '', 'pop_em': '', 'pop_ou': '', 'pop_re': '', 'pop_in': '', 'pop_et': '', 'ac': '', 'ag': '', 'al': '', 'am': '', 'aq': '', 'co': '', 'de': '', 'em': '', 'lo': '', 'ly': '', 'mc': '', 'nc': '', 'pr': '', 're': '', 'sum': '', 'rs': '', 'sa': '', 'tr': '', 'un': '', 'vi': '', });
lyr_cell_clermont_ferrand_au_1.set('fieldLabels', {'id': 'no label', 'pop_sc': 'inline label - visible with data', 'pop_ar': 'inline label - visible with data', 'pop_ca': 'hidden field', 'pop_pi': 'hidden field', 'pop_em': 'no label', 'pop_ou': 'hidden field', 'pop_re': 'hidden field', 'pop_in': 'no label', 'pop_et': 'no label', 'ac': 'no label', 'ag': 'no label', 'al': 'no label', 'am': 'no label', 'aq': 'no label', 'co': 'no label', 'de': 'no label', 'em': 'no label', 'lo': 'no label', 'ly': 'no label', 'mc': 'no label', 'nc': 'no label', 'pr': 'no label', 're': 'no label', 'sum': 'no label', 'rs': 'no label', 'sa': 'no label', 'tr': 'no label', 'un': 'no label', 'vi': 'no label', });
lyr_cell_clermont_ferrand_au_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});