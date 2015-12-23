
$('.btnState').click(function(){
	$('.btnState').toggleClass('btn-state');
	$('.btnState').toggleClass('btn-state-alt');
	$('.stateTick').toggleClass('state-tick');
	$('.stateTick').toggleClass('state-tick-alt');
});

$('.btnRemState').click(function(){
	$('.btnRemState').toggleClass('btn-state');
	$('.btnRemState').toggleClass('btn-state-alt');
	$('.stateRemTick').toggleClass('state-tick');
	$('.stateRemTick').toggleClass('state-tick-alt');
});

$('.btn-empty #dropSpan').click(function(){
	$('#dropSpan').toggleClass('drop-span-alt');
});



$( ".off-hover" ).hover(
	function() {
		which = $(this).attr('data-p');
		console.log(which);
		$("[data-p=" + which + "]").toggleClass('on-hover');
	},
	function() {
		$("[data-p=" + which + "]").toggleClass('on-hover');
});

var toggle = false;
var winSize = '';
$('.side-toggle').click(function(){
	var width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
	if(width > 768) {
		if(toggle === false) {
			$('.right-bar').css('transform', 'translate3d(-146px, 0px, 0px)');
			$('.content-wrap').addClass('content-wrap-alt');
			$('.drop-fade').addClass('drop-fade-alt');
			$('.footer-bottom').addClass('footer-bottom-alt');
			toggle = true;
		} else if(toggle === true) {
			$('.right-bar').css('transform', 'translate3d(35px, 0px, 0px)');
			$('.content-wrap').removeClass('content-wrap-alt');
			$('.drop-fade').removeClass('drop-fade-alt');
			$('.footer-bottom').removeClass('footer-bottom-alt');
			toggle = false;
		}
	} else if(width <= 768){
		$('.right-bar').css('transform', 'translate3d(35px, 0px, 0px)');
		$('.side-bar').toggleClass('side-bar-hidden');
	}
});

$(window).resize(function(){
	if ($(window).width() > 768) {
		if(toggle === true) {
			$('.right-bar').css('transform', 'translate3d(-146px, 0px, 0px)');
			$('.content-wrap').addClass('content-wrap-alt');
			$('.drop-fade').addClass('drop-fade-alt');
		} else if(toggle === false) {
			$('.right-bar').css('transform', 'translate3d(35px, 0px, 0px)');
			$('.content-wrap').removeClass('content-wrap-alt');
			$('.drop-fade').removeClass('drop-fade-alt');
		}
	} else if($(window).width() <= 768){
		if (toggle === true) {
			$('.right-bar').css('transform', 'translate3d(35px, 0px, 0px)');
			$('.side-bar').toggleClass('side-bar-hidden');
			toggle = false;
		};
	}
});

var content = "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>"

$('#addContent').click(function(){
	$('.content-wrap').append(content);
});



var expandChange = function(element) {
	element.css('font-size', '25px');
	element.css('top', '0')
	element.css('color', '#4D4D4D')
}
var expandFirst = function(element) {
	element.css('font-size', '14px');
	element.css('top', '4.5px')
	element.css('color', '#949494')
}

var stopChange = function(element) {
	element.css('border-color', '#4D4D4D');
}
var stopFirst = function(element) {
	element.css('border-color', '#949494');
}


$('.btn-expand').hover(
	function(){
		expandChange($(this).find('.fa-expand'));
		stopChange($(this).find('div'));
	},
	function(){
		expandFirst($(this).find('.fa-expand'));
		stopFirst($(this).find('div'));
	}
);

var toggleNow = function(binary, trueFunction, falseFunction) {
	if(binary == true){
		console.log(binary);
		trueFunction();
	} else if (binary == false) {
		console.log(binary);
		falseFunction();
	}
}

$('.campaign-box').data('escondido', true);
$('.campaign-box-mobile').data('escondido', true);
console.log($('.campaign-box').data('escondido'));

$('.btn-expand').click(function(){
	var father = $(this).closest('.campaign-box');
	console.log(father);
	var that = father.find('.campaign-hideable');
	toggleNow(
		father.data('escondido'),
		function(){
			that.toggle({
				duration: 500
			});
			father.data('escondido', false);
		},
		function(){
			that.toggle({
				duration: 500
			});
			father.data('escondido', true);
		}		
	);
});


$('.btn-expand-mobile').click(function(){
	var father = $(this).closest('.campaign-box-mobile');
	console.log(father);
	var that = father.find('.campaign-hideable');
	toggleNow(
		father.data('escondido'),
		function(){
			that.toggle({
				duration: 500
			});
			father.data('escondido', false);
		},
		function(){
			that.toggle({
				duration: 500
			});
			father.data('escondido', true);
		}		
	);
});



$('[data-toggle="popover"]').popover({
	container: '.campaign-box',
	html: true
});
$('[data-toggle="popoverga"]').popover({
	container: '.campaign-box-mobile',
	html: true
});
$('[data-toggle="popartist"]').popover({
	container: '.art-box',
	html: true
});


$(document).ready(function() {
    $('.nailthumb-container').nailthumb({
    	fitDirection: 'top center',
    });
});


$(document).ready($('.flex-list > div:nth-child(even)').addClass('oddColor'));



