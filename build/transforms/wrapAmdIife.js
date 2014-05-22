define([], function(){
	return function(resource, callback) {
		var prepend = "var __result = {};(function() {\n";
		var append = "\n}).call(__result);\nreturn __result";
		resource.text = prepend + resource.text + append;
		callback(resource, null);
		return callback;
	};
});