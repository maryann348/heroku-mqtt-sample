// // basic functionalities
// var client;

// // var btnPublish = $("#Btn-Publish")


// client = mqtt.connect("test.mosquitto.org", 1883, 60)
// client.on("connect", function() {
//     console.log("connected");
//     $(".Btn_Connect").on('click', function() {
//         $("#Status").text("The device is currently turned On")
//         $("#Status").css("color", "green")
//         var topic = "maryann/device/status";
//         var message = "TurnOn : " + moment().format('MMMM Do YYYY, h:mm:ss a');
//         client.publish(topic, message);
//         console.log("On")
//             // console.log(" " + topic + " " + message);

//     });

//     $(".Btn_disConnect").click(function() {
//         $("#Status").text("The device is currently turned Off")
//         $("#Status").css("color", "red")
//         var topic = "maryann/device/status";
//         var message = "TurnOff : " + moment().format('MMMM Do YYYY, h:mm:ss a');
//         client.publish(topic, message);
//         console.log("Off");
//     })
// })

// basic functionalities
// var client;

// var btnPublish = $("#Btn-Publish")

// $('#Btn_connect').on('click', function() {
//     // connect
//     console.log("connect button clicked..")
// client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
// client.on("connect", function() {
//     console.log("successfully connected");
//         console.log("succ")
//     $("#Status").text("Connecting....")
//     $("#Status").css("color", "yellow")
//     $("#Status").css("font-style", "italic")
//     $("#Status").css("font-weight", "bold")
//     client.on("connect", function() {
//         console.log("succ")
//         $("#Status").text("Connected!!")
//         $("#Status").css("color", "green")
//         $("#Status").css("font-style", "italic")
//         $("#Status").css("font-weight", "bold")



//     $(".Btn_disConnect").click(function() {
//         client.end();
//         $("#Status").text("DisConnected")
//         $("#Status").css("color", "red")
//     })


//     $("#Btn_Pub").click(function() {
//         var topic = $("#topic").val();
//         var message = $("#message").val();
//         if (topic == "" || message == "") {
//             Swal.fire({
//                 type: 'error',
//                 title: 'All Input is Required',
//             })
//         } else {
//             console.log("Published Topic: " + topic + " Message: " + message)
//             client.publish(topic, message);
//             Swal.fire({
//                 type: 'success',
//                 title: 'Publish Successfully!',
//             })
//         }
//     })


//     var marypre = $("#preAnn/temp").val();
//     var amabel = $("#amabel").val();
//     if (marypre == "" && amabel == "") {
//         console.log("unsuccessfully connected")
//     } else {
//         console.log("Subcribed Topic: " + marypre)
//         console.log("Subcribed Topic: " + amabel)
//         client.subscribe({
//             'preAnn/temp': { qos: 0 },
//             'amabel': { qos: 0 },

//         });
//         console.log("subcribe succesfully")

//     }
// });

// $("#Btn_UnSub").click(function() {
//     var topsub = $("#topic-sub").val();
//     if (topsub == "") {
//         Swal.fire({
//             type: 'error',
//             title: 'Topic is Required',
//         })
//     } else {
//         client.unsubscribe(topsub);
//         Swal.fire({
//             type: 'success',
//             title: 'Unsubscribe Successfully',
//         })
//     }
//     $("#Btn_UnSub").removeClass("alert-success")
//     $("#Btn_UnSub").addClass("alert-secondary")
// })
// client.on("message", function(topic, payload) {
//     console.log("Recieved Topic: " + topic + "Payload: " + payload)
//     var row = $("<tr>")
//     $("<td>").text(topic).appendTo($(row))
//     $("<td>").text(payload).appendTo($(row))
//     $("<td>").text(moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo($(row))
//     $("tbody").append($(row))

// })
// })
$(document).ready(function() {
    client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
    client.on("connect", function() {
        // console.log("Successfully connected");
    })
    client.on("message", function(topic, payload) {
        console.log("Received { topic:" + topic + "; payload: " + payload + " }");
        switch (topic) {
            case "alobar/temperature":
                $('#group1').val(payload);
                // console.log("alonzo" + payload)
                break;
            case "amabel":
                $('#group2').val(payload);
                break;
            case "rosedaine":
                $('#group3').val(payload);
                break;
            case "pasores/temperature":
                $('#group4').val(payload);
                break;
            case "sample":
                $('#group5').val(payload);
                break;
            case "renzyclaire/temp":
                $('#group6').val(payload);
                break;
            case "Luz-Ian/temp":
                $('#group7').val(payload);
                break;
            case "louie/cindy/temp":
                $('#group8').val(payload);
                break;
            case "diansin/gabatan/temp":
                $('#group9').val(payload);
                break;
            case "preAnn/temp":
                $('#group10').val(payload);
                break;
            case "MaryAira/temperature":
                $('#group11').val(payload);
                break;
            case "tychu/temp":
                $('#group12').val(payload);
                break;
        }
    })

    client.subscribe({
        'alobar/temperature': { qos: 0 },
        'amabel': { qos: 0 },
        'rosedaine': { qos: 0 },
        'pasores/temperature': { qos: 0 },
        'sample': { qos: 0 },
        'renzyclaire/temp': { qos: 0 },
        'Luz-Ian/temp': { qos: 0 },
        'louie/cindy/temp': { qos: 0 },
        'diansin/gabatan/temp': { qos: 0 },
        'preAnn/temp': { qos: 0 },
        'MaryAira/temperature': { qos: 0 },
        'tychu/temp': { qos: 0 },
    })
})