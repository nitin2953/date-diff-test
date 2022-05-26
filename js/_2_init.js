start_input.value = "2022-01-31";
end_input.value = "2022-02-28";


// local_date.textContent = "Your date format is " + new Date("2003-05-29").toLocaleDateString();
local_date.textContent = "📅 " + new Date("2003-05-29").toLocaleDateString();
local_date.onclick = () => { start_input.value = "2003-05-29"; end_input.valueAsDate = new Date(); calcAge() };

function oper(e, element) {
	if (!element.value) { element.focus(); return }

	let date = element.valueAsDate;

	if (e.shiftKey) date.setDate(date.getDate() - 1);
	else if (e.ctrlKey) {
		let y = date.getFullYear();
		let m = date.getMonth();
		let totalDays = new Date(y, m+2, 0).getDate();

		date.setDate(1)
		date.setMonth(m+1);
		date.setDate(totalDays);
	}
	else date.setDate(date.getDate() + 1);

	element.valueAsDate = date;
	calcAge();
}

start_oper.onclick = (e) => oper(e, start_input);
end_oper.onclick = (e) => oper(e, end_input);


function rcOper(e, element) {
	e.preventDefault();
	if (!element.value) { element.focus(); return }

	let date = element.valueAsDate;
	date.setDate(date.getDate() - 1);
	element.valueAsDate = date;

	calcAge();
}

start_oper.oncontextmenu = (e) => rcOper(e, start_input);
end_oper.oncontextmenu = (e) => rcOper(e, end_input);


trim.onclick = (e) => {
	let excessRows = document.querySelectorAll('tbody > tr:nth-child(15) ~ tr');
	if (e.shiftKey) excessRows = document.querySelectorAll('tbody > tr');;
	excessRows.forEach(row => row.remove());
}
trim.oncontextmenu = (e) => {
	e.preventDefault();
	let rows = document.querySelectorAll('tbody > tr');
	rows.forEach(row => row.remove());
}

swap.onclick = () => {
	[start_input.valueAsDate, end_input.valueAsDate] = [end_input.valueAsDate, start_input.valueAsDate];
	calcAge();
}


function preventSubmit(e) {
	e.preventDefault();
	calcAge();
}
form.addEventListener("submit", preventSubmit);

