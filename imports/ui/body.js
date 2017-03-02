import {
	Template
} from 'meteor/templating';


import './body.html';

import async from 'async';


let acumulado = "";
let inputArray = [];
let lineaActual = 0;
let casos = 0

Template.inout.onCreated(function inoutOnCreated() {
	this.answer = new ReactiveVar("");
});


Template.inout.helpers({
	answer() {
		return Template.instance().answer.get();
	}
});


Template.inout.events({
	'click button' (event, instance) {
		event.preventDefault();
		acumulado = "";
		var inputVal = $('#input').val();
		correr(inputVal, () => {
			instance.answer.set(acumulado);
		});
	},
});

function log(text) {
	acumulado += text + '\n';
}

function correr(input, callback) {
	try {
		inputArray = input.split('\n')
		if (inputArray.length < 3) callback(new Error('Texto de entrada inválido'));
		lineaActual = 0
		casos = parseInt(inputArray[lineaActual++]);
		let arrayAuxCasos = new Array(casos)


		async.eachSeries(arrayAuxCasos, function(file, callback) {
			let informacionCaso = inputArray[lineaActual++].split(' ').map((n) => parseInt(n))
			let tamaño = informacionCaso[0]
			let operaciones = informacionCaso[1]
			let arrayAuxOperaciones = new Array(operaciones);
			let matriz = crearMatriz(tamaño);

			async.eachSeries(arrayAuxOperaciones, function(file, callback) {
				let operacion = inputArray[lineaActual++]
				correrOperacion(operacion, matriz, (result) => {
					if (result || result == 0) {
						log(result);
					}
					callback();
				});
			});
			callback();
		}, function(err) {
			if (err) {
				console.log('Error: ', err);
			} else {
				callback();
			}
		});


	} catch (err) {
		console.log('Error: ', err);
	}
}



function crearMatriz(tamaño) {
	let matriz = []
	for (let i = 0; i < tamaño; i++) {
		matriz[i] = []
		for (let j = 0; j < tamaño; j++) {
			matriz[i][j] = []
			for (let k = 0; k < tamaño; k++) {
				matriz[i][j][k] = 0
			}
		}
	}
	return matriz
}

function correrOperacion(operacion, matriz, callback) {
	let operacionArray = operacion.split(' ')
	let tipo = operacionArray[0]
	if (tipo === 'UPDATE') {
		correrUpdate(operacionArray, matriz, () => {
			callback(null);
		})
	} else if (tipo === 'QUERY') {
		correrQuery(operacionArray, matriz, (result) => {
			callback(result);
		})
	} else {
		throw new Error('Tipo de operación inválido')
	}
}

function correrUpdate(valores, matriz, callback) {
	const coord = {
		x: parseInt(valores[1]) - 1,
		y: parseInt(valores[2]) - 1,
		z: parseInt(valores[3]) - 1
	}
	const valor = parseInt(valores[4])
	matriz[coord.x][coord.y][coord.z] = valor
	callback();
}

function correrQuery(valores, matriz, callback) {
	const coordInicio = {
		x: parseInt(valores[1]) - 1,
		y: parseInt(valores[2]) - 1,
		z: parseInt(valores[3]) - 1
	}
	const coordFinal = {
		x: parseInt(valores[4]) - 1,
		y: parseInt(valores[5]) - 1,
		z: parseInt(valores[6]) - 1
	}
	let suma = 0
	for (let x = coordInicio.x; x <= coordFinal.x; x++) {
		for (let y = coordInicio.y; y <= coordFinal.y; y++) {
			for (let z = coordInicio.z; z <= coordFinal.z; z++) {
				suma += matriz[x][y][z]
			}
		}
	}

	console.log(suma)
	callback(suma);
}