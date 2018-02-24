(function(){
    function addPoint(){     
        console.log('Dodano punkt!')  
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

        mole.addEventListener(
            'click',
            function(){
                mole.remove()  //po kliknieciu w kreta usuń go
                addPoint()   
            }
        )

        document.querySelector('body').appendChild(mole) // adding mole to body
    }

makeMole()

})()