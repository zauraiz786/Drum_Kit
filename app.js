const btn = document.querySelectorAll('.btn');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',function(){
        main(i)
    })
}
document.addEventListener('keydown',function(event){
    const keys = 'wasdjkl';
    const pressedKeys = event.key.toLowerCase();
    if(!keys.includes(pressedKeys)) return;
    main(keys.indexOf(pressedKeys))
})
function main(i){
    let audio = new Audio("./sounds/sound-"+(i + 1)+".mp3")
    audio.currentTime = 0;
    audio.play()
    btn[i].classList.add('animation');
    setTimeout(() => {
        btn[i].classList.remove('animation');
    }, 500);
}