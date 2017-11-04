/* created bY MOHSSINE_ABOUTAJ 1438/2017 */
/* Scripts for Quran playlist and Quran Tabke */
// Use strict mode 
"use strict";
var control = document.getElementById('control'),
    playNow = document.getElementById('playNow'),
    quranList = ["alfatiha 1", "alfatiha 2", "alfatiha 3", "114"],
    soraName = ["الفاتحة", "الفاتحة", "الفاتحة", "الناس"],
    alqari2 = ["العيون الكوشي", "عبد الياسط عبد الصمد", "ماهر المعيقلي", "ناصر القطامي"],
    quranFolder = "quran/",
    ext = ".mp3",
    current = 0,
    i;

(function addQuranListToTable() {
    var table = document.querySelector('table');

    for (i = 0; i < quranList.length; i++) {
        var row = document.createElement('tr'),
            cell1 = document.createElement('td'),
            cell2 = document.createElement('td'),
            cell3 = document.createElement('td');

        cell1.textContent = soraName[i];
        cell2.textContent = alqari2[i];
        cell3.innerHTML = "<audio controls src='" + quranFolder + quranList[i] + ext + "'></audio>";

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        table.appendChild(row);
    }
})();

// about sorah is playing
function sorahInfo(index){
    document.querySelector('.sorahInfo').innerHTML = 
        "<table class='no-border-all'>" +
        "<tr><td>القارئ الشيخ :</td><td>" + alqari2[index] + "</td>" +
        "<tr><td>سورة :</td><td>" + soraName[index] + "</td>" +
        "<tr><td>المدة :</td><td>" + Math.floor(playNow.duration / 60) + ":" + Math.round(playNow.duration % 60) + "</td>"
        + "</table>";
}

// play and pause sorah playing
control.onclick = function () {
    control.classList.toggle('fa-play');
    control.classList.toggle('fa-pause');

    if (control.classList == 'fa fa-play') {
        playNow.pause();
    } else {
        playNow.play();
    }
};

document.querySelector('.fa-random').onclick = function(){
    var x = Math.floor(Math.random() * quranList.length);

    playNow.src = quranFolder + quranList[x] + ext;
    playNow.play();
    sorahInfo(x);
    forward(x);
    backward(x);
    control.classList.remove('fa-play');
    control.classList.add('fa-pause');
};

// replay the sorah is playing
document.querySelector('.fa-retweet').onclick = function(){
    if(playNow.hasAttribute('loop')){
        this.style.color = '#b19393';
        playNow.removeAttribute('loop');
    } else {
        this.style.color = '#e6dada';
        playNow.setAttribute('loop','loop');
    }
};

// Forward function
function forward(current){
    document.querySelector('.fa-fast-forward').onclick = function(){
        if(current + 1 == quranList.length ){ current = -1 }
        playNow.src = quranFolder + quranList[current += 1] + ext;
        playNow.play();
        sorahInfo(current);
    };
}

// Backward function
function backward(current){
    document.querySelector('.fa-fast-backward').onclick = function(){
        if(current - 1 < 0 ){ current = quranList.length }
        playNow.src = quranFolder + quranList[current -= 1] + ext;
        playNow.play();
        sorahInfo(current);
    };
}


window.onload = setTimeout(function playAuto() {
    playNow.src = quranFolder + quranList[current] + ext;
    playNow.play();
    control.classList.remove('fa-play');
    control.classList.add('fa-pause');
    setTimeout(sorahInfo(current),3333);
    forward(current);
    backward(current);

    // Set the 'ended' event here, so it will run playNext() function each time a surah ended
    // and it will play the next surah.
    playNow.addEventListener('ended', playNext);

}, 500);

// Play the next surah when the current one ends.
function playNext(){
    current++;
    // If the playlist is all played, then start from the beginning! :)
    if (current >= quranList.length){
        current = 0;
    }
    
    playNow.src = quranFolder + quranList[current] + ext;
    playNow.play();
    sorahInfo(current);
    forward(current);
    backward(current);
}