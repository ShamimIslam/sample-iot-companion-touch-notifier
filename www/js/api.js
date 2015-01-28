// ********************SET YOUR API KEY HERE**********************
// Insert your Beats Music API Key here. See README for more info.
var client_id = 'PLACE-YOUR-API-KEY-HERE';
// ***************************************************************

var invalidKey = false;
checkKeyValidity();
$( document ).ready(function() {
    $('body').on('click','.album-image', function() {
        window.open('https://listen.beatsmusic.com/albums/' + this.attributes.albumId.value, '_blank');
    });
    $('body').on('click','.playlist-image', function() {
        window.open('https://listen.beatsmusic.com/playlists/' + this.attributes.playlistId.value, '_blank');
    });
});
                    

// Check if valid API Key
function checkKeyValidity() {
	var url = 'https://partner.api.beatsmusic.com/v1/api/discoveries/featured?client_id=' + client_id;

	// Docs: http://app-framework-software.intel.com/api2/index.html#$_get
	keyTest = $.get(url, "GET", function(data) {});
	keyTest.onreadystatechange = function() {
		if (keyTest.readyState == 4) {
			if (keyTest.status == 403) {
				invalidKeyAlert();
				invalidKey = true;
			}
		}
	}
}

function invalidKeyAlert() {
	alert('Invalid API key. See README and edit js/api.js file.');
}

// Make featured API call to Beats Music
// Docs: https://partner.api.beatsmusic.com/v1/api/discoveries/featured 
function fetchHighlights(method) {
    if (invalidKey) {
        invalidKeyAlert();
        return false;
    }
        
	var search = $('#search').val();
	var url = 'https://partner.api.beatsmusic.com/v1/api/discoveries/' + method + '?client_id=' + client_id;
	// Docs: http://app-framework-software.intel.com/api2/index.html#$_get
    console.log(url);
	var apiCall = $.getJSON(url, function(data) {
		highlightsCallback(method,data);
	});
}

function highlightsCallback(method,data) {
    if (!data.data) {
		alert('No featured albums were found. Sorry!');
		return false;
	}
	var featured = data.data;
	// $("#beatsmusic-results-output").show();
    var highlights_title = (method == 'featured') ? 'Featured Recommendations' : 'Editor Picks';
    
	$('#recommended-highlight-title').html(highlights_title);
    
    var html = '<br />';
	$.each(featured, function(index, recommendation) {
        console.log(index);
		if ((recommendation.type == 'recommendation') && (recommendation.content.type == 'album')) {
            html += '<div class="album-recommendation" albumId="' + recommendation.content.id + '">';
            html += '<div class="album-title">' + recommendation.content.title + ' by ' + recommendation.content.artist_display_name + '</div><br />';
            html += '<img albumId="' + recommendation.content.id + '" class="album-image" src="https://partner.api.beatsmusic.com/v1/api/albums/' + recommendation.content.id + '/images/default?client_id=' + client_id + '">';
            html += '</div>';
        }
        else if ((recommendation.type == 'recommendation') && (recommendation.content.type == 'playlist')) {
            html += '<div class="playlist-recommendation" playlistId="' + recommendation.content.id + '">';
            html += '<div class="playlist-title">' + recommendation.content.name + ' by ' + recommendation.content.user_display_name + '</div><br />';
            html += '<img playlistId="' + recommendation.content.id + '" class="playlist-image" src="https://partner.api.beatsmusic.com/v1/api/playlists/' + recommendation.content.id + '/images/default?client_id=' + client_id + '">';
            html += '</div><br /><br />';
        }
 
	});
    
    $("#recommendations-content").append(html);
    activate_subpage("#recommendations");
}
