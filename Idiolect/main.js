

$( document ).ready(function() {
    console.log( "ready!" );
    (function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.binding();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="http://i2.wp.com/www.koreaobserver.com/wp-content/uploads/2015/05/Multiculturalism.jpg?fit=810%2C9999"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "drive",
			img: "matching_game_pics/Drive.png",
			id: 1,
		},
		{
			name: "kiss",
			img: "matching_game_pics/kiss.png",
			id: 2
		},
		{
			name: "wave",
			img: "matching_game_pics/wave.png",
			id: 3
		},
		{
			name: "argue",
			img: "matching_game_pics/argue.png",
			id: 4
		}, 
		{
			name: "clap",
			img: "matching_game_pics/clap.png",
			id: 5
		},
		{
			name: "crash",
			img: "matching_game_pics/crash.png",
			id: 6
		},
		{
			name: "dance",
			img: "matching_game_pics/dance.png",
			id: 7
		},
		{
			name: "walk",
			img: "matching_game_pics/walk.png",
			id: 8
		},
		{
			name: "laugh",
			img: "matching_game_pics/laugh.png",
			id: 9
		},
		{
			name: "measure",
			img: "matching_game_pics/measure.png",
			id: 10
		},
		{
			name: "smile",
			img: "matching_game_pics/smile.png",
			id: 11
		},
		{
			name: "throw",
			img: "matching_game_pics/throw.png",
			id: 12
		},
		// {
		// 	name: "wrestle",
		// 	img: "matching_game_pics/wrestle.png",
		// 	id: 13
		// },
		// {
		// 	name: "write",
		// 	img: "matching_game_pics/write.png",
		// 	id: 14
		// },





	];
    
	Memory.init(cards);


	})();
});

