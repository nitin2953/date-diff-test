// convert Date() to date input value
function convertDate(date) {
	let tmp = new Date(date);
	let y = tmp.getFullYear();
	let m = tmp.getMonth() + 1;
	let d = tmp.getDate();
	return `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d}`;
}


function ymd(result) {
	let y = result.years;
	let m = result.months;
	let d = result.days;
	return `${y}Y ${m < 10 ? "0" + m : m}M ${d < 10 ? "0" + d : d}D`;
}

function writeToTable(startDate, endDate, temporalDiff, fctemporalDiff, luxonDiff, third, isSame, bday) {
	return (`
		<tr>
			<td>${startDate}</td>
			<td>${endDate}</td>
			<td>${temporalDiff}</td>
			<td>${fctemporalDiff}</td>
			<td>${luxonDiff}</td>
			<td class="${third}">${third}</td>
			<td>${isSame}</td>
			<td>${bday}</td>
		</tr>
	`)
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// convert date to eg. "6 May 2020"
function convertDateToString(date) {
	date = new Date(date);
	let y = date.getFullYear();
	let m = date.getMonth();
	let d = date.getDate();
	return `${d < 10 ? "0" + d : d} ${months[m]} ${y}`;
}


// Check is birthday
function checkBDay(startDate, endDate) {
	let start = new Date(startDate);
	let end = new Date(endDate);
	let startDay = start.getDate();
	let endDay = end.getDate();
	let startMonth = start.getMonth();
	let endMonth = end.getMonth();

	return startMonth === endMonth && startDay === endDay ? "🎉" : "";
}


// new Date("2003-05-29") to new Date.UTC
function convertDateToUTC(date) {
	let tmp = new Date(date);
	let y = tmp.getFullYear();
	let m = tmp.getMonth();
	let d = tmp.getDate();
	return {
		y: y,
		m: m,
		d: d
	}
}


// check same result
function checkSame(value1, value2) {
	// remove - and whitespace
	value1 = value1.replace(/\s/g, "");
	value1 = value1.replace(/-/g, "");
	value2 = value2.replace(/\s/g, "");
	value2 = value2.replace(/-/g, "");
	return value1 === value2 ? true : false;
}