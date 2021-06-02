function onClick(text) {
	alert(text)
}	

var line = "line";
var number = 2;
var bool = true;

class Table {
	constructor(tableName, tableHeigth, tableWidth){
		this.Name = tableName
		this.Width = tableWidth
		this.Heigth = tableHeigth
	}
}

var tablesArray = []

for(let i = 0; i < 100; i = i + 1) {
	tablesArray.push(
		new Table(
			Math.ceil(Math.random() * 10000),
			Math.random() * 100,
			Math.random() * 100,
		)
	)
}

var root = document.getElementById("root")

for(let i = 0; i < 100; i++) {
	var tableDiv = document.createElement("DIV")
	var tableName = document.createElement("H3")
	var tableWidth = document.createElement("DIV")
	var tableHeight = document.createElement("DIV")
	var button = document.createElement("BUTTON")

	tableName.append(tablesArray[i].Name)
	tableWidth.append(tablesArray[i].Width + " cm")
	tableHeight.append(tablesArray[i].Heigth + " cm")
	button.append("click me")
	button.onclick = () => onClick(tablesArray[i].Name)
	
	tableName.style.textAlign = "center"
	tableWidth.style.marginBottom = "5px"
	tableHeight.style.marginBottom = "5px"

	tableDiv.appendChild(tableName)
	tableDiv.appendChild(tableWidth)
	tableDiv.appendChild(tableHeight)
	tableDiv.appendChild(button)

	tableDiv.className="tableCard"

	root.appendChild(tableDiv)
}