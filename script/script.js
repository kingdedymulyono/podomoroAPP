const timeDiv = document.getElementById("time")
const timeInput = document.getElementById("timeInput")

const buttons = document.querySelectorAll(".modeBtn")
const modeBox = document.querySelector(".modeBox")
const playButton = document.querySelector(".play")

let startMinute
let time
let timer
let isPlay = true
let isWork = true

playButton.addEventListener("click", () => {
    if (isWork) {
        time=0
        startWork()
    } else {
        time=0
        startRest()
    }
})

const workClear = () => {
    Swal.fire({
        title: "Time up",
        text: "Your work time has completed",
        icon: "success"
    });
}
const restClear = () => {
    Swal.fire({
        title: "Time up",
        text: "Your rest time has completed",
        icon: "warning"
    });
}

const startWork = () => {
    if (!isPlay) { // Jika timer dalam keadaan berhenti, maka kita akan memulainya
        // Ubah tampilan tombol menjadi pause
        if (time > 1) {
            playButton.classList.remove("bi-play-fill");
            playButton.classList.add("bi-pause-fill");
            // timeDiv.innerHTML = '<i class="bi bi-stopwatch"></i>'
            // Mulai interval dan simpan ID-nya ke variabel global
            console.log("interval sdg berjalan 1")
            timer = setInterval(() => {
                let minute = Math.floor(time / 60);
                let seconds = time % 60;

                // Tambahkan "0" di depan jika angka kurang dari 10
                minute = minute.toString().padStart(2, '0');
                seconds = seconds.toString().padStart(2, '0');

                timeDiv.innerHTML = `${minute} : ${seconds}`;
                time--;

                // Opsional: Hentikan timer saat hitungan selesai (jika waktu mencapai 0)
                if (time < 0) {
                    clearInterval(timer);
                    isPlay = false;
                    // Atur ulang tombol dan tampilan
                    playButton.classList.remove("bi-pause-fill");
                    playButton.classList.add("bi-play-fill");
                    timeDiv.innerHTML = "00 : 00";
                    workClear()
                    isWork = false
                }
            }, 1000);

            isPlay = true; // Set status menjadi "berjalan"    
        } else {

            startMinute = 25
            // startMinute = 1/6
            time = startMinute * 60
            playButton.classList.remove("bi-play-fill");
            playButton.classList.add("bi-pause-fill");
            timeDiv.innerHTML = '<i class="bi bi-stopwatch"></i>'
            // Mulai interval dan simpan ID-nya ke variabel global
            console.log("interval sdg berjalan 2")
            timer = setInterval(() => {
                let minute = Math.floor(time / 60);
                let seconds = time % 60;

                // Tambahkan "0" di depan jika angka kurang dari 10
                minute = minute.toString().padStart(2, '0');
                seconds = seconds.toString().padStart(2, '0');

                timeDiv.innerHTML = `${minute} : ${seconds}`;
                time--;

                // Opsional: Hentikan timer saat hitungan selesai (jika waktu mencapai 0)
                if (time < 0) {
                    clearInterval(timer);
                    isPlay = false;
                    // Atur ulang tombol dan tampilan
                    playButton.classList.remove("bi-pause-fill");
                    playButton.classList.add("bi-play-fill");
                    timeDiv.innerHTML = "00 : 00";
                    workClear()
                }
            }, 1000);

            isPlay = true; // Set status menjadi "berjalan"
        }
    } else { // Jika timer sedang berjalan, maka kita akan menghentikannya
        // Ubah tampilan tombol menjadi play
        playButton.classList.remove("bi-pause-fill");
        playButton.classList.add("bi-play-fill");
        // Hentikan interval
        clearInterval(timer);
        isPlay = false; // Set status menjadi "berhenti"
    }
}
const startRest = () => {
    {
        if (!isPlay) { // Jika timer dalam keadaan berhenti, maka kita akan memulainya
            // Ubah tampilan tombol menjadi pause
            startMinute = 5
            time = startMinute * 60
            playButton.classList.remove("bi-play-fill");
            playButton.classList.add("bi-pause-fill");
            // timeDiv.innerHTML = '<i class="bi bi-stopwatch"></i>'
            // Mulai interval dan simpan ID-nya ke variabel global
            console.log("interval sdg berjalan")
            timer = setInterval(() => {
                let minute = Math.floor(time / 60);
                let seconds = time % 60;

                // Tambahkan "0" di depan jika angka kurang dari 10
                minute = minute.toString().padStart(2, '0');
                seconds = seconds.toString().padStart(2, '0');

                timeDiv.innerHTML = `${minute} : ${seconds}`;
                time--;

                // Opsional: Hentikan timer saat hitungan selesai (jika waktu mencapai 0)
                if (time < 0) {
                    clearInterval(timer);
                    isPlay = false;
                    // Atur ulang tombol dan tampilan
                    playButton.classList.remove("bi-pause-fill");
                    playButton.classList.add("bi-play-fill");
                    timeDiv.innerHTML = "00 : 00";
                    restClear()
                }
            }, 1000);

            isPlay = true; // Set status menjadi "berjalan"

        } else { // Jika timer sedang berjalan, maka kita akan menghentikannya
            // Ubah tampilan tombol menjadi play
            playButton.classList.remove("bi-pause-fill");
            playButton.classList.add("bi-play-fill");
            clearInterval(timer);
            isPlay = false; // Set status menjadi "berhenti"
        }
    }
}

const repeat = () => {
    isPlay = false
    time=0
    clearInterval(timer)
    if (isWork) {
        startWork()
    } else {
        startRest()
    }
}

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        buttons.forEach((b) => { b.classList.remove("btn-primary") })
        playButton.classList.remove("bi-pause-fill");
        playButton.classList.add("bi-play-fill");
        if (e.target.className.includes("rest")) {
            console.info(e.target.className)
            document.querySelector(".work").classList.remove("text-white")
            document.querySelector(".work").classList.add("text-black")
            e.target.classList.add("text-white")
            modeBox.style.right = '-50%'
            clearInterval(timer)
            timeDiv.innerHTML = '00:00'
            isWork = false
        } else if (e.target.className.includes("work")) {
            document.querySelector(".rest").classList.remove("text-white")
            document.querySelector(".rest").classList.add("text-black")
            modeBox.style.right = '0'
            e.target.classList.add("text-white")
            clearInterval(timer);
            timeDiv.innerHTML = '00:00'
            isWork = true
        }
    })
})


