const elBody = document.querySelector('body');
const elWrapper = document.createElement('div');
const elBox = document.createElement('div');
const elTitle = document.createElement('h1');
const elText = document.createElement('p');
const elWrap = document.createElement('div');
const elTitleH3 = document.createElement('h3');
const elLink = document.createElement('a');

elBody.append(elWrapper);
elWrapper.append(elBox, elWrap);
elBox.append(elTitle, elText);
elWrap.append(elTitleH3, elLink);

console.log(elBody, elBox, elTitle, elText, elWrapper);

// ============================= BODY START ============================= //

elBody.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: sans-serif;
`

// ============================= BODY END ============================= //

// ============================= WRAPPER START ============================= //

elWrapper.style.cssText = `
    background-image: url("./assets/svg/Twitter.svg");
    background-repeat: no-repeat;
    background-position-y: 12px;
    border-radius: 10px;
    background-color: #4CB9FC;
`

// ============================= WRAPPER END ============================= //

// ============================= BOX START ============================= //

elBox.style.cssText = `
    padding: 106px 45px 58px 25px;
`

// ============================= BOX END ============================= //

// ============================= TITLE START ============================= //

elTitle.textContent = 'My 2019 goal is the same goal as every year, to get drafted to the NBA';
elTitle.style.cssText = `
    margin: 0;
    width: 237px;
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;
    margin-bottom: 45px;
`

// ============================= TITLE END ============================= //

// ============================= TEXT START ============================= //

elText.textContent = 'Jan 1, 2019';
elText.style.cssText = `
    margin: 0;
    color: #C5E4FC;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
`

// ============================= TEXT END ============================= //

// ============================= WRAP START ============================= //

elWrap.style.cssText = `
    width: 258px;
    padding: 0px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #A2D2FC;
`

// ============================= WRAP END ============================= //

// ============================= TITLE-H3 START ============================= //

elTitleH3.textContent = 'Twitter';
elTitleH3.style.cssText = `
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`

// ============================= TITLE-H3 END ============================= //

// ============================= LINK START ============================= //

elLink.textContent = '@tonigemayel';
elLink.style.cssText = `
    color: #C5E4FC;
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
`

// ============================= LINK END ============================= //