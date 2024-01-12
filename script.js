function converter(){
    //Verifica e pega a temperatura atual digitada
    var temp = document.getElementById('temp')
    var t = Number(temp.value)

    //Seleciona a temperatura atual
    var temperature = document.getElementsByName('temperature')
    var tempSel = ''
    if(temperature[0].checked){
        tempSel = 'Celsius'
    } else if(temperature[1].checked){
        tempSel = 'Fahrenheit'
    } else {
        tempSel = 'Kelvin'
    }

    //Seleciona a temperatura necessária
    var temperatureS = document.getElementById('temps')
    var tempNes = ''
    if(temperatureS[0].selected){
        tempNes = 'Celsius'
    } else if(temperatureS[1].selected) {
        tempNes = 'Fahrenheit'
    } else {
        tempNes = 'Kelvin'
    }

    var res = document.getElementById('result')

    //Calculos e conversão
    var resultado = 0
    if(tempSel == tempNes){
        alert('Temperatura atual e necessária iguais!!')
        res.innerHTML = ''
    } else if(tempSel == 'Celsius' && tempNes == 'Fahrenheit') {
        resultado = 1.8 * t + 32
        res.innerHTML = `${t}º ${tempSel} convertidos para ${tempNes} é igual a ${resultado.toFixed(2)}º`
    } else if(tempSel == 'Celsius' && tempNes == 'Kelvin'){
        resultado = t + 273
        res.innerHTML = `${t}º ${tempSel} convertidos para ${tempNes} é igual a ${resultado.toFixed(2)}º`
    } else if(tempSel == 'Fahrenheit' && tempNes == 'Celsius'){
        resultado = (t - 32)/1.8
        res.innerHTML = `${t}º ${tempSel} convertidos para ${tempNes} é igual a ${resultado.toFixed(2)}º`
    } else if(tempSel == 'Fahrenheit' && tempNes == 'Kelvin'){
        resultado = (t-32) * 5/9 + 273
        res.innerHTML = `${t}º ${tempSel} convertidos para ${tempNes} é igual a ${resultado.toFixed(2)}º`
    } else if(tempSel == 'Kelvin' && tempNes == 'Celsius'){
        resultado = t - 273
        res.innerHTML = `${t}º ${tempSel} convertidos para ${tempNes} é igual a ${resultado.toFixed(2)}º`
    } else if(tempSel == 'Kelvin' && tempNes == 'Fahrenheit'){
        resultado = (t-273) * 1.8 + 32
        res.innerHTML = `${t}º ${tempSel} convertidos para ${tempNes} é igual a ${resultado.toFixed(2)}º`
    }
}