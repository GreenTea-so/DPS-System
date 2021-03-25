
var bank_adr = "0xd3e049db62233e80f44e7a5a3e75f1474e609d1b"
var bank_pass = "123"
var company_adr = "0x6af0a1ddd80f9607b0597be17278f4f1185e0a32"
var company_pass = "123"

//создание пользователя
function create_user(login, pass, FIO, staj, DTP, shtraf_dest, strah_vznos, balance){
    if (staj>100 || DTP>100 || shtraf_dest>100 || strah_vznos>100){
        return 0;
    }
    
    var address = personal.newAccount(pass)
    personal.unlockAccount(eth.accounts[0], "123")
    setTimeout(function(){
        eth.sendTransaction({from: eth.accounts[0], to: address, value: balance * (1000000000000000000)})
    }, 2000)
    setTimeout(function(){
        dps.create_user.sendTransaction(address, login, FIO, staj, DTP, shtraf_dest, strah_vznos, {from: eth.accounts[0]})
    }, 15000)
}

//авторизация
function autorization(login, pass){
    var address = dps.return_adr.call(login)
    console.log(address)
    personal.unlockAccount(address, pass, 9999)
    eth.defaultAccount = address
}

//просмотр пользователя
function check_user(){
    var user
    //console.log(eth.defaultAccount, company_adr)
    if (eth.defaultAccount === bank_adr || eth.defaultAccount === company_adr){
        user = eth.getBalance(eth.defaultAccount)/ 1000000000000000000
        console.log(user)
    }
    else{
        user = dps.check_user.call()
        console.log(user[0], user[1], user[2],user[3],user[4], user[5] /1000000000000000000, user[6], user[8], eth.getBalance(eth.defaultAccount)/1000000000000000000)
    }
    
}

//добавление водительского удостоверения
function drive_add(drive_number, date, category){
    var srok = Date.parse(date)/1000
    //console.log(srok)
    setTimeout(function(){
        dps.drive_add.sendTransaction(drive_number, srok, category, {from: eth.defaultAccount})
    }, 4000)
}

//просмотр водительского удостоверения
function check_drive(){
    var drive_number = dps.check_user.call()
    var drive = dps.check_drive.call(drive_number[1])
    var date = new Date(1970, 0, 1)
    date.setSeconds(drive[1])
    var month = ("0" + (date.getMonth() + 1)).slice(-2)
            var day = ("0" + date.getDate()).slice(-2)
    if (drive[2] ==""){
        return 0
    }        
    console.log(drive[0], date.getFullYear() + '-' + month + '-' + day, drive[2])
}

//просморт штрафов
function check_shtrafs(){
    var len = dps.check_lens.call()
    for(i =0; i< len[1]; i++){
        var shtraf = dps.check_shtraf.call(i)
        var date = new Date(1970, 0, 1)
        date.setSeconds(shtraf[1])
        var month = ("0" + (date.getMonth() + 1)).slice(-2)
        var day = ("0" + date.getDate()).slice(-2)
        console.log(i, shtraf[0], date.getFullYear() + '-' + month + '-' + day)
    }
}

//продление срока действия ВУ
function update_staj(){
    dps.update_staj.sendTransaction({from: eth.defaultAccount})
}

//просмотр сообщений от службы ДПС
function check_msg(){
    var len = dps.check_lens.call()
    for(i =0; i< len[2]; i++){
        var msg = dps.check_msg.call(i)
        var date = new Date(1970, 0, 1)
        date.setSeconds(msg[1])
        var month = ("0" + (date.getMonth() + 1)).slice(-2)
        var day = ("0" + date.getDate()).slice(-2)
        console.log(i, msg[0], date.getFullYear() + '-' + month + '-' + day)
    }
}

//просмотр ТС
function check_cars(){
    var len = dps.check_lens.call()
    for(i =0; i< len[0]; i++){
        var car = dps.check_car.call(i)
        console.log(i, car[0], car[1], car[2]/1000000000000000000, car[3])
    }
}

