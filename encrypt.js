var e = 19;
var n = 1817;

RSACode = function(uPwdPlaintText) {
	var ca = new Array();
	ca = uPwdPlaintText;
	var strTmp = "";
	for (var i = 0; i < ca.length; i++) {
		var t = new Array();
		var nf = new DecimalFormat();
		nf.applyPattern("00");
		t = nf.format(ca[i].charCodeAt() - 32);
		for (var j = 0; j < 2; j++) {
			var m = Math.pow(t[j], e);
			var c = m % n;
			var tranC = "";
			nf.applyPattern("00");
			tranC = nf.format(c);
			strTmp = strTmp + tranC;
			alert(tranC);
		};
	};
	alert(strTmp);
};