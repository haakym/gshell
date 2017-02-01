(function() {

	const container = document.querySelector('.container');
	
	const containerWidth = parseInt(window.getComputedStyle(container).width, 10);
	const columns = containerWidth / 8;

	const containerHeight = parseInt(window.getComputedStyle(container).height, 10);
	const rows = containerHeight / 18;

	let finalText = 'Dominic'.split('');

	const middleRow = Math.round(rows/2);
	const middleColumn = Math.round(columns/2);

	for (var i = 0; i <= rows; i++) {
		let row = document.createElement('div')
		row.setAttribute('class', 'row');
		container.appendChild(row);
	}

	document.querySelectorAll('.row').forEach((row) => {
		for (var i = 0; i < columns; i++) {
			let unit = document.createElement('div')
			unit.setAttribute('class', 'unit');
			unit.innerHTML = '0';
			row.appendChild(unit);
		}
	});


	function updateUnit(time) {
		document.querySelectorAll('.unit').forEach((unit) => {
			unit.innerHTML = Math.floor(Math.random()*9);

			if (time > 1000) {
				// document.querySelector('.row:nth-child(17) div:nth-child(120)').

				if (unit.innerHTML > 5) {
					// unit.classList.remove('unit');
					unit.className = '';
					unit.className = 'blank';
				}
			}
			
		});

		setTimeout(() => {
			time += 100;
			updateUnit(time);
		}, 100);
	}

	updateUnit(0);

})();
