//Función ayudante que separa con comas los números
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
 //--------------------------------------------------------------


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
	var raw = randomNum(0, 25000);
	var map = mapValue(raw, 0, 25000, 0, 203)
	return {
		raw : raw,
		map : map
	};
}
var intervalArray = function(cant){
	var rawInterval = [];
	var interval = [];
	
	for(var i = 0; i < cant; i++){
		var vx = getValue();
		interval[i] = vx.map;
		rawInterval[i] = vx.raw;
	}
	return {
		interval : interval,
		rawInterval : rawInterval
	};
}
var bar = intervalArray(7);
var barValues = bar.interval;
var reach = intervalArray(7);
var reachValues = reach.interval;
var rawValues = (function(cant){
	var arreglo = [];
	arreglo[0] = [];
	arreglo[1] = [];
	for(var i = 0; i < cant; i++){
		arreglo[0].push(bar.rawInterval[i]);
		arreglo[1].push(reach.rawInterval[i]);
	}
	return arreglo;
})(7);


var downloadBars = d3.select('.timeline-chart .downloads')
	.selectAll('div')
	.data(barValues);

downloadBars.enter()
	.append('div')
	.style("height", function(d){
		return d + 'px';
	});



$('.timeline-chart .downloads > div').ready(function() {
	var firstValues = updateValues();
	var d3Obj = afterBars(firstValues.poly, firstValues.dots).val;
	$(window).resize(function(){
		var update = updateValues();
		updateChart(d3Obj.potentialReach, d3Obj.infoDots, d3Obj.tooltipDiv, update);
	});
});

var updateChart = function(potentialReach, infoDots, tooltipDiv, up){
	potentialReach.data([up.poly]);
	potentialReach.attr('points', function(d){
		var puntos = '';
		d.forEach(function(c, i){
			puntos = puntos + c.x + ',' + c.y + ' ';
		});
		return puntos;
	});

	infoDots.data(up.dots);
	infoDots.attr('cx', function(d){
		return d.x
	})
	.attr('cy', function(d){
		return d.y
	});

	tooltipDiv.data(up.dots);
	tooltipDiv.style('left', function(d){
		return (d.x + 15) + 'px';
	})
	.style('top', function(d){
		return (d.y - 10) + 'px';
	});

	tooltipHover();
};


var updateValues = function(){
	var arrayX = [];

	(function(){
		$('.timeline-chart .downloads > div').each(function(index, item){
			arrayX[index] = $(this).position().left;
		})
	})();

	var chartWidth = $('.timeline-chart .downloads').width();
	var chartHeight = 203;
	var barWidth = $('.timeline-chart .downloads > div:first-child').width();


	var poly = [];
	var dots = [];

	(function(){
		for(var i = 0; i < reachValues.length; i++){
			poly[i] = {
				x : arrayX[i] + barWidth/2 - 40,
				y : chartHeight - reachValues[i]
			};
		}
		dots = poly.slice(0);
		poly.push(
			{x : chartWidth + 1, y : poly[reachValues.length-1].y},
			{x : chartWidth + 1, y : chartHeight},
			{x : 1, y : chartHeight},
			{x : 1, y : poly[0].y}
		);
	})();

	return {
		poly : poly,
		dots : dots
	}
}


var afterBars = function(poly, dots){

	var potentialReach = d3.select('#Layer_1')
		.selectAll('polygon')
		.data([poly]);

	potentialReach.enter()
		.insert('polygon')
		.attr('id', 'reach')
		.attr('fill', '#7CD7F7')
		.attr('stroke-miterlimit', '10')
		.attr('points', function(d){
			var puntos = '';
			d.forEach(function(c, i){
				puntos = puntos + c.x + ',' + c.y + ' ';
			});
			return puntos;
		});

	var infoDots = d3.select('#Layer_1')
		.selectAll('ellipse')
		.data(dots);

	infoDots.enter()
		.insert('ellipse')
		.attr('class', 'reachTool')
		.attr('cx', function(d){
			return d.x
		})
		.attr('cy', function(d){
			return d.y
		})
		.attr('rx', '4')
		.attr('ry', '4')
		.attr('fill', '#d5d6d8')
		.attr('data-pairs', function(d, i){
			return i;
		})
		.on('mouseover', function(){
			d3.select(this)
			.datum(function(){
				console.log(this.dataset)
			}).transition()
				.duration(1000)
				.attr('fill', '#395360')
				.attr('rx', '10')
				.attr('ry', '10');

/*			tooltipDiv.style('visibility', 'visible')
				.transition()
				.duration(1000)
				.style('opacity', '0.85');
*/
		})
		.on('mouseout', function(){
			d3.select(this).transition()
				.duration(1000)
				.attr('fill', '#d5d6d8')
				.attr('rx', '4')
				.attr('ry', '4');

/*			tooltipDiv.transition()
				.duration(1000)
				.style('opacity', '0')
				.each('end', function(){
					d3.select(this).style('visibility', 'hidden');
				})
*/		});

	var dotsPos = [];
	$('.reachTool').each(function(index, element){
		dotsPos[index] = {x : $(element).offset().left, y : $(element).offset().top};
	})


	var tooltipDiv = d3.select('.timeline')
		.selectAll('.chart-tooltip')
		.data(dotsPos);

		tooltipDiv.enter()
			.append('div')
			.classed('chart-tooltip', true)
			.style('left', function(d){
				return (d.x + 15) + 'px';
			})
			.style('top', function(d){
				return (d.y - 10) + 'px';
			})
			.attr('data-pairs', function(d, i){
				return i;
			});


	var count = 0;

	var tooltipInfo = tooltipDiv.selectAll('span')
		.data(rawValues)
		.enter()
		.append('span')
		.html(function(d, i){
			var retorno = '';
			if(i % 2 == 0){
				retorno = 'Downloads: ' + numberWithCommas(d[count]);
				return retorno;
			} else if(i % 2 == 1) {
				retorno = 'Potential Reach: ' + numberWithCommas(d[count]);
				count ++;
				return retorno;
			}
		});

		tooltipHover();

	return {
		val : {
			potentialReach : potentialReach,
			infoDots : infoDots,
			tooltipDiv : tooltipDiv
		}
	}
}

var tooltipHover = function(){
	$('.reachTool').hover(function(){
		var which = $(this).attr('data-pairs');
		$('.chart-tooltip').filter('[data-pairs=' + which + ']').fadeIn(1000);
	}, function(){
		var which = $(this).attr('data-pairs');
		$('.chart-tooltip').filter('[data-pairs=' + which + ']').fadeOut(1000);
	})
}