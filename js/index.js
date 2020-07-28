$(document).ready(function() {
	var time = new Date(),
		h = time.getHours(),
		m = time.getMinutes();
	var imageUrl;
	var rand;

	//display the time in HH:MM AM/PM format
	if (m < 10) {
		m = '0' + m;
	}

	var clock;
	if (h > 11) {
		if (h > 12) {
			h = h - 12;
			clock = 'THE TIME IS NOW:' + '<br><span>' + h + ':' + m + 'PM</span>';
			h = h + 12;
		} else {
			clock = 'THE TIME IS NOW:' + '<br><span>' + h + ':' + m + 'PM</span>';
		}
	} else {
		clock = 'THE TIME IS NOW:' + '<br><span>' + h + ':' + m + 'AM</span>';
	}

	//Grace sleeps from 9PM to 7AM
	var isAsleep;
	if (6 < h && h < 21) {
		isAsleep = 'GRACE IS:<br><span>NOT ASLEEP</span>';
		rand = Math.floor(Math.random() * 5) + 1; //random number from 1 to 5
		imageUrl = './img/awake' + rand + '.jpg';
	} else {
		isAsleep = 'GRACE IS:<br><span>OBVIOUSLY ASLEEP</span>';
		rand = Math.floor(Math.random() * 3) + 1; //random number from 1 to 3
		imageUrl = './img/asleep' + rand + '.jpg';
	}

	$('body').css('background-image', 'url(' + imageUrl + ')');
	$('#clock').html(clock);
	$('#isAsleep').html(isAsleep);
});