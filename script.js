(function(){
    var points
    var time
    var mole

    function addPoint(){  
        points++   
        console.log('Dodano punkt!', points) 
        displayPoints(points)
    }

    function displayPoints(pointsParam) {    //wyświetla punkty po kliknieciu
        var pointsContainer = document.querySelector('.points')
        pointsContainer.innerText = pointsParam
    }


    function displayTime(timeParam) {    //wyświetla czas po kliknieciu
        var timeContainer = document.querySelector('.time')
        timeContainer.innerText = timeParam
    }

    function makeMole(){

        var molePosX = Math.round(
            Math.random() * (window.innerWidth - window.innerHeight / 10) //1/10 viewport width i 1/10 vewport height
        )
        var molePosY = Math.round(
            Math.random() * (window.innerHeight - window.innerHeight / 10)
        )

        var mole = document.createElement('div')

        mole.classList.add('mole') //dodano klase css od mole

        mole.style.left = molePosX + 'px'
        mole.style.top = molePosY + 'px'

        mole.addEventListener( //nasluchiwacz kliknięcia
            'click',
            function(){
                mole.remove()  //po kliknieciu w kreta usuń go
                addPoint()   
            }
        )

        document.querySelector('body').appendChild(mole) // adding mole to body
        return mole // zwracamy nowy obiekt kreta

    }


function init(){   //inicjalizacja gry
    points = 0
    time = 10
    mole = makeMole()

    displayPoints(points)
    displayTime(time)
}


init()

})()