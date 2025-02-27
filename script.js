const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const prices = document.querySelectorAll(".price");
	let total = 0;

	prices.forEach((price) => {
		total += Number(price.innerText);
	});

	const totalPriceRow = document.createElement("tr");
	const totalPriceData = document.createElement("td");

	totalPriceData.innerText = "Total Price: " + total;
	totalPriceRow.appendChild(totalPriceData);

	const table = document.getElementById("ans");
    table.appendChild(totalPriceRow);
};

getSumBtn.addEventListener("click", getSum);