//регистрация ТС
function registr_car(category, price, srok){
    dps.registr_car.sendTransaction(category, price * 1000000000000000000, srok, {from: eth.defaultAccount})
}

//просмотр страховых случаев
function shtraf_dps(drive_number){
    dps.shtraf_dps.sendTransaction(drive_number, {from: eth.defaultAccount})
}

//оплата штрафа
function shtraf_driver(id_shtraf){
    var getData = dps.shtraf_driver.getData(id_shtraf)
    eth.sendTransaction({from: eth.defaultAccount, to: dps.address, data:getData, value: 10000000000000000000})
}

//подсчет суммы страховки
function strahovka(id_car){
    dps.strahovka.sendTransaction(id_car, {from: eth.defaultAccount})
    setTimeout(function(){
        var value = dps.check_user.call()
        console.log("Сумма строховки равна: " ,value[7]/ 1000000000000000000)
    },20000)
}

//оформление страховки (перевод средств)
function strahovka_vznos(){
    var count = dps.check_user.call()
    console.log(count[7])
    var getData = dps.strahovka_vznos.getData()
    setTimeout(function(){
        eth.sendTransaction({from: eth.defaultAccount, to: dps.address, data: getData, value: count[7]})
    },4000)
}

//оформление ДТП
function DTP(drive_number){
    dps.dtp.sendTransaction(drive_number, {from: eth.defaultAccount})
    var drive = dps.check_drive.call(drive_number)
    var user = dps.check_user.call({from: drive[0]})
    console.log((user[6] * 10 - eth.getBalance(company_adr) + 1000000000000000000)/1000000000000000000)
    if (eth.getBalance(company_adr) < user[6] * 10){
        console.log(88888888)
        var getData = dps.dolg_bank.getData(drive_number)
        personal.unlockAccount(bank_adr, bank_pass)
        console.log(user[6] * 10 - eth.getBalance(company_adr) + 10000000000000000000)
        setTimeout(function(){
            eth.sendTransaction({from: bank_adr, to: dps.address, data: getData, value: user[6] * 10 - eth.getBalance(company_adr) + 1000000000000000000})
            console.log(999999999)
        },4000)
        
    }
    var getData1 = dps.dtp_pay.getData(drive_number)
    personal.unlockAccount(company_adr, company_pass)
    setTimeout(function(){
        eth.sendTransaction({from: company_adr, to: dps.address, data: getData1, value: user[6] * 10})
    },12000)
}

//просмотр истории страховых случаев
function check_dtp(){
    var len = dps.check_lens.call()
    for(i =0; i< len[3]; i++){
        var dtp = dps.check_car.call(i)
        console.log(i, car[0], car[1], car[2]/1000000000000000000, car[3])
    }
}

//просмотр заявлений водителей на создание водительского удостоверения
function check_input_drive(){
    var len = dps.check_lens.call()
    for(i =0; i< len[4]; i++){
        var input_drive = dps.check_input_drive.call(i)
        console.log(i, input_drive)
    }
}

//просмотр заявлений водителей на регистрацию ТС
function check_input_car(){
    var len = dps.check_lens.call()
    for(i =0; i< len[5]; i++){
        var input_car = dps.check_input_car.call(i)
        console.log(i, input_car)
    } 
}

//подтверждение или отклонение заявления на создание ВУ
function drive_add_dps(id_input, sost){
    dps.drive_add_dps.sendTransaction(id_input, sost, {from: eth.defaultAccount})
}

//подтверждение или отклонение заявления на регистрацию ТС
function registr_car_dps(id_input, sost){
    dps.registr_car_dps.sendTransaction(id_input, sost, {from: eth.defaultAccount})
}

//переключение режима работы с приложением
function avto(){
    dps.avto.sendTransaction({from: eth.defaultAccount})
}