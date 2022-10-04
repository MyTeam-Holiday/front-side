// show env
$(window).load(function(){
	var env = "";
	if (window.location.host.split(".").length == 3) {
		env = '[' + window.location.host.split(".")[0].toUpperCase() + '] -';
	};
	$('#brand')[0].innerHTML = $('#brand')[0].innerHTML.replace('%Name%', env);
});
