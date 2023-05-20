// let user = [
//     {
//         id: "00001",
//         login: "MDK91",
//         password: "12345",
//         userName: "Asor Martin"
//     }
// ];
let payArray = [];
$('editBtn').click(function (){
    let id = $(this).attr("id");
    payArray.forEach(function (item,i){
        if (id === item.id){
            payArray[i].payUser=$('#payEditUser').val();
            payArray[i].payUserId=$('#payEditUserId').val();
            payArray[i].payOrder=$('#payEditOrder').val();
            payArray[i].paySun=$('#payEditSun').val();
            payArray[i].payTarget=$('#payEditTarget').val();
            payArray[i].payType=$('#payEditType').val();
        }
    })
})
function edite(id) {
    payArray.forEach(function (item) {
        if (id == item.id){
         $('#payEditUser').val(item.payUser);
         $('#payEditUserId').val(item.payUserId);
         $('#payEditOrder').val(item.payOrder);
         $('#payEditSun').val(item.paySun);
         $('#payEditTarget').val(item.payTarget);
         $('#payEditType').val(item.payType);
         $('#editBtn').attr("id",item.id)
        }
    })
}
function remove(id){
    payArray.forEach(function (item,i) {
        if (id == item.id){
            payArray.splice(i,1);
        }
    })
    draw()
}
function draw(){
    let list = '';
    payArray.forEach(function (item) {
        list += '<tr>' +
            '<td>'+ item.id +'</td>' +
            '<td>'+ item.payUser +'</td>' +
            '<td>'+ item.payUserId +'</td>' +
            '<td>'+ item.payOrder +'</td>' +
            '<td>'+ item.paySun +'</td>' +
            '<td>'+ item.payTarget +'</td>' +
            '<td><span class="badge badge-success">'+ item.payType +'</span></td>' +
            '<td>' +
            '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal" onclick="edite('+item.id+')">Edit</button>' +
            '<button type="button" class="btn btn-danger" onclick="remove('+item.id+')">Remove</button>' +
            ' </td>' +
            ' </tr>'
    });
    $('#tbody').html(list);
}
$(document).ready(function (){
    let kirishSoni = 0;
    let payId = 0;
    let kassirId = '';
    $('#startModal').modal("show");
    $('#startBtn').click(function (){
        let login = $('#login').val();
        let password = $('#password').val();
        if (login !="" && password!=""){
            let topildi = false;
            user.forEach(function (item){
                if (login == item.login){
                    topildi = true;
                    if (password == item.password){
                        $('#workingBlock').toggleClass('d-none')
                        $('#kassir').html(item.userName);
                        $('#startModal').modal('hide')
                        topildi = true;
                        kassirId = item.id
                    }
                }
            });
            if (topildi){
                if (kirishSoni >= 2){
                    $('#startModal').modal("hide");
                    alert('tizim blocklandi');
                }
                alert('login yoki parol xato!');
                kirishSoni++;
            }
        }else {
            alert("Login va parol qatorlarini to'ldiring")
        }
    })
    $('#addPay').click(function (){
        let payUser = $('#payUser').val();
        let payUserId = $('#payUserId').val();
        let payOrder = $('#payOrder').val();
        let paySun = $('#paySum').val();
        let payType = $('#payType').val();
        let payTarget = $('#payTarget').val();
        payId++;
        payArray.push(
            {
                id: payId,
                userId: kassirId,
                payUser: payUser,
                payUserId: payUserId,
                payOrder:payOrder,
                paySun: paySun,
                payType: payType,
                payTarget: payTarget,
            }
        );
        draw()
    });

});
