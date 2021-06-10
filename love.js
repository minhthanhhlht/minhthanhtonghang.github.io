let date = new Date
let day = date.getDate()
let month = date.getMonth()
let leftImg = "https://64.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gifv"
let rightImg = "https://i.pinimg.com/originals/ad/95/b0/ad95b0b5cc8d8ce4467d666c927b6a84.gif"
let title = document.querySelector("h1")
let propose = document.getElementById("propose")
month +=1
let year = date.getFullYear()
let sayNo = document.getElementById("sayNo")
let sayYes = document.getElementById("sayYes")
let body = document.querySelector("body")
body.style.display ="none"



let code = prompt("!!!Nhập vào mã bí mật!!!")



if(code === "yêu Hằng nhiều"){
    body.style.display = "block"
}

let changeTitle = (text) => {
    title.innerHTML = `<i class="fal fa-kiss-wink-heart"></i> ${text}  <i class="fal fa-kiss-wink-heart"></i>`
}

let leftImage = (link) => {
    Swal.fire({
        title: 'Cái đẹp không thể nào ghi hình, mà chỉ tồn tại trong đôi mắt kẻ si tình <3',
        text: `Ngày tình yêu bắt đầu: ${day} tháng ${month} năm ${year}` ,
        imageUrl: './imagines/test2.png',
        // imageWidth: 162.5,
        // imageHeight: 100,
        imageAlt: 'Custom image',
        background: ' rgb(255, 158, 158)',
        backdrop: `
          rgba(241, 237, 237,0.4)
           url(${link})
          left top
           no-repeat
        `
    })
}

let rightImage = (link) => {
    Swal.fire({
        title: 'Vậy là, em làm vợ anh nhé!' ,
        text: `Ngày rước nàng về dinh: ${day} tháng ${month} năm ${year}` ,
        imageUrl: './imagines/test1.png',
        // imageWidth: 162.5,
        imageHeight: 300,
        imageAlt: 'Custom image',
        background: ' rgb(255, 144, 144)',
        backdrop: `
          rgba(241, 237, 237,0.4)
           url(${link})
          right top
           no-repeat
        `
    })
}

sayYes.addEventListener("click", () => {
    leftImage(leftImg)
})

sayNo.addEventListener("click", () => {
    rightImage(rightImg)
})

