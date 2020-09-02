
var data;
async function getDigimon(name) {
    try {
        let url = await fetch(`https://digimon-api.herokuapp.com/api/digimon/name/${name}`);
        let digimon = await url.json()
        return digimon[0];

    }
    catch (e) {
        console.log('Digimon Not Found!')
    }

}



$('.submitBtn').click(() => {
    data = $('.inputField').val()
    getDigimon(data).then(digimon => {
        $('.diginame').html('Digimon Name : ' + digimon.name)
        $('.digilevel').html('Digimon Level : ' + digimon.level)
        $('.img').attr('src', digimon.img);
    })
})







