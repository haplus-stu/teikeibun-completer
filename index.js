"use strict";
let text = document.getElementById("text");
text.addEventListener("keyup", () => {
	if (~text.value.indexOf("ac;")) {
		auto_complete();
	}
});

function escape_tag(str) {
	str.replace("<", "&lt;");
	str.replace(">", "&gt;");
	return str;
}

function auto_complete() {
	let begin_enter_box = document.getElementById("begin-enter-status");
	let end_enter_box = document.getElementById("end-enter-status");
	let end_str = document.getElementById("end-str");
	let begin_str = document.getElementById("begging-str");
	let text = document.getElementById("text");
	if (
		begin_str.value == "" ||
		end_str.value == "" ||
		(begin_str.value == "" && end_str.value == "")
	) {
		throw alert("未入力の項目があります");
	}
	let str = text.value.slice(0, -3);
	console.log(str);
	if (begin_enter_box.checked && end_enter_box.checked) {
		let disp_text =
			escape_tag(begin_str.value) +
			"\n" +
			escape_tag(str) +
			"\n" +
			escape_tag(end_str.value);
		text.value = disp_text;
	} else if (begin_enter_box.checked) {
		let disp_text =
			escape_tag(begin_str.value) +
			"\n" +
			escape_tag(str) +
			escape_tag(end_str.value);
		text.value = disp_text;
	} else if (end_enter_box.checked) {
		let disp_text =
			escape_tag(begin_str.value) +
			escape_tag(str) +
			"\n" +
			escape_tag(end_str.value);
		text.value = disp_text;
	} else {
		let disp_text =
			escape_tag(begin_str.value) +
			escape_tag(str) +
			escape_tag(end_str.value);
		text.value = disp_text;
	}

	console.log(disp_text);
}
