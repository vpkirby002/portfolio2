

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
				<div class="back"><img src="https://previews.123rf.com/images/scanrail/scanrail1111/scanrail111100040/11334121-Golden-royal-crown-isolated-on-white-background-Stock-Photo-crown-king-corona.jpg"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "bey",
			img: "http://img.usmagazine.com/480-width/beyonce-17-4efcafb6-dafc-401e-b5d3-4ce6bc402bc7.jpg",
			id: 1,
		},
		{
			name: "riri",
			img: "https://cdn.cliqueinc.com/posts/215734/-2079791-1486950903.600x0c.jpg",
			id: 2
		},
		{
			name: "cash_me_outside",
			img: "http://static.snopes.com/app/uploads/2017/01/cash-me-outside-suicide_fb-865x452.jpg",
			id: 3
		},
		{
			name: "obamas",
			img: "http://cdn2.business2community.com/wp-content/uploads/2017/03/BarackMichelleObama-900x600.jpg",
			id: 4
		}, 
		{
			name: "trump",
			img: "http://www.slate.com/content/dam/slate/articles/news_and_politics/politics/2016/04/160422_POL_Donald-Trump-Act.jpg.CROP.promo-xlarge2.jpg",
			id: 5
		},
		{
			name: "got",
			img: "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
			id: 6
		},
		{
			name: "chance_the_rapper",
			img: "http://i.imgur.com/NaI3U6v.jpg",
			id: 7
		},
		{
			name: "cardib",
			img: "http://img.ulximg.com/image/355x355/cover/1497632044_62f185b13f7182aa011b48ec37fbec58.jpg/55cdd6e99712e440278cea735b268d93/1497632044_6634e0433b325c541bc4f2bb767af2a3.jpg",
			id: 8
		},
		{
			name: "donald_glover",
			img: "http://s3.amazonaws.com/hiphopdx-production/2017/09/170918-Donald-Glover-Getty-800x600.jpg",
			id: 9
		},
		{
			name: "kevin_hart",
			img: "https://i.ytimg.com/vi/I8YIXk_18i0/maxresdefault.jpg",
			id: 10
		},
		{
			name: "issa",
			img: "http://hollywoodsblackrenaissance.com/wp-content/uploads/2016/12/insecure.jpeg",
			id: 11
		},
		{
			name: "colin_kaepernick",
			img: "https://usatthebiglead.files.wordpress.com/2016/10/gettyimages-612065034-e1476637045903.jpg?w=1000&h=600&crop=1",
			id: 12
		},
		// {
		// 	name: "migos",
		// 	img: "http://www.hotnewhiphop.com/image/620x412/cover/1502122571_fef9a4058b2e43b682edf7c5b9fbe434.jpg/5eef2648c430095229d381c29c68533a/1502122480_9b16f2765a915e9388a28dc54a4b08d8.jpg",
		// 	id: 13
		// },
		// {
		// 	name: "the_read",
		// 	img: "https://i2.wp.com/blackyouthproject.com/wp-content/uploads/2016/01/kid-fury-crissle-the-read.jpg?fit=1170%2C1170",
		// 	id: 14
		// },





	];
    
	Memory.init(cards);


	})();
});

