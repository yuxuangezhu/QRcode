// var url = window.location.href;
chrome.tabs.getSelected(null, function(tab) {
	console.log(tab)
	try {
		build_QR({
			qr: tab.url
		})
	} catch (e) {
		$('.qrcode').text('链接文字过长')
	}

	$('.text').val(tab.url)
})
$('.text').focus();
$('.submit').on('click', function() {
	var qr = $('.text').val();
	try {
		build_QR({
			qr: qr
		})
	} catch (e) {
		$('.qrcode').text('链接文字过长')
	}
})

$(document).on('keydown', function(e) {
	if (e.keyCode == 13) {
		var qr = $('.text').val();
		try {
			build_QR({
				qr: qr
			})
		} catch (e) {
			$('.qrcode').text('链接文字过长')
		}
	}
	// console.log(e)
})

function build_QR(obj) {
	$('.qrcode').empty();
	var qrcode = new QRCode(document.querySelector(".qrcode"), {
		text: obj.qr,
		width: obj.size || 200,
		height: obj.size || 200,
		colorDark: obj.dark || "#000000",
		colorLight: obj.light || "#ffffff",
		correctLevel: QRCode.CorrectLevel.H
	});
}