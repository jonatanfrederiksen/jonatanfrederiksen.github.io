// const mainBg = document.querySelector('body').style
// const keypadBg = document.querySelector('body').style
// const screenBg = document.querySelector('body').style
// const keyBgBlue = document.querySelector('body').style
// const keyShadow = document.querySelector('body').style
// const keyBgRed = document.querySelector('body').style
// const keyShadowToggle = document.querySelector('body').style
// const keyBgMain = document.querySelector('body').style
// const keyShadowMain = document.querySelector('body').style
// const textBlue = document.querySelector('body').style
// const textWhite = document.querySelector('body').style



const theme = (themeNo) => {
    switch (themeNo) {
        case 1:
            console.log('this is theme 1')
            var mainBg = 'hsl(222, 26%, 31%)';
            var keypadBg = 'hsl(223, 31%, 20%)';
            var screenBg = 'hsl(224, 36%, 15%)';

            var keyBgBlue = 'hsl(225, 21%, 49%)';
            var keyShadowBlue = '0px 5px 0px 0px hsl(224, 28%, 35%)';
            var keyBgRed = 'hsl(6, 63%, 50%)';
            var keyShadowToggle = '0px 5px 0px 0px hsl(6, 70%, 34%)';
            var keyBgMain = 'hsl(30, 25%, 89%)';
            var keyShadowMain = '0px 5px 0px 0px hsl(28, 16%, 65%)';

            var textBlue = 'hsl(221, 14%, 31%)';
            var textWhite = 'hsl(0, 0%, 100%)';
            var redBtnTxt = 'hsl(0, 0%, 100%)';
            var headerColor = 'hsl(0, 0%, 100%)';
            document.querySelector('#themeOne').style.backgroundColor = keyBgRed;
            document.querySelector('#themeTwo').style.backgroundColor = "";
            document.querySelector('#themeThree').style.backgroundColor = "";
            break;
        case 2:
            console.log('this is theme 2')
            var mainBg = 'hsl(0, 0%, 90%)';
            var keypadBg = 'hsl(0, 5%, 81%)';
            var screenBg = 'hsl(0, 0%, 93%)';

            var keyBgBlue = 'hsl(185, 42%, 37%)';
            var keyShadowBlue = '0px 5px 0px 0px hsl(185, 58%, 25%)';
            var keyBgRed = 'hsl(25, 98%, 40%)';
            var keyShadowToggle = '0px 5px 0px 0px hsl(25, 99%, 27%)';
            var keyBgMain = 'hsl(45, 7%, 89%)';
            var keyShadowMain = '0px 5px 0px 0px hsl(35, 11%, 61%)';

            var textBlue = 'hsl(60, 10%, 19%)';
            var textWhite = 'hsl(0, 0%, 100%)';
            var redBtnTxt = 'hsl(0, 0%, 100%)';
            var headerColor = 'hsl(60, 10%, 19%)';
            document.querySelector('#themeOne').style.backgroundColor = "";
            document.querySelector('#themeTwo').style.backgroundColor = keyBgRed;
            document.querySelector('#themeThree').style.backgroundColor = "";
            break;
        case 3:
            console.log('this is theme 3')
            var mainBg = 'hsl(268, 75%, 9%)';
            var keypadBg = 'hsl(268, 71%, 12%)';
            var screenBg = 'hsl(268, 71%, 12%)';

            var keyBgBlue = 'hsl(281, 89%, 26%)';
            var keyShadowBlue = '0px 5px 0px 0px hsl(285, 91%, 52%)';
            var keyBgRed = 'hsl(176, 100%, 44%)';
            var keyShadowToggle = '0px 5px 0px 0px hsl(177, 92%, 70%)';
            var keyBgMain = 'hsl(268, 47%, 21%)';
            var keyShadowMain = '0px 5px 0px 0px hsl(290, 70%, 36%)';

            var redBtnTxt = 'hsl(198, 20%, 13%)';
            var textBlue = 'hsl(52, 100%, 62%)';
            var textWhite = 'hsl(0, 0, 100%)';
            var headerColor = 'hsl(52, 100%, 62%)';
            document.querySelector('#themeOne').style.backgroundColor = "";
            document.querySelector('#themeTwo').style.backgroundColor = "";
            document.querySelector('#themeThree').style.backgroundColor = keyBgRed;
            break;
    }

    document.querySelector('body').style.backgroundColor = mainBg;
    document.querySelector('header').style.color = headerColor;
    document.querySelector('#display').style.backgroundColor = screenBg;
    document.querySelector('#display').style.color = headerColor;
    document.querySelector('#buttons').style.backgroundColor = keypadBg;
    document.querySelector('#themePicker').style.backgroundColor = keypadBg;
    let whites = document.querySelectorAll('.white')
    for (white of whites) {
        white.style.backgroundColor = keyBgMain;
        white.style.boxShadow = keyShadowMain;
        white.style.color = textBlue;
    }
        let blues = document.querySelectorAll('.blue')
        for (blue of blues) {
            blue.style.backgroundColor = keyBgBlue;
        blue.style.boxShadow = keyShadowBlue;
        blue.style.color = textWhite;
    }
        let reds = document.querySelector('.red')
        reds.style.backgroundColor = keyBgRed;
        reds.style.boxShadow = keyShadowToggle;
    reds.style.color = redBtnTxt;
    
}

    const theme2 = () => {
    let mainBg = 'hsl(222, 26%, 91%)';
    let keypadBg = 'hsl(223, 31%, 80%)';
    let screenBg = 'hsl(224, 36%, 15%)';
    let keyBg = 'hsl(225, 21%, 49%)';
    let keyShadow = 'hsl(224, 28%, 35%)';
    let keyBgRed = 'hsl(6, 63%, 50%)';
    let keyShadowToggle = 'hsl(6, 70%, 34%)';
    let keyBgMain = 'hsl(30, 25%, 89%)';
    let keyShadowMain = 'hsl(28, 16%, 65%)';
    let textBlue = 'hsl(221, 14%, 31%)';
    let textWhite = 'hsl(0, 0, 100%)';

    document.querySelector('body').style.backgroundColor = mainBg;
    document.querySelector('h1').style.color = textWhite;
    document.querySelector('#display').style.backgroundColor = screenBg;
    document.querySelector('#display').style.color = textWhite;
    document.querySelector('#buttons').style.backgroundColor = keypadBg;
    let whites = document.querySelectorAll('.white')
    for (white of whites) {
        white.style.backgroundColor = keyBgMain;
        white.style.boxShadow = '#FFFFFF';

    }


}

    
const themeOneBtn = document.querySelector('#themeOne')
const themeTwoBtn = document.querySelector('#themeTwo')
const themeThreeBtn = document.querySelector('#themeThree')

    themeOneBtn.addEventListener('click', function() { theme(1)})
themeTwoBtn.addEventListener('click', function() { theme(2)})
themeThreeBtn.addEventListener('click', function(){ theme(3)})



theme(1); 