var Person = Backbone.Model.extend({
	defaults  : {
		id    : undefined,
		name  : undefined,
		email : undefined,
		state : undefined
	}
});
var person1 = new Person({name : "Carlos"});
var PeopleCollection = Backbone.Collection.extend({
	defaults: {
		model : Person
	},
	model : Person,
	url   : "../db/people.json"
});
var people = new PeopleCollection();
people.add(person1);

/*var decition = function (myModel) {
	if (myModel.get('state') == 'pending') {

	}
}

var renderState = function (myCollection) {

}*/

/* var stateCell = Backgrid.Cell.extend({
	model      : Person,
	template   : undefined,
	definition : function () {
		if (this.model.get('state') == 'pending') {
			this.template = '<span class="label label-finished">PENDING</span>';
		} else if (this.model.get('state') == 'approved') {
			this.template = '<span class="label label-scheduled">APPROVED</span>';			
		} else if (this.model.get('state') == 'rejected') {
			this.template = '<span class="label label-stopped">REJECTED</span>';
		}
	},
	render     : function () {
		this.definition();
		this.$el.html(this.template);
		this.delegateEvents();
		return this;
	}
});


people.fetch({
	success: function(model, response) {
		var columns = [{
			name     : "name",
			label    : "Name",
			editable : false,
			cell     : "string"
			},
			{
			name     : "email",
			label    : "E-mail",
			editable : false,
			cell     : "string"
			},
			{
			name     : "state",
			label    : "State",
			editable : false,
			cell     : stateCell
			}
		];

		var grid = new Backgrid.Grid({
			className  : "table table-striped",
			columns    : columns,
			collection : people
		});

		$('#userAccounts').append(grid.render().el)


	}
});*/

$('#srchBtn').click(function(){
	$('.res-input').css('transform', 'translate(0, 51px)');
	$('.res-input input').focus();
});
$('.res-input input').focusout(function(){
	$('.res-input').css('transform', 'translate(0, -51px)');
});


$('.dash-tabs li a').click(function(){
	console.log(this);
	if(!$(this).parent().hasClass('active')){
		$('.dash-tabs .active').toggleClass('active');
		$(this).parent().toggleClass('active');
	}
});

$('.d-tabs li a').click(function(){
	console.log(this);
	if(!$(this).parent().hasClass('active')){
		$('.d-tabs .active').toggleClass('active');
		$(this).parent().toggleClass('active');
	}
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

document.getElementById('subtag').addEventListener('click', function(){
	window.open("iframe.html", "_blank", "toolbar=no, resizable=no, width=350, height=600, scrollbars=no, top=150, left=500");
});








//Con selectAll me aseguro la manipulación de todos los elementos "X" dentro de
//".test".
var test = d3.select(".test").selectAll("p")
	.data([4, 8, 16, 32, 64, 128, 256, 1024, 2048, 4096, 8192, 16384, 32768])
	.text(function(d){return d});

//Añade tantos nodos como elementos hay en data.
test.enter().append("p")
	.text(function(d){return d});

//Remueve los nodos que no llevan data.
test.exit().remove("p");






var maxD = 250000;
var getPercentage = function(a, max){
	return (a*100)/max;
}
var top8 = [185000, 95000, 46000, 32000, 10000, 3000, 2400, 400];

var quantity = d3.selectAll(".country-info .quantity")
	.data(top8);
quantity.html(function(d){return d/1000 + 'k'});

var barFill = d3.selectAll(".country-info .fill-bar > div")
	.data(top8);
barFill.style('width', function(d){return getPercentage(d, maxD) + "%"});











var randomNum = function(min, max) {
	return Math.round(numbers.random.bates(1,min,max));
}
var mapValue = function(val, min, max, rmin, rmax) {
	return Math.round((((val - min)/(max - min)) * (rmax - rmin)) + rmin);
}
var getValue = function(){
	return mapValue(randomNum(0, 25000), 0, 25000, 0, 203);
}
var intervalArray = function(cant){
	var interval = [];
	for(var i = 0; i < cant; i++){
		interval[i] = getValue();
	}
	return interval;
}
var barValues = intervalArray(7);

var downloadBars = d3.select('.timeline-chart .downloads')
	.selectAll('div')
	.data(barValues);

downloadBars.enter()
	.append('div')
	.style("height",
	function(d){
		return d + 'px';
	});



$('.timeline-chart .downloads > div').ready(function() {
	console.log($('.timeline-chart .downloads > div').siblings('div'))
	var chartWidth = $('.timeline-chart .downloads').width();
	var getBarsCenterArray = function(){
		var array = [];
		var many = $('.timeline-chart .downloads > div').length;
		for(var i = 0; i < many; i++){
			var element = $('.timeline-chart .downloads > div')[i];
			console.log(element);
			var pos = element.position();
			array[i] = pos.left;

		}
		return array;
	}
	getBarsCenterArray();
	console.log('width: ' + chartWidth);
	console.log('centers: ' + getBarsCenterArray());
});



/*
var loadBars = (function(){
	var context = {downloads : barValues};
	var bars = $('#dlBars').html();
	var template = Handlebars.compile(bars);
	var html = template(context);
	$('.downloads').append(html);
})();
*/


/*
var loadReach = (function(){
	$('.downloads').ready(function() {
		var reachX = function(val, max) {
			return max - val;
		}
	});
})();
*/