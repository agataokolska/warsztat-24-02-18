(function(){

    function makeMole(){

        var molePosX = 100
        var molePosY = 100
        var mole = document.createElement('div')

        mole.classList.add('mole') //dodano klase css od mole

        mole.style.left = molePosX + 'px'
        mole.style.top = molePosY + 'px'

        document.querySelector('body').appendChild(mole)
    }

makeMole()

})()