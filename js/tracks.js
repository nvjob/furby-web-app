$(document).ready(function(){

var FBPlayer = function(jPlayerSelector, media, options) {
var	self = this,

defaults = {
supplied: "m4a, oga, wav",
cssSelectorAncestor: "#cp_container_1",
cssSelector: {
play: ".cp-play",
pause: ".cp-pause"
}
};

this.player = $(jPlayerSelector);
this.media = $.extend({}, media);
this.options = $.extend(true, {}, defaults, options);

this.eventNamespace = ".FBPlayer";

this._initPlayer();
};

FBPlayer.prototype = {

_initPlayer: function() {
var self = this;
this.player.jPlayer(this.options);

this.player.bind($.jPlayer.event.ready + this.eventNamespace, function(event) {
$(this).jPlayer("setMedia", self.media);
});

this.player.bind($.jPlayer.event.play + this.eventNamespace, function(event) {
$(this).jPlayer("pauseOthers");
});

this.player.bind($.jPlayer.event.pause + this.eventNamespace, function(event) {
$(this).jPlayer("stop");
});

}
};



/******************************************************************************************/



var myFBPlayer = new FBPlayer("#ikaet",
{
wav: "tracks/wav/ikaet.wav",
oga: "tracks/ogg/ikaet.ogg"
}, {
cssSelectorAncestor: "#cp_ikaet",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#furt1",
{
wav: "tracks/wav/furt1.wav",
oga: "tracks/ogg/furt1.ogg"
}, {
cssSelectorAncestor: "#cp_furt1",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#rigaet",
{
wav: "tracks/wav/rigaet.wav",
oga: "tracks/ogg/rigaet.ogg"
}, {
cssSelectorAncestor: "#cp_rigaet",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#furt",
{
wav: "tracks/wav/furt.wav",
oga: "tracks/ogg/furt.ogg"
}, {
cssSelectorAncestor: "#cp_furt",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#perec",
{
wav: "tracks/wav/perec.wav",
oga: "tracks/ogg/perec.ogg"
}, {
cssSelectorAncestor: "#cp_perec",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#utug",
{
wav: "tracks/wav/utug.wav",
oga: "tracks/ogg/utug.ogg"
}, {
cssSelectorAncestor: "#cp_utug",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#shlipa",
{
wav: "tracks/wav/shlipa.wav",
oga: "tracks/ogg/shlipa.ogg"
}, {
cssSelectorAncestor: "#cp_shlipa",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#muha",
{
wav: "tracks/wav/muha.wav",
oga: "tracks/ogg/muha.ogg"
}, {
cssSelectorAncestor: "#cp_muha",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#chesnok",
{
wav: "tracks/wav/chesnok.wav",
oga: "tracks/ogg/chesnok.ogg"
}, {
cssSelectorAncestor: "#cp_chesnok",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#riba",
{
wav: "tracks/wav/riba.wav",
oga: "tracks/ogg/riba.ogg"
}, {
cssSelectorAncestor: "#cp_riba",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#gadkaivoda",
{
wav: "tracks/wav/gadkaivoda.wav",
oga: "tracks/ogg/gadkaivoda.ogg"
}, {
cssSelectorAncestor: "#cp_gadkaivoda",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#tabletki",
{
wav: "tracks/wav/tabletki.wav",
oga: "tracks/ogg/tabletki.ogg"
}, {
cssSelectorAncestor: "#cp_tabletki",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#cocacola",
{
wav: "tracks/wav/cocacola.wav",
oga: "tracks/ogg/cocacola.ogg"
}, {
cssSelectorAncestor: "#cp_cocacola",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#sok",
{
wav: "tracks/wav/voda.wav",
oga: "tracks/ogg/voda.ogg"
}, {
cssSelectorAncestor: "#cp_sok",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#chai",
{
wav: "tracks/wav/chai.wav",
oga: "tracks/ogg/chai.ogg"
}, {
cssSelectorAncestor: "#cp_chai",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#voda",
{
wav: "tracks/wav/voda.wav",
oga: "tracks/ogg/voda.ogg"
}, {
cssSelectorAncestor: "#cp_voda",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#krovat",
{
wav: "tracks/wav/krovat.wav",
oga: "tracks/ogg/krovat.ogg"
}, {
cssSelectorAncestor: "#cp_krovat",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#govorit",
{
wav: "tracks/wav/govorit.wav",
oga: "tracks/ogg/govorit.ogg"
}, {
cssSelectorAncestor: "#cp_govorit",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#paetpesni",
{
wav: "tracks/wav/paetpesni.wav",
oga: "tracks/ogg/paetpesni.ogg"
}, {
cssSelectorAncestor: "#cp_paetpesni",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#tualet",
{
wav: "tracks/wav/tualet.wav",
oga: "tracks/ogg/tualet.ogg"
}, {
cssSelectorAncestor: "#cp_tualet",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#hamburger",
{
wav: "tracks/wav/hamburger.wav",
oga: "tracks/ogg/hamburger.ogg"
}, {
cssSelectorAncestor: "#cp_hamburger",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#nut",
{
wav: "tracks/wav/nut.wav",
oga: "tracks/ogg/nut.ogg"
}, {
cssSelectorAncestor: "#cp_nut",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#banan",
{
wav: "tracks/wav/banan.wav",
oga: "tracks/ogg/banan.ogg"
}, {
cssSelectorAncestor: "#cp_banan",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#kapusta",
{
wav: "tracks/wav/kapusta.wav",
oga: "tracks/ogg/kapusta.ogg"
}, {
cssSelectorAncestor: "#cp_kapusta",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#konfeti",
{
wav: "tracks/wav/konfeti.wav",
oga: "tracks/ogg/konfeti.ogg"
}, {
cssSelectorAncestor: "#cp_konfeti",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#cheese",
{
wav: "tracks/wav/cheese.wav",
oga: "tracks/ogg/cheese.ogg"
}, {
cssSelectorAncestor: "#cp_cheese",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#sup",
{
wav: "tracks/wav/sup.wav",
oga: "tracks/ogg/sup.ogg"
}, {
cssSelectorAncestor: "#cp_sup",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#tort",
{
wav: "tracks/wav/tort.wav",
oga: "tracks/ogg/tort.ogg"
}, {
cssSelectorAncestor: "#cp_tort",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#nota1",
{
wav: "tracks/wav/nota1.wav",
oga: "tracks/ogg/nota1.ogg"
}, {
cssSelectorAncestor: "#cp_nota1",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#nota2",
{
wav: "tracks/wav/nota2.wav",
oga: "tracks/ogg/nota2.ogg"
}, {
cssSelectorAncestor: "#cp_nota2",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#nota3",
{
wav: "tracks/wav/nota3.wav",
oga: "tracks/ogg/nota3.ogg"
}, {
cssSelectorAncestor: "#cp_nota3",
keyEnabled: true
});
var myFBPlayer = new FBPlayer("#nota4",
{
wav: "tracks/wav/nota4.wav",
oga: "tracks/ogg/nota4.ogg"
}, {
cssSelectorAncestor: "#cp_nota4",
keyEnabled: true
});
});
