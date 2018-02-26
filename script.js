(function(){
    var points
    var time
    var mole
    var gameIntervalId


    function addPoint(){  
        points++   
        displayPoints(points)
    }

    function reduceTime(){
        time--
        displayTime(time)
        if(time === 0){  //jesli czas 0 to konczy gre
            endGame()
        }
    }


    function displayPoints(pointsParam) {    //wyświetla punkty po kliknieciu
        var pointsContainer = document.querySelector('.points')
        pointsContainer.innerText = "Punkty: " + pointsParam
    }


    function displayTime(timeParam) {    //wyświetla czas po kliknieciu
        var timeContainer = document.querySelector('.time')
        timeContainer.innerText = "Czas: " + timeParam
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
                flashBackground() 
            }
        )

        document.querySelector('body').appendChild(mole) // adding mole to body
        return mole // zwracamy nowy obiekt kreta


            
    }


    function endGame(){
        clearInterval(gameIntervalId)
        mole.remove()
        
        document.querySelector('.end-modal .score')
            .innerText = points + ' punktów!'

        document.querySelector('.end-modal')
            .style.display = "block"

        document.querySelector('.end-modal button')
            addEventListener(
                'click',
                function(){
                   window.location = '' //przejście do poprzedniego okna
                }
            )
    }

    function flashBackground(){   //zmiana koloru tla gdy się kliknie na kreta
        var body = document.querySelector('body')
        body.style.backgroundColor = 'grey'
        setTimeout(
            function(){
                body.style.backgroundColor = 'rgb(243, 240, 243)'
            },
            100
        )

    }

function startGame(){
    mole = makeMole()
    gameIntervalId = setInterval(    //kret znika po 1s i pojawia się w nowym miejscu
        function(){
            mole.remove()
            mole = makeMole()
            reduceTime()
        },
        1000
    )
}

function init(){   //inicjalizacja gry
    points = 0
    time = 30
    mole = null

    displayPoints(points)
    displayTime(time)

    document.querySelector('.start-modal button')
        .addEventListener(
            'click',
            function(){
                document.querySelector('.start-modal')
                    .style.display = 'none'
         startGame()
            }
        )

}


init()

})()