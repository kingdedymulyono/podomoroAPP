const timeDiv = document.getElementById("time")
const timeInput = document.getElementById("timeInput")

const buttons = document.querySelectorAll(".modeBtn")
const modeBox = document.querySelector(".modeBox")
let startMinute
let time
let isPlay = true

const start = () => {
    if (timeInput.value >= 60) {
        alert("Tidak boleh lebih dari 60 menit")
    } else {
        document.querySelector('.play').classList.remove("bi-play-fill")
        document.querySelector('.play').classList.add("bi-pause-fill")
        startMinute = 25
        time = startMinute * 60
        timeDiv.innerHTML = `Wait...`
        setInterval(() => {
            if (isPlay) {
                let minute = Number(Math.floor(time / 60))
                let seconds = Number(time % 60)
                console.log(minute.toString().length)
                if (minute.toString().length < 2) {
                    minute = '0' + minute
                }
                if (seconds.toString().length < 2) {
                    seconds = '0' + seconds
                }
                timeDiv.innerHTML = `${minute} : ${seconds}`
                time--
            }
        }, 1000);
    }
}
const repeat = () => {
    isPlay = false
    setTimeout(() => {
        timeDiv.innerHTML = `Reset now`
    }, 1000);
    timeDiv.innerHTML = `00:00`
}

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        buttons.forEach((b)=>{b.classList.remove("btn-primary")})
        console.info(e.target.className)
        if (e.target.className.includes("rest")) {
            document.querySelector(".work").classList.remove("text-white")
            document.querySelector(".work").classList.add("text-black")
            e.target.classList.add("text-white")
            modeBox.style.right='-50%'
            repeat()
        } else if (e.target.className.includes("work")){
            document.querySelector(".rest").classList.remove("text-white")
            document.querySelector(".rest").classList.add("text-black")
            modeBox.style.right='0'
            e.target.classList.add("text-white")
            repeat()
        }
    })
})


