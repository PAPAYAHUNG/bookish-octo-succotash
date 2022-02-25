

let aTabs = document.querySelectorAll(".header_btn");
let shopping = document.querySelector('.shopping')
let vehicle = document.querySelector('.vehicle')
let paneList = document.querySelectorAll('.pane-header')
// console.log(aTabs)
let dataId = "";
// aTabs.forEach(function (item) {
//     // console.log(item);
//     item.addEventListener("click", function (e) {
//         let indexID = e.target.getAttribute("data-id");
//         //begin open web
//         if (dataId === "") {
//             e.target.classList.add("active");
//             dataId = indexID;
//             console.log(dataId);
//             if (indexID === "header_btn1") {
//                 document.querySelector(".vehicle").classList.add("is_shown");
//             } else {
//                 document.querySelector(".shopping").classList.add("is_shown");

//             }

//         }
//         else {
//             //when click on tab a
//             if (dataId === indexID) {

//                 //if click same tab a
//                 e.target.classList.remove("active");
//                 if (indexID === "header_btn1") {
//                     console.log('dataIndex la ' + indexID);
//                     console.log('dataID la ' + dataId);

//                     if (vehicle.classList.contains("is_shown")) {
//                         vehicle.classList.remove("is_shown");
//                     } else {
//                         shopping.classList.remove("is_shown");
//                         vehicle.classList.add("is_shown");
//                     }

//                 }
//                 if (indexID === "header_btn2") {
//                     console.log('dataID la ' + dataId);

//                     if (shopping.classList.contains("is_shown")) {
//                         shopping.classList.remove("is_shown");
//                     } else {
//                         vehicle.classList.remove("is_shown");
//                         shopping.classList.add("is_shown");

//                     }
//                 }
//                 dataId = indexID;
//             }
//             else {
//                 // $('.header_btn').removeClass('active')
//                 //Click on differnce tab
//                 console.log('dataIndex la ' + indexID);
//                 console.log('dataID la ' + dataId);

//                 aTabs.forEach(function (item) {
//                     item.classList.remove('active')
//                 })
//                 e.target.classList.add("active");

//                 if (indexID === "header_btn1") {
//                     console.log('dataID la ' + dataId);

//                     if (vehicle.classList.contains("is_shown")) {
//                         vehicle.classList.remove("is_shown");
//                         shopping.classList.remove("is_shown");
//                     } else {
//                         shopping.classList.remove("is_shown");
//                         vehicle.classList.add("is_shown");
//                     }
//                 }
//                 if (indexID === "header_btn2") {
//                     console.log('dataIndex la ' + indexID);
//                     console.log('dataID la ' + dataId);

//                     if (shopping.classList.contains("is_shown")) {
//                         vehicle.classList.remove("is_shown");
//                         shopping.classList.remove("is_shown");
//                     } else {
//                         console.log(1)
//                         vehicle.classList.remove("is_shown");
//                         shopping.classList.add("is_shown");

//                     }
//                 }
//                 dataId = indexID;
//             }
//         }
//     }
//     );
// });

aTabs.forEach(function (item) {
    item.addEventListener('click', function (e) {
        let dataIndex = e.target.getAttribute('data-id')
        console.log(dataIndex)

        //when 1st login
        if (dataId === "") {
            //for tab a color
            e.target.classList.add('active')
            paneList.forEach(function (pane) {
                // console.log(pane)
                //for pane tab
                let idPane = pane.getAttribute('data-index')
                if (idPane === dataIndex) {
                    console.log(idPane)
                    pane.classList.add('is_shown')
                }

            })
            dataId = dataIndex
        }
        else {
            //If click same tab a==>Remove all tab a if being shown, add if not yet shown
            if (dataId === dataIndex) {
                console.log(dataIndex)
                console.log(dataId)
                if (e.target.classList.contains('active')) {
                    e.target.classList.remove('active')
                    paneList.forEach(function (pane) {
                        let idPane = pane.getAttribute('data-index')
                        // pane.classList.remove('is_shown')
                        let countShow = ""
                        if (idPane === dataIndex) {
                            console.log(idPane)
                            console.log(pane.classList.contains("is_shown"))

                            if (pane.classList.contains('is_shown')) {
                                // pane.classList.add('animate__animated', 'animate__backOutUp')
                                // setTimeout(function(){
                                //     pane.classList.remove('is_shown')
                                // },300)
                                    pane.classList.remove('is_shown')
                                
                                console.log(pane.classList.contains("is_shown"))

                            }
                            else {
                                console.log(idPane)
                                pane.classList.add('is_shown')
                                console.log(pane.classList.contains("is_shown"))


                            }
                        }

                    })
                    dataId = dataIndex

                }
                else {
                    e.target.classList.add('active','animate__animated', 'animate__pulse' )
                    paneList.forEach(function (pane) {
                        let idPane = pane.getAttribute('data-index')
                        if (idPane === dataIndex) {
                            console.log(idPane)
                            console.log(pane.classList.contains("is_shown"))
                            if (pane.classList.contains('is_shown')) {
                                pane.classList.remove('is_shown')
                                console.log(pane.classList.contains("is_shown"))
                            }
                            else {
                                console.log(idPane)
                                // pane.classList.add('is_shown')
                                pane.classList.add('is_shown', 'animate__animated', 'animate__pulse')
                                console.log(pane.classList.contains("is_shown"))
                            }

                        }
                    })
                    dataId = dataIndex
                }
            }
            //If click diff tab a==>Remove the old tab & add for clicked tab

            else {
                console.log(dataIndex)
                console.log(dataId)
                $('.header_btn').removeClass('active')
                e.target.classList.add('active','animate__animated', 'animate__pulse' )

                paneList.forEach(function (pane) {
                    let idPane = pane.getAttribute('data-index')
                    pane.classList.remove('is_shown')
                    if (idPane === dataIndex) {
                        console.log(idPane)
                        pane.classList.add('is_shown')
                    }
                })


                dataId = dataIndex

            }
        }
    })
})

//--------------------------Button of Category -----------------
// let btnShown = document.querySelectorAll('.btn-plus')

// btnShown.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         console.log(e.currentTarget.parentElement)
//         // e.target.classList.remove('d-none')
//     })
// })

let btnShown = $('.btn-plus')
let ulList = $('.item-list > ul')
let btnOff = $('.btn-minus')
console.log(btnOff)
// console.log(ulList)
btnShown.click(function(){
    
    // ulList.addClass('d-none')
    console.log($(this).parent().siblings())
    $(this).toggleClass('d-none')
    $(this).siblings('.btn-minus').removeClass('d-none')
    $(this).parent().siblings().toggleClass('d-none')
    // console.log($(this).siblings())
    
})
btnOff.click(function(){
    $(this).addClass('d-none')
    $(this).siblings('.btn-plus').removeClass('d-none')
    $(this).parent().siblings().addClass('d-none')
})
