function calculTtc() {
    let ht = +document.querySelector('#ht').value;
    let taux = +document.querySelector('#taux').value/100 +1;

    let ttc = ht*taux;
    document.querySelector('.htTtc').innerHTML=ttc;
}

function calculHt() {
    let ttc1= +document.querySelector('#ttc').value;
    let taux1 = +document.querySelector('#taux1').value/100 + 1;

    let ht1 = ttc1/taux1;
    document.querySelector('.ttcHt').innerHTML=ht1;
}

function calculTaux() {
    let ttc2= +document.querySelector('#ttc1').value;
    let ht2 = +document.querySelector('#ht1').value;

    let taux2 = (ttc2/ht2 -1)*100;
    document.querySelector('.taux').innerHTML=taux2;
}

function calculRemise() {
    let remise= +document.querySelector('#remise').value;
    let tauxremise = +document.querySelector('#tauxremise').value;

    let ttcreduit = (100-tauxremise)/100*remise;
    document.querySelector('.remise').innerHTML=ttcreduit;
}

function calculTauxRemise() {
    let avant= +document.querySelector('#avantreduc').value;
    let apres = +document.querySelector('#apresreduc').value;

    let pendant = (1-(apres/avant))*100;
    document.querySelector('.tauxremise').innerHTML=pendant+"%";
}
